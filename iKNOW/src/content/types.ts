/* ------------------------------------------------------------------
   Content model.

   Every user-facing string on the site lives behind this type. The design
   components read from it and never carry copy of their own, so a locale is
   added by writing one more dictionary rather than by touching a component.
   ------------------------------------------------------------------ */

export type Locale = 'tr' | 'en'

export type NavItem = {
  label: string
  /** Locale-neutral path. The prefix for the active locale is applied at render. */
  to: string
}

export type Stat = {
  value: string
  label: string
}

/** A numbered row in `.index-list`, and the card in `.values`. */
export type IndexEntry = {
  index: string
  title: string
  text: string
}

export type SeoMeta = {
  title: string
  description: string
}

export type LinkedAction = {
  label: string
  to: string
}

/** The dark closing band that ends every inner page. */
export type ClosingBlock = {
  eyebrow: string
  title: string
  /** Rendered before the accent full stop, so leave the stop out. */
  text: string
  action: LinkedAction
}

export type CatalogueKey = 'solutions' | 'companies' | 'customers'

/**
 * Shared shape for Solutions, Companies and Customers. These pages differ
 * only in content, so they share one template — and therefore one type.
 * Careers used to be a fourth member of this set; it now carries real job
 * listings and an application form, which the shared catalogue template has
 * no shape for, so it has its own page and its own content type below.
 */
export type CataloguePage = {
  seo: SeoMeta
  eyebrow: string
  title: string
  /** Optional accented tail of the headline. */
  titleTail?: string
  lede: string
  heroAction: LinkedAction
  /** Rendered as `.section-stats` under the hero when present. */
  stats?: Stat[]
  sectionEyebrow: string
  sectionTitle: string
  sectionText: string
  entries: IndexEntry[]
  closing: ClosingBlock
}

export type HomePage = {
  seo: SeoMeta
  hero: {
    /** Screen-reader name for the lockup artwork. */
    srTitle: string
    claim: string
    action: LinkedAction
    scrollCue: string
  }
  summary: {
    eyebrow: string
    title: string
    titleTail: string
    lede: string
    action: LinkedAction
    stats: Stat[]
    marks: string[]
    marksLabel: string
  }
  intro: {
    eyebrow: string
    title: string
    body: string
    action: LinkedAction
    stats: Stat[]
  }
  closing: ClosingBlock
}

export type AboutPage = {
  seo: SeoMeta
  hero: {
    eyebrow: string
    title: string
    lede: string
    action: LinkedAction
  }
  story: {
    eyebrow: string
    title: string
    body: string
    stats: Stat[]
  }
  values: {
    eyebrow: string
    title: string
    body: string
    entries: IndexEntry[]
  }
  mission: {
    eyebrow: string
    title: string
    titleTail: string
    panelEyebrow: string
    panelBody: string
    action: LinkedAction
  }
  expertise: {
    eyebrow: string
    title: string
    body: string
    entries: IndexEntry[]
  }
  closing: ClosingBlock
}

export type ContactDetail = {
  term: string
  value: string
  /** `mailto:` or `tel:` when the value should be actionable. */
  href?: string
}

export type ContactPage = {
  seo: SeoMeta
  hero: {
    eyebrow: string
    title: string
    titleTail: string
    lede: string
  }
  section: {
    eyebrow: string
    title: string
  }
  details: ContactDetail[]
  form: {
    name: string
    email: string
    company: string
    message: string
    messageHint: string
    submit: string
    success: string
  }
}

/** One open position. There is exactly one of these until a hiring panel
 * exists to add more — see `CareersPage.emptyNotice`. */
export type JobListing = {
  title: string
  department: string
  location: string
  /** e.g. "Tam zamanlı", "Stajyer" — shown as tags on the card. */
  tags: string[]
  summary: string
  responsibilities: string[]
  requirements: string[]
}

/** Options for the two selects in the application form. Values are the
 * option labels themselves — there is no backend yet to key them against. */
export type CareersFormOptions = {
  employmentTypes: string[]
  positions: string[]
}

export type CareersPage = {
  seo: SeoMeta
  hero: {
    eyebrow: string
    title: string
    titleTail: string
    lede: string
  }
  listings: {
    eyebrow: string
    title: string
    body: string
    /** Shown instead of a listing card once every open role is filled. */
    emptyNotice: string
    /** Label on each card's link down to the application form. */
    applyCta: string
    /** Headings for the two lists inside every job card. */
    responsibilitiesLabel: string
    requirementsLabel: string
    jobs: JobListing[]
  }
  application: {
    eyebrow: string
    title: string
    body: string
    options: CareersFormOptions
    form: {
      name: string
      email: string
      phone: string
      position: string
      positionOther: string
      employmentType: string
      linkedin: string
      cv: string
      cvHint: string
      message: string
      messageHint: string
      submit: string
      success: string
    }
  }
}

export type NotFoundPage = {
  seo: SeoMeta
  eyebrow: string
  title: string
  lede: string
  action: LinkedAction
}

export type Content = {
  locale: Locale
  /** Value written to `<html lang>` for this locale. */
  htmlLang: string
  /** Label shown in the language switcher for this locale. */
  switchLabel: string
  /** Accessible name for the control that switches *to* this locale. */
  switchAria: string

  site: {
    name: string
    shortName: string
    origin: string
    /** Footer blurb, also used as the Organization description. */
    blurb: string
    founded: string
    email: string
    locationLine: string
    social: { label: string; href: string }[]
  }

  /** Contact rows reused by the footer and the navigation overlay. */
  contactPoints: ContactDetail[]

  nav: {
    items: NavItem[]
    primaryLabel: string
    overlayLabel: string
    open: string
    close: string
    skip: string
    homeAria: string
    switcherLabel: string
  }

  footer: {
    companyHeading: string
    solutionsHeading: string
    contactHeading: string
    /** `{year}` is replaced at render time. */
    copyright: string
    /** Product links; all resolve to the solutions route. */
    solutions: string[]
  }

  home: HomePage
  about: AboutPage
  contact: ContactPage
  careers: CareersPage
  notFound: NotFoundPage
  catalogue: Record<CatalogueKey, CataloguePage>
}
