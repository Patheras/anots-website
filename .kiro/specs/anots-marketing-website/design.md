# Design Document: ANOTS Marketing Website

## Overview

The ANOTS Marketing Website is a standalone Next.js 14 application that serves as the primary customer acquisition channel for the Agency Marketing Operating System. The website implements a Linear-inspired design aesthetic with a deep dark theme, smooth animations, and minimal interface patterns. The architecture prioritizes performance, accessibility, and SEO optimization while delivering a polished, modern user experience.

The website consists of five main pages (Home, Pricing, About, Contact, Demo Request) built using Next.js App Router with server-side rendering for optimal SEO and performance. The design system reuses tokens from the existing agency-os codebase, ensuring visual consistency with the main product.

## Architecture

### Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: Shadcn/UI (base) + Aceternity UI (premium animations)
- **Fonts**: Geist Sans and Geist Mono (via next/font)
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for declarative animations
- **Analytics**: Vercel Analytics or Google Analytics 4
- **Deployment**: Vercel (separate from main application)
- **Repository**: git@github.com:Patheras/anots-web.git

### Project Structure

```
anots-marketing-website/
├── app/
│   ├── layout.tsx                 # Root layout with fonts, metadata
│   ├── page.tsx                   # Home page
│   ├── pricing/
│   │   └── page.tsx              # Pricing page
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   ├── demo/
│   │   └── page.tsx              # Demo request page
│   └── api/
│       ├── contact/
│       │   └── route.ts          # Contact form API endpoint
│       └── demo/
│           └── route.ts          # Demo request API endpoint
├── components/
│   ├── ui/
│   │   ├── Button.tsx            # Reusable button component
│   │   ├── Input.tsx             # Form input component
│   │   ├── Card.tsx              # Card component
│   │   └── Navigation.tsx        # Navigation bar
│   ├── sections/
│   │   ├── Hero.tsx              # Hero section
│   │   ├── Features.tsx          # Features showcase
│   │   ├── PricingTiers.tsx      # Pricing tier cards
│   │   └── ContactForm.tsx       # Contact form
│   └── animations/
│       ├── FadeIn.tsx            # Fade-in animation wrapper
│       └── ScrollReveal.tsx      # Scroll-triggered animations
├── lib/
│   ├── design-tokens.ts          # Design system tokens
│   ├── validation.ts             # Zod schemas for forms
│   └── analytics.ts              # Analytics utilities
├── public/
│   ├── images/                   # Optimized images
│   └── fonts/                    # Font files
└── tailwind.config.ts            # Tailwind configuration
```

### Rendering Strategy

- **Static Generation (SSG)**: Home, Pricing, About pages (pre-rendered at build time)
- **Server-Side Rendering (SSR)**: Contact and Demo pages (for dynamic form handling)
- **API Routes**: Form submission endpoints with server-side validation
- **Image Optimization**: Next.js Image component with responsive sizes

## Components and Interfaces

### Core UI Components

#### Button Component

```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  className?: string;
}

// Primary: Purple background (#5E6AD2), white text
// Secondary: Transparent with purple border
// Ghost: Transparent with hover effect
```

#### Input Component

```typescript
interface InputProps {
  type: 'text' | 'email' | 'tel' | 'textarea';
  label: string;
  name: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

// Dark background (#1A1A1B), light border (#2A2A2B)
// Focus state: Purple border (#5E6AD2)
// Error state: Red border with error message
```

#### Card Component

```typescript
interface CardProps {
  children: React.ReactNode;
  hover?: boolean;  // Enable hover effects
  className?: string;
}

// Background: #0F0F10 (slightly lighter than page background)
// Border: 1px solid #1A1A1B
// Hover: Scale 1.02, border color #5E6AD2
```

#### Navigation Component

```typescript
interface NavigationProps {
  currentPath: string;
}

interface NavLink {
  label: string;
  href: string;
}

// Desktop: Horizontal nav with logo left, links center, CTA right
// Mobile: Hamburger menu with slide-in drawer
// Sticky positioning with backdrop blur
```

### Section Components

#### Hero Section

```typescript
interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
}

// Layout: Centered content with gradient background
// Animation: Fade in headline (delay 0ms), subheadline (delay 100ms), CTAs (delay 200ms)
// Visual: Subtle grid pattern background, gradient overlay
```

#### Features Showcase

```typescript
interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;  // Screenshot or illustration
}

interface FeaturesProps {
  features: Feature[];
  layout: 'grid' | 'alternating';  // Grid for multiple features, alternating for detailed showcase
}

// Grid layout: 2x2 on desktop, 1 column on mobile
// Alternating layout: Image left/right alternates, text opposite
// Animation: Scroll-triggered fade-in with stagger
```

#### Pricing Tiers

```typescript
interface PricingTier {
  name: string;
  price: number | 'Free';
  billingPeriod: 'month' | 'year';
  description: string;
  features: string[];
  cta: {
    text: string;
    href: string;
  };
  recommended?: boolean;
}

interface PricingTiersProps {
  tiers: PricingTier[];
}

// Layout: 3 cards side-by-side on desktop, stacked on mobile
// Recommended tier: Highlighted with purple border and badge
// Animation: Hover scale effect on cards
```

#### Contact Form

```typescript
interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  type: 'contact' | 'demo';
}

// Validation: Real-time on blur, comprehensive on submit
// States: Idle, Validating, Submitting, Success, Error
// Feedback: Inline field errors, success message, error message
```

### Animation Components

#### FadeIn Wrapper

```typescript
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;  // Delay in milliseconds
  duration?: number;  // Duration in milliseconds (default 150)
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

// Uses Framer Motion with initial opacity 0, animate to opacity 1
// Optional transform based on direction
// GPU-accelerated with transform and opacity only
```

#### ScrollReveal Component

```typescript
interface ScrollRevealProps {
  children: React.ReactNode;
  threshold?: number;  // Intersection observer threshold (default 0.1)
  once?: boolean;  // Animate only once (default true)
}

// Uses Intersection Observer API
// Triggers animation when element enters viewport
// Supports stagger for multiple children
```

## Data Models

### Form Submission Models

#### Contact Form Submission

```typescript
interface ContactSubmission {
  name: string;          // Required, 2-100 characters
  email: string;         // Required, valid email format
  company: string;       // Optional, 2-100 characters
  message: string;       // Required, 10-1000 characters
  timestamp: Date;       // Auto-generated
  source: 'contact' | 'demo';
}

// Validation rules:
// - name: trim, min 2 chars, max 100 chars
// - email: valid email format (RFC 5322 subset)
// - company: optional, trim, min 2 chars, max 100 chars
// - message: trim, min 10 chars, max 1000 chars
```

#### Demo Request Submission

```typescript
interface DemoSubmission extends ContactSubmission {
  preferredDate?: string;  // ISO date string
  preferredTime?: string;  // Time in HH:MM format
}

// Additional validation:
// - preferredDate: optional, future date only
// - preferredTime: optional, valid time format
```

### Pricing Tier Data

```typescript
interface PricingTierData {
  id: 'free' | 'standard' | 'pro';
  name: string;
  price: number | null;  // null for free tier
  billingPeriod: 'month' | 'year' | null;
  description: string;
  features: {
    name: string;
    included: boolean;
    limit?: string;  // e.g., "Up to 1,000 contacts"
  }[];
  cta: {
    text: string;
    href: string;
    variant: 'primary' | 'secondary';
  };
  recommended: boolean;
}

// Static data stored in lib/pricing-data.ts
// Exported as const array for type safety

// Example pricing data:
const pricingTiers: PricingTierData[] = [
  {
    id: 'free',
    name: 'Free',
    price: null,
    billingPeriod: null,
    description: 'Perfect for trying out ANOTS',
    features: [
      { name: 'Basic campaign management', included: true },
      { name: 'Up to 100 contacts', included: true, limit: '100 contacts' },
      { name: 'Community support', included: true },
      { name: 'AI automation', included: false },
      { name: 'Advanced analytics', included: false },
    ],
    cta: { text: 'Get Started Free', href: '/signup', variant: 'secondary' },
    recommended: false,
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 9.90,
    billingPeriod: 'month',
    description: 'For growing marketing teams',
    features: [
      { name: 'Full campaign management', included: true },
      { name: 'Up to 10,000 contacts', included: true, limit: '10,000 contacts' },
      { name: 'AI-powered automation', included: true },
      { name: 'Email support', included: true },
      { name: 'Basic analytics', included: true },
      { name: 'Advanced analytics', included: false },
    ],
    cta: { text: 'Start Standard', href: '/signup?plan=standard', variant: 'primary' },
    recommended: true,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 49.90,
    billingPeriod: 'month',
    description: 'For professional agencies',
    features: [
      { name: 'Unlimited campaigns', included: true },
      { name: 'Unlimited contacts', included: true },
      { name: 'Advanced AI automation', included: true },
      { name: 'Priority support', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Custom integrations', included: true },
      { name: 'Dedicated account manager', included: true },
    ],
    cta: { text: 'Contact Sales', href: '/contact?plan=pro', variant: 'primary' },
    recommended: false,
  },
];
```

### Page Metadata

```typescript
interface PageMetadata {
  title: string;              // Page title (50-60 chars)
  description: string;        // Meta description (150-160 chars)
  keywords?: string[];        // SEO keywords
  ogImage?: string;          // Open Graph image URL
  canonical?: string;        // Canonical URL
}

// Defined per page in layout.tsx or page.tsx
// Used by Next.js metadata API
```

## Design System Tokens

### Colors

```typescript
const colors = {
  background: {
    primary: '#0A0A0B',      // Main background
    secondary: '#0F0F10',    // Card backgrounds
    tertiary: '#1A1A1B',     // Elevated elements
  },
  border: {
    default: '#1A1A1B',      // Default borders
    hover: '#2A2A2B',        // Hover state borders
    focus: '#5E6AD2',        // Focus state (purple)
  },
  text: {
    primary: '#FFFFFF',      // Primary text
    secondary: '#A0A0A0',    // Secondary text
    tertiary: '#6A6A6A',     // Tertiary text (muted)
  },
  accent: {
    primary: '#5E6AD2',      // Purple accent
    hover: '#7080E0',        // Purple hover state
    active: '#4E5AC2',       // Purple active state
  },
  semantic: {
    success: '#10B981',      // Success green
    error: '#EF4444',        // Error red
    warning: '#F59E0B',      // Warning amber
  },
};
```

### Typography

```typescript
const typography = {
  fontFamily: {
    sans: 'var(--font-geist-sans)',
    mono: 'var(--font-geist-mono)',
  },
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
};
```

### Spacing

```typescript
const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
};
```

### Animation

```typescript
const animation = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',  // ease-in-out
    in: 'cubic-bezier(0.4, 0, 1, 1)',         // ease-in
    out: 'cubic-bezier(0, 0, 0.2, 1)',        // ease-out
  },
};
```

### Breakpoints

```typescript
const breakpoints = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px',  // Extra large desktop
};
```

## Form Validation

### Validation Schemas (Zod)

```typescript
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  
  email: z.string()
    .trim()
    .email('Please enter a valid email address'),
  
  company: z.string()
    .trim()
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name must be less than 100 characters')
    .optional()
    .or(z.literal('')),
  
  message: z.string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

const demoFormSchema = contactFormSchema.extend({
  preferredDate: z.string()
    .optional()
    .refine(
      (date) => !date || new Date(date) > new Date(),
      'Preferred date must be in the future'
    ),
  
  preferredTime: z.string()
    .optional()
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format'),
});
```

### Validation Flow

1. **Field-level validation**: Triggered on blur event
   - Validates single field using Zod schema
   - Displays inline error message if invalid
   - Shows success indicator if valid

2. **Form-level validation**: Triggered on submit
   - Validates all fields using complete schema
   - Prevents submission if any field is invalid
   - Focuses first invalid field
   - Displays all error messages

3. **Server-side validation**: Performed in API route
   - Re-validates using same Zod schema
   - Returns 400 error with field errors if invalid
   - Prevents malicious submissions

## API Endpoints

### POST /api/contact

Handles contact form submissions.

**Request Body:**
```typescript
{
  name: string;
  email: string;
  company?: string;
  message: string;
}
```

**Response (Success - 200):**
```typescript
{
  success: true;
  message: "Thank you for contacting us. We'll get back to you soon.";
}
```

**Response (Validation Error - 400):**
```typescript
{
  success: false;
  errors: {
    [field: string]: string;
  };
}
```

**Response (Server Error - 500):**
```typescript
{
  success: false;
  message: "An error occurred. Please try again later.";
}
```

**Implementation:**
- Validate request body with Zod schema
- Send email notification (using Resend, SendGrid, or similar)
- Store submission in database (optional)
- Return appropriate response

### POST /api/demo

Handles demo request submissions.

**Request Body:**
```typescript
{
  name: string;
  email: string;
  company?: string;
  message: string;
  preferredDate?: string;
  preferredTime?: string;
}
```

**Response:** Same structure as /api/contact

**Implementation:**
- Validate request body with Zod schema
- Send email notification with demo request details
- Optionally integrate with calendar scheduling (Calendly, Cal.com)
- Return appropriate response

## Performance Optimization

### Image Optimization

- Use Next.js Image component for all images
- Provide multiple sizes for responsive images
- Use WebP format with JPEG fallback
- Lazy load images below the fold
- Optimize image dimensions (max 2x display size)

### Code Splitting

- Automatic code splitting via Next.js App Router
- Dynamic imports for heavy components (e.g., Framer Motion)
- Separate bundles for each page

### Font Optimization

- Use next/font for automatic font optimization
- Preload Geist fonts with font-display: swap
- Subset fonts to include only used characters (if possible)

### CSS Optimization

- Tailwind CSS with PurgeCSS (automatic in production)
- Critical CSS inlined in HTML
- Non-critical CSS loaded asynchronously

### Caching Strategy

- Static pages: Cache-Control: public, max-age=31536000, immutable
- API routes: No caching (dynamic content)
- Images: Cache-Control: public, max-age=31536000, immutable

## Accessibility Implementation

### Semantic HTML

- Use proper heading hierarchy (h1 → h2 → h3)
- Use semantic elements (header, nav, main, section, article, footer)
- Use button elements for clickable actions
- Use anchor elements for navigation

### Keyboard Navigation

- All interactive elements focusable via Tab key
- Visible focus indicators (2px purple outline)
- Skip to main content link
- Escape key closes mobile menu
- Arrow keys navigate within menus (optional enhancement)

### Screen Reader Support

- Alt text for all images
- ARIA labels for icon-only buttons
- ARIA live regions for form feedback
- ARIA expanded/collapsed for mobile menu
- Form labels properly associated with inputs

### Color Contrast

- Text on background: 4.5:1 minimum (WCAG AA)
- Large text on background: 3:1 minimum
- UI components: 3:1 minimum
- Test with tools: axe DevTools, Lighthouse

### Reduced Motion

```typescript
// Detect prefers-reduced-motion
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

// Disable or minimize animations if true
const animationDuration = prefersReducedMotion ? 0 : 150;
```

## SEO Implementation

### Metadata Configuration

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://anots.com'),
  title: {
    default: 'ANOTS - AI-Powered Marketing Automation',
    template: '%s | ANOTS',
  },
  description: 'AI-powered marketing automation made simple. Chat-based interface for creating automations without technical knowledge.',
  keywords: ['marketing automation', 'AI marketing', 'campaign management', 'ActivePieces'],
  authors: [{ name: 'ANOTS' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anots.com',
    siteName: 'ANOTS',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ANOTS - AI-Powered Marketing Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ANOTS - AI-Powered Marketing Automation',
    description: 'AI-powered marketing automation made simple.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

### Structured Data (JSON-LD)

```typescript
// Organization schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ANOTS',
  url: 'https://anots.com',
  logo: 'https://anots.com/logo.png',
  description: 'AI-powered marketing automation platform',
  sameAs: [
    // Social media profiles
  ],
};

// Product schema (for pricing page)
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'ANOTS',
  description: 'AI-powered marketing automation platform',
  offers: [
    {
      '@type': 'Offer',
      name: 'Free',
      price: '0',
      priceCurrency: 'USD',
    },
    // ... other tiers
  ],
};
```

### Sitemap Generation

```typescript
// app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://anots.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://anots.com/pricing',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://anots.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://anots.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://anots.com/demo',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
```

### Robots.txt

```typescript
// app/robots.ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://anots.com/sitemap.xml',
  };
}
```


## Correctness Properties

A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.

### Property 1: Pricing Tier Rendering Completeness

*For any* pricing tier displayed on the pricing page, the rendered output should include the tier's price, billing frequency, and complete feature list.

**Validates: Requirements 2.2**

### Property 2: Pricing Tier Navigation

*For any* pricing tier's call-to-action button, clicking it should navigate to the appropriate destination (signup for Free/Standard, contact for Pro).

**Validates: Requirements 2.5**

### Property 3: Currency Formatting Consistency

*For any* price value displayed on the website, it should be formatted with currency symbol and billing period (e.g., "$99/month" or "Free").

**Validates: Requirements 2.6**

### Property 4: Form Submission with Valid Data

*For any* valid form submission (contact or demo), the data should be sent to the appropriate API endpoint and return a success response.

**Validates: Requirements 4.2**

### Property 5: Form Validation Error Display

*For any* invalid form input, the system should display a field-specific error message that clearly indicates what needs to be corrected.

**Validates: Requirements 4.5**

### Property 6: Design Token Consistency

*For any* interactive element on the website, it should use the purple accent color (#5E6AD2) for hover states and focus indicators, apply 150ms transitions, and use only transform and opacity for animations.

**Validates: Requirements 5.2, 5.4, 5.5, 5.7**

### Property 7: Typography Consistency

*For any* text element on the website, it should use the Geist font family (sans or mono variants).

**Validates: Requirements 5.3**

### Property 8: Touch Target Accessibility

*For any* interactive element on mobile viewports (width < 768px), the element should have a minimum touch target size of 44x44 pixels.

**Validates: Requirements 6.4**

### Property 9: Responsive Layout Without Horizontal Scroll

*For any* viewport width between 320px and 2560px, the page content should reflow without causing horizontal scrolling.

**Validates: Requirements 6.5**

### Property 10: Responsive Image Optimization

*For any* image element, it should include responsive size attributes (srcset or Next.js Image sizes) to load appropriately sized images for different viewports.

**Validates: Requirements 6.6**

### Property 11: Navigation Active State

*For any* page in the website, the navigation bar should highlight the corresponding navigation link for the current page.

**Validates: Requirements 7.4**

### Property 12: Lazy Loading for Below-Fold Images

*For any* image positioned below the fold (not visible in initial viewport), it should have the loading="lazy" attribute or use Next.js Image lazy loading.

**Validates: Requirements 8.4**

### Property 13: Alt Text for Images

*For any* image element on the website, it should include descriptive alt text (or empty alt="" for decorative images).

**Validates: Requirements 9.2**

### Property 14: Keyboard Focus Indicators

*For any* interactive element (buttons, links, form inputs), it should display a visible focus indicator when focused via keyboard navigation.

**Validates: Requirements 9.3**

### Property 15: Text Color Contrast Compliance

*For any* text element, the color contrast ratio between text and background should meet or exceed 4.5:1 for normal text and 3:1 for large text (18px+ or 14px+ bold).

**Validates: Requirements 9.4, 9.5**

### Property 16: ARIA Labels for Accessibility

*For any* interactive element that lacks visible text (icon buttons, image links), it should include appropriate ARIA labels or aria-label attributes for screen reader support.

**Validates: Requirements 9.6**

### Property 17: Form Error Announcement

*For any* form validation error, the error message should be announced to screen readers using aria-live regions or aria-describedby associations.

**Validates: Requirements 9.7**

### Property 18: Unique Page Titles

*For any* page on the website, it should have a unique, descriptive title tag that differs from other pages.

**Validates: Requirements 10.1**

### Property 19: Meta Description Length

*For any* page on the website, the meta description should be between 150-160 characters in length.

**Validates: Requirements 10.2**

### Property 20: Open Graph Tags

*For any* page on the website, it should include Open Graph meta tags (og:title, og:description, og:image) for social media sharing.

**Validates: Requirements 10.4**

### Property 21: Call-to-Action Text Clarity

*For any* call-to-action button, the button text should be action-oriented (starting with verbs like "Start", "Request", "Contact", "Get").

**Validates: Requirements 11.2**

### Property 22: Multiple CTAs Per Page

*For any* page on the website, it should include at least two call-to-action opportunities (buttons or links) to encourage conversion.

**Validates: Requirements 11.3**

### Property 23: Visual Distinction Between Action Priorities

*For any* page containing both primary and secondary actions, primary action buttons should have higher visual contrast (solid purple background) than secondary actions (outlined or ghost style).

**Validates: Requirements 11.5**

### Property 24: Feature Benefit Descriptions

*For any* feature showcase section, each feature should include both a title and a benefit-focused description (not just a feature name).

**Validates: Requirements 12.5**

### Property 25: Scroll-Triggered Animations

*For any* section on the home page, scrolling the section into view should trigger fade-in or slide-in animations (unless reduced motion is preferred).

**Validates: Requirements 13.1**

### Property 26: Card Hover Effects

*For any* card or feature block element, hovering over it should apply a visual transformation (scale, elevation, or border color change).

**Validates: Requirements 13.2**

### Property 27: Loading State Indicators

*For any* asynchronous operation (form submission, page transition), a loading indicator (skeleton screen, spinner, or progress bar) should be displayed during the operation.

**Validates: Requirements 13.4**

### Property 28: Animation Easing Functions

*For any* CSS animation or transition, it should use standard easing functions (ease-out, ease-in-out, or cubic-bezier) rather than linear timing.

**Validates: Requirements 13.5**

### Property 29: Form Field Validation on Blur

*For any* form input field, validation should be triggered when the field loses focus (blur event), providing immediate feedback.

**Validates: Requirements 14.1**

### Property 30: Form Validation Feedback

*For any* form field after validation, it should display either an error message (for invalid input) or a success indicator (for valid input).

**Validates: Requirements 14.2, 14.3**

### Property 31: Email Format Validation

*For any* email input field, the validation should accept valid email formats (user@domain.tld) and reject invalid formats.

**Validates: Requirements 14.4**

### Property 32: Required Field Enforcement

*For any* form with required fields, the submit button should be disabled or submission should be prevented until all required fields contain valid data.

**Validates: Requirements 14.5**

### Property 33: Analytics Event Tracking

*For any* user interaction (page view, CTA click, form submission), an analytics event should be tracked with appropriate event name and parameters.

**Validates: Requirements 15.1, 15.2, 15.3**

## Error Handling

### Form Submission Errors

**Client-Side Validation Errors:**
- Display inline error messages below each invalid field
- Highlight invalid fields with red border
- Prevent form submission until all errors are resolved
- Focus the first invalid field when submission is attempted

**Server-Side Errors:**
- Display a general error message at the top of the form
- Preserve all user input so they don't have to re-enter data
- Log error details for debugging (without exposing to user)
- Provide actionable guidance (e.g., "Please try again" or "Contact support")

**Network Errors:**
- Detect network failures (timeout, connection lost)
- Display user-friendly message: "Connection lost. Please check your internet and try again."
- Implement retry mechanism with exponential backoff
- Preserve form data in localStorage for recovery

### Image Loading Errors

**Failed Image Loads:**
- Display placeholder with alt text
- Use Next.js Image component's onError handler
- Log error for monitoring
- Fallback to lower resolution or default image if available

### Navigation Errors

**404 Not Found:**
- Display custom 404 page with helpful navigation
- Include search functionality or sitemap
- Suggest popular pages (Home, Pricing, Contact)
- Track 404 errors for broken link identification

**500 Server Errors:**
- Display custom 500 page with apology message
- Provide contact information for support
- Avoid exposing technical error details
- Log full error stack for debugging

### Animation Errors

**Reduced Motion Preference:**
- Detect prefers-reduced-motion media query
- Disable or minimize animations when enabled
- Ensure functionality works without animations
- Test all interactions with animations disabled

**Animation Performance Issues:**
- Use will-change CSS property sparingly
- Limit concurrent animations
- Debounce scroll-triggered animations
- Fall back to instant transitions if performance degrades

## Testing Strategy

### Unit Testing

Unit tests will focus on specific examples, edge cases, and component behavior using Jest and React Testing Library.

**Component Tests:**
- Button component: Render variants (primary, secondary, ghost), handle clicks, disabled state
- Input component: Render with/without errors, handle value changes, blur events
- Card component: Render with/without hover effects, apply correct styles
- Navigation component: Render links, highlight active page, mobile menu toggle
- Form components: Render fields, handle validation, display errors

**Validation Tests:**
- Test Zod schemas with valid and invalid inputs
- Test edge cases: empty strings, whitespace, special characters
- Test email validation with various formats
- Test required field enforcement

**API Route Tests:**
- Test /api/contact with valid data (returns 200)
- Test /api/contact with invalid data (returns 400 with errors)
- Test /api/demo with valid data (returns 200)
- Test error handling for server failures (returns 500)

**Utility Function Tests:**
- Test design token exports
- Test analytics tracking functions
- Test form data sanitization

### Property-Based Testing

Property-based tests will verify universal properties across many generated inputs using fast-check (for TypeScript/JavaScript).

**Configuration:**
- Minimum 100 iterations per property test
- Each test tagged with: **Feature: anots-marketing-website, Property {number}: {property_text}**

**Property Test Examples:**

```typescript
// Property 3: Currency Formatting Consistency
test('Feature: anots-marketing-website, Property 3: Currency formatting', () => {
  fc.assert(
    fc.property(
      fc.oneof(
        fc.constant(0), // Free tier
        fc.integer({ min: 1, max: 9999 }) // Paid tiers
      ),
      fc.constantFrom('month', 'year'),
      (price, period) => {
        const formatted = formatPrice(price, period);
        if (price === 0) {
          expect(formatted).toBe('Free');
        } else {
          expect(formatted).toMatch(/^\$\d+\/(month|year)$/);
        }
      }
    ),
    { numRuns: 100 }
  );
});

// Property 8: Touch Target Accessibility
test('Feature: anots-marketing-website, Property 8: Touch target sizes', () => {
  fc.assert(
    fc.property(
      fc.constantFrom('button', 'link', 'input'),
      (elementType) => {
        const element = renderInteractiveElement(elementType, { viewport: 'mobile' });
        const { width, height } = element.getBoundingClientRect();
        expect(width).toBeGreaterThanOrEqual(44);
        expect(height).toBeGreaterThanOrEqual(44);
      }
    ),
    { numRuns: 100 }
  );
});

// Property 13: Alt Text for Images
test('Feature: anots-marketing-website, Property 13: Image alt text', () => {
  fc.assert(
    fc.property(
      fc.record({
        src: fc.webUrl(),
        decorative: fc.boolean(),
      }),
      (imageProps) => {
        const img = renderImage(imageProps);
        const altAttr = img.getAttribute('alt');
        expect(altAttr).not.toBeNull();
        if (imageProps.decorative) {
          expect(altAttr).toBe('');
        } else {
          expect(altAttr.length).toBeGreaterThan(0);
        }
      }
    ),
    { numRuns: 100 }
  );
});

// Property 31: Email Format Validation
test('Feature: anots-marketing-website, Property 31: Email validation', () => {
  fc.assert(
    fc.property(
      fc.emailAddress(),
      (email) => {
        const result = validateEmail(email);
        expect(result.success).toBe(true);
      }
    ),
    { numRuns: 100 }
  );
  
  fc.assert(
    fc.property(
      fc.string().filter(s => !s.includes('@') || !s.includes('.')),
      (invalidEmail) => {
        const result = validateEmail(invalidEmail);
        expect(result.success).toBe(false);
      }
    ),
    { numRuns: 100 }
  );
});
```

### Integration Testing

Integration tests will verify that components work together correctly using Playwright or Cypress.

**Page Integration Tests:**
- Home page: Hero loads, features display, CTAs navigate correctly
- Pricing page: All tiers display, comparison table works, CTAs navigate
- Contact page: Form renders, validation works, submission succeeds
- Demo page: Form renders with date/time fields, submission succeeds

**Navigation Integration Tests:**
- Navigation bar appears on all pages
- Active page is highlighted correctly
- Mobile menu opens and closes
- Logo links to home page

**Form Flow Integration Tests:**
- Fill out contact form with valid data → submission succeeds → confirmation displays
- Fill out contact form with invalid data → errors display → fix errors → submission succeeds
- Submit demo request → confirmation displays → email sent

### Accessibility Testing

Accessibility tests will verify WCAG 2.1 Level AA compliance using axe-core and manual testing.

**Automated Accessibility Tests:**
- Run axe-core on all pages
- Check for color contrast violations
- Check for missing alt text
- Check for keyboard navigation issues
- Check for ARIA label issues

**Manual Accessibility Tests:**
- Navigate entire site using only keyboard
- Test with screen reader (NVDA, JAWS, or VoiceOver)
- Test with browser zoom at 200%
- Test with reduced motion preference enabled

### Performance Testing

Performance tests will verify Core Web Vitals and loading performance using Lighthouse and WebPageTest.

**Metrics to Test:**
- First Contentful Paint (FCP) < 1.5s
- Largest Contentful Paint (LCP) < 2.5s
- Cumulative Layout Shift (CLS) < 0.1
- First Input Delay (FID) < 100ms
- Time to Interactive (TTI) < 3.5s

**Performance Test Scenarios:**
- Test on 3G network (slow connection)
- Test on mobile device (lower CPU)
- Test with cache disabled (first visit)
- Test with cache enabled (repeat visit)

### Visual Regression Testing

Visual regression tests will catch unintended visual changes using Percy or Chromatic.

**Visual Test Coverage:**
- All pages at desktop, tablet, and mobile breakpoints
- All component variants (button styles, card states)
- Hover states and focus states
- Form validation states (error, success)
- Loading states and animations

### End-to-End Testing

E2E tests will verify complete user journeys using Playwright.

**User Journey Tests:**
1. Visitor lands on home → scrolls through features → clicks "Get Started Free" → reaches signup
2. Visitor navigates to pricing → compares tiers → clicks "Request Demo" → fills form → submits successfully
3. Visitor navigates to contact → fills form with invalid data → sees errors → corrects → submits successfully
4. Visitor navigates on mobile → opens hamburger menu → navigates to about → reads content

### Test Coverage Goals

- Unit test coverage: 80%+ for components and utilities
- Property test coverage: All 33 correctness properties implemented
- Integration test coverage: All critical user paths
- Accessibility test coverage: All pages pass axe-core with zero violations
- Performance test coverage: All pages meet Core Web Vitals thresholds
