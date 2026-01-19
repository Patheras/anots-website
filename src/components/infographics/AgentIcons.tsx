export const QubikIcon = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* ASCII Art Style - Creative Chaos */}
    <text x="10" y="20" fontFamily="monospace" fontSize="14" fill="#DC2626" opacity="0.8">
      *  ✨  *
    </text>
    <text x="10" y="35" fontFamily="monospace" fontSize="14" fill="#EF4444" opacity="0.9">
      {'  /\\_/\\'}
    </text>
    <text x="10" y="50" fontFamily="monospace" fontSize="14" fill="#DC2626">
      {' ( o.o )'}
    </text>
    <text x="10" y="65" fontFamily="monospace" fontSize="14" fill="#EF4444">
      {'  > ^ <'}
    </text>
    <text x="10" y="80" fontFamily="monospace" fontSize="12" fill="#DC2626" opacity="0.7">
      {'💡 ideas'}
    </text>
    
    {/* Floating sparkles */}
    <text x="5" y="15" fontFamily="monospace" fontSize="10" fill="#EF4444" opacity="0.6">
      <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" />
      *
    </text>
    <text x="90" y="25" fontFamily="monospace" fontSize="10" fill="#DC2626" opacity="0.6">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
      ✨
    </text>
    <text x="85" y="70" fontFamily="monospace" fontSize="10" fill="#EF4444" opacity="0.5">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.2s" repeatCount="indefinite" />
      *
    </text>
  </svg>
);

export const ThemisIcon = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* ASCII Art Style - Analytical & Balanced */}
    <text x="10" y="20" fontFamily="monospace" fontSize="14" fill="#9333EA" opacity="0.8">
      {'  ⚖️'}
    </text>
    <text x="10" y="35" fontFamily="monospace" fontSize="14" fill="#A855F7" opacity="0.9">
      {'┌─────┐'}
    </text>
    <text x="10" y="50" fontFamily="monospace" fontSize="14" fill="#9333EA">
      {'│ ✓ ✗ │'}
    </text>
    <text x="10" y="65" fontFamily="monospace" fontSize="14" fill="#A855F7">
      {'└─────┘'}
    </text>
    <text x="10" y="80" fontFamily="monospace" fontSize="12" fill="#9333EA" opacity="0.7">
      {'analyze'}
    </text>
    
    {/* Floating analysis symbols */}
    <text x="5" y="15" fontFamily="monospace" fontSize="10" fill="#A855F7" opacity="0.5">
      <animate attributeName="cy" values="0;-2;0" dur="3s" repeatCount="indefinite" />
      ?
    </text>
    <text x="90" y="25" fontFamily="monospace" fontSize="10" fill="#9333EA" opacity="0.5">
      <animate attributeName="cy" values="0;-2;0" dur="3s" begin="0.5s" repeatCount="indefinite" />
      !
    </text>
    <text x="85" y="70" fontFamily="monospace" fontSize="10" fill="#A855F7" opacity="0.4">
      <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.5s" repeatCount="indefinite" />
      ✓
    </text>
  </svg>
);

export const CoreIcon = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* ASCII Art Style - Guiding & Centered */}
    <text x="10" y="20" fontFamily="monospace" fontSize="14" fill="#3B82F6" opacity="0.8">
      {'    ↑'}
    </text>
    <text x="10" y="35" fontFamily="monospace" fontSize="14" fill="#60A5FA" opacity="0.9">
      {'  ← ⊕ →'}
    </text>
    <text x="10" y="50" fontFamily="monospace" fontSize="14" fill="#3B82F6">
      {'    ↓'}
    </text>
    <text x="10" y="65" fontFamily="monospace" fontSize="14" fill="#60A5FA" opacity="0.8">
      {'  ╱─╲'}
    </text>
    <text x="10" y="80" fontFamily="monospace" fontSize="12" fill="#3B82F6" opacity="0.7">
      {'  guide'}
    </text>
    
    {/* Floating guide markers */}
    <text x="5" y="15" fontFamily="monospace" fontSize="10" fill="#60A5FA" opacity="0.5">
      <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />
      *
    </text>
    <text x="90" y="25" fontFamily="monospace" fontSize="10" fill="#3B82F6" opacity="0.5">
      <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite" />
      ✦
    </text>
    <text x="85" y="70" fontFamily="monospace" fontSize="10" fill="#60A5FA" opacity="0.4">
      <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
      →
    </text>
    
    {/* Rotating compass indicator */}
    <text x="45" y="42" fontFamily="monospace" fontSize="8" fill="#3B82F6" opacity="0.3">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 50 40"
        to="360 50 40"
        dur="20s"
        repeatCount="indefinite"
      />
      ○
    </text>
  </svg>
);
