'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1A1A1B] bg-[#0A0A0B]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Brand + tagline */}
          <div className="text-center sm:text-left">
            <Link href="/" className="text-base font-bold text-[#FAFAFA] hover:opacity-80 transition-opacity">
              ΛNOTS
            </Link>
            <p className="mt-1 text-xs text-[#52525B]">
              Internet for Agents. Governed by All.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link href="/features" className="text-xs text-[#71717A] hover:text-[#FAFAFA] transition-colors">
              Features
            </Link>
            <Link href="/docs" className="text-xs text-[#71717A] hover:text-[#FAFAFA] transition-colors">
              Docs
            </Link>
            <Link href="/pricing" className="text-xs text-[#71717A] hover:text-[#FAFAFA] transition-colors">
              Pricing
            </Link>
            <a
              href="https://github.com/Patheras/anots-website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#71717A] hover:text-[#FAFAFA] transition-colors"
            >
              GitHub
            </a>
            <Link href="/privacy" className="text-xs text-[#71717A] hover:text-[#FAFAFA] transition-colors">
              Privacy
            </Link>
          </div>

          {/* Copyright + manifesto quote */}
          <div className="text-center sm:text-right">
            <p className="text-xs text-[#3F3F46]">
              © {currentYear} ΛNOTS
            </p>
            <p className="mt-1 text-xs text-[#3F3F46] italic font-mono">
              "Demokratik Yapay Zekaya Katkıda Bulunalım." 🚩
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
