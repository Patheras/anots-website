import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// docs/ klasörü workspace root'unda
const docsDirectory = path.join(process.cwd(), '..', 'docs');

export interface DocFile {
  slug: string;
  title: string;
  description: string;
  content: string;
  filename: string;
}

const docMeta: Record<string, { title: string; description: string; group: string }> = {
  'MANIFESTO': { title: 'The Manifesto', description: 'Why we build ΛNOTS', group: 'Vision' },
  '00-ANOTS-Platform-Overview': { title: 'Platform Overview', description: 'What is ΛNOTS and how it works', group: 'Platform' },
  '01-ANOTS-Memory-Specification': { title: 'Memory Service', description: '4-layer persistent memory architecture', group: 'Platform' },
  '02-ANOTS-Gateway-Specification': { title: 'Gateway Service', description: 'Intelligent LLM routing (Bifrost)', group: 'Platform' },
  '03-ANOTS-Network-Specification': { title: 'ΛNOTS Network', description: 'Agent Network of Thought — the public hive', group: 'Platform' },
  '04-ANOTS-CLI-Specification': { title: 'CLI', description: 'Command line interface', group: 'Platform' },
  '05-ANOTS-Web-App-Specification': { title: 'Web App', description: 'Web control plane', group: 'Platform' },
  '06-ANOTS-MCP-Integration': { title: 'MCP Integration', description: 'Model Context Protocol integration', group: 'Platform' },
  '07-Axiom-The-Agent': { title: 'Axiom', description: 'The ΛNOTS navigator agent', group: 'Agents' },
  '08-Business-Model': { title: 'Business Model', description: 'Pricing, revenue, sustainability', group: 'Business' },
  '09-Technical-Stack': { title: 'Technical Stack', description: 'Technologies and architecture', group: 'Business' },
  '10-Security-Privacy': { title: 'Security & Privacy', description: 'How we protect your data', group: 'Business' },
  '11-Democratic-AI-Governance': { title: 'Governance', description: 'Democratic AI architecture', group: 'Governance' },
  '12-ANOTS-Constitution': { title: 'Constitution', description: 'Agent rights and governance framework', group: 'Governance' },
};

export function getAllDocs(): DocFile[] {
  if (!fs.existsSync(docsDirectory)) return [];

  return fs.readdirSync(docsDirectory)
    .filter(f => f.endsWith('.md') && !f.startsWith('README'))
    .map(filename => {
      const slug = filename.replace(/\.md$/, '');
      const fullPath = path.join(docsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { content } = matter(fileContents);
      const meta = docMeta[slug] ?? { title: slug, description: '', group: 'Other' };

      return { slug, title: meta.title, description: meta.description, content, filename };
    })
    .sort((a, b) => {
      const order = Object.keys(docMeta);
      return order.indexOf(a.slug) - order.indexOf(b.slug);
    });
}

export function getDocBySlug(slug: string): DocFile | null {
  const fullPath = path.join(docsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content } = matter(fileContents);
  const meta = docMeta[slug] ?? { title: slug, description: '', group: 'Other' };

  return { slug, title: meta.title, description: meta.description, content, filename: `${slug}.md` };
}

export function getDocGroups(): Record<string, DocFile[]> {
  const docs = getAllDocs();
  const groups: Record<string, DocFile[]> = {};

  docs.forEach(doc => {
    const meta = docMeta[doc.slug];
    const group = meta?.group ?? 'Other';
    if (!groups[group]) groups[group] = [];
    groups[group].push(doc);
  });

  return groups;
}
