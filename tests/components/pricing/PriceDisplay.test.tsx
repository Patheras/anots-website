/**
 * Unit Tests for PriceDisplay Component
 * Tests rendering of current price, anchoring price, and custom pricing
 * 
 * Requirements: 2.1, 2.2, 2.5
 */

import { render, screen } from '@testing-library/react';
import { PriceDisplay } from '@/components/pricing/PriceDisplay';

describe('PriceDisplay Component', () => {
  describe('Explorer Tier Price Display', () => {
    it('should display $29/month with ~~$49~~ crossed out', () => {
      render(
        <PriceDisplay
          currentPrice="$29"
          anchoringPrice="$49"
          interval="month"
        />
      );

      // Check current price is displayed
      expect(screen.getByText('$29')).toBeInTheDocument();
      
      // Check interval is displayed (appears twice - for current and anchoring price)
      const intervals = screen.getAllByText('/month');
      expect(intervals.length).toBe(2);

      // Check anchoring price is displayed with strikethrough
      const anchoringPrice = screen.getByText('$49');
      expect(anchoringPrice).toBeInTheDocument();
      expect(anchoringPrice).toHaveClass('line-through');
    });
  });

  describe('Pro Tier Price Display', () => {
    it('should display $49/month with ~~$99~~ crossed out', () => {
      render(
        <PriceDisplay
          currentPrice="$49"
          anchoringPrice="$99"
          interval="month"
        />
      );

      // Check current price is displayed
      expect(screen.getByText('$49')).toBeInTheDocument();
      
      // Check interval is displayed (appears twice - for current and anchoring price)
      const intervals = screen.getAllByText('/month');
      expect(intervals.length).toBe(2);

      // Check anchoring price is displayed with strikethrough
      const anchoringPrice = screen.getByText('$99');
      expect(anchoringPrice).toBeInTheDocument();
      expect(anchoringPrice).toHaveClass('line-through');
    });
  });

  describe('Enterprise Custom Pricing', () => {
    it('should display "Custom Pricing" without anchoring price', () => {
      render(
        <PriceDisplay
          currentPrice="Custom"
          interval=""
          isCustom={true}
        />
      );

      // Check custom pricing is displayed
      expect(screen.getByText('Custom Pricing')).toBeInTheDocument();

      // Check no anchoring price is displayed
      expect(screen.queryByText(/\$/)).not.toBeInTheDocument();
    });
  });

  describe('Missing Anchoring Price Handling', () => {
    it('should not display anchoring price when not provided', () => {
      render(
        <PriceDisplay
          currentPrice="$29"
          interval="month"
        />
      );

      // Check current price is displayed
      expect(screen.getByText('$29')).toBeInTheDocument();

      // Check no strikethrough element exists
      const { container } = render(
        <PriceDisplay
          currentPrice="$29"
          interval="month"
        />
      );
      const strikethroughElements = container.querySelectorAll('.line-through');
      expect(strikethroughElements.length).toBe(0);
    });

    it('should not display anchoring price when empty string', () => {
      render(
        <PriceDisplay
          currentPrice="$29"
          anchoringPrice=""
          interval="month"
        />
      );

      // Check current price is displayed
      expect(screen.getByText('$29')).toBeInTheDocument();

      // Check no strikethrough element exists
      const { container } = render(
        <PriceDisplay
          currentPrice="$29"
          anchoringPrice=""
          interval="month"
        />
      );
      const strikethroughElements = container.querySelectorAll('.line-through');
      expect(strikethroughElements.length).toBe(0);
    });

    it('should not display anchoring price when it equals current price', () => {
      const { container } = render(
        <PriceDisplay
          currentPrice="$49"
          anchoringPrice="$49"
          interval="month"
        />
      );

      // Check no strikethrough element exists
      const strikethroughElements = container.querySelectorAll('.line-through');
      expect(strikethroughElements.length).toBe(0);
    });
  });

  describe('Empty Interval Handling', () => {
    it('should omit "/" separator when interval is empty', () => {
      render(
        <PriceDisplay
          currentPrice="$99"
          interval=""
        />
      );

      // Check price is displayed
      expect(screen.getByText('$99')).toBeInTheDocument();

      // Check no "/" is displayed
      expect(screen.queryByText(/\//)).not.toBeInTheDocument();
    });
  });

  describe('Empty Current Price Handling', () => {
    it('should display "Contact Sales" when currentPrice is empty', () => {
      render(
        <PriceDisplay
          currentPrice=""
          interval="month"
        />
      );

      expect(screen.getByText('Contact Sales')).toBeInTheDocument();
    });
  });

  describe('Strikethrough Styling', () => {
    it('should apply strikethrough class to anchoring price', () => {
      render(
        <PriceDisplay
          currentPrice="$29"
          anchoringPrice="$49"
          interval="month"
        />
      );

      const anchoringPrice = screen.getByText('$49');
      expect(anchoringPrice).toHaveClass('line-through');
    });

    it('should apply reduced opacity to anchoring price', () => {
      render(
        <PriceDisplay
          currentPrice="$29"
          anchoringPrice="$49"
          interval="month"
        />
      );

      const anchoringPrice = screen.getByText('$49');
      expect(anchoringPrice).toHaveStyle({ opacity: 0.6 });
    });
  });

  describe('Typography Tokens', () => {
    it('should apply correct font sizes', () => {
      render(
        <PriceDisplay
          currentPrice="$49"
          anchoringPrice="$99"
          interval="month"
        />
      );

      // Current price should have larger font
      const currentPrice = screen.getByText('$49');
      expect(currentPrice).toHaveClass('text-3xl');
      expect(currentPrice).toHaveClass('sm:text-4xl');

      // Anchoring price should have smaller font
      const anchoringPrice = screen.getByText('$99');
      expect(anchoringPrice).toHaveClass('text-base');
      expect(anchoringPrice).toHaveClass('sm:text-lg');
    });

    it('should apply correct font weights', () => {
      render(
        <PriceDisplay
          currentPrice="$49"
          anchoringPrice="$99"
          interval="month"
        />
      );

      // Current price should be bold
      const currentPrice = screen.getByText('$49');
      expect(currentPrice).toHaveClass('font-bold');

      // Anchoring price should be medium weight
      const anchoringPrice = screen.getByText('$99');
      expect(anchoringPrice).toHaveClass('font-medium');
    });
  });

  describe('Responsive Design', () => {
    it('should apply responsive text size classes', () => {
      render(
        <PriceDisplay
          currentPrice="$49"
          interval="month"
        />
      );

      const currentPrice = screen.getByText('$49');
      expect(currentPrice).toHaveClass('text-3xl');
      expect(currentPrice).toHaveClass('sm:text-4xl');

      const interval = screen.getByText('/month');
      expect(interval).toHaveClass('text-lg');
      expect(interval).toHaveClass('sm:text-xl');
    });
  });
});
