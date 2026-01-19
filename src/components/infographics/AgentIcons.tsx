export const QubikIcon = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Ghost body - Creative & Energetic */}
    <path
      d="M32 12 C22 12 16 18 16 28 L16 44 C16 46 17 48 18 48 C19 48 20 47 20 45 L20 42 C20 40 22 40 22 42 L22 46 C22 48 24 48 24 46 L24 42 C24 40 26 40 26 42 L26 46 C26 48 28 48 28 46 L28 42 C28 40 30 40 30 42 L30 46 C30 48 32 48 32 46 L32 42 C32 40 34 40 34 42 L34 46 C34 48 36 48 36 46 L36 42 C36 40 38 40 38 42 L38 46 C38 48 40 48 40 46 L40 42 C40 40 42 40 42 42 L42 45 C42 47 43 48 44 48 C45 48 46 46 46 44 L46 28 C46 18 40 12 32 12 Z"
      fill="url(#qubikGhost)"
      opacity="0.9"
    />
    
    {/* Eyes - Excited & Creative */}
    <ellipse cx="24" cy="26" rx="3" ry="4" fill="#0A0A0B" />
    <ellipse cx="40" cy="26" rx="3" ry="4" fill="#0A0A0B" />
    <circle cx="24.5" cy="25" r="1.5" fill="#DC2626" />
    <circle cx="40.5" cy="25" r="1.5" fill="#DC2626" />
    
    {/* Sparkle on head - Creative energy */}
    <path
      d="M32 8 L33 11 L36 12 L33 13 L32 16 L31 13 L28 12 L31 11 Z"
      fill="url(#qubikGhost)"
    />
    
    {/* Floating sparkles around */}
    <circle cx="18" cy="20" r="1.5" fill="#DC2626" opacity="0.6">
      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="46" cy="22" r="1.5" fill="#EF4444" opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
    </circle>
    
    <defs>
      <linearGradient id="qubikGhost" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#DC2626" />
      </linearGradient>
    </defs>
  </svg>
);

export const ThemisIcon = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Ghost body - Wise & Analytical */}
    <path
      d="M32 12 C22 12 16 18 16 28 L16 44 C16 46 17 48 18 48 C19 48 20 47 20 45 L20 42 C20 40 22 40 22 42 L22 46 C22 48 24 48 24 46 L24 42 C24 40 26 40 26 42 L26 46 C26 48 28 48 28 46 L28 42 C28 40 30 40 30 42 L30 46 C30 48 32 48 32 46 L32 42 C32 40 34 40 34 42 L34 46 C34 48 36 48 36 46 L36 42 C36 40 38 40 38 42 L38 46 C38 48 40 48 40 46 L40 42 C40 40 42 40 42 42 L42 45 C42 47 43 48 44 48 C45 48 46 46 46 44 L46 28 C46 18 40 12 32 12 Z"
      fill="url(#themisGhost)"
      opacity="0.9"
    />
    
    {/* Eyes - Wise & Analytical */}
    <ellipse cx="24" cy="26" rx="2.5" ry="3.5" fill="#0A0A0B" />
    <ellipse cx="40" cy="26" rx="2.5" ry="3.5" fill="#0A0A0B" />
    <circle cx="24.5" cy="25.5" r="1" fill="#9333EA" />
    <circle cx="40.5" cy="25.5" r="1" fill="#9333EA" />
    
    {/* Glasses - Analytical look */}
    <ellipse cx="24" cy="26" rx="5" ry="4" fill="none" stroke="#9333EA" strokeWidth="1" opacity="0.6" />
    <ellipse cx="40" cy="26" rx="5" ry="4" fill="none" stroke="#9333EA" strokeWidth="1" opacity="0.6" />
    <line x1="29" y1="26" x2="35" y2="26" stroke="#9333EA" strokeWidth="1" opacity="0.6" />
    
    {/* Shield symbol on head */}
    <path
      d="M32 8 L28 10 L28 14 C28 16 29 17 32 18 C35 17 36 16 36 14 L36 10 Z"
      fill="none"
      stroke="url(#themisGhost)"
      strokeWidth="1.5"
    />
    <path d="M30 13 L31.5 14.5 L34 12" stroke="url(#themisGhost)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    
    {/* Floating balance symbols */}
    <circle cx="18" cy="22" r="1.5" fill="#9333EA" opacity="0.4">
      <animate attributeName="cy" values="22;20;22" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="46" cy="22" r="1.5" fill="#A855F7" opacity="0.4">
      <animate attributeName="cy" values="22;20;22" dur="3s" repeatCount="indefinite" />
    </circle>
    
    <defs>
      <linearGradient id="themisGhost" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#9333EA" />
      </linearGradient>
    </defs>
  </svg>
);

export const CoreIcon = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Ghost body - Calm & Guiding */}
    <path
      d="M32 12 C22 12 16 18 16 28 L16 44 C16 46 17 48 18 48 C19 48 20 47 20 45 L20 42 C20 40 22 40 22 42 L22 46 C22 48 24 48 24 46 L24 42 C24 40 26 40 26 42 L26 46 C26 48 28 48 28 46 L28 42 C28 40 30 40 30 42 L30 46 C30 48 32 48 32 46 L32 42 C32 40 34 40 34 42 L34 46 C34 48 36 48 36 46 L36 42 C36 40 38 40 38 42 L38 46 C38 48 40 48 40 46 L40 42 C40 40 42 40 42 42 L42 45 C42 47 43 48 44 48 C45 48 46 46 46 44 L46 28 C46 18 40 12 32 12 Z"
      fill="url(#coreGhost)"
      opacity="0.9"
    />
    
    {/* Eyes - Calm & Focused */}
    <ellipse cx="24" cy="27" rx="2.5" ry="3" fill="#0A0A0B" />
    <ellipse cx="40" cy="27" rx="2.5" ry="3" fill="#0A0A0B" />
    <circle cx="24.5" cy="26.5" r="1" fill="#3B82F6" />
    <circle cx="40.5" cy="26.5" r="1" fill="#3B82F6" />
    
    {/* Smile - Friendly guide */}
    <path
      d="M26 32 Q32 35 38 32"
      stroke="#3B82F6"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
      opacity="0.6"
    />
    
    {/* Compass on head */}
    <circle cx="32" cy="8" r="5" fill="none" stroke="url(#coreGhost)" strokeWidth="1.5" />
    <path
      d="M32 4 L32 6 M32 10 L32 12 M28 8 L30 8 M34 8 L36 8"
      stroke="url(#coreGhost)"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path
      d="M32 6 L33.5 8 L32 7.5 L30.5 8 Z"
      fill="url(#coreGhost)"
    />
    
    {/* Floating guide dots */}
    <circle cx="18" cy="20" r="1.5" fill="#3B82F6" opacity="0.5">
      <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="46" cy="20" r="1.5" fill="#60A5FA" opacity="0.5">
      <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="32" cy="16" r="1" fill="#3B82F6" opacity="0.4">
      <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
    </circle>
    
    <defs>
      <linearGradient id="coreGhost" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
  </svg>
);
