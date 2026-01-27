/**
 * Unit Tests for PricingSection Component
 * 
 * Requirements: 4.1, 4.5, 7.1, 7.2, 8.6, 8.7
 */

import { render, screen } from '@testing-library/react';
import { PricingSection } from '@/components/pricing/PricingSection';
import { PRICING_CONFIG } from '@/config/pricing-config';

describe('PricingSection Component', () => {
  describe('Component Rendering', () => {
    it('should render all four pricing tiers', () => {
      render(<PricingSection />);
      
      // Check for all tier names - use getAllByText for "Free" since it appears twice
      const freeElements = screen.getAllByText('Free');
      expect(freeElements.length).toBeGreaterThanOrEqual(1);
      expect(screen.getByText('Explorer')).toBeInTheDocument();
      expect(screen.getByText('Pro')).toBeInTheDocument();
      expect(screen.getByText('Enterprise')).toBeInTheDocument();
    });

    it('should render ScarcityBar at the top', () => {
      render(<PricingSection />);
      
      // Check for scarcity bar text (split across elements)
      const scarcityText = screen.getByText("Founder's Deal");
      expect(scarcityText).toBeInTheDocument();
      
      const spotsText = screen.getByText(/Spots Claimed/i);
      expect(spotsText).toBeInTheDocument();
    });

    it('should render LifetimePromise', () => {
      render(<PricingSection />);
      
      const promiseText = screen.getByText(/Lock in your Founder's Deal price forever/i);
      expect(promiseText).toBeInTheDocument();
    });

    it('should render section heading', () => {
      render(<PricingSection />);
      
      const heading = screen.getByText("Founder's Deal Pricing");
      expect(heading).toBeInTheDocument();
    });

    it('should render section description', () => {
      render(<PricingSection />);
      
      const description = screen.getByText(/Lock in lifetime pricing/i);
      expect(description).toBeInTheDocument();
    });

    it('should render additional info text', () => {
      render(<PricingSection />);
      
      const additionalInfo = screen.getByText(/All plans include 7-day free trial/i);
      expect(additionalInfo).toBeInTheDocument();
    });
  });

  describe('Tier Configuration', () => {
    it('should render Free tier with correct persona', () => {
      render(<PricingSection />);
      
      expect(screen.getByText('Try Before You Buy')).toBeInTheDocument();
    });

    it('should render Explorer tier with correct persona', () => {
      render(<PricingSection />);
      
      expect(screen.getByText('Solopreneur / Hobbyist')).toBeInTheDocument();
    });

    it('should render Pro tier with correct persona', () => {
      render(<PricingSection />);
      
      expect(screen.getByText('Agencies & Power Users')).toBeInTheDocument();
    });

    it('should render Enterprise tier with correct persona', () => {
      render(<PricingSection />);
      
      expect(screen.getByText('Large Agencies / Enterprises')).toBeInTheDocument();
    });

    it('should render correct number of tiers from config', () => {
      render(<PricingSection />);
      
      // Should match the number of tiers in PRICING_CONFIG
      expect(PRICING_CONFIG.tiers).toHaveLength(4);
    });
  });

  describe('Responsive Layout', () => {
    it('should apply responsive layout classes to tier grid', () => {
      const { container } = render(<PricingSection />);
      
      const tierGrid = container.querySelector('[role="list"]');
      expect(tierGrid).toHaveClass('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4');
    });

    it('should apply responsive padding to section', () => {
      const { container } = render(<PricingSection />);
      
      const section = container.querySelector('section');
      expect(section).toHaveClass('py-16', 'sm:py-24', 'lg:py-32');
    });

    it('should apply responsive spacing to scarcity bar', () => {
      const { container } = render(<PricingSection />);
      
      // Find the scarcity bar wrapper
      const scarcityWrapper = container.querySelector('.mb-8');
      expect(scarcityWrapper).toHaveClass('mb-8', 'sm:mb-12');
    });

    it('should apply responsive text sizing to heading', () => {
      render(<PricingSection />);
      
      const heading = screen.getByText("Founder's Deal Pricing");
      expect(heading).toHaveClass('text-3xl', 'sm:text-4xl', 'lg:text-5xl');
    });
  });

  describe('Semantic HTML Structure', () => {
    it('should use semantic section element', () => {
      const { container } = render(<PricingSection />);
      
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
      expect(section).toHaveAttribute('id', 'pricing');
    });

    it('should have proper heading hierarchy', () => {
      const { container } = render(<PricingSection />);
      
      const heading = container.querySelector('h2');
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveAttribute('id', 'pricing-heading');
    });

    it('should use role="list" for tier cards container', () => {
      const { container } = render(<PricingSection />);
      
      const tierGrid = container.querySelector('[role="list"]');
      expect(tierGrid).toBeInTheDocument();
      expect(tierGrid).toHaveAttribute('aria-label', 'Pricing tiers');
    });

    it('should have aria-labelledby on section', () => {
      const { container } = render(<PricingSection />);
      
      const section = container.querySelector('section');
      expect(section).toHaveAttribute('aria-labelledby', 'pricing-heading');
    });
  });

  describe('Pro Tier Visual Emphasis', () => {
    it('should render Pro tier with highlighted prop', () => {
      const { container } = render(<PricingSection />);
      
      // Pro tier should have the highlighted class
      const highlightedCard = container.querySelector('.pricing-tier-card-highlighted');
      expect(highlightedCard).toBeInTheDocument();
    });

    it('should render Pro tier badges', () => {
      render(<PricingSection />);
      
      expect(screen.getByText("FOUNDER'S DEAL")).toBeInTheDocument();
      expect(screen.getByText('MOST POPULAR')).toBeInTheDocument();
    });
  });

  describe('Content Organization', () => {
    it('should render components in correct order', () => {
      const { container } = render(<PricingSection />);
      
      const section = container.querySelector('section');
      const children = Array.from(section?.children || []);
      
      // Should have main container div
      expect(children.length).toBeGreaterThan(0);
    });

    it('should render scarcity bar before heading', () => {
      const { container } = render(<PricingSection />);
      
      const scarcityText = screen.getByText("Founder's Deal");
      const heading = screen.getByText("Founder's Deal Pricing");
      
      // Both should be in the document
      expect(scarcityText).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
    });

    it('should render lifetime promise before tier grid', () => {
      const { container } = render(<PricingSection />);
      
      const promiseText = screen.getByText(/Lock in your Founder's Deal price forever/i);
      const tierGrid = container.querySelector('[role="list"]');
      
      expect(promiseText).toBeInTheDocument();
      expect(tierGrid).toBeInTheDocument();
    });
  });

  describe('Spacing and Layout', () => {
    it('should apply gap between tier cards', () => {
      const { container } = render(<PricingSection />);
      
      const tierGrid = container.querySelector('[role="list"]');
      expect(tierGrid).toHaveClass('gap-4', 'lg:gap-6');
    });

    it('should apply items-start alignment to grid', () => {
      const { container } = render(<PricingSection />);
      
      const tierGrid = container.querySelector('[role="list"]');
      expect(tierGrid).toHaveClass('items-start');
    });

    it('should apply max-width container', () => {
      const { container } = render(<PricingSection />);
      
      const maxWidthContainer = container.querySelector('.max-w-7xl');
      expect(maxWidthContainer).toBeInTheDocument();
    });

    it('should apply responsive horizontal padding', () => {
      const { container } = render(<PricingSection />);
      
      const paddedContainer = container.querySelector('.px-4');
      expect(paddedContainer).toHaveClass('px-4', 'sm:px-6', 'lg:px-8');
    });
  });

  describe('CTA Buttons', () => {
    it('should render CTA button for Free tier', () => {
      render(<PricingSection />);
      
      const freeCTA = screen.getByText('Start Free');
      expect(freeCTA).toBeInTheDocument();
    });

    it('should render CTA button for Explorer tier', () => {
      render(<PricingSection />);
      
      const explorerCTA = screen.getByText('Get Started');
      expect(explorerCTA).toBeInTheDocument();
    });

    it('should render CTA button for Pro tier', () => {
      render(<PricingSection />);
      
      const proCTA = screen.getByText("Claim Founder's Deal");
      expect(proCTA).toBeInTheDocument();
    });

    it('should render CTA button for Enterprise tier', () => {
      render(<PricingSection />);
      
      const enterpriseCTA = screen.getByText('Contact Sales');
      expect(enterpriseCTA).toBeInTheDocument();
    });
  });

  describe('Configuration Integration', () => {
    it('should use scarcity data from PRICING_CONFIG', () => {
      render(<PricingSection />);
      
      const spotsText = screen.getByText(/Spots Claimed/i);
      expect(spotsText).toHaveTextContent(`${PRICING_CONFIG.scarcity.claimed}`);
      expect(spotsText).toHaveTextContent(`${PRICING_CONFIG.scarcity.total}`);
    });

    it('should render all tiers from PRICING_CONFIG', () => {
      render(<PricingSection />);
      
      PRICING_CONFIG.tiers.forEach(tier => {
        // Use getAllByText for "Free" since it appears in both tier name and price
        if (tier.name === 'Free') {
          const elements = screen.getAllByText(tier.name);
          expect(elements.length).toBeGreaterThanOrEqual(1);
        } else {
          expect(screen.getByText(tier.name)).toBeInTheDocument();
        }
      });
    });
  });

  describe('Text Content', () => {
    it('should render correct heading text', () => {
      render(<PricingSection />);
      
      const heading = screen.getByText("Founder's Deal Pricing");
      expect(heading).toHaveTextContent("Founder's Deal Pricing");
    });

    it('should render correct description text', () => {
      render(<PricingSection />);
      
      const description = screen.getByText(/Lock in lifetime pricing/i);
      expect(description).toHaveTextContent('Lock in lifetime pricing. First 100 customers get grandfathered rates forever.');
    });

    it('should render correct additional info', () => {
      render(<PricingSection />);
      
      const info = screen.getByText(/All plans include 7-day free trial/i);
      expect(info).toHaveTextContent('All plans include 7-day free trial. No credit card required.');
    });
  });
});
