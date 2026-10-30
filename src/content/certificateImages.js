import { createImageLookup } from '@/lib/createImageLookup'

/**
 * Gambar sertifikat dicari berdasarkan NAMA FILE yang ditulis di field `image`
 * pada src/content/certifications.js. Cukup taruh gambarnya di folder
 * src/assets/images/certificates/ (png, jpg, webp, atau avif), tidak perlu menulis import.
 */
const files = import.meta.glob('/src/assets/images/certificates/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
})

export const resolveCertificateImage = createImageLookup(files, 'src/assets/images/certificates/')
