# Design Document: Founder's Deal Pricing Redesign

## Overview

The Founder's Deal pricing redesign transforms the ANOTS landing page pricing section from a commodity tool presentation to a high-value enterprise OS positioning. This design implements psychological triggers (scarcity, anchoring, social proof) while maintaining accessibility and responsive design standards.

The implementation uses Next.js with React Server Components where appropriate, Tailwind CSS for styling, and integrates with the existing design system. The component architecture prioritizes performance, accessibility, and conversion optimization.

**Key Design Principles:**
- **Scarcity-Driven Urgency**: Limited availability creates FOMO (Fear of Missing Out)
- **Value Anchoring**: Original prices establish reference points for perceived savings
- **Visual Hierarchy**: Pro tier receives maximum visual emphasis as the target conversion point
- **Technical Credibility**: Multi-agent system details establish product sophistication
- **Trust Building**: Lifetime grandfathering promise reduces purchase risk

## Architecture

### Component Structure

```
PricingSection (Client Component)
├── ScarcityBar (Client Component - animation)
├── LifetimePromise (Server Component)
├── PricingTierGrid (Server Component)
│   ├── PricingTierCard (Client Component - hover effects)
│   │   ├── TierBadge (Server Component)
│   │   ├── PriceDisplay (Server Component)
│   │   ├── ModelAccessList (Server Component)
│   │   ├── FeatureList (Server Component)
│   │   └── CTAButton (Client Component - interactions)
│   ├── PricingTierCard (Pro - highlighted)
│   └── PricingTierCard (Enterprise)
└── TrustSignals (Server Component)
```

**Component Responsibilities:**

- **PricingSection**: Root container, manages layout and responsive behavior
- **ScarcityBar**: Displays progress bar with pulsing animation, manages claimed spots state
- **LifetimePromise**: Static trust signal component
- **PricingTierGrid**: Responsive grid layout for tier cards
- **PricingTierCard**: Individual tier presentation with hover effects and visual emphasis
- **TierBadge**: Displays "FOUNDER'S DEAL" and "MOST POPULAR" badges
- **PriceDisplay**: Shows current and anchoring prices with strikethrough
- **ModelAccessList**: Displays multi-agent system model availability
- **FeatureList**: Lists tier features with icons
- **CTAButton**: Primary action button with click handling
- **TrustSignals**: Additional trust elements (testimonials, guarantees)

### Data Flow

```
PricingData (Static Configuration)
  ↓
PricingSection (Hydration)
  ↓
├── ScarcityBar ← Claimed Spots (API/Static)
├── PricingTierCard[] ← Tier Configurations
└── CTAButton → Click Handler → Signup Flow / Contact Form
```

**Data Sources:**
- Pricing tier configurations: Static TypeScript constants
- Claimed spots count: Can be static (74/100) or fetched from API
- Design tokens: Imported from design-tokens.ts

### Responsive Breakpoints

- **Mobile**: < 768px (vertical stack, full-width cards)
- **Tablet**: 768px - 1024px (2-column grid, Pro tier spans full width)
- **Desktop**: ≥ 1024px (3-column horizontal layout)

## Components and Interfaces

### PricingSection Component

**Purpose**: Root container for the entire pricing section

**Props Interface**:
```typescript
interface PricingSectionProps {
  claimedSpots?: number; // Default: 74
  totalSpots?: number;   // Default: 100
  className?: string;
}
```

**Behavior**:
- Renders all child components in proper hierarchy
- Applies responsive layout classes
- Manages section-level accessibility attributes

### ScarcityBar Component

**Purpose**: Displays limited availability progress bar with pulsing animation

**Props Interface**:
```typescript
interface ScarcityBarProps {
  claimed: number;
  total: number;
  className?: string;
}
```

**State**:
```typescript
// No internal state needed - controlled by parent
```

**Behavior**:
- Calculates fill percentage: `(claimed / total) * 100`
- Applies pulsing animation via CSS keyframes
- Renders progress bar with filled and unfilled sections
- Displays text: "Founder's Deal: {claimed} / {total} Spots Claimed"

**Styling Requirements**:
- Progress bar height: 8px
- Pulse animation: 2s duration, infinite loop
- Fill color: Gradient from primary to accent
- Background: Subtle gray with transparency

### PriceDisplay Component

**Purpose**: Shows current price with crossed-out anchoring price

**Props Interface**:
```typescript
interface PriceDisplayProps {
  currentPrice: string;      // e.g., "$29"
  anchoringPrice?: string;   // e.g., "$49"
  interval: string;          // e.g., "month"
  isCustom?: boolean;        // For Enterprise tier
}
```

**Rendering Logic**:
```
IF isCustom:
  Display "Custom Pricing"
ELSE:
  Display currentPrice + "/" + interval
  IF anchoringPrice exists:
    Display anchoringPrice with strikethrough
```

### ModelAccessList Component

**Purpose**: Displays multi-agent system model availability for each tier

**Props Interface**:
```typescript
interface ModelAccessListProps {
  tier: 'explorer' | 'pro' | 'enterprise';
  models: ModelAccess[];
}

interface ModelAccess {
  agent: 'Apollo' | 'Themis' | 'Athena' | 'Hephaestus';
  model: string;
  description?: string;
  locked?: boolean;
}
```

**Tier-Specific Configurations**:

**Explorer Tier**:
```typescript
[
  { agent: 'Apollo', model: 'GPT-4o' },
  { agent: 'Themis', model: 'Gemini 2.0 Flash' },
  { agent: 'Athena', model: 'Basic Logic Only' },
  { agent: 'Hephaestus', model: 'Locked', locked: true }
]
```

**Pro Tier (OLYMPUS TIER)**:
```typescript
[
  { agent: 'Apollo', model: 'GPT-5.2', description: 'Latest Creative Model' },
  { agent: 'Themis', model: 'Gemini 2.5 Pro', description: '2M Context Window' },
  { agent: 'Athena', model: 'DeepSeek R1', description: 'Advanced Reasoning' },
  { agent: 'Hephaestus', model: 'GPT-5.1-Codex-Mini', description: 'Full Automation' }
]
```

**Enterprise Tier**:
```typescript
[
  { agent: 'Custom', model: 'Custom + On-Premise Options' }
]
```

**Rendering**:
- Display agent name with icon
- Show model name
- If locked, display lock icon and gray out
- If Pro tier, add "OLYMPUS TIER" label above list

### PricingTierCard Component

**Purpose**: Individual pricing tier card with hover effects and visual emphasis

**Props Interface**:
```typescript
interface PricingTierCardProps {
  tier: PricingTier;
  highlighted?: boolean;  // True for Pro tier
  className?: string;
}

interface PricingTier {
  id: string;
  name: string;
  price: string;
  anchoringPrice?: string;
  interval: string;
  persona: string;
  badges?: string[];
  modelAccess: ModelAccess[];
  features: string[];
  ctaText: string;
  ctaAction: () => void;
}
```

**Visual States**:
- **Default**: White background, subtle border, shadow on hover
- **Highlighted (Pro)**: Glowing border, elevated z-index, scale 1.05, badges visible
- **Hover**: Lift effect (translateY -4px), enhanced shadow

**Styling for Pro Tier**:
```css
/* Glowing border effect */
border: 2px solid transparent;
background: linear-gradient(white, white) padding-box,
            linear-gradient(135deg, #primary, #accent) border-box;
box-shadow: 0 0 20px rgba(primary, 0.3);
animation: glow-pulse 3s ease-in-out infinite;
```

### CTAButton Component

**Purpose**: Primary action button for each tier

**Props Interface**:
```typescript
interface CTAButtonProps {
  text: string;
  onClick: () => void;
  variant: 'primary' | 'secondary' | 'outline';
  className?: string;
}
```

**Variants**:
- **Primary** (Pro tier): Solid background, high contrast, prominent
- **Secondary** (Explorer tier): Outlined, medium emphasis
- **Outline** (Enterprise tier): Minimal styling, professional

**Accessibility**:
- Minimum 44x44px touch target
- Clear focus indicator
- ARIA label if text is ambiguous

## Data Models

### PricingConfiguration

```typescript
interface PricingConfiguration {
  scarcity: {
    claimed: number;
    total: number;
  };
  tiers: PricingTier[];
  lifetimePromise: string;
}

const PRICING_CONFIG: PricingConfiguration = {
  scarcity: {
    claimed: 74,
    total: 100
  },
  tiers: [
    {
      id: 'explorer',
      name: 'Explorer',
      price: '$29',
      anchoringPrice: '$49',
      interval: 'month',
      persona: 'Solopreneur / Hobbyist',
      badges: [],
      modelAccess: [
        { agent: 'Apollo', model: 'GPT-4o' },
        { agent: 'Themis', model: 'Gemini 2.0 Flash' },
        { agent: 'Athena', model: 'Basic Logic Only' },
        { agent: 'Hephaestus', model: 'Locked', locked: true }
      ],
      features: [
        '15 ANOTs / month',
        'Manual Brand Room',
        'Single User'
      ],
      ctaText: 'Get Started',
      ctaAction: () => { /* Navigate to signup */ }
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$49',
      anchoringPrice: '$99',
      interval: 'month',
      persona: 'Agencies & Power Users',
      badges: ['FOUNDER\'S DEAL', 'MOST POPULAR'],
      modelAccess: [
        { agent: 'Apollo', model: 'GPT-5.2', description: 'Latest Creative Model' },
        { agent: 'Themis', model: 'Gemini 2.5 Pro', description: '2M Context Window' },
        { agent: 'Athena', model: 'DeepSeek R1', description: 'Advanced Reasoning' },
        { agent: 'Hephaestus', model: 'GPT-5.1-Codex-Mini', description: 'Full Automation' }
      ],
      features: [
        'Unlimited ANOTs',
        'AI-Powered Brand Room',
        'Up to 5 Team Members',
        'Priority Support',
        'Advanced Analytics'
      ],
      ctaText: 'Claim Founder\'s Deal',
      ctaAction: () => { /* Navigate to signup with Pro tier */ }
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      interval: '',
      persona: 'Large Agencies / Enterprises',
      badges: [],
      modelAccess: [
        { agent: 'Custom', model: 'Custom + On-Premise Options' }
      ],
      features: [
        'Everything in Pro',
        'Dedicated Account Manager',
        'Custom Integrations',
        'SLA Guarantees',
        'Unlimited Team Members'
      ],
      ctaText: 'Contact Sales',
      ctaAction: () => { /* Open contact form */ }
    }
  ],
  lifetimePromise: 'Lock in this price forever. Lifetime Grandfathering.'
};
```

### Design Tokens Integration

```typescript
// Import from existing design-tokens.ts
import { colors, spacing, typography, shadows } from '@/design-tokens';

// Usage in components
const styles = {
  primary: colors.primary,
  spacing: spacing.lg,
  heading: typography.heading2,
  cardShadow: shadows.elevated
};
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property 1: Scarcity Bar Fill Percentage Calculation

*For any* claimed spots value and total spots value, the Scarcity_Bar fill percentage should equal (claimed / total) * 100.

**Validates: Requirements 1.2**

### Property 2: Anchoring Price Strikethrough Styling

*For any* pricing tier with an anchoring price, the rendered anchoring price should include strikethrough styling and reduced opacity.

**Validates: Requirements 2.3**

### Property 3: Minimum Font Size Compliance

*For any* text element in the Pricing_Section, the computed font size should be at least 14px across all viewport sizes.

**Validates: Requirements 7.3**

### Property 4: Touch Target Size Compliance

*For any* interactive element (button, link) in the Pricing_Section, the element dimensions should be at least 44x44px on mobile viewports.

**Validates: Requirements 7.4**

### Property 5: Interactive Element Accessibility

*For any* interactive element in the Pricing_Section, the element should have an appropriate ARIA label or accessible name, be keyboard navigable, display a visible focus indicator when focused, and include alternative text if it contains icons.

**Validates: Requirements 8.1, 8.3, 8.4, 8.5**

### Property 6: Color Contrast Compliance

*For any* text element in the Pricing_Section, the contrast ratio between text and background should be at least 4.5:1 for normal text and 3:1 for large text (18px+ or 14px+ bold).

**Validates: Requirements 8.2**

### Property 7: CTA Button Presence

*For any* pricing tier card, the card should contain exactly one primary CTA button.

**Validates: Requirements 9.1**

### Property 8: CTA Button Click Handler

*For any* CTA button in the Pricing_Section, clicking the button should invoke its associated action handler with the correct tier identifier.

**Validates: Requirements 9.5**

### Property 9: Hover Transform Application

*For any* pricing tier card, applying hover state should add a transform effect (translateY or scale).

**Validates: Requirements 11.3**

## Error Handling

### Invalid Props Handling

**Scarcity Bar**:
- If `claimed > total`: Clamp fill percentage to 100%
- If `claimed < 0`: Default to 0
- If `total <= 0`: Default to 100 and log warning

**Price Display**:
- If `currentPrice` is empty: Display "Contact Sales"
- If `interval` is empty: Omit the "/" separator
- If `anchoringPrice` equals `currentPrice`: Do not display anchoring price

**Model Access List**:
- If `models` array is empty: Display "Contact Sales for Details"
- If `agent` name is invalid: Log warning and skip entry
- If `locked` is true: Apply disabled styling and lock icon

### Accessibility Fallbacks

- If ARIA labels are missing: Generate from visible text content
- If focus indicators are not visible: Apply default browser focus ring
- If contrast ratio fails: Log warning in development mode
- If touch targets are too small: Add padding to meet minimum size

### Animation Fallbacks

- If `prefers-reduced-motion` is enabled: Disable all animations
- If CSS animations are not supported: Gracefully degrade to static styles
- If GPU acceleration is unavailable: Use CPU-based transforms

### Responsive Fallbacks

- If viewport width cannot be determined: Default to mobile layout
- If CSS Grid is not supported: Fall back to flexbox layout
- If custom properties are not supported: Use hardcoded fallback values

## Testing Strategy

### Dual Testing Approach

This feature requires both unit tests and property-based tests for comprehensive coverage:

**Unit Tests** focus on:
- Specific tier configurations (Explorer shows correct price, Pro shows badges, Enterprise shows custom pricing)
- Edge cases (empty model lists, missing anchoring prices, locked features)
- Component rendering (correct number of tiers, presence of scarcity bar, lifetime promise text)
- User interactions (button clicks, hover states)
- Accessibility features (semantic HTML structure, screen reader order)

**Property-Based Tests** focus on:
- Universal properties across all inputs (fill percentage calculation, contrast ratios, touch target sizes)
- Accessibility compliance across all elements (ARIA labels, keyboard navigation, focus indicators)
- Styling consistency across all tiers (strikethrough for anchoring prices, hover transforms)
- Interactive behavior across all buttons (click handlers invoked correctly)

### Property-Based Testing Configuration

**Library**: Use `@fast-check/jest` for TypeScript/JavaScript property-based testing

**Configuration**:
- Minimum 100 iterations per property test
- Each test must reference its design document property
- Tag format: `// Feature: founders-deal-pricing, Property {number}: {property_text}`

**Example Property Test Structure**:
```typescript
import fc from 'fast-check';

// Feature: founders-deal-pricing, Property 1: Scarcity Bar Fill Percentage Calculation
describe('Property 1: Fill Percentage Calculation', () => {
  it('should calculate correct fill percentage for any claimed/total values', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: 1000 }), // claimed
        fc.integer({ min: 1, max: 1000 }), // total
        (claimed, total) => {
          const result = calculateFillPercentage(claimed, total);
          const expected = (claimed / total) * 100;
          expect(result).toBeCloseTo(expected, 2);
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

### Unit Test Coverage Requirements

**Component Tests**:
- PricingSection: Renders all child components, applies responsive classes
- ScarcityBar: Displays correct text, applies pulsing animation
- PriceDisplay: Shows current price, anchoring price with strikethrough, handles custom pricing
- ModelAccessList: Displays correct models per tier, shows lock icon for locked features, displays OLYMPUS TIER label for Pro
- PricingTierCard: Renders all tier content, applies highlighted styling for Pro, handles hover states
- CTAButton: Displays correct text per tier, triggers click handlers, meets accessibility requirements

**Integration Tests**:
- Full pricing section renders with all three tiers
- Pro tier receives visual emphasis (badges, glow, scale)
- Responsive layout changes at breakpoints
- Reduced motion preference disables animations
- Keyboard navigation works across all interactive elements

### Accessibility Testing

**Automated Tests**:
- Run `jest-axe` on rendered components
- Verify WCAG 2.1 AA compliance
- Check color contrast ratios programmatically
- Validate ARIA attributes and roles

**Manual Testing Checklist**:
- Screen reader announces pricing information in logical order
- Keyboard navigation reaches all interactive elements
- Focus indicators are clearly visible
- Touch targets are comfortable on mobile devices
- Content is readable at 200% zoom

### Visual Regression Testing

**Recommended Tool**: Percy, Chromatic, or similar

**Test Cases**:
- Default state (all three tiers)
- Pro tier hover state
- Mobile layout (< 768px)
- Tablet layout (768px - 1024px)
- Desktop layout (≥ 1024px)
- Reduced motion preference enabled
- High contrast mode

### Performance Testing

**Metrics to Monitor**:
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.5s

**Optimization Strategies**:
- Use React Server Components for static content
- Lazy load animations only when in viewport
- Optimize images and icons (SVG preferred)
- Minimize JavaScript bundle size
- Use CSS containment for tier cards

## Implementation Notes

### Next.js Specific Considerations

**Server vs Client Components**:
- Use Server Components for static content (LifetimePromise, TierBadge, FeatureList)
- Use Client Components for interactive elements (ScarcityBar, PricingTierCard, CTAButton)
- Mark client components with `'use client'` directive

**Data Fetching**:
- If claimed spots are dynamic: Fetch in Server Component and pass as props
- If static: Use constant configuration
- Consider ISR (Incremental Static Regeneration) for periodic updates

**Styling Approach**:
- Use Tailwind CSS utility classes
- Extract repeated patterns into custom classes in `globals.css`
- Use CSS variables for theme values from design-tokens.ts
- Leverage Tailwind's responsive modifiers (sm:, md:, lg:)

### Animation Implementation

**Pulsing Effect (Scarcity Bar)**:
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.scarcity-bar-fill {
  animation: pulse 2s ease-in-out infinite;
}
```

**Glowing Border (Pro Tier)**:
```css
@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3); }
  50% { box-shadow: 0 0 30px rgba(var(--primary-rgb), 0.5); }
}

.pro-tier-card {
  animation: glow-pulse 3s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .scarcity-bar-fill,
  .pro-tier-card {
    animation: none;
  }
}
```

### Accessibility Implementation

**ARIA Labels**:
```tsx
<button
  aria-label={`Select ${tier.name} plan for ${tier.price} per ${tier.interval}`}
  onClick={tier.ctaAction}
>
  {tier.ctaText}
</button>
```

**Semantic HTML**:
```tsx
<section aria-labelledby="pricing-heading">
  <h2 id="pricing-heading">Pricing Plans</h2>
  <div role="list">
    {tiers.map(tier => (
      <article role="listitem" key={tier.id}>
        {/* Tier content */}
      </article>
    ))}
  </div>
</section>
```

**Keyboard Navigation**:
- Ensure all interactive elements are in tab order
- Use `tabIndex={0}` for custom interactive elements
- Implement focus trap for modals (if applicable)
- Support Escape key to close expanded states

### Design Token Integration

**Example Usage**:
```typescript
// design-tokens.ts
export const colors = {
  primary: '#3B82F6',
  accent: '#8B5CF6',
  // ...
};

// PricingSection.tsx
import { colors } from '@/design-tokens';

const styles = {
  proCardBorder: `2px solid ${colors.primary}`,
  proCardGlow: `0 0 20px ${colors.primary}33`,
};
```

**Tailwind Configuration**:
```javascript
// tailwind.config.js
const { colors, spacing, typography } = require('./design-tokens');

module.exports = {
  theme: {
    extend: {
      colors,
      spacing,
      fontSize: typography.sizes,
    },
  },
};
```

### Conversion Tracking

**Analytics Events to Track**:
- `pricing_section_viewed`: User scrolls to pricing section
- `tier_card_hovered`: User hovers over a tier card
- `cta_clicked`: User clicks a CTA button (include tier ID)
- `scarcity_bar_viewed`: Scarcity bar enters viewport
- `founder_deal_claimed`: User completes signup for Pro tier

**Implementation**:
```typescript
const handleCTAClick = (tierId: string) => {
  // Analytics tracking
  analytics.track('cta_clicked', {
    tier: tierId,
    price: tier.price,
    timestamp: Date.now(),
  });
  
  // Navigate to signup
  tier.ctaAction();
};
```
