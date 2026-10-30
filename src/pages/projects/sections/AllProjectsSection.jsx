import { useState } from 'react'
import Button from '@/components/ui/Button'
import CardGrid from '@/components/ui/CardGrid'
import GlassPanel from '@/components/ui/GlassPanel'
import Section from '@/components/ui/Section'
import { projects } from '@/content/projects'
import { PROJECT_TYPES } from '@/content/projectTypes'
import { fillTemplate } from '@/lib/fillTemplate'
import { useLanguage } from '@/i18n/useLanguage'
import ProjectCard from '@/pages/projects/components/ProjectCard'
import ProjectTypeFilter from '@/pages/projects/components/ProjectTypeFilter'

const countsByType = Object.fromEntries(
  PROJECT_TYPES.map((type) => [type, projects.filter((project) => project.type === type).length]),
)

/** Semua project dalam grid, dengan filter tipe (UI/UX, Frontend, Backend, Full-stack). */
export default function AllProjectsSection() {
  const { ui } = useLanguage()
  const [type, setType] = useState('all')
  const visible = type === 'all' ? projects : projects.filter((project) => project.type === type)

  return (
    <Section id="all-projects" title={ui.projects.allTitle}>
      <ProjectTypeFilter
        value={type}
        onChange={setType}
        counts={countsByType}
        total={projects.length}
      />

      <p className="sr-only" aria-live="polite">
        {fillTemplate(ui.projects.count, { count: visible.length })}
      </p>

      {visible.length > 0 ? (
        <CardGrid
          items={visible}
          renderItem={(project) => <ProjectCard project={project} />}
          className="mt-8"
        />
      ) : (
        <GlassPanel strong className="mt-8 px-6 py-14 text-center">
          <h3 className="text-xl font-bold sm:text-2xl">{ui.projects.empty.title}</h3>
          <p className="mx-auto mt-2 max-w-md text-ink-soft">{ui.projects.empty.text}</p>
          <Button
            as="button"
            type="button"
            variant="secondary"
            onClick={() => setType('all')}
            className="mt-6"
          >
            {ui.projects.empty.reset}
          </Button>
        </GlassPanel>
      )}
    </Section>
  )
}
