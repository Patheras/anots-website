'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#1A1A1B] bg-[#0F0F10]/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <p className="text-sm text-[#D4D4D8]">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
              <a href="/privacy" className="text-[#5E6AD2] underline hover:text-[#7C85E3]">
                Learn more
              </a>
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={declineCookies}
              className="border-[#1A1A1B] bg-transparent text-[#D4D4D8] hover:bg-[#1A1A1B] hover:text-[#FAFAFA]"
            >
              Decline
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={acceptCookies}
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
