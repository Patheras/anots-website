# Requirements Document: Mobile UX Optimization

## Introduction

This specification defines the requirements for optimizing the ANOTS marketing website (anots-web) for mobile devices. The goal is to achieve "obsessive senior UI designer/frontend developer level" mobile UX with meticulous attention to touch targets, typography, spacing, performance, and accessibility. The website currently uses a Linear-inspired dark design with responsive breakpoints (sm: 640px, md: 768px, lg: 1024px) and consists of a 871-line homepage with multiple complex sections including Hero, Tech Stack, Features, Brand Room timeline, FAQ, and Pricing.

## Glossary

- **Touch_Target**: An interactive element (button, link, input) that users tap on mobile devices
- **Mobile_Viewport**: Screen widths below 768px (sm and below in Tailwind)
- **Tablet_Viewport**: Screen widths between 768px and 1024px (md breakpoint)
- **Hero_Section**: The full-screen landing section with typing animation and CTAs
- **Sticky_CTA**: The fixed bottom call-to-action bar that appears on scroll
- **Brand_Room_Timeline**: The vertical timeline section with alternating left/right layout
- **Horizontal_Scroll_Section**: The Features section with horizontally scrollable cards
- **Navigation_Menu**: The top navigation bar with mobile hamburger menu
- **Linear_Design_System**: The design system inspired by Linear's aesthetic (dark theme, subtle borders, refined typography)

## Requirements

### Requirement 1: Touch Target Accessibility

**User Story:** As a mobile user, I want all interactive elements to be easily tappable, so that I can navigate the website without frustration or mis-taps.

#### Acceptance Criteria

1. THE Touch_Target SHALL have a minimum size of 44x44 pixels on Mobile_Viewport
2. WHEN two Touch_Targets are adjacent, THE System SHALL maintain a minimum spacing of 8 pixels between them
3. THE Navigation_Menu hamburger button SHALL be at least 44x44 pixels with proper touch padding
4. THE Sticky_CTA close button SHALL be at least 44x44 pixels with proper touch padding
5. THE Navigation_Menu dropdown items SHALL have a minimum height of 44 pixels on Mobile_Viewport
6. THE Button elements SHALL have a minimum height of 44 pixels on Mobile_Viewport
7. THE Link elements in body text SHALL have adequate padding (minimum 8px vertical) for touch interaction

### Requirement 2: Typography and Readability

**User Story:** As a mobile user, I want text to be easily readable on small screens, so that I can consume content without straining my eyes or zooming.

#### Acceptance Criteria

1. THE System SHALL use a minimum font size of 16 pixels for body text on Mobile_Viewport
2. THE System SHALL use a minimum line height of 1.5 for body text on Mobile_Viewport
3. WHEN displaying headings on Mobile_Viewport, THE System SHALL scale heading sizes appropriately (h1: 32-40px, h2: 28-32px, h3: 24-28px)
4. THE System SHALL apply text-balance utility to headings to prevent orphaned words
5. THE System SHALL use a maximum line length of 65 characters for optimal readability
6. THE System SHALL maintain sufficient color contrast (minimum 4.5:1 for body text, 3:1 for large text) against dark backgrounds
7. THE Hero_Section typing animation text SHALL scale down appropriately on Mobile_Viewport (max 40px on screens below 375px)

### Requirement 3: Navigation Optimization

**User Story:** As a mobile user, I want navigation to be simple and intuitive, so that I can quickly access different sections without confusion.

#### Acceptance Criteria

1. WHEN the Navigation_Menu is opened on Mobile_Viewport, THE System SHALL display a full-screen overlay with clear hierarchy
2. THE Navigation_Menu SHALL close automatically when a user selects a menu item
3. WHEN dropdown menus are displayed on Mobile_Viewport, THE System SHALL flatten nested structures to reduce cognitive load
4. THE Navigation_Menu SHALL have a maximum height that fits within the viewport without requiring scroll
5. THE Sticky navigation bar SHALL have a height no greater than 64 pixels on Mobile_Viewport
6. WHEN the user scrolls, THE Navigation_Menu SHALL remain accessible via the sticky header
7. THE Navigation_Menu SHALL provide visual feedback (color change, background) on touch interaction

### Requirement 4: Hero Section Mobile Optimization

**User Story:** As a mobile user, I want the hero section to be impactful but not overwhelming, so that I can quickly understand the value proposition and take action.

#### Acceptance Criteria

1. THE Hero_Section SHALL have a maximum height of 100vh on Mobile_Viewport
2. WHEN the viewport height is less than 600px, THE Hero_Section SHALL reduce to 80vh to prevent excessive scrolling
3. THE Hero_Section typing animation SHALL complete within 3 seconds on Mobile_Viewport
4. THE Hero_Section CTAs SHALL be positioned at the bottom with adequate spacing (minimum 24px from bottom)
5. THE Hero_Section background animation (LambdaHero) SHALL be optimized to maintain 60fps on mobile devices
6. WHEN the user scrolls past the Hero_Section, THE background animation SHALL fade out smoothly
7. THE Hero_Section SHALL ensure CTAs remain visible and accessible without requiring scroll on screens 375px and above

### Requirement 5: Horizontal Scroll UX

**User Story:** As a mobile user, I want horizontal scrolling sections to be intuitive and smooth, so that I can explore content without confusion.

#### Acceptance Criteria

1. THE Horizontal_Scroll_Section SHALL provide visual indicators (fade edges or scroll hints) to show more content is available
2. THE Horizontal_Scroll_Section SHALL use snap scrolling to align cards properly after scroll
3. WHEN a user scrolls horizontally, THE System SHALL maintain smooth 60fps scrolling performance
4. THE Horizontal_Scroll_Section cards SHALL have a width of 90vw on Mobile_Viewport (max 480px)
5. THE Horizontal_Scroll_Section SHALL have adequate padding (16px) on left and right edges
6. THE Horizontal_Scroll_Section SHALL hide scrollbars while maintaining scroll functionality
7. WHEN the user reaches the end of the Horizontal_Scroll_Section, THE System SHALL provide visual feedback (no bounce or clear end indicator)

### Requirement 6: Brand Room Timeline Mobile Layout

**User Story:** As a mobile user, I want the Brand Room timeline to be easy to follow, so that I can understand the process flow without confusion.

#### Acceptance Criteria

1. WHEN displayed on Mobile_Viewport, THE Brand_Room_Timeline SHALL stack vertically in a single column
2. THE Brand_Room_Timeline SHALL maintain a visible center line with timeline dots
3. THE Brand_Room_Timeline content SHALL be left-aligned with adequate padding (16px) from the timeline line
4. THE Brand_Room_Timeline dots SHALL be at least 12px in diameter for visibility
5. THE Brand_Room_Timeline SHALL use adequate vertical spacing (48px minimum) between steps
6. THE Brand_Room_Timeline text SHALL be readable with minimum 16px font size
7. WHEN the timeline is displayed, THE System SHALL ensure the center line is visible throughout the entire section

### Requirement 7: Spacing and Layout Consistency

**User Story:** As a mobile user, I want consistent spacing throughout the website, so that the design feels cohesive and professional.

#### Acceptance Criteria

1. THE System SHALL use an 8px grid system for all spacing on Mobile_Viewport
2. THE System SHALL use consistent horizontal padding (16px) for all sections on Mobile_Viewport
3. THE System SHALL use consistent vertical padding (48-64px) for section spacing on Mobile_Viewport
4. WHEN displaying cards or containers, THE System SHALL use consistent gap sizes (16px for mobile, 24px for tablet)
5. THE System SHALL ensure no horizontal overflow occurs on any Mobile_Viewport size
6. THE System SHALL maintain consistent border radius (8-12px) across all components
7. THE System SHALL use consistent elevation (box-shadow) for cards and elevated surfaces

### Requirement 8: Performance Optimization

**User Story:** As a mobile user, I want the website to load quickly and run smoothly, so that I can access information without delays or jank.

#### Acceptance Criteria

1. THE System SHALL achieve a First Contentful Paint (FCP) of less than 1.5 seconds on 3G networks
2. THE System SHALL achieve a Largest Contentful Paint (LCP) of less than 2.5 seconds on 3G networks
3. THE System SHALL maintain 60fps during scroll and animations on Mobile_Viewport
4. WHEN images are loaded, THE System SHALL use next/image with proper sizes attribute for responsive images
5. THE System SHALL lazy load images that are below the fold
6. THE System SHALL reduce animation complexity on Mobile_Viewport to maintain performance
7. THE System SHALL use CSS transforms and opacity for animations (GPU-accelerated properties only)
8. THE System SHALL minimize JavaScript bundle size by code-splitting and lazy loading components

### Requirement 9: Form and Input Optimization

**User Story:** As a mobile user, I want form inputs to be easy to use with mobile keyboards, so that I can submit information without frustration.

#### Acceptance Criteria

1. THE System SHALL use appropriate input types (email, tel, url) to trigger correct mobile keyboards
2. THE System SHALL provide adequate spacing (16px minimum) between form fields on Mobile_Viewport
3. THE System SHALL use minimum 16px font size for input fields to prevent iOS zoom
4. WHEN an input receives focus, THE System SHALL provide clear visual feedback (border color, glow)
5. THE System SHALL ensure form labels are clearly associated with their inputs
6. THE System SHALL provide clear error messages with adequate spacing and visibility
7. THE System SHALL ensure submit buttons are at least 44px tall with clear visual hierarchy

### Requirement 10: Sticky CTA Mobile Optimization

**User Story:** As a mobile user, I want the sticky CTA to be helpful but not intrusive, so that I can access it when needed without it blocking content.

#### Acceptance Criteria

1. THE Sticky_CTA SHALL have a maximum height of 72px on Mobile_Viewport
2. THE Sticky_CTA SHALL use backdrop-blur for visual separation from content
3. WHEN the Sticky_CTA is displayed, THE System SHALL ensure it doesn't cover important content
4. THE Sticky_CTA close button SHALL be at least 44x44 pixels with clear visual affordance
5. THE Sticky_CTA SHALL remember user's close preference using localStorage
6. THE Sticky_CTA SHALL only appear after user scrolls past 50vh
7. THE Sticky_CTA text SHALL be concise and readable on small screens (minimum 14px font size)

### Requirement 11: Accessibility and Focus Management

**User Story:** As a mobile user with accessibility needs, I want the website to be fully accessible with screen readers and keyboard navigation, so that I can use the website effectively.

#### Acceptance Criteria

1. THE System SHALL provide proper ARIA labels for all interactive elements
2. THE System SHALL maintain logical focus order throughout the page
3. WHEN using keyboard navigation, THE System SHALL provide visible focus indicators (2px outline minimum)
4. THE System SHALL ensure all images have descriptive alt text
5. THE System SHALL use semantic HTML elements (nav, main, section, article) for proper structure
6. THE System SHALL ensure color is not the only means of conveying information
7. THE System SHALL support screen reader announcements for dynamic content changes

### Requirement 12: Testing and Device Coverage

**User Story:** As a developer, I want comprehensive testing across devices, so that I can ensure consistent UX for all mobile users.

#### Acceptance Criteria

1. THE System SHALL be tested on iPhone SE (375px width) as the minimum supported device
2. THE System SHALL be tested on iPhone 12/13/14 (390px width) as the standard device
3. THE System SHALL be tested on iPhone 14 Pro Max (430px width) as the large device
4. THE System SHALL be tested on Android devices (360px, 412px widths)
5. THE System SHALL be tested on iPad (768px) and iPad Pro (1024px) for tablet experience
6. THE System SHALL be tested with slow 3G network throttling
7. THE System SHALL be tested with both touch and keyboard navigation
8. THE System SHALL be tested with VoiceOver (iOS) and TalkBack (Android) screen readers
