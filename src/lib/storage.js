/** localStorage yang aman: tidak error saat storage diblokir (mode privat, dll.). */
export function readStorage(key) {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

export function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    /* storage tidak tersedia: abaikan */
  }
}
