import type { Variants } from 'framer-motion'

export const variants = {
  hover: {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  },
  tap: {
    whileTap: { scale: 0.9 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  },
  loading: {
    animate: { rotate: 360 },
    transition: { duration: 1, repeat: Infinity, ease: 'linear' },
  },
} as const

export const iconVariants: Variants = {
  initial: { scale: 1, opacity: 1 },
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
  loading: { rotate: 360 },
}
