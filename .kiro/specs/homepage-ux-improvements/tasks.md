landing'# Homepage UX Improvements - Implementation Tasks

## Overview

This task list implements the homepage UX improvements in 4 phases: Hero Enhancement, Mobile Responsiveness, Sticky CTA, and Feature Simplification. Each task is designed to be independently testable and incrementally valuable.

**Total Estimated Time:** 7-11 hours

## Tasks

- [ ] 1. Hero Section Enhancement
  
  **Goal:** Improve value proposition clarity, add ANOT explainer, enhance CTA hierarchy, and add pricing transparency.
  
  **Estimated Time:** 2-3 hours
  
  - [x] 1.1 Update Hero Value Proposition
    
    **Goal:** Keep the powerful "If you're here..." meta-marketing hook while adding ANOT explainer and gradient.
    
    **Files to Modify:**
    - `src/components/sections/Hero.tsx`
    - `src/app/page.tsx` (Hero props)
    
    **Changes:**
    - ✅ **Keep LambdaHero background** - It's perfect! Don't touch it.
    - ✅ **Keep scroll-fade effect** - The opacity transition is beautiful.
    - Update headline to: "If You're Here, ANOTs Are Already Working"
    - Add gradient to "ANOTs" text: `bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent`
    - Update subheadline: "The same AI team that brought you here will power your marketing. Qubik proposes, Themis reviews, Core synthesizes—you approve."
    - Add purple accent to "you approve" in purple-400 font-medium
    - Ensure responsive font sizes: text-4xl sm:text-5xl lg:text-6xl
    
    **Definition of Done:**
    - LambdaHero background still animates beautifully
    - Scroll-fade effect still works
    - Meta-marketing hook is preserved ("If you're here...")
    - Gradient applied to "ANOTs" text (red→purple→blue)
    - Subheadline mentions all three agents (Qubik, Themis, Core)
    - Responsive typography works on mobile
    - Visual hierarchy is clear (headline > benefit > CTAs)
  
  - [ ] 1.2 Create ANOT Explainer Tooltip Component
    
    **Goal:** Add tooltip that explains what an ANOT is when user hovers/clicks on "ANOTs" in headline.
    
    **Files to Create:**
    - `src/components/ui/Tooltip.tsx` (if not exists)
    
    **Files to Modify:**
    - `src/components/sections/Hero.tsx`
    
    **Changes:**
    - Create reusable Tooltip component (or use existing from shadcn/ui)
    - Add InfoIcon next to "ANOTs" in headline (inline-block ml-2 h-5 w-5 text-purple-400)
    - Tooltip content (max-w-xs):
      - Title: "What's an ANOT?" (font-semibold text-sm)
      - Definition: "ANOT = Autonomous Narrative Orchestration Task" (text-xs text-zinc-400)
      - Explanation: "The atomic unit of AI-powered marketing. Each ANOT is a self-contained automation that runs after your approval." (text-xs text-zinc-300)
      - Example with icon: "Example: 'Post to Instagram daily at 10am'" (text-xs text-zinc-500 with Sparkles icon)
    - Ensure keyboard accessible (Tab to focus, Enter to open, Escape to close)
    - Add ARIA labels: aria-describedby="anot-explainer"
    - Mobile: Tooltip opens on tap, closes on tap outside
    
    **Definition of Done:**
    - Tooltip appears on hover/click on "ANOTs" text
    - Tooltip content is clear and helpful
    - Keyboard navigation works (Tab, Enter, Escape)
    - Screen reader announces tooltip content
    - Mobile: Tooltip opens on tap, closes on tap outside
    - InfoIcon is visible and purple-colored
    - Tooltip styling matches design system (dark theme)
  
  - [ ] 1.3 Improve CTA Visual Hierarchy
    
    **Goal:** Make primary CTA dominant and secondary CTA subdued.
    
    **Files to Modify:**
    - `src/components/sections/Hero.tsx`
    - `src/components/ui/button.tsx` (if needed)
    
    **Changes:**
    - Primary CTA:
      - Text: "Start Free - 3 ANOTs"
      - Style: bg-[#5E6AD2] hover:bg-[#4E5AC2], large size (px-8 py-4), bold text
      - Add shadow: shadow-lg shadow-purple-500/20
      - Icon: ArrowRight (ml-2 h-5 w-5)
    - Secondary CTA:
      - Text: "Watch Demo (2 min)"
      - Style: variant="secondary", border border-white/20, subdued colors
      - Icon: PlayCircle (mr-2 h-5 w-5)
    - Desktop: Side-by-side layout (flex-row)
    - Mobile: Stacked layout (flex-col), full-width buttons
    - Ensure min 44x44px touch targets on mobile
    - Keep existing FadeIn delay={300}
    
    **Definition of Done:**
    - Primary CTA is visually dominant (bright purple, large, shadow)
    - Secondary CTA is subdued (ghost/secondary variant, border)
    - CTAs are side-by-side on desktop, stacked on mobile
    - Touch targets meet 44x44px minimum on mobile
    - Hover states work correctly
    - Icons are properly sized and positioned
  
  - [ ] 1.4 Add Pricing Transparency Badge
    
    **Goal:** Add reassuring pricing badge below CTAs.
    
    **Files to Modify:**
    - `src/components/sections/Hero.tsx`
    
    **Changes:**
    - Add new FadeIn component with delay={400}
    - Add badge below CTAs with:
      - CheckCircle icon (h-4 w-4 text-emerald-400)
      - Text: "Starting at $0/mo • No credit card required"
      - Style: text-sm text-zinc-400
      - Layout: flex items-center justify-center gap-2
      - Margin: mt-8
    - Center align on desktop and mobile
    
    **Definition of Done:**
    - Badge appears below CTAs with proper spacing
    - CheckCircle icon is visible and emerald-colored
    - Text is clear and reassuring
    - FadeIn animation works (400ms delay)
    - Styling matches design system
    - Responsive on all screen sizes

- [ ] 2. Mobile Responsiveness
  
  **Goal:** Ensure homepage works perfectly on mobile devices with vertical stack, touch-friendly targets, and no horizontal scroll.
  
  **Estimated Time:** 2-3 hours
  
  - [ ] 2.1 Convert Feature Cards to Vertical Stack
    
    **Goal:** Remove horizontal scroll on mobile, stack feature cards vertically.
    
    **Files to Modify:**
    - `src/components/sections/Features.tsx`
    - `src/app/globals.css` (if needed)
    
    **Changes:**
    - Desktop: 3-column grid (grid-cols-3)
    - Tablet: 2-column grid (md:grid-cols-2)
    - Mobile: 1-column stack (grid-cols-1)
    - Remove any horizontal scroll containers
    - Ensure cards are full-width on mobile
    - Add proper spacing between cards (gap-6)
    
    **Definition of Done:**
    - No horizontal scroll on mobile
    - Feature cards stack vertically on mobile
    - Cards are full-width on mobile
    - Spacing is consistent
    - Test on iOS Safari and Android Chrome
  
  - [ ] 2.2 Ensure Touch Target Sizes
    
    **Goal:** All interactive elements meet 44x44px minimum touch target size.
    
    **Files to Modify:**
    - `src/components/sections/Hero.tsx`
    - `src/components/sections/Features.tsx`
    - `src/components/ui/Navigation.tsx`
    - `src/components/ui/button.tsx`
    
    **Changes:**
    - Audit all buttons, links, and interactive elements
    - Ensure min-h-[44px] and min-w-[44px] on mobile
    - Add padding if needed to reach 44x44px
    - Test with finger on actual device
    
    **Definition of Done:**
    - All buttons meet 44x44px minimum
    - All links meet 44x44px minimum
    - Tooltip triggers meet 44x44px minimum
    - Navigation menu items meet 44x44px minimum
    - Test on actual mobile device confirms easy tapping
  
  - [ ] 2.3 Mobile Navigation Testing
    
    **Goal:** Verify navigation menu works correctly on mobile.
    
    **Files to Modify:**
    - `src/components/ui/Navigation.tsx` (if needed)
    
    **Changes:**
    - Test hamburger menu open/close
    - Ensure menu items are tappable
    - Verify menu closes on item click
    - Test on iOS Safari and Android Chrome
    
    **Definition of Done:**
    - Hamburger menu opens and closes smoothly
    - Menu items are easily tappable
    - Menu closes when item is clicked
    - No layout shift when menu opens
    - Works on iOS Safari and Android Chrome

- [ ] 3. Sticky CTA Implementation
  
  **Goal:** Add sticky CTA bar that appears after user scrolls past hero section.
  
  **Estimated Time:** 1-2 hours
  
  - [ ] 3.1 Create StickyCTA Component
    
    **Goal:** Build sticky CTA component with scroll-triggered appearance.
    
    **Files to Create:**
    - `src/components/ui/StickyCTA.tsx`
    
    **Changes:**
    - Create client component ('use client')
    - Add scroll listener with useEffect
    - Show CTA when scrollY > 50vh
    - Slide-up animation (transform translateY)
    - Throttle scroll listener (max 1 check per 100ms)
    - Content:
      - Left: "Ready to start?" + "3 ANOTs free, no credit card required"
      - Right: "Start Free" button with ArrowRight icon
    - Style:
      - Fixed bottom-0, z-50
      - bg-[#0A0A0B]/95 with backdrop-blur-xl
      - border-t border-white/10
    - Mobile: Adjust layout (smaller text, full-width button)
    
    **Definition of Done:**
    - StickyCTA appears after scrolling past 50vh
    - Slide-up animation is smooth (300ms duration)
    - Scroll listener is throttled (no performance issues)
    - Component is responsive (desktop and mobile)
    - Button click navigates to /signup
  
  - [ ] 3.2 Integrate StickyCTA into Homepage
    
    **Goal:** Add StickyCTA to homepage layout.
    
    **Files to Modify:**
    - `src/app/page.tsx`
    
    **Changes:**
    - Import StickyCTA component
    - Add StickyCTA at end of page (after Footer)
    - Ensure z-index doesn't conflict with other elements
    - Test scroll behavior
    
    **Definition of Done:**
    - StickyCTA appears on homepage
    - No z-index conflicts
    - Scroll behavior works correctly
    - No layout shift when CTA appears
  
  - [ ] 3.3 Add Analytics Tracking
    
    **Goal:** Track sticky CTA appearance and clicks.
    
    **Files to Modify:**
    - `src/components/ui/StickyCTA.tsx`
    
    **Changes:**
    - Track event when StickyCTA appears: `sticky_cta_shown`
    - Track event when button clicked: `cta_click` with location='sticky'
    - Use existing analytics utility (or console.log for MVP)
    
    **Definition of Done:**
    - Analytics event fires when StickyCTA appears
    - Analytics event fires when button clicked
    - Events include relevant metadata (scroll_depth, location)

- [ ] 4. Feature Section Simplification
  
  **Goal:** Reduce feature cards from 6 to 3 core features, move others to /features page.
  
  **Estimated Time:** 2-3 hours
  
  - [ ] 4.1 Select and Display 3 Core Features
    
    **Goal:** Show only Brand Room, AI Team, and Activity Hub on homepage.
    
    **Files to Modify:**
    - `src/components/sections/Features.tsx`
    
    **Changes:**
    - Keep only 3 features:
      1. Brand Room - "Your brand, understood by AI"
      2. AI Team - "Three agents, one goal: perfect content"
      3. Activity Hub - "See everything, control everything"
    - Each feature card should have:
      - Icon (Palette, Users, Calendar)
      - Title
      - Description (benefit-focused)
      - Badge (✨ MAGIC Import, 🛡️ Trust by Design, 📊 Full Visibility)
      - Visual preview (image or component)
    - Update grid to 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
    
    **Definition of Done:**
    - Only 3 features displayed on homepage
    - Each feature has icon, title, description, badge, visual
    - Grid is responsive (3-col, 2-col, 1-col)
    - Descriptions are benefit-focused and concise
  
  - [ ] 4.2 Add "See All Features" Link
    
    **Goal:** Add link to /features page for users who want to see more.
    
    **Files to Modify:**
    - `src/components/sections/Features.tsx`
    
    **Changes:**
    - Add centered link below feature grid
    - Text: "See all features"
    - Icon: ArrowRight
    - Style: text-[#5E6AD2] hover:text-[#4E5AC2]
    - Link to /features page
    
    **Definition of Done:**
    - Link appears below feature grid
    - Link is centered
    - Hover state works
    - Link navigates to /features page
  
  - [ ] 4.3 Update /features Page with Moved Features
    
    **Goal:** Ensure /features page includes all 6 features (3 from homepage + 3 moved).
    
    **Files to Modify:**
    - `src/app/features/page.tsx`
    
    **Changes:**
    - Verify all 6 features are displayed:
      1. Brand Room
      2. AI Team
      3. Activity Hub
      4. ANOT Creation
      5. ANOT Library
      6. Approval Workflows
    - Ensure consistent styling with homepage
    - Add breadcrumb navigation (Home > Features)
    
    **Definition of Done:**
    - All 6 features displayed on /features page
    - Styling is consistent with homepage
    - Breadcrumb navigation works
    - Page is responsive

- [ ] 5. Testing & Polish
  
  **Goal:** Ensure all changes work correctly, meet accessibility standards, and perform well.
  
  **Estimated Time:** 1-2 hours
  
  - [ ] 5.1 Accessibility Audit
    
    **Goal:** Verify WCAG 2.1 AA compliance.
    
    **Tasks:**
    - Run axe DevTools on homepage
    - Test keyboard navigation (Tab, Enter, Escape)
    - Test with screen reader (NVDA or VoiceOver)
    - Verify color contrast ratios (text, buttons, links)
    - Check focus indicators (2px outline visible)
    - Verify ARIA labels on icons and interactive elements
    
    **Definition of Done:**
    - No critical accessibility issues
    - Keyboard navigation works for all interactive elements
    - Screen reader announces all content correctly
    - Color contrast meets WCAG AA (4.5:1 for text)
    - Focus indicators are visible
  
  - [ ] 5.2 Performance Audit
    
    **Goal:** Ensure homepage loads quickly and performs well.
    
    **Tasks:**
    - Run Lighthouse audit (target score > 90)
    - Check LCP (target < 2.5s)
    - Check CLS (target < 0.1)
    - Optimize images (WebP format, lazy loading)
    - Verify bundle size (target < 100KB gzipped)
    - Test on slow 3G connection
    
    **Definition of Done:**
    - Lighthouse score > 90
    - LCP < 2.5s
    - CLS < 0.1
    - Images are optimized (WebP, lazy loading)
    - Bundle size < 100KB gzipped
    - Page loads smoothly on slow 3G
  
  - [ ] 5.3 Cross-Browser Testing
    
    **Goal:** Verify homepage works on all major browsers.
    
    **Tasks:**
    - Test on Chrome (desktop and mobile)
    - Test on Safari (desktop and iOS)
    - Test on Firefox (desktop)
    - Test on Edge (desktop)
    - Verify all features work (tooltips, sticky CTA, navigation)
    - Check for layout issues
    
    **Definition of Done:**
    - Homepage works on Chrome, Safari, Firefox, Edge
    - No layout issues on any browser
    - All interactive features work correctly
    - Mobile experience is consistent across iOS and Android
  
  - [ ] 5.4 Analytics Verification
    
    **Goal:** Verify all analytics events are firing correctly.
    
    **Tasks:**
    - Test hero CTA click event
    - Test sticky CTA appearance event
    - Test sticky CTA click event
    - Test ANOT tooltip open event
    - Test feature card click events
    - Test "See all features" link click event
    - Verify events include correct metadata
    
    **Definition of Done:**
    - All analytics events fire correctly
    - Events include relevant metadata (location, variant, etc.)
    - No duplicate events
    - Events can be tracked in analytics dashboard

## Notes

- **Mobile-First:** Test on mobile devices throughout development, not just at the end
- **Incremental Testing:** Test each task as you complete it, don't wait until the end
- **Accessibility:** Use keyboard and screen reader during development, not just for final audit
- **Performance:** Monitor bundle size and Lighthouse score throughout development
- **Design Consistency:** Maintain Linear-inspired design system (colors, spacing, typography)
- **Brand Consistency:** Keep ANOTS gradient signature (red→purple→blue)

## Task Execution Order

1. **Phase 1:** Hero Section Enhancement (Tasks 1.1-1.4)
2. **Phase 2:** Mobile Responsiveness (Tasks 2.1-2.3)
3. **Phase 3:** Sticky CTA Implementation (Tasks 3.1-3.3)
4. **Phase 4:** Feature Simplification (Tasks 4.1-4.3)
5. **Phase 5:** Testing & Polish (Tasks 5.1-5.4)

Each phase builds on the previous one and can be tested independently.

## Success Metrics

After implementation, track these metrics to measure success:

- **User Understanding:**
  - "What is ANOTS?" support queries decrease by 40%
  - Time to first CTA click decrease by 25%

- **Conversion:**
  - CTA click-through rate increase by 30%
  - Sign-up conversion rate increase by 20%
  - Mobile conversion rate matches desktop

- **Engagement:**
  - Bounce rate decrease by 15%
  - Average session duration increase by 20%
  - Scroll depth to features section increase by 25%

- **Performance:**
  - Lighthouse score > 90
  - LCP < 2.5s
  - CLS < 0.1

- **Accessibility:**
  - WCAG 2.1 AA compliant
  - 0 critical accessibility issues
