import type { Content } from './types'

/* ------------------------------------------------------------------
   English content.

   Taken from the English locale that iknow.solutions itself ships, so this
   is the company's own wording rather than a translation of the Turkish.
   Long paragraphs are trimmed to the line lengths the design already uses;
   no fact, figure or claim has been added.
   ------------------------------------------------------------------ */

const email = 'info@iknow.com.tr'

const contactPoints: Content['contactPoints'] = [
  {
    term: 'Headquarters',
    value:
      'Darüşşafaka Mh. Yakamoz Sitesi (Küme Evler) A1 Blk Ap. No: 12/12 Sarıyer/İstanbul',
  },
  {
    term: 'R&D centre (Teknopark)',
    value: 'Şükrüpaşa Mh. Zübeyde Hanım Cd. No: 3/2 Merkez/Edirne, Trakya Teknopark',
  },
  { term: 'Mobile / direct', value: '0542 561 5838', href: 'tel:+905425615838' },
  { term: 'Global / UK', value: '+44 7551 004972', href: 'tel:+447551004972' },
  { term: 'Email', value: email, href: `mailto:${email}` },
]

export const en: Content = {
  locale: 'en',
  htmlLang: 'en',
  switchLabel: 'EN',
  switchAria: 'English',

  site: {
    name: 'iKnow Technology',
    shortName: 'iKnow',
    origin: 'https://iknow.solutions',
    blurb:
      'Engineering the invisible infrastructure that powers global enterprises. From Istanbul to the world.',
    founded: '2017',
    email,
    locationLine: 'İstanbul & Edirne, Türkiye',
    social: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/iknowtechnology' },
      { label: 'GitHub', href: 'https://github.com/orgs/iknow-tech' },
    ],
  },

  contactPoints,

  nav: {
    items: [
      { label: 'Home', to: '/' },
      { label: 'Solutions', to: '/solutions' },
      { label: 'Companies', to: '/companies' },
      { label: 'Customers', to: '/customers' },
      { label: 'About', to: '/about' },
      { label: 'Careers', to: '/careers' },
      { label: 'Contact', to: '/contact' },
    ],
    primaryLabel: 'Primary',
    overlayLabel: 'Site navigation',
    open: 'Open navigation',
    close: 'Close navigation',
    skip: 'Skip to content',
    homeAria: 'iKnow Technology — home',
    switcherLabel: 'Language',
  },

  footer: {
    companyHeading: 'Company',
    solutionsHeading: 'Solutions',
    contactHeading: 'Contact',
    copyright: '© {year} iKnow Technology. Engineering the future.',
    solutions: ['iFlow Core', 'iFlow Pro', 'iFlow Cloud', 'iFlow Secure'],
  },

  home: {
    seo: {
      title: 'Enterprise IT solutions',
      description:
        'iKnow Technology delivers enterprise-grade IT solutions including custom software development, cloud infrastructure, cybersecurity, and our flagship BPM platform iFlow powered by Camunda.',
    },
    hero: {
      srTitle: 'iKnow Technology Solutions',
      claim:
        'One of the leading providers in the industry, with experienced staff and competence in every field of IT.',
      action: { label: 'Get started', to: '/contact' },
      scrollCue: 'SCROLL',
    },
    summary: {
      eyebrow: 'Engineering perfection',
      title: 'With the vision of becoming a',
      titleTail: 'global player.',
      lede: 'We provide consultancy across all IT activities — turnkey software solutions, complex system integration, process control consultancy and agile transformation.',
      action: { label: 'View solutions', to: '/solutions' },
      stats: [
        { value: '99%', label: 'Uptime SLA' },
        { value: '5M+', label: 'Processes/day' },
        { value: '24/7', label: 'Global support' },
      ],
      marks: ['Garanti BBVA', 'Türk Telekom', 'T-Mobile', 'Innova', 'Kafein'],
      marksLabel: 'References',
    },
    intro: {
      eyebrow: 'About us',
      title: 'We empower enterprises with intelligent software architectures',
      body: 'Founded with a vision to revolutionise enterprise technology, iKnow Technology has grown from a small team of passionate engineers into a global force in digital transformation. Today we serve Fortune 500 companies across multiple continents, delivering solutions that power millions of daily transactions.',
      action: { label: 'About iKnow', to: '/about' },
      stats: [
        { value: '2017', label: 'Founded' },
        { value: '10+', label: 'Enterprise clients' },
        { value: '1B+', label: 'Transactions/year' },
        { value: '15+', label: 'Countries' },
      ],
    },
    closing: {
      eyebrow: 'Ready to transform?',
      title: 'Let’s build together',
      text: 'Partner with iKnow Technology to architect the digital infrastructure your enterprise deserves.',
      action: { label: 'Start your project', to: '/contact' },
    },
  },

  about: {
    seo: {
      title: 'About us',
      description:
        'Founded in 2017, iKnow Technology builds the backbone of the digital world. Our story, our core values and our areas of expertise.',
    },
    hero: {
      eyebrow: 'About',
      title: 'Engineering the invisible',
      lede: 'We build the backbone of the digital world with precision, passion, and code.',
      action: { label: 'Contact us', to: '/contact' },
    },
    story: {
      eyebrow: 'Our story',
      title: 'From a small team of engineers to a global force',
      body: 'Founded with a vision to revolutionise enterprise technology, iKnow Technology has grown from a small team of passionate engineers into a global force in digital transformation. Today we serve Fortune 500 companies across multiple continents, delivering solutions that power millions of daily transactions.',
      stats: [
        { value: '2017', label: 'Founded' },
        { value: '10+', label: 'Enterprise clients' },
        { value: '1B+', label: 'Transactions/year' },
        { value: '15+', label: 'Countries' },
      ],
    },
    values: {
      eyebrow: 'Our core values',
      title: 'The principles behind everything we build',
      body: 'Our mission is to empower enterprises with scalable, resilient, and intelligent software architectures. The four values below decide how we carry that mission out.',
      entries: [
        {
          index: '01',
          title: 'Vision',
          text: 'Our vision is to serve advantages of information technologies to the customers as a benefit.',
        },
        {
          index: '02',
          title: 'Innovation',
          text: 'At iKnow, we focus on creating and implementing cutting-edge technology solutions.',
        },
        {
          index: '03',
          title: 'Customer focus',
          text: 'iKnow gives support to choose and apply proper project management methodologies for the customer projects.',
        },
        {
          index: '04',
          title: 'Global standards',
          text: 'With our expert team and extensive global project experience, we provide services across all areas to our customers.',
        },
      ],
    },
    mission: {
      eyebrow: 'Join our journey',
      title: 'Build the future',
      titleTail: 'with us.',
      panelEyebrow: 'Why iKnow?',
      panelBody:
        'Camunda official partner · 7/24 technical support · SLA guarantee (99% uptime) · On-site and remote support · Customised training programmes · Agile methodology for fast delivery.',
      action: { label: 'View opportunities', to: '/careers' },
    },
    expertise: {
      eyebrow: 'Our areas of expertise',
      title: 'What we do',
      body: 'Camunda-based process automation, cloud-native transformation and enterprise integration: the three areas we go deep in.',
      entries: [
        {
          index: '01',
          title: 'BPM & workflow automation',
          text: 'We maximise operational efficiency with Camunda-based business process management and orchestration solutions.',
        },
        {
          index: '02',
          title: 'Cloud-native transformation',
          text: 'We build scalable, durable systems with Kubernetes, Docker and microservices architecture.',
        },
        {
          index: '03',
          title: 'Enterprise integrations',
          text: 'We connect your SAP, Oracle and legacy systems with modern API gateway solutions.',
        },
      ],
    },
    closing: {
      eyebrow: 'Work with us',
      title: 'Tell us what you are building',
      text: 'Ready to optimise your infrastructure? Our engineers are on standby.',
      action: { label: 'Contact the team', to: '/contact' },
    },
  },

  contact: {
    seo: {
      title: 'Contact',
      description:
        'Get in touch with iKnow Technology. Headquarters in Sarıyer/İstanbul, R&D centre at Trakya Teknopark in Edirne, and global contact channels.',
    },
    hero: {
      eyebrow: 'Contact',
      title: 'Initiate',
      titleTail: 'collaboration',
      lede: 'Ready to optimise your infrastructure? Our engineers are on standby.',
    },
    section: {
      eyebrow: 'Our locations',
      title: 'Your next project starts here',
    },
    details: contactPoints,
    form: {
      name: 'Full name',
      email: 'Business email',
      company: 'Organisation',
      message: 'How can we help?',
      messageHint: 'A few sentences on the problem is plenty to start.',
      submit: 'Send message',
      success: 'Thank you — your message has been noted. We will be in touch shortly.',
    },
  },

  careers: {
    seo: {
      title: 'Careers',
      description:
        'iKnow Technology open positions and application form. Be part of the team shaping the digital infrastructure of tomorrow.',
    },
    hero: {
      eyebrow: 'Careers',
      title: 'Build the future',
      titleTail: 'with us',
      lede: 'Be part of a team that shapes the digital infrastructure of tomorrow.',
    },
    listings: {
      eyebrow: 'Open positions',
      title: "Who we're looking for right now",
      body: "We're currently reviewing applications for the position below. Don't see a fit? Apply anyway and join our general talent pool.",
      emptyNotice:
        "There are no open positions right now, but you can still apply below to join our general talent pool.",
      applyCta: 'Apply',
      responsibilitiesLabel: 'Responsibilities',
      requirementsLabel: 'Requirements',
      jobs: [
        {
          title: 'Software Engineer (Backend)',
          department: 'Engineering',
          location: 'Istanbul / Remote',
          tags: ['Full-time', 'Remote-friendly', 'Mid / Senior'],
          summary:
            "We're looking for a backend engineer to build end-to-end features and design scalable services across the Camunda-based iFlow product family.",
          responsibilities: [
            'Build microservice-based features with Java and Spring Boot',
            'Set up workflow integrations on Camunda process engines',
            'Take part in code reviews and help shape team standards',
            'Investigate performance and stability issues in production',
          ],
          requirements: [
            'At least 2 years of experience with Java / Spring Boot',
            'Experience with REST API design and relational databases',
            'Working knowledge of Docker and basic Kubernetes',
            'Experience with Camunda or a similar BPM engine is a plus',
          ],
        },
      ],
    },
    application: {
      eyebrow: 'Application form',
      title: 'Join us',
      body: "Apply for the position above, or to the team in general — fill in the form, attach your CV, and we'll get back to you shortly.",
      options: {
        employmentTypes: ['Full-time', 'Part-time', 'Internship', 'Freelance / Project-based'],
        positions: ['Software Engineer (Backend)', 'Other / General application'],
      },
      form: {
        name: 'Full name',
        email: 'Email',
        phone: 'Phone',
        position: 'Position applied for',
        positionOther: 'Specify position',
        employmentType: 'Preferred working arrangement',
        linkedin: 'LinkedIn / portfolio (optional)',
        cv: 'Upload CV',
        cvHint: 'PDF, DOC or DOCX — max 10MB.',
        message: 'Anything else to add',
        messageHint: "A short note on yourself and why you'd like to join us.",
        submit: 'Send application',
        success: "Thank you — your application has been received. We'll be in touch about suitable openings.",
      },
    },
  },

  notFound: {
    seo: {
      title: 'Page not found',
      description: 'The page you are looking for does not exist or has moved.',
    },
    eyebrow: 'Error 404',
    title: 'This page is out of reach',
    lede: 'The page you are looking for does not exist, or it has moved somewhere else.',
    action: { label: 'Back to home', to: '/' },
  },

  catalogue: {
    solutions: {
      seo: {
        title: 'Solutions',
        description:
          'The Camunda-powered iFlow series: Core, Pro, Cloud, Audit and Secure. Enterprise-grade process automation, compliance and security solutions.',
      },
      eyebrow: 'Solutions',
      title: 'Engineered for',
      titleTail: 'excellence',
      lede: 'Explore our suite of enterprise-grade automation and security solutions.',
      heroAction: { label: 'Schedule consultation', to: '/contact' },
      sectionEyebrow: 'Product ecosystem',
      sectionTitle: 'The iFlow series.',
      sectionText:
        'Five editions, from a lightweight BPM engine to fully managed cloud infrastructure — all built on Camunda.',
      entries: [
        {
          index: '01',
          title: 'iFlow Core — Foundation',
          text: 'The foundational BPM engine. Lightweight, fast, and built for precision process orchestration on Camunda. Perfect for teams starting their automation journey. Java · Spring Boot · Camunda · PostgreSQL · REST API.',
        },
        {
          index: '02',
          title: 'iFlow Pro — Professional',
          text: 'Advanced workflow automation with real-time analytics, custom integrations, and enterprise-grade monitoring dashboards.',
        },
        {
          index: '03',
          title: 'iFlow Cloud — Cloud native',
          text: 'Fully managed cloud infrastructure with auto-scaling, zero-downtime deployments, and global edge distribution. Focus on processes while we handle the infrastructure. AWS · Kubernetes · Terraform · Docker · Camunda.',
        },
        {
          index: '04',
          title: 'iFlow Audit — Compliance',
          text: 'Enterprise-grade audit trails, compliance management, and security monitoring. Built for regulated industries requiring complete process transparency and accountability. Java · Spring Security · ElasticSearch · Kafka · SIEM.',
        },
        {
          index: '05',
          title: 'iFlow Secure — Enterprise',
          text: 'Maximum power. Multi-tenant architecture, SSO, audit trails, SLA guarantees, and dedicated 24/7 support. For mission-critical enterprise operations at any scale. Java · Camunda · OAuth2 · LDAP · K8s · Redis.',
        },
      ],
      closing: {
        eyebrow: 'Not sure which iFlow fits?',
        title: 'Let’s find your perfect fit',
        text: 'Our solution architects will analyse your requirements and recommend the ideal edition for your organisation.',
        action: { label: 'Schedule consultation', to: '/contact' },
      },
    },

    companies: {
      seo: {
        title: 'Companies',
        description:
          'iAnalytics and iQuality: two specialised iKnow Technology subsidiaries covering data intelligence, AI, software testing and quality assurance.',
      },
      eyebrow: 'Companies',
      title: 'Our',
      titleTail: 'ecosystem',
      lede: 'Two specialised subsidiaries powering the future of data intelligence and software quality assurance.',
      heroAction: { label: 'Contact us', to: '/contact' },
      sectionEyebrow: 'Our subsidiaries',
      sectionTitle: 'Two specialised subsidiaries.',
      sectionText:
        'Data intelligence and quality assurance are run as two distinct centres of expertise under iKnow Technology.',
      entries: [
        {
          index: '01',
          title: 'iAnalytics — Data intelligence & AI',
          text: 'Transforming raw data into strategic advantage. Real-time dashboards, predictive analytics, and AI-powered insights for enterprise decision-making. Real-time dashboards · Predictive analytics · Machine learning models · Business intelligence.',
        },
        {
          index: '02',
          title: 'iQuality — Software testing & QA',
          text: 'Ensuring excellence at every deployment. Automated testing frameworks, performance QA, and security auditing for mission-critical applications. Automated testing · Performance QA · Security auditing · CI/CD integration.',
        },
      ],
      closing: {
        eyebrow: 'Want to learn more?',
        title: 'Get to know our subsidiaries',
        text: 'Discover how our subsidiaries can transform your business.',
        action: { label: 'Contact us', to: '/contact' },
      },
    },

    customers: {
      seo: {
        title: 'Customers',
        description:
          'Garanti BBVA, Türk Telekom, T-Mobile, Bein Sports and more. Powering the digital infrastructure of leading global organisations.',
      },
      eyebrow: 'Customers',
      title: 'Trusted by industry',
      titleTail: 'titans',
      lede: 'Powering the digital infrastructure of leading global organisations.',
      heroAction: { label: 'Start your project', to: '/contact' },
      stats: [
        { value: '10+', label: 'Enterprise clients' },
        { value: '50M+', label: 'Users served' },
        { value: '1B+', label: 'Transactions/year' },
        { value: '99%', label: 'Uptime SLA' },
      ],
      sectionEyebrow: 'Our clients',
      sectionTitle: 'Success stories.',
      sectionText:
        'From fleet management to banking, telecommunications to media — we run mission-critical systems at scale.',
      entries: [
        {
          index: '01',
          title: 'Hedef Filo — Fleet management',
          text: 'Real-time fleet tracking processing 50,000+ GPS signals per minute with predictive maintenance and driver analytics. 35% reduction in operational costs. Java · Kafka · PostgreSQL · Kubernetes.',
        },
        {
          index: '02',
          title: 'CK Enerji — Energy & utilities',
          text: 'AI-powered grid optimisation for smart energy distribution across 3 million households. 22% improvement in grid efficiency. Python · TensorFlow · Apache Spark · Docker.',
        },
        {
          index: '03',
          title: 'Mobilfon — Telecommunications',
          text: 'Next-gen MVNO infrastructure handling 2M+ subscribers with 500M+ CDR records monthly. 40% faster time-to-market. Java · Spring Boot · MongoDB · OpenShift.',
        },
        {
          index: '04',
          title: 'Turna — Travel technology',
          text: 'High-performance flight search engine aggregating 200+ airlines in under 3 seconds. 3x improvement in search speed. Node.js · Elasticsearch · Redis · AWS.',
        },
        {
          index: '05',
          title: 'Bein Sports — Media & entertainment',
          text: 'OTT streaming platform supporting 4K HDR content to 5M+ concurrent viewers. 99.95% uptime during events. Go · FFmpeg · HLS/DASH · Kubernetes.',
        },
        {
          index: '06',
          title: 'Garanti BBVA — Banking & fintech',
          text: 'Microservices layer handling 1M+ daily transactions with real-time fraud detection. 60% reduction in fraud losses. Java · Spring Cloud · Kafka · Istio.',
        },
        {
          index: '07',
          title: 'Innova — System integration',
          text: 'Strategic partnership delivering enterprise-grade integration for Fortune 500 clients. 50+ enterprise clients served. ESB · API Gateway · MuleSoft · Azure.',
        },
        {
          index: '08',
          title: 'Türk Telekom — Telecommunications',
          text: '5G network architecture design with an analytics platform monitoring 80M+ connections. 50% faster incident resolution. C++ · Python · Prometheus · OpenStack.',
        },
        {
          index: '09',
          title: 'T-Mobile — Global connectivity',
          text: 'Global roaming settlement systems processing traffic across 200+ partner networks. $12M annual revenue recovery. Java · Apache Flink · Cassandra · GCP.',
        },
        {
          index: '10',
          title: 'Pia — Enterprise software',
          text: 'Enterprise workflow automation powering mission-critical government and financial processes. 70% reduction in manual processing. Camunda · Java · Angular · Docker.',
        },
        {
          index: '11',
          title: 'Kafein — Big data & analytics',
          text: 'Real-time data lake ingesting 10TB+ daily with ML pipelines for actionable insights. 25% better customer retention. Scala · Spark · Hadoop · Snowflake.',
        },
      ],
      closing: {
        eyebrow: 'You could be next',
        title: 'Become our next success story',
        text: 'Join the ranks of industry leaders who trust iKnow for their digital transformation.',
        action: { label: 'Start your project', to: '/contact' },
      },
    },
  },
}
