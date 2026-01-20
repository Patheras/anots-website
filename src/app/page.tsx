import type { Metadata } from "next";
import Image from "next/image";
import { Navigation } from "@/components/ui/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { PricingTiers } from "@/components/sections/PricingTiers";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { QubikIcon, ThemisIcon, CoreIcon } from "@/components/infographics/AgentIcons";
import { 
  ChatIcon, 
  ApprovalIcon, 
  UnlimitedIcon, 
  TrackingIcon, 
  BrandIcon, 
  IntegrationIcon 
} from "@/components/infographics/FeatureIcons";

export const metadata: Metadata = {
  title: "ANOTS - AI Marketing Team with Multi-Source Brand Intelligence",
  description: "Three AI agents (Qubik, Themis, Core) that create, review, and manage your marketing automations. Brand Room learns from your website, documents, and social media to extract logos, colors, fonts, and brand voice automatically.",
  keywords: ["AI marketing automation", "brand intelligence", "marketing AI agents", "brand extraction", "automated marketing", "brand standards", "AI brand analysis", "marketing workflow automation"],
  openGraph: {
    title: "ANOTS - Your AI Marketing Team That Never Sleeps",
    description: "Three AI agents that create, review, and manage your marketing automations. Brand Room extracts your brand intelligence from multiple sources automatically.",
    url: "https://anots.com",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  const features = [
    {
      title: "Chat with Your AI Team",
      description: "Tell Qubik what you need. It creates proposals. Themis reviews for risks. Core synthesizes and presents to you.",
      icon: <ChatIcon />,
    },
    {
      title: "Approve Before Execution",
      description: "Nothing runs without your approval. See the full plan, review risks, check costs, then decide. Trust by design.",
      icon: <ApprovalIcon />,
    },
    {
      title: "Create Unlimited ANOTs",
      description: "Each ANOT is a marketing automation: post to Instagram, write blog articles, send emails. Build as many as you need.",
      icon: <UnlimitedIcon />,
    },
    {
      title: "Track Everything",
      description: "Activity Hub shows what's running, what's scheduled, and what's been published. Daily focus view keeps you organized.",
      icon: <TrackingIcon />,
    },
    {
      title: "Multi-Source Brand Intelligence",
      description: "ANOTS learns your brand from your website, documents, and social presence. Logos, colors, fonts, voice, and messaging—all extracted automatically.",
      icon: <BrandIcon />,
    },
    {
      title: "Powered by ActivePieces",
      description: "Self-hosted workflow engine connects to 200+ apps. Instagram, WordPress, Google Drive, Mailchimp, and more.",
      icon: <IntegrationIcon />,
    },
  ];

  return (
    <>
      <Navigation />
      
      <Hero
        headline="Your AI Marketing Team That Never Sleeps"
        subheadline="Meet ANOTS: Three AI agents (Qubik, Themis, Core) that create, review, and manage your marketing automations. Just chat, approve, and watch them work."
        primaryCTA={{ text: "Start Free - 3 ANOTs", href: "https://app.anots.com/signup" }}
        secondaryCTA={{ text: "See How It Works", href: "#how-it-works" }}
      />

      {/* See It In Action Section */}
      <section className="bg-[#0A0A0B] py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-[#FAFAFA]">
                This is How ANOTS Works
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-[#D4D4D8] px-4 sm:px-0">
                Watch Qubik propose, Themis review, and Core synthesize—all before you approve
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="perspective-container">
              {/* Browser Window Mockup with Perspective */}
              <div className="browser-mockup mx-auto max-w-5xl overflow-hidden rounded-lg sm:rounded-2xl border border-[#1A1A1B] bg-[#111113]">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 border-b border-[#1A1A1B] bg-[#0F0F10] px-3 sm:px-4 py-2 sm:py-3">
                  {/* Traffic Lights */}
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#FF5F57]"></div>
                    <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#FEBC2E]"></div>
                    <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#28C840]"></div>
                  </div>
                  {/* URL Bar */}
                  <div className="ml-2 sm:ml-4 flex-1 rounded-md bg-[#1A1A1B] px-2 sm:px-4 py-1 sm:py-1.5">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#71717A]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                      <span className="text-[10px] sm:text-xs text-[#A1A1AA] truncate">app.anots.com/directors-console</span>
                    </div>
                  </div>
                </div>
                {/* Browser Content */}
                <div className="relative w-full overflow-hidden bg-[#0A0A0B]" style={{ height: '500px', maxHeight: '70vh' }}>
                  <Image
                    src="/directors-console-preview.png"
                    alt="ANOTS Directors Console - Qubik Proposal and Themis Analysis"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 sm:mt-16 grid gap-4 sm:gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <QubikIcon size={40} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-[#FAFAFA]">Qubik Proposes</h3>
                      <p className="mt-1.5 sm:mt-2 text-sm leading-relaxed text-[#D4D4D8]">
                        Creative proposals with content, visuals, and strategy
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <ThemisIcon size={40} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-[#FAFAFA]">Themis Reviews</h3>
                      <p className="mt-1.5 sm:mt-2 text-sm leading-relaxed text-[#D4D4D8]">
                        Risk analysis, cost estimates, and constraint validation
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <CoreIcon size={40} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-[#FAFAFA]">Core Synthesizes</h3>
                      <p className="mt-1.5 sm:mt-2 text-sm leading-relaxed text-[#D4D4D8]">
                        Combined perspective and clear recommendation for you
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Features features={features} layout="grid" id="features" />

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-[#0F0F10] py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-[#FAFAFA]">
                How ANOTS Works
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-[#D4D4D8] px-4 sm:px-0">
                Three simple steps from idea to execution
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 sm:mt-20 grid gap-6 sm:gap-8 md:grid-cols-3">
            <ScrollReveal>
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#5E6AD2]/10 text-[#5E6AD2]">
                    <span className="text-xl sm:text-2xl font-bold">1</span>
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-[#FAFAFA]">Chat with Your Team</h3>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[#D4D4D8]">
                    Tell your AI team what you need. "Post to Instagram daily at 10am" or "Write weekly blog articles about marketing."
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#5E6AD2]/10 text-[#5E6AD2]">
                    <span className="text-xl sm:text-2xl font-bold">2</span>
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-[#FAFAFA]">Review & Approve</h3>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[#D4D4D8]">
                    Qubik creates a proposal. Themis reviews for risks. Core synthesizes both. You see everything before approving.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#5E6AD2]/10 text-[#5E6AD2]">
                    <span className="text-xl sm:text-2xl font-bold">3</span>
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-[#FAFAFA]">Watch It Run</h3>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[#D4D4D8]">
                    Your ANOT runs automatically. Track everything in Activity Hub. Adjust anytime through chat.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#0A0A0B] py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-[#FAFAFA]">
                What is an ANOT?
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-[#D4D4D8] px-4 sm:px-0">
                ANOT = Atomic Unit of Agency. It's the smallest independent marketing automation you can create. Each ANOT represents a complete, self-contained marketing task that runs automatically after your approval. ANOTs are created through natural language conversation with your AI team and can be modified, paused, or deleted anytime.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 sm:mt-20 grid gap-6 sm:gap-8 md:grid-cols-2">
            <ScrollReveal>
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#FAFAFA]">Examples of ANOTs</h3>
                  <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-[#D4D4D8]">
                    <li className="flex items-start">
                      <svg className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm sm:text-base leading-relaxed">"Post to Instagram every day at 10am with brand-consistent visuals"</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm sm:text-base leading-relaxed">"Write and publish blog articles every Monday"</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm sm:text-base leading-relaxed">"Send weekly newsletter to subscribers"</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm sm:text-base leading-relaxed">"Generate monthly performance reports"</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#FAFAFA]">Your AI Team</h3>
                  <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <QubikIcon size={40} />
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-[#DC2626]">Qubik (Creative Motor)</h4>
                        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#D4D4D8]">Generates creative proposals, content, and ideas</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <ThemisIcon size={40} />
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-[#9333EA]">Themis (Logic Motor)</h4>
                        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#D4D4D8]">Reviews for risks, costs, and constraints</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <CoreIcon size={40} />
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-[#3B82F6]">Core (Guide)</h4>
                        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#D4D4D8]">Synthesizes both perspectives and guides you</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 sm:mt-6 text-xs sm:text-sm leading-relaxed text-[#D4D4D8]">
                    Together, they create ANOTs that work for you 24/7.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Brand Room Section */}
      <section id="brand-room" className="bg-[#0F0F10] py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-[#FAFAFA]">
                How Brand Room Works
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-[#D4D4D8] px-4 sm:px-0">
                Connect your brand sources and let AI extract your brand intelligence automatically
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 sm:mt-20 grid gap-6 sm:gap-8 lg:grid-cols-4">
            <ScrollReveal>
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#5E6AD2]/10 text-[#5E6AD2]">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-[#FAFAFA]">Connect Sources</h3>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[#D4D4D8]">
                    Import your website URL, upload brand documents (PDF, DOCX, PPTX), or connect your Meta social accounts
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#5E6AD2]/10 text-[#5E6AD2]">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-[#FAFAFA]">AI Extracts Intelligence</h3>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[#D4D4D8]">
                    Logos, colors, fonts, brand voice, product catalog, and company context—all detected automatically
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#5E6AD2]/10 text-[#5E6AD2]">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-[#FAFAFA]">Council Reviews</h3>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[#D4D4D8]">
                    Qubik ensures creative consistency, Themis validates standards, Core synthesizes the final brand snapshot
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#5E6AD2]/10 text-[#5E6AD2]">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-[#FAFAFA]">Brand Standards Ready</h3>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[#D4D4D8]">
                    Unified brand snapshot across all sources, with smart conflict resolution and automatic updates
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* What We Extract */}
          <ScrollReveal>
            <div className="mt-16 sm:mt-24">
              <h3 className="text-center text-2xl sm:text-3xl font-semibold text-[#FAFAFA]">
                What ANOTS Can Extract From Your Brand
              </h3>
              <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 md:grid-cols-3">
                <Card>
                  <CardContent className="p-6 sm:p-8">
                    <h4 className="text-base sm:text-lg font-semibold text-[#FAFAFA]">Visual Identity</h4>
                    <ul className="mt-4 space-y-2 text-sm sm:text-base text-[#D4D4D8]">
                      <li className="flex items-start">
                        <svg className="mr-2 h-5 w-5 flex-shrink-0 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        Logo variations and brand marks
                      </li>
                      <li className="flex items-start">
                        <svg className="mr-2 h-5 w-5 flex-shrink-0 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        Color palette (primary, secondary, accent)
                      </li>
                      <li className="flex items-start">
                        <svg className="mr-2 h-5 w-5 flex-shrink-0 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        Typography and font families
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 sm:p-8">
                    <h4 className="text-base sm:text-lg font-semibold text-[#FAFAFA]">Brand Voice & Messaging</h4>
                    <ul className="mt-4 space-y-2 text-sm sm:text-base text-[#D4D4D8]">
                      <li className="flex items-start">
                        <svg className="mr-2 h-5 w-5 flex-shrink-0 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        Tone and communication style
                      </li>
                      <li className="flex items-start">
                        <svg className="mr-2 h-5 w-5 flex-shrink-0 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        Key messaging and taglines
                      </li>
                      <li className="flex items-start">
                        <svg className="mr-2 h-5 w-5 flex-shrink-0 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        Product and service descriptions
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 sm:p-8">
                    <h4 className="text-base sm:text-lg font-semibold text-[#FAFAFA]">Company Context</h4>
                    <ul className="mt-4 space-y-2 text-sm sm:text-base text-[#D4D4D8]">
                      <li className="flex items-start">
                        <svg className="mr-2 h-5 w-5 flex-shrink-0 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        About summary and mission
                      </li>
                      <li className="flex items-start">
                        <svg className="mr-2 h-5 w-5 flex-shrink-0 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        Product and service catalog
                      </li>
                      <li className="flex items-start">
                        <svg className="mr-2 h-5 w-5 flex-shrink-0 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        Industry positioning and tags
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollReveal>

          {/* Data Collection Info */}
          <ScrollReveal>
            <div className="mt-12 sm:mt-16">
              <Card className="border-[#1A1A1B] bg-[#111113]">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-[#FAFAFA]">Smart Data Collection</h4>
                      <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#D4D4D8]">
                        We don't "read your entire website"—we collect targeted brand signals. <strong>Website:</strong> 12 pages max, 2MB total, same domain only (home, about, products, pricing). <strong>Documents:</strong> 20MB max, 80k character snippets. <strong>Social:</strong> Meta bio + last 10 captions only. No illegal scraping, OAuth required for social.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>

          {/* URL Archaeologist Technical Deep Dive */}
          <ScrollReveal>
            <div className="mt-16 sm:mt-24">
              <div className="mx-auto max-w-4xl">
                <div className="text-center mb-12">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#FAFAFA]">
                    URL Archaeologist: How Website Analysis Works
                  </h3>
                  <p className="mt-4 text-base sm:text-lg text-[#D4D4D8]">
                    Our bounded multi-page crawler extracts brand signals without overwhelming your site
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-[#1A1A1B] bg-[#111113]">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-[#FAFAFA] mb-4">Intelligent Page Selection</h4>
                      <div className="space-y-3 text-sm text-[#D4D4D8]">
                        <div className="flex items-start gap-2">
                          <span className="text-[#5E6AD2] font-mono">1.</span>
                          <span>Starts from your homepage</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#5E6AD2] font-mono">2.</span>
                          <span>Prioritizes: about, company, products, services, solutions, pricing, contact</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#5E6AD2] font-mono">3.</span>
                          <span>Skips: blog, news, careers, terms, privacy, login, admin</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#5E6AD2] font-mono">4.</span>
                          <span>Stops at 12 pages or 2MB total</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-[#1A1A1B] bg-[#111113]">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-[#FAFAFA] mb-4">Strict Safety Limits</h4>
                      <div className="space-y-3 text-sm text-[#D4D4D8]">
                        <div className="flex items-start gap-2">
                          <svg className="h-5 w-5 flex-shrink-0 text-[#10B981]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                          </svg>
                          <span>Same-origin only (same domain + scheme)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg className="h-5 w-5 flex-shrink-0 text-[#10B981]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                          </svg>
                          <span>10s timeout (aborts if exceeded)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg className="h-5 w-5 flex-shrink-0 text-[#10B981]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                          </svg>
                          <span>Max 5 redirects with SSRF validation</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg className="h-5 w-5 flex-shrink-0 text-[#10B981]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                          </svg>
                          <span>Blocks localhost, private IPs, file://</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mt-6 border-[#1A1A1B] bg-[#111113]">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-[#FAFAFA] mb-4">What Gets Extracted (No LLM, No Full HTML Dumps)</h4>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h5 className="text-sm font-semibold text-[#A1A1AA] uppercase tracking-wider mb-3">From Each Page</h5>
                        <ul className="space-y-2 text-sm text-[#D4D4D8]">
                          <li className="flex items-start gap-2">
                            <span className="text-[#5E6AD2]">•</span>
                            <span>Title + meta description</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#5E6AD2]">•</span>
                            <span>H1 and top 2-3 headings</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#5E6AD2]">•</span>
                            <span>3 short text snippets (160-220 chars): hero, about, product, CTA, footer</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-[#A1A1AA] uppercase tracking-wider mb-3">Brand Assets</h5>
                        <ul className="space-y-2 text-sm text-[#D4D4D8]">
                          <li className="flex items-start gap-2">
                            <span className="text-[#5E6AD2]">•</span>
                            <span>Logo candidates: favicon, og:image, header logos</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#5E6AD2]">•</span>
                            <span>Colors: CSS variables + inline styles (HEX normalized)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#5E6AD2]">•</span>
                            <span>Fonts: font-family declarations (Google Fonts only)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#5E6AD2]">•</span>
                            <span>Tracking: GA4/gtag, Meta Pixel (boolean presence only)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6 flex items-start gap-3 p-4 rounded-lg bg-[#5E6AD2]/5 border border-[#5E6AD2]/20">
                  <svg className="h-5 w-5 flex-shrink-0 text-[#5E6AD2] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <div className="text-sm text-[#D4D4D8]">
                    <strong className="text-[#FAFAFA]">Deterministic & Traceable:</strong> Every extracted signal includes provenance (which page, which source). Conflicts are surfaced for manual resolution. No raw HTML is stored or sent to LLMs—only compact, structured signals.
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick FAQ Section */}
      <section className="bg-[#0A0A0B] py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-[#FAFAFA]">
                Common Questions About ANOTS
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-[#D4D4D8] px-4 sm:px-0">
                Quick answers to help you understand how ANOTS works
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 md:grid-cols-2">
            <ScrollReveal>
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#FAFAFA]">What is Brand Room?</h3>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[#D4D4D8]">
                    Brand Room automatically extracts your brand standards from three sources: your website (logos, colors, fonts), documents (PDF/DOCX/PPTX brand guidelines), and social media (Meta via OAuth for tone analysis). The AI Council reviews everything and creates a unified brand snapshot.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#FAFAFA]">How much data does it collect?</h3>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[#D4D4D8]">
                    We use targeted signal collection: Website (12 pages max, 2MB total, same domain), Documents (20MB max, 80k characters), Social (Meta bio + 10 recent posts). No illegal scraping—only OAuth APIs for social media.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#FAFAFA]">What are the three AI agents?</h3>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[#D4D4D8]">
                    Qubik (Creative Motor) generates proposals and content. Themis (Logic Motor) reviews for risks, costs, and constraints. Core (Guide) synthesizes both perspectives and presents recommendations. Nothing runs without your approval.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#FAFAFA]">What can I automate with ANOTs?</h3>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[#D4D4D8]">
                    Each ANOT is a complete marketing automation: daily Instagram posts, weekly blog articles, email newsletters, performance reports, social media scheduling, content generation, and more. Connect to 200+ apps via ActivePieces.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="mt-12 text-center">
              <a
                href="/faq"
                className="inline-flex items-center text-[#5E6AD2] hover:text-[#7C85E3] transition-colors"
              >
                <span className="text-base sm:text-lg font-medium">View all FAQs</span>
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <PricingTiers />
    </>
  );
}
