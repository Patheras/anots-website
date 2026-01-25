import type { Metadata } from "next";
import Image from "next/image";
import { Navigation } from "@/components/ui/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { PricingTiers } from "@/components/sections/PricingTiers";
import { StickyCTA } from "@/components/ui/StickyCTA";
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
  title: "ANOTS - AI Marketing Automation Platform | AI Team, Brand Room & Activity Hub",
  description: "AI marketing automation with 4 AI agents (Qubik, Themis, Athena, Hephaestus) that create, review, and execute campaigns. Brand Room automatically extracts logos, colors, fonts, and brand voice from your website, documents, and social media. Activity Hub tracks all automations. Connect to 200+ apps via ActivePieces. Start free with 3 ANOTs.",
  keywords: ["AI marketing automation", "AI team", "brand intelligence", "marketing AI agents", "brand extraction", "automated marketing", "brand standards", "AI brand analysis", "marketing workflow automation", "ActivePieces", "no-code marketing", "ANOT", "activity hub", "brand room", "qubik", "themis", "athena", "social media automation", "blog articles", "logos colors", "reviews for risks"],
  alternates: {
    canonical: "https://anots.com",
  },
  openGraph: {
    title: "ANOTS - AI Marketing Automation | AI Team + Brand Room + Activity Hub",
    description: "4 AI agents (Qubik, Themis, Athena, Hephaestus) that create, review, and execute your marketing automations. Brand Room extracts logos, colors, and brand voice. Activity Hub tracks everything. Start free with 3 ANOTs.",
    url: "https://anots.com",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  const features = [
    {
      title: "Multi-Source Brand Intelligence",
      description: "Your brand, understood by AI. Brand Room excavates your brand DNA from websites, documents, and social media. Logos, colors, Google Fonts, tone of voice—all extracted automatically.",
      icon: <BrandIcon />,
      image: "/Features/Multi-source-brand-intelligence.png",
      badge: "✨ MAGIC Import",
    },
    {
      title: "Chat with Your AI Team",
      description: "Three agents, one goal: perfect content. Qubik proposes, Themis reviews for risks, Athena synthesizes. You approve, then it runs automatically.",
      icon: <ChatIcon />,
      image: "/Features/Chat-with-your-team.png",
      badge: "🛡️ Trust by Design",
    },
    {
      title: "Track Everything",
      description: "See everything, control everything. Activity Hub shows what's running, what's scheduled, and what's been published. Daily focus view keeps you organized.",
      icon: <TrackingIcon />,
      image: "/Features/Track-everything.png",
      badge: "📊 Full Visibility",
    },
  ];

  return (
    <>
      <Navigation />
      
      <Hero
        headline="If You're Here, ANOTs Are Already Working"
        subheadline="Qubik creates. Themis reviews. Athena synthesizes. Hephaestus builds. You Approve. Then it runs automatically."
        primaryCTA={{ text: "Start Free", href: "https://app.anots.com/signup" }}
        secondaryCTA={{ text: "See How We Did It", href: "/use-cases" }}
      />

      {/* Tech Stack Grid */}
      {/* Tech Stack Grid */}
      <section className="bg-[#0A0A0B] border-y border-[#1A1A1B] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-[#52525B] mb-8">Powered by</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4">
            {/* Next.js */}
            <div className="linear-card hover-glow flex flex-col items-center justify-center p-6 aspect-square animate-fade-in" style={{ animationDelay: '0ms' }}>
              <svg className="h-8 w-8 text-[#A1A1AA] mb-3" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"/>
              </svg>
              <span className="text-xs text-[#A1A1AA] text-center">Next.js</span>
            </div>

            {/* TypeScript */}
            <div className="linear-card hover-glow flex flex-col items-center justify-center p-6 aspect-square animate-fade-in" style={{ animationDelay: '30ms' }}>
              <svg className="h-8 w-8 text-[#71717A] mb-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
              </svg>
              <span className="text-xs text-[#A1A1AA] text-center">TypeScript</span>
            </div>

            {/* Supabase */}
            <div className="linear-card hover-glow flex flex-col items-center justify-center p-6 aspect-square animate-fade-in" style={{ animationDelay: '60ms' }}>
              <svg className="h-8 w-8 text-[#71717A] mb-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.362 9.354H12V.396a12.209 12.209 0 0 1 3.746.371 12.117 12.117 0 0 1 3.523 1.368A12.298 12.298 0 0 1 21.362 4.2a12.16 12.16 0 0 1 1.703 3.047 12.042 12.042 0 0 1 .396 3.107h-1.99zM11.804 24a12.042 12.042 0 0 1-3.107-.396 12.16 12.16 0 0 1-3.047-1.703A12.298 12.298 0 0 1 3.585 19.83a12.117 12.117 0 0 1-1.368-3.523A12.209 12.209 0 0 1 1.846 12.5a12.042 12.042 0 0 1 .396-3.107 12.16 12.16 0 0 1 1.703-3.047A12.298 12.298 0 0 1 6.01 4.281a12.117 12.117 0 0 1 3.523-1.368A12.209 12.209 0 0 1 12.279 2.542V24h-.475z"/>
              </svg>
              <span className="text-xs text-[#A1A1AA] text-center">Supabase</span>
            </div>

            {/* OpenAI */}
            <div className="linear-card hover-glow flex flex-col items-center justify-center p-6 aspect-square animate-fade-in" style={{ animationDelay: '90ms' }}>
              <svg className="h-8 w-8 text-[#A1A1AA] mb-3" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
              </svg>
              <span className="text-xs text-[#A1A1AA] text-center">GPT-4</span>
            </div>

            {/* Anthropic */}
            <div className="linear-card hover-glow flex flex-col items-center justify-center p-6 aspect-square animate-fade-in" style={{ animationDelay: '120ms' }}>
              <svg className="h-8 w-8 text-[#A1A1AA] mb-3" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.4 0h3.99L14.93 24h-3.99L17.4 0zm-10.8 0h3.99L4.13 24H.14L6.6 0z"/>
              </svg>
              <span className="text-xs text-[#A1A1AA] text-center">Claude</span>
            </div>

            {/* Google */}
            <div className="linear-card hover-glow flex flex-col items-center justify-center p-6 aspect-square animate-fade-in" style={{ animationDelay: '150ms' }}>
              <svg className="h-8 w-8 text-[#A1A1AA] mb-3" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
              </svg>
              <span className="text-xs text-[#A1A1AA] text-center">Gemini</span>
            </div>

            {/* DeepSeek */}
            <div className="linear-card hover-glow flex flex-col items-center justify-center p-6 aspect-square animate-fade-in" style={{ animationDelay: '180ms' }}>
              <svg className="h-8 w-8 text-[#71717A] mb-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.073 1.853v6.914L4.146 5.62l6.781-3.767zm2.146 0l6.781 3.767-6.781 3.147V1.853zM3.394 7.097l6.781 3.147v7.767l-6.781-3.767V7.097zm9.073 3.147l6.781-3.147v7.147l-6.781 3.767v-7.767z"/>
              </svg>
              <span className="text-xs text-[#A1A1AA] text-center">DeepSeek</span>
            </div>

            {/* Ollama */}
            <div className="linear-card hover-glow flex flex-col items-center justify-center p-6 aspect-square animate-fade-in" style={{ animationDelay: '210ms' }}>
              <svg className="h-8 w-8 text-[#A1A1AA] mb-3" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.42 0C5.336 0 3.638 1.697 3.638 3.781c0 .256.026.506.076.748A3.78 3.78 0 0 0 0 8.138v7.724a3.78 3.78 0 0 0 3.714 3.609 3.781 3.781 0 0 0 7.144 0h2.284a3.781 3.781 0 0 0 7.144 0A3.78 3.78 0 0 0 24 15.862V8.138a3.78 3.78 0 0 0-3.714-3.609 3.781 3.781 0 0 0-7.144 0H10.858a3.781 3.781 0 0 0-3.438-4.529zm0 1.5c1.26 0 2.281 1.021 2.281 2.281S8.68 6.062 7.42 6.062s-2.281-1.021-2.281-2.281S6.16 1.5 7.42 1.5zm9.158 4.529c1.26 0 2.281 1.021 2.281 2.281s-1.021 2.281-2.281 2.281-2.281-1.021-2.281-2.281 1.021-2.281 2.281-2.281zM3.781 6.638c1.26 0 2.281 1.021 2.281 2.281v7.724c0 1.26-1.021 2.281-2.281 2.281S1.5 17.903 1.5 16.643V8.919c0-1.26 1.021-2.281 2.281-2.281zm16.438 0c1.26 0 2.281 1.021 2.281 2.281v7.724c0 1.26-1.021 2.281-2.281 2.281s-2.281-1.021-2.281-2.281V8.919c0-1.26 1.021-2.281 2.281-2.281zM7.42 13.781c1.26 0 2.281 1.021 2.281 2.281S8.68 18.343 7.42 18.343s-2.281-1.021-2.281-2.281 1.021-2.281 2.281-2.281zm9.158 0c1.26 0 2.281 1.021 2.281 2.281s-1.021 2.281-2.281 2.281-2.281-1.021-2.281-2.281 1.021-2.281 2.281-2.281z"/>
              </svg>
              <span className="text-xs text-[#A1A1AA] text-center">Ollama</span>
            </div>

            {/* ActivePieces */}
            <div className="linear-card hover-glow flex flex-col items-center justify-center p-6 aspect-square animate-fade-in" style={{ animationDelay: '240ms' }}>
              <svg className="h-8 w-8 text-[#71717A] mb-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm0 2.5L20.5 7.5v9L12 21.5 3.5 16.5v-9L12 2.5z"/>
              </svg>
              <span className="text-xs text-[#A1A1AA] text-center">ActivePieces</span>
            </div>
          </div>
        </div>
      </section>

      {/* See It In Action Section - Linear Style */}
      <section className="bg-[#0A0A0B] py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <ScrollReveal>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#1A1A1B] bg-[#0F0F10] px-3 py-1 mb-6">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#10B981]"></div>
                  <span className="text-xs text-[#A1A1AA]">Brand Intelligence</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAFAFA] leading-tight mb-6">
                  Extract your brand DNA automatically
                </h2>
                
                <p className="text-lg text-[#D4D4D8] leading-relaxed mb-8">
                  <span className="text-[#FAFAFA] font-semibold">Connect your sources.</span> Import your website, upload brand documents, or link social media. The Brand Room AI Council extracts logos, colors, fonts, and brand voice—all automatically.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="glow-dot glow-dot-purple mt-1.5"></div>
                    <div>
                      <h4 className="text-base font-semibold text-[#FAFAFA]">Multi-Source Intelligence</h4>
                      <p className="text-sm text-[#A1A1AA] mt-1">Website, documents (PDF/DOCX/PPTX), and Meta social accounts</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="glow-dot glow-dot-red mt-1.5"></div>
                    <div>
                      <h4 className="text-base font-semibold text-[#FAFAFA]">AI Council Review</h4>
                      <p className="text-sm text-[#A1A1AA] mt-1">Qubik, Themis, Athena, and Hephaestus validate and synthesize your brand standards</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="glow-dot glow-dot-cyan mt-1.5"></div>
                    <div>
                      <h4 className="text-base font-semibold text-[#FAFAFA]">Unified Brand Snapshot</h4>
                      <p className="text-sm text-[#A1A1AA] mt-1">Smart conflict resolution across all sources with provenance tracking</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Simple Browser Mockup */}
            <ScrollReveal>
              <div className="browser-mockup overflow-hidden rounded-xl border border-[#1A1A1B] bg-[#111113] shadow-2xl">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 border-b border-[#1A1A1B] bg-[#0F0F10] px-3 py-2">
                  {/* Traffic Lights */}
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]"></div>
                  </div>
                  {/* URL Bar */}
                  <div className="ml-3 flex-1 rounded-md bg-[#1A1A1B] px-3 py-1">
                    <div className="flex items-center gap-1.5">
                      <svg className="h-2.5 w-2.5 text-[#71717A]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                      <span className="text-[9px] text-[#A1A1AA] truncate">app.anots.com/brand-room</span>
                    </div>
                  </div>
                </div>
                {/* Browser Content - Full Height */}
                <div className="relative w-full bg-[#0A0A0B]">
                  <Image
                    src="/magic-preview.png"
                    alt="ANOTS Brand Room - MAGIC Import Interface"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Section - Linear Style */}
      <section id="features" className="bg-[#0A0A0B] py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header with Visual */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-16">
            {/* Left: Title + Description */}
            <ScrollReveal>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#1A1A1B] bg-[#0F0F10] px-3 py-1 mb-6">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#5E6AD2]"></div>
                  <span className="text-xs text-[#A1A1AA]">Features</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAFAFA] leading-tight">
                  Everything you need to automate marketing
                </h2>
                <p className="mt-6 text-lg text-[#D4D4D8] leading-relaxed">
                  From AI-powered content creation to multi-source brand intelligence, ANOTS provides all the tools you need to scale your marketing automation.
                </p>
              </div>
            </ScrollReveal>

            {/* Right: 3D Perspective Visual */}
            <ScrollReveal>
              <div className="relative perspective-1000">
                <div className="relative transform-gpu" style={{ transform: 'rotateY(-15deg) rotateX(5deg)' }}>
                  {/* Main Card - Center */}
                  <div className="relative z-10 rounded-xl border-2 border-[#5E6AD2] bg-[#0F0F10] p-6 shadow-2xl">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-[#5E6AD2]/20 flex items-center justify-center">
                          <svg className="h-4 w-4 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                          </svg>
                        </div>
                        <span className="text-sm text-[#A1A1AA]">#22319 Qubik: New ANOT</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-[#D4D4D8]">
                          <svg className="h-4 w-4 text-[#71717A]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0 118 0z" />
                          </svg>
                          <span>Instagram daily posts</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#D4D4D8]">
                          <svg className="h-4 w-4 text-[#71717A]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0 118 0z" />
                          </svg>
                          <span>Brand-consistent visuals</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#D4D4D8]">
                          <svg className="h-4 w-4 text-[#71717A]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0 118 0z" />
                          </svg>
                          <span>Themis approval required</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Background Cards */}
                  <div className="absolute -right-4 top-8 w-full rounded-xl border border-[#1A1A1B] bg-[#0A0A0B] p-6 opacity-40 blur-sm" style={{ transform: 'translateZ(-50px)' }}>
                    <div className="h-24 w-full"></div>
                  </div>
                  <div className="absolute -left-4 top-16 w-full rounded-xl border border-[#1A1A1B] bg-[#0A0A0B] p-6 opacity-20 blur-md" style={{ transform: 'translateZ(-100px)' }}>
                    <div className="h-24 w-full"></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Horizontal Scroll Cards */}
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="flex gap-6 overflow-x-scroll pb-6 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory scrollbar-hide">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="linear-card hover-glow flex-shrink-0 w-[480px] snap-start group cursor-pointer overflow-hidden"
                >
                  {/* Feature Image */}
                  {feature.image && (
                    <div className="relative w-full h-[432px] -mx-0 -mt-0 rounded-t-xl overflow-hidden bg-[#0A0A0B]">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      {/* Badge */}
                      {feature.badge && (
                        <span className="inline-flex items-center rounded-full bg-[#5E6AD2]/10 px-3 py-1 text-xs font-medium text-[#5E6AD2]">
                          {feature.badge}
                        </span>
                      )}
                      <svg className="h-5 w-5 text-[#71717A] group-hover:text-[#A1A1AA] transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-[#FAFAFA]">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-[#A1A1AA] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* See All Features Link */}
          <div className="mt-12 text-center">
            <a
              href="/features"
              className="inline-flex items-center gap-2 text-[#5E6AD2] hover:text-[#7C85E3] transition-colors group"
            >
              <span className="text-base font-medium">See all features</span>
              <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

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

          <div className="mt-12 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <ScrollReveal>
              <div className="linear-card hover-glow p-8">
                <div className="icon-container w-12 h-12 mb-6">
                  <span className="text-2xl font-bold text-[#5E6AD2]">1</span>
                </div>
                <h3 className="heading-md text-[#FAFAFA] mb-3">Chat with Your Team</h3>
                <p className="body-base text-secondary">
                  Tell your AI team what you need. "Post to Instagram daily at 10am" or "Write weekly blog articles about marketing."
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="linear-card hover-glow p-8">
                <div className="icon-container w-12 h-12 mb-6">
                  <span className="text-2xl font-bold text-[#5E6AD2]">2</span>
                </div>
                <h3 className="heading-md text-[#FAFAFA] mb-3">Review & Approve</h3>
                <p className="body-base text-secondary">
                  Qubik creates a proposal. Themis reviews for risks. Athena synthesizes both. Hephaestus builds the workflow. You see everything before approving.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="linear-card hover-glow p-8">
                <div className="icon-container w-12 h-12 mb-6">
                  <span className="text-2xl font-bold text-[#5E6AD2]">3</span>
                </div>
                <h3 className="heading-md text-[#FAFAFA] mb-3">Watch It Run</h3>
                <p className="body-base text-secondary">
                  Your ANOT runs automatically. Track everything in Activity Hub. Adjust anytime through chat.
                </p>
              </div>
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
                      <div className="glow-dot glow-dot-purple mt-1.5"></div>
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-[#9333EA]">Qubik (Creative Motor)</h4>
                        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#D4D4D8]">Generates creative proposals, content, and ideas</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="glow-dot glow-dot-red mt-1.5"></div>
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-[#DC2626]">Themis (Logic Motor)</h4>
                        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#D4D4D8]">Reviews for risks, costs, and constraints</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="glow-dot glow-dot-cyan mt-1.5"></div>
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-[#06B6D4]">Athena (Synthesizer)</h4>
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

      {/* Brand Room Section - Vertical Roadmap */}
      <section id="brand-room" className="bg-[#0F0F10] py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-24">
              <h2 className="text-[#FAFAFA]">
                How Brand Room Works
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-[#D4D4D8] px-4 sm:px-0">
                Connect your brand sources and let AI extract your brand intelligence automatically
              </p>
            </div>
          </ScrollReveal>

          {/* Vertical Timeline - Alternating Layout */}
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line - Center - Glowy Gray */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px -ml-px bg-gradient-to-b from-[#52525B] via-[#71717A] to-[#52525B] shadow-lg shadow-[#71717A]/30"></div>

            {/* Step 1 - LEFT */}
            <ScrollReveal>
              <div className="relative grid grid-cols-2 gap-8 mb-24 animate-fade-in" style={{ animationDelay: '0ms' }}>
                {/* Content - Left Side */}
                <div className="text-right pr-12">
                  <span className="inline-block text-xs font-semibold text-[#A1A1AA] tracking-wider uppercase mb-3">Step 1</span>
                  <h3 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA] mb-4">Connect Sources</h3>
                  <p className="text-base text-[#D4D4D8] leading-relaxed">
                    Import your website URL, upload brand documents (PDF, DOCX, PPTX), or connect your Meta social accounts
                  </p>
                </div>
                
                {/* Empty - Right Side */}
                <div></div>
                
                {/* Timeline Dot - Center - Glowy Gray */}
                <div className="absolute left-1/2 top-0 w-3 h-3 -ml-1.5 rounded-full bg-[#A1A1AA] border-2 border-[#0F0F10] shadow-lg shadow-[#A1A1AA]/50"></div>
              </div>
            </ScrollReveal>

            {/* Step 2 - RIGHT */}
            <ScrollReveal>
              <div className="relative grid grid-cols-2 gap-8 mb-24 animate-fade-in" style={{ animationDelay: '100ms' }}>
                {/* Empty - Left Side */}
                <div></div>
                
                {/* Content - Right Side */}
                <div className="text-left pl-12">
                  <span className="inline-block text-xs font-semibold text-[#A1A1AA] tracking-wider uppercase mb-3">Step 2</span>
                  <h3 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA] mb-4">AI Extracts Intelligence</h3>
                  <p className="text-base text-[#D4D4D8] leading-relaxed">
                    Logos, colors, fonts, brand voice, product catalog, and company context—all detected automatically
                  </p>
                </div>
                
                {/* Timeline Dot - Center - Glowy Gray */}
                <div className="absolute left-1/2 top-0 w-3 h-3 -ml-1.5 rounded-full bg-[#A1A1AA] border-2 border-[#0F0F10] shadow-lg shadow-[#A1A1AA]/50"></div>
              </div>
            </ScrollReveal>

            {/* Step 3 - LEFT */}
            <ScrollReveal>
              <div className="relative grid grid-cols-2 gap-8 mb-24 animate-fade-in" style={{ animationDelay: '200ms' }}>
                {/* Content - Left Side */}
                <div className="text-right pr-12">
                  <span className="inline-block text-xs font-semibold text-[#A1A1AA] tracking-wider uppercase mb-3">Step 3</span>
                  <h3 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA] mb-4">Council Reviews</h3>
                  <p className="text-base text-[#D4D4D8] leading-relaxed">
                    Qubik ensures creative consistency, Themis validates standards, Athena synthesizes the final brand snapshot
                  </p>
                </div>
                
                {/* Empty - Right Side */}
                <div></div>
                
                {/* Timeline Dot - Center - Glowy Gray */}
                <div className="absolute left-1/2 top-0 w-3 h-3 -ml-1.5 rounded-full bg-[#A1A1AA] border-2 border-[#0F0F10] shadow-lg shadow-[#A1A1AA]/50"></div>
              </div>
            </ScrollReveal>

            {/* Step 4 - RIGHT */}
            <ScrollReveal>
              <div className="relative grid grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
                {/* Empty - Left Side */}
                <div></div>
                
                {/* Content - Right Side */}
                <div className="text-left pl-12">
                  <span className="inline-block text-xs font-semibold text-[#A1A1AA] tracking-wider uppercase mb-3">Step 4</span>
                  <h3 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA] mb-4">Brand Standards Ready</h3>
                  <p className="text-base text-[#D4D4D8] leading-relaxed">
                    Unified brand snapshot across all sources, with smart conflict resolution and automatic updates
                  </p>
                </div>
                
                {/* Timeline Dot - Center - Glowy Gray */}
                <div className="absolute left-1/2 top-0 w-3 h-3 -ml-1.5 rounded-full bg-[#A1A1AA] border-2 border-[#0F0F10] shadow-lg shadow-[#A1A1AA]/50"></div>
              </div>
            </ScrollReveal>
          </div>

          {/* What We Extract */}
          <div className="mt-16 sm:mt-24">
            <ScrollReveal>
              <h3 className="text-center text-2xl sm:text-3xl font-semibold text-[#FAFAFA]">
                What ANOTS Can Extract From Your Brand
              </h3>
            </ScrollReveal>
            <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 md:grid-cols-3">
              <ScrollReveal>
                <Card>
                  <CardContent className="p-5">
                    <h4 className="text-base font-semibold text-[#FAFAFA] mb-3">Visual Identity</h4>
                    <ul className="space-y-1.5 text-sm text-[#A1A1AA]">
                      <li>• Logo variations and brand marks</li>
                      <li>• Color palette (primary, secondary, accent)</li>
                      <li>• Typography and font families</li>
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal>
                <Card>
                  <CardContent className="p-5">
                    <h4 className="text-base font-semibold text-[#FAFAFA] mb-3">Brand Voice & Messaging</h4>
                    <ul className="space-y-1.5 text-sm text-[#A1A1AA]">
                      <li>• Tone and communication style</li>
                      <li>• Key messaging and taglines</li>
                      <li>• Product and service descriptions</li>
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal>
                <Card>
                  <CardContent className="p-5">
                    <h4 className="text-base font-semibold text-[#FAFAFA] mb-3">Company Context</h4>
                    <ul className="space-y-1.5 text-sm text-[#A1A1AA]">
                      <li>• About summary and mission</li>
                      <li>• Product and service catalog</li>
                      <li>• Industry positioning and tags</li>
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* URL Archaeologist Technical Deep Dive Section */}
      <section className="bg-[#0A0A0B] py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#FAFAFA]">
                  URL Archaeologist: How Website Analysis Works
                </h3>
                <p className="mt-4 text-base sm:text-lg text-[#D4D4D8]">
                  Our bounded multi-page crawler extracts brand signals without overwhelming your site
                </p>
              </div>
            </ScrollReveal>

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
                    Qubik (Creative Motor) generates proposals and content. Themis (Logic Motor) reviews for risks, costs, and constraints. Athena (Synthesizer) synthesizes both perspectives and presents recommendations. Nothing runs without your approval.
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

      <StickyCTA />
    </>
  );
}
