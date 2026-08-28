import { en } from './en'
import { tr } from './tr'
import type { Content, Locale } from './types'

export * from './types'

/** Turkish is the site's primary language, so it owns the unprefixed routes. */
export const defaultLocale: Locale = 'tr'

export const locales: Locale[] = ['tr', 'en']

export const content: Record<Locale, Content> = { tr, en }

/** URL segment each locale lives under. The default locale has none. */
export const localePrefix: Record<Locale, string> = { tr: '', en: '/en' }

/** Turn a locale-neutral path such as `/about` into the URL for `locale`. */
export function toLocalePath(path: string, locale: Locale): string {
  const prefix = localePrefix[locale]
  if (path === '/') return prefix || '/'
  return `${prefix}${path}`
}

/**
 * Split a real URL back into its locale and locale-neutral path, so the
 * language switcher can offer the same page in the other language and the
 * canonical/alternate tags can be derived from one source.
 */
export function splitLocalePath(pathname: string): { locale: Locale; path: string } {
  for (const locale of locales) {
    const prefix = localePrefix[locale]
    if (!prefix) continue
    if (pathname === prefix) return { locale, path: '/' }
    if (pathname.startsWith(`${prefix}/`)) {
      return { locale, path: pathname.slice(prefix.length) }
    }
  }
  return { locale: defaultLocale, path: pathname || '/' }
}
