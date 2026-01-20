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
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#0A0A0B]">
      {/* Neural Network Background */}
      <LambdaHero />

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline */}
          <FadeIn delay={0}>
            <h1 className="text-[#FAFAFA]">
              {headline}
            </h1>
          </FadeIn>

          {/* Subheadline */}
          <FadeIn delay={200}>
            <p className="mt-8 text-base sm:text-lg lg:text-xl leading-relaxed text-[#D4D4D8]/90 max-w-3xl mx-auto">
              {subheadline}
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={300}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
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
