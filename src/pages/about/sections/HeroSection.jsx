import DigitalWave from '@/components/effects/DigitalWave/DigitalWave'
import AnimatedLetters from '@/components/ui/AnimatedLetters'
import GlassPanel from '@/components/ui/GlassPanel'
import SocialLinks from '@/components/ui/SocialLinks'
import { profile } from '@/content/profile'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { useLanguage } from '@/i18n/useLanguage'
import heroPhoto from '@/assets/images/hero-cutout.webp'

/** Nama besar di tengah, lalu satu frame kaca berisi foto, peran, tombol sosial, dan gelombang di belakangnya. */
export default function HeroSection() {
  const { ui, localize } = useLanguage()
  const reducedMotion = usePrefersReducedMotion()
  const { nickname, nicknameRest, surname, full } = profile.name

  return (
    <section aria-labelledby="hero-name" className="pt-2 sm:pt-6">
      <h1
        id="hero-name"
        className="text-center font-extrabold uppercase leading-none tracking-tight"
      >
        <span className="sr-only">{full}</span>
        <span className="hero-name-first block whitespace-nowrap">
          <AnimatedLetters text={nickname} />
          <AnimatedLetters
            text={nicknameRest}
            startIndex={nickname.length}
            className="name-outline"
          />
        </span>
        <span className="hero-name-last name-outline mt-[0.35em] block whitespace-nowrap">
          <AnimatedLetters text={surname} startIndex={nickname.length + nicknameRest.length} />
        </span>
      </h1>

      <GlassPanel radius="large" className="relative mt-6 overflow-hidden sm:mt-10">
        <DigitalWave
          paused={reducedMotion}
          className="pointer-events-none absolute inset-0 h-full w-full"
        />

        <div className="relative z-10 grid items-end gap-5 px-6 pt-6 sm:gap-8 sm:px-10 sm:pt-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:grid-rows-[1fr_auto_1fr] lg:gap-x-10 lg:gap-y-0 lg:px-14 lg:pt-14">
          {/* Foto cutout: menempel di dasar frame pada layar lebar */}
          <div className="relative z-10 order-1 flex justify-center lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:self-end">
            <img
              src={heroPhoto}
              alt={localize(profile.photoAlt)}
              width="852"
              height="1548"
              fetchPriority="high"
              decoding="async"
              className="photo-fade block h-[14rem] w-auto max-w-none sm:h-[24rem] lg:h-[25rem]"
            />
          </div>

          {/* Panel peran dan grid sosial berbagi satu baris grid: tepi atas dan bawahnya otomatis sejajar. */}
          <div className="hero-intro glass order-2 text-center lg:col-start-1 lg:row-start-2 lg:self-stretch">
            <p className="text-balance text-xl font-bold sm:text-3xl lg:text-xl xl:text-2xl">
              {localize(profile.role)}
            </p>
            <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-ink-soft lg:text-sm xl:text-base">
              {localize(profile.tagline)}
            </p>
          </div>

          <SocialLinks
            fill
            label={ui.hero.socials}
            className="hero-socials order-3 grid grid-cols-2 gap-3 lg:col-start-3 lg:row-start-2 lg:grid-rows-2 lg:self-stretch"
          />
        </div>
      </GlassPanel>
    </section>
  )
}
