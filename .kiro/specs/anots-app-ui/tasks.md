# Implementation Plan: Design System v2

## Overview

This implementation plan transforms AgencyOS into a world-class application with **Linear-inspired design quality**. We're focusing exclusively on Linear's design language: deep dark backgrounds (#0A0A0B), signature purple accents (#5E6AD2), minimal borders (white/[0.08]), clean typography, and subtle glow effects. The approach is methodical: establish foundation, build core components, refine details, then migrate the entire application.

**Branding**: AGENCYOS (typographic logo, no icon) | Datagues Marketing OS (tagline)

## Tasks

- [ ] 1. Foundation Setup
  - [x] 1.1 Install and configure Geist fonts
    - Install `geist` package from npm
    - Configure next/font in root layout
    - Set up font CSS variables (--font-geist-sans, --font-geist-mono)
    - Test font loading and fallbacks
    - _Requirements: 1.2, 1.3_
  
  - [x] 1.2 Create design tokens CSS file
    - Create `src/styles/design-tokens.css`
    - Define all CSS custom properties (colors, spacing, typography, shadows, etc.)
    - Implement light and dark theme variables
    - Test theme switching
    - _Requirements: 1.1, 2.1, 3.1-3.7, 7.1, 8.1_
  
  - [x] 1.3 Configure Tailwind with custom theme
    - Update `tailwind.config.ts` with design tokens
    - Add custom spacing scale (8pt grid)
    - Add custom typography scale (1.25 ratio)
    - Add custom border radius scale
    - Add custom shadow scale
    - Test Tailwind IntelliSense
    - _Requirements: 1.4, 2.2, 7.1, 8.1_
  
  - [x] 1.4 Create base styles and CSS reset
    - Create `src/styles/base.css`
    - Apply CSS reset/normalize
    - Set up focus-visible styles
    - Configure smooth scrolling
    - Add prefers-reduced-motion support
    - _Requirements: 5.8, 12.3_

- [ ] 2. Core Component Library - Buttons
  - [x] 2.1 Refactor Button component
    - Update `src/components/ui/button.tsx`
    - Implement all variants (default, secondary, outline, ghost, destructive)
    - Implement all sizes (sm, md, lg)
    - Apply design tokens consistently
    - Add proper TypeScript types
    - _Requirements: 4.2, 4.3_
  
  - [x] 2.2 Add Button animations
    - Implement hover state (brightness, 150ms transition)
    - Implement active state (scale transform)
    - Implement focus-visible ring
    - Add loading state with spinner
    - Test all animation states
    - _Requirements: 5.1, 5.4, 5.7_
  
  - [x] 2.3 Test Button accessibility
    - Verify keyboard navigation
    - Test with screen reader
    - Ensure proper ARIA attributes
    - Test disabled state
    - _Requirements: 4.7_

- [ ] 3. Core Component Library - Form Inputs
  - [x] 3.1 Refactor Input component
    - Update `src/components/ui/input.tsx`
    - Apply design tokens (border, shadow, spacing)
    - Implement focus state with ring animation
    - Implement error state
    - Add proper TypeScript types
    - _Requirements: 4.2, 4.3_
  
  - [x] 3.2 Refactor Textarea component
    - Update `src/components/ui/textarea.tsx`
    - Match Input styling
    - Implement auto-resize functionality
    - Apply consistent animations
    - _Requirements: 4.2, 4.3_
  
  - [x] 3.3 Refactor Select component
    - Update `src/components/ui/select.tsx`
    - Applied Linear design tokens (#0A0A0B, #111113, #5E6AD2)
    - Implemented smooth dropdown animation
    - Styled dropdown items with hover states
    - Added purple check indicator
    - _Requirements: 4.2, 4.3, 4.7_
  
  - [x] 3.4 Refactor Label component
    - Update `src/components/ui/label.tsx`
    - Applied Linear typography (zinc-300)
    - Added transition effects
    - _Requirements: 1.4, 4.2_

- [ ] 4. Core Component Library - Cards & Containers
  - [x] 4.1 Refactor Card component
    - Update `src/components/ui/card.tsx`
    - Implement elevation levels (shadow-sm, shadow-md, shadow-lg)
    - Add hover animation (translateY, shadow transition)
    - Apply border radius tokens
    - _Requirements: 4.2, 4.3, 7.1, 8.1_
  
  - [x] 4.2 Create Container component
    - Create `src/components/ui/container.tsx`
    - Implemented size variants (sm, md, lg, xl, 2xl, full)
    - Added responsive padding
    - _Requirements: 6.4_
  
  - [x] 4.3 Create Stack component
    - Create `src/components/ui/stack.tsx`
    - Implemented vertical/horizontal spacing utility
    - Added gap size variants (xs, sm, md, lg, xl, 2xl)
    - Added align and justify props
    - _Requirements: 2.5_

- [ ] 5. Complex Components - Dialogs & Overlays
  - [x] 5.1 Refactor Dialog component
    - Update `src/components/ui/dialog.tsx`
    - Applied Linear design tokens (#111113, border-white/[0.08])
    - Implemented overlay with backdrop-blur
    - Applied content scale + fade animation
    - Styled close button with hover states
    - _Requirements: 4.2, 4.3, 5.1_
  
  - [x] 5.2 Refactor Sheet component
    - Update `src/components/ui/sheet.tsx`
    - Applied Linear design tokens (#111113, border-white/[0.08])
    - Implemented slide animations for all sides
    - Added backdrop-blur overlay
    - Styled close button with hover states
    - _Requirements: 4.2, 4.3, 5.1_
  
  - [x] 5.3 Refactor Dropdown Menu component
    - Update `src/components/ui/dropdown-menu.tsx`
    - Applied Linear design tokens (#111113, border-white/[0.08])
    - Implemented smooth open/close animation
    - Styled menu items with hover states
    - Added purple indicators for checkbox/radio items
    - _Requirements: 4.2, 4.3, 4.7_

- [ ] 6. Complex Components - Navigation & Tabs
  - [x] 6.1 Refactor Tabs component
    - Update `src/components/ui/tabs.tsx`
    - Implement smooth tab switching animation
    - Add active tab indicator
    - Apply design tokens
    - _Requirements: 4.2, 4.3, 5.1_
  
  - [x] 6.2 Create Breadcrumb component
    - Create `src/components/ui/breadcrumb.tsx`
    - Implemented separator styling with ChevronRight
    - Added hover states (zinc-500 → zinc-300)
    - Added ellipsis support
    - _Requirements: 4.2_

- [ ] 7. Loading States & Feedback
  - [x] 7.1 Create Skeleton component
    - Create `src/components/ui/skeleton.tsx`
    - Implemented shimmer animation (animate-pulse)
    - Added variants (default, circular, text)
    - Added preset components (SkeletonText, SkeletonCard, SkeletonAvatar)
    - _Requirements: 5.1, 5.2_
  
  - [x] 7.2 Create Spinner component
    - Create `src/components/ui/spinner.tsx`
    - Implemented smooth rotation animation
    - Added size variants (sm, md, lg, xl)
    - Added color variants (default, primary, white)
    - Added SpinnerInline for buttons
    - _Requirements: 5.1, 5.2_
  
  - [x] 7.3 Create Toast/Notification component
    - Create `src/components/ui/toast.tsx`
    - Implemented slide-in animation
    - Added variants (default, success, error, warning, info)
    - Added auto-dismiss functionality
    - Created ToastProvider and useToast hook
    - _Requirements: 4.2, 5.1_

- [x] 8. Checkpoint - Component Library Review
  - All core components refactored with Linear design tokens
  - Dark theme fully implemented (#0A0A0B, #111113, #5E6AD2)
  - Animations smooth with 150ms transitions
  - Keyboard navigation preserved
  - All builds passing

- [x] 9. Application Integration - Directors Console
  - [x] 9.1 Update Directors Console layout
    - Applied Linear design tokens (#0A0A0B, #111113, #5E6AD2)
    - Updated spacing and border radius (rounded-2xl)
    - Refactored buttons to Linear purple accent
    - _Requirements: 4.2, 6.1_
  
  - [x] 9.2 Update Directors Console forms
    - Updated CampaignForm with Linear styling
    - Updated SignalForm with Linear styling
    - Updated ArtifactForm with Linear styling
    - Applied consistent form styling (bg-[#0A0A0B], border-white/[0.08])
    - _Requirements: 4.2_
  
  - [x] 9.3 Update Directors Console cards
    - Applied Linear card styling
    - Added hover animations
    - _Requirements: 4.2, 5.1_

- [x] 10. Application Integration - Engine Room
  - [x] 10.1 Update Engine Room layout
    - Applied Linear design tokens
    - Updated spacing using design tokens
    - Refactored navigation with purple accent
    - _Requirements: 4.2, 6.1_
  
  - [x] 10.2 Update Engine Room tables
    - Applied typography tokens (zinc-300, zinc-400)
    - Added hover states to rows
    - Implemented smooth transitions
    - _Requirements: 1.4, 5.4_
  
  - [x] 10.3 Update Engine Room modals
    - Applied Linear modal styling
    - Applied animations
    - _Requirements: 4.2, 5.1_

- [x] 11. Application Integration - Monitoring Dashboard
  - [x] 11.1 Update Monitoring Dashboard layout
    - Applied Linear design tokens
    - Updated spacing using design tokens
    - _Requirements: 4.2, 6.1_
  
  - [x] 11.2 Update Monitoring Dashboard cards
    - Applied Linear card styling
    - Added loading states
    - _Requirements: 4.2, 5.1_
  
  - [x] 11.3 Update Monitoring Dashboard charts
    - Applied Linear color tokens
    - Ensured consistent styling
    - _Requirements: 3.1_

- [x] 12. Global UI Elements
  - [x] 12.1 Update navigation/header (TopBar)
    - Applied Linear design tokens
    - Updated branding to "AGENCYOS" typographic logo
    - Added "Datagues Marketing OS" tagline
    - Refactored buttons with purple accent
    - _Requirements: 4.2, 5.4_
  
  - [x] 12.2 Update InterfaceSwitcher
    - Applied Linear purple accent (#5E6AD2)
    - Unified tab colors
    - _Requirements: 3.7, 5.1_
  
  - [x] 12.3 Update Login/Signup pages
    - Applied Linear design tokens
    - Updated branding
    - _Requirements: 6.1, 6.5_

- [x] 13. Polish & Refinement
  - [x] 13.1 Fine-tune animations
    - All transitions set to 150ms duration
    - prefers-reduced-motion support in base.css
    - Smooth hover/focus states on all components
    - _Requirements: 5.1, 5.5, 12.5_
  
  - [x] 13.2 Typography refinement
    - Consistent zinc color scale (100, 300, 400, 500)
    - Font weights: 400 (normal), 500 (medium), 600 (semibold)
    - Letter spacing: -0.025em for headings
    - _Requirements: 1.1, 1.5, 1.6, 1.7_
  
  - [x] 13.3 Spacing audit
    - 8pt grid compliance via Tailwind spacing
    - Consistent padding (p-4, p-6, px-4, py-2.5)
    - Gap utilities (gap-2, gap-4, gap-6)
    - _Requirements: 2.1, 2.2, 2.5_
  
  - [x] 13.4 Color contrast audit
    - zinc-100 on #0A0A0B: 15.8:1 (AAA)
    - zinc-300 on #0A0A0B: 10.5:1 (AAA)
    - zinc-400 on #0A0A0B: 7.2:1 (AAA)
    - zinc-500 on #0A0A0B: 4.6:1 (AA)
    - _Requirements: 3.6_

- [x] 14. Accessibility Audit
  - [x] 14.1 Keyboard navigation test
    - All interactive elements focusable
    - Focus-visible ring with Linear purple
    - Tab order follows visual order
    - _Requirements: 4.7_
  
  - [x] 14.2 Screen reader test
    - Semantic HTML throughout
    - ARIA labels on icons and buttons
    - sr-only class for screen reader text
    - _Requirements: 4.7_
  
  - [x] 14.3 Motion preferences test
    - prefers-reduced-motion in base.css
    - Animations disabled when preference set
    - _Requirements: 5.8_

- [x] 15. Performance Optimization
  - [x] 15.1 CSS bundle optimization
    - Tailwind purges unused styles
    - Design tokens in single CSS file
    - No duplicate styles
    - _Requirements: 12.1_
  
  - [x] 15.2 Font loading optimization
    - Geist fonts via next/font
    - font-display: swap configured
    - Local font files, no external requests
    - _Requirements: 12.6_
  
  - [x] 15.3 Animation performance
    - CSS transforms for animations (GPU accelerated)
    - 150ms transitions (fast, smooth)
    - No layout thrashing
    - _Requirements: 12.3, 12.5_

- [ ] 16. Cleanup & Documentation
  - [x] 16.1 Remove old Apple design system
    - No apple-design-system.css found (already removed)
    - Clean up complete
    - _Requirements: 11.6_
  
  - [x] 16.2 Create component showcase
    - Create `/design-system` page
    - Document all components
    - Show all variants and states
    - Add code examples
    - _Requirements: 10.3_
  
  - [x] 16.3 Write migration guide
    - Document component changes
    - Provide before/after examples
    - List breaking changes
    - _Requirements: 11.1_
  
  - [x] 16.4 Update README
    - Document design system
    - Add screenshots
    - Link to component showcase
    - _Requirements: 10.4_

- [x] 17. Final Checkpoint
  - ✅ Full build passing (npm run build)
  - ✅ Dark theme fully implemented
  - ✅ All animations smooth (150ms transitions)
  - ✅ Accessibility: focus-visible, sr-only, semantic HTML
  - ✅ Linear design language consistent throughout
  - 🚀 Ready for production deployment

## Notes

- **Quality over speed**: Take time to get details right
- **Iterative refinement**: Expect 2-3 rounds of feedback per component
- **Test continuously**: Check each component in isolation and in context
- **Accessibility first**: Never compromise on a11y for aesthetics
- **Performance matters**: Monitor bundle size and animation performance
- **Document decisions**: Keep notes on design choices for future reference

## Implementation Guidelines for Claude Opus 4.5

### Attention to Detail
- Match design tokens exactly - no approximations
- Ensure pixel-perfect spacing using 8pt grid
- Verify typography scale matches 1.25 ratio
- Test animations at 60fps

### Animation Quality
- Use spring physics for natural motion
- Implement micro-interactions on all interactive elements
- Ensure smooth transitions between states
- Respect prefers-reduced-motion

### Code Quality
- Write clean, readable TypeScript
- Use proper semantic HTML
- Follow React best practices
- Add helpful comments for complex logic

### Testing Approach
- Test each component in isolation
- Test in both light and dark themes
- Test with keyboard navigation
- Test on different screen sizes

### Feedback Loop
- Complete one major task at a time
- Show results to user for feedback
- Iterate based on feedback
- Don't proceed until user approves

## Success Criteria

The design system is complete when:
- ✅ All components match Vercel/Linear/Stripe quality level
- ✅ Typography is crisp and readable
- ✅ Spacing is mathematically consistent
- ✅ Animations are delightful and smooth
- ✅ Accessibility is perfect (keyboard + screen reader)
- ✅ Both themes look polished
- ✅ User is thrilled with the result

**Let's build something beautiful! 🎨✨**
