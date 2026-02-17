# AI for Work Release Notes

This document provides information on the feature updates and enhancements introduced in the recent release of the Platform.

## v1.13.0 Dec 16, 2025

<u>Major Release</u>

This update includes new features and feature enhancements summarized below.

</font></p><font size="4">New Feature</font>

**Slack Integration**

AI for Work now supports native Slack integration, allowing you to bring AI capabilities directly into your team's communication workflows. Configure agents to respond in Slack channels, provide intelligent assistance, and streamline collaboration without leaving your Slack workspace.

[Learn more :octicons-arrow-right-24:](../channels/slack-overview.md)

**MCP Server Integration**

AI for Work now supports Model Context Protocol (MCP) Server integration, enabling you to expose pre-built agents as tools through MCP servers. This powerful capability allows you to use your agents within the Agentic Search app on the Agent platform, creating a seamless bridge between your existing agent configurations and advanced search capabilities. 

MCP Server integration provides enhanced connectivity and extensibility, enabling advanced AI orchestration and interoperability with external systems.

[Learn more :octicons-arrow-right-24:](../assist-configuration/mcp-server.md)

**Work - Agentic Search**

Introducing Work, an intelligent search capability that leverages AI agents to deliver more contextual and actionable search results. This feature enhances the Work Orchestrator experience by enabling agents to understand search intent, reason through complex queries, and provide comprehensive answers with proper source attribution.

To enable Work - Agentic Search, create an agentic app from the base template and link it with AI for Work. This configuration unlocks powerful AI-driven search capabilities across your organization.

[Learn more :octicons-arrow-right-24:](../custom-agents/work-agent.md)

**Schedule Trigger**

Automate your workflows with Schedule Trigger, a powerful new capability that enables agents to execute tasks on predefined schedules. Configure agents to run at specific times or intervals, ensuring critical operations happen automatically without manual intervention.

This feature is ideal for recurring tasks such as generating reports, sending notifications, syncing data, and performing routine maintenance operations.

[Learn more :octicons-arrow-right-24:](../custom-agents/schedule-trigger.md)

<font size="4">Feature Enhancement</font>

**Agent Publishing Defaults**

Agent publishing is streamlined with improved default settings. When publishing an agent, the enablement type now defaults to "Enabled by Default," reducing configuration steps and accelerating deployment workflows.

**Persistent Compose Bar Agents and Attachments**

Agents and attachments added to the compose bar now remain visible until manually removed by the user. This enhancement provides better control over your conversation context and prevents accidental removal of important references during interactions.

**HubSpot Integration Optimization in Work - Agentic Search**

The HubSpot connector in Work - Agentic Search is optimized for improved query performance. The integration now utilizes API-based agents that excel at aggregation and lookup queries, ensuring faster and more reliable data retrieval from your HubSpot instance. 

!!!note
     Semantic search and advanced reasoning queries are not currently supported for HubSpot integration. We recommend using dedicated search connectors for these query types. Support for semantic search and advanced reasoning in HubSpot integration is coming soon.

<hr>

## v1.12.0 Nov 13, 2025

<u>Major Release</u>

This update includes new feature and feature enhancements summarized below.

</font></p><font size="4">New Feature</font>

**Enterprise Directory**

Introducing the Enterprise Directory, a centralized employee contact management system that allows users to easily search, filter, and view colleague information across your organization.

Admins can configure the directory by feeding data through the Push API source. The platform is now enabled with Enterprise Directory capabilities, featuring intelligent search with customizable filters (Department, Designation, First Name, Location), rich contact cards with profile details, and streamlined contact management for enhanced organizational connectivity.

[Learn more :octicons-arrow-right-24:](../user-management/enterprise-directory.md)

<font size="4">Feature Enhancements</font>

**Agent Selection UI/UX Improvements**

Redesigned the agent selection interface for better usability and clearer navigation, making it easier to choose and configure agents for your workflows.

**Product-Specific Email Templates**

You can now customize email communications with product-specific templates, allowing for more branded and contextually relevant messaging across different products within the platform.

**Work Orchestrator Improvements (Formerly OmniSearch)**

Work Orchestrator now provides improved sources and citations for better content traceability. Additionally, the platform now supports PDF/PPT generation, enabling you to create professional reports and presentations directly from your search results.

**Message Timestamps on Hover**

Message timestamps are now visible when hovering over messages, providing better context for conversation history without cluttering the interface.

**Partner Domain Onboarding**

Onboard partner domains without creating an enterprise account of their own. This feature resolves the issue where they need a primary account of their own to be added as a partner in an account.

<hr>

## v1.11.0 Sept 24, 2025

<u>Major Release</u>

This update includes new features and feature enhancement summarized below.

</font></p><font size="4">New Features</font>

**Omni Search (Beta)**

AI for Work now includes **Omni Search**, powered by smart agentic platform. Omni Search replaces basic direct search with a more sophisticated system that understands your account and user context. It delivers more relevant and accurate results by recognizing who you are, what you have access to, and what you typically need.

Key Improvements

* Context-Aware Search: The system has more context about you and your organization to understand and plan your query.
* Account-Level Intelligence: Search results are tailored to your organization's specific data and system.
* Connected Systems and Data Sources: Omni Search integrates with Google Calendar, Gmail, Jira, HubSpot, Zendesk, and Company Policies.

!!!note
     * This beta feature is available only for internal accounts.
     * To use Omni Search, users must add connections (for Gmail, Google Calendar). Without these, the system can't retrieve or link data across services.

**Agent Version Control System**

Agents now maintain two distinct versions, **Draft** and **Published**, ensuring that improvements and modifications don't directly impact the live published version. Users can test and refine agent configurations in draft mode, pushing changes to the published version only after thorough testing and validation. This dual-version approach provides stability for production environments while enabling continuous improvement and experimentation.

[Learn more :octicons-arrow-right-24:](../custom-agents/agent-version.md)

**Support for Google Gemini Models**

AI for Work now supports the latest Google Gemini models:

* Gemini 2.5 Flash
* Gemini 2.5 Pro
* Gemini 2.5 Flash Lite
* Gemini 2.0 Flash

Recommended Configuration: Use **Gemini 2.5 Pro** and **2.5 Flash** as defaults for best performance and reliability.

<font size="4">Feature Enhancement</font>

**Personal Workspace Collaboration and Management**

Enhanced Personal Workspace support agent sharing across all published users. Shared users can now view and edit agent configurations together before running them, enabling collaborative development and better knowledge sharing across the organization.

[Learn more :octicons-arrow-right-24:](../workspace-management/personal-workspace.md#collaboration-and-sharing)

<hr>


## v1.10.0 Sept 8, 2025

<u>Major Release</u>

This update includes new features and feature enhancements summarized below.

</font></p><font size="4">New Features</font>

**Channels – Microsoft Teams and Copilot Integration**

AI for Work integrates natively with Microsoft Teams through the Azure Bot Service architecture, enabling users to access AI assistance directly within Microsoft Teams. The integration supports both Multi-Tenant and Single-Tenant authentication models with proactive notification capabilities through dedicated app registration.

The system generates custom Microsoft Teams app manifests with organizational branding options (custom name, logo, description) and supports multiple deployment strategies, including organization-wide rollout, selective user groups, or self-service installation.

[Learn more :octicons-arrow-right-24:](../channels/microsoft-teams.md)

**Amazon Q Integration with AI for Work**

AI for Work now supports Amazon Q integration as both an Enterprise Knowledge source and a specialized Search Agent, providing customers with hybrid search capabilities across SearchAI and Amazon Q indices. Query routing uses AI-driven intent recognition to distribute requests.

AI-driven intent recognition automatically routes queries to the most relevant index, ensuring accurate and context-aware responses. Administrators can configure Amazon Q either as the default enterprise knowledge source or as a contextual search agent for specialized queries.

Configuration Options:

* **Enterprise Knowledge Mode**: Set Amazon Q as the primary knowledge source for organization-wide consistency.

* **Search Agent Mode**: Use Amazon Q as a specialized, context-aware search tool alongside other indices.

[Learn more :octicons-arrow-right-24:](../integration/amazon-q.md)

**Announcements**

The **Admin Hub** now includes a new **Announcements** capability under **Assistant    Configurations**, giving administrators a streamlined way to deliver timely, targeted updates across the organization.

Announcement banners now support rich content (up to 800 characters with formatting and links), flexible targeting for publishing, dynamic display with rotation and temporary dismissal options, and efficient management features like auto-save and chronological listing.

[Learn more :octicons-arrow-right-24:](../assist-configuration/announcements.md)

**Enterprise Encryption**

We introduced **Enterprise Encryption** to give organizations flexible, enterprise-grade control over data security. Administrators can now choose between system-generated **Default Keys** for quick setup or **Bring Your Own Key (BYOK)** for maximum control with AWS KMS or Azure Key Vault.

Key Highlights:

* **Default Keys** – One-click copy and refresh for instant encryption.
* **BYOK Integration** – Use customer-managed keys with full lifecycle management.
* **Connection Validation** – Built-in tests confirm accessibility and permissions before activation in BYOK integration.
* **Automatic Fallback** – If BYOK is removed, the system reverts to default keys.

[Learn more :octicons-arrow-right-24:](../security/enterprise-encryption.md)

<font size="4">Feature Enhancements</font>

**SAML – ACS URLs for SP and IDP Flows**

Enhanced SAML Single Sign-On (SSO) configuration by showing account-specific fields that users can use in their SAML configuration, making the SSO setup seamless.

[Learn more :octicons-arrow-right-24:](../security/saml.md)

**Agent Icons Upgrade**

We upgraded the **Agent Icons** across the platform to deliver a more modern, consistent, and visually clear interface. The updated design improves usability, enhances accessibility, and ensures a unified look and feel across the application.

<hr>

## v1.9.3 July 29, 2025

<u>Minor Release</u>

This update includes new features and feature enhancements summarized below.

</font></p><font size="4">New Features</font>

**Agent Testing**

The new Agent Testing feature transforms to prepare agents before publishing by providing comprehensive validation tools and improvement capabilities. This advanced testing suite offers key features designed to facilitate thorough validation and continuous improvement:

* Simulate diverse user interactions with varied sample queries to evaluate agent responses to phrasing, intents, and conversational flows, identifying gaps or areas for clarification.
* The testing suite enables direct agent refinements through tools that optimize intent recognition, enhance entity extraction, and adjust conversational logic, supporting iterative improvements based on real feedback.

[Learn more :octicons-arrow-right-24:](../custom-agents/agent-testing.md)

**Domain Management**

Domain Management now distinguishes between Company Domains for organization-owned domains and Partner Domains for external collaborators, providing flexible access control while maintaining security standards.

Domain Types:

* Company Domains: Enable automatic sign-in when domain-based enrollment is active.
* Partner Domains: Require explicit invitations and support access to multiple tenant accounts.

[Learn more :octicons-arrow-right-24:](../security/domain-management.md)

**Real-time Query Execution Status**

Introducing a new feature that offers real-time visibility into query processing, monitoring execution status for transparent background operations. Query progress displays sequentially, with intelligent steps generated based on query type.

The **Response Flow** button appears when the response is ready, revealing all execution steps. Expand for the full journey or collapse for a clean view. The final execution step always remains visible above the response.

**Agent Creation Experience**

Introducing a new **Create Agent** button in the Agent and Flow section that adapts to user permissions and streamlines the entire agent creation workflow. The system now routes users to the most appropriate workspace environment based on their access levels.

* **My Workspace** appears alongside shared workspaces in the workspace switcher during agent creation.
* Automatic routing to Personal Workspace for users without shared workspace access.
* Enhanced workspace management with permission-based navigation.
  
[Learn more :octicons-arrow-right-24:](../custom-agents/agent-creation.md)

**Advanced Agent Configuration**

New enterprise-grade features for communication and data governance have been added to the **Appearance & Behavior** section. These features are available in the configuration steps for creating Bots, Workflows, and Autonomous Agents.

* **Allow End User Notification**: Enables external notification integration with a developer-friendly setup. Provides pre-filled sample requests and UI guidance to documentation. Notifications auto-distribute to all users where the agent is published and enabled.
* **Clear Chat History**: Users can implement automated chat history management through flexible scheduling options ranging from 1 to 90 days.

<font size="4">Feature Enhancements</font>

**Code Block UI Enhancement**

Improvised AI-generated code responses with dedicated code block components that feature distinct styling to clearly separate code from regular text. Each code block now includes a built-in **Copy Response** button, eliminating the need to manually select and copy code content. This streamlined approach provides instant clipboard access and improves the overall developer experience.

<hr>

## v1.9.2 June 21, 2025

<u>Minor Release</u>

This update includes new features, feature enhancements, and bug fixes summarized below.

</font></p><font size="4">New Features</font>

**Guardrails Security Framework**

Introducing **Guardrails**, a robust security framework designed for enterprise-level AI interactions. This new feature automatically safeguards sensitive data and enforces content policies, providing comprehensive data protection and content filtering. Ensure compliance and security across all your AI workflows with Guardrails.

Key benefits

* Protect sensitive customer data from exposure in logs and analytics.
* Meet data protection requirements with automated  PII (personally identifiable information) detection and handling.
* Maintain brand safety and policy compliance through customizable topic restrictions.
* Validate configurations before deployment with comprehensive testing tools.

[Learn more :octicons-arrow-right-24:](../assist-configuration/guardrails.md)

**AI Query Pipeline Orchestration**

Introducing **Orchestration Settings**, a powerful pipeline management system that gives you complete control over your AI query processing workflow. This feature enables you to customize and optimize your AI interactions by selectively activating only the components you need, ensuring efficient resource utilization.

Key benefits

* Activate only required pipeline components to optimize performance and reduce processing overhead.
* Eliminate unnecessary AI processing steps while maintaining full functionality.
* Adapt AI behavior to specific use cases and organizational requirements.
* Unified management interface with intelligent component synchronization.

[Learn more :octicons-arrow-right-24:](../assist-configuration/orchestration-settings.md)

<font size="4">Feature Enhancements</font>

**Conversation Data Storage Controls**

The **Data Settings** now offer enhanced controls for **Conversation Data Storage**, providing granular privacy management.

The **Do not store conversation data** setting is upgraded with three flexible control levels:

* All Agents (universal privacy).
* All Agents Except Selected Agents (default privacy with strategic exceptions).
* Only Selected Agents (targeted privacy for specific needs like compliance).

[Learn more :octicons-arrow-right-24:](../security/data-settings.md)

**Agent Layout Enhancements**

The agent creation and management interface is redesigned for a more intuitive user experience and improved version control.

Key enhancements

* Streamlined navigation with a dedicated agent page and simplified header.
* Improved action menu with primary actions like share and publish and secondary actions like export and audit log.
* Enhanced dual version system with draft and published versions for efficient change management.
* Improved user experience with clear status indicators, progressive feature enablement, simplified publishing, and protection against accidental changes.

**Compose Bar Query Scope**

The compose bar now features Work, AI Model, and Web scope selection buttons, allowing users to direct queries to specific knowledge sources. Users can easily switch between these options, with visual feedback confirming the selected scope.

* **Work Button**: Directs queries to enterprise knowledge repositories.
* **AI Model Button**: Retrieves answers from the configured AI model.
* **Web AI**: Provides answers from the configured AI model, enhanced by web search capabilities.

**Multiple File Upload Support**

Enhanced the prompt agent builder interface with comprehensive file upload options across all parameter types.

Key enhancements

* Added **Multiple files** toggle option in the Upload File field, enabling agent creators to configure multi-file support.
* Introduced **Upload files** option in Text field parameters, allowing users to select single or multiple files as needed.
* Users can now upload up to 5 files simultaneously when interacting with configured prompt agents.

[Learn more :octicons-arrow-right-24:](../custom-agents/prompt-agents.md)

**Skip Form Display Functionality**

Introduced an intelligent form display system that automatically detects query completeness and optimizes the user experience accordingly.

Key enhancements

* Added **Skip Form Display** toggle option for agent creators, enabling automatic form bypass when appropriate.
* The Skip Form Display feature includes intelligent conflict prevention with Multi-Response functionality, displaying informational messages when incompatible settings are selected.
* Implemented smart query analysis that identifies when all required entities are present in the initial request.
* Enhanced form logic to display input forms only when mandatory fields are missing from the user query.

[Learn more :octicons-arrow-right-24:](../custom-agents/prompt-agents.md)

**User Management Updates**

Administrators can now edit user profile information directly from the user details interface. This enhancement allows admins to modify first and last names efficiently, streamlining the user data management workflow and improving administrative control over user accounts.

<font size="4">Bug Fixes</font>

**System Stability Improvements**

Resolved critical chart rendering issues and fixed application crashes that occurred during follow-up question interactions. These fixes significantly enhance system reliability and ensure a smoother user experience when working with data visualizations and conversational features.

<hr>

## v1.9.1 May 19, 2025

<u>Minor Release</u>

This update includes feature enhancements summarized below.

<font size="4">Feature Enhancements</font>

**Autonomous Agent Capabilities**

* Improved handling of authentication challenges for autonomous agents, providing reliable authentication flows during automated operations.
* Autonomous agents now support processing and handling file attachments, enabling seamless document workflows and expanded automation capabilities.
* Added support for asynchronous communication channels, allowing agents to operate across multiple channels simultaneously without blocking operations.

**Intelligent Chat Naming**

Conversation titles are now automatically generated, reflecting user intent and search queries. This enhancement improves the organization and retrieval of conversations.

**Advanced Intent Recognition**

Enhanced the orchestrator's intent identification capabilities with improved accuracy and response time, enabling better understanding of user requests and precise task routing.

## v1.9.0 April 30, 2025

<u>Major Release</u>

This update includes new features, feature enhancements, and bug fixes summarized below.

<font size="4">New Features</font>

**New Homepage Experience**

AI for Work home page is redesigned with a focus on visual and navigational enhancements. The new layout prioritizes recently used agents, aiming to boost efficiency and minimize time spent on workflow management.

The user interface includes: a left panel that can be toggled, a top-right section for **Help**, **Notifications**, and **User Profiles**. Panels adjust automatically based on search queries and browsing history.

Key features

* The left panel is redesigned to optimize efficiency:
    * Direct access to the Agent Store through the dedicated **Agents and Flows** section.
    * **History** section that automatically categorizes conversations by:
         * Today
         * Yesterday
         * Last 7 Days
* Managing conversation history is now more intuitive:
    * Hovering displays controls to rename or delete threads.
    * **Today** section is instantly updated with new chats.

**Introducing AI for Work to Marketplace**

The  Marketplace now features AI for Work, a comprehensive collection of intelligent agents designed to enhance productivity and streamline workflows. This central hub allows users to easily discover, understand, and implement various AI-powered work agents tailored to specific needs.

AI for Work in the Marketplace features two main categories: **Apps** (complex, multi-functional AI solutions combining agents for comprehensive workflows) and **Agents** (standalone AI components for specific tasks). The first version introduces Agentic flows in applications, starting with **Prompt Agents** that provide instant text replies.

[Learn more :octicons-arrow-right-24:](./../getting-started/marketplace.md)

**Introducing the Audit Log**

The new **Audit Log** system tracks user activity across the platform, providing administrators and team members with a comprehensive record of all administrative and operational actions.

Audit Log System captures activities across three distinct locations:

* **Admin Hub Logs** store system-wide configuration changes. Access is role-based where full admins have complete access, while custom admins only see logs for their permitted modules.
* **Workspace Logs** document all activities within specific workspace environments, creating accountability for team-specific actions. All workspace collaborators can access these logs.
* **Agent Logs** capture granular activity details, tracking all interactions and modifications related to specific agents. Users with edit access or ownership permissions can access these logs.

[Learn more :octicons-arrow-right-24:](./../audit-log/audit-log-management.md)

**Introducing Account Data Settings**

The Admin Console now features **Data Settings**, giving complete control over the data lifecycle. This includes managing Conversation Data Storage and Data Retention Period.

* **Conversation Data Storage**: Users can choose whether to store end-user conversation data in logs.
* **Data Retention Period**: Users can choose a default 7-year data retention period or a custom period using numeric input and a dropdown for time units. Data older than the selected period is permanently deleted.

[Learn more :octicons-arrow-right-24:](./../security/data-settings.md)

<font size="4">Feature Enhancements</font>

**Improvised Enterprise Knowledge Agent**:

* If relevant answers are not found within the Enterprise Knowledge base, the system will now automatically utilize LLM models with integrated web search to address queries.
* Users can now directly select web search as an agent for their queries. This provides a functionality comparable to web search features found in platforms like ChatGPT.

**Updated RAG Agent**: Search Agents now display relevant results in the right panel, maintaining consistency with enterprise knowledge responses. Search results trigger a change in response options.

**Database Migration**: Migrated from Trina DB to ClickHouse to improve application performance when processing attachment-based queries.

<font size="4">Bug Fixes</font>

**Search Connector**:

* Eliminated duplicate issues appearing in the search results panel.
* Corrected inaccurate count display in Jira connector tab facets.
* Fixed incorrect date handling where last updated date was incorrectly displayed as creation date.
* Improved search result filtering to properly reflect user queries.

**Async Bot**: Resolved issue where the delayed response widget continued to display after answers were retrieved from the bots platform.

<hr>

## v1.8.0 March 26, 2025

<u>Major Release</u>

This update includes new features, feature enhancements, and bug fixes summarized below.

<font size="4">New Features</font>

**Introducing Workspaces**

Workspaces is a new enterprise solution designed to streamline how organizations deploy and manage AI capabilities across their operations.

Key Features:

* Granular access controls and centralized governance enable secure management of workspace creation and deletion, ensuring clear boundaries between departments.
* A tiered permission system offers precise control over access, ensuring that team members have the appropriate level of access for their roles and responsibilities.
* Control agent visibility and target specific user groups or the entire organization. Tailor each workspace with different allowed agent types to maintain information boundaries and ensure compliance.
* The default workspace within every account includes pre-built solutions optimized for HR, IT, Recruitment, and Analytics, enabling immediate productivity.

[Learn more :octicons-arrow-right-24:](../Administration/workspace.md)

**Introducing Agent Sharing**

Agent Sharing enables teams to collaborate and manage agents more effectively within their workspace.

Key Features:

* Fine-grained permission controls allow precise customization of access and collaboration.
* Flexible collaboration options enable teams to work together seamlessly.
* Transparent agent management ensures visibility and accountability.

[Learn more :octicons-arrow-right-24:](./../custom-agents/agent-options.md)


<font size="4">Features and Bug Fixes</font>

* User Management: Refined user permissions to ensure access is limited to authorized sections and improved template visibility and management for more precise user role-based access control.
* Email Templates: Fixed formatting inconsistencies to enhance visual consistency and readability.
* Bot Agent Handoff: Implemented UI/UX improvements for a more intuitive and seamless customer interaction process and eliminated friction points during agent transitions to create a smoother support experience.
* Search AI Integration: Enhanced deep integration capabilities with the SearchAI App and fixed navigation issues from the Enterprise Knowledge Page.

<hr>

## v1.7.1 March 6, 2025

<u>Minor Release</u>

This update includes new features, feature enhancements, and bug fixes summarized below.

<font size="4">New Features</font>

**Agentic App Support for Enterprise Knowledge**

Introduced Agentic App that now caters as a knowledge source to Enterprise Knowledge. This enhancement gives an option for you to choose between Search AI  or Agentic App to provide a more robust fallback mechanism when no specific agent matches a user query.

Key Benefits:

- Extended knowledge reach through API-driven connections.
  
- Improved fallback performance.
  
- Flexible configuration options (Search AI or Agentic App).

[Learn more :octicons-arrow-right-24:](./../custom-agents/enterprise-knowledge.md)

<font size="4">Feature Enhancements</font>

* Autonomous Agent Integration: Added compatibility and support for the new agentic protocol used by Agent Platform, enabling seamless integration.

* Enhanced Content Safeguards: Implemented comprehensive guardrails within AI for Work that automatically detect and filter inappropriate content requests, providing clear and respectful responses when users request content outside permitted boundaries. This feature is in its early phase; an Admin UI for custom guardrail configuration is currently under development and will be available in a future release.
  
* Context sharing: Conversation context now flows automatically between AI for Work and Search AI.

<font size="4">Bug Fixes</font>

* cURL Import Enhancement: Improved the cURL import functionality for agentic apps, allowing users to seamlessly modify request body during the import process.
  
* Multi-instruction Query Handling: Enhanced orchestration flow to efficiently process both single-phrase and complex multi-instruction queries.
  
* Timezone Optimization: Resolved timezone inconsistencies in logs. The system now properly displays logs based on your local system time, ensuring accurate and relevant time-based analytics.

* Template Rendering Fix:  Fixed an issue where bot templates used to render duplicates when selected or clicked. The fix results in a cleaner and more predictable user interface.

<hr>

## v1.7.0 February 14, 2025

<u>Minor Release</u>

This update includes new features and feature enhancements summarized below.

<font size="4">New Features</font>

**Standard Agentic Apps**

You can now organize multiple AI agents in sequence to automate and execute complex business tasks using predefined logic. Tasks and processes can be predefined, eliminating the need for end users to manually execute each step.
[Learn more :octicons-arrow-right-24:](./../custom-agents/agentic-flows.md)

**Advanced Agentic Apps**

You can now leverage non-deterministic AI algorithms to autonomously manage complex business processes. These applications function independently and effortlessly integrate into the Agentic platform, saving time and complexity by eliminating the need for end-to-end conversation setting. 
[Learn more :octicons-arrow-right-24:](./../custom-agents/autonomous-agent.md)

<font size="4">Features Enhancements</font>

* Bot Response Notification System: Bot agent interaction experience is enhanced with an intelligent notification system for improved user engagement.

    - Users receive immediate visual feedback when responses require additional computation time. [Learn more :octicons-arrow-right-24:](./../custom-agents/alert-task.md)
  
    - The system proactively alerts users when the Bot responses are ready.
  
    - The View Response option takes users to their conversation thread, maintaining continuity between queries and responses.
  
    - Bot can send users notifications in the workflow so that another user can continue the flow, with customizable response options and action buttons. 
    [Learn more :octicons-arrow-right-24:](../custom-agents/notify-api.md)

* Prompt Agent: Users can now download knowledge documents that were previously uploaded by other users, enhancing collaboration and knowledge sharing across teams. Additionally, we have added the ***OpenAI o1*** model, which provides access to a broader knowledge base for generating more comprehensive and accurate responses. [Learn more :octicons-arrow-right-24:](./../custom-agents/prompt-agents.md)

* API Agent: API agent now supports multi-value parameters that allow querying multiple values within a single request. [Learn more :octicons-arrow-right-24:](./../custom-agents/api-agents.md#step-43-query-filters)

* Audit Log: Audit Logs feature is now available through our API for administrators. Administrators can access and manage all audit log data through the API, ensuring complete visibility into system activities. A dedicated UI for Audit Logs is under active development and will be released soon. [Learn more :octicons-arrow-right-24:](../audit-log/audit-log-api.md)

* Citations: All agents now include clear citation and action buttons, ensuring consistency across the platform. Previously, Calendar, Contact, and Bot agents lacked citation. This update ensures that all agents are now fully cited with actionable buttons.

* Search AI Connectors: We've expanded support to Search AI Connectors across multiple platforms and services. You can now index through these connectors in SearchAI app and see the results in AI for work.
The latest release includes search connector support for the following services:

    * Gmail
    * Google Calendar
    * Google Drive
    * Outlook
    * Outlook Calendar
    * Slack
    * Hubspot
    * Jira
    * BitBucket
    * Zendesk
    * Confluence
    * Wordpress

<hr>
