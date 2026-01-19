export const ChatIcon = () => (
  <svg className="h-8 w-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="12" width="24" height="18" rx="3" stroke="url(#chatGradient)" strokeWidth="2" fill="none" />
    <path d="M8 30 L12 34 L16 30" stroke="url(#chatGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="20" y="20" width="18" height="14" rx="2" stroke="url(#chatGradient)" strokeWidth="2" fill="none" opacity="0.6" />
    <path d="M20 34 L23 37 L26 34" stroke="url(#chatGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    <line x1="12" y1="18" x2="20" y2="18" stroke="url(#chatGradient)" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="12" y1="22" x2="24" y2="22" stroke="url(#chatGradient)" strokeWidth="1.5" strokeLinecap="round" />
    <defs>
      <linearGradient id="chatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5E6AD2" />
        <stop offset="100%" stopColor="#7C85E3" />
      </linearGradient>
    </defs>
  </svg>
);

export const ApprovalIcon = () => (
  <svg className="h-8 w-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="16" stroke="url(#approvalGradient)" strokeWidth="2" fill="none" />
    <path d="M16 24 L21 29 L32 18" stroke="url(#approvalGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="24" r="20" stroke="url(#approvalGradient)" strokeWidth="1" fill="none" opacity="0.2" />
    <path d="M24 4 L26 8 M24 44 L26 40 M4 24 L8 26 M44 24 L40 26" stroke="url(#approvalGradient)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    <defs>
      <linearGradient id="approvalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5E6AD2" />
        <stop offset="100%" stopColor="#7C85E3" />
      </linearGradient>
    </defs>
  </svg>
);

export const UnlimitedIcon = () => (
  <svg className="h-8 w-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 20 L16 24 L12 28 L8 24 Z" fill="url(#unlimitedGradient)" opacity="0.8" />
    <path d="M24 12 L28 16 L24 20 L20 16 Z" fill="url(#unlimitedGradient)" />
    <path d="M36 20 L40 24 L36 28 L32 24 Z" fill="url(#unlimitedGradient)" opacity="0.8" />
    <path d="M24 28 L28 32 L24 36 L20 32 Z" fill="url(#unlimitedGradient)" opacity="0.6" />
    <circle cx="24" cy="24" r="3" fill="url(#unlimitedGradient)" />
    <defs>
      <linearGradient id="unlimitedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5E6AD2" />
        <stop offset="100%" stopColor="#7C85E3" />
      </linearGradient>
    </defs>
  </svg>
);

export const TrackingIcon = () => (
  <svg className="h-8 w-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="14" width="8" height="20" rx="2" fill="url(#trackingGradient)" opacity="0.6" />
    <rect x="20" y="10" width="8" height="24" rx="2" fill="url(#trackingGradient)" opacity="0.8" />
    <rect x="32" y="6" width="8" height="28" rx="2" fill="url(#trackingGradient)" />
    <path d="M4 36 L44 36" stroke="url(#trackingGradient)" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="2" fill="#5E6AD2" />
    <circle cx="24" cy="8" r="2" fill="#5E6AD2" />
    <circle cx="36" cy="4" r="2" fill="#5E6AD2" />
    <defs>
      <linearGradient id="trackingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#5E6AD2" />
        <stop offset="100%" stopColor="#7C85E3" />
      </linearGradient>
    </defs>
  </svg>
);

export const BrandIcon = () => (
  <svg className="h-8 w-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="28" height="28" rx="4" stroke="url(#brandGradient)" strokeWidth="2" fill="none" />
    <circle cx="20" cy="20" r="4" fill="url(#brandGradient)" opacity="0.6" />
    <circle cx="28" cy="28" r="6" fill="url(#brandGradient)" />
    <rect x="14" y="30" width="8" height="4" rx="1" fill="url(#brandGradient)" opacity="0.4" />
    <rect x="26" y="18" width="8" height="4" rx="1" fill="url(#brandGradient)" opacity="0.4" />
    <path d="M16 16 L20 12 M28 20 L32 16 M20 32 L24 36 M32 28 L36 32" stroke="url(#brandGradient)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    <defs>
      <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5E6AD2" />
        <stop offset="100%" stopColor="#7C85E3" />
      </linearGradient>
    </defs>
  </svg>
);

export const IntegrationIcon = () => (
  <svg className="h-8 w-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="6" fill="url(#integrationGradient)" />
    <circle cx="12" cy="12" r="4" fill="url(#integrationGradient)" opacity="0.6" />
    <circle cx="36" cy="12" r="4" fill="url(#integrationGradient)" opacity="0.6" />
    <circle cx="12" cy="36" r="4" fill="url(#integrationGradient)" opacity="0.6" />
    <circle cx="36" cy="36" r="4" fill="url(#integrationGradient)" opacity="0.6" />
    <path d="M16 14 L20 20 M32 14 L28 20 M16 34 L20 28 M32 34 L28 28" stroke="url(#integrationGradient)" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="24" r="16" stroke="url(#integrationGradient)" strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="4 4" />
    <defs>
      <linearGradient id="integrationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5E6AD2" />
        <stop offset="100%" stopColor="#7C85E3" />
      </linearGradient>
    </defs>
  </svg>
);
