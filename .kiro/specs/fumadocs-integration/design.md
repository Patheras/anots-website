# Design Document: Fumadocs Integration

## Overview

This design outlines the integration of Fumadocs, a modern documentation framework, into the AgencyOS Next.js application. Fumadocs provides a GitBook-style documentation experience with built-in search, navigation, table of contents, and markdown/MDX support. The integration will replace the existing basic documentation system while preserving all content and maintaining consistency with the AgencyOS design system.

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    AgencyOS Application                  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐ │
│  │              /docs Route (Fumadocs)                │ │
│  │                                                    │ │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────┐   │ │
│  │  │ Sidebar  │  │  Content │  │     TOC      │   │ │
│  │  │Navigation│  │   Area   │  │  (Right)     │   │ │
│  │  │ (Left)   │  │          │  │              │   │ │
│  │  └──────────┘  └──────────┘  └──────────────┘   │ │
│  │                                                    │ │
│  │  ┌──────────────────────────────────────────────┐ │ │
│  │  │          Search Bar (Top)                    │ │ │
│  │  └──────────────────────────────────────────────┘ │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
│  ┌────────────────────────────────────────────────────┐ │
│  │         Content Source (Fumadocs MDX)              │ │
│  │                                                    │ │
│  │  content/docs/                                     │ │
│  │  ├── index.mdx                                     │ │
│  │  ├── whitepaper.mdx                                │ │
│  │  ├── architecture.mdx                              │ │
│  │  ├── getting-started.mdx                           │ │
│  │  ├── directors-console.mdx                         │ │
│  │  └── engine-room.mdx                               │ │
│  └────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### Technology Stack

- **Fumadocs Core** (`fumadocs-core`): Handles document search, content source adapters, and markdown extensions
- **Fumadocs UI** (`fumadocs-ui`): Provides the default theme with sidebar, TOC, and search components
- **Fumadocs MDX** (`fumadocs-mdx`): Content source adapter for transforming MDX files into type-safe data
- **Next.js 15**: App Router for routing and server components
- **MDX**: For rich, interactive documentation content
- **Flexsearch**: Built-in search engine (included with Fumadocs)

## Components and Interfaces

### 1. Fumadocs Configuration

**File**: `source.config.ts` (root level)

```typescript
import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    // Schema for frontmatter validation
    schema: {
      title: { type: 'string', required: true },
      description: { type: 'string' },
      icon: { type: 'string' },
    },
  },
});

export default defineConfig();
```

**Purpose**: Defines the documentation collection and configuration for Fumadocs MDX.

### 2. Next.js Configuration Update

**File**: `next.config.ts`

```typescript
import { createMDX } from 'fumadocs-mdx/next';

const config = {
  // existing config
  reactStrictMode: true,
  // ... other settings
};

const withMDX = createMDX();

export default withMDX(config);
```

**Purpose**: Integrates Fumadocs MDX plugin into Next.js build process.

### 3. Content Source Loader

**File**: `src/lib/source.ts`

```typescript
import { docs } from 'fumadocs-mdx:collections/server';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
});
```

**Purpose**: Creates a type-safe loader for accessing documentation content.

### 4. Documentation Layout

**File**: `src/app/docs/layout.tsx`

```typescript
import { DocsLayout } from 'fumadocs-ui/layout';
import { source } from '@/lib/source';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: 'AgencyOS Docs',
        url: '/',
      }}
      sidebar={{
        defaultOpenLevel: 1,
        banner: (
          <div className="p-4 bg-blue-600/10 border border-blue-600/20 rounded-lg">
            <p className="text-sm text-blue-400">
              Human-in-the-loop execution operating system
            </p>
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
```

**Purpose**: Provides the main layout structure with sidebar navigation and TOC.

### 5. Documentation Page Component

**File**: `src/app/docs/[[...slug]]/page.tsx`

```typescript
import { source } from '@/lib/source';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = source.getPage(params.slug);
  
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      lastUpdate={page.data.lastModified}
    >
      <DocsBody>
        <h1>{page.data.title}</h1>
        <p className="text-lg text-slate-400">{page.data.description}</p>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
```

**Purpose**: Dynamic route handler for rendering individual documentation pages.

### 6. Search Integration

**File**: `src/app/api/search/route.ts`

```typescript
import { source } from '@/lib/source';
import { createSearchAPI } from 'fumadocs-core/search/server';

export const { GET } = createSearchAPI('advanced', {
  indexes: source.getPages().map((page) => ({
    title: page.data.title,
    description: page.data.description,
    url: page.url,
    structuredData: page.data.structuredData,
  })),
});
```

**Purpose**: API endpoint for search functionality.

## Data Models

### Frontmatter Schema

Each MDX file will have frontmatter with the following structure:

```yaml
---
title: string (required)
description: string (optional)
icon: string (optional, lucide icon name)
---
```

### Page Tree Structure

Fumadocs automatically generates a page tree from the file structure:

```typescript
interface PageTree {
  name: string;
  url: string;
  children?: PageTree[];
  icon?: string;
}
```

### Document Page Data

```typescript
interface PageData {
  title: string;
  description?: string;
  body: React.ComponentType; // MDX component
  toc: TableOfContents[];
  structuredData: StructuredData;
  lastModified?: Date;
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Content Preservation

*For any* existing documentation page in the old system, there SHALL exist an equivalent MDX file in the new system with the same content and structure.

**Validates: Requirements 2.1, 2.2**

### Property 2: Navigation Completeness

*For any* MDX file in the content directory, it SHALL appear in the generated navigation sidebar.

**Validates: Requirements 3.1, 3.2**

### Property 3: Search Coverage

*For any* documentation page with content, searching for text that appears in that page SHALL return that page in the search results.

**Validates: Requirements 4.2, 4.3**

### Property 4: TOC Generation

*For any* MDX file with markdown headings (h2, h3), the generated table of contents SHALL include all those headings in the correct hierarchical order.

**Validates: Requirements 5.1, 5.2**

### Property 5: Markdown Rendering

*For any* valid markdown syntax (headings, lists, links, code blocks, tables), the rendered output SHALL correctly display that syntax according to CommonMark specifications.

**Validates: Requirements 6.1, 6.2, 6.3**

### Property 6: Route Generation

*For any* MDX file at path `content/docs/[...path].mdx`, there SHALL exist a corresponding accessible route at `/docs/[...path]`.

**Validates: Requirements 1.4**

### Property 7: Static Generation

*For any* documentation page, it SHALL be statically generated at build time and served without requiring server-side rendering on each request.

**Validates: Requirements 8.1, 8.2**

## Error Handling

### Missing Pages

- **Scenario**: User navigates to a non-existent documentation page
- **Handling**: Return Next.js 404 page with helpful navigation back to docs home

### Invalid Frontmatter

- **Scenario**: MDX file has invalid or missing required frontmatter
- **Handling**: Build-time error with clear message indicating which file and which field is invalid

### Search API Failures

- **Scenario**: Search API endpoint fails or times out
- **Handling**: Display error message in search UI, allow user to retry

### MDX Compilation Errors

- **Scenario**: MDX file has syntax errors
- **Handling**: Build-time error with line number and description of the syntax issue

## Testing Strategy

### Unit Tests

Unit tests will verify specific examples and edge cases:

1. **Content Source Loading**
   - Test that `source.getPage()` returns correct page data
   - Test that `source.pageTree` generates correct navigation structure
   - Test handling of missing pages

2. **Frontmatter Validation**
   - Test valid frontmatter passes validation
   - Test missing required fields fail validation
   - Test invalid field types fail validation

3. **Route Generation**
   - Test `generateStaticParams()` returns all expected routes
   - Test nested routes are generated correctly

4. **Search API**
   - Test search endpoint returns results for known content
   - Test search handles empty queries
   - Test search handles special characters

### Property-Based Tests

Property-based tests will verify universal properties across all inputs:

1. **Property 1: Content Preservation**
   - Generate random markdown content
   - Write to MDX file
   - Verify content is accessible through source loader
   - **Minimum 100 iterations**
   - **Tag**: Feature: fumadocs-integration, Property 1: Content Preservation

2. **Property 2: Navigation Completeness**
   - Generate random file structure in content directory
   - Build page tree
   - Verify all files appear in navigation
   - **Minimum 100 iterations**
   - **Tag**: Feature: fumadocs-integration, Property 2: Navigation Completeness

3. **Property 3: Search Coverage**
   - Generate random documentation pages with unique text
   - Index pages for search
   - Search for text from each page
   - Verify each page appears in its respective search results
   - **Minimum 100 iterations**
   - **Tag**: Feature: fumadocs-integration, Property 3: Search Coverage

4. **Property 4: TOC Generation**
   - Generate random markdown with various heading levels
   - Parse and generate TOC
   - Verify all headings appear in TOC in correct order
   - **Minimum 100 iterations**
   - **Tag**: Feature: fumadocs-integration, Property 4: TOC Generation

5. **Property 5: Markdown Rendering**
   - Generate random valid markdown syntax
   - Render to HTML
   - Verify output contains expected HTML elements
   - **Minimum 100 iterations**
   - **Tag**: Feature: fumadocs-integration, Property 5: Markdown Rendering

### Integration Tests

1. **Full Page Rendering**
   - Test complete page renders with sidebar, content, and TOC
   - Test responsive behavior on different screen sizes

2. **Search Flow**
   - Test complete search flow from input to results to navigation

3. **Navigation Flow**
   - Test clicking through navigation items loads correct pages

### Testing Framework

- **Unit & Integration Tests**: Vitest (already in project)
- **Property-Based Tests**: fast-check (TypeScript property-based testing library)
- **E2E Tests**: Playwright (for testing full user flows)

## Implementation Notes

### Package Installation

Required packages:
```bash
npm install fumadocs-core fumadocs-ui fumadocs-mdx @types/mdx
npm install -D fast-check @types/fast-check
```

### TypeScript Configuration

Add import alias to `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "fumadocs-mdx:collections/*": [".source/*"],
      "@/*": ["./src/*"]
    }
  }
}
```

### Content Migration Strategy

1. Extract content from existing React components
2. Convert to markdown format
3. Add frontmatter metadata
4. Organize in `content/docs/` directory
5. Verify all links and references work

### Styling Customization

Fumadocs UI can be customized to match AgencyOS design:
- Override CSS variables for colors
- Customize component props for layout
- Use Tailwind classes for additional styling

### Performance Optimization

- All pages statically generated at build time
- Search index lazy-loaded on first search interaction
- Code splitting for MDX components
- Image optimization for any embedded images

## References

- [Fumadocs Official Documentation](https://fumadocs.vercel.app/docs)
- [Fumadocs MDX Setup Guide](https://www.fumadocs.dev/docs/mdx)
- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [MDX Documentation](https://mdxjs.com/)
