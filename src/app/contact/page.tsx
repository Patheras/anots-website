import type { Metadata } from "next";
import { Navigation } from "@/components/ui/Navigation";
import { ContactForm } from "@/components/sections/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with ANOTS. Have questions about AI marketing automation? We're here to help. Contact our team today.",
  alternates: {
    canonical: "https://anots.com/contact",
  },
  openGraph: {
    title: "Contact ANOTS - Get in Touch",
    description: "Have questions about AI marketing automation? Contact our team today.",
    url: "https://anots.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      
      <div className="bg-[#0A0A0B] py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-[#FAFAFA] sm:text-5xl">
                Get in Touch
              </h1>
              <p className="mt-4 text-lg text-[#D4D4D8]">
                Have questions? We'd love to hear from you.
              </p>
            </div>
          </FadeIn>

          <div className="mt-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#FAFAFA]">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm type="contact" />
              </CardContent>
            </Card>
          </div>

          <FadeIn delay={200}>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#5E6AD2]/10">
                  <svg className="h-6 w-6 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#FAFAFA]">Email</h3>
                <p className="mt-2 text-sm text-[#D4D4D8]">hello@anots.com</p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#5E6AD2]/10">
                  <svg className="h-6 w-6 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#FAFAFA]">Support</h3>
                <p className="mt-2 text-sm text-[#D4D4D8]">24/7 support available</p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#5E6AD2]/10">
                  <svg className="h-6 w-6 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#FAFAFA]">Office</h3>
                <p className="mt-2 text-sm text-[#D4D4D8]">Remote-first company</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
