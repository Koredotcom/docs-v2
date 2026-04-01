# Conversation Mining - Interactions

The Interactions feature enables supervisors to review and filter scored interactions within their assigned queues. It provides insights into conversation quality, agent performance, and customer experience at both the conversation and agent levels. 

Using Conversation Mining filters, supervisors can refine interaction results by selecting evaluation metrics, qualification outcomes, and duration status. This helps identify interactions that require coaching or improvement while also isolating contacts excluded from evaluation due to duration thresholds.


## Key Capabilities

By using these new capabilities, supervisors can:  

* **Review and Filter Interactions**: Access scored interactions within their assigned queues to identify conversations that need coaching or attention.

* **Monitor Conversation Quality**: Understand conversation quality, agent performance, and customer experience at a glance.

* **Gain Deeper Insights**: Leverage integrated Taxonomy-based Topic Discovery, Topic-Level Sentiment, and Resolution insights to perform better analysis across Conversation Mining, the AI-Audit Screen, and Agent Dashboards.

* **Identify Key Conversation Insights**: Use taxonomy-based topics, topic-level sentiment, and resolution indicators across filters, columns, audits, and dashboards to identify high-impact or unresolved conversations.

* **Filter by Experience Insights**: Apply new filters for configured intents (topics) across L1, L2, and L3 levels, generated intents, and overall resolution (resolved/unresolved)Apply filters for configured intents (L1, L2, L3), generated intents, resolution status, and duration status (Evaluated, Below Threshold, Duration Unavailable).

* **Audit with Precision**:  Customize views using metadata and column controls, including indicators for intent, sentiment, resolution, and duration status.

* **Refine Searches Efficiently**: Use keyword-based filtering, including speaker-specific filters, include/exclude terms, and options to hide resolved or irrelevant interactions.

* **Leverage Timeline Navigation**: Use a timeline-based search and jump-to-match display for fast, focused review.

* **Save Custom Views**: Store preferred filter sets and column configurations for targeted, repeatable audits.

## Access Interactions

Navigate to **Quality AI** > **ANALYZE** > **Conversation Mining** > **Interactions**.     

<img src="../conversation-mining/images/conversation-mining-default-page.png" alt="Default Page" title="Default Page" style="border: 1px solid gray; zoom:80%;">

### Interactions Dashboard Elements

This dashboard elements enable supervisors to review and filter scored interactions within their assigned queues, making it easier to identify conversations that need coaching or attention. It delivers clear insights into conversation quality, agent performance, and customer experience at the conversation and agent level.

The **Interactions** dashboard includes the following elements:

* **Agents**: Shows the agent's name who last engaged in and ended the interaction.

* **Processing Status**: Displays a green icon when all processes succeed and a red icon when any process fails.

* **Actions**: Lets you assign the interaction to a bookmark for future reference.    

    !!! Note

        You must create the required bookmarks in the [Settings](../configure/quality-ai-general-settings.md) to view and tag them for future reference. 

* **Queues**: Shows the queue where the system terminated during the interaction.

    !!! Note

        The evaluation form used to score the interaction corresponds to the queue where the system terminated the interaction. 

* **Kore Evaluation Score**: Shows the AutoQA score based on the assigned form. Hover to view status (Pass, Failed, Minimum Duration Threshold, or Manual Evaluation Metrics Excluded). 

    * **Manual Evaluation Interactions**: The system excludes AutoQA scoring for interactions with manual evaluation metrics (Manual Evaluation Metrics Excluded) but enables you to access in Conversation Mining.

    * **Below Threshold or Duration Unavailable**: The system doesn't evaluate interactions flagged as Below Threshold or Duration Unavailable. These interactions remain visible in Conversation Mining for review, but don't generate scores. Select a conversation to open the Conversation Mining view with Audit, Conversation Details, and Logs. 

* **Sentiment Score**: Displays the system-generated sentiment score for the interaction based on the customer's words.

* **Supervisor Auditor Score**: Displays the supervisor-assigned score for audited or manually evaluated interactions and highlights manual evaluation metrics with a distinct, consistent visual indicator across the platform.

* **Start Time**: Displays conversation's start time in a specified format in the Interaction listing page (for example, 24 May 2024, 1:17:10 PM).

* **Duration**: Displays the call duration (voice and chat), including talk time, hold time, and after-call work time (for example, 0h 6m 25s).

* **Moments**: Shows the counts for adherence, violations, and omissions for the configured metrics. When you hover over a Moment, the system displays:

    * **Questions Adherence**: By-question metrics met during the conversation.

    * **Violation**: Speech-based violations that occurred.

    * **Omission**: Metrics not met, including playbook steps, dialog tasks, and by-question metrics. Select an interaction to open the conversation history and view Moment metrics in the AI-Assisted Manual Audit page. [Learn more](../ai-assisted-manual-audit.md){:target=”_blank”}.  

* **Sentiment Trend**: Shows the distribution of positive, negative, and neutral tones; tracks sentiment changes throughout the call; highlights the resolution tone; and summarizes overall sentiment.

* **Emotions**: Shows customer emotional states or tracked emotions during a conversation.

* **Conversation ID**: Displays the user-defined identifier for custom tracking.

* **Custom Conversation ID**: Displays the unique identifier for each conversation, used as the primary key to track and reference specific interactions.

* **Configured Intents**: Displays the configured topics or intents for each conversation across all levels (L1, L2, L3) and uses a color-coded map (red, green, gray) to indicate the sentiment of each detected topic.

* **Generated Intents**: Displays the generated intents column identified by the AI in each conversation.

### Interactions Filters 

Interaction filters help you find specific conversations, review agent performance, and identify improvement opportunities. By using the following filters, auditors can dive deeper into conversations and assess agent adherence to quality standards. Filters update automatically based on the default language set.

#### Columns

You can filter the Columns in the Interactions's dashboard by including or excluding specific fields.

#### Bookmarks

Lets you assign interactions to bookmarks and view all bookmarks linked to an interaction.  

#### Date Range Selection

Provides the option to select the date range for the conversation interactions. The default date range selected is always the last seven days.  

!!! Note

    If you attempt to evaluate an interaction not assigned to you, you cannot submit the evaluation.

## Filters

This helps you to pinpoint high-value interactions, streamline audits, and narrow results to conversations that need attention. You can add filters from the Filters list and refine results using multiple category panels.

## Add New Filter

The new filter interaction enables you to focus on areas of interest or those with high potential for improvement, where you can save them for audit assignments. It helps you filter out options and identify which interactions went wrong.

Steps to Add New Filter:

1. Select the **Filters** dropdown shown in the upper-right corner to add a new filter. 

2. Select the **+ Add New Filter**.   

3. Choose a **Filter By** category.   

## Filter Categories

This Filter categories panel lets you refine and analyze interaction data using configured parameters.

### Filter by Efficiency

This shows metrics related to interaction handling and process adherence.

To filter by Efficiency,

1. Select **Channels** (Chat or Voice) to limit interactions to a specific communication mode.

1. Select **Audit Status** to view Audited, Assigned, or Not Assigned conversations.

1. Select one or more **Allocation Name** (applications) to filter interactions associated with specific allocation batches. You can search and select multiple values.

1. Select the **Duration Status** filter options that let you control which contacts (interactions) appear based on their evaluation eligibility, such as All (default), Evaluated Only, Below Threshold, or Duration Unavailable.


1. Enter the **Conversation ID** to filter by a specific interaction.

1. Enter the **Custom Conversation ID** to filter by a user-defined identifier.

1. From **Queues**, select the queue or routing group for the interaction.

1. From **Agent Groups**, select the group linked to the chosen queue. You can filter only groups associated with the selected queues.

1. From **Agents**, select the agent assigned to the chosen queue. The system filters agents based on interactions within that queue.

1. Enable the required filter options.
   

### Filter by Experience

This category captures the emotional and qualitative aspects of the customer journey.

#### Avg. Waiting Time

Select the required date range in seconds.

#### Sentiment Score

This indicates the positive sentiment score (higher) and negative sentiment score (lower) interactions. Provides a slider bar to move the minimum and maximum interaction range. 

#### CSAT
 
This shows the distribution of interactions across the score range in which the customer has responded to the feedback service, and is then drilled down accordingly.  
<img src="../conversation-mining/images/experience-csat.png" alt="CSAT" title="CSAT" style="border: 1px solid gray; zoom:80%;">  

#### Configured Intents

Select the configured topics or intents for each conversation across all levels (L1, L2, and L3) from the search bar. Child lists update automatically based on the parent level selection.

!!! Note

    Select levels in order: L1 first, then L2, and finally L3. You must select at least one level to apply the filter. All topic levels update dynamically based on your selections.

#### Generated Intents

Select the configured intents for each conversation, or choose AI-suggested options based on your input.

#### Overall Resolution

Filter conversations by **Resolved** or **Unresolved** (both selected by default). The system marks a conversation resolved when it determines all applicable L3 intents, and unresolved when it can't define at least one intent.

#### Churn Monitor

This provides the underlying cause and need that a conversation relates to. It indicates the loss of customers over a specific period.

This has the following two options to churn the monitor:

* **Churn Risk**

    Shows the level of customer churn risk in a conversation. Supervisors can view the churn risk percentage for a selected date range. 

    !!! Note

        The customer churn is calculated once per interaction. Customer churn is not calculated as a score. 

* **Escalation**

    This detects the number of escalations raised to the Supervisor by a customer.  

### Filter by Behavior

This category analyzes interaction dynamics and conduct between agents and customers. 

#### Metric Name

Select a metric from the dropdown list to filter interactions evaluated for that specific metric. You can select only one metric at a time. After selection, the metric appears as a tag in the input field. Metrics configured for manual evaluation display a distinct visual indicator to help supervisors identify them for audit allocation.

#### Metric Qualification

The selected evaluation metric appears as a tag under the input field, and you can clear it by selecting **X**. When you open the page from the Adherence Heatmap, the system automatically applies the filters. If you select queues, the list shows only metrics from the forms in those queues. The filter retrieves interactions where the metric applies, allowing you to view failed or adhered interactions using the radio options.

* **Pass**: Conversations where the trigger was present, and the answer matched the expected utterance (Adhered outcome).

* **Fail**: Conversations where the trigger was present, but the answer didn't match (Not Adhered outcome).

* **N/A**: Conversations where the trigger wasn't detected, making answer evaluation not applicable. Available only for the Dynamic By Question metric type.

    !!! Note

        The N/A option in Metric Qualification appears only when you select a Dynamic By Question metric. It is not available for Static metric types or other metric measurement types.

#### Language

Select the languages to add from the dropdown list.   

#### Empathy Score

This measures the level of understanding and compassion the agent shows towards the customer’s situation. Provides the extent of empathy, like frustration or displeasure, that a customer has shown (negative sentiment). A higher score indicates a more empathetic interaction.

#### Crutch Word Score

This shows how often the agent uses filler words (for example, umm, uh, and similar terms). A higher score indicates greater use of these crutch words.  

#### Agent Playbook Adherence 

This shows the Agent AI playbook adherence percentage for an interaction.   

#### Kore Evaluation Score

This shows the automated QA score for an interaction, based on the evaluation form assigned to an interaction’s queue.       

#### Filter by Keywords

This lets you search, filter, and review conversations using specific keywords or phrases. You can filter by included or excluded keywords and by speaker, with results linked directly to the QA audit screen.    
<img src="../conversation-mining/images/keyword-filter.png" alt="Filter by Keywords" title="Filter by Keywords" style="border: 1px solid gray; zoom:80%;">  

The following table explains the keyword inclusion, exclusion, and filtering options for Conversation Mining.

| Category                            | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Select Conditions (AND/OR)**      | Select how the system combines multiple keywords in the Include section:<br> **AND**: All specified keywords must appear in the conversation. <br>**Example**: <br> – **Include**: Billing **AND** frustrated (Both speakers). <br> – **Exclude**: Resolved (Both speakers).<br> **OR**: At least one of the specified keywords must appear somewhere in the conversation.<br>**Example**:<br> – **Include**: Refund **OR** Money Back (Customer only). <br> – **Exclude**: Processed (Agent only), completed (Both speakers). |
| **Conversation Including Keywords** | Search conversations for specific keywords or exact phrases, with optional speaker filters.<br> **Keyword Input**: Enter a keyword or exact phrase to search.<br> – **Speaker Filter**: Select who mentioned the keyword:<br> – **Agent only**: Count only agent mentions.<br> - **Customer only**: Count only customer mentions.<br> - **Both**: Count mentions by either speaker (agent or customer).<br>**+Add Keyword**: Add up to eight keywords by selecting the +Add Keyword.                                                        |
| **Conversation Excluding Keywords** | Enter keywords or phrases that must not appear in the conversation. You can also select which Speaker must not mention the keyword. <br> – **Speaker Filter**: Choose who must not mention the keyword (Agent only, Customer only, Both).<br> – **Add Exclusion**: Add up to five exclusion keywords by selecting **+Add Exclude Keyword**. <br>**Note**: <br> – All exclusions use **AND NOT** logic. If any exclusion keyword appears, the system excludes the conversation. <br> – Each row includes a **Remove** option to delete an exclusion keyword.                                 |
| **Audit Navigation & Filtering**    | – Enables quick filtering and navigation by keyword or QA question.<br>– Supports transcript autoscroll and match relevance filtering.                                                                                                                                                                                                                                                                                                                                                    |
| **Apply Keywords Action**           | – Select **Apply Keywords** to activate the filters and display the selected keywords.<br> – Select **Apply** to run the search and view results based on all active filters.                                                                                                                                                                                                                                                                                                                 |
| **Filtered Keywords Interactions**  | The system displays the count of filtered interactions that contain the selected keywords after applying the filters (for example, "Filtered Interactions: 22").                                                                                                                                                                                                                                                                                                                                            |


## Manage Saved Filters

Use the following options to efficiently apply, save, and manage filters on the Conversation Mining dashboard.

* **Apply Filters**: Stores the current settings as an Unsaved Filter on the Conversation Mining dashboard. Use Save & Apply to save and name filters for audit allocation.

    !!! Note

        If interactions are not used for audit allocation, you can apply filters without saving.        

* **Save Filters**: Lets you name a filter and optionally set it as the default on the Interactions dashboard.

* **View Saved Filters**: Shows all saved and their associated unsaved filters. 

* **Filtered Interactions**: Displays a real-time count of matching conversations. 

* **Customization Options**: Includes Copy, Mark as Default, Edit, and Delete filters.
    