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
    name: string;
    included: boolean;
    limit?: string;
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
      { name: 'Up to 3 active ANOTs', included: true, limit: '3 ANOTs' },
      { name: 'TCAM V2 AI Team (Qubik + Themis + Core)', included: true },
      { name: 'Qubik: Gemini 2.5 Flash (Creative)', included: true },
      { name: 'Themis: DeepSeek R1 (Analytical with reasoning)', included: true },
      { name: 'Core: DeepSeek R1 (Synthesizer)', included: true },
      { name: 'Brand Archaeologist: Gemini 3 Pro, Gemini 2.5 Pro', included: true, limit: '3 excavations/month' },
      { name: 'Approval gate for all actions', included: true },
      { name: 'Activity Hub (24h view)', included: true },
      { name: 'Marketing Room - Full Brand Archaeologist', included: true },
      { name: '1 Publishing Platform (Instagram OR LinkedIn OR Twitter)', included: true, limit: '1 platform' },
      { name: 'SEO & Site Improvements (Unlimited)', included: true },
      { name: '1 Analytics/Ads Platform', included: true, limit: '1 platform' },
      { name: 'Community support', included: true },
      { name: 'Premium AI models', included: false },
      { name: 'All publishing platforms', included: false },
      { name: 'Cost estimates', included: false },
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
      { name: 'Up to 50 ANOTs per month', included: true, limit: '50 ANOTs' },
      { name: 'Qubik: Gemini 3 Flash (Advanced creative + multimodal)', included: true },
      { name: 'Themis: Claude 3.5 Haiku (Fast analytical reasoning)', included: true },
      { name: 'Core: Gemini 3 Flash (Multimodal synthesis)', included: true },
      { name: 'Brand Archaeologist: Gemini 3 Pro, Gemini 2.5 Pro', included: true, limit: '10 excavations/month' },
      { name: '+14% better content quality vs Free', included: true },
      { name: '+7% better risk detection vs Free', included: true },
      { name: '76% faster response time vs Free', included: true },
      { name: 'Credit-based billing for usage', included: true },
      { name: 'Cost estimates before operations', included: true },
      { name: 'Activity Hub (7-day view)', included: true },
      { name: 'Marketing Room - Full Brand Archaeologist', included: true },
      { name: 'All Publishing Platforms (Instagram, LinkedIn, Twitter, etc.)', included: true },
      { name: 'All Analytics/Ads Platforms', included: true },
      { name: 'Priority email support', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'BYOK (Bring Your Own Keys)', included: false },
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
      { name: 'Unlimited ANOTs', included: true },
      { name: 'Qubik: GPT-5.2 (OpenAI flagship - Best reasoning + creative)', included: true },
      { name: 'Themis: Claude Sonnet 4.5 (Anthropic flagship - Best analytical)', included: true },
      { name: 'Core: Gemini 3 Pro (Google flagship - Best multimodal synthesis)', included: true },
      { name: 'Brand Archaeologist: Gemini 3 Pro, Gemini 2.5 Pro (Unlimited)', included: true },
      { name: '+9% better content quality vs Standard', included: true },
      { name: '+10% better risk detection vs Standard', included: true },
      { name: '38% faster response time vs Standard', included: true },
      { name: 'Extended thinking chains visible', included: true },
      { name: 'BYOK - Use your own OpenAI/Anthropic/Google keys', included: true },
      { name: 'Direct billing to your provider (Zero AI cost with BYOK)', included: true },
      { name: 'Activity Hub (custom range)', included: true },
      { name: 'Multi-brand Marketing Room support', included: true },
      { name: 'All Publishing Platforms', included: true },
      { name: 'All Analytics/Ads Platforms', included: true },
      { name: 'White label options', included: true },
      { name: 'Dedicated support', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Custom integrations', included: true },
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
      { name: 'Everything in Agency', included: true },
      { name: 'Custom deployment options', included: true },
      { name: 'Dedicated infrastructure', included: true },
      { name: 'SLA guarantees', included: true },
      { name: 'Custom integrations & workflows', included: true },
      { name: 'Advanced security & compliance', included: true },
      { name: 'Dedicated account manager', included: true },
      { name: 'Priority support (24/7)', included: true },
      { name: 'Custom training & onboarding', included: true },
      { name: 'Volume discounts', included: true },
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
