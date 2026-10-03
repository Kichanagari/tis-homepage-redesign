import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const INTERACTIVE = 'a, button, [role="button"]'

export default function CustomCursor() {
  // Only mouse-like devices get the custom cursor; touch screens skip it.
  const [enabled] = useState(() => window.matchMedia('(pointer: fine)').matches)
  const [hovering, setHovering] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    if (!enabled) return undefined

    const handleMove = (event) => {
      x.set(event.clientX)
      y.set(event.clientY)
      setHovering(Boolean(event.target.closest?.(INTERACTIVE)))
    }

    document.documentElement.classList.add('custom-cursor')
    window.addEventListener('pointermove', handleMove)

    return () => {
      document.documentElement.classList.remove('custom-cursor')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: springX, y: springY }}
      animate={{ scale: hovering ? 1.8 : 1, opacity: hovering ? 0.6 : 1 }}
      transition={{ duration: 0.2 }}
      className="pointer-events-none fixed left-0 top-0 z-[60] -ml-3 -mt-3 h-6 w-6 rounded-full border-2 border-accent"
    />
  )
}
