# Implementation Plan: ANOTS Marketing Website

## Overview

This implementation plan breaks down the ANOTS marketing website into discrete, incremental coding tasks. The website will be built using Next.js 14 with TypeScript, implementing a Linear-inspired design aesthetic with dark theme, smooth animations, and comprehensive accessibility. Each task builds on previous work, ensuring no orphaned code and continuous integration.

## Tasks

- [x] 1. Initialize Next.js project and configure design system
  - Create Next.js 14 project with TypeScript and App Router
  - Install dependencies: Tailwind CSS, Shadcn/UI, Aceternity UI, Framer Motion, React Hook Form, Zod, fast-check
  - Configure Tailwind with custom design tokens (colors, typography, spacing, animations)
  - Set up Geist fonts using next/font
  - Create design token exports in lib/design-tokens.ts
  - Create pricing data in lib/pricing-data.ts (Free: $0, Standard: $9.90/mo, Pro: $49.90/mo)
  - Configure TypeScript with strict mode
  - Initialize git repository and connect to git@github.com:Patheras/anots-web.git
  - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [x] 2. Build core UI component library
  - [x] 2.1 Create Button component with variants
    - Implement primary, secondary, and ghost variants
    - Add size options (sm, md, lg)
    - Include hover and focus states with 150ms transitions
    - Support both onClick and href (link) functionality
    - _Requirements: 5.2, 5.4, 5.5, 11.2, 11.5_
  
  - [ ]* 2.2 Write property test for Button component
    - **Property 6: Design token consistency**
    - **Property 23: Visual distinction between action priorities**
    - **Validates: Requirements 5.2, 5.4, 5.5, 11.5**
  
  - [x] 2.3 Create Input component with validation states
    - Implement text, email, tel, and textarea types
    - Add label, placeholder, and error message support
    - Style with dark background and purple focus state
    - Include success indicator for valid input
    - _Requirements: 4.1, 4.4, 14.1, 14.2, 14.3_
  
  - [ ]* 2.4 Write property test for Input component
    - **Property 29: Form field validation on blur**
    - **Property 30: Form validation feedback**
    - **Validates: Requirements 14.1, 14.2, 14.3**
  
  - [x] 2.5 Create Card component with hover effects
    - Implement base card with dark background and border
    - Add optional hover effect (scale 1.02, purple border)
    - Use GPU-accelerated transforms
    - _Requirements: 5.4, 5.5, 5.7, 13.2_
  
  - [ ]* 2.6 Write property test for Card component
    - **Property 26: Card hover effects**
    - **Validates: Requirements 13.2**

- [x] 3. Implement animation components
  - [x] 3.1 Create FadeIn animation wrapper
    - Implement with Framer Motion
    - Support delay, duration, and direction props
    - Use opacity and transform only (GPU-accelerated)
    - Add easing functions (ease-out, ease-in-out)
    - _Requirements: 5.6, 5.7, 13.5_
  
  - [x] 3.2 Create ScrollReveal component
    - Implement with Intersection Observer API
    - Trigger animations when elements enter viewport
    - Support threshold and once props
    - Respect prefers-reduced-motion preference
    - _Requirements: 13.1, 13.6_
  
  - [ ]* 3.3 Write property test for animations
    - **Property 25: Scroll-triggered animations**
    - **Property 28: Animation easing functions**
    - **Validates: Requirements 13.1, 13.5**

- [x] 4. Build Navigation component
  - [x] 4.1 Create desktop navigation bar
    - Implement horizontal layout with logo, links, and CTA
    - Add sticky positioning with backdrop blur
    - Highlight active page based on current path
    - Style with dark background and purple accents
    - _Requirements: 7.1, 7.4, 7.5, 7.6_
  
  - [x] 4.2 Add mobile hamburger menu
    - Implement hamburger icon button
    - Create slide-in drawer with Framer Motion
    - Add close button and escape key handler
    - Ensure touch-friendly target sizes (44x44px minimum)
    - _Requirements: 6.4, 7.3_
  
  - [ ]* 4.3 Write property test for Navigation
    - **Property 11: Navigation active state**
    - **Property 8: Touch target accessibility**
    - **Validates: Requirements 7.4, 6.4**

- [x] 5. Implement form validation and schemas
  - [x] 5.1 Create Zod validation schemas
    - Define contactFormSchema with name, email, company, message
    - Define demoFormSchema extending contact with date/time fields
    - Add validation rules (min/max length, email format, future dates)
    - Export schemas from lib/validation.ts
    - _Requirements: 4.1, 4.4, 4.5, 14.4, 14.5_
  
  - [ ]* 5.2 Write property test for email validation
    - **Property 31: Email format validation**
    - **Validates: Requirements 14.4**
  
  - [ ]* 5.3 Write property test for form validation
    - **Property 5: Form validation error display**
    - **Property 32: Required field enforcement**
    - **Validates: Requirements 4.5, 14.5**

- [x] 6. Build ContactForm component
  - [x] 6.1 Create form with React Hook Form
    - Implement controlled form with name, email, company, message fields
    - Integrate Zod schema validation
    - Add field-level validation on blur
    - Display inline error messages and success indicators
    - _Requirements: 4.1, 4.5, 14.1, 14.2, 14.3_
  
  - [x] 6.2 Add form submission handling
    - Implement loading state with spinner
    - Handle success with confirmation message
    - Handle errors with user-friendly messages
    - Preserve input on error
    - Focus first invalid field on validation failure
    - _Requirements: 4.2, 4.3, 4.6, 13.4, 14.6_
  
  - [ ]* 6.3 Write property test for form submission
    - **Property 4: Form submission with valid data**
    - **Validates: Requirements 4.2**

- [-] 7. Create API routes for form submissions
  - [x] 7.1 Implement POST /api/contact endpoint
    - Validate request body with Zod schema
    - Return 400 with field errors for invalid data
    - Return 200 with success message for valid data
    - Handle server errors with 500 response
    - Log submissions for monitoring
    - _Requirements: 4.2, 4.5_
  
  - [-] 7.2 Implement POST /api/demo endpoint
    - Validate request body with demo schema
    - Handle date/time validation
    - Return appropriate responses (200, 400, 500)
    - Log demo requests
    - _Requirements: 4.2, 4.4, 4.5_
  
  - [ ]* 7.3 Write unit tests for API routes
    - Test valid submissions return 200
    - Test invalid submissions return 400 with errors
    - Test server errors return 500

- [x] 8. Checkpoint - Ensure core components and forms work
  - Ensure all tests pass, ask the user if questions arise.

- [x] 9. Build Hero section component
  - [x] 9.1 Create Hero component
    - Implement centered layout with headline, subheadline, CTAs
    - Add gradient background with subtle grid pattern
    - Implement staggered fade-in animations (0ms, 100ms, 200ms delays)
    - Style with large typography (text-5xl or text-6xl)
    - _Requirements: 1.1, 1.6, 11.1_
  
  - [ ]* 9.2 Write unit test for Hero section
    - Test headline and subheadline render
    - Test CTAs are present with correct text
    - Test CTAs link to correct destinations

- [x] 10. Build Features showcase component
  - [x] 10.1 Create Features component with grid layout
    - Implement 2x2 grid on desktop, single column on mobile
    - Add feature cards with icon, title, description, and optional image
    - Include Directors Console and Engine Room showcases
    - Add ActivePieces and campaign management features
    - _Requirements: 1.3, 1.4, 12.1, 12.2, 12.3, 12.4_
  
  - [x] 10.2 Add scroll-triggered animations
    - Wrap feature cards in ScrollReveal components
    - Implement staggered fade-in effect
    - _Requirements: 1.5, 13.1_
  
  - [ ]* 10.3 Write property test for features
    - **Property 24: Feature benefit descriptions**
    - **Validates: Requirements 12.5**

- [-] 11. Build PricingTiers component
  - [x] 11.1 Create pricing tier cards
    - Implement three tier cards (Free, Standard, Pro)
    - Display tier name, price, billing period, description, features
    - Add CTA button for each tier
    - Highlight recommended tier with purple border and badge
    - _Requirements: 2.1, 2.2, 2.3, 2.4_
  
  - [ ]* 11.2 Write property test for pricing tiers
    - **Property 1: Pricing tier rendering completeness**
    - **Property 2: Pricing tier navigation**
    - **Property 3: Currency formatting consistency**
    - **Validates: Requirements 2.2, 2.5, 2.6**
  
  - [-] 11.3 Create pricing comparison table
    - Implement table showing feature availability across tiers
    - Use responsive layout (horizontal scroll on mobile if needed)
    - Style with dark theme and clear visual hierarchy
    - _Requirements: 2.4_

- [-] 12. Create page layouts and routing
  - [ ] 12.1 Set up root layout with metadata
    - Configure app/layout.tsx with fonts and global styles
    - Add default metadata (title, description, Open Graph, Twitter)
    - Include organization JSON-LD structured data
    - _Requirements: 10.1, 10.2, 10.4_
  
  - [x] 12.2 Create Home page (app/page.tsx)
    - Compose Hero, Features, and CTA sections
    - Add page-specific metadata
    - Implement static generation (SSG)
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6_
  
  - [x] 12.3 Create Pricing page (app/pricing/page.tsx)
    - Add PricingTiers and comparison table
    - Include page-specific metadata
    - Add product JSON-LD structured data
    - Implement static generation (SSG)
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6_
  
  - [x] 12.4 Create About page (app/about/page.tsx)
    - Add company story and product vision content
    - Include problem statement and target audience
    - Add accessibility messaging
    - Implement static generation (SSG)
    - _Requirements: 3.1, 3.2, 3.3, 3.4_
  
  - [x] 12.5 Create Contact page (app/contact/page.tsx)
    - Add ContactForm component
    - Include page-specific metadata
    - Implement server-side rendering (SSR)
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_
  
  - [ ] 12.6 Create Demo page (app/demo/page.tsx)
    - Add ContactForm component with demo variant
    - Include date/time picker fields
    - Implement server-side rendering (SSR)
    - _Requirements: 4.4_

- [ ] 13. Implement responsive design
  - [ ] 13.1 Add responsive breakpoints to all components
    - Configure mobile (< 768px), tablet (768-1024px), desktop (> 1024px) layouts
    - Test all components at different viewport sizes
    - Ensure no horizontal scrolling at any width
    - _Requirements: 6.1, 6.2, 6.3, 6.5_
  
  - [ ]* 13.2 Write property test for responsive layout
    - **Property 9: Responsive layout without horizontal scroll**
    - **Validates: Requirements 6.5**
  
  - [ ] 13.3 Optimize images for responsive display
    - Use Next.js Image component for all images
    - Configure responsive sizes and srcset
    - Add lazy loading for below-fold images
    - Optimize image formats (WebP with fallbacks)
    - _Requirements: 6.6, 8.4_
  
  - [ ]* 13.4 Write property test for image optimization
    - **Property 10: Responsive image optimization**
    - **Property 12: Lazy loading for below-fold images**
    - **Validates: Requirements 6.6, 8.4**

- [x] 14. Checkpoint - Ensure all pages render correctly
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 15. Implement accessibility features
  - [ ] 15.1 Add ARIA labels and semantic HTML
    - Use proper heading hierarchy (h1 → h2 → h3)
    - Add ARIA labels for icon-only buttons
    - Use semantic elements (header, nav, main, section, footer)
    - Add skip-to-main-content link
    - _Requirements: 9.6, 10.3_
  
  - [ ] 15.2 Add keyboard navigation support
    - Ensure all interactive elements are focusable
    - Add visible focus indicators (2px purple outline)
    - Implement escape key handler for mobile menu
    - Test tab order is logical
    - _Requirements: 9.3_
  
  - [ ]* 15.3 Write property test for accessibility
    - **Property 13: Alt text for images**
    - **Property 14: Keyboard focus indicators**
    - **Property 16: ARIA labels for accessibility**
    - **Validates: Requirements 9.2, 9.3, 9.6**
  
  - [ ] 15.4 Implement color contrast compliance
    - Verify all text meets 4.5:1 contrast ratio
    - Verify large text meets 3:1 contrast ratio
    - Test with color contrast analyzer tools
    - _Requirements: 9.4, 9.5_
  
  - [ ]* 15.5 Write property test for color contrast
    - **Property 15: Text color contrast compliance**
    - **Validates: Requirements 9.4, 9.5**
  
  - [ ] 15.6 Add form error announcements
    - Implement aria-live regions for form errors
    - Associate error messages with fields using aria-describedby
    - Test with screen reader
    - _Requirements: 9.7_
  
  - [ ]* 15.7 Write property test for form accessibility
    - **Property 17: Form error announcement**
    - **Validates: Requirements 9.7**

- [ ] 16. Implement SEO optimization
  - [ ] 16.1 Configure page metadata
    - Add unique titles for each page (50-60 characters)
    - Add meta descriptions (150-160 characters)
    - Add Open Graph tags for all pages
    - Add Twitter Card tags
    - _Requirements: 10.1, 10.2, 10.4_
  
  - [ ]* 16.2 Write property test for SEO metadata
    - **Property 18: Unique page titles**
    - **Property 19: Meta description length**
    - **Property 20: Open Graph tags**
    - **Validates: Requirements 10.1, 10.2, 10.4**
  
  - [ ] 16.3 Generate sitemap and robots.txt
    - Create app/sitemap.ts with all public pages
    - Create app/robots.ts with crawling directives
    - Test sitemap.xml is accessible
    - _Requirements: 10.5, 10.6_
  
  - [ ]* 16.4 Write unit test for sitemap
    - Test sitemap includes all pages
    - Test robots.txt has correct directives

- [ ] 17. Implement analytics tracking
  - [ ] 17.1 Set up analytics configuration
    - Install analytics library (Vercel Analytics or GA4)
    - Create analytics utility functions in lib/analytics.ts
    - Implement privacy-respecting tracking
    - Add cookie consent handling
    - _Requirements: 15.5, 15.6_
  
  - [ ] 17.2 Add event tracking
    - Track page views on all pages
    - Track CTA button clicks with event labels
    - Track form submissions as conversion events
    - Track scroll depth on home and pricing pages
    - _Requirements: 15.1, 15.2, 15.3, 15.4_
  
  - [ ]* 17.3 Write property test for analytics
    - **Property 33: Analytics event tracking**
    - **Validates: Requirements 15.1, 15.2, 15.3**

- [ ] 18. Optimize performance
  - [ ] 18.1 Configure font optimization
    - Use next/font for Geist fonts
    - Set font-display: swap
    - Preload critical fonts
    - _Requirements: 8.5_
  
  - [ ] 18.2 Implement code splitting
    - Use dynamic imports for heavy components (Framer Motion)
    - Verify automatic code splitting via Next.js
    - Test bundle sizes with next/bundle-analyzer
    - _Requirements: 8.1, 8.2_
  
  - [ ] 18.3 Configure caching headers
    - Set cache headers for static assets
    - Configure revalidation for static pages
    - Test caching with browser DevTools
    - _Requirements: 8.6_

- [ ] 19. Add error handling and edge cases
  - [ ] 19.1 Create custom error pages
    - Create app/not-found.tsx for 404 errors
    - Create app/error.tsx for 500 errors
    - Style with dark theme and helpful navigation
    - _Requirements: Error Handling section_
  
  - [ ] 19.2 Implement network error handling
    - Add retry mechanism for form submissions
    - Preserve form data in localStorage on error
    - Display user-friendly error messages
    - _Requirements: 4.6, Error Handling section_
  
  - [ ]* 19.3 Write unit tests for error handling
    - Test 404 page renders
    - Test form error preservation
    - Test network error retry

- [ ] 20. Final checkpoint - Run all tests and verify functionality
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 21. Integration and final polish
  - [ ] 21.1 Wire all components together
    - Verify navigation works across all pages
    - Test form submissions end-to-end
    - Verify all CTAs link to correct destinations
    - Test mobile menu on all pages
    - _Requirements: All navigation and CTA requirements_
  
  - [ ] 21.2 Add final visual polish
    - Review all animations and transitions
    - Verify design token consistency
    - Test hover states on all interactive elements
    - Ensure visual hierarchy is clear
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_
  
  - [ ]* 21.3 Run comprehensive integration tests
    - Test complete user journeys (home → pricing → contact)
    - Test mobile navigation flow
    - Test form submission flows
    - Test responsive behavior at all breakpoints

- [ ] 22. Final verification checkpoint
  - Run all unit tests, property tests, and integration tests
  - Verify accessibility with axe-core
  - Check performance with Lighthouse
  - Ensure all requirements are met
  - Ask the user if any issues or questions arise

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties
- Unit tests validate specific examples and edge cases
- All components should be built incrementally and integrated continuously
