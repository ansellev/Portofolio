import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useRef, useState } from 'react'
import Reveal from '@/components/ui/Reveal'
import { useDragSwipe } from '@/hooks/useDragSwipe'
import { cx } from '@/lib/cx'
import { fillTemplate } from '@/lib/fillTemplate'
import { useLanguage } from '@/i18n/useLanguage'

const controlClass =
  'glass-strong flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface-raised'

/**
 * Carousel "coverflow": slide di tengah paling menonjol, slide kiri dan kanannya lebih kecil, memudar,
 * dan berada di belakang bayangan slide tengah. Bisa digeser dengan sentuhan atau mouse, tombol panah,
 * titik indikator, tombol keyboard (←, →, Home, End), atau klik slide di samping. Berputar tanpa akhir.
 * Gaya posisi slide ada di styles/coverflow.css (variabel --o = posisi relatif).
 *
 * Props:
 *   items       daftar item; setiap item perlu `key` dan `name` (teks atau { id, en })
 *   renderItem  (item) => isi kartu
 *   labels      teks pembaca layar: { label, previous, next, goTo: '... {name}', slide: '... {n} dari {total}' }
 */
export default function CoverflowCarousel({ items, renderItem, labels }) {
  const { localize } = useLanguage()
  const count = items.length
  const [position, setPosition] = useState({ active: 0, previous: 0 })
  const stageRef = useRef(null)
  const { active, previous } = position

  const goTo = useCallback(
    (next) =>
      setPosition((current) => ({ active: (next + count) % count, previous: current.active })),
    [count],
  )
  const move = useCallback((delta) => goTo(active + delta), [goTo, active])
  useDragSwipe(stageRef, { onSwipe: move, enabled: count > 1 })

  // Posisi relatif slide terhadap slide aktif: 0 = tengah, ±1 = samping, lebih jauh = disembunyikan.
  const half = Math.floor(count / 2)
  const offsetOf = (index, center) => ((index - center + count + half) % count) - half

  const onKeyDown = (event) => {
    const actions = {
      ArrowLeft: () => move(-1),
      ArrowRight: () => move(1),
      Home: () => goTo(0),
      End: () => goTo(count - 1),
    }
    const action = actions[event.key]
    if (!action) return
    event.preventDefault()
    action()
  }

  return (
    <Reveal glow={false}>
      <div
        ref={stageRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={labels.label}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="coverflow-stage rounded-panel"
        data-swipeable={count > 1 ? '' : undefined}
      >
        {items.map((item, index) => {
          const offset = offsetOf(index, active)
          const distance = Math.abs(offset)
          const isActive = offset === 0
          // Slide yang melompat dari satu sisi ke sisi lain muncul memudar, bukan meluncur menembus slide tengah.
          const wrapped = Math.abs(offset - offsetOf(index, previous)) > 1

          return (
            <div
              key={item.key}
              role="group"
              aria-roledescription="slide"
              aria-label={fillTemplate(labels.slide, { n: index + 1, total: count })}
              aria-hidden={!isActive}
              data-offset={offset}
              data-hidden={distance > 1 ? '' : undefined}
              className={cx('coverflow-slide glass-strong rounded-panel', wrapped && 'is-wrapping')}
              style={{ '--o': offset, '--abs': distance, zIndex: 20 - distance }}
            >
              <div inert={!isActive} className="h-full p-3">
                {renderItem(item)}
              </div>
              {distance === 1 && (
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => goTo(index)}
                  aria-label={fillTemplate(labels.goTo, { name: localize(item.name) })}
                  className="coverflow-slide-hit"
                />
              )}
            </div>
          )
        })}
      </div>

      {count > 1 && (
        <div className="mt-2 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label={labels.previous}
            className={controlClass}
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <div role="group" className="flex items-center">
            {items.map((item, index) => (
              <button
                key={item.key}
                type="button"
                onClick={() => goTo(index)}
                aria-label={fillTemplate(labels.goTo, { name: localize(item.name) })}
                aria-current={index === active}
                className="group flex h-8 w-8 items-center justify-center rounded-full"
              >
                <span
                  className={cx(
                    'block h-2.5 rounded-full bg-ink transition-all duration-300 motion-reduce:transition-none',
                    index === active
                      ? 'w-6 opacity-100'
                      : 'w-2.5 opacity-30 group-hover:opacity-60',
                  )}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label={labels.next}
            className={controlClass}
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      )}

      <p className="sr-only" aria-live="polite">
        {fillTemplate(labels.slide, { n: active + 1, total: count })}:{' '}
        {localize(items[active].name)}
      </p>
    </Reveal>
  )
}
