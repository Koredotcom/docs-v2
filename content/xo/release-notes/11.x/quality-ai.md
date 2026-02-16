# Quality AI Release Notes

This document provides information on the feature updates and enhancements introduced in **Quality AI** of AI for Service (XO) v11.x releases.

## v11.21.1 January 31, 2026

<u>Patch Release</u>

This update includes enhancements and bug fixes. The key enhancements included in this release are summarized below.

<font size="4">Analytics</font>

**AI Justifications for Gen AI Question Metrics Extended to Reports and APIs**

AI Justifications for Gen AI by Question metrics are now available in the Interaction Evaluations and Conversation Analytics reports, and through APIs. When enabled, the system provides AI-generated explanations for each evaluation score, extending this capability beyond the existing UI. <br> [Learn more :octicons-arrow-right-24:](../../analytics/quality-ai/reports/interaction-conversation-analytics-report.md)

<font size="4">Configure</font>

**Enhanced Taxonomy Builder, Topic Discovery, and Resolution Detection**

Taxonomy Builder and Topic Discovery now offer improved usability with clearer visual hierarchy, contextual tooltips, sentiment and resolution-based bubble coloring, and enhanced filtering and navigation.
Resolution Detection is now configurable at the app level. You can choose between topic-based detection for strict matching or LLM-based assessment for holistic evaluation. This flexibility helps you accurately classify interaction outcomes based on whether primary issues are resolved. <br>
[Learn more :octicons-arrow-right-24:](../../quality-ai/configure/taxonomy-builder/overview.md)

<font size="4">Analyze</font>

**Conversation Intelligence Dashboard Updates**

The Conversation Intelligence dashboard is now split into two specialized dashboards:

* **CX Insights** introduces new widgets to help you understand customer experience, including Resolution Rate tracking and CSAT and DSAT Drivers powered by driver-impact scoring with detailed warnings. <br>
[Learn more :octicons-arrow-right-24:](../../quality-ai/analyze/cx-insights.md)

* **Performance Insights** enhances agent monitoring with a trendline for the Kore Evaluation Score. <br>
[Learn more :octicons-arrow-right-24:](../../quality-ai/analyze/performance-insights.md)

Legacy widgets, including Contact Center Efficiency, Agent Occupancy, and Agent State Monitor, are now deprecated but remain available via feature flag for existing users.

<hr>


## v11.21.0 January 17, 2026

<u>Minor Release</u>

This update includes enhancements and bug fixes. The key enhancements included in this release are summarized below.

<font size="4">Analytics</font>

**Evaluation Form Summary Report Enhancements**

The Evaluation Form Summary report now includes a Total Interactions column to show the overall interaction count. The Total Applicable Interactions column excludes inapplicable interactions for dynamic-by-question metrics where the trigger was absent. These enhancements improve calculation accuracy and ensure that totals and percentages align with Heatmap data. [Learn more :octicons-arrow-right-24:](../../analytics/quality-ai/reports/evaluation-form-summary-report.md)

<font size="4">Analyze</font>

**Audit Allocation Enhancements**

Audit Allocation management uses a dedicated “Allocations” menu and a “My Allocations” tab. QA managers can track auditor progress, create and edit custom allocations, assign interactions to agents by percentage or count, and reassign pending interactions to manage availability while maintaining consistent quality coverage. [Learn more :octicons-arrow-right-24:](../../quality-ai/analyze/conversation-mining-audit-allocations.md)

<font size="4">Configuration</font>

**Agent Queue Management in the Quality AI UI**

Users can assign agents to Agent AI and Quality AI Express queues directly in the Quality AI UI, eliminating the need for public APIs. This update supports platform-level users, provides visibility into queue IDs for API use, and keeps agent mappings entirely separated from Contact Center AI (CCAI) routing and configuration. [Learn more :octicons-arrow-right-24:](../../quality-ai/configure/conversation-sources.md) 

**SFTP Chat Script Timestamp Enhancements**

Quality AI Express now supports offset-based timestamps for chat script ingestion via Secure File Transfer Protocol (SFTP). With this update, users can configure the chat script timestamp format at the app level under Conversation Sources. When users select offset-based timestamps, chat script can include message-level offsets relative to the conversation timeline without start or end time validation during ingestion. The system uses start and end dates solely for reporting and filtering. This change applies only to chat conversation ingestion and doesn't affect voice conversation ingestion. <br> [Learn more :octicons-arrow-right-24:](../../quality-ai/configure/conversation-sources.md) 

<hr>

## v11.20.0 December 07, 2025

<u>Minor Release</u>

This update includes enhancements and bug fixes. The key enhancements included in this release are summarized below.

<font size="4">Deploy</font>

**Enhanced Import/Export for Taxonomy Builder with Saved Filters**

Import and Export support for Quality AI deployment enables seamless management and transfer of Quality AI configurations across AI for Service (XO) environments. Users can export the latest taxonomy version with topic hierarchy and resolution settings, then import using Full (overwrite) or Incremental (add-only) modes—maintaining configuration consistency without manual rebuilding. Also, the Advanced Topic Discovery now supports saved slide-out filters for quick reuse of standard filters. [Learn more :octicons-arrow-right-24:](../../deploy/bot-management.md)

<font size="4">Configure</font>

**QM Express Onboarding Supports AWS Assume Role Access**

QM Express now supports IAM Role (Assume Role) authentication for secure, temporary credential access without storing long-term AWS keys. The update includes a new IAM auth type, Role ARN schema, enhanced validation, and S3 service initialization using STS AssumeRole with automatic credential rotation. This strengthens security, enables cross-account access, and aligns with AWS best practices for least-privilege access. [Learn more :octicons-arrow-right-24:](../../quality-ai/configure/connectors/aws-s3-connector-setup-guide.md)

<font size="4">Analyze</font>

**Enhanced Topic, Intent, and Resolution Analytics Across Quality AI**

Analytics visibility is enhanced across Conversation Mining, Audit workflows, and Agent Dashboards:

* Conversation Mining includes optional columns for Configured Intents, Generated Intents, and Overall Resolution, with color-coded topic sentiment and advanced filters for L1–L3 topics, intents, sentiment, emotion, and resolution. [Learn more :octicons-arrow-right-24:](../../quality-ai/analyze/conversation-mining-interactions.md)

* The Audit Screen provides deeper topic-level insights with click-through intents and detailed L3 resolution mapping, helping auditors quickly locate where each topic or resolution appears in the transcript. [Learn more :octicons-arrow-right-24:](../../quality-ai/ai-assisted-manual-audit.md)

* The Agent Dashboard includes scrollable Sentiment and Resolution Insights, with averages, trend indicators, and top or bottom-performing topics. App-level controls enable admins to manage agent access to sentiment and resolution data for flexible team visibility. [Learn more :octicons-arrow-right-24:](../../quality-ai/analyze/my-dashboard-agent-view.md)

<font size="4">API Enhancements</font>

**Raw Data API Supports Generated Intents**

The enhanced Raw Data API now uses generated intents. [Learn more :octicons-arrow-right-24:](../../apis/quality-ai/raw-data-api.md) 

<hr>

This document provides information on the feature updates and enhancements introduced in **Quality AI** of AI for Service (XO) v11.x releases.

## v11.19.1 November 19, 2025

<u>Patch Release</u>

This update includes enhancements and bug fixes. The key enhancements included in this release are summarized below.

<font size="4">Configure</font>

**New AI-Powered Etiquette Evaluation Metrics**

New AI-powered evaluation metrics automatically assess agent etiquette across different interaction scenarios, ensuring consistent service quality and providing actionable coaching insights:

* **By Transfer Etiquette Evaluation**: It assesses agent conduct during customer transfers, verifying agents inform customers, explain the reason, and confirm understanding before the handoff. [Learn more :octicons-arrow-right-24:](../../quality-ai/configure/evaluation-criteria/metrics-measurement-types/by-transfer.md)

* **By Hold Etiquette Evaluation**: It assesses agent adherence to best practices for managing voice interaction hold scenarios, including notification, appropriate hold time, and clear conversation resumption. [Learn more :octicons-arrow-right-24:](../../quality-ai/configure/evaluation-criteria/metrics-measurement-types/by-hold.md)

**Enhanced AI Agent Metric**

The enhanced AI Agent metric reduces the number of agent calls, supports weight-based breakdowns across multiple evaluation aspects, and improves the design-time configuration experience. It uses a two-level structure (parent metric and weighted sub-metrics with defined criteria/adherence logic) to analyze multiple conversation aspects in one evaluation, providing structured scores and justifications. [Learn more :octicons-arrow-right-24:](../../quality-ai/configure/evaluation-criteria/metrics-measurement-types/by-ai-agent.md)

<hr>

## v11.19.0 October 25, 2025

<u>Minor Release</u>

This update includes enhancements and bug fixes. The key enhancements included in this release are summarized below.

<font size="4">Analyze</font>

**Keyword Search with Audit Filtering**

The new Keyword Search Filter feature lets users easily locate and analyze conversations. Users can search for keywords and refine results by speaker, including or excluding keywords. Each search result links directly to the QA audit screen, where keyword matches are highlighted in the transcript, along with speaker labels and QA evaluation details. This ultimately leads to improved audit accuracy, traceability, and filtering flexibility. [Learn more :octicons-arrow-right-24:](../../quality-ai/analyze/conversation-mining-interactions.md)

<font size="4">Analytics</font>

**Scheduled Reporting for Quality AI**

The Quality AI Reporting feature provides comprehensive data export capabilities for AutoQA and Conversation Intelligence insights. This enables QA Managers, Supervisors, and authorized users to generate, schedule, and download detailed reports covering interaction details, agent performance metrics, and adherence to evaluation metrics.
[Learn more :octicons-arrow-right-24:](../../analytics/quality-ai/reports/scheduled-reports.md) 

**New Generative AI Features**

This release introduces the following two new generative AI features powered by the latest GPT-4o and GPT-4o-mini models with default prompts:

* By Value Adherence Validation: Check if extracted metric values match predefined reference data and return binary adherence scores.

* By Value Metric Extraction: Extract metric values from messages by users, AI Agents, or humans. 
[Learn more :octicons-arrow-right-24:](./../../generative-ai-tools/genai-features-qualityai.md)

<hr>

## v11.18.0 September 27, 2025

<u>Minor Release</u>

This update includes enhancements and bug fixes. The key enhancements included in this release are summarized below.

<font size="4">Analyze</font>

**Topic Discovery**

This enables QA, Supervisors, and Business Managers to visualize conversation topics across the contact center, linked to key metrics, such as Average Handling Time (AHT), Sentiment, and Resolution rate. Using custom taxonomies and intuitive bubble charts, users can identify trends, explore topics in-depth, and analyze related metrics and generated intents, making it easier to enhance coaching and drive process improvements. [Learn more :octicons-arrow-right-24:](../../quality-ai/analyze/topic-discovery.md)

<font size="4">Configure</font>

**Taxonomy Builder**

The builder enables Contact Center Managers, Analysts, and QA teams to create custom taxonomies with three-level hierarchical structures, enhancing conversation categorization. This improves analysis across channels, allowing deeper insights into topic-level metrics and business-specific trends. [Learn more :octicons-arrow-right-24:](../../quality-ai/configure/taxonomy-builder/overview.md)

<hr>


## v11.17.1 September 15, 2025

<u>Patch Release</u>

This update includes enhancements and bug fixes. The key enhancements included in this release are summarized below.

<font size="4">Analyze</font>


**Message-Level Comments in AI-Assisted Manual Audit**

Supervisors and QA users can now add comments directly on individual messages, with required name and text fields. The updated comments are displayed both in the Transcript and in the Comments tab. Users can click a comment to navigate to the related message, which enhances feedback visibility and context. [Learn more :octicons-arrow-right-24:](../../quality-ai/ai-assisted-manual-audit.md)

**Conversation Mining Processing Status**

In Conversation Mining, the Processing Status now displays a status icon: green (pass) when all processes have succeeded and metrics are being captured; red (fail) when any process fails, and metric tracking is interrupted. [Learn more :octicons-arrow-right-24:](../../quality-ai/analyze/conversation-mining-interactions.md#interactions-dashboard-columns)


<font size="4">Conversation Sources</font>

**Quality AI Integration with Agent AI**

Quality AI can now be integrated with Agent AI on third-party desktops. This integration streamlines the recording process and utilizes metadata through Agent AI's Custom Object field. [Learn more :octicons-arrow-right-24:](../../quality-ai/configure/conversation-sources.md)


