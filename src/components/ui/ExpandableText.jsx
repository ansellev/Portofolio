import { useEffect, useId, useRef, useState } from 'react'
import { cx } from '@/lib/cx'
import { useLanguage } from '@/i18n/useLanguage'

// Class harus ditulis utuh (bukan dirangkai) supaya Tailwind mengenalinya.
const CLAMP = { 3: 'line-clamp-3', 4: 'line-clamp-4', 5: 'line-clamp-5' }

/**
 * Teks yang dipotong sampai `lines` baris. Tombol "Selengkapnya" hanya muncul kalau teksnya
 * memang terpotong, jadi deskripsi pendek tampil apa adanya.
 */
export default function ExpandableText({ text, lines = 4, className }) {
  const { ui } = useLanguage()
  const textId = useId()
  const textRef = useRef(null)
  const [expanded, setExpanded] = useState(false)
  const [overflowing, setOverflowing] = useState(false)

  useEffect(() => {
    const element = textRef.current
    if (!element) return undefined
    // Dipanggil sekali saat mulai diamati, dan lagi setiap ukuran berubah (lebar layar, ganti bahasa).
    const observer = new ResizeObserver(() => {
      if (!expanded) setOverflowing(element.scrollHeight > element.clientHeight + 1)
    })
    observer.observe(element)
    return () => observer.disconnect()
  }, [text, expanded])

  return (
    <div className={className}>
      <p
        id={textId}
        ref={textRef}
        className={cx('text-base leading-relaxed text-ink-soft', !expanded && CLAMP[lines])}
      >
        {text}
      </p>
      {(overflowing || expanded) && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          aria-controls={textId}
          className="mt-1 min-h-8 rounded text-sm font-semibold text-accent underline-offset-4 hover:underline"
        >
          {expanded ? ui.media.readLess : ui.media.readMore}
        </button>
      )}
    </div>
  )
}
