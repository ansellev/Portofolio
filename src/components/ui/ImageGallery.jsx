import { cx } from '@/lib/cx'
import { fillTemplate } from '@/lib/fillTemplate'
import { useLanguage } from '@/i18n/useLanguage'

/**
 * Foto yang berganti dengan transisi memudar (dipakai kartu project dan pengalaman).
 * `onImageLoad(url, elemen)` dipanggil setiap foto selesai dimuat (dipakai untuk mencari warna kartu). `index` dikendalikan oleh kartu
 * (lihat hooks/useHoverCycle.js); titik di bawah foto memungkinkan berganti manual, terutama di layar sentuh.
 */
export default function ImageGallery({ images, name, index, onSelect, onImageLoad }) {
  const { ui } = useLanguage()
  if (images.length === 0) return null

  return (
    <div className="relative aspect-video overflow-hidden rounded-inner bg-surface ring-1 ring-line">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={fillTemplate(ui.media.imageAlt, { name, n: i + 1, total: images.length })}
          aria-hidden={i !== index}
          onLoad={(event) => onImageLoad?.(src, event.currentTarget)}
          ref={(element) => {
            if (element?.complete) onImageLoad?.(src, element) // sudah termuat sebelum event terpasang
          }}
          loading="lazy"
          decoding="async"
          draggable={false}
          className={cx(
            'absolute inset-0 h-full w-full select-none object-cover transition-opacity duration-700 motion-reduce:transition-none',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
        />
      ))}

      {images.length > 1 && (
        <div className="absolute inset-x-0 bottom-2 flex justify-center">
          <div className="flex rounded-full bg-black/35 px-1 backdrop-blur-sm">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => onSelect(i)}
                aria-label={fillTemplate(ui.media.showImage, { n: i + 1, total: images.length })}
                aria-current={i === index}
                className="group flex h-6 w-6 items-center justify-center rounded-full"
              >
                <span
                  className={cx(
                    'block h-2 rounded-full bg-white transition-all duration-300 motion-reduce:transition-none',
                    i === index ? 'w-4 opacity-100' : 'w-2 opacity-55 group-hover:opacity-90',
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
