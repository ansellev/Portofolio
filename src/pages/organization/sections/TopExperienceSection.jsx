import CoverflowCarousel from '@/components/ui/CoverflowCarousel'
import Section from '@/components/ui/Section'
import { experiences } from '@/content/experiences'
import { useLanguage } from '@/i18n/useLanguage'
import ExperienceCard from '@/pages/organization/components/ExperienceCard'

const featuredExperiences = experiences.filter((experience) => experience.featured)

/** Judul halaman + carousel pengalaman unggulan (pengalaman dengan `featured: true`). */
export default function TopExperienceSection() {
  const { ui } = useLanguage()
  if (featuredExperiences.length === 0) return null

  return (
    <Section id="top-experience" title={ui.experience.topTitle} headingAs="h1" flush>
      <CoverflowCarousel
        items={featuredExperiences}
        labels={ui.experience.carousel}
        renderItem={(experience) => <ExperienceCard experience={experience} />}
      />
    </Section>
  )
}
