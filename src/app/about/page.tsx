import type { Metadata } from "next";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About ANOTS - AI Marketing Automation Platform",
  description: "ANOTS is an AI marketing automation platform with four specialized AI agents (Qubik, Themis, Athena, Hephaestus) and Brand Archaeologist that extracts brand DNA from websites, documents, and social media. Learn about our mission, technology, and approach to AI-powered marketing.",
  keywords: ["about ANOTS", "AI marketing platform", "marketing automation", "AI agents", "brand intelligence", "company information"],
  alternates: {
    canonical: "https://anots.com/about",
  },
  openGraph: {
    title: "About ANOTS - AI Marketing Automation Platform",
    description: "Learn about ANOTS: AI marketing automation with 3 AI agents and Brand Archaeologist. Our mission is to make professional marketing accessible to everyone.",
    url: "https://anots.com/about",
  },
};

export default function AboutPage() {
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
                  About ANOTS
                </h1>
                <p className="mt-6 text-xl text-[#D4D4D8] leading-relaxed">
                  We're building the AI marketing team that makes professional marketing accessible to everyone.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* What is ANOTS */}
        <section className="py-16 border-t border-[#1A1A1B]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <ScrollReveal>
                <div>
                  <h2 className="text-3xl font-bold text-[#FAFAFA] mb-6">
                    What is ANOTS?
                  </h2>
                  <div className="space-y-4 text-lg text-[#D4D4D8]">
                    <p>
                      ANOTS is an AI marketing automation platform that uses four specialized AI agents to create, review, and execute marketing campaigns automatically.
                    </p>
                    <p>
                      The name ANOTS stands for "Atomic Units of Agency" - representing the smallest independent marketing automation you can create. Each ANOT is a complete, self-contained marketing task that runs automatically after your approval.
                    </p>
                    <p>
                      Unlike traditional marketing automation tools that require complex workflows and technical setup, ANOTS works through natural language conversation. You simply tell your AI team what you need, and they handle the implementation.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <Card className="border-[#1A1A1B]">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-[#FAFAFA] mb-4">Key Statistics</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-3xl font-bold text-[#5E6AD2]">4</div>
                        <div className="text-sm text-[#A1A1AA]">AI Agents (Qubik, Themis, Athena, Hephaestus)</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-[#5E6AD2]">200+</div>
                        <div className="text-sm text-[#A1A1AA]">Platform Integrations via ActivePieces</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-[#5E6AD2]">3</div>
                        <div className="text-sm text-[#A1A1AA]">Brand Sources (Website, Documents, Social Media)</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-[#5E6AD2]">Free</div>
                        <div className="text-sm text-[#A1A1AA]">Forever tier with 3 ANOTs per month</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* The AI Team */}
        <section className="py-16 border-t border-[#1A1A1B]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#FAFAFA] mb-12 text-center">
                The AI Team: TCAM V3
              </h2>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <ScrollReveal>
                <Card className="border-[#5E6AD2]/20">
                  <CardContent className="p-8">
                    <div className="h-12 w-12 rounded-lg bg-[#5E6AD2]/20 flex items-center justify-center mb-6">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#FAFAFA] mb-3">Qubik</h3>
                    <p className="text-sm text-[#A1A1AA] mb-4">Creative Motor</p>
                    <p className="text-[#D4D4D8]">
                      Generates creative proposals, content ideas, and marketing strategies. Uses models like Gemini 3 Flash (Standard) or GPT-5.2 (Pro) for maximum creativity.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal>
                <Card className="border-[#EF4444]/20">
                  <CardContent className="p-8">
                    <div className="h-12 w-12 rounded-lg bg-[#EF4444]/20 flex items-center justify-center mb-6">
                      <span className="text-2xl">🔍</span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#FAFAFA] mb-3">Themis</h3>
                    <p className="text-sm text-[#A1A1AA] mb-4">Analytical Motor</p>
                    <p className="text-[#D4D4D8]">
                      Reviews proposals for risks, costs, brand consistency, and practical constraints. Uses models like Claude Sonnet 4.5 (Pro) or DeepSeek R1 (Free) for deep analysis.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal>
                <Card className="border-[#10B981]/20">
                  <CardContent className="p-8">
                    <div className="h-12 w-12 rounded-lg bg-[#10B981]/20 flex items-center justify-center mb-6">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#FAFAFA] mb-3">Athena</h3>
                    <p className="text-sm text-[#A1A1AA] mb-4">Synthesizer</p>
                    <p className="text-[#D4D4D8]">
                      Combines both perspectives into clear recommendations. Uses models like Gemini 3 Pro (Pro) or DeepSeek R1 (Free) for synthesis and decision support.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal>
                <Card className="border-[#F59E0B]/20">
                  <CardContent className="p-8">
                    <div className="h-12 w-12 rounded-lg bg-[#F59E0B]/20 flex items-center justify-center mb-6">
                      <span className="text-2xl">🔨</span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#FAFAFA] mb-3">Hephaestus</h3>
                    <p className="text-sm text-[#A1A1AA] mb-4">ANOT Maker</p>
                    <p className="text-[#D4D4D8]">
                      Builds ActivePieces flows from natural language. Transforms your conversation into executable automation workflows. Uses ChatGPT-5 for chat-to-flow translation.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Brand Archaeologist */}
        <section className="py-16 border-t border-[#1A1A1B]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <ScrollReveal>
                <div>
                  <h2 className="text-3xl font-bold text-[#FAFAFA] mb-6">
                    Brand Archaeologist
                  </h2>
                  <div className="space-y-4 text-lg text-[#D4D4D8]">
                    <p>
                      Brand Archaeologist is our multi-source brand intelligence system powered by Gemini 3 Pro and Gemini 2.5 Pro.
                    </p>
                    <p>
                      It automatically extracts your brand DNA from three sources:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start">
                        <span className="text-[#5E6AD2] mr-2">•</span>
                        <span><strong>Website Analysis:</strong> Crawls up to 12 pages to extract logos, colors, Google Fonts, and brand voice</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5E6AD2] mr-2">•</span>
                        <span><strong>Document Processing:</strong> Analyzes PDF, DOCX, PPTX files for brand guidelines and visual assets</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5E6AD2] mr-2">•</span>
                        <span><strong>Social Media Learning:</strong> Connects to Meta (Facebook/Instagram) to analyze tone and style</span>
                      </li>
                    </ul>
                    <p>
                      All extracted data includes provenance tracking, showing which source each element came from.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <Card className="border-[#9333EA]/20">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-[#FAFAFA] mb-6">What Gets Extracted</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-[#9333EA] mb-2">Visual Identity</h4>
                        <ul className="text-sm text-[#A1A1AA] space-y-1">
                          <li>• Logo variations (primary, secondary, favicon)</li>
                          <li>• Color palette with hex codes</li>
                          <li>• Typography and Google Fonts</li>
                          <li>• Image style patterns</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#9333EA] mb-2">Brand Voice</h4>
                        <ul className="text-sm text-[#A1A1AA] space-y-1">
                          <li>• Tone and communication style</li>
                          <li>• Key messaging and taglines</li>
                          <li>• Product descriptions</li>
                          <li>• Value propositions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#9333EA] mb-2">Company Context</h4>
                        <ul className="text-sm text-[#A1A1AA] space-y-1">
                          <li>• About summary and mission</li>
                          <li>• Product/service catalog</li>
                          <li>• Industry positioning</li>
                          <li>• Target audience insights</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 border-t border-[#1A1A1B]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#FAFAFA] mb-12 text-center">
                Technology Stack
              </h2>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ScrollReveal>
                <Card className="border-[#1A1A1B]">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-[#FAFAFA] mb-3">AI Models</h3>
                    <ul className="text-sm text-[#A1A1AA] space-y-2">
                      <li>• OpenAI ChatGPT-5 (Pro tier - Hephaestus)</li>
                      <li>• OpenAI GPT-5.2 (Pro tier - Qubik)</li>
                      <li>• Anthropic Claude Sonnet 4.5 (Pro tier - Themis)</li>
                      <li>• Google Gemini 3 Pro (Pro tier - Athena)</li>
                      <li>• Google Gemini 3 Flash (Standard tier)</li>
                      <li>• Google Gemini 2.5 Flash (Free tier)</li>
                      <li>• DeepSeek R1 (Free tier)</li>
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal>
                <Card className="border-[#1A1A1B]">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-[#FAFAFA] mb-3">Infrastructure</h3>
                    <ul className="text-sm text-[#A1A1AA] space-y-2">
                      <li>• Next.js 16 (React framework)</li>
                      <li>• TypeScript (type safety)</li>
                      <li>• Supabase (database & auth)</li>
                      <li>• ActivePieces (workflow engine)</li>
                      <li>• Vercel (hosting & deployment)</li>
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal>
                <Card className="border-[#1A1A1B]">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-[#FAFAFA] mb-3">Integrations</h3>
                    <ul className="text-sm text-[#A1A1AA] space-y-2">
                      <li>• 200+ apps via ActivePieces</li>
                      <li>• Social media platforms</li>
                      <li>• CMS & blogging platforms</li>
                      <li>• Email marketing tools</li>
                      <li>• Analytics & ads platforms</li>
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 border-t border-[#1A1A1B]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#FAFAFA] mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-[#D4D4D8] leading-relaxed">
                  Make professional marketing accessible to everyone through AI automation that's transparent, controllable, and trustworthy.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-2">
              <ScrollReveal>
                <Card className="border-[#1A1A1B]">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-[#FAFAFA] mb-4">Transparency</h3>
                    <p className="text-[#D4D4D8]">
                      Every ANOT shows you exactly what it will do before execution. Cost estimates, risk analysis, and full execution plans are always visible.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal>
                <Card className="border-[#1A1A1B]">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-[#FAFAFA] mb-4">Control</h3>
                    <p className="text-[#D4D4D8]">
                      Nothing runs without your approval. You can pause, modify, or delete any ANOT at any time. You're always in control.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal>
                <Card className="border-[#1A1A1B]">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-[#FAFAFA] mb-4">Trust</h3>
                    <p className="text-[#D4D4D8]">
                      Four-agent architecture ensures creative ideas are balanced with analytical rigor and practical implementation. Themis reviews every proposal for risks, while Hephaestus builds the actual workflows.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal>
                <Card className="border-[#1A1A1B]">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-[#FAFAFA] mb-4">Accessibility</h3>
                    <p className="text-[#D4D4D8]">
                      Free tier with 3 ANOTs per month. No credit card required. Professional marketing automation for everyone, not just enterprises.
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
                Ready to Get Started?
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
