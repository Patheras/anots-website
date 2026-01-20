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
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
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
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
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
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
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
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
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
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
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
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
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
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
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
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
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
