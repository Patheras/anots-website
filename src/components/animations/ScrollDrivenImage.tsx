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

  // Animation stages based on scroll progress - Linear style
  const getTransform = () => {
    if (scrollProgress < 0.5) {
      // Stage 1: Just add subtle perspective tilt
      const rotateX = scrollProgress * 24; // 0 to 12deg (subtle tilt)
      const translateY = scrollProgress * -100; // Slight upward movement
      return `rotateX(${rotateX}deg) translateY(${translateY}px)`;
    } else {
      // Stage 2: Maintain tilt, scroll through content
      const localProgress = (scrollProgress - 0.5) / 0.5;
      const rotateX = 12;
      const translateY = -50 - localProgress * 500; // Scroll through the long image
      return `rotateX(${rotateX}deg) translateY(${translateY}px)`;
    }
  };

  return (
    <div 
      ref={containerRef} 
      className={`relative min-h-[200vh] flex items-start justify-center pt-24 ${className}`}
    >
      <div className="sticky top-24 w-full max-w-6xl mx-auto px-4 perspective-[2000px]">
        <div
          className="browser-mockup overflow-hidden rounded-xl border border-[#1A1A1B] bg-[#111113] shadow-2xl transition-transform duration-100 ease-out"
          style={{
            transform: getTransform(),
            transformStyle: 'preserve-3d',
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
