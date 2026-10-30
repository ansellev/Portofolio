import { useLanguage } from '@/i18n/useLanguage'

/** Tautan "langsung ke konten" untuk pengguna keyboard dan pembaca layar. Muncul saat mendapat fokus. */
export default function SkipLink() {
  const { ui } = useLanguage()
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-on-ink"
    >
      {ui.site.skipToContent}
    </a>
  )
}
