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
      // Stage 1: Start full size and flat (frontal view)
      const scale = 1.0 - (scrollProgress / 0.3) * 0.5; // 1.0 to 0.5
      const rotateX = (scrollProgress / 0.3) * 25; // 0 to 25deg
      const rotateY = (scrollProgress / 0.3) * 35; // 0 to 35deg (right side view)
      const rotateZ = (scrollProgress / 0.3) * -3; // 0 to -3deg
      return `scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else if (scrollProgress < 0.6) {
      // Stage 2: Continue shrinking and rotating to isometric right view
      const localProgress = (scrollProgress - 0.3) / 0.3;
      const scale = 0.5 - localProgress * 0.25; // 0.5 to 0.25
      const rotateX = 25 + localProgress * 20; // 25 to 45deg
      const rotateY = 35 + localProgress * 10; // 35 to 45deg (more side view)
      const rotateZ = -3 - localProgress * 2; // -3 to -5deg
      const translateY = -localProgress * 400; // Start scrolling through content
      return `scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) translateY(${translateY}px)`;
    } else {
      // Stage 3: Settled in isometric view, scroll through content
      const localProgress = (scrollProgress - 0.6) / 0.4;
      const scale = 0.25;
      const rotateX = 45;
      const rotateY = 45; // Right side isometric view
      const rotateZ = -5;
      const translateY = -400 - localProgress * 400; // Continue scrolling
      return `scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) translateY(${translateY}px)`;
    }
  };

  return (
    <div 
      ref={containerRef} 
      className={`relative min-h-[200vh] flex items-start justify-center pt-16 ${className}`}
    >
      <div className="sticky top-16 w-full flex items-center justify-center perspective-[2000px]">
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
