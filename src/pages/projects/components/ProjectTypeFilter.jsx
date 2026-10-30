import { PROJECT_TYPES } from '@/content/projectTypes'
import { cx } from '@/lib/cx'
import { useLanguage } from '@/i18n/useLanguage'

/**
 * Filter tipe project berbentuk navbar kaca. `value` = 'all' atau salah satu tipe;
 * `counts` = jumlah project per tipe, ditampilkan kecil di setiap pilihan.
 */
export default function ProjectTypeFilter({ value, onChange, counts, total }) {
  const { ui } = useLanguage()
  const options = [
    { key: 'all', label: ui.projects.filterAll, count: total },
    ...PROJECT_TYPES.map((type) => ({
      key: type,
      label: ui.projects.types[type],
      count: counts[type] ?? 0,
    })),
  ]

  return (
    <div
      role="group"
      aria-label={ui.projects.filterLabel}
      className="glass flex max-w-full gap-1 overflow-x-auto rounded-full p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {options.map(({ key, label, count }) => {
        const selected = value === key
        return (
          <button
            key={key}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(key)}
            className={cx(
              'flex h-10 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors',
              selected ? 'bg-ink text-on-ink' : 'text-ink hover:bg-surface-hover',
            )}
          >
            {label}
            <span className={cx('text-xs font-bold', selected ? 'opacity-75' : 'text-ink-soft')}>
              {count}
            </span>
          </button>
        )
      })}
    </div>
  )
}
