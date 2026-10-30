import SunMoonIcon from '@/components/ui/SunMoonIcon'
import { useLanguage } from '@/i18n/useLanguage'
import { useTheme } from '@/theme/useTheme'

/** Tombol ganti tema terang/gelap di navbar. Ikonnya berubah antara matahari dan bulan. */
export default function ThemeToggle() {
  const { ui } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const label = theme === 'dark' ? ui.theme.toLight : ui.theme.toDark

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-on-ink transition-transform active:scale-95"
    >
      <SunMoonIcon mode={theme} className="h-[22px] w-[22px]" />
    </button>
  )
}
