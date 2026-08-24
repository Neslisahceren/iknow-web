import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  content,
  defaultLocale,
  locales,
  splitLocalePath,
  toLocalePath,
} from '../../content'
import { useContent, useLocale } from '../../i18n/context'

type SeoProps = {
  title: string
  description: string
  /** Set on the 404 route so search engines do not index it. */
  noIndex?: boolean
  /** Extra JSON-LD for the route, merged alongside the Organization graph. */
  structuredData?: Record<string, unknown>
}

function setMeta(selector: string, attribute: string, value: string) {
  const element = document.head.querySelector(selector)
  if (element) {
    element.setAttribute(attribute, value)
    return
  }

  // The tag may not exist in index.html for every field we manage.
  const created = document.createElement('meta')
  const match = /\[(name|property)="([^"]+)"\]/.exec(selector)
  if (match) {
    created.setAttribute(match[1], match[2])
    created.setAttribute(attribute, value)
    document.head.appendChild(created)
  }
}

function setLink(rel: string, href: string, hrefLang?: string) {
  const selector = hrefLang
    ? `link[rel="${rel}"][hreflang="${hrefLang}"]`
    : `link[rel="${rel}"]:not([hreflang])`

  let link = document.head.querySelector<HTMLLinkElement>(selector)
  if (!link) {
    link = document.createElement('link')
    link.rel = rel
    if (hrefLang) link.hreflang = hrefLang
    document.head.appendChild(link)
  }
  link.href = href
}

/**
 * Per-route, per-locale document metadata.
 *
 * Written imperatively rather than through a helmet-style dependency: the
 * surface area is small, and one effect keeps title, description, canonical,
 * language alternates, Open Graph, Twitter and JSON-LD from drifting apart.
 */
export function Seo({ title, description, noIndex, structuredData }: SeoProps) {
  const { pathname } = useLocation()
  const locale = useLocale()
  const { site, htmlLang } = useContent()

  useEffect(() => {
    const isHome = pathname === toLocalePath('/', locale)
    const fullTitle = isHome ? `${site.name} — ${title}` : `${title} | ${site.name}`
    const url = `${site.origin}${pathname}`
    const image = `${site.origin}/og-image.png`

    document.title = fullTitle
    document.documentElement.lang = htmlLang

    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[property="og:image"]', 'content', image)
    setMeta('meta[property="og:locale"]', 'content', htmlLang)
    setMeta('meta[name="twitter:title"]', 'content', fullTitle)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('meta[name="twitter:image"]', 'content', image)
    setMeta(
      'meta[name="robots"]',
      'content',
      noIndex ? 'noindex,follow' : 'index,follow',
    )

    setLink('canonical', url)

    // The same page in every language, plus the default for unmatched ones.
    const { path } = splitLocalePath(pathname)
    for (const alternate of locales) {
      setLink(
        'alternate',
        `${site.origin}${toLocalePath(path, alternate)}`,
        content[alternate].htmlLang,
      )
    }
    setLink('alternate', `${site.origin}${toLocalePath(path, defaultLocale)}`, 'x-default')

    if (!structuredData) return

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.route = 'true'
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)
    return () => {
      script.remove()
    }
  }, [
    description,
    htmlLang,
    locale,
    noIndex,
    pathname,
    site.name,
    site.origin,
    structuredData,
    title,
  ])

  return null
}
