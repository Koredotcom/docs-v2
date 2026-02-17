# Topic Discovery

Topic Discovery is an advanced analytics dashboard that transforms conversation data into clear, decision-ready insights through intelligent visualization. It enables QA managers, supervisors, business managers, and CX teams to identify conversation trends, analyze performance metrics, and make data-driven decisions that support agent coaching and process improvement.

The dashboard presents topics as bubbles on an interactive canvas, with each bubble colored by the selected metric—sentiment or resolution—providing a clear view of topic performance across conversations and allowing users to identify high-and low-performing topics.    

## Why Topic Discovery?

Modern contact centers face significant challenges in managing and analyzing the vast volume of daily conversations across multiple channels. The primary pain points that Topic Discovery addresses include:

* **Pattern Recognition Difficulties**: Identifying recurring conversation themes and trends across thousands of daily interactions.

* **Metric Correlation Gaps**: Connecting conversation topics to key performance indicators like resolution rates, sentiment scores, and handle times.

* **Reactive Issue Management**: Spotting emerging issues before they escalate into major customer experience problems.

* **Resource Allocation Inefficiencies**: Allocating coaching resources when problem areas lack clear visibility.

* **Sentiment Analysis Complexity**: Understanding customer sentiment patterns across different conversation categories.

* **Resolution Tracking Challenges**: Monitoring success rates across various topic categories and identifying improvement opportunities.

Topic Discovery addresses these challenges by providing a unified, visual approach to conversation analytics, showing both pre-configured conversation categories and AI-discovered conversation patterns that existing taxonomies may not capture.

## How Does Topic Discovery Help?

The Topic Discovery feature delivers value through several key capabilities:

* **Trend Identification**: Identify high-volume conversation topics and their associated performance metrics, enabling a rapid assessment of operational health.

* **Coaching Focus**: Pinpoint topics with poor sentiment scores or low resolution rates, allowing for targeted training interventions that address specific skill gaps.

* **Performance Monitoring**: Track topic-specific metrics, including Average Handle Time (AHT) and resolution rates, providing objective data for agent performance evaluations.

* **Proactive Management**: Discover emerging issues through AI-generated topics before they become widespread problems, enabling preventive measures.

## Topic Hierarchy

Topic Discovery operates on a three-level hierarchical structure:

* **L1 Topics**: Top-level conversation themes (for example, "Billing Issues").

* **L2 Topics**: Subtopics under L1 (for example, "Payment Problems" under Billing Issues).

* **L3 Topics**: Granular subtopics under L2 (for example, "Credit Card Declined" under Payment Problems).

## User Interface Elements

The Topic Discovery interface consists of powerful filtering controls, interactive visualizations, and detailed analytics views that work together to help you explore conversation data efficiently. Each designed component provides immediate insights while allowing you to drill down into specific areas of interest.

## Access Topic Discovery

Navigate to **Quality AI** > **ANALYZE** > **Topic Discovery**

### Filters

The **Top Filter Bar** is your central control panel for customizing what you see in the Topic Discovery dashboard. It enables you to refine results, switch perspectives between configured and AI-generated intents, and focus on specific time periods or performance metrics.  
<img src="../topic-discovery/images/topic-discovery-filter.png" alt="Topic Discovery Filter" title="Topic Discovery Filter" style="border: 1px solid gray; zoom:100%;">

Think of it as the lens through which you explore your data; every adjustment here instantly updates the visualization, giving you real-time insights.

**Filter Options**

The following table depicts the bot behavior for the end of the conversation event:

<table>
  <tr>
   <td><strong>Filter</strong>
   </td>
   <td><strong>What it does</strong>
   </td>
   <td><strong>How to use it</strong>
   </td>
   <td><strong>When to use it</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Search Topic Names</strong>
   </td>
   <td>Locate topics within the visualization.
   </td>
   <td>Start typing a keyword, and the system instantly highlights matching topics.
   </td>
   <td>Use this when looking for a specific customer issue (for example, “Payment Failure”).
   </td>
  </tr>
  <tr>
   <td><strong>Configured Intents / Generated Intents</strong>
   </td>
   <td>Switches between taxonomy-based topics and AI-discovered themes.
   </td>
   <td>Choose <strong>Configured Intents</strong> to set your taxonomy. Choose <strong>Generated Intents</strong> to surface blind spots.
   </td>
   <td>Use Generated Intents to identify new themes outside your taxonomy.
   </td>
  </tr>
  <tr>
   <td><strong>Time Range Selector</strong>
   </td>
   <td>Adjusts the analysis period.
   </td>
   <td>Options include: 7 days (default), 28 days, 30 days, 90 days, or a custom date range.
   </td>
   <td>Compare weekly vs. monthly trends to spot recurring issues.
   </td>
  </tr>
  <tr>
   <td><strong>Sentiment Filter</strong>
   </td>
   <td>Focuses on conversations by sentiment.
   </td>
   <td>Adjust the score range slider (0–10). Default is full range.
   </td>
   <td>Narrow results to low-sentiment conversations for quality monitoring.
   </td>
  </tr>
  <tr>
   <td><strong>Resolution Filter</strong>
   </td>
   <td>Filters by resolution success rates.
   </td>
   <td>Adjust the score range slider (0–100). Default is full range.
   </td>
   <td>Zero in on unresolved or low-resolution conversations.
   </td>
  </tr>
</table>


### Topics Filter

Advanced filtering options provide granular control over your data view, allowing you Select **Filters** to reveal these options, which work together to help you focus on specific channels, languages, queues, agents, or performance thresholds.

* **Channel Filter**: Choose between Voice, Chat, or both.
* **Language Filter**: Multi-select dropdown with search, selectively remove, or **Clear All**.
* **Queue Filter**: Narrow by queues; automatically updates agent filter.
* **Agent Filter**: Search and select agents (queue-dependent).
* **Filter by AHT**: Set min–max values or acceptable variance.  
<img src="../topic-discovery/images/topics-filter.png" alt="Topics Filter" title="Topics Filter" style="border: 1px solid gray; zoom:100%;">


### Bubble Visualization Canvas

The central visualization displays topics as interactive bubbles with meaningful visual encoding, providing an at-a-glance view of conversation volumes, performance metrics, and relationships between topics. This intuitive interface allows you to explore your conversation data spatially, with visual cues guiding you to areas that need attention. 

#### Bubble Chart Display

The central visualization displays topics as interactive bubbles, encoding meaningful data visually. 

Each bubble encodes key topic attributes visually:

* **Bubble Size**: Represents conversation volume. Larger bubbles indicate a higher number of conversations.

* **Bubble Color**: Indicates topic performance based on the selected metric (sentiment or resolution).

* **Positioning**: Groups related topics together to reveal patterns and clusters.

* **Labels**: 

    * L1 topics display labels outside the bubbles.

    * L2 and L3 topics display labels inside the bubbles.

You can switch bubble coloring between sentiment and resolution, while continuing to filter topics using both metrics simultaneously (AND logic).        
    <img src="../topic-discovery/images/bubble-visualization-canvas.png" alt="Bubble Visualization Canvas" title="Bubble Visualization Canvas" style="border: 1px solid gray; zoom:100%;">

#### Sentiment Visualization Across Topic Hierarchy

The system captures customer sentiment at the most granular level (L3) and aggregates it across parent topics (L2 and L1).

Topic Discovery visualizes sentiment using color-coded indicators:

* **Green**: Positive sentiment 
* **Grey**: Neutral sentiment 
* **Red**: Poor sentiment

#### Resolution-Based Visualization

When you select resolution for bubble coloring, the system displays topics as:

* **Red**: Low resolution (0–50%)
* **Grey**: Moderate resolution (50–70%)
* **Green**: High resolution (70–100%)

Switching the coloring mode affects only the visual representation. Filters for sentiment and resolution remain active together, allowing deeper analysis using combined criteria. These visual indicators help you identify well-performing and underperforming topics across the hierarchy.

### Hovering Tooltips

Hovering over any bubble reveals a detailed tooltip that provides quick access to key metrics without leaving the main visualization. This instant feedback mechanism helps you assess topic performance and identify areas for deeper investigation.

* **Topic Name**: Full name if truncated in visualization.
* **Conversation Count**: Total number of conversations.
* **Total Conversations**: Total conversations with trend indicators (spike/dip) percentage.
* **Average Sentiment Score**: Average of the overall sentiment score with trend analysis.
* **Sentiment Breakdown**: Distribution across Positive/Neutral/Negative.  
<img src="../topic-discovery/images/hovering-tooltips.png" alt="Hovering Tooltips" title="Hovering Tooltips" style="border: 1px solid gray; zoom:100%;">


### Configured Intents vs. Generated Intents

Topic Discovery offers two distinct views for analyzing conversation topics, each serving different analytical needs:

**Configured Intents**

Configured Intents display topics based on your organization's pre-defined taxonomy structure. These are the conversation categories you've explicitly set up and trained the system to recognize.

When to use Configured Intents:

* Monitoring known business categories and established conversation types.
* Tracking performance on your documented taxonomy.
* Comparing results to historical data using consistent categorization.
* Analyzing conversations within your existing framework.

To set up or modify your taxonomy structure, refer to the [Setup Taxonomy](../configure/taxonomy-builder/setup-taxonomy.md).

**Generated Intents**

Generated Intents use AI to discover and surface conversation themes that your configured taxonomy may not capture. The system analyzes conversation patterns and creates topic groupings based on actual customer language and emerging trends.

When to use Generated Intents:

* Discovering blind spots in your current taxonomy.
* Identifying emerging customer issues or topics.
* Exploring unexpected conversation patterns.
* Validating and expanding your taxonomy structure.
* Uncovering new product issues or customer needs.

## Topic Detail Pane

The detail pane provides comprehensive analytics for individual topics, combining historical trends, performance metrics, and qualitative insights. Access this detailed view through **View Details** from any bubble tooltip to understand the full context behind the numbers.   
<img src="../topic-discovery/images/topic-detail-pane.png" alt="Hovering Tooltips" title="Hovering Tooltips" style="border: 1px solid gray; zoom:100%;">


### Overview

The Overview tab delivers comprehensive performance analytics for the selected topic:

* **Total Conversations Percentage**: Topic's share of all conversations.
* **Average Sentiment Score**: Overall sentiment with trend analysis.
* **Sentiment Breakdown**: Distribution across emotional categories.
* **Average Handle Time**: Performance metric with trends.
* **Average Resolution Percentage**: Success rate analysis.
* **Top Keywords**: Most frequent terms in topic conversations.
* **Emotion Detection**: Top 6 emotions identified in conversations.

### Conversations

The conversation analysis section lets you move from aggregate metrics to individual interactions, helping you understand the real customer experiences behind your data. This section provides both list views for scanning multiple conversations and detailed views for in-depth analysis.  
<img src="../topic-discovery/images/conversations.png" alt="Hovering Tooltips" title="Hovering Tooltips" style="border: 1px solid gray; zoom:100%;">

**Conversation List Structure**
Comprehensive table displaying conversations containing the selected topic:

<table>
  <tr>
   <td><strong>Column</strong>
   </td>
   <td><strong>Information</strong>
   </td>
   <td><strong>Purpose</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Agent Name</strong>
   </td>
   <td>Name 
   </td>
   <td>Identify conversation handler.
   </td>
  </tr>
  <tr>
   <td><strong>Channel</strong>
   </td>
   <td>Voice or Chat
   </td>
   <td>Understand the interaction method.
   </td>
  </tr>
  <tr>
   <td><strong>Queue</strong>
   </td>
   <td>Service category
   </td>
   <td>Context for conversation type.
   </td>
  </tr>
  <tr>
   <td><strong>Actions</strong>
   </td>
   <td>Conversation details
   </td>
   <td>Access full interaction details.
   </td>
  </tr>
</table>

**Navigation and Access**

The conversation list view serves as your gateway to individual customer interactions, providing essential information at a glance while offering multiple ways to sort, search, and filter results. This organized approach helps you to locate conversations of interest and assess patterns across multiple interactions.

* **Sorting**: Most recent conversations first.
* **Pagination**: 10 conversations per page with standard navigation controls.
* **Page jumping**: Direct access to specific pages.
* **All Conversations**: Opens full [Conversation Mining - Interactions](../analyze/conversation-mining-interactions.md) view with pre-applied topic filters.     
<img src="../topic-discovery/images/conversation-mining-interactions.png" alt="Conversation Mining" title="Conversation Mining" style="border: 1px solid gray; zoom:100%;">  

**Full Conversation View Pane**

The full conversation view pane provides a comprehensive, immersive experience for analyzing individual customer interactions. This detailed interface combines the complete conversation thread with contextual metadata, analytical insights, and visual indicators to help you understand what happened, why, and how it can tell future improvements.    
<img src="../topic-discovery/images/full-conversation-view.png" alt="Hovering Tooltips" title="Hovering Tooltips" style="border: 1px solid gray; zoom:100%;"> 

**Conversation Details**

* **Complete Thread**: Full customer-agent interaction.
* **Topic Highlighting**: Visual indicators for the topics identified.
* **Metadata Display**: Channel, duration, resolution status, sentiment scores.
* **Timeline View**: Chronological flow of conversation.
* **Context Information**: Queue, agent, and channel details.

**Analysis Tools**

* **Sentiment Score**: Sentiment score throughout the conversation.
* **Empathy Score**: Empathy score throughout the conversation.
* **Crutch Word Score** → Crutch Word score throughout the conversation.

## Use Case Example: Identifying Agent Coaching Opportunities

**Scenario**: A QA Manager notices increasing customer complaints but needs to identify specific areas for improvement

**Step-by-Step Process**:

1. **Initial Analysis**
   
    * Open Topic Discovery with default 7-day view.
    * Scan L1 topics for large bubbles with negative sentiment.
    * Identify "Technical Support" as a high-volume, low-sentiment topic.

2. **Drill-Down Investigation**

    * Select the "Technical Support" bubble to reveal L2 topics.
    * Notice "Software Installation" shows poor resolution rates.
    * Select into "Software Installation" to see L3 subtopics.
    * Identify "Driver Installation" as the primary problem area.

3. **Detailed Analysis**

    * Open "Driver Installation" detail pane.
    * Review metrics: 150 conversations, 45% resolution rate, average sentiment: 2.
    * Check top keywords: `error`, `crash`, `incompatible`, `frustrated`.
    * Note top emotions: Anger (40%), Frustration (35%), Confusion (25%).

4. **Conversation Review**

    * Select "View Conversations" to see individual interactions.
    * Review 3-4 representative conversations to understand common failure patterns.
    * Identify knowledge gaps in driver troubleshooting procedures.

5. **Action Planning**

    * Use insights to develop a targeted training module on driver installation.
    * Create job aids for common driver compatibility issues.
    * Schedule coaching sessions with agents handling technical support.

**Outcome**: Focused coaching intervention based on data-driven insights, resulting in improved resolution rates and customer satisfaction.
