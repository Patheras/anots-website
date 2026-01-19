export const QubikIcon = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" fill="url(#qubikBg)" opacity="0.1" />
    <circle cx="32" cy="32" r="24" fill="#0A0A0B" stroke="url(#qubikStroke)" strokeWidth="2" />
    
    {/* Creative sparkles */}
    <path
      d="M32 18 L34 24 L40 26 L34 28 L32 34 L30 28 L24 26 L30 24 Z"
      fill="url(#qubikStroke)"
    />
    <path
      d="M44 22 L45 26 L49 27 L45 28 L44 32 L43 28 L39 27 L43 26 Z"
      fill="url(#qubikStroke)"
      opacity="0.6"
    />
    <path
      d="M20 22 L21 26 L25 27 L21 28 L20 32 L19 28 L15 27 L19 26 Z"
      fill="url(#qubikStroke)"
      opacity="0.6"
    />
    <path
      d="M38 40 L39 43 L42 44 L39 45 L38 48 L37 45 L34 44 L37 43 Z"
      fill="url(#qubikStroke)"
      opacity="0.4"
    />
    
    <defs>
      <linearGradient id="qubikBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#DC2626" />
        <stop offset="100%" stopColor="#EF4444" />
      </linearGradient>
      <linearGradient id="qubikStroke" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#DC2626" />
        <stop offset="100%" stopColor="#EF4444" />
      </linearGradient>
    </defs>
  </svg>
);

export const ThemisIcon = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" fill="url(#themisBg)" opacity="0.1" />
    <circle cx="32" cy="32" r="24" fill="#0A0A0B" stroke="url(#themisStroke)" strokeWidth="2" />
    
    {/* Shield with checkmark */}
    <path
      d="M32 18 L20 24 L20 32 C20 40 25 44 32 48 C39 44 44 40 44 32 L44 24 Z"
      fill="none"
      stroke="url(#themisStroke)"
      strokeWidth="2"
    />
    <path
      d="M26 32 L30 36 L38 28"
      stroke="url(#themisStroke)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* Balance scales elements */}
    <circle cx="22" cy="26" r="2" fill="url(#themisStroke)" opacity="0.4" />
    <circle cx="42" cy="26" r="2" fill="url(#themisStroke)" opacity="0.4" />
    
    <defs>
      <linearGradient id="themisBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9333EA" />
        <stop offset="100%" stopColor="#A855F7" />
      </linearGradient>
      <linearGradient id="themisStroke" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9333EA" />
        <stop offset="100%" stopColor="#A855F7" />
      </linearGradient>
    </defs>
  </svg>
);

export const CoreIcon = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" fill="url(#coreBg)" opacity="0.1" />
    <circle cx="32" cy="32" r="24" fill="#0A0A0B" stroke="url(#coreStroke)" strokeWidth="2" />
    
    {/* Compass */}
    <circle cx="32" cy="32" r="14" fill="none" stroke="url(#coreStroke)" strokeWidth="2" />
    
    {/* Cardinal directions */}
    <path
      d="M32 18 L32 24 M32 40 L32 46 M18 32 L24 32 M40 32 L46 32"
      stroke="url(#coreStroke)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    
    {/* North arrow */}
    <path
      d="M32 22 L36 32 L32 30 L28 32 Z"
      fill="url(#coreStroke)"
    />
    
    {/* Center dot */}
    <circle cx="32" cy="32" r="3" fill="url(#coreStroke)" />
    
    {/* Outer ring markers */}
    <circle cx="32" cy="16" r="1.5" fill="url(#coreStroke)" opacity="0.4" />
    <circle cx="32" cy="48" r="1.5" fill="url(#coreStroke)" opacity="0.4" />
    <circle cx="16" cy="32" r="1.5" fill="url(#coreStroke)" opacity="0.4" />
    <circle cx="48" cy="32" r="1.5" fill="url(#coreStroke)" opacity="0.4" />
    
    <defs>
      <linearGradient id="coreBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#60A5FA" />
      </linearGradient>
      <linearGradient id="coreStroke" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#60A5FA" />
      </linearGradient>
    </defs>
  </svg>
);
