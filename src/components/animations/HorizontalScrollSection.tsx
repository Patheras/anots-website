'use client';

import { useEffect, useRef, useState } from 'react';

interface HorizontalScrollSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function HorizontalScrollSection({ children, className = '' }: HorizontalScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollStart = -rect.top;
      const scrollEnd = rect.height - window.innerHeight;
      
      if (scrollStart < 0) {
        setScrollProgress(0);
      } else if (scrollStart > scrollEnd) {
        setScrollProgress(1);
      } else {
        setScrollProgress(scrollStart / scrollEnd);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="flex h-full transition-transform duration-100 ease-out"
          style={{
            transform: `translateX(-${scrollProgress * 66.666}%)`,
            width: '300%',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
