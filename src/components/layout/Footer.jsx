import { Mail, MapPin, Phone } from 'lucide-react'
import { contact } from '../../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">Tulas International School</p>
          <p className="mt-2 flex gap-2 text-sm text-muted">
            <MapPin size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
            {contact.address}
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-semibold">Contact</p>
          <p className="flex items-center gap-2">
            <Phone size={16} aria-hidden="true" />
            <a href={`tel:${contact.helpline}`} className="hover:text-accent">
              Admissions: {contact.helpline}
            </a>
          </p>
          {contact.landlines.map((number) => (
            <p key={number} className="pl-6 text-muted">
              <a href={`tel:${number}`} className="hover:text-accent">
                {number}
              </a>
            </p>
          ))}
          <p className="flex items-center gap-2">
            <Mail size={16} aria-hidden="true" />
            <a href={`mailto:${contact.email}`} className="hover:text-accent">
              {contact.email}
            </a>
          </p>
        </div>

        <div className="text-sm">
          <p className="font-semibold">Follow us</p>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
            {contact.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block py-2 text-muted hover:text-accent"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="border-t border-border py-4 text-center text-xs text-muted">
        Redesign concept for assessment purposes. Content belongs to Tulas International School.
      </p>
    </footer>
  )
}
