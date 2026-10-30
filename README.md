# Portofolio Anselmus Levin Lukman

React + Vite + Tailwind CSS v4. Dua bahasa (Indonesia default, Inggris), tema glassmorphism.

**Status halaman:** Tentang Saya (`/`), Project (`/projects`), dan Pengalaman Organisasi (`/organization`) sudah jadi.

## Menjalankan

```bash
npm install
npm run dev            # pengembangan, alamatnya tampil di terminal
npm run build          # hasil produksi ke folder dist/
npm run preview        # mencoba hasil build
npm run lint           # memeriksa kode (ESLint)
npm run format         # merapikan format semua berkas (Prettier)
npm run check:content  # memeriksa terjemahan dan konten sudah lengkap di dua bahasa
```

Jalankan `npm run lint` dan `npm run check:content` sebelum deploy.

## Struktur folder

```
src/
├─ main.jsx                  titik masuk (router + tema + bahasa)
├─ App.jsx                   daftar route (diambil dari config/routes.jsx)
├─ config/
│  ├─ routes.jsx             daftar halaman: satu-satunya tempat menambah halaman
│  └─ site.js                kunci penyimpanan preferensi pengunjung
├─ content/                  ISI website: data yang kamu edit
│  ├─ profile.js             nama, peran, bio, media sosial
│  ├─ education.js           riwayat pendidikan
│  ├─ skills.js              skill per kelompok
│  ├─ certifications.js      sertifikasi dan penghargaan (field `image` = nama file gambar)
│  ├─ certificateImages.js   mencari file gambar sertifikat berdasarkan namanya
│  ├─ projects.js            daftar project (satu objek per project)
│  ├─ projectTypes.js        tipe project dan urutan filternya
│  ├─ projectImages.js       mencari file foto project berdasarkan namanya
│  ├─ experiences.js         daftar pengalaman organisasi (satu objek per pengalaman)
│  └─ experienceImages.js    mencari file foto pengalaman berdasarkan namanya
├─ i18n/
│  ├─ languages.js           daftar bahasa
│  ├─ locales/id.js, en.js   teks antarmuka (tombol, label, judul bagian)
│  ├─ LanguageProvider.jsx   penyedia bahasa aktif
│  └─ useLanguage.js         hook: { lang, setLang, ui, localize }
├─ theme/                    mode terang/gelap
│  ├─ ThemeProvider.jsx      menyimpan tema aktif dan memasangnya ke <html data-theme>
│  ├─ useTheme.js            hook: { theme, setTheme, toggleTheme }
│  └─ themes.js              daftar tema, warna bilah browser, aturan tema awal
├─ pages/                    satu folder per halaman
│  ├─ about/AboutPage.jsx    + sections/ (Hero, AboutMe, Education, Skills, Certifications, Contact)
│  ├─ projects/ProjectsPage.jsx   + sections/ (TopProjects, AllProjects) dan components/ (ProjectCard, ProjectTypeFilter)
│  ├─ organization/OrganizationPage.jsx   + sections/ (TopExperience, AllExperience) dan components/ (ExperienceCard)
│  └─ not-found/
├─ components/
│  ├─ layout/                Navbar, ThemeToggle, CvDownloadButton, LanguageSwitch, SkipLink, Footer, SiteLayout
│  ├─ ui/                    GlassPanel, Reveal, Section, Button, Chip, SocialLink, SunMoonIcon, ...
│  │                         dan kartu berfoto yang dipakai bersama: CoverflowCarousel, CardGrid, MediaCard,
│  │                         ImageGallery, ExpandableText
│  └─ effects/               DigitalWave/ (gelombang titik di hero) dan ContourWaves/ (gelombang garis di kartu "Mari berkolaborasi");
│                            masing-masing berisi komponen, renderer, dan config
├─ hooks/                    usePointerGlow, useRevealOnScroll, useHoverCycle, useDragSwipe, ...
├─ lib/                      cx (gabung class), storage (localStorage aman), createImageLookup, fillTemplate
├─ styles/                   index.css, tokens, base, glass, theme, motion, hero, coverflow, fonts
└─ assets/                   images/ (profile, certificates/, projects/, experiences/) dan fonts/
scripts/check-content.mjs    pemeriksa kelengkapan konten
```

## Cara mengubah dan menambah

| Yang ingin dilakukan                               | Yang diubah                                                                                                                                                                                       |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ganti bio, peran, tagline                          | `src/content/profile.js`                                                                                                                                                                          |
| Tambah pendidikan                                  | tambah satu objek di `src/content/education.js` (`end: null` = masih berlangsung, `gpa` opsional)                                                                                                 |
| Tambah skill                                       | tambah item di kelompok yang sesuai di `src/content/skills.js`. Teks biasa (`'Figma'`) atau `{ id: '...', en: '...' }`                                                                            |
| Tambah sertifikasi atau penghargaan                | tambah satu objek di `src/content/certifications.js`; gambarnya ditaruh di `src/assets/images/certificates/` lalu nama filenya ditulis di field `image`                                           |
| Tambah project baru                                | tambah satu objek di `src/content/projects.js` dan taruh fotonya di `src/assets/images/projects/` (lihat bagian "Menambah project baru" di bawah)                                                 |
| Ubah tipe project atau urutan filter               | `src/content/projectTypes.js`; label tipenya di `projects.types` pada `locales/id.js` dan `en.js`                                                                                                 |
| Ubah ukuran, jarak, atau bayangan carousel         | `src/styles/coverflow.css` (`--card-w` = lebar kartu, `--step` = jarak slide samping); bayangan dan latar slide tengah di `--coverflow-shadow-active` dan `--coverflow-card-bg` pada `tokens.css` |
| Tambah pengalaman organisasi                       | tambah satu objek di `src/content/experiences.js` dan taruh fotonya di `src/assets/images/experiences/` (lihat bagian "Menambah pengalaman organisasi")                                           |
| Tambah media sosial                                | tambah satu objek di `socials` pada `profile.js`. Platform baru: daftarkan ikonnya di `components/ui/socialPlatforms.js`                                                                          |
| Ubah teks tombol atau judul bagian                 | `src/i18n/locales/id.js` dan `en.js` (struktur kuncinya harus sama)                                                                                                                               |
| Tambah halaman                                     | 1) buat `src/pages/<nama>/<Nama>Page.jsx`, 2) tambah satu baris di `src/config/routes.jsx`, 3) isi `nav.<key>` dan `pageTitles.<key>` di kedua berkas locales                                     |
| Tambah bahasa                                      | buat `locales/<kode>.js`, daftarkan di `locales/index.js` dan `i18n/languages.js`, lalu isi `{ <kode>: '...' }` di semua teks dua bahasa                                                          |
| Ganti warna, font, radius                          | `src/styles/tokens.css`: blok `@theme` = tema terang, blok `:root[data-theme='dark']` = tema gelap                                                                                                |
| Ubah tampilan kaca                                 | `src/styles/glass.css` (atau `GlassPanel.jsx` untuk bentuk dan radius)                                                                                                                            |
| Ubah panel kaca peran dan grid sosial di hero      | `.hero-intro` dan `.hero-socials` di `styles/hero.css`; keduanya berbagi satu baris grid di `HeroSection.jsx` sehingga tepi atas dan bawahnya selalu sejajar                                      |
| Ubah animasi gelombang                             | bentuk dan kepadatan di `components/effects/DigitalWave/waveConfig.js` (`WAVE_PARAMS`); warna dan kepudaran per tema di `WAVE_PALETTES` pada berkas yang sama                                     |
| Ubah gelombang garis di kartu Kontak               | `components/effects/ContourWaves/contourConfig.js`: `CONTOUR_PALETTES` (warna dan ketebalan per tema), `CONTOUR_PARAMS` (jarak antar garis, tinggi dan kecepatan gelombang)                       |
| Perbarui CV yang diunduh                           | ganti file `public/cv/Anselmus_Levin_Lukman_CV.pdf` dengan CV terbaru (nama file tetap sama); nama file dan alamatnya diatur di `CV_FILE` pada `src/config/site.js`                               |
| Ubah seberapa samar gelombang di kartu Kontak      | `.contact-waves` pada `styles/base.css`: bagian tengah (tempat teks) dibuat samar dengan mask; naikkan angka alfa agar garisnya lebih tegas                                                       |
| Ubah latar gradasi halaman                         | `src/styles/base.css`: `body::before` = tema terang, `body::after` = tema gelap                                                                                                                   |
| Ubah ikon atau animasi tombol tema                 | bentuk di `components/ui/SunMoonIcon.jsx`, gerakannya di `src/styles/theme.css`                                                                                                                   |
| Matikan efek hover atau animasi naik di satu frame | `<GlassPanel glow={false}>` (efek hover)                                                                                                                                                          |
| Ganti foto                                         | `src/assets/images/hero-cutout.webp` (hero) dan `profile-photo.png` (bagian Tentang Saya), nama berkas tetap sama                                                                                 |

Setelah mengubah konten, jalankan `npm run check:content`: ia akan memberi tahu jika ada teks yang belum diisi di salah satu bahasa.

## Konvensi

- Komponen: `PascalCase.jsx`. Hook: `useNamaHook.js`. Data dan utilitas: `camelCase.js`. Folder: huruf kecil.
- Impor memakai alias `@/` yang menunjuk ke `src/` (contoh: `@/components/ui/Button`).
- Di data konten, `key` adalah pengenal unik item. Kode bahasa (`id`, `en`) hanya dipakai untuk teks.
- Warna dipakai lewat token (`text-ink`, `text-ink-soft`, `bg-surface`, `ring-line`, `text-on-ink`, `bg-accent`), bukan `text-white` atau `bg-white/..`, supaya otomatis mengikuti mode terang dan gelap. Untuk kasus khusus pakai varian `dark:` (contoh: `dark:text-(--brand-dark)` di `SocialLink`).
- Teks untuk pengunjung tidak ditulis langsung di komponen: teks antarmuka ada di `i18n/locales`, isi pribadi di `content/`.

## Menambah project baru

1. Taruh foto project di `src/assets/images/projects/` (rasio 16:9, webp atau jpg, di bawah 150 KB per foto).
2. Salin satu objek di `src/content/projects.js`, lalu ubah isinya:

```js
{
  key: 'nama-unik',            // huruf kecil, tanpa spasi, tidak boleh sama dengan project lain
  featured: false,             // true = ikut tampil di carousel "Top Projects"
  type: 'frontend',            // 'uiux' | 'frontend' | 'backend' | 'fullstack'
  name: 'Nama Project',
  stack: ['React', 'Tailwind CSS'],
  description: { id: 'Deskripsi bahasa Indonesia.', en: 'English description.' },
  images: ['nama-unik-1.webp', 'nama-unik-2.webp'],   // foto pertama = gambar utama
  githubUrl: 'https://github.com/...',
  demoUrl: null,               // isi link demo agar tombol "Demo" muncul
},
```

3. Jalankan `npm run check:content`. Perintah ini memberi tahu kalau ada teks yang belum diisi di salah satu
   bahasa, tipe yang salah, nama file foto yang tidak ditemukan, atau link yang tidak diawali `https://`.

Cara kerjanya:

- **Top Projects** menampilkan semua project dengan `featured: true` sebagai carousel (berputar tanpa akhir;
  tiga sampai lima project paling pas). **All Projects** menampilkan semua project dalam grid.
- Filter di All Projects mengikuti `PROJECT_TYPES`. Pilihan yang belum punya project menampilkan pesan kosong.
- Foto berganti saat kartu di-hover atau difokus dengan keyboard; di layar sentuh pakai titik kecil di bawah foto.
- Deskripsi yang panjang dipotong beberapa baris dengan tombol "Selengkapnya" (hanya muncul bila memang terpotong).
- Tombol GitHub dan Demo muncul hanya untuk link yang diisi.

## Menambah pengalaman organisasi

Halaman Pengalaman Organisasi memakai susunan yang sama dengan halaman Project (carousel "Top Experience", lalu
grid "All Experience"), hanya tanpa filter. Kartu dan carousel-nya komponen yang sama, jadi perubahan gaya
di satu halaman otomatis berlaku di halaman lainnya.

1. Taruh foto kegiatan atau sertifikat di `src/assets/images/experiences/` (rasio 16:9, webp atau jpg).
2. Salin satu objek di `src/content/experiences.js`, lalu ubah isinya:

```js
{
  key: 'nama-unik',
  featured: false,             // true = ikut tampil di carousel "Top Experience"
  name: 'Nama Kegiatan',       // atau { id: '...', en: '...' } kalau judulnya berbeda per bahasa
  role: { id: 'Divisi Acara', en: 'Event Committee' },   // opsional
  points: {
    id: ['Poin pertama.', { text: 'Poin dengan daftar:', items: ['Satu', 'Dua'] }],
    en: ['First point.', { text: 'Point with a list:', items: ['One', 'Two'] }],
  },
  images: ['nama-unik-1.webp'],
},
```

3. Jalankan `npm run check:content`: perintah ini memeriksa jumlah poin yang sama di kedua bahasa dan nama file foto.

## Mode terang dan gelap

- Tombol bulan/matahari di navbar mengganti tema. Ikon menunjukkan mode yang sedang aktif (matahari = terang, bulan = gelap), dan labelnya menyebut aksi berikutnya ("Aktifkan mode gelap").
- Website selalu dibuka dengan tema terang (pengaturan tema sistem perangkat tidak dipakai). Setelah pengunjung memilih lewat tombol, pilihannya tersimpan (`portfolio-theme`) dan dipakai pada kunjungan berikutnya.
- Skrip kecil di `index.html` memasang tema sebelum halaman tampil, jadi tidak ada kedipan terang lalu gelap. Aturannya sama dengan `src/theme/themes.js`; kalau kamu mengganti kunci penyimpanan di `src/config/site.js`, ganti juga di skrip itu.
- Untuk mengganti tema bawaan, ubah `DEFAULT_THEME` di `src/theme/themes.js` **dan** di skrip pada `index.html` (nilainya harus sama).
- Kaca (glassmorphism) tetap dipakai di kedua tema; hanya warnanya yang berganti lewat variabel `--glass-*` di `tokens.css`. Kedua animasi gelombang (titik di hero dan garis di dasar halaman) berwarna biru muda ke ungu di tema terang dan abu-abu ke putih di tema gelap.

## Checklist UX saat menambah halaman atau fitur

Desain ini mengikuti 8 Golden Rules (Shneiderman), hierarki visual, dan prinsip user-centered design. Gunakan daftar ini setiap menambah sesuatu:

| Prinsip                  | Yang dijaga di website ini                                                                                                                         | Yang perlu kamu lakukan untuk bagian baru                                  |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Konsisten                | Satu gaya frame (`GlassPanel`), tombol (`Button`), judul bagian (`Section`), dan token di `styles/tokens.css`                                      | Pakai komponen yang ada, jangan menulis ulang style                        |
| Pintasan                 | Skip link, navigasi keyboard penuh, pilihan bahasa tersimpan, alamat `/#contact` langsung membuka bagian kontak                                    | Beri `id` pada `Section` baru agar bisa ditautkan                          |
| Umpan balik              | Menu aktif ditandai, hover dan fokus terlihat di semua tombol, tautan keluar diumumkan "membuka tab baru"                                          | Beri status hover, fokus, dan aktif pada elemen interaktif baru            |
| Penutup alur             | Halaman diakhiri bagian Kontak; tombol sosial di hero dan bagian Kontak di akhir halaman memberi jalur yang jelas untuk menghubungi                | Akhiri halaman baru dengan langkah berikutnya yang jelas                   |
| Pencegahan kesalahan     | Alamat yang tidak ada menampilkan halaman 404 dengan tombol kembali; semua teks dua bahasa dicek `npm run check:content`                           | Jalankan `npm run check:content` setelah mengubah teks                     |
| Mudah dibatalkan         | Saklar bahasa dan menu bisa dibalik kapan saja                                                                                                     | Jangan membuat aksi yang tidak bisa dibatalkan                             |
| Pengguna yang mengontrol | Animasi latar mengikuti pengaturan "reduce motion" perangkat (diam di satu pose); tidak ada putar-otomatis suara atau pembajakan scroll            | Animasi baru harus berhenti saat `usePrefersReducedMotion()` bernilai true |
| Beban ingatan ringan     | Ikon selalu disertai label, posisi menu tetap di atas, nama, peran, dan tombol sosial terlihat di layar pertama (cek `npm run dev` di layar kecil) | Jaga satu aksi utama per bagian dan teks tetap singkat                     |

Ukuran minimal: target sentuh 44 px (saklar bahasa 40 px di dalam wadah 44 px), kontras teks minimal 4,5:1 (diukur 5,8:1 pada teks yang berada di atas animasi gelombang).

## Deploy (Vercel)

1. Upload folder ini ke repositori GitHub.
2. Di vercel.com pilih **Add New > Project**, impor repositori tersebut.
3. Biarkan pengaturan default (Framework: Vite, Build: `npm run build`, Output: `dist`), lalu **Deploy**.

`vercel.json` (Vercel) dan `public/_redirects` (Netlify) sudah menyiapkan pengalihan agar membuka atau me-refresh `/projects` tidak menghasilkan 404.

## Aksesibilitas

Skip link ke konten utama, navigasi keyboard penuh (Escape menutup menu), fokus dipindah ke konten saat pindah halaman, judul tab mengikuti halaman dan bahasa, target sentuh besar, tautan keluar diumumkan sebagai tab baru, tombol tema punya label yang menyebut aksinya dan bisa dipakai dengan keyboard, animasi (termasuk perubahan ikon tema) mengikuti pengaturan "reduce motion" perangkat.

Lisensi font: Manrope (SIL Open Font License). Berkas `manrope-800-outline.woff2` adalah turunan Manrope 800 dengan kontur tumpang-tindih dihapus untuk teks garis tepi.
