import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { hero, navItems } from '../../data/content'
import ThemeToggle from '../animation/ThemeToggle'
import Button from '../ui/Button'

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3"
      >
        <a href="#top" className="font-display text-xl font-bold">
          TIS
          <span className="sr-only"> Tulas International School</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm font-medium transition-colors hover:text-accent">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <Button href={hero.primaryCta.href} className="hidden sm:inline-flex">
            {hero.primaryCta.label}
          </Button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-11 w-11 place-items-center rounded-full border border-border md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border px-4 md:hidden"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu} className="block py-3 text-base font-medium">
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pb-4 pt-2">
              <Button href={hero.primaryCta.href} className="w-full">
                {hero.primaryCta.label}
              </Button>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
