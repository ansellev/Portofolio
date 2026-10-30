/**
 * Memeriksa kelengkapan konten tanpa perlu membuka browser:
 *  1. Struktur kunci id.js dan en.js identik.
 *  2. Setiap teks dua bahasa ({ id, en }) terisi lengkap.
 *  3. `key` pada setiap daftar konten unik.
 *  4. Setiap halaman di routes.jsx punya label navbar dan judul tab.
 *  5. Setiap `image` pada sertifikasi menunjuk ke file yang ada di src/assets/images/certificates/.
 *  6. Setiap project: tipe dikenal (dan punya label), foto ada di src/assets/images/projects/,
 *     link berbentuk http(s), dan minimal punya satu link (GitHub atau demo).
 *  7. Setiap pengalaman: foto ada di src/assets/images/experiences/, dan poin-poin (points)
 *     jumlahnya sama di bahasa Indonesia dan Inggris (termasuk daftar bernomor di dalamnya).
 *  8. File CV yang ditautkan tombol unduh (CV_FILE di src/config/site.js) ada di folder public/.
 * Jalankan: npm run check:content
 */
import { existsSync, readFileSync } from 'node:fs'
import { LANGUAGES } from '../src/i18n/languages.js'
import id from '../src/i18n/locales/id.js'
import en from '../src/i18n/locales/en.js'
import { profile } from '../src/content/profile.js'
import { education } from '../src/content/education.js'
import { skillGroups } from '../src/content/skills.js'
import { certifications } from '../src/content/certifications.js'
import { projects } from '../src/content/projects.js'
import { PROJECT_TYPES } from '../src/content/projectTypes.js'
import { experiences } from '../src/content/experiences.js'
import { CV_FILE } from '../src/config/site.js'

const codes = LANGUAGES.map((l) => l.code)
const problems = []

const flatten = (obj, prefix = '') =>
  Object.entries(obj).flatMap(([k, v]) =>
    v && typeof v === 'object' ? flatten(v, `${prefix}${k}.`) : [`${prefix}${k}`],
  )

// 1. locales
const idKeys = new Set(flatten(id))
const enKeys = new Set(flatten(en))
for (const k of idKeys) if (!enKeys.has(k)) problems.push(`en.js tidak punya kunci "${k}"`)
for (const k of enKeys) if (!idKeys.has(k)) problems.push(`id.js tidak punya kunci "${k}"`)

// 2. teks dua bahasa
const isBilingual = (v) =>
  v && typeof v === 'object' && !Array.isArray(v) && Object.keys(v).every((k) => codes.includes(k))
// Teks terisi: string tidak kosong, atau daftar (poin) yang semua isinya terisi.
// Satu poin boleh berupa { text, items: [...] } untuk daftar bernomor.
const isFilled = (v) => {
  if (typeof v === 'string') return v.trim().length > 0
  if (Array.isArray(v)) return v.length > 0 && v.every(isFilled)
  return Boolean(v) && typeof v === 'object' && isFilled(v.text) && (!v.items || isFilled(v.items))
}
// Bentuk daftar poin (jumlah poin dan jumlah item bernomor) harus sama di semua bahasa.
const shape = (v) =>
  Array.isArray(v) ? v.map((p) => (typeof p === 'string' ? 0 : (p.items?.length ?? 0))) : null
function walk(value, path) {
  if (Array.isArray(value)) return value.forEach((v, i) => walk(v, `${path}[${i}]`))
  if (!value || typeof value !== 'object') return
  if (isBilingual(value)) {
    for (const c of codes) {
      if (!isFilled(value[c])) problems.push(`${path}: teks "${c}" kosong`)
    }
    const shapes = codes.map((c) => JSON.stringify(shape(value[c])))
    if (new Set(shapes).size > 1)
      problems.push(
        `${path}: jumlah poin (atau item bernomor) berbeda antara ${codes.join(' dan ')}`,
      )
    return
  }
  Object.entries(value).forEach(([k, v]) => walk(v, `${path}.${k}`))
}
walk(profile, 'profile')
walk(education, 'education')
walk(skillGroups, 'skillGroups')
walk(certifications, 'certifications')
walk(projects, 'projects')
walk(experiences, 'experiences')

// 3. key unik
for (const [name, list] of Object.entries({
  education,
  skillGroups,
  certifications,
  projects,
  experiences,
})) {
  const keys = list.map((item) => item.key)
  if (keys.some((k) => !k)) problems.push(`${name}: ada item tanpa "key"`)
  if (new Set(keys).size !== keys.length) problems.push(`${name}: ada "key" ganda`)
}

// 4. halaman vs teks navbar/judul tab
const routesSource = readFileSync(new URL('../src/config/routes.jsx', import.meta.url), 'utf8')
for (const [, key] of routesSource.matchAll(/key:\s*'([^']+)'/g)) {
  for (const [lang, ui] of [
    ['id', id],
    ['en', en],
  ]) {
    if (!ui.nav?.[key]) problems.push(`${lang}.js: nav.${key} belum diisi`)
    if (!ui.pageTitles?.[key]) problems.push(`${lang}.js: pageTitles.${key} belum diisi`)
  }
}

// 5. gambar sertifikat
for (const item of certifications) {
  if (!item.image) continue
  const file = new URL(`../src/assets/images/certificates/${item.image}`, import.meta.url)
  if (!existsSync(file))
    problems.push(
      `certifications.${item.key}: file gambar "${item.image}" tidak ada di src/assets/images/certificates/`,
    )
}

// 6. project
for (const project of projects) {
  const label = `projects.${project.key}`
  if (!project.name) problems.push(`${label}: "name" kosong`)
  if (!PROJECT_TYPES.includes(project.type))
    problems.push(
      `${label}: tipe "${project.type}" tidak dikenal (pilihan: ${PROJECT_TYPES.join(', ')})`,
    )
  for (const image of project.images ?? []) {
    const file = new URL(`../src/assets/images/projects/${image}`, import.meta.url)
    if (!existsSync(file))
      problems.push(`${label}: foto "${image}" tidak ada di src/assets/images/projects/`)
  }
  for (const field of ['githubUrl', 'demoUrl']) {
    if (project[field] && !/^https?:\/\//.test(project[field]))
      problems.push(`${label}: ${field} harus diawali http:// atau https://`)
  }
  if (!project.githubUrl && !project.demoUrl)
    problems.push(`${label}: isi minimal satu link (githubUrl atau demoUrl)`)
}
for (const type of PROJECT_TYPES) {
  for (const [lang, ui] of [
    ['id', id],
    ['en', en],
  ]) {
    if (!ui.projects?.types?.[type]) problems.push(`${lang}.js: projects.types.${type} belum diisi`)
  }
}

// 7. pengalaman
for (const experience of experiences) {
  const label = `experiences.${experience.key}`
  if (!experience.name) problems.push(`${label}: "name" kosong`)
  if (!experience.points) problems.push(`${label}: "points" belum diisi`)
  for (const image of experience.images ?? []) {
    const file = new URL(`../src/assets/images/experiences/${image}`, import.meta.url)
    if (!existsSync(file))
      problems.push(`${label}: foto "${image}" tidak ada di src/assets/images/experiences/`)
  }
}

// 8. file CV
if (!existsSync(new URL(`../public${CV_FILE.href}`, import.meta.url)))
  problems.push(`CV: file "${CV_FILE.href}" tidak ada di folder public/`)

if (problems.length) {
  console.error('Ditemukan masalah:\n- ' + problems.join('\n- '))
  process.exit(1)
}
console.log('Konten lengkap: semua teks dua bahasa dan daftar halaman sudah konsisten.')
