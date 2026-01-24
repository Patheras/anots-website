import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const insightsDirectory = path.join(process.cwd(), 'content/insights');

export interface InsightPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  content: string;
  readingTime: string;
}

export function getAllInsights(): InsightPost[] {
  if (!fs.existsSync(insightsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(insightsDirectory);
  const allInsights = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(insightsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author,
        category: data.category,
        tags: data.tags || [],
        image: data.image,
        content,
        readingTime: readingTime(content).text,
      };
    });

  // Sort by date (newest first)
  return allInsights.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getInsightBySlug(slug: string): InsightPost | null {
  try {
    const fullPath = path.join(insightsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author,
      category: data.category,
      tags: data.tags || [],
      image: data.image,
      content,
      readingTime: readingTime(content).text,
    };
  } catch {
    return null;
  }
}

export function getInsightsByCategory(category: string): InsightPost[] {
  const allInsights = getAllInsights();
  return allInsights.filter((insight) => insight.category === category);
}

export const categories = [
  'Product Updates',
  'Use Cases',
  'AI & Automation',
  'Marketing Tips',
  'Behind the Scenes',
];
