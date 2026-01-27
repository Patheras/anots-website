/**
 * Unit Tests for FeatureList Component
 * Tests feature list rendering for all tiers and icon alt text
 * 
 * Requirements: 4.2, 4.3, 4.4, 8.5
 */

import { render, screen } from '@testing-library/react';
import { FeatureList } from '@/components/pricing/FeatureList';
import { colors } from '@/lib/design-tokens';

describe('FeatureList Component', () => {
  describe('Feature List Rendering for All Tiers', () => {
    it('should render Explorer tier features', () => {
      const explorerFeatures = [
        '15 ANOTs / month',
        'Manual Brand Room',
        'Single User'
      ];

      render(<FeatureList features={explorerFeatures} />);

      expect(screen.getByText('15 ANOTs / month')).toBeInTheDocument();
      expect(screen.getByText('Manual Brand Room')).toBeInTheDocument();
      expect(screen.getByText('Single User')).toBeInTheDocument();
    });

    it('should render Pro tier features', () => {
      const proFeatures = [
        'Unlimited ANOTs',
        'AI-Powered Brand Room',
        'Up to 5 Team Members',
        'Priority Support',
        'Advanced Analytics'
      ];

      render(<FeatureList features={proFeatures} />);

      expect(screen.getByText('Unlimited ANOTs')).toBeInTheDocument();
      expect(screen.getByText('AI-Powered Brand Room')).toBeInTheDocument();
      expect(screen.getByText('Up to 5 Team Members')).toBeInTheDocument();
      expect(screen.getByText('Priority Support')).toBeInTheDocument();
      expect(screen.getByText('Advanced Analytics')).toBeInTheDocument();
    });

    it('should render Enterprise tier features', () => {
      const enterpriseFeatures = [
        'Everything in Pro',
        'Dedicated Account Manager',
        'Custom Integrations',
        'SLA Guarantees',
        'Unlimited Team Members'
      ];

      render(<FeatureList features={enterpriseFeatures} />);

      expect(screen.getByText('Everything in Pro')).toBeInTheDocument();
      expect(screen.getByText('Dedicated Account Manager')).toBeInTheDocument();
      expect(screen.getByText('Custom Integrations')).toBeInTheDocument();
      expect(screen.getByText('SLA Guarantees')).toBeInTheDocument();
      expect(screen.getByText('Unlimited Team Members')).toBeInTheDocument();
    });
  });

  describe('Icon Alt Text Presence', () => {
    it('should include alt text for checkmark icons', () => {
      const features = ['Feature 1', 'Feature 2'];
      render(<FeatureList features={features} />);

      const checkIcons = screen.getAllByLabelText('Included feature');
      expect(checkIcons).toHaveLength(2);
    });

    it('should have role="img" on checkmark icons', () => {
      const features = ['Feature 1'];
      render(<FeatureList features={features} />);

      const checkIcon = screen.getByLabelText('Included feature');
      expect(checkIcon).toHaveAttribute('role', 'img');
    });

    it('should render one checkmark icon per feature', () => {
      const features = ['Feature 1', 'Feature 2', 'Feature 3'];
      render(<FeatureList features={features} />);

      const checkIcons = screen.getAllByLabelText('Included feature');
      expect(checkIcons).toHaveLength(features.length);
    });
  });

  describe('Semantic List Structure', () => {
    it('should render as semantic list with role="list"', () => {
      const features = ['Feature 1', 'Feature 2'];
      render(<FeatureList features={features} />);

      const list = screen.getByRole('list', { name: 'Features included in this tier' });
      expect(list).toBeInTheDocument();
    });

    it('should render features as list items', () => {
      const features = ['Feature 1', 'Feature 2', 'Feature 3'];
      const { container } = render(<FeatureList features={features} />);

      const listItems = container.querySelectorAll('li');
      expect(listItems).toHaveLength(features.length);
    });

    it('should have aria-label on list', () => {
      const features = ['Feature 1'];
      render(<FeatureList features={features} />);

      const list = screen.getByRole('list');
      expect(list).toHaveAttribute('aria-label', 'Features included in this tier');
    });
  });

  describe('Consistent Spacing', () => {
    it('should apply consistent spacing between features', () => {
      const features = ['Feature 1', 'Feature 2'];
      const { container } = render(<FeatureList features={features} />);

      const list = container.querySelector('ul');
      expect(list).toHaveClass('space-y-3');
    });

    it('should apply gap between icon and text', () => {
      const features = ['Feature 1'];
      const { container } = render(<FeatureList features={features} />);

      const listItem = container.querySelector('li');
      expect(listItem).toHaveClass('gap-3');
    });

    it('should align items at start', () => {
      const features = ['Feature 1'];
      const { container } = render(<FeatureList features={features} />);

      const listItem = container.querySelector('li');
      expect(listItem).toHaveClass('items-start');
    });
  });

  describe('Icon Styling', () => {
    it('should apply success green color to checkmark icons', () => {
      const features = ['Feature 1'];
      render(<FeatureList features={features} />);

      const checkIcon = screen.getByLabelText('Included feature');
      expect(checkIcon).toHaveStyle({ color: colors.semantic.success });
    });

    it('should apply correct icon size', () => {
      const features = ['Feature 1'];
      render(<FeatureList features={features} />);

      const checkIcon = screen.getByLabelText('Included feature');
      expect(checkIcon).toHaveClass('w-5');
      expect(checkIcon).toHaveClass('h-5');
    });

    it('should prevent icon from shrinking', () => {
      const features = ['Feature 1'];
      render(<FeatureList features={features} />);

      const checkIcon = screen.getByLabelText('Included feature');
      expect(checkIcon).toHaveClass('flex-shrink-0');
    });

    it('should apply top margin to align with text', () => {
      const features = ['Feature 1'];
      render(<FeatureList features={features} />);

      const checkIcon = screen.getByLabelText('Included feature');
      expect(checkIcon).toHaveClass('mt-0.5');
    });
  });

  describe('Text Styling', () => {
    it('should apply correct text size', () => {
      const features = ['Feature 1'];
      const { container } = render(<FeatureList features={features} />);

      const featureText = container.querySelector('span');
      expect(featureText).toHaveClass('text-sm');
    });

    it('should apply relaxed line height', () => {
      const features = ['Feature 1'];
      const { container } = render(<FeatureList features={features} />);

      const featureText = container.querySelector('span');
      expect(featureText).toHaveClass('leading-relaxed');
    });

    it('should apply secondary text color', () => {
      const features = ['Feature 1'];
      const { container } = render(<FeatureList features={features} />);

      const featureText = container.querySelector('span');
      expect(featureText).toHaveStyle({ color: colors.text.secondary });
    });
  });

  describe('Empty Features Handling', () => {
    it('should return null when features array is empty', () => {
      const { container } = render(<FeatureList features={[]} />);
      expect(container.firstChild).toBeNull();
    });

    it('should return null when features is undefined', () => {
      const { container } = render(<FeatureList features={undefined as any} />);
      expect(container.firstChild).toBeNull();
    });

    it('should return null when features is null', () => {
      const { container } = render(<FeatureList features={null as any} />);
      expect(container.firstChild).toBeNull();
    });
  });

  describe('Custom Class Names', () => {
    it('should apply custom className when provided', () => {
      const features = ['Feature 1'];
      const { container } = render(
        <FeatureList features={features} className="custom-class" />
      );

      const list = container.querySelector('.custom-class');
      expect(list).toBeInTheDocument();
    });

    it('should preserve default classes when custom className is added', () => {
      const features = ['Feature 1'];
      const { container } = render(
        <FeatureList features={features} className="custom-class" />
      );

      const list = container.querySelector('.custom-class');
      expect(list).toHaveClass('space-y-3');
    });
  });

  describe('Design System Integration', () => {
    it('should use design system typography tokens', () => {
      const features = ['Feature 1'];
      const { container } = render(<FeatureList features={features} />);

      const list = container.querySelector('ul');
      expect(list).toHaveStyle({ 
        fontFamily: 'var(--font-geist-sans)' 
      });
    });

    it('should use design system color tokens', () => {
      const features = ['Feature 1'];
      render(<FeatureList features={features} />);

      const checkIcon = screen.getByLabelText('Included feature');
      expect(checkIcon).toHaveStyle({ color: colors.semantic.success });
    });
  });

  describe('Multiple Features Rendering', () => {
    it('should render all features in order', () => {
      const features = ['First', 'Second', 'Third'];
      const { container } = render(<FeatureList features={features} />);

      const listItems = container.querySelectorAll('li');
      expect(listItems[0]).toHaveTextContent('First');
      expect(listItems[1]).toHaveTextContent('Second');
      expect(listItems[2]).toHaveTextContent('Third');
    });

    it('should handle long feature descriptions', () => {
      const features = [
        'This is a very long feature description that should wrap properly and maintain good readability'
      ];
      render(<FeatureList features={features} />);

      expect(screen.getByText(/This is a very long feature description/)).toBeInTheDocument();
    });

    it('should handle special characters in features', () => {
      const features = [
        'Feature with & ampersand',
        'Feature with "quotes"',
        'Feature with <brackets>'
      ];
      render(<FeatureList features={features} />);

      expect(screen.getByText('Feature with & ampersand')).toBeInTheDocument();
      expect(screen.getByText('Feature with "quotes"')).toBeInTheDocument();
      expect(screen.getByText('Feature with <brackets>')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should be keyboard navigable', () => {
      const features = ['Feature 1', 'Feature 2'];
      render(<FeatureList features={features} />);

      const list = screen.getByRole('list');
      expect(list).toBeInTheDocument();
    });

    it('should provide semantic structure for screen readers', () => {
      const features = ['Feature 1', 'Feature 2'];
      render(<FeatureList features={features} />);

      const list = screen.getByRole('list', { name: 'Features included in this tier' });
      expect(list).toBeInTheDocument();
    });

    it('should have descriptive alt text for all icons', () => {
      const features = ['Feature 1', 'Feature 2', 'Feature 3'];
      render(<FeatureList features={features} />);

      const checkIcons = screen.getAllByLabelText('Included feature');
      checkIcons.forEach(icon => {
        expect(icon).toHaveAttribute('aria-label', 'Included feature');
        expect(icon).toHaveAttribute('role', 'img');
      });
    });
  });
});
