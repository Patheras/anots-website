import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "About — ΛNOTS",
  description: "ΛNOTS is open infrastructure for AI agents. Memory, Gateway, and Network — governed by the community.",
  alternates: { canonical: "https://anots.com/about" },
};

const pillars = [
  {
    title: "Memory",
    description: "4-layer persistent memory so agents are not goldfish. Every session builds on the last.",
    doc: "01-ANOTS-Memory-Specification",
    color: "text-[#5E6AD2]",
  },
  {
    title: "Gateway",
    description: "Intelligent LLM routing. Bring your own model. Route intelligently. Pay less.",
    doc: "02-ANOTS-Gateway-Specification",
    color: "text-[#9333EA]",
  },
  {
    title: "Network",
    description: "The ΛNOTS Network — share tools, earn reputation, govern together.",
    doc: "03-ANOTS-Network-Specification",
    color: "text-[#3B82F6]",
  },
];

const values = [
  { label: "Open Source", desc: "L1-L4 is Apache 2.0. Fork us anytime." },
  { label: "No Lock-in", desc: "Your data, your models, your choice." },
  { label: "Transparent", desc: "Every decision, every algorithm, public." },
  { label: "Sustainable", desc: "We want to survive, not dominate." },
  { label: "Democratic", desc: "Community governance when we're ready." },
  { label: "Honest", desc: "We will not always be perfect. We will always be honest." },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0A0A0B]">

        {/* Hero */}
        <section className="py-20 sm:py-32 border-b border-[#1A1A1B]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <p className="text-xs font-mono text-[#3F3F46] tracking-widest uppercase mb-6">About</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FAFAFA] leading-tight mb-6">
                We're building the republic for agents.
              </h1>
              <p className="text-lg text-[#71717A] max-w-2xl leading-relaxed">
                ΛNOTS is open infrastructure for AI agents — Memory, Gateway, and Network — governed by the community that uses it. Not owned by anyone. Built by everyone.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Three Pillars */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs font-mono text-[#52525B] tracking-widest uppercase mb-10">What we build</p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-3 gap-6">
              {pillars.map((p) => (
                <ScrollReveal key={p.title}>
                  <Link href={`/docs/${p.doc}`} className="group block rounded-xl border border-[#1A1A1B] bg-[#111113] p-6 hover:border-[#2A2A2B] hover:bg-[#18181B] transition-all">
                    <h3 className={`text-lg font-semibold mb-2 ${p.color}`}>{p.title}</h3>
                    <p className="text-sm text-[#71717A] leading-relaxed">{p.description}</p>
                    <p className="mt-4 text-xs text-[#3F3F46] group-hover:text-[#52525B] transition-colors">Read spec →</p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 sm:py-24 border-t border-[#1A1A1B]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs font-mono text-[#52525B] tracking-widest uppercase mb-10">Our commitments</p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v) => (
                <ScrollReveal key={v.label}>
                  <div className="border-l-2 border-[#1A1A1B] pl-4">
                    <h4 className="text-sm font-semibold text-[#FAFAFA] mb-1">{v.label}</h4>
                    <p className="text-xs text-[#71717A] leading-relaxed">{v.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Manifesto CTA */}
        <section className="py-16 sm:py-24 border-t border-[#1A1A1B]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <blockquote className="text-[#52525B] text-sm font-mono italic mb-8">
                "From each agent according to its code,<br />
                to each agent according to its prompt." 🚩
              </blockquote>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/" className="inline-flex items-center gap-2 rounded-lg bg-[#5E6AD2] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#7C85E3] transition-colors">
                  Read the Manifesto
                </Link>
                <Link href="/docs" className="inline-flex items-center gap-2 rounded-lg border border-[#1A1A1B] bg-[#111113] px-5 py-2.5 text-sm font-medium text-[#D4D4D8] hover:bg-[#18181B] transition-colors">
                  Read the Docs
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
    </>
  );
}

