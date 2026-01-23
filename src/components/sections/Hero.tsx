'use client';

import Link from 'next/link';
import { ArrowRight, PlayCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';
import { LambdaHero } from '@/components/infographics/LambdaHero';
import { AnotExplainer } from '@/components/ui/Tooltip';
import { useEffect, useState } from 'react';

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
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      // 0'dan 1'e kadar scroll yapınca opacity 1'den 0'a düşer
      const opacity = Math.max(0, 1 - scrolled / windowHeight);
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#0A0A0B]">
      {/* Neural Network Background with Fade */}
      <div style={{ opacity: scrollOpacity }} className="transition-opacity duration-100">
        <LambdaHero />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline with ANOT Gradient and Info Icon */}
          <FadeIn delay={0}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl text-[#FAFAFA] font-bold leading-tight tracking-tight">
              {headline.split('ANOTs').map((part, index, array) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <span className="relative inline-block">
                      <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                        ANOTs
                      </span>
                      <AnotExplainer className="absolute -top-1 -right-7" />
                    </span>
                  )}
                </span>
              ))}
            </h1>
          </FadeIn>

          {/* Subtitle - Medium size, regular weight */}
          <FadeIn delay={100}>
            <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl text-[#D4D4D8] font-normal leading-tight">
              Your AI Marketing Team That Never Sleeps
            </h2>
          </FadeIn>

          {/* Subheadline with Purple Accent */}
          <FadeIn delay={200}>
            <p className="mt-6 text-base leading-relaxed text-[#A1A1AA] max-w-3xl mx-auto font-normal">
              {subheadline.split('You Approve').map((part, index, array) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <span className="text-purple-400 font-semibold">You Approve</span>
                  )}
                </span>
              ))}
            </p>
          </FadeIn>

          {/* CTAs - Stacked Vertically */}
          <FadeIn delay={300}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4">
              <a href={primaryCTA.href} className="w-full sm:w-auto">
                <Button 
                  variant="magic" 
                  size="xl" 
                  className="w-full sm:w-auto font-bold min-h-[56px] text-lg px-8"
                >
                  {primaryCTA.text}
                  <ArrowRight className="h-6 w-6" />
                </Button>
              </a>
              <Link href={secondaryCTA.href} className="w-full sm:w-auto">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-full sm:w-auto min-h-[48px] text-base"
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  {secondaryCTA.text}
                </Button>
              </Link>
            </div>
          </FadeIn>

          {/* Pricing Transparency Badge */}
          <FadeIn delay={400}>
            <div className="mt-10 flex items-center justify-center gap-2 px-4">
              <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
              <span className="text-base text-zinc-300">
                Free forever • 3 ANOTs • Full AI team • No credit card
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
