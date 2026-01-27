# Implementation Plan: Founder's Deal Pricing Redesign

## Overview

This implementation plan breaks down the Founder's Deal pricing redesign into discrete coding tasks. The approach follows a component-first strategy, building from the smallest reusable components up to the complete pricing section. Each task includes property-based tests and unit tests to ensure correctness and accessibility compliance.

## Tasks

- [x] 1. Set up project structure and configuration
  - Create component directory structure under `src/components/pricing/`
  - Set up TypeScript interfaces in `src/types/pricing.ts`
  - Configure property-based testing library (@fast-check/jest)
  - Create pricing data configuration file `src/config/pricing-config.ts`
  - _Requirements: 4.1, 10.1, 10.2, 10.3_

- [ ] 2. Implement ScarcityBar component
  - [x] 2.1 Create ScarcityBar client component with pulsing animation
    - Implement fill percentage calculation logic
    - Add pulsing CSS animation with keyframes
    - Support prefers-reduced-motion media query
    - Apply responsive styling with Tailwind classes
    - _Requirements: 1.1, 1.2, 1.3, 1.5, 11.1, 11.4_
  
  - [x] 2.2 Write property test for fill percentage calculation
    - **Property 1: Scarcity Bar Fill Percentage Calculation**
    - **Validates: Requirements 1.2**
  
  - [x] 2.3 Write unit tests for ScarcityBar
    - Test rendering with claimed/total props
    - Test pulsing animation class application
    - Test reduced motion support
    - Test edge cases (claimed > total, negative values)
    - _Requirements: 1.1, 1.3, 1.4, 11.4_

- [ ] 3. Implement PriceDisplay component
  - [x] 3.1 Create PriceDisplay server component
    - Render current price with interval
    - Render anchoring price with strikethrough styling
    - Handle custom pricing for Enterprise tier
    - Apply typography tokens from design system
    - _Requirements: 2.1, 2.2, 2.3, 2.5_
  
  - [x] 3.2 Write property test for anchoring price styling
    - **Property 2: Anchoring Price Strikethrough Styling**
    - **Validates: Requirements 2.3**
  
  - [x] 3.3 Write unit tests for PriceDisplay
    - Test Explorer tier price display ($29/~~$49~~)
    - Test Pro tier price display ($49/~~$99~~)
    - Test Enterprise custom pricing
    - Test missing anchoring price handling
    - _Requirements: 2.1, 2.2, 2.5_

- [ ] 4. Implement ModelAccessList component
  - [x] 4.1 Create ModelAccessList server component
    - Render agent names with model information
    - Display lock icon for locked features
    - Add OLYMPUS TIER label for Pro tier
    - Apply semantic list structure
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_
  
  - [x] 4.2 Write unit tests for ModelAccessList
    - Test Explorer tier model access rendering
    - Test Pro tier OLYMPUS TIER label
    - Test Enterprise tier custom options
    - Test locked feature styling
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ] 5. Implement CTAButton component
  - [x] 5.1 Create CTAButton client component with variants
    - Implement primary, secondary, and outline variants
    - Add click handler with tier ID parameter
    - Ensure 44x44px minimum touch target
    - Add ARIA labels for accessibility
    - Apply focus indicators
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 7.4, 8.1, 8.4_
  
  - [x] 5.2 Write property test for CTA button click handlers
    - **Property 8: CTA Button Click Handler**
    - **Validates: Requirements 9.5**
  
  - [x] 5.3 Write property test for touch target sizes
    - **Property 4: Touch Target Size Compliance**
    - **Validates: Requirements 7.4**
  
  - [x] 5.4 Write unit tests for CTAButton
    - Test variant styling (primary, secondary, outline)
    - Test click handler invocation
    - Test ARIA label presence
    - Test focus indicator visibility
    - _Requirements: 9.2, 9.3, 9.4, 8.1, 8.4_

- [ ] 6. Implement TierBadge and FeatureList components
  - [x] 6.1 Create TierBadge server component
    - Render badge text with styling
    - Support multiple badges (FOUNDER'S DEAL, MOST POPULAR)
    - Apply design system color tokens
    - _Requirements: 6.2, 6.3_
  
  - [x] 6.2 Create FeatureList server component
    - Render features as semantic list
    - Add checkmark icons with alt text
    - Apply consistent spacing
    - _Requirements: 4.2, 4.3, 4.4, 8.5_
  
  - [x] 6.3 Write unit tests for TierBadge and FeatureList
    - Test badge rendering for Pro tier
    - Test feature list rendering for all tiers
    - Test icon alt text presence
    - _Requirements: 6.2, 6.3, 4.2, 4.3, 4.4, 8.5_

- [x] 7. Implement PricingTierCard component
  - [x] 7.1 Create PricingTierCard client component
    - Compose all child components (TierBadge, PriceDisplay, ModelAccessList, FeatureList, CTAButton)
    - Implement hover transform effect
    - Apply glowing border for Pro tier (highlighted prop)
    - Add elevated z-index and scale for Pro tier
    - Support responsive layout
    - _Requirements: 4.1, 6.1, 6.4, 6.5, 11.3_
  
  - [x] 7.2 Write property test for hover transforms
    - **Property 9: Hover Transform Application**
    - **Validates: Requirements 11.3**
  
  - [x] 7.3 Write property test for CTA button presence
    - **Property 7: CTA Button Presence**
    - **Validates: Requirements 9.1**
  
  - [x] 7.4 Write unit tests for PricingTierCard
    - Test Pro tier visual emphasis (glow, badges, scale)
    - Test hover state styling
    - Test all child components render correctly
    - Test responsive classes application
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [ ] 8. Implement LifetimePromise component
  - [x] 8.1 Create LifetimePromise server component
    - Render grandfathering promise text
    - Apply subtle emphasis styling
    - Ensure visibility on all viewports
    - _Requirements: 3.1_
  
  - [x] 8.2 Write unit tests for LifetimePromise
    - Test text content rendering
    - Test styling application
    - _Requirements: 3.1_

- [x] 9. Checkpoint - Ensure all component tests pass
  - Run all unit tests and property tests
  - Verify no accessibility violations with jest-axe
  - Ask the user if questions arise

- [ ] 10. Implement PricingSection root component
  - [x] 10.1 Create PricingSection client component
    - Import pricing configuration from pricing-config.ts
    - Render ScarcityBar at top
    - Render LifetimePromise
    - Render PricingTierGrid with three PricingTierCard components
    - Apply responsive layout (vertical on mobile, horizontal on desktop)
    - Add section-level ARIA attributes
    - _Requirements: 1.1, 3.1, 4.1, 4.5, 7.1, 7.2, 8.6_
  
  - [x] 10.2 Write unit tests for PricingSection
    - Test all three tiers render
    - Test ScarcityBar renders at top
    - Test LifetimePromise renders
    - Test responsive layout classes
    - Test semantic HTML structure
    - _Requirements: 4.1, 4.5, 7.1, 7.2, 8.6, 8.7_

- [ ] 11. Implement accessibility features
  - [ ] 11.1 Add comprehensive ARIA labels and roles
    - Add section heading with id
    - Add role="list" and role="listitem" for tier cards
    - Ensure all interactive elements have accessible names
    - Add aria-label to CTAButtons with tier context
    - _Requirements: 8.1, 8.6, 8.7_
  
  - [ ] 11.2 Implement keyboard navigation support
    - Ensure all interactive elements are in tab order
    - Add visible focus indicators
    - Test keyboard navigation flow
    - _Requirements: 8.3, 8.4_
  
  - [ ] 11.3 Write property test for interactive element accessibility
    - **Property 5: Interactive Element Accessibility**
    - **Validates: Requirements 8.1, 8.3, 8.4, 8.5**
  
  - [ ] 11.4 Write property test for color contrast compliance
    - **Property 6: Color Contrast Compliance**
    - **Validates: Requirements 8.2**
  
  - [ ] 11.5 Write property test for minimum font sizes
    - **Property 3: Minimum Font Size Compliance**
    - **Validates: Requirements 7.3**
  
  - [ ] 11.6 Run jest-axe accessibility tests
    - Test PricingSection with jest-axe
    - Test individual components with jest-axe
    - Verify WCAG 2.1 AA compliance
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7_

- [ ] 12. Implement animations and visual effects
  - [ ] 12.1 Add CSS animations with reduced motion support
    - Create pulsing animation keyframes for ScarcityBar
    - Create glowing border animation for Pro tier
    - Add hover transform transitions for all tier cards
    - Implement prefers-reduced-motion media queries
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5_
  
  - [ ] 12.2 Write unit tests for animation support
    - Test animation classes are applied
    - Test reduced motion disables animations
    - Test hover state transitions
    - _Requirements: 11.4, 11.5_

- [ ] 13. Integrate with landing page
  - [x] 13.1 Add PricingSection to landing page (page.tsx)
    - Import PricingSection component
    - Add to page layout in appropriate position
    - Ensure responsive behavior with surrounding sections
    - Test page performance metrics (LCP, CLS, TTI)
    - _Requirements: All_
  
  - [ ] 13.2 Write integration tests
    - Test full pricing section renders on landing page
    - Test CTA buttons navigate to correct routes
    - Test responsive behavior at all breakpoints
    - Test reduced motion preference
    - _Requirements: All_

- [ ] 14. Add analytics tracking
  - [ ] 14.1 Implement conversion tracking events
    - Add pricing_section_viewed event
    - Add tier_card_hovered event
    - Add cta_clicked event with tier ID
    - Add scarcity_bar_viewed event
    - Add founder_deal_claimed event
    - _Requirements: 9.5_
  
  - [ ] 14.2 Write unit tests for analytics tracking
    - Test events fire on correct user actions
    - Test event payloads include correct data
    - _Requirements: 9.5_

- [ ] 15. Final checkpoint - Comprehensive testing and validation
  - Run full test suite (unit + property tests)
  - Verify all 9 correctness properties pass with 100+ iterations
  - Test on multiple devices and browsers
  - Verify accessibility with screen reader
  - Check performance metrics meet targets
  - Ask the user if questions arise

## Notes

- All tasks are required for comprehensive implementation
- Each property test must run minimum 100 iterations
- All property tests must include comment tags referencing design properties
- Focus on Pro tier visual emphasis as primary conversion driver
- Ensure WCAG 2.1 AA compliance throughout implementation
- Use design-tokens.ts for all color, spacing, and typography values
- Implement Server Components for static content, Client Components for interactivity
