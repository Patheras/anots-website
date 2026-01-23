'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Update {
  id: string;
  type: 'feat' | 'fix' | 'refactor' | 'style' | 'docs' | 'chore' | 'other';
  title: string;
  description: string;
  date: string;
  author: string;
  url: string;
}

const typeConfig = {
  feat: {
    label: 'New Feature',
    color: 'bg-[#10B981] text-white',
    icon: '✨'
  },
  fix: {
    label: 'Bug Fix',
    color: 'bg-[#EF4444] text-white',
    icon: '🐛'
  },
  refactor: {
    label: 'Refactor',
    color: 'bg-[#F59E0B] text-white',
    icon: '♻️'
  },
  style: {
    label: 'Style',
    color: 'bg-[#8B5CF6] text-white',
    icon: '💅'
  },
  docs: {
    label: 'Documentation',
    color: 'bg-[#3B82F6] text-white',
    icon: '📝'
  },
  chore: {
    label: 'Chore',
    color: 'bg-[#6B7280] text-white',
    icon: '🔧'
  },
  other: {
    label: 'Update',
    color: 'bg-[#71717A] text-white',
    icon: '📦'
  }
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 60) {
    return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`;
  } else if (diffHours < 24) {
    return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
  } else if (diffDays < 7) {
    return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
  } else {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  }
}

export function UpdatesFeed() {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUpdates() {
      try {
        const response = await fetch('/api/updates');
        if (!response.ok) throw new Error('Failed to fetch updates');
        
        const data = await response.json();
        setUpdates(data.updates);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load updates');
      } finally {
        setLoading(false);
      }
    }

    fetchUpdates();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#5E6AD2] border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <Card className="border-[#EF4444]/20 bg-[#EF4444]/5">
        <CardContent className="p-6 text-center">
          <p className="text-[#EF4444]">{error}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {updates.map((update) => {
        const config = typeConfig[update.type] || typeConfig.other;
        
        return (
          <Card key={update.id} className="border-[#1A1A1B] bg-[#111113] hover:border-[#2A2A2B] transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 text-2xl">
                  {config.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Type Badge */}
                  <div className="mb-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
                      {config.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[#FAFAFA] mb-2">
                    {update.title}
                  </h3>

                  {/* Description */}
                  {update.description && (
                    <p className="text-sm text-[#D4D4D8] mb-3 whitespace-pre-wrap">
                      {update.description}
                    </p>
                  )}

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-[#71717A]">
                    <span>{formatDate(update.date)}</span>
                    <span>•</span>
                    <span>by {update.author}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
