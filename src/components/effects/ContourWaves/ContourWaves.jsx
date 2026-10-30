import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { useTheme } from '@/theme/useTheme'
import { CONTOUR_PALETTES, CONTOUR_START_TIME } from './contourConfig'
import { renderContours } from './contourRenderer'

const rgb = ([r, g, b]) => `rgb(${r} ${g} ${b})`

/**
 * Gelombang garis kontur di <canvas> yang mengalir pelan dari kiri ke kanan. Dipakai di kartu
 * "Mari berkolaborasi"; pemakainya mengatur posisi, ukuran, dan pemudaran lewat `className`.
 * - Warna mengikuti tema aktif (palet di contourConfig.js).
 * - Berhenti otomatis saat tidak terlihat di layar, dan menampilkan satu pose diam bila pengunjung
 *   memilih "reduce motion" di perangkatnya.
 */
export default function ContourWaves({ className }) {
  const canvasRef = useRef(null)
  const { theme } = useTheme()
  const reduceMotion = usePrefersReducedMotion()
  const clock = useRef(CONTOUR_START_TIME) // waktu animasi (detik), dipertahankan saat ganti tema

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const palette = CONTOUR_PALETTES[theme]

    let width = 0
    let height = 0
    let stroke = null
    let frame = 0
    let lastTick = 0

    const draw = () => renderContours(ctx, width, height, clock.current, stroke, palette.alpha)

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      stroke = ctx.createLinearGradient(0, 0, width, 0)
      palette.stops.forEach((color, index) =>
        stroke.addColorStop(index / (palette.stops.length - 1), rgb(color)),
      )
      draw()
    }

    const loop = (now) => {
      clock.current += Math.min((now - lastTick) / 1000, 0.1)
      lastTick = now
      draw()
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
    if (!reduceMotion) {
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
  }, [theme, reduceMotion])

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />
}
