import { useRef } from 'react'
import { usePointerGlow } from '@/hooks/usePointerGlow'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'
import { cx } from '@/lib/cx'

/**
 * Pembungkus perilaku untuk sebuah frame:
 * 1) naik ke atas sambil memudar masuk saat di-scroll ke layar (sekali per elemen);
 * 2) bayangan putih mengikuti kursor saat di-hover.
 *
 * `delay` (ms) membuat frame yang bersebelahan muncul bergantian.
 * `glow={false}` mematikan bayangan kursor. Biasanya dipakai lewat <GlassPanel>.
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  glow = true,
  className,
  style,
  children,
  ...props
}) {
  const ref = useRef(null)
  const shown = useRevealOnScroll(ref)
  usePointerGlow(ref, glow)

  return (
    <Tag
      ref={ref}
      className={cx('reveal', glow && 'glow-spot', shown && 'is-in', className)}
      style={{ ...style, '--reveal-delay': `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  )
}
