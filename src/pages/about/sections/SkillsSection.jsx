import Chip from '@/components/ui/Chip'
import GlassPanel from '@/components/ui/GlassPanel'
import Section from '@/components/ui/Section'
import { skillGroups } from '@/content/skills'
import { useLanguage } from '@/i18n/useLanguage'

export default function SkillsSection() {
  const { ui, localize } = useLanguage()

  return (
    <Section id="skills" title={ui.sections.skills}>
      <GlassPanel className="divide-y divide-ink/10 px-7 sm:px-10">
        {skillGroups.map((group) => (
          <div key={group.key} className="flex flex-col gap-4 py-7 md:flex-row md:gap-10">
            <h3 className="shrink-0 text-xl font-bold md:w-48 md:pt-1">{localize(group.label)}</h3>
            <ul className="flex flex-wrap gap-2.5">
              {group.items.map((item) => {
                const label = localize(item)
                return (
                  <li key={label}>
                    <Chip>{label}</Chip>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </GlassPanel>
    </Section>
  )
}
