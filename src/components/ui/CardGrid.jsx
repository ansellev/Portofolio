import GlassPanel from '@/components/ui/GlassPanel'
import { cx } from '@/lib/cx'

/**
 * Grid kartu kaca: 1 kolom di HP, 2 di tablet, 3 di desktop. Setiap item perlu `key`.
 * `renderItem(item)` mengembalikan isi kartu (mis. <ProjectCard />).
 */
export default function CardGrid({ items, renderItem, className }) {
  return (
    <ul className={cx('grid gap-6 sm:grid-cols-2 lg:grid-cols-3', className)}>
      {items.map((item, index) => (
        <GlassPanel key={item.key} as="li" delay={(index % 3) * 120} className="p-3">
          {renderItem(item)}
        </GlassPanel>
      ))}
    </ul>
  )
}
