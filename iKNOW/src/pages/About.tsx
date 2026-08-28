import { ArrowUpRight } from 'lucide-react'
import { Action } from '../components/ui/Action'
import { Reveal } from '../components/ui/Reveal'
import { Seo } from '../components/ui/Seo'
import { HeroGlow } from '../components/hero/HeroGlow'
import { SectionTransition } from '../components/visuals/SectionTransition'
import { useContent } from '../i18n/context'

export function AboutPage() {
  const { about } = useContent()
  const { hero, story, values, mission, expertise, closing } = about

  return (
    <>
      <Seo title={about.seo.title} description={about.seo.description} />

      {/* --- Hero: continues the home page rather than restating it --- */}
      <section className="hero hero--page" id="main-content">
        <HeroGlow />

        <div className="shell hero__inner">
          <div style={{ maxWidth: '38rem' }}>
            <p className="u-eyebrow">{hero.eyebrow}</p>
            <h1 className="u-display">
              {hero.title}
              <span className="u-period">.</span>
            </h1>
            <p className="u-lede" style={{ margin: '1rem 0 1.75rem', maxWidth: '30rem' }}>
              {hero.lede}
            </p>
            <Action to={hero.action.to}>{hero.action.label}</Action>
          </div>
        </div>
      </section>

      <SectionTransition direction="to-light" />

      {/* --- Who we are ------------------------------------------------ */}
      <section className="section section--light">
        <div className="shell">
          <Reveal className="editorial">
            <div>
              <p className="u-eyebrow u-eyebrow--ink">{story.eyebrow}</p>
              <h2 className="u-headline u-ink u-measure-sm">
                {story.title}
                <span className="u-period">.</span>
              </h2>
            </div>
            <p className="u-body u-ink-soft">{story.body}</p>
          </Reveal>

          <Reveal delay={0.08} className="section-stats">
            <div className="stat-grid stat-grid--ink">
              {story.stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <strong className="stat__value">{stat.value}</strong>
                  <span className="stat__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- Values ---------------------------------------------------- */}
      <section className="section section--light-alt" style={{ paddingTop: 0 }}>
        <div className="shell">
          <Reveal className="editorial">
            <div>
              <p className="u-eyebrow u-eyebrow--ink">{values.eyebrow}</p>
              <h2 className="u-headline u-ink u-measure-sm">
                {values.title}
                <span className="u-period">.</span>
              </h2>
            </div>
            <p className="u-body u-ink-soft">{values.body}</p>
          </Reveal>

          <div className="values">
            {values.entries.map((value, index) => (
              <Reveal as="article" className="value" key={value.index} delay={index * 0.06}>
                <span className="value__index">{value.index}</span>
                <h3 className="value__title">{value.title}</h3>
                <p className="value__text">{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition direction="to-dark" />

      {/* --- Mission: the strongest callback to the home hero ---------- */}
      <section className="section section--dark hero" style={{ overflow: 'hidden' }}>
        <HeroGlow />

        <div className="shell hero__inner">
          <div className="editorial">
            <Reveal>
              <p className="u-eyebrow">{mission.eyebrow}</p>
              <h2 className="u-headline u-measure-sm">
                {mission.title} <span className="u-accent">{mission.titleTail}</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="mission-panel">
              <p className="u-eyebrow" style={{ marginBottom: '0.9rem' }}>
                {mission.panelEyebrow}
              </p>
              <p className="u-body">{mission.panelBody}</p>
              <div style={{ marginTop: '1.75rem' }}>
                <Action to={mission.action.to}>{mission.action.label}</Action>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionTransition direction="to-light" />

      {/* --- Areas of expertise ---------------------------------------- */}
      <section className="section section--light">
        <div className="shell">
          <Reveal className="editorial">
            <div>
              <p className="u-eyebrow u-eyebrow--ink">{expertise.eyebrow}</p>
              <h2 className="u-headline u-ink u-measure-sm">
                {expertise.title}
                <span className="u-period">.</span>
              </h2>
            </div>
            <p className="u-body u-ink-soft">{expertise.body}</p>
          </Reveal>

          <div className="index-list">
            {expertise.entries.map((entry, index) => (
              <Reveal key={entry.index} className="index-row" delay={index * 0.05}>
                <span className="index-row__index">{entry.index}</span>
                <h3 className="index-row__title">{entry.title}</h3>
                <p className="index-row__text">{entry.text}</p>
                <span className="index-row__mark" aria-hidden="true">
                  <ArrowUpRight size={18} strokeWidth={1.75} />
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition direction="to-dark" />

      {/* --- Closing --------------------------------------------------- */}
      <section className="section section--dark">
        <div className="shell">
          <Reveal className="editorial">
            <div>
              <p className="u-eyebrow">{closing.eyebrow}</p>
              <h2 className="u-headline u-measure-sm">
                {closing.title}
                <span className="u-period">.</span>
              </h2>
            </div>
            <div>
              <p className="u-lede">{closing.text}</p>
              <div style={{ marginTop: '2rem' }}>
                <Action to={closing.action.to}>{closing.action.label}</Action>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
