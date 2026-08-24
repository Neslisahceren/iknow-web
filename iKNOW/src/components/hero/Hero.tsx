import { useContent } from '../../i18n/context'
import { Action } from '../ui/Action'
import { Wordmark } from '../ui/Wordmark'
import { HeroBackground } from './HeroBackground'
import { HeroRimLight } from './HeroRimLight'
import { HeroSheen } from './HeroSheen'
import './hero.css'

/**
 * The home hero.
 *
 * Layout and copy only — the artwork is `HeroBackground` and the moving edge
 * light is `HeroRimLight`, with `HeroSheen` sliding a reflection across both.
 * The lockup, claim, call to action and scroll cue keep the positions they
 * already had; nothing here re-interprets the design.
 */
export function Hero() {
  const { hero } = useContent().home

  return (
    <section className="hero hero--home" id="main-content">
      <HeroBackground variant="home" priority />
      <HeroRimLight />
      <HeroSheen />

      <div className="shell hero__inner">
        <div className="home-hero__stack">
          <h1 className="home-hero__mark">
            <span className="sr-only">{hero.srTitle}</span>
            <Wordmark asLink={false} />
          </h1>

          <p className="home-hero__claim">{hero.claim}</p>

          <Action to={hero.action.to} variant="stacked">
            {hero.action.label}
          </Action>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span className="scroll-cue__label">{hero.scrollCue}</span>
        <span className="scroll-cue__line" />
      </div>
    </section>
  )
}
