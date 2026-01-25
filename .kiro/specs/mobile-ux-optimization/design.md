# Design Document: Mobile UX Optimization

## Overview

This design document outlines the technical approach for optimizing the ANOTS marketing website for mobile devices. The optimization focuses on touch accessibility, typography refinement, navigation simplification, performance improvements, and maintaining the Linear-inspired dark aesthetic while ensuring exceptional mobile UX.

The website is built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. The current implementation has responsive breakpoints (sm: 640px, md: 768px, lg: 1024px) but requires mobile-specific optimizations for touch targets, spacing, animations, and component behavior.

## Architecture

### Component Hierarchy

```
app/
├── layout.tsx (Root layout with Navigation, Footer, ChatBot)
├── page.tsx (Homepage with all sections)
└── globals.css (Design system and animations)

components/
├── ui/
│   ├── Navigation.tsx (Mobile menu with dropdowns)
│   ├── StickyCTA.tsx (Sticky bottom CTA)
│   ├── button.tsx (Button component)
│   └── card.tsx (Card component)
├── sections/
│   ├── Hero.tsx (Full-screen hero with typing animation)
│   ├── Features.tsx (Horizontal scroll cards)
│   └── PricingTiers.tsx (Pricing section)
└── animations/
    ├── ScrollReveal.tsx (Scroll-triggered animations)
    └── FadeIn.tsx (Fade-in animations)
```

### Mobile-First Approach

The optimization will follow a mobile-first methodology:
1. Design for 375px (iPhone SE) as the baseline
2. Progressively enhance for larger screens
3. Use Tailwind's responsive utilities (sm:, md:, lg:)
4. Test on real devices throughout development

### Performance Strategy

- **Image Optimization**: Use next/image with proper sizes attribute
- **Animation Optimization**: Reduce complexity on mobile, use GPU-accelerated properties
- **Code Splitting**: Lazy load below-the-fold components
- **Bundle Optimization**: Minimize JavaScript payload for mobile

## Components and Interfaces

### 1. Touch Target System

**Purpose**: Ensure all interactive elements meet minimum 44x44px touch target requirements.

**Implementation**:

```typescript
// tailwind.config.ts - Add custom utilities
module.exports = {
  theme: {
    extend: {
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
      spacing: {
        'touch-gap': '8px', // Minimum gap between touch targets
      }
    }
  }
}
```

**Component Updates**:

```typescript
// Button component - Ensure minimum touch target
<Button className="min-h-touch min-w-touch px-4 py-2">
  Click Me
</Button>

// Navigation menu items
<Link className="block min-h-touch px-3 py-3 rounded-md">
  Menu Item
</Link>

// Sticky CTA close button
<button className="min-w-touch min-h-touch p-2 rounded-md">
  <X className="h-5 w-5" />
</button>
```

### 2. Typography System

**Purpose**: Ensure readable text on all mobile devices with proper scaling.

**Implementation**:

```css
/* globals.css - Mobile typography scale */
@layer base {
  /* Base font size - prevents iOS zoom */
  html {
    font-size: 16px;
  }
  
  /* Mobile-first typography */
  h1 {
    @apply text-[32px] leading-[1.2] tracking-tight;
    @apply sm:text-[40px] md:text-5xl lg:text-6xl;
  }
  
  h2 {
    @apply text-[28px] leading-[1.3] tracking-tight;
    @apply sm:text-[32px] md:text-4xl lg:text-5xl;
  }
  
  h3 {
    @apply text-[24px] leading-[1.4];
    @apply sm:text-[28px] md:text-3xl;
  }
  
  p, .body-text {
    @apply text-base leading-[1.6];
    @apply sm:text-lg;
  }
  
  /* Text balance for headings */
  h1, h2, h3 {
    text-wrap: balance;
  }
}
```

**Component Updates**:

```typescript
// Hero.tsx - Responsive heading
<h1 className="text-[32px] sm:text-[40px] md:text-5xl lg:text-6xl 
               leading-tight tracking-tight text-balance">
  {displayText}
</h1>

// Section headings
<h2 className="text-[28px] sm:text-[32px] md:text-4xl lg:text-5xl 
               font-bold text-[#FAFAFA] text-balance">
  Section Title
</h2>
```

### 3. Navigation Component

**Purpose**: Simplify mobile navigation with flattened structure and proper touch targets.

**Current Issues**:
- Nested dropdowns are complex on mobile
- Menu items may not meet 44px minimum height
- Hamburger button needs verification

**Optimized Implementation**:

```typescript
// Navigation.tsx - Mobile-optimized structure
export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 border-b border-[#1A1A1B]/50 
                    bg-[#0A0A0B]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-[#FAFAFA]">ΛNOTS</span>
          </Link>

          {/* Mobile menu button - 44x44px minimum */}
          <button
            type="button"
            className="md:hidden min-w-touch min-h-touch p-2 rounded-md
                       text-[#D4D4D8] hover:bg-[#1A1A1B] hover:text-[#FAFAFA]
                       focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" 
                 strokeWidth="1.5" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" 
                      d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" 
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu - Full screen overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 
                        bg-[#0A0A0B] overflow-y-auto">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              link.dropdown ? (
                // Flattened dropdown structure
                <div key={link.label} className="space-y-1">
                  <div className="px-3 py-2 text-sm font-semibold 
                                  text-[#FAFAFA]">
                    {link.label}
                  </div>
                  {link.dropdown.map((section) => (
                    <div key={section.category} className="ml-4 space-y-1">
                      <div className="px-3 py-1 text-xs font-medium 
                                      uppercase tracking-wider text-[#71717A]">
                        {section.category}
                      </div>
                      {section.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block rounded-md px-3 py-3 min-h-touch
                                     text-sm text-[#D4D4D8] 
                                     hover:bg-[#1A1A1B] hover:text-[#FAFAFA]
                                     transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="font-medium">{item.label}</div>
                          <div className="text-xs text-[#A1A1AA] mt-0.5">
                            {item.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-3 py-3 min-h-touch
                             text-base font-medium text-[#D4D4D8]
                             hover:bg-[#1A1A1B] hover:text-[#FAFAFA]
                             transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            
            {/* Auth buttons with proper touch targets */}
            <div className="space-y-2 pt-4 border-t border-[#1A1A1B]">
              <a
                href="https://app.anots.com/login"
                className="block rounded-md px-3 py-3 min-h-touch
                           text-base font-medium text-[#D4D4D8]
                           hover:bg-[#1A1A1B] hover:text-[#FAFAFA]"
              >
                Log in
              </a>
              <a href="https://app.anots.com/signup" className="block">
                <Button variant="magic" size="md" 
                        className="w-full min-h-touch">
                  Sign Up
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
```

### 4. Hero Section

**Purpose**: Optimize hero for mobile with reduced height, faster animations, and accessible CTAs.

**Current Issues**:
- Full h-screen may be too tall on mobile
- Typing animation may be too large
- CTAs may be hard to reach on tall screens
- Background animation may cause performance issues

**Optimized Implementation**:

```typescript
// Hero.tsx - Mobile-optimized hero
export function Hero({ headline, subheadline, primaryCTA, secondaryCTA }: HeroProps) {
  const [displayText, setDisplayText] = useState('');
  const [scrollOpacity, setScrollOpacity] = useState(1);
  
  // Reduced typing speed for mobile
  const typingSpeed = typeof window !== 'undefined' && window.innerWidth < 768 
    ? 60  // Faster on mobile
    : 80; // Normal on desktop

  return (
    <section className="relative w-full 
                        h-[80vh] min-h-[500px] max-h-[800px]
                        sm:h-[90vh] sm:min-h-[600px]
                        md:h-screen md:min-h-[600px]
                        overflow-hidden bg-[#0A0A0B]">
      {/* Background animation - Reduced complexity on mobile */}
      <div 
        style={{ opacity: scrollOpacity }} 
        className="transition-opacity duration-100"
      >
        <LambdaHero 
          reducedComplexity={typeof window !== 'undefined' && window.innerWidth < 768}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center 
                      w-full h-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-[32px] sm:text-[40px] md:text-5xl lg:text-6xl 
                         text-[#FAFAFA] font-bold leading-tight tracking-tight 
                         text-balance min-h-[1.2em]">
            {highlightWords(displayText)}
            <span className={`inline-block w-1 h-[0.9em] ml-1 bg-[#5E6AD2] 
                            ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
          </h1>
        </div>
      </div>

      {/* CTAs - Optimized positioning for mobile */}
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 
                      left-0 right-0 z-20 
                      flex flex-col sm:flex-row items-center justify-center 
                      gap-3 px-4">
        <a href={primaryCTA.href} className="w-full sm:w-auto">
          <Button 
            variant="magic" 
            size="lg" 
            className="w-full sm:w-auto min-h-touch font-medium"
          >
            {primaryCTA.text}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </a>
        <Link href={secondaryCTA.href} className="w-full sm:w-auto">
          <Button 
            variant="secondary" 
            size="lg" 
            className="w-full sm:w-auto min-h-touch
                       border-[#27272A] hover:border-[#3F3F46] 
                       hover:bg-[#18181B]"
          >
            {secondaryCTA.text}
          </Button>
        </Link>
      </div>
    </section>
  );
}
```

### 5. Horizontal Scroll Features

**Purpose**: Improve horizontal scroll UX with visual indicators and smooth scrolling.

**Current Issues**:
- No visual indicators for more content
- Cards may be too wide on small screens
- No clear end indicator

**Optimized Implementation**:

```typescript
// page.tsx - Horizontal scroll section
<section className="bg-[#0A0A0B] py-16 sm:py-24 lg:py-32 overflow-hidden">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="mb-12">
      <h2 className="text-[28px] sm:text-[32px] md:text-4xl lg:text-5xl 
                     font-bold text-[#FAFAFA] text-balance">
        Everything you need to automate marketing
      </h2>
    </div>

    {/* Horizontal scroll container with fade indicators */}
    <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
      {/* Left fade indicator */}
      <div className="absolute left-0 top-0 bottom-0 w-8 z-10 
                      bg-gradient-to-r from-[#0A0A0B] to-transparent 
                      pointer-events-none" />
      
      {/* Right fade indicator */}
      <div className="absolute right-0 top-0 bottom-0 w-8 z-10 
                      bg-gradient-to-l from-[#0A0A0B] to-transparent 
                      pointer-events-none" />
      
      {/* Scrollable cards */}
      <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 
                      px-4 sm:px-6 lg:px-8 
                      snap-x snap-mandatory scrollbar-hide
                      scroll-smooth">
        {features.map((feature, index) => (
          <div
            key={index}
            className="linear-card hover-glow flex-shrink-0 
                       w-[85vw] sm:w-[480px] 
                       snap-start group cursor-pointer overflow-hidden"
          >
            {/* Feature content */}
            {feature.image && (
              <div className="relative w-full h-[300px] sm:h-[432px] 
                              rounded-t-xl overflow-hidden bg-[#0A0A0B]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 640px) 85vw, 480px"
                  className="object-contain"
                />
              </div>
            )}
            
            <div className="p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-[#FAFAFA]">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] 
                            leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
```

```css
/* globals.css - Smooth horizontal scroll */
.scroll-smooth {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

/* Hide scrollbar but keep functionality */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
```

### 6. Brand Room Timeline

**Purpose**: Optimize timeline for mobile with single-column layout and clear visual flow.

**Current Issues**:
- grid-cols-2 is too cramped on mobile
- Timeline line may be hard to see
- Alternating layout doesn't work well on small screens

**Optimized Implementation**:

```typescript
// page.tsx - Mobile-optimized timeline
<section className="bg-[#0F0F10] py-16 sm:py-24 lg:py-32 overflow-hidden">
  <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
      <h2 className="text-[28px] sm:text-[32px] md:text-4xl lg:text-5xl 
                     font-bold text-[#FAFAFA] text-balance">
        How Brand Room Works
      </h2>
    </div>

    {/* Timeline - Mobile: single column, Desktop: alternating */}
    <div className="relative max-w-6xl mx-auto">
      {/* Timeline Line - Adjusted for mobile */}
      <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 
                      w-px sm:-ml-px 
                      bg-gradient-to-b from-[#52525B] via-[#71717A] to-[#52525B] 
                      shadow-lg shadow-[#71717A]/30" />

      {/* Steps */}
      {steps.map((step, index) => (
        <div 
          key={index}
          className={`relative mb-16 sm:mb-24 
                      ${index % 2 === 0 ? 'sm:grid sm:grid-cols-2 sm:gap-8' : 'sm:grid sm:grid-cols-2 sm:gap-8'}`}
        >
          {/* Mobile: All content left-aligned */}
          {/* Desktop: Alternating layout */}
          <div className={`
            pl-12 sm:pl-0
            ${index % 2 === 0 ? 'sm:text-right sm:pr-12' : 'sm:col-start-2 sm:text-left sm:pl-12'}
          `}>
            <span className="inline-block text-xs font-semibold 
                             text-[#A1A1AA] tracking-wider uppercase mb-2">
              Step {index + 1}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl 
                           font-bold text-[#FAFAFA] mb-3 sm:mb-4 
                           text-balance">
              {step.title}
            </h3>
            <p className="text-sm sm:text-base text-[#D4D4D8] 
                          leading-relaxed">
              {step.description}
            </p>
          </div>
          
          {/* Timeline Dot - Larger for mobile visibility */}
          <div className="absolute left-4 sm:left-1/2 top-0 
                          w-3 h-3 sm:-ml-1.5 
                          rounded-full bg-[#A1A1AA] 
                          border-2 border-[#0F0F10] 
                          shadow-lg shadow-[#A1A1AA]/50" />
        </div>
      ))}
    </div>
  </div>
</section>
```

### 7. Sticky CTA

**Purpose**: Make sticky CTA less intrusive on mobile while maintaining effectiveness.

**Current Issues**:
- Takes up significant screen space
- May cover important content
- Close button needs proper touch target

**Optimized Implementation**:

```typescript
// StickyCTA.tsx - Mobile-optimized sticky CTA
export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 
                  border-t border-white/10 bg-[#0A0A0B]/95 backdrop-blur-xl 
                  transition-transform duration-300 
                  ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 py-3">
          {/* Message - Concise for mobile */}
          <div className="flex-1">
            <div className="text-sm font-semibold text-[#FAFAFA]">
              Ready to start?
            </div>
            <div className="text-xs text-[#A1A1AA] hidden sm:block">
              Full Marketing Room + 3 ANOTs free, no credit card
            </div>
          </div>

          {/* CTA + Close */}
          <div className="flex items-center gap-2">
            <Button
              variant="magic"
              size="md"
              onClick={handleClick}
              className="min-h-touch text-sm sm:text-base"
            >
              Start Free
              <ArrowRight className="h-4 w-4" />
            </Button>
            
            <button
              onClick={handleClose}
              className="min-w-touch min-h-touch p-2 
                         text-[#A1A1AA] hover:text-[#FAFAFA] 
                         transition-colors rounded-md hover:bg-white/5"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## Data Models

### Touch Target Configuration

```typescript
// types/mobile.ts
export interface TouchTargetConfig {
  minWidth: number;  // 44px
  minHeight: number; // 44px
  minGap: number;    // 8px
}

export const TOUCH_TARGET_CONFIG: TouchTargetConfig = {
  minWidth: 44,
  minHeight: 44,
  minGap: 8,
};
```

### Typography Scale

```typescript
// types/typography.ts
export interface TypographyScale {
  mobile: {
    h1: string;
    h2: string;
    h3: string;
    body: string;
  };
  tablet: {
    h1: string;
    h2: string;
    h3: string;
    body: string;
  };
  desktop: {
    h1: string;
    h2: string;
    h3: string;
    body: string;
  };
}

export const TYPOGRAPHY_SCALE: TypographyScale = {
  mobile: {
    h1: '32px',
    h2: '28px',
    h3: '24px',
    body: '16px',
  },
  tablet: {
    h1: '40px',
    h2: '32px',
    h3: '28px',
    body: '18px',
  },
  desktop: {
    h1: '60px',
    h2: '48px',
    h3: '36px',
    body: '18px',
  },
};
```

### Viewport Breakpoints

```typescript
// types/viewport.ts
export interface ViewportBreakpoints {
  mobile: {
    min: number;
    max: number;
  };
  tablet: {
    min: number;
    max: number;
  };
  desktop: {
    min: number;
  };
}

export const VIEWPORT_BREAKPOINTS: ViewportBreakpoints = {
  mobile: {
    min: 375,
    max: 767,
  },
  tablet: {
    min: 768,
    max: 1023,
  },
  desktop: {
    min: 1024,
  },
};
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

Before defining the correctness properties, let me analyze the acceptance criteria for testability:


### Property Reflection

After analyzing all acceptance criteria, I've identified the following consolidation opportunities:

**Redundancy Analysis:**

1. **Touch Target Properties (1.1, 1.3, 1.4, 1.5, 1.6, 1.7, 9.7, 10.4)**: Multiple criteria test minimum 44px dimensions for different elements. These can be consolidated into a single comprehensive property that validates all interactive elements.

2. **Typography Properties (2.1, 2.2, 2.3, 6.6, 9.3, 10.7)**: Multiple criteria test font sizes and line heights. These can be consolidated into properties that validate typography across all text elements.

3. **Spacing Properties (7.1, 7.2, 7.3, 7.4, 9.2)**: Multiple criteria test spacing consistency. These can be consolidated into properties that validate the 8px grid system.

4. **Image Optimization (8.4, 8.5)**: Both test image component usage and can be combined into a single property.

5. **Accessibility Properties (11.1, 11.3, 11.4, 11.7)**: Multiple criteria test accessibility attributes. These can be consolidated into comprehensive accessibility properties.

**Properties to Keep Separate:**
- Navigation-specific examples (3.1-3.7) - These test specific component behavior
- Hero section examples (4.1-4.7) - These test specific component behavior
- Timeline examples (6.1-6.7) - These test specific component behavior
- Sticky CTA examples (10.1-10.7) - These test specific component behavior

### Correctness Properties

Property 1: Universal Touch Target Minimum Size
*For any* interactive element (button, link, input, touch target) on Mobile_Viewport, the element SHALL have minimum dimensions of 44x44 pixels
**Validates: Requirements 1.1, 1.3, 1.4, 1.5, 1.6, 9.7, 10.4**

Property 2: Touch Target Spacing
*For any* two adjacent interactive elements on Mobile_Viewport, the spacing between them SHALL be at least 8 pixels
**Validates: Requirements 1.2**

Property 3: Body Text Minimum Font Size
*For any* body text element on Mobile_Viewport, the font size SHALL be at least 16 pixels
**Validates: Requirements 2.1, 9.3**

Property 4: Body Text Line Height
*For any* body text element on Mobile_Viewport, the line height SHALL be at least 1.5
**Validates: Requirements 2.2**

Property 5: Heading Size Ranges
*For any* heading element on Mobile_Viewport, the font size SHALL fall within the appropriate range (h1: 32-40px, h2: 28-32px, h3: 24-28px)
**Validates: Requirements 2.3**

Property 6: Text Balance Application
*For any* heading element (h1, h2, h3), the element SHALL have text-wrap: balance or text-balance class applied
**Validates: Requirements 2.4**

Property 7: Color Contrast Ratios
*For any* text element, the color contrast ratio against its background SHALL be at least 4.5:1 for body text and 3:1 for large text
**Validates: Requirements 2.6**

Property 8: 8px Grid System Compliance
*For any* spacing value (margin, padding, gap) on Mobile_Viewport, the value SHALL be a multiple of 8 pixels
**Validates: Requirements 7.1**

Property 9: Consistent Section Padding
*For any* section element on Mobile_Viewport, the horizontal padding SHALL be 16px and vertical padding SHALL be between 48-64px
**Validates: Requirements 7.2, 7.3**

Property 10: Consistent Gap Sizes
*For any* card or container layout on Mobile_Viewport, the gap size SHALL be 16px, and on Tablet_Viewport SHALL be 24px
**Validates: Requirements 7.4**

Property 11: No Horizontal Overflow
*For any* viewport width in Mobile_Viewport range (375px-767px), no element SHALL cause horizontal overflow
**Validates: Requirements 7.5**

Property 12: Consistent Border Radius
*For any* component with rounded corners, the border-radius SHALL be between 8-12px
**Validates: Requirements 7.6**

Property 13: Consistent Elevation
*For any* card or elevated surface, the box-shadow SHALL use consistent values from the design system
**Validates: Requirements 7.7**

Property 14: Image Component Usage
*For any* image element, the component SHALL use next/image with proper sizes attribute and lazy loading for below-the-fold images
**Validates: Requirements 8.4, 8.5**

Property 15: GPU-Accelerated Animations
*For any* CSS animation or transition, the properties animated SHALL be limited to transform and opacity only
**Validates: Requirements 8.7**

Property 16: Input Type Appropriateness
*For any* input element, the type attribute SHALL match the expected data format (email, tel, url, text)
**Validates: Requirements 9.1**

Property 17: Form Field Spacing
*For any* two adjacent form fields on Mobile_Viewport, the spacing between them SHALL be at least 16 pixels
**Validates: Requirements 9.2**

Property 18: Form Label Association
*For any* input element, there SHALL be an associated label element with matching for/id attributes
**Validates: Requirements 9.5**

Property 19: ARIA Label Presence
*For any* interactive element without visible text, the element SHALL have an aria-label or aria-labelledby attribute
**Validates: Requirements 11.1**

Property 20: Focus Indicator Visibility
*For any* focusable element, the focus state SHALL have a visible outline of at least 2px
**Validates: Requirements 11.3**

Property 21: Image Alt Text Presence
*For any* img or Image component, the element SHALL have a non-empty alt attribute
**Validates: Requirements 11.4**

Property 22: ARIA Live Region for Dynamic Content
*For any* dynamically updated content area, the container SHALL have an aria-live attribute
**Validates: Requirements 11.7**

Property 23: Horizontal Scroll Card Width
*For any* card in the Horizontal_Scroll_Section on Mobile_Viewport, the width SHALL be 90vw with a maximum of 480px
**Validates: Requirements 5.4**

Property 24: Timeline Dot Minimum Size
*For any* timeline dot in the Brand_Room_Timeline, the diameter SHALL be at least 12 pixels
**Validates: Requirements 6.4**

Property 25: Timeline Text Readability
*For any* text element in the Brand_Room_Timeline, the font size SHALL be at least 16 pixels
**Validates: Requirements 6.6**

## Error Handling

### Touch Target Validation Errors

**Error**: Interactive element below minimum touch target size
**Handling**: 
- Log warning in development mode with element selector
- Provide visual indicator in dev tools
- Suggest minimum dimensions in error message

**Error**: Insufficient spacing between touch targets
**Handling**:
- Log warning with affected elements
- Highlight spacing issues in dev tools
- Suggest increasing gap or margin

### Typography Errors

**Error**: Body text below 16px on mobile
**Handling**:
- Log warning with element selector
- Provide suggested font size
- Check if text-sm or text-xs classes are misused

**Error**: Insufficient color contrast
**Handling**:
- Log warning with contrast ratio and required ratio
- Suggest alternative color combinations
- Provide WCAG compliance level

### Layout Errors

**Error**: Horizontal overflow detected
**Handling**:
- Log error with overflowing element
- Provide element dimensions and viewport width
- Suggest using overflow-hidden or adjusting width

**Error**: Spacing not aligned to 8px grid
**Handling**:
- Log warning with actual value and nearest grid value
- Suggest correct spacing value
- Provide utility class recommendation

### Performance Errors

**Error**: Image missing sizes attribute
**Handling**:
- Log warning with image src
- Suggest appropriate sizes value based on layout
- Provide next/image documentation link

**Error**: Animation using non-GPU properties
**Handling**:
- Log warning with animated property
- Suggest using transform or opacity instead
- Provide performance impact explanation

### Accessibility Errors

**Error**: Interactive element missing ARIA label
**Handling**:
- Log error with element selector
- Suggest appropriate ARIA attribute
- Provide accessibility documentation link

**Error**: Image missing alt text
**Handling**:
- Log error with image src
- Suggest descriptive alt text
- Explain importance for screen readers

**Error**: Form input missing label association
**Handling**:
- Log error with input id
- Suggest adding label with for attribute
- Provide example markup

## Testing Strategy

### Dual Testing Approach

The mobile UX optimization will use both unit tests and property-based tests to ensure comprehensive coverage:

**Unit Tests**: Focus on specific examples, edge cases, and component behavior
- Navigation menu open/close behavior
- Hero section responsive height at specific breakpoints
- Sticky CTA visibility on scroll
- Timeline layout at mobile viewport
- Specific touch target dimensions for key components

**Property-Based Tests**: Verify universal properties across all inputs
- Touch target minimum sizes across all interactive elements
- Typography scales across all text elements
- Spacing consistency across all layouts
- Color contrast across all text/background combinations
- Accessibility attributes across all components

### Property-Based Testing Configuration

**Library**: fast-check (JavaScript/TypeScript property-based testing library)

**Configuration**:
- Minimum 100 iterations per property test
- Each test tagged with feature name and property number
- Tag format: `Feature: mobile-ux-optimization, Property {number}: {property_text}`

**Example Property Test**:

```typescript
import fc from 'fast-check';
import { render } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Feature: mobile-ux-optimization, Property 1: Universal Touch Target Minimum Size', () => {
  it('should ensure all buttons meet minimum 44x44px touch target on mobile', () => {
    fc.assert(
      fc.property(
        fc.record({
          text: fc.string(),
          variant: fc.constantFrom('default', 'magic', 'secondary', 'outline'),
          size: fc.constantFrom('sm', 'md', 'lg'),
        }),
        (props) => {
          // Set mobile viewport
          global.innerWidth = 375;
          
          const { container } = render(
            <Button variant={props.variant} size={props.size}>
              {props.text}
            </Button>
          );
          
          const button = container.querySelector('button');
          const rect = button?.getBoundingClientRect();
          
          // Verify minimum dimensions
          expect(rect?.width).toBeGreaterThanOrEqual(44);
          expect(rect?.height).toBeGreaterThanOrEqual(44);
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

### Unit Testing Examples

**Navigation Component Tests**:
```typescript
describe('Navigation Component - Mobile UX', () => {
  it('should have hamburger button with minimum 44x44px touch target', () => {
    const { getByLabelText } = render(<Navigation />);
    const button = getByLabelText('Toggle menu');
    const rect = button.getBoundingClientRect();
    
    expect(rect.width).toBeGreaterThanOrEqual(44);
    expect(rect.height).toBeGreaterThanOrEqual(44);
  });
  
  it('should close menu when menu item is clicked', async () => {
    const { getByLabelText, getByText, queryByText } = render(<Navigation />);
    
    // Open menu
    const toggleButton = getByLabelText('Toggle menu');
    fireEvent.click(toggleButton);
    
    // Verify menu is open
    expect(getByText('Features')).toBeInTheDocument();
    
    // Click menu item
    const menuItem = getByText('Home');
    fireEvent.click(menuItem);
    
    // Verify menu is closed
    await waitFor(() => {
      expect(queryByText('Features')).not.toBeInTheDocument();
    });
  });
});
```

**Hero Component Tests**:
```typescript
describe('Hero Component - Mobile UX', () => {
  it('should reduce height to 80vh when viewport height is less than 600px', () => {
    // Set viewport
    global.innerHeight = 550;
    
    const { container } = render(<Hero {...mockProps} />);
    const hero = container.querySelector('section');
    
    const computedStyle = window.getComputedStyle(hero);
    expect(computedStyle.height).toBe('80vh');
  });
  
  it('should ensure CTAs are visible without scroll on 375px width', () => {
    global.innerWidth = 375;
    global.innerHeight = 667; // iPhone SE
    
    const { container } = render(<Hero {...mockProps} />);
    const ctaContainer = container.querySelector('[class*="bottom-"]');
    const rect = ctaContainer?.getBoundingClientRect();
    
    // Verify CTAs are within viewport
    expect(rect?.bottom).toBeLessThanOrEqual(667);
  });
});
```

**Sticky CTA Tests**:
```typescript
describe('Sticky CTA - Mobile UX', () => {
  it('should have maximum height of 72px on mobile', () => {
    global.innerWidth = 375;
    
    const { container } = render(<StickyCTA />);
    const cta = container.querySelector('[class*="fixed"]');
    const rect = cta?.getBoundingClientRect();
    
    expect(rect?.height).toBeLessThanOrEqual(72);
  });
  
  it('should remember close preference in localStorage', () => {
    const { getByLabelText } = render(<StickyCTA />);
    
    const closeButton = getByLabelText('Close');
    fireEvent.click(closeButton);
    
    expect(localStorage.getItem('stickyCTAClosed')).toBe('true');
  });
});
```

### Visual Regression Testing

Use Playwright for visual regression tests on real devices:

```typescript
import { test, expect, devices } from '@playwright/test';

test.describe('Mobile UX Visual Regression', () => {
  test.use(devices['iPhone SE']);
  
  test('homepage renders correctly on iPhone SE', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot('homepage-iphone-se.png');
  });
  
  test('navigation menu renders correctly', async ({ page }) => {
    await page.goto('/');
    await page.click('[aria-label="Toggle menu"]');
    await expect(page).toHaveScreenshot('navigation-menu-iphone-se.png');
  });
});
```

### Performance Testing

Use Lighthouse CI for performance metrics:

```yaml
# lighthouserc.json
{
  "ci": {
    "collect": {
      "numberOfRuns": 3,
      "settings": {
        "preset": "desktop",
        "throttling": {
          "rttMs": 150,
          "throughputKbps": 1638.4,
          "cpuSlowdownMultiplier": 4
        }
      }
    },
    "assert": {
      "assertions": {
        "first-contentful-paint": ["error", {"maxNumericValue": 1500}],
        "largest-contentful-paint": ["error", {"maxNumericValue": 2500}],
        "interactive": ["error", {"maxNumericValue": 3500}]
      }
    }
  }
}
```

### Accessibility Testing

Use axe-core for automated accessibility testing:

```typescript
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Accessibility Tests', () => {
  it('should have no accessibility violations on homepage', async () => {
    const { container } = render(<HomePage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  
  it('should have no accessibility violations in navigation', async () => {
    const { container } = render(<Navigation />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

### Device Testing Matrix

**Required Test Devices**:
- iPhone SE (375px) - Minimum supported device
- iPhone 12/13/14 (390px) - Standard device
- iPhone 14 Pro Max (430px) - Large device
- Android (360px, 412px) - Common Android sizes
- iPad (768px) - Tablet experience
- iPad Pro (1024px) - Large tablet

**Test Scenarios**:
1. Touch target accessibility
2. Typography readability
3. Navigation usability
4. Hero section layout
5. Horizontal scroll UX
6. Timeline layout
7. Form interaction
8. Sticky CTA behavior
9. Performance metrics
10. Accessibility compliance

### Continuous Integration

Add mobile UX tests to CI pipeline:

```yaml
# .github/workflows/mobile-ux-tests.yml
name: Mobile UX Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run unit tests
        run: npm test -- --coverage
      
      - name: Run property-based tests
        run: npm test -- --testNamePattern="Property"
      
      - name: Run Playwright tests
        run: npx playwright test
      
      - name: Run Lighthouse CI
        run: npm run lighthouse:ci
      
      - name: Run accessibility tests
        run: npm test -- --testNamePattern="Accessibility"
```

## Implementation Notes

### Mobile-First CSS Strategy

All styles should be written mobile-first, then enhanced for larger screens:

```css
/* Mobile-first approach */
.component {
  /* Base mobile styles */
  padding: 16px;
  font-size: 16px;
}

/* Tablet enhancement */
@media (min-width: 768px) {
  .component {
    padding: 24px;
    font-size: 18px;
  }
}

/* Desktop enhancement */
@media (min-width: 1024px) {
  .component {
    padding: 32px;
    font-size: 18px;
  }
}
```

### Performance Optimization Checklist

- [ ] Use next/image for all images with proper sizes attribute
- [ ] Lazy load below-the-fold images
- [ ] Reduce animation complexity on mobile
- [ ] Use GPU-accelerated properties (transform, opacity)
- [ ] Code-split large components
- [ ] Minimize JavaScript bundle size
- [ ] Use CSS containment for isolated components
- [ ] Implement virtual scrolling for long lists
- [ ] Optimize font loading with font-display: swap
- [ ] Minimize layout shifts with proper sizing

### Accessibility Checklist

- [ ] All interactive elements have minimum 44x44px touch targets
- [ ] All text meets color contrast requirements
- [ ] All images have descriptive alt text
- [ ] All forms have proper label associations
- [ ] All interactive elements have ARIA labels
- [ ] Focus indicators are visible and clear
- [ ] Keyboard navigation works correctly
- [ ] Screen reader announcements work for dynamic content
- [ ] Semantic HTML is used throughout
- [ ] No information conveyed by color alone

### Browser Compatibility

Target browsers for mobile optimization:
- iOS Safari 14+
- Chrome Mobile 90+
- Samsung Internet 14+
- Firefox Mobile 90+

Use autoprefixer for CSS vendor prefixes and check caniuse.com for feature support.
