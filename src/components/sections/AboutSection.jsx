import { HeartPulse, Trees, Trophy, Users } from 'lucide-react'
import { about, stats } from '../../data/content'
import Reveal from '../animation/Reveal'
import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'

// Maps the icon names stored in data/content.js to the imported components.
const icons = { Trees, Trophy, HeartPulse, Users }

export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="About TIS" title={about.title} text={about.text} />
        </Reveal>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = icons[stat.icon]
            return (
              <li key={stat.label}>
                <Reveal delay={index * 0.1}>
                  <Card className="text-center">
                    <Icon className="mx-auto mb-3 text-accent" size={28} aria-hidden="true" />
                    <p className="font-display text-4xl font-bold">{stat.value}</p>
                    <p className="mt-1 text-sm text-muted">{stat.label}</p>
                  </Card>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
