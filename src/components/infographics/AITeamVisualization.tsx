'use client';

export function AITeamVisualization() {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      {/* Qubik */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-[#EF4444] to-[#DC2626] shadow-lg">
          <span className="text-xl sm:text-2xl font-bold text-white">Q</span>
        </div>
        <span className="text-xs font-medium text-[#DC2626]">Qubik</span>
      </div>

      {/* Arrow */}
      <svg className="h-4 w-4 sm:h-6 sm:w-6 text-[#71717A] flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>

      {/* Themis */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-[#A855F7] to-[#9333EA] shadow-lg">
          <span className="text-xl sm:text-2xl font-bold text-white">T</span>
        </div>
        <span className="text-xs font-medium text-[#9333EA]">Themis</span>
      </div>

      {/* Arrow */}
      <svg className="h-4 w-4 sm:h-6 sm:w-6 text-[#71717A] flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>

      {/* Core */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] shadow-lg">
          <span className="text-xl sm:text-2xl font-bold text-white">C</span>
        </div>
        <span className="text-xs font-medium text-[#3B82F6]">Core</span>
      </div>
    </div>
  );
}
