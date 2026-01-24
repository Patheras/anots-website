// Agent icons using Lucide React + custom SVGs - professional icon library
// ANOTS branding: dark minimal aesthetic with clean icons

import { Sun, Scale, Radio, Anvil } from 'lucide-react';

// Qubik (Apollo): God of creativity, arts, music, poetry, light
export const QubikIcon = ({ size = 48 }: { size?: number }) => (
  <div 
    className="flex items-center justify-center rounded-lg bg-[#0A0A0B] border border-[#DC2626]/30" 
    style={{ width: size, height: size }}
  >
    <Sun 
      className="text-[#DC2626]" 
      size={size * 0.5}
      strokeWidth={0.75}
    />
  </div>
);

// Themis: Goddess of justice, order, divine law
export const ThemisIcon = ({ size = 48 }: { size?: number }) => (
  <div 
    className="flex items-center justify-center rounded-lg bg-[#0A0A0B] border border-[#9333EA]/30" 
    style={{ width: size, height: size }}
  >
    <Scale 
      className="text-[#9333EA]" 
      size={size * 0.5}
      strokeWidth={0.75}
    />
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
      style={{ width: size * 0.5, height: size * 0.5 }}
      viewBox="-0.5 -0.5 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.75"
      strokeMiterlimit="10"
    >
      {/* Athena's Owl - Streamline icon */}
      <path d="M11.087499999999999 4.525v2.39375A7.175000000000001 7.175000000000001 0 0 1 3.9124999999999996 14.087499999999999V4.525" />
      <path d="M3.9124999999999996 4.525a3.5875000000000004 3.5875000000000004 0 1 0 7.175000000000001 0 3.5875000000000004 3.5875000000000004 0 1 0 -7.175000000000001 0" />
      <path d="M2.11875 0.9375a2.39375 2.39375 0 0 0 2.39375 2.39375h0.625A2.3874999999999997 2.3874999999999997 0 0 1 7.5 5.71875" />
      <path d="M12.88125 0.9375a2.39375 2.39375 0 0 1 -2.39375 2.39375h-0.625A2.3874999999999997 2.3874999999999997 0 0 0 7.5 5.71875" />
      <path d="m10.4875 14.6875 0 -4.89375" />
      <path d="m8.100000000000001 12.893749999999999 0 1.7937500000000002" />
    </svg>
  </div>
);

// Hephaestus: God of fire, metalworking, craftsmanship - The ANOT Maker
export const HephaestusIcon = ({ size = 48 }: { size?: number }) => (
  <div 
    className="flex items-center justify-center rounded-lg bg-[#0A0A0B] border border-[#F59E0B]/30" 
    style={{ width: size, height: size }}
  >
    <Anvil 
      className="text-[#F59E0B]" 
      size={size * 0.5}
      strokeWidth={0.75}
    />
  </div>
);

// Echo: Nymph of sound and reflection
export const EchoIcon = ({ size = 48 }: { size?: number }) => (
  <div 
    className="flex items-center justify-center rounded-lg bg-[#0A0A0B] border border-[#71717A]/30" 
    style={{ width: size, height: size }}
  >
    <Radio 
      className="text-[#A1A1AA]" 
      size={size * 0.5}
      strokeWidth={0.75}
    />
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
      style={{ width: size * 0.5, height: size * 0.5 }}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Hermes' Caduceus - winged staff with serpents */}
      {/* Central staff */}
      <line x1="12" y1="4" x2="12" y2="20" />
      {/* Wings at top */}
      <path d="M8 6 L12 4 L16 6" />
      <path d="M7 7 L12 5 L17 7" />
      {/* Left serpent */}
      <path d="M12 8 Q9 9, 9 11 Q9 13, 12 14" />
      <circle cx="9" cy="11" r="0.8" />
      {/* Right serpent */}
      <path d="M12 8 Q15 9, 15 11 Q15 13, 12 14" />
      <circle cx="15" cy="11" r="0.8" />
      {/* Lower serpents */}
      <path d="M12 14 Q9 15, 9 17 Q9 19, 12 20" />
      <path d="M12 14 Q15 15, 15 17 Q15 19, 12 20" />
      {/* Top ornament */}
      <circle cx="12" cy="4" r="1" />
    </svg>
  </div>
);
