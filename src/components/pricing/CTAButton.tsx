'use client';

/**
 * CTAButton Component
 * Client component for call-to-action buttons with variants
 * 
 * Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 7.4, 8.1, 8.4
 */

import { CTAButtonProps } from '@/types/pricing';
import { Button } from '@/components/ui/button';

/**
 * CTAButton Component
 * 
 * Primary action button for pricing tier cards with three visual variants:
 * - primary: Magic gradient with shimmer effect (Pro tier - FOUNDER'S DEAL)
 * - secondary: Solid with glow effect (Explorer tier)
 * - outline: Minimal styling, professional (Enterprise tier)
 * 
 * Uses the site's beautiful button component with shimmer and glow effects.
 * Ensures 44x44px minimum touch target for mobile accessibility.
 * Includes ARIA labels and visible focus indicators.
 */
export function CTAButton({
  text,
  onClick,
  variant,
  className = '',
}: CTAButtonProps) {
  // Map pricing variants to button variants
  // Only Pro tier (primary) gets the magic gradient
  // All others get the solid style with glow
  const buttonVariant = variant === 'primary' ? 'magic' : 'primary';

  return (
    <Button
      onClick={onClick}
      variant={buttonVariant}
      size="lg"
      className={`w-full ${className}`}
      aria-label={text}
      type="button"
    >
      {text}
    </Button>
  );
}
