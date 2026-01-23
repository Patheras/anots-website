import type { Metadata } from "next";
import { Navigation } from "@/components/ui/Navigation";
import { PricingTiers } from "@/components/sections/PricingTiers";
import { ModelPerformance } from "@/components/sections/ModelPerformance";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { PricingComparison } from "@/components/infographics/PricingComparison";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for ANOTS. Standard (Free) with 3 ANOTs, Pro ($9.90/mo) with 30 ANOTs, Agency ($49.90/mo) with unlimited ANOTs. Start free today.",
  alternates: {
    canonical: "https://anots.com/pricing",
  },
  openGraph: {
    title: "ANOTS Pricing - Start Free with 3 ANOTs",
    description: "Choose the plan that's right for you. Standard (Free), Pro ($9.90/mo), or Agency ($49.90/mo).",
    url: "https://anots.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <Navigation />
      
      <div className="bg-[#0A0A0B] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-[#FAFAFA] sm:text-5xl">
                Pricing Plans
              </h1>
              <p className="mt-4 text-lg text-[#D4D4D8]">
                Start free, upgrade as you grow. No hidden fees.
              </p>
            </div>
          </FadeIn>

          <ScrollReveal>
            <PricingComparison />
          </ScrollReveal>
        </div>
      </div>

      <ModelPerformance />

      <PricingTiers />
    </>
  );
}
