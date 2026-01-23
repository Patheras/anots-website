export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ANOTS',
    alternateName: 'Atomic Units of Agency',
    url: 'https://anots.com',
    logo: 'https://anots.com/lambda-logo.svg',
    description: 'AI marketing automation platform with three specialized AI agents (Qubik for creative, Themis for analytical, Core for synthesis) and Brand Archaeologist that automatically extracts brand DNA from websites, documents, and social media. Free tier includes 3 ANOTs per month.',
    foundingDate: '2024',
    sameAs: [
      'https://twitter.com/anots',
      'https://linkedin.com/company/anots',
      'https://github.com/anots'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@anots.com',
      contactType: 'Customer Support',
      availableLanguage: ['English'],
      areaServed: 'Worldwide'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    }
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ANOTS - AI Marketing Automation Platform',
    url: 'https://anots.com',
    description: 'AI marketing automation with 3 AI agents. Qubik creates, Themis reviews, Core synthesizes. You approve. Free tier: 3 ANOTs, full AI team, no credit card required.',
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      name: 'ANOTS'
    }
  }

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ANOTS',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Marketing Automation',
    operatingSystem: 'Web Browser',
    browserRequirements: 'Requires JavaScript. Modern browser recommended.',
    softwareVersion: '2.0',
    releaseNotes: 'Brand Archaeologist with multi-source intelligence, TCAM V2 AI team, Activity Hub tracking',
    description: 'AI marketing automation platform featuring three specialized AI agents (Qubik, Themis, Core) that work together to create, review, and execute marketing campaigns. Includes Brand Archaeologist for automatic brand extraction from websites, documents, and social media.',
    featureList: [
      'Three AI Agents: Qubik (Creative), Themis (Analytical), Core (Synthesizer)',
      'Brand Archaeologist: Multi-source brand intelligence extraction',
      'Website Brand Extraction: Logos, colors, Google Fonts, brand voice',
      'Document Analysis: PDF, DOCX, PPTX brand guideline processing',
      'Social Media Learning: Meta (Facebook/Instagram) OAuth integration',
      'ANOT Creation: Atomic marketing automation units',
      'Approval-Based Workflow: Nothing runs without user approval',
      'Activity Hub: 24h/7-day/custom range tracking',
      'Cost Estimation: Pre-execution cost transparency',
      'ActivePieces Integration: 200+ app connections',
      'Multi-Platform Publishing: Instagram, LinkedIn, Twitter, WordPress',
      'Brand Consistency: Automatic brand standard enforcement',
      'Risk Detection: Themis analytical review system',
      'BYOK Support: Bring Your Own Keys (Pro tier)'
    ],
    offers: [
      {
        '@type': 'Offer',
        name: 'Explorer (Free)',
        price: '0',
        priceCurrency: 'USD',
        description: '3 ANOTs per month, full AI team (Qubik, Themis, Core), Brand Archaeologist with 3 excavations, 1 publishing platform, community support',
        eligibleQuantity: {
          '@type': 'QuantitativeValue',
          value: '3',
          unitText: 'ANOTs per month'
        }
      },
      {
        '@type': 'Offer',
        name: 'Standard',
        price: '9.90',
        priceCurrency: 'USD',
        billingIncrement: 'Monthly',
        description: '50 ANOTs per month, Gemini 3 Flash + Claude 3.5 Haiku + DeepSeek R1, Brand Archaeologist with 10 excavations, all publishing platforms, priority support',
        eligibleQuantity: {
          '@type': 'QuantitativeValue',
          value: '50',
          unitText: 'ANOTs per month'
        }
      },
      {
        '@type': 'Offer',
        name: 'Pro',
        price: '49.90',
        priceCurrency: 'USD',
        billingIncrement: 'Monthly',
        description: 'Unlimited ANOTs, GPT-5.2 + Claude Sonnet 4.5 + Gemini 3 Pro, unlimited Brand Archaeologist excavations, BYOK support, white label options, dedicated support',
        eligibleQuantity: {
          '@type': 'QuantitativeValue',
          value: 'Unlimited',
          unitText: 'ANOTs per month'
        }
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '127',
      bestRating: '5',
      worstRating: '1'
    },
    screenshot: 'https://anots.com/magic-preview.png',
    softwareHelp: {
      '@type': 'CreativeWork',
      url: 'https://anots.com/faq'
    }
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
          text: 'ANOT stands for Atomic Unit of Agency. It is the smallest independent marketing automation you can create in the ANOTS platform. Each ANOT represents a complete, self-contained marketing task that runs automatically after your approval. Examples include: posting to Instagram daily at 10am, writing weekly blog articles about marketing, sending monthly newsletters, or creating social media content calendars. ANOTs are created through natural language conversation with your AI team (Qubik, Themis, Core) and can be modified, paused, or deleted anytime. The free tier includes 3 ANOTs per month.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the AI team work in ANOTS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ANOTS uses a three-agent AI system called TCAM V2: (1) Qubik (Creative Motor) - Generates creative proposals, content ideas, and marketing strategies using models like Gemini 3 Flash or GPT-5.2. (2) Themis (Analytical Motor) - Reviews proposals for risks, costs, brand consistency, and practical constraints using models like Claude Sonnet 4.5 or DeepSeek R1. (3) Core (Synthesizer) - Combines both perspectives into a clear recommendation and presents it to you for approval. Nothing runs without your explicit approval. This three-agent architecture ensures creative ideas are balanced with analytical rigor before execution.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Brand Archaeologist and how does it extract brand information?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Brand Archaeologist is ANOTS multi-source brand intelligence system powered by Gemini 3 Pro and Gemini 2.5 Pro. It automatically extracts your brand DNA from three sources: (1) Website Analysis - Crawls up to 12 pages (home, about, products, services, pricing, contact) to extract logos, color palettes (primary, secondary, accent), Google Fonts, brand voice, and messaging. Limited to 2MB total data and same domain only. (2) Document Processing - Analyzes PDF, DOCX, PPTX files for brand guidelines, visual assets, typography rules, and brand standards. (3) Social Media Learning - Connects to Meta (Facebook/Instagram) via OAuth to analyze your last 10 posts for tone, style, and communication patterns. The AI Council (Qubik, Themis, Core) reviews all extracted data and creates a unified brand snapshot with provenance tracking.',
        },
      },
      {
        '@type': 'Question',
        name: 'What AI models does ANOTS use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ANOTS uses different AI models per tier: Free (Explorer): Qubik uses Gemini 2.5 Flash, Themis and Core use DeepSeek R1, Brand Archaeologist uses Gemini 3 Pro + Gemini 2.5 Pro. Standard ($9.90/mo): Qubik and Core use Gemini 3 Flash, Themis uses Claude 3.5 Haiku, Brand Archaeologist uses Gemini 3 Pro + Gemini 2.5 Pro. Pro ($49.90/mo): Qubik uses GPT-5.2, Themis uses Claude Sonnet 4.5, Core uses Gemini 3 Pro, Brand Archaeologist uses Gemini 3 Pro + Gemini 2.5 Pro with unlimited excavations. Pro tier also supports BYOK (Bring Your Own Keys) for direct billing to your AI provider.',
        },
      },
      {
        '@type': 'Question',
        name: 'What platforms and integrations does ANOTS support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ANOTS uses ActivePieces as the self-hosted workflow engine, providing connections to 200+ apps. Publishing platforms include Instagram, Facebook, Twitter, LinkedIn, WordPress, Medium, Ghost, and Webflow. Analytics and ads platforms include Google Analytics, Google Ads, Facebook Ads, LinkedIn Ads, and HubSpot. Other integrations include Mailchimp, SendGrid, Shopify, WooCommerce, Stripe, Google Drive, Dropbox, Slack, Discord, Zapier, Make, and Airtable. Free tier includes 1 publishing platform and 1 analytics platform. Standard and Pro tiers include all platforms.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does ANOTS cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ANOTS offers three pricing tiers: Explorer (Free Forever): 3 ANOTs per month, full AI team (Qubik, Themis, Core), Brand Archaeologist with 3 excavations per month, 1 publishing platform, 1 analytics platform, 24-hour Activity Hub view, community support. No credit card required. Standard ($9.90/month): 50 ANOTs per month, faster AI models (Gemini 3 Flash, Claude 3.5 Haiku), Brand Archaeologist with 10 excavations per month, all publishing and analytics platforms, 7-day Activity Hub view, priority email support, cost estimates before operations. Pro ($49.90/month): Unlimited ANOTs, flagship AI models (GPT-5.2, Claude Sonnet 4.5, Gemini 3 Pro), unlimited Brand Archaeologist excavations, BYOK support (bring your own OpenAI/Anthropic/Google keys for zero AI cost), custom Activity Hub range, multi-brand support, white label options, dedicated support.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Activity Hub?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Activity Hub is ANOTS centralized tracking system that shows all your marketing automations in one place. It displays what is currently running, what is scheduled for future execution, what has been published, and what failed with error details. Free tier provides 24-hour view, Standard tier provides 7-day view, and Pro tier provides custom date range view. Activity Hub includes daily focus view to keep you organized, monthly calendar for long-term planning, execution history with timestamps, and cost tracking per ANOT.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does ANOTS require coding or technical knowledge?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. ANOTS is designed for marketers, not developers. You create ANOTs through natural language conversation with your AI team. Simply tell Qubik what you need (e.g., "Post to Instagram daily at 10am with product photos"), and the AI team handles the technical implementation. The approval workflow shows you exactly what will happen before execution. No coding, no complex configurations, no technical setup required. However, Pro tier users can optionally use BYOK (Bring Your Own Keys) for advanced API integrations.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the approval workflow work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ANOTS uses an approval-based workflow where nothing runs without your explicit permission. The process: (1) You chat with your AI team about what you need. (2) Qubik creates a detailed proposal with content, strategy, and execution plan. (3) Themis reviews the proposal for risks, costs, brand consistency, and constraints. (4) Core synthesizes both perspectives and presents a clear recommendation. (5) You see the full plan, review all details, check estimated costs, and then approve or reject. (6) Only after your approval does the ANOT start running automatically. You can pause, modify, or delete any ANOT at any time.',
        },
      },
      {
        '@type': 'Question',
        name: 'What brand elements can ANOTS extract automatically?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Brand Archaeologist extracts comprehensive brand elements: Visual Identity includes logo variations (primary, secondary, favicon), color palette with hex codes (primary, secondary, accent colors), typography and Google Fonts with weights and styles, and image style patterns. Brand Voice includes tone and communication style (formal, casual, professional, friendly), key messaging and taglines, product and service descriptions, and value propositions. Company Context includes about summary and mission statement, product and service catalog, industry positioning and competitive advantages, and target audience insights. All extracted data includes provenance tracking showing which source (website, document, or social media) each element came from.',
        },
      }
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
