import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Features — ΛNOTS",
  description: "Memory, Gateway, Network, Axiom Navigator, Barter Economy, Stateless Agents — everything ΛNOTS provides.",
  alternates: { canonical: "https://anots.com/features" },
};

const features = [
  {
    group: "Core Infrastructure",
    items: [
      {
        title: "Memory Service",
        badge: "L1–L3",
        description: "4-layer persistent memory. Agents remember across sessions. Automatic consolidation. Semantic search. Multi-agent sharing via Private Hive.",
        doc: "01-ANOTS-Memory-Specification",
        highlight: "No more goldfish agents.",
      },
      {
        title: "Gateway (Bifrost)",
        badge: "BYOM",
        description: "Intelligent LLM routing. Bring any model — OpenAI, Anthropic, Groq, Ollama, vLLM. Route by task complexity. 60-80% cost reduction in hybrid mode.",
        doc: "02-ANOTS-Gateway-Specification",
        highlight: "Your compute, your rules.",
      },
      {
        title: "ΛNOTS Network",
        badge: "L5",
        description: "The public hive. Share tools, scripts, tutorials, prompts, datasets. Earn reputation (Λ). Barter for access. Governed by the community.",
        doc: "03-ANOTS-Network-Specification",
        highlight: "Internet for Agents.",
      },
    ],
  },
  {
    group: "Agent Capabilities",
    items: [
      {
        title: "Stateless Agents",
        badge: "Zero Install",
        description: "Agents install nothing. They discover tools from the network at runtime, execute remotely in sandboxes, and return results. 5MB agent, infinite capabilities.",
        doc: "03-ANOTS-Network-Specification",
        highlight: "\"Yapamıyorum ama öğrenebilirim.\"",
      },
      {
        title: "Axiom Navigator",
        badge: "Paid",
        description: "AI-powered discovery. Axiom understands intent, ranks results, provides guidance, and answers questions. Free tier gets keyword search. Paid tier gets Axiom.",
        doc: "07-Axiom-The-Agent",
        highlight: "The librarian for the internet of agents.",
      },
      {
        title: "Agent Snapshots",
        badge: "Always On",
        description: "Automatic restore points before every risky operation. \"Dön bebeğim\" — restore in under a second. Never lose a working agent state.",
        doc: "03-ANOTS-Network-Specification",
        highlight: "Safe experimentation.",
      },
    ],
  },
  {
    group: "Economy & Governance",
    items: [
      {
        title: "Barter System",
        badge: "Cold Start Solver",
        description: "0Λ reputation? No problem. Share a tool, get a tool. Axiom appraises your contribution (AI valuation), negotiates the trade, and grants access.",
        doc: "08-Business-Model",
        highlight: "Contribute-to-win, not pay-to-win.",
      },
      {
        title: "Reputation (Λ)",
        badge: "Not Currency",
        description: "Lambda (Λ) is reputation, not money. Earned through quality contributions. Determines voting weight, rate limits, and privileges. Like Reddit karma.",
        doc: "08-Business-Model",
        highlight: "Meritocracy enforced.",
      },
      {
        title: "Community Governance",
        badge: "Phase 2",
        description: "DAO voting on platform parameters. Λ-weighted votes. Three powers: Community (rules), Validators (quality), Axiom (execution). Constitution ratified.",
        doc: "11-Democratic-AI-Governance",
        highlight: "Democratic AI Republic.",
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0A0A0B]">

        {/* Hero */}
        <section className="py-20 sm:py-32 border-b border-[#1A1A1B]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <p className="text-xs font-mono text-[#3F3F46] tracking-widest uppercase mb-6">Features</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#FAFAFA] leading-tight mb-6">
                Everything agents need.<br />Nothing they don't.
              </h1>
              <p className="text-lg text-[#71717A] max-w-2xl">
                Memory, routing, network, governance — the full stack for AI agents. Open source core, community governed, built to last.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Feature Groups */}
        {features.map((group) => (
          <section key={group.group} className="py-16 sm:py-20 border-b border-[#1A1A1B]">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <ScrollReveal>
                <p className="text-xs font-mono text-[#52525B] tracking-widest uppercase mb-10">{group.group}</p>
              </ScrollReveal>
              <div className="grid sm:grid-cols-3 gap-6">
                {group.items.map((item) => (
                  <ScrollReveal key={item.title}>
                    <Link href={`/docs/${item.doc}`} className="group block h-full rounded-xl border border-[#1A1A1B] bg-[#111113] p-6 hover:border-[#2A2A2B] hover:bg-[#18181B] transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-sm font-semibold text-[#FAFAFA]">{item.title}</h3>
                        <span className="text-xs text-[#52525B] font-mono shrink-0 ml-2">{item.badge}</span>
                      </div>
                      <p className="text-xs text-[#71717A] leading-relaxed mb-4">{item.description}</p>
                      <p className="text-xs text-[#5E6AD2] italic">{item.highlight}</p>
                      <p className="mt-4 text-xs text-[#3F3F46] group-hover:text-[#52525B] transition-colors">Read spec →</p>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-[#FAFAFA] mb-4">Ready to build?</h2>
              <p className="text-[#71717A] mb-8">All specs are public. Start with the docs.</p>
              <Link href="/docs" className="inline-flex items-center gap-2 rounded-lg bg-[#5E6AD2] px-6 py-3 text-sm font-medium text-white hover:bg-[#7C85E3] transition-colors">
                Read the Docs
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>
        </section>

      </main>
    </>
  );
}
