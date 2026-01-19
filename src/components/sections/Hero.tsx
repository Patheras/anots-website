'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';
import { AITeamVisualization } from '@/components/infographics/AITeamVisualization';

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
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0">
        {/* Gradient orbs - very subtle */}
        <div className="absolute left-[20%] top-[15%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#5E6AD2] opacity-[0.015] blur-3xl" style={{ animationDuration: '8s' }} />
        <div className="absolute right-[15%] top-[25%] h-[450px] w-[450px] animate-pulse rounded-full bg-[#DC2626] opacity-[0.012] blur-3xl" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute bottom-[20%] left-[35%] h-[400px] w-[400px] animate-pulse rounded-full bg-[#9333EA] opacity-[0.012] blur-3xl" style={{ animationDuration: '12s', animationDelay: '4s' }} />
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5E6AD2]/[0.02] via-transparent to-transparent" />
      
      {/* Grid pattern - very subtle */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
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

          {/* AI Team Visualization */}
          <FadeIn delay={100}>
            <div className="mt-12">
              <AITeamVisualization />
            </div>
          </FadeIn>

          {/* Subheadline */}
          <FadeIn delay={200}>
            <p className="mt-8 text-lg leading-8 text-[#D4D4D8]">
              {subheadline}
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={300}>
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
