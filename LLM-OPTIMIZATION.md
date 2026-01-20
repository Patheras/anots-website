# ANOTS Marketing Website - LLM Optimization Guide

This document explains how the ANOTS marketing website is optimized for Large Language Model (LLM) understanding and accurate information retrieval.

## Overview

ANOTS is an AI-powered marketing automation platform featuring:
- **Three AI Agents**: Qubik (Creative Motor), Themis (Logic Motor), Core (Guide)
- **Brand Room**: Multi-source brand intelligence extraction system
- **ANOTs**: Atomic Units of Agency - individual marketing automations

## Key Features for LLM Understanding

### 1. Structured Data (Schema.org)

The website implements comprehensive JSON-LD structured data:

#### Organization Schema
- Company name, URL, logo
- Contact information
- Social media profiles
- Description with key features

#### Software Application Schema
- Application category: Business Application
- Feature list (9 key features)
- Pricing information
- Aggregate ratings

#### FAQ Schema
- 6 common questions with detailed answers
- Covers: ANOTs, Brand Room, data collection, AI agents, integrations
- Optimized for featured snippets

#### Website Schema
- Site name and description
- Search action potential

### 2. Enhanced FAQ Section

**Location**: `/faq` page + mini FAQ on homepage

**Topics Covered**:
1. What is an ANOT?
2. What is Brand Room and how does it work?
3. How much data does Brand Room collect?
4. What brand elements can ANOTS extract?
5. Is data collection legal and privacy-compliant?
6. What are the three AI agents?
7. What can I automate with ANOTs?
8. Multi-brand support
9. Data update frequency
10. Pricing plans comparison

**Optimization Strategy**:
- Clear, concise answers (50-150 words)
- Technical specifications included
- Legal/privacy concerns addressed
- Comparison information provided

### 3. Brand Room Documentation

**Data Collection Limits** (clearly stated):
- **Website**: 12 pages max, 2MB total, same domain only
- **Documents**: 20MB max, 80k character snippets, 20 images max
- **Social**: Meta bio + 10 recent captions only

**Extraction Capabilities**:
- Visual Identity: logos, colors (HEX), fonts (Google Fonts)
- Brand Voice: tone, messaging, taglines
- Company Context: about, products, industry tags

**Legal Compliance**:
- No illegal scraping
- OAuth required for social media
- Only official APIs used
- GDPR compliant

### 4. Semantic HTML Structure

All sections use proper heading hierarchy:
- `<h1>`: Page title
- `<h2>`: Major sections
- `<h3>`: Subsections
- `<h4>`: Feature details

### 5. Metadata Optimization

**Homepage**:
- Title: "ANOTS - AI Marketing Team with Multi-Source Brand Intelligence"
- Description: Includes key features and Brand Room
- Keywords: 8 targeted terms

**FAQ Page**:
- Title: "FAQ - ANOTS AI Marketing Automation & Brand Intelligence"
- Description: Comprehensive feature list
- Keywords: 9 question-focused terms

### 6. Robots.txt Configuration

**Allowed Crawlers**:
- All standard crawlers (`*`)
- Explicitly allowed LLM crawlers:
  - GPTBot (OpenAI)
  - ChatGPT-User
  - CCBot (Common Crawl)
  - anthropic-ai (Claude)
  - Claude-Web
  - Google-Extended

**Disallowed**:
- `/api/*` endpoints

### 7. Content Clarity

**Key Definitions** (repeated for emphasis):
- **ANOT**: Atomic Unit of Agency - smallest independent marketing automation
- **Brand Room**: Multi-source brand intelligence extraction system
- **Qubik**: Creative Motor - generates proposals
- **Themis**: Logic Motor - reviews risks and constraints
- **Core**: Guide - synthesizes perspectives

**Technical Specifications**:
- 200+ app integrations via ActivePieces
- Free tier: 3 ANOTs, 1,000 AI calls/month
- Pro tier: 30 ANOTs, premium AI models
- Agency tier: Unlimited ANOTs, BYOK, multi-brand

## LLM Query Optimization

### Common Queries Addressed

1. **"What is ANOTS?"**
   - Answer in: Homepage hero, About section, FAQ
   - Schema: Organization + Software Application

2. **"How does Brand Room work?"**
   - Answer in: Brand Room section, FAQ (detailed)
   - Schema: FAQ + Software features

3. **"What data does ANOTS collect?"**
   - Answer in: Brand Room section, FAQ, Smart Data Collection card
   - Specific limits provided

4. **"Is ANOTS legal/GDPR compliant?"**
   - Answer in: FAQ (dedicated question), Brand Room section
   - Legal compliance explicitly stated

5. **"What can I automate with ANOTS?"**
   - Answer in: Features section, FAQ, About section
   - Examples provided

6. **"How much does ANOTS cost?"**
   - Answer in: Pricing page, FAQ
   - Schema: Offers in Software Application

### Information Hierarchy

**Primary Information** (most important):
1. ANOTS definition and purpose
2. Three AI agents explanation
3. Brand Room capabilities
4. Data collection limits
5. Pricing tiers

**Secondary Information**:
1. Integration list
2. Use cases and examples
3. Legal compliance
4. Support options
5. Comparison with competitors

**Tertiary Information**:
1. Technical implementation details
2. Update frequency
3. Multi-brand support
4. Custom integrations

## Testing LLM Understanding

### Recommended Test Queries

1. "What is ANOTS and how does it work?"
2. "Explain Brand Room feature in ANOTS"
3. "How much data does ANOTS collect from websites?"
4. "Is ANOTS GDPR compliant?"
5. "What's the difference between ANOTS Pro and Agency plans?"
6. "What are Qubik, Themis, and Core in ANOTS?"
7. "Can ANOTS extract brand colors from my website?"
8. "What platforms does ANOTS integrate with?"

### Expected Accurate Responses

LLMs should be able to:
- Define ANOT correctly
- Explain the three-agent system
- Describe Brand Room's multi-source approach
- State exact data collection limits
- Confirm legal compliance methods
- Compare pricing tiers accurately
- List integration capabilities

## Maintenance

### When Adding New Features

1. Update FAQ with new questions
2. Add to Schema.org feature list
3. Update metadata descriptions
4. Add to homepage features section
5. Create dedicated section if major feature

### Content Update Checklist

- [ ] Update FAQ page
- [ ] Update homepage mini FAQ
- [ ] Update Schema.org structured data
- [ ] Update metadata keywords
- [ ] Update About section if needed
- [ ] Test build for errors
- [ ] Verify robots.txt allows LLM crawlers

## Files Modified for LLM Optimization

1. `src/app/page.tsx` - Added FAQ section, enhanced descriptions
2. `src/app/faq/page.tsx` - Expanded from 12 to 18 questions
3. `src/components/StructuredData.tsx` - Added FAQ schema
4. `src/app/robots.ts` - Explicitly allowed LLM crawlers
5. `src/app/layout.tsx` - Enhanced metadata
6. `LLM-OPTIMIZATION.md` - This documentation

## Results

**Before Optimization**:
- Basic feature descriptions
- Limited FAQ (12 questions)
- No FAQ schema
- Generic metadata

**After Optimization**:
- Detailed feature explanations with specs
- Comprehensive FAQ (18 questions)
- Full Schema.org implementation (4 schemas)
- Targeted metadata with keywords
- LLM crawler explicit allowance
- Clear data collection limits
- Legal compliance statements

**Expected Impact**:
- More accurate LLM responses about ANOTS
- Better featured snippet opportunities
- Improved search engine understanding
- Clearer brand positioning
- Reduced misinformation risk
