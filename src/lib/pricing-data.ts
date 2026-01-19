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
    description: 'Just to explore - Try ANOTS with AI-powered automation',
    features: [
      { name: 'Up to 3 active ANOTs', included: true, limit: '3 ANOTs' },
      { name: 'TCAM V2 (Qubik + Themis + Core)', included: true },
      { name: 'Free AI models (OpenRouter)', included: true },
      { name: 'Approval gate for all actions', included: true },
      { name: 'Activity Hub (24h/7d views)', included: true },
      { name: 'Community support', included: true },
      { name: 'Premium AI models', included: false },
      { name: 'Unlimited ANOTs', included: false },
    ],
    cta: { text: 'Start Exploring', href: 'https://app.anots.com/signup', variant: 'secondary' },
    recommended: false,
  },
  {
    id: 'standard',
    name: 'Pro',
    price: 9.90,
    billingPeriod: 'month',
    description: 'Powerful production - Unlimited ANOTs with premium AI',
    features: [
      { name: 'Unlimited ANOTs', included: true },
      { name: 'Premium AI models (Claude, GPT-4)', included: true },
      { name: 'Credit-based billing', included: true },
      { name: 'Cost estimates before operations', included: true },
      { name: 'Brand standards enforcement', included: true },
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
    description: 'Unlimited freedom - Use your own AI keys for maximum control',
    features: [
      { name: 'Unlimited ANOTs', included: true },
      { name: 'BYOK - Use your own OpenAI/Anthropic keys', included: true },
      { name: 'Highest quality model selection', included: true },
      { name: 'Direct billing to your provider', included: true },
      { name: 'Multi-brand support', included: true },
      { name: 'Priority support', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Dedicated account manager', included: true },
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
