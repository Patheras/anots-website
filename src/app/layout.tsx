import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";
import { Footer } from "@/components/ui/Footer";
import { CookieConsent } from "@/components/CookieConsent";

const geistSans = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://anots.com'),
  title: {
    default: "ANOTS - If You've Heard of Us, ANOTS is Working",
    template: "%s | ANOTS",
  },
  description: "The AI marketing team that markets itself. Every mention, every share, every conversation—powered by the same ANOTs you'll use. Start free with 3 ANOTs.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
