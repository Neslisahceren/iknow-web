import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { splitLocalePath } from '../content'
import { LocaleProvider } from '../i18n/LocaleProvider'
import { AppRoutes } from './router'
import { ScrollToTop } from './ScrollToTop'

function Shell() {
  const location = useLocation()
  const reducedMotion = useReducedMotion()

  // The URL owns the language. Resolving it above the header and footer means
  // the chrome is translated by the same rule as the page inside it.
  const { locale } = splitLocalePath(location.pathname)

  return (
    <LocaleProvider locale={locale}>
      <div className="site-shell">
        <ScrollToTop />
        <Header />

        {/* Route changes cross-fade only. Anything more elaborate fights the
            slow settle of the surfaces underneath. */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={location.pathname}
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <AppRoutes />
          </motion.main>
        </AnimatePresence>

        <Footer />
      </div>
    </LocaleProvider>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}
