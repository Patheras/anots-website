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
  title: "Home",
  description: "Meet ANOTS: Three AI agents (Qubik, Themis, Core) that create, review, and manage your marketing automations. Just chat, approve, and watch them work.",
  openGraph: {
    title: "ANOTS - Your AI Marketing Team That Never Sleeps",
    description: "Three AI agents that create, review, and manage your marketing automations. Start free with 3 ANOTs.",
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
      title: "Brand Standards Enforced",
      description: "Upload your logo and brand colors once. Every ANOT respects your brand guidelines automatically.",
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

      <Features features={features} layout="grid" />

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
                ANOT = Atomic Unit of Agency. It's the smallest independent marketing automation you can create.
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

      <PricingTiers />
    </>
  );
}
