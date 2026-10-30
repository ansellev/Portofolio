import Section from '@/components/ui/Section'
import { projects } from '@/content/projects'
import { useLanguage } from '@/i18n/useLanguage'
import CoverflowCarousel from '@/components/ui/CoverflowCarousel'
import ProjectCard from '@/pages/projects/components/ProjectCard'

const featuredProjects = projects.filter((project) => project.featured)

/** Judul halaman + carousel project unggulan (project dengan `featured: true`). */
export default function TopProjectsSection() {
  const { ui } = useLanguage()
  if (featuredProjects.length === 0) return null

  return (
    <Section id="top-projects" title={ui.projects.topTitle} headingAs="h1" flush>
      <CoverflowCarousel
        items={featuredProjects}
        labels={ui.projects.carousel}
        renderItem={(project) => <ProjectCard project={project} variant="featured" />}
      />
    </Section>
  )
}
