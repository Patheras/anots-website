/**
 * Pricing Tier Data
 * Static pricing information for ANOTS marketing website
 */

export interface PricingTierData {
  id: 'free' | 'standard' | 'pro';
  name: string;
  price: number | null;  // null for free tier
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
    variant: 'primary' | 'secondary';
  };
  recommended: boolean;
}

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
      { name: 'Free AI models (Gemini Flash, DeepSeek, Llama)', included: true },
      { name: 'Approval gate for all actions', included: true },
      { name: 'Activity Hub (24h view)', included: true },
      { name: 'Brand Room (basic)', included: true },
      { name: 'Community support', included: true },
      { name: 'Premium AI models', included: false },
      { name: 'Cost estimates', included: false },
    ],
    cta: { text: 'Start Free', href: 'https://app.anots.com/signup', variant: 'secondary' },
    recommended: false,
  },
  {
    id: 'standard',
    name: 'Pro',
    price: 9.90,
    billingPeriod: 'month',
    description: 'Powerful production - Scale your marketing automation',
    features: [
      { name: 'Unlimited ANOTs', included: true },
      { name: 'Premium AI models (Claude 3.5, GPT-4, o1)', included: true },
      { name: 'Credit-based billing', included: true },
      { name: 'Cost estimates before operations', included: true },
      { name: 'Activity Hub (7-day view)', included: true },
      { name: 'Brand Room (full)', included: true },
      { name: 'Priority email support', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'BYOK (Bring Your Own Keys)', included: false },
    ],
    cta: { text: 'Go Pro', href: 'https://app.anots.com/signup?plan=pro', variant: 'primary' },
    recommended: true,
  },
  {
    id: 'pro',
    name: 'Agency',
    price: 49.90,
    billingPeriod: 'month',
    description: 'Unlimited freedom - Maximum control for agencies',
    features: [
      { name: 'Unlimited ANOTs', included: true },
      { name: 'BYOK - Use your own OpenAI/Anthropic keys', included: true },
      { name: 'Highest quality model selection', included: true },
      { name: 'Direct billing to your provider', included: true },
      { name: 'Activity Hub (custom range)', included: true },
      { name: 'Multi-brand support', included: true },
      { name: 'White label options', included: true },
      { name: 'Dedicated support', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Custom integrations', included: true },
    ],
    cta: { text: 'Contact Sales', href: '/contact?plan=agency', variant: 'primary' },
    recommended: false,
  },
];

/**
 * Format price for display
 */
export function formatPrice(price: number | null, period: 'month' | 'year' | null): string {
  if (price === null || price === 0) {
    return 'Free';
  }
  return `$${price.toFixed(2)}/${period}`;
}
