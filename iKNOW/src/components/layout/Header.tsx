import { useCallback, useState, useSyncExternalStore } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useContent, useLocalePath } from '../../i18n/context'
import { LanguageSwitcher } from '../navigation/LanguageSwitcher'
import { NavOverlay } from '../navigation/NavOverlay'
import { Wordmark } from '../ui/Wordmark'

/**
 * Site header.
 *
 * Sits over the hero with no ground of its own so the surfaces run behind
 * it, which is what the reference does. It only acquires a background once
 * the page has scrolled past the hero, where the copy underneath would
 * otherwise collide with it.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuPath, setMenuPath] = useState<string | null>(null)
  const { pathname } = useLocation()
  const { nav } = useContent()
  const localePath = useLocalePath()

  // Adjusting state during render is React's documented way to react to a
  // changed input. It covers browser back/forward, which the overlay's own
  // click handlers cannot.
  if (menuPath !== null && menuPath !== pathname) {
    setMenuPath(pathname)
    setMenuOpen(false)
  }

  const subscribeToScroll = useCallback((onStoreChange: () => void) => {
    window.addEventListener('scroll', onStoreChange, { passive: true })
    return () => window.removeEventListener('scroll', onStoreChange)
  }, [])

  // Read straight from the document rather than mirroring it into state, so a
  // page opened part-way down already has the correct header on first paint.
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > window.innerHeight * 0.7,
    () => false,
  )

  return (
    <>


      <header
        className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}
      >
        <div className="shell site-header__bar">
          <Wordmark />

          <nav className="nav" aria-label={nav.primaryLabel}>
            {/* Spread across the bar from 1024px up; below that the trigger
                takes over and the overlay carries the same links. */}
            <ul className="nav__list">
              {nav.items.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={localePath(item.to)}
                    end={item.to === '/'}
                    className="nav__link"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              {/* Same list, same link treatment — the switch is one more
                  item rather than a control with a style of its own. */}
              <li>
                <LanguageSwitcher />
              </li>
            </ul>

            <button
              type="button"
              className="menu-trigger"
              onClick={() => {
                setMenuPath(pathname)
                setMenuOpen(true)
              }}
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
              aria-label={nav.open}
            >
              <span className="menu-trigger__glyph" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </nav>
        </div>
      </header>

      <NavOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
