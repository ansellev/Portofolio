import GlassPanel from '@/components/ui/GlassPanel'
import Section from '@/components/ui/Section'
import { resolveCertificateImage } from '@/content/certificateImages'
import { certifications } from '@/content/certifications'
import { useLanguage } from '@/i18n/useLanguage'
import { fillTemplate } from '@/lib/fillTemplate'

/** Satu kartu per sertifikat/penghargaan. Gambar (opsional) tampil utuh di atas dan bisa dibuka penuh. */
export default function CertificationsSection() {
  const { ui, localize } = useLanguage()

  return (
    <Section id="certs" title={ui.sections.certs}>
      <ul className="grid gap-5 md:grid-cols-2">
        {certifications.map((item, index) => {
          const image = resolveCertificateImage(item.image)
          const name = localize(item.name)
          return (
            <GlassPanel
              key={item.key}
              as="li"
              delay={(index % 2) * 140}
              className="flex flex-col p-7 sm:p-8"
            >
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
        })}
      </ul>
    </Section>
  )
}
