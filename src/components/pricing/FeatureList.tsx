/**
 * FeatureList Component
 * Server component that displays a list of features for pricing tiers
 * 
 * Requirements: 4.2, 4.3, 4.4, 8.5
 */

import { Check } from 'lucide-react';
import { FeatureListProps } from '@/types/pricing';
import { colors, typography, spacing } from '@/lib/design-tokens';

/**
 * FeatureList Component
 * 
 * Displays a semantic list of features with checkmark icons.
 * Uses consistent spacing and includes alt text for accessibility.
 * 
 * @param features - Array of feature descriptions
 * @param className - Optional additional CSS classes
 */
export function FeatureList({ features, className = '' }: FeatureListProps) {
  // Handle empty features array
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <ul 
      className={`space-y-3 ${className}`}
      role="list" 
      aria-label="Features included in this tier"
      style={{ fontFamily: typography.fontFamily.sans }}
    >
      {features.map((feature, index) => (
        <li 
          key={`feature-${index}`}
          className="flex items-start gap-3"
        >
          {/* Checkmark icon with alt text */}
          <Check 
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: colors.semantic.success }}
            aria-label="Included feature"
            role="img"
          />
          
          {/* Feature text */}
          <span 
            className="text-sm leading-relaxed"
            style={{ 
              color: colors.text.secondary,
              lineHeight: typography.lineHeight.relaxed,
            }}
          >
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
}
