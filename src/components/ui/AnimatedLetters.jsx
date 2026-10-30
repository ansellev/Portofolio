/**
 * Menampilkan teks huruf demi huruf dengan animasi naik (class .rise-letter di styles/motion.css).
 * `startIndex` meneruskan jeda animasi dari kata sebelumnya agar mengalir berurutan.
 * Disembunyikan dari pembaca layar: sediakan teks aslinya di tempat lain (mis. <span className="sr-only">).
 */
export default function AnimatedLetters({ text, startIndex = 0, className }) {
  return (
    <span className={className} aria-hidden="true">
      {[...text].map((char, i) => (
        <span
          key={i}
          className="rise-letter"
          style={{ animationDelay: `${(startIndex + i) * 45}ms` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}
