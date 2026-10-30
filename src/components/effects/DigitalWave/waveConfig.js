/**
 * Pengaturan animasi gelombang digital.
 * Ubah warna, bentuk, dan kepadatan titik dari sini; logika gambarnya ada di waveRenderer.js.
 */

/**
 * Warna titik per tema, dari kiri (`from`) ke kanan (`to`). Format [R, G, B].
 * `intensity` = kepudaran: 1 = penuh seperti referensi, mendekati 0 = nyaris tak terlihat.
 */
export const WAVE_PALETTES = {
  light: { from: [56, 189, 248], to: [139, 92, 246], intensity: 0.5 }, // biru muda ke ungu
  dark: { from: [150, 156, 172], to: [250, 250, 253], intensity: 0.6 }, // abu-abu ke putih
}

/**
 * Gelombang panjang yang dijumlahkan menjadi permukaan.
 * a = tinggi, ku/kv = kerapatan gelombang, w = kecepatan alir ke kanan, p = fase awal.
 */
export const WAVE_TERMS = [
  { a: 0.62, ku: 0.55, kv: 0.2, w: 0.5, p: 0.0 },
  { a: 0.3, ku: 1.05, kv: -0.35, w: 0.8, p: 1.7 },
  { a: 0.12, ku: 2.1, kv: 0.6, w: 1.1, p: 3.1 },
]

export const WAVE_PARAMS = {
  // Bentuk dan posisi lembaran 3D
  yaw: 0.45,
  U: 8,
  V: 6,
  X0: 0.2,
  Z0: 5.5,
  camH: 1.4,
  hy: 0.05,
  amp: 0.75,
  curl: 0.0,
  rise: 0.17,
  // Titik, depth of field, kabut, dan kecerahan
  r0: 0.0105,
  focus: 9,
  aperture: 0.04,
  fogStart: 14,
  fogLen: 8,
  base: 0.4,
  // Kepadatan titik. `quality` (0.4 - 1) diturunkan otomatis bila perangkat lambat.
  colDiv: 3.2,
  maxCols: 300,
  quality: 1,
}

/** Warna-warna dibagi ke sekian langkah (sprite) di sepanjang lebar frame. */
export const COLOR_STEPS = 28

/** Waktu (detik) untuk pose pertama / saat animasi diam. */
export const START_TIME = 3
