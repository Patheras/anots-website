import type { Metadata } from "next";
import { Navigation } from "@/components/ui/Navigation";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ANOTS Terms of Service. Read our terms and conditions for using the ANOTS platform.",
  openGraph: {
    title: "ANOTS Terms of Service",
    description: "Read our terms and conditions for using the ANOTS platform.",
    url: "https://anots.com/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <Navigation />
      
      <div className="bg-[#0A0A0B] py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-[#FAFAFA] sm:text-5xl">
                Terms of Service
              </h1>
              <p className="mt-4 text-lg text-[#D4D4D8]">
                Last updated: January 19, 2026
              </p>
            </div>
          </FadeIn>

          <div className="prose prose-invert mt-16 max-w-none">
            <div className="space-y-8 text-[#D4D4D8]">
              <section>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">1. Introduction</h2>
                <p className="mt-4">
                  Welcome to ANOTS. These Terms of Service ("Terms") govern your access to and use of the ANOTS platform, including our website, applications, and services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">2. Acceptance of Terms</h2>
                <p className="mt-4">
                  By creating an account or using the Service, you confirm that you:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Are at least 18 years old</li>
                  <li>Have the legal capacity to enter into these Terms</li>
                  <li>Will comply with all applicable laws and regulations</li>
                  <li>Agree to our Privacy Policy</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">3. User Accounts</h2>
                <p className="mt-4">
                  To use ANOTS, you must create an account. You are responsible for:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized access</li>
                  <li>Providing accurate and complete information</li>
                  <li>Keeping your account information up to date</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">4. Service Description</h2>
                <p className="mt-4">
                  ANOTS provides an AI-powered marketing automation platform featuring:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li><strong>Qubik:</strong> Strategic planning and proposal generation</li>
                  <li><strong>Themis:</strong> Proposal analysis and feedback</li>
                  <li><strong>Core:</strong> Campaign execution and workflow automation</li>
                  <li><strong>Directors Console:</strong> Oversight and management interface</li>
                  <li><strong>Engine Room:</strong> Campaign execution environment</li>
                </ul>
                <p className="mt-4">
                  Service features and availability may vary by subscription tier.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">5. User Responsibilities</h2>
                <p className="mt-4">You agree NOT to:</p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Use the Service for any illegal or unauthorized purpose</li>
                  <li>Violate any laws in your jurisdiction</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit malicious code, viruses, or harmful content</li>
                  <li>Attempt to gain unauthorized access to the Service</li>
                  <li>Interfere with or disrupt the Service</li>
                  <li>Use the Service to send spam or unsolicited communications</li>
                  <li>Scrape, crawl, or harvest data from the Service</li>
                  <li>Reverse engineer or decompile the Service</li>
                  <li>Resell or redistribute the Service without authorization</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">6. Intellectual Property</h2>
                <p className="mt-4">
                  All content, features, and functionality of the Service are owned by ANOTS and protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="mt-4">
                  <strong>Your Content:</strong> You retain ownership of content you create using ANOTS. By using the Service, you grant us a license to use, store, and process your content solely to provide the Service.
                </p>
                <p className="mt-4">
                  <strong>AI-Generated Content:</strong> Content generated by our AI agents is provided to you for your use. You are responsible for reviewing and ensuring compliance with applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">7. Payment Terms</h2>
                <p className="mt-4">
                  <strong>Subscription Plans:</strong> ANOTS offers Free, Standard ($9.90/month), and Pro ($49.90/month) plans.
                </p>
                <p className="mt-4">
                  <strong>Billing:</strong> Paid subscriptions are billed monthly in advance. You authorize us to charge your payment method on file.
                </p>
                <p className="mt-4">
                  <strong>Price Changes:</strong> We may change pricing with 30 days' notice. Continued use after price changes constitutes acceptance.
                </p>
                <p className="mt-4">
                  <strong>Taxes:</strong> Prices do not include applicable taxes. You are responsible for all taxes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">8. Cancellation and Refunds</h2>
                <p className="mt-4">
                  <strong>Cancellation:</strong> You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period.
                </p>
                <p className="mt-4">
                  <strong>Refunds:</strong> We do not offer refunds for partial months. If you cancel, you retain access until the end of your billing period.
                </p>
                <p className="mt-4">
                  <strong>Free Trial:</strong> If offered, free trials automatically convert to paid subscriptions unless cancelled before the trial ends.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">9. Limitation of Liability</h2>
                <p className="mt-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>The Service is provided "AS IS" without warranties of any kind</li>
                  <li>We do not guarantee uninterrupted or error-free service</li>
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>Our total liability is limited to the amount you paid in the last 12 months</li>
                  <li>We are not responsible for third-party services (OpenRouter, ActivePieces, etc.)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">10. Indemnification</h2>
                <p className="mt-4">
                  You agree to indemnify and hold ANOTS harmless from any claims, damages, losses, or expenses arising from:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Your use of the Service</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any rights of another party</li>
                  <li>Content you create or distribute using the Service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">11. Termination</h2>
                <p className="mt-4">
                  We may suspend or terminate your account if you:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Violate these Terms</li>
                  <li>Engage in fraudulent activity</li>
                  <li>Fail to pay subscription fees</li>
                  <li>Use the Service in a way that harms ANOTS or other users</li>
                </ul>
                <p className="mt-4">
                  Upon termination, your right to use the Service ceases immediately. We may delete your data after a reasonable period.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">12. Governing Law</h2>
                <p className="mt-4">
                  These Terms are governed by the laws of [Your Jurisdiction], without regard to conflict of law principles. Any disputes shall be resolved in the courts of [Your Jurisdiction].
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">13. Changes to Terms</h2>
                <p className="mt-4">
                  We may update these Terms from time to time. We will notify you of material changes via email or through the Service. Continued use after changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">14. Contact Us</h2>
                <p className="mt-4">
                  If you have questions about these Terms, please contact us:
                </p>
                <ul className="mt-4 list-none space-y-2">
                  <li>Email: <a href="mailto:legal@anots.com" className="text-[#5E6AD2] hover:text-[#7C85E3]">legal@anots.com</a></li>
                  <li>Website: <a href="/contact" className="text-[#5E6AD2] hover:text-[#7C85E3]">anots.com/contact</a></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
