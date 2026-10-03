import { sports } from '../../data/content'
import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function SportsSection() {
  return (
    <section id="sports" className="bg-surface px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Beyond the classroom"
            title="16+ sports, one foundation"
            text="Sport is built into daily life at TIS, bringing joy and discipline."
          />
        </Reveal>
        <ul className="flex flex-wrap justify-center gap-3">
          {sports.map((sport, index) => (
            <li key={sport}>
              <Reveal delay={Math.min(index * 0.03, 0.3)} y={12}>
                <span className="inline-block rounded-full border border-border bg-bg px-5 py-2 text-sm font-medium">
                  {sport}
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
