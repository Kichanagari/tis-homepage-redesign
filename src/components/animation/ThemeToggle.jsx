import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="grid h-11 w-11 place-items-center rounded-full border border-border text-text transition-colors hover:bg-surface"
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="grid place-items-center"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </motion.span>
    </button>
  )
}
