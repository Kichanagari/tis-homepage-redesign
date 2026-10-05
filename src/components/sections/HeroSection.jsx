import heroImage from '../../assets/hero.jpg'
import { hero } from '../../data/content'
import Reveal from '../animation/Reveal'
import Button from '../ui/Button'

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden px-4 py-16 md:py-24">
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div>
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
              {hero.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
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

        <Reveal delay={0.2}>
          {/* Describe what the real photo shows in the alt text. */}
          <img
            src={heroImage}
            alt="Students and campus of Tulas International School"
            width="960"
            height="720"
            loading="eager"
            className="h-auto w-full rounded-3xl object-cover shadow-lg"
          />
        </Reveal>
      </div>
    </section>
  )
}