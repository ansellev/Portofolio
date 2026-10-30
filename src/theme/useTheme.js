import { useContext } from 'react'
import { ThemeContext } from './themeContext'

/** { theme: 'light' | 'dark', setTheme, toggleTheme } */
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme harus dipakai di dalam <ThemeProvider>')
  return context
}
