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
}

export function Features({ features, layout = 'grid' }: FeaturesProps) {
  if (layout === 'grid') {
    return (
      <section className="bg-[#0A0A0B] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <ScrollReveal key={index}>
                <Card className="h-full">
                  <CardHeader>
                    {feature.icon && (
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#5E6AD2]/10">
                        {feature.icon}
                      </div>
                    )}
                    <CardTitle className="text-[#FAFAFA]">{feature.title}</CardTitle>
                    <CardDescription className="text-[#71717A]">
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
    <section className="bg-[#0A0A0B] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {features.map((feature, index) => (
            <ScrollReveal key={index}>
              <div
                className={`grid gap-8 md:grid-cols-2 md:items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  {feature.icon && (
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#5E6AD2]/10">
                      {feature.icon}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-[#FAFAFA]">{feature.title}</h3>
                  <p className="mt-4 text-lg text-[#D4D4D8]">{feature.description}</p>
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
