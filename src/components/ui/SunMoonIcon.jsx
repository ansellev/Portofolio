import { useId } from 'react'
import { cx } from '@/lib/cx'

// Delapan sinar matahari, masing-masing diputar 45 derajat dari yang sebelumnya.
const RAY_ANGLES = Array.from({ length: 8 }, (_, i) => i * 45)

/**
 * Ikon yang berubah bentuk antara matahari dan bulan.
 * `mode` = tema yang sedang aktif: 'light' menampilkan matahari, 'dark' menampilkan bulan.
 * Animasinya (CSS) ada di styles/theme.css; ikon ini hanya menyediakan bagian-bagiannya:
 * lingkaran inti (membesar jadi bulan), lingkaran pemotong (membentuk sabit), dan sinar.
 */
export default function SunMoonIcon({ mode, className }) {
  const maskId = `sun-moon-${useId().replace(/:/g, '')}`

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      data-mode={mode}
      className={cx('sun-moon', className)}
      fill="none"
    >
      <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <rect width="24" height="24" fill="white" />
        <circle className="sun-moon-cut" cx="17.5" cy="6.5" r="10" fill="black" />
      </mask>
      <g mask={`url(#${maskId})`}>
        <circle className="sun-moon-core" cx="12" cy="12" r="5" fill="currentColor" />
      </g>
      <g className="sun-moon-rays" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        {RAY_ANGLES.map((angle) => (
          <line
            key={angle}
            x1="12"
            y1="2.5"
            x2="12"
            y2="4.5"
            transform={`rotate(${angle} 12 12)`}
          />
        ))}
      </g>
    </svg>
  )
}
