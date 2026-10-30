/** Label kecil berbentuk pill (skill, tag teknologi, dll.). */
export default function Chip({ children }) {
  return (
    <span className="inline-block rounded-full bg-surface-hover px-4 py-2 text-sm font-semibold ring-1 ring-line">
      {children}
    </span>
  )
}
