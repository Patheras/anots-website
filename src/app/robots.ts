import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
      // OpenAI (ChatGPT, SearchGPT)
      {
        userAgent: ['GPTBot', 'ChatGPT-User'],
        allow: '/',
        disallow: ['/api/', '/admin/'],
        crawlDelay: 1,
      },
      // Anthropic (Claude)
      {
        userAgent: ['anthropic-ai', 'Claude-Web'],
        allow: '/',
        disallow: ['/api/', '/admin/'],
        crawlDelay: 1,
      },
      // Google (Gemini, Bard, Google-Extended for AI training)
      {
        userAgent: ['Google-Extended', 'Googlebot', 'Googlebot-Image'],
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // Perplexity
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
        crawlDelay: 1,
      },
      // Common Crawl (used by many AI models for training)
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // Meta AI
      {
        userAgent: 'FacebookBot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // Cohere
      {
        userAgent: 'cohere-ai',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // Diffbot (knowledge graph for AI)
      {
        userAgent: 'Diffbot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: 'https://anots.com/sitemap.xml',
    host: 'https://anots.com',
  }
}
