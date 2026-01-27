/**
 * Fast-check Arbitraries for Pricing Property Tests
 * Custom generators for pricing-related data structures
 */

import * as fc from 'fast-check';
import { ModelAccess, PricingTier } from '@/types/pricing';

/**
 * Arbitrary for generating valid claimed/total spot combinations
 */
export const scarcityArbitrary = () =>
  fc.record({
    claimed: fc.integer({ min: 0, max: 1000 }),
    total: fc.integer({ min: 1, max: 1000 }),
  });

/**
 * Arbitrary for generating price strings
 */
export const priceArbitrary = () =>
  fc.oneof(
    fc.integer({ min: 1, max: 999 }).map(n => `$${n}`),
    fc.constant('Custom')
  );

/**
 * Arbitrary for generating model access configurations
 */
export const modelAccessArbitrary = (): fc.Arbitrary<ModelAccess> =>
  fc.record({
    agent: fc.constantFrom('Apollo', 'Themis', 'Athena', 'Hephaestus', 'Custom'),
    model: fc.string({ minLength: 3, maxLength: 50 }),
    description: fc.option(fc.string({ minLength: 5, maxLength: 100 })),
    locked: fc.option(fc.boolean()),
  });

/**
 * Arbitrary for generating tier IDs
 */
export const tierIdArbitrary = () =>
  fc.constantFrom('explorer', 'pro', 'enterprise');

/**
 * Arbitrary for generating feature lists
 */
export const featuresArbitrary = () =>
  fc.array(fc.string({ minLength: 5, maxLength: 50 }), { minLength: 1, maxLength: 10 });

/**
 * Arbitrary for generating CTA button text
 */
export const ctaTextArbitrary = () =>
  fc.constantFrom(
    'Get Started',
    'Claim Founder\'s Deal',
    'Contact Sales',
    'Start Free Trial',
    'Sign Up Now'
  );

/**
 * Arbitrary for generating badge text
 */
export const badgeArbitrary = () =>
  fc.array(
    fc.constantFrom('FOUNDER\'S DEAL', 'MOST POPULAR', 'BEST VALUE', 'LIMITED TIME'),
    { maxLength: 3 }
  );

/**
 * Arbitrary for generating complete pricing tier configurations
 */
export const pricingTierArbitrary = (): fc.Arbitrary<PricingTier> =>
  fc.record({
    id: tierIdArbitrary(),
    name: fc.constantFrom('Explorer', 'Pro', 'Enterprise'),
    price: priceArbitrary(),
    anchoringPrice: fc.option(priceArbitrary()),
    interval: fc.constantFrom('month', 'year', ''),
    persona: fc.string({ minLength: 10, maxLength: 50 }),
    badges: badgeArbitrary(),
    modelAccess: fc.array(modelAccessArbitrary(), { minLength: 1, maxLength: 5 }),
    features: featuresArbitrary(),
    ctaText: ctaTextArbitrary(),
    ctaAction: fc.constant(() => {}),
  });

/**
 * Arbitrary for generating font sizes (in pixels)
 */
export const fontSizeArbitrary = () =>
  fc.integer({ min: 8, max: 72 });

/**
 * Arbitrary for generating touch target dimensions
 */
export const touchTargetArbitrary = () =>
  fc.record({
    width: fc.integer({ min: 20, max: 200 }),
    height: fc.integer({ min: 20, max: 200 }),
  });

/**
 * Arbitrary for generating color values (hex format)
 */
export const colorArbitrary = () =>
  fc.string({ minLength: 6, maxLength: 6 })
    .filter(s => /^[0-9A-Fa-f]{6}$/.test(s))
    .map(hex => `#${hex}`);

/**
 * Arbitrary for generating RGB color values
 */
export const rgbColorArbitrary = () =>
  fc.record({
    r: fc.integer({ min: 0, max: 255 }),
    g: fc.integer({ min: 0, max: 255 }),
    b: fc.integer({ min: 0, max: 255 }),
  });
