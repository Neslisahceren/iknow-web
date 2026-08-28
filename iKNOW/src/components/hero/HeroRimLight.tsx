import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RIM_PATH, RIM_VIEWBOX } from './rimPath'

gsap.registerPlugin(ScrollTrigger)

/** Fraction of the path the travelling light occupies. */
const SEGMENT = 0.24

/**
 * The travelling warm edge light.
 *
 * A separate SVG layer over the artwork rather than something baked into it,
 * so it can move. Three strokes on the same measured path — a hairline core, a
 * soft inner glow and a very faint ambient bloom — because a single stroke
 * reads as a drawn line rather than as light coming off an edge.
 *
 * The SVG uses the artwork's own pixel space as its viewBox and the same
 * `xMaxYMid slice` framing the image is given by `object-position: 100% 50%`.
 * That is what keeps the light welded to the edge at every viewport: both
 * layers crop identically, so they cannot drift apart.
 *
 * Motion is `stroke-dashoffset` on a path normalised with `pathLength="1"`,
 * driven by ScrollTrigger with `scrub`. GSAP writes straight to the SVG
 * attributes — React never re-renders while scrolling.
 */
export function HeroRimLight() {
  const rootRef = useRef<SVGSVGElement>(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    // Found rather than passed in: React attaches refs bottom-up, so a parent
    // ref handed down as a prop is still null when this layout effect runs.
    const scroller = root?.closest('.hero')
    if (!root || !scroller) return

    const strokes = root.querySelectorAll<SVGPathElement>('[data-rim-stroke]')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const context = gsap.context(() => {
      // Written as SVG attributes, not CSS. With `pathLength="1"` these are
      // fractions of the path, and GSAP's CSS unit inference turns a small
      // unitless number into `0px` — the attribute route has no such guessing.
      //
      // Dash of SEGMENT followed by a full-length gap, so exactly one lit
      // stretch exists on the path at a time.
      gsap.set(strokes, {
        attr: { 'stroke-dasharray': `${SEGMENT} 1`, 'stroke-dashoffset': SEGMENT },
      })

      if (reduced) {
        // Reduced motion keeps the light, drops the travel: it simply rests on
        // the brightest part of the edge.
        gsap.set(strokes, { attr: { 'stroke-dashoffset': -0.34 } })
        return
      }

      gsap
        .timeline({
          scrollTrigger: {
            trigger: scroller,
            start: 'top top',
            end: 'bottom top',
            // Smoothing, not lag: the light keeps flowing for a moment after
            // the scroll stops and settles where it was left.
            scrub: 0.8,
          },
        })
        // Offset SEGMENT -> -1 sweeps the dash from before the start of the
        // path to past its end. The ease is what stops it reading as a linear
        // slider tied to the scrollbar.
        .to(strokes, {
          attr: { 'stroke-dashoffset': -1 },
          ease: 'power2.inOut',
          duration: 1,
        })
        // Only the last stretch fades, so the light leaves the form rather
        // than stopping dead at the end of the path.
        .to(strokes, { opacity: 0, ease: 'power1.in', duration: 0.18 }, 0.82)

      // ScrollTrigger defers its first measurement to an animation frame. If
      // that frame is late — or never comes, as in a background tab — `end`
      // stays unresolved and the light sits at the start of the path. One
      // explicit refresh makes the range deterministic.
      ScrollTrigger.refresh()
    }, root)

    return () => context.revert()
  }, [])

  return (
    <svg
      ref={rootRef}
      className="hero-rim"
      viewBox={`0 0 ${RIM_VIEWBOX.width} ${RIM_VIEWBOX.height}`}
      // Matches the artwork's `object-fit: cover` + `object-position: 100% 50%`
      // exactly. Changing one without the other unsticks the light.
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <filter id="hero-rim-ambient" x="-12%" y="-40%" width="124%" height="180%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
        <filter id="hero-rim-glow" x="-8%" y="-30%" width="116%" height="160%">
          <feGaussianBlur stdDeviation="2.6" />
        </filter>
      </defs>

      <path
        data-rim-stroke
        className="hero-rim__ambient"
        d={RIM_PATH}
        pathLength="1"
        filter="url(#hero-rim-ambient)"
      />
      <path
        data-rim-stroke
        className="hero-rim__glow"
        d={RIM_PATH}
        pathLength="1"
        filter="url(#hero-rim-glow)"
      />
      <path data-rim-stroke className="hero-rim__core" d={RIM_PATH} pathLength="1" />
    </svg>
  )
}
