import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * The reflection that slides across the artwork as the page scrolls.
 *
 * The highlights in the WebP stay exactly where they are — this is a separate
 * band of light passing over them, the way a reflection travels across a
 * glossy surface while the surface itself does not move.
 *
 * It blends with `overlay`, so it only really shows where the artwork is
 * already bright: the dark ground barely lifts, the lit edges of the forms
 * flare a little as the band crosses them. That is what keeps it from reading
 * as a white gradient laid over the picture.
 *
 * Only `xPercent` and `opacity` are animated — both compositor properties, so
 * the sweep costs no layout or paint while scrolling.
 */
export function HeroSheen() {
  const bandRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const band = bandRef.current
    // Same reason as HeroRimLight: refs attach bottom-up, so the hero has to
    // be found rather than handed down.
    const scroller = band?.closest('.hero')
    if (!band || !scroller) return

    // A reflection that cannot move is just a bright patch, so reduced motion
    // drops the layer entirely rather than parking it somewhere.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: scroller,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.1,
        },
      })

      timeline
        .fromTo(
          band,
          { xPercent: -58 },
          { xPercent: 58, ease: 'sine.inOut', duration: 1 },
          0,
        )
        // Fades up on entry and back down on exit, so the band never has a
        // visible edge sitting at the side of the frame.
        .fromTo(band, { opacity: 0 }, { opacity: 1, ease: 'sine.out', duration: 0.28 }, 0)
        .to(band, { opacity: 0, ease: 'sine.in', duration: 0.28 }, 0.72)

      // ScrollTrigger defers its first measurement to an animation frame; one
      // explicit refresh makes the range deterministic.
      ScrollTrigger.refresh()
    }, band)

    return () => context.revert()
  }, [])

  return (
    <div className="hero-sheen" aria-hidden="true">
      <div className="hero-sheen__band" ref={bandRef} />
    </div>
  )
}
