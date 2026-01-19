import { Navigation } from "@/components/ui/Navigation";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const metadata = {
  title: "About",
  description: "Learn about ANOTS and our mission to make marketing automation accessible to everyone.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      
      <div className="bg-[#0A0A0B] py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight text-[#FAFAFA] sm:text-5xl">
              About ANOTS
            </h1>
            <p className="mt-6 text-xl text-[#D4D4D8]">
              Making marketing automation accessible to everyone through AI
            </p>
          </FadeIn>

          <div className="mt-16 space-y-12">
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#FAFAFA]">Our Mission</h2>
                <p className="text-lg text-[#D4D4D8]">
                  ANOTS was built to solve a simple problem: marketing automation is too complex. 
                  Traditional tools require technical knowledge, expensive consultants, and weeks of setup time.
                </p>
                <p className="text-lg text-[#D4D4D8]">
                  We believe anyone should be able to create powerful marketing automations using natural language. 
                  No code, no complexity, just results.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#FAFAFA]">The Problem We Solve</h2>
                <p className="text-lg text-[#D4D4D8]">
                  Marketing teams waste countless hours on repetitive tasks. Campaign management, 
                  signal processing, and workflow automation require specialized skills and tools.
                </p>
                <p className="text-lg text-[#D4D4D8]">
                  ANOTS changes this by providing an AI-powered platform that understands your intent 
                  and executes complex workflows automatically.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#FAFAFA]">Who We Serve</h2>
                <p className="text-lg text-[#D4D4D8]">
                  ANOTS is designed for anyone who needs marketing automation:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-[#D4D4D8] ml-4">
                  <li>Marketing agencies managing multiple clients</li>
                  <li>Growing businesses scaling their marketing efforts</li>
                  <li>Solo marketers who need powerful automation without complexity</li>
                  <li>Teams who want to focus on strategy, not technical implementation</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#FAFAFA]">Our Approach</h2>
                <p className="text-lg text-[#D4D4D8]">
                  We combine the power of AI with intuitive design. Our dual-interface architecture 
                  gives you the best of both worlds:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-[#D4D4D8] ml-4">
                  <li><strong className="text-[#FAFAFA]">Directors Console:</strong> Chat-based AI interface for natural language automation</li>
                  <li><strong className="text-[#FAFAFA]">Engine Room:</strong> Traditional dashboard for granular control when needed</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </>
  );
}
