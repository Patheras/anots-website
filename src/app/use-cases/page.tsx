import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Use Cases - Real Marketing Automation Examples | ANOTS",
  description: "Discover how businesses use ANOTS for social media management, content marketing, email campaigns, SEO, and more. Real-world marketing automation use cases.",
  keywords: ["marketing automation use cases", "ANOT examples", "social media automation", "content marketing automation", "email automation examples"],
  openGraph: {
    title: "ANOTS Use Cases - Real Marketing Automation Examples",
    description: "See how businesses automate their marketing with ANOTS.",
    url: "https://anots.com/use-cases",
  },
};

const useCases = [
  {
    title: "Social Media Manager",
    category: "Social Media",
    description: "Post consistently across Instagram, LinkedIn, and Twitter without lifting a finger.",
    icon: "📱",
    color: "from-[#DC2626]/10 to-[#9333EA]/10",
    borderColor: "border-[#DC2626]/20",
    examples: [
      "Post to Instagram 3x daily at optimal times",
      "Share blog posts to LinkedIn automatically",
      "Tweet product updates and tips",
      "Auto-reply to comments and mentions",
      "Track engagement and adjust strategy",
    ],
    metrics: {
      time: "Save 15 hours/week",
      engagement: "+45% engagement",
      consistency: "100% posting consistency",
    },
  },
  {
    title: "Content Marketing Engine",
    category: "Content",
    description: "Generate, optimize, and publish blog content that ranks on Google.",
    icon: "✍️",
    color: "from-[#9333EA]/10 to-[#3B82F6]/10",
    borderColor: "border-[#9333EA]/20",
    examples: [
      "Write SEO-optimized blog posts weekly",
      "Research trending topics in your niche",
      "Optimize meta tags and descriptions",
      "Internal linking suggestions",
      "Publish to WordPress automatically",
    ],
    metrics: {
      time: "Save 20 hours/week",
      traffic: "+120% organic traffic",
      posts: "4-8 posts/week",
    },
  },
  {
    title: "Email Campaign Automation",
    category: "Email",
    description: "Nurture leads with personalized email sequences that convert.",
    icon: "📧",
    color: "from-[#3B82F6]/10 to-[#10B981]/10",
    borderColor: "border-[#3B82F6]/20",
    examples: [
      "Welcome series for new subscribers",
      "Weekly newsletter with curated content",
      "Product launch announcements",
      "Re-engagement campaigns",
      "Personalized recommendations",
    ],
    metrics: {
      time: "Save 10 hours/week",
      opens: "+35% open rate",
      conversions: "+28% conversion rate",
    },
  },
  {
    title: "SEO Optimization Bot",
    category: "SEO",
    description: "Monitor rankings, optimize content, and build backlinks automatically.",
    icon: "📈",
    color: "from-[#10B981]/10 to-[#F59E0B]/10",
    borderColor: "border-[#10B981]/20",
    examples: [
      "Track keyword rankings daily",
      "Identify content gaps",
      "Optimize underperforming pages",
      "Build internal linking structure",
      "Monitor competitor strategies",
    ],
    metrics: {
      time: "Save 12 hours/week",
      rankings: "+50 keywords in top 10",
      traffic: "+85% organic traffic",
    },
  },
  {
    title: "Product Launch Coordinator",
    category: "Campaign",
    description: "Orchestrate multi-channel product launches with perfect timing.",
    icon: "🚀",
    color: "from-[#F59E0B]/10 to-[#DC2626]/10",
    borderColor: "border-[#F59E0B]/20",
    examples: [
      "Coordinate social media announcements",
      "Send email campaigns to segments",
      "Update website with new features",
      "Post to Product Hunt and HackerNews",
      "Track launch metrics in real-time",
    ],
    metrics: {
      time: "Save 30 hours/launch",
      reach: "10x audience reach",
      coordination: "Perfect timing across channels",
    },
  },
  {
    title: "Customer Testimonial Collector",
    category: "Social Proof",
    description: "Automatically gather, curate, and showcase customer reviews.",
    icon: "⭐",
    color: "from-[#DC2626]/10 to-[#5E6AD2]/10",
    borderColor: "border-[#DC2626]/20",
    examples: [
      "Email happy customers for reviews",
      "Post testimonials to G2 and Capterra",
      "Create case study drafts",
      "Share reviews on social media",
      "Update website testimonials section",
    ],
    metrics: {
      time: "Save 8 hours/week",
      reviews: "+200% review volume",
      conversion: "+15% conversion rate",
    },
  },
  {
    title: "Competitive Intelligence",
    category: "Research",
    description: "Monitor competitors and stay ahead of market trends.",
    icon: "🕵️",
    color: "from-[#5E6AD2]/10 to-[#DC2626]/10",
    borderColor: "border-[#5E6AD2]/20",
    examples: [
      "Track competitor blog posts",
      "Monitor pricing changes",
      "Analyze feature releases",
      "Scrape social media activity",
      "Weekly competitive intelligence report",
    ],
    metrics: {
      time: "Save 6 hours/week",
      insights: "50+ insights/month",
      advantage: "Stay 2 weeks ahead",
    },
  },
  {
    title: "Event Promotion Machine",
    category: "Events",
    description: "Promote webinars, conferences, and events across all channels.",
    icon: "🎤",
    color: "from-[#9333EA]/10 to-[#3B82F6]/10",
    borderColor: "border-[#9333EA]/20",
    examples: [
      "Create event landing pages",
      "Send email invitations and reminders",
      "Post countdown updates on social",
      "Retarget no-shows with recordings",
      "Follow up with attendees",
    ],
    metrics: {
      time: "Save 15 hours/event",
      attendance: "+40% attendance rate",
      engagement: "+60% post-event engagement",
    },
  },
];

export default function UseCasesPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="bg-[#0A0A0B] py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#5E6AD2]/10 px-4 py-2 text-sm text-[#5E6AD2] mb-6">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
                Real-World Examples
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAFAFA]">
                How Businesses Use ANOTS
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#D4D4D8] leading-relaxed">
                From social media management to SEO optimization, see how real businesses automate their marketing with ANOTS.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="bg-[#0F0F10] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {useCases.map((useCase, index) => (
              <ScrollReveal key={index}>
                <Card className={`h-full ${useCase.borderColor} bg-gradient-to-br ${useCase.color}`}>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="text-4xl">{useCase.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-2xl font-bold text-[#FAFAFA]">{useCase.title}</h3>
                        </div>
                        <p className="text-sm text-[#71717A] mb-2">{useCase.category}</p>
                        <p className="text-[#D4D4D8]">{useCase.description}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-[#FAFAFA] mb-3">What It Does:</h4>
                      <ul className="space-y-2">
                        {useCase.examples.map((example, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#D4D4D8]">
                            <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1A1A1B]">
                      {Object.entries(useCase.metrics).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-xs text-[#71717A] uppercase tracking-wider mb-1">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                          <div className="text-sm font-semibold text-[#5E6AD2]">{value}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0B] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA]">
                Ready to Automate Your Marketing?
              </h2>
              <p className="mt-4 text-lg text-[#D4D4D8]">
                Start with 3 free ANOTs. Pick a use case and watch it work.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <a href="https://app.anots.com/signup">
                  <Button variant="primary" size="lg">
                    Start Free
                  </Button>
                </a>
                <Link href="/ideas">
                  <Button variant="secondary" size="lg">
                    Get More Ideas
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
