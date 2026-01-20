'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';
import { LambdaHero } from '@/components/infographics/LambdaHero';

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
    <section className="relative overflow-hidden bg-[#0A0A0B] py-16 sm:py-24 lg:py-32">
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
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline */}
          <FadeIn delay={0}>
            <h1 className="text-[#FAFAFA]">
              Your <span className="anots-gradient-text">AI Marketing Team</span> That Never Sleeps
            </h1>
          </FadeIn>

          {/* Lambda Hero Visual */}
          <FadeIn delay={100}>
            <div className="mt-8 sm:mt-12">
              <LambdaHero />
            </div>
          </FadeIn>

          {/* Subheadline */}
          <FadeIn delay={200}>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl leading-relaxed text-[#D4D4D8] max-w-3xl mx-auto px-4 sm:px-0">
              {subheadline}
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={300}>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
              <a href={primaryCTA.href} className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  {primaryCTA.text}
                </Button>
              </a>
              <Link href={secondaryCTA.href} className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
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
