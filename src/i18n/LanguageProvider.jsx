import { useCallback, useEffect, useMemo, useState } from 'react'
import { STORAGE_KEYS } from '@/config/site'
import { readStorage, writeStorage } from '@/lib/storage'
import { DEFAULT_LANGUAGE, LANGUAGES } from './languages'
import { LanguageContext } from './languageContext'
import { LOCALES } from './locales'

const isSupported = (code) => LANGUAGES.some((language) => language.code === code)

function getInitialLanguage() {
  const saved = readStorage(STORAGE_KEYS.language)
  return isSupported(saved) ? saved : DEFAULT_LANGUAGE
}

export default function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = lang
    writeStorage(STORAGE_KEYS.language, lang)
  }, [lang])

  const setLang = useCallback((code) => {
    if (isSupported(code)) setLangState(code)
  }, [])

  /**
   * Mengambil teks sesuai bahasa aktif dari data konten.
   * Menerima teks biasa ('Figma') atau objek per bahasa ({ id: '...', en: '...' }).
   */
  const localize = useCallback(
    (value) => {
      if (value == null) return ''
      if (typeof value !== 'object') return String(value)
      return value[lang] ?? value[DEFAULT_LANGUAGE] ?? ''
    },
    [lang],
  )

  const value = useMemo(
    () => ({ lang, setLang, ui: LOCALES[lang], localize }),
    [lang, setLang, localize],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
