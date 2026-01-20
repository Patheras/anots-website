import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "ANOT Library - Community Automation Templates | ANOTS",
  description: "Browse, share, and install ready-made marketing automation templates. Community-driven ANOT library with pre-built workflows for Instagram, email, blogging, and more.",
  keywords: ["ANOT library", "automation templates", "marketing templates", "community automations", "workflow marketplace", "pre-built ANOTs"],
  openGraph: {
    title: "ANOT Library - Community Automation Templates | ANOTS",
    description: "Browse and install ready-made marketing automation templates from the community.",
    url: "https://anots.com/features/anot-library",
  },
};

export default function AnotLibraryPage() {
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                Coming Soon
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAFAFA]">
                ANOT Library: Community Automation Templates
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#D4D4D8] leading-relaxed">
                Browse, install, and share ready-made marketing automation templates. 
                Why build from scratch when the community has already done it?
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-[#0F0F10] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA]">
                The Vision: Community-Driven Automation
              </h2>
              <p className="mt-4 text-lg text-[#D4D4D8]">
                Imagine a marketplace where marketers share their best automation workflows
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-3">
            <ScrollReveal>
              <Card className="h-full border-[#F59E0B]/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#F59E0B]/10 text-[#F59E0B] mb-6">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#FAFAFA] mb-4">Browse & Discover</h3>
                  <p className="text-[#D4D4D8] mb-6">
                    Search through hundreds of pre-built ANOTs. Filter by category, platform, popularity, and use case.
                  </p>
                  <ul className="space-y-3 text-sm text-[#D4D4D8]">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Categories: Social, Email, Blog, Ads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Ratings and reviews from users</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Preview workflow before installing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="h-full border-[#F59E0B]/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#F59E0B]/10 text-[#F59E0B] mb-6">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#FAFAFA] mb-4">One-Click Install</h3>
                  <p className="text-[#D4D4D8] mb-6">
                    Found the perfect ANOT? Install it with one click. Customize it to your brand, then activate.
                  </p>
                  <ul className="space-y-3 text-sm text-[#D4D4D8]">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Instant workflow import</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Auto-applies your brand standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Customize before activating</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="h-full border-[#F59E0B]/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#F59E0B]/10 text-[#F59E0B] mb-6">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#FAFAFA] mb-4">Publish & Share</h3>
                  <p className="text-[#D4D4D8] mb-6">
                    Built an amazing ANOT? Share it with the community. Get recognition, feedback, and help others succeed.
                  </p>
                  <ul className="space-y-3 text-sm text-[#D4D4D8]">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Publish your best ANOTs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Build your reputation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Get feedback from community</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Example Templates */}
      <section className="bg-[#0A0A0B] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA]">
                Example Templates (Coming Soon)
              </h2>
              <p className="mt-4 text-lg text-[#D4D4D8]">
                Here's what the community will be able to share
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Instagram 3x Weekly",
                author: "by @marketingpro",
                installs: "1.2k installs",
                rating: "4.8",
                description: "Post product photos to Instagram 3 times per week with optimal timing",
                tags: ["Social", "Instagram", "Scheduling"],
              },
              {
                name: "Blog to Newsletter",
                author: "by @contentking",
                installs: "856 installs",
                rating: "4.9",
                description: "Automatically send new blog posts as newsletter emails to subscribers",
                tags: ["Email", "Blog", "Automation"],
              },
              {
                name: "Competitor Monitor",
                author: "by @spymaster",
                installs: "2.1k installs",
                rating: "4.7",
                description: "Track competitor social posts and get weekly digest reports",
                tags: ["Research", "Monitoring", "Reports"],
              },
              {
                name: "Product Launch Kit",
                author: "by @launchexpert",
                installs: "643 installs",
                rating: "5.0",
                description: "Complete product launch sequence: social, email, blog, ads",
                tags: ["Campaign", "Multi-channel", "Launch"],
              },
              {
                name: "Daily Social Recap",
                author: "by @socialgenius",
                installs: "1.5k installs",
                rating: "4.6",
                description: "Daily summary of all social media activity and engagement",
                tags: ["Social", "Analytics", "Daily"],
              },
              {
                name: "Lead Nurture Sequence",
                author: "by @salesfunnel",
                installs: "987 installs",
                rating: "4.8",
                description: "7-day email sequence for new leads with personalization",
                tags: ["Email", "Nurture", "Sequence"],
              },
            ].map((template, index) => (
              <ScrollReveal key={index}>
                <Card className="border-[#F59E0B]/20 hover:border-[#F59E0B] transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-[#FAFAFA]">{template.name}</h3>
                      <div className="flex items-center gap-1 text-sm text-[#F59E0B]">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>{template.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-[#71717A] mb-2">{template.author}</p>
                    <p className="text-sm text-[#D4D4D8] mb-4">{template.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {template.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 rounded-md bg-[#F59E0B]/10 text-[#F59E0B] text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-xs text-[#71717A]">
                      <span>{template.installs}</span>
                      <button className="text-[#5E6AD2] hover:text-[#7C85E3] font-medium">
                        Preview →
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F0F10] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA]">
                Join the Waitlist
              </h2>
              <p className="mt-4 text-lg text-[#D4D4D8]">
                Be the first to know when ANOT Library launches. Get early access to community templates.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <a href="https://app.anots.com/signup">
                  <Button variant="primary" size="lg">
                    Start Free
                  </Button>
                </a>
                <Link href="/features">
                  <Button variant="secondary" size="lg">
                    All Features
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
