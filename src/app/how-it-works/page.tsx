import type { Metadata } from "next";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "How ANOTS Works - AI Marketing Automation Explained Step-by-Step",
  description: "Complete guide to how ANOTS AI marketing automation works: three-agent system (Qubik, Themis, Core), Brand Archaeologist extraction, approval workflow, ANOT creation, and execution. Understand the entire process from conversation to automation.",
  keywords: ["how ANOTS works", "AI marketing automation process", "TCAM V2 explained", "Brand Archaeologist process", "ANOT creation workflow", "approval workflow", "AI agents explained"],
  alternates: {
    canonical: "https://anots.com/how-it-works",
  },
  openGraph: {
    title: "How ANOTS Works - AI Marketing Automation Process Explained",
    description: "Step-by-step guide to ANOTS AI marketing automation: from conversation to execution.",
    url: "https://anots.com/how-it-works",
  },
};

export default function HowItWorksPage() {
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
                  How ANOTS Works
                </h1>
                <p className="mt-6 text-xl text-[#D4D4D8] leading-relaxed">
                  From conversation to automation: understand the complete ANOTS process.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 border-t border-[#1A1A1B]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mx-auto max-w-3xl">
                <h2 className="text-3xl font-bold text-[#FAFAFA] mb-6">The Big Picture</h2>
                <p className="text-lg text-[#D4D4D8] leading-relaxed mb-4">
                  ANOTS uses a three-agent AI system (TCAM V2) to create, review, and execute marketing automations. You chat with the AI team in natural language, they create proposals, review for risks, and present recommendations. You approve, and the automation runs automatically.
                </p>
                <p className="text-lg text-[#D4D4D8] leading-relaxed">
                  Brand Archaeologist automatically extracts your brand DNA from websites, documents, and social media, ensuring all automations stay on-brand without manual configuration.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* The Process - 5 Steps */}
        <section className="py-16 border-t border-[#1A1A1B]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#FAFAFA] mb-12 text-center">
                The 5-Step Process
              </h2>
            </ScrollReveal>

            <div className="space-y-12">
              {/* Step 1 */}
              <ScrollReveal>
                <Card className="border-[#5E6AD2]/20">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#5E6AD2]/20 flex items-center justify-center text-2xl font-bold text-[#5E6AD2]">
                        1
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4">
                          Brand Extraction (Optional but Recommended)
                        </h3>
                        <p className="text-[#D4D4D8] mb-6">
                          Before creating ANOTs, Brand Archaeologist extracts your brand DNA from three sources. This ensures all automations stay on-brand automatically.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="text-sm font-semibold text-[#5E6AD2] mb-2">Website Analysis</h4>
                            <ul className="text-sm text-[#A1A1AA] space-y-1">
                              <li>• Crawls up to 12 pages</li>
                              <li>• Extracts logos, colors, fonts</li>
                              <li>• Analyzes brand voice</li>
                              <li>• 2MB limit, same-origin only</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-[#5E6AD2] mb-2">Document Processing</h4>
                            <ul className="text-sm text-[#A1A1AA] space-y-1">
                              <li>• PDF, DOCX, PPTX support</li>
                              <li>• Brand guideline extraction</li>
                              <li>• Visual asset analysis</li>
                              <li>• 20MB limit, 80k chars</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-[#5E6AD2] mb-2">Social Media Learning</h4>
                            <ul className="text-sm text-[#A1A1AA] space-y-1">
                              <li>• Meta OAuth integration</li>
                              <li>• Analyzes last 10 posts</li>
                              <li>• Learns tone and style</li>
                              <li>• Bio + captions only</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Step 2 */}
              <ScrollReveal>
                <Card className="border-[#9333EA]/20">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#9333EA]/20 flex items-center justify-center text-2xl font-bold text-[#9333EA]">
                        2
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4">
                          Conversation with AI Team
                        </h3>
                        <p className="text-[#D4D4D8] mb-6">
                          You chat with your AI team in natural language. Tell them what you need, and they'll ask clarifying questions to understand your goals.
                        </p>
                        <div className="bg-[#1A1A1B] rounded-lg p-6">
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="text-[#D4D4D8] font-semibold">You:</div>
                              <div className="text-[#A1A1AA]">"I want to post to Instagram daily at 10am with product photos"</div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="text-[#5E6AD2] font-semibold">Qubik:</div>
                              <div className="text-[#A1A1AA]">"Great! What type of products? Should I use your brand colors? Any specific hashtags?"</div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="text-[#D4D4D8] font-semibold">You:</div>
                              <div className="text-[#A1A1AA]">"Skincare products. Yes, use brand colors. Include #skincare #beauty"</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Step 3 */}
              <ScrollReveal>
                <Card className="border-[#10B981]/20">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#10B981]/20 flex items-center justify-center text-2xl font-bold text-[#10B981]">
                        3
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4">
                          Qubik Creates Proposal
                        </h3>
                        <p className="text-[#D4D4D8] mb-6">
                          Qubik (Creative Motor) generates a detailed proposal including content strategy, execution plan, and creative ideas. Uses your brand snapshot automatically.
                        </p>
                        <div className="bg-[#1A1A1B] rounded-lg p-6">
                          <h4 className="text-sm font-semibold text-[#10B981] mb-3">Qubik's Proposal</h4>
                          <ul className="text-sm text-[#A1A1AA] space-y-2">
                            <li>• <strong>Content Strategy:</strong> Daily product showcase with lifestyle context</li>
                            <li>• <strong>Visual Style:</strong> Clean, minimal, using brand colors (#5E6AD2, #FAFAFA)</li>
                            <li>• <strong>Caption Template:</strong> Product benefit + call-to-action + hashtags</li>
                            <li>• <strong>Posting Time:</strong> 10:00 AM EST (optimal engagement time)</li>
                            <li>• <strong>Hashtags:</strong> #skincare #beauty #naturalbeauty #selfcare</li>
                            <li>• <strong>Estimated Cost:</strong> $0.15/post (AI + API costs)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Step 4 */}
              <ScrollReveal>
                <Card className="border-[#EF4444]/20">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EF4444]/20 flex items-center justify-center text-2xl font-bold text-[#EF4444]">
                        4
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4">
                          Themis Reviews for Risks
                        </h3>
                        <p className="text-[#D4D4D8] mb-6">
                          Themis (Analytical Motor) reviews Qubik's proposal for risks, costs, brand consistency, and practical constraints. Identifies potential issues before execution.
                        </p>
                        <div className="bg-[#1A1A1B] rounded-lg p-6">
                          <h4 className="text-sm font-semibold text-[#EF4444] mb-3">Themis's Review</h4>
                          <div className="space-y-4">
                            <div>
                              <div className="text-xs text-[#10B981] font-semibold mb-1">✓ APPROVED</div>
                              <ul className="text-sm text-[#A1A1AA] space-y-1">
                                <li>• Brand colors match extracted palette</li>
                                <li>• Posting time aligns with audience timezone</li>
                                <li>• Cost within budget ($0.15/post × 30 days = $4.50/month)</li>
                              </ul>
                            </div>
                            <div>
                              <div className="text-xs text-[#F59E0B] font-semibold mb-1">⚠ WARNINGS</div>
                              <ul className="text-sm text-[#A1A1AA] space-y-1">
                                <li>• Instagram API rate limit: 25 posts/day (well within limit)</li>
                                <li>• Hashtag limit: 30 max (using 4, safe)</li>
                              </ul>
                            </div>
                            <div>
                              <div className="text-xs text-[#EF4444] font-semibold mb-1">✗ RISKS</div>
                              <ul className="text-sm text-[#A1A1AA] space-y-1">
                                <li>• None detected</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Step 5 */}
              <ScrollReveal>
                <Card className="border-[#F59E0B]/20">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F59E0B]/20 flex items-center justify-center text-2xl font-bold text-[#F59E0B]">
                        5
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4">
                          Core Synthesizes & You Approve
                        </h3>
                        <p className="text-[#D4D4D8] mb-6">
                          Core (Synthesizer) combines Qubik's creativity and Themis's analysis into a clear recommendation. You see the complete plan and approve or reject.
                        </p>
                        <div className="bg-[#1A1A1B] rounded-lg p-6">
                          <h4 className="text-sm font-semibold text-[#F59E0B] mb-3">Core's Recommendation</h4>
                          <p className="text-sm text-[#D4D4D8] mb-4">
                            <strong>Recommendation: APPROVE</strong>
                          </p>
                          <p className="text-sm text-[#A1A1AA] mb-4">
                            This ANOT is well-designed and low-risk. Qubik's creative strategy aligns with your brand, and Themis found no blocking issues. The cost is reasonable at $4.50/month for daily posting.
                          </p>
                          <div className="flex gap-3">
                            <button className="px-6 py-2 bg-[#10B981] text-white rounded-lg font-semibold hover:bg-[#059669] transition-colors">
                              Approve & Activate
                            </button>
                            <button className="px-6 py-2 bg-[#1A1A1B] text-[#D4D4D8] border border-[#27272A] rounded-lg font-semibold hover:bg-[#27272A] transition-colors">
                              Request Changes
                            </button>
                            <button className="px-6 py-2 bg-[#1A1A1B] text-[#EF4444] border border-[#27272A] rounded-lg font-semibold hover:bg-[#27272A] transition-colors">
                              Reject
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* After Approval */}
        <section className="py-16 border-t border-[#1A1A1B]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#FAFAFA] mb-12 text-center">
                What Happens After Approval
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal>
                <Card className="border-[#1A1A1B]">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-[#5E6AD2]/20 flex items-center justify-center mb-4">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#FAFAFA] mb-3">Automatic Execution</h3>
                    <p className="text-[#D4D4D8] text-sm">
                      Your ANOT runs automatically according to the schedule. No manual intervention required. ActivePieces workflow engine handles all integrations.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal>
                <Card className="border-[#1A1A1B]">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-[#10B981]/20 flex items-center justify-center mb-4">
                      <span className="text-2xl">📊</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#FAFAFA] mb-3">Activity Tracking</h3>
                    <p className="text-[#D4D4D8] text-sm">
                      Activity Hub shows what's running, scheduled, published, or failed. See execution history, timestamps, and costs. Free: 24h view. Standard: 7-day. Pro: custom range.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal>
                <Card className="border-[#1A1A1B]">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-[#9333EA]/20 flex items-center justify-center mb-4">
                      <span className="text-2xl">🔧</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#FAFAFA] mb-3">Full Control</h3>
                    <p className="text-[#D4D4D8] text-sm">
                      Pause, modify, or delete any ANOT anytime. Request changes from AI team. Adjust schedule, content, or targeting. You're always in control.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="py-16 border-t border-[#1A1A1B]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#FAFAFA] mb-12 text-center">
                Technical Architecture
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal>
                <Card className="border-[#1A1A1B]">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-[#FAFAFA] mb-4">AI Models by Tier</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-[#5E6AD2] mb-2">Free (Explorer)</h4>
                        <ul className="text-sm text-[#A1A1AA] space-y-1">
                          <li>• Qubik: Gemini 2.5 Flash</li>
                          <li>• Themis: DeepSeek R1</li>
                          <li>• Core: DeepSeek R1</li>
                          <li>• Brand: Gemini 3 Pro + 2.5 Pro</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#5E6AD2] mb-2">Standard ($9.90/mo)</h4>
                        <ul className="text-sm text-[#A1A1AA] space-y-1">
                          <li>• Qubik: Gemini 3 Flash</li>
                          <li>• Themis: Claude 3.5 Haiku</li>
                          <li>• Core: Gemini 3 Flash</li>
                          <li>• Brand: Gemini 3 Pro + 2.5 Pro</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#5E6AD2] mb-2">Pro ($49.90/mo)</h4>
                        <ul className="text-sm text-[#A1A1AA] space-y-1">
                          <li>• Qubik: GPT-5.2</li>
                          <li>• Themis: Claude Sonnet 4.5</li>
                          <li>• Core: Gemini 3 Pro</li>
                          <li>• Brand: Gemini 3 Pro + 2.5 Pro</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal>
                <Card className="border-[#1A1A1B]">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-[#FAFAFA] mb-4">Integration Stack</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-[#5E6AD2] mb-2">Workflow Engine</h4>
                        <p className="text-sm text-[#A1A1AA]">
                          ActivePieces (self-hosted, open-source) provides 200+ app connections. Alternative to Zapier with full control.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#5E6AD2] mb-2">Database & Auth</h4>
                        <p className="text-sm text-[#A1A1AA]">
                          Supabase for PostgreSQL database, authentication, and real-time subscriptions. Secure, scalable, open-source.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#5E6AD2] mb-2">Frontend</h4>
                        <p className="text-sm text-[#A1A1AA]">
                          Next.js 16 with TypeScript for type safety. Server-side rendering for performance. Deployed on Vercel.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#5E6AD2] mb-2">AI Providers</h4>
                        <p className="text-sm text-[#A1A1AA]">
                          OpenAI (GPT-5.2), Anthropic (Claude), Google (Gemini), DeepSeek (R1). Pro tier supports BYOK (Bring Your Own Keys).
                        </p>
                      </div>
                    </div>
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
                Ready to See It in Action?
              </h2>
              <p className="text-xl text-[#D4D4D8] mb-8">
                Start free with 3 ANOTs. Experience the AI team yourself.
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
