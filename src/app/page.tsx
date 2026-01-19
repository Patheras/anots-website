import type { Metadata } from "next";
import Image from "next/image";
import { Navigation } from "@/components/ui/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { PricingTiers } from "@/components/sections/PricingTiers";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

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
      icon: (
        <svg className="h-6 w-6 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
      ),
    },
    {
      title: "Approve Before Execution",
      description: "Nothing runs without your approval. See the full plan, review risks, check costs, then decide. Trust by design.",
      icon: (
        <svg className="h-6 w-6 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
    },
    {
      title: "Create Unlimited ANOTs",
      description: "Each ANOT is a marketing automation: post to Instagram, write blog articles, send emails. Build as many as you need.",
      icon: (
        <svg className="h-6 w-6 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
    },
    {
      title: "Track Everything",
      description: "Activity Hub shows what's running, what's scheduled, and what's been published. Daily focus view keeps you organized.",
      icon: (
        <svg className="h-6 w-6 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      title: "Brand Standards Enforced",
      description: "Upload your logo and brand colors once. Every ANOT respects your brand guidelines automatically.",
      icon: (
        <svg className="h-6 w-6 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
        </svg>
      ),
    },
    {
      title: "Powered by ActivePieces",
      description: "Self-hosted workflow engine connects to 200+ apps. Instagram, WordPress, Google Drive, Mailchimp, and more.",
      icon: (
        <svg className="h-6 w-6 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
        </svg>
      ),
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
      <section className="bg-[#0A0A0B] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl">
                This is How ANOTS Works
              </h2>
              <p className="mt-6 text-lg text-[#D4D4D8]">
                Watch Qubik propose, Themis review, and Core synthesize—all before you approve
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="perspective-container">
              {/* Browser Window Mockup with Perspective */}
              <div className="browser-mockup mx-auto max-w-5xl overflow-hidden rounded-2xl border border-[#1A1A1B] bg-[#111113]">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 border-b border-[#1A1A1B] bg-[#0F0F10] px-4 py-3">
                  {/* Traffic Lights */}
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#FF5F57]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#FEBC2E]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#28C840]"></div>
                  </div>
                  {/* URL Bar */}
                  <div className="ml-4 flex-1 rounded-md bg-[#1A1A1B] px-4 py-1.5">
                    <div className="flex items-center gap-2">
                      <svg className="h-3.5 w-3.5 text-[#71717A]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                      <span className="text-xs text-[#A1A1AA]">app.anots.com/directors-console</span>
                    </div>
                  </div>
                </div>
                {/* Browser Content */}
                <div className="relative w-full overflow-hidden bg-[#0A0A0B]" style={{ height: '900px' }}>
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
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#DC2626]/10">
                      <span className="text-sm font-bold text-[#DC2626]">Q</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#FAFAFA]">Qubik Proposes</h3>
                      <p className="mt-2 text-sm text-[#D4D4D8]">
                        Creative proposals with content, visuals, and strategy
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#9333EA]/10">
                      <span className="text-sm font-bold text-[#9333EA]">T</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#FAFAFA]">Themis Reviews</h3>
                      <p className="mt-2 text-sm text-[#D4D4D8]">
                        Risk analysis, cost estimates, and constraint validation
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#3B82F6]/10">
                      <span className="text-sm font-bold text-[#3B82F6]">C</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#FAFAFA]">Core Synthesizes</h3>
                      <p className="mt-2 text-sm text-[#D4D4D8]">
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
      <section id="how-it-works" className="bg-[#0F0F10] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl">
                How ANOTS Works
              </h2>
              <p className="mt-6 text-lg text-[#D4D4D8]">
                Three simple steps from idea to execution
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <ScrollReveal>
              <Card>
                <CardContent className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#5E6AD2]/10 text-[#5E6AD2]">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#FAFAFA]">Chat with Your Team</h3>
                  <p className="mt-4 text-[#D4D4D8]">
                    Tell your AI team what you need. "Post to Instagram daily at 10am" or "Write weekly blog articles about marketing."
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card>
                <CardContent className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#5E6AD2]/10 text-[#5E6AD2]">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#FAFAFA]">Review & Approve</h3>
                  <p className="mt-4 text-[#D4D4D8]">
                    Qubik creates a proposal. Themis reviews for risks. Core synthesizes both. You see everything before approving.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card>
                <CardContent className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#5E6AD2]/10 text-[#5E6AD2]">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#FAFAFA]">Watch It Run</h3>
                  <p className="mt-4 text-[#D4D4D8]">
                    Your ANOT runs automatically. Track everything in Activity Hub. Adjust anytime through chat.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#0A0A0B] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl">
                What is an ANOT?
              </h2>
              <p className="mt-6 text-lg text-[#D4D4D8]">
                ANOT = Atomic Unit of Agency. It's the smallest independent marketing automation you can create.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <ScrollReveal>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#FAFAFA]">Examples of ANOTs</h3>
                  <ul className="mt-4 space-y-3 text-[#D4D4D8]">
                    <li className="flex items-start">
                      <svg className="mr-3 h-6 w-6 flex-shrink-0 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>"Post to Instagram every day at 10am with brand-consistent visuals"</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="mr-3 h-6 w-6 flex-shrink-0 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>"Write and publish blog articles every Monday"</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="mr-3 h-6 w-6 flex-shrink-0 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>"Send weekly newsletter to subscribers"</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="mr-3 h-6 w-6 flex-shrink-0 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>"Generate monthly performance reports"</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#FAFAFA]">Your AI Team</h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#5E6AD2]">Qubik (Creative Motor)</h4>
                      <p className="mt-1 text-sm text-[#D4D4D8]">Generates creative proposals, content, and ideas</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#5E6AD2]">Themis (Logic Motor)</h4>
                      <p className="mt-1 text-sm text-[#D4D4D8]">Reviews for risks, costs, and constraints</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#5E6AD2]">Core (Guide)</h4>
                      <p className="mt-1 text-sm text-[#D4D4D8]">Synthesizes both perspectives and guides you</p>
                    </div>
                  </div>
                  <p className="mt-6 text-sm text-[#D4D4D8]">
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
