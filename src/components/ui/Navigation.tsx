'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from './button';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Docs', href: 'https://app.anots.com/docs', external: true },
  { label: 'Contact', href: '/contact' },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#1A1A1B] bg-[#0A0A0B]/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-[#FAFAFA]">ANOTS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#D4D4D8] transition-colors duration-150 hover:text-[#FAFAFA]"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-150 ${
                    pathname === link.href
                      ? 'text-[#5E6AD2]'
                      : 'text-[#D4D4D8] hover:text-[#FAFAFA]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href="https://app.anots.com/login"
              className="text-sm font-medium text-[#D4D4D8] transition-colors duration-150 hover:text-[#FAFAFA]"
            >
              Log in
            </a>
            <a href="https://app.anots.com/signup">
              <Button variant="primary" size="sm">
                Sign Up
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#D4D4D8] hover:bg-[#1A1A1B] hover:text-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#1A1A1B]">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-3 py-2 text-base font-medium text-[#D4D4D8] hover:bg-[#1A1A1B] hover:text-[#FAFAFA] transition-colors duration-150"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium transition-colors duration-150 ${
                    pathname === link.href
                      ? 'bg-[#1A1A1B] text-[#5E6AD2]'
                      : 'text-[#D4D4D8] hover:bg-[#1A1A1B] hover:text-[#FAFAFA]'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            
            {/* Mobile Auth Buttons */}
            <div className="space-y-2 pt-4 border-t border-[#1A1A1B]">
              <a
                href="https://app.anots.com/login"
                className="block rounded-md px-3 py-2 text-base font-medium text-[#D4D4D8] hover:bg-[#1A1A1B] hover:text-[#FAFAFA] transition-colors duration-150"
              >
                Log in
              </a>
              <a href="https://app.anots.com/signup" className="block">
                <Button variant="primary" size="md" className="w-full">
                  Sign Up
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
