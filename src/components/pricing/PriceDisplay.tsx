/**
 * PriceDisplay Component
 * Server component that displays current price with crossed-out anchoring price
 * 
 * Requirements: 2.1, 2.2, 2.3, 2.5
 */

import { PriceDisplayProps } from '@/types/pricing';
import { colors, typography } from '@/lib/design-tokens';

/**
 * PriceDisplay Component
 * 
 * Displays the current price with optional anchoring price (strikethrough).
 * Handles custom pricing for Enterprise tier.
 * Uses design system typography tokens for consistent styling.
 */
export function PriceDisplay({
  currentPrice,
  anchoringPrice,
  interval,
  isCustom = false,
}: PriceDisplayProps) {
  // Handle custom pricing (Enterprise tier)
  if (isCustom) {
    return (
      <div className="flex flex-col items-start gap-1">
        <p 
          className="text-2xl sm:text-3xl font-semibold"
          style={{ 
            color: colors.text.primary,
            fontFamily: typography.fontFamily.sans,
          }}
        >
          Custom Pricing
        </p>
      </div>
    );
  }

  // Handle missing or empty current price
  if (!currentPrice || currentPrice.trim() === '') {
    return (
      <div className="flex flex-col items-start gap-1">
        <p 
          className="text-2xl sm:text-3xl font-semibold"
          style={{ 
            color: colors.text.primary,
            fontFamily: typography.fontFamily.sans,
          }}
        >
          Contact Sales
        </p>
      </div>
    );
  }

  // Don't display anchoring price if it equals current price
  const shouldShowAnchoringPrice = 
    anchoringPrice && 
    anchoringPrice.trim() !== '' && 
    anchoringPrice !== currentPrice;

  return (
    <div className="flex flex-col items-start gap-2">
      {/* Current Price with Interval */}
      <div className="flex items-baseline gap-1">
        <span 
          className="text-3xl sm:text-4xl font-bold"
          style={{ 
            color: colors.text.primary,
            fontFamily: typography.fontFamily.sans,
          }}
        >
          {currentPrice}
        </span>
        {interval && interval.trim() !== '' && (
          <span 
            className="text-lg sm:text-xl font-medium"
            style={{ 
              color: colors.text.secondary,
              fontFamily: typography.fontFamily.sans,
            }}
          >
            /{interval}
          </span>
        )}
      </div>

      {/* Anchoring Price with Strikethrough */}
      {shouldShowAnchoringPrice && (
        <div className="flex items-center gap-2">
          <span 
            className="text-base sm:text-lg font-medium line-through"
            style={{ 
              color: colors.text.muted,
              fontFamily: typography.fontFamily.sans,
              opacity: 0.6,
              textDecorationColor: colors.text.muted,
            }}
          >
            {anchoringPrice}
          </span>
          {interval && interval.trim() !== '' && (
            <span 
              className="text-sm font-medium"
              style={{ 
                color: colors.text.muted,
                fontFamily: typography.fontFamily.sans,
                opacity: 0.6,
              }}
            >
              /{interval}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
