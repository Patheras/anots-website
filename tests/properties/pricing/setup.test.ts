/**
 * Property-Based Testing Setup Verification
 * Ensures @fast-check/jest is properly configured
 */

import { it } from '@fast-check/jest';
import * as fc from 'fast-check';

describe('Property-Based Testing Setup', () => {
  it.prop([fc.integer()], { numRuns: 10 })(
    'should run property tests with fast-check',
    (n) => {
      // Simple property: any integer is equal to itself
      expect(n).toBe(n);
    }
  );

  it.prop(
    [fc.integer({ min: 0, max: 100 }), fc.integer({ min: 1, max: 100 })],
    { numRuns: 10 }
  )(
    'should support multiple arbitraries',
    (claimed, total) => {
      // Simple property: claimed spots should be a valid number
      expect(typeof claimed).toBe('number');
      expect(typeof total).toBe('number');
      expect(total).toBeGreaterThan(0);
    }
  );
});
