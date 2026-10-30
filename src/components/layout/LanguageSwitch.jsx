import { LANGUAGES } from '@/i18n/languages'
import { useLanguage } from '@/i18n/useLanguage'
import { cx } from '@/lib/cx'

/** Saklar bahasa ID | EN. Daftar bahasa diatur di src/i18n/languages.js. */
export default function LanguageSwitch() {
  const { lang, setLang, ui } = useLanguage()

  return (
    <div
      role="group"
      aria-label={ui.nav.language}
      className="flex rounded-full bg-surface p-0.5 ring-1 ring-line"
    >
      {LANGUAGES.map(({ code, short, name }) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-label={`${short}: ${name}`}
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
          className={cx(
            'h-10 min-w-12 rounded-full px-3.5 text-xs font-bold transition-colors',
            lang === code ? 'bg-ink text-on-ink' : 'text-ink-soft hover:text-ink',
          )}
        >
          {short}
        </button>
      ))}
    </div>
  )
}
