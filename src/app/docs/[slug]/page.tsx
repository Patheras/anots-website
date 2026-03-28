import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/ui/Navigation";
import { getAllDocs, getDocBySlug } from "@/lib/docs";
import { DocRenderer } from "./DocRenderer";

export async function generateStaticParams() {
  const docs = getAllDocs();
  return docs.map(doc => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  if (!doc) return { title: 'Not Found' };
  return {
    title: `${doc.title} — ΛNOTS Docs`,
    description: doc.description,
    alternates: { canonical: `https://anots.com/docs/${slug}` },
  };
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  if (!doc) notFound();

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0A0A0B]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#52525B] mb-10">
            <Link href="/docs" className="hover:text-[#A1A1AA] transition-colors">Docs</Link>
            <span>/</span>
            <span className="text-[#71717A]">{doc.title}</span>
          </div>

          {/* Content */}
          <DocRenderer content={doc.content} />

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-[#1A1A1B]">
            <Link href="/docs" className="inline-flex items-center gap-2 text-xs text-[#52525B] hover:text-[#A1A1AA] transition-colors">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Docs
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
