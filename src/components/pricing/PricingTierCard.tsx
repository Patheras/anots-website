'use client';

/**
 * PricingTierCard Component
 * Client component for individual pricing tier cards with hover effects and visual emphasis
 * 
 * Requirements: 4.1, 6.1, 6.4, 6.5, 11.3
 */

import { PricingTierCardProps } from '@/types/pricing';
import { TierBadge } from './TierBadge';
import { PriceDisplay } from './PriceDisplay';
import { ModelAccessList } from './ModelAccessList';
import { FeatureList } from './FeatureList';
import { CTAButton } from './CTAButton';
import { colors, spacing, shadows, animation } from '@/lib/design-tokens';

/**
 * PricingTierCard Component
 * 
 * Displays a complete pricing tier with all features, model access, and CTA.
 * Supports visual emphasis for the Pro tier with glowing border and elevated styling.
 * Implements hover transform effects for all tiers.
 * 
 * Visual States:
 * - Default: White background, subtle border, shadow on hover
 * - Highlighted (Pro): Glowing border, elevated z-index, scale 1.05, badges visible
 * - Hover: Lift effect (translateY -4px), enhanced shadow
 * 
 * @param tier - Complete tier configuration
 * @param highlighted - Whether this tier should be visually highlighted (Pro tier)
 * @param className - Optional additional CSS classes
 */
export function PricingTierCard({
  tier,
  highlighted = false,
  className = '',
}: PricingTierCardProps) {
  // Determine tier type for ModelAccessList
  const tierType = tier.id as 'explorer' | 'pro' | 'enterprise';
  
  // Determine CTA button variant based on tier
  const ctaVariant = tier.id === 'pro' ? 'primary' : tier.id === 'explorer' ? 'secondary' : 'outline';

  // Base card styles
  const baseCardStyles = {
    backgroundColor: colors.background.primary,
    borderRadius: '16px',
    padding: spacing.xl,
    transition: `all ${animation.duration.normal} ${animation.easing.default}`,
    position: 'relative' as const,
  };

  // Highlighted (Pro tier) specific styles
  const highlightedStyles = highlighted ? {
    transform: 'scale(1.03)',
    zIndex: 10,
  } : {
    zIndex: 1,
  };

  return (
    <>
      <article
        className={`pricing-tier-card ${highlighted ? 'pricing-tier-card-highlighted' : ''} ${className}`}
        style={{
          ...baseCardStyles,
          ...highlightedStyles,
        }}
        role="listitem"
        data-has-hover-transform="true"
        data-has-reduced-motion-support="true"
      >
        {/* Badges (FOUNDER'S DEAL, MOST POPULAR) - Fixed height container */}
        <div className="flex flex-wrap gap-2 mb-4 min-h-[32px]">
          {tier.badges && tier.badges.length > 0 && (
            <>
              {tier.badges.map((badge, index) => (
                <TierBadge key={`badge-${index}`} text={badge} />
              ))}
            </>
          )}
        </div>

        {/* Tier Name */}
        <h3 
          className="text-2xl font-bold mb-2"
          style={{ color: colors.text.primary }}
        >
          {tier.name}
        </h3>

        {/* Persona */}
        <p 
          className="text-sm mb-6"
          style={{ color: colors.text.secondary }}
        >
          {tier.persona}
        </p>

        {/* Price Display */}
        <div className="mb-6">
          <PriceDisplay
            currentPrice={tier.price}
            anchoringPrice={tier.anchoringPrice}
            interval={tier.interval}
            isCustom={tier.price === 'Custom'}
          />
        </div>

        {/* Model Access List */}
        <div className="mb-6 pb-6 border-b" style={{ borderColor: colors.border.default }}>
          <ModelAccessList
            tier={tierType}
            models={tier.modelAccess}
          />
        </div>

        {/* Feature List */}
        <div className="mb-6">
          <FeatureList features={tier.features} />
        </div>

        {/* CTA Button */}
        <CTAButton
          text={tier.ctaText}
          onClick={tier.ctaAction}
          variant={ctaVariant}
        />
      </article>

      {/* Styles for hover effects and glowing border */}
      <style jsx>{`
        .pricing-tier-card {
          border: 2px solid ${colors.border.default};
          box-shadow: ${shadows.card};
        }

        /* Glowing border effect for highlighted (Pro) tier */
        .pricing-tier-card-highlighted {
          border: 2px solid transparent;
          background: 
            linear-gradient(${colors.background.primary}, ${colors.background.primary}) padding-box,
            linear-gradient(135deg, ${colors.accent.primary}, #8B5CF6) border-box;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          animation: glow-pulse 3s ease-in-out infinite;
        }

        /* Hover transform effect for all tier cards */
        .pricing-tier-card:hover {
          transform: translateY(-4px) ${highlighted ? 'scale(1.03)' : 'scale(1)'};
          box-shadow: ${shadows.elevated};
        }

        /* Enhanced glow on hover for highlighted tier */
        .pricing-tier-card-highlighted:hover {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
        }

        /* Glowing border animation */
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
          }
        }

        /* Disable animations for users with motion sensitivity */
        @media (prefers-reduced-motion: reduce) {
          .pricing-tier-card {
            transition: none;
            animation: none;
          }
          
          .pricing-tier-card-highlighted {
            animation: none;
          }
          
          .pricing-tier-card:hover {
            transform: none;
          }
        }
      `}</style>
    </>
  );
}
