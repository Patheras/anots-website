import { Navigation } from "@/components/ui/Navigation";
import { PricingTiers } from "@/components/sections/PricingTiers";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for ANOTS. Choose the plan that's right for you.",
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
        </div>
      </div>

      <PricingTiers />
    </>
  );
}
