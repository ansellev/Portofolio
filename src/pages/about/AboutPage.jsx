import AboutMeSection from '@/pages/about/sections/AboutMeSection'
import CertificationsSection from '@/pages/about/sections/CertificationsSection'
import ContactSection from '@/pages/about/sections/ContactSection'
import EducationSection from '@/pages/about/sections/EducationSection'
import HeroSection from '@/pages/about/sections/HeroSection'
import SkillsSection from '@/pages/about/sections/SkillsSection'

/** Halaman "Tentang Saya": urutan bagian bisa diubah di sini. */
export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <EducationSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
    </>
  )
}
