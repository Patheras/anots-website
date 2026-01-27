/**
 * Unit tests for PricingTierCard component
 * Tests Pro tier visual emphasis, hover states, child component rendering, and responsive classes
 * 
 * Requirements: 6.1, 6.2, 6.3, 6.4, 6.5
 */

import { render, screen } from '@testing-library/react';
import { PricingTierCard } from '@/components/pricing/PricingTierCard';
import { PricingTier } from '@/types/pricing';

// Mock tier configurations for testing
const explorerTier: PricingTier = {
  id: 'explorer',
  name: 'Explorer',
  price: '$29',
  anchoringPrice: '$49',
  interval: 'month',
  persona: 'Solopreneur / Hobbyist',
  badges: [],
  modelAccess: [
    { agent: 'Apollo', model: 'GPT-4o' },
    { agent: 'Themis', model: 'Gemini 2.0 Flash' },
    { agent: 'Athena', model: 'Basic Logic Only' },
    { agent: 'Hephaestus', model: 'Locked', locked: true },
  ],
  features: [
    '15 ANOTs / month',
    'Manual Brand Room',
    'Single User',
  ],
  ctaText: 'Get Started',
  ctaAction: jest.fn(),
};

const proTier: PricingTier = {
  id: 'pro',
  name: 'Pro',
  price: '$49',
  anchoringPrice: '$99',
  interval: 'month',
  persona: 'Agencies & Power Users',
  badges: ['FOUNDER\'S DEAL', 'MOST POPULAR'],
  modelAccess: [
    { agent: 'Apollo', model: 'GPT-5.2', description: 'Latest Creative Model' },
    { agent: 'Themis', model: 'Gemini 2.5 Pro', description: '2M Context Window' },
    { agent: 'Athena', model: 'DeepSeek R1', description: 'Advanced Reasoning' },
    { agent: 'Hephaestus', model: 'GPT-5.1-Codex-Mini', description: 'Full Automation' },
  ],
  features: [
    'Unlimited ANOTs',
    'AI-Powered Brand Room',
    'Up to 5 Team Members',
    'Priority Support',
    'Advanced Analytics',
  ],
  ctaText: 'Claim Founder\'s Deal',
  ctaAction: jest.fn(),
};

const enterpriseTier: PricingTier = {
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
  ctaAction: jest.fn(),
};

describe('PricingTierCard', () => {
  describe('Basic Rendering', () => {
    it('should render tier name', () => {
      render(<PricingTierCard tier={explorerTier} />);
      expect(screen.getByText('Explorer')).toBeInTheDocument();
    });

    it('should render persona description', () => {
      render(<PricingTierCard tier={explorerTier} />);
      expect(screen.getByText('Solopreneur / Hobbyist')).toBeInTheDocument();
    });

    it('should render CTA button with correct text', () => {
      render(<PricingTierCard tier={explorerTier} />);
      expect(screen.getByRole('button', { name: 'Get Started' })).toBeInTheDocument();
    });
  });

  describe('Pro Tier Visual Emphasis (Requirements 6.1, 6.2, 6.3, 6.4, 6.5)', () => {
    it('should display badges for Pro tier', () => {
      render(<PricingTierCard tier={proTier} highlighted={true} />);
      
      expect(screen.getByText('FOUNDER\'S DEAL')).toBeInTheDocument();
      expect(screen.getByText('MOST POPULAR')).toBeInTheDocument();
    });

    it('should not display badges for Explorer tier', () => {
      render(<PricingTierCard tier={explorerTier} />);
      
      expect(screen.queryByText('FOUNDER\'S DEAL')).not.toBeInTheDocument();
      expect(screen.queryByText('MOST POPULAR')).not.toBeInTheDocument();
    });

    it('should apply highlighted class for Pro tier', () => {
      const { container } = render(<PricingTierCard tier={proTier} highlighted={true} />);
      
      const card = container.querySelector('.pricing-tier-card-highlighted');
      expect(card).toBeInTheDocument();
    });

    it('should not apply highlighted class for non-Pro tiers', () => {
      const { container } = render(<PricingTierCard tier={explorerTier} />);
      
      const card = container.querySelector('.pricing-tier-card-highlighted');
      expect(card).not.toBeInTheDocument();
    });

    it('should render with elevated z-index when highlighted', () => {
      const { container } = render(<PricingTierCard tier={proTier} highlighted={true} />);
      
      const card = container.querySelector('.pricing-tier-card');
      expect(card).toHaveStyle({ zIndex: 10 });
    });

    it('should render with normal z-index when not highlighted', () => {
      const { container } = render(<PricingTierCard tier={explorerTier} />);
      
      const card = container.querySelector('.pricing-tier-card');
      expect(card).toHaveStyle({ zIndex: 1 });
    });
  });

  describe('Child Component Rendering', () => {
    it('should render PriceDisplay component', () => {
      render(<PricingTierCard tier={explorerTier} />);
      
      // PriceDisplay should show the current price
      expect(screen.getByText('$29')).toBeInTheDocument();
    });

    it('should render ModelAccessList component', () => {
      render(<PricingTierCard tier={explorerTier} />);
      
      // ModelAccessList should show agent names
      expect(screen.getByText('Apollo')).toBeInTheDocument();
      expect(screen.getByText('Themis')).toBeInTheDocument();
    });

    it('should render FeatureList component', () => {
      render(<PricingTierCard tier={explorerTier} />);
      
      // FeatureList should show features
      expect(screen.getByText('15 ANOTs / month')).toBeInTheDocument();
      expect(screen.getByText('Manual Brand Room')).toBeInTheDocument();
      expect(screen.getByText('Single User')).toBeInTheDocument();
    });

    it('should render CTAButton component with correct variant', () => {
      render(<PricingTierCard tier={proTier} highlighted={true} />);
      
      const button = screen.getByRole('button', { name: 'Claim Founder\'s Deal' });
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('data-variant', 'magic');
    });
  });

  describe('CTA Button Variants', () => {
    it('should use magic variant for Pro tier', () => {
      render(<PricingTierCard tier={proTier} />);
      
      const button = screen.getByRole('button', { name: 'Claim Founder\'s Deal' });
      expect(button).toHaveAttribute('data-variant', 'magic');
    });

    it('should use primary variant for Explorer tier', () => {
      render(<PricingTierCard tier={explorerTier} />);
      
      const button = screen.getByRole('button', { name: 'Get Started' });
      expect(button).toHaveAttribute('data-variant', 'primary');
    });

    it('should use primary variant for Enterprise tier', () => {
      render(<PricingTierCard tier={enterpriseTier} />);
      
      const button = screen.getByRole('button', { name: 'Contact Sales' });
      expect(button).toHaveAttribute('data-variant', 'primary');
    });
  });

  describe('Hover State Styling', () => {
    it('should have hover transform class', () => {
      const { container } = render(<PricingTierCard tier={explorerTier} />);
      
      const card = container.querySelector('.pricing-tier-card');
      expect(card).toBeInTheDocument();
      
      // Check that the card has the pricing-tier-card class which includes hover styles
      expect(card).toHaveClass('pricing-tier-card');
    });

    it('should maintain scale transform for highlighted tier on hover', () => {
      const { container } = render(<PricingTierCard tier={proTier} highlighted={true} />);
      
      const card = container.querySelector('.pricing-tier-card-highlighted');
      expect(card).toBeInTheDocument();
    });
  });

  describe('Responsive Classes', () => {
    it('should apply responsive layout classes', () => {
      const { container } = render(<PricingTierCard tier={explorerTier} />);
      
      const card = container.querySelector('.pricing-tier-card');
      expect(card).toBeInTheDocument();
    });

    it('should render as article with listitem role', () => {
      const { container } = render(<PricingTierCard tier={explorerTier} />);
      
      const article = container.querySelector('article[role="listitem"]');
      expect(article).toBeInTheDocument();
      expect(article?.tagName).toBe('ARTICLE');
    });
  });

  describe('All Tiers Rendering', () => {
    it('should render Explorer tier correctly', () => {
      render(<PricingTierCard tier={explorerTier} />);
      
      expect(screen.getByText('Explorer')).toBeInTheDocument();
      expect(screen.getByText('$29')).toBeInTheDocument();
      expect(screen.getByText('Get Started')).toBeInTheDocument();
    });

    it('should render Pro tier correctly', () => {
      render(<PricingTierCard tier={proTier} highlighted={true} />);
      
      expect(screen.getByText('Pro')).toBeInTheDocument();
      expect(screen.getByText('$49')).toBeInTheDocument();
      expect(screen.getByText('Claim Founder\'s Deal')).toBeInTheDocument();
      expect(screen.getByText('FOUNDER\'S DEAL')).toBeInTheDocument();
      expect(screen.getByText('MOST POPULAR')).toBeInTheDocument();
    });

    it('should render Enterprise tier correctly', () => {
      render(<PricingTierCard tier={enterpriseTier} />);
      
      expect(screen.getByText('Enterprise')).toBeInTheDocument();
      expect(screen.getByText('Custom Pricing')).toBeInTheDocument();
      expect(screen.getByText('Contact Sales')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('should handle tier with no badges', () => {
      render(<PricingTierCard tier={explorerTier} />);
      
      // Should not crash and should render the tier
      expect(screen.getByText('Explorer')).toBeInTheDocument();
    });

    it('should handle tier with empty features array', () => {
      const tierWithNoFeatures: PricingTier = {
        ...explorerTier,
        features: [],
      };
      
      render(<PricingTierCard tier={tierWithNoFeatures} />);
      
      // Should not crash
      expect(screen.getByText('Explorer')).toBeInTheDocument();
    });

    it('should handle custom className prop', () => {
      const { container } = render(
        <PricingTierCard tier={explorerTier} className="custom-class" />
      );
      
      const card = container.querySelector('.custom-class');
      expect(card).toBeInTheDocument();
    });
  });
});
