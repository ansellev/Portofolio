import MediaCard from '@/components/ui/MediaCard'
import { resolveExperienceImage } from '@/content/experienceImages'
import { useLanguage } from '@/i18n/useLanguage'

/**
 * Isi satu kartu pengalaman: peran, judul, dan poin-poin kegiatan, di bawah foto yang berganti
 * saat di-hover (kerangkanya: components/ui/MediaCard.jsx).
 */
export default function ExperienceCard({ experience }) {
  const { localize } = useLanguage()
  const name = localize(experience.name)
  const points = localize(experience.points)
  const images = experience.images.map(resolveExperienceImage).filter(Boolean)

  return (
    <MediaCard name={name} images={images}>
      {experience.role ? (
        <p className="text-sm font-semibold text-accent">{localize(experience.role)}</p>
      ) : (
        // Kartu tanpa peran tetap menyisakan ruang agar judulnya sejajar dengan kartu di sebelahnya.
        <p aria-hidden="true" className="min-h-5" />
      )}
      <h3 className="mt-1 text-xl font-bold leading-snug sm:text-2xl">{name}</h3>

      <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-ink-soft marker:text-accent">
        {points.map((point) =>
          typeof point === 'string' ? (
            <li key={point}>{point}</li>
          ) : (
            <li key={point.text}>
              {point.text}
              <ol className="mt-1 list-decimal space-y-0.5 pl-5">
                {point.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </li>
          ),
        )}
      </ul>
    </MediaCard>
  )
}
