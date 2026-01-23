import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "200+ Integrations - Connect Everything | ANOTS",
  description: "Connect Instagram, WordPress, Google Drive, Mailchimp, and 200+ apps via ActivePieces workflow engine. Build custom workflows with no-code automation.",
  keywords: ["marketing integrations", "ActivePieces", "workflow automation", "Instagram integration", "WordPress integration", "no-code automation"],
  alternates: {
    canonical: "https://anots.com/features/integrations",
  },
  openGraph: {
    title: "200+ Integrations - Connect Your Marketing Stack | ANOTS",
    description: "Connect to Instagram, WordPress, Google Drive, and 200+ apps with no-code workflows.",
    url: "https://anots.com/features/integrations",
  },
};

export default function IntegrationsPage() {
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                </svg>
                Powered by ActivePieces
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAFAFA]">
                200+ Integrations: Connect Everything
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#D4D4D8] leading-relaxed">
                Connect Instagram, WordPress, Google Drive, Mailchimp, and 200+ apps via ActivePieces workflow engine. 
                Build custom workflows with no-code automation.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="bg-[#0F0F10] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA]">
                Popular Integrations
              </h2>
              <p className="mt-4 text-lg text-[#D4D4D8]">
                Connect the tools you already use
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {[
              { name: "Instagram", category: "Social Media" },
              { name: "WordPress", category: "CMS" },
              { name: "Google Drive", category: "Storage" },
              { name: "Mailchimp", category: "Email" },
              { name: "Slack", category: "Communication" },
              { name: "Shopify", category: "E-commerce" },
              { name: "HubSpot", category: "CRM" },
              { name: "Airtable", category: "Database" },
            ].map((integration) => (
              <ScrollReveal key={integration.name}>
                <Card className="border-[#F59E0B]/20 hover:border-[#F59E0B] transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#F59E0B]/10 text-[#F59E0B] mx-auto mb-4">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#FAFAFA] mb-1">{integration.name}</h3>
                    <p className="text-sm text-[#71717A]">{integration.category}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            <ScrollReveal>
              <Card className="h-full border-[#F59E0B]/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#F59E0B]/10 text-[#F59E0B] mb-6">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4">ActivePieces Engine</h3>
                  <p className="text-[#D4D4D8] mb-6">
                    Built on ActivePieces, the open-source workflow automation platform. Get access to 200+ pre-built integrations with no-code setup.
                  </p>
                  <ul className="space-y-3 text-sm text-[#D4D4D8]">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>200+ pre-built integrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>No-code workflow builder</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Open-source reliability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Regular updates and new apps</span>
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4">Custom Workflows</h3>
                  <p className="text-[#D4D4D8] mb-6">
                    Build complex multi-step workflows that connect multiple apps. Trigger actions, transform data, and automate your entire marketing stack.
                  </p>
                  <ul className="space-y-3 text-sm text-[#D4D4D8]">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Multi-step automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Conditional logic and branching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Data transformation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Error handling and retries</span>
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4">Secure Authentication</h3>
                  <p className="text-[#D4D4D8] mb-6">
                    Connect your accounts securely with OAuth 2.0. Your credentials are encrypted and never shared with ANOTS.
                  </p>
                  <ul className="space-y-3 text-sm text-[#D4D4D8]">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>OAuth 2.0 authentication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Encrypted credential storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Revoke access anytime</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Granular permissions</span>
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4">API & Webhooks</h3>
                  <p className="text-[#D4D4D8] mb-6">
                    Need something custom? Use webhooks and REST APIs to connect any service, even if it's not in our integration library.
                  </p>
                  <ul className="space-y-3 text-sm text-[#D4D4D8]">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Webhook triggers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>REST API calls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Custom headers and auth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#10B981] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>JSON/XML parsing</span>
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
                Connect Your Entire Marketing Stack
              </h2>
              <p className="mt-4 text-lg text-[#D4D4D8]">
                200+ integrations ready to use. Start connecting your tools today.
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
