/**
 * Property-Based Tests for ScarcityBar Component
 * Feature: founders-deal-pricing
 * 
 * These tests verify universal properties that should hold across all inputs
 * using property-based testing with fast-check.
 */

import fc from 'fast-check';
import { it } from '@fast-check/jest';
import { calculateFillPercentage } from '@/components/pricing/ScarcityBar';

describe('ScarcityBar Property-Based Tests', () => {
  /**
   * Property 1: Scarcity Bar Fill Percentage Calculation
   * **Validates: Requirements 1.2**
   * 
   * For any claimed spots value and total spots value, the Scarcity_Bar fill 
   * percentage should equal (claimed / total) * 100.
   * 
   * This property ensures the fill percentage calculation is mathematically 
   * correct across all valid inputs, including edge cases.
   */
  describe('Property 1: Fill Percentage Calculation', () => {
    it.prop([
      fc.integer({ min: 0, max: 10000 }), // claimed
      fc.integer({ min: 1, max: 10000 })  // total (must be > 0)
    ])('should calculate correct fill percentage for any valid claimed/total values', (claimed, total) => {
      const result = calculateFillPercentage(claimed, total);
      const rawPercentage = (claimed / total) * 100;
      // The function clamps to 0-100 range, so expected should also be clamped
      const expected = Math.min(Math.max(rawPercentage, 0), 100);
      
      // The result should match the expected calculation (with clamping)
      // Using toBeCloseTo to handle floating point precision
      expect(result).toBeCloseTo(expected, 10);
    });

    it.prop([
      fc.integer({ min: 0, max: 10000 }), // claimed
      fc.integer({ min: 1, max: 10000 })  // total
    ])('should always return a value between 0 and 100 (clamped)', (claimed, total) => {
      const result = calculateFillPercentage(claimed, total);
      
      // Result should always be within valid percentage range
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(100);
    });

    it.prop([
      fc.integer({ min: 0, max: 10000 }), // claimed
      fc.integer({ min: 1, max: 10000 })  // total
    ])('should return 100 when claimed equals or exceeds total', (claimed, total) => {
      // Test with claimed >= total
      const claimedAtOrAboveTotal = Math.max(claimed, total);
      const result = calculateFillPercentage(claimedAtOrAboveTotal, total);
      
      if (claimedAtOrAboveTotal >= total) {
        expect(result).toBe(100);
      }
    });

    it.prop([
      fc.integer({ min: 1, max: 10000 }) // total
    ])('should return 0 when claimed is 0', (total) => {
      const result = calculateFillPercentage(0, total);
      expect(result).toBe(0);
    });

    it.prop([
      fc.integer({ min: -10000, max: -1 }), // negative claimed
      fc.integer({ min: 1, max: 10000 })    // positive total
    ])('should return 0 for negative claimed values', (claimed, total) => {
      const result = calculateFillPercentage(claimed, total);
      expect(result).toBe(0);
    });

    it.prop([
      fc.integer({ min: 0, max: 10000 }),  // claimed
      fc.integer({ min: -10000, max: 0 })  // non-positive total
    ])('should return 0 for non-positive total values', (claimed, total) => {
      const result = calculateFillPercentage(claimed, total);
      expect(result).toBe(0);
    });

    it.prop([
      fc.integer({ min: 1, max: 10000 }), // claimed
      fc.integer({ min: 1, max: 10000 })  // total
    ])('should be monotonically increasing with claimed (when claimed <= total)', (claimed, total) => {
      // If we increase claimed, the percentage should increase or stay the same
      const smallerClaimed = Math.min(claimed, total);
      const largerClaimed = Math.min(claimed + 1, total);
      
      const result1 = calculateFillPercentage(smallerClaimed, total);
      const result2 = calculateFillPercentage(largerClaimed, total);
      
      expect(result2).toBeGreaterThanOrEqual(result1);
    });

    it.prop([
      fc.integer({ min: 1, max: 10000 }), // claimed
      fc.integer({ min: 1, max: 10000 })  // total
    ])('should be inversely related to total (when claimed is constant)', (claimed, total) => {
      // If we increase total, the percentage should decrease or stay the same
      const smallerTotal = Math.max(total, claimed); // Ensure total >= claimed
      const largerTotal = smallerTotal + 1;
      
      const result1 = calculateFillPercentage(claimed, smallerTotal);
      const result2 = calculateFillPercentage(claimed, largerTotal);
      
      expect(result2).toBeLessThanOrEqual(result1);
    });

    it.prop([
      fc.integer({ min: 1, max: 10000 }) // value
    ])('should return 100 when claimed equals total', (value) => {
      const result = calculateFillPercentage(value, value);
      expect(result).toBe(100);
    });

    it.prop([
      fc.integer({ min: 1, max: 10000 }), // claimed
      fc.integer({ min: 1, max: 10000 })  // total
    ])('should maintain precision for fractional percentages', (claimed, total) => {
      const result = calculateFillPercentage(claimed, total);
      const expected = (claimed / total) * 100;
      
      // Verify the calculation maintains reasonable precision
      // Allow for floating point arithmetic tolerance
      const difference = Math.abs(result - Math.min(expected, 100));
      expect(difference).toBeLessThan(0.0001);
    });
  });
});
