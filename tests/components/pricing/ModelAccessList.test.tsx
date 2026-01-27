/**
 * Unit Tests for ModelAccessList Component
 * Tests rendering of model access for different tiers, locked features, and OLYMPUS TIER label
 * 
 * Requirements: 5.1, 5.2, 5.3, 5.4, 5.5
 */

import { render, screen } from '@testing-library/react';
import { ModelAccessList } from '@/components/pricing/ModelAccessList';
import { ModelAccess } from '@/types/pricing';

describe('ModelAccessList Component', () => {
  describe('Explorer Tier Model Access Rendering', () => {
    const explorerModels: ModelAccess[] = [
      { agent: 'Apollo', model: 'GPT-5' },
      { agent: 'Themis', model: 'Gemini 1.5 Pro' },
      { agent: 'Athena', model: 'DeepSeek R1' },
      { agent: 'Hephaestus', model: 'GPT-5.1-Codex-Mini' },
    ];

    it('should render all four agents for Explorer tier', () => {
      render(<ModelAccessList tier="explorer" models={explorerModels} />);

      expect(screen.getByText('Apollo')).toBeInTheDocument();
      expect(screen.getByText('Themis')).toBeInTheDocument();
      expect(screen.getByText('Athena')).toBeInTheDocument();
      expect(screen.getByText('Hephaestus')).toBeInTheDocument();
    });

    it('should render correct model names for Explorer tier', () => {
      render(<ModelAccessList tier="explorer" models={explorerModels} />);

      expect(screen.getByText('GPT-5')).toBeInTheDocument();
      expect(screen.getByText('Gemini 1.5 Pro')).toBeInTheDocument();
      expect(screen.getByText('DeepSeek R1')).toBeInTheDocument();
      expect(screen.getByText('GPT-5.1-Codex-Mini')).toBeInTheDocument();
    });

    it('should NOT display description for basic Explorer models', () => {
      render(<ModelAccessList tier="explorer" models={explorerModels} />);

      // No descriptions for Explorer tier models
      const descriptions = screen.queryByText('Basic Automation');
      expect(descriptions).not.toBeInTheDocument();
    });

    it('should NOT display lock icon for any Explorer tier models', () => {
      render(<ModelAccessList tier="explorer" models={explorerModels} />);

      expect(screen.queryByLabelText('Locked feature')).not.toBeInTheDocument();
    });

    it('should NOT apply reduced opacity to any Explorer tier models', () => {
      const { container } = render(
        <ModelAccessList tier="explorer" models={explorerModels} />
      );

      const listItems = container.querySelectorAll('li');
      listItems.forEach((item) => {
        expect(item).not.toHaveClass('opacity-50');
      });
    });

    it('should NOT display OLYMPUS TIER label for Explorer tier', () => {
      render(<ModelAccessList tier="explorer" models={explorerModels} />);

      expect(screen.queryByText('OLYMPUS TIER')).not.toBeInTheDocument();
    });
  });

  describe('Pro Tier OLYMPUS TIER Label', () => {
    const proModels: ModelAccess[] = [
      { agent: 'Apollo', model: 'GPT-5.2', description: 'Creative Director' },
      { agent: 'Themis', model: 'Gemini 2.5 Pro', description: 'Marketing Director' },
      { agent: 'Athena', model: 'DeepSeek R1', description: 'Strategic Synthesizer' },
      { agent: 'Hephaestus', model: 'GPT-5.1-Codex-Mini', description: 'Workflow Builder' },
    ];

    it('should display OLYMPUS TIER label for Pro tier', () => {
      render(<ModelAccessList tier="pro" models={proModels} />);

      expect(screen.getByText('OLYMPUS TIER')).toBeInTheDocument();
    });

    it('should render all four agents for Pro tier', () => {
      render(<ModelAccessList tier="pro" models={proModels} />);

      expect(screen.getByText('Apollo')).toBeInTheDocument();
      expect(screen.getByText('Themis')).toBeInTheDocument();
      expect(screen.getByText('Athena')).toBeInTheDocument();
      expect(screen.getByText('Hephaestus')).toBeInTheDocument();
    });

    it('should render correct model names for Pro tier', () => {
      render(<ModelAccessList tier="pro" models={proModels} />);

      expect(screen.getByText('GPT-5.2')).toBeInTheDocument();
      expect(screen.getByText('Gemini 2.5 Pro')).toBeInTheDocument();
      expect(screen.getByText('DeepSeek R1')).toBeInTheDocument();
      expect(screen.getByText('GPT-5.1-Codex-Mini')).toBeInTheDocument();
    });

    it('should render model descriptions for Pro tier', () => {
      render(<ModelAccessList tier="pro" models={proModels} />);

      expect(screen.getByText('Creative Director')).toBeInTheDocument();
      expect(screen.getByText('Marketing Director')).toBeInTheDocument();
      expect(screen.getByText('Strategic Synthesizer')).toBeInTheDocument();
      expect(screen.getByText('Workflow Builder')).toBeInTheDocument();
    });

    it('should NOT display lock icon for any Pro tier models', () => {
      render(<ModelAccessList tier="pro" models={proModels} />);

      expect(screen.queryByLabelText('Locked feature')).not.toBeInTheDocument();
    });

    it('should NOT apply reduced opacity to any Pro tier models', () => {
      const { container } = render(
        <ModelAccessList tier="pro" models={proModels} />
      );

      const listItems = container.querySelectorAll('li');
      listItems.forEach((item) => {
        expect(item).not.toHaveClass('opacity-50');
      });
    });
  });

  describe('Enterprise Tier Custom Options', () => {
    const enterpriseModels: ModelAccess[] = [
      { agent: 'Custom', model: 'Custom + On-Premise Options' },
    ];

    it('should render Custom agent for Enterprise tier', () => {
      render(<ModelAccessList tier="enterprise" models={enterpriseModels} />);

      expect(screen.getByText('Custom')).toBeInTheDocument();
    });

    it('should render custom options text for Enterprise tier', () => {
      render(<ModelAccessList tier="enterprise" models={enterpriseModels} />);

      expect(screen.getByText('Custom + On-Premise Options')).toBeInTheDocument();
    });

    it('should NOT display OLYMPUS TIER label for Enterprise tier', () => {
      render(<ModelAccessList tier="enterprise" models={enterpriseModels} />);

      expect(screen.queryByText('OLYMPUS TIER')).not.toBeInTheDocument();
    });

    it('should NOT display lock icon for Enterprise tier', () => {
      render(<ModelAccessList tier="enterprise" models={enterpriseModels} />);

      expect(screen.queryByLabelText('Locked feature')).not.toBeInTheDocument();
    });
  });

  describe('Locked Feature Styling', () => {
    const modelsWithLocked: ModelAccess[] = [
      { agent: 'Apollo', model: 'GPT-5' },
      { agent: 'Hephaestus', model: 'Locked', locked: true },
    ];

    it('should display lock icon for locked features', () => {
      render(<ModelAccessList tier="explorer" models={modelsWithLocked} />);

      const lockIcon = screen.getByLabelText('Locked feature');
      expect(lockIcon).toBeInTheDocument();
    });

    it('should apply gray text color to locked agent name', () => {
      render(<ModelAccessList tier="explorer" models={modelsWithLocked} />);

      const hephaestusText = screen.getByText('Hephaestus');
      expect(hephaestusText).toHaveClass('text-[#71717A]');
    });

    it('should apply gray text color to locked model name', () => {
      render(<ModelAccessList tier="explorer" models={modelsWithLocked} />);

      const lockedText = screen.getByText('Locked');
      expect(lockedText).toHaveClass('text-[#52525B]');
    });

    it('should NOT display description for locked features', () => {
      const modelsWithLockedDescription: ModelAccess[] = [
        { agent: 'Hephaestus', model: 'Locked', description: 'This should not appear', locked: true },
      ];

      render(<ModelAccessList tier="explorer" models={modelsWithLockedDescription} />);

      expect(screen.queryByText('This should not appear')).not.toBeInTheDocument();
    });
  });

  describe('Semantic List Structure', () => {
    const models: ModelAccess[] = [
      { agent: 'Apollo', model: 'GPT-5' },
      { agent: 'Themis', model: 'Gemini 1.5 Pro' },
    ];

    it('should render as a semantic list with role="list"', () => {
      const { container } = render(
        <ModelAccessList tier="explorer" models={models} />
      );

      const list = container.querySelector('ul[role="list"]');
      expect(list).toBeInTheDocument();
    });

    it('should have aria-label for the list', () => {
      render(<ModelAccessList tier="explorer" models={models} />);

      const list = screen.getByRole('list', { name: 'Model access for this tier' });
      expect(list).toBeInTheDocument();
    });

    it('should render each model as a list item', () => {
      const { container } = render(
        <ModelAccessList tier="explorer" models={models} />
      );

      const listItems = container.querySelectorAll('li');
      expect(listItems.length).toBe(2);
    });
  });

  describe('Empty Models Array', () => {
    it('should render empty list when models array is empty', () => {
      const { container } = render(
        <ModelAccessList tier="explorer" models={[]} />
      );

      const listItems = container.querySelectorAll('li');
      expect(listItems.length).toBe(0);
    });

    it('should still render OLYMPUS TIER label for Pro tier with empty models', () => {
      render(<ModelAccessList tier="pro" models={[]} />);

      expect(screen.getByText('OLYMPUS TIER')).toBeInTheDocument();
    });
  });

  describe('Model Descriptions', () => {
    it('should display descriptions when provided and not locked', () => {
      const modelsWithDescriptions: ModelAccess[] = [
        { agent: 'Apollo', model: 'GPT-5.2', description: 'Creative Director' },
      ];

      render(<ModelAccessList tier="pro" models={modelsWithDescriptions} />);

      expect(screen.getByText('Creative Director')).toBeInTheDocument();
    });

    it('should NOT display descriptions when not provided', () => {
      const modelsWithoutDescriptions: ModelAccess[] = [
        { agent: 'Apollo', model: 'GPT-5' },
      ];

      const { container } = render(
        <ModelAccessList tier="explorer" models={modelsWithoutDescriptions} />
      );

      // Check that there are no description paragraphs
      const descriptions = container.querySelectorAll('p.text-xs');
      expect(descriptions.length).toBe(0);
    });

    it('should apply correct styling to descriptions', () => {
      const modelsWithDescriptions: ModelAccess[] = [
        { agent: 'Apollo', model: 'GPT-5.2', description: 'Creative Director' },
      ];

      render(<ModelAccessList tier="pro" models={modelsWithDescriptions} />);

      const description = screen.getByText('Creative Director');
      expect(description).toHaveClass('text-xs');
      expect(description).toHaveClass('text-[#71717A]');
    });
  });

  describe('OLYMPUS TIER Label Styling', () => {
    const proModels: ModelAccess[] = [
      { agent: 'Apollo', model: 'GPT-5.2' },
    ];

    it('should apply gradient background to OLYMPUS TIER label', () => {
      const { container } = render(
        <ModelAccessList tier="pro" models={proModels} />
      );

      const label = screen.getByText('OLYMPUS TIER').parentElement;
      expect(label).toHaveClass('bg-gradient-to-r');
      expect(label).toHaveClass('from-[#3B82F6]/20');
      expect(label).toHaveClass('to-[#8B5CF6]/20');
    });

    it('should apply border to OLYMPUS TIER label', () => {
      const { container } = render(
        <ModelAccessList tier="pro" models={proModels} />
      );

      const label = screen.getByText('OLYMPUS TIER').parentElement;
      expect(label).toHaveClass('border');
      expect(label).toHaveClass('border-[#3B82F6]/30');
    });

    it('should apply uppercase and tracking to OLYMPUS TIER text', () => {
      render(<ModelAccessList tier="pro" models={proModels} />);

      const text = screen.getByText('OLYMPUS TIER');
      expect(text).toHaveClass('uppercase');
      expect(text).toHaveClass('tracking-wider');
    });
  });

  describe('Agent Name Styling', () => {
    const models: ModelAccess[] = [
      { agent: 'Apollo', model: 'GPT-5' },
    ];

    it('should apply semibold font weight to agent names', () => {
      render(<ModelAccessList tier="explorer" models={models} />);

      const agentName = screen.getByText('Apollo');
      expect(agentName).toHaveClass('font-semibold');
    });

    it('should apply correct text size to agent names', () => {
      render(<ModelAccessList tier="explorer" models={models} />);

      const agentName = screen.getByText('Apollo');
      expect(agentName).toHaveClass('text-sm');
    });

    it('should apply light color to unlocked agent names', () => {
      render(<ModelAccessList tier="explorer" models={models} />);

      const agentName = screen.getByText('Apollo');
      expect(agentName).toHaveClass('text-[#FAFAFA]');
    });
  });

  describe('Model Name Styling', () => {
    const models: ModelAccess[] = [
      { agent: 'Apollo', model: 'GPT-5' },
    ];

    it('should apply correct text size to model names', () => {
      render(<ModelAccessList tier="explorer" models={models} />);

      const modelName = screen.getByText('GPT-5');
      expect(modelName).toHaveClass('text-sm');
    });

    it('should apply gray color to unlocked model names', () => {
      render(<ModelAccessList tier="explorer" models={models} />);

      const modelName = screen.getByText('GPT-5');
      expect(modelName).toHaveClass('text-[#A1A1AA]');
    });
  });

  describe('Responsive Layout', () => {
    const models: ModelAccess[] = [
      { agent: 'Apollo', model: 'GPT-5', description: 'Latest model' },
    ];

    it('should apply flex layout to model items', () => {
      const { container } = render(
        <ModelAccessList tier="explorer" models={models} />
      );

      const listItem = container.querySelector('li');
      expect(listItem).toHaveClass('flex');
      expect(listItem).toHaveClass('items-start');
    });

    it('should apply flex-wrap to agent/model container', () => {
      const { container } = render(
        <ModelAccessList tier="explorer" models={models} />
      );

      const agentModelContainer = container.querySelector('.flex.items-baseline');
      expect(agentModelContainer).toHaveClass('flex-wrap');
    });
  });
});
