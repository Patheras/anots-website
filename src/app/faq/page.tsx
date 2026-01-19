import type { Metadata } from "next";
import { Navigation } from "@/components/ui/Navigation";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about ANOTS. Learn about AI marketing automation, pricing, features, and more.",
  openGraph: {
    title: "ANOTS FAQ - Frequently Asked Questions",
    description: "Get answers to common questions about ANOTS AI marketing automation platform.",
    url: "https://anots.com/faq",
  },
};

const faqs = [
  {
    question: "What is an ANOT?",
    answer: "ANOT stands for Atomic Unit of Agency - it's the smallest independent marketing automation you can create. Each ANOT is a complete marketing task like 'Post to Instagram daily at 10am' or 'Write weekly blog articles'.",
  },
  {
    question: "How does the AI team work?",
    answer: "ANOTS uses three AI agents: Qubik (Creative Motor) generates proposals, Themis (Logic Motor) reviews for risks and constraints, and Core (Guide) synthesizes both perspectives. Nothing runs without your approval.",
  },
  {
    question: "What's included in the free Standard plan?",
    answer: "The Standard plan includes an essential ANOT pack, 3 custom ANOTs, free AI models (Gemini, DeepSeek, Llama), and 1,000 AI calls per month. Perfect for exploring ANOTS.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes! You can upgrade or downgrade at any time. Changes take effect immediately, and we'll prorate any charges or credits.",
  },
  {
    question: "What AI models do you use?",
    answer: "Standard plan uses free models (Gemini, DeepSeek, Llama). Pro plan uses premium models (Claude 3.5 Sonnet, GPT-4, o1). Agency plan lets you bring your own API keys (BYOK) for maximum control.",
  },
  {
    question: "How does the approval process work?",
    answer: "Every ANOT goes through a review process: Qubik proposes, Themis reviews, Core synthesizes. You see the complete plan, estimated costs, and risks before approving. Nothing executes without your explicit approval.",
  },
  {
    question: "What platforms does ANOTS connect to?",
    answer: "ANOTS uses ActivePieces as the workflow engine, connecting to 200+ apps including Instagram, WordPress, Google Drive, Mailchimp, Twitter, LinkedIn, and more.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. We use industry-standard encryption, secure authentication, and follow best practices for data protection. Your API keys and sensitive data are encrypted at rest and in transit.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. No long-term contracts. Cancel anytime from your account settings. You'll retain access until the end of your billing period.",
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 14-day money-back guarantee for Pro and Agency plans. If you're not satisfied, contact us for a full refund.",
  },
  {
    question: "How do I get support?",
    answer: "Pro and Agency users get priority support via email (hello@anots.com) and in-app chat. Standard users can access our documentation and community forums.",
  },
  {
    question: "What's the difference between Pro and Agency?",
    answer: "Pro includes 30 ANOTs and premium AI models with credit-based billing. Agency includes unlimited ANOTs, BYOK (bring your own keys), multi-brand support, and direct billing to your AI provider.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Navigation />
      
      <div className="bg-[#0A0A0B] py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-[#FAFAFA] sm:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="mt-4 text-lg text-[#D4D4D8]">
                Everything you need to know about ANOTS
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 space-y-6">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-[#FAFAFA]">
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-[#D4D4D8]">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <FadeIn>
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold text-[#FAFAFA]">
                Still have questions?
              </h2>
              <p className="mt-4 text-[#D4D4D8]">
                Can't find the answer you're looking for? Please chat with our friendly team.
              </p>
              <div className="mt-6">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-[#5E6AD2] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#4E5AC2]"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
