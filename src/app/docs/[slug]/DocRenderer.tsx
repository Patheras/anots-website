'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function DocRenderer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="text-3xl font-bold text-[#FAFAFA] mb-8 tracking-tight">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-xl font-semibold text-[#FAFAFA] mt-12 mb-4 pt-8 border-t border-[#1A1A1B] tracking-tight">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-base font-semibold text-[#D4D4D8] mt-8 mb-3">{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-sm font-semibold text-[#D4D4D8] mt-6 mb-2">{children}</h4>
        ),
        p: ({ children }) => (
          <p className="text-[#A1A1AA] leading-relaxed mb-4 text-sm">{children}</p>
        ),
        a: ({ href, children }) => (
          <a href={href} className="text-[#5E6AD2] hover:underline" target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}>
            {children}
          </a>
        ),
        strong: ({ children }) => (
          <strong className="text-[#FAFAFA] font-semibold">{children}</strong>
        ),
        em: ({ children }) => (
          <em className="text-[#D4D4D8] italic">{children}</em>
        ),
        code: ({ className, children, ...props }) => {
          const isBlock = className?.includes('language-');
          if (isBlock) {
            return (
              <code className="block bg-[#111113] border border-[#1A1A1B] rounded-lg p-4 text-xs font-mono text-[#A1A1AA] overflow-x-auto whitespace-pre my-4">
                {children}
              </code>
            );
          }
          return (
            <code className="bg-[#111113] text-[#5E6AD2] px-1.5 py-0.5 rounded text-xs font-mono" {...props}>
              {children}
            </code>
          );
        },
        pre: ({ children }) => (
          <pre className="bg-[#111113] border border-[#1A1A1B] rounded-xl p-4 overflow-x-auto my-4 text-xs font-mono text-[#A1A1AA] whitespace-pre">
            {children}
          </pre>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-2 border-[#5E6AD2] pl-4 my-4 text-[#71717A] italic">
            {children}
          </blockquote>
        ),
        ul: ({ children }) => (
          <ul className="space-y-1.5 my-4 pl-4">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="space-y-1.5 my-4 pl-4 list-decimal list-inside">{children}</ol>
        ),
        li: ({ children }) => (
          <li className="text-[#A1A1AA] text-sm leading-relaxed flex items-start gap-2">
            <span className="text-[#52525B] mt-1.5 shrink-0">–</span>
            <span>{children}</span>
          </li>
        ),
        hr: () => <hr className="border-[#1A1A1B] my-8" />,
        table: ({ children }) => (
          <div className="overflow-x-auto my-6">
            <table className="w-full text-xs border-collapse">{children}</table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="border-b border-[#1A1A1B]">{children}</thead>
        ),
        th: ({ children }) => (
          <th className="text-left text-[#FAFAFA] font-semibold py-2 pr-4">{children}</th>
        ),
        td: ({ children }) => (
          <td className="text-[#A1A1AA] py-2 pr-4 border-b border-[#1A1A1B]/50">{children}</td>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
