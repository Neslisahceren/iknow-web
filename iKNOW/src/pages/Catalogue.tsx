import { ArrowUpRight } from 'lucide-react'
import { Action } from '../components/ui/Action'
import { Reveal } from '../components/ui/Reveal'
import { Seo } from '../components/ui/Seo'
import { HeroGlow } from '../components/hero/HeroGlow'
import { SectionTransition } from '../components/visuals/SectionTransition'
import type { CatalogueKey } from '../content'
import { useContent } from '../i18n/context'

type CataloguePageProps = {
  section: CatalogueKey
}

/**
 * One template for Solutions, Companies, Customers and Careers.
 *
 * These pages differ only in content, so they share a layout rather than
 * four near-identical files — and, importantly, share the same hero
 * composition so inner pages stay inside the design system.
 */
export function CataloguePage({ section }: CataloguePageProps) {
  const page = useContent().catalogue[section]

  return (
    <>
      <Seo title={page.seo.title} description={page.seo.description} />

      <section className="hero hero--page" id="main-content">
        <HeroGlow />

        <div className="shell hero__inner">
          <div style={{ maxWidth: '38rem' }}>
            <p className="u-eyebrow">{page.eyebrow}</p>
            <h1 className="u-display">
              {page.title}{' '}
              {page.titleTail ? (
                <span className="u-accent">{page.titleTail}</span>
              ) : null}
              <span className="u-period">.</span>
            </h1>
            <p className="u-lede" style={{ margin: '1rem 0 1.75rem', maxWidth: '30rem' }}>
              {page.lede}
            </p>
            <Action to={page.heroAction.to}>{page.heroAction.label}</Action>
          </div>
        </div>
      </section>

      <SectionTransition direction="to-light" />

      <section className="section section--light">
        <div className="shell">
          <Reveal className="editorial">
            <div>
              <p className="u-eyebrow u-eyebrow--ink">{page.sectionEyebrow}</p>
              <h2 className="u-headline u-ink u-measure-sm">
                {page.sectionTitle}
              </h2>
            </div>
            <p className="u-body u-ink-soft">{page.sectionText}</p>
          </Reveal>

          {/* Only the pages that have figures of their own carry this, on the
              beat Home and About already use for statistics. */}
          {page.stats ? (
            <Reveal delay={0.08} className="section-stats">
              <div className="stat-grid stat-grid--ink">
                {page.stats.map((stat) => (
                  <div className="stat" key={stat.label}>
                    <strong className="stat__value">{stat.value}</strong>
                    <span className="stat__label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ) : null}

          <div className="index-list">
            {page.entries.map((entry, index) => (
              <Reveal
                key={entry.index}
                className="index-row"
                delay={Math.min(index * 0.05, 0.25)}
              >
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

      <section className="section section--dark">
        <div className="shell">
          <Reveal className="editorial">
            <div>
              <p className="u-eyebrow">{page.closing.eyebrow}</p>
              <h2 className="u-headline u-measure-sm">
                {page.closing.title}
                <span className="u-period">.</span>
              </h2>
            </div>
            <div>
              <p className="u-lede">{page.closing.text}</p>
              <div style={{ marginTop: '2rem' }}>
                <Action to={page.closing.action.to}>{page.closing.action.label}</Action>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
