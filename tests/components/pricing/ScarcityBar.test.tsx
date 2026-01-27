/**
 * Unit Tests for ScarcityBar Component
 * Tests rendering, animation, and edge cases
 * 
 * Requirements: 1.1, 1.3, 1.4, 11.4
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { ScarcityBar, calculateFillPercentage } from '@/components/pricing/ScarcityBar';

describe('ScarcityBar Component', () => {
  describe('Rendering', () => {
    it('should render with claimed/total props', () => {
      render(<ScarcityBar claimed={74} total={100} />);
      
      // Check for text content
      expect(screen.getByText("Founder's Deal")).toBeInTheDocument();
      expect(screen.getByText('74 / 100 Spots Claimed')).toBeInTheDocument();
    });

    it('should render with custom className', () => {
      const { container } = render(
        <ScarcityBar claimed={50} total={100} className="custom-class" />
      );
      
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveClass('custom-class');
    });

    it('should have proper ARIA attributes', () => {
      render(<ScarcityBar claimed={74} total={100} />);
      
      // Check for status role
      const statusElement = screen.getByRole('status');
      expect(statusElement).toBeInTheDocument();
      expect(statusElement).toHaveAttribute('aria-live', 'polite');
      expect(statusElement).toHaveAttribute(
        'aria-label',
        "Founder's Deal: 74 out of 100 spots claimed"
      );
      
      // Check for progressbar role
      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toBeInTheDocument();
      expect(progressBar).toHaveAttribute('aria-valuenow', '74');
      expect(progressBar).toHaveAttribute('aria-valuemin', '0');
      expect(progressBar).toHaveAttribute('aria-valuemax', '100');
    });
  });

  describe('Fill Percentage Calculation', () => {
    it('should calculate correct percentage for normal values', () => {
      expect(calculateFillPercentage(74, 100)).toBe(74);
      expect(calculateFillPercentage(50, 100)).toBe(50);
      expect(calculateFillPercentage(25, 100)).toBe(25);
    });

    it('should handle claimed > total by clamping to 100', () => {
      expect(calculateFillPercentage(150, 100)).toBe(100);
      expect(calculateFillPercentage(200, 100)).toBe(100);
    });

    it('should handle negative claimed by returning 0', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
      expect(calculateFillPercentage(-10, 100)).toBe(0);
      expect(consoleSpy).toHaveBeenCalledWith(
        'ScarcityBar: claimed cannot be negative, defaulting to 0'
      );
      consoleSpy.mockRestore();
    });

    it('should handle total <= 0 by returning 0', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
      expect(calculateFillPercentage(50, 0)).toBe(0);
      expect(calculateFillPercentage(50, -10)).toBe(0);
      expect(consoleSpy).toHaveBeenCalledWith(
        'ScarcityBar: total must be greater than 0, defaulting to 100'
      );
      consoleSpy.mockRestore();
    });

    it('should handle fractional percentages', () => {
      expect(calculateFillPercentage(33, 100)).toBe(33);
      expect(calculateFillPercentage(1, 3)).toBeCloseTo(33.33, 2);
      expect(calculateFillPercentage(2, 3)).toBeCloseTo(66.67, 2);
    });
  });

  describe('Animation', () => {
    it('should apply pulsing animation class', () => {
      const { container } = render(<ScarcityBar claimed={74} total={100} />);
      
      const fillElement = container.querySelector('.scarcity-bar-fill');
      expect(fillElement).toBeInTheDocument();
      expect(fillElement).toHaveClass('scarcity-bar-fill');
    });

    it('should include CSS animation styles', () => {
      const { container } = render(<ScarcityBar claimed={74} total={100} />);
      
      // Check that style tag exists
      const styleTag = container.querySelector('style');
      expect(styleTag).toBeInTheDocument();
      expect(styleTag?.textContent).toContain('@keyframes pulse');
      expect(styleTag?.textContent).toContain('animation: pulse 2s ease-in-out infinite');
    });

    it('should support prefers-reduced-motion', () => {
      const { container } = render(<ScarcityBar claimed={74} total={100} />);
      
      const styleTag = container.querySelector('style');
      expect(styleTag?.textContent).toContain('@media (prefers-reduced-motion: reduce)');
      expect(styleTag?.textContent).toContain('animation: none');
    });
  });

  describe('Responsive Styling', () => {
    it('should apply responsive padding classes', () => {
      const { container } = render(<ScarcityBar claimed={74} total={100} />);
      
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveClass('p-4');
      expect(wrapper).toHaveClass('sm:p-6');
    });

    it('should apply responsive text size classes', () => {
      render(<ScarcityBar claimed={74} total={100} />);
      
      const dealText = screen.getByText("Founder's Deal");
      expect(dealText).toHaveClass('text-sm');
      expect(dealText).toHaveClass('sm:text-base');
      
      const spotsText = screen.getByText('74 / 100 Spots Claimed');
      expect(spotsText).toHaveClass('text-sm');
      expect(spotsText).toHaveClass('sm:text-base');
    });
  });

  describe('Visual Styling', () => {
    it('should apply correct width based on fill percentage', () => {
      const { container } = render(<ScarcityBar claimed={75} total={100} />);
      
      const fillElement = container.querySelector('.scarcity-bar-fill') as HTMLElement;
      expect(fillElement?.style.width).toBe('75%');
    });

    it('should apply gradient background', () => {
      const { container } = render(<ScarcityBar claimed={50} total={100} />);
      
      const fillElement = container.querySelector('.scarcity-bar-fill') as HTMLElement;
      expect(fillElement?.style.background).toContain('linear-gradient');
      expect(fillElement?.style.background).toContain('#5E6AD2');
      expect(fillElement?.style.background).toContain('#7C85E3');
    });
  });
});
