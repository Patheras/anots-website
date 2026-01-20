import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Activity Hub - Track All Your Marketing Automations | ANOTS",
  description: "See all your ANOTs in one place. Track running, scheduled, and published campaigns. Daily focus view keeps you organized and in control.",
  keywords: ["Activity Hub", "marketing dashboard", "campaign tracking", "ANOT management", "marketing automation tracking"],
  openGraph: {
    title: "Activity Hub - Central Command for Your Marketing | ANOTS",
    description: "Track all your ANOTs in one organized dashboard with daily focus view.",
    url: "https://anots.com/features/activity-hub",
  },
};

export default function ActivityHubPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="bg-[#0A0A0B] py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#3B82F6]/10 px-4 py-2 text-sm text-[#3B82F6] mb-6">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
                Command Center
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAFAFA]">
                Activity Hub: Your Marketing Command Center
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#D4D4D8] leading-relaxed">
                Track all your ANOTs in one organized dashboard. See what's running, scheduled, and published. 
                Daily focus view keeps you on top of your marketing automation.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-[#0F0F10] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <ScrollReveal>
              <Card className="h-full border-[#3B82F6]/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#3B82F6]/10 text-[#3B82F6] mb-6">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4">Daily Focus View</h3>
                  <p className="text-[#D4D4D8] mb-6">
                    Start each day with a clear view of what needs your attention. See pending approvals, scheduled posts, and active campaigns at a glance.
                  </p>
                  <ul className="space-y-3 text-sm text-[#D4D4D8]">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Pending approvals highlighted</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Today's scheduled posts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Active campaigns status</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Quick action buttons</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="h-full border-[#3B82F6]/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#3B82F6]/10 text-[#3B82F6] mb-6">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4">Status Tracking</h3>
                  <p className="text-[#D4D4D8] mb-6">
                    Every ANOT has a clear status. Know exactly what's happening with your marketing automations at any moment.
                  </p>
                  <ul className="space-y-3 text-sm text-[#D4D4D8]">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span><strong>Draft:</strong> Being created by AI team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span><strong>Pending:</strong> Awaiting your approval</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span><strong>Scheduled:</strong> Approved and queued</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span><strong>Published:</strong> Live and running</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="h-full border-[#3B82F6]/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#3B82F6]/10 text-[#3B82F6] mb-6">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4">Smart Filtering</h3>
                  <p className="text-[#D4D4D8] mb-6">
                    Find exactly what you need with powerful filters. Sort by status, date, platform, or campaign type.
                  </p>
                  <ul className="space-y-3 text-sm text-[#D4D4D8]">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Filter by status or platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Sort by date or priority</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Search by keyword or tag</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Save custom filter views</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="h-full border-[#3B82F6]/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#3B82F6]/10 text-[#3B82F6] mb-6">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4">Performance Insights</h3>
                  <p className="text-[#D4D4D8] mb-6">
                    See how your ANOTs are performing. Track completion rates, engagement, and identify what's working best.
                  </p>
                  <ul className="space-y-3 text-sm text-[#D4D4D8]">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Completion rate tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Engagement metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Cost per ANOT visibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Best performing campaigns</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0B] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA]">
                Stay Organized, Stay in Control
              </h2>
              <p className="mt-4 text-lg text-[#D4D4D8]">
                Start tracking your marketing automations with Activity Hub.
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
