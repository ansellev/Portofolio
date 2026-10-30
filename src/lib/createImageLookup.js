/**
 * Membuat fungsi pencari gambar berdasarkan NAMA FILE, dari hasil `import.meta.glob`.
 * Dipakai oleh content/certificateImages.js dan content/projectImages.js, supaya data konten cukup
 * menulis nama file (mis. 'dineeat-1.webp') tanpa `import` satu per satu.
 *
 * @param files   hasil import.meta.glob(..., { eager: true, import: 'default' })
 * @param folder  nama folder untuk pesan peringatan di mode dev
 */
export function createImageLookup(files, folder) {
  const urlByFileName = Object.fromEntries(
    Object.entries(files).map(([path, url]) => [path.split('/').pop(), url]),
  )

  return function resolveImage(fileName) {
    if (!fileName) return null
    const url = urlByFileName[fileName]
    if (!url && import.meta.env.DEV) {
      console.warn(`[gambar] "${fileName}" tidak ditemukan di ${folder}`)
    }
    return url ?? null
  }
}
