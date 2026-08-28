type SectionTransitionProps = {
  /** Which ground the page is moving into. */
  direction: 'to-light' | 'to-dark'
}

/**
 * The join between a dark band and a light one.
 *
 * The curve is wide and shallow and deliberately asymmetric — it rises on
 * the right, where the surfaces sit, so the light bands read as the same
 * material continuing rather than a new block starting. A straight edge here
 * is what makes a page look like stacked sections.
 */
export function SectionTransition({ direction }: SectionTransitionProps) {
  const toLight = direction === 'to-light'

  return (
    <div className={`transition transition--${direction}`} aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" focusable="false">
        {toLight ? (
          <path
            d="M0 120 C 380 120 520 26 900 12 C 1160 2 1300 0 1440 0 L1440 120 Z"
            fill="var(--surface-light)"
          />
        ) : (
          /* Not a mirror of the curve above: this one dips toward the right
             so the two joins on a page never read as a repeated motif. */
          <path
            d="M0 30 C 340 16 600 92 980 108 C 1200 117 1340 120 1440 120 L1440 120 L0 120 Z"
            fill="var(--surface-deep)"
          />
        )}
      </svg>
    </div>
  )
}
