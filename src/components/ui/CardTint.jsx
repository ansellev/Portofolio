/**
 * Gradien warna lembut di dasar kartu kaca, memudar ke atas. Letakkan di dalam kartu (pembungkus kaca
 * yang berposisi relative); lapisan ini mengisi seluruh kartu dan berada di bawah isinya.
 * `color` dari hooks/useCardTint.js; null = belum siap (tidak ditampilkan).
 */
export default function CardTint({ color }) {
  return (
    <div
      aria-hidden="true"
      className="card-tint"
      data-ready={color ? '' : undefined}
      style={color ? { '--tint': color } : undefined}
    />
  )
}
