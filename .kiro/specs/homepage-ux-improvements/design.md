# Homepage UX Improvements - Design Document

## 1. Design Overview

This design transforms the ANOTS marketing homepage from a feature-heavy, unclear value proposition into a conversion-optimized, mobile-first experience. We'll apply lessons from the Brand Room's successful UX patterns (celebration loading, Turkish microcopy, clear visual hierarchy) to create an engaging, trust-building homepage.

**Core Design Principles:**
- **Clarity First**: Value proposition visible in 3 seconds
- **Mobile-First**: Vertical stack, touch-friendly, no horizontal scroll
- **Conversion-Focused**: Sticky CTA, clear pricing, minimal friction
- **Trust-Building**: Show, don't tell (like Brand Room's provenance UI)

## 2. Architecture

### 2.1 Component Structure

```
src/app/page.tsx (Homepage)
├── Hero (Enhanced)
│   ├── Value Proposition
│   ├── ANOT Explainer (Tooltip/Inline)
│   ├── Primary CTA (Start Free)
│   └── Secondary CTA (Watch Demo)
├── Features (Simplified: 3 core)
│   ├── Feature Card (Brand Room)
│   ├── Feature Card (AI Team)
│   └── Feature Card (Activity Hub)
├── How It Works (New)
│   └── 3-Step Visual Flow
├── Pricing Teaser (New)
│   └── "Starting at $0/mo - 3 ANOTs Free"
└── Footer (Existing)

Global:
└── StickyCTA (New)
    └── Appears after 50vh scroll
```

### 2.2 Data Flow

```
User lands on homepage
    ↓
Hero loads (SSR)
    ↓
User scrolls past 50vh
    ↓
StickyCTA appears (client-side)
    ↓
User clicks CTA
    ↓
Navigate to /signup with utm_source=homepage
```

### 2.3 State Management

**Client State (React useState):**
- `showStickyCTA: boolean` - Sticky CTA visibility
- `showAnotTooltip: boolean` - ANOT explainer tooltip
- `selectedFeature: number` - Feature carousel index (mobile)

**No server state needed** - All content is static/SSR

## 3. Detailed Design

### 3.1 Hero Section Enhancement

**Current Strengths:**
- ✅ **LambdaHero Background**: Stunning 3D particle network with mouse tracking and scroll-fade effect
- ✅ **Full-screen Impact**: h-screen with proper overflow handling
- ✅ **Smooth Animations**: FadeIn components with staggered delays

**Issues to Fix:**
- "ANOT" concept unclear
- CTA hierarchy weak (primary vs secondary look similar)
- No pricing transparency

**Design Solution:**

```tsx
<section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#0A0A0B]">
  {/* Keep the amazing LambdaHero background with scroll fade */}
  <div style={{ opacity: scrollOpacity }} className="transition-opacity duration-100">
    <LambdaHero />
  </div>

  {/* Content Overlay */}
  <div className="relative z-10 flex items-center justify-center w-full h-full px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-4xl text-center">
      
      {/* Value Proposition - Enhanced with Meta-Marketing Hook */}
      <FadeIn delay={0}>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FAFAFA]">
          If You're Here,{' '}
          <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            ANOTs
            <TooltipTrigger>
              <InfoIcon className="inline-block ml-2 h-5 w-5 text-purple-400" />
            </TooltipTrigger>
          </span>
          {' '}Are Already Working
        </h1>
      </FadeIn>

      {/* Benefit Statement - Meta + Value */}
      <FadeIn delay={200}>
        <p className="mt-8 text-base sm:text-lg lg:text-xl leading-relaxed text-[#D4D4D8]/90 max-w-3xl mx-auto">
          The same AI team that brought you here will power your marketing.
          <br />
          Qubik proposes, Themis reviews, Core synthesizes—
          <span className="text-purple-400 font-medium">you approve.</span>
        </p>
      </FadeIn>

      {/* CTA Hierarchy - Enhanced */}
      <FadeIn delay={300}>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          {/* Primary CTA - Dominant */}
          <Button
            variant="primary"
            size="lg"
            className="w-full sm:w-auto bg-[#5E6AD2] hover:bg-[#4E5AC2] text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-purple-500/20"
          >
            Start Free - 3 ANOTs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          {/* Secondary CTA - Subdued */}
          <Button
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto border border-white/20 text-zinc-300 hover:bg-white/5"
          >
            <PlayCircle className="mr-2 h-5 w-5" />
            Watch Demo (2 min)
          </Button>
        </div>
      </FadeIn>

      {/* Pricing Badge - New */}
      <FadeIn delay={400}>
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-400">
          <CheckCircle className="h-4 w-4 text-emerald-400" />
          <span>Starting at $0/mo • No credit card required</span>
        </div>
      </FadeIn>
    </div>
  </div>
</section>
```

**Visual Hierarchy:**
1. **LambdaHero Background** (full-screen, animated, scroll-fade)
2. **Headline** (4xl-6xl, gradient on "ANOTs" with tooltip)
3. **Benefit statement** (lg-xl, zinc-400 with purple accent)
4. **Primary CTA** (bright purple #5E6AD2, large, shadow)
5. **Secondary CTA** (ghost, border, subdued)
6. **Pricing badge** (small, emerald check, reassuring)

**Responsive Behavior:**
- Desktop: Side-by-side CTAs, 6xl headline
- Tablet: Side-by-side CTAs, 5xl headline
- Mobile: Stacked CTAs (full-width), 4xl headline

**Animation Timing:**
- LambdaHero: Always visible, fades on scroll
- Headline: FadeIn delay 0ms
- Benefit: FadeIn delay 200ms
- CTAs: FadeIn delay 300ms
- Badge: FadeIn delay 400ms

### 3.2 ANOT Explainer Tooltip

**Design Pattern:** Inspired by Brand Room's provenance tooltips

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <button className="inline-flex items-center gap-1 text-[#5E6AD2] hover:text-[#4E5AC2]">
      ANOTs
      <InfoIcon className="h-4 w-4" />
    </button>
  </TooltipTrigger>
  <TooltipContent className="max-w-xs">
    <div className="space-y-2">
      <p className="font-semibold text-sm">What's an ANOT?</p>
      <p className="text-xs text-zinc-400">
        ANOT = Autonomous Narrative Orchestration Task
      </p>
      <p className="text-xs text-zinc-300">
        Think of it as a smart marketing workflow that runs itself.
        Your AI team proposes, reviews, and executes - but only with your approval.
      </p>
      <div className="flex items-center gap-2 pt-2 border-t border-white/10">
        <Sparkles className="h-3 w-3 text-purple-400" />
        <span className="text-xs text-zinc-500">
          Example: "Create Instagram post about new product"
        </span>
      </div>
    </div>
  </TooltipContent>
</Tooltip>
```

**Accessibility:**
- Keyboard accessible (Tab to focus, Enter to open)
- ARIA labels: `aria-describedby="anot-explainer"`
- Screen reader friendly

### 3.3 Feature Section Simplification

**Current:** 6 features (overwhelming)
**New:** 3 core features (focused)

**Selected Features:**
1. **Brand Room** - "Your brand, understood by AI"
2. **AI Team** - "Three agents, one goal: perfect content"
3. **Activity Hub** - "See everything, control everything"

**Moved to /features:**
- ANOT Creation
- ANOT Library
- Approval Workflows
- Integrations

**Design Pattern:**

```tsx
<section className="features">
  <h2>Everything you need to run marketing with AI</h2>
  
  <div className="feature-grid">
    {/* Feature 1: Brand Room */}
    <FeatureCard
      icon={<Palette />}
      title="Brand Room"
      description="Import your website, extract colors, fonts, logos, and tone. AI learns your brand in 60 seconds."
      visual={<BrandRoomPreview />}
      badge="✨ MAGIC Import"
    />

    {/* Feature 2: AI Team */}
    <FeatureCard
      icon={<Users />}
      title="AI Team"
      description="Qubik proposes, Themis reviews, Core synthesizes. Three perspectives, zero execution without approval."
      visual={<AITeamPreview />}
      badge="🛡️ Trust by Design"
    />

    {/* Feature 3: Activity Hub */}
    <FeatureCard
      icon={<Calendar />}
      title="Activity Hub"
      description="Daily focus, 7-day timeline, 30-day view. See what's scheduled, what's published, what's pending."
      visual={<ActivityHubPreview />}
      badge="📊 Full Visibility"
    />
  </div>

  {/* See All Features Link */}
  <div className="text-center mt-8">
    <Link href="/features" className="text-[#5E6AD2] hover:text-[#4E5AC2]">
      See all features
      <ArrowRight className="inline ml-1" />
    </Link>
  </div>
</section>
```

**Mobile Behavior:**
- Desktop: 3-column grid
- Tablet: 2-column grid
- Mobile: Vertical stack (no horizontal scroll)

### 3.4 Sticky CTA Implementation

**Trigger:** User scrolls past 50vh (hero section)
**Behavior:** Slide up from bottom with animation

```tsx
'use client';

export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      setShow(scrolled > viewportHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50',
        'bg-[#0A0A0B]/95 backdrop-blur-xl border-t border-white/10',
        'transform transition-transform duration-300',
        show ? 'translate-y-0' : 'translate-y-full'
      )}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-zinc-100">
            Ready to start?
          </p>
          <p className="text-xs text-zinc-500">
            3 ANOTs free, no credit card required
          </p>
        </div>
        <Button
          variant="primary"
          size="lg"
          className="bg-[#5E6AD2] hover:bg-[#4E5AC2]"
        >
          Start Free
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
```

**Performance:**
- Throttled scroll listener (max 1 check per 100ms)
- CSS transform (GPU-accelerated)
- No layout shift

### 3.5 How It Works Section (New)

**Goal:** Show the ANOTS workflow visually

```tsx
<section className="how-it-works">
  <h2>How It Works</h2>
  <p className="subtitle">From idea to published content in 3 steps</p>

  <div className="workflow-steps">
    {/* Step 1 */}
    <WorkflowStep
      number="01"
      title="Tell Your AI Team"
      description="Type what you want or upload a screenshot. Your AI team understands context."
      icon={<MessageSquare />}
      color="purple"
    />

    {/* Step 2 */}
    <WorkflowStep
      number="02"
      title="Review & Approve"
      description="Qubik proposes, Themis reviews, Core synthesizes. You approve or reject."
      icon={<CheckCircle />}
      color="blue"
    />

    {/* Step 3 */}
    <WorkflowStep
      number="03"
      title="Publish Everywhere"
      description="Approved content goes live on Instagram, X, WordPress, or wherever you need."
      icon={<Rocket />}
      color="emerald"
    />
  </div>
</section>
```

**Visual Design:**
- Numbered steps with gradient icons
- Connecting lines between steps (desktop)
- Vertical stack (mobile)

### 3.6 Mobile Responsiveness

**Breakpoints:**
- `sm`: 640px (mobile)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)

**Mobile-Specific Changes:**

1. **Hero:**
   - Font size: 5xl → 3xl
   - CTAs: Side-by-side → Stacked
   - Padding: Reduced

2. **Features:**
   - Grid: 3-column → 1-column
   - Cards: Horizontal → Vertical
   - Images: Full-width

3. **How It Works:**
   - Steps: Horizontal → Vertical
   - Connecting lines: Hidden

4. **Sticky CTA:**
   - Text: Shortened
   - Button: Full-width on mobile

**Touch Targets:**
- All buttons: min 44x44px
- Links: min 44x44px
- Tooltip triggers: min 44x44px

## 4. Styling & Design Tokens

### 4.1 Color Palette (Existing)

```css
--background: #0A0A0B;
--foreground: #FAFAFA;
--primary: #5E6AD2;
--primary-hover: #4E5AC2;
--border: rgba(255, 255, 255, 0.08);
--border-hover: rgba(255, 255, 255, 0.16);
```

### 4.2 Typography

```css
/* Headings */
h1: text-5xl font-bold (48px)
h2: text-4xl font-bold (36px)
h3: text-2xl font-semibold (24px)

/* Body */
p: text-base (16px)
small: text-sm (14px)
tiny: text-xs (12px)

/* Mobile */
h1: text-3xl (30px)
h2: text-2xl (24px)
```

### 4.3 Spacing

```css
/* Sections */
section: py-24 (desktop), py-16 (mobile)

/* Cards */
card: p-6 (desktop), p-4 (mobile)

/* Gaps */
gap-lg: gap-8
gap-md: gap-4
gap-sm: gap-2
```

### 4.4 Animations

```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Slide Up */
@keyframes slideUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}

/* Gradient Shift */
@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

## 5. Performance Considerations

### 5.1 Core Web Vitals Targets

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### 5.2 Optimization Strategies

1. **Image Optimization:**
   - Use Next.js Image component
   - WebP format with PNG fallback
   - Lazy load below-the-fold images
   - Responsive srcset

2. **Code Splitting:**
   - Dynamic import for StickyCTA
   - Dynamic import for Tooltip
   - Lazy load feature visuals

3. **Font Loading:**
   - Preload critical fonts
   - font-display: swap
   - Subset fonts (Latin only)

4. **CSS:**
   - Critical CSS inline
   - Non-critical CSS deferred
   - Purge unused Tailwind classes

### 5.3 Bundle Size Budget

- **Initial JS**: < 100KB (gzipped)
- **Initial CSS**: < 20KB (gzipped)
- **Total Page Weight**: < 500KB

## 6. Accessibility (WCAG 2.1 AA)

### 6.1 Keyboard Navigation

- All interactive elements focusable
- Logical tab order
- Focus indicators visible (2px outline)
- Skip to main content link

### 6.2 Screen Readers

- Semantic HTML (header, nav, main, section, footer)
- ARIA labels for icons
- Alt text for images
- Live regions for dynamic content

### 6.3 Color Contrast

- Text on background: 7:1 (AAA)
- Interactive elements: 4.5:1 (AA)
- Focus indicators: 3:1 (AA)

### 6.4 Motion

- Respect prefers-reduced-motion
- Disable animations if requested
- No auto-playing videos

## 7. Analytics & Tracking

### 7.1 Events to Track

```typescript
// Hero CTA clicks
trackEvent('cta_click', {
  location: 'hero',
  variant: 'primary', // or 'secondary'
  text: 'Start Free - 3 ANOTs'
});

// Sticky CTA appearance
trackEvent('sticky_cta_shown', {
  scroll_depth: '50vh'
});

// ANOT tooltip opens
trackEvent('anot_tooltip_opened', {
  location: 'hero'
});

// Feature card clicks
trackEvent('feature_click', {
  feature_name: 'Brand Room',
  position: 1
});

// See all features link
trackEvent('see_all_features_click', {
  location: 'homepage'
});
```

### 7.2 Conversion Funnel

```
Homepage View
    ↓
Hero CTA Click (or Sticky CTA Click)
    ↓
Signup Page View
    ↓
Signup Complete
```

## 8. Testing Strategy

### 8.1 Unit Tests

- StickyCTA scroll behavior
- Tooltip open/close
- Mobile menu toggle
- CTA click handlers

### 8.2 Integration Tests

- Hero section renders correctly
- Features section shows 3 cards
- Sticky CTA appears after scroll
- Mobile responsive behavior

### 8.3 E2E Tests

- User lands on homepage
- User scrolls to features
- User clicks primary CTA
- User navigates to signup

### 8.4 Visual Regression Tests

- Homepage desktop screenshot
- Homepage mobile screenshot
- Sticky CTA appearance
- Tooltip appearance

## 9. Rollout Plan

### Phase 1: Hero Section (2-3 hours)
- Enhance value proposition
- Add ANOT explainer tooltip
- Improve CTA hierarchy
- Add pricing badge

### Phase 2: Mobile Responsiveness (2-3 hours)
- Convert feature cards to vertical stack
- Ensure touch targets meet 44x44px
- Test on iOS Safari and Android Chrome

### Phase 3: Sticky CTA (1-2 hours)
- Implement scroll listener
- Add slide-up animation
- Test performance

### Phase 4: Feature Simplification (2-3 hours)
- Reduce to 3 core features
- Add "See all features" link
- Update /features page with moved features

### Phase 5: Polish & Testing (1-2 hours)
- Accessibility audit
- Performance audit
- Cross-browser testing
- Analytics verification

## 10. Success Criteria

### 10.1 User Understanding
- [ ] "What is ANOTS?" support queries decrease by 40%
- [ ] Time to first CTA click decrease by 25%
- [ ] Bounce rate decrease by 15%

### 10.2 Conversion
- [ ] CTA click-through rate increase by 30%
- [ ] Sign-up conversion rate increase by 20%
- [ ] Mobile conversion rate matches desktop

### 10.3 Performance
- [ ] Lighthouse score > 90
- [ ] LCP < 2.5s
- [ ] CLS < 0.1

### 10.4 Accessibility
- [ ] WCAG 2.1 AA compliant
- [ ] Keyboard navigation works
- [ ] Screen reader friendly

## 11. Future Enhancements (Out of Scope)

- [ ] Demo video embed
- [ ] Interactive ANOT builder
- [ ] Social proof section (when customers available)
- [ ] A/B testing framework
- [ ] Personalized hero based on UTM params
- [ ] Animated feature previews
- [ ] Customer testimonials carousel

---

**Design Status:** Ready for Implementation
**Estimated Effort:** 7-11 hours
**Priority:** HIGH
