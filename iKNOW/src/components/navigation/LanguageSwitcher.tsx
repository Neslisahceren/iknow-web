import { Link, useLocation } from 'react-router-dom'
import { content, locales, splitLocalePath, toLocalePath } from '../../content'
import { useContent, useLocale } from '../../i18n/context'

type LanguageSwitcherProps = {
  /** Fired after a language is picked, so the overlay can close itself. */
  onNavigate?: () => void
}

/**
 * TR / EN switch.
 *
 * Deliberately built from the navigation's own `.nav__link`, so it inherits
 * the existing size, colour, hover and underline rather than introducing a
 * control of its own. Each option is a real link to the same page in the
 * other language, which keeps it crawlable and lets the reader open a
 * language in a new tab.
 */
export function LanguageSwitcher({ onNavigate }: LanguageSwitcherProps) {
  const active = useLocale()
  const { nav } = useContent()
  const { pathname } = useLocation()
  const { path } = splitLocalePath(pathname)

  return (
    <>
      <span className="sr-only">{nav.switcherLabel}</span>
      {locales.map((locale, index) => (
        <span key={locale}>
          {index > 0 ? <span aria-hidden="true"> / </span> : null}
          <Link
            className="nav__link"
            to={toLocalePath(path, locale)}
            hrefLang={content[locale].htmlLang}
            lang={content[locale].htmlLang}
            aria-label={content[locale].switchAria}
            /* The active option genuinely points at the current page, so the
               navigation's own current-page treatment is the correct one. */
            aria-current={locale === active ? 'page' : undefined}
            onClick={onNavigate}
          >
            {content[locale].switchLabel}
          </Link>
        </span>
      ))}
    </>
  )
}
