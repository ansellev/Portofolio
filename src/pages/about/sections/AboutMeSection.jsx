import GlassPanel from '@/components/ui/GlassPanel'
import Section from '@/components/ui/Section'
import { profile } from '@/content/profile'
import { useLanguage } from '@/i18n/useLanguage'
import profilePhoto from '@/assets/images/heroImage.jpeg'

/** Bio singkat dengan foto di sampingnya. */
export default function AboutMeSection() {
  const { ui, localize } = useLanguage()

  return (
    <Section id="about" title={ui.sections.about}>
      <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <GlassPanel variant="strong" className="mx-auto w-full max-w-sm p-3 lg:mx-0 lg:max-w-none">
          {/* alt kosong: foto yang sama sudah dijelaskan di bagian hero */}
          <img
            src={profilePhoto}
            alt=""
            width="420"
            height="365"
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full rounded-inner object-cover object-[50%_40%]"
          />
        </GlassPanel>

        <GlassPanel delay={140} className="flex items-center p-7 sm:p-10">
          <p className="max-w-[65ch] text-base leading-[1.85] text-ink sm:text-lg">
            {localize(profile.bio)}
          </p>
        </GlassPanel>
      </div>
    </Section>
  )
}
