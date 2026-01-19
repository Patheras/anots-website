'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
}

export function Hero({ headline, subheadline, primaryCTA, secondaryCTA }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0B] py-20 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5E6AD2]/5 to-transparent" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(#1A1A1B 1px, transparent 1px), linear-gradient(90deg, #1A1A1B 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Headline */}
          <FadeIn delay={0}>
            <h1 className="text-4xl font-bold tracking-tight text-[#FAFAFA] sm:text-6xl">
              Your <span className="anots-gradient-text">AI Marketing Team</span> That Never Sleeps
            </h1>
          </FadeIn>

          {/* Subheadline */}
          <FadeIn delay={100}>
            <p className="mt-6 text-lg leading-8 text-[#D4D4D8]">
              {subheadline}
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={200}>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a href={primaryCTA.href}>
                <Button variant="primary" size="lg">
                  {primaryCTA.text}
                </Button>
              </a>
              <Link href={secondaryCTA.href}>
                <Button variant="secondary" size="lg">
                  {secondaryCTA.text}
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
