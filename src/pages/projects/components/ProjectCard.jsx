import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import Button from '@/components/ui/Button'
import ExpandableText from '@/components/ui/ExpandableText'
import MediaCard from '@/components/ui/MediaCard'
import { resolveProjectImage } from '@/content/projectImages'
import { useLanguage } from '@/i18n/useLanguage'

/**
 * Isi satu kartu project: tipe, nama, teknologi, deskripsi, dan tombol GitHub/Demo, di bawah foto
 * yang berganti saat di-hover (kerangkanya: components/ui/MediaCard.jsx).
 * `variant`: 'featured' (carousel, deskripsi lebih panjang) atau 'grid'.
 */
export default function ProjectCard({ project, variant = 'grid' }) {
  const { ui, localize } = useLanguage()
  const { name, type, stack = [], githubUrl, demoUrl } = project
  const images = project.images.map(resolveProjectImage).filter(Boolean)
  const newTab = ui.site.opensInNewTab

  return (
    <MediaCard name={name} images={images}>
      <p className="text-sm font-semibold text-accent">{ui.projects.types[type]}</p>
      <h3 className="mt-1 text-xl font-bold leading-snug sm:text-2xl">{name}</h3>

      {stack.length > 0 && (
        <ul aria-label={ui.projects.stack} className="mt-3 flex flex-wrap gap-1.5">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-surface-hover px-3 py-1 text-[0.8125rem] font-semibold ring-1 ring-line"
            >
              {tech}
            </li>
          ))}
        </ul>
      )}

      <ExpandableText
        text={localize(project.description)}
        lines={variant === 'featured' ? 5 : 4}
        className="mt-3"
      />

      {(githubUrl || demoUrl) && (
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {githubUrl && (
            <Button
              href={githubUrl}
              variant="secondary"
              icon={ArrowUpRight}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${ui.projects.github}: ${name} (${newTab})`}
            >
              <FaGithub aria-hidden="true" className="text-base" />
              {ui.projects.github}
            </Button>
          )}
          {demoUrl && (
            <Button
              href={demoUrl}
              icon={ArrowUpRight}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${ui.projects.demo}: ${name} (${newTab})`}
            >
              {ui.projects.demo}
            </Button>
          )}
        </div>
      )}
    </MediaCard>
  )
}
