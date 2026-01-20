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
    default: "ANOTS - Your AI Marketing Team That Never Sleeps",
    template: "%s | ANOTS",
  },
  description: "Meet ANOTS: Three AI agents (Qubik, Themis, Core) that create, review, and manage your marketing automations. Just chat, approve, and watch them work. Start free with 3 ANOTs.",
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
    title: "ANOTS - Your AI Marketing Team That Never Sleeps",
    description: "Three AI agents (Qubik, Themis, Core) that create, review, and manage your marketing automations. Start free with 3 ANOTs.",
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
    title: "ANOTS - Your AI Marketing Team That Never Sleeps",
    description: "Three AI agents that create, review, and manage your marketing automations. Start free with 3 ANOTs.",
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
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TFHJ92RC6J"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
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
