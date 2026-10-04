import { academics } from '../../data/content'
import Reveal from '../animation/Reveal'
import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'

export default function AcademicsSection() {
  return (
    <section id="academics" className="bg-surface px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="Learning at TIS" title={academics.title} />
        </Reveal>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {academics.items.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={index * 0.1} className="h-full">
                <Card className="h-full bg-bg">
                  <h3 className="font-display text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.text}</p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}