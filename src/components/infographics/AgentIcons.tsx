// Simple badge-style agent icons
export const QubikIcon = ({ size = 48 }: { size?: number }) => (
  <div 
    className="flex items-center justify-center rounded-lg bg-gradient-to-br from-[#EF4444] to-[#DC2626]" 
    style={{ width: size, height: size }}
  >
    <span className="text-xl font-bold text-white">Q</span>
  </div>
);

export const ThemisIcon = ({ size = 48 }: { size?: number }) => (
  <div 
    className="flex items-center justify-center rounded-lg bg-gradient-to-br from-[#A855F7] to-[#9333EA]" 
    style={{ width: size, height: size }}
  >
    <span className="text-xl font-bold text-white">T</span>
  </div>
);

export const CoreIcon = ({ size = 48 }: { size?: number }) => (
  <div 
    className="flex items-center justify-center rounded-lg bg-gradient-to-br from-[#60A5FA] to-[#3B82F6]" 
    style={{ width: size, height: size }}
  >
    <span className="text-xl font-bold text-white">C</span>
  </div>
);
