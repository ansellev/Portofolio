import { profile } from '@/content/profile'
import { useLanguage } from '@/i18n/useLanguage'

/** Dasar halaman: satu baris hak cipta. */
export default function Footer() {
  const { ui } = useLanguage()
  return (
    <footer className="mt-16 px-5 pb-8 text-center text-sm text-ink-soft">
      © {new Date().getFullYear()} {profile.name.full}. {ui.site.footer}
    </footer>
  )
}
