import ContourWaves from '@/components/effects/ContourWaves/ContourWaves'
import GlassPanel from '@/components/ui/GlassPanel'
import Section from '@/components/ui/Section'
import SocialLinks from '@/components/ui/SocialLinks'
import { useLanguage } from '@/i18n/useLanguage'

/** Penutup halaman. `id="contact"` membuat bagian ini bisa ditautkan langsung (alamat `/#contact`). */
export default function ContactSection() {
  const { ui } = useLanguage()

  return (
    <Section id="contact" labelledBy="contact-heading">
      <GlassPanel
        variant="strong"
        radius="large"
        className="overflow-hidden px-6 py-14 text-center sm:px-14 sm:py-20"
      >
        {/* Gelombang di belakang isi kartu; bagian tengahnya dibuat samar agar teks tetap jelas (lihat base.css). */}
        <ContourWaves className="contact-waves pointer-events-none absolute inset-0 h-full w-full" />
        <div className="relative z-10">
          <h2
            id="contact-heading"
            className="text-[clamp(1.9rem,5.2vw,3.6rem)] font-extrabold uppercase leading-none tracking-tight"
          >
            {ui.contact.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
            {ui.contact.text}
          </p>
          <SocialLinks
            label={ui.hero.socials}
            showHandle
            className="mt-9 flex flex-wrap justify-center gap-3"
          />
        </div>
      </GlassPanel>
    </Section>
  )
}
