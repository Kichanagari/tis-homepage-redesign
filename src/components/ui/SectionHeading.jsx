export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl font-bold md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-muted">{text}</p>}
    </div>
  )
}
