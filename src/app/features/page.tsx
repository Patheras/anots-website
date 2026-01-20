import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Features - AI Marketing Automation Platform",
  description: "Explore ANOTS features: Three AI agents, Brand Room intelligence, Activity Hub, approval workflows, and 200+ integrations. Everything you need for modern marketing automation.",
  keywords: ["AI marketing features", "marketing automation", "AI agents", "Brand Room", "Activity Hub", "marketing integrations"],
  alternates: {
    canonical: "https://anots.com/features",
  },
  openGraph: {
    title: "ANOTS Features - Complete AI Marketing Automation",
    description: "Three AI agents, Brand Room intelligence, and 200+ integrations for modern marketing teams.",
    url: "https://anots.com/features",
  },
};

const features = [
  {
    title: "AI Marketing Team",
    description: "Three specialized AI agents (Qubik, Themis, Core) that work together to create, review, and execute your marketing automations.",
    href: "/features/ai-team",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    color: "from-[#DC2626]/10 to-[#9333EA]/10",
    borderColor: "border-[#5E6AD2]/20",
  },
  {
    title: "Brand Room",
    description: "Multi-source brand intelligence extraction from websites, documents, and social media. Automatic brand standards maintenance.",
    href: "/features/brand-room",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    color: "from-[#9333EA]/10 to-[#3B82F6]/10",
    borderColor: "border-[#9333EA]/20",
  },
  {
    title: "Activity Hub",
    description: "Track all your ANOTs in one place. See what's running, scheduled, and published. Daily focus view keeps you organized.",
    href: "/features/activity-hub",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    color: "from-[#3B82F6]/10 to-[#10B981]/10",
    borderColor: "border-[#3B82F6]/20",
  },
  {
    title: "Approval Workflows",
    description: "Nothing runs without your approval. Review proposals, check costs, assess risks, then decide. Trust by design.",
    href: "/features/approval-workflows",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    color: "from-[#10B981]/10 to-[#F59E0B]/10",
    borderColor: "border-[#10B981]/20",
  },
  {
    title: "200+ Integrations",
    description: "Connect to Instagram, WordPress, Google Drive, Mailchimp, and 200+ apps via ActivePieces workflow engine.",
    href: "/features/integrations",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    color: "from-[#F59E0B]/10 to-[#DC2626]/10",
    borderColor: "border-[#F59E0B]/20",
  },
  {
    title: "ANOT Creation",
    description: "Create unlimited marketing automations through natural conversation. Each ANOT is a complete, self-contained task.",
    href: "/features/anot-creation",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
    color: "from-[#DC2626]/10 to-[#5E6AD2]/10",
    borderColor: "border-[#DC2626]/20",
  },
  {
    title: "ANOT Library",
    description: "Browse, install, and share pre-built marketing automations. One-click install from community templates.",
    href: "/features/anot-library",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    color: "from-[#5E6AD2]/10 to-[#DC2626]/10",
    borderColor: "border-[#5E6AD2]/20",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#0A0A0B] py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAFAFA]">
                Everything You Need for Modern Marketing Automation
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#D4D4D8] leading-relaxed">
                Three AI agents, multi-source brand intelligence, approval workflows, and 200+ integrations. 
                ANOTS gives you complete control over your marketing automation.
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <a href="https://app.anots.com/signup">
                  <Button variant="primary" size="lg">
                    Start Free
                  </Button>
                </a>
                <Link href="/pricing">
                  <Button variant="secondary" size="lg">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-[#0F0F10] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.href}>
                <Link href={feature.href}>
                  <Card className={`h-full ${feature.borderColor} bg-gradient-to-br ${feature.color} hover:border-[#5E6AD2] transition-all duration-300 cursor-pointer group`}>
                    <CardContent className="p-8">
                      <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#5E6AD2]/10 text-[#5E6AD2] mb-6 group-hover:bg-[#5E6AD2]/20 transition-colors">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-[#FAFAFA] mb-3 group-hover:text-[#5E6AD2] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-[#D4D4D8] leading-relaxed mb-4">
                        {feature.description}
                      </p>
                      <div className="flex items-center text-sm text-[#5E6AD2] font-medium group-hover:gap-2 transition-all">
                        Learn more
                        <svg className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
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

      {/* CTA Section */}
      <section className="bg-[#0A0A0B] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA]">
                Ready to Transform Your Marketing?
              </h2>
              <p className="mt-4 text-lg text-[#D4D4D8]">
                Start with 3 free ANOTs. No credit card required.
              </p>
              <div className="mt-8">
                <a href="https://app.anots.com/signup">
                  <Button variant="primary" size="lg">
                    Get Started Free
                  </Button>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
