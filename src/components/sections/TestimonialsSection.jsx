import { testimonials } from '../../data/content'
import Reveal from '../animation/Reveal'
import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-surface px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="From the parents" title="What families say about TIS" />
        </Reveal>
        <ul className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <li key={item.name}>
              <Reveal delay={index * 0.1} className="h-full">
                <Card className="flex h-full flex-col bg-bg">
                  <blockquote className="flex-1 text-muted">&ldquo;{item.quote}&rdquo;</blockquote>
                  <p className="mt-4 font-semibold">{item.name}</p>
                  <p className="text-sm text-muted">{item.relation}</p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
