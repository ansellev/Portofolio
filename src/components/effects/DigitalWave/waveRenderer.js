import { COLOR_STEPS, WAVE_PARAMS, WAVE_TERMS } from './waveConfig'

const SPRITE_SIZE = 64

const mix = (a, b, t) => a.map((value, i) => Math.round(value + (b[i] - value) * t))

/** Satu sprite titik lembut per langkah warna palet (dibuat sekali, dipakai ulang tiap frame). */
export function createSprites(palette) {
  return Array.from({ length: COLOR_STEPS }, (_, i) => {
    const [r, g, b] = mix(palette.from, palette.to, i / (COLOR_STEPS - 1))
    const canvas = document.createElement('canvas')
    canvas.width = canvas.height = SPRITE_SIZE
    const ctx = canvas.getContext('2d')
    const half = SPRITE_SIZE / 2
    const gradient = ctx.createRadialGradient(half, half, 0, half, half, half)
    gradient.addColorStop(0, `rgba(${r},${g},${b},1)`)
    gradient.addColorStop(0.45, `rgba(${r},${g},${b},0.95)`)
    gradient.addColorStop(1, `rgba(${r},${g},${b},0)`)
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, SPRITE_SIZE, SPRITE_SIZE)
    return canvas
  })
}

// Objek sementara yang dipakai ulang agar tidak membuat sampah memori di setiap titik.
const surface = { h: 0, du: 0, dv: 0 }

/** Tinggi permukaan dan kemiringannya di titik (u, v) pada waktu t. */
function sampleSurface(u, v, t) {
  let h = 0
  let du = 0
  let dv = 0
  for (const term of WAVE_TERMS) {
    const phase = term.ku * u + term.kv * v - term.w * t + term.p
    h += term.a * Math.sin(phase)
    const slope = term.a * Math.cos(phase)
    du += slope * term.ku
    dv += slope * term.kv
  }
  surface.h = h
  surface.du = du
  surface.dv = dv
}

/**
 * Menggambar satu frame gelombang: lembaran titik 3D berperspektif dengan
 * depth of field, kabut, dan highlight di tepi lipatan.
 * Gelombang merambat ke arah +u, yaitu kiri ke kanan di layar.
 */
export function renderWave(ctx, sprites, w, h, t, P = WAVE_PARAMS) {
  ctx.clearRect(0, 0, w, h)
  const focal = 0.92 * Math.max(w, h * 2.0)
  const quality = P.quality
  const cols = Math.round(Math.min(P.maxCols, Math.max(80, w / P.colDiv)) * quality)
  const rows = Math.round(Math.min(56, Math.max(34, h / 9)) * Math.sqrt(quality))
  const cosYaw = Math.cos(P.yaw)
  const sinYaw = Math.sin(P.yaw)
  const horizon = P.hy * h

  for (let j = rows - 1; j >= 0; j--) {
    const v = (j / (rows - 1)) * P.V
    const vn = v / P.V

    for (let i = 0; i < cols; i++) {
      const u = -P.U + (i / (cols - 1)) * 2 * P.U

      sampleSurface(u, v, t)
      const curl = P.curl * vn * vn * vn
      const slopeV = P.amp * surface.dv + (3 * P.curl * vn * vn) / P.V
      const slopeU = P.amp * surface.du + P.rise

      // Posisi dunia -> layar (perspektif)
      const X = P.X0 + u * cosYaw - v * sinYaw
      const Z = P.Z0 + u * sinYaw + v * cosYaw
      const Y = P.amp * surface.h + curl + P.rise * u
      if (Z < 0.4) continue

      const sx = w / 2 + (X * focal) / Z
      const sy = horizon + ((P.camH - Y) * focal) / Z
      if (sx < -30 || sx > w + 30 || sy < -30 || sy > h + 30) continue

      // Normal permukaan dan pencahayaan
      let nx = -(slopeU * cosYaw - slopeV * sinYaw)
      let nz = -(slopeU * sinYaw + slopeV * cosYaw)
      const normalLength = Math.hypot(nx, 1, nz)
      nx /= normalLength
      const ny = 1 / normalLength
      nz /= normalLength
      const dx = -X
      const dy = P.camH - Y
      const dz = -Z
      const viewLength = Math.hypot(dx, dy, dz)
      const facing = Math.abs((nx * dx + ny * dy + nz * dz) / viewLength)
      const rim = Math.pow(1 - facing, 2)
      const lambert = Math.max(0, nx * -0.4 + ny * 0.7 + nz * -0.6)
      const brightness = Math.min(1.3, P.base + 0.55 * lambert + 1.0 * rim)

      // Ukuran titik, depth of field, dan kabut
      const radius = (P.r0 * focal) / Z
      const blur = Math.abs(1 / Z - 1 / P.focus) * focal * P.aperture
      const blurredRadius = Math.sqrt(radius * radius + blur * blur)
      const fog = Math.max(0, 1 - Math.max(0, Z - P.fogStart) / P.fogLen)
      const alpha = brightness * Math.pow(radius / blurredRadius, 2) * fog * P.intensity
      if (alpha < 0.02) continue

      const step = Math.max(0, Math.min(COLOR_STEPS - 1, Math.round((sx / w) * (COLOR_STEPS - 1))))
      const size = Math.max(1.5, blurredRadius * 2.5)
      ctx.globalAlpha = Math.min(1, alpha * 1.15)
      ctx.drawImage(sprites[step], sx - size / 2, sy - size / 2, size, size)

      // Halo lembut di titik-titik tepi lipatan
      if (rim > 0.45 && Z > 4) {
        const halo = size * 3.2
        ctx.globalAlpha = Math.min(0.2, (rim - 0.45) * 0.4 * fog) * P.intensity
        ctx.drawImage(sprites[step], sx - halo / 2, sy - halo / 2, halo, halo)
      }
    }
  }
  ctx.globalAlpha = 1
}
