import Reveal from '@/components/ui/Reveal'
import { cx } from '@/lib/cx'

const VARIANT_CLASS = { soft: 'glass', strong: 'glass-strong' }
const RADIUS_CLASS = { panel: 'rounded-panel', large: 'rounded-panel-lg' }

/**
 * Frame kaca (glassmorphism), dengan animasi naik saat di-scroll dan bayangan kursor.
 * variant: 'soft' | 'strong'   radius: 'panel' | 'large'
 * Props lain (as, delay, glow, className, aria-*) diteruskan ke <Reveal>.
 */
export default function GlassPanel({ variant = 'soft', radius = 'panel', className, ...props }) {
  return (
    <Reveal className={cx(VARIANT_CLASS[variant], RADIUS_CLASS[radius], className)} {...props} />
  )
}
