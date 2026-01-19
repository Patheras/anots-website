export const QubikIcon = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Lightbulb - Creative Ideas */}
    <path
      d="M32 10 C24 10 18 16 18 24 C18 28 20 31 22 33 L22 40 C22 42 24 44 26 44 L38 44 C40 44 42 42 42 40 L42 33 C44 31 46 28 46 24 C46 16 40 10 32 10 Z"
      fill="url(#qubikGradient)"
      opacity="0.9"
    />
    
    {/* Filament - Creative spark */}
    <path
      d="M32 18 L32 28 M28 22 L32 26 L36 22"
      stroke="#DC2626"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* Base */}
    <rect x="28" y="44" width="8" height="4" rx="1" fill="#DC2626" opacity="0.6" />
    <rect x="29" y="48" width="6" height="2" rx="1" fill="#DC2626" opacity="0.4" />
    
    {/* Sparkles around - Ideas flowing */}
    <path d="M16 20 L17 22 L19 23 L17 24 L16 26 L15 24 L13 23 L15 22 Z" fill="#EF4444" opacity="0.7">
      <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite" />
    </path>
    <path d="M48 18 L49 20 L51 21 L49 22 L48 24 L47 22 L45 21 L47 20 Z" fill="#DC2626" opacity="0.7">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
    </path>
    <path d="M42 8 L43 10 L45 11 L43 12 L42 14 L41 12 L39 11 L41 10 Z" fill="#EF4444" opacity="0.6">
      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.2s" repeatCount="indefinite" />
    </path>
    
    <defs>
      <linearGradient id="qubikGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FCA5A5" />
        <stop offset="50%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#DC2626" />
      </linearGradient>
    </defs>
  </svg>
);

export const ThemisIcon = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Balance Scale - Justice & Analysis */}
    <path
      d="M32 12 L32 44"
      stroke="url(#themisGradient)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    
    {/* Top ornament */}
    <circle cx="32" cy="12" r="3" fill="url(#themisGradient)" />
    
    {/* Horizontal beam */}
    <path
      d="M18 22 L46 22"
      stroke="url(#themisGradient)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    
    {/* Left scale */}
    <path
      d="M18 22 L14 32 L22 32 Z"
      fill="none"
      stroke="url(#themisGradient)"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M14 32 L22 32" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" />
    
    {/* Right scale */}
    <path
      d="M46 22 L42 32 L50 32 Z"
      fill="none"
      stroke="url(#themisGradient)"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M42 32 L50 32" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" />
    
    {/* Base */}
    <path
      d="M26 44 L38 44 L36 50 L28 50 Z"
      fill="url(#themisGradient)"
      opacity="0.8"
    />
    
    {/* Checkmark on left scale - Approved */}
    <path
      d="M16 30 L17.5 31.5 L20 29"
      stroke="#9333EA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* Warning symbol on right scale */}
    <circle cx="46" cy="30" r="1" fill="#9333EA" />
    <path d="M46 27 L46 29" stroke="#9333EA" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Floating analysis particles */}
    <circle cx="12" cy="18" r="1.5" fill="#A855F7" opacity="0.5">
      <animate attributeName="cy" values="18;16;18" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="52" cy="18" r="1.5" fill="#9333EA" opacity="0.5">
      <animate attributeName="cy" values="18;16;18" dur="3s" begin="0.5s" repeatCount="indefinite" />
    </circle>
    
    <defs>
      <linearGradient id="themisGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#C084FC" />
        <stop offset="50%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#9333EA" />
      </linearGradient>
    </defs>
  </svg>
);

export const CoreIcon = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Compass Rose - Guidance & Direction */}
    <circle cx="32" cy="32" r="20" fill="none" stroke="url(#coreGradient)" strokeWidth="2" opacity="0.3" />
    <circle cx="32" cy="32" r="16" fill="none" stroke="url(#coreGradient)" strokeWidth="2" />
    
    {/* Cardinal points */}
    <path
      d="M32 12 L32 20 M32 44 L32 52 M12 32 L20 32 M44 32 L52 32"
      stroke="url(#coreGradient)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    
    {/* North arrow - Primary direction */}
    <path
      d="M32 16 L36 28 L32 26 L28 28 Z"
      fill="url(#coreGradient)"
    />
    
    {/* Intercardinal points */}
    <path
      d="M22 22 L26 26 M38 22 L34 26 M22 42 L26 38 M38 42 L34 38"
      stroke="#3B82F6"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.5"
    />
    
    {/* Center circle - Core */}
    <circle cx="32" cy="32" r="6" fill="url(#coreGradient)" opacity="0.8" />
    <circle cx="32" cy="32" r="3" fill="#60A5FA" />
    
    {/* Rotating guide ring */}
    <circle cx="32" cy="32" r="12" fill="none" stroke="#3B82F6" strokeWidth="1" strokeDasharray="2 4" opacity="0.4">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 32 32"
        to="360 32 32"
        dur="20s"
        repeatCount="indefinite"
      />
    </circle>
    
    {/* Floating guide stars */}
    <path d="M32 6 L32.5 7.5 L34 8 L32.5 8.5 L32 10 L31.5 8.5 L30 8 L31.5 7.5 Z" fill="#60A5FA" opacity="0.7">
      <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.5s" repeatCount="indefinite" />
    </path>
    <path d="M58 32 L58.5 33.5 L60 34 L58.5 34.5 L58 36 L57.5 34.5 L56 34 L57.5 33.5 Z" fill="#3B82F6" opacity="0.7">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="2.8s" repeatCount="indefinite" />
    </path>
    <path d="M6 32 L6.5 33.5 L8 34 L6.5 34.5 L6 36 L5.5 34.5 L4 34 L5.5 33.5 Z" fill="#60A5FA" opacity="0.7">
      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
    </path>
    
    <defs>
      <linearGradient id="coreGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#93C5FD" />
        <stop offset="50%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
  </svg>
);
