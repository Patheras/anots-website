import type { Metadata } from "next";
import { Navigation } from "@/components/ui/Navigation";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "FAQ - ANOTS AI Marketing Automation & Brand Intelligence",
  description: "Frequently asked questions about ANOTS: AI marketing automation, Brand Room multi-source brand intelligence, data collection limits, pricing plans, AI agents (Qubik, Themis, Core), and platform integrations. Learn how ANOTS extracts logos, colors, fonts, and brand voice from websites, documents, and social media.",
  keywords: ["ANOTS FAQ", "AI marketing automation questions", "Brand Room how it works", "brand intelligence extraction", "AI agents explained", "marketing automation pricing", "ANOT definition", "brand data collection", "multi-source brand learning"],
  openGraph: {
    title: "ANOTS FAQ - AI Marketing Automation & Brand Intelligence Questions",
    description: "Get answers about ANOTS AI marketing automation, Brand Room brand intelligence, data collection, pricing, and features.",
    url: "https://anots.com/faq",
  },
};

const faqs = [
  {
    question: "What is an ANOT?",
    answer: "ANOT stands for Atomic Unit of Agency - it's the smallest independent marketing automation you can create. Each ANOT is a complete marketing task like 'Post to Instagram daily at 10am' or 'Write weekly blog articles'. ANOTs are created through conversation with your AI team (Qubik, Themis, Core) and run automatically after your approval.",
  },
  {
    question: "How does the AI team work?",
    answer: "ANOTS uses three AI agents: Qubik (Creative Motor) generates proposals, Themis (Logic Motor) reviews for risks and constraints, and Core (Guide) synthesizes both perspectives. Nothing runs without your approval. This three-agent system ensures creative ideas are balanced with practical constraints before execution.",
  },
  {
    question: "What is Brand Room and how does it work?",
    answer: "Brand Room is ANOTS' multi-source brand intelligence system. It automatically extracts your brand standards from three sources: (1) Website - analyzes up to 12 pages for logos, colors, fonts, and brand voice, (2) Documents - processes PDF, DOCX, PPTX files for brand guidelines and visual assets, (3) Social Media - connects to Meta (Facebook/Instagram) via OAuth to learn tone from your last 10 posts. The AI Council (Qubik, Themis, Core) reviews all extracted data and creates a unified brand snapshot that powers all your ANOTs.",
  },
  {
    question: "What brand elements can ANOTS extract automatically?",
    answer: "ANOTS Brand Room extracts: Visual Identity (logo variations, color palette with primary/secondary/accent colors, typography and Google Fonts), Brand Voice (tone and communication style, key messaging and taglines, product/service descriptions), and Company Context (about summary and mission, product/service catalog, industry positioning). All extraction follows strict data limits: websites limited to 12 pages and 2MB total, documents to 20MB and 80k characters, social to bio plus 10 recent captions.",
  },
  {
    question: "How much data does Brand Room collect from my website?",
    answer: "Brand Room uses targeted signal collection, not full website scraping. Limits: Maximum 12 pages (prioritizing home, about, products, services, pricing, contact), 2MB total data, same domain only, 250KB per page HTML, 4 CSS files max (150KB total). The system focuses on brand-relevant pages and stops when limits are reached. This ensures fast processing while respecting your site's resources.",
  },
  {
    question: "Is Brand Room's data collection legal and privacy-compliant?",
    answer: "Yes. Brand Room only uses legal methods: (1) Public website data from pages you own or have permission to analyze, (2) Documents you explicitly upload, (3) Social media data via official OAuth APIs only - no illegal scraping of Instagram, LinkedIn, or Twitter. We detect tracking tags (Google Analytics, Meta Pixel) as boolean presence only, never pulling actual metrics or user data. All data is processed with your explicit consent.",
  },
  {
    question: "What's included in the free Standard plan?",
    answer: "The Standard plan includes an essential ANOT pack, 3 custom ANOTs, free AI models (Gemini, DeepSeek, Llama), 1,000 AI calls per month, and basic Brand Room access (1 website source). Perfect for exploring ANOTS and testing brand intelligence features.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes! You can upgrade or downgrade at any time. Changes take effect immediately, and we'll prorate any charges or credits. Pro plan adds 30 ANOTs and premium AI models. Agency plan adds unlimited ANOTs, BYOK (bring your own API keys), and multi-brand support.",
  },
  {
    question: "What AI models do you use?",
    answer: "Standard plan uses free models (Gemini, DeepSeek, Llama). Pro plan uses premium models (Claude 3.5 Sonnet, GPT-4, o1) with credit-based billing. Agency plan lets you bring your own API keys (BYOK) for maximum control and direct billing to your AI provider (OpenAI, Anthropic, etc.).",
  },
  {
    question: "How does the approval process work?",
    answer: "Every ANOT goes through a review process: Qubik proposes creative ideas and content, Themis reviews for risks, costs, and constraints, Core synthesizes both perspectives into a clear recommendation. You see the complete plan, estimated costs, potential risks, and brand compliance before approving. Nothing executes without your explicit approval. This ensures you maintain full control while benefiting from AI assistance.",
  },
  {
    question: "What platforms does ANOTS connect to?",
    answer: "ANOTS uses ActivePieces as the workflow engine, connecting to 200+ apps including Instagram, Facebook, Twitter, LinkedIn, WordPress, Shopify, Google Drive, Mailchimp, HubSpot, Slack, and more. Each ANOT can integrate with multiple platforms to create complex marketing workflows.",
  },
  {
    question: "Can I use Brand Room for multiple brands?",
    answer: "Multi-brand support is available on the Agency plan. You can create separate brand snapshots for different brands, each with its own sources (websites, documents, social accounts). Each brand maintains isolated brand standards, and you can switch between brands when creating ANOTs.",
  },
  {
    question: "How often does Brand Room update my brand data?",
    answer: "Brand Room sources can be manually re-synced anytime from the Sources panel. Website sources: re-crawl on demand. Document sources: upload new versions anytime. Social sources: fetch latest posts on demand. The system tracks last sync time and shows what changed. All updates go through Council review before being committed to your brand snapshot.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. We use industry-standard encryption, secure authentication, and follow best practices for data protection. Your API keys and sensitive data are encrypted at rest and in transit. Brand Room data is stored securely and only accessible to your organization. Social OAuth tokens are encrypted. We never share your brand data with third parties.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. No long-term contracts. Cancel anytime from your account settings. You'll retain access until the end of your billing period. Your brand data and ANOTs remain accessible during this time.",
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 14-day money-back guarantee for Pro and Agency plans. If you're not satisfied, contact us at hello@anots.com for a full refund. No questions asked.",
  },
  {
    question: "How do I get support?",
    answer: "Pro and Agency users get priority support via email (hello@anots.com) and in-app chat with response times under 24 hours. Standard users can access our comprehensive documentation, video tutorials, and community forums. All users can contact us through the website contact form.",
  },
  {
    question: "What's the difference between Pro and Agency?",
    answer: "Pro includes 30 ANOTs, premium AI models (Claude, GPT-4), credit-based billing, and full Brand Room access (unlimited sources). Agency includes unlimited ANOTs, BYOK (bring your own API keys for direct billing), multi-brand support (manage multiple brands), priority support, and custom integrations. Agency is ideal for marketing agencies managing multiple clients.",
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
