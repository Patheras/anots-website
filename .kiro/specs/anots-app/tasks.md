# Implementation Plan: ANOTS (Agency Marketing Operating System)

## Overview

This implementation plan converts the ANOTS design into incremental development tasks aligned with ANOTS_GRAND_PLAN.md. The roadmap starts from Task 7.3, focusing on mention routing, TCAM V2 debate UI, approval gate, and Activity Hub foundation. Each task builds toward the core ANOTS philosophy: no execution without approval, trust-by-design collaboration, and ANOT-first terminology.

## Tasks

- [ ] 7. TCAM V2 Foundation and Approval System
  - [ ] 7.3 Mention Router, Debate UI, Approval Gate, Activity Hub
    
    **Goal**: Implement the core TCAM V2 interaction model with mention-based routing, three-layer debate UI (Qubik/Themis/Core), mandatory approval gate, and minimal Activity Hub for 24h/7d views.
    
    **Dependencies**: Existing authentication, database schema, basic UI shell
    
    - [x] 7.3a Mention Router + ProviderFactory + Tier Gating + Fallback
      
      **Goal**: Build the routing layer that directs user input to appropriate agents based on mentions, manages model provider selection based on tier, and implements self-healing fallback.
      
      **Deliverables**:
      - `src/lib/routing/mention-router.ts`: Parse mentions (@Qubik, @Themis, @All, no mention) and route to agents
      - `src/lib/providers/provider-factory.ts`: Select models based on tier (Explorer/Pro/Agency) and agent role (Core/Qubik/Themis)
      - `src/lib/providers/openrouter-client.ts`: OpenRouter API client with retry logic
      - `src/lib/providers/fallback-handler.ts`: Implement 429/500 error detection, backup model retry (1 attempt), controlled error payload
      - `src/lib/tier/tier-gating.ts`: Enforce Explorer 3-ANOT limit, Pro credit checks, Agency BYOK validation
      - Update `profiles` table to include `tier`, `credits_balance`, `byok_provider_keys` fields
      
      **Definition of Done**:
      - Mention parser correctly identifies no mention → Core, @Qubik → Qubik, @Themis → Themis, @All → all three
      - ProviderFactory selects correct model based on tier and agent role
      - OpenRouter client handles 429/500 with 1 retry to backup model, returns structured error if retry fails
      - Tier gating blocks Explorer users at 3 active ANOTs, warns Pro users on low credits
      - Unit tests for mention parsing, provider selection, fallback logic, tier enforcement
      
      **Out of Scope**:
      - Actual ANOT execution (only routing and approval)
      - Marketing Room features
      - ActivePieces/BannerBear integration
    
    - [x] 7.3b Duel UI (Qubik Card + Themis Badge + Core Synthesis)
      
      **Goal**: Create the trust-by-design UI that displays Qubik proposals, Themis reviews, and Core synthesis side-by-side before user approval.
      
      **Deliverables**:
      - `src/components/debate/QubikCard.tsx`: Display Qubik output (title, proposal, artifacts, assumptions)
      - `src/components/debate/ThemisBadge.tsx`: Display Themis review (status badge: approve/warn/reject, reasons, risks, costNote)
      - `src/components/debate/CoreSynthesis.tsx`: Display Core synthesis (combined perspective, nextStepQuestion, upgradeNudge)
      - `src/components/debate/DebateView.tsx`: Container component that arranges all three layers
      - `src/app/console/page.tsx`: Integrate DebateView into Directors Console
      - CSS/Tailwind styling for visual hierarchy (Core synthesis at top, Qubik and Themis side-by-side)
      
      **Definition of Done**:
      - UI displays all three agent outputs clearly and simultaneously
      - Qubik card shows proposal with artifacts and assumptions
      - Themis badge shows status (approve/warn/reject) with color coding, reasons, and risks
      - Core synthesis appears at top with clear next steps
      - Responsive design works on desktop and tablet
      - Visual hierarchy emphasizes trust-by-design (all perspectives visible)
      
      **Out of Scope**:
      - Actual agent LLM calls (mock data acceptable for UI development)
      - Approval persistence (handled in 7.3c)
      - Activity Hub integration
    
    - [x] 7.3c Approval Persistence (Approve/Reject Recording)
      
      **Goal**: Implement the approval gate that captures user decisions and prevents execution without explicit approval.
      
      **Deliverables**:
      - `src/components/debate/ApprovalGate.tsx`: Approve/Reject buttons with confirmation
      - `src/lib/approvals/approval-service.ts`: Service to record approval decisions
      - `src/app/api/approvals/route.ts`: API endpoint to persist approval decisions
      - Database migration: Create `anot_approvals` table (approval_id, anot_id, plan_id, actor_id, decision, decided_at, notes)
      - `src/lib/approvals/approval-guard.ts`: Guard function that blocks execution if no approval exists
      
      **Definition of Done**:
      - User can click "Approve" or "Reject" on debate view
      - Approval decision is persisted to `anot_approvals` table with timestamp
      - Approval guard function prevents any execution without approved record
      - API endpoint validates user ownership before recording decision
      - Unit tests for approval service, guard function, API endpoint
      - Property-based test: no execution path exists without approval record
      
      **Out of Scope**:
      - Actual ANOT execution engine
      - Approval history UI (future feature)
      - Approval workflow notifications
    
    - [x] 7.3d Activity Hub Minimal (Daily Focus + 7d + 30d View, Read API)
      
      **Goal**: Create the minimal Activity Hub that displays ANOT activity with Daily Focus (to-do list style), 7-day, and 30-day views, queryable by Core agent.
      
      **Deliverables**:
      - `src/components/activity/ActivityHub.tsx`: Main Activity Hub component with Daily Focus/7d/30d tabs
      - `src/components/activity/DailyFocus.tsx`: To-do list style view for today's ANOTs (pending, in-progress, completed)
      - `src/components/activity/ActivityTimeline.tsx`: Timeline view of ANOT executions (7d/30d)
      - `src/components/activity/ActivityCard.tsx`: Individual activity card (production timestamp, storage location, status)
      - `src/app/api/activity/route.ts`: API endpoint to fetch activity data (filter by time range, status)
      - `src/lib/activity/activity-service.ts`: Service to query `anot_executions` and related tables
      - `src/app/dashboard/activity/page.tsx`: Activity Hub page in Engine Room
      
      **Definition of Done**:
      - Activity Hub displays Daily Focus (to-do list), 7-day, and 30-day views with tab switching
      - Daily Focus shows today's ANOTs grouped by status (pending, in-progress, completed) with checkboxes
      - Timeline shows ANOT executions with timestamp, status, storage location (7d/30d views)
      - API endpoint supports filtering by time range (today, 7d, 30d, custom) and status
      - Core agent can query Activity Hub data to answer user questions ("What's on my schedule today?", "Show me this week's ANOTs")
      - Empty state message when no activity exists
      - Unit tests for activity service, API endpoint
      
      **Out of Scope**:
      - Publishing destinations (IG, X, WP) - future feature
      - Scheduled publications - future feature
      - Activity Hub editing or management
      - Real-time updates (polling acceptable for MVP)

  - [ ] 7.4 Marketing Room and Brand Standards
    
    **Goal**: Implement the Marketing Room layer that extracts and enforces brand standards across all ANOT outputs.
    
    **Dependencies**: Task 7.3 (Mention Router, Debate UI, Approval Gate)
    
    **Deliverables**:
    - `src/lib/brand/brand-archaeologist.ts`: Extract brand colors (HEX), logo assets, tone of voice from user-provided URL/signals
    - `src/lib/brand/google-fonts-client.ts`: Google Fonts API integration (font selection limited to Google Fonts)
    - `src/lib/brand/layout-rules.ts`: Logo safe zones, placement coordinates, social format presets
    - `src/lib/brand/tone-profile.ts`: Tone of voice profiling and validation
    - Database migration: Create `brand_standards` table (user_id, colors, logo_urls, fonts, tone_profile, layout_rules)
    - `src/components/brand/BrandStandardsEditor.tsx`: UI to view and edit brand standards
    - `src/app/dashboard/brand/page.tsx`: Brand Standards page in Engine Room
    - Integration: Qubik must validate outputs against brand standards, Themis flags violations
    
    **Definition of Done**:
    - Brand Archaeologist extracts colors, logos, fonts, tone from URL or uploaded files
    - Google Fonts integration limits font selection to Google Fonts only
    - Layout rules define logo safe zones and placement coordinates
    - Tone of voice profile is stored and queryable
    - Qubik outputs conform to brand standards
    - Themis flags brand standard violations in review
    - UI allows users to view and edit brand standards
    - Unit tests for brand extraction, font validation, tone profiling
    
    **Out of Scope**:
    - Real-time preview (future feature)
    - Magic Style one-click application (future feature)
    - Multi-brand support (single brand per user for MVP)

  - [ ] 7.5 Data Engine and Performance Optimization
    
    **Goal**: Implement data management strategies for large datasets: context management, big data windowing, and virtual scroll.
    
    **Dependencies**: Task 7.3 (Activity Hub), Task 7.4 (Marketing Room)
    
    **Deliverables**:
    - `src/lib/context/context-manager.ts`: Automatic context window management, summary generation when context fills
    - `src/lib/data/windowing.ts`: Big data windowing logic (send only relevant data window to LLM)
    - `src/components/tables/VirtualScrollTable.tsx`: Virtual scroll component for large tables (lazy loading)
    - `src/lib/data/data-chunker.ts`: Chunk large datasets for windowed processing
    - Integration: Context manager monitors LLM context usage, triggers summary when threshold reached
    - Integration: Activity Hub uses virtual scroll for large execution histories
    
    **Definition of Done**:
    - Context manager tracks token usage, generates summary when context > 80% full
    - Big data windowing sends only relevant data slices to LLM (not entire dataset)
    - Virtual scroll table renders large lists without performance degradation
    - Activity Hub with 1000+ executions loads smoothly with virtual scroll
    - Unit tests for context management, windowing logic, chunking
    - Performance test: 10,000 row table renders in < 2 seconds
    
    **Out of Scope**:
    - Advanced caching strategies
    - Database query optimization (acceptable for MVP to use basic indexes)
    - Real-time data streaming

  - [ ] 7.6 Creative Suite Integration (ActivePieces + BannerBear)
    
    **Goal**: Integrate ActivePieces for workflow automation and BannerBear for visual content generation, enabling full ANOT execution capabilities.
    
    **Dependencies**: Task 7.3 (Approval Gate), Task 7.4 (Marketing Room)
    
    **Deliverables**:
    - `src/lib/integrations/activepieces-client.ts`: ActivePieces API client for workflow creation and triggering
    - `src/lib/integrations/bannerbear-client.ts`: BannerBear API client for visual generation
    - `src/lib/execution/execution-engine.ts`: ANOT execution engine that orchestrates steps (only runs after approval)
    - Database migration: Create `anot_executions` table (execution_id, anot_id, approval_id, status, started_at, completed_at, output, error_log)
    - `src/components/creative/VisualPreview.tsx`: Real-time preview of generated visuals
    - `src/components/creative/MagicStyleButton.tsx`: One-click brand standards application
    - `src/app/api/execute/route.ts`: API endpoint to trigger ANOT execution (validates approval exists)
    - Integration: Execution engine checks approval_id before running, logs all steps to `anot_executions`
    
    **Definition of Done**:
    - ActivePieces client can create workflows, trigger executions, check status
    - BannerBear client can generate images from templates with brand standards applied
    - Execution engine validates approval exists before running any ANOT
    - Execution engine logs all steps (started_at, completed_at, output, errors)
    - Visual preview shows generated content in real-time
    - Magic Style button applies brand standards (colors, fonts, logo placement) to content
    - API endpoint blocks execution if no approval record exists
    - Unit tests for ActivePieces client, BannerBear client, execution engine
    - Property-based test: execution engine never runs without valid approval_id
    
    **Out of Scope**:
    - Advanced workflow templates (basic templates acceptable for MVP)
    - Multi-format export (focus on primary formats: PNG for images, MP4 for video)
    - Workflow scheduling (manual trigger only for MVP)

## Notes

- **ANOT Terminology**: All UI and new code must use ANOT terminology (no "flow", "automation", "task", "workflow")
- **Approval Gate**: Execution is ALWAYS gated by approval - this is non-negotiable
- **Mention Routing**: Primary interaction model - no mention = Core, @Qubik = Qubik, @Themis = Themis, @All = debate
- **Tier Gating**: Explorer limited to 3 active ANOTs, Pro unlimited with credits, Agency unlimited with BYOK
- **Self-Healing**: Model failures (429/500) trigger 1 retry with backup model, then controlled error payload
- **Trust by Design**: UI always shows Qubik proposal + Themis review + Core synthesis before approval
- **Signal-First**: Onboarding emphasizes "upload screenshot/file" over "provide API" for lower cognitive load
- **Activity Hub**: Minimal 24h/7d views for MVP, expandable to richer queries later
- **Marketing Room**: Brand standards enforced by Qubik (conformance) and Themis (violation flagging)
- **Data Engine**: Performance optimization for large datasets and long conversations
- **Creative Suite**: Final integration that enables full ANOT execution with visual generation

## Task Execution Order

1. **Task 7.3**: Foundation (Mention Router, Debate UI, Approval Gate, Activity Hub) - CRITICAL PATH
2. **Task 7.4**: Marketing Room (Brand Standards) - Enables quality outputs
3. **Task 7.5**: Data Engine (Performance) - Enables scale
4. **Task 7.6**: Creative Suite (Integrations) - Enables full execution

Each task is designed to be independently testable and incrementally valuable. Task 7.3 is the critical path that enables all subsequent work.
