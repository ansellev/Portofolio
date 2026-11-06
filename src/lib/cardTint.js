/**
 * Mengubah warna aksen sebuah gambar ({ h, s } dari lib/imageAccent.js) menjadi warna lembut untuk
 * gradien di dasar kartu. Kecerahannya dikunci per tema supaya kartu tidak pernah menjadi terlalu
 * gelap (tema terang) atau terlalu terang (tema gelap), apa pun warna gambarnya; jadi teks tetap terbaca.
 */
/** true: warna kartu berganti mengikuti foto yang sedang tampil; false: selalu mengikuti foto pertama. */
export const TINT_FOLLOWS_PHOTO = true

const LIGHTNESS = { light: 74, dark: 60 }
const MIN_LIGHT_LUMINANCE = 0.42 // di tema terang, warna gelap (mis. biru) dinaikkan kecerahannya sampai setara
const MIN_SATURATION = 42 // %, supaya warna pucat tetap terlihat sebagai nuansa
const MAX_SATURATION = 85 // %, supaya warna neon tetap lembut

// Dipakai bila gambar tanpa warna atau kartu tanpa gambar: ungu lembut senada dengan situs.
const FALLBACK = { light: 'hsl(255 70% 80%)', dark: 'hsl(255 60% 62%)' }

export function tintColor(accent, theme) {
  if (!accent) return FALLBACK[theme]
  const hue = Math.round(accent.h)
  const saturation = Math.min(MAX_SATURATION, Math.max(MIN_SATURATION, Math.round(accent.s * 100)))
  let lightness = LIGHTNESS[theme]
  // Rona yang secara alami gelap (biru, ungu) tampak lebih pekat pada kecerahan yang sama. Di tema terang,
  // naikkan kecerahannya supaya semua rona menghasilkan latar kartu yang sama terangnya, jadi teks aman.
  if (theme === 'light') {
    while (luminance(hue, saturation, lightness) < MIN_LIGHT_LUMINANCE && lightness < 88)
      lightness += 2
  }
  return `hsl(${hue} ${saturation}% ${lightness}%)`
}

/** Luminans relatif (0-1, rumus WCAG) dari warna HSL: h dalam derajat, s dan l dalam persen. */
function luminance(h, s, l) {
  const sat = s / 100
  const light = l / 100
  const a = sat * Math.min(light, 1 - light)
  const channel = (n) => {
    const k = (n + h / 30) % 12
    const value = light - a * Math.max(-1, Math.min(k - 3, 9 - k, 1))
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
  }
  return 0.2126 * channel(0) + 0.7152 * channel(8) + 0.0722 * channel(4)
}
