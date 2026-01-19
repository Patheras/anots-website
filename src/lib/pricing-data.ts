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
    name: 'Free',
    price: null,
    billingPeriod: null,
    description: 'Perfect for trying out ANOTS with AI automation',
    features: [
      { name: 'AI automation with OpenRouter free models', included: true },
      { name: 'System-managed model selection', included: true },
      { name: 'Basic campaign management', included: true },
      { name: 'Up to 100 contacts', included: true, limit: '100 contacts' },
      { name: 'Community support', included: true },
      { name: 'Advanced analytics', included: false },
    ],
    cta: { text: 'Get Started Free', href: 'https://app.anots.com/signup', variant: 'secondary' },
    recommended: false,
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 9.90,
    billingPeriod: 'month',
    description: 'For growing marketing teams',
    features: [
      { name: 'Full campaign management', included: true },
      { name: 'Up to 10,000 contacts', included: true, limit: '10,000 contacts' },
      { name: 'AI-powered automation', included: true },
      { name: 'Email support', included: true },
      { name: 'Basic analytics', included: true },
      { name: 'Advanced analytics', included: false },
    ],
    cta: { text: 'Start Standard', href: 'https://app.anots.com/signup?plan=standard', variant: 'primary' },
    recommended: true,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 49.90,
    billingPeriod: 'month',
    description: 'For professional agencies',
    features: [
      { name: 'Unlimited campaigns', included: true },
      { name: 'Unlimited contacts', included: true },
      { name: 'Advanced AI automation', included: true },
      { name: 'Priority support', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Custom integrations', included: true },
      { name: 'Dedicated account manager', included: true },
    ],
    cta: { text: 'Contact Sales', href: '/contact?plan=pro', variant: 'primary' },
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
