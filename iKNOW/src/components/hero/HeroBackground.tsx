import heroArtwork from '../../assets/hero/iknow-hero-home.webp'

export type HeroVariant = 'home' | 'page' | 'mission' | 'footer'

export type HeroBackgroundProps = {
  variant?: HeroVariant
  /** Home is the LCP image and must never be deferred. */
  priority?: boolean
}

/**
 * The hero artwork layer.
 *
 * One supplied WebP is the whole visual — nothing is drawn over it, and no
 * gradient is layered on top that would alter its character. Sections other
 * than the home hero re-frame the same file rather than getting artwork of
 * their own, which keeps every page on one image and one design language.
 *
 * `object-fit: cover` with a per-variant `object-position` means the image is
 * cropped, never stretched: its aspect ratio is preserved at every viewport.
 */
export function HeroBackground({ variant = 'home', priority = false }: HeroBackgroundProps) {
  return (
    <div className={`hero-bg hero-bg--${variant}`} aria-hidden="true">
      <img
        className="hero-bg__image"
        src={heroArtwork}
        alt=""
        decoding={priority ? 'sync' : 'async'}
        loading="eager"
        fetchPriority={priority ? 'high' : 'auto'}
        draggable={false}
      />
    </div>
  )
}
