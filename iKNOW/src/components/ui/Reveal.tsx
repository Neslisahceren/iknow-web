import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Seconds of delay, used to stagger neighbouring blocks. */
  delay?: number
  /** `clip` wipes the element in; `rise` translates it. */
  mode?: 'rise' | 'clip'
  className?: string
  as?: 'div' | 'section' | 'article' | 'li'
}

/**
 * Scroll-in reveal.
 *
 * Slow and short by design: 12px of travel over most of a second. Anything
 * faster or further reads as a template animation rather than the page
 * settling. Fully disabled under `prefers-reduced-motion`, where the content
 * simply starts in its final state.
 */
export function Reveal({
  children,
  delay = 0,
  mode = 'rise',
  className,
  as = 'div',
}: RevealProps) {
  const reducedMotion = useReducedMotion()
  const Component = motion[as]

  if (reducedMotion) {
    const Static = as
    return <Static className={className}>{children}</Static>
  }

  const initial =
    mode === 'clip'
      ? { opacity: 0, clipPath: 'inset(0 0 100% 0)' }
      : { opacity: 0, y: 12 }

  const animate =
    mode === 'clip' ? { opacity: 1, clipPath: 'inset(0 0 0% 0)' } : { opacity: 1, y: 0 }

  return (
    <Component
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
      transition={{
        duration: mode === 'clip' ? 0.95 : 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </Component>
  )
}
