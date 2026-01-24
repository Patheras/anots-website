// Agent icons inspired by Greek gods - minimal heraldic emblems
// Qubik (Apollo): God of creativity, arts, music, poetry, light
export const QubikIcon = ({ size = 48 }: { size?: number }) => (
  <div 
    className="flex items-center justify-center rounded-full bg-gradient-to-br from-[#EF4444] to-[#DC2626] border-2 border-[#DC2626]/30" 
    style={{ width: size, height: size }}
  >
    <svg 
      className="text-white" 
      style={{ width: size * 0.5, height: size * 0.5 }}
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      {/* Apollo's Lyre - symbol of creativity and arts */}
      <path d="M12 2C12 2 8 3 8 8V12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12V8C16 3 12 2 12 2M10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12V8.5C14 6.57 13.21 5.27 12 4.5C10.79 5.27 10 6.57 10 8.5V12M12 18C9.24 18 7 15.76 7 13H5C5 16.87 8.13 20 12 20C15.87 20 19 16.87 19 13H17C17 15.76 14.76 18 12 18M12 22C11.45 22 11 21.55 11 21V19H13V21C13 21.55 12.55 22 12 22Z" />
    </svg>
  </div>
);

// Themis: Goddess of justice, order, divine law
export const ThemisIcon = ({ size = 48 }: { size?: number }) => (
  <div 
    className="flex items-center justify-center rounded-full bg-gradient-to-br from-[#A855F7] to-[#9333EA] border-2 border-[#9333EA]/30" 
    style={{ width: size, height: size }}
  >
    <svg 
      className="text-white" 
      style={{ width: size * 0.5, height: size * 0.5 }}
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      {/* Themis' Scales - symbol of justice and balance */}
      <path d="M12 3L2 8L5 9.5V15.5C5 17.43 8.13 19 12 19C15.87 19 19 17.43 19 15.5V9.5L22 8L12 3M12 5.18L17.94 8L12 10.82L6.06 8L12 5.18M7 10.61L11 12.61V16.13C9.86 15.81 8.87 15.31 8.18 14.71L7 13.81V10.61M17 13.81L15.82 14.71C15.13 15.31 14.14 15.81 13 16.13V12.61L17 10.61V13.81M12 21L2 16V14L12 19L22 14V16L12 21Z" />
    </svg>
  </div>
);

// Athena: Goddess of wisdom, strategic warfare, crafts
export const CoreIcon = ({ size = 48 }: { size?: number }) => (
  <div 
    className="flex items-center justify-center rounded-full bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] border-2 border-[#3B82F6]/30" 
    style={{ width: size, height: size }}
  >
    <svg 
      className="text-white" 
      style={{ width: size * 0.5, height: size * 0.5 }}
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      {/* Athena's Owl - symbol of wisdom and knowledge */}
      <path d="M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2M12 4L20 12L12 20L4 12L12 4M9 9C8.45 9 8 9.45 8 10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10C10 9.45 9.55 9 9 9M15 9C14.45 9 14 9.45 14 10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10C16 9.45 15.55 9 15 9M12 13C10.34 13 9 14.34 9 16H15C15 14.34 13.66 13 12 13Z" />
    </svg>
  </div>
);

// Hephaestus: God of fire, metalworking, craftsmanship
export const HephaestusIcon = ({ size = 48 }: { size?: number }) => (
  <div 
    className="flex items-center justify-center rounded-full bg-gradient-to-br from-[#FB923C] to-[#F59E0B] border-2 border-[#F59E0B]/30" 
    style={{ width: size, height: size }}
  >
    <svg 
      className="text-white" 
      style={{ width: size * 0.5, height: size * 0.5 }}
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      {/* Hephaestus' Hammer and Anvil - symbol of craftsmanship */}
      <path d="M16.5 5.5L18 7L19.5 5.5L18 4M13 2L11 4L13 6L15 4M21 10.5L19 8.5L17 10.5L19 12.5M14.32 12.68L12.9 11.26L11.5 12.68L12.9 14.1M3.5 11L2 12.5L10.5 21L12 19.5M20.5 3L19 4.5L20.5 6L22 4.5M15.5 7L14 8.5L15.5 10L17 8.5M10.5 2.5L9 4L10.5 5.5L12 4" />
    </svg>
  </div>
);


// Echo: Nymph of sound and reflection
export const EchoIcon = ({ size = 48 }: { size?: number }) => (
  <div 
    className="flex items-center justify-center rounded-full bg-gradient-to-br from-[#71717A] to-[#52525B] border-2 border-[#52525B]/30" 
    style={{ width: size, height: size }}
  >
    <svg 
      className="text-white" 
      style={{ width: size * 0.5, height: size * 0.5 }}
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      {/* Echo's Sound Waves - symbol of voice and reflection */}
      <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
    </svg>
  </div>
);

// Hermes: Messenger god, communication, commerce
export const HermesIcon = ({ size = 48 }: { size?: number }) => (
  <div 
    className="flex items-center justify-center rounded-full bg-gradient-to-br from-[#818CF8] to-[#5E6AD2] border-2 border-[#5E6AD2]/30" 
    style={{ width: size, height: size }}
  >
    <svg 
      className="text-white" 
      style={{ width: size * 0.5, height: size * 0.5 }}
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      {/* Hermes' Caduceus - symbol of messengers and communication */}
      <path d="M12,2C11.5,2 11,2.19 10.59,2.59L2.59,10.59C1.8,11.37 1.8,12.63 2.59,13.41L10.59,21.41C11.37,22.2 12.63,22.2 13.41,21.41L21.41,13.41C22.2,12.63 22.2,11.37 21.41,10.59L13.41,2.59C13,2.19 12.5,2 12,2M12,4L20,12L12,20L4,12L12,4M11,7V9H13V7H11M11,11V17H13V11H11Z" />
    </svg>
  </div>
);
