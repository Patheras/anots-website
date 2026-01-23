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
    if (scrollProgress < 0.3) {
      // Stage 1: Start small and centered, scale up slightly
      const scale = 0.15 + (scrollProgress / 0.3) * 0.1; // 0.15 to 0.25
      const rotateX = 45; // Strong isometric angle
      const rotateZ = -5; // Slight rotation for depth
      return `scale(${scale}) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg) translateY(0px)`;
    } else if (scrollProgress < 0.6) {
      // Stage 2: Scroll through the content (move up to show bottom)
      const localProgress = (scrollProgress - 0.3) / 0.3;
      const translateY = -localProgress * 800; // Scroll through the long image
      const scale = 0.25;
      const rotateX = 45;
      const rotateZ = -5;
      return `scale(${scale}) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg) translateY(${translateY}px)`;
    } else {
      // Stage 3: Settle and slightly zoom out
      const localProgress = (scrollProgress - 0.6) / 0.4;
      const scale = 0.25 - localProgress * 0.02; // Slightly smaller
      const rotateX = 45 + localProgress * 5; // More perspective
      const rotateZ = -5;
      const translateY = -800;
      return `scale(${scale}) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg) translateY(${translateY}px)`;
    }
  };

  return (
    <div 
      ref={containerRef} 
      className={`relative min-h-[200vh] flex items-center justify-center ${className}`}
    >
      <div className="sticky top-1/2 -translate-y-1/2 w-full flex items-center justify-center perspective-[2000px]">
        <div
          className="browser-mockup overflow-hidden rounded-lg border border-[#1A1A1B] bg-[#111113] shadow-2xl transition-transform duration-100 ease-out"
          style={{
            transform: getTransform(),
            transformStyle: 'preserve-3d',
            maxWidth: '1200px',
            width: '100%',
          }}
        >
          {/* Browser Chrome */}
          <div className="flex items-center gap-2 border-b border-[#1A1A1B] bg-[#0F0F10] px-3 py-2">
            {/* Traffic Lights */}
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full bg-[#FF5F57]"></div>
              <div className="h-2 w-2 rounded-full bg-[#FEBC2E]"></div>
              <div className="h-2 w-2 rounded-full bg-[#28C840]"></div>
            </div>
            {/* URL Bar */}
            <div className="ml-3 flex-1 rounded-md bg-[#1A1A1B] px-3 py-1">
              <div className="flex items-center gap-1.5">
                <svg className="h-2.5 w-2.5 text-[#71717A]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <span className="text-[9px] text-[#A1A1AA] truncate">app.anots.com/brand-room</span>
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
