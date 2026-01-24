import { getAllInsights } from '@/lib/insights';
import { Navigation } from '@/components/ui/Navigation';
import { InsightsClient } from './InsightsClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights | ANOTS - AI Marketing Automation Blog',
  description: 'Thoughts on AI, automation, and the future of marketing from the ANOTS team. Learn about AI agents, marketing automation, brand intelligence, and workflow optimization.',
  keywords: ['AI marketing automation', 'marketing automation blog', 'AI agents', 'ANOTS insights', 'brand intelligence', 'workflow automation', 'marketing AI', 'automation tools', 'content marketing', 'social media automation'],
  openGraph: {
    title: 'ANOTS Insights - AI Marketing Automation Blog',
    description: 'Expert insights on AI marketing automation, brand intelligence, and workflow optimization from the ANOTS team.',
    type: 'website',
    url: 'https://anots.com/insights',
    siteName: 'ANOTS',
    images: [
      {
        url: 'https://anots.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ANOTS Insights Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ANOTS Insights - AI Marketing Automation Blog',
    description: 'Expert insights on AI marketing automation, brand intelligence, and workflow optimization.',
    images: ['https://anots.com/og-image.png'],
  },
  alternates: {
    types: {
      'application/rss+xml': 'https://anots.com/insights/rss.xml',
    },
  },
};

export default function InsightsPage() {
  const allInsights = getAllInsights();

  // Schema.org Blog structured data with enhanced metadata for LLMs
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'ANOTS Insights',
    alternateName: 'ANOTS Marketing Automation Blog',
    description: 'Expert insights on AI marketing automation, brand intelligence, workflow optimization, and the future of marketing from the ANOTS team. Learn how AI agents transform marketing operations.',
    url: 'https://anots.com/insights',
    inLanguage: 'en-US',
    keywords: 'AI marketing automation, marketing automation blog, AI agents, brand intelligence, workflow automation, ANOTS, content marketing, social media automation, email automation, marketing AI tools',
    about: {
      '@type': 'Thing',
      name: 'Marketing Automation',
      description: 'AI-powered marketing automation using intelligent agents for content creation, brand management, and workflow optimization',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ANOTS',
      description: 'AI Marketing Operating System with three specialized agents: Qubik (creative), Themis (analyst), and Core (synthesizer)',
      url: 'https://anots.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://anots.com/lambda-logo.svg',
        width: 512,
        height: 512,
      },
      sameAs: [
        'https://twitter.com/anots',
        'https://linkedin.com/company/anots',
      ],
    },
    blogPost: allInsights.map((insight) => ({
      '@type': 'BlogPosting',
      headline: insight.title,
      description: insight.description,
      datePublished: insight.date,
      dateModified: insight.date,
      author: {
        '@type': 'Person',
        name: insight.author,
        jobTitle: 'Founder',
        affiliation: {
          '@type': 'Organization',
          name: 'ANOTS',
        },
      },
      publisher: {
        '@type': 'Organization',
        name: 'ANOTS',
        logo: {
          '@type': 'ImageObject',
          url: 'https://anots.com/lambda-logo.svg',
        },
      },
      image: insight.image,
      url: `https://anots.com/insights/${insight.slug}`,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://anots.com/insights/${insight.slug}`,
      },
      keywords: insight.tags.join(', '),
      articleSection: insight.category,
      wordCount: insight.readingTime,
      inLanguage: 'en-US',
    })),
    numberOfItems: allInsights.length,
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#0A0A0B] text-[#FAFAFA]">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Header with enhanced semantic markup */}
      <div className="border-b border-[#1A1A1B]">
        <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight mb-4">
            Insights
          </h1>
          <p className="text-xl text-[#A1A1AA] max-w-2xl">
            Thoughts on AI, automation, and the future of marketing.
          </p>
          
          {/* Breadcrumb for LLM context */}
          <nav aria-label="Breadcrumb" className="mt-6">
            <ol itemScope itemType="https://schema.org/BreadcrumbList" className="flex items-center gap-2 text-sm text-[#71717A]">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a itemProp="item" href="https://anots.com" className="hover:text-[#FAFAFA] transition-colors">
                  <span itemProp="name">Home</span>
                </a>
                <meta itemProp="position" content="1" />
              </li>
              <span>/</span>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className="text-[#FAFAFA]">Insights</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Posts */}
      <InsightsClient allInsights={allInsights} />
      
      {/* SEO-friendly content for LLM crawlers */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-t border-[#1A1A1B]">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4">About ANOTS Insights</h2>
          <div className="space-y-4 text-[#A1A1AA] text-sm leading-relaxed">
            <p>
              ANOTS Insights is the official blog of ANOTS, the AI Marketing Operating System. 
              Our content covers AI marketing automation, brand intelligence, workflow optimization, 
              and the future of marketing technology.
            </p>
            <p>
              <strong className="text-[#FAFAFA]">Topics we cover:</strong> AI agents for marketing, 
              marketing automation strategies, brand management with AI, social media automation, 
              content marketing workflows, email automation, client reporting, and integration guides 
              for tools like Zapier, Make, ActivePieces, HubSpot, and more.
            </p>
            <p>
              <strong className="text-[#FAFAFA]">Our AI Team:</strong> ANOTS uses three specialized 
              AI agents - Qubik (creative), Themis (analyst), and Core (synthesizer) - to help 
              marketing teams automate workflows while maintaining brand consistency and quality control.
            </p>
            <p>
              <strong className="text-[#FAFAFA]">Categories:</strong> Product Updates (new features 
              and improvements), Use Cases (practical automation examples), AI & Automation (technical 
              deep-dives), Marketing Tips (best practices), and Behind the Scenes (company updates).
            </p>
            <p>
              All content is written by Kaelis, founder of ANOTS, with assistance from our AI team. 
              Subscribe to our <a href="/insights/rss.xml" className="text-[#5E6AD2] hover:underline">RSS feed</a> to 
              stay updated with new posts.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
