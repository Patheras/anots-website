# Requirements Document

## Introduction

Agency Marketing Operating System (Agency OS) is a standalone SaaS-ready web application that provides marketing automation and campaign management capabilities. The system operates independently from Foundation and supports dual interaction modes: a conversational "Directors Console" for high-level orchestration and a traditional "Engine Room" dashboard for granular control.

## Glossary

- **Agency_OS**: The standalone marketing operating system web application
- **Directors_Console**: Chat-based interface for AI-driven campaign orchestration
- **Engine_Room**: Traditional dashboard interface for manual data management
- **Automation_Engine**: ActivePieces-based workflow automation system
- **Visual_Engine**: BannerBear-based visual content generation system
- **Campaign**: A marketing initiative with multiple touchpoints and assets
- **Signal**: External data input that triggers campaign actions
- **Artifact**: Generated content (visuals, copy, etc.) produced by the system

## Requirements

### Requirement 1: Standalone Web Application Architecture

**User Story:** As a marketing agency, I want Agency OS to operate as an independent web application, so that it can be accessed from any device without local software dependencies.

#### Acceptance Criteria

1. THE Agency_OS SHALL be built as a Next.js 14 application with App Router
2. THE Agency_OS SHALL use TypeScript for type safety and developer experience
3. THE Agency_OS SHALL be deployable to standard web hosting platforms (Vercel, VPS)
4. THE Agency_OS SHALL operate independently of any local desktop applications
5. THE Agency_OS SHALL handle its own authentication, database, and background jobs

### Requirement 2: Dual Interface System

**User Story:** As a user, I want to interact with Agency OS through both conversational and traditional interfaces, so that I can choose the most appropriate method for each task.

#### Acceptance Criteria

1. THE Agency_OS SHALL provide a Directors_Console interface for chat-based interactions
2. THE Agency_OS SHALL provide an Engine_Room interface for traditional dashboard management
3. WHEN a user accesses the application, THE Agency_OS SHALL allow switching between interface modes
4. THE Directors_Console SHALL connect to OpenAI/Claude APIs for AI-powered conversations
5. THE Engine_Room SHALL provide data tables, forms, and settings for manual control

### Requirement 3: Database and Authentication System

**User Story:** As a system administrator, I want secure multi-user access with persistent data storage, so that multiple team members can collaborate safely.

#### Acceptance Criteria

1. THE Agency_OS SHALL use Supabase for PostgreSQL database hosting
2. THE Agency_OS SHALL use Supabase Auth for user authentication and authorization
3. THE Agency_OS SHALL support multi-user access with role-based permissions
4. THE Agency_OS SHALL persist all campaign, signal, and artifact data
5. WHEN a user logs in, THE Agency_OS SHALL maintain session state across browser refreshes

### Requirement 4: Campaign Management System

**User Story:** As a marketing manager, I want to create and manage marketing campaigns, so that I can coordinate multiple marketing initiatives effectively.

#### Acceptance Criteria

1. THE Agency_OS SHALL allow users to create new marketing campaigns
2. THE Agency_OS SHALL store campaign metadata including name, objectives, and timeline
3. THE Agency_OS SHALL track campaign status and progress
4. THE Agency_OS SHALL associate signals and artifacts with specific campaigns
5. WHEN a campaign is created, THE Agency_OS SHALL generate a unique identifier

### Requirement 5: Signal Processing System

**User Story:** As a marketing strategist, I want to capture and process external signals, so that campaigns can respond to market conditions and opportunities.

#### Acceptance Criteria

1. THE Agency_OS SHALL accept external data inputs as signals
2. THE Agency_OS SHALL categorize and timestamp incoming signals
3. THE Agency_OS SHALL associate signals with relevant campaigns
4. THE Agency_OS SHALL trigger automated workflows based on signal patterns
5. WHEN a signal is received, THE Agency_OS SHALL log it for audit purposes

### Requirement 6: Automation Engine Integration

**User Story:** As a campaign manager, I want automated workflow execution, so that repetitive marketing tasks can run without manual intervention.

#### Acceptance Criteria

1. THE Agency_OS SHALL integrate with ActivePieces for workflow automation
2. THE Agency_OS SHALL trigger workflows via webhooks from API routes
3. THE Agency_OS SHALL support email automation workflows
4. THE Agency_OS SHALL support social media posting workflows
5. WHEN a workflow completes, THE Agency_OS SHALL update campaign status

### Requirement 7: Visual Content Generation

**User Story:** As a creative director, I want automated visual content generation, so that campaigns can produce consistent branded materials at scale.

#### Acceptance Criteria

1. THE Agency_OS SHALL integrate with BannerBear for visual content generation
2. THE Agency_OS SHALL generate visuals via BannerBear API calls
3. THE Agency_OS SHALL store generated artifacts with campaign associations
4. THE Agency_OS SHALL support template-based visual generation
5. WHEN visuals are generated, THE Agency_OS SHALL make them available for download

### Requirement 8: User Interface and Experience

**User Story:** As a user, I want an intuitive and responsive interface, so that I can efficiently manage marketing operations across different devices.

#### Acceptance Criteria

1. THE Agency_OS SHALL use Tailwind CSS for responsive styling
2. THE Agency_OS SHALL use Shadcn/UI components for consistent design
3. THE Agency_OS SHALL be fully responsive across desktop, tablet, and mobile devices
4. THE Agency_OS SHALL provide clear navigation between Directors_Console and Engine_Room
5. WHEN users interact with the interface, THE Agency_OS SHALL provide immediate visual feedback

### Requirement 9: API and Integration Layer

**User Story:** As a developer, I want well-defined APIs, so that Agency OS can integrate with external systems and services.

#### Acceptance Criteria

1. THE Agency_OS SHALL provide RESTful API endpoints for all core operations
2. THE Agency_OS SHALL implement proper API authentication and rate limiting
3. THE Agency_OS SHALL support webhook integrations for external services
4. THE Agency_OS SHALL provide API documentation for third-party integrations
5. WHEN API calls are made, THE Agency_OS SHALL return appropriate HTTP status codes

### Requirement 10: Data Management and Export

**User Story:** As a data analyst, I want to access and export campaign data, so that I can perform analysis and reporting outside the system.

#### Acceptance Criteria

1. THE Agency_OS SHALL provide data export functionality for campaigns, signals, and artifacts
2. THE Agency_OS SHALL support CSV and JSON export formats
3. THE Agency_OS SHALL allow filtering and date range selection for exports
4. THE Agency_OS SHALL maintain data integrity during export operations
5. WHEN data is exported, THE Agency_OS SHALL include metadata and timestamps