import { createImageLookup } from '@/lib/createImageLookup'

/**
 * Foto project dicari berdasarkan NAMA FILE yang ditulis di field `images`
 * pada src/content/projects.js. Taruh fotonya di src/assets/images/projects/.
 */
const files = import.meta.glob('/src/assets/images/projects/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
})

export const resolveProjectImage = createImageLookup(files, 'src/assets/images/projects/')
