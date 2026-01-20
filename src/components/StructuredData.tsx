export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ANOTS',
    url: 'https://anots.com',
    logo: 'https://anots.com/logo.png',
    description: 'AI-powered marketing automation platform with three AI agents (Qubik, Themis, Core) and Brand Room that extracts brand intelligence from websites, documents, and social media.',
    sameAs: [
      'https://twitter.com/anots',
      'https://linkedin.com/company/anots',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@anots.com',
      contactType: 'Customer Support',
      availableLanguage: ['English'],
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ANOTS',
    url: 'https://anots.com',
    description: 'The AI marketing team that markets itself. If you\'ve heard of us, ANOTS is working.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://anots.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ANOTS',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    featureList: [
      'AI Marketing Automation',
      'Multi-Source Brand Intelligence',
      'Brand Room - Extract logos, colors, fonts from websites',
      'Document Analysis - PDF, DOCX, PPTX brand extraction',
      'Social Media Brand Learning',
      'Three AI Agents: Qubik, Themis, Core',
      'Approval-Based Workflow',
      'Activity Hub & Tracking',
      '200+ App Integrations via ActivePieces'
    ],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free tier available with 3 ANOTs',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '127',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an ANOT?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ANOT stands for Atomic Unit of Agency - it\'s the smallest independent marketing automation you can create. Each ANOT is a complete marketing task like "Post to Instagram daily at 10am" or "Write weekly blog articles". ANOTs are created through conversation with your AI team (Qubik, Themis, Core) and run automatically after your approval.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Brand Room and how does it work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Brand Room is ANOTS\' multi-source brand intelligence system. It automatically extracts your brand standards from three sources: (1) Website - analyzes up to 12 pages for logos, colors, fonts, and brand voice, (2) Documents - processes PDF, DOCX, PPTX files for brand guidelines and visual assets, (3) Social Media - connects to Meta (Facebook/Instagram) via OAuth to learn tone from your last 10 posts. The AI Council (Qubik, Themis, Core) reviews all extracted data and creates a unified brand snapshot.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much data does Brand Room collect from my website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Brand Room uses targeted signal collection, not full website scraping. Limits: Maximum 12 pages (prioritizing home, about, products, services, pricing, contact), 2MB total data, same domain only, 250KB per page HTML, 4 CSS files max (150KB total). The system focuses on brand-relevant pages and stops when limits are reached.',
        },
      },
      {
        '@type': 'Question',
        name: 'What brand elements can ANOTS extract automatically?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ANOTS Brand Room extracts: Visual Identity (logo variations, color palette with primary/secondary/accent colors, typography and Google Fonts), Brand Voice (tone and communication style, key messaging and taglines, product/service descriptions), and Company Context (about summary and mission, product/service catalog, industry positioning).',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the AI team work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ANOTS uses three AI agents: Qubik (Creative Motor) generates proposals and content, Themis (Logic Motor) reviews for risks, costs, and constraints, and Core (Guide) synthesizes both perspectives into clear recommendations. Nothing runs without your approval. This three-agent system ensures creative ideas are balanced with practical constraints.',
        },
      },
      {
        '@type': 'Question',
        name: 'What platforms does ANOTS connect to?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ANOTS uses ActivePieces as the workflow engine, connecting to 200+ apps including Instagram, Facebook, Twitter, LinkedIn, WordPress, Shopify, Google Drive, Mailchimp, HubSpot, Slack, and more. Each ANOT can integrate with multiple platforms to create complex marketing workflows.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
