import { useSyncExternalStore } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

function subscribe(callback) {
  const media = window.matchMedia(QUERY)
  media.addEventListener('change', callback)
  return () => media.removeEventListener('change', callback)
}

/** true jika pengunjung meminta animasi dikurangi di pengaturan perangkatnya. */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  )
}
