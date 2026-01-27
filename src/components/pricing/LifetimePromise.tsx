/**
 * LifetimePromise Component
 * Server component displaying the grandfathering promise for Founder's Deal
 * 
 * Requirements: 3.1
 */

import { colors } from '@/lib/design-tokens';

/**
 * LifetimePromise Component
 * 
 * Displays the lifetime pricing guarantee message for Founder's Deal customers.
 * Ensures visibility across all viewports with subtle emphasis styling.
 * 
 * Visual Design:
 * - Subtle background with border
 * - Centered text with icon
 * - Responsive padding and text sizing
 * 
 * @returns Server-rendered promise message
 */
export function LifetimePromise() {
  return (
    <div 
      className="flex items-center justify-center gap-3 px-4 py-3 rounded-lg border"
      style={{
        backgroundColor: `${colors.accent.primary}10`,
        borderColor: `${colors.accent.primary}30`,
      }}
    >
      <svg 
        className="h-5 w-5 flex-shrink-0" 
        style={{ color: colors.accent.primary }}
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth="2" 
        stroke="currentColor"
        aria-hidden="true"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" 
        />
      </svg>
      <p 
        className="text-sm sm:text-base font-medium text-center"
        style={{ color: colors.text.primary }}
      >
        Lock in your Founder's Deal price forever. Your rate never increases.
      </p>
    </div>
  );
}
