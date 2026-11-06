/**
 * Mencari warna AKSEN dominan sebuah gambar, untuk memberi nuansa warna pada kartu.
 *
 * Gambar diperkecil ke 48 px lalu setiap piksel dikelompokkan menurut rona (hue). Piksel abu-abu,
 * putih, dan hitam diabaikan karena bukan aksen, dan piksel yang lebih jenuh dan lebih terang
 * bobotnya lebih besar. Rona dengan bobot terbesar menang. Hasilnya { h: 0-360, s: 0-1 },
 * atau null kalau gambarnya nyaris tanpa warna (mis. hitam putih) atau gagal dimuat. Gambar berwarna
 * pucat dicoba sekali lagi dengan batas jenuh yang lebih longgar sebelum dianggap tanpa warna.
 *
 * Hasil disimpan per alamat gambar, jadi setiap gambar hanya dianalisis sekali.
 */
const SAMPLE_SIZE = 48
const HUE_BINS = 24
const MIN_SATURATION = 0.18 // di bawah ini dianggap abu-abu
const SOFT_MIN_SATURATION = 0.07 // pencarian kedua yang lebih longgar untuk gambar berwarna pucat (mis. sertifikat)
const MIN_VALUE = 0.2 // di bawah ini dianggap hitam
const MIN_SHARE = 0.012 // rona pemenang harus mengisi minimal 1,2% gambar

const resolved = new Map() // alamat gambar -> { h, s } atau null
const listeners = new Set()
let version = 0

/** Hasil yang sudah dihitung ({h, s} atau null), atau undefined bila gambarnya belum dianalisis. */
export const peekImageAccent = (url) => resolved.get(url)

/** Untuk useSyncExternalStore: berubah setiap kali ada gambar baru yang selesai dianalisis. */
export const subscribeImageAccents = (listener) => {
  listeners.add(listener)
  return () => listeners.delete(listener)
}
export const getImageAccentVersion = () => version

/**
 * Menganalisis sebuah <img> yang SUDAH selesai dimuat (panggil dari onLoad). Gambar tidak diunduh lagi,
 * jadi warna hanya dihitung untuk foto yang memang ditampilkan, dan hanya sekali per foto.
 */
export function analyzeImage(url, image) {
  if (!url || resolved.has(url) || !image?.naturalWidth) return
  let accent = null
  try {
    const ratio = image.naturalHeight / image.naturalWidth
    const width = SAMPLE_SIZE
    const height = Math.max(8, Math.round(SAMPLE_SIZE * ratio))
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const context = canvas.getContext('2d', { willReadFrequently: true })
    context.drawImage(image, 0, 0, width, height)
    const pixels = context.getImageData(0, 0, width, height).data
    accent = pickAccent(pixels) ?? pickAccent(pixels, SOFT_MIN_SATURATION)
  } catch {
    accent = null
  }
  resolved.set(url, accent)
  version += 1
  listeners.forEach((listener) => listener())
}

/** Murni (tanpa DOM): menerima data piksel RGBA dan mengembalikan { h, s } atau null. */
export function pickAccent(data, minSaturation = MIN_SATURATION) {
  const weight = new Float64Array(HUE_BINS)
  const sinSum = new Float64Array(HUE_BINS)
  const cosSum = new Float64Array(HUE_BINS)
  const satSum = new Float64Array(HUE_BINS)
  let counted = 0

  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < 128) continue
    counted += 1
    const r = data[i] / 255
    const g = data[i + 1] / 255
    const b = data[i + 2] / 255
    const max = Math.max(r, g, b)
    const delta = max - Math.min(r, g, b)
    const saturation = max === 0 ? 0 : delta / max
    if (saturation < minSaturation || max < MIN_VALUE) continue

    let hue
    if (max === r) hue = ((g - b) / delta) % 6
    else if (max === g) hue = (b - r) / delta + 2
    else hue = (r - g) / delta + 4
    hue = (hue * 60 + 360) % 360

    const w = saturation * (0.4 + 0.6 * max)
    const bin = Math.floor(hue / (360 / HUE_BINS)) % HUE_BINS
    const radians = (hue * Math.PI) / 180
    weight[bin] += w
    sinSum[bin] += w * Math.sin(radians)
    cosSum[bin] += w * Math.cos(radians)
    satSum[bin] += w * saturation
  }
  if (counted === 0) return null

  // Rona pemenang = bin terberat, dengan bantuan setengah bobot tetangganya (rona berdekatan menyatu).
  let best = -1
  let bestScore = 0
  for (let bin = 0; bin < HUE_BINS; bin += 1) {
    const score =
      weight[bin] + 0.5 * (weight[(bin + HUE_BINS - 1) % HUE_BINS] + weight[(bin + 1) % HUE_BINS])
    if (score > bestScore) {
      bestScore = score
      best = bin
    }
  }
  if (best < 0 || bestScore / counted < MIN_SHARE) return null

  let sin = 0
  let cos = 0
  let sat = 0
  let total = 0
  for (const bin of [best - 1, best, best + 1]) {
    const k = (bin + HUE_BINS) % HUE_BINS
    sin += sinSum[k]
    cos += cosSum[k]
    sat += satSum[k]
    total += weight[k]
  }
  return { h: ((Math.atan2(sin, cos) * 180) / Math.PI + 360) % 360, s: sat / total }
}
