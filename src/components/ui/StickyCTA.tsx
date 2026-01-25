'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Button } from './button';

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [lastScrollTime, setLastScrollTime] = useState(0);

  useEffect(() => {
    // Check if user previously closed the CTA
    const wasClosed = localStorage.getItem('stickyCTAClosed') === 'true';
    setIsClosed(wasClosed);

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

  const handleClose = () => {
    setIsClosed(true);
    localStorage.setItem('stickyCTAClosed', 'true');
    
    // Track close event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'sticky_cta_closed', {
        scroll_depth: Math.round((window.scrollY / document.documentElement.scrollHeight) * 100)
      });
    }
  };

  useEffect(() => {
    // Track when sticky CTA appears
    if (isVisible && !isClosed && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'sticky_cta_shown', {
        scroll_depth: Math.round((window.scrollY / document.documentElement.scrollHeight) * 100)
      });
    }
  }, [isVisible, isClosed]);

  // Don't render if closed
  if (isClosed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0A0A0B]/95 backdrop-blur-xl transition-transform duration-300 max-h-[72px] ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 py-3">
          {/* Left: Message */}
          <div className="flex-1 text-left">
            <div className="text-xs sm:text-sm md:text-base font-semibold text-[#FAFAFA]">
              Ready to start?
            </div>
            <div className="text-xs text-[#A1A1AA] hidden sm:block">
              Full Marketing Room + 3 ANOTs free, no credit card
            </div>
          </div>

          {/* Right: CTA Button + Close */}
          <div className="flex items-center gap-2">
            <Button
              variant="magic"
              size="sm"
              onClick={handleClick}
              className="min-h-[44px] text-xs sm:text-sm"
            >
              Start Free
              <ArrowRight className="h-4 w-4" />
            </Button>
            
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="flex items-center justify-center min-w-[44px] min-h-[44px] p-2 text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors rounded-md hover:bg-white/5"
              aria-label="Close"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
