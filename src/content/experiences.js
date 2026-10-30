/**
 * Daftar pengalaman organisasi dan kepanitiaan. Setiap objek = satu kartu; urutannya = urutan tampil.
 * Untuk MENAMBAH pengalaman: salin satu objek, ubah isinya, dan taruh fotonya di
 * src/assets/images/experiences/. Jalankan `npm run check:content` untuk memastikan semuanya lengkap.
 *
 *   key       id unik (huruf kecil, tanpa spasi)
 *   featured  true = tampil di carousel "Top Experience" (selain di "All Experience")
 *   name      judul kartu: teks, atau { id, en } kalau berbeda per bahasa
 *   role      divisi atau peran (opsional): { id, en }
 *   points    poin-poin kegiatan: { id: [...], en: [...] }, jumlah poinnya harus sama di kedua bahasa.
 *             Satu poin boleh berisi daftar bernomor: { text: 'Judul daftar:', items: ['Satu', 'Dua'] }
 *   images    nama file foto di src/assets/images/experiences/ (satu atau lebih; bisa kosong)
 */
export const experiences = [
  {
    key: 'techno-2025',
    featured: true,
    name: 'TECHNO 2025 - HIMTI Bina Nusantara',
    role: { id: 'Divisi Acara', en: 'Event Committee' },
    points: {
      id: [
        'Menyusun konsep acara, jadwal program, dan permainan interaktif untuk TECHNO 2025, yang berhasil menarik lebih dari 150 peserta.',
        'Mengundang 150 peserta untuk menghadiri TECHNO 2025.',
      ],
      en: [
        'Organized the event concept, program schedule, and interactive games for TECHNO 2025, which attracted 150+ participants.',
        'Bertugas sebagai Frontstage Liaison Officer untuk membantu lebih dari 10 tamu serta tamu VIP dalam acara ini.',
      ],
    },
    images: ['techno-2025-1.webp', 'techno-2025-2.webp', 'techno-2025-3.webp'],
  },
  {
    key: 'hishot-2026',
    featured: true,
    name: 'HISHOT 2026 - HIMTI Bina Nusantara',
    role: { id: 'Divisi PTTK', en: 'PTTK Division' },
    points: {
      id: [
        'Mengoordinasikan penyiapan peralatan dan pengaturan keselamatan untuk acara HISHOT 2026, mendukung lebih dari 5 persiapan acara, serta memastikan kesiapan lebih dari 10 jenis peralatan.',
        'Mendukung kelancaran acara dan operasional keselamatan untuk lima kegiatan termasuk seminar, workshop, dan kunjungan studi dengan total lebih dari 100 peserta.',
      ],
      en: [
        'Coordinating equipment preparation and safety arrangements for HISHOT 2026 events, supporting 5+ event setups and ensuring readiness across 10+ equipment items.',
        'Supported event flow and safety operations across five events, including seminars, workshops, and study tours, serving 100+ participants in total.',
      ],
    },
    images: ['hishot-2026-1.webp'],
  },
  {
    key: 'python-pkm-2026',
    featured: true,
    name: {
      id: 'Pembelajaran Python Dasar - PKM HIMTI 2026',
      en: 'Basic Python Programming Tutoring - PKM HIMTI 2026',
    },
    role: { id: 'Divisi Pengajar', en: 'Teaching Division' },
    points: {
      id: [
        'Mengajar lebih dari 30 siswa di SMA Hillaris Tangerang mengenai dasar-dasar pemrograman Python.',
        'Menyiapkan 10+ slide PowerPoint yang mencakup loops, lists, dan dictionaries dalam Python untuk mendukung pembelajaran pemrograman.',
      ],
      en: [
        'Taught 30+ students at Hillaris High School Tangerang about the basics of Python programming.',
        'Prepared 10+ PowerPoint slides covering Python loops, lists, and dictionaries to support programming lessons.',
      ],
    },
    images: ['python-pkm-1.webp', 'python-pkm-2.webp', 'python-pkm-3.webp', 'python-pkm-4.webp'],
  },
  {
    key: 'himti-bca-webinar',
    featured: false,
    name: 'HIMTI x BCA Webinar',
    role: { id: 'Divisi Promosi dan Registrasi', en: 'Promotion and Registration Committee' },
    points: {
      id: [
        'Berhasil mempromosikan acara ini dan mengumpulkan lebih dari 100 peserta.',
        'Merapikan 100+ data peserta.',
      ],
      en: [
        'Succeeded in promoting this event and gathered 100+ participants.',
        'Organized promotion records of 100+ participants.',
      ],
    },
    images: ['himti-bca-webinar-1.webp'],
  },
  {
    key: 'hishot-2025',
    featured: false,
    name: 'HISHOT 2025 - HIMTI Bina Nusantara',
    role: { id: 'Divisi Study Tour Luar Negeri', en: 'International Study Tour Committee' },
    points: {
      id: [
        'Merancang dan mengelola study tour luar negeri bagi mahasiswa Computer Science Binus wilayah Jabodetabek.',
      ],
      en: [
        'Managed and organized International Study Tour for Computer Science students at BINUS Greater Jakarta Region.',
      ],
    },
    images: ['hishot-2025-1.webp', 'hishot-2025-2.webp'],
  },
  {
    key: 'komisi-1',
    featured: false,
    name: {
      id: 'Aktivis Komisi 1 (Academic Events) - HIMTI Bina Nusantara',
      en: 'Commission 1 Activist (Academic Events) - HIMTI Bina Nusantara',
    },
    points: {
      id: [
        'Menyelenggarakan berbagai acara, termasuk seminar, lokakarya, dan kunjungan studi bagi mahasiswa Ilmu Komputer di BINUS University, dengan mengoordinasikan delapan kegiatan.',
        'Berkontribusi dalam perencanaan dan pelaksanaan delapan acara yang dihadiri oleh total lebih dari 300 peserta.',
      ],
      en: [
        'Organizing events including seminars, workshops, and study tours for Computer Science students at BINUS University, coordinating eight events.',
        'Contributing to the planning and execution of eight events attended by 300+ participants in total.',
      ],
    },
    images: ['komisi-1-1.webp'],
  },
]
