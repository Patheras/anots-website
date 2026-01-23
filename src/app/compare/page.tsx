import type { Metadata } from "next";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compare ANOTS - AI Marketing Automation vs Zapier, Make, HubSpot",
  description: "Compare ANOTS AI marketing automation with Zapier, Make, HubSpot, Hootsuite, Buffer, and other marketing tools. See how ANOTS' three-agent AI system (Qubik, Themis, Core) and Brand Archaeologist differ from traditional automation platforms.",
  keywords: ["ANOTS vs Zapier", "ANOTS vs Make", "ANOTS vs HubSpot", "AI marketing automation comparison", "marketing automation tools", "ANOTS alternatives", "marketing platform comparison"],
  alternates: {
    canonical: "https://anots.com/compare",
  },
  openGraph: {
    title: "Compare ANOTS - AI Marketing Automation Platform Comparisons",
    description: "See how ANOTS compares to Zapier, Make, HubSpot, and other marketing automation tools.",
    url: "https://anots.com/compare",
  },
};

const comparisons = [
  {
    title: "ANOTS vs Zapier",
    slug: "zapier",
    description: "Compare AI-powered marketing automation with traditional workflow automation",
    highlights: [
      "AI agents vs manual workflow building",
      "Natural language vs visual builder",
      "Marketing-specific vs general automation",
    ],
  },
  {
    title: "ANOTS vs Make (Integromat)",
    slug: "make",
    description: "AI marketing automation vs visual workflow automation",
    highlights: [
      "Three-agent AI system vs manual scenarios",
      "Approval-based vs trigger-based",
      "Brand intelligence vs data routing",
    ],
  },
  {
    title: "ANOTS vs HubSpot",
    slug: "hubspot",
    description: "AI marketing automation vs all-in-one marketing platform",
    highlights: [
      "AI agents vs marketing hub",
      "Lightweight vs enterprise suite",
      "Flexible integrations vs HubSpot ecosystem",
    ],
  },
  {
    title: "ANOTS vs Hootsuite",
    slug: "hootsuite",
    description: "AI marketing automation vs social media management",
    highlights: [
      "Full marketing automation vs social scheduling",
      "AI content creation vs manual posting",
      "Multi-platform vs social-only",
    ],
  },
  {
    title: "ANOTS vs Buffer",
    slug: "buffer",
    description: "AI marketing automation vs social media scheduling",
    highlights: [
      "AI-powered automation vs scheduling tool",
      "Brand intelligence vs content calendar",
      "200+ integrations vs social platforms",
    ],
  },
  {
    title: "ANOTS vs Mailchimp",
    slug: "mailchimp",
    description: "AI marketing automation vs email marketing platform",
    highlights: [
      "Full marketing automation vs email focus",
      "AI agents vs email builder",
      "Multi-channel vs email-centric",
    ],
  },
];

export default function ComparePage() {
  return (
    <>
      <Navigation />
      
      <main className="bg-[#0A0A0B] min-h-screen">
        {/* Hero Section */}
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FAFAFA] leading-tight">
                  Compare ANOTS
                </h1>
                <p className="mt-6 text-xl text-[#D4D4D8] leading-relaxed">
                  See how ANOTS AI marketing automation compares to other platforms.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Comparison Cards */}
        <section className="py-16 border-t border-[#1A1A1B]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {comparisons.map((comparison, index) => (
                <ScrollReveal key={index}>
                  <Link href={`/compare/${comparison.slug}`}>
                    <Card className="border-[#1A1A1B] hover:border-[#5E6AD2]/50 transition-colors cursor-pointer h-full">
                      <CardContent className="p-8">
                        <h2 className="text-2xl font-bold text-[#FAFAFA] mb-3">
                          {comparison.title}
                        </h2>
                        <p className="text-[#D4D4D8] mb-6">
                          {comparison.description}
                        </p>
                        <ul className="space-y-2">
                          {comparison.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start text-sm text-[#A1A1AA]">
                              <span className="text-[#5E6AD2] mr-2">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 flex items-center text-[#5E6AD2] text-sm font-semibold">
                          Read comparison
                          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why ANOTS is Different */}
        <section className="py-16 border-t border-[#1A1A1B]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#FAFAFA] mb-12 text-center">
                Why ANOTS is Different
              </h2>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ScrollReveal>
                <Card className="border-[#5E6AD2]/20">
                  <CardContent className="p-8">
                    <div className="h-12 w-12 rounded-lg bg-[#5E6AD2]/20 flex items-center justify-center mb-6">
                      <span className="text-2xl">🤖</span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#FAFAFA] mb-3">
                      Three-Agent AI System
                    </h3>
                    <p className="text-[#D4D4D8]">
                      Qubik creates, Themis reviews, Core synthesizes. No other platform has this multi-agent architecture for balanced decision-making.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal>
                <Card className="border-[#9333EA]/20">
                  <CardContent className="p-8">
                    <div className="h-12 w-12 rounded-lg bg-[#9333EA]/20 flex items-center justify-center mb-6">
                      <span className="text-2xl">🔍</span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#FAFAFA] mb-3">
                      Brand Archaeologist
                    </h3>
                    <p className="text-[#D4D4D8]">
                      Automatically extracts brand DNA from websites, documents, and social media. No manual brand guideline setup required.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal>
                <Card className="border-[#10B981]/20">
                  <CardContent className="p-8">
                    <div className="h-12 w-12 rounded-lg bg-[#10B981]/20 flex items-center justify-center mb-6">
                      <span className="text-2xl">💬</span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#FAFAFA] mb-3">
                      Natural Language
                    </h3>
                    <p className="text-[#D4D4D8]">
                      Create automations by chatting, not building workflows. No visual builders, no complex configurations.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal>
                <Card className="border-[#EF4444]/20">
                  <CardContent className="p-8">
                    <div className="h-12 w-12 rounded-lg bg-[#EF4444]/20 flex items-center justify-center mb-6">
                      <span className="text-2xl">✅</span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#FAFAFA] mb-3">
                      Approval-Based
                    </h3>
                    <p className="text-[#D4D4D8]">
                      Nothing runs without your approval. See full plans, costs, and risks before execution. Full control always.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal>
                <Card className="border-[#F59E0B]/20">
                  <CardContent className="p-8">
                    <div className="h-12 w-12 rounded-lg bg-[#F59E0B]/20 flex items-center justify-center mb-6">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#FAFAFA] mb-3">
                      Marketing-Specific
                    </h3>
                    <p className="text-[#D4D4D8]">
                      Built for marketers, not developers. Pre-configured for social media, content, email, and ads automation.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal>
                <Card className="border-[#06B6D4]/20">
                  <CardContent className="p-8">
                    <div className="h-12 w-12 rounded-lg bg-[#06B6D4]/20 flex items-center justify-center mb-6">
                      <span className="text-2xl">💰</span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#FAFAFA] mb-3">
                      Free Forever Tier
                    </h3>
                    <p className="text-[#D4D4D8]">
                      3 ANOTs per month, full AI team, Brand Archaeologist. No credit card required. No trial period limits.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-[#1A1A1B]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#FAFAFA] mb-6">
                Ready to Try ANOTS?
              </h2>
              <p className="text-xl text-[#D4D4D8] mb-8">
                Start free with 3 ANOTs. No credit card required.
              </p>
              <a 
                href="https://app.anots.com/signup" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-[#18181B] bg-gradient-to-r from-[#5E6AD2] via-[#7C85E3] to-[#5E6AD2] rounded-2xl hover:scale-105 transition-transform duration-200"
              >
                Start Free
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
