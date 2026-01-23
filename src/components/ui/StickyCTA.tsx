'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './button';

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollTime, setLastScrollTime] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      // Throttle: max 1 check per 100ms
      if (now - lastScrollTime < 100) return;
      
      setLastScrollTime(now);
      
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Show CTA when scrolled past 50vh
      setIsVisible(scrollY > viewportHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTime]);

  const handleClick = () => {
    // Track analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        location: 'sticky',
        scroll_depth: Math.round((window.scrollY / document.documentElement.scrollHeight) * 100)
      });
    }
    
    // Navigate to signup
    window.location.href = 'https://app.anots.com/signup';
  };

  useEffect(() => {
    // Track when sticky CTA appears
    if (isVisible && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'sticky_cta_shown', {
        scroll_depth: Math.round((window.scrollY / document.documentElement.scrollHeight) * 100)
      });
    }
  }, [isVisible]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0A0A0B]/95 backdrop-blur-xl transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 py-3 sm:py-4">
          {/* Left: Message */}
          <div className="text-center sm:text-left">
            <div className="text-sm sm:text-base font-semibold text-[#FAFAFA]">
              Ready to start?
            </div>
            <div className="text-xs sm:text-sm text-[#A1A1AA]">
              3 ANOTs free, no credit card required
            </div>
          </div>

          {/* Right: CTA Button */}
          <Button
            variant="primary"
            size="lg"
            onClick={handleClick}
            className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8"
          >
            Start Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
