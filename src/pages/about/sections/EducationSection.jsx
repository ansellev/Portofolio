import GlassPanel from '@/components/ui/GlassPanel'
import Section from '@/components/ui/Section'
import { education } from '@/content/education'
import { useLanguage } from '@/i18n/useLanguage'

export default function EducationSection() {
  const { lang, ui, localize } = useLanguage()
  const formatGpa = (value) =>
    new Intl.NumberFormat(lang === 'id' ? 'id-ID' : 'en-US', { minimumFractionDigits: 2 }).format(
      value,
    )

  return (
    <Section id="education" title={ui.sections.education}>
      <GlassPanel as="ul" className="divide-y divide-ink/10 px-7 sm:px-10">
        {education.map((item) => (
          <li
            key={item.key}
            className="flex flex-col gap-3 py-7 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h3 className="text-xl font-bold sm:text-2xl">{item.school}</h3>
              <p className="mt-1 text-ink-soft">{localize(item.major)}</p>
            </div>
            <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-2">
              <span className="font-semibold text-ink-soft">
                {item.start} – {item.end ?? ui.education.present}
              </span>
              {item.gpa != null && (
                <span className="rounded-full bg-ink px-3.5 py-1 text-xs font-bold text-on-ink">
                  {ui.education.gpa} {formatGpa(item.gpa)}
                </span>
              )}
            </div>
          </li>
        ))}
      </GlassPanel>
    </Section>
  )
}
