# Conversation Intelligence

## Overview

The Conversation Intelligence dashboard displays post-interaction analytics and provides insights following customer interactions. It gathers and presents data from those interactions, helping admins and supervisors understand agent performance, customer experience, and key interaction details.

You can filter data by date and time range and by communication type: **All**, **Voice**, or **Chat**. The **Compare** toggle highlights performance changes between the selected date range and the previous period.

The key sections of this dashboard include:

* **Contact Center Efficiency**: Displays metrics such as Average Speed to Answer, Abandonment Rate, Customer Satisfaction Score (CSAT), and Transfer Rate.

* **Agent Efficacy**: Shows Empathy Score, CSAT, Crutch Word Score, Agent Performance Monitor, and Agent Occupancy. The compare toggle applies here to show changes over time.

* **Customer Experience**: Includes Average Wait Time, Net Promoter Score (NPS), Churn Risk, Sentiment Score, and Customer Churn Monitor.

* **Insights Mining**: Provides Topic vs. Sentiment bubbles, Keyword Cloud, and Emotions.

* **Interaction Details**: Displays session details such as Date/Time, Call ID, Agent Name/ID, Call Reason/Intent, Sentiment Score, and Dispositions.

## Access Conversation Intelligence 

Navigate to **Quality AI** > **ANALYZE** > **Conversation Intelligence**.   
<img src="../conversation-intelligence/images/conversation-intelligence-page.png" alt="Conversation Intelligence Page" title="Conversation Intelligence Page" style="border: 1px solid gray; zoom:70%;">

## Filters

You can use the filters to customize the **Conversation Intelligence** tab.

### Create a Filter

Steps to create a filter:

1. Select the **Filters**.  
<img src="../conversation-intelligence/images/dashboard-filter.png" alt="Filters" title="Filters" style="border: 1px solid gray; zoom:70%;">

2. Select **+ Add New Filter**.  
<img src="../conversation-intelligence/images/add-new-filter.png" alt="Add New Filter" title="Add New Filter" style="border: 1px solid gray; zoom:70%;">

3. On the **New Filter** window, choose the relevant **Queues** or **Agents**, and select **Apply**.  
<img src="../conversation-intelligence/images/queues-filter.png" alt="Filter Options" title="Filter Options" style="border: 1px solid gray; zoom:60%;">

    !!! Note

        Select **Apply** saves filters to the **Unsaved Filter** category for **Queues** or **Agents**, letting you review them before saving permanently. 
    
4. Under the **Save Filter** section, enter the Filter Name.

5. Enable the toggle switch **Make this the default view** for the new filter added or save filter.

6. Select **Save & Apply**. The system displays a confirmation message after it saves the filter. 
    <img src="../conversation-intelligence/images/save-filter.png" alt="Save Filter" title="Save Filter" style="border: 1px solid gray; zoom:90%;">
    
### Saved Filters

You can view the saved filters by selecting the **Filters** tab.  
<img src="../conversation-intelligence/images/saved-filters.png" alt="Saved Filters" title="Saved Filters" style="border: 1px solid gray; zoom:90%;">

Hovering over a saved filter displays the following options:

* Duplicate
* Mark as Default
* Delete
* Edit  
<img src="../conversation-intelligence/images/filter-options.png" alt="Filter Options" title="Filter Options" style="border: 1px solid gray; zoom:90%;">

### Duplicate Filter

Steps to duplicate a filter:

1. Select **Duplicate** to copy a filter.  
<img src="../conversation-intelligence/images/duplicate-filter.png" alt="Duplicate Filter" title="Duplicate Filter" style="border: 1px solid gray; zoom:90%;">

2. Enter a name in the **Filter Name** field for the new filter, and select **SAVE**.  
<img src="../conversation-intelligence/images/rename-filter.png" alt="Save Renamed Filter" title="Save Renamed Filter" style="border: 1px solid gray; zoom:90%;">

3. The system displays a confirmation message and creates a copy of the filter.   
<img src="../conversation-intelligence/images/filter-cloned-success.png" alt="Filter Cloned Success" title="Filter Cloned success" style="border: 1px solid gray; zoom:90%;">

### Mark as Default

Select the **Mark as Default** to set the filter as the default filter.  
<img src="../conversation-intelligence/images/mark-as-default.png" alt="Mark as Default" title="Mark as Default" style="border: 1px solid gray; zoom:90%;">

The system displays a confirmation message when the filter sets as the default filter.  
<img src="../conversation-intelligence/images/filter-marked-default.png" alt="Filter Marked Default" title="Filter Marked Default" style="border: 1px solid gray; zoom:90%;">

### Delete Filter

Steps to delete a filter:

1. Select the **Delete**.  
<img src="../conversation-intelligence/images/delete-filter.png" alt="Delete Filter" title="Delete Filter" style="border: 1px solid gray; zoom:90%;">

2. On the delete confirmation pop-up window, select **Delete**.  
    <img src="../conversation-intelligence/images/confirm-delete.png" alt="Confirm Delete Filter" title="Confirm Delete Filter" style="border: 1px solid gray; zoom:90%;">

    The system displays a confirmation message and deletes the filter.

### Edit Filter

Steps to edit a filter:

1. Select the **Edit**.  
    <img src="../conversation-intelligence/images/edit-filter.png" alt="Edit Filter" title="Edit Filter" style="border: 1px solid gray; zoom:90%;">

2. Make the necessary changes, and select **Save & Apply**.  
    <img src="../conversation-intelligence/images/save-edit-filter.png" alt="Save Edited Filter" title="Save Edited Filter" style="border: 1px solid gray; zoom:90%;">

## Clear Filters

This filter displays only the analytics data for the current day's agent performance, customer experience, and interaction details. When applied, it removes all previously selected date ranges and focuses solely on today's data.

<img src="../conversation-intelligence/images/clear-filter.png" alt="Clear Filters" title="Clear Filters" style="border: 1px solid gray; zoom:80%;">

## Date and Time Range Selection

Lets you filter data by date and time range. The widget displays the current day’s data initially. Select a date and time range, and select **Apply**.  

<img src="../conversation-intelligence/images/time-duration.png" alt="Time Selection" title="Time Selection" style="border: 1px solid gray; zoom:80%;">

## Compare Functionality

The Conversation Intelligence dashboard lets you view a comparison of metrics between a selected date range and the previous date range. When you enable the **Compare** toggle key, the dashboard highlights changes in metrics over time. The system enables the compare toggle key by default.

The dashboard displays spike and dip indicators for playbook adherence only when you enable the compare toggle. These indicators appear across relevant metrics and show the percentage change from the previous period. An increase or decrease in a metric can have different meanings depending on context:

* Green upward arrow indicates positive changes.

* Red downward arrow indicates negative changes.

For example, if you select the last 7 days as the date range, metrics such CSAT shows a spike or dip representing the percentage change that represents the change compared to the previous period.   
<img src="../conversation-intelligence/images/compare-functionality.png" alt="Compare Functionality" title="Compare Functionality" style="border: 1px solid gray; zoom:100%;">

## Channels

You can filter data by channels (**All**, **Voice**, **Chat**, and **Email**). This filter applies to the entire dashboard except for agent occupancy, because the system doesn't track occupancy per channel.     
<img src="../conversation-intelligence/images/channels.png" alt="Channels" title="Channels" style="border: 1px solid gray; zoom:100%;">

## Contact Center Efficiency

### Key Performance Indicators

Effective contact centers rely on KPIs to help managers track productivity and efficiency. In a contact center, KPIs are measurable metrics that assess how well customer service operations perform. They include:

**Average Speed to Answer** (**Voice**, **Chat**, **Email channels**): Average Speed to Answer (ASA) displays the average time an agent takes to answer inbound calls, starting when callers join the queue.

**Abandonment Rate (Voice** and **Chat channels**): The Abandonment Rate refers to the total number of customers who disconnect their calls while in the queue before reaching an agent.

**Transfer Rate (Voice**, **Chat**, and **Email channels**): Transfer Rate measures the percentage of customer interactions that agent or queue transfer to another resource to resolve the issue.

**CSAT (Voice** and **Chat channels**): Customer Satisfaction (CSAT) scores indicate the level of customer satisfaction with Support services that you can calculate from CSAT survey scores.

#### Default Zones for KPIs

* For Average Speed to Answer:

    * **Voice Channel**: Green up to 28 seconds, Yellow 28 to 40 seconds, Red at 40 seconds and higher.

    * **Chat Channel**: Green up to 35 seconds, Yellow 35 seconds to 50 seconds, Red 50 seconds and higher.

* For **Transfer Rate** (Voice and Chat Channels): Green up to 10%, and Red beyond 10%.

* For **Abandonment Rate** (Voice and Chat Channels): Green up to 6%, and Red beyond 6%.

* For **CSAT**: Shows the CSAT score along with the weighted value of each interaction.

    * CSAT ranges from 1 to 10 (1 = lowest, 10 = highest).

    * Green 8 and higher; Yellow 6 to 8; and Red 1 to 6.

The dashboard presents the KPI average for the selected date range next to the line bar and shows the percentage increase or decrease compared with the previous period. Hover over a color zone to view the call distribution by percentage and count.   
<img src="../conversation-intelligence/images/cc-efficiency.png" alt="Contact Center Efficiency" title="Contact Center Efficiency" style="border: 1px solid gray; zoom:70%;">

## Agent Efficacy

### Empathy Score

Empathy plays an important role in delivering a quality customer experience. The empathy detection module analyzes both customer and agent utterances and identifies when the situation calls for empathy. It detects the sentiment in the customer’s utterance and classifies it as either `empathy-seeking` or `non-empathy-seeking`. 
This analyzes an agent’s utterance and classifies whether the agent is empathetic.

### CSAT

CSAT is a widely used metric for measuring and evaluating customer satisfaction. This widget displays the average of customers' CSAT scores on a scale of 1 to 5.

### Crutch Word Score

This score measures how frequently an agent uses crutch words during a conversation. Crutch words are filler phrases agents use to gain thinking time. Common examples include `um`, `uh`, `like`, `you know`, `so`, and `basically`. The system calculates this score from agent utterances and supports multilingual conversations by detecting subtle crutch-word patterns across languages. [Learn more](../../quality-ai/configure/language-settings.md).

## Agent Performance Monitor

The admins and supervisors must have a clear understanding of customer interactions and how they affect customer satisfaction. Agent Performance Monitor visualizes the relationship among key metrics such as empathy score, crutch word score, CSAT score, and sentiment score. By identifying patterns across these metrics, you can make data-driven decisions that improve the overall customer experience.

The agent performance metrics are on the Y-axis. You can select individual or multiple metrics to view and analyze. CSAT and sentiment score are the customer experience-based metrics on the X-axis.   
<img src="../conversation-intelligence/images/agent-performance-monitor.png" alt="Agent Performance Monitor" title="Agent Performance Monitor" style="border: 1px solid gray; zoom:70%;">

### Agent Occupancy

Agent occupancy represents the time agents spend handling customer interactions or performing work-related tasks such as ACW. The system shows this as a percentage.

**Agent Occupancy (%)** = (Total talk or chat time + Total ACW time) / (Total logged-in time) * 100

**Total talk or chat time**: The aggregate duration during which agents actively participate in customer interactions, including inbound and outbound calls or chats.

**Total ACW time**: The cumulative duration agents spend in post-call activities, including ACW, note-taking, updating customer records, or completing essential tasks linked to the interaction.

**Total logged-in time**: The total duration agents remain logged in to Agent AI, available to handle customer interactions.

Agent statuses include `Available`, `Busy`, `Away`, `Break`, and any custom codes the administrator configures. A pie chart visualizes the distribution of agents across these statuses, helping admins and supervisors to assess occupancy and optimize agent utilization.   
<img src="../conversation-intelligence/images/agent-occupancy.png" alt="Agent Occupancy" title="Delete Filter" style="border: 1px solid gray; zoom:70%;">

### Script and Playbook Adherence

Agents follow predefined scripts when handling customer interactions. These scripts are part of either the static playbooks configured in Agent AI or business process-specific scripts configured in the dynamic playbooks in Agent AI. Supervisors can track agents’ adherence to the configured scripts.

The adherence percentage shows as a bar graph, with each attribute represented by individual bars indicating the compliance percentage for the selected period.

The compliance percentage for each attribute appears beside the graph and shows whether compliance increased or decreased during the selected period compared with the same time range. For example, if a supervisor views compliance scores for the last week, the system shows the percentage change compared with the previous week. If the supervisor selects a one-month range, the comparison uses the previous month.

When all playbook configurations share the same steps, the system uses those steps as the default parameters for measuring adherence.

If you don't configure any Agent AI playbooks, the system uses the following default scripts (Conversation Etiquettes) to measure adherence:

* **Greeting**: For example, Hello, My name is John Doe, and I am your customer support executive. How may I help you?

* **Branding**: For example, Thank you for contacting Mr. John.

* **Privacy Policy**: For example, This call gets recorded for quality and training purposes.

* **Hold Etiquette (Voice calls)**: For example, May I place you on hold for a few minutes while I pull up some information?

* **Customer Verification**: For example, May I know your date of birth?

* **Proper Sign Off**: For example, `Thank you for reaching out. It was a pleasure to assist you. Have a great day!`     
    <img src="../conversation-intelligence/images/script-adherence.png" alt="Script Adherence" title="Script Adherernce" style="border: 1px solid gray; zoom:90%;">

    Supervisors can select any playbook from the drop-down menu instead of the default options. When they choose a playbook, the system displays adherence to the specific steps and parameters defined in that playbook.   
    <img src="../conversation-intelligence/images/playbook-adherence.png" alt="Playbook Adherence" title="Playbook Adherence" style="border: 1px solid gray; zoom:90%;">

    Administrators can configure the attributes for agent playbook adherence. [Learn more](../../console/monitor-queues-agents-and-interactions.md).

    !!! Note

        The **Playbook Adherence** tab in Conversation Intelligence is available only when Playbooks are configured in Agent AI.

## Customer Experience

You can monitor and review historical data to assess customer experience. Analyzing these metrics helps you identify trends and make informed decisions.

The following parameters are available:

* **All Languages**: You can select multiple languages from the All Languages drop-down, based on the languages used in the evaluation form. The system selects **All languages** by default. The filter shows only metrics relevant to the selected languages. When applied, language-specific interaction data appears in the **Sentiment Monitor** and **Customer Churn Monitor** widgets.

* **Average Wait Time**: This represents the total customer wait time during a defined period (for example, one hour) divided by the number of customers served in that period.

* **NPS Score**: The Net Promoter Score (NPS) measures customer loyalty and satisfaction. Customers rate, on a scale of 0 to 10, how likely customer recommend your product or service.

* **Churn Risk**: Churn risk shows how many customers stop using your services during a selected timeframe. It reflects customers who move to competitors or discontinue their engagement.

* **Sentiment Score**: The system analyzes the sentiment of each customer utterance in real-time at the keyword, phrase, or sub-topic level. After the call ends, it averages the detected sentiments to compute an overall score for the interaction, normalized on a 1 to 10 scale. This score reflects the general emotion or attitude expressed during the conversation.   
<img src="../conversation-intelligence/images/custom-experience.png" alt="Custom Experience" title="Custom Experience" style="border: 1px solid gray; zoom:100%;">

### Sentiment Monitor

The Sentiment Monitor module provides a score range from 1 to 10 for each interaction and indicates polarity as Positive, Neutral, or Negative. It determines the likely emotion involved based on the average sentiment score, such as Happy, Satisfied, or Disappointed.

The sentiment monitor graph shows the distribution of customer sentiment across different intents, enabling an admin to understand customer satisfaction and sentiment levels related to specific intents or topics of conversation.

The sentiment monitor graph is a bar chart where each bar represents an intent or topic. Each bar represents the associated sentiment across all interactions with that intent, categorizing the sentiment weights as follows:  

* **Positive Sentiment**: Green color
* **Neutral Sentiment**: Yellow color
* **Negative Sentiment**: Red color   
<img src="../conversation-intelligence/images/sentiment-monitor.png" alt="Sentiment Monitor" title="Sentiment Monitor" style="border: 1px solid gray; zoom:80%;">

### Customer Churn Monitor

The Customer Churn Monitor shows customer churn risk in a pie chart. It compares the churn percentage with total calls and any escalations in the same period. Hovering over a section shows its value, and selecting a section opens the calls linked to that escalation or churn category. The dashboard displays the following details:

* **No Customer Churn/Escalation**: Number of interactions with no customer churn or escalation.

* **Customer Churn**: Count of interactions where there has been a customer churn.

* **Escalation**: Number of interactions where the customer has requested assistance from a supervisor or a senior.  
<img src="../conversation-intelligence/images/customer-churn-monitor.png" alt="Customer Churn Monitor" title="Customer Churn Monitor" style="border: 1px solid gray; zoom:80%;">

## Insights Mining

Insights Mining displays the top 30 topics by volume and lets you identify the topics associated with volume, sentiment, keywords and emotions for the selected date range and channel.  
<img src="../conversation-intelligence/images/insights-mining-default-screen.png" alt="Customer Churn Monitor" title="Customer Churn Monitor" style="border: 1px solid gray; zoom:80%;">

By default, this widget displays a blank screen without any data. Based on the date range and topic selected from the calendar, it pulls the required sentiment scores for interactions in bubbles.

#### All Languages

This lets you select multiple languages from the **All Languages** drop-down menu that match the languages in the evaluation form. By default, the system selects all languages. The filter shows only the metrics configured for the languages you choose.

 You can filter data by channel (All, Voice, Chat, Email). This filter affects the entire dashboard, except for agent occupancy, since occupancy per channel isn't tracked.
 
 When you select any language or channel filter, the system updates the interaction sentiment scores and bubble-plot visuals in **Topics** and **Keyword Cloud & Emotions** across all widgets.

### Topics 

This shows graded sentiment scores for interactions on a scale of 1 to 10. Each topic appears as a bubble that reflects the volume of positive, neutral, or negative sentiment. The widget also shows the top five emotions, including both positive and negative ones.

When you hover over a topic, the tooltip shows the average emotion label (for example, angry or frustrated) instead of the topic name.

#### Bubble Color & Sentiment Logic

The bubble plotting visual representation helps you identify sentiment distribution and volume for each topic. Hovering over a bubble displays a tooltip with sentiment distribution, total interactions, and average sentiment score.

**Sentiment Color**

* **Green** (Positive): Indicates positive sentiment distribution and the Sentiment score is between 6 and 10.

* **Grey** (Neutral): Indicates neutral sentiment distribution and the Sentiment score is between 4 and 6.

* **Red** (Negative): Indicates negative sentiment distribution and the Sentiment score is between 1 and 4.

* **No. of Interactions**: Total count of interactions for that topic.
* **Sentiment Score**: Overall sentiment score for the topic.

The bubble size reflects the interaction volume for a topic. The system calculates this size dynamically within the selected date range and scales it to show the topic’s volume relative to the minimum and maximum values. By default, all the three selected sentiment colors, give you a combined view of all topics across sentiments. You can select a specific sentiment color to view the most relevant topics in that category.

The color logic for sentiment:

* 1 ≤ x < 4: Negative (Red)

* 4 ≤ x < 6: Neutral (Grey)

* 6 ≤ x < 10: Positive (Green)

    !!! Note

        Only the top 30 most significant topics (based on interaction volume) are displayed on the widget.

For example, the **Payment** bubble indicates sentiment distribution as **Positive** 68% (green), **Neutral** 10% (gray), and **Negative** 22% (red). 

The bubble’s circumference represents these percentages. When you hover over the Payment bubble, the tooltip shows the average emotion index, such as Flexible, Accurate, or Fast, based on the average sentiment score.     
<img src="../conversation-intelligence/images/topics-percentage.png" alt="Keyword Cloud" title="Keyword Cloud" style="border: 1px solid gray; zoom:90%;">

## Keyword Cloud & Emotions for All

This widget shows relevant keywords for the selected Topic from the previous widget. It excludes stop words and other common terms.     
<img src="../conversation-intelligence/images/insights-mining.png" alt="Keyword Cloud" title="Keyword Cloud" style="border: 1px solid gray; zoom:90%;">

### Keyword Search

Supervisors use Keyword Search to find and analyze keywords across interactions by topic.

* Select one topic or All Topics and enter a keyword to search interactions.

* Hover over a keyword to view total mentions and unique interactions.

* Select a topic bubble or choose a topic from the drop-down list to filter related keywords.

* Select All Topics to view keywords and interaction details across all topics.

* When a keyword appears in multiple topics, the system reflects topic-specific relevance.

* The keyword cloud shows only the searched keyword and available semantic variations.

* Select a semantic variation to view its related interactions in the Interaction Details panel.

* When you select a semantic variant in the keyword cloud, the system displays the interactions related to that specific keyword in the Interaction Details panel.  
<img src="../conversation-intelligence/images/selected-topic.png" alt="Keyword Search" title="Keyword Search" style="border: 1px solid gray; zoom:90%;">

## Interaction Details

The Interaction Details widget shows information based on default settings, which you can configure. When you select specific topics or keywords, the widget displays the relevant information. If you make no selection, it shows data based on the highest sentiment score or other settings you configure.

This section includes the following fields:

* Date/Time of the session
* Call ID
* Agent name/ID (you can select from a dropdown list of agent groups/agents)
* Description (text reference to the keyword cloud)
* Call Reason/Intent
* Sentiment Score (configurable from high to low)
* Dispositions  

<img src="../conversation-intelligence/images/interaction-details.png" alt="Interaction Details" title="Interaction Details" style="border: 1px solid gray; zoom:90%;">

