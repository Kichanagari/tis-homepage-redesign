import { useState } from 'react'
import { classes, contact } from '../../data/content'
import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

const fieldClass =
  'mt-1 min-h-11 w-full rounded-lg border border-border bg-bg px-3 py-2 text-text'

export default function AdmissionSection() {
  const [submitted, setSubmitted] = useState(false)

  // Demo only: a real build would send the data to the school's backend.
  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="admission" className="px-4 py-20">
      <div className="mx-auto max-w-xl">
        <Reveal>
          <SectionHeading
            eyebrow="Admissions open"
            title="Enquire now"
            text={`Or call the admissions helpline: ${contact.helpline}`}
          />
        </Reveal>
        <Reveal delay={0.1}>
          {submitted ? (
            <p role="status" className="rounded-2xl bg-surface p-6 text-center font-semibold">
              Thank you! The admissions team will contact you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-surface p-6">
              <label className="block text-sm font-medium">
                Parent name
                <input type="text" name="name" required autoComplete="name" className={fieldClass} />
              </label>
              <label className="block text-sm font-medium">
                Phone number
                <input type="tel" name="phone" required autoComplete="tel" className={fieldClass} />
              </label>
              <label className="block text-sm font-medium">
                Class applying for
                <select name="class" required defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Select class
                  </option>
                  {classes.map((name) => (
                    <option key={name} value={name}>
                      Class {name}
                    </option>
                  ))}
                </select>
              </label>
              <button
                type="submit"
                className="min-h-11 w-full rounded-full bg-primary px-6 py-3 font-semibold text-on-primary transition hover:opacity-90"
              >
                Enquire Now
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
