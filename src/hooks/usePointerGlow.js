import { useEffect } from 'react'

/**
 * Bayangan putih yang mengikuti kursor di atas sebuah elemen (hanya mouse/pen, bukan layar sentuh).
 * Menulis CSS variable --mx dan --my serta atribut data-hover; tampilannya diatur di styles/glass.css.
 */
export function usePointerGlow(ref, enabled = true) {
  useEffect(() => {
    const element = ref.current
    if (!element || !enabled) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const current = { x: 0, y: 0 }
    const target = { x: 0, y: 0 }
    let frame = 0

    const paint = () => {
      element.style.setProperty('--mx', `${current.x}px`)
      element.style.setProperty('--my', `${current.y}px`)
    }
    const follow = () => {
      current.x += (target.x - current.x) * 0.2
      current.y += (target.y - current.y) * 0.2
      paint()
      const moving = Math.abs(target.x - current.x) + Math.abs(target.y - current.y) > 0.5
      frame = moving ? requestAnimationFrame(follow) : 0
    }
    const locate = (event) => {
      const rect = element.getBoundingClientRect()
      target.x = event.clientX - rect.left
      target.y = event.clientY - rect.top
    }

    const onEnter = (event) => {
      if (event.pointerType === 'touch') return
      locate(event)
      current.x = target.x
      current.y = target.y
      paint()
      element.dataset.hover = '1'
    }
    const onMove = (event) => {
      if (event.pointerType === 'touch') return
      locate(event)
      if (reduceMotion) {
        current.x = target.x
        current.y = target.y
        paint()
      } else if (!frame) {
        frame = requestAnimationFrame(follow)
      }
    }
    const onLeave = () => {
      delete element.dataset.hover
    }

    element.addEventListener('pointerenter', onEnter)
    element.addEventListener('pointermove', onMove)
    element.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      element.removeEventListener('pointerenter', onEnter)
      element.removeEventListener('pointermove', onMove)
      element.removeEventListener('pointerleave', onLeave)
    }
  }, [ref, enabled])
}
