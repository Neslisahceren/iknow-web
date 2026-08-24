import { ArrowRight } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { HeroGlow } from '../components/hero/HeroGlow'
import { Reveal } from '../components/ui/Reveal'
import { Seo } from '../components/ui/Seo'
import { SectionTransition } from '../components/visuals/SectionTransition'
import { useContent } from '../i18n/context'

/** The label that opens the free-text "which position" field. Always the
 * last entry in `options.positions` — see the content file. */
function isOtherPosition(position: string, options: string[]) {
  return position === options[options.length - 1]
}

export function CareersPage() {
  const { careers } = useContent()
  const { hero, listings, application } = careers

  const [position, setPosition] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    // No backend is wired up yet — see the listings copy. The form validates
    // and acknowledges so the page is honest about what it currently does.
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Seo title={careers.seo.title} description={careers.seo.description} />

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

      {/* --- Open positions --------------------------------------------- */}
      <section className="section section--light">
        <div className="shell">
          <Reveal>
            <p className="u-eyebrow u-eyebrow--ink">{listings.eyebrow}</p>
            <h2 className="u-headline u-ink u-measure-md">
              {listings.title}
              <span className="u-period">.</span>
            </h2>
            <p className="u-body u-ink-soft" style={{ marginTop: '1.1rem', maxWidth: '40rem' }}>
              {listings.body}
            </p>
          </Reveal>

          {listings.jobs.length > 0 ? (
            <div className="job-list">
              {listings.jobs.map((job) => (
                <Reveal key={job.title} className="job-card" delay={0.08}>
                  <div className="job-card__head">
                    <div>
                      <h3 className="job-card__title">{job.title}</h3>
                      <p className="job-card__meta">
                        {job.department} · {job.location}
                      </p>
                    </div>
                    <a className="action action--ink" href="#basvuru">
                      <span>{listings.applyCta}</span>
                      <span className="action__ring" aria-hidden="true">
                        <ArrowRight size={16} strokeWidth={1.75} />
                      </span>
                    </a>
                  </div>

                  <ul className="job-card__tags">
                    {job.tags.map((tag) => (
                      <li className="job-tag" key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <p className="u-body u-ink-soft job-card__summary">{job.summary}</p>

                  <div className="job-card__lists">
                    <div>
                      <p className="job-card__listHeading">{listings.responsibilitiesLabel}</p>
                      <ul className="job-card__list">
                        {job.responsibilities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="job-card__listHeading">{listings.requirementsLabel}</p>
                      <ul className="job-card__list">
                        {job.requirements.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal className="job-empty">
              <p className="u-body u-ink-soft">{listings.emptyNotice}</p>
            </Reveal>
          )}
        </div>
      </section>

      <SectionTransition direction="to-dark" />

      {/* --- Application form --------------------------------------------
          No admin panel exists yet to manage postings or submissions — this
          is the one listing above, entered by hand, and a form that simply
          validates and acknowledges rather than pretending to send anywhere
          real. Both are meant to be replaced once that panel exists. */}
      <section className="section section--dark" id="basvuru">
        <div className="shell">
          <Reveal className="editorial">
            <div>
              <p className="u-eyebrow">{application.eyebrow}</p>
              <h2 className="u-headline u-measure-sm">
                {application.title}
                <span className="u-period">.</span>
              </h2>
              <p className="u-lede" style={{ marginTop: '1.1rem' }}>
                {application.body}
              </p>
            </div>

            <form className="form" onSubmit={onSubmit} noValidate={false}>
              <div className="field">
                <label className="field__label" htmlFor="careers-name">
                  {application.form.name}
                </label>
                <input
                  className="field__control"
                  id="careers-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="field">
                <label className="field__label" htmlFor="careers-email">
                  {application.form.email}
                </label>
                <input
                  className="field__control"
                  id="careers-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="field">
                <label className="field__label" htmlFor="careers-phone">
                  {application.form.phone}
                </label>
                <input
                  className="field__control"
                  id="careers-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                />
              </div>

              <div className="field">
                <label className="field__label" htmlFor="careers-employment">
                  {application.form.employmentType}
                </label>
                <select className="field__control" id="careers-employment" name="employmentType" required>
                  {application.options.employmentTypes.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className={position && isOtherPosition(position, application.options.positions) ? 'field' : 'field field--full'}>
                <label className="field__label" htmlFor="careers-position">
                  {application.form.position}
                </label>
                <select
                  className="field__control"
                  id="careers-position"
                  name="position"
                  required
                  value={position}
                  onChange={(event) => setPosition(event.target.value)}
                >
                  <option value="" disabled>
                    —
                  </option>
                  {application.options.positions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {isOtherPosition(position, application.options.positions) && (
                <div className="field">
                  <label className="field__label" htmlFor="careers-position-other">
                    {application.form.positionOther}
                  </label>
                  <input
                    className="field__control"
                    id="careers-position-other"
                    name="positionOther"
                    type="text"
                  />
                </div>
              )}

              <div className="field field--full">
                <label className="field__label" htmlFor="careers-linkedin">
                  {application.form.linkedin}
                </label>
                <input
                  className="field__control"
                  id="careers-linkedin"
                  name="linkedin"
                  type="url"
                  placeholder="https://"
                />
              </div>

              <div className="field field--full">
                <label className="field__label" htmlFor="careers-cv">
                  {application.form.cv}
                </label>
                <input
                  className="field__control field__control--file"
                  id="careers-cv"
                  name="cv"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={(event) => setFileName(event.target.files?.[0]?.name ?? '')}
                />
                <span className="field__hint">{fileName || application.form.cvHint}</span>
              </div>

              <div className="field field--full">
                <label className="field__label" htmlFor="careers-message">
                  {application.form.message}
                </label>
                <textarea
                  className="field__control"
                  id="careers-message"
                  name="message"
                  rows={4}
                />
                <span className="field__hint">{application.form.messageHint}</span>
              </div>

              <button className="form__submit" type="submit">
                {application.form.submit}
              </button>

              <p className="form__status" role="status">
                {submitted ? application.form.success : ''}
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
