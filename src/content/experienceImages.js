import { createImageLookup } from '@/lib/createImageLookup'

/**
 * Foto pengalaman dicari berdasarkan NAMA FILE yang ditulis di field `images`
 * pada src/content/experiences.js. Taruh fotonya di src/assets/images/experiences/.
 */
const files = import.meta.glob('/src/assets/images/experiences/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
})

export const resolveExperienceImage = createImageLookup(files, 'src/assets/images/experiences/')
