import CardTint from '@/components/ui/CardTint'
import ImageGallery from '@/components/ui/ImageGallery'
import { useCardTint } from '@/hooks/useCardTint'
import { useHoverCycle } from '@/hooks/useHoverCycle'
import { analyzeImage } from '@/lib/imageAccent'

/**
 * Kerangka kartu berfoto: galeri foto di atas (berganti saat kartu di-hover atau difokus) dan
 * badan kartu untuk `children`. Dipakai ProjectCard dan ExperienceCard supaya tampilannya seragam.
 * Pembungkus kaca (glass) disediakan pemakainya: CardGrid atau slide CoverflowCarousel.
 *
 * `images` = daftar URL foto yang sudah di-resolve; `name` = nama untuk teks alternatif foto.
 */
export default function MediaCard({ name, images, children }) {
  const { index, select, bind } = useHoverCycle(images.length)
  const tint = useCardTint(images, index)

  return (
    <article className="flex h-full flex-col" {...bind}>
      {/* Tidak berposisi: gradiennya mengisi seluruh pembungkus kaca di luar kartu ini. */}
      <CardTint color={tint} />
      <ImageGallery
        images={images}
        name={name}
        index={index}
        onSelect={select}
        onImageLoad={analyzeImage}
      />
      <div className="flex flex-1 flex-col px-3 pb-3 pt-5 sm:px-4">{children}</div>
    </article>
  )
}
