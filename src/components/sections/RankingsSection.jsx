import { rankings } from '../../data/content'
import Reveal from '../animation/Reveal'
import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'

export default function RankingsSection() {
  return (
    <section id="rankings" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="Recognition" title="Ranked among the best co-ed boarding schools" />
        </Reveal>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rankings.map((item, index) => (
            <li key={`${item.rank}-${item.place}`}>
              <Reveal delay={index * 0.1}>
                <Card className="text-center">
                  <p className="font-display text-5xl font-bold text-accent">{item.rank}</p>
                  <p className="mt-2 font-semibold">{item.place}</p>
                  <p className="mt-1 text-sm text-muted">{item.source}</p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
