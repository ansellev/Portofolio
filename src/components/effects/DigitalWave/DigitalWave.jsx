import { useEffect, useRef } from 'react'
import { createSprites, renderWave } from './waveRenderer'
import { START_TIME, WAVE_PALETTES, WAVE_PARAMS } from './waveConfig'
import { useTheme } from '@/theme/useTheme'

/**
 * Gelombang digital di <canvas>: lembaran titik 3D yang mengalir dari kiri ke kanan.
 * - Warna mengikuti tema aktif (palet di waveConfig.js).
 * - `paused`: animasi berhenti dan menampilkan satu pose diam (dipakai saat pengunjung memilih "reduce motion").
 * - Berhenti otomatis saat canvas tidak terlihat di layar.
 * - Kepadatan titik turun otomatis bila perangkat terlalu lambat.
 */
export default function DigitalWave({ paused = false, className }) {
  const canvasRef = useRef(null)
  const { theme } = useTheme()
  const clock = useRef(START_TIME) // waktu animasi (detik), dipertahankan saat jeda dan ganti tema

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const palette = WAVE_PALETTES[theme]
    const sprites = createSprites(palette)
    const params = { ...WAVE_PARAMS, intensity: palette.intensity }

    let width = 0
    let height = 0
    let frame = 0
    let lastTick = 0
    let averageMs = 8
    let slowFrames = 0

    const draw = () => renderWave(ctx, sprites, width, height, clock.current, params)

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (paused) draw()
    }

    const loop = (now) => {
      clock.current += Math.min((now - lastTick) / 1000, 0.1)
      lastTick = now
      const started = performance.now()
      draw()
      averageMs = averageMs * 0.9 + (performance.now() - started) * 0.1

      // Turunkan kepadatan titik bila satu frame terlalu berat (> ~22 ms)
      slowFrames = averageMs > 22 ? slowFrames + 1 : 0
      if (slowFrames > 20 && params.quality > 0.4) {
        params.quality = Math.max(0.4, params.quality * 0.8)
        slowFrames = 0
        averageMs = 8
      }
      frame = requestAnimationFrame(loop)
    }
    const start = () => {
      if (frame) return
      lastTick = performance.now()
      frame = requestAnimationFrame(loop)
    }
    const stop = () => {
      cancelAnimationFrame(frame)
      frame = 0
    }

    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)

    let visibilityObserver
    if (!paused) {
      visibilityObserver = new IntersectionObserver(([entry]) =>
        entry.isIntersecting ? start() : stop(),
      )
      visibilityObserver.observe(canvas)
    }

    return () => {
      stop()
      resizeObserver.disconnect()
      visibilityObserver?.disconnect()
    }
  }, [paused, theme])

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />
}
