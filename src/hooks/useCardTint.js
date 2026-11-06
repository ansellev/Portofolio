import { useSyncExternalStore } from 'react'
import { getImageAccentVersion, peekImageAccent, subscribeImageAccents } from '@/lib/imageAccent'
import { TINT_FOLLOWS_PHOTO, tintColor } from '@/lib/cardTint'
import { useTheme } from '@/theme/useTheme'

/**
 * Warna gradien kartu yang mengikuti warna dominan gambarnya.
 * Warna dibaca dari foto yang sudah dimuat (kartu meneruskan onLoad foto ke `analyzeImage`),
 * jadi tidak ada unduhan tambahan dan kartu yang belum terlihat belum dianalisis.
 *
 * @param urls   daftar URL gambar kartu (boleh kosong)
 * @param index  gambar yang sedang tampil. Kartu dengan banyak foto berganti warna mengikuti foto yang tampil
 *               (matikan lewat TINT_FOLLOWS_PHOTO di lib/cardTint.js untuk selalu memakai foto pertama)
 * @returns      string warna CSS, atau null selama fotonya belum dimuat (gradien belum ditampilkan)
 */
export function useCardTint(urls, index = 0) {
  const { theme } = useTheme()
  useSyncExternalStore(subscribeImageAccents, getImageAccentVersion) // render ulang saat ada warna baru

  if (urls.length === 0) return tintColor(null, theme) // kartu tanpa gambar
  const accent = peekImageAccent(urls[TINT_FOLLOWS_PHOTO ? index % urls.length : 0])
  return accent === undefined ? null : tintColor(accent, theme)
}
