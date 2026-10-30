import { CONTOUR_PARAMS } from './contourConfig'

/**
 * Menggambar satu frame: deretan garis yang sejajar tetapi dilengkungkan oleh beberapa gelombang
 * yang merambat ke kanan (fase = x * k - waktu * kecepatan). Fase tiap garis sedikit berbeda dengan
 * tetangganya, sehingga jarak antar garis berubah-ubah seperti garis kontur pada peta.
 *
 * @param stroke  warna garis (gradasi horizontal yang dibuat oleh komponen)
 * @param alpha   ketebalan warna dasar dari palet tema
 */
export function renderContours(ctx, width, height, time, stroke, alpha, params = CONTOUR_PARAMS) {
  const { gap, step, lineWidth, minWavelength, terms } = params
  ctx.clearRect(0, 0, width, height)

  const waves = terms.map((term) => {
    const wavelength = Math.max(width * term.wavelength, (minWavelength * term.wavelength) / 0.62)
    return { ...term, k: (Math.PI * 2) / wavelength }
  })

  // Garis tambahan di atas dan bawah supaya tepi kanvas tetap penuh walau garis melengkung jauh.
  const reach = waves.reduce((sum, wave) => sum + wave.a, 0)
  const margin = Math.ceil(reach / gap) + 2
  const lines = Math.ceil(height / gap) + margin * 2

  ctx.lineWidth = lineWidth
  ctx.lineJoin = 'round'
  ctx.strokeStyle = stroke

  for (let i = 0; i < lines; i++) {
    const k = i - margin // indeks garis; garis ke-0 berada di tepi atas kanvas
    const baseline = k * gap
    // Garis bergantian sedikit lebih tegas atau lebih redup, memberi kesan kedalaman.
    ctx.globalAlpha = alpha * (0.62 + 0.38 * Math.sin(k * 0.9 + 0.7) ** 2)

    ctx.beginPath()
    for (let x = -step; x <= width + step; x += step) {
      let y = baseline
      for (const wave of waves) {
        y += wave.a * Math.sin(x * wave.k - time * wave.speed + k * wave.phasePerLine + wave.phase)
      }
      if (x === -step) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.stroke()
  }
  ctx.globalAlpha = 1
}
