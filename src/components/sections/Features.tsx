'use client';

import { type ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export interface Feature {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
}

interface FeaturesProps {
  features: Feature[];
  layout?: 'grid' | 'alternating';
  id?: string;
}

export function Features({ features, layout = 'grid', id }: FeaturesProps) {
  if (layout === 'grid') {
    return (
      <section id={id} className="bg-[#0A0A0B] py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <ScrollReveal key={index}>
                <Card className="h-full">
                  <CardHeader>
                    {feature.icon && (
                      <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#5E6AD2]/10">
                        {feature.icon}
                      </div>
                    )}
                    <CardTitle className="text-base sm:text-lg font-semibold text-[#FAFAFA]">{feature.title}</CardTitle>
                    <CardDescription className="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-[#A1A1AA]">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Alternating layout
  return (
    <section id={id} className="bg-[#0A0A0B] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-16 sm:space-y-24">
          {features.map((feature, index) => (
            <ScrollReveal key={index}>
              <div
                className={`grid gap-8 sm:gap-12 md:grid-cols-2 md:items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  {feature.icon && (
                    <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#5E6AD2]/10">
                      {feature.icon}
                    </div>
                  )}
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#FAFAFA]">{feature.title}</h3>
                  <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed text-[#D4D4D8]">{feature.description}</p>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  {feature.image ? (
                    <div className="aspect-video overflow-hidden rounded-lg border border-[#1A1A1B] bg-[#111113]">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video rounded-lg border border-[#1A1A1B] bg-[#111113]" />
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
