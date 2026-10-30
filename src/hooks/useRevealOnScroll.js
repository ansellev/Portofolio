import { useEffect, useState } from 'react'

/**
 * true setelah elemen pertama kali masuk ke layar (berjalan sekali).
 * Dipakai untuk animasi frame naik ke atas saat di-scroll.
 */
export function useRevealOnScroll(ref) {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || !('IntersectionObserver' in window)) {
      setShown(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [ref])

  return shown
}
