import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";
import { Footer } from "@/components/ui/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { ChatBot } from "@/components/chat/ChatBot";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://anots.com'),
  title: {
    default: "ANOTS - If You've Heard of Us, ANOTS is Working",
    template: "%s | ANOTS",
  },
  description: "Meet ANOTS: Three AI agents (Qubik, Themis, Core) that create, review, and manage your marketing automations. Chat with your AI team, approve their proposals, and watch them execute. Brand Room extracts your brand intelligence from websites, documents, and social media automatically. Start free with 3 ANOTs.",
  keywords: [
    "AI marketing automation",
    "marketing automation platform",
    "AI marketing team",
    "ANOT",
    "Qubik",
    "Themis",
    "Core AI",
    "ActivePieces",
    "marketing AI agents",
    "automated marketing",
    "campaign automation",
    "social media automation",
    "content automation",
    "AI-powered marketing",
    "marketing orchestration",
    "no-code marketing",
    "marketing workflow",
  ],
  authors: [{ name: "ANOTS" }],
  creator: "ANOTS",
  publisher: "ANOTS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anots.com",
    siteName: "ANOTS",
    title: "ANOTS - If You've Heard of Us, ANOTS is Working",
    description: "The AI marketing team that markets itself. Every mention, every share, every conversation—powered by the same ANOTs you'll use.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ANOTS - AI Marketing Automation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ANOTS - If You've Heard of Us, ANOTS is Working",
    description: "The AI marketing team that markets itself. Every mention, every share, every conversation—powered by the same ANOTs you'll use.",
    images: ["/og-image.png"],
    creator: "@anots",
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.svg',
    shortcut: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        {/* RSS Feed */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="ANOTS Insights RSS Feed"
          href="/insights/rss.xml"
        />
        {/* Google Consent Mode v2 - Must be loaded BEFORE gtag */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              
              // Set default consent to denied (will be updated by CookieConsent component)
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'wait_for_update': 500
              });
            `,
          }}
        />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TFHJ92RC6J"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('js', new Date());
              gtag('config', 'G-TFHJ92RC6J');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        <ScrollProgress />
        <Toaster 
          position="top-center" 
          richColors
          toastOptions={{
            style: {
              background: '#0F0F10',
              border: '1px solid #1A1A1B',
              color: '#FAFAFA',
            },
            className: 'sonner-toast',
          }}
        />
        {children}
        <Footer />
        <CookieConsent />
        <ChatBot />
      </body>
    </html>
  );
}
