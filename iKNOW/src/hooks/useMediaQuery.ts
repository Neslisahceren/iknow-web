import { useCallback, useSyncExternalStore } from 'react'

/**
 * Subscribes to a media query.
 *
 * Uses `useSyncExternalStore` rather than state-in-an-effect so the first
 * render already reflects the real viewport — with an effect, every 3D
 * composition would mount with the desktop arrangement and then swap.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const list = window.matchMedia(query)
      list.addEventListener('change', onStoreChange)
      return () => list.removeEventListener('change', onStoreChange)
    },
    [query],
  )

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query])

  // No window during prerender; the desktop arrangement is the safe default.
  const getServerSnapshot = useCallback(() => false, [])

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

/** Viewport at or below the tablet breakpoint, where compositions re-lay out. */
export function useIsCompact(): boolean {
  return useMediaQuery('(max-width: 860px)')
}

/** Honours the OS "reduce motion" setting for every animation on the site. */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}
