/**
 * Property-Based Tests for CTAButton Component
 * Feature: founders-deal-pricing
 * 
 * These tests verify universal properties that should hold across all inputs
 * using property-based testing with fast-check.
 */

import fc from 'fast-check';
import { it } from '@fast-check/jest';
import { render, fireEvent } from '@testing-library/react';
import { CTAButton } from '@/components/pricing/CTAButton';

describe('CTAButton Property-Based Tests', () => {
  /**
   * Property 8: CTA Button Click Handler
   * **Validates: Requirements 9.5**
   * 
   * For any CTA button in the Pricing_Section, clicking the button should 
   * invoke its associated action handler with the correct tier identifier.
   * 
   * This property ensures that all CTA buttons correctly trigger their 
   * onClick handlers when clicked, regardless of variant or text content.
   */
  describe('Property 8: CTA Button Click Handler', () => {
    it.prop([
      fc.constantFrom('primary', 'secondary', 'outline'), // variant
      fc.string({ minLength: 1, maxLength: 50 })         // button text
    ])('should invoke onClick handler when clicked for any variant and text', (variant, text) => {
      const mockOnClick = jest.fn();
      
      const { container, unmount } = render(
        <CTAButton
          text={text}
          onClick={mockOnClick}
          variant={variant as 'primary' | 'secondary' | 'outline'}
        />
      );
      
      const button = container.querySelector('button');
      expect(button).toBeInTheDocument();
      fireEvent.click(button!);
      
      // Handler should be called exactly once
      expect(mockOnClick).toHaveBeenCalledTimes(1);
      
      unmount();
    });

    it.prop([
      fc.constantFrom('primary', 'secondary', 'outline'), // variant
      fc.string({ minLength: 1, maxLength: 50 }),        // button text
      fc.integer({ min: 1, max: 10 })                    // number of clicks
    ])('should invoke onClick handler correct number of times', (variant, text, clickCount) => {
      const mockOnClick = jest.fn();
      
      const { container, unmount } = render(
        <CTAButton
          text={text}
          onClick={mockOnClick}
          variant={variant as 'primary' | 'secondary' | 'outline'}
        />
      );
      
      const button = container.querySelector('button');
      expect(button).toBeInTheDocument();
      
      // Click the button multiple times
      for (let i = 0; i < clickCount; i++) {
        fireEvent.click(button!);
      }
      
      // Handler should be called exactly clickCount times
      expect(mockOnClick).toHaveBeenCalledTimes(clickCount);
      
      unmount();
    });

    it.prop([
      fc.constantFrom('primary', 'secondary', 'outline'), // variant
      fc.string({ minLength: 1, maxLength: 50 })         // button text
    ])('should not invoke onClick handler without user interaction', (variant, text) => {
      const mockOnClick = jest.fn();
      
      const { unmount } = render(
        <CTAButton
          text={text}
          onClick={mockOnClick}
          variant={variant as 'primary' | 'secondary' | 'outline'}
        />
      );
      
      // Just rendering should not trigger the handler
      expect(mockOnClick).not.toHaveBeenCalled();
      
      unmount();
    });
  });

  /**
   * Property 5 (Partial): Interactive Element Accessibility
   * **Validates: Requirements 8.1, 8.3, 8.4, 8.5**
   * 
   * For any interactive element in the Pricing_Section, the element should 
   * have an appropriate ARIA label or accessible name, be keyboard navigable, 
   * display a visible focus indicator when focused, and include alternative 
   * text if it contains icons.
   * 
   * This property verifies CTAButton accessibility features.
   */
  describe('Property 5 (Partial): Interactive Element Accessibility', () => {
    it.prop([
      fc.constantFrom('primary', 'secondary', 'outline'), // variant
      fc.string({ minLength: 1, maxLength: 100 })        // button text
    ])('should have ARIA label matching button text', (variant, text) => {
      const { container, unmount } = render(
        <CTAButton
          text={text}
          onClick={() => {}}
          variant={variant as 'primary' | 'secondary' | 'outline'}
        />
      );
      
      const button = container.querySelector('button');
      expect(button).toBeInTheDocument();
      
      // Should have aria-label attribute
      expect(button).toHaveAttribute('aria-label', text);
      
      unmount();
    });

    it.prop([
      fc.constantFrom('primary', 'secondary', 'outline'), // variant
      fc.string({ minLength: 1, maxLength: 100 })        // button text
    ])('should be keyboard navigable (focusable)', (variant, text) => {
      const { container, unmount } = render(
        <CTAButton
          text={text}
          onClick={() => {}}
          variant={variant as 'primary' | 'secondary' | 'outline'}
        />
      );
      
      const button = container.querySelector('button');
      expect(button).toBeInTheDocument();
      
      // Button should be focusable
      button!.focus();
      expect(document.activeElement).toBe(button);
      
      unmount();
    });

    it.prop([
      fc.constantFrom('primary', 'secondary', 'outline'), // variant
      fc.string({ minLength: 1, maxLength: 100 })        // button text
    ])('should have button type attribute', (variant, text) => {
      const { container, unmount } = render(
        <CTAButton
          text={text}
          onClick={() => {}}
          variant={variant as 'primary' | 'secondary' | 'outline'}
        />
      );
      
      const button = container.querySelector('button');
      expect(button).toBeInTheDocument();
      
      // Should have explicit button type
      expect(button).toHaveAttribute('type', 'button');
      
      unmount();
    });
  });

  /**
   * Additional Property: Variant Mapping Consistency
   * 
   * Ensures that pricing variants are consistently mapped to button variants.
   */
  describe('Additional Property: Variant Mapping Consistency', () => {
    it.prop([
      fc.string({ minLength: 1, maxLength: 100 }) // button text
    ])('should map primary variant to magic button variant', (text) => {
      const { container, unmount } = render(
        <CTAButton
          text={text}
          onClick={() => {}}
          variant="primary"
        />
      );
      
      const button = container.querySelector('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('data-variant', 'magic');
      expect(button).toHaveAttribute('data-size', 'lg');
      
      unmount();
    });

    it.prop([
      fc.string({ minLength: 1, maxLength: 100 }) // button text
    ])('should map secondary variant to primary button variant', (text) => {
      const { container, unmount } = render(
        <CTAButton
          text={text}
          onClick={() => {}}
          variant="secondary"
        />
      );
      
      const button = container.querySelector('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('data-variant', 'primary');
      expect(button).toHaveAttribute('data-size', 'lg');
      
      unmount();
    });

    it.prop([
      fc.string({ minLength: 1, maxLength: 100 }) // button text
    ])('should map outline variant to primary button variant', (text) => {
      const { container, unmount } = render(
        <CTAButton
          text={text}
          onClick={() => {}}
          variant="outline"
        />
      );
      
      const button = container.querySelector('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('data-variant', 'primary');
      expect(button).toHaveAttribute('data-size', 'lg');
      
      unmount();
    });

    it.prop([
      fc.constantFrom('primary', 'secondary', 'outline'), // variant
      fc.string({ minLength: 1, maxLength: 100 })        // button text
    ])('should always use large size', (variant, text) => {
      const { container, unmount } = render(
        <CTAButton
          text={text}
          onClick={() => {}}
          variant={variant as 'primary' | 'secondary' | 'outline'}
        />
      );
      
      const button = container.querySelector('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('data-size', 'lg');
      
      unmount();
    });

    it.prop([
      fc.constantFrom('primary', 'secondary', 'outline'), // variant
      fc.string({ minLength: 1, maxLength: 100 })        // button text
    ])('should always be full width', (variant, text) => {
      const { container, unmount } = render(
        <CTAButton
          text={text}
          onClick={() => {}}
          variant={variant as 'primary' | 'secondary' | 'outline'}
        />
      );
      
      const button = container.querySelector('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('w-full');
      
      unmount();
    });
  });
});
