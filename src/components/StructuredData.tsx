export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ANOTS',
    url: 'https://anots.com',
    logo: 'https://anots.com/logo.png',
    description: 'AI-powered marketing automation platform with three AI agents (Qubik, Themis, Core) that create, review, and manage your marketing automations.',
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
    description: 'Your AI Marketing Team That Never Sleeps',
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
    </>
  )
}
