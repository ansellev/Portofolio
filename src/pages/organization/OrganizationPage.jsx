import AllExperienceSection from '@/pages/organization/sections/AllExperienceSection'
import TopExperienceSection from '@/pages/organization/sections/TopExperienceSection'

/** Halaman "Pengalaman Organisasi": carousel Top Experience, lalu grid All Experience. */
export default function OrganizationPage() {
  return (
    <>
      <TopExperienceSection />
      <AllExperienceSection />
    </>
  )
}
