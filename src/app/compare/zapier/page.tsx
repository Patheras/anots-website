import type { Metadata } from "next";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "ANOTS vs Zapier - AI Marketing Automation vs Workflow Automation",
  description: "Detailed comparison of ANOTS AI marketing automation and Zapier workflow automation. Compare three-agent AI system (Qubik, Themis, Core) vs manual Zap building, natural language vs visual builder, marketing-specific vs general automation, pricing, and features.",
  keywords: ["ANOTS vs Zapier", "AI automation vs Zapier", "marketing automation comparison", "Zapier alternative", "AI marketing tools", "workflow automation", "ANOTS Zapier comparison"],
  alternates: {
    canonical: "https://anots.com/compare/zapier",
  },
  openGraph: {
    title: "ANOTS vs Zapier - AI Marketing Automation Comparison",
    description: "Compare ANOTS AI marketing automation with Zapier workflow automation. See differences in AI agents, natural language, and marketing focus.",
    url: "https://anots.com/compare/zapier",
  },
};

export default function AnotsVsZapierPage() {
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
                  ANOTS vs Zapier
                </h1>
                <p className="mt-6 text-xl text-[#D4D4D8] leading-relaxed">
                  AI marketing automation vs traditional workflow automation
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="py-16 border-t border-[#1A1A1B]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#FAFAFA] mb-12 text-center">
                Quick Comparison
              </h2>
            </ScrollReveal>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#1A1A1B]">
                    <th className="text-left py-4 px-6 text-[#FAFAFA] font-semibold">Feature</th>
                    <th className="text-left py-4 px-6 text-[#5E6AD2] font-semibold">ANOTS</th>
                    <th className="text-left py-4 px-6 text-[#A1A1AA] font-semibold">Zapier</th>
                  </tr>
                </thead>
                <tbody className="text-[#D4D4D8]">
                  <tr className="border-b border-[#1A1A1B]">
                    <td className="py-4 px-6 font-medium">Automation Creation</td>
                    <td className="py-4 px-6">Natural language conversation</td>
                    <td className="py-4 px-6">Visual workflow builder</td>
                  </tr>
                  <tr className="border-b border-[#1A1A1B]">
                    <td className="py-4 px-6 font-medium">AI System</td>
                    <td className="py-4 px-6">Three agents (Qubik, Themis, Core)</td>
                    <td className="py-4 px-6">No AI agents</td>
                  </tr>
                  <tr className="border-b border-[#1A1A1B]">
                    <td className="py-4 px-6 font-medium">Brand Intelligence</td>
                    <td className="py-4 px-6">Brand Archaeologist (auto-extract)</td>
                    <td className="py-4 px-6">Manual configuration</td>
                  </tr>
                  <tr className="border-b border-[#1A1A1B]">
                    <td className="py-4 px-6 font-medium">Approval Workflow</td>
                    <td className="py-4 px-6">Built-in (nothing runs without approval)</td>
                    <td className="py-4 px-6">Not built-in</td>
                  </tr>
                  <tr className="border-b border-[#1A1A1B]">
                    <td className="py-4 px-6 font-medium">Risk Detection</td>
                    <td className="py-4 px-6">Themis analytical review</td>
                    <td className="py-4 px-6">Manual testing required</td>
                  </tr>
                  <tr className="border-b border-[#1A1A1B]">
                    <td className="py-4 px-6 font-medium">Focus</td>
                    <td className="py-4 px-6">Marketing-specific</td>
                    <td className="py-4 px-6">General automation</td>
                  </tr>
                  <tr className="border-b border-[#1A1A1B]">
                    <td className="py-4 px-6 font-medium">Free Tier</td>
                    <td className="py-4 px-6">3 ANOTs/month, full AI team</td>
                    <td className="py-4 px-6">100 tasks/month, 5 Zaps</td>
                  </tr>
                  <tr className="border-b border-[#1A1A1B]">
                    <td className="py-4 px-6 font-medium">Starting Price</td>
                    <td className="py-4 px-6">$9.90/month (50 ANOTs)</td>
                    <td className="py-4 px-6">$19.99/month (750 tasks)</td>
                  </tr>
                  <tr className="border-b border-[#1A1A1B]">
                    <td className="py-4 px-6 font-medium">Integrations</td>
                    <td className="py-4 px-6">200+ via ActivePieces</td>
                    <td className="py-4 px-6">6,000+ apps</td>
                  </tr>
                  <tr className="border-b border-[#1A1A1B]">
                    <td className="py-4 px-6 font-medium">Learning Curve</td>
                    <td className="py-4 px-6">Low (chat-based)</td>
                    <td className="py-4 px-6">Medium (visual builder)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Key Differences */}
        <section className="py-16 border-t border-[#1A1A1B]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#FAFAFA] mb-12 text-center">
                Key Differences
              </h2>
            </ScrollReveal>

            <div className="space-y-12">
              <ScrollReveal>
                <Card className="border-[#1A1A1B]">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4">
                      1. AI Agents vs Manual Building
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-[#5E6AD2] mb-3">ANOTS</h4>
                        <p className="text-[#D4D4D8] mb-4">
                          Three specialized AI agents work together: Qubik generates creative proposals, Themis reviews for risks and constraints, Core synthesizes recommendations. You chat with them in natural language.
                        </p>
                        <p className="text-[#A1A1AA] text-sm">
                          Example: "Post to Instagram daily at 10am with product photos" → AI team creates complete automation
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#A1A1AA] mb-3">Zapier</h4>
                        <p className="text-[#D4D4D8] mb-4">
                          Manual workflow building using visual editor. You configure triggers, actions, filters, and paths yourself. No AI assistance in creation or review.
                        </p>
                        <p className="text-[#A1A1AA] text-sm">
                          Example: Manually select trigger (Schedule), action (Instagram), configure fields, test, activate
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal>
                <Card className="border-[#1A1A1B]">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4">
                      2. Brand Intelligence
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-[#5E6AD2] mb-3">ANOTS</h4>
                        <p className="text-[#D4D4D8] mb-4">
                          Brand Archaeologist automatically extracts logos, colors, fonts, and brand voice from your website, documents, and social media. All ANOTs use this brand intelligence automatically.
                        </p>
                        <ul className="text-[#A1A1AA] text-sm space-y-1">
                          <li>• Website crawling (12 pages, 2MB limit)</li>
                          <li>• Document analysis (PDF, DOCX, PPTX)</li>
                          <li>• Social media learning (Meta OAuth)</li>
                          <li>• Automatic brand consistency</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#A1A1AA] mb-3">Zapier</h4>
                        <p className="text-[#D4D4D8] mb-4">
                          No brand intelligence system. You manually configure brand elements in each Zap. No automatic extraction or consistency enforcement.
                        </p>
                        <ul className="text-[#A1A1AA] text-sm space-y-1">
                          <li>• Manual field configuration</li>
                          <li>• No brand extraction</li>
                          <li>• No consistency checking</li>
                          <li>• Repeat setup for each Zap</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal>
                <Card className="border-[#1A1A1B]">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4">
                      3. Approval & Risk Detection
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-[#5E6AD2] mb-3">ANOTS</h4>
                        <p className="text-[#D4D4D8] mb-4">
                          Built-in approval workflow. Themis reviews every proposal for risks, costs, brand consistency, and constraints. You see full plan before approval. Nothing runs without your permission.
                        </p>
                        <ul className="text-[#A1A1AA] text-sm space-y-1">
                          <li>• Automatic risk detection</li>
                          <li>• Cost estimation before execution</li>
                          <li>• Brand consistency checking</li>
                          <li>• Clear approval interface</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#A1A1AA] mb-3">Zapier</h4>
                        <p className="text-[#D4D4D8] mb-4">
                          No built-in approval system. Zaps run automatically once activated. You must manually test and verify. No AI risk detection or cost estimation.
                        </p>
                        <ul className="text-[#A1A1AA] text-sm space-y-1">
                          <li>• Manual testing required</li>
                          <li>• No automatic risk detection</li>
                          <li>• No cost estimation</li>
                          <li>• Runs immediately when triggered</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal>
                <Card className="border-[#1A1A1B]">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4">
                      4. Marketing Focus vs General Automation
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-[#5E6AD2] mb-3">ANOTS</h4>
                        <p className="text-[#D4D4D8] mb-4">
                          Built specifically for marketing automation. Pre-configured for social media, content creation, email campaigns, and ads. AI understands marketing context.
                        </p>
                        <ul className="text-[#A1A1AA] text-sm space-y-1">
                          <li>• Marketing-specific AI training</li>
                          <li>• Social media optimization</li>
                          <li>• Content creation assistance</li>
                          <li>• Campaign management</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#A1A1AA] mb-3">Zapier</h4>
                        <p className="text-[#D4D4D8] mb-4">
                          General-purpose automation platform. Works for any use case (sales, support, operations, marketing). No marketing-specific features or AI.
                        </p>
                        <ul className="text-[#A1A1AA] text-sm space-y-1">
                          <li>• General automation tool</li>
                          <li>• No marketing specialization</li>
                          <li>• Manual configuration for marketing</li>
                          <li>• Works for any industry</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* When to Choose Each */}
        <section className="py-16 border-t border-[#1A1A1B]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#FAFAFA] mb-12 text-center">
                When to Choose Each Platform
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal>
                <Card className="border-[#5E6AD2]/20">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[#5E6AD2] mb-6">Choose ANOTS if you:</h3>
                    <ul className="space-y-3 text-[#D4D4D8]">
                      <li className="flex items-start">
                        <span className="text-[#5E6AD2] mr-2">✓</span>
                        <span>Want AI to create and review marketing automations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5E6AD2] mr-2">✓</span>
                        <span>Need automatic brand intelligence extraction</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5E6AD2] mr-2">✓</span>
                        <span>Prefer natural language over visual builders</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5E6AD2] mr-2">✓</span>
                        <span>Want approval-based workflow with risk detection</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5E6AD2] mr-2">✓</span>
                        <span>Focus primarily on marketing automation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5E6AD2] mr-2">✓</span>
                        <span>Want lower starting price ($9.90 vs $19.99)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5E6AD2] mr-2">✓</span>
                        <span>Need brand consistency across all automations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal>
                <Card className="border-[#A1A1AA]/20">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[#A1A1AA] mb-6">Choose Zapier if you:</h3>
                    <ul className="space-y-3 text-[#D4D4D8]">
                      <li className="flex items-start">
                        <span className="text-[#A1A1AA] mr-2">✓</span>
                        <span>Need 6,000+ app integrations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#A1A1AA] mr-2">✓</span>
                        <span>Prefer visual workflow builders</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#A1A1AA] mr-2">✓</span>
                        <span>Want general automation (not just marketing)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#A1A1AA] mr-2">✓</span>
                        <span>Don't need AI agents or brand intelligence</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#A1A1AA] mr-2">✓</span>
                        <span>Have technical team to build workflows</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#A1A1AA] mr-2">✓</span>
                        <span>Need very specific niche app integrations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#A1A1AA] mr-2">✓</span>
                        <span>Prefer established platform with large community</span>
                      </li>
                    </ul>
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
                Try ANOTS Free
              </h2>
              <p className="text-xl text-[#D4D4D8] mb-8">
                Start with 3 ANOTs per month. No credit card required.
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
