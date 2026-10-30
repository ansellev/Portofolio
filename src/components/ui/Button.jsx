import { cx } from '@/lib/cx'

const BASE =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors'

const VARIANT_CLASS = {
  primary: 'bg-ink text-on-ink shadow-lg shadow-indigo-900/20 hover:bg-accent',
  secondary: 'bg-surface text-ink ring-1 ring-line hover:bg-surface-raised',
}

/**
 * Tombol berbentuk pill. Bisa jadi link biasa, link router, atau button:
 *   <Button href="#contact">  |  <Button as={Link} to="/">  |  <Button as="button" onClick={...}>
 * `icon` = komponen ikon (lucide-react) yang tampil di kanan teks.
 */
export default function Button({
  as: Tag = 'a',
  variant = 'primary',
  icon: Icon,
  className,
  children,
  ...props
}) {
  return (
    <Tag className={cx(BASE, VARIANT_CLASS[variant], className)} {...props}>
      {children}
      {Icon && <Icon aria-hidden="true" className="h-4 w-4" />}
    </Tag>
  )
}
