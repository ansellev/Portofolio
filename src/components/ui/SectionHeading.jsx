/** Judul bagian bergaya "/JUDUL". `as` = tingkat heading (bawaan h2). */
export default function SectionHeading({ id, as: Tag = 'h2', children }) {
  return (
    <Tag
      id={id}
      className="mb-8 text-[clamp(1.75rem,4.2vw,3rem)] font-extrabold uppercase leading-none tracking-tight text-ink"
    >
      /{children}
    </Tag>
  )
}
