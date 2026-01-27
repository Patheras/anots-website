/**
 * TierBadge Component
 * Server component that displays badges for pricing tiers
 * 
 * Requirements: 6.2, 6.3
 */

import { TierBadgeProps } from '@/types/pricing';
import { colors, typography } from '@/lib/design-tokens';

/**
 * TierBadge Component
 * 
 * Displays a badge with text and styling for pricing tier cards.
 * Supports multiple badge types (FOUNDER'S DEAL, MOST POPULAR).
 * Uses design system color tokens for consistent styling.
 * 
 * @param text - The badge text to display
 * @param className - Optional additional CSS classes
 */
export function TierBadge({ text, className = '' }: TierBadgeProps) {
  // Determine badge styling based on text content
  const isMostPopular = text.toUpperCase().includes('MOST POPULAR');
  const isFoundersDeal = text.toUpperCase().includes('FOUNDER');

  // Badge background and border colors
  let bgGradient = 'from-[#3B82F6]/20 to-[#8B5CF6]/20';
  let borderColor = '#3B82F6';
  let textColor: string = colors.accent.primary;

  if (isMostPopular) {
    // Most Popular badge: Success green theme
    bgGradient = 'from-[#10B981]/20 to-[#059669]/20';
    borderColor = colors.semantic.success;
    textColor = colors.semantic.success;
  } else if (isFoundersDeal) {
    // Founder's Deal badge: Purple accent theme
    bgGradient = 'from-[#5E6AD2]/20 to-[#7C85E3]/20';
    borderColor = colors.accent.primary;
    textColor = colors.accent.primary;
  }

  return (
    <div 
      className={`inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r ${bgGradient} border ${className}`}
      style={{ 
        borderColor,
        fontFamily: typography.fontFamily.sans,
      }}
    >
      <span 
        className="text-xs font-semibold uppercase tracking-wider"
        style={{ color: textColor }}
      >
        {text}
      </span>
    </div>
  );
}
