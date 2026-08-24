import { useState, type FormEvent } from 'react'
import { Reveal } from '../components/ui/Reveal'
import { HeroGlow } from '../components/hero/HeroGlow'
import { Seo } from '../components/ui/Seo'
import { SectionTransition } from '../components/visuals/SectionTransition'
import { useContent } from '../i18n/context'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const { contact } = useContent()
  const { hero, section, details, form } = contact

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    // No backend is wired up yet; the form validates and acknowledges so the
    // page is honest about what it does rather than pretending to send.
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Seo title={contact.seo.title} description={contact.seo.description} />

      <section className="hero hero--page" id="main-content">
        <HeroGlow />

        <div className="shell hero__inner">
          <div style={{ maxWidth: '38rem' }}>
            <p className="u-eyebrow">{hero.eyebrow}</p>
            <h1 className="u-display">
              {hero.title} <span className="u-accent">{hero.titleTail}</span>
              <span className="u-period">.</span>
            </h1>
            <p className="u-lede" style={{ margin: '1rem 0 0', maxWidth: '30rem' }}>
              {hero.lede}
            </p>
          </div>
        </div>
      </section>

      <SectionTransition direction="to-light" />

      <section className="section section--light">
        <div className="shell">
          <div className="editorial">
            <Reveal>
              <p className="u-eyebrow u-eyebrow--ink">{section.eyebrow}</p>
              <h2 className="u-headline u-ink u-measure-sm">
                {section.title}
                <span className="u-period">.</span>
              </h2>

              <dl className="detail-list">
                {details.map((detail) => (
                  <div key={detail.term}>
                    <dt>{detail.term}</dt>
                    <dd>
                      {detail.href ? (
                        <a href={detail.href}>{detail.value}</a>
                      ) : (
                        detail.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.1}>
              <form className="form" onSubmit={onSubmit} noValidate={false}>
                <div className="field">
                  <label className="field__label" htmlFor="contact-name">
                    {form.name}
                  </label>
                  <input
                    className="field__control"
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="field">
                  <label className="field__label" htmlFor="contact-email">
                    {form.email}
                  </label>
                  <input
                    className="field__control"
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="field field--full">
                  <label className="field__label" htmlFor="contact-company">
                    {form.company}
                  </label>
                  <input
                    className="field__control"
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                  />
                </div>

                <div className="field field--full">
                  <label className="field__label" htmlFor="contact-message">
                    {form.message}
                  </label>
                  <textarea
                    className="field__control"
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                  />
                  <span className="field__hint">{form.messageHint}</span>
                </div>

                <button className="form__submit" type="submit">
                  {form.submit}
                </button>

                <p className="form__status" role="status">
                  {submitted ? form.success : ''}
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
