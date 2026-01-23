'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { pricingTiers, formatPrice } from '@/lib/pricing-data';

export function PricingTiers() {
  return (
    <section className="bg-[#0A0A0B] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header - Tighter spacing */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="heading-lg text-[#FAFAFA]">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 body-lg text-secondary">
            Choose the plan that's right for you
          </p>
        </div>

        {/* Pricing Cards - Optimized gaps */}
        <div className="mt-12 sm:mt-16 grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
          {pricingTiers.map((tier, index) => (
            <ScrollReveal key={tier.id}>
              <Card
                className={`linear-card hover-glow relative h-full ${
                  tier.recommended
                    ? 'border-[#5E6AD2] shadow-[0_0_30px_rgba(94,106,210,0.2)]'
                    : ''
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-[#5E6AD2] px-3 py-1 text-xs font-medium text-white">
                      Recommended
                    </span>
                  </div>
                )}

                <CardHeader className="pb-6">
                  <CardTitle className="text-xl text-[#FAFAFA]">{tier.name}</CardTitle>
                  <CardDescription className="text-sm text-[#A1A1AA] mt-1">
                    {tier.description}
                  </CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-semibold text-[#5E6AD2]">
                      {formatPrice(tier.price, tier.billingPeriod, tier.id)}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 pt-0">
                  {/* Features List - Tighter spacing */}
                  <ul className="space-y-2.5">
                    {tier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2.5 text-sm"
                      >
                        {feature.included ? (
                          <svg
                            className="h-4 w-4 flex-shrink-0 text-[#10B981] mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="h-4 w-4 flex-shrink-0 text-[#71717A] mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )}
                        <span
                          className={
                            feature.included ? 'text-[#D4D4D8] leading-tight' : 'text-[#71717A] leading-tight'
                          }
                        >
                          {feature.name}
                          {feature.limit && (
                            <span className="text-[#A1A1AA]"> ({feature.limit})</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  {tier.cta.href.startsWith('http') ? (
                    <a href={tier.cta.href} className="block">
                      <Button
                        variant={tier.cta.variant}
                        size="lg"
                        className="w-full"
                      >
                        {tier.cta.text}
                      </Button>
                    </a>
                  ) : (
                    <Link href={tier.cta.href} className="block">
                      <Button
                        variant={tier.cta.variant}
                        size="lg"
                        className="w-full"
                      >
                        {tier.cta.text}
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
