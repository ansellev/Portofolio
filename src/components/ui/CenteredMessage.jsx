import GlassPanel from '@/components/ui/GlassPanel'

/** Halaman satu pesan di tengah layar (halaman belum siap, 404, dll.). `action` = tombol/link opsional. */
export default function CenteredMessage({ title, text, action }) {
  return (
    <section className="flex min-h-[55vh] items-center justify-center pt-8">
      <GlassPanel
        variant="strong"
        radius="large"
        className="max-w-lg px-8 py-14 text-center sm:px-14"
      >
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-4 text-ink-soft">{text}</p>
        {action && <div className="mt-8">{action}</div>}
      </GlassPanel>
    </section>
  )
}
