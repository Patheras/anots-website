// Agent icons inspired by Greek gods - minimal geometric emblems
// ANOTS branding: dark minimal aesthetic with clean geometric shapes

// Qubik (Apollo): God of creativity, arts, music, poetry, light
export const QubikIcon = ({ size = 48 }: { size?: number }) => (
  <div 
    className="flex items-center justify-center rounded-lg bg-[#0A0A0B] border border-[#DC2626]/30" 
    style={{ width: size, height: size }}
  >
    <svg 
      className="text-[#DC2626]" 
      style={{ width: size * 0.6, height: size * 0.6 }}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5" 
      stroke="currentColor"
    >
      {/* Apollo's Sun Rays - radiating creativity */}
      <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
      <line x1="12" y1="2" x2="12" y2="6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="18" x2="12" y2="22" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="4.22" y1="4.22" x2="7.05" y2="7.05" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16.95" y1="16.95" x2="19.78" y2="19.78" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2" y1="12" x2="6" y2="12" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="12" x2="22" y2="12" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="4.22" y1="19.78" x2="7.05" y2="16.95" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16.95" y1="7.05" x2="19.78" y2="4.22" strokeWidth="1.5" strokeLinecap="round" />
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
      style={{ width: size * 0.6, height: size * 0.6 }}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5" 
      stroke="currentColor"
    >
      {/* Themis' Balanced Scales - geometric symmetry */}
      <line x1="12" y1="4" x2="12" y2="20" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="8" x2="18" y2="8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 8 L3 12 L9 12 Z" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M18 8 L15 12 L21 12 Z" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="9" y1="20" x2="15" y2="20" strokeWidth="1.5" strokeLinecap="round" />
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
      style={{ width: size * 0.6, height: size * 0.6 }}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5" 
      stroke="currentColor"
    >
      {/* Athena's Shield - geometric protection and wisdom */}
      <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
      <line x1="12" y1="4" x2="12" y2="8" strokeWidth="1.5" />
      <line x1="12" y1="16" x2="12" y2="20" strokeWidth="1.5" />
      <line x1="4" y1="12" x2="8" y2="12" strokeWidth="1.5" />
      <line x1="16" y1="12" x2="20" y2="12" strokeWidth="1.5" />
    </svg>
  </div>
);

// Hephaestus: God of fire, metalworking, craftsmanship
export const HephaestusIcon = ({ size = 48 }: { size?: number }) => (
  <div 
    className="flex items-center justify-center rounded-lg bg-[#0A0A0B] border border-[#F59E0B]/30" 
    style={{ width: size, height: size }}
  >
    <svg 
      className="text-[#F59E0B]" 
      style={{ width: size * 0.6, height: size * 0.6 }}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5" 
      stroke="currentColor"
    >
      {/* Hephaestus' Anvil - geometric forge symbol */}
      <rect x="6" y="14" width="12" height="6" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 14 L8 10 L16 10 L16 14" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="10" y1="4" x2="14" y2="4" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="4" x2="12" y2="10" strokeWidth="1.5" strokeLinecap="round" />
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
      style={{ width: size * 0.6, height: size * 0.6 }}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5" 
      stroke="currentColor"
    >
      {/* Echo's Sound Waves - concentric circles */}
      <circle cx="12" cy="12" r="2" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="5" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
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
      style={{ width: size * 0.6, height: size * 0.6 }}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5" 
      stroke="currentColor"
    >
      {/* Hermes' Winged Staff - geometric caduceus */}
      <line x1="12" y1="4" x2="12" y2="20" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 8 L12 4 L16 8" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
      <path d="M9 12 Q9 9, 12 9" strokeWidth="1.5" fill="none" />
      <path d="M15 12 Q15 15, 12 15" strokeWidth="1.5" fill="none" />
    </svg>
  </div>
);
