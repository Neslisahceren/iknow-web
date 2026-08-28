import { createContext, useCallback, useContext } from 'react'
import {
  content,
  defaultLocale,
  toLocalePath,
  type Content,
  type Locale,
} from '../content'

/**
 * The active locale.
 *
 * The URL is the single source of truth — Turkish lives at the root, English
 * under `/en` — so the routes declare the locale and everything below reads
 * it from here rather than parsing the pathname again.
 */
export const LocaleContext = createContext<Locale>(defaultLocale)

export function useLocale(): Locale {
  return useContext(LocaleContext)
}

/** The whole content dictionary for the active locale. */
export function useContent(): Content {
  return content[useLocale()]
}

/**
 * Resolves a locale-neutral path (`/about`) to the URL for the active locale.
 * Every internal link goes through this so navigating never drops the reader
 * back into the other language.
 */
export function useLocalePath(): (path: string) => string {
  const locale = useLocale()
  return useCallback((path: string) => toLocalePath(path, locale), [locale])
}
