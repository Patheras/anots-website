/**
 * Property-Based Tests for ScarcityBar Component
 * Tests universal properties across all valid inputs
 * 
 * Feature: founders-deal-pricing
 */

import { it } from '@fast-check/jest';
import * as fc from 'fast-check';
import { calculateFillPercentage } from '@/components/pricing/ScarcityBar';

describe('ScarcityBar Property Tests', () => {
  // Feature: founders-deal-pricing, Property 1: Scarcity Bar Fill Percentage Calculation
  describe('Property 1: Fill Percentage Calculation', () => {
    it.prop(
      [
        fc.integer({ min: 0, max: 1000 }), // claimed
        fc.integer({ min: 1, max: 1000 }), // total
      ],
      { numRuns: 10 }
    )(
      'should calculate correct fill percentage for any claimed/total values',
      (claimed, total) => {
        const result = calculateFillPercentage(claimed, total);
        const rawPercentage = (claimed / total) * 100;
        const expected = Math.min(Math.max(rawPercentage, 0), 100);
        
        // Property: Fill percentage should equal (claimed / total) * 100, clamped to [0, 100]
        // Allow small floating point tolerance
        expect(result).toBeCloseTo(expected, 2);
        
        // Additional invariants:
        // 1. Result should always be between 0 and 100
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(100);
        
        // 2. Result should be a valid number
        expect(Number.isFinite(result)).toBe(true);
      }
    );

    it.prop(
      [
        fc.integer({ min: 101, max: 10000 }), // claimed > total
        fc.integer({ min: 1, max: 100 }),     // total
      ],
      { numRuns: 10 }
    )(
      'should clamp fill percentage to 100 when claimed > total',
      (claimed, total) => {
        const result = calculateFillPercentage(claimed, total);
        
        // Property: When claimed > total, result should be clamped to 100
        expect(result).toBe(100);
      }
    );

    it.prop(
      [
        fc.integer({ min: -1000, max: -1 }), // negative claimed
        fc.integer({ min: 1, max: 1000 }),   // total
      ],
      { numRuns: 10 }
    )(
      'should return 0 for negative claimed values',
      (claimed, total) => {
        const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
        const result = calculateFillPercentage(claimed, total);
        
        // Property: Negative claimed values should return 0
        expect(result).toBe(0);
        
        consoleSpy.mockRestore();
      }
    );

    it.prop(
      [
        fc.integer({ min: 0, max: 1000 }),    // claimed
        fc.integer({ min: -1000, max: 0 }),   // total <= 0
      ],
      { numRuns: 10 }
    )(
      'should return 0 for total <= 0',
      (claimed, total) => {
        const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
        const result = calculateFillPercentage(claimed, total);
        
        // Property: When total <= 0, result should be 0
        expect(result).toBe(0);
        
        consoleSpy.mockRestore();
      }
    );

    it.prop(
      [fc.integer({ min: 1, max: 1000 })], // total
      { numRuns: 10 }
    )(
      'should return 0 when claimed is 0',
      (total) => {
        const result = calculateFillPercentage(0, total);
        
        // Property: When claimed is 0, result should be 0
        expect(result).toBe(0);
      }
    );

    it.prop(
      [fc.integer({ min: 1, max: 1000 })], // value
      { numRuns: 10 }
    )(
      'should return 100 when claimed equals total',
      (value) => {
        const result = calculateFillPercentage(value, value);
        
        // Property: When claimed equals total, result should be 100
        expect(result).toBe(100);
      }
    );

    it.prop(
      [
        fc.integer({ min: 1, max: 1000 }),  // claimed
        fc.integer({ min: 1, max: 1000 }),  // total
      ],
      { numRuns: 10 }
    )(
      'should be monotonic: more claimed spots means higher percentage (when total is constant)',
      (claimed1, total) => {
        const claimed2 = claimed1 + 1;
        
        const result1 = calculateFillPercentage(claimed1, total);
        const result2 = calculateFillPercentage(claimed2, total);
        
        // Property: Increasing claimed should increase or maintain percentage
        // (clamped at 100)
        if (result1 < 100) {
          expect(result2).toBeGreaterThanOrEqual(result1);
        } else {
          expect(result2).toBe(100);
        }
      }
    );
  });
});
