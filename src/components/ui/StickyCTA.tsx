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
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0A0A0B]/95 backdrop-blur-xl transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-4 py-3 sm:py-4">
          {/* Left: Message */}
          <div className="flex-1 text-center sm:text-left">
            <div className="text-sm sm:text-base font-semibold text-[#FAFAFA]">
              Ready to start?
            </div>
            <div className="text-xs sm:text-sm text-[#A1A1AA]">
              Full ANOTS features + 3 free ANOTs, no credit card required
            </div>
          </div>

          {/* Right: CTA Button + Close */}
          <div className="flex items-center gap-2">
            <Button
              variant="magic"
              size="lg"
              onClick={handleClick}
              className="min-h-[44px]"
            >
              Start Free
              <ArrowRight className="h-5 w-5" />
            </Button>
            
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="flex items-center justify-center min-w-[44px] min-h-[44px] p-2 text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors rounded-md hover:bg-white/5"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
