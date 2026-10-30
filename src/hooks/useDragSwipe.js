import { useEffect } from 'react'

const START_DISTANCE = 8 // px: geseran lebih kecil dari ini dianggap klik biasa
const SWIPE_DISTANCE = 60 // px: geseran minimal agar pindah slide
const SWIPE_SPEED = 0.45 // px/ms: geseran cepat (flick) cukup 24 px

/**
 * Geser (swipe) kiri-kanan dengan sentuhan atau mouse pada elemen `ref`.
 * - Selama digeser, elemen mendapat variabel CSS `--drag-x` (px) dan atribut `data-dragging`,
 *   sehingga tampilan bisa mengikuti jari tanpa render ulang React.
 * - Saat dilepas, `onSwipe(+1)` dipanggil untuk geser ke kiri (slide berikutnya) dan `onSwipe(-1)` ke kanan.
 * - Gesekan vertikal tetap menggulir halaman (elemen perlu `touch-action: pan-y`).
 * - Klik biasa (tanpa geser) tidak terganggu, jadi tombol dan tautan di dalamnya tetap berfungsi.
 */
export function useDragSwipe(ref, { onSwipe, enabled = true }) {
  useEffect(() => {
    const element = ref.current
    if (!element || !enabled) return undefined

    let pointerId = null
    let startX = 0
    let startY = 0
    let startTime = 0
    let dragging = false

    const reset = () => {
      pointerId = null
      dragging = false
      delete element.dataset.dragging
      element.style.removeProperty('--drag-x')
    }

    const onDown = (event) => {
      if (event.pointerType === 'mouse' && event.button !== 0) return
      pointerId = event.pointerId
      startX = event.clientX
      startY = event.clientY
      startTime = event.timeStamp
      dragging = false
    }

    const onMove = (event) => {
      if (event.pointerId !== pointerId) return
      const dx = event.clientX - startX
      const dy = event.clientY - startY
      if (!dragging) {
        if (Math.abs(dx) < START_DISTANCE || Math.abs(dx) < Math.abs(dy)) return
        dragging = true
        element.setPointerCapture(pointerId)
        element.dataset.dragging = ''
      }
      element.style.setProperty('--drag-x', `${dx}px`)
    }

    const onUp = (event) => {
      if (event.pointerId !== pointerId) return
      const wasDragging = dragging
      const dx = event.clientX - startX
      const speed = Math.abs(dx) / Math.max(event.timeStamp - startTime, 1)
      reset()
      if (!wasDragging || event.type === 'pointercancel') return
      if (Math.abs(dx) > SWIPE_DISTANCE || (speed > SWIPE_SPEED && Math.abs(dx) > 24)) {
        onSwipe(dx < 0 ? 1 : -1)
      }
    }

    element.addEventListener('pointerdown', onDown)
    element.addEventListener('pointermove', onMove)
    element.addEventListener('pointerup', onUp)
    element.addEventListener('pointercancel', onUp)
    return () => {
      element.removeEventListener('pointerdown', onDown)
      element.removeEventListener('pointermove', onMove)
      element.removeEventListener('pointerup', onUp)
      element.removeEventListener('pointercancel', onUp)
      reset()
    }
  }, [ref, onSwipe, enabled])
}
