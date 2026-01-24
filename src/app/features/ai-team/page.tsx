import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QubikIcon, ThemisIcon, CoreIcon } from "@/components/infographics/AgentIcons";

export const metadata: Metadata = {
  title: "AI Marketing Team - Six Specialized Agents | ANOTS",
  description: "Meet your AI marketing team: Qubik (Creative), Themis (Analyst), Core (Synthesizer), Hephaestus (Builder), Echo (Assistant), and Hermes (coming soon). Six agents that work together to create, review, and execute your marketing automations.",
  keywords: ["AI marketing team", "Qubik", "Themis", "Core", "Hephaestus", "Echo", "Hermes", "AI agents", "marketing automation agents"],
  alternates: {
    canonical: "https://anots.com/features/ai-team",
  },
  openGraph: {
    title: "AI Marketing Team - Qubik, Themis, Core, Hephaestus, Echo & Hermes | ANOTS",
    description: "Six specialized AI agents that work together for perfect marketing automation.",
    url: "https://anots.com/features/ai-team",
  },
};

export default function AITeamPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="bg-[#0A0A0B] py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#5E6AD2]/10 px-4 py-2 text-sm text-[#5E6AD2] mb-6">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
                Core Feature
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAFAFA]">
                Your AI Marketing Team
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#D4D4D8] leading-relaxed">
                Six specialized AI agents that work together to create, review, build, and execute your marketing automations. 
                Each agent brings unique expertise to ensure balanced, effective campaigns.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="bg-[#0F0F10] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal>
              <Card className="h-full border-[#DC2626]/20 bg-gradient-to-br from-[#DC2626]/5 to-transparent">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <QubikIcon size={80} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#FAFAFA] text-center mb-2">Qubik</h3>
                  <p className="text-sm text-[#71717A] text-center mb-6">Creative Motor</p>
                  <p className="text-[#D4D4D8] mb-6">
                    Qubik is your creative powerhouse. It generates innovative proposals, compelling content, and strategic campaign ideas that push boundaries while staying on-brand.
                  </p>
                  <ul className="space-y-3 text-sm text-[#D4D4D8]">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#DC2626] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Creative proposal generation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#DC2626] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Marketing copy and content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#DC2626] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Campaign strategy and tactics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#DC2626] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Engagement optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="h-full border-[#9333EA]/20 bg-gradient-to-br from-[#9333EA]/5 to-transparent">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <ThemisIcon size={80} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#FAFAFA] text-center mb-2">Themis</h3>
                  <p className="text-sm text-[#71717A] text-center mb-6">Analytical Motor</p>
                  <p className="text-[#D4D4D8] mb-6">
                    Themis is your analytical guardian. It reviews every proposal for risks, validates brand compliance, estimates costs, and ensures nothing slips through the cracks.
                  </p>
                  <ul className="space-y-3 text-sm text-[#D4D4D8]">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#9333EA] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Risk analysis and mitigation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#9333EA] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Brand compliance validation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#9333EA] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Cost estimation and budgeting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#9333EA] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Constraint checking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="h-full border-[#3B82F6]/20 bg-gradient-to-br from-[#3B82F6]/5 to-transparent">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <CoreIcon size={80} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#FAFAFA] text-center mb-2">Core</h3>
                  <p className="text-sm text-[#71717A] text-center mb-6">Synthesizer</p>
                  <p className="text-[#D4D4D8] mb-6">
                    Core is your strategic advisor. It synthesizes Qubik's creativity and Themis's analysis into clear, actionable recommendations that help you make informed decisions.
                  </p>
                  <ul className="space-y-3 text-sm text-[#D4D4D8]">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#3B82F6] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Perspective synthesis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#3B82F6] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Clear recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#3B82F6] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Decision guidance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#3B82F6] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Balanced insights</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="h-full border-[#F59E0B]/20 bg-gradient-to-br from-[#F59E0B]/5 to-transparent">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="h-20 w-20 rounded-2xl bg-[#F59E0B]/20 flex items-center justify-center">
                      <span className="text-4xl">🔨</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FAFAFA] text-center mb-2">Hephaestus</h3>
                  <p className="text-sm text-[#71717A] text-center mb-6">ANOT Maker</p>
                  <p className="text-[#D4D4D8] mb-6">
                    Hephaestus is your automation builder. It transforms natural language conversations into executable ActivePieces workflows, bringing your ANOTs to life.
                  </p>
                  <ul className="space-y-3 text-sm text-[#D4D4D8]">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#F59E0B] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Chat-to-flow translation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#F59E0B] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>ActivePieces workflow generation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#F59E0B] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Integration configuration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#F59E0B] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Automation deployment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="h-full border-[#52525B]/20 bg-gradient-to-br from-[#52525B]/5 to-transparent">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="h-20 w-20 rounded-2xl bg-[#52525B]/20 flex items-center justify-center">
                      <span className="text-4xl">💬</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FAFAFA] text-center mb-2">Echo</h3>
                  <p className="text-sm text-[#71717A] text-center mb-6">Website Assistant</p>
                  <p className="text-[#D4D4D8] mb-6">
                    Echo is your friendly website companion. It answers questions about ANOTS, helps you understand features, and guides you through getting started.
                  </p>
                  <ul className="space-y-3 text-sm text-[#D4D4D8]">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#A1A1AA] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>24/7 website support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#A1A1AA] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Feature explanations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#A1A1AA] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Getting started guidance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#A1A1AA] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Instant answers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="h-full border-[#5E6AD2]/20 bg-gradient-to-br from-[#5E6AD2]/5 to-transparent relative overflow-hidden">
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#5E6AD2] text-white text-xs font-semibold rounded-full">
                  Coming Soon
                </div>
                <CardContent className="p-8 opacity-75">
                  <div className="flex justify-center mb-6">
                    <div className="h-20 w-20 rounded-2xl bg-[#5E6AD2]/20 flex items-center justify-center">
                      <span className="text-4xl">📨</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FAFAFA] text-center mb-2">Hermes</h3>
                  <p className="text-sm text-[#71717A] text-center mb-6">Mobile Messenger</p>
                  <p className="text-[#D4D4D8] mb-6">
                    Hermes will be your mobile companion. Get push notifications, approve ANOTs on-the-go, and manage your marketing automation from anywhere via chat.
                  </p>
                  <ul className="space-y-3 text-sm text-[#D4D4D8]">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#5E6AD2] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Push notifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#5E6AD2] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Mobile approvals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#5E6AD2] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Chat-based commands</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#5E6AD2] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Daily activity summaries</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0B] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA]">
                Experience the Power of Six
              </h2>
              <p className="mt-4 text-lg text-[#D4D4D8]">
                Start with 3 free ANOTs and see how your AI team works together.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <a href="https://app.anots.com/signup">
                  <Button variant="magic" size="lg">
                    Start Free
                  </Button>
                </a>
                <Link href="/features">
                  <Button variant="secondary" size="lg">
                    All Features
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
