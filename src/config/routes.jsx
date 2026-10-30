import AboutPage from '@/pages/about/AboutPage'
import OrganizationPage from '@/pages/organization/OrganizationPage'
import ProjectsPage from '@/pages/projects/ProjectsPage'

/**
 * Satu-satunya tempat untuk mendaftarkan halaman.
 * Menambah halaman baru:
 *   1. Buat komponennya di src/pages/<nama>/<Nama>Page.jsx
 *   2. Tambahkan satu baris di bawah
 *   3. Isi label navbar (`nav`) dan judul tab (`pageTitles`) di src/i18n/locales/id.js dan en.js
 * `key` dipakai untuk mencari teks di berkas locales.
 */
export const ROUTES = [
  { key: 'about', path: '/', Page: AboutPage },
  { key: 'projects', path: '/projects', Page: ProjectsPage },
  { key: 'organization', path: '/organization', Page: OrganizationPage },
]
