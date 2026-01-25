import { NextResponse } from 'next/server';

export const runtime = 'edge';

interface GitHubCommit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
  html_url: string;
}

interface ParsedUpdate {
  id: string;
  type: 'feat' | 'fix' | 'refactor' | 'style' | 'docs' | 'chore' | 'other';
  title: string;
  description: string;
  date: string;
  author: string;
  url: string;
}

function parseCommitMessage(message: string): { type: ParsedUpdate['type']; title: string; description: string } {
  const lines = message.split('\n');
  const firstLine = lines[0];
  
  // Parse conventional commit format: type: message
  const match = firstLine.match(/^(feat|fix|refactor|style|docs|chore|perf|test|build|ci)(\(.+?\))?:\s*(.+)$/i);
  
  if (match) {
    const type = match[1].toLowerCase() as ParsedUpdate['type'];
    const title = match[3];
    const description = lines.slice(1).join('\n').trim();
    
    return { type, title, description };
  }
  
  // Fallback for non-conventional commits
  return {
    type: 'other',
    title: firstLine,
    description: lines.slice(1).join('\n').trim()
  };
}

export async function GET() {
  try {
    const owner = process.env.GITHUB_OWNER || 'dataguess';
    const repo = process.env.GITHUB_REPO || 'dataguess.com';
    const token = process.env.GITHUB_TOKEN;
    const perPage = 50;
    
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'ANOTS-Web'
    };
    
    // Add authorization if token is available
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?per_page=${perPage}`,
      {
        headers,
        next: { revalidate: 300 } // Cache for 5 minutes
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch commits');
    }

    const commits: GitHubCommit[] = await response.json();
    
    const updates: ParsedUpdate[] = commits.map(commit => {
      const { type, title, description } = parseCommitMessage(commit.commit.message);
      
      return {
        id: commit.sha,
        type,
        title,
        description,
        date: commit.commit.author.date,
        author: commit.commit.author.name,
        url: commit.html_url
      };
    });

    return NextResponse.json({ updates });
  } catch (error) {
    console.error('Error fetching updates:', error);
    return NextResponse.json(
      { error: 'Failed to fetch updates' },
      { status: 500 }
    );
  }
}
