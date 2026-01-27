import type { Metadata } from "next";
import { Navigation } from "@/components/ui/Navigation";
import { PricingSection } from "@/components/pricing/PricingSection";
import { ModelPerformance } from "@/components/sections/ModelPerformance";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { PricingComparison } from "@/components/infographics/PricingComparison";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Founder's Deal Pricing - Lock in lifetime pricing. Explorer ($29/mo), Pro ($49/mo), Enterprise (Custom). First 100 customers get grandfathered rates forever.",
  alternates: {
    canonical: "https://anots.com/pricing",
  },
  openGraph: {
    title: "ANOTS Pricing - Founder's Deal",
    description: "Lock in lifetime pricing. First 100 customers get grandfathered rates forever.",
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
                Lock in lifetime pricing. First 100 customers get grandfathered rates forever.
              </p>
            </div>
          </FadeIn>

          <ScrollReveal>
            <PricingComparison />
          </ScrollReveal>
        </div>
      </div>

      <div id="performance">
        <ModelPerformance />
      </div>

      <PricingSection />
    </>
  );
}
