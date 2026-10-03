import { motion, useReducedMotion } from 'framer-motion'

// Fades and lifts its children into view once, the first time they scroll in.
export default function Reveal({ children, delay = 0, y = 24, className = '' }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
