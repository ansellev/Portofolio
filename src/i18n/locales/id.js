/**
 * Teks antarmuka (label, tombol, judul bagian) dalam Bahasa Indonesia.
 * Konten pribadi (bio, pendidikan, skill, dll.) ada di src/content.
 * Struktur kunci harus sama persis dengan en.js: cek dengan `npm run check:content`.
 */
export default {
  site: {
    skipToContent: 'Langsung ke konten utama',
    footer: 'Dibuat dengan React.',
    opensInNewTab: 'membuka tab baru',
  },
  nav: {
    label: 'Navigasi utama',
    menuOpen: 'Buka menu',
    menuClose: 'Tutup menu',
    language: 'Bahasa',
    about: 'Tentang Saya',
    projects: 'Project',
    organization: 'Pengalaman Organisasi',
  },
  cv: {
    label: 'CV',
    download: 'Unduh CV (PDF)',
  },
  theme: {
    toDark: 'Aktifkan mode gelap',
    toLight: 'Aktifkan mode terang',
  },
  pageTitles: {
    about: 'Tentang Saya',
    projects: 'Project',
    organization: 'Pengalaman Organisasi',
    notFound: 'Halaman tidak ditemukan',
  },
  hero: {
    socials: 'Media sosial',
  },
  sections: {
    about: 'Tentang Saya',
    education: 'Pendidikan',
    skills: 'Skill',
    certs: 'Sertifikasi & Penghargaan',
  },
  education: { present: 'Sekarang', gpa: 'IPK' },
  certs: {
    kinds: { certification: 'Sertifikasi', award: 'Penghargaan' },
    viewFull: 'Lihat gambar penuh: {name}',
  },
  contact: {
    heading: 'Mari berkolaborasi',
    text: 'Punya pertanyaan, ide kolaborasi, atau sekadar ingin menyapa? Pilih salah satu kanal di bawah ini.',
  },
  media: {
    imageAlt: '{name}: tampilan {n} dari {total}',
    showImage: 'Tampilkan foto {n} dari {total}',
    readMore: 'Selengkapnya',
    readLess: 'Lebih sedikit',
  },
  experience: {
    topTitle: 'Top Experience',
    allTitle: 'All Experience',
    carousel: {
      label: 'Top Experience. Geser ke kiri atau kanan untuk melihat pengalaman lainnya.',
      previous: 'Pengalaman sebelumnya',
      next: 'Pengalaman berikutnya',
      goTo: 'Tampilkan pengalaman {name}',
      slide: 'Pengalaman {n} dari {total}',
    },
  },
  projects: {
    topTitle: 'Top Projects',
    allTitle: 'All Projects',
    filterLabel: 'Filter project berdasarkan tipe',
    filterAll: 'Semua',
    types: { uiux: 'UI/UX', frontend: 'Frontend', backend: 'Backend', fullstack: 'Full-stack' },
    stack: 'Teknologi yang dipakai',
    github: 'GitHub',
    demo: 'Demo',
    count: '{count} project ditampilkan',
    carousel: {
      label: 'Top Projects. Geser ke kiri atau kanan untuk melihat project lainnya.',
      previous: 'Project sebelumnya',
      next: 'Project berikutnya',
      goTo: 'Tampilkan project {name}',
      slide: 'Project {n} dari {total}',
    },
    empty: {
      title: 'Belum ada project di kategori ini',
      text: 'Pilih kategori lain atau lihat semua project.',
      reset: 'Lihat semua project',
    },
  },
  notFound: {
    text: 'Alamat yang kamu buka tidak ada atau sudah dipindahkan.',
    back: 'Kembali ke beranda',
  },
}
