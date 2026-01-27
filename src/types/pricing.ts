/**
 * TypeScript interfaces for Founder's Deal Pricing components
 * Defines the data structures for pricing tiers, model access, and component props
 */

/**
 * Represents a single AI agent's model access configuration
 */
export interface ModelAccess {
  /** The AI agent name (Apollo, Themis, Athena, Hephaestus, or Custom) */
  agent: 'Apollo' | 'Themis' | 'Athena' | 'Hephaestus' | 'Custom';
  /** The model name or description */
  model: string;
  /** Optional additional description for the model */
  description?: string;
  /** Whether this model is locked/unavailable in this tier */
  locked?: boolean;
}

/**
 * Represents a complete pricing tier configuration
 */
export interface PricingTier {
  /** Unique identifier for the tier */
  id: string;
  /** Display name of the tier (Explorer, Pro, Enterprise) */
  name: string;
  /** Current price (e.g., "$29" or "Custom") */
  price: string;
  /** Original price for anchoring (e.g., "$49") */
  anchoringPrice?: string;
  /** Billing interval (e.g., "month") */
  interval: string;
  /** Target persona description */
  persona: string;
  /** Badges to display on the tier card */
  badges?: string[];
  /** Model access configuration for this tier */
  modelAccess: ModelAccess[];
  /** List of features included in this tier */
  features: string[];
  /** Call-to-action button text */
  ctaText: string;
  /** Call-to-action button action handler */
  ctaAction: () => void;
}

/**
 * Complete pricing configuration including scarcity and all tiers
 */
export interface PricingConfiguration {
  /** Scarcity bar configuration */
  scarcity: {
    /** Number of spots claimed */
    claimed: number;
    /** Total number of spots available */
    total: number;
  };
  /** Array of pricing tiers */
  tiers: PricingTier[];
  /** Lifetime grandfathering promise text */
  lifetimePromise: string;
}

/**
 * Props for ScarcityBar component
 */
export interface ScarcityBarProps {
  /** Number of spots claimed */
  claimed: number;
  /** Total number of spots available */
  total: number;
  /** Optional additional CSS classes */
  className?: string;
}

/**
 * Props for PriceDisplay component
 */
export interface PriceDisplayProps {
  /** Current price (e.g., "$29") */
  currentPrice: string;
  /** Original price for anchoring (e.g., "$49") */
  anchoringPrice?: string;
  /** Billing interval (e.g., "month") */
  interval: string;
  /** Whether this is custom pricing (Enterprise tier) */
  isCustom?: boolean;
}

/**
 * Props for ModelAccessList component
 */
export interface ModelAccessListProps {
  /** The pricing tier (determines styling and labels) */
  tier: 'explorer' | 'pro' | 'enterprise';
  /** Array of model access configurations */
  models: ModelAccess[];
}

/**
 * Props for PricingTierCard component
 */
export interface PricingTierCardProps {
  /** Complete tier configuration */
  tier: PricingTier;
  /** Whether this tier should be visually highlighted (Pro tier) */
  highlighted?: boolean;
  /** Optional additional CSS classes */
  className?: string;
}

/**
 * Props for CTAButton component
 */
export interface CTAButtonProps {
  /** Button text */
  text: string;
  /** Click handler */
  onClick: () => void;
  /** Visual variant */
  variant: 'primary' | 'secondary' | 'outline';
  /** Optional additional CSS classes */
  className?: string;
}

/**
 * Props for TierBadge component
 */
export interface TierBadgeProps {
  /** Badge text */
  text: string;
  /** Optional additional CSS classes */
  className?: string;
}

/**
 * Props for FeatureList component
 */
export interface FeatureListProps {
  /** Array of feature descriptions */
  features: string[];
  /** Optional additional CSS classes */
  className?: string;
}

/**
 * Props for LifetimePromise component
 */
export interface LifetimePromiseProps {
  /** Promise text */
  text: string;
  /** Optional additional CSS classes */
  className?: string;
}

/**
 * Props for PricingSection root component
 */
export interface PricingSectionProps {
  /** Number of claimed spots (defaults to 74) */
  claimedSpots?: number;
  /** Total number of spots (defaults to 100) */
  totalSpots?: number;
  /** Optional additional CSS classes */
  className?: string;
}
