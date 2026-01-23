import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Marketing Room - Brand Archaeologist | ANOTS",
  description: "Brand Archaeologist automatically excavates brand DNA from websites, documents, and social media. Extract logos, colors, Google Fonts, tone of voice, and layout rules—no manual entry.",
  keywords: ["Marketing Room", "Brand Archaeologist", "brand intelligence", "brand extraction", "logo detection", "color palette", "Google Fonts", "tone of voice", "layout rules"],
  alternates: {
    canonical: "https://anots.com/features/brand-room",
  },
  openGraph: {
    title: "Marketing Room - Brand Archaeologist | ANOTS",
    description: "Automatically excavate brand DNA from multiple sources with intelligent extraction.",
    url: "https://anots.com/features/brand-room",
  },
};

export default function BrandRoomPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="bg-[#0A0A0B] py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#9333EA]/10 px-4 py-2 text-sm text-[#9333EA] mb-6">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
                Intelligence Engine
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAFAFA]">
                Marketing Room: Brand Archaeologist
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#D4D4D8] leading-relaxed">
                Automatically excavate and maintain your brand DNA from websites, documents, and social media. 
                The Brand Archaeologist extracts logos, colors, fonts, tone of voice, and layout rules—no manual entry required.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Sources Grid */}
      <section className="bg-[#0F0F10] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA]">
                Three Sources, One Unified Brand DNA
              </h2>
              <p className="mt-4 text-lg text-[#D4D4D8]">
                The Brand Archaeologist intelligently excavates your brand standards from multiple sources
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-3">
            <ScrollReveal>
              <Card className="h-full border-[#5E6AD2]/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#5E6AD2]/10 text-[#5E6AD2] mb-6">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#FAFAFA] mb-4">Website Excavation</h3>
                  <p className="text-[#D4D4D8] text-sm mb-6">
                    Brand Archaeologist intelligently crawls up to 12 pages, extracting brand signals without overwhelming your site.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm text-[#D4D4D8]">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Logos: favicon, og:image, header</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-[#D4D4D8]">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Colors: CSS variables, HEX normalized</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-[#D4D4D8]">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Fonts: Google Fonts only (performance + compatibility)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-[#D4D4D8]">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Tone of Voice: hero copy, CTAs, headings</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-[#D4D4D8]">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Layout Rules: logo safe areas, positioning</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="h-full border-[#5E6AD2]/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#5E6AD2]/10 text-[#5E6AD2] mb-6">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#FAFAFA] mb-4">Document Processing</h3>
                  <p className="text-[#D4D4D8] text-sm mb-6">
                    Upload brand guidelines, presentations, and assets for comprehensive extraction.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm text-[#D4D4D8]">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Formats: PDF, DOCX, PPTX, PNG, JPG</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-[#D4D4D8]">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Text snippets for tone analysis</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-[#D4D4D8]">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Logo variations from images</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-[#D4D4D8]">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Dominant colors from visuals</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-[#D4D4D8]">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Limits: 20MB per file, 80k chars</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="h-full border-[#5E6AD2]/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#5E6AD2]/10 text-[#5E6AD2] mb-6">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#FAFAFA] mb-4">Social Media Learning</h3>
                  <p className="text-[#D4D4D8] text-sm mb-6">
                    Connect Meta accounts via OAuth to learn brand voice from your actual social presence. (Coming soon - OAuth integration in development)
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm text-[#D4D4D8]">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Meta (Facebook/Instagram) OAuth</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-[#D4D4D8]">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Profile bio + last 10 captions</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-[#D4D4D8]">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Tone patterns and CTA language</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-[#D4D4D8]">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>No illegal scraping - OAuth only</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-[#D4D4D8]">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Secure encrypted token storage</span>
                    </div>
                  </div>
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
                Let the Brand Archaeologist Excavate Your DNA
              </h2>
              <p className="mt-4 text-lg text-[#D4D4D8]">
                No manual data entry. Just connect your sources and watch the excavation begin.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <a href="https://app.anots.com/signup">
                  <Button variant="magic" size="lg">`n                    Start Free
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
