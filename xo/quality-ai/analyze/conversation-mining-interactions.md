# Conversation Mining

The Conversation Mining feature lets you focus on interactions of interest or those with the greatest potential for improvement, removing guesswork from manual evaluations and allowing you to concentrate on the most critical interactions.

## Access Conversation Mining

Navigate to **Quality AI** > **ANALYZE** > **Conversation Mining**.  

<img src="../conversation-mining/images/conversation-mining-default-page.png" alt="Default Page" title="Default Page" style="border: 1px solid gray; zoom:80%;"/>

The **Conversation Mining** includes the following sections:

* **Interactions**: Enables you to view the scored interactions and applied filters for targeted reviews. [Learn more](./conversation-mining-interactions.md){:target=”_blank”}.

* **Audit Allocations**: Lets you create and assign allocations for auditors to perform manual quality scoring. [Learn more](../analyze/conversation-mining-audit-allocations.md){:target=”_blank”}.

## Conversation Mining - Interactions

This feature enables supervisors to review and filter scored interactions within their assigned queues, making it easier to identify conversations that need coaching or attention. It delivers clear insights into conversation quality, agent performance, and customer experience at the conversation level and agent level.

By using these new capabilities, supervisors can:  

* **Queue Interaction Review**: Access scored interactions within their assigned queues to identify conversations that need coaching or attention.

* **Gain Clear Quality Insights**: Understand conversation quality, agent performance, and customer experience at a glance.

* **Analyze Conversations with Insights**: Leverage integrated Taxonomy-based Topic Discovery, Topic-Level Sentiment, and Resolution insights to perform better analysis across Conversation Mining, the AI-Audit Screen, and Agent Dashboards.

* **Identify Key Conversation Insights**: Use taxonomy-based topics, topic-level sentiment, and resolution status across filters, columns, audits, and dashboards to identify unresolved or high-impact conversations and interpret sentiment with intuitive, color-coded indicators.

* **Filter by Experience Insights**: Apply new filters for configured intents (topics) across L1, L2, and L3 levels, generated intents, and overall resolution (resolved/unresolved).

* **Audit with Precision**: Customize the view with metadata and column controls, including the new configured intent column (showing topics with sentiment color-coding) and the overall resolution column.

* **Refine Searches Efficiently**: Use keyword-based filtering, including speaker-specific filters, include/exclude terms, and options to hide resolved or irrelevant cases.

* **Leverage Timeline Navigation**: Use a timeline-based search and jump-to-match display for fast, focused review.
Save Custom Views: Store preferred filter sets and column configurations for targeted, repeatable audits.

### Access Interactions

Navigate to **Quality AI** > **ANALYZE** > **Conversation Mining** > **Interactions**.  
<img src="../conversation-mining/images/conversation-mining-interaction-default.png" alt="Interactions" title="Interactions" style="border: 1px solid gray; zoom:80%;"/>

!!! Note

    * Interactions may take a few seconds to appear after a call ends. 

    * If any section of the Agent Interactions dashboard elements shows **NA** status, the data for that section is not available on the Audit Allocations page.

### Interactions Dashboard Columns

The **Interactions** dashboard includes the following items:

* **Agents**: Shows the agent's name who last engaged in and ended the interaction.

* **Processing Status**: Displays a green icon when all processes succeed and a red icon when any process fails.

    * **Pass**: Shows a green icon when all processes succeed and the system captures metric adherence.

    * **Failed**: Shows a red icon when any process fails and the system doesn't capture metric adherence.  
<img src="../conversation-mining/images/processing-status.png" alt="Processing Status" title="Processing Status" style="border: 1px solid gray; zoom:80%;"/>

* **Actions**: Lets you assign the interaction to a bookmark for future reference.    
<img src="../conversation-mining/images/actions-tags.png" alt="Moments" title="Moments" style="border: 1px solid gray; zoom:80%;"/>

    !!! Note

        You must create the required bookmarks in the [Settings](../configure/quality-ai-general-settings.md) to view and tag them for future reference. 

* **Queues**: Shows the queue where the system terminated during the interaction.

    !!!Note

        The evaluation form used to score the interaction corresponds to the queue where the system terminated the interaction. 

* **Kore Evaluation Score**: Shows the Auto QA score based on the agent-completed evaluation form. Hover over the warning icon to view the agent’s API processing status (Pass, Failed, or Disabled). Select a conversation to open the Conversation Mining page, which includes Audit, Conversation Details, and Logs.

* **Sentiment Score**: Displays the system-generated sentiment score for the interaction based on the customer's words.

* **Supervisor Auditor Score**: Shows the supervisor-audited score when a supervisor has manually evaluated the interaction.

* **Start Time**: Displays conversation's start time in a specified format in the Interaction listing page (for example, 24 May 2024, 1:17:10 PM).

* **Duration**: Displays the call duration (voice and chat), including talk time, hold time, and after-call work time (for example, 0h 6m 25s).

* **Moments**: Shows the counts for adherence, violations, and omissions for the configured metrics. When you hover over a Moment, the system displays:

    * **Questions Adherence**: By-question metrics met during the conversation.

    * **Violation**: Speech-based violations that occurred.

    * **Omission**: Metrics not met, including playbook steps, dialog tasks, and by-question metrics. Select an interaction to open the conversation history and view Moment metrics in the AI-Assisted Manual Audit page. [Learn more](../ai-assisted-manual-audit.md){:target=”_blank”}.  
    <img src="../conversation-mining/images/moments.png" alt="Moments" title="Moments" style="border: 1px solid gray; zoom:80%;"/>    

* **Sentiment Trend**: Shows the distribution of positive, negative, and neutral tones; tracks sentiment changes throughout the call; highlights the resolution tone; and summarizes overall sentiment.
Emotions: Shows customer emotional states or tracked emotions during a conversation.

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

This helps you to pinpoint high-value interactions, streamline audits, and narrow results to conversations that need attention. You can add filters from the Filters dropdown and refine results using multiple category panels.

## Add New Filter

The new filter interaction enables you to focus on areas of interest or those with high potential for improvement, where you can save them for audit assignments. It helps you filter out options and identify which interactions went wrong.

Steps to Add New Filter:

1. Select the **Filters** dropdown to add a new filter.   
<img src="../conversation-mining/images/Filters.png" alt="Filter" title="Filter" style="border: 1px solid gray; zoom:80%;"/>  

Steps to Add New Filter:

1. Select the **Filters** dropdown shown in the upper-right corner to add a new filter. 

2. Select the **+ Add New Filter**.   

3. Choose a **Filter By** category.   

## Filter Categories

This Filter categories panel lets you refine and analyze interaction data based on various parameters configured, such as efficiency, experience, behavior, and keywords.

### Filter by Efficiency

This provides an operational view of areas of interest where there is greater potential for improvement. 

To filter by Efficiency,

1. Select **Channels** (Chat or Voice) to limit interactions to a specific communication mode.

1. Select **Audit Status** to view Audited, Assigned, or Not Assigned conversations.

1. Enter the **Conversation ID** to filter by a specific interaction.

1. Enter the **Custom Conversation ID** to filter by a user-defined identifier.

1. From **Queues**, select the queue or routing group for the interaction.

1. From **Agent Groups**, select the group linked to the chosen queue. You can filter only groups associated with the selected queues.

1. From **Agents**, select the agent assigned to the chosen queue. The list shows only agents who have interactions in that queue.

1. Enable the required filter options: 

    * Filter by handling time
    * Filter by deviation from AHT
    * Deviation (%)
    * Number of Transfers

### Filter by Experience

This category captures the emotional and qualitative aspects of the customer journey.

#### Avg. Waiting Time

Select the required date range in seconds.

#### Sentiment Score

This indicates the positive sentiment score (higher) and negative sentiment score (lower) interactions. Provides a slider bar to move the minimum and maximum interaction range. 

#### CSAT
 
This shows the distribution of interactions across the score range in which the customer has responded to the feedback service, and is then drilled down accordingly.  
<img src="../conversation-mining/images/experience-csat.png" alt="CSAT" title="CSAT" style="border: 1px solid gray; zoom:80%;"/>  

#### Configured Intents

Select the configured topics or intents for each conversation across all levels (L1, L2, and L3) from the search bar. Child lists update automatically based on the parent level selection.

#### Generated Intents

Select the configured intents for each conversation, or choose AI-suggested options based on your input.

#### Overall Resolution

Filter conversations by Resolved or Unresolved (both selected by default). The system marks a conversation Resolved when it determines all applicable L3 intents, and Unresolved when it can't define at least one intent.

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

This filter enables supervisors to view interactions by specific evaluation metrics. Use radio buttons to filter by Pass or Failed and select a metric from the drop-down list to refine results.  

#### Metric Qualification

The selected evaluation metric appears as a tag under the input field, and you can clear it by selecting **X**. When you open the page from the Adherence Heatmap, the system automatically applies the filters. If you select queues, the list shows only metrics from the forms in those queues. The filter retrieves interactions where the metric applies, allowing you to view failed or adhered interactions using the radio buttons.

#### Language

Select the languages to add from the dropdown list.   

#### Empathy Score

This measures how well the agent understands and responds to the customer’s situation. It shows the extent of negative sentiment, such as frustration or displeasure, expressed by the customer. A higher score indicates a more empathetic interaction.

#### Crutch Word Score

This shows how often the agent uses filler words (for example, umm, uh, and similar terms). A higher score indicates greater use of these crutch words.  

#### Agent Playbook Adherence 

This shows the Agent AI playbook adherence percentage for that interaction.   

#### Kore Evaluation Score

This shows the automated QA score for an interaction, based on the evaluation form assigned to an interaction’s queue.       

## Manage Saved Filters

### Apply Filters

* Select **Apply** to save the filter settings. 

* The system stores the applied settings as an **Unsaved Filter** on the **Conversation Mining** dashboard page, even when you select a category filter.   
 <img src="../conversation-mining/images/conversation-mining-unsaved-filter.png" alt="Unsaved Filter" title="Unsaved Filter" style="border: 1px solid gray; zoom:50%;"> 

    !!! Note

        If interactions are not used for audit allocation, you can apply filters without saving. To assign audit allocations, save and name filters for easy reference in future audits.

### Save Filters

* Select **Save & Apply** to save the selected filter category details and proceed.  
 <img src="../conversation-mining/images/interactions-save-and-apply.png" alt="Save & Apply" title="Save & Apply" style="border: 1px solid gray; zoom:50%;"> 

* In the **Save Filter** window, enter the Filter Name.

* Enable the **Make this the default view** toggle if required.  
 <img src="../conversation-mining/images/save-filter.png" alt="Save Filter" title="Save Filter" style="border: 1px solid gray; zoom:50%;"> 

* Select **Save & Apply** in the **Save Filter** window to set the **Unsaved Filter** as the default view filter in the **Interactions** dashboard.  
 <img src="../conversation-mining/images/default-view-in-dashboard.png" alt="Default View Filter" title="Default View Filter" style="border: 1px solid gray; zoom:50%;"> 

### View Saved Filters

* Select the set default view filter or any Unsaved Filter dropdown to view all created Saved Filters.  

* The system displays all the Unsaved Filters and their associated Saved Filters.  

### View Filtered Interactions

* Select **Filtered Interactions** to view the real-time count of conversation interactions based on your filter criteria. The system updates this count dynamically whenever you apply or remove filters.      
<img src="../conversation-mining/images/filtered-interactions.png" alt="Filtered Interactions" title="Filtered Interactions" style="border: 1px solid gray; zoom:80%;"/> 

#### Saved Filters Customization Options

<<<<<<< Updated upstream
When you save filters, the system provides the following customization options:
=======
When filters are saved, the following customization options are available:  
>>>>>>> Stashed changes

* **Copy**: Creates a duplicate of the saved filter.

* **Mark as default**: Sets the selected filter as the default each time you open the Call Mining tab.

* **Edit Filter**: Lets you modify the details of a saved filter.

* **Delete Filter**: Removes the selected saved filter permanently.  
    <img src="../conversation-mining/images/saved-filters.png" alt="Saved Filters" title="Saved Filters" style="border: 1px solid gray; zoom:80%;"/> 