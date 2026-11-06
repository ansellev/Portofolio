import CardTint from '@/components/ui/CardTint'
import GlassPanel from '@/components/ui/GlassPanel'
import { resolveCertificateImage } from '@/content/certificateImages'
import { useCardTint } from '@/hooks/useCardTint'
import { useLanguage } from '@/i18n/useLanguage'
import { fillTemplate } from '@/lib/fillTemplate'
import { analyzeImage } from '@/lib/imageAccent'

/**
 * Satu kartu sertifikat/penghargaan. Gambar (opsional) tampil utuh di atas dan bisa dibuka penuh;
 * gradien warna di dasar kartu mengikuti warna dominan gambarnya.
 */
export default function CertificationCard({ item, index }) {
  const { ui, localize } = useLanguage()
  const image = resolveCertificateImage(item.image)
  const tint = useCardTint(image ? [image] : [])
  const name = localize(item.name)

  return (
    <GlassPanel as="li" delay={(index % 2) * 140} className="flex flex-col p-7 sm:p-8">
      <CardTint color={tint} />
      {image && (
        <a
          href={image}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${fillTemplate(ui.certs.viewFull, { name })} (${ui.site.opensInNewTab})`}
          className="group mb-6 block overflow-hidden rounded-inner bg-surface ring-1 ring-line"
        >
          <img
            src={image}
            alt=""
            loading="lazy"
            decoding="async"
            onLoad={(event) => analyzeImage(image, event.currentTarget)}
            ref={(element) => {
              if (element?.complete) analyzeImage(image, element) // sudah termuat sebelum event terpasang
            }}
            className="aspect-[4/3] w-full object-contain transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
          />
        </a>
      )}
      <div className="flex items-start justify-between gap-4">
        <p className="text-sm font-semibold text-accent">{ui.certs.kinds[item.kind]}</p>
        <span className="text-sm font-bold text-ink-soft">{item.year}</span>
      </div>
      <h3 className="mt-2 text-xl font-bold leading-snug sm:text-2xl">{name}</h3>
      <p className="mt-2 text-ink-soft">{localize(item.issuer)}</p>
    </GlassPanel>
  )
}
