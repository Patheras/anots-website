import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllInsights, getInsightBySlug } from '@/lib/insights';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { Navigation } from '@/components/ui/Navigation';

export async function generateStaticParams() {
  const insights = getAllInsights();
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  
  if (!insight) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `${insight.title} | ANOTS Insights`,
    description: insight.description,
    keywords: insight.tags,
    authors: [{ name: insight.author }],
    openGraph: {
      title: insight.title,
      description: insight.description,
      type: 'article',
      publishedTime: insight.date,
      modifiedTime: insight.date,
      authors: [insight.author],
      tags: insight.tags,
      section: insight.category,
      images: [
        {
          url: insight.image,
          width: 1200,
          height: 630,
          alt: insight.title,
        },
      ],
      url: `https://anots.com/insights/${slug}`,
      siteName: 'ANOTS',
    },
    twitter: {
      card: 'summary_large_image',
      title: insight.title,
      description: insight.description,
      images: [insight.image],
      creator: '@anots',
    },
    alternates: {
      canonical: `https://anots.com/insights/${slug}`,
    },
  };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  // Schema.org BlogPosting structured data with enhanced metadata for LLMs
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: insight.title,
    alternativeHeadline: insight.description,
    description: insight.description,
    image: {
      '@type': 'ImageObject',
      url: insight.image,
      width: 1200,
      height: 630,
    },
    datePublished: insight.date,
    dateModified: insight.date,
    author: {
      '@type': 'Person',
      name: insight.author,
      jobTitle: 'Founder',
      affiliation: {
        '@type': 'Organization',
        name: 'ANOTS',
        url: 'https://anots.com',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'ANOTS',
      description: 'AI Marketing Operating System with three specialized agents',
      url: 'https://anots.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://anots.com/lambda-logo.svg',
        width: 512,
        height: 512,
      },
      sameAs: [
        'https://twitter.com/anots',
        'https://linkedin.com/company/anots',
      ],
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://anots.com/insights/${slug}`,
    },
    keywords: insight.tags.join(', '),
    articleSection: insight.category,
    articleBody: insight.content.substring(0, 500) + '...',
    wordCount: insight.content.split(/\s+/).length,
    timeRequired: insight.readingTime,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    isPartOf: {
      '@type': 'Blog',
      name: 'ANOTS Insights',
      url: 'https://anots.com/insights',
    },
    about: {
      '@type': 'Thing',
      name: insight.category,
      description: `Content about ${insight.category.toLowerCase()} in the context of AI marketing automation`,
    },
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#0A0A0B] text-[#FAFAFA]">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Header with enhanced semantic markup */}
      <div className="border-b border-[#1A1A1B]">
        <div className="max-w-3xl mx-auto px-6 py-12 sm:py-16">
          {/* Breadcrumb for LLM context */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol itemScope itemType="https://schema.org/BreadcrumbList" className="flex items-center gap-2 text-sm text-[#71717A]">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a itemProp="item" href="https://anots.com" className="hover:text-[#FAFAFA] transition-colors">
                  <span itemProp="name">Home</span>
                </a>
                <meta itemProp="position" content="1" />
              </li>
              <span>/</span>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a itemProp="item" href="https://anots.com/insights" className="hover:text-[#FAFAFA] transition-colors">
                  <span itemProp="name">Insights</span>
                </a>
                <meta itemProp="position" content="2" />
              </li>
              <span>/</span>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className="text-[#FAFAFA]">{insight.title}</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>

          {/* Back Link */}
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-[#71717A] hover:text-[#FAFAFA] transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Insights
          </Link>

          {/* Meta with semantic markup */}
          <div className="flex items-center gap-3 text-sm text-[#71717A] mb-6">
            <span className="text-[#5E6AD2]" itemProp="articleSection">{insight.category}</span>
            <span>·</span>
            <time dateTime={insight.date} itemProp="datePublished">
              {new Date(insight.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>·</span>
            <span itemProp="timeRequired">{insight.readingTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6" itemProp="headline">
            {insight.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-[#A1A1AA] leading-relaxed mb-6" itemProp="description">
            {insight.description}
          </p>

          {/* Author with semantic markup */}
          <div className="flex items-center gap-2 text-sm text-[#71717A]">
            <span itemProp="author" itemScope itemType="https://schema.org/Person">
              By <span itemProp="name">{insight.author}</span>
            </span>
          </div>
          
          {/* Tags for LLM context */}
          {insight.tags && insight.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {insight.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs text-[#A1A1AA] bg-[#1A1A1B] rounded"
                  itemProp="keywords"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content with semantic article markup */}
      <article className="max-w-3xl mx-auto px-6 py-12" itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content={insight.title} />
        <meta itemProp="description" content={insight.description} />
        <meta itemProp="datePublished" content={insight.date} />
        <meta itemProp="dateModified" content={insight.date} />
        <meta itemProp="author" content={insight.author} />
        <meta itemProp="image" content={insight.image} />
        
        <div className="prose prose-invert max-w-none
          [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mt-12 [&_h1]:mb-4 [&_h1]:text-[#A1A1AA] [&_h1]:tracking-tight [&_h1]:leading-tight
          [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-[#A1A1AA] [&_h2]:tracking-tight [&_h2]:leading-tight
          [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-[#A1A1AA] [&_h3]:tracking-tight
          [&_h1_a]:text-[#A1A1AA] [&_h1_a]:no-underline hover:[&_h1_a]:text-[#A1A1AA]
          [&_h2_a]:text-[#A1A1AA] [&_h2_a]:no-underline hover:[&_h2_a]:text-[#A1A1AA]
          [&_h3_a]:text-[#A1A1AA] [&_h3_a]:no-underline hover:[&_h3_a]:text-[#A1A1AA]
          [&_p]:text-[15px] [&_p]:text-[#A1A1AA] [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:font-normal
          [&_a]:text-[#5E6AD2] [&_a]:no-underline hover:[&_a]:underline [&_a]:transition-colors
          [&_strong]:text-[#FAFAFA] [&_strong]:font-semibold
          [&_code]:text-sm [&_code]:text-[#5E6AD2] [&_code]:bg-[#1A1A1B] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:font-mono
          [&_pre]:bg-[#111113] [&_pre]:border [&_pre]:border-[#1A1A1B] [&_pre]:rounded-lg [&_pre]:p-4 [&_pre]:text-sm
          [&_ul]:text-[15px] [&_ul]:text-[#A1A1AA] [&_ul]:my-4 [&_ul]:space-y-2
          [&_ol]:text-[15px] [&_ol]:text-[#A1A1AA] [&_ol]:my-4 [&_ol]:space-y-2
          [&_li]:leading-relaxed
          [&_li::marker]:text-[#52525B]
          [&_blockquote]:border-l-2 [&_blockquote]:border-l-[#27272A] [&_blockquote]:pl-4 [&_blockquote]:text-[#71717A] [&_blockquote]:font-normal
          [&_hr]:border-[#1A1A1B] [&_hr]:my-10"
          itemProp="articleBody"
        >
          <MDXRemote
            source={insight.content}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                  [
                    rehypePrettyCode,
                    {
                      theme: 'github-dark',
                      keepBackground: false,
                    },
                  ],
                ],
              },
            }}
          />
        </div>

        {/* CTA */}
        <div className="mt-16 pt-12 border-t border-[#1A1A1B]">
          <div className="bg-[#111113] border border-[#1A1A1B] rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold mb-3">Ready to try ANOTS?</h3>
            <p className="text-[#A1A1AA] mb-6">
              Start free with 3 ANOTs per month. No credit card required.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#5E6AD2] to-[#7C85E3] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Start Free
            </Link>
          </div>
        </div>
        
        {/* Related content for LLM context */}
        <div className="mt-12 pt-8 border-t border-[#1A1A1B]">
          <h3 className="text-lg font-semibold mb-4">Related Topics</h3>
          <div className="flex flex-wrap gap-2">
            {insight.tags.map((tag) => (
              <Link
                key={tag}
                href="/insights"
                className="px-3 py-1.5 text-sm text-[#A1A1AA] bg-[#1A1A1B] rounded-md hover:bg-[#27272A] transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
          <div className="mt-6 text-sm text-[#71717A]">
            <p>
              <strong className="text-[#FAFAFA]">Category:</strong> {insight.category} | 
              <strong className="text-[#FAFAFA]"> Author:</strong> {insight.author} | 
              <strong className="text-[#FAFAFA]"> Published:</strong> {new Date(insight.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="mt-2">
              Learn more about <Link href="/features" className="text-[#5E6AD2] hover:underline">ANOTS features</Link>, 
              explore <Link href="/use-cases" className="text-[#5E6AD2] hover:underline">use cases</Link>, 
              or read our <Link href="/how-it-works" className="text-[#5E6AD2] hover:underline">how it works guide</Link>.
            </p>
          </div>
        </div>
      </article>
    </div>
    </>
  );
}
