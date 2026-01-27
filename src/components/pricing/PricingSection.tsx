'use client';

/**
 * PricingSection Root Component
 * Client component that composes the complete Founder's Deal pricing section
 * 
 * Requirements: 1.1, 3.1, 4.1, 4.5, 7.1, 7.2, 8.6
 */

import { PRICING_CONFIG } from '@/config/pricing-config';
import { ScarcityBar } from './ScarcityBar';
import { LifetimePromise } from './LifetimePromise';
import { PricingTierCard } from './PricingTierCard';

/**
 * PricingSection Component
 * 
 * Root component for the Founder's Deal pricing section.
 * Composes ScarcityBar, LifetimePromise, and three PricingTierCard components.
 * 
 * Layout:
 * - ScarcityBar at top
 * - Section heading and description
 * - LifetimePromise
 * - Three-column grid of pricing tiers (responsive: vertical on mobile, horizontal on desktop)
 * - Pro tier is visually highlighted
 * 
 * Accessibility:
 * - Semantic section with heading
 * - role="list" for tier cards container
 * - Each tier card has role="listitem"
 * 
 * @returns Client-rendered pricing section
 */
export function PricingSection() {
  const { scarcity, tiers } = PRICING_CONFIG;

  return (
    <section 
      id="pricing" 
      className="py-16 sm:py-24 lg:py-32"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Scarcity Bar */}
        <div className="mb-8 sm:mb-12">
          <ScarcityBar 
            claimed={scarcity.claimed} 
            total={scarcity.total} 
          />
        </div>

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12">
          <h2 
            id="pricing-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAFAFA] leading-tight"
          >
            Founder's Deal Pricing
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-[#D4D4D8]">
            Lock in lifetime pricing. First 100 customers get grandfathered rates forever.
          </p>
        </div>

        {/* Lifetime Promise */}
        <div className="mx-auto max-w-2xl mb-12 sm:mb-16">
          <LifetimePromise />
        </div>

        {/* Pricing Tier Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 items-start"
          role="list"
          aria-label="Pricing tiers"
        >
          {tiers.map((tier) => (
            <PricingTierCard
              key={tier.id}
              tier={tier}
              highlighted={tier.id === 'pro'}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-sm text-[#A1A1AA]">
            All plans include 7-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
