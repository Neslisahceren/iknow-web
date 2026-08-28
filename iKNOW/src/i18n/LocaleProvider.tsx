import type { ReactNode } from 'react'
import type { Locale } from '../content'
import { LocaleContext } from './context'

type LocaleProviderProps = {
  locale: Locale
  children: ReactNode
}

/** Publishes the locale a route branch was mounted under. */
export function LocaleProvider({ locale, children }: LocaleProviderProps) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
}
