import { STORAGE_KEYS } from '@/config/site'
import { readStorage } from '@/lib/storage'

export const THEMES = ['light', 'dark']

/** Tema untuk pengunjung yang belum pernah memilih. Samakan dengan DEFAULT_THEME di index.html. */
export const DEFAULT_THEME = 'light'

/** Warna bilah browser di HP (meta theme-color) untuk setiap tema. */
export const THEME_COLORS = { light: '#dbe7ff', dark: '#0d0e17' }

export const isTheme = (value) => THEMES.includes(value)

/**
 * Tema awal. Skrip kecil di index.html sudah memasang `data-theme` sebelum halaman tampil
 * (supaya tidak berkedip); aturannya sama: pilihan tersimpan dulu, kalau belum ada pakai DEFAULT_THEME.
 * Pengaturan tema sistem perangkat sengaja tidak dipakai: website selalu dibuka dengan tema terang.
 */
export function resolveInitialTheme() {
  const fromHtml = document.documentElement.dataset.theme
  if (isTheme(fromHtml)) return fromHtml
  const saved = readStorage(STORAGE_KEYS.theme)
  return isTheme(saved) ? saved : DEFAULT_THEME
}
