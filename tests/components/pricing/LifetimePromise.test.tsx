/**
 * Unit Tests for LifetimePromise Component
 * 
 * Requirements: 3.1
 */

import { render, screen } from '@testing-library/react';
import { LifetimePromise } from '@/components/pricing/LifetimePromise';
import { colors } from '@/lib/design-tokens';

describe('LifetimePromise Component', () => {
  describe('Content Rendering', () => {
    it('should render the lifetime promise text', () => {
      render(<LifetimePromise />);
      
      const promiseText = screen.getByText(/Lock in your Founder's Deal price forever/i);
      expect(promiseText).toBeInTheDocument();
      expect(promiseText).toHaveTextContent("Lock in your Founder's Deal price forever. Your rate never increases.");
    });

    it('should render the shield check icon', () => {
      const { container } = render(<LifetimePromise />);
      
      const icon = container.querySelector('svg');
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('Styling Application', () => {
    it('should apply correct background and border colors', () => {
      const { container } = render(<LifetimePromise />);
      
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveStyle({
        backgroundColor: `${colors.accent.primary}10`,
        borderColor: `${colors.accent.primary}30`,
      });
    });

    it('should apply correct text color', () => {
      render(<LifetimePromise />);
      
      const text = screen.getByText(/Lock in your Founder's Deal price forever/i);
      expect(text).toHaveStyle({
        color: colors.text.primary,
      });
    });

    it('should apply responsive text sizing classes', () => {
      render(<LifetimePromise />);
      
      const text = screen.getByText(/Lock in your Founder's Deal price forever/i);
      expect(text).toHaveClass('text-sm', 'sm:text-base');
    });

    it('should apply centered layout with gap', () => {
      const { container } = render(<LifetimePromise />);
      
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveClass('flex', 'items-center', 'justify-center', 'gap-3');
    });

    it('should apply rounded corners and border', () => {
      const { container } = render(<LifetimePromise />);
      
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveClass('rounded-lg', 'border');
    });

    it('should apply responsive padding', () => {
      const { container } = render(<LifetimePromise />);
      
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveClass('px-4', 'py-3');
    });
  });

  describe('Accessibility', () => {
    it('should have icon marked as decorative', () => {
      const { container } = render(<LifetimePromise />);
      
      const icon = container.querySelector('svg');
      expect(icon).toHaveAttribute('aria-hidden', 'true');
    });

    it('should have readable text content', () => {
      render(<LifetimePromise />);
      
      const text = screen.getByText(/Lock in your Founder's Deal price forever/i);
      expect(text).toBeVisible();
    });
  });

  describe('Visual Emphasis', () => {
    it('should apply medium font weight for emphasis', () => {
      render(<LifetimePromise />);
      
      const text = screen.getByText(/Lock in your Founder's Deal price forever/i);
      expect(text).toHaveClass('font-medium');
    });

    it('should center text alignment', () => {
      render(<LifetimePromise />);
      
      const text = screen.getByText(/Lock in your Founder's Deal price forever/i);
      expect(text).toHaveClass('text-center');
    });
  });

  describe('Icon Styling', () => {
    it('should apply correct icon size', () => {
      const { container } = render(<LifetimePromise />);
      
      const icon = container.querySelector('svg');
      expect(icon).toHaveClass('h-5', 'w-5');
    });

    it('should prevent icon from shrinking', () => {
      const { container } = render(<LifetimePromise />);
      
      const icon = container.querySelector('svg');
      expect(icon).toHaveClass('flex-shrink-0');
    });

    it('should apply accent color to icon', () => {
      const { container } = render(<LifetimePromise />);
      
      const icon = container.querySelector('svg') as SVGElement;
      expect(icon).toHaveStyle({
        color: colors.accent.primary,
      });
    });
  });
});
