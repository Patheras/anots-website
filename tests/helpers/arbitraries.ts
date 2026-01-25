/**
 * Fast-check Arbitraries for Mobile UX Testing
 * Custom generators for property-based testing
 */

import * as fc from 'fast-check';
import { VIEWPORT_BREAKPOINTS, TOUCH_TARGET_CONFIG } from './mobile-ux';

/**
 * Generate mobile viewport widths (375px - 767px)
 */
export const mobileViewportWidth = () =>
  fc.integer({ min: VIEWPORT_BREAKPOINTS.mobile.min, max: VIEWPORT_BREAKPOINTS.mobile.max });

/**
 * Generate tablet viewport widths (768px - 1023px)
 */
export const tabletViewportWidth = () =>
  fc.integer({ min: VIEWPORT_BREAKPOINTS.tablet.min, max: VIEWPORT_BREAKPOINTS.tablet.max });

/**
 * Generate desktop viewport widths (1024px+)
 */
export const desktopViewportWidth = () =>
  fc.integer({ min: VIEWPORT_BREAKPOINTS.desktop.min, max: 2560 });

/**
 * Generate any viewport width
 */
export const anyViewportWidth = () =>
  fc.integer({ min: VIEWPORT_BREAKPOINTS.mobile.min, max: 2560 });

/**
 * Generate touch target dimensions
 */
export const touchTargetDimensions = () =>
  fc.record({
    width: fc.integer({ min: 20, max: 200 }),
    height: fc.integer({ min: 20, max: 200 }),
  });

/**
 * Generate valid touch target dimensions (meets 44x44 minimum)
 */
export const validTouchTargetDimensions = () =>
  fc.record({
    width: fc.integer({ min: TOUCH_TARGET_CONFIG.minWidth, max: 200 }),
    height: fc.integer({ min: TOUCH_TARGET_CONFIG.minHeight, max: 200 }),
  });

/**
 * Generate font sizes
 */
export const fontSize = () => fc.integer({ min: 8, max: 72 });

/**
 * Generate spacing values
 */
export const spacingValue = () => fc.integer({ min: 0, max: 128 });

/**
 * Generate spacing values that follow 8px grid
 */
export const gridSpacingValue = () =>
  fc.integer({ min: 0, max: 16 }).map(n => n * 8);

/**
 * Generate border radius values
 */
export const borderRadius = () => fc.integer({ min: 0, max: 24 });

/**
 * Generate heading levels
 */
export const headingLevel = () => fc.constantFrom('h1', 'h2', 'h3', 'h4', 'h5', 'h6');

/**
 * Generate viewport types
 */
export const viewportType = () => fc.constantFrom('mobile', 'tablet', 'desktop');

/**
 * Generate CSS color values (hex)
 */
export const hexColor = () =>
  fc.hexaString({ minLength: 6, maxLength: 6 }).map(hex => `#${hex}`);

/**
 * Generate line height values
 */
export const lineHeight = () => fc.double({ min: 1.0, max: 2.0 });

/**
 * Generate gap sizes
 */
export const gapSize = () => fc.integer({ min: 0, max: 64 });

/**
 * Generate element types
 */
export const interactiveElementType = () =>
  fc.constantFrom('button', 'a', 'input', 'textarea', 'select');

/**
 * Generate input types
 */
export const inputType = () =>
  fc.constantFrom('text', 'email', 'tel', 'url', 'password', 'number', 'search');
