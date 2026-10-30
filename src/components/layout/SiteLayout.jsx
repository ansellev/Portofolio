import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import SkipLink from '@/components/layout/SkipLink'
import { ROUTES } from '@/config/routes'
import { profile } from '@/content/profile'
import { useLanguage } from '@/i18n/useLanguage'

/** Judul tab: "<Halaman> | <Nama>", mengikuti halaman dan bahasa aktif. */
function useDocumentTitle() {
  const { pathname } = useLocation()
  const { ui } = useLanguage()
  useEffect(() => {
    const route = ROUTES.find((item) => item.path === pathname)
    document.title = `${ui.pageTitles[route ? route.key : 'notFound']} | ${profile.name.full}`
  }, [pathname, ui])
}

/**
 * Kerangka semua halaman: skip link, navbar, konten utama, dan footer.
 * Tinggi minimal selayar penuh, sehingga footer selalu berada di dasar halaman, juga di halaman pendek.
 */
export default function SiteLayout() {
  const { pathname, hash } = useLocation()
  const mainRef = useRef(null)
  const lastPath = useRef(pathname)

  useDocumentTitle()

  // Saat pindah halaman: kembali ke atas dan pindahkan fokus ke konten (untuk keyboard dan pembaca layar).
  useEffect(() => {
    if (lastPath.current === pathname) return
    lastPath.current = pathname
    window.scrollTo(0, 0)
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname])

  // Dibuka langsung ke satu bagian (mis. alamat /#contact): gulir ke bagian itu setelah halaman tampil.
  useEffect(() => {
    if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
  }, [pathname, hash])

  return (
    <div className="flex min-h-dvh flex-col">
      <SkipLink />
      <Navbar />
      <main
        id="main"
        ref={mainRef}
        tabIndex={-1}
        className="mx-auto w-full max-w-6xl flex-1 px-5 pb-10 pt-24 outline-none sm:px-8"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
