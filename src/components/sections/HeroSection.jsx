import { hero } from '../../data/content'
import Reveal from '../animation/Reveal'
import Button from '../ui/Button'

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden px-4 py-24 md:py-32">
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            {hero.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
            {hero.title}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-lg text-muted">{hero.subtitle}</p>
        </Reveal>
        <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-3">
          <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
          <Button href={hero.secondaryCta.href} variant="outline">
            {hero.secondaryCta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
