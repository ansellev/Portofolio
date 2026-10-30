import SectionHeading from '@/components/ui/SectionHeading'
import { cx } from '@/lib/cx'

/**
 * Satu bagian halaman dengan jarak antar-bagian yang seragam.
 * Beri `title` untuk memakai judul standar, atau `labelledBy` (id sebuah heading di dalamnya).
 * `flush`: tanpa jarak di atas (bagian pertama di halaman). `headingAs`: tingkat heading, bawaan 'h2'.
 */
export default function Section({
  id,
  title,
  labelledBy,
  flush = false,
  headingAs,
  className,
  children,
}) {
  const headingId = title ? `${id}-heading` : labelledBy
  return (
    <section id={id} aria-labelledby={headingId} className={cx(!flush && 'mt-28', className)}>
      {title && (
        <SectionHeading id={headingId} as={headingAs}>
          {title}
        </SectionHeading>
      )}
      {children}
    </section>
  )
}
