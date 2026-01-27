/**
 * Property-Based Tests for PriceDisplay Component
 * Feature: founders-deal-pricing
 * 
 * These tests verify universal properties that should hold across all inputs
 * using property-based testing with fast-check.
 */

import fc from 'fast-check';
import { it } from '@fast-check/jest';
import { render } from '@testing-library/react';
import { PriceDisplay } from '@/components/pricing/PriceDisplay';

describe('PriceDisplay Property-Based Tests', () => {
  /**
   * Property 2: Anchoring Price Strikethrough Styling
   * **Validates: Requirements 2.3**
   * 
   * For any pricing tier with an anchoring price, the rendered anchoring price 
   * should include strikethrough styling and reduced opacity.
   * 
   * This property ensures that all anchoring prices are consistently styled with
   * strikethrough and reduced opacity to create the visual anchoring effect,
   * regardless of the specific price values.
   */
  describe('Property 2: Anchoring Price Strikethrough Styling', () => {
    // Generator for valid price strings (e.g., "$29", "$99", "$149")
    const priceArbitrary = fc.oneof(
      fc.integer({ min: 1, max: 999 }).map(n => `$${n}`),
      fc.constant('Custom'),
      fc.constant('Free')
    );

    // Generator for valid interval strings
    const intervalArbitrary = fc.oneof(
      fc.constant('month'),
      fc.constant('year'),
      fc.constant('week'),
      fc.constant('')
    );

    it.prop([
      priceArbitrary,  // currentPrice
      priceArbitrary,  // anchoringPrice
      intervalArbitrary // interval
    ])('should apply strikethrough class to any anchoring price', (currentPrice, anchoringPrice, interval) => {
      // Skip if prices are the same (component doesn't show anchoring price in this case)
      if (currentPrice === anchoringPrice) {
        return;
      }

      const { container } = render(
        <PriceDisplay
          currentPrice={currentPrice}
          anchoringPrice={anchoringPrice}
          interval={interval}
        />
      );

      // Find all elements with line-through class
      const strikethroughElements = container.querySelectorAll('.line-through');

      // If anchoring price is provided and different from current price,
      // there should be exactly one element with strikethrough
      if (anchoringPrice && anchoringPrice.trim() !== '' && anchoringPrice !== currentPrice) {
        expect(strikethroughElements.length).toBeGreaterThanOrEqual(1);
        
        // Verify the strikethrough element contains the anchoring price
        const hasAnchoringPrice = Array.from(strikethroughElements).some(
          el => el.textContent?.includes(anchoringPrice)
        );
        expect(hasAnchoringPrice).toBe(true);
      }
    });

    it.prop([
      priceArbitrary,  // currentPrice
      priceArbitrary,  // anchoringPrice
      intervalArbitrary // interval
    ])('should apply reduced opacity to any anchoring price', (currentPrice, anchoringPrice, interval) => {
      // Skip if prices are the same
      if (currentPrice === anchoringPrice) {
        return;
      }

      const { container } = render(
        <PriceDisplay
          currentPrice={currentPrice}
          anchoringPrice={anchoringPrice}
          interval={interval}
        />
      );

      // Find all elements with line-through class (anchoring prices)
      const strikethroughElements = container.querySelectorAll('.line-through');

      // If anchoring price is provided and different from current price,
      // verify reduced opacity is applied
      if (anchoringPrice && anchoringPrice.trim() !== '' && anchoringPrice !== currentPrice) {
        expect(strikethroughElements.length).toBeGreaterThanOrEqual(1);
        
        // Check that at least one strikethrough element has reduced opacity
        const hasReducedOpacity = Array.from(strikethroughElements).some(el => {
          const opacity = window.getComputedStyle(el).opacity;
          const opacityValue = parseFloat(opacity);
          // Opacity should be less than 1 (reduced)
          return opacityValue < 1;
        });
        
        expect(hasReducedOpacity).toBe(true);
      }
    });

    it.prop([
      priceArbitrary,  // currentPrice
      priceArbitrary,  // anchoringPrice
      intervalArbitrary // interval
    ])('should have both strikethrough and reduced opacity together', (currentPrice, anchoringPrice, interval) => {
      // Skip if prices are the same
      if (currentPrice === anchoringPrice) {
        return;
      }

      const { container } = render(
        <PriceDisplay
          currentPrice={currentPrice}
          anchoringPrice={anchoringPrice}
          interval={interval}
        />
      );

      // Find all elements with line-through class
      const strikethroughElements = container.querySelectorAll('.line-through');

      // If anchoring price is provided and different from current price,
      // verify both styling properties are present
      if (anchoringPrice && anchoringPrice.trim() !== '' && anchoringPrice !== currentPrice) {
        expect(strikethroughElements.length).toBeGreaterThanOrEqual(1);
        
        // Each strikethrough element should have reduced opacity
        strikethroughElements.forEach(el => {
          const opacity = window.getComputedStyle(el).opacity;
          const opacityValue = parseFloat(opacity);
          expect(opacityValue).toBeLessThan(1);
          expect(opacityValue).toBeGreaterThan(0);
        });
      }
    });

    it.prop([
      priceArbitrary,  // currentPrice
      intervalArbitrary // interval
    ])('should not show strikethrough when no anchoring price is provided', (currentPrice, interval) => {
      const { container } = render(
        <PriceDisplay
          currentPrice={currentPrice}
          interval={interval}
        />
      );

      // Should not have any strikethrough elements
      const strikethroughElements = container.querySelectorAll('.line-through');
      expect(strikethroughElements.length).toBe(0);
    });

    it.prop([
      priceArbitrary,  // currentPrice
      intervalArbitrary // interval
    ])('should not show strikethrough when anchoring price is empty string', (currentPrice, interval) => {
      const { container } = render(
        <PriceDisplay
          currentPrice={currentPrice}
          anchoringPrice=""
          interval={interval}
        />
      );

      // Should not have any strikethrough elements
      const strikethroughElements = container.querySelectorAll('.line-through');
      expect(strikethroughElements.length).toBe(0);
    });

    it.prop([
      priceArbitrary,  // price (used for both current and anchoring)
      intervalArbitrary // interval
    ])('should not show strikethrough when anchoring price equals current price', (price, interval) => {
      const { container } = render(
        <PriceDisplay
          currentPrice={price}
          anchoringPrice={price}
          interval={interval}
        />
      );

      // Should not have any strikethrough elements when prices are equal
      const strikethroughElements = container.querySelectorAll('.line-through');
      expect(strikethroughElements.length).toBe(0);
    });

    it.prop([
      priceArbitrary,  // currentPrice
      priceArbitrary,  // anchoringPrice
      intervalArbitrary // interval
    ])('should maintain consistent opacity value across all anchoring prices', (currentPrice, anchoringPrice, interval) => {
      // Skip if prices are the same
      if (currentPrice === anchoringPrice) {
        return;
      }

      const { container } = render(
        <PriceDisplay
          currentPrice={currentPrice}
          anchoringPrice={anchoringPrice}
          interval={interval}
        />
      );

      const strikethroughElements = container.querySelectorAll('.line-through');

      if (anchoringPrice && anchoringPrice.trim() !== '' && anchoringPrice !== currentPrice) {
        expect(strikethroughElements.length).toBeGreaterThanOrEqual(1);
        
        // All strikethrough elements should have the same opacity value
        const opacities = Array.from(strikethroughElements).map(el => {
          return parseFloat(window.getComputedStyle(el).opacity);
        });

        // All opacity values should be the same (consistent styling)
        const firstOpacity = opacities[0];
        opacities.forEach(opacity => {
          expect(opacity).toBeCloseTo(firstOpacity, 2);
        });

        // Verify the opacity is the expected value (0.6 based on component implementation)
        expect(firstOpacity).toBeCloseTo(0.6, 1);
      }
    });

    it.prop([
      priceArbitrary,  // currentPrice
      priceArbitrary,  // anchoringPrice
      intervalArbitrary // interval
    ])('should apply line-through class for strikethrough styling', (currentPrice, anchoringPrice, interval) => {
      // Skip if prices are the same
      if (currentPrice === anchoringPrice) {
        return;
      }

      const { container } = render(
        <PriceDisplay
          currentPrice={currentPrice}
          anchoringPrice={anchoringPrice}
          interval={interval}
        />
      );

      const strikethroughElements = container.querySelectorAll('.line-through');

      if (anchoringPrice && anchoringPrice.trim() !== '' && anchoringPrice !== currentPrice) {
        expect(strikethroughElements.length).toBeGreaterThanOrEqual(1);
        
        // Verify each element has the line-through class
        strikethroughElements.forEach(el => {
          expect(el.classList.contains('line-through')).toBe(true);
        });
      }
    });
  });
});
