# Pricing Components

This directory contains all components for the Founder's Deal pricing section.

## Component Structure

```
pricing/
├── ScarcityBar.tsx          - Displays limited availability progress bar with pulsing animation
├── PriceDisplay.tsx         - Shows current price with crossed-out anchoring price
├── ModelAccessList.tsx      - Displays multi-agent system model availability
├── CTAButton.tsx            - Primary action button for each tier
├── TierBadge.tsx            - Displays badges (FOUNDER'S DEAL, MOST POPULAR)
├── FeatureList.tsx          - Lists tier features with icons
├── PricingTierCard.tsx      - Individual pricing tier card with hover effects
├── LifetimePromise.tsx      - Static trust signal component
└── PricingSection.tsx       - Root container component
```

## Component Types

- **Client Components** (interactive): ScarcityBar, PricingTierCard, CTAButton, PricingSection
- **Server Components** (static): PriceDisplay, ModelAccessList, TierBadge, FeatureList, LifetimePromise

## Usage

```tsx
import { PricingSection } from '@/components/pricing/PricingSection';

export default function Page() {
  return <PricingSection />;
}
```

## Configuration

Pricing data is configured in `src/config/pricing-config.ts`.
TypeScript interfaces are defined in `src/types/pricing.ts`.

## Testing

- Unit tests: `tests/components/pricing/*.test.tsx`
- Property-based tests: `tests/properties/pricing/*.test.ts`

All property tests use @fast-check/jest with minimum 100 iterations.
