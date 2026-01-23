import type { Metadata } from "next";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Glossary - ANOTS AI Marketing Automation Terms & Definitions",
  description: "Complete glossary of ANOTS terminology: ANOT, Brand Archaeologist, TCAM V2, Qubik, Themis, Core, Brand Room, Activity Hub, approval workflows, and AI marketing automation concepts. Understand every term used in the ANOTS platform.",
  keywords: ["ANOTS glossary", "AI marketing terms", "ANOT definition", "Brand Archaeologist explained", "TCAM V2", "marketing automation glossary", "AI agents terminology"],
  alternates: {
    canonical: "https://anots.com/glossary",
  },
  openGraph: {
    title: "ANOTS Glossary - AI Marketing Automation Terms & Definitions",
    description: "Complete glossary of ANOTS terminology and AI marketing automation concepts.",
    url: "https://anots.com/glossary",
  },
};

interface GlossaryTerm {
  term: string;
  definition: string;
  category: "Core Concepts" | "AI Agents" | "Features" | "Technical" | "Integrations";
  relatedTerms?: string[];
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: "ANOT",
    definition: "Atomic Unit of Agency. The smallest independent marketing automation you can create in ANOTS. Each ANOT represents a complete, self-contained marketing task that runs automatically after your approval. Examples: 'Post to Instagram daily at 10am', 'Write weekly blog articles', 'Send monthly newsletters'. ANOTs are created through natural language conversation with your AI team.",
    category: "Core Concepts",
    relatedTerms: ["Approval Workflow", "Activity Hub", "TCAM V2"],
  },
  {
    term: "TCAM V2",
    definition: "Three-Agent Collaborative Architecture Model Version 2. The AI system powering ANOTS, consisting of three specialized agents: Qubik (Creative Motor), Themis (Analytical Motor), and Core (Synthesizer). This architecture ensures creative ideas are balanced with analytical rigor before execution.",
    category: "Core Concepts",
    relatedTerms: ["Qubik", "Themis", "Core"],
  },
  {
    term: "Qubik",
    definition: "The Creative Motor in TCAM V2. Qubik generates creative proposals, content ideas, and marketing strategies. Uses AI models like Gemini 2.5 Flash (Free), Gemini 3 Flash (Standard), or GPT-5.2 (Pro). Named after quantum bits (qubits) representing creative superposition of possibilities.",
    category: "AI Agents",
    relatedTerms: ["TCAM V2", "Themis", "Core"],
  },
  {
    term: "Themis",
    definition: "The Analytical Motor in TCAM V2. Themis reviews proposals for risks, costs, brand consistency, and practical constraints. Uses AI models like DeepSeek R1 (Free), Claude 3.5 Haiku (Standard), or Claude Sonnet 4.5 (Pro). Named after the Greek goddess of justice and order.",
    category: "AI Agents",
    relatedTerms: ["TCAM V2", "Qubik", "Core"],
  },
  {
    term: "Core",
    definition: "The Synthesizer in TCAM V2. Core combines perspectives from Qubik and Themis into clear recommendations presented to you for approval. Uses AI models like DeepSeek R1 (Free), Gemini 3 Flash (Standard), or Gemini 3 Pro (Pro). Acts as the central decision support system.",
    category: "AI Agents",
    relatedTerms: ["TCAM V2", "Qubik", "Themis"],
  },
  {
    term: "Brand Archaeologist",
    definition: "ANOTS multi-source brand intelligence system powered by Gemini 3 Pro and Gemini 2.5 Pro. Automatically extracts brand DNA from three sources: websites (logos, colors, fonts, voice), documents (PDF, DOCX, PPTX brand guidelines), and social media (Meta OAuth for tone analysis). All extracted data includes provenance tracking.",
    category: "Features",
    relatedTerms: ["Brand Room", "URL Archaeologist", "Provenance Tracking"],
  },
  {
    term: "Brand Room",
    definition: "The centralized brand intelligence hub in ANOTS. Displays your unified brand snapshot created by Brand Archaeologist from multiple sources. Shows visual identity (logos, colors, fonts), brand voice (tone, messaging), and company context (mission, products). Powers all ANOTs with consistent brand standards.",
    category: "Features",
    relatedTerms: ["Brand Archaeologist", "Brand Snapshot", "Sources Panel"],
  },
  {
    term: "URL Archaeologist",
    definition: "Bounded multi-page web crawler that extracts brand signals from websites. Intelligently prioritizes key pages (home, about, products, services, pricing, contact) while skipping irrelevant ones. Hard limits: 12 pages max, 2MB total data, 10-second timeout, same-origin only, SSRF protection. Extracts compact signals only, not raw HTML.",
    category: "Technical",
    relatedTerms: ["Brand Archaeologist", "SSRF Protection", "Provenance Tracking"],
  },
  {
    term: "Provenance Tracking",
    definition: "System that records the source of every brand element extracted by Brand Archaeologist. Shows whether each logo, color, font, or message came from website, document, or social media. Enables transparency and trust in automated brand extraction.",
    category: "Technical",
    relatedTerms: ["Brand Archaeologist", "Brand Room"],
  },
  {
    term: "Activity Hub",
    definition: "Centralized tracking system showing all marketing automations in one place. Displays what's running, scheduled, published, or failed. Includes daily focus view, monthly calendar, execution history, and cost tracking. Free tier: 24-hour view. Standard: 7-day view. Pro: custom range.",
    category: "Features",
    relatedTerms: ["ANOT", "Execution History", "Cost Estimation"],
  },
  {
    term: "Approval Workflow",
    definition: "The review process where nothing runs without your explicit permission. Process: (1) You chat with AI team, (2) Qubik creates proposal, (3) Themis reviews for risks, (4) Core synthesizes recommendation, (5) You approve or reject. Ensures full control over all marketing automation.",
    category: "Core Concepts",
    relatedTerms: ["TCAM V2", "ANOT", "Risk Detection"],
  },
  {
    term: "AI Council",
    definition: "The collective decision-making body of Qubik, Themis, and Core. Reviews all Brand Archaeologist extractions and creates unified brand snapshots. Ensures multi-perspective validation before committing brand data.",
    category: "AI Agents",
    relatedTerms: ["TCAM V2", "Brand Archaeologist", "Brand Room"],
  },
  {
    term: "BYOK",
    definition: "Bring Your Own Keys. Pro tier feature allowing you to use your own OpenAI, Anthropic, or Google API keys for direct billing to your AI provider. Results in zero AI cost from ANOTS while maintaining full platform functionality.",
    category: "Features",
    relatedTerms: ["Pro Tier", "API Keys", "Direct Billing"],
  },
  {
    term: "Cost Estimation",
    definition: "Pre-execution cost transparency feature showing estimated costs before any ANOT runs. Includes AI model costs, API calls, and platform fees. Available on Standard and Pro tiers. Helps you make informed decisions about automation execution.",
    category: "Features",
    relatedTerms: ["Approval Workflow", "Activity Hub"],
  },
  {
    term: "Risk Detection",
    definition: "Themis's analytical capability to identify potential issues in proposals. Detects brand inconsistencies, cost overruns, compliance risks, technical constraints, and execution failures. Presents risks clearly before approval.",
    category: "Features",
    relatedTerms: ["Themis", "Approval Workflow"],
  },
  {
    term: "ActivePieces",
    definition: "Self-hosted workflow engine used by ANOTS for platform integrations. Provides connections to 200+ apps including Instagram, Facebook, Twitter, LinkedIn, WordPress, Shopify, Google Drive, Mailchimp, HubSpot, Slack, and more. Open-source alternative to Zapier.",
    category: "Integrations",
    relatedTerms: ["Platform Integrations", "Workflow Engine"],
  },
  {
    term: "Brand Snapshot",
    definition: "Unified representation of your brand created by AI Council from all Brand Archaeologist sources. Includes visual identity, brand voice, and company context. Powers all ANOTs with consistent brand standards. Can be manually updated by re-syncing sources.",
    category: "Features",
    relatedTerms: ["Brand Room", "Brand Archaeologist", "AI Council"],
  },
  {
    term: "Sources Panel",
    definition: "Interface in Brand Room showing all connected brand sources (websites, documents, social accounts). Displays last sync time, data freshness, and allows manual re-sync. Each source can be added, removed, or updated independently.",
    category: "Features",
    relatedTerms: ["Brand Room", "Brand Archaeologist"],
  },
  {
    term: "Excavation",
    definition: "Single brand extraction operation by Brand Archaeologist. Free tier: 3 excavations/month. Standard: 10 excavations/month. Pro: unlimited. Each excavation can analyze one website, document, or social account.",
    category: "Core Concepts",
    relatedTerms: ["Brand Archaeologist", "Pricing Tiers"],
  },
  {
    term: "Multi-Brand Support",
    definition: "Pro tier feature allowing management of multiple brands in one account. Each brand has isolated brand snapshots, sources, and ANOTs. Useful for agencies managing multiple clients or companies with multiple product brands.",
    category: "Features",
    relatedTerms: ["Pro Tier", "Brand Room"],
  },
  {
    term: "SSRF Protection",
    definition: "Server-Side Request Forgery protection in URL Archaeologist. Prevents crawling of private IPs (127.0.0.1, 192.168.x.x, 10.x.x.x), localhost, and internal networks. Ensures security when analyzing user-provided URLs.",
    category: "Technical",
    relatedTerms: ["URL Archaeologist", "Security"],
  },
  {
    term: "Extended Thinking",
    definition: "Pro tier feature showing AI reasoning chains from models like GPT-5.2 and Claude Sonnet 4.5. Displays step-by-step thought process behind recommendations. Helps understand complex decisions and builds trust in AI suggestions.",
    category: "Features",
    relatedTerms: ["Pro Tier", "TCAM V2"],
  },
  {
    term: "Publishing Platform",
    definition: "External service where ANOTs can publish content. Includes Instagram, Facebook, Twitter, LinkedIn, WordPress, Medium, Ghost, Webflow. Free tier: 1 platform. Standard/Pro: all platforms. Connected via ActivePieces.",
    category: "Integrations",
    relatedTerms: ["ActivePieces", "ANOT"],
  },
  {
    term: "Analytics Platform",
    definition: "External service for tracking marketing performance. Includes Google Analytics, Google Ads, Facebook Ads, LinkedIn Ads, HubSpot. Free tier: 1 platform. Standard/Pro: all platforms. Connected via ActivePieces.",
    category: "Integrations",
    relatedTerms: ["ActivePieces", "Activity Hub"],
  },
  {
    term: "White Label",
    definition: "Pro tier feature allowing customization of ANOTS interface with your own branding. Useful for agencies offering ANOTS as their own service to clients. Includes custom logo, colors, and domain.",
    category: "Features",
    relatedTerms: ["Pro Tier", "Multi-Brand Support"],
  },
];

const categories = ["Core Concepts", "AI Agents", "Features", "Technical", "Integrations"] as const;

export default function GlossaryPage() {
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
                  ANOTS Glossary
                </h1>
                <p className="mt-6 text-xl text-[#D4D4D8] leading-relaxed">
                  Complete reference of terms, concepts, and features in the ANOTS platform.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Glossary Terms by Category */}
        {categories.map((category) => {
          const categoryTerms = glossaryTerms.filter(t => t.category === category);
          
          return (
            <section key={category} className="py-12 border-t border-[#1A1A1B]">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                  <h2 className="text-2xl font-bold text-[#FAFAFA] mb-8">
                    {category}
                  </h2>
                </ScrollReveal>

                <div className="grid gap-6 md:grid-cols-2">
                  {categoryTerms.map((item, index) => (
                    <ScrollReveal key={index}>
                      <Card className="border-[#1A1A1B] h-full">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold text-[#5E6AD2] mb-3">
                            {item.term}
                          </h3>
                          <p className="text-[#D4D4D8] leading-relaxed mb-4">
                            {item.definition}
                          </p>
                          {item.relatedTerms && item.relatedTerms.length > 0 && (
                            <div className="pt-4 border-t border-[#1A1A1B]">
                              <p className="text-sm text-[#A1A1AA] mb-2">Related terms:</p>
                              <div className="flex flex-wrap gap-2">
                                {item.relatedTerms.map((related, i) => (
                                  <span 
                                    key={i}
                                    className="text-xs px-2 py-1 rounded-md bg-[#1A1A1B] text-[#D4D4D8]"
                                  >
                                    {related}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

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
