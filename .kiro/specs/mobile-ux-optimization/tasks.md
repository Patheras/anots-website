# Implementation Plan: Mobile UX Optimization

## Overview

This implementation plan breaks down the mobile UX optimization into discrete, incremental tasks. Each task builds on previous work and includes testing to validate functionality early. The approach is mobile-first, starting with the smallest viewport (375px) and progressively enhancing for larger screens.

## Tasks

- [x] 1. Set up mobile UX testing infrastructure
  - Install and configure fast-check for property-based testing
  - Set up Playwright for device testing
  - Configure viewport testing utilities
  - Add mobile-specific test helpers
  - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5_

- [x] 2. Implement touch target system
  - [x] 2.1 Add touch target utilities to Tailwind config
    - Add min-h-touch (44px) and min-w-touch (44px) utilities
    - Add touch-gap (8px) spacing utility
    - Update theme configuration
    - _Requirements: 1.1, 1.2_
  
  - [x] 2.2 Write property test for touch target minimum size
    - **Property 1: Universal Touch Target Minimum Size**
    - **Validates: Requirements 1.1, 1.3, 1.4, 1.5, 1.6, 9.7, 10.4**
  
  - [x] 2.3 Update Button component with touch targets
    - Apply min-h-touch and min-w-touch classes
    - Ensure proper padding for all button sizes
    - Test on mobile viewport
    - _Requirements: 1.1, 1.6_
  
  - [x] 2.4 Write property test for touch target spacing
    - **Property 2: Touch Target Spacing**
    - **Validates: Requirements 1.2**

- [x] 3. Optimize typography for mobile
  - [x] 3.1 Update globals.css with mobile-first typography scale
    - Set base font size to 16px
    - Define mobile-first heading sizes (h1: 32px, h2: 28px, h3: 24px)
    - Add responsive scaling with sm:, md:, lg: breakpoints
    - Apply text-balance to all headings
    - _Requirements: 2.1, 2.2, 2.3, 2.4_
  
  - [x] 3.2 Write property test for body text minimum font size
    - **Property 3: Body Text Minimum Font Size**
    - **Validates: Requirements 2.1, 9.3**
  
  - [x] 3.3 Write property test for body text line height
    - **Property 4: Body Text Line Height**
    - **Validates: Requirements 2.2**
  
  - [x] 3.4 Write property test for heading size ranges
    - **Property 5: Heading Size Ranges**
    - **Validates: Requirements 2.3**
  
  - [x] 3.5 Write property test for text balance application
    - **Property 6: Text Balance Application**
    - **Validates: Requirements 2.4**
  
  - [x] 3.6 Write property test for color contrast ratios
    - **Property 7: Color Contrast Ratios**
    - **Validates: Requirements 2.6**

- [x] 4. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Optimize Navigation component for mobile
  - [x] 5.1 Update hamburger button with proper touch target
    - Apply min-w-touch and min-h-touch classes
    - Ensure proper padding (p-2)
    - Add focus ring styles
    - Test button dimensions
    - _Requirements: 1.3, 3.7_
  
  - [x] 5.2 Implement full-screen mobile menu overlay
    - Change mobile menu to fixed full-screen overlay
    - Add proper z-index and backdrop
    - Ensure menu fits within viewport without scroll
    - _Requirements: 3.1, 3.4_
  
  - [x] 5.3 Flatten dropdown structure for mobile
    - Remove nested dropdowns on mobile
    - Display all items in single-level list
    - Maintain category headers for organization
    - _Requirements: 3.3_
  
  - [x] 5.4 Ensure all menu items meet touch target requirements
    - Apply min-h-touch to all menu items
    - Add proper padding (px-3 py-3)
    - Test touch target dimensions
    - _Requirements: 1.5, 3.7_
  
  - [x] 5.5 Implement auto-close on menu item selection
    - Add onClick handler to close menu
    - Test menu closes when item is clicked
    - _Requirements: 3.2_
  
  - [x] 5.6 Write unit tests for Navigation component
    - Test hamburger button dimensions
    - Test menu open/close behavior
    - Test menu item touch targets
    - Test auto-close functionality
    - _Requirements: 1.3, 3.1, 3.2, 3.4, 3.5_

- [-] 6. Optimize Hero section for mobile
  - [x] 6.1 Implement responsive height system
    - Change from h-screen to h-[80vh] on mobile
    - Add min-h-[500px] and max-h-[800px] constraints
    - Use sm:h-[90vh] and md:h-screen for larger screens
    - _Requirements: 4.1, 4.2_
  
  - [x] 6.2 Optimize typing animation for mobile
    - Reduce typing speed on mobile (60ms vs 80ms)
    - Scale heading text appropriately (32px on mobile)
    - Ensure animation completes within 3 seconds
    - _Requirements: 2.7, 4.3_
  
  - [x] 6.3 Optimize CTA positioning and layout
    - Position CTAs at bottom with adequate spacing (bottom-16)
    - Stack CTAs vertically on mobile (flex-col)
    - Make CTAs full-width on mobile (w-full sm:w-auto)
    - Ensure min-h-touch for all CTAs
    - _Requirements: 4.4, 4.7_
  
  - [x] 6.4 Optimize background animation for mobile
    - Add reducedComplexity prop to LambdaHero
    - Reduce particle count on mobile
    - Ensure smooth fade on scroll
    - _Requirements: 4.5, 4.6_
  
  - [ ] 6.5 Write unit tests for Hero component
    - Test height at various viewport sizes
    - Test CTA visibility at 375px width
    - Test typing animation duration
    - Test background fade on scroll
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.6, 4.7_

- [ ] 7. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [-] 8. Optimize horizontal scroll Features section
  - [x] 8.1 Implement responsive card widths
    - Set cards to w-[85vw] on mobile with max of 480px
    - Use sm:w-[480px] for larger screens
    - Test card widths at various viewports
    - _Requirements: 5.4_
  
  - [x] 8.2 Add visual scroll indicators
    - Add left fade gradient (bg-gradient-to-r from-[#0A0A0B])
    - Add right fade gradient (bg-gradient-to-l from-[#0A0A0B])
    - Position gradients absolutely with pointer-events-none
    - _Requirements: 5.1_
  
  - [x] 8.3 Implement snap scrolling
    - Add snap-x snap-mandatory to container
    - Add snap-start to cards
    - Add scroll-smooth for smooth scrolling
    - _Requirements: 5.2, 5.3_
  
  - [x] 8.4 Optimize images in feature cards
    - Add proper sizes attribute to Image components
    - Use sizes="(max-width: 640px) 85vw, 480px"
    - Ensure lazy loading for below-fold images
    - _Requirements: 8.4, 8.5_
  
  - [ ] 8.5 Write property test for horizontal scroll card width
    - **Property 23: Horizontal Scroll Card Width**
    - **Validates: Requirements 5.4**
  
  - [ ] 8.6 Write unit tests for Features section
    - Test card widths at mobile viewport
    - Test scroll indicators presence
    - Test snap scrolling behavior
    - Test image optimization
    - _Requirements: 5.1, 5.2, 5.4, 5.5, 5.6_

- [ ] 9. Optimize Brand Room Timeline for mobile
  - [x] 9.1 Implement single-column mobile layout
    - Change timeline to single column on mobile
    - Keep alternating layout for desktop (sm:grid sm:grid-cols-2)
    - Left-align all content on mobile with pl-12
    - _Requirements: 6.1, 6.3_
  
  - [x] 9.2 Adjust timeline line position for mobile
    - Position line at left-4 on mobile, left-1/2 on desktop
    - Ensure line is visible throughout section
    - Maintain gradient styling
    - _Requirements: 6.2, 6.7_
  
  - [x] 9.3 Optimize timeline dots for mobile visibility
    - Increase dot size to 12px (w-3 h-3)
    - Position at left-4 on mobile
    - Ensure proper border and shadow
    - _Requirements: 6.4_
  
  - [x] 9.4 Ensure proper spacing between timeline steps
    - Use mb-16 on mobile, mb-24 on desktop
    - Verify minimum 48px vertical spacing
    - _Requirements: 6.5_
  
  - [x] 9.5 Optimize timeline typography
    - Ensure minimum 16px font size for all text
    - Use responsive heading sizes (text-2xl sm:text-3xl md:text-4xl)
    - Apply text-balance to headings
    - _Requirements: 6.6_
  
  - [ ] 9.6 Write property test for timeline dot minimum size
    - **Property 24: Timeline Dot Minimum Size**
    - **Validates: Requirements 6.4**
  
  - [ ] 9.7 Write property test for timeline text readability
    - **Property 25: Timeline Text Readability**
    - **Validates: Requirements 6.6**
  
  - [ ] 9.8 Write unit tests for Brand Room Timeline
    - Test single-column layout on mobile
    - Test timeline line visibility
    - Test dot dimensions
    - Test vertical spacing
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.7_

- [ ] 10. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [-] 11. Optimize Sticky CTA for mobile
  - [x] 11.1 Reduce CTA height for mobile
    - Ensure maximum height of 72px
    - Use py-3 for vertical padding
    - Test height on mobile viewport
    - _Requirements: 10.1_
  
  - [x] 11.2 Optimize CTA content for mobile
    - Keep message concise on mobile
    - Hide secondary text on mobile (hidden sm:block)
    - Use text-sm for mobile, text-base for desktop
    - Ensure minimum 14px font size
    - _Requirements: 10.7_
  
  - [x] 11.3 Ensure close button meets touch target
    - Apply min-w-touch and min-h-touch
    - Use p-2 for padding
    - Test button dimensions
    - _Requirements: 10.4_
  
  - [x] 11.4 Implement backdrop blur
    - Add backdrop-blur-xl class
    - Ensure bg-[#0A0A0B]/95 for transparency
    - Test visual separation
    - _Requirements: 10.2_
  
  - [ ] 11.5 Write unit tests for Sticky CTA
    - Test maximum height on mobile
    - Test close button dimensions
    - Test localStorage persistence
    - Test scroll trigger (50vh)
    - _Requirements: 10.1, 10.2, 10.4, 10.5, 10.6, 10.7_

- [-] 12. Implement spacing consistency system
  - [x] 12.1 Audit and update section padding
    - Apply px-4 sm:px-6 lg:px-8 to all sections
    - Apply py-16 sm:py-24 lg:py-32 to all sections
    - Verify 8px grid alignment
    - _Requirements: 7.1, 7.2, 7.3_
  
  - [x] 12.2 Update card and container gaps
    - Use gap-4 (16px) on mobile
    - Use gap-6 (24px) on tablet
    - Apply to all grid and flex layouts
    - _Requirements: 7.4_
  
  - [x] 12.3 Standardize border radius
    - Use rounded-lg (8px) or rounded-xl (12px) consistently
    - Update all cards, buttons, and containers
    - _Requirements: 7.6_
  
  - [x] 12.4 Standardize elevation (box-shadow)
    - Use consistent shadow values from design system
    - Apply to cards and elevated surfaces
    - _Requirements: 7.7_
  
  - [ ] 12.5 Write property test for 8px grid system compliance
    - **Property 8: 8px Grid System Compliance**
    - **Validates: Requirements 7.1**
  
  - [ ] 12.6 Write property test for consistent section padding
    - **Property 9: Consistent Section Padding**
    - **Validates: Requirements 7.2, 7.3**
  
  - [ ] 12.7 Write property test for consistent gap sizes
    - **Property 10: Consistent Gap Sizes**
    - **Validates: Requirements 7.4**
  
  - [ ] 12.8 Write property test for no horizontal overflow
    - **Property 11: No Horizontal Overflow**
    - **Validates: Requirements 7.5**
  
  - [ ] 12.9 Write property test for consistent border radius
    - **Property 12: Consistent Border Radius**
    - **Validates: Requirements 7.6**
  
  - [ ] 12.10 Write property test for consistent elevation
    - **Property 13: Consistent Elevation**
    - **Validates: Requirements 7.7**

- [ ] 13. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [-] 14. Optimize images and performance
  - [x] 14.1 Audit all Image components
    - Verify all use next/image
    - Add proper sizes attribute to all images
    - Add lazy loading to below-fold images
    - _Requirements: 8.4, 8.5_
  
  - [x] 14.2 Optimize animations for mobile
    - Audit all animations for GPU-accelerated properties
    - Replace non-GPU properties with transform/opacity
    - Add will-change hints where appropriate
    - _Requirements: 8.7_
  
  - [x] 14.3 Update LambdaHero background animation
    - Add reducedComplexity prop
    - Reduce particle count on mobile
    - Optimize rendering performance
    - _Requirements: 4.5, 8.7_
  
  - [ ] 14.4 Write property test for image component usage
    - **Property 14: Image Component Usage**
    - **Validates: Requirements 8.4, 8.5**
  
  - [ ] 14.5 Write property test for GPU-accelerated animations
    - **Property 15: GPU-Accelerated Animations**
    - **Validates: Requirements 8.7**

- [ ] 15. Optimize forms and inputs
  - [x] 15.1 Update input components with proper types
    - Use type="email" for email inputs
    - Use type="tel" for phone inputs
    - Use type="url" for URL inputs
    - _Requirements: 9.1_
  
  - [x] 15.2 Ensure input font size prevents iOS zoom
    - Set minimum 16px font size for all inputs
    - Update input component styles
    - Test on iOS devices
    - _Requirements: 9.3_
  
  - [x] 15.3 Implement proper form field spacing
    - Use space-y-4 (16px) for form field containers
    - Verify minimum 16px spacing between fields
    - _Requirements: 9.2_
  
  - [x] 15.4 Ensure form label associations
    - Add for/id attributes to all label/input pairs
    - Verify associations are correct
    - _Requirements: 9.5_
  
  - [x] 15.5 Implement focus states for inputs
    - Add clear focus ring styles
    - Use focus:ring-2 focus:ring-[#5E6AD2]
    - Test focus visibility
    - _Requirements: 9.4_
  
  - [ ] 15.6 Write property test for input type appropriateness
    - **Property 16: Input Type Appropriateness**
    - **Validates: Requirements 9.1**
  
  - [ ] 15.7 Write property test for form field spacing
    - **Property 17: Form Field Spacing**
    - **Validates: Requirements 9.2**
  
  - [ ] 15.8 Write property test for form label association
    - **Property 18: Form Label Association**
    - **Validates: Requirements 9.5**

- [ ] 16. Implement accessibility improvements
  - [x] 16.1 Add ARIA labels to interactive elements
    - Add aria-label to hamburger button
    - Add aria-label to close buttons
    - Add aria-label to icon-only buttons
    - _Requirements: 11.1_
  
  - [x] 16.2 Implement visible focus indicators
    - Add focus:outline-2 to all focusable elements
    - Use focus:outline-[#5E6AD2] for color
    - Test focus visibility
    - _Requirements: 11.3_
  
  - [x] 16.3 Add alt text to all images
    - Audit all images for alt text
    - Add descriptive alt text where missing
    - Verify alt text is meaningful
    - _Requirements: 11.4_
  
  - [x] 16.4 Add ARIA live regions for dynamic content
    - Add aria-live to dynamic content areas
    - Use aria-live="polite" for non-urgent updates
    - Test with screen readers
    - _Requirements: 11.7_
  
  - [x] 16.5 Verify semantic HTML structure
    - Ensure proper use of nav, main, section, article
    - Verify heading hierarchy
    - Test with screen readers
    - _Requirements: 11.5_
  
  - [ ] 16.6 Write property test for ARIA label presence
    - **Property 19: ARIA Label Presence**
    - **Validates: Requirements 11.1**
  
  - [ ] 16.7 Write property test for focus indicator visibility
    - **Property 20: Focus Indicator Visibility**
    - **Validates: Requirements 11.3**
  
  - [ ] 16.8 Write property test for image alt text presence
    - **Property 21: Image Alt Text Presence**
    - **Validates: Requirements 11.4**
  
  - [ ] 16.9 Write property test for ARIA live region for dynamic content
    - **Property 22: ARIA Live Region for Dynamic Content**
    - **Validates: Requirements 11.7**
  
  - [ ] 16.10 Run axe-core accessibility tests
    - Test homepage for violations
    - Test navigation for violations
    - Test all major components
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7_

- [ ] 17. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 18. Device testing and validation
  - [ ] 18.1 Set up Playwright device testing
    - Configure iPhone SE device profile
    - Configure iPhone 12/13/14 device profile
    - Configure iPhone 14 Pro Max device profile
    - Configure Android device profiles (360px, 412px)
    - Configure iPad and iPad Pro profiles
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5_
  
  - [ ] 18.2 Write visual regression tests
    - Test homepage on all device profiles
    - Test navigation menu on all devices
    - Test hero section on all devices
    - Test features section on all devices
    - Test timeline on all devices
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5_
  
  - [ ] 18.3 Write touch interaction tests
    - Test touch targets on all devices
    - Test navigation menu interactions
    - Test form interactions
    - Test scroll interactions
    - _Requirements: 12.7_
  
  - [ ] 18.4 Write performance tests with Lighthouse CI
    - Configure Lighthouse CI with 3G throttling
    - Set FCP threshold to 1.5s
    - Set LCP threshold to 2.5s
    - Run tests on all pages
    - _Requirements: 8.1, 8.2, 8.3_

- [ ] 19. Final integration and polish
  - [x] 19.1 Audit entire site for mobile UX issues
    - Check all touch targets meet minimum size
    - Check all typography is readable
    - Check all spacing is consistent
    - Check all animations are smooth
    - _Requirements: All_
  
  - [x] 19.2 Fix any remaining horizontal overflow issues
    - Test all pages at 375px width
    - Fix any overflowing elements
    - Verify no horizontal scroll
    - _Requirements: 7.5_
  
  - [x] 19.3 Optimize any remaining performance issues
    - Run Lighthouse on all pages
    - Fix any performance warnings
    - Optimize images and animations
    - _Requirements: 8.1, 8.2, 8.3_
  
  - [x] 19.4 Final accessibility audit
    - Run axe-core on all pages
    - Fix any accessibility violations
    - Test with screen readers
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7_

- [ ] 20. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- All tasks are required for comprehensive mobile UX optimization
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties
- Unit tests validate specific examples and edge cases
- Visual regression tests ensure consistent rendering across devices
- Performance tests ensure fast load times and smooth interactions
- Accessibility tests ensure compliance with WCAG guidelines

## Testing Strategy Summary

**Property-Based Tests** (25 properties):
- Touch target sizes and spacing
- Typography scales and readability
- Spacing consistency and grid alignment
- Image optimization
- Animation performance
- Form accessibility
- ARIA attributes and accessibility

**Unit Tests**:
- Navigation component behavior
- Hero section responsive layout
- Features section scroll behavior
- Timeline layout and styling
- Sticky CTA behavior and persistence
- Form interactions and validation

**Visual Regression Tests**:
- Homepage rendering on all devices
- Navigation menu on all devices
- Component rendering consistency

**Performance Tests**:
- Lighthouse CI with 3G throttling
- FCP, LCP, and TTI metrics
- Animation frame rates

**Accessibility Tests**:
- axe-core automated testing
- Screen reader compatibility
- Keyboard navigation
- Focus management

## Implementation Priority

1. **High Priority** (Core mobile UX):
   - Touch targets (Task 2)
   - Typography (Task 3)
   - Navigation (Task 5)
   - Hero section (Task 6)

2. **Medium Priority** (Enhanced UX):
   - Horizontal scroll (Task 8)
   - Timeline (Task 9)
   - Sticky CTA (Task 11)
   - Spacing consistency (Task 12)

3. **Standard Priority** (Polish and compliance):
   - Images and performance (Task 14)
   - Forms (Task 15)
   - Accessibility (Task 16)
   - Device testing (Task 18)
   - Final polish (Task 19)
