import { Action } from '../components/ui/Action'
import { HeroGlow } from '../components/hero/HeroGlow'
import { Seo } from '../components/ui/Seo'
import { useContent } from '../i18n/context'

export function NotFoundPage() {
  const { notFound } = useContent()

  return (
    <>
      <Seo title={notFound.seo.title} description={notFound.seo.description} noIndex />

      <section className="hero hero--page" id="main-content">
        <HeroGlow />

        <div className="shell hero__inner">
          <div style={{ maxWidth: '36rem' }}>
            <p className="u-eyebrow">{notFound.eyebrow}</p>
            <h1 className="u-display">
              {notFound.title}
              <span className="u-period">.</span>
            </h1>
            <p className="u-lede" style={{ margin: '1rem 0 1.75rem' }}>
              {notFound.lede}
            </p>
            <Action to={notFound.action.to}>{notFound.action.label}</Action>
          </div>
        </div>
      </section>
    </>
  )
}
