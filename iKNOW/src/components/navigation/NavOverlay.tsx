import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useContent, useLocalePath } from '../../i18n/context'
import { LanguageSwitcher } from './LanguageSwitcher'

type NavOverlayProps = {
  open: boolean
  onClose: () => void
}

/**
 * Full-screen navigation.
 *
 * Used at every breakpoint — the reference header carries a menu trigger even
 * on desktop, so the overlay is the primary navigation surface rather than a
 * mobile fallback. Focus is trapped while it is open and returned on close.
 */
export function NavOverlay({ open, onClose }: NavOverlayProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const restoreFocusRef = useRef<HTMLElement | null>(null)
  const reducedMotion = useReducedMotion()
  const { nav, contactPoints } = useContent()
  const localePath = useLocalePath()

  // Email first, then the direct line: the two the overlay has always shown.
  const meta = [
    contactPoints.find((point) => point.href?.startsWith('mailto:')),
    contactPoints.find((point) => point.href?.startsWith('tel:')),
  ]
    .filter((point) => point !== undefined)
    .map((point) => point.value)

  useEffect(() => {
    if (!open) return

    restoreFocusRef.current = document.activeElement as HTMLElement | null
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    const focusables = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        ) ?? [],
      )

    focusables()[0]?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab') return

      const items = focusables()
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = overflow
      restoreFocusRef.current?.focus()
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          ref={panelRef}
          id="primary-navigation"
          className="nav-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={nav.overlayLabel}
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reducedMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="shell">
            <button
              type="button"
              className="menu-trigger nav-overlay__close"
              onClick={onClose}
              aria-expanded="true"
              aria-label={nav.close}
            >
              <span className="menu-trigger__glyph" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>

            <ul className="nav-overlay__list">
              {nav.items.map((item, index) => (
                <motion.li
                  key={item.to}
                  initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: reducedMotion ? 0 : 0.06 + index * 0.045,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <NavLink
                    to={localePath(item.to)}
                    end={item.to === '/'}
                    className="nav-overlay__link"
                    onClick={onClose}
                  >
                    {item.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            {/* The narrow-screen home for the switch: the header list it
                normally sits in is hidden below 1024px. */}
            <p className="nav-overlay__meta">
              {meta.join(' · ')} · <LanguageSwitcher onNavigate={onClose} />
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
