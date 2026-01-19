'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from './button';

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1A1A1B] bg-[#0A0A0B]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Newsletter */}
        <div className="mb-12 rounded-2xl border border-[#1A1A1B] bg-[#0F0F10] p-8">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold text-[#FAFAFA]">Stay Updated</h3>
            <p className="mt-2 text-sm text-[#A1A1AA]">
              Get the latest updates on AI marketing automation and ANOTS features.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 rounded-md border border-[#1A1A1B] bg-[#0A0A0B] px-4 py-2 text-sm text-[#FAFAFA] placeholder-[#71717A] focus:border-[#5E6AD2] focus:outline-none focus:ring-1 focus:ring-[#5E6AD2]"
              />
              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
              </Button>
            </form>
            {status === 'error' && (
              <p className="mt-2 text-sm text-red-500">Something went wrong. Please try again.</p>
            )}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold text-[#FAFAFA]">
              ANOTS
            </Link>
            <p className="mt-4 text-sm text-[#A1A1AA]">
              Your AI Marketing Team That Never Sleeps
            </p>
            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              <a
                href="https://twitter.com/anots"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A1A1AA] transition-colors hover:text-[#FAFAFA]"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/anots"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A1A1AA] transition-colors hover:text-[#FAFAFA]"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/anots"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A1A1AA] transition-colors hover:text-[#FAFAFA]"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-[#FAFAFA]">Product</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/" className="text-sm text-[#A1A1AA] transition-colors hover:text-[#FAFAFA]">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-[#A1A1AA] transition-colors hover:text-[#FAFAFA]">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-[#A1A1AA] transition-colors hover:text-[#FAFAFA]">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="https://app.anots.com/docs" target="_blank" rel="noopener noreferrer" className="text-sm text-[#A1A1AA] transition-colors hover:text-[#FAFAFA]">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-[#FAFAFA]">Company</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/contact" className="text-sm text-[#A1A1AA] transition-colors hover:text-[#FAFAFA]">
                  Contact
                </Link>
              </li>
              <li>
                <a href="https://app.anots.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#A1A1AA] transition-colors hover:text-[#FAFAFA]">
                  Login
                </a>
              </li>
              <li>
                <a href="https://app.anots.com/signup" target="_blank" rel="noopener noreferrer" className="text-sm text-[#A1A1AA] transition-colors hover:text-[#FAFAFA]">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-[#FAFAFA]">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-[#A1A1AA] transition-colors hover:text-[#FAFAFA]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-[#A1A1AA] transition-colors hover:text-[#FAFAFA]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <button className="text-sm text-[#A1A1AA] transition-colors hover:text-[#FAFAFA]">
                  Cookie Settings
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-[#1A1A1B] pt-8">
          <p className="text-center text-sm text-[#71717A]">
            © {currentYear} ANOTS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
