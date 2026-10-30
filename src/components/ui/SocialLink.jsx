import { ArrowUpRight } from 'lucide-react'
import { SOCIAL_PLATFORMS } from '@/components/ui/socialPlatforms'
import { cx } from '@/lib/cx'
import { useLanguage } from '@/i18n/useLanguage'

/**
 * Tombol pill ke satu akun sosial, dengan ikon sesuai aplikasinya.
 * `fill`: pill mengisi penuh sel grid induknya (lebar dan tinggi) dengan isi di tengah.
 */
export default function SocialLink({ platform, handle, url, showHandle = false, fill = false }) {
  const { ui } = useLanguage()
  const { Icon, color, darkColor, label } = SOCIAL_PLATFORMS[platform]
  const opensNewTab = !url.startsWith('mailto:')
  const accessibleName = `${label}: ${handle}${opensNewTab ? ` (${ui.site.opensInNewTab})` : ''}`

  return (
    <a
      href={url}
      {...(opensNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      aria-label={accessibleName}
      className={cx(
        'glass-strong group inline-flex min-h-11 items-center rounded-full py-2 text-sm font-semibold text-ink transition-colors hover:bg-surface-raised',
        fill ? 'flex-1 justify-center gap-2 px-3 sm:gap-2.5 sm:px-4' : 'gap-2.5 pl-3.5 pr-4',
      )}
    >
      <Icon
        aria-hidden="true"
        className="shrink-0 text-lg text-(--brand) dark:text-(--brand-dark)"
        style={{ '--brand': color, '--brand-dark': darkColor ?? color }}
      />
      <span>{showHandle ? handle : label}</span>
      <ArrowUpRight
        aria-hidden="true"
        className={cx(
          'h-4 w-4 shrink-0 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5',
          fill && 'hidden sm:block',
        )}
      />
    </a>
  )
}
