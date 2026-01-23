'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface ScrollDrivenImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ScrollDrivenImage({ src, alt, className = '' }: ScrollDrivenImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress: 0 when entering viewport, 1 when leaving
      const start = windowHeight;
      const end = -rect.height;
      const current = rect.top;
      
      const progress = Math.max(0, Math.min(1, (start - current) / (start - end)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation stages based on scroll progress
  const getTransform = () => {
    if (scrollProgress < 0.25) {
      // Stage 1: Scale up from 0.5 to 1.0
      const scale = 0.5 + (scrollProgress / 0.25) * 0.5;
      return `scale(${scale})`;
    } else if (scrollProgress < 0.5) {
      // Stage 2: Stay at full size, move down
      const localProgress = (scrollProgress - 0.25) / 0.25;
      const translateY = localProgress * 100;
      return `scale(1.0) translateY(${translateY}px)`;
    } else if (scrollProgress < 0.75) {
      // Stage 3: Continue moving down
      const localProgress = (scrollProgress - 0.5) / 0.25;
      const translateY = 100 + localProgress * 100;
      return `scale(1.0) translateY(${translateY}px)`;
    } else {
      // Stage 4: Add perspective and scale down to fit
      const localProgress = (scrollProgress - 0.75) / 0.25;
      const scale = 1.0 - localProgress * 0.15; // Scale down to 0.85
      const rotateX = localProgress * 8; // Slight perspective tilt
      const translateY = 200 - localProgress * 50; // Settle into position
      return `scale(${scale}) translateY(${translateY}px) rotateX(${rotateX}deg)`;
    }
  };

  return (
    <div 
      ref={containerRef} 
      className={`relative min-h-[200vh] flex items-start justify-center pt-32 ${className}`}
    >
      <div className="sticky top-32 w-full max-w-6xl perspective-1000">
        <div
          className="browser-mockup mx-auto overflow-hidden rounded-lg sm:rounded-2xl border border-[#1A1A1B] bg-[#111113] transition-transform duration-100 ease-out"
          style={{
            transform: getTransform(),
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Browser Chrome */}
          <div className="flex items-center gap-2 border-b border-[#1A1A1B] bg-[#0F0F10] px-3 sm:px-4 py-2 sm:py-3">
            {/* Traffic Lights */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#FF5F57]"></div>
              <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#FEBC2E]"></div>
              <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#28C840]"></div>
            </div>
            {/* URL Bar */}
            <div className="ml-2 sm:ml-4 flex-1 rounded-md bg-[#1A1A1B] px-2 sm:px-4 py-1 sm:py-1.5">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#71717A]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <span className="text-[10px] sm:text-xs text-[#A1A1AA] truncate">app.anots.com</span>
              </div>
            </div>
          </div>
          {/* Browser Content */}
          <div className="relative w-full bg-[#0A0A0B]">
            <Image
              src={src}
              alt={alt}
              width={1920}
              height={3000}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
