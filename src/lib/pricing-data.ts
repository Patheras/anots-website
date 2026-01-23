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
    contentQuality: 7.2,
    riskDetection: 8.5,
    avgSpeed: 2.3,
    successRate: 94,
    multimodal: false,
  },
  pro: {
    contentQuality: 9.1,
    riskDetection: 9.3,
    avgSpeed: 1.4,
    successRate: 98,
    multimodal: true,
    improvement: {
      contentQuality: '+26%',
      riskDetection: '+9%',
      speed: '40% faster',
      successRate: '+4%',
    }
  },
  agency: {
    contentQuality: 9.8,
    riskDetection: 9.9,
    avgSpeed: 1.1,
    successRate: 99.5,
    multimodal: true,
    extendedThinking: true,
    improvement: {
      contentQuality: '+8%',
      riskDetection: '+6%',
      speed: '21% faster',
      successRate: '+1.5%',
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
      { name: 'Qubik: Gemini 2.0 Flash (Creative)', included: true },
      { name: 'Themis: DeepSeek R1 (Analytical with reasoning)', included: true },
      { name: 'Core: Gemini 2.0 Flash (Synthesizer)', included: true },
      { name: 'MAGIC Import: Gemini 2.0 Flash Experimental + Gemini 1.5 Pro', included: true, limit: '3 imports/month' },
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
    cta: { text: 'Start Free', href: 'https://app.anots.com/signup', variant: 'primary' },
    recommended: false,
  },
  {
    id: 'standard',
    name: 'Pro',
    price: 9.90,
    billingPeriod: 'month',
    description: 'Powerful production - Scale your marketing automation',
    features: [
      { name: 'Up to 50 ANOTs per month', included: true, limit: '50 ANOTs' },
      { name: 'Qubik: Gemini 1.5 Pro (Advanced creative + multimodal)', included: true },
      { name: 'Themis: Claude 3.5 Haiku (Fast analytical reasoning)', included: true },
      { name: 'Core: DeepSeek R1 (Visible reasoning chains)', included: true },
      { name: 'MAGIC Import: Gemini 2.0 Flash Experimental + Gemini 1.5 Pro', included: true, limit: '10 imports/month' },
      { name: '+26% better content quality vs Free', included: true },
      { name: '+9% better risk detection vs Free', included: true },
      { name: '40% faster response time vs Free', included: true },
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
    cta: { text: 'Go Pro', href: 'https://app.anots.com/signup?plan=pro', variant: 'magic' },
    recommended: true,
  },
  {
    id: 'pro',
    name: 'Agency',
    price: 49.90,
    billingPeriod: 'month',
    description: 'Unlimited freedom - Flagship models from every provider',
    features: [
      { name: 'Unlimited ANOTs', included: true },
      { name: 'Qubik: GPT-4o (OpenAI flagship - Best creative)', included: true },
      { name: 'Themis: Claude 3.5 Sonnet Extended Thinking (Anthropic flagship)', included: true },
      { name: 'Core: Claude 3.5 Sonnet Extended Thinking (Best reasoning)', included: true },
      { name: 'Gemini 1.5 Pro (Google flagship - Multimodal)', included: true },
      { name: 'MAGIC Import: Gemini 2.0 Flash Experimental + Gemini 1.5 Pro (Unlimited)', included: true },
      { name: '+8% better content quality vs Pro', included: true },
      { name: '+6% better risk detection vs Pro', included: true },
      { name: '21% faster response time vs Pro', included: true },
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
    cta: { text: 'Contact Sales', href: '/contact?plan=agency', variant: 'primary' },
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
