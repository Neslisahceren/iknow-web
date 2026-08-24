import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Route changes should start at the top, as a full page load would. */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}
