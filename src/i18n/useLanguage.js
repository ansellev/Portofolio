import { useContext } from 'react'
import { LanguageContext } from './languageContext'

/** { lang, setLang, ui, localize }: `ui` = teks antarmuka, `localize(x)` = teks konten sesuai bahasa. */
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage harus dipakai di dalam <LanguageProvider>')
  return context
}
