import AllProjectsSection from '@/pages/projects/sections/AllProjectsSection'
import TopProjectsSection from '@/pages/projects/sections/TopProjectsSection'

/** Halaman "Project": carousel Top Projects, lalu grid All Projects dengan filter. */
export default function ProjectsPage() {
  return (
    <>
      <TopProjectsSection />
      <AllProjectsSection />
    </>
  )
}
