import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { Navigation } from "@/components/ui/Navigation";
import { getAllDocs, getDocBySlug } from "@/lib/docs";

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

          {/* MDX Content */}
          <article className="prose prose-invert prose-sm sm:prose-base max-w-none
            prose-headings:font-semibold prose-headings:tracking-tight
            prose-h1:text-3xl prose-h1:text-[#FAFAFA] prose-h1:mb-8
            prose-h2:text-xl prose-h2:text-[#FAFAFA] prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-t prose-h2:border-[#1A1A1B] prose-h2:pt-8
            prose-h3:text-base prose-h3:text-[#D4D4D8] prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-[#A1A1AA] prose-p:leading-relaxed
            prose-a:text-[#5E6AD2] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-[#FAFAFA] prose-strong:font-semibold
            prose-code:text-[#5E6AD2] prose-code:bg-[#111113] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-[#111113] prose-pre:border prose-pre:border-[#1A1A1B] prose-pre:rounded-xl
            prose-blockquote:border-l-[#5E6AD2] prose-blockquote:text-[#71717A] prose-blockquote:not-italic
            prose-ul:text-[#A1A1AA] prose-ol:text-[#A1A1AA]
            prose-li:marker:text-[#52525B]
            prose-hr:border-[#1A1A1B]
            prose-table:text-sm prose-th:text-[#FAFAFA] prose-td:text-[#A1A1AA] prose-thead:border-[#1A1A1B] prose-tbody:divide-[#1A1A1B]
          ">
            <MDXRemote
              source={doc.content}
              options={{
                mdxOptions: {
                  rehypePlugins: [
                    rehypeSlug,
                    [rehypePrettyCode, { theme: 'github-dark' }],
                  ],
                },
              }}
            />
          </article>

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
