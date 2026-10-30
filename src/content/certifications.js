/**
 * Sertifikasi dan penghargaan.
 * `kind`: 'certification' atau 'award' (menentukan label di kartu).
 * `name` = judul kartu, `issuer` = penerbit atau penyelenggara.
 * `image` = NAMA FILE gambar sertifikat di src/assets/images/certificates/ (mis. 'azure-ai-fundamentals.webp'),
 *           atau null kalau belum ada. Lihat README.md di folder itu.
 */
export const certifications = [
  {
    key: 'software-testing',
    kind: 'certification',
    year: 2025,
    name: 'Introduction to Software Testing - Level 1',
    issuer: 'TestGrid University',
    image: 'sqma.png',
  },
  {
    key: 'azure-ai-fundamentals',
    kind: 'certification',
    year: 2025,
    name: 'Microsoft Certified: Azure AI Fundamentals',
    issuer: 'Microsoft',
    image: 'Azure-AI-Fundamentals.png',
  },
  {
    key: 'sanata-dharma-video',
    kind: 'award',
    year: 2021,
    name: { id: 'Juara 2', en: '2nd Place' },
    issuer: {
      id: 'Lomba Video Konservasi Tanaman Universitas Sanata Dharma',
      en: 'Sanata Dharma University Plant Conservation Video Competition',
    },
    image: 'Lomba-SMA.png',
  },
]
