import Section from '@/components/ui/Section'
import { certifications } from '@/content/certifications'
import { useLanguage } from '@/i18n/useLanguage'
import CertificationCard from '@/pages/about/components/CertificationCard'

/** Satu kartu per sertifikat/penghargaan (lihat pages/about/components/CertificationCard.jsx). */
export default function CertificationsSection() {
  const { ui } = useLanguage()

  return (
    <Section id="certs" title={ui.sections.certs}>
      <ul className="grid gap-5 md:grid-cols-2">
        {certifications.map((item, index) => (
          <CertificationCard key={item.key} item={item} index={index} />
        ))}
      </ul>
    </Section>
  )
}
