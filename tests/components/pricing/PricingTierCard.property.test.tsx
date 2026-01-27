/**
 * Property-Based Tests for PricingTierCard Component
 * Tests universal properties that should hold across all tier configurations
 * 
 * Feature: founders-deal-pricing
 * Property 9: Hover Transform Application
 * Property 7: CTA Button Presence
 */

import { render } from '@testing-library/react';
import { PricingTierCard } from '@/components/pricing/PricingTierCard';
import { PricingTier } from '@/types/pricing';
import fc from 'fast-check';

/**
 * Arbitrary generator for PricingTier configurations
 * Generates valid tier configurations with varying properties
 */
const tierArbitrary = fc.record({
  id: fc.constantFrom('explorer', 'pro', 'enterprise'),
  name: fc.string({ minLength: 1, maxLength: 20 }),
  price: fc.oneof(
    fc.string({ minLength: 1, maxLength: 10 }),
    fc.constant('Custom')
  ),
  anchoringPrice: fc.option(fc.string({ minLength: 1, maxLength: 10 }), { nil: undefined }),
  interval: fc.constantFrom('month', 'year', ''),
  persona: fc.string({ minLength: 1, maxLength: 50 }),
  badges: fc.array(fc.string({ minLength: 1, maxLength: 20 }), { maxLength: 3 }),
  modelAccess: fc.array(
    fc.record({
      agent: fc.constantFrom('Apollo', 'Themis', 'Athena', 'Hephaestus', 'Custom'),
      model: fc.string({ minLength: 1, maxLength: 30 }),
      description: fc.option(fc.string({ minLength: 1, maxLength: 50 }), { nil: undefined }),
      locked: fc.option(fc.boolean(), { nil: undefined }),
    }),
    { minLength: 1, maxLength: 5 }
  ),
  features: fc.array(fc.string({ minLength: 1, maxLength: 50 }), { minLength: 1, maxLength: 10 }),
  ctaText: fc.string({ minLength: 1, maxLength: 30 }),
  ctaAction: fc.constant(() => {}),
});

describe('PricingTierCard Property-Based Tests', () => {
  /**
   * Property 9: Hover Transform Application
   * 
   * For any pricing tier card, applying hover state should add a transform effect (translateY or scale).
   * 
   * **Validates: Requirements 11.3**
   */
  describe('Property 9: Hover Transform Application', () => {
    it('should mark card as having hover transform support for any tier configuration', () => {
      fc.assert(
        fc.property(
          tierArbitrary,
          fc.boolean(), // highlighted flag
          (tier, highlighted) => {
            const { container } = render(
              <PricingTierCard tier={tier} highlighted={highlighted} />
            );

            // Card should have data attribute indicating hover transform support
            const card = container.querySelector('.pricing-tier-card');
            expect(card).toBeTruthy();
            expect(card?.getAttribute('data-has-hover-transform')).toBe('true');
          }
        ),
        { numRuns: 10 }
      );
    });

    it('should have pricing-tier-card class for any tier', () => {
      fc.assert(
        fc.property(
          tierArbitrary,
          fc.boolean(),
          (tier, highlighted) => {
            const { container } = render(
              <PricingTierCard tier={tier} highlighted={highlighted} />
            );

            const card = container.querySelector('.pricing-tier-card');
            expect(card).toBeTruthy();
            expect(card?.classList.contains('pricing-tier-card')).toBe(true);
          }
        ),
        { numRuns: 10 }
      );
    });

    it('should apply highlighted class for highlighted tiers', () => {
      fc.assert(
        fc.property(
          tierArbitrary,
          (tier) => {
            // Test with highlighted=true
            const { container } = render(
              <PricingTierCard tier={tier} highlighted={true} />
            );

            const card = container.querySelector('.pricing-tier-card');
            expect(card).toBeTruthy();
            
            // Highlighted tier should have the highlighted class
            expect(card?.classList.contains('pricing-tier-card-highlighted')).toBe(true);
          }
        ),
        { numRuns: 10 }
      );
    });

    it('should have transition property for smooth animations on any tier', () => {
      fc.assert(
        fc.property(
          tierArbitrary,
          fc.boolean(),
          (tier, highlighted) => {
            const { container } = render(
              <PricingTierCard tier={tier} highlighted={highlighted} />
            );

            const card = container.querySelector('.pricing-tier-card') as HTMLElement;
            expect(card).toBeTruthy();

            // Card should have transition style for animations
            const transition = card?.style.transition;
            expect(transition).toBeTruthy();
            expect(transition).toContain('all');
          }
        ),
        { numRuns: 10 }
      );
    });

    it('should mark card as supporting reduced motion for any tier', () => {
      fc.assert(
        fc.property(
          tierArbitrary,
          fc.boolean(),
          (tier, highlighted) => {
            const { container } = render(
              <PricingTierCard tier={tier} highlighted={highlighted} />
            );

            const card = container.querySelector('.pricing-tier-card');
            expect(card).toBeTruthy();
            
            // Card should have data attribute indicating reduced motion support
            expect(card?.getAttribute('data-has-reduced-motion-support')).toBe('true');
          }
        ),
        { numRuns: 10 }
      );
    });
  });

  /**
   * Property 7: CTA Button Presence
   * 
   * For any pricing tier card, the card should contain exactly one primary CTA button.
   * 
   * **Validates: Requirements 9.1**
   */
  describe('Property 7: CTA Button Presence', () => {
    it('should contain exactly one CTA button for any tier configuration', () => {
      fc.assert(
        fc.property(
          tierArbitrary,
          fc.boolean(),
          (tier, highlighted) => {
            const { container } = render(
              <PricingTierCard tier={tier} highlighted={highlighted} />
            );

            // Find all buttons in the card
            const buttons = container.querySelectorAll('button');
            
            // Should have exactly one button
            expect(buttons.length).toBe(1);
          }
        ),
        { numRuns: 10 }
      );
    });

    it('should render CTA button with correct text for any tier', () => {
      fc.assert(
        fc.property(
          tierArbitrary,
          fc.boolean(),
          (tier, highlighted) => {
            const { container } = render(
              <PricingTierCard tier={tier} highlighted={highlighted} />
            );

            // Button should exist with the tier's CTA text
            const button = container.querySelector('button');
            expect(button).toBeTruthy();
            expect(button?.textContent).toBe(tier.ctaText);
          }
        ),
        { numRuns: 10 }
      );
    });

    it('should render CTA button with appropriate variant class for any tier', () => {
      fc.assert(
        fc.property(
          tierArbitrary,
          fc.boolean(),
          (tier, highlighted) => {
            const { container } = render(
              <PricingTierCard tier={tier} highlighted={highlighted} />
            );

            const button = container.querySelector('button');
            expect(button).toBeTruthy();

            // Button should have a data-variant attribute
            const variant = button?.getAttribute('data-variant');
            expect(variant).toBeTruthy();
            expect(['magic', 'primary']).toContain(variant);
          }
        ),
        { numRuns: 10 }
      );
    });

    it('should render CTA button with correct variant based on tier id', () => {
      fc.assert(
        fc.property(
          tierArbitrary,
          (tier) => {
            const { container } = render(
              <PricingTierCard tier={tier} />
            );

            const button = container.querySelector('button');
            expect(button).toBeTruthy();

            // Verify variant matches tier id
            const variant = button?.getAttribute('data-variant');
            if (tier.id === 'pro') {
              expect(variant).toBe('magic');
            } else {
              // Explorer and Enterprise both use 'primary' variant
              expect(variant).toBe('primary');
            }
          }
        ),
        { numRuns: 10 }
      );
    });

    it('should render CTA button with minimum touch target size for any tier', () => {
      fc.assert(
        fc.property(
          tierArbitrary,
          fc.boolean(),
          (tier, highlighted) => {
            const { container } = render(
              <PricingTierCard tier={tier} highlighted={highlighted} />
            );

            const button = container.querySelector('button') as HTMLButtonElement;
            expect(button).toBeTruthy();

            // Check that button has min-h-touch and min-w-touch classes (from button component)
            // These classes ensure 44x44px minimum touch target
            expect(button.classList.contains('min-h-touch')).toBe(true);
            expect(button.classList.contains('min-w-touch')).toBe(true);
          }
        ),
        { numRuns: 10 }
      );
    });

    it('should render CTA button with accessible name for any tier', () => {
      fc.assert(
        fc.property(
          tierArbitrary,
          fc.boolean(),
          (tier, highlighted) => {
            const { container } = render(
              <PricingTierCard tier={tier} highlighted={highlighted} />
            );

            // Button should exist and have aria-label
            const button = container.querySelector('button');
            expect(button).toBeTruthy();
            
            // Should have aria-label matching the CTA text
            expect(button?.getAttribute('aria-label')).toBe(tier.ctaText);
            
            // Button text content should match CTA text
            expect(button?.textContent).toBe(tier.ctaText);
          }
        ),
        { numRuns: 10 }
      );
    });
  });
});
