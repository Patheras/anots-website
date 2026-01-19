# Design Document: Design System v2

## Overview

This design document outlines a professional, cohesive design system for AgencyOS inspired by industry leaders (Vercel, Linear, Stripe). The system prioritizes exceptional typography, mathematical precision in spacing, minimal aesthetics, and delightful micro-interactions. Built on Shadcn/ui foundation with custom refinements, it ensures consistency, accessibility, and premium user experience.

## Architecture

### System Layers

```
┌─────────────────────────────────────┐
│     Application Components          │
│  (Directors Console, Engine Room)   │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│      Component Library               │
│   (Button, Input, Card, etc.)       │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│       Design Tokens                  │
│  (Colors, Spacing, Typography)      │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│      CSS Custom Properties           │
│    (Runtime Theme Variables)        │
└─────────────────────────────────────┘
```

### Technology Stack

- **Base**: Shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS + CSS Custom Properties
- **Animations**: Framer Motion + CSS Transitions
- **Typography**: Geist Sans, Geist Mono (next/font)
- **Icons**: Lucide React
- **Theme**: next-themes for light/dark mode

## Design Tokens

### Typography

**Font Families:**
```typescript
{
  sans: 'var(--font-geist-sans)',
  mono: 'var(--font-geist-mono)',
}
```

**Type Scale (1.25 ratio):**
```typescript
{
  xs: '12px',      // 0.75rem - Captions, labels
  sm: '14px',      // 0.875rem - Small text, metadata
  base: '16px',    // 1rem - Body text
  lg: '20px',      // 1.25rem - Large body, subheadings
  xl: '24px',      // 1.5rem - Section headings
  '2xl': '32px',   // 2rem - Page headings
  '3xl': '40px',   // 2.5rem - Hero headings
  '4xl': '48px',   // 3rem - Display text
  '5xl': '64px',   // 4rem - Large display
}
```

**Line Heights:**
```typescript
{
  tight: 1.2,      // Headings
  normal: 1.5,     // Body text
  relaxed: 1.7,    // Long-form content
}
```

**Font Weights:**
```typescript
{
  normal: 400,     // Body text
  medium: 500,     // Emphasis
  semibold: 600,   // Subheadings
  bold: 700,       // Headings
}
```

**Letter Spacing:**
```typescript
{
  tight: '-0.02em',   // Large headings
  normal: '0',        // Body text
  wide: '0.01em',     // Small text, labels
}
```

### Spacing System (8pt Grid)

```typescript
{
  0: '0px',
  1: '4px',      // 0.25rem - Micro spacing
  2: '8px',      // 0.5rem - Base unit
  3: '12px',     // 0.75rem - Compact spacing
  4: '16px',     // 1rem - Standard spacing
  6: '24px',     // 1.5rem - Medium spacing
  8: '32px',     // 2rem - Large spacing
  12: '48px',    // 3rem - Section spacing
  16: '64px',    // 4rem - Major sections
  24: '96px',    // 6rem - Hero spacing
  32: '128px',   // 8rem - Page spacing
}
```

### Color System

**Semantic Colors (Light Mode):**
```css
--background: 0 0% 100%;           /* Pure white */
--foreground: 0 0% 9%;             /* Near black */
--muted: 0 0% 96%;                 /* Light gray bg */
--muted-foreground: 0 0% 45%;      /* Medium gray text */
--border: 0 0% 90%;                /* Subtle borders */
--input: 0 0% 90%;                 /* Input borders */
--ring: 0 0% 20%;                  /* Focus rings */

--primary: 250 100% 60%;           /* Blue/purple */
--primary-foreground: 0 0% 100%;   /* White on primary */

--accent: 280 100% 65%;            /* Purple accent */
--accent-foreground: 0 0% 100%;    /* White on accent */

--card: 0 0% 100%;                 /* Card background */
--card-foreground: 0 0% 9%;        /* Card text */

--destructive: 0 84% 60%;          /* Red for errors */
--destructive-foreground: 0 0% 100%;
```

**Semantic Colors (Dark Mode):**
```css
--background: 0 0% 9%;             /* Near black */
--foreground: 0 0% 98%;            /* Near white */
--muted: 0 0% 15%;                 /* Dark gray bg */
--muted-foreground: 0 0% 60%;      /* Medium gray text */
--border: 0 0% 20%;                /* Subtle borders */
--input: 0 0% 20%;                 /* Input borders */
--ring: 0 0% 80%;                  /* Focus rings */

--primary: 250 100% 65%;           /* Brighter blue/purple */
--primary-foreground: 0 0% 100%;   /* White on primary */

--accent: 280 100% 70%;            /* Brighter purple */
--accent-foreground: 0 0% 100%;    /* White on accent */

--card: 0 0% 12%;                  /* Card background */
--card-foreground: 0 0% 98%;       /* Card text */

--destructive: 0 84% 65%;          /* Brighter red */
--destructive-foreground: 0 0% 100%;
```

### Border Radius

```typescript
{
  none: '0',
  sm: '4px',       // 0.25rem - Subtle rounding
  md: '8px',       // 0.5rem - Standard rounding
  lg: '12px',      // 0.75rem - Cards, dialogs
  xl: '16px',      // 1rem - Large cards
  '2xl': '24px',   // 1.5rem - Hero elements
  full: '9999px',  // Pills, avatars
}
```

### Shadows

```css
--shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
```

### Animation Tokens

**Durations:**
```typescript
{
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
}
```

**Easing Functions:**
```typescript
{
  default: 'cubic-bezier(0.4, 0.0, 0.2, 1)',  // Standard easing
  in: 'cubic-bezier(0.4, 0.0, 1, 1)',         // Ease in
  out: 'cubic-bezier(0.0, 0.0, 0.2, 1)',      // Ease out
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)', // Spring bounce
}
```

## Component Specifications

### Button Component

**Variants:**
- `default`: Primary action button
- `secondary`: Secondary actions
- `outline`: Tertiary actions
- `ghost`: Minimal actions
- `destructive`: Dangerous actions

**Sizes:**
- `sm`: 32px height, 12px padding
- `md`: 40px height, 16px padding
- `lg`: 48px height, 24px padding

**States:**
- Default: Base styling
- Hover: Slight brightness increase, 150ms transition
- Active: Scale(0.98) transform
- Focus: Ring with 3px offset
- Disabled: 50% opacity, no pointer events

**Animation:**
```typescript
// Hover
transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
&:hover {
  filter: brightness(1.05);
}

// Active (click)
&:active {
  transform: scale(0.98);
}

// Focus
&:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}
```

### Input Component

**States:**
- Default: Border with subtle shadow
- Focus: Ring animation, border color change
- Error: Red border, red ring
- Disabled: Muted background, no interaction

**Animation:**
```typescript
transition: border-color 150ms, box-shadow 150ms;

&:focus {
  border-color: hsl(var(--ring));
  box-shadow: 0 0 0 3px hsl(var(--ring) / 0.1);
}
```

### Card Component

**Elevation Levels:**
- Level 1: shadow-sm, subtle border
- Level 2: shadow-md, no border
- Level 3: shadow-lg, elevated

**Hover State:**
```typescript
transition: box-shadow 300ms, transform 300ms;

&:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Dialog/Modal Component

**Animation:**
```typescript
// Overlay fade in
@keyframes overlayShow {
  from { opacity: 0; }
  to { opacity: 1; }
}

// Content scale + fade in
@keyframes contentShow {
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

animation: contentShow 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
```

### Loading States

**Skeleton Animation:**
```typescript
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

background: linear-gradient(
  90deg,
  hsl(var(--muted)) 0%,
  hsl(var(--muted) / 0.5) 50%,
  hsl(var(--muted)) 100%
);
background-size: 200% 100%;
animation: shimmer 2s infinite;
```

**Spinner Animation:**
```typescript
@keyframes spin {
  to { transform: rotate(360deg); }
}

animation: spin 1s linear infinite;
```

## Layout Patterns

### Container

```typescript
{
  sm: 'max-w-screen-sm',   // 640px
  md: 'max-w-screen-md',   // 768px
  lg: 'max-w-screen-lg',   // 1024px
  xl: 'max-w-screen-xl',   // 1280px
  '2xl': 'max-w-screen-2xl', // 1536px
}
```

### Grid System

```typescript
// 12-column grid
grid-template-columns: repeat(12, minmax(0, 1fr));
gap: var(--spacing-6); // 24px

// Responsive
@media (max-width: 768px) {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--spacing-4); // 16px
}
```

### Stack (Vertical Spacing)

```typescript
// Consistent vertical rhythm
.stack > * + * {
  margin-top: var(--spacing-4); // 16px default
}

.stack-sm > * + * {
  margin-top: var(--spacing-2); // 8px
}

.stack-lg > * + * {
  margin-top: var(--spacing-8); // 32px
}
```

## Accessibility

### Focus Management

```typescript
// Visible focus indicator
*:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}

// Remove default outline
*:focus {
  outline: none;
}
```

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Tab order must follow visual order
- Escape key closes modals/dialogs
- Arrow keys navigate lists/menus

### Screen Reader Support

- All images must have alt text
- All form inputs must have labels
- ARIA labels for icon-only buttons
- ARIA live regions for dynamic content

### Motion Preferences

```typescript
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Implementation Strategy

### Phase 1: Foundation (Week 1)
1. Set up design tokens (CSS custom properties)
2. Configure Tailwind with custom theme
3. Install and configure Geist fonts
4. Create base styles and reset

### Phase 2: Core Components (Week 2)
1. Refactor Button component
2. Refactor Input, Textarea, Select
3. Refactor Card component
4. Add loading states (Skeleton, Spinner)

### Phase 3: Complex Components (Week 3)
1. Refactor Dialog, Sheet, Dropdown
2. Refactor Tabs, Accordion
3. Add animation utilities
4. Create component showcase

### Phase 4: Application Integration (Week 4)
1. Update Directors Console UI
2. Update Engine Room UI
3. Update Monitoring Dashboard
4. Remove old Apple design system

### Phase 5: Polish & Documentation (Week 5)
1. Fine-tune animations
2. Accessibility audit
3. Performance optimization
4. Write component documentation

## Migration Guide

### Gradual Adoption

```typescript
// Old system (to be removed)
import './styles/apple-design-system.css';

// New system (coexist during migration)
import './styles/design-system-v2.css';

// After migration complete, remove old system
```

### Component Mapping

```typescript
// Old → New
.btn-primary → <Button variant="default" />
.btn-secondary → <Button variant="secondary" />
.btn-ghost → <Button variant="ghost" />
.input → <Input />
.card → <Card />
```

### Priority Order

1. **High Priority**: Buttons, Inputs, Cards (most visible)
2. **Medium Priority**: Dialogs, Sheets, Dropdowns
3. **Low Priority**: Utility components, internal tools

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Typography Scale Consistency
*For any* text element in the design system, the font size should match one of the defined type scale values (12px, 14px, 16px, 20px, 24px, 32px, 40px, 48px, 64px)
**Validates: Requirements 1.4**

### Property 2: Spacing System Adherence
*For any* component with padding or margin, the spacing value should be a multiple of the 8pt base unit (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px)
**Validates: Requirements 2.2**

### Property 3: Color Token Usage
*For any* component using colors, the color should reference a semantic token (--background, --foreground, --primary, etc.) rather than hardcoded values
**Validates: Requirements 3.5**

### Property 4: Contrast Ratio Compliance
*For any* text on background combination, the contrast ratio should meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
**Validates: Requirements 3.6**

### Property 5: Animation Duration Consistency
*For any* animated element, the animation duration should be one of the standard values (150ms, 300ms, 500ms)
**Validates: Requirements 5.2**

### Property 6: Component Accessibility
*For any* interactive component, it should be keyboard navigable and have proper ARIA attributes
**Validates: Requirements 4.7**

### Property 7: Theme Consistency
*For any* component, it should render correctly in both light and dark themes without visual breaks
**Validates: Requirements 3.4**

### Property 8: Border Radius Consistency
*For any* component with rounded corners, the border radius should match one of the defined scale values (4px, 8px, 12px, 16px, 24px, full)
**Validates: Requirements 7.1**

## Error Handling

### Invalid Token Usage

```typescript
// Compile-time check
type SpacingToken = '0' | '1' | '2' | '3' | '4' | '6' | '8' | '12' | '16' | '24' | '32';

// Runtime warning (development only)
if (process.env.NODE_ENV === 'development') {
  if (!validSpacingTokens.includes(value)) {
    console.warn(`Invalid spacing token: ${value}`);
  }
}
```

### Theme Switching Errors

```typescript
// Graceful fallback
const theme = useTheme();
const safeTheme = theme || 'light';
```

### Animation Performance

```typescript
// Disable animations on low-end devices
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const shouldAnimate = !prefersReducedMotion && !isLowEndDevice;
```

## Testing Strategy

### Visual Regression Testing
- Chromatic or Percy for component screenshots
- Test all variants and states
- Test both light and dark themes

### Accessibility Testing
- axe-core for automated a11y checks
- Manual keyboard navigation testing
- Screen reader testing (NVDA, JAWS, VoiceOver)

### Performance Testing
- Lighthouse CI for performance metrics
- Animation frame rate monitoring
- Bundle size tracking

### Unit Testing
- Test component props and variants
- Test theme switching
- Test accessibility attributes

### Property-Based Testing
- Test typography scale adherence
- Test spacing system compliance
- Test color contrast ratios
- Test animation durations

## Performance Considerations

### CSS Optimization
- Use CSS custom properties for runtime theming
- Minimize specificity conflicts
- Use CSS containment for isolated components

### Font Loading
```typescript
// next/font optimization
import { GeistSans, GeistMono } from 'geist/font';

export const geistSans = GeistSans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-sans',
});
```

### Animation Performance
- Use `transform` and `opacity` (GPU-accelerated)
- Avoid animating `width`, `height`, `top`, `left`
- Use `will-change` sparingly

### Bundle Size
- Tree-shake unused components
- Lazy load complex components
- Use dynamic imports for heavy dependencies

## Conclusion

This design system provides a solid foundation for building a professional, consistent, and delightful user interface for AgencyOS. By following industry best practices and drawing inspiration from leaders like Vercel, Linear, and Stripe, we ensure that every interaction feels polished and intentional. The system is designed to scale, adapt, and evolve with the product while maintaining visual and functional consistency.
