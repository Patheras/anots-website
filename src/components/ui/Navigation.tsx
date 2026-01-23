'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from './button';

const navLinks = [
  { label: 'Home', href: '/' },
  { 
    label: 'Features', 
    href: '/features',
    dropdown: [
      {
        category: 'Core Features',
        items: [
          { 
            label: 'AI Marketing Team', 
            description: 'Three AI agents that create, review, and execute',
            href: '/features/ai-team'
          },
          { 
            label: 'Brand Room', 
            description: 'Multi-source brand intelligence extraction',
            href: '/features/brand-room'
          },
          { 
            label: 'Activity Hub', 
            description: 'Track and manage all your automations',
            href: '/features/activity-hub'
          },
        ]
      },
      {
        category: 'Capabilities',
        items: [
          { 
            label: 'Approval Workflows', 
            description: 'Review and approve before execution',
            href: '/features/approval-workflows'
          },
          { 
            label: '200+ Integrations', 
            description: 'Connect to your favorite tools',
            href: '/features/integrations'
          },
          { 
            label: 'ANOT Creation', 
            description: 'Build unlimited marketing automations',
            href: '/features/anot-creation'
          },
        ]
      }
    ]
  },
  { 
    label: 'Resources', 
    href: '#',
    dropdown: [
      {
        category: 'Learn',
        items: [
          { 
            label: 'Use Cases', 
            description: 'Real-world examples and success stories',
            href: '/use-cases'
          },
          { 
            label: 'Ideas', 
            description: 'Inspiration for your marketing automations',
            href: '/ideas'
          },
          { 
            label: 'Documentation', 
            description: 'Complete guides and API reference',
            href: 'https://app.anots.com/docs',
            external: true
          },
        ]
      },
      {
        category: 'Updates',
        items: [
          { 
            label: 'Platform Updates', 
            description: 'Latest features and improvements',
            href: '/updates'
          },
        ]
      }
    ]
  },
  { label: 'ANOTs', href: '/features/anot-library' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#1A1A1B]/50 bg-[#0A0A0B]/80 backdrop-blur-xl">
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

          {/* Auth Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href="https://app.anots.com/login"
              className="text-sm font-medium text-[#D4D4D8] transition-colors hover:text-[#FAFAFA]"
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
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#D4D4D8] transition-colors hover:bg-[#1A1A1B] hover:text-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]"
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
              link.dropdown ? (
                <div key={link.label} className="space-y-1">
                  <div className="px-3 py-2 text-sm font-semibold text-[#FAFAFA]">
                    {link.label}
                  </div>
                  {link.dropdown.map((section) => (
                    <div key={section.category} className="ml-4 space-y-1">
                      <div className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#71717A]">
                        {section.category}
                      </div>
                      {section.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="block rounded-md px-3 py-2 text-sm text-[#D4D4D8] transition-colors hover:bg-[#1A1A1B] hover:text-[#FAFAFA]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="font-medium">{item.label}</div>
                          <div className="text-xs text-[#A1A1AA]">{item.description}</div>
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              ) : link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-3 py-2 text-base font-medium text-[#D4D4D8] transition-colors hover:bg-[#1A1A1B] hover:text-[#FAFAFA]"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
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
                className="block rounded-md px-3 py-2 text-base font-medium text-[#D4D4D8] transition-colors hover:bg-[#1A1A1B] hover:text-[#FAFAFA]"
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
