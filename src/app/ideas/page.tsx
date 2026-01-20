import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "AI Marketing Ideas - Inspiration for Your Next ANOT | ANOTS",
  description: "Get inspired with creative AI marketing automation ideas. From viral campaigns to growth hacks, discover what you can build with ANOTS.",
  keywords: ["AI marketing ideas", "marketing automation ideas", "ANOT inspiration", "creative marketing automation", "growth hacking ideas"],
  openGraph: {
    title: "AI Marketing Ideas - Get Inspired | ANOTS",
    description: "Creative marketing automation ideas you can build with ANOTS.",
    url: "https://anots.com/ideas",
  },
};

const ideaCategories = [
  {
    category: "Content Marketing",
    icon: "✍️",
    color: "from-[#DC2626]/10 to-[#9333EA]/10",
    ideas: [
      {
        title: "Blog Post Generator",
        description: "Write 5 SEO-optimized blog posts per week based on trending topics in your niche.",
        difficulty: "Easy",
        impact: "High",
      },
      {
        title: "Content Repurposer",
        description: "Turn one blog post into 10 social media posts, 1 email, and 1 LinkedIn article automatically.",
        difficulty: "Medium",
        impact: "High",
      },
      {
        title: "Trending Topic Tracker",
        description: "Monitor Reddit, HackerNews, and Twitter for trending topics, then create content around them.",
        difficulty: "Medium",
        impact: "Medium",
      },
      {
        title: "Guest Post Outreach",
        description: "Find relevant blogs, draft personalized pitches, and track responses automatically.",
        difficulty: "Hard",
        impact: "High",
      },
    ],
  },
  {
    category: "Social Media",
    icon: "📱",
    color: "from-[#9333EA]/10 to-[#3B82F6]/10",
    ideas: [
      {
        title: "Instagram Story Series",
        description: "Post daily Instagram stories with tips, behind-the-scenes, and product highlights.",
        difficulty: "Easy",
        impact: "Medium",
      },
      {
        title: "LinkedIn Thought Leader",
        description: "Share industry insights, comment on trending posts, and build your personal brand.",
        difficulty: "Medium",
        impact: "High",
      },
      {
        title: "Twitter Growth Engine",
        description: "Tweet 10x daily, engage with 50 accounts, and track follower growth metrics.",
        difficulty: "Medium",
        impact: "High",
      },
      {
        title: "Social Listening Bot",
        description: "Monitor brand mentions, competitor activity, and industry conversations in real-time.",
        difficulty: "Hard",
        impact: "Medium",
      },
    ],
  },
  {
    category: "Email Marketing",
    icon: "📧",
    color: "from-[#3B82F6]/10 to-[#10B981]/10",
    ideas: [
      {
        title: "Welcome Series",
        description: "7-email sequence for new subscribers with product education and social proof.",
        difficulty: "Easy",
        impact: "High",
      },
      {
        title: "Abandoned Cart Recovery",
        description: "Send personalized emails to users who didn't complete checkout with special offers.",
        difficulty: "Medium",
        impact: "High",
      },
      {
        title: "Re-engagement Campaign",
        description: "Win back inactive subscribers with targeted content and exclusive offers.",
        difficulty: "Medium",
        impact: "Medium",
      },
      {
        title: "Behavioral Triggers",
        description: "Send emails based on user actions: downloads, page visits, feature usage, etc.",
        difficulty: "Hard",
        impact: "High",
      },
    ],
  },
  {
    category: "SEO & Growth",
    icon: "📈",
    color: "from-[#10B981]/10 to-[#F59E0B]/10",
    ideas: [
      {
        title: "Keyword Opportunity Finder",
        description: "Identify low-competition, high-volume keywords and create content targeting them.",
        difficulty: "Medium",
        impact: "High",
      },
      {
        title: "Backlink Builder",
        description: "Find broken links on relevant sites and pitch your content as replacement.",
        difficulty: "Hard",
        impact: "High",
      },
      {
        title: "Internal Linking Optimizer",
        description: "Analyze your site and suggest internal links to improve SEO and user experience.",
        difficulty: "Medium",
        impact: "Medium",
      },
      {
        title: "Competitor Content Gap",
        description: "Find topics your competitors rank for but you don't, then create better content.",
        difficulty: "Hard",
        impact: "High",
      },
    ],
  },
  {
    category: "Viral & Creative",
    icon: "🚀",
    color: "from-[#F59E0B]/10 to-[#DC2626]/10",
    ideas: [
      {
        title: "Meme Generator",
        description: "Create industry-specific memes based on trending formats and post to social media.",
        difficulty: "Easy",
        impact: "Medium",
      },
      {
        title: "Daily Tip Bot",
        description: "Share one actionable tip every day across all social channels with consistent branding.",
        difficulty: "Easy",
        impact: "Medium",
      },
      {
        title: "Challenge Campaign",
        description: "Launch a 30-day challenge, send daily emails, track participation, and showcase winners.",
        difficulty: "Medium",
        impact: "High",
      },
      {
        title: "User-Generated Content Curator",
        description: "Find and reshare customer content, tag them, and build community engagement.",
        difficulty: "Medium",
        impact: "High",
      },
    ],
  },
  {
    category: "Analytics & Reporting",
    icon: "📊",
    color: "from-[#DC2626]/10 to-[#5E6AD2]/10",
    ideas: [
      {
        title: "Weekly Performance Digest",
        description: "Compile metrics from all channels into one beautiful email report every Monday.",
        difficulty: "Medium",
        impact: "Medium",
      },
      {
        title: "Anomaly Detector",
        description: "Alert you when traffic, conversions, or engagement drops/spikes unexpectedly.",
        difficulty: "Hard",
        impact: "High",
      },
      {
        title: "Competitor Benchmark",
        description: "Track competitor metrics and compare them to yours in a monthly report.",
        difficulty: "Hard",
        impact: "Medium",
      },
      {
        title: "ROI Calculator",
        description: "Calculate and report ROI for each marketing channel and campaign automatically.",
        difficulty: "Medium",
        impact: "High",
      },
    ],
  },
];

export default function IdeasPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="bg-[#0A0A0B] py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B]/10 px-4 py-2 text-sm text-[#F59E0B] mb-6">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
                Get Inspired
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAFAFA]">
                AI Marketing Ideas
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#D4D4D8] leading-relaxed">
                Creative automation ideas you can build with ANOTS. From content marketing to viral campaigns, 
                discover what's possible when AI handles your marketing.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Ideas by Category */}
      <section className="bg-[#0F0F10] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {ideaCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <ScrollReveal>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-4xl">{category.icon}</span>
                    <h2 className="text-3xl font-bold text-[#FAFAFA]">{category.category}</h2>
                  </div>
                </ScrollReveal>

                <div className="grid gap-6 md:grid-cols-2">
                  {category.ideas.map((idea, ideaIndex) => (
                    <ScrollReveal key={ideaIndex}>
                      <Card className={`h-full border-[#1A1A1B] bg-gradient-to-br ${category.color} hover:border-[#5E6AD2] transition-colors`}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-lg font-bold text-[#FAFAFA]">{idea.title}</h3>
                            <div className="flex gap-2">
                              <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                                idea.difficulty === 'Easy' ? 'bg-[#10B981]/10 text-[#10B981]' :
                                idea.difficulty === 'Medium' ? 'bg-[#F59E0B]/10 text-[#F59E0B]' :
                                'bg-[#DC2626]/10 text-[#DC2626]'
                              }`}>
                                {idea.difficulty}
                              </span>
                              <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                                idea.impact === 'High' ? 'bg-[#5E6AD2]/10 text-[#5E6AD2]' :
                                'bg-[#71717A]/10 text-[#71717A]'
                              }`}>
                                {idea.impact} Impact
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-[#D4D4D8] leading-relaxed">{idea.description}</p>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meta Section */}
      <section className="bg-[#0A0A0B] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Card className="border-[#5E6AD2]/20 bg-gradient-to-br from-[#5E6AD2]/5 to-transparent">
              <CardContent className="p-8 sm:p-12">
                <div className="mx-auto max-w-3xl text-center">
                  <div className="text-4xl mb-6">🤖</div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA] mb-4">
                    Meta Idea: ANOTS Markets Itself
                  </h2>
                  <p className="text-lg text-[#D4D4D8] mb-6">
                    Want to see the ultimate ANOT in action? We use ANOTS to market ANOTS. 
                    Every blog post, social media update, and email campaign you see from us is powered by our own ANOTs.
                  </p>
                  <p className="text-base text-[#A1A1AA] italic mb-8">
                    "If you've heard of us, ANOTS is working."
                  </p>
                  <Link href="/use-cases">
                    <Button variant="primary" size="lg">
                      See How We Do It
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F0F10] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA]">
                Turn Ideas Into Reality
              </h2>
              <p className="mt-4 text-lg text-[#D4D4D8]">
                Pick an idea, describe it to your AI team, and watch them build it.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <a href="https://app.anots.com/signup">
                  <Button variant="primary" size="lg">
                    Start Building
                  </Button>
                </a>
                <Link href="/features">
                  <Button variant="secondary" size="lg">
                    Explore Features
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
