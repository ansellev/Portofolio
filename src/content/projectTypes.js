/**
 * Tipe project dan urutannya di filter "All Projects".
 * Label tampilannya ada di src/i18n/locales (projects.types). Untuk tipe baru: tambahkan di sini
 * dan di kedua berkas locale, lalu pakai di field `type` pada src/content/projects.js.
 */
export const PROJECT_TYPES = ['uiux', 'frontend', 'backend', 'fullstack']

/** Tipe sebuah project sebagai daftar: `type: 'uiux'` dan `type: ['uiux', 'frontend']` sama-sama diterima. */
export const typesOf = (project) => [project.type].flat()
