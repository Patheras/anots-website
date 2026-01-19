# Design Document: ANOTS (Agency Marketing Operating System)

## Overview

ANOTS is a standalone SaaS web application built with Next.js 14 that provides marketing automation through ANOT (Atomic Unit of Agency) orchestration. The system features a dual-interface architecture: a conversational "Directors Console" for AI-driven orchestration and a traditional "Engine Room" dashboard for granular control. The application implements TCAM V2 (Three-Layer Hybrid Brain Protocol) with Core, Qubik, and Themis agents, providing trust-by-design collaboration with mandatory approval gates before execution.

**Core Principle**: No execution without approval. Users see Qubik proposals, Themis reviews, and Core synthesis before any action is taken.

## ANOT Terminology Rules

### User-Facing Language

The following terms are FORBIDDEN in UI and public APIs:
- Flow
- Automation
- Task
- Workflow

All user-facing concepts use ANOT terminology:
- **ANOT**: Atomic Unit of Agency - the smallest independent work unit
- **Default ANOTs**: Pre-optimized production units (video generation, visual design, blog writing)
- **Watchers (Signal ANOTs)**: External world monitors that capture signals and raise alerts

### Legacy Code Transition

Internal code may temporarily use legacy terms (flows, tasks) during migration, but all new schemas, APIs, and UI components must use ANOT terminology.

## TCAM V2: Three-Layer Hybrid Brain Protocol

### Agent Roles and Responsibilities

#### ANOTS Core (Guide)
- **Purpose**: Orchestration, routing, synthesis, onboarding
- **Responsibilities**:
  - Welcome and onboard new users
  - Route mentions to appropriate agents
  - Synthesize Qubik and Themis outputs
  - Answer Activity Hub queries
  - Provide upgrade nudges based on tier limits
- **Model Tier**:
  - Explorer: google/gemini-1.5-flash:free
  - Pro: Claude 3.5 Sonnet or equivalent
  - Agency: User's BYOK model (quality-first)

#### Qubik (Creative Motor)
- **Purpose**: Production, creative proposals, content generation
- **Responsibilities**:
  - Generate creative proposals
  - Produce drafts and artifacts
  - Suggest language, tone, and visual concepts
  - Provide creative alternatives
- **Model Tier**:
  - Explorer: google/gemini-2.0-flash-exp:free, meta-llama/llama-3.3-70b-instruct:free
  - Pro: Claude 3.5 Sonnet or equivalent premium
  - Agency: User's BYOK model (quality-first)
- **Output Contract**:
```json
{
  "title": "string",
  "proposal": "string",
  "artifacts": ["array of generated content"],
  "assumptions": ["array of assumptions made"]
}
```

#### Themis (Logic Motor)
- **Purpose**: Review, risk analysis, constraint validation
- **Responsibilities**:
  - Audit Qubik proposals
  - Identify risks and constraints
  - Validate budget and resource limits
  - Provide security barriers
  - Flag tier limit violations
- **Model Tier**:
  - Explorer: deepseek/deepseek-r1:free, nvidia/llama-3.1-nemotron-70b-instruct:free
  - Pro: OpenAI o1-preview or equivalent reasoning premium
  - Agency: User's BYOK model (quality-first)
- **Output Contract**:
```json
{
  "status": "approve | warn | reject",
  "reasons": ["array of reasoning"],
  "risks": ["array of identified risks"],
  "costNote": "optional cost estimate"
}
```

### Mention Routing Protocol

User input is routed based on mentions:

| Mention | Active Agents | Use Case |
|---------|--------------|----------|
| No mention | Core only | General questions, navigation, Activity Hub queries |
| @Qubik | Qubik only | Direct creative requests, content generation |
| @Themis | Themis only | Risk analysis, constraint validation |
| @All | Core + Qubik + Themis | Full debate protocol (Proposal → Review → Synthesis) |

### Debate Protocol (Adversarial Collaboration)

When @All is mentioned or complex ANOT creation is triggered:

1. **PROPOSAL**: Qubik generates creative proposal
2. **REVIEW**: Themis audits proposal for risks and constraints
3. **SYNTHESIS**: Core combines both perspectives and presents to user
4. **APPROVAL GATE**: User must approve or reject before execution

UI displays all three layers visibly:
- Qubik card with proposal
- Themis badge with review status
- Core synthesis at top

## Model Routing and Tier Gating

### Provider Strategy

**Unified Provider**: OpenRouter for all model access

### Tier Structure

#### Tier 1: Explorer (Free)
- **Motto**: "Just to explore"
- **Limits**: Maximum 3 active ANOTs
- **Models**: Free tier models only (see TCAM V2 section)
- **Use Case**: Trial, learning, small projects

#### Tier 2: Pro (Credit-based)
- **Motto**: "Powerful production"
- **Limits**: Unlimited ANOTs
- **Models**: Premium models (Claude 3.5 Sonnet, OpenAI o1-preview)
- **Billing**: Credit consumption per operation
- **Features**: Cost estimates before heavy operations

#### Tier 3: Agency (BYOK)
- **Motto**: "Unlimited freedom"
- **Limits**: Unlimited ANOTs
- **Models**: User's own OpenAI or Anthropic API keys
- **Billing**: Direct to user's provider account
- **Features**: Highest quality model selection

### Fallback Policy (Self-Healing)

When model calls fail (429 rate limit, 500 server error):

1. **Retry**: Attempt same intent with backup model (1 retry only)
2. **Controlled Error**: If retry fails, return structured error payload to user with clear status

```typescript
interface ErrorPayload {
  status: 'error'
  code: '429' | '500' | 'unknown'
  message: string
  retryAttempted: boolean
  suggestedAction: string
}
```

## Approval Gate Architecture

### Mandatory Approval Flow

**Critical Rule**: No execution without explicit user approval.

### Approval Process

1. **Plan Generation**: System generates execution plan (ANOT definition, steps, resources)
2. **Preview**: User sees complete plan with:
   - Qubik proposal
   - Themis review
   - Core synthesis
   - Estimated cost (if Pro tier)
   - Resource requirements
3. **Decision**: User clicks "Approve" or "Reject"
4. **Persistence**: Decision stored in `anot_approvals` table
5. **Execution**: Only approved plans proceed to execution

### Database Schema for Approvals

```sql
CREATE TABLE anot_approvals (
  approval_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  anot_id UUID REFERENCES anots(id),
  plan_id UUID,
  actor_id UUID REFERENCES profiles(id),
  decision VARCHAR(10) CHECK (decision IN ('approve', 'reject')),
  decided_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  notes TEXT
);
```

## Output Contracts

### Core Output
```json
{
  "synthesis": "Combined perspective from Qubik and Themis",
  "nextStepQuestion": "Optional question to guide user",
  "upgradeNudge": "Optional tier upgrade suggestion"
}
```

### Qubik Output
```json
{
  "title": "Proposal title",
  "proposal": "Detailed creative proposal",
  "artifacts": [
    {
      "type": "text | image | video",
      "content": "Generated content or URL",
      "metadata": {}
    }
  ],
  "assumptions": ["Assumption 1", "Assumption 2"]
}
```

### Themis Output
```json
{
  "status": "approve | warn | reject",
  "reasons": ["Reason 1", "Reason 2"],
  "risks": [
    {
      "severity": "low | medium | high",
      "description": "Risk description",
      "mitigation": "Suggested mitigation"
    }
  ],
  "costNote": "Estimated cost: $X or Y credits"
}
```

## Database Expectations

### Core Tables

#### profiles
```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  tier VARCHAR(20) CHECK (tier IN ('explorer', 'pro', 'agency')),
  credits_balance DECIMAL(10,2) DEFAULT 0,
  byok_provider_keys JSONB, -- encrypted refs for agency tier
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### anots
```sql
CREATE TABLE anots (
  anot_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID REFERENCES profiles(id),
  name VARCHAR(255) NOT NULL,
  type VARCHAR(50) CHECK (type IN ('default', 'watcher')),
  status VARCHAR(20) CHECK (status IN ('active', 'paused', 'archived')),
  definition JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### anot_approvals
See "Approval Gate Architecture" section above.

#### anot_executions
```sql
CREATE TABLE anot_executions (
  execution_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  anot_id UUID REFERENCES anots(id),
  approval_id UUID REFERENCES anot_approvals(approval_id),
  status VARCHAR(20) CHECK (status IN ('pending', 'running', 'completed', 'failed')),
  started_at TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE,
  output JSONB,
  error_log TEXT
);
```

## Onboarding Ritual

### Dummy Proof Build Process

Users are never presented with blank screens or complex forms. Onboarding is a guided ritual:

#### Step 1: Welcome
Core message: "Not knowing where to start is completely normal. Your head might be spinning. Let's build your first ANOT together."

#### Step 2: Identity Classification
Core asks simple questions to classify user:
- Solo entrepreneur
- Agency
- Corporate brand

This classification influences default ANOT recommendations.

#### Step 3: Account Check
System checks:
- Current tier (Explorer/Pro/Agency)
- Credit balance (if Pro)
- BYOK status (if Agency)

#### Step 4: ANOT Build
Sequential questions to build ANOT plan:
- What do you want to achieve?
- What signals should trigger this?
- What outputs do you need?

Signal-first approach: "Upload a screenshot or file, I'll capture the signal."

#### Step 5: Approval
User sees complete plan with Qubik proposal, Themis review, Core synthesis.
User clicks "Approve" or "Reject".

#### Step 6: Execution
Only after approval, execution begins (future implementation).

### Stage Graph UI

Vertical progress graph in chat interface:
1. ✓ Identity
2. ✓ Brand Analysis
3. → Strategic Plan
4. ⏳ Setup

## Activity Hub

### Purpose
Central dashboard for ANOT operations and outputs.

### Views

#### 24-Hour Operational View
- Recent executions
- Generated artifacts
- Active ANOTs
- Pending approvals

#### 7-Day Strategic View
- Weekly production summary
- Storage locations (Drive, Docs, DB)
- Publishing destinations (IG, X, WP)
- Scheduled publications
- Status overview

### Queryable Parameters
- Production timestamp
- Storage location
- Publishing destination
- Publication schedule
- Execution status

### Core Integration
Core can answer Activity Hub queries:
- "What's on my schedule tomorrow?"
- "Where were my content pieces saved?"
- "Show me this week's production"

## Architecture

### Technology Stack
- **Frontend**: Next.js 14 with App Router, TypeScript, Tailwind CSS, Shadcn/UI
- **Database**: Supabase PostgreSQL with Row Level Security
- **Authentication**: Supabase Auth
- **Model Provider**: OpenRouter (unified)
- **Deployment**: Docker Compose on Hetzner + Coolify

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     User Interface                          │
│  ┌──────────────────────┐  ┌──────────────────────────┐   │
│  │ Directors Console    │  │ Engine Room              │   │
│  │ (Chat + Stage Graph) │  │ (Dashboard + Tables)     │   │
│  └──────────────────────┘  └──────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                   Mention Router                            │
│  Routes to: Core | Qubik | Themis | All                    │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                  TCAM V2 Agent Layer                        │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                 │
│  │   Core   │  │  Qubik   │  │  Themis  │                 │
│  │ (Guide)  │  │(Creative)│  │ (Logic)  │                 │
│  └──────────┘  └──────────┘  └──────────┘                 │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│              Provider Factory + Tier Gating                 │
│  OpenRouter → Free/Premium/BYOK models                      │
│  Fallback on 429/500 errors                                 │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                   Approval Gate                             │
│  Preview → Approve/Reject → Persistence                     │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│              Execution Engine (Future)                      │
│  ANOT execution, artifact generation, publishing            │
└─────────────────────────────────────────────────────────────┘
```

## Error Handling and Self-Healing

### Model Call Failures

When OpenRouter returns 429 (rate limit) or 500 (server error):

1. **Detect**: Catch error from OpenRouter API
2. **Retry**: Attempt same intent with backup model from tier's model list (1 retry only)
3. **Fallback**: If retry fails, return controlled error payload:

```typescript
{
  status: 'error',
  code: '429',
  message: 'Model temporarily unavailable. Please try again in a moment.',
  retryAttempted: true,
  suggestedAction: 'Wait 30 seconds and retry, or upgrade to Pro for priority access.'
}
```

### Tier Limit Enforcement

When Explorer user reaches 3 active ANOTs:
- Block new ANOT creation
- Core provides upgrade nudge: "You've reached your Explorer limit. Upgrade to Pro for unlimited ANOTs."

When Pro user has low credits:
- Warn before expensive operations
- Show estimated cost
- Suggest credit purchase

## Testing Strategy

### Dual Testing Approach

**Unit Tests**: Specific examples, edge cases, error conditions
- Component rendering
- API endpoints
- Database operations
- Integration points

**Property-Based Tests**: Universal properties across all inputs
- Approval gate enforcement (no execution without approval)
- Tier limit enforcement
- Mention routing correctness
- Output contract compliance

### Testing Framework
- **Unit Tests**: Jest + React Testing Library
- **Property-Based Tests**: Fast-check (minimum 100 iterations per property)

## Future Roadmap

### Phase 1 (Current): Foundation
- Mention routing
- TCAM V2 agent layer
- Approval gate
- Activity Hub (read-only)

### Phase 2: Marketing Room
- Brand Archaeologist
- Google Fonts integration
- Tone of Voice profiling

### Phase 3: Data Engine
- Big data windowing
- Virtual scroll
- Context management

### Phase 4: Creative Suite
- ActivePieces integration
- BannerBear integration
- Real-time preview
- Magic Style

## Notes

- All UI text must use ANOT terminology (no "flow", "automation", "task", "workflow")
- Execution is ALWAYS gated by approval
- Mention routing is the primary interaction model
- Tier limits are strictly enforced
- Self-healing is mandatory for model failures
- Trust-by-design: users see all three agent perspectives before approval
