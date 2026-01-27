/**
 * Pricing Configuration for Founder's Deal
 * Static configuration defining all pricing tiers, features, and model access
 */

import { PricingConfiguration } from '@/types/pricing';

/**
 * Main pricing configuration
 * This configuration defines the scarcity bar, all pricing tiers, and the lifetime promise
 */
export const PRICING_CONFIG: PricingConfiguration = {
  scarcity: {
    claimed: 74,
    total: 100,
  },
  tiers: [
    {
      id: 'free',
      name: 'Free',
      price: 'Free',
      interval: '',
      persona: 'Try Before You Buy',
      badges: [],
      modelAccess: [
        { agent: 'Apollo', model: 'GPT-4o', description: 'Creative Director' },
        { agent: 'Themis', model: 'Gemini 2.0 Flash', description: 'Marketing Director' },
        { agent: 'Athena', model: 'DeepSeek R1', description: 'Strategic Synthesizer' },
        { agent: 'Hephaestus', model: 'GPT-5.1-Codex-Mini', description: 'Workflow Builder' },
      ],
      features: [
        '3 Active ANOTs',
        '20 Executions / month',
        'Manual Brand Room',
        'Single User',
        'Community Support',
      ],
      ctaText: 'Join Waitlist',
      ctaAction: () => {
        window.location.href = '/closed-beta';
      },
    },
    {
      id: 'explorer',
      name: 'Explorer',
      price: '$29',
      anchoringPrice: '$49',
      interval: 'month',
      persona: 'Solopreneur / Hobbyist',
      badges: [],
      modelAccess: [
        { agent: 'Apollo', model: 'GPT-5', description: 'Creative Director' },
        { agent: 'Themis', model: 'Gemini 1.5 Pro', description: 'Marketing Director' },
        { agent: 'Athena', model: 'DeepSeek R1', description: 'Strategic Synthesizer' },
        { agent: 'Hephaestus', model: 'GPT-5.1-Codex-Mini', description: 'Workflow Builder' },
      ],
      features: [
        '12 Active ANOTs',
        'Unlimited Executions',
        'Manual Brand Room',
        'Single User',
        'Community Support',
        'Basic Analytics',
      ],
      ctaText: 'Join Waitlist',
      ctaAction: () => {
        window.location.href = '/closed-beta';
      },
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$49',
      anchoringPrice: '$99',
      interval: 'month',
      persona: 'Agencies & Power Users',
      badges: ['FOUNDER\'S DEAL', 'MOST POPULAR'],
      modelAccess: [
        { agent: 'Apollo', model: 'GPT-5.2', description: 'Creative Director' },
        { agent: 'Themis', model: 'Gemini 2.5 Pro', description: 'Marketing Director' },
        { agent: 'Athena', model: 'DeepSeek R1', description: 'Strategic Synthesizer' },
        { agent: 'Hephaestus', model: 'GPT-5.1-Codex-Mini', description: 'Workflow Builder' },
      ],
      features: [
        '42 Active ANOTs',
        'AI-Powered Brand Room',
        'Up to 5 Team Members',
        'Priority Support',
        'Advanced Analytics',
        'Custom Integrations',
      ],
      ctaText: 'Claim Founder\'s Deal',
      ctaAction: () => {
        window.location.href = '/closed-beta';
      },
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      interval: '',
      persona: 'Large Agencies / Enterprises',
      badges: [],
      modelAccess: [
        { agent: 'Custom', model: 'Custom + On-Premise Options' },
      ],
      features: [
        'Everything in Pro',
        'Dedicated Account Manager',
        'Custom Integrations',
        'SLA Guarantees',
        'Unlimited Team Members',
      ],
      ctaText: 'Contact Sales',
      ctaAction: () => {
        // TODO: Open contact form or navigate to contact page
        console.log('Enterprise tier selected');
      },
    },
  ],
  lifetimePromise: 'Lock in this price forever. Lifetime Grandfathering.',
};

/**
 * Helper function to get a specific tier by ID
 */
export function getTierById(tierId: string) {
  return PRICING_CONFIG.tiers.find(tier => tier.id === tierId);
}

/**
 * Helper function to get the highlighted tier (Pro)
 */
export function getHighlightedTier() {
  return PRICING_CONFIG.tiers.find(tier => tier.id === 'pro');
}
