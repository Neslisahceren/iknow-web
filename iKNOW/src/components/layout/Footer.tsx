import { Link } from 'react-router-dom'
import { useContent, useLocalePath } from '../../i18n/context'
import { HeroBackground } from '../hero/HeroBackground'
import { SocialIcon } from '../ui/SocialIcon'
import { Wordmark } from '../ui/Wordmark'

/**
 * Footer.
 *
 * Carries a cropped continuation of the same 3D system in its lower right,
 * so the page closes on the material it opened with rather than on a plain
 * dark band.
 */
export function Footer() {
  const year = new Date().getFullYear()
  const { site, nav, footer, contactPoints } = useContent()
  const localePath = useLocalePath()

  // Everything except Home: the wordmark above already leads there.
  const companyLinks = nav.items.filter((item) => item.to !== '/')

  return (
    <div className="footer-surface-host">
      <HeroBackground variant="footer" />

      <footer className="site-footer">
        <div className="shell">
          <div className="site-footer__grid">
            <div>
              <Wordmark />
              <p className="u-body" style={{ maxWidth: '22rem', marginTop: '1.25rem' }}>
                {site.blurb}
              </p>
            </div>

            <nav aria-label={footer.companyHeading}>
              <h2 className="site-footer__heading">{footer.companyHeading}</h2>
              {companyLinks.map((item) => (
                <Link
                  key={item.to}
                  to={localePath(item.to)}
                  className="site-footer__link"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <nav aria-label={footer.solutionsHeading}>
              <h2 className="site-footer__heading">{footer.solutionsHeading}</h2>
              {footer.solutions.map((edition) => (
                <Link
                  key={edition}
                  to={localePath('/solutions')}
                  className="site-footer__link"
                >
                  {edition}
                </Link>
              ))}
            </nav>

            <div>
              <h2 className="site-footer__heading">{footer.contactHeading}</h2>
              {contactPoints
                .filter((point) => point.href)
                .map((point) => (
                  <a className="site-footer__link" key={point.value} href={point.href}>
                    {point.value}
                  </a>
                ))}
              <span className="site-footer__link">{site.locationLine}</span>
            </div>
          </div>

          <div className="site-footer__base">
            <p style={{ margin: 0 }}>
              {footer.copyright.replace('{year}', String(year))}
            </p>
            <ul className="social" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {site.social.map((item) => (
                <li key={item.label}>
                  <a
                    className="social__link"
                    href={item.href}
                    rel="noreferrer noopener"
                    target="_blank"
                    aria-label={`${site.name} — ${item.label}`}
                  >
                    <SocialIcon label={item.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
