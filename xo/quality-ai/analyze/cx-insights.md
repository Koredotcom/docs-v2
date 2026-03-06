# Customer Experience Insights 

The Customer Experience (CX) insights dashboard provides a post-interaction view of customer experience by combining sentiment, resolution, churn risk, and topic-level drivers. This dashboard collects and presents data from customer interactions, enabling quality managers, CX leaders, and supervisors to identify what improves customer satisfaction and what impacts or reduces performance, using data-driven insights from real conversations.

**Key Sections**

The CX Insights dashboard includes:

* **Customer Experience Metrics**: Overall Resolution Rate, Average Wait Time, Net Promoter Score (NPS), Sentiment Distribution, and Customer Churn Monitor.
* **Overall Resolution Rate**: Percentage of successfully resolved interactions.
* **Customer Satisfaction (CSAT) Drivers**: Topics that influence customer satisfaction based on driver-impact scoring.
* **Dissatisfaction (DSAT) Drivers**: Topics that negatively impact customer satisfaction with detailed warning indicators.
* **Insights Mining**: Topic vs. Sentiment Bubble, Keyword Cloud, and Emotions.
* **Interaction Details**: Detailed interaction records with advanced filtering options, such as Session data, Call ID, Agent information, Call Reason/Intent, Sentiment Score, and Dispositions.

## Access CX Insights

Navigate to **Quality AI**> **Analyze**> **CX Insights**.   
<img src="../conversation-intelligence/images/cx-insights.png" alt="Customer Experience Insights Dashboard" title="Customer Experience Insights Dashboard" style="border: 1px solid gray; zoom:80%;">

!!! Note

    Enable the **Conversational Intelligence** toggle from **Configure** > **Settings** to explore customer experience insights and CX trends.

## Filters

### Date and Time Range

Use this to filter CX Insights data for the selected date range (for example, Last 90 Days, Last 28 days, Last 7 days). 

**Actions**:

* Filter by specific date and time range. 
* Default is **Today**. 
* Select **Apply**.

### Channel Filter

Use this to filter CX data by **All**, **Voice**, **Chat**, or **Email**.   
<img src="../conversation-intelligence/images/channels.png" alt="Channel Filter" title="Channel Filter" style="border: 1px solid gray; zoom:80%;">

!!! Note
    
    This displays aggregate customer data across all channels.

## Top-Level CX Metrics

Summarizes the key customer experience performance indicators that provide a high-level view of service quality and effectiveness.

To view which agents or behaviors influence CX outcomes, refer to [Performance Insights](../analyze/performance-insights.md).

### Average Wait Time

Displays the average time customers wait before an agent responds. The system calculates this value by dividing the total customer wait time for the selected period by the number of customers served. When no data is available, the value defaults to 0. The metric includes a comparison indicator vs. the previous equivalent period.

**What it shows**:

* Current average wait time (for example, 8s).
* Percentage change compared to the previous period.
* Directional indicator (increase or decrease).

**Use this to**:

* Monitor accessibility and responsiveness.
* Identify staffing or queue optimization needs.    
<img src="../conversation-intelligence/images/average-wait-time.png" alt="Average Wait Time" title="Average Wait Time" style="border: 1px solid gray; zoom:80%;">

### Overall Resolution Rate
Shows the percentage of interactions marked as resolved across all conversations in the selected period based on your selected filters. Displays 0% when no qualifying conversations exist.

**What it shows**:

* Resolution rate percentage.
* Comparison with the previous equivalent time range.
* Improvement or decline indicator.

**Use this to**:

* Track end-to-end resolution effectiveness.
* Measure the impact of process or agent improvements.
* Set and monitor resolution benchmarks.   
<img src="../conversation-intelligence/images/overall-resolution-rate.png" alt="Overall Resolution Rate" title="Overall Resolution Rate" style="border: 1px solid gray; zoom:80%;">

## Sentiment Distribution

These widgets provide a visual summary of customer sentiment and churn risk, helping you assess overall customer mood, identify potential churn or escalations, and take targeted actions to improve customer experience.

### Sentiment 

The Sentiment widget analyzes and classifies it as Positive, Neutral, or Negative. Based on the average sentiment score, it infers the overall customer emotion, such as Happy, Satisfied, or Disappointed. 

The doughnut chart shows how customer interactions distribute across sentiment categories. It helps administrators understand overall customer satisfaction and sentiment trends across intents or topics.

* **Positive sentiment**: Green color
* **Neutral sentiment**: Yellow color
* **Negative sentiment**: Red color

**What it shows**:

* The total number of interactions appears at the center.
* A proportional distribution displays across sentiment categories.
* Visualizes customer sentiment across conversations.
* The system shows an empty state when it processes no conversations.

**Use this to**:

* Understand overall customer mood.
* Track sentiment shifts over time.   
<img src="../conversation-intelligence/images/sentiment.png" alt="Sentiment Category" title="Sentiment Category" style="border: 1px solid gray; zoom:80%;">

### Customer Churn Monitor

The Customer Churn Monitor shows customer churn risk in a pie chart. It compares the churn percentage with total calls and any escalations in the same period. Hovering over a section shows its value, and selecting a section opens the calls linked to that escalation or churn category. The dashboard displays the following details:

**Categories**:

* **No Customer Churn/Escalation (Green)**: Number of interactions with no customer churn or escalation.
* **Customer Churn (Red)**: Counts interactions in which the system detects customer churn.
* **Escalation (Yellow)**: Number of interactions where the customer requests assistance from a supervisor or a senior.

**What it shows**:

* Total interaction count.
* Relative distribution of churn and escalations.
* Shows an empty state when no qualifying data is available.

**Use this to**:

* Identify churn risks early.
* Track escalation trends.
* Prioritize retention strategies.    
<img src="../conversation-intelligence/images/customer-churn-monitor.png" alt="Customer Churn Monitor" title="Customer Churn Monitor" style="border: 1px solid gray; zoom:80%;"> 

    !!! Note
    
        Enable **Conversational Intelligence** in **Configuration** > **Settings**, then process conversations to track churn risk.

## CSAT Drivers

CSAT drivers identify topics that affect customer satisfaction using a driver-impact scoring model based on average sentiment.        
<img src="../conversation-intelligence/images/csat-drivers.png" alt="CSAT Drivers" title="CSAT Drivers" style="border: 1px solid gray; zoom:80%;"> 

### How Driver Impact is Calculated?

**Driver Impact Score Calculation**:
Average Sentiment - Baseline Sentiment × Conversation Count

**Components**:

* **Average Sentiment**: Mean sentiment score (1–10) for the topic.
* **Baseline Sentiment**: Overall sentiment average for the selected period.
* **Conversation Volume**: Number of interactions tagged with the topic.

### Qualification Criteria

The system qualifies a topic as a CSAT driver only when it meets both conditions:

* **Volume:** ≥30 conversations and ≥2% of total conversations.
* **Deviation:** ≥0.8 sentiment points from baseline.

### Driver Card Details

Each CSAT Driver card displays:

* Topic name with taxonomy path (for example, L2: Travel Planning > L3: Cost of the Flights).
* Average sentiment score with comparison indicator.
* Color-coded sentiment badge.
* Sentiment deviation from baseline.
* Conversation volume (number of interactions).

### Warning Indicators

Topics that don't meet qualification thresholds display a warning icon (⚠).

**Warning types**:

* **Volume Warning**: Insufficient data for reliable insights.
* **Deviation Warning**: Sentiment is close to baseline.
* **Both**: Limited volume and low differentiation.

**Display rules**:

1. **If 6+ qualified drivers exist**: Show top 6 (no warnings).
2. **If &lt;6 qualified drivers**: Fill remaining slots with warned drivers.
3. **If less limited data**: Show a warning message indicating insufficient data.

### Baseline Calculation

The baseline adapts to your filter selection:

* **Multiple or All Channels Selected**: Average sentiment across all conversations in the filtered period.
* **Single Channel Selected**: Average sentiment for only that channel in the filtered period.

    !!! Note
    
        * When **Conversational Intelligence** or **Generative AI** is disabled, Generative AI insights aren't available for this conversation. 
        * Enable the feature to access advanced speech analytics and actionable CX insights.
        * Navigate to enable **Generative AI Tools > Gen AI Feature** > **Copilot**.

## DSAT Drivers

Highlights the top 6 **DSAT** topics or those negatively impacting customer satisfaction.
<img src="../conversation-intelligence/images/dsat-drivers.png" alt="DSAT Drivers" title="DSAT Drivers" style="border: 1px solid gray; zoom:80%;"> 

**How it works**:

* Uses the same driver-impact scoring model as CSAT Drivers.
* Identifies topics where **Average Sentiment and Baseline Sentiment**.

**Visual indicators**:

* Red sentiment badges.
* Warning icons when data thresholds aren't met.

**Use this to**:

* Identify customer pain points.
* Prioritize high-impact fixes.
* Track improvements after corrective actions.

    !!! Note
    
        If no data is available, you need more conversations to capture and analyze to identify dissatisfaction drivers.

