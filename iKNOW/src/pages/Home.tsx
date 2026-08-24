import { useMemo } from 'react'
import { Action } from '../components/ui/Action'
import { Reveal } from '../components/ui/Reveal'
import { Seo } from '../components/ui/Seo'
import { SectionTransition } from '../components/visuals/SectionTransition'
import { Hero } from '../components/hero/Hero'
import { useContent } from '../i18n/context'

export function HomePage() {
  const { site, home, contactPoints } = useContent()
  const { summary, intro, closing } = home

  const organizationSchema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: site.name,
      url: site.origin,
      email: site.email,
      telephone: contactPoints
        .filter((point) => point.href?.startsWith('tel:'))
        .map((point) => point.value),
      foundingDate: site.founded,
      description: site.blurb,
      address: {
        '@type': 'PostalAddress',
        streetAddress: contactPoints[0].value,
        addressLocality: 'İstanbul',
        addressCountry: 'TR',
      },
      sameAs: site.social.map((item) => item.href),
    }),
    [contactPoints, site],
  )

  return (
    <>
      <Seo
        title={home.seo.title}
        description={home.seo.description}
        structuredData={organizationSchema}
      />

      <Hero />

      {/* --- Summary panel, overlapping the hero --------------------- */}
      <section className="section section--dark section--summary">
        <div className="shell">
          <Reveal className="summary-panel">
            <div>
              <p className="u-eyebrow">{summary.eyebrow}</p>
              <h2 className="u-subhead u-measure-md">
                {summary.title} <span className="u-accent">{summary.titleTail}</span>
              </h2>
              <p className="u-lede" style={{ margin: '1.35rem 0 1.9rem' }}>
                {summary.lede}
              </p>
              <Action to={summary.action.to}>{summary.action.label}</Action>
            </div>

            <div className="stat-grid">
              {summary.stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <strong className="stat__value">{stat.value}</strong>
                  <span className="stat__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="marks" >
              {summary.marks.map((mark) => (
                <span className="marks__item" key={mark}>
                  {mark}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <SectionTransition direction="to-light" />

      {/* --- Who we are ---------------------------------------------- */}
      <section className="section section--light">
        <div className="shell">
          <Reveal className="editorial">
            <div>
              <p className="u-eyebrow u-eyebrow--ink">{intro.eyebrow}</p>
              <h2 className="u-headline u-ink u-measure-sm">
                {intro.title}
                <span className="u-period">.</span>
              </h2>
            </div>
            <div>
              <p className="u-body u-ink-soft">{intro.body}</p>
              <div style={{ marginTop: '2rem' }}>
                <Action to={intro.action.to} tone="ink">
                  {intro.action.label}
                </Action>
              </div>
            </div>
          </Reveal>

          {/* Same rhythm as the About statistics block, so the two pages
              share a beat rather than each inventing spacing. */}
          <Reveal delay={0.08} className="section-stats">
            <div className="stat-grid stat-grid--ink">
              {intro.stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <strong className="stat__value">{stat.value}</strong>
                  <span className="stat__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <SectionTransition direction="to-dark" />

      {/* --- Closing call to action ---------------------------------- */}
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
