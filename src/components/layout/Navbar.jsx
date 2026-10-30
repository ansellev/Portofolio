import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import CvDownloadButton from '@/components/layout/CvDownloadButton'
import LanguageSwitch from '@/components/layout/LanguageSwitch'
import ThemeToggle from '@/components/layout/ThemeToggle'
import { ROUTES } from '@/config/routes'
import { useLanguage } from '@/i18n/useLanguage'
import { cx } from '@/lib/cx'

const desktopLinkClass = ({ isActive }) =>
  cx(
    'flex min-h-11 items-center rounded-full px-4 text-sm font-semibold transition-colors',
    isActive ? 'bg-ink text-on-ink' : 'text-ink hover:bg-surface-hover',
  )

const mobileLinkClass = ({ isActive }) =>
  cx(
    'flex min-h-12 items-center rounded-2xl px-4 text-sm font-semibold',
    isActive ? 'bg-ink text-on-ink' : 'text-ink hover:bg-surface-hover',
  )

/** Navbar tetap di atas: tombol tema, tautan halaman (dari config/routes.jsx), unduh CV, saklar bahasa, dan menu mobile. */
export default function Navbar() {
  const { ui } = useLanguage()
  const { pathname } = useLocation()
  // Menu dianggap terbuka hanya di halaman tempat ia dibuka, jadi otomatis menutup saat pindah halaman.
  const [openOn, setOpenOn] = useState(null)
  const menuOpen = openOn === pathname
  const headerRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return
      setOpenOn(null)
      toggleRef.current?.focus()
    }
    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpenOn(null)
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [menuOpen])

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label={ui.nav.label}
        className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full p-1.5"
      >
        <ThemeToggle />

        <div className="hidden items-center gap-1 md:flex">
          {ROUTES.map(({ key, path }) => (
            <NavLink key={key} to={path} end={path === '/'} className={desktopLinkClass}>
              {ui.nav[key]}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <CvDownloadButton />
          <LanguageSwitch />
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? ui.nav.menuClose : ui.nav.menuOpen}
            onClick={() => setOpenOn(menuOpen ? null : pathname)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-ink ring-1 ring-line md:hidden"
          >
            {menuOpen ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="glass-strong mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-3xl p-2 md:hidden"
        >
          {ROUTES.map(({ key, path }) => (
            <NavLink key={key} to={path} end={path === '/'} className={mobileLinkClass}>
              {ui.nav[key]}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
