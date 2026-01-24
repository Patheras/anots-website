// Agent icons using Lucide React - professional icon library
// ANOTS branding: dark minimal aesthetic with clean icons

import { Sun, Scale, Bird, Anvil, Radio, Send } from 'lucide-react';

// Qubik (Apollo): God of creativity, arts, music, poetry, light
export const QubikIcon = ({ size = 48 }: { size?: number }) => (
  <div 
    className="flex items-center justify-center rounded-lg bg-[#0A0A0B] border border-[#DC2626]/30" 
    style={{ width: size, height: size }}
  >
    <Sun 
      className="text-[#DC2626]" 
      size={size * 0.5}
      strokeWidth={1}
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
      strokeWidth={1}
    />
  </div>
);

// Athena: Goddess of wisdom, strategic warfare, crafts
export const CoreIcon = ({ size = 48 }: { size?: number }) => (
  <div 
    className="flex items-center justify-center rounded-lg bg-[#0A0A0B] border border-[#3B82F6]/30" 
    style={{ width: size, height: size }}
  >
    <Bird 
      className="text-[#3B82F6]" 
      size={size * 0.5}
      strokeWidth={1}
    />
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
      strokeWidth={1}
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
      strokeWidth={1}
    />
  </div>
);

// Hermes: Messenger god, communication, commerce
export const HermesIcon = ({ size = 48 }: { size?: number }) => (
  <div 
    className="flex items-center justify-center rounded-lg bg-[#0A0A0B] border border-[#5E6AD2]/30" 
    style={{ width: size, height: size }}
  >
    <Send 
      className="text-[#5E6AD2]" 
      size={size * 0.5}
      strokeWidth={1}
    />
  </div>
);
