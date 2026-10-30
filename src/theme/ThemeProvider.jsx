import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { STORAGE_KEYS } from '@/config/site'
import { writeStorage } from '@/lib/storage'
import { ThemeContext } from './themeContext'
import { THEME_COLORS, isTheme, resolveInitialTheme } from './themes'

/** Lama (ms) class `theme-switching` aktif, supaya warna berpindah halus (lihat styles/theme.css). */
const SWITCH_MS = 450

/**
 * Menyimpan tema aktif dan memasangnya ke <html data-theme="...">.
 * Pengunjung baru melihat tema terang (DEFAULT_THEME); pilihan yang dibuat lewat tombol tema tersimpan.
 */
export default function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(resolveInitialTheme)
  const switchTimer = useRef(0)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme])
  }, [theme])

  useEffect(() => () => window.clearTimeout(switchTimer.current), [])

  const setTheme = useCallback((next) => {
    if (!isTheme(next)) return
    const root = document.documentElement
    root.classList.add('theme-switching')
    window.clearTimeout(switchTimer.current)
    switchTimer.current = window.setTimeout(
      () => root.classList.remove('theme-switching'),
      SWITCH_MS,
    )
    setThemeState(next)
    writeStorage(STORAGE_KEYS.theme, next)
  }, [])

  const toggleTheme = useCallback(
    () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    [theme, setTheme],
  )

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, setTheme, toggleTheme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
