'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';
import { LambdaHero } from '@/components/infographics/LambdaHero';
import { useState, useEffect } from 'react';

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
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile for reduced complexity
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const texts = [
    "If You're Here, ANOTs Are Already Working",
    "Your AI Marketing Team That Never Sleeps"
  ];

  const highlightWords = (text: string) => {
    // ANOTs için gradient
    if (text.includes('ANOTs')) {
      return text.split('ANOTs').map((part, index, array) => (
        <span key={index}>
          {part}
          {index < array.length - 1 && (
            <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              ANOTs
            </span>
          )}
        </span>
      ));
    }
    // AI Marketing Team için gradient
    if (text.includes('AI Marketing Team')) {
      return text.split('AI Marketing Team').map((part, index, array) => (
        <span key={index}>
          {part}
          {index < array.length - 1 && (
            <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              AI Marketing Team
            </span>
          )}
        </span>
      ));
    }
    return text;
  };

  useEffect(() => {
    const currentText = texts[textIndex];
    // Mobilde daha hızlı typing (60ms), desktop'ta normal (80ms)
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const typingSpeed = isMobile ? 60 : 80;

    if (displayText.length < currentText.length) {
      // Typing
      const timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      // Pause then switch to next text instantly
      const timeout = setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % texts.length);
        setDisplayText('');
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [displayText, textIndex]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Background fade on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
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
        <LambdaHero reducedComplexity={isMobile} />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="mx-auto max-w-4xl w-full text-center">
          {/* Headline with Typing Animation */}
          <FadeIn delay={0}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FAFAFA] font-bold leading-tight tracking-tight min-h-[3em] sm:min-h-[2.5em] flex items-center justify-center">
              <span className="block text-center">
                {highlightWords(displayText)}
                <span className={`inline-block w-1 h-[0.9em] ml-1 bg-[#5E6AD2] ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
              </span>
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* CTAs - Fixed to Bottom with responsive spacing */}
      <FadeIn delay={200}>
        <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-0 right-0 z-20 flex flex-col sm:flex-row items-center justify-center gap-3 px-4">
          <a href={primaryCTA.href} className="w-full sm:w-auto">
            <Button 
              variant="magic" 
              size="lg" 
              className="font-medium w-full sm:w-auto min-h-[44px]"
            >
              {primaryCTA.text}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
          <Link href={secondaryCTA.href} className="w-full sm:w-auto">
            <Button 
              variant="secondary" 
              size="lg" 
              className="border-[#27272A] hover:border-[#3F3F46] hover:bg-[#18181B] w-full sm:w-auto min-h-[44px]"
            >
              {secondaryCTA.text}
            </Button>
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
