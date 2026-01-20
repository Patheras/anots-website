import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "ANOT Creation - Natural Language Marketing Automation | ANOTS",
  description: "Create unlimited marketing automations through natural conversation. Each ANOT is a complete, self-contained task. No coding, no complexity.",
  keywords: ["ANOT creation", "natural language automation", "conversational AI", "marketing automation creation", "no-code marketing"],
  openGraph: {
    title: "ANOT Creation - Build Marketing Automations by Talking | ANOTS",
    description: "Create unlimited marketing automations through natural conversation.",
    url: "https://anots.com/features/anot-creation",
  },
};

export default function AnotCreationPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="bg-[#0A0A0B] py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#DC2626]/10 px-4 py-2 text-sm text-[#DC2626] mb-6">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Core Capability
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAFAFA]">
                ANOT Creation: Build by Talking
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#D4D4D8] leading-relaxed">
                Create unlimited marketing automations through natural conversation. Each ANOT is a complete, self-contained task powered by ActivePieces workflows. 
                No coding, no complexity—just tell us what you want, and AI builds the automation.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#0F0F10] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA]">
                How ANOT Creation Works
              </h2>
              <p className="mt-4 text-lg text-[#D4D4D8]">
                Four simple steps from idea to execution
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-4 mb-16">
            {[
              {
                step: "1",
                title: "Describe Your Goal",
                description: "Tell us what you want in plain English. 'Post to Instagram 3x per week' or 'Send a newsletter every Monday'.",
                color: "text-[#DC2626]",
                bgColor: "bg-[#DC2626]/10",
              },
              {
                step: "2",
                title: "AI Team Creates Workflow",
                description: "Qubik generates creative proposals and builds ActivePieces workflows. Themis reviews for risks. Core synthesizes recommendations.",
                color: "text-[#9333EA]",
                bgColor: "bg-[#9333EA]/10",
              },
              {
                step: "3",
                title: "You Approve",
                description: "Review the proposal, check costs, assess risks. Approve, reject, or request changes.",
                color: "text-[#3B82F6]",
                bgColor: "bg-[#3B82F6]/10",
              },
              {
                step: "4",
                title: "ActivePieces Executes",
                description: "Your approved ANOT runs as an ActivePieces workflow. Connects to 200+ apps, executes steps, and tracks progress automatically.",
                color: "text-[#10B981]",
                bgColor: "bg-[#10B981]/10",
              },
            ].map((item) => (
              <ScrollReveal key={item.step}>
                <Card className="h-full border-[#DC2626]/20">
                  <CardContent className="p-6">
                    <div className={`flex items-center justify-center h-12 w-12 rounded-lg ${item.bgColor} ${item.color} mb-4 text-2xl font-bold`}>
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-[#FAFAFA] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#D4D4D8]">{item.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            <ScrollReveal>
              <Card className="h-full border-[#DC2626]/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#DC2626]/10 text-[#DC2626] mb-6">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4">Natural Language Interface</h3>
                  <p className="text-[#D4D4D8] mb-6">
                    No forms, no dropdowns, no complexity. Just describe what you want in plain English and let the AI team handle the rest.
                  </p>
                  <ul className="space-y-3 text-sm text-[#D4D4D8]">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Conversational interface</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Context-aware suggestions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Clarifying questions when needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>No technical knowledge required</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="h-full border-[#DC2626]/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#DC2626]/10 text-[#DC2626] mb-6">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4">Unlimited ANOTs</h3>
                  <p className="text-[#D4D4D8] mb-6">
                    Create as many ANOTs as you need. Each one is a complete ActivePieces workflow with its own triggers, actions, and schedule.
                  </p>
                  <ul className="space-y-3 text-sm text-[#D4D4D8]">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>No limits on ANOT count (Pro/Agency)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Each ANOT = ActivePieces workflow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Pause, edit, or delete anytime</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Duplicate successful workflows</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="h-full border-[#DC2626]/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#DC2626]/10 text-[#DC2626] mb-6">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4">Flexible Scheduling</h3>
                  <p className="text-[#D4D4D8] mb-6">
                    Run ANOTs once, daily, weekly, monthly, or on custom schedules. Set specific times, days, or trigger conditions.
                  </p>
                  <ul className="space-y-3 text-sm text-[#D4D4D8]">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>One-time or recurring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Custom time zones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Event-based triggers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Blackout dates and holidays</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="h-full border-[#DC2626]/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#DC2626]/10 text-[#DC2626] mb-6">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4">Iterative Refinement</h3>
                  <p className="text-[#D4D4D8] mb-6">
                    Not happy with the first proposal? Request changes, provide feedback, and iterate until it's perfect.
                  </p>
                  <ul className="space-y-3 text-sm text-[#D4D4D8]">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Request specific changes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>AI learns from feedback</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Version history tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Rollback to previous versions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Example ANOTs */}
      <section className="bg-[#0A0A0B] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA]">
                Example ANOTs You Can Create
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Post to Instagram 3x per week with product photos",
              "Send a weekly newsletter every Monday at 9am",
              "Create blog posts from trending topics twice a month",
              "Share new blog posts to all social channels",
              "Run a monthly email campaign with special offers",
              "Post daily tips to LinkedIn at optimal times",
            ].map((example, index) => (
              <ScrollReveal key={index}>
                <Card className="border-[#DC2626]/20 hover:border-[#DC2626] transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#DC2626]/10 text-[#DC2626] flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-sm text-[#D4D4D8]">{example}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F0F10] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA]">
                Start Creating ANOTs Today
              </h2>
              <p className="mt-4 text-lg text-[#D4D4D8]">
                3 free ANOTs to get started. No credit card required.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <a href="https://app.anots.com/signup">
                  <Button variant="primary" size="lg">
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
