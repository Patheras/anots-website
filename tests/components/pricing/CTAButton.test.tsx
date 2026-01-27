/**
 * Unit Tests for CTAButton Component
 * Tests variant styling, click handlers, and accessibility
 * 
 * Requirements: 9.2, 9.3, 9.4, 8.1, 8.4
 */

import { render, screen, fireEvent } from '@testing-library/react';
import { CTAButton } from '@/components/pricing/CTAButton';

describe('CTAButton Component', () => {
  describe('Rendering', () => {
    it('should render with text prop', () => {
      render(
        <CTAButton
          text="Get Started"
          onClick={() => {}}
          variant="primary"
        />
      );
      
      expect(screen.getByRole('button', { name: 'Get Started' })).toBeInTheDocument();
    });

    it('should render with custom className', () => {
      render(
        <CTAButton
          text="Click Me"
          onClick={() => {}}
          variant="primary"
          className="custom-class"
        />
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-class');
    });

    it('should have button type attribute', () => {
      render(
        <CTAButton
          text="Click Me"
          onClick={() => {}}
          variant="primary"
        />
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'button');
    });
  });

  describe('Variant Styling', () => {
    it('should apply primary variant styles', () => {
      render(
        <CTAButton
          text="Primary Button"
          onClick={() => {}}
          variant="primary"
        />
      );
      
      const button = screen.getByRole('button');
      // Primary variant maps to 'magic' button variant
      expect(button).toHaveAttribute('data-variant', 'magic');
      expect(button).toHaveAttribute('data-size', 'lg');
    });

    it('should apply secondary variant styles', () => {
      render(
        <CTAButton
          text="Secondary Button"
          onClick={() => {}}
          variant="secondary"
        />
      );
      
      const button = screen.getByRole('button');
      // Secondary variant maps to 'primary' button variant
      expect(button).toHaveAttribute('data-variant', 'primary');
      expect(button).toHaveAttribute('data-size', 'lg');
    });

    it('should apply outline variant styles', () => {
      render(
        <CTAButton
          text="Outline Button"
          onClick={() => {}}
          variant="outline"
        />
      );
      
      const button = screen.getByRole('button');
      // Outline variant maps to 'primary' button variant
      expect(button).toHaveAttribute('data-variant', 'primary');
      expect(button).toHaveAttribute('data-size', 'lg');
    });
  });

  describe('Click Handler', () => {
    it('should invoke onClick handler when clicked', () => {
      const mockOnClick = jest.fn();
      
      render(
        <CTAButton
          text="Click Me"
          onClick={mockOnClick}
          variant="primary"
        />
      );
      
      const button = screen.getByRole('button');
      fireEvent.click(button);
      
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('should invoke onClick handler multiple times', () => {
      const mockOnClick = jest.fn();
      
      render(
        <CTAButton
          text="Click Me"
          onClick={mockOnClick}
          variant="primary"
        />
      );
      
      const button = screen.getByRole('button');
      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);
      
      expect(mockOnClick).toHaveBeenCalledTimes(3);
    });

    it('should work with different onClick handlers for different variants', () => {
      const mockPrimaryClick = jest.fn();
      const mockSecondaryClick = jest.fn();
      const mockOutlineClick = jest.fn();
      
      const { rerender } = render(
        <CTAButton
          text="Primary"
          onClick={mockPrimaryClick}
          variant="primary"
        />
      );
      
      fireEvent.click(screen.getByRole('button'));
      expect(mockPrimaryClick).toHaveBeenCalledTimes(1);
      
      rerender(
        <CTAButton
          text="Secondary"
          onClick={mockSecondaryClick}
          variant="secondary"
        />
      );
      
      fireEvent.click(screen.getByRole('button'));
      expect(mockSecondaryClick).toHaveBeenCalledTimes(1);
      
      rerender(
        <CTAButton
          text="Outline"
          onClick={mockOutlineClick}
          variant="outline"
        />
      );
      
      fireEvent.click(screen.getByRole('button'));
      expect(mockOutlineClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility - ARIA Labels (Requirement 8.1)', () => {
    it('should have ARIA label matching button text', () => {
      render(
        <CTAButton
          text="Get Started"
          onClick={() => {}}
          variant="primary"
        />
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Get Started');
    });

    it('should have accessible name for screen readers', () => {
      render(
        <CTAButton
          text="Claim Founder's Deal"
          onClick={() => {}}
          variant="primary"
        />
      );
      
      // getByRole with name option uses accessible name
      expect(screen.getByRole('button', { name: "Claim Founder's Deal" })).toBeInTheDocument();
    });

    it('should be keyboard accessible', () => {
      const mockOnClick = jest.fn();
      
      render(
        <CTAButton
          text="Contact Sales"
          onClick={mockOnClick}
          variant="outline"
        />
      );
      
      const button = screen.getByRole('button');
      
      // Simulate keyboard interaction (Enter key)
      button.focus();
      fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' });
      
      // Button should be focusable
      expect(document.activeElement).toBe(button);
    });
  });

  describe('Layout and Display', () => {
    it('should be full width by default', () => {
      render(
        <CTAButton
          text="Full Width"
          onClick={() => {}}
          variant="primary"
        />
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('w-full');
    });

    it('should use large size', () => {
      render(
        <CTAButton
          text="Large Button"
          onClick={() => {}}
          variant="primary"
        />
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('data-size', 'lg');
    });
  });
});
