# Implementation Plan: Fumadocs Integration

## Overview

This implementation plan outlines the step-by-step process to integrate Fumadocs into AgencyOS, replacing the existing basic documentation system with a modern, GitBook-style documentation framework. The implementation will be done incrementally, with testing at each stage to ensure correctness.

## Tasks

- [x] 1. Install Fumadocs packages and configure TypeScript
  - Install fumadocs-core, fumadocs-ui, fumadocs-mdx, and @types/mdx
  - Install fast-check for property-based testing
  - Update tsconfig.json with import aliases for fumadocs-mdx collections
  - _Requirements: 1.1, 1.3_

- [x] 2. Configure Fumadocs MDX and Next.js integration
  - [x] 2.1 Create source.config.ts with docs collection definition
    - Define docs collection pointing to content/docs directory
    - Configure frontmatter schema (title, description, icon)
    - _Requirements: 1.1, 1.2_
  
  - [x] 2.2 Update next.config.ts to use Fumadocs MDX plugin
    - Import createMDX from fumadocs-mdx/next
    - Wrap existing config with withMDX
    - _Requirements: 1.2_
  
  - [x] 2.3 Create content source loader in src/lib/source.ts
    - Import docs collection from fumadocs-mdx:collections/server
    - Create loader with baseUrl '/docs'
    - Export source for use in app
    - _Requirements: 1.1, 1.4_

- [-] 3. Create content directory and migrate documentation
  - [x] 3.1 Create content/docs directory structure
    - Create content/docs folder in project root
    - _Requirements: 2.4_
  
  - [x] 3.2 Convert existing documentation to MDX format
    - Extract content from src/app/docs/whitepaper/page.tsx to content/docs/whitepaper.mdx
    - Extract content from src/app/docs/architecture/page.tsx to content/docs/architecture.mdx
    - Extract content from src/app/docs/getting-started/page.tsx to content/docs/getting-started.mdx
    - Extract content from src/app/docs/directors-console/page.tsx to content/docs/directors-console.mdx
    - Create content/docs/engine-room.mdx (currently missing implementation)
    - Create content/docs/index.mdx as documentation home page
    - Add proper frontmatter (title, description, icon) to each file
    - _Requirements: 2.1, 2.2, 2.3_

- [ ] 3.3 Write property test for content preservation
  - **Property 1: Content Preservation**
  - **Validates: Requirements 2.1, 2.2**
  - Generate random markdown content, write to MDX file, verify accessible through source loader
  - _Requirements: 2.1, 2.2_

- [-] 4. Implement documentation layout with Fumadocs UI
  - [x] 4.1 Create new docs layout using DocsLayout component
    - Replace src/app/docs/layout.tsx with Fumadocs DocsLayout
    - Configure navigation with AgencyOS branding
    - Add sidebar banner with AgencyOS description
    - Set defaultOpenLevel for navigation
    - _Requirements: 3.1, 3.2, 3.3, 7.1, 7.2, 7.3_
  
  - [x] 4.2 Implement dynamic documentation page route
    - Create src/app/docs/[[...slug]]/page.tsx
    - Implement page component using DocsPage and DocsBody
    - Add generateStaticParams for static generation
    - Add generateMetadata for SEO
    - Handle 404 for missing pages
    - _Requirements: 1.4, 3.4, 8.1_

- [ ] 4.3 Write property test for navigation completeness
  - **Property 2: Navigation Completeness**
  - **Validates: Requirements 3.1, 3.2**
  - Generate random file structure, build page tree, verify all files in navigation
  - _Requirements: 3.1, 3.2_

- [ ] 4.4 Write property test for route generation
  - **Property 6: Route Generation**
  - **Validates: Requirements 1.4**
  - For any MDX file, verify corresponding route exists and is accessible
  - _Requirements: 1.4_

- [-] 5. Implement search functionality
  - [x] 5.1 Create search API endpoint
    - Create src/app/api/search/route.ts
    - Use createSearchAPI from fumadocs-core/search/server
    - Index all documentation pages with title, description, url, and structuredData
    - _Requirements: 4.1, 4.2, 4.3_
  
  - [x] 5.2 Configure search in layout
    - Add search configuration to DocsLayout
    - Enable search bar in navigation
    - _Requirements: 4.1, 4.4, 4.5_

- [ ] 5.3 Write property test for search coverage
  - **Property 3: Search Coverage**
  - **Validates: Requirements 4.2, 4.3**
  - Generate random pages with unique text, verify search returns correct pages
  - _Requirements: 4.2, 4.3_

- [ ] 5.4 Write unit tests for search API
  - Test search endpoint returns results for known content
  - Test search handles empty queries
  - Test search handles special characters
  - _Requirements: 4.1, 4.2, 4.3_

- [-] 6. Implement table of contents
  - [x] 6.1 Configure TOC in page component
    - Pass toc data from page.data.toc to DocsPage component
    - Configure TOC to show on right side
    - Enable scroll-to-section on TOC click
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [ ] 6.2 Write property test for TOC generation
  - **Property 4: TOC Generation**
  - **Validates: Requirements 5.1, 5.2**
  - Generate random markdown with headings, verify TOC includes all headings in order
  - _Requirements: 5.1, 5.2_

- [x] 7. Checkpoint - Verify core functionality
  - Ensure all tests pass
  - Manually test navigation, search, and TOC
  - Verify all migrated content displays correctly
  - Ask the user if questions arise

- [x] 8. Customize styling to match AgencyOS design
  - [x] 8.1 Create custom CSS for Fumadocs components
    - Override Fumadocs CSS variables for dark theme colors
    - Match typography with existing AgencyOS styles
    - Ensure consistent spacing and borders
    - _Requirements: 7.1, 7.2_
  
  - [x] 8.2 Test responsive design
    - Verify mobile hamburger menu works
    - Test tablet and desktop layouts
    - Ensure TOC hides appropriately on small screens
    - _Requirements: 7.3_

- [ ] 8.3 Write property test for markdown rendering
  - **Property 5: Markdown Rendering**
  - **Validates: Requirements 6.1, 6.2, 6.3**
  - Generate random valid markdown, verify correct HTML output
  - _Requirements: 6.1, 6.2, 6.3_

- [x] 9. Add MDX custom components
  - [x] 9.1 Create custom MDX components
    - Create Callout component for notes/warnings
    - Create Tabs component for tabbed content
    - Create Card component for feature highlights
    - _Requirements: 6.4_
  
  - [x] 9.2 Configure MDX components in layout
    - Pass custom components to MDX provider
    - Document usage in a guide
    - _Requirements: 6.4, 6.5_

- [ ] 9.3 Write unit tests for custom components
  - Test Callout renders with different types (info, warning, error)
  - Test Tabs switches between tab content
  - Test Card displays title and content correctly
  - _Requirements: 6.4_

- [-] 10. Optimize performance
  - [x] 10.1 Verify static generation
    - Check that all pages are generated at build time
    - Verify no server-side rendering on page requests
    - _Requirements: 8.1_
  
  - [x] 10.2 Implement lazy loading for search
    - Ensure search index loads only when search is opened
    - _Requirements: 8.3_
  
  - [x] 10.3 Run Lighthouse performance audit
    - Test on production build
    - Verify performance score above 90
    - Address any performance issues
    - _Requirements: 8.4_

- [ ] 10.4 Write property test for static generation
  - **Property 7: Static Generation**
  - **Validates: Requirements 8.1, 8.2**
  - Verify all pages are statically generated and don't require SSR
  - _Requirements: 8.1, 8.2_

- [x] 11. Clean up old documentation system
  - [x] 11.1 Remove old documentation components
    - Delete old page components from src/app/docs/*/page.tsx
    - Keep layout.tsx for now (will be replaced)
    - _Requirements: 2.1_
  
  - [x] 11.2 Update navigation links
    - Verify all internal links point to correct new routes
    - Update any references in other parts of the app
    - _Requirements: 3.4_

- [x] 12. Final checkpoint and documentation
  - Ensure all tests pass
  - Run full build and verify no errors
  - Test all documentation pages manually
  - Verify search works across all content
  - Ask the user if questions arise

## Notes

- All tasks are required for comprehensive implementation
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties
- Unit tests validate specific examples and edge cases
- The implementation preserves all existing documentation content
- Fumadocs provides built-in components for sidebar, TOC, and search
- Custom styling will be applied to match AgencyOS dark theme
