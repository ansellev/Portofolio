import CardGrid from '@/components/ui/CardGrid'
import Section from '@/components/ui/Section'
import { experiences } from '@/content/experiences'
import { useLanguage } from '@/i18n/useLanguage'
import ExperienceCard from '@/pages/organization/components/ExperienceCard'

/** Semua pengalaman dalam grid (tanpa filter). */
export default function AllExperienceSection() {
  const { ui } = useLanguage()

  return (
    <Section id="all-experience" title={ui.experience.allTitle}>
      <CardGrid
        items={experiences}
        renderItem={(experience) => <ExperienceCard experience={experience} />}
      />
    </Section>
  )
}
