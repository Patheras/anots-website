'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import type { InsightPost } from '@/lib/insights';

interface InsightsClientProps {
  allInsights: InsightPost[];
}

export function InsightsClient({ allInsights }: InsightsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  const allCategories = ['All', ...Array.from(new Set(allInsights.map(i => i.category)))];
  const allTags = Array.from(new Set(allInsights.flatMap(i => i.tags)));

  // Filter insights
  const insights = useMemo(() => {
    return allInsights.filter(insight => {
      const categoryMatch = selectedCategory === 'All' || insight.category === selectedCategory;
      const tagMatch = !selectedTag || insight.tags.includes(selectedTag);
      return categoryMatch && tagMatch;
    });
  }, [allInsights, selectedCategory, selectedTag]);

  // Category descriptions for LLM context
  const categoryDescriptions: Record<string, string> = {
    'All': 'All blog posts about AI marketing automation, brand intelligence, and workflow optimization',
    'Product Updates': 'Latest features, improvements, and announcements from the ANOTS platform',
    'Use Cases': 'Practical examples and real-world applications of AI marketing automation',
    'AI & Automation': 'Technical deep-dives into AI agents, automation strategies, and marketing technology',
    'Marketing Tips': 'Best practices, strategies, and actionable advice for marketing teams',
    'Behind the Scenes': 'Company updates, founder insights, and the story behind ANOTS',
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Active filter description for LLM context */}
      {(selectedCategory !== 'All' || selectedTag) && (
        <div className="mb-8 p-4 bg-[#111113] border border-[#1A1A1B] rounded-lg">
          <p className="text-sm text-[#A1A1AA]">
            {selectedTag ? (
              <>Showing posts tagged with <strong className="text-[#FAFAFA]">{selectedTag}</strong></>
            ) : (
              <>Showing posts in <strong className="text-[#FAFAFA]">{selectedCategory}</strong>: {categoryDescriptions[selectedCategory]}</>
            )}
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedTag(null);
            }}
            className="mt-2 text-xs text-[#5E6AD2] hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12">
        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-[#FAFAFA] mb-3 uppercase tracking-wider">Categories</h3>
            <div className="space-y-1">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSelectedTag(null);
                  }}
                  className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#5E6AD2] text-white'
                      : 'text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#1A1A1B]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-sm font-semibold text-[#FAFAFA] mb-3 uppercase tracking-wider">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.slice(0, 10).map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className={`px-2 py-1 text-xs rounded-md transition-colors ${
                    selectedTag === tag
                      ? 'bg-[#5E6AD2] text-white'
                      : 'text-[#A1A1AA] bg-[#1A1A1B] hover:bg-[#27272A]'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Posts List */}
        <div>
          <div className="space-y-12">
            {insights.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="block group"
              >
                <article className="space-y-3">
                  {/* Category & Date */}
                  <div className="flex items-center gap-3 text-sm text-[#71717A]">
                    <span className="text-[#5E6AD2]">{insight.category}</span>
                    <span>·</span>
                    <time dateTime={insight.date}>
                      {new Date(insight.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span>·</span>
                    <span>{insight.readingTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight group-hover:text-[#5E6AD2] transition-colors">
                    {insight.title}
                  </h2>

                  {/* Description */}
                  <p className="text-[#A1A1AA] leading-relaxed">
                    {insight.description}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-2 text-sm text-[#71717A]">
                    <span>By {insight.author}</span>
                  </div>

                  {/* Tags */}
                  {insight.tags && insight.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {insight.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs text-[#A1A1AA] bg-[#1A1A1B] rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {insights.length === 0 && (
            <div className="text-center py-24">
              <p className="text-[#71717A] text-lg">No insights found. Try a different filter!</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedTag(null);
                }}
                className="mt-4 text-sm text-[#5E6AD2] hover:underline"
              >
                View all posts
              </button>
            </div>
          )}
          
          {/* Results count for LLM context */}
          {insights.length > 0 && (
            <div className="mt-8 pt-8 border-t border-[#1A1A1B] text-sm text-[#71717A]">
              <p>
                Showing {insights.length} {insights.length === 1 ? 'post' : 'posts'}
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                {selectedTag && ` tagged with ${selectedTag}`}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
