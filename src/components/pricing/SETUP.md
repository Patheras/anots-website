# Founder's Deal Pricing - Project Setup

This document describes the project structure and configuration for the Founder's Deal pricing redesign.

## Directory Structure

```
src/
├── components/
│   └── pricing/                    # Pricing components
│       ├── ScarcityBar.tsx
│       ├── PriceDisplay.tsx
│       ├── ModelAccessList.tsx
│       ├── CTAButton.tsx
│       ├── TierBadge.tsx
│       ├── FeatureList.tsx
│       ├── PricingTierCard.tsx
│       ├── LifetimePromise.tsx
│       ├── PricingSection.tsx
│       └── README.md
├── types/
│   └── pricing.ts                  # TypeScript interfaces
├── config/
│   └── pricing-config.ts           # Pricing data configuration
└── lib/
    └── design-tokens.ts            # Design system tokens

tests/
├── components/
│   └── pricing/                    # Unit tests
│       └── *.test.tsx
├── properties/
│   └── pricing/                    # Property-based tests
│       └── *.test.ts
└── helpers/
    └── pricing-arbitraries.ts      # Fast-check generators
```

## Configuration Files

### TypeScript Interfaces (`src/types/pricing.ts`)

Defines all TypeScript interfaces for:
- `ModelAccess`: AI agent model configuration
- `PricingTier`: Complete tier configuration
- `PricingConfiguration`: Full pricing setup
- Component props interfaces for all pricing components

### Pricing Configuration (`src/config/pricing-config.ts`)

Static configuration defining:
- Scarcity bar settings (74/100 spots claimed)
- Three pricing tiers (Explorer, Pro, Enterprise)
- Model access per tier
- Features per tier
- CTA actions
- Lifetime grandfathering promise

Helper functions:
- `getTierById(tierId)`: Get specific tier
- `getHighlightedTier()`: Get Pro tier

### Design Tokens (`src/lib/design-tokens.ts`)

Existing design system with:
- Colors (background, border, text, accent, semantic)
- Typography (font family, sizes, weights, line heights)
- Spacing scale
- Animation durations and easing
- Responsive breakpoints

## Property-Based Testing Setup

### Library: @fast-check/jest

Installed as dev dependency for property-based testing.

### Configuration

Property tests use `it.prop()` from `@fast-check/jest`:

```typescript
import { it } from '@fast-check/jest';
import * as fc from 'fast-check';

it.prop([fc.integer()], { numRuns: 100 })(
  'property description',
  (value) => {
    // Test property
  }
);
```

### Custom Arbitraries (`tests/helpers/pricing-arbitraries.ts`)

Provides generators for:
- `scarcityArbitrary()`: Claimed/total spot combinations
- `priceArbitrary()`: Price strings
- `modelAccessArbitrary()`: Model access configurations
- `tierIdArbitrary()`: Tier IDs
- `featuresArbitrary()`: Feature lists
- `pricingTierArbitrary()`: Complete tier configurations
- `fontSizeArbitrary()`: Font sizes
- `touchTargetArbitrary()`: Touch target dimensions
- `colorArbitrary()`: Color values

## Testing Strategy

### Unit Tests
- Located in `tests/components/pricing/`
- Test specific component behavior
- Test edge cases and error handling
- Use `@testing-library/react` for rendering

### Property-Based Tests
- Located in `tests/properties/pricing/`
- Test universal properties across all inputs
- Minimum 100 iterations per test
- Validate correctness properties from design document

### Required Properties (from design.md)

1. **Scarcity Bar Fill Percentage**: `(claimed / total) * 100`
2. **Anchoring Price Strikethrough**: Strikethrough styling applied
3. **Minimum Font Size**: ≥ 14px across all viewports
4. **Touch Target Size**: ≥ 44x44px on mobile
5. **Interactive Element Accessibility**: ARIA labels, keyboard nav, focus indicators
6. **Color Contrast**: ≥ 4.5:1 for normal text, ≥ 3:1 for large text
7. **CTA Button Presence**: Exactly one per tier card
8. **CTA Button Click Handler**: Invokes correct action
9. **Hover Transform**: Applied on hover state

## Running Tests

```bash
# Run all tests
npm test

# Run specific test file
npm test -- path/to/test.test.ts

# Run with coverage
npm test:coverage

# Run in watch mode
npm test:watch
```

## Next Steps

1. Implement ScarcityBar component (Task 2)
2. Implement PriceDisplay component (Task 3)
3. Implement ModelAccessList component (Task 4)
4. Implement CTAButton component (Task 5)
5. Continue with remaining components per task list

## Requirements Mapping

This setup satisfies:
- **Requirement 4.1**: Pricing tier structure (TypeScript interfaces)
- **Requirement 10.1**: Design system integration (imports from design-tokens.ts)
- **Requirement 10.2**: Spacing tokens (available in design-tokens.ts)
- **Requirement 10.3**: Typography tokens (available in design-tokens.ts)

## Notes

- All components will use Tailwind CSS for styling
- Server Components for static content (PriceDisplay, ModelAccessList, etc.)
- Client Components for interactive elements (ScarcityBar, CTAButton, etc.)
- Design tokens imported from `@/lib/design-tokens`
- Configuration imported from `@/config/pricing-config`
- Types imported from `@/types/pricing`
