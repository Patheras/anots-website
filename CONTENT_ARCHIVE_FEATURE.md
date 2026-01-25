# Content Archive Feature

## Overview
Added content archiving feature to store clean text content from crawled pages for future content generation (banners, blogs, descriptions, etc.).

## What's New

### 1. Content Archive Storage
- **Location**: `snapshot.context.contentArchive`
- **Data Stored**:
  - Page URL
  - Page title
  - Clean text content (no HTML tags)
  - Word count
  - Character count
  - Total characters across all pages
  - Extraction timestamp

### 2. Type Definitions
Added new types in `sources/types.ts`:
- `ContentArchive` - Main archive container
- `ArchivedPage` - Individual page data
- `ContentSection` - Optional structured sections (for future use)

### 3. Data Collection
In `merge.ts`:
- Automatically collects `textContent` from all crawled pages
- Stores up to 10 pages
- Calculates word and character counts
- Tracks total characters for all pages

### 4. UI Display
In `DraftView.tsx`:
- New collapsible "Content Archive" section
- Shows page count and total character count
- Lists all archived pages with:
  - Title and URL
  - Word and character counts
  - Expandable content preview (first 500 chars)
- Collapsed by default to avoid clutter

## Usage

### For Content Generation
The archived content can be used to:
1. **Generate banners** - Extract hero messages and CTAs
2. **Write blog posts** - Use product descriptions and features
3. **Create social media content** - Pull key messages and quotes
4. **Generate meta descriptions** - Summarize page content
5. **Build email campaigns** - Extract value propositions

### Accessing the Data
```typescript
const archive = snapshot.context.contentArchive;

// Get all page content
archive.pages.forEach(page => {
  console.log(`${page.title}: ${page.wordCount} words`);
  console.log(page.textContent);
});

// Total content size
console.log(`Total: ${archive.totalChars} characters`);
```

## Example Data Structure
```json
{
  "contentArchive": {
    "pages": [
      {
        "url": "https://example.com",
        "title": "Example Company - AI Solutions",
        "textContent": "Welcome to Example Company. We provide cutting-edge AI solutions...",
        "wordCount": 450,
        "charCount": 2800
      }
    ],
    "totalChars": 15000,
    "extractedAt": "2026-01-25T10:30:00Z"
  }
}
```

## Benefits
1. **No re-crawling needed** - Content is stored during initial extraction
2. **Clean text** - HTML tags removed, ready for AI processing
3. **Efficient storage** - Only text content, no markup overhead
4. **Metadata included** - Word/char counts for content planning
5. **Source tracking** - URLs preserved for attribution

## Future Enhancements
- [ ] Structured section detection (hero, features, testimonials, etc.)
- [ ] Content categorization by type
- [ ] Sentiment analysis per page
- [ ] Key phrase extraction
- [ ] Content similarity scoring
- [ ] Export to various formats (Markdown, JSON, CSV)

## Technical Details
- Uses existing `textContent` field from PageData
- No additional crawling overhead
- Stored in brand_drafts.snapshot_json
- Accessible via Brand Room UI
- Compatible with all existing features
