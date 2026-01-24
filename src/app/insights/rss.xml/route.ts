import { getAllInsights } from '@/lib/insights';

export async function GET() {
  const insights = getAllInsights();
  const baseUrl = 'https://anots.com';

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>ANOTS Insights - AI Marketing Automation Blog</title>
    <link>${baseUrl}/insights</link>
    <description>Expert insights on AI marketing automation, brand intelligence, workflow optimization, and the future of marketing from the ANOTS team. Learn how AI agents transform marketing operations.</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/insights/rss.xml" rel="self" type="application/rss+xml"/>
    <managingEditor>kaelis@anots.com (Kaelis)</managingEditor>
    <webMaster>kaelis@anots.com (Kaelis)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} ANOTS. All rights reserved.</copyright>
    <category>Marketing Automation</category>
    <category>AI Agents</category>
    <category>Brand Intelligence</category>
    <image>
      <url>${baseUrl}/lambda-logo.svg</url>
      <title>ANOTS Insights</title>
      <link>${baseUrl}/insights</link>
    </image>
    ${insights
      .map(
        (insight) => `
    <item>
      <title>${escapeXml(insight.title)}</title>
      <link>${baseUrl}/insights/${insight.slug}</link>
      <description>${escapeXml(insight.description)}</description>
      <content:encoded><![CDATA[${insight.content.substring(0, 1000)}...]]></content:encoded>
      <pubDate>${new Date(insight.date).toUTCString()}</pubDate>
      <guid isPermaLink="true">${baseUrl}/insights/${insight.slug}</guid>
      <category>${escapeXml(insight.category)}</category>
      <dc:creator>${escapeXml(insight.author)}</dc:creator>
      ${insight.tags.map(tag => `<category>${escapeXml(tag)}</category>`).join('\n      ')}
      <enclosure url="${baseUrl}${insight.image}" type="image/png" />
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
