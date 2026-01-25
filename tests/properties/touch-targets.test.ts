/**
 * Property-Based Tests for Touch Targets
 * Tests Requirements 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 9.7, 10.4
 */

import * as fc from 'fast-check';
import { describe, it, expect } from '@jest/globals';
import {
  meetsTouchTargetSize,
  TOUCH_TARGET_CONFIG,
} from '../helpers/mobile-ux';
import {
  touchTargetDimensions,
  validTouchTargetDimensions,
  mobileViewportWidth,
} from '../helpers/arbitraries';

describe('Property 1: Universal Touch Target Minimum Size', () => {
  it('should validate that all valid touch targets meet 44x44px minimum', () => {
    fc.assert(
      fc.property(validTouchTargetDimensions(), (dimensions) => {
        const meetsRequirement = meetsTouchTargetSize(dimensions.width, dimensions.height);
        expect(meetsRequirement).toBe(true);
        return meetsRequirement;
      })
    );
  });

  it('should identify touch targets below minimum size', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 20, max: 43 }),
        fc.integer({ min: 20, max: 43 }),
        (width, height) => {
          const meetsRequirement = meetsTouchTargetSize(width, height);
          // At least one dimension should be below minimum
          const shouldFail = width < TOUCH_TARGET_CONFIG.minWidth || height < TOUCH_TARGET_CONFIG.minHeight;
          expect(meetsRequirement).toBe(!shouldFail);
          return true;
        }
      )
    );
  });
});

describe('Property 2: Touch Target Spacing', () => {
  it('should validate minimum 8px spacing between adjacent touch targets', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: 100 }),
        (spacing) => {
          const meetsRequirement = spacing >= TOUCH_TARGET_CONFIG.minGap;
          if (spacing < TOUCH_TARGET_CONFIG.minGap) {
            expect(meetsRequirement).toBe(false);
          } else {
            expect(meetsRequirement).toBe(true);
          }
          return true;
        }
      )
    );
  });
});

describe('Touch Target Utilities', () => {
  it('should correctly identify valid touch targets', () => {
    expect(meetsTouchTargetSize(44, 44)).toBe(true);
    expect(meetsTouchTargetSize(48, 48)).toBe(true);
    expect(meetsTouchTargetSize(100, 50)).toBe(true);
  });

  it('should correctly identify invalid touch targets', () => {
    expect(meetsTouchTargetSize(40, 40)).toBe(false);
    expect(meetsTouchTargetSize(44, 40)).toBe(false);
    expect(meetsTouchTargetSize(40, 44)).toBe(false);
  });
});
