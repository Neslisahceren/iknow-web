import { Route, Routes, useLocation } from 'react-router-dom'
import { locales, localePrefix } from '../content'
import { AboutPage } from '../pages/About'
import { CareersPage } from '../pages/Careers'
import { CataloguePage } from '../pages/Catalogue'
import { ContactPage } from '../pages/Contact'
import { HomePage } from '../pages/Home'
import { NotFoundPage } from '../pages/NotFound'

/**
 * One identical branch per locale.
 *
 * Turkish is the primary language and owns the unprefixed paths; English
 * lives under `/en`. Building both from the same list keeps the two trees
 * from drifting, and gives every page a distinct URL — which is what lets
 * each language carry its own canonical.
 */
function localeBranch(prefix: string) {
  const path = prefix || '/'

  return (
    <Route path={path} key={path}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="solutions" element={<CataloguePage section="solutions" />} />
      <Route path="companies" element={<CataloguePage section="companies" />} />
      <Route path="customers" element={<CataloguePage section="customers" />} />
      <Route path="careers" element={<CareersPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
}

export function AppRoutes() {
  const location = useLocation()

  return (
    <Routes location={location}>
      {locales.map((locale) => localeBranch(localePrefix[locale]))}
    </Routes>
  )
}
