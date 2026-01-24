/**
 * Pricing Tier Data
 * Static pricing information for ANOTS marketing website
 */

export interface PricingTierData {
  id: 'free' | 'standard' | 'pro' | 'enterprise';
  name: string;
  price: number | null;  // null for free tier or custom pricing
  billingPeriod: 'month' | 'year' | null;
  description: string;
  features: {
    category: string;
    items: {
      name: string;
      included: boolean;
      limit?: string;
    }[];
  }[];
  cta: {
    text: string;
    href: string;
    variant: 'primary' | 'secondary' | 'magic';
  };
  recommended: boolean;
}

/**
 * AI Model Performance Metrics
 */
export interface ModelPerformance {
  contentQuality: number;
  riskDetection: number;
  avgSpeed: number;
  successRate: number;
  multimodal: boolean;
  extendedThinking?: boolean;
  improvement?: {
    contentQuality: string;
    riskDetection: string;
    speed: string;
    successRate: string;
  };
}

export const modelPerformance: Record<string, ModelPerformance> = {
  free: {
    contentQuality: 7.8,
    riskDetection: 8.4,
    avgSpeed: 2.1,
    successRate: 94,
    multimodal: true,
  },
  standard: {
    contentQuality: 8.9,
    riskDetection: 9.0,
    avgSpeed: 0.5,
    successRate: 97,
    multimodal: true,
    improvement: {
      contentQuality: '+14%',
      riskDetection: '+7%',
      speed: '76% faster',
      successRate: '+3%',
    }
  },
  pro: {
    contentQuality: 9.7,
    riskDetection: 9.9,
    avgSpeed: 0.8,
    successRate: 99.5,
    multimodal: true,
    extendedThinking: true,
    improvement: {
      contentQuality: '+9%',
      riskDetection: '+10%',
      speed: '38% faster',
      successRate: '+2.5%',
    }
  }
};

export const pricingTiers: PricingTierData[] = [
  {
    id: 'free',
    name: 'Explorer',
    price: null,
    billingPeriod: null,
    description: 'Just to explore - Perfect for getting started',
    features: [
      {
        category: 'ANOTs & AI Team',
        items: [
          { name: 'Up to 3 active ANOTs', included: true, limit: '3 ANOTs' },
          { name: 'TCAM V2 AI Team (Qubik + Themis + Core)', included: true },
          { name: 'Qubik: Gemini 2.5 Flash', included: true },
          { name: 'Themis: DeepSeek R1', included: true },
          { name: 'Core: DeepSeek R1', included: true },
        ]
      },
      {
        category: 'Brand Intelligence',
        items: [
          { name: 'Brand Archaeologist', included: true, limit: '3 excavations/month' },
          { name: 'Marketing Room', included: true },
        ]
      },
      {
        category: 'Platforms & Integrations',
        items: [
          { name: '1 Publishing Platform', included: true, limit: 'Instagram OR LinkedIn OR Twitter' },
          { name: '1 Analytics/Ads Platform', included: true },
          { name: 'SEO & Site Improvements', included: true },
        ]
      },
      {
        category: 'Features & Support',
        items: [
          { name: 'Approval gate for all actions', included: true },
          { name: 'Activity Hub', included: true, limit: '24h view' },
          { name: 'Community support', included: true },
          { name: 'Premium AI models', included: false },
          { name: 'Cost estimates', included: false },
        ]
      },
    ],
    cta: { text: 'Start Free', href: 'https://app.anots.com/signup?plan=free', variant: 'primary' },
    recommended: false,
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 9.90,
    billingPeriod: 'month',
    description: 'Powerful production - Scale your marketing automation',
    features: [
      {
        category: 'ANOTs & AI Team',
        items: [
          { name: 'Up to 50 ANOTs per month', included: true, limit: '50 ANOTs' },
          { name: 'Qubik: Gemini 3 Flash', included: true },
          { name: 'Themis: Claude 3.5 Haiku', included: true },
          { name: 'Core: Gemini 3 Flash', included: true },
          { name: '+14% better content quality', included: true },
          { name: '+7% better risk detection', included: true },
          { name: '76% faster response time', included: true },
        ]
      },
      {
        category: 'Brand Intelligence',
        items: [
          { name: 'Brand Archaeologist', included: true, limit: '10 excavations/month' },
          { name: 'Marketing Room', included: true },
        ]
      },
      {
        category: 'Platforms & Integrations',
        items: [
          { name: 'All Publishing Platforms', included: true },
          { name: 'All Analytics/Ads Platforms', included: true },
        ]
      },
      {
        category: 'Features & Support',
        items: [
          { name: 'Activity Hub', included: true, limit: '7-day view' },
          { name: 'Cost estimates before operations', included: true },
          { name: 'Credit-based billing', included: true },
          { name: 'Priority email support', included: true },
          { name: 'Advanced analytics', included: true },
          { name: 'BYOK (Bring Your Own Keys)', included: false },
        ]
      },
    ],
    cta: { text: 'Get Standard', href: 'https://app.anots.com/signup?plan=standard', variant: 'magic' },
    recommended: true,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 49.90,
    billingPeriod: 'month',
    description: 'Unlimited freedom - Flagship models from every provider',
    features: [
      {
        category: 'ANOTs & AI Team',
        items: [
          { name: 'Unlimited ANOTs', included: true },
          { name: 'Qubik: GPT-5.2 (OpenAI flagship)', included: true },
          { name: 'Themis: Claude Sonnet 4.5 (Anthropic flagship)', included: true },
          { name: 'Core: Gemini 3 Pro (Google flagship)', included: true },
          { name: '+9% better content quality', included: true },
          { name: '+10% better risk detection', included: true },
          { name: '38% faster response time', included: true },
          { name: 'Extended thinking chains visible', included: true },
        ]
      },
      {
        category: 'Brand Intelligence',
        items: [
          { name: 'Brand Archaeologist', included: true, limit: 'Unlimited' },
          { name: 'Multi-brand Marketing Room', included: true },
        ]
      },
      {
        category: 'Platforms & Integrations',
        items: [
          { name: 'All Publishing Platforms', included: true },
          { name: 'All Analytics/Ads Platforms', included: true },
          { name: 'Custom integrations', included: true },
        ]
      },
      {
        category: 'Features & Support',
        items: [
          { name: 'Activity Hub', included: true, limit: 'Custom range' },
          { name: 'BYOK - Use your own API keys', included: true },
          { name: 'Direct billing to your provider', included: true },
          { name: 'White label options', included: true },
          { name: 'Dedicated support', included: true },
          { name: 'Advanced analytics', included: true },
        ]
      },
    ],
    cta: { text: 'Get Pro', href: 'https://app.anots.com/signup?plan=pro', variant: 'primary' },
    recommended: false,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: null,
    billingPeriod: null,
    description: 'Custom solutions - Tailored for your organization',
    features: [
      {
        category: 'Everything in Pro, Plus',
        items: [
          { name: 'Custom deployment options', included: true },
          { name: 'Dedicated infrastructure', included: true },
          { name: 'SLA guarantees', included: true },
          { name: 'Custom integrations & workflows', included: true },
          { name: 'Advanced security & compliance', included: true },
          { name: 'Dedicated account manager', included: true },
          { name: 'Priority support (24/7)', included: true },
          { name: 'Custom training & onboarding', included: true },
          { name: 'Volume discounts', included: true },
        ]
      },
    ],
    cta: { text: 'Contact Us', href: '/contact?plan=enterprise', variant: 'secondary' },
    recommended: false,
  },
];

/**
 * Format price for display
 */
export function formatPrice(price: number | null, period: 'month' | 'year' | null, tierId?: string): string {
  if (price === null || price === 0) {
    // Enterprise tier has null price but should show "Custom"
    if (tierId === 'enterprise') {
      return 'Custom';
    }
    return 'Free';
  }
  return `$${price.toFixed(2)}/${period}`;
}
