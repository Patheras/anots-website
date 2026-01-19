/**
 * Linear-inspired Design Tokens
 * Centralized design system values for consistent styling
 */

export const colors = {
  background: {
    primary: '#0A0A0B',      // Deep dark background
    secondary: '#0F0F10',    // Card backgrounds
    tertiary: '#1A1A1B',     // Elevated elements
  },
  border: {
    default: '#1A1A1B',      // Default borders
    hover: '#2A2A2B',        // Hover state borders
    focus: '#5E6AD2',        // Focus state (purple)
  },
  text: {
    primary: '#FAFAFA',      // Primary text
    secondary: '#D4D4D8',    // Secondary text
    tertiary: '#A1A1AA',     // Tertiary text
    muted: '#71717A',        // Muted text
  },
  accent: {
    primary: '#5E6AD2',      // Purple accent
    hover: '#7C85E3',        // Purple hover state
    active: '#4E5AC2',       // Purple active state
  },
  semantic: {
    success: '#10B981',      // Success green
    error: '#EF4444',        // Error red
    warning: '#F59E0B',      // Warning amber
  },
} as const;

export const typography = {
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
} as const;

export const spacing = {
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
} as const;

export const animation = {
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
} as const;

export const breakpoints = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px',  // Extra large desktop
} as const;
