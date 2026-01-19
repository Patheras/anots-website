'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { pricingTiers, formatPrice } from '@/lib/pricing-data';

export function PricingTiers() {
  return (
    <section className="bg-[#0A0A0B] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-[#D4D4D8]">
            Choose the plan that's right for you
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <ScrollReveal key={tier.id}>
              <Card
                className={`relative h-full ${
                  tier.recommended
                    ? 'border-[#5E6AD2] shadow-[0_0_30px_rgba(94,106,210,0.2)]'
                    : ''
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-[#5E6AD2] px-4 py-1 text-sm font-medium text-white">
                      Recommended
                    </span>
                  </div>
                )}

                <CardHeader>
                  <CardTitle className="text-[#FAFAFA]">{tier.name}</CardTitle>
                  <CardDescription className="text-[#71717A]">
                    {tier.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-[#5E6AD2]">
                      {formatPrice(tier.price, tier.billingPeriod)}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features List */}
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 text-sm"
                      >
                        {feature.included ? (
                          <svg
                            className="h-5 w-5 flex-shrink-0 text-[#10B981]"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
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
                            className="h-5 w-5 flex-shrink-0 text-[#71717A]"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
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
                            feature.included ? 'text-[#D4D4D8]' : 'text-[#71717A]'
                          }
                        >
                          {feature.name}
                          {feature.limit && (
                            <span className="text-[#71717A]"> ({feature.limit})</span>
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
