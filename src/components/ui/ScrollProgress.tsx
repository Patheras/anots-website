'use client';

import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / scrollHeight) * 100;
      setProgress(progress);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#DC2626] via-[#9333EA] to-[#3B82F6] z-[100] origin-left transition-transform duration-100 ease-out"
      style={{ 
        transform: `scaleX(${progress / 100})`,
        opacity: progress > 0 ? 1 : 0
      }}
    />
  );
}
