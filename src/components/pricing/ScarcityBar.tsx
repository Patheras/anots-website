'use client';

/**
 * ScarcityBar Component
 * Displays limited availability progress bar with pulsing animation
 * 
 * Requirements: 1.1, 1.2, 1.3, 1.5, 11.1, 11.4
 */

import { ScarcityBarProps } from '@/types/pricing';
import { colors } from '@/lib/design-tokens';

/**
 * Calculates the fill percentage for the scarcity bar
 * Clamps the result between 0 and 100
 * 
 * @param claimed - Number of spots claimed
 * @param total - Total number of spots available
 * @returns Fill percentage (0-100)
 */
export function calculateFillPercentage(claimed: number, total: number): number {
  // Handle edge cases
  if (total <= 0) {
    console.warn('ScarcityBar: total must be greater than 0, defaulting to 100');
    return 0;
  }
  
  if (claimed < 0) {
    console.warn('ScarcityBar: claimed cannot be negative, defaulting to 0');
    return 0;
  }
  
  // Calculate percentage and clamp to 0-100 range
  const percentage = (claimed / total) * 100;
  return Math.min(Math.max(percentage, 0), 100);
}

/**
 * ScarcityBar Component
 * 
 * Displays a progress bar showing limited availability of the Founder's Deal
 * with a pulsing animation to draw attention. Supports reduced motion preferences.
 */
export function ScarcityBar({ claimed, total, className = '' }: ScarcityBarProps) {
  const fillPercentage = calculateFillPercentage(claimed, total);
  
  return (
    <div 
      className={`w-full bg-[#1A1A1B] rounded-lg p-4 sm:p-6 ${className}`}
      role="status"
      aria-live="polite"
      aria-label={`Founder's Deal: ${claimed} out of ${total} spots claimed`}
    >
      {/* Text Label */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm sm:text-base font-medium text-[#FAFAFA]">
          Founder&apos;s Deal
        </span>
        <span className="text-sm sm:text-base font-semibold text-[#5E6AD2]">
          {claimed} / {total} Spots Claimed
        </span>
      </div>
      
      {/* Progress Bar Container */}
      <div 
        className="relative w-full h-2 bg-[#0F0F10] rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={claimed}
        aria-valuemin={0}
        aria-valuemax={total}
      >
        {/* Progress Bar Fill with Pulsing Animation */}
        <div
          className="absolute top-0 left-0 h-full rounded-full scarcity-bar-fill transition-all duration-500 ease-out"
          style={{
            width: `${fillPercentage}%`,
            background: `linear-gradient(90deg, ${colors.accent.primary} 0%, ${colors.accent.hover} 100%)`,
          }}
        />
      </div>
      
      {/* CSS for pulsing animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        .scarcity-bar-fill {
          animation: pulse 2s ease-in-out infinite;
        }
        
        /* Disable animation for users who prefer reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .scarcity-bar-fill {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
