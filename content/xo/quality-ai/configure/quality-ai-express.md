# Quality AI Express

## Overview

Quality AI Express is a specialized version of the Quality AI platform designed for organizations using third-party Contact Center as a Service (CCaaS) platforms. While Quality AI provides deep native integration with Contact Center AI (CCAI), Quality AI Express enables customers to leverage advanced conversation analytics and automated quality AI regardless of their existing contact center infrastructure.

Quality AI Express delivers powerful AI-driven insights through file-based integration, allowing organizations to maintain their current CCaaS investment while accessing enterprise-grade conversation intelligence and agent performance management capabilities.

## What You Must Know First (Important)

**Quality AI Express provides 90% of Quality AI's capabilities** through secure file transfer-based integration. Here's what this means for your implementation:

### Full Capabilities Available

* **Automated Quality Scoring**: 100% conversation coverage with AI-powered evaluation.
* **Advanced Analytics**: Sentiment analysis, topic discovery, and churn prediction.
* **Agent Development**: Comprehensive scorecards, coaching assignments, and performance tracking.
* **Compliance Monitoring**: Automated adherence tracking for regulatory requirements.

### Limited Capabilities

* **Real-time Efficiency Metrics**: Cannot access live operational data (call volume, queue metrics).
* **Some Agent KPIs**: Limited to conversation-based metrics (excludes occupancy, state distribution, Customer Satisfaction (CSAT) integration).

### Not Available (Requires Real-time Platform Integration)

* **Advanced Playbook Adherence**: Complex dialog flow tracking.
* **Live Agent Monitoring**: Real-time adherence alerts and intervention.
* **Platform-specific Metrics**: CCaaS-dependent operational statistics like speed to answer and CSAT.

### Why These Limitations Exist

File-based integration cannot access real-time operational data that lives within your CCaaS platform. However, this trade-off allows you to keep your existing CCaaS investment without vendor switching.

## Quality AI Express vs Quality AI (Feature Availability)

### Core Strengths (100% Feature Parity)

Quality AI Express delivers full capability in these critical areas:

#### Automated Quality Assurance

* **Question-Answer Adherence**: AI analysis of agent responses.
* **Speech Adherence**: Monitoring required phrases and compliance statements.
* **Automated Scoring**: Consistent evaluation across all conversations.

#### Conversation Intelligence

* **Sentiment Analysis**: Real-time emotion detection throughout interactions.
* **Topic Discovery**: Automatic identification of themes and trending issues.
* **Churn Prediction**: AI-driven at-risk customer identification.

#### Agent Performance & Development

* **Agent Scorecards**: Comprehensive individual performance dashboards.
* **Coaching Assignments**: Targeted development based on performance gaps.
* **Performance Monitoring**: Track improvement and coaching effectiveness.

### Capability Differences (Due to Integration Method)

<table>
  <tr>
   <td><strong>Feature Category</strong>
   </td>
   <td><strong>Quality AI Express</strong>
   </td>
   <td><strong>Full Quality AI</strong>
   </td>
   <td><strong>Impact</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Auto QA Coverage</strong>
   </td>
   <td>Question/Answer + Speech adherence
   </td>
   <td>+ Agent AI playbook adherence tracking
   </td>
   <td>Most critical compliance needs covered
   </td>
  </tr>
  <tr>
   <td><strong>Agent Performance</strong>
   </td>
   <td>Conversation-based KPIs
   </td>
   <td>+ Real-time occupancy/state metrics
   </td>
   <td>Core coaching data available
   </td>
  </tr>
  <tr>
   <td><strong>Operational Metrics</strong>
   </td>
   <td>Historical conversation analysis
   </td>
   <td>+ Live efficiency monitoring
   </td>
   <td>Strategic insights maintained
   </td>
  </tr>
</table>

### Detailed Feature Comparison

For technical stakeholders and a detailed evaluation, you can click to expand the complete feature matrix.

<table>
  <tr>
   <td><strong>Capability Category</strong>
   </td>
   <td><strong>Feature</strong>
   </td>
   <td><strong>Quality AI (with CCAI)</strong>
   </td>
   <td><strong>Quality AI Express (third-party)</strong>
   </td>
   <td><strong>Notes</strong>
   </td>
  </tr>
  <tr>
   <td rowspan="4" ><strong>Auto QA</strong>
   </td>
   <td>Adherence By Question - Answer
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Full capability
   </td>
  </tr>
  <tr>
   <td>Adherence By Speech
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Full capability
   </td>
  </tr>
  <tr>
   <td>Adherence By Playbooks
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>Requires real-time context
   </td>
  </tr>
  <tr>
   <td>Adherence by Dialog
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>Requires conversation flow access
   </td>
  </tr>
  <tr>
   <td rowspan="3" ><strong>Conversation Intelligence</strong>
   </td>
   <td>Efficiency KPIs
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>Platform-dependent metrics
   </td>
  </tr>
  <tr>
   <td>Agent Performance KPIs
   </td>
   <td>Yes
   </td>
   <td>*Partial
   </td>
   <td>Core metrics available
   </td>
  </tr>
  <tr>
   <td>Experience Analytics
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Full capability
   </td>
  </tr>
  <tr>
   <td rowspan="2" ><strong>Agent Development</strong>
   </td>
   <td>Agent Scorecards & Dashboard
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Full capability
   </td>
  </tr>
  <tr>
   <td>Coaching Tools
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Full capability
   </td>
  </tr>
</table>

### Partial Agent Performance KPIs Exclude: 

CSAT integration, agent occupancy monitoring, agent state distribution, and playbook adherence tracking.

### Bottom Line for Decision Making

**Choose Quality AI Express if:**

* You are committed to your current CCaaS platform
* You need automated QA and conversation. analytics without operational disruption.
* You want to implement quickly (30 days vs. 6+ months for platform switching).
* You can work with conversation-based insights rather than real-time operational metrics.

**Consider Full Quality AI if:**

* You are evaluating CCaaS platform changes.
* You need real-time operational monitoring and alerts.
* Advanced playbook adherence tracking is critical for your compliance requirements.
* You want the deepest possible integration between QM and contact center operations.

## Technical Overview

### Integration Method

Quality AI Express integrates with your existing contact center through:

1. **File Export**: Your CCaaS platform exports conversation recordings and metadata to your AWS S3 bucket.
2. **S3 Connector**: Automated connector ingests and processes conversation data.
3. **AI Processing**: Advanced natural language processing and machine learning algorithms analyze conversations.
4. **Analytics Dashboard**: Insights and reports are delivered through intuitive web-based dashboards.

### Supported Data Types

* **Voice Recordings**: Stereo and mono audio files (WAV, MP3).
* **Chat Transcripts**: JSON-formatted chat conversations.
* **Voice Transcripts**: Pre-transcribed audio conversations.
* **Metadata**: CSV files containing conversation details and participant information.

Learn more about [AWS S3 Connector Setup Guide](./connectors/aws-s3-connector-setup-guide.md){:target="_blank"}.

## Getting Started

### Prerequisites

* AWS S3 bucket for conversation data storage.
* Conversation recordings or transcripts from your current CCaaS platform.
* Agent and queue configuration data.

### Implementation Process

1. **Data Preparation**: Organize conversation files and metadata according to the required formats.
2. **S3 Configuration**: Set up AWS S3 bucket and configure access permissions.
3. **Connector Setup**: Configure and test the S3 connector integration.
4. **Platform Onboarding**: Import agent profiles and configure quality AI parameters.
5. **Testing & Validation**: Verify data flow and analytics accuracy.
6. **Production Deployment**: Begin automated quality analysis and reporting.

For detailed setup, learn more about [AWS S3 Connector Setup Guide](./connectors/aws-s3-connector-setup-guide.md){:target="_blank"}.

## Migration Path

Organizations using Quality AI Express can seamlessly migrate to the full Quality AI platform if they adopt CCAI Contact Center AI (CCAI) in the future. 

This migration path provides:

* **Data Continuity**: Historical conversation data and analytics are preserved.
* **Feature Upgrade**: Access to complete Auto QA capabilities and real-time efficiency KPIs.

