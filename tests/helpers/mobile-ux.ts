/**
 * Mobile UX Testing Helpers
 * Utilities for property-based testing of mobile UX requirements
 */

export const VIEWPORT_BREAKPOINTS = {
  mobile: {
    min: 375,
    max: 767,
  },
  tablet: {
    min: 768,
    max: 1023,
  },
  desktop: {
    min: 1024,
  },
} as const;

export const TOUCH_TARGET_CONFIG = {
  minWidth: 44,
  minHeight: 44,
  minGap: 8,
} as const;

export const TYPOGRAPHY_SCALE = {
  mobile: {
    h1: { min: 32, max: 40 },
    h2: { min: 28, max: 32 },
    h3: { min: 24, max: 28 },
    body: 16,
  },
  tablet: {
    h1: { min: 40, max: 48 },
    h2: { min: 32, max: 40 },
    h3: { min: 28, max: 32 },
    body: 18,
  },
  desktop: {
    h1: { min: 48, max: 72 },
    h2: { min: 40, max: 60 },
    h3: { min: 32, max: 48 },
    body: 18,
  },
} as const;

/**
 * Check if a value is a multiple of 8 (8px grid system)
 */
export function isMultipleOf8(value: number): boolean {
  return value % 8 === 0;
}

/**
 * Parse CSS pixel value to number
 */
export function parsePx(value: string): number {
  return parseFloat(value.replace('px', ''));
}

/**
 * Check if element meets minimum touch target size
 */
export function meetsTouchTargetSize(width: number, height: number): boolean {
  return width >= TOUCH_TARGET_CONFIG.minWidth && height >= TOUCH_TARGET_CONFIG.minHeight;
}

/**
 * Check if font size is within acceptable range for heading level
 */
export function isValidHeadingSize(
  level: 'h1' | 'h2' | 'h3',
  fontSize: number,
  viewport: 'mobile' | 'tablet' | 'desktop'
): boolean {
  const range = TYPOGRAPHY_SCALE[viewport][level];
  if (typeof range === 'number') {
    return fontSize >= range;
  }
  return fontSize >= range.min && fontSize <= range.max;
}

/**
 * Check if body text meets minimum font size
 */
export function isValidBodyTextSize(fontSize: number, viewport: 'mobile' | 'tablet' | 'desktop'): boolean {
  return fontSize >= TYPOGRAPHY_SCALE[viewport].body;
}

/**
 * Calculate color contrast ratio (simplified)
 * For full WCAG compliance, use a proper contrast checker
 */
export function getContrastRatio(foreground: string, background: string): number {
  // Simplified implementation - in real tests, use a proper library
  // This is a placeholder for the concept
  return 4.5; // Placeholder
}

/**
 * Check if contrast ratio meets WCAG requirements
 */
export function meetsContrastRequirement(ratio: number, isLargeText: boolean): boolean {
  return isLargeText ? ratio >= 3 : ratio >= 4.5;
}

/**
 * Viewport test utilities
 */
export const viewport = {
  isMobile: (width: number) => width >= VIEWPORT_BREAKPOINTS.mobile.min && width <= VIEWPORT_BREAKPOINTS.mobile.max,
  isTablet: (width: number) => width >= VIEWPORT_BREAKPOINTS.tablet.min && width <= VIEWPORT_BREAKPOINTS.tablet.max,
  isDesktop: (width: number) => width >= VIEWPORT_BREAKPOINTS.desktop.min,
};
