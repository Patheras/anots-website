import type { Metadata } from "next";
import { Navigation } from "@/components/ui/Navigation";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ANOTS Privacy Policy. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "ANOTS Privacy Policy",
    description: "Learn how we collect, use, and protect your personal information.",
    url: "https://anots.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      
      <div className="bg-[#0A0A0B] py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-[#FAFAFA] sm:text-5xl">
                Privacy Policy
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
                  Welcome to ANOTS ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our AI marketing automation platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">2. Information We Collect</h2>
                <p className="mt-4">We collect the following types of information:</p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li><strong>Account Information:</strong> Name, email address, password, and billing information</li>
                  <li><strong>Usage Data:</strong> Information about how you use ANOTS, including ANOTs created, AI interactions, and feature usage</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies</li>
                  <li><strong>Marketing Data:</strong> Your preferences for receiving marketing communications</li>
                  <li><strong>API Keys:</strong> Third-party API keys you provide (encrypted and stored securely)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">3. How We Use Your Information</h2>
                <p className="mt-4">We use your information to:</p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Provide and maintain our services</li>
                  <li>Process your transactions and manage your account</li>
                  <li>Communicate with you about updates, features, and support</li>
                  <li>Improve our platform and develop new features</li>
                  <li>Ensure security and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">4. Data Security</h2>
                <p className="mt-4">
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Encryption at rest and in transit (TLS/SSL)</li>
                  <li>Secure authentication with bcrypt password hashing</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and monitoring</li>
                  <li>Encrypted storage of API keys and sensitive data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">5. Data Sharing</h2>
                <p className="mt-4">
                  We do not sell your personal data. We may share your information with:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li><strong>Service Providers:</strong> Third-party services that help us operate (e.g., hosting, payment processing)</li>
                  <li><strong>AI Providers:</strong> OpenRouter and other AI model providers (only necessary data for processing)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">6. Your Rights</h2>
                <p className="mt-4">You have the right to:</p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Export your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, contact us at <a href="mailto:privacy@anots.com" className="text-[#5E6AD2] hover:text-[#7C85E3]">privacy@anots.com</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">7. Cookies</h2>
                <p className="mt-4">
                  We use cookies and similar technologies to enhance your experience. You can control cookies through your browser settings. Essential cookies are required for the platform to function.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">8. Data Retention</h2>
                <p className="mt-4">
                  We retain your data for as long as your account is active or as needed to provide services. After account deletion, we may retain certain data for legal compliance and fraud prevention.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">9. International Data Transfers</h2>
                <p className="mt-4">
                  Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">10. Children's Privacy</h2>
                <p className="mt-4">
                  ANOTS is not intended for users under 18 years of age. We do not knowingly collect data from children.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">11. Changes to This Policy</h2>
                <p className="mt-4">
                  We may update this privacy policy from time to time. We will notify you of significant changes via email or through the platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">12. Contact Us</h2>
                <p className="mt-4">
                  If you have questions about this privacy policy, please contact us:
                </p>
                <ul className="mt-4 list-none space-y-2">
                  <li>Email: <a href="mailto:privacy@anots.com" className="text-[#5E6AD2] hover:text-[#7C85E3]">privacy@anots.com</a></li>
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
