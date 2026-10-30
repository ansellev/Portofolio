import { Download } from 'lucide-react'
import { CV_FILE } from '@/config/site'
import { useLanguage } from '@/i18n/useLanguage'

/**
 * Tombol unduh CV di navbar (di kiri saklar bahasa). Di layar sempit hanya ikon, dari lebar 640 px
 * ke atas ikon + tulisan "CV". Nama aksesibelnya tetap "Unduh CV (PDF)" di semua ukuran.
 */
export default function CvDownloadButton() {
  const { ui } = useLanguage()

  return (
    <a
      href={CV_FILE.href}
      download={CV_FILE.downloadName}
      aria-label={ui.cv.download}
      title={ui.cv.download}
      className="flex h-11 w-11 items-center justify-center gap-2 rounded-full bg-surface text-sm font-semibold text-ink ring-1 ring-line transition-colors hover:bg-surface-hover sm:w-auto sm:px-4"
    >
      <Download aria-hidden="true" className="h-4 w-4" />
      <span className="hidden sm:inline">{ui.cv.label}</span>
    </a>
  )
}
