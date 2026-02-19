# Performance Insights 

The Performance Insights view provides a focused analysis of agent communication quality and behavioral trends over time. It helps quality managers and supervisors monitor key conversational performance indicators, identify improvement opportunities, and take targeted coaching actions using data-driven insights. 

This view consolidates agent efficacy metrics, such as empathy, language quality, evaluation scores, and sentiment, into a single, time-based visualization for easier interpretation and faster decision-making.

## Access Performance Insights

The Agent Performance Monitor now includes a trend line for the Kore Evaluation Score, enabling comprehensive quality assessment alongside existing performance metrics.

## Access CX Insights

Navigate to **Quality AI**> **Analyze**> **CX Insights**.   
<img src="../conversation-intelligence/images/performance-insights-dashboard.png" alt="Performance Insights Dashboard" title="Performance Insights Dashboard" style="border: 1px solid gray; zoom:80%;"/>

!!! Note
    
    Enable the **Conversational Intelligence** toggle from **Settings** to unlock performance insights, agent insights, and conversation-level analytics.

## Filters

You can use filters to evaluate Performance Insights data by date range and communication channels selection.

### Date Range Selector

Use this to filter Performance Insights data for the selected date range (for example, Last 90 Days, Last 28 days, Last 7 days). 

**Actions**:

* Filter by specific date and time. 
* Default is **Today**. 
* Select **Apply** after selection.

### Channel Filter

Use this filter to analyze performance data across all communication channels or limit the view to a specific channel.  
<img src="../conversation-intelligence/images/channels.png" alt="Channel Filter" title="Channel Filter" style="border: 1px solid gray; zoom:80%;"/>

!!! Note
   
    Agent Occupancy displays aggregate data across all channels.

## Agent Efficacy

Agent Efficacy widgets summarize key communication quality metrics for agents during the selected date range and highlight performance trends compared to the previous period.

### Agent Communication Indicators

Performance widgets provide a snapshot of key metrics and trends in agent communication for the selected date range.

#### Empathy Score

Measures how accurately agents respond to customers’ emotional needs.

**How It Works**:

* Classifies customer utterances as empathy-seeking or non-empathy-seeking.
* Evaluates whether agent responses demonstrate empathy when required.
* Calculates a score based on the proportion of appropriate empathetic responses.

**Widget Display**:

* Shows the average empathy score across analyzed conversations for the selected period.
* Includes a percentage change indicator compared to the previous period.
* Upward arrow = score increase; downward arrow = score decrease.
* Provides a quick view of performance trends over time.   
<img src="../conversation-intelligence/images/channels.png" alt="Channel Filter" title="Channel Filter" style="border: 1px solid gray; zoom:80%;"/>

#### Crutch Word Score

Measures how frequently agents use filler or crutch words during conversations.

**Common Crutch Words**:
** `um`, `uh`, `like`, `you know`, `so`, and `basically`.

**Why It Matters**:

* Reduces perceived professionalism.
* Indicates uncertainty.
* Slows conversation flow.
* Distracts from the message.

**Widget Display**:

* Shows the average crutch word usage score for the selected period.
* Includes a trend percentage indicator compared to the previous period.
* Upward arrow = Increased crutch word usage; downward arrow = Reduced crutch word usage.
* Lower scores indicate clearer, more confident, and professional communication.   
<img src="../conversation-intelligence/images/crutch-word-score.png" alt="Crutch Word Score" title="Crutch Word Score" style="border: 1px solid gray; zoom:80%;"/>

## Agent Performance Monitor

Provides visibility into agent performance and customer interactions, enabling data-driven coaching and process improvements. Visualizes relationships among key metrics, such as Empathy Score, Crutch Word Score, Kore Evaluation Score, CSAT Score, and Sentiment Score to identify trends and correlations.

**Metrics Displayed**:

* **Empathy Score**: Measures emotional responsiveness.
* **Crutch Word Score**: Tracks communication quality.
* **Kore Evaluation Score**: Represents overall quality evaluation results.

**X-Axis (Customer Experience)**:

* **CSAT Score**: Reflects customer satisfaction ratings.
* **Sentiment Score**: Shows customer sentiment trends during interactions.

**How to Use the Monitor**:

1. **Select Metrics**: Choose one or multiple Y-axis metrics.
2. **Analyze Correlations**: Identify relationships between metrics.
    * **High Empathy + High CSAT**: Empathy drives satisfaction.
    * **High Crutch Words + Low CSAT**: Filler words impact satisfaction.
3. **Identify Patterns:**
    * **Top-right quadrant**: High performers.
    * **Bottom-left quadrant**: Agents needing support.
4. **Compare Agents**: Benchmark multiple agents.
5. **Track Trends**: Use the compare function to observe changes over time.

### Visualization Details

* **Type**: Time-series graph that visualizes agent performance trends over the selected period.
* **X-Axis**: Date range based on selected filter.
* **Y-Axis**: Score values showing performance variations.
* **Checkboxes**: Enable or disable individual metrics to focus analysis and compare multiple performance indicators on the same timeline.

**Actionable Insights**:

* **Strong Correlations**: Replicate best practices from high performers.
* **Weak Correlations**: Investigate other influencing factors; consider training or resources.
* **Negative Correlations**: Identify and correct counterproductive behavior.	  
<img src="../conversation-intelligence/images/performance-insights.png" alt="Performance Insights" title="Performance Insights" style="border: 1px solid gray; zoom:80%;"/>

## Playbook Adherence

Tracks how consistently agents follow predefined scripts during customer interactions. Administrators create and manage playbooks in Agent AI. Playbooks can represent scripted flows, compliance steps, or business-specific conversation stages. Supervisors can monitor agent adherence, identify gaps, and identify coaching opportunities.

**Display Format**:

* **Bar Graph**: Each bar represents an attribute and shows the compliance percentage for the selected period.
    * Each bar represents an adherence attribute (for example, Greeting and Branding).
    * Each bar length indicates the compliance percentage for the selected playbook and stage.
* **Trend Comparison**: Displays percentage increase or decrease compared to the previous equivalent period (for example, last week vs. previous week, last month vs. previous month).

**Default Adherence Parameters**:

**The system displays playbook steps as the default set of parameters when configurations remain consistent. If no Agent AI playbooks exist, the system measures adherence vs. these conversation etiquettes:

* **Greeting**: `Hello, my name is John Doe, and I am your customer support executive. How may I help you today?`
* **Branding**: `Thank you for contacting XYZ.`
* **Privacy Policy**: `This call is being recorded for quality and training purposes.`
* **Hold Etiquette (Voice)**: `May I place you on hold for a few minutes while I pull up some information?`
* **Customer Verification**: `Can I know your date of birth?`
* **Proper Sign-Off**: `Thank you for calling XYZ today. It was a pleasure to assist you. Have a great day!`

**Custom Playbook Selection**:

* A Playbook dropdown lets supervisors select an Agent AI playbook (for example, Playbook 1, Playbook 2).
* The system highlights the default playbook in the list.
* When no Agent AI playbooks exist, the system displays an empty state.
* Supervisors can select specific playbooks from the dropdown to view adherence for the configured steps instead of the default parameters.

**Administration**:

* Administrators can configure playbooks, stages, and attributes in Agent AI. [Learn more](https://docs.kore.ai/smartassist/monitor/monitor-queues-agents-interactions-and-service-levels/#Configure_Conversation_Intelligence_Dashboard).
* Updates made in Agent AI automatically appear in Playbook Adherence.

!!! Note
   
    * The **Playbook Adherence** section appears only when at least one playbook exists in Agent AI.
    * If no playbooks or stages are configured, the system displays the relevant empty states instead of adherence data.    
<img src="../conversation-intelligence/images/playbook-adherence-score.png" alt="Performance Insights" title="Performance Insights" style="border: 1px solid gray; zoom:80%;"/>

For more insights on how agent actions affect customer satisfaction and sentiment, refer to [CX Insights](../analyze/cx-insights.md).