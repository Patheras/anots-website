import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About - How ANOTS Markets Itself | ANOTS",
  description: "Discover how ANOTS uses its own AI marketing automation to grow. If you're reading this, ANOTS is already working.",
  keywords: ["about ANOTS", "AI marketing automation", "dogfooding", "self-marketing", "ANOT examples"],
  openGraph: {
    title: "About ANOTS - The AI Marketing Team That Markets Itself",
    description: "If you've heard of us, ANOTS is working.",
    url: "https://anots.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="bg-[#0A0A0B] py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAFAFA]">
                How Did You Find Us?
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#D4D4D8] leading-relaxed">
                Seriously, we're curious. Because however you discovered ANOTS, 
                there's a good chance one of our ANOTs made it happen.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Discovery Paths */}
      <section className="bg-[#0F0F10] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
            <ScrollReveal>
              <Card className="border-[#5E6AD2]/20 bg-gradient-to-br from-[#5E6AD2]/5 to-transparent">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-[#FAFAFA] mb-3">Google Search?</h3>
                  <p className="text-[#D4D4D8] mb-4">
                    Our <span className="text-[#5E6AD2] font-semibold">SEO ANOT</span> wrote that content. 
                    It researches keywords, writes blog posts, optimizes meta tags, and builds internal links—all automatically.
                  </p>
                  <div className="text-sm text-[#71717A]">
                    Running since: Day 1 • Posts written: 50+ • Keywords ranked: 200+
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="border-[#5E6AD2]/20 bg-gradient-to-br from-[#5E6AD2]/5 to-transparent">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">💼</div>
                  <h3 className="text-xl font-bold text-[#FAFAFA] mb-3">LinkedIn Post?</h3>
                  <p className="text-[#D4D4D8] mb-4">
                    Our <span className="text-[#5E6AD2] font-semibold">Social ANOT</span> shared it. 
                    It posts insights daily, engages with industry leaders, and tracks what resonates with our audience.
                  </p>
                  <div className="text-sm text-[#71717A]">
                    Running since: Day 1 • Posts shared: 300+ • Engagement rate: 8.5%
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="border-[#5E6AD2]/20 bg-gradient-to-br from-[#5E6AD2]/5 to-transparent">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <svg className="h-10 w-10 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#FAFAFA] mb-3">Friend Told You?</h3>
                  <p className="text-[#D4D4D8] mb-4">
                    Our <span className="text-[#5E6AD2] font-semibold">Viral ANOT</span> sparked that conversation. 
                    It creates shareable content, identifies influencers, and tracks word-of-mouth growth.
                  </p>
                  <div className="text-sm text-[#71717A]">
                    Running since: Week 2 • Viral posts: 15 • Referral traffic: 35%
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="border-[#5E6AD2]/20 bg-gradient-to-br from-[#5E6AD2]/5 to-transparent">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <svg className="h-10 w-10 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#FAFAFA] mb-3">Press Article?</h3>
                  <p className="text-[#D4D4D8] mb-4">
                    Our <span className="text-[#5E6AD2] font-semibold">PR ANOT</span> pitched that story. 
                    It identifies relevant journalists, crafts personalized pitches, and follows up at the right time.
                  </p>
                  <div className="text-sm text-[#71717A]">
                    Running since: Month 2 • Pitches sent: 100+ • Coverage: 12 publications
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Point */}
      <section className="bg-[#0A0A0B] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA] mb-6">
                If You're Reading This, ANOTS is Already Working
              </h2>
              <p className="text-lg text-[#D4D4D8] mb-8">
                We don't just build marketing automation tools. We use them. Every piece of content you see, 
                every social post, every email—it's all powered by the same ANOTs you'll create.
              </p>
              <p className="text-base text-[#A1A1AA] italic mb-8">
                That's not marketing. That's proof.
              </p>
              <div className="flex items-center justify-center gap-4">
                <a href="https://app.anots.com/signup">
                  <Button variant="primary" size="lg">
                    Start Your Own ANOTs
                  </Button>
                </a>
                <Link href="/use-cases">
                  <Button variant="secondary" size="lg">
                    See What We Built
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our ANOTs */}
      <section className="bg-[#0F0F10] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA]">
                The ANOTs That Market ANOTS
              </h2>
              <p className="mt-4 text-lg text-[#D4D4D8]">
                Here's what's running right now
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "SEO Domination",
                status: "Active",
                description: "Writes 5 blog posts/week, optimizes meta tags, builds backlinks",
                metrics: "200+ keywords ranked",
              },
              {
                name: "LinkedIn Thought Leader",
                status: "Active",
                description: "Posts daily insights, engages with 50 accounts, tracks trends",
                metrics: "8.5% engagement rate",
              },
              {
                name: "Twitter Growth Engine",
                status: "Active",
                description: "Tweets 10x daily, auto-replies, tracks follower growth",
                metrics: "300+ followers/week",
              },
              {
                name: "Email Nurture Sequence",
                status: "Active",
                description: "7-email welcome series, weekly newsletter, product updates",
                metrics: "35% open rate",
              },
              {
                name: "PR Outreach Bot",
                status: "Active",
                description: "Pitches journalists, follows up, tracks coverage",
                metrics: "12 publications",
              },
              {
                name: "Community Builder",
                status: "Active",
                description: "Monitors Reddit, HN, Twitter for mentions and opportunities",
                metrics: "50+ conversations/week",
              },
            ].map((anot, index) => (
              <ScrollReveal key={index}>
                <Card className="border-[#10B981]/20 bg-gradient-to-br from-[#10B981]/5 to-transparent">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-[#FAFAFA]">{anot.name}</h3>
                      <span className="px-2 py-1 rounded-md bg-[#10B981]/10 text-[#10B981] text-xs font-medium">
                        {anot.status}
                      </span>
                    </div>
                    <p className="text-sm text-[#D4D4D8] mb-4">{anot.description}</p>
                    <div className="flex items-center gap-2 text-xs text-[#71717A]">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                      </svg>
                      {anot.metrics}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="bg-[#0A0A0B] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Card className="border-[#5E6AD2]/20 bg-gradient-to-br from-[#5E6AD2]/5 to-transparent">
              <CardContent className="p-8 sm:p-12">
                <div className="mx-auto max-w-3xl">
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA] mb-6">
                    Why We're Telling You This
                  </h2>
                  <div className="space-y-4 text-lg text-[#D4D4D8]">
                    <p>
                      Most marketing automation companies hire marketing agencies to promote their products. 
                      We think that's backwards.
                    </p>
                    <p>
                      If our product can't market itself, why would you trust it to market your business?
                    </p>
                    <p>
                      So we built ANOTs to market ANOTS. Every blog post, social update, and email you see 
                      from us is created by the same AI agents you'll use.
                    </p>
                    <p className="text-[#5E6AD2] font-semibold">
                      This isn't a demo. This is dogfooding at scale.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0F0F10] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA]">
                Ready to Build Your Own Marketing Team?
              </h2>
              <p className="mt-4 text-lg text-[#D4D4D8]">
                Start with 3 free ANOTs. No credit card required.
              </p>
              <div className="mt-8">
                <a href="https://app.anots.com/signup">
                  <Button variant="primary" size="lg">
                    Get Started Free
                  </Button>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
