import { useMemo, useState } from 'react'
import { useEffect } from 'react'

const FIRST_DELAY = 600 // ms sebelum berganti ke foto kedua
const INTERVAL = 1400 // ms antar foto berikutnya

/**
 * Mengganti-ganti indeks foto selama kartu di-hover (mouse) atau difokus (keyboard).
 * Saat kursor atau fokus keluar, kembali ke foto pertama. Layar sentuh tidak memicu hover;
 * di sana gunakan `select` (titik indikator di bawah foto). Memilih foto lewat titik menghentikan
 * pergantian otomatis sampai kursor keluar, supaya pilihan pengunjung tidak langsung tertimpa.
 *
 * Mengembalikan { index, select, bind }; sebarkan `bind` ke elemen kartu: <article {...bind}>.
 */
export function useHoverCycle(count) {
  const [index, setIndex] = useState(0)
  const [active, setActive] = useState(false)
  const [manual, setManual] = useState(false)

  useEffect(() => {
    if (!active || manual || count < 2) return undefined
    let timer
    const schedule = (delay) => {
      timer = window.setTimeout(() => {
        setIndex((i) => (i + 1) % count)
        schedule(INTERVAL)
      }, delay)
    }
    schedule(FIRST_DELAY)
    return () => window.clearTimeout(timer)
  }, [active, manual, count])

  const bind = useMemo(() => {
    const stop = () => {
      setActive(false)
      setManual(false)
      setIndex(0)
    }
    return {
      onPointerEnter: (event) => event.pointerType !== 'touch' && setActive(true),
      onPointerLeave: (event) => event.pointerType !== 'touch' && stop(),
      onFocus: () => setActive(true),
      onBlur: (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) stop()
      },
    }
  }, [])

  const select = (next) => {
    setManual(true)
    setIndex(next)
  }

  return { index: count ? index % count : 0, select, bind }
}
