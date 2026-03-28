import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";
import { getDocGroups } from "@/lib/docs";

export const metadata: Metadata = {
  title: "Documentation — ΛNOTS",
  description: "Open documentation for the ΛNOTS platform. Memory, Gateway, Network, Governance, and more.",
  alternates: { canonical: "https://anots.com/docs" },
};

const groupOrder = ['Vision', 'Platform', 'Agents', 'Business', 'Governance'];

export default function DocsPage() {
  const groups = getDocGroups();

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0A0A0B]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">

          {/* Header */}
          <div className="mb-16">
            <p className="text-xs font-mono text-[#3F3F46] tracking-widest uppercase mb-4">Documentation</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#FAFAFA] mb-4">
              ΛNOTS Docs
            </h1>
            <p className="text-[#71717A] text-lg max-w-xl">
              Open documentation for an open platform. Everything is public — the architecture, the governance, the business model.
            </p>
          </div>

          {/* Groups */}
          <div className="space-y-12">
            {groupOrder.filter(g => groups[g]).map(group => (
              <div key={group}>
                <h2 className="text-xs font-mono text-[#52525B] tracking-widest uppercase mb-4">
                  {group}
                </h2>
                <div className="space-y-1">
                  {groups[group].map(doc => (
                    <Link
                      key={doc.slug}
                      href={`/docs/${doc.slug}`}
                      className="group flex items-center justify-between rounded-lg border border-transparent px-4 py-3 hover:border-[#1A1A1B] hover:bg-[#111113] transition-all"
                    >
                      <div>
                        <span className="text-sm font-medium text-[#D4D4D8] group-hover:text-[#FAFAFA] transition-colors">
                          {doc.title}
                        </span>
                        {doc.description && (
                          <span className="ml-3 text-xs text-[#52525B]">{doc.description}</span>
                        )}
                      </div>
                      <svg className="h-4 w-4 text-[#3F3F46] group-hover:text-[#71717A] transition-colors shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-20 pt-8 border-t border-[#1A1A1B]">
            <p className="text-xs text-[#3F3F46] font-mono">
              All documentation is open source.{' '}
              <a href="https://github.com/Patheras/anots-website" target="_blank" rel="noopener noreferrer" className="text-[#52525B] hover:text-[#71717A] transition-colors">
                Contribute on GitHub →
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
