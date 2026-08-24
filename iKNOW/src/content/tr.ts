import type { Content } from './types'

/* ------------------------------------------------------------------
   Türkçe içerik.

   Metinler iknow.solutions üzerindeki kurumsal içerikten alınmıştır.
   Uzun paragraflar, mevcut tasarımın satır uzunluklarına sığacak şekilde
   kısaltılmıştır; hiçbir bilgi, istatistik veya iddia eklenmemiştir.
   ------------------------------------------------------------------ */

const email = 'info@iknow.com.tr'

const contactPoints: Content['contactPoints'] = [
  {
    term: 'Genel merkez',
    value:
      'Darüşşafaka Mh. Yakamoz Sitesi (Küme Evler) A1 Blk Ap. No: 12/12 Sarıyer/İstanbul',
  },
  {
    term: 'Ar-Ge merkezi (Teknopark)',
    value: 'Şükrüpaşa Mh. Zübeyde Hanım Cd. No: 3/2 Merkez/Edirne, Trakya Teknopark',
  },
  { term: 'Mobil / direkt', value: '0542 561 5838', href: 'tel:+905425615838' },
  { term: 'Küresel / İngiltere', value: '+44 7551 004972', href: 'tel:+447551004972' },
  { term: 'E-posta', value: email, href: `mailto:${email}` },
]

export const tr: Content = {
  locale: 'tr',
  htmlLang: 'tr',
  switchLabel: 'TR',
  switchAria: 'Türkçe',

  site: {
    name: 'iKnow Technology',
    shortName: 'iKnow',
    origin: 'https://iknow.solutions',
    blurb:
      'Küresel işletmelere güç veren o görünmez altyapının mühendisliğini yapıyoruz. İstanbul’dan dünyaya.',
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
      { label: 'Ana Sayfa', to: '/' },
      { label: 'Çözümlerimiz', to: '/solutions' },
      { label: 'Referanslar', to: '/companies' },
      { label: 'Müşteriler', to: '/customers' },
      { label: 'Hakkımızda', to: '/about' },
      { label: 'Kariyer', to: '/careers' },
      { label: 'İletişim', to: '/contact' },
    ],
    primaryLabel: 'Ana menü',
    overlayLabel: 'Site menüsü',
    open: 'Menüyü aç',
    close: 'Menüyü kapat',
    skip: 'İçeriğe geç',
    homeAria: 'iKnow Technology — ana sayfa',
    switcherLabel: 'Dil seçimi',
  },

  footer: {
    companyHeading: 'Şirket',
    solutionsHeading: 'Çözümler',
    contactHeading: 'İletişim',
    copyright: '© {year} iKnow Technology. Geleceği inşa ediyoruz.',
    solutions: ['iFlow Core', 'iFlow Pro', 'iFlow Cloud', 'iFlow Secure'],
  },

  home: {
    seo: {
      title: 'Kurumsal BT çözümleri',
      description:
        'iKnow Technology; anahtar teslim yazılım, sistem entegrasyonu, bulut altyapısı ve Camunda tabanlı iFlow BPM platformuyla kurumsal BT çözümleri sunar.',
    },
    hero: {
      srTitle: 'iKnow Technology Çözümleri',
      claim:
        'Deneyimli kadrosu ve BT’nin her alanındaki yetkinliğiyle sektöre değer katan öncü kuruluşlardan biriyiz.',
      action: { label: 'Hemen başlayın', to: '/contact' },
      scrollCue: 'KAYDIR',
    },
    summary: {
      eyebrow: 'Mühendislikte mükemmellik',
      title: 'Küresel bir oyuncu olma',
      titleTail: 'vizyonuyla.',
      lede: 'Anahtar teslim yazılım çözümleri, karmaşık sistem entegrasyonu, süreç kontrol danışmanlığı ve çevik dönüşüm dahil tüm BT alanlarında danışmanlık veriyoruz.',
      action: { label: 'Çözümlerimiz', to: '/solutions' },
      stats: [
        { value: '99%', label: 'Kesintisizlik (SLA)' },
        { value: '5M+', label: 'Günlük işlem' },
        { value: '24/7', label: 'Küresel destek' },
      ],
      marks: ['Garanti BBVA', 'Türk Telekom', 'T-Mobile', 'Innova', 'Kafein'],
      marksLabel: 'Referanslar',
    },
    intro: {
      eyebrow: 'Hakkımızda',
      title: 'İşletmeleri akıllı yazılım mimarileriyle güçlendiriyoruz',
      body: 'Kurumsal teknolojiyi kökten değiştirme vizyonuyla kurulan iKnow Technology, küçük bir tutkulu mühendis ekibinden dijital dönüşümde küresel bir güce dönüştü. Bugün birden fazla kıtada Fortune 500 şirketlerine hizmet veriyor, milyonlarca günlük işlemi destekleyen çözümler sunuyoruz.',
      action: { label: 'Hakkımızda', to: '/about' },
      stats: [
        { value: '2017', label: 'Kuruluş' },
        { value: '10+', label: 'Kurumsal müşteri' },
        { value: '1B+', label: 'Yıllık işlem' },
        { value: '15+', label: 'Ülke' },
      ],
    },
    closing: {
      eyebrow: 'Dönüşüme hazır mısınız?',
      title: 'Geleceği birlikte inşa edelim',
      text: 'İşletmenizin hak ettiği dijital altyapıyı tasarlamak için iKnow Technology ile güçlerinizi birleştirin.',
      action: { label: 'Projenizi başlatın', to: '/contact' },
    },
  },

  about: {
    seo: {
      title: 'Hakkımızda',
      description:
        '2017’de kurulan iKnow Technology, dijital dünyanın omurgasını kuran mühendislik ekibidir. Hikayemiz, değerlerimiz ve uzmanlık alanlarımız.',
    },
    hero: {
      eyebrow: 'Hakkımızda',
      title: 'Görünmeyeni tasarlıyoruz',
      lede: 'Dijital dünyanın omurgasını hassasiyet, tutku ve kod ile inşa ediyoruz.',
      action: { label: 'İletişime geçin', to: '/contact' },
    },
    story: {
      eyebrow: 'Hikayemiz',
      title: 'Küçük bir mühendis ekibinden küresel bir güce',
      body: 'Kurumsal teknolojiyi kökten değiştirme vizyonuyla kurulan iKnow Technology, küçük bir tutkulu mühendis ekibinden dijital dönüşümde küresel bir güce dönüştü. Bugün birden fazla kıtada Fortune 500 şirketlerine hizmet veriyor, milyonlarca günlük işlemi destekleyen çözümler sunuyoruz.',
      stats: [
        { value: '2017', label: 'Kuruluş' },
        { value: '10+', label: 'Kurumsal müşteri' },
        { value: '1B+', label: 'Yıllık işlem' },
        { value: '15+', label: 'Ülke' },
      ],
    },
    values: {
      eyebrow: 'Temel değerlerimiz',
      title: 'Her işimizin arkasındaki ilkeler',
      body: 'Misyonumuz, işletmeleri ölçeklenebilir, dayanıklı ve akıllı yazılım mimarileri ile güçlendirmek. Aşağıdaki dört değer, bu misyonu nasıl uyguladığımızı belirliyor.',
      entries: [
        {
          index: '01',
          title: 'Vizyon',
          text: 'Vizyonumuz, bilgi teknolojilerinin avantajlarını müşterilere bir fayda olarak sunmaktır.',
        },
        {
          index: '02',
          title: 'İnovasyon',
          text: 'iKnow olarak, en son teknoloji çözümlerini oluşturmaya ve uygulamaya odaklanıyoruz.',
        },
        {
          index: '03',
          title: 'Müşteri odaklılık',
          text: 'iKnow, müşteri projeleri için uygun proje yönetimi metodolojilerini seçmek ve uygulamak için destek verir.',
        },
        {
          index: '04',
          title: 'Küresel standartlar',
          text: 'Uzman ekibimiz ve kapsamlı küresel proje deneyimimizle, müşterilerimize tüm alanlarda hizmet veriyoruz.',
        },
      ],
    },
    mission: {
      eyebrow: 'Bize katılın',
      title: 'Geleceği birlikte',
      titleTail: 'inşa edelim.',
      panelEyebrow: 'Neden iKnow?',
      panelBody:
        'Camunda Resmi İş Ortağı · 7/24 teknik destek · SLA garantisi (%99 uptime) · Yerinde ve uzaktan destek · Özelleştirilmiş eğitim programları · Hızlı teslimat için Agile metodolojisi.',
      action: { label: 'Fırsatları gör', to: '/careers' },
    },
    expertise: {
      eyebrow: 'Uzmanlık alanlarımız',
      title: 'Neler yapıyoruz',
      body: 'Camunda tabanlı süreç otomasyonu, bulut tabanlı dönüşüm ve kurumsal entegrasyon: derinleştiğimiz üç alan.',
      entries: [
        {
          index: '01',
          title: 'BPM & iş akışı otomasyonu',
          text: 'Camunda tabanlı iş süreci yönetimi ve orkestrasyon çözümleriyle operasyonel verimliliği maksimize ediyoruz.',
        },
        {
          index: '02',
          title: 'Bulut tabanlı dönüşüm',
          text: 'Kubernetes, Docker ve mikroservis mimarisi ile ölçeklenebilir, dayanıklı sistemler inşa ediyoruz.',
        },
        {
          index: '03',
          title: 'Kurumsal entegrasyonlar',
          text: 'SAP, Oracle ve eski sistemlerinizi modern API ağ geçidi çözümleriyle bağlıyoruz.',
        },
      ],
    },
    closing: {
      eyebrow: 'Bizimle çalışın',
      title: 'Ne inşa ettiğinizi anlatın',
      text: 'Altyapınızı optimize etmeye hazır mısınız? Mühendislerimiz göreve hazır.',
      action: { label: 'İletişime geçin', to: '/contact' },
    },
  },

  contact: {
    seo: {
      title: 'İletişim',
      description:
        'iKnow Technology ile iletişime geçin. Sarıyer/İstanbul genel merkezi, Edirne Trakya Teknopark Ar-Ge merkezi ve küresel iletişim kanalları.',
    },
    hero: {
      eyebrow: 'İletişim',
      title: 'İşbirliğini',
      titleTail: 'başlat',
      lede: 'Altyapınızı optimize etmeye hazır mısınız? Mühendislerimiz göreve hazır.',
    },
    section: {
      eyebrow: 'Konumlarımız',
      title: 'Bir sonraki projeniz burada başlıyor',
    },
    details: contactPoints,
    form: {
      name: 'Ad soyad',
      email: 'Kurumsal e-posta',
      company: 'Kurum',
      message: 'Nasıl yardımcı olabiliriz?',
      messageHint: 'Başlamak için sorunu birkaç cümleyle anlatmanız yeterli.',
      submit: 'Mesajı gönder',
      success: 'Teşekkürler — mesajınız alındı. En kısa sürede size dönüş yapacağız.',
    },
  },

  careers: {
    seo: {
      title: 'Kariyer',
      description:
        'iKnow Technology açık pozisyonları ve başvuru formu. Yarının dijital altyapısını şekillendiren takımın parçası olun.',
    },
    hero: {
      eyebrow: 'Kariyer',
      title: 'Geleceği birlikte',
      titleTail: 'inşa edelim',
      lede: 'Yarının dijital altyapısını şekillendiren bir takımın parçası olun.',
    },
    listings: {
      eyebrow: 'Açık pozisyonlar',
      title: 'Şu anda aradığımız kişi',
      body: 'Aşağıdaki pozisyon için başvuruları değerlendiriyoruz. Uygun bir pozisyon görmeseniz de formu doldurarak havuzumuza katılabilirsiniz.',
      emptyNotice:
        'Şu anda açık bir pozisyon bulunmuyor, ancak aşağıdaki formu doldurarak genel başvuru havuzumuza katılabilirsiniz.',
      applyCta: 'Başvur',
      responsibilitiesLabel: 'Sorumluluklar',
      requirementsLabel: 'Aranan nitelikler',
      jobs: [
        {
          title: 'Yazılım Mühendisi (Backend)',
          department: 'Mühendislik',
          location: 'İstanbul / Uzaktan',
          tags: ['Tam zamanlı', 'Uzaktan uyumlu', 'Orta / Kıdemli'],
          summary:
            'Camunda tabanlı iFlow ürün ailesinde uçtan uca özellik geliştiren, ölçeklenebilir servisler tasarlayan bir backend mühendisi arıyoruz.',
          responsibilities: [
            'Java ve Spring Boot ile mikroservis tabanlı özellikler geliştirmek',
            'Camunda süreç motorları üzerinde iş akışı entegrasyonları kurmak',
            'Kod incelemelerine katılmak ve ekip standartlarının oluşmasına katkı sağlamak',
            'Üretim ortamındaki performans ve kararlılık sorunlarını araştırmak',
          ],
          requirements: [
            'Java / Spring Boot ile en az 2 yıl deneyim',
            'REST API tasarımı ve ilişkisel veritabanları konusunda tecrübe',
            'Docker ve temel Kubernetes bilgisi',
            'Camunda veya benzer bir BPM motoru deneyimi artı puandır',
          ],
        },
      ],
    },
    application: {
      eyebrow: 'Başvuru formu',
      title: 'Bize katılın',
      body: 'Yukarıdaki pozisyona veya genel olarak ekibimize başvurmak için formu doldurun; CV’nizi ekleyin ve size en kısa sürede dönüş yapalım.',
      options: {
        employmentTypes: ['Tam zamanlı', 'Yarı zamanlı', 'Stajyer', 'Serbest / Proje bazlı'],
        positions: ['Yazılım Mühendisi (Backend)', 'Diğer / Genel başvuru'],
      },
      form: {
        name: 'Ad soyad',
        email: 'E-posta',
        phone: 'Telefon',
        position: 'Başvurulan pozisyon',
        positionOther: 'Pozisyon belirtin',
        employmentType: 'Tercih edilen çalışma şekli',
        linkedin: 'LinkedIn / portföy (opsiyonel)',
        cv: 'CV yükleyin',
        cvHint: 'PDF, DOC veya DOCX — en fazla 10MB.',
        message: 'Eklemek istedikleriniz',
        messageHint: 'Kısaca kendinizden ve neden bize katılmak istediğinizden bahsedebilirsiniz.',
        submit: 'Başvuruyu gönder',
        success:
          'Teşekkürler — başvurunuz alındı. Ekibimiz uygun pozisyonlar için sizinle iletişime geçecek.',
      },
    },
  },

  notFound: {
    seo: {
      title: 'Sayfa bulunamadı',
      description: 'Aradığınız sayfa mevcut değil ya da başka bir adrese taşınmış.',
    },
    eyebrow: 'Hata 404',
    title: 'Bu sayfaya ulaşılamıyor',
    lede: 'Aradığınız sayfa mevcut değil ya da başka bir adrese taşınmış.',
    action: { label: 'Ana sayfaya dön', to: '/' },
  },

  catalogue: {
    solutions: {
      seo: {
        title: 'Çözümlerimiz',
        description:
          'Camunda tabanlı iFlow serisi: Core, Pro, Cloud, Audit ve Secure. Kurumsal düzeyde süreç otomasyonu, uyumluluk ve güvenlik çözümleri.',
      },
      eyebrow: 'Çözümlerimiz',
      title: 'Mükemmellik için',
      titleTail: 'tasarlandı',
      lede: 'Kurumsal düzeyde otomasyon ve güvenlik çözümlerimizi keşfedin.',
      heroAction: { label: 'Danışmanlık randevusu al', to: '/contact' },
      sectionEyebrow: 'Ürün ekosistemi',
      sectionTitle: 'iFlow serisi.',
      sectionText:
        'Hafif bir BPM motorundan tam yönetilen bulut altyapısına kadar beş sürüm; tamamı Camunda tabanlı.',
      entries: [
        {
          index: '01',
          title: 'iFlow Core — Temel',
          text: 'Temel BPM motoru. Hafif, hızlı ve Camunda tabanlı hassas süreç orkestrasyonu için tasarlandı. Otomasyon yolculuğuna başlayan ekipler için ideal. Java · Spring Boot · Camunda · PostgreSQL · REST API.',
        },
        {
          index: '02',
          title: 'iFlow Pro — Profesyonel',
          text: 'Gerçek zamanlı analitik, özel entegrasyonlar ve kurumsal düzeyde izleme panelleri ile gelişmiş iş akışı otomasyonu.',
        },
        {
          index: '03',
          title: 'iFlow Cloud — Bulut tabanlı',
          text: 'Otomatik ölçeklendirme, kesintisiz dağıtım ve küresel uç dağıtımı ile tam yönetilen bulut altyapısı. Siz süreçlere odaklanın, altyapıyı biz yönetelim. AWS · Kubernetes · Terraform · Docker · Camunda.',
        },
        {
          index: '04',
          title: 'iFlow Audit — Uyumluluk',
          text: 'Kurumsal düzeyde denetim izleri, uyumluluk yönetimi ve güvenlik izleme. Tam süreç şeffaflığı ve hesap verebilirlik gerektiren düzenlenmiş sektörler için tasarlandı. Java · Spring Security · ElasticSearch · Kafka · SIEM.',
        },
        {
          index: '05',
          title: 'iFlow Secure — Kurumsal',
          text: 'Maksimum güç. Çok kiracılı mimari, SSO, denetim izleri, SLA garantileri ve 7/24 özel destek. Her ölçekte kritik kurumsal operasyonlar için. Java · Camunda · OAuth2 · LDAP · K8s · Redis.',
        },
      ],
      closing: {
        eyebrow: 'Hangi iFlow size uygun?',
        title: 'Mükemmel uyumu birlikte bulalım',
        text: 'Çözüm mimarlarımız gereksinimlerinizi analiz edecek ve kuruluşunuz için ideal sürümü önerecektir.',
        action: { label: 'Danışmanlık randevusu al', to: '/contact' },
      },
    },

    companies: {
      seo: {
        title: 'Referanslar',
        description:
          'iAnalytics ve iQuality: veri zekası, yapay zeka, yazılım testi ve kalite güvencesi alanlarında iKnow Technology’nin iki uzman iştiraki.',
      },
      eyebrow: 'Referanslar',
      title: 'Ekosistemimiz',
      titleTail: 'biziz',
      lede: 'Veri zekası ve yazılım kalite güvencesinin geleceğini inşa eden iki uzman iştirakimiz.',
      heroAction: { label: 'Bize ulaşın', to: '/contact' },
      sectionEyebrow: 'İştiraklerimiz',
      sectionTitle: 'İki uzman iştirak.',
      sectionText:
        'Veri zekası ve kalite güvencesi, iKnow Technology çatısı altında iki ayrı uzmanlık merkezinde yürütülüyor.',
      entries: [
        {
          index: '01',
          title: 'iAnalytics — Veri zekası & yapay zeka',
          text: 'Ham veriyi stratejik avantaja dönüştürüyoruz. Gerçek zamanlı panolar, öngörücü analitik ve kurumsal karar alma için yapay zeka destekli içgörüler. Gerçek zamanlı panolar · Öngörücü analitik · Makine öğrenmesi modelleri · İş zekası.',
        },
        {
          index: '02',
          title: 'iQuality — Yazılım testi & kalite güvence',
          text: 'Her dağıtımda mükemmelliği garanti ediyoruz. Otomatik test çerçeveleri, performans kalite güvencesi ve kritik uygulamalar için güvenlik denetimi. Otomatik test · Performans KG · Güvenlik denetimi · CI/CD entegrasyonu.',
        },
      ],
      closing: {
        eyebrow: 'Daha fazla bilgi mi?',
        title: 'İştiraklerimizi tanıyın',
        text: 'İştiraklerimizin işinizi nasıl dönüştürebileceğini keşfedin.',
        action: { label: 'Bize ulaşın', to: '/contact' },
      },
    },

    customers: {
      seo: {
        title: 'Müşteriler',
        description:
          'Garanti BBVA, Türk Telekom, T-Mobile, Bein Sports ve daha fazlası. Önde gelen küresel organizasyonların dijital altyapısına güç veriyoruz.',
      },
      eyebrow: 'Müşteriler',
      title: 'Sektör devlerinin',
      titleTail: 'güvencesi',
      lede: 'Önde gelen küresel organizasyonların dijital altyapısına güç veriyoruz.',
      heroAction: { label: 'Projenizi başlatın', to: '/contact' },
      stats: [
        { value: '10+', label: 'Kurumsal müşteri' },
        { value: '50M+', label: 'Hizmet verilen kullanıcı' },
        { value: '1B+', label: 'Yıllık işlem' },
        { value: '99%', label: 'Kesintisizlik (SLA)' },
      ],
      sectionEyebrow: 'Müşteri portföyü',
      sectionTitle: 'Başarı hikayeleri.',
      sectionText:
        'Filo yönetiminden bankacılığa, telekomünikasyondan medyaya; kritik sistemleri ölçekte çalıştırıyoruz.',
      entries: [
        {
          index: '01',
          title: 'Hedef Filo — Filo yönetimi',
          text: 'Dakikada 50.000+ GPS sinyalini işleyen, kestirimci bakım ve sürücü analitiği içeren gerçek zamanlı filo takibi. Operasyonel maliyetlerde %35 düşüş. Java · Kafka · PostgreSQL · Kubernetes.',
        },
        {
          index: '02',
          title: 'CK Enerji — Enerji & altyapı',
          text: '3 milyon hane için akıllı enerji dağıtımında yapay zeka destekli şebeke optimizasyonu. Şebeke verimliliğinde %22 artış. Python · TensorFlow · Apache Spark · Docker.',
        },
        {
          index: '03',
          title: 'Mobilfon — Telekomünikasyon',
          text: 'Aylık 500M+ CDR kaydı işleyen ve 2M+ aboneye hizmet veren yeni nesil MVNO altyapısı. Pazara çıkış süresinde %40 hızlanma. Java · Spring Boot · MongoDB · OpenShift.',
        },
        {
          index: '04',
          title: 'Turna — Seyahat teknolojileri',
          text: '200+ havayolunu 3 saniyenin altında tarayan yüksek performanslı uçuş arama motoru. Arama hızında 3 kat artış. Node.js · Elasticsearch · Redis · AWS.',
        },
        {
          index: '05',
          title: 'Bein Sports — Medya & eğlence',
          text: '5M+ eşzamanlı izleyiciye 4K HDR içerik sunan OTT yayın platformu. Etkinliklerde %99,95 çalışma süresi. Go · FFmpeg · HLS/DASH · Kubernetes.',
        },
        {
          index: '06',
          title: 'Garanti BBVA — Bankacılık & fintek',
          text: 'Günlük 1M+ işlem ve gerçek zamanlı dolandırıcılık tespiti yapan mikroservis katmanı. Dolandırıcılık kayıplarında %60 azalma. Java · Spring Cloud · Kafka · Istio.',
        },
        {
          index: '07',
          title: 'Innova — Sistem entegrasyonu',
          text: 'Fortune 500 müşterileri için kurumsal seviyede entegrasyon çözümleri sunan stratejik ortaklık. 50+ kurumsal müşteriye hizmet. ESB · API Gateway · MuleSoft · Azure.',
        },
        {
          index: '08',
          title: 'Türk Telekom — Telekomünikasyon',
          text: '80M+ bağlantıyı izleyen analitik platformu ile 5G ağ mimarisi tasarımı. Olay çözümünde %50 hızlanma. C++ · Python · Prometheus · OpenStack.',
        },
        {
          index: '09',
          title: 'T-Mobile — Küresel bağlantı',
          text: '200+ iş ortağı ağı genelinde trafiği işleyen küresel dolaşım mutabakat sistemleri. Yıllık 12 milyon dolar gelir kurtarımı. Java · Apache Flink · Cassandra · GCP.',
        },
        {
          index: '10',
          title: 'Pia — Kurumsal yazılım',
          text: 'Kritik kamu ve finans süreçlerini güçlendiren kurumsal iş akışı otomasyonu. Manuel işlemlerde %70 azalma. Camunda · Java · Angular · Docker.',
        },
        {
          index: '11',
          title: 'Kafein — Büyük veri & analitik',
          text: 'Eyleme dönüştürülebilir içgörüler için ML boru hatları ile günlük 10TB+ veri işleyen gerçek zamanlı veri gölü. Müşteri elde tutmada %25 artış. Scala · Spark · Hadoop · Snowflake.',
        },
      ],
      closing: {
        eyebrow: 'Sırada siz olun',
        title: 'Bir sonraki başarı hikayesi olun',
        text: 'Dijital dönüşümleri için iKnow’a güvenen sektör liderlerinin arasına katılın.',
        action: { label: 'Projenizi başlatın', to: '/contact' },
      },
    },
  },
}
