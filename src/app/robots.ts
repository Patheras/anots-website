import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
      // Allow LLM crawlers explicitly
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'CCBot', 'anthropic-ai', 'Claude-Web', 'Google-Extended'],
        allow: '/',
        disallow: '/api/',
      },
    ],
    sitemap: 'https://anots.com/sitemap.xml',
  }
}
