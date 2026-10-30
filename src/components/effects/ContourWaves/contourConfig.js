/**
 * Pengaturan animasi gelombang garis kontur (kartu "Mari berkolaborasi").
 * Ubah warna, kerapatan, dan kecepatan dari sini; logika gambarnya ada di contourRenderer.js.
 */

/**
 * Warna garis per tema, dari kiri ke kanan (beberapa titik warna, format [R, G, B]).
 * `alpha` = ketebalan warna garis: 1 = pekat, mendekati 0 = nyaris tak terlihat.
 */
export const CONTOUR_PALETTES = {
  light: {
    stops: [
      [56, 189, 248], // biru muda
      [99, 102, 241], // indigo
      [168, 85, 247], // ungu
    ],
    alpha: 0.55,
  },
  dark: {
    stops: [
      [139, 144, 156], // abu-abu
      [200, 203, 212], // abu-abu terang
      [255, 255, 255], // putih
    ],
    alpha: 0.4,
  },
}

export const CONTOUR_PARAMS = {
  gap: 13, // jarak antar garis (px)
  step: 8, // jarak antar titik di sepanjang satu garis (px); makin kecil makin halus
  lineWidth: 1.2,
  minWavelength: 520, // gelombang tidak dipadatkan lebih sempit dari ini di layar kecil (px)
  /**
   * Tiga gelombang yang dijumlahkan, semuanya merambat ke kanan.
   *   a              tinggi gelombang (px)
   *   wavelength     panjang gelombang, sebagai pecahan dari lebar layar
   *   speed          kecepatan (radian per detik); makin kecil makin pelan
   *   phasePerLine   selisih fase antar garis bertetangga: membuat garis merapat dan merenggang
   *                  seperti peta kontur. Jumlah (a x phasePerLine) harus lebih kecil dari `gap`
   *                  supaya garis tidak saling bersilangan.
   *   phase          fase awal
   */
  terms: [
    { a: 78, wavelength: 0.62, speed: 0.2, phasePerLine: 0.085, phase: 0 },
    { a: 26, wavelength: 0.33, speed: 0.31, phasePerLine: 0.12, phase: 1.3 },
    { a: 8, wavelength: 0.17, speed: 0.45, phasePerLine: 0.18, phase: 2.6 },
  ],
}

/** Waktu (detik) untuk pose pertama dan untuk tampilan diam ("reduce motion"). */
export const CONTOUR_START_TIME = 4
