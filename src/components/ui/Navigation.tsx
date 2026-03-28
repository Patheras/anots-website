'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Button } from './button';

type NavLink = {
  label: string;
  href: string;
  external?: boolean;
  dropdown?: {
    category: string;
    items: {
      label: string;
      description: string;
      href: string;
      external?: boolean;
    }[];
  }[];
};

const navLinks: NavLink[] = [
  { label: 'Manifesto', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Docs', href: '/docs' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll detection for enhanced blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = (label: string) => {
    setExpandedMenus(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const mobileMenu = mobileMenuOpen && mounted ? createPortal(
    <div 
      className="fixed inset-0 z-[9999] bg-[#0A0A0B]/95 backdrop-blur-xl overflow-y-auto"
      style={{ top: '64px' }}
    >
      <div className="space-y-1 px-4 pb-3 pt-2">
        {navLinks.map((link) => (
          link.dropdown ? (
            <div key={link.label} className="space-y-1">
              <button
                onClick={() => toggleMenu(link.label)}
                className="w-full flex items-center justify-between px-3 py-3 min-h-[44px] text-base font-semibold text-[#FAFAFA] rounded-md hover:bg-[#1A1A1B] transition-colors"
                aria-label={`Toggle ${link.label} menu`}
                aria-expanded={expandedMenus.includes(link.label)}
              >
                <span>{link.label}</span>
                <svg 
                  className={`h-5 w-5 transition-transform ${expandedMenus.includes(link.label) ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="2" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {expandedMenus.includes(link.label) && (
                <div className="ml-4 space-y-1 animate-fade-in">
                  {link.dropdown.map((section) => (
                    <div key={section.category} className="space-y-1">
                      <div className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#71717A]">
                        {section.category}
                      </div>
                      {section.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="block rounded-md px-3 py-3 min-h-[44px] text-sm text-[#D4D4D8] transition-colors hover:bg-[#1A1A1B] hover:text-[#FAFAFA]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="font-medium">{item.label}</div>
                          <div className="text-xs text-[#A1A1AA]">{item.description}</div>
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : link.external ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md px-3 py-3 min-h-[44px] text-base font-medium text-[#D4D4D8] transition-colors hover:bg-[#1A1A1B] hover:text-[#FAFAFA]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-md px-3 py-3 min-h-[44px] text-base font-medium transition-colors ${
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
        
        {/* Mobile CTA */}
        <div className="space-y-2 pt-4 border-t border-[#1A1A1B]">
          <a
            href="https://github.com/anots"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-md px-3 py-3 min-h-[44px] text-base font-medium text-[#D4D4D8] transition-colors hover:bg-[#1A1A1B] hover:text-[#FAFAFA]"
            onClick={() => setMobileMenuOpen(false)}
          >
            GitHub
          </a>
          <a
            href="https://discord.gg/anots"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Button variant="magic" size="md" className="w-full min-h-[44px]">
              Join Discord
            </Button>
          </a>
        </div>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <nav className={`sticky top-0 z-[100] border-b border-[#1A1A1B]/50 bg-[#0A0A0B]/80 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-2xl shadow-lg shadow-black/20' : 'backdrop-blur-xl'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
            <span className="text-xl font-bold text-[#FAFAFA]">ΛNOTS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="flex items-center text-sm font-medium text-[#D4D4D8] transition-colors hover:text-[#FAFAFA]"
                  >
                    {link.label}
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Mega Menu */}
                  {activeDropdown === link.label && (
                    <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                      <div className="w-[600px] rounded-lg border border-[#1A1A1B] bg-[#0F0F10]/95 backdrop-blur-xl p-6 shadow-2xl">
                        <div className="grid grid-cols-2 gap-6">
                          {link.dropdown.map((section) => (
                            <div key={section.category}>
                              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#71717A]">
                                {section.category}
                              </h3>
                              <div className="space-y-2">
                                {section.items.map((item) => (
                                  <a
                                    key={item.label}
                                    href={item.href}
                                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                    className="block rounded-md p-3 transition-colors hover:bg-[#1A1A1B]"
                                  >
                                    <div className="text-sm font-medium text-[#FAFAFA]">{item.label}</div>
                                    <div className="mt-1 text-xs text-[#A1A1AA]">{item.description}</div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#D4D4D8] transition-colors hover:text-[#FAFAFA]"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
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

          {/* CTA */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href="https://github.com/anots"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#D4D4D8] transition-colors hover:text-[#FAFAFA]"
            >
              GitHub
            </a>
            <a
              href="https://discord.gg/anots"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="magic" size="sm">
                Join Discord
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md min-w-[44px] min-h-[44px] p-2 text-[#D4D4D8] transition-colors hover:bg-[#1A1A1B] hover:text-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
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

      {/* Mobile menu rendered via portal */}
      {mobileMenu}
    </nav>
  );
}
