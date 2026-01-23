'use client';

import Link from 'next/link';
import { ArrowRight, PlayCircle } from 'lucide-react';
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
          {/* Headline with ANOT Gradient */}
          <FadeIn delay={0}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#FAFAFA] font-bold leading-tight">
              {headline.split('ANOTs').map((part, index, array) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <>
                      <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                        ANOTs
                      </span>
                      <AnotExplainer className="inline-block ml-2 align-middle" />
                    </>
                  )}
                </span>
              ))}
            </h1>
          </FadeIn>

          {/* Subheadline with Purple Accent */}
          <FadeIn delay={200}>
            <p className="mt-8 text-base sm:text-lg lg:text-xl leading-relaxed text-[#D4D4D8]/90 max-w-3xl mx-auto">
              {subheadline.split('you approve').map((part, index, array) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <span className="text-purple-400 font-medium">you approve</span>
                  )}
                </span>
              ))}
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={300}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a href={primaryCTA.href} className="w-full sm:w-auto">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-full sm:w-auto px-8 py-4 font-bold min-h-[44px]"
                >
                  {primaryCTA.text}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link href={secondaryCTA.href} className="w-full sm:w-auto">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full sm:w-auto min-h-[44px]"
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
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
