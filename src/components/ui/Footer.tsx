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
              ΛNOTS
            </Link>
            <p className="mt-4 text-sm text-[#A1A1AA]">
              If you've heard of us, ANOTS is working.
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
                <Link href="/about" className="text-sm text-[#A1A1AA] transition-colors hover:text-[#FAFAFA]">
                  About
                </Link>
              </li>
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

        {/* Tech Stack - Minimal with Logos */}
        <div className="mt-12 border-t border-[#1A1A1B] pt-8">
          <div className="mb-8">
            <p className="text-center text-xs text-[#52525B] mb-6">Built with</p>
            
            {/* Infrastructure */}
            <div className="mb-6">
              <p className="text-center text-xs text-[#52525B] mb-3">Infrastructure</p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-[#71717A] hover:text-[#A1A1AA] transition-colors">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
                  </svg>
                  <span className="text-xs">Next.js</span>
                </div>
                <div className="flex items-center gap-2 text-[#71717A] hover:text-[#A1A1AA] transition-colors">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                  </svg>
                  <span className="text-xs">TypeScript</span>
                </div>
                <div className="flex items-center gap-2 text-[#71717A] hover:text-[#A1A1AA] transition-colors">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.362 9.354H12V.396a12.209 12.209 0 0 1 3.746.371 12.117 12.117 0 0 1 3.523 1.368A12.298 12.298 0 0 1 21.362 4.2a12.16 12.16 0 0 1 1.703 3.047 12.042 12.042 0 0 1 .396 3.107h-1.99zM11.804 24a12.042 12.042 0 0 1-3.107-.396 12.16 12.16 0 0 1-3.047-1.703A12.298 12.298 0 0 1 3.585 19.83a12.117 12.117 0 0 1-1.368-3.523A12.209 12.209 0 0 1 1.846 12.5a12.042 12.042 0 0 1 .396-3.107 12.16 12.16 0 0 1 1.703-3.047A12.298 12.298 0 0 1 6.01 4.281a12.117 12.117 0 0 1 3.523-1.368A12.209 12.209 0 0 1 12.279 2.542V24h-.475z"/>
                  </svg>
                  <span className="text-xs">Supabase</span>
                </div>
                <div className="flex items-center gap-2 text-[#71717A] hover:text-[#A1A1AA] transition-colors">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                  </svg>
                  <span className="text-xs">React</span>
                </div>
              </div>
            </div>

            {/* AI Models */}
            <div>
              <p className="text-center text-xs text-[#52525B] mb-3">AI Models</p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-[#71717A] hover:text-[#A1A1AA] transition-colors">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
                  </svg>
                  <span className="text-xs">GPT-4</span>
                </div>
                <div className="flex items-center gap-2 text-[#71717A] hover:text-[#A1A1AA] transition-colors">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.154 1.023L9.846 22.977l1.846.462L16 1.485zM5.769 5.154L0 12l5.769 6.846L7.231 17.154 2.923 12l4.308-5.154zM18.231 5.154L16.769 6.846 21.077 12l-4.308 5.154 1.462 1.692L24 12z"/>
                  </svg>
                  <span className="text-xs">Claude</span>
                </div>
                <div className="flex items-center gap-2 text-[#71717A] hover:text-[#A1A1AA] transition-colors">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm-.84 4.67h1.68v8.36h-1.68V4.67zM12 18.155c-.79 0-1.43-.64-1.43-1.43s.64-1.43 1.43-1.43 1.43.64 1.43 1.43-.64 1.43-1.43 1.43z"/>
                  </svg>
                  <span className="text-xs">Gemini</span>
                </div>
                <div className="flex items-center gap-2 text-[#71717A] hover:text-[#A1A1AA] transition-colors">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.073 1.853v6.914L4.146 5.62l6.781-3.767zm2.146 0l6.781 3.767-6.781 3.147V1.853zM3.394 7.097l6.781 3.147v7.767l-6.781-3.767V7.097zm9.073 3.147l6.781-3.147v7.147l-6.781 3.767v-7.767z"/>
                  </svg>
                  <span className="text-xs">DeepSeek</span>
                </div>
                <div className="flex items-center gap-2 text-[#71717A] hover:text-[#A1A1AA] transition-colors">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.423 0 9.818 4.395 9.818 9.818 0 5.423-4.395 9.818-9.818 9.818-5.423 0-9.818-4.395-9.818-9.818 0-5.423 4.395-9.818 9.818-9.818zM8.727 7.636a1.091 1.091 0 1 0 0 2.182 1.091 1.091 0 0 0 0-2.182zm6.546 0a1.091 1.091 0 1 0 0 2.182 1.091 1.091 0 0 0 0-2.182zM12 13.091c-2.012 0-3.818 1.094-4.773 2.727h9.546c-.955-1.633-2.761-2.727-4.773-2.727z"/>
                  </svg>
                  <span className="text-xs">Ollama</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-sm text-[#71717A]">
            © {currentYear} ANOTS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
