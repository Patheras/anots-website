// Agent icons inspired by Greek gods - detailed geometric emblems
// ANOTS branding: dark minimal aesthetic with intricate 1px line work

// Qubik (Apollo): God of creativity, arts, music, poetry, light
export const QubikIcon = ({ size = 48 }: { size?: number }) => (
  <div 
    className="flex items-center justify-center rounded-lg bg-[#0A0A0B] border border-[#DC2626]/30" 
    style={{ width: size, height: size }}
  >
    <svg 
      className="text-[#DC2626]" 
      style={{ width: size * 0.7, height: size * 0.7 }}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1" 
      stroke="currentColor"
    >
      {/* Apollo's Radiant Sun - complex radiating pattern */}
      <circle cx="12" cy="12" r="2.5" strokeWidth="1" />
      <circle cx="12" cy="12" r="5" strokeWidth="1" />
      <circle cx="12" cy="12" r="7.5" strokeWidth="1" />
      {/* Primary rays */}
      <line x1="12" y1="1" x2="12" y2="4.5" strokeWidth="1" />
      <line x1="12" y1="19.5" x2="12" y2="23" strokeWidth="1" />
      <line x1="1" y1="12" x2="4.5" y2="12" strokeWidth="1" />
      <line x1="19.5" y1="12" x2="23" y2="12" strokeWidth="1" />
      {/* Diagonal rays */}
      <line x1="3.5" y1="3.5" x2="6.2" y2="6.2" strokeWidth="1" />
      <line x1="17.8" y1="17.8" x2="20.5" y2="20.5" strokeWidth="1" />
      <line x1="20.5" y1="3.5" x2="17.8" y2="6.2" strokeWidth="1" />
      <line x1="6.2" y1="17.8" x2="3.5" y2="20.5" strokeWidth="1" />
      {/* Secondary rays */}
      <line x1="12" y1="2" x2="12" y2="3.5" strokeWidth="0.5" opacity="0.6" />
      <line x1="12" y1="20.5" x2="12" y2="22" strokeWidth="0.5" opacity="0.6" />
      <line x1="2" y1="12" x2="3.5" y2="12" strokeWidth="0.5" opacity="0.6" />
      <line x1="20.5" y1="12" x2="22" y2="12" strokeWidth="0.5" opacity="0.6" />
      {/* Inner details */}
      <path d="M12 9.5 L13.5 12 L12 14.5 L10.5 12 Z" strokeWidth="1" />
    </svg>
  </div>
);

// Themis: Goddess of justice, order, divine law
export const ThemisIcon = ({ size = 48 }: { size?: number }) => (
  <div 
    className="flex items-center justify-center rounded-lg bg-[#0A0A0B] border border-[#9333EA]/30" 
    style={{ width: size, height: size }}
  >
    <svg 
      className="text-[#9333EA]" 
      style={{ width: size * 0.7, height: size * 0.7 }}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1" 
      stroke="currentColor"
    >
      {/* Themis' Balanced Scales - intricate symmetry */}
      {/* Central pillar */}
      <line x1="12" y1="3" x2="12" y2="21" strokeWidth="1" />
      <rect x="10.5" y="20" width="3" height="2" strokeWidth="1" />
      {/* Crossbeam */}
      <line x1="5" y1="7" x2="19" y2="7" strokeWidth="1" />
      {/* Left scale */}
      <line x1="5" y1="7" x2="5" y2="10" strokeWidth="1" />
      <path d="M2 13 L5 10 L8 13 L2 13 Z" strokeWidth="1" />
      <line x1="2" y1="13" x2="8" y2="13" strokeWidth="1" />
      {/* Right scale */}
      <line x1="19" y1="7" x2="19" y2="10" strokeWidth="1" />
      <path d="M16 13 L19 10 L22 13 L16 13 Z" strokeWidth="1" />
      <line x1="16" y1="13" x2="22" y2="13" strokeWidth="1" />
      {/* Decorative elements */}
      <circle cx="12" cy="7" r="1" strokeWidth="1" />
      <circle cx="5" cy="10" r="0.5" strokeWidth="1" />
      <circle cx="19" cy="10" r="0.5" strokeWidth="1" />
      {/* Balance indicators */}
      <line x1="3" y1="14" x2="7" y2="14" strokeWidth="0.5" opacity="0.6" />
      <line x1="17" y1="14" x2="21" y2="14" strokeWidth="0.5" opacity="0.6" />
    </svg>
  </div>
);

// Athena: Goddess of wisdom, strategic warfare, crafts
export const CoreIcon = ({ size = 48 }: { size?: number }) => (
  <div 
    className="flex items-center justify-center rounded-lg bg-[#0A0A0B] border border-[#3B82F6]/30" 
    style={{ width: size, height: size }}
  >
    <svg 
      className="text-[#3B82F6]" 
      style={{ width: size * 0.7, height: size * 0.7 }}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1" 
      stroke="currentColor"
    >
      {/* Athena's Owl - detailed geometric wisdom symbol */}
      {/* Head outline */}
      <circle cx="12" cy="10" r="6.5" strokeWidth="1" />
      {/* Inner head detail */}
      <path d="M7 8 Q7 6, 9 6 L15 6 Q17 6, 17 8" strokeWidth="1" />
      {/* Eyes - large and detailed */}
      <circle cx="9.5" cy="9.5" r="2" strokeWidth="1" />
      <circle cx="14.5" cy="9.5" r="2" strokeWidth="1" />
      <circle cx="9.5" cy="9.5" r="1" strokeWidth="1" fill="currentColor" />
      <circle cx="14.5" cy="9.5" r="1" strokeWidth="1" fill="currentColor" />
      {/* Beak */}
      <path d="M12 11 L11 13 L13 13 Z" strokeWidth="1" />
      {/* Ear tufts - detailed */}
      <line x1="7.5" y1="4.5" x2="6" y2="2" strokeWidth="1" />
      <line x1="8" y1="5" x2="7" y2="3" strokeWidth="0.5" opacity="0.6" />
      <line x1="16.5" y1="4.5" x2="18" y2="2" strokeWidth="1" />
      <line x1="16" y1="5" x2="17" y2="3" strokeWidth="0.5" opacity="0.6" />
      {/* Body */}
      <path d="M7 15 L12 17 L17 15" strokeWidth="1" />
      <path d="M8 16 L12 17.5 L16 16" strokeWidth="0.5" opacity="0.6" />
      {/* Wings */}
      <path d="M7 15 L5 17 L6 19" strokeWidth="1" />
      <path d="M17 15 L19 17 L18 19" strokeWidth="1" />
      {/* Legs */}
      <line x1="10" y1="17" x2="10" y2="21" strokeWidth="1" />
      <line x1="14" y1="17" x2="14" y2="21" strokeWidth="1" />
      {/* Talons */}
      <path d="M10 21 L9 22 M10 21 L11 22" strokeWidth="1" />
      <path d="M14 21 L13 22 M14 21 L15 22" strokeWidth="1" />
      {/* Feather details */}
      <line x1="12" y1="13" x2="12" y2="15" strokeWidth="0.5" opacity="0.4" />
    </svg>
  </div>
);

// Hephaestus: God of fire, metalworking, craftsmanship - The ANOT Maker
export const HephaestusIcon = ({ size = 48 }: { size?: number }) => (
  <div 
    className="flex items-center justify-center rounded-lg bg-[#0A0A0B] border border-[#F59E0B]/30" 
    style={{ width: size, height: size }}
  >
    <svg 
      className="text-[#F59E0B]" 
      style={{ width: size * 0.7, height: size * 0.7 }}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1" 
      stroke="currentColor"
    >
      {/* Hephaestus' Forge - anvil with flames creating ANOTs */}
      {/* Anvil base */}
      <rect x="6" y="17" width="12" height="3" strokeWidth="1" />
      <line x1="7" y1="18.5" x2="17" y2="18.5" strokeWidth="0.5" opacity="0.6" />
      {/* Anvil body */}
      <path d="M7 17 L7 14 L17 14 L17 17" strokeWidth="1" />
      <rect x="8" y="14.5" width="8" height="1" strokeWidth="0.5" opacity="0.6" />
      {/* Anvil horn */}
      <path d="M17 14 L19 14 L19 16" strokeWidth="1" />
      {/* Flame - detailed geometric fire */}
      <path d="M12 14 L12 9 L10.5 11 L12 9 L13.5 11 L12 9" strokeWidth="1" />
      <path d="M10.5 11 L9 13 L10.5 11 L12 13 L10.5 11" strokeWidth="1" />
      <path d="M13.5 11 L15 13 L13.5 11 L12 13 L13.5 11" strokeWidth="1" />
      {/* Inner flame */}
      <path d="M12 11 L11 12.5 L12 11 L13 12.5 L12 11" strokeWidth="0.5" opacity="0.7" />
      {/* Sparks and embers */}
      <circle cx="8" cy="7" r="0.5" strokeWidth="1" fill="currentColor" />
      <circle cx="16" cy="8" r="0.5" strokeWidth="1" fill="currentColor" />
      <circle cx="10" cy="5" r="0.3" strokeWidth="1" fill="currentColor" />
      <circle cx="14" cy="6" r="0.3" strokeWidth="1" fill="currentColor" />
      {/* Heat waves */}
      <path d="M9 4 Q9.5 3, 10 4" strokeWidth="0.5" opacity="0.5" />
      <path d="M14 3 Q14.5 2, 15 3" strokeWidth="0.5" opacity="0.5" />
      {/* Hammer (tool of creation) */}
      <line x1="4" y1="10" x2="7" y2="13" strokeWidth="1" />
      <rect x="3" y="9" width="2" height="2" strokeWidth="1" />
    </svg>
  </div>
);

// Echo: Nymph of sound and reflection
export const EchoIcon = ({ size = 48 }: { size?: number }) => (
  <div 
    className="flex items-center justify-center rounded-lg bg-[#0A0A0B] border border-[#71717A]/30" 
    style={{ width: size, height: size }}
  >
    <svg 
      className="text-[#A1A1AA]" 
      style={{ width: size * 0.7, height: size * 0.7 }}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1" 
      stroke="currentColor"
    >
      {/* Echo's Sound Waves - detailed concentric patterns */}
      {/* Center source */}
      <circle cx="12" cy="12" r="1.5" strokeWidth="1" fill="currentColor" />
      {/* Primary waves */}
      <circle cx="12" cy="12" r="3.5" strokeWidth="1" />
      <circle cx="12" cy="12" r="5.5" strokeWidth="1" />
      <circle cx="12" cy="12" r="7.5" strokeWidth="1" />
      <circle cx="12" cy="12" r="9.5" strokeWidth="1" />
      {/* Secondary waves (fading) */}
      <circle cx="12" cy="12" r="4.5" strokeWidth="0.5" opacity="0.5" />
      <circle cx="12" cy="12" r="6.5" strokeWidth="0.5" opacity="0.5" />
      <circle cx="12" cy="12" r="8.5" strokeWidth="0.5" opacity="0.5" />
      {/* Directional indicators */}
      <line x1="12" y1="2.5" x2="12" y2="4" strokeWidth="1" />
      <line x1="12" y1="20" x2="12" y2="21.5" strokeWidth="1" />
      <line x1="2.5" y1="12" x2="4" y2="12" strokeWidth="1" />
      <line x1="20" y1="12" x2="21.5" y2="12" strokeWidth="1" />
      {/* Reflection points */}
      <circle cx="12" cy="2.5" r="0.5" strokeWidth="1" />
      <circle cx="12" cy="21.5" r="0.5" strokeWidth="1" />
      <circle cx="2.5" cy="12" r="0.5" strokeWidth="1" />
      <circle cx="21.5" cy="12" r="0.5" strokeWidth="1" />
    </svg>
  </div>
);

// Hermes: Messenger god, communication, commerce
export const HermesIcon = ({ size = 48 }: { size?: number }) => (
  <div 
    className="flex items-center justify-center rounded-lg bg-[#0A0A0B] border border-[#5E6AD2]/30" 
    style={{ width: size, height: size }}
  >
    <svg 
      className="text-[#5E6AD2]" 
      style={{ width: size * 0.7, height: size * 0.7 }}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1" 
      stroke="currentColor"
    >
      {/* Hermes' Caduceus - detailed winged staff */}
      {/* Central staff */}
      <line x1="12" y1="3" x2="12" y2="21" strokeWidth="1" />
      {/* Wings at top */}
      <path d="M8 5 L12 3 L16 5" strokeWidth="1" />
      <path d="M7 6 L12 4 L17 6" strokeWidth="0.5" opacity="0.6" />
      <path d="M6 7 L8 5 L10 7" strokeWidth="1" />
      <path d="M18 7 L16 5 L14 7" strokeWidth="1" />
      {/* Serpents - intertwined */}
      <path d="M12 8 Q9 9, 9 11 Q9 13, 12 14" strokeWidth="1" />
      <path d="M12 8 Q15 9, 15 11 Q15 13, 12 14" strokeWidth="1" />
      <path d="M12 14 Q9 15, 9 17 Q9 19, 12 20" strokeWidth="1" />
      <path d="M12 14 Q15 15, 15 17 Q15 19, 12 20" strokeWidth="1" />
      {/* Serpent heads */}
      <circle cx="9" cy="11" r="0.8" strokeWidth="1" />
      <circle cx="15" cy="11" r="0.8" strokeWidth="1" />
      {/* Serpent eyes */}
      <circle cx="9" cy="11" r="0.3" strokeWidth="1" fill="currentColor" />
      <circle cx="15" cy="11" r="0.3" strokeWidth="1" fill="currentColor" />
      {/* Staff ornament at top */}
      <circle cx="12" cy="3" r="1" strokeWidth="1" />
      {/* Base */}
      <line x1="10" y1="21" x2="14" y2="21" strokeWidth="1" />
      {/* Speed lines (messenger motion) */}
      <line x1="6" y1="12" x2="8" y2="12" strokeWidth="0.5" opacity="0.4" />
      <line x1="16" y1="12" x2="18" y2="12" strokeWidth="0.5" opacity="0.4" />
    </svg>
  </div>
);
