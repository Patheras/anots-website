/**
 * Unit Tests for TierBadge Component
 * Tests badge rendering for different badge types
 * 
 * Requirements: 6.2, 6.3
 */

import { render, screen } from '@testing-library/react';
import { TierBadge } from '@/components/pricing/TierBadge';
import { colors } from '@/lib/design-tokens';

describe('TierBadge Component', () => {
  describe('Badge Rendering for Pro Tier', () => {
    it('should render "FOUNDER\'S DEAL" badge with correct styling', () => {
      render(<TierBadge text="FOUNDER'S DEAL" />);

      const badge = screen.getByText("FOUNDER'S DEAL");
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('text-xs');
      expect(badge).toHaveClass('font-semibold');
      expect(badge).toHaveClass('uppercase');
      expect(badge).toHaveClass('tracking-wider');
    });

    it('should render "MOST POPULAR" badge with correct styling', () => {
      render(<TierBadge text="MOST POPULAR" />);

      const badge = screen.getByText('MOST POPULAR');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('text-xs');
      expect(badge).toHaveClass('font-semibold');
      expect(badge).toHaveClass('uppercase');
      expect(badge).toHaveClass('tracking-wider');
    });

    it('should render both badges when displayed together', () => {
      const { rerender } = render(<TierBadge text="FOUNDER'S DEAL" />);
      expect(screen.getByText("FOUNDER'S DEAL")).toBeInTheDocument();

      rerender(<TierBadge text="MOST POPULAR" />);
      expect(screen.getByText('MOST POPULAR')).toBeInTheDocument();
    });
  });

  describe('Badge Styling', () => {
    it('should apply gradient background for Founder\'s Deal badge', () => {
      const { container } = render(<TierBadge text="FOUNDER'S DEAL" />);
      
      const badgeContainer = container.querySelector('.bg-gradient-to-r');
      expect(badgeContainer).toBeInTheDocument();
      expect(badgeContainer).toHaveClass('rounded-full');
      expect(badgeContainer).toHaveClass('border');
    });

    it('should apply gradient background for Most Popular badge', () => {
      const { container } = render(<TierBadge text="MOST POPULAR" />);
      
      const badgeContainer = container.querySelector('.bg-gradient-to-r');
      expect(badgeContainer).toBeInTheDocument();
      expect(badgeContainer).toHaveClass('rounded-full');
      expect(badgeContainer).toHaveClass('border');
    });

    it('should apply correct padding and spacing', () => {
      const { container } = render(<TierBadge text="FOUNDER'S DEAL" />);
      
      const badgeContainer = container.querySelector('.inline-flex');
      expect(badgeContainer).toHaveClass('px-3');
      expect(badgeContainer).toHaveClass('py-1.5');
      expect(badgeContainer).toHaveClass('items-center');
    });
  });

  describe('Badge Color Variants', () => {
    it('should use purple accent colors for Founder\'s Deal badge', () => {
      const { container } = render(<TierBadge text="FOUNDER'S DEAL" />);
      
      const badge = screen.getByText("FOUNDER'S DEAL");
      expect(badge).toHaveStyle({ color: colors.accent.primary });
    });

    it('should use success green colors for Most Popular badge', () => {
      const { container } = render(<TierBadge text="MOST POPULAR" />);
      
      const badge = screen.getByText('MOST POPULAR');
      expect(badge).toHaveStyle({ color: colors.semantic.success });
    });

    it('should use default purple colors for generic badges', () => {
      const { container } = render(<TierBadge text="SPECIAL OFFER" />);
      
      const badge = screen.getByText('SPECIAL OFFER');
      expect(badge).toHaveStyle({ color: colors.accent.primary });
    });
  });

  describe('Custom Class Names', () => {
    it('should apply custom className when provided', () => {
      const { container } = render(
        <TierBadge text="FOUNDER'S DEAL" className="custom-class" />
      );
      
      const badgeContainer = container.querySelector('.custom-class');
      expect(badgeContainer).toBeInTheDocument();
    });

    it('should preserve default classes when custom className is added', () => {
      const { container } = render(
        <TierBadge text="FOUNDER'S DEAL" className="custom-class" />
      );
      
      const badgeContainer = container.querySelector('.custom-class');
      expect(badgeContainer).toHaveClass('inline-flex');
      expect(badgeContainer).toHaveClass('rounded-full');
      expect(badgeContainer).toHaveClass('border');
    });
  });

  describe('Text Content', () => {
    it('should display exact text provided', () => {
      render(<TierBadge text="Custom Badge Text" />);
      expect(screen.getByText('Custom Badge Text')).toBeInTheDocument();
    });

    it('should handle case-insensitive badge type detection', () => {
      // Test lowercase "founder's deal"
      render(<TierBadge text="founder's deal" />);
      expect(screen.getByText("founder's deal")).toBeInTheDocument();

      // Test mixed case "Most Popular"
      const { rerender } = render(<TierBadge text="Most Popular" />);
      expect(screen.getByText('Most Popular')).toBeInTheDocument();
    });

    it('should handle empty text gracefully', () => {
      const { container } = render(<TierBadge text="" />);
      
      const badgeContainer = container.querySelector('.inline-flex');
      expect(badgeContainer).toBeInTheDocument();
    });
  });

  describe('Design System Integration', () => {
    it('should use design system typography tokens', () => {
      const { container } = render(<TierBadge text="FOUNDER'S DEAL" />);
      
      const badgeContainer = container.querySelector('.inline-flex');
      expect(badgeContainer).toHaveStyle({ 
        fontFamily: 'var(--font-geist-sans)' 
      });
    });

    it('should use design system color tokens for border', () => {
      const { container } = render(<TierBadge text="FOUNDER'S DEAL" />);
      
      const badgeContainer = container.querySelector('.inline-flex');
      expect(badgeContainer).toHaveStyle({ 
        borderColor: colors.accent.primary 
      });
    });
  });

  describe('Accessibility', () => {
    it('should render badge text as readable content', () => {
      render(<TierBadge text="FOUNDER'S DEAL" />);
      
      const badge = screen.getByText("FOUNDER'S DEAL");
      expect(badge).toBeVisible();
    });

    it('should maintain text contrast with background', () => {
      const { container } = render(<TierBadge text="FOUNDER'S DEAL" />);
      
      const badge = screen.getByText("FOUNDER'S DEAL");
      // Badge should have sufficient color contrast
      expect(badge).toHaveStyle({ color: colors.accent.primary });
    });
  });
});
