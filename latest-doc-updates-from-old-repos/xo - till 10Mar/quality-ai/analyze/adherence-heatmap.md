# Adherence Heatmap

The **Adherence Heatmap** feature The Adherence Heatmap enables supervisors to track agent adherence trends across metrics over time. It highlights non-compliant interactions and, on hover, displays the date range, total interactions, adhered interactions, and adherence percentage. 

Based on the selected date range, agents, and language filters, supervisors can analyze the color-coded adherence data in the heatmap to identify areas of concern, monitor agent compliance across evaluation forms, metrics, or queues, and identify agents who need additional attention. These insights help supervisors make data-driven decisions and take targeted actions to improve agent performance.

### Access Adherence Heatmap

Navigate to **Quality AI** > **ANALYZE** > **Adherence Heatmap**.   
<img src="../adherence-heatmap/images/adherence-heatmap-landing-page.png" alt="Agent Leaderboard" title="Agent Leaderboard" style="border: 1px solid gray; zoom:100%;">

!!! Note

    To view this feature, you must enable **Auto QA** in the **Settings**.

From the dropdown list, you can select an evaluation form to visualize the adherence metrics in the heatmap.  

The adherence heatmap has the following key sections:

## Adherence Metrics Visualization

This section explains how the system displays and calculates adherence metrics for a selected form across different date ranges.

* **Applicability of Metrics**: The applicability of metrics depends on the queue form selected for the following: :

    * For static metrics (by question), the metric applies to all terminated or failed interactions in the respective queue (form).

    * For dynamic metrics (by question), the system applies the metric only when it detects the relevant trigger. If the trigger is missing, the system doesn't apply the metric.

* **Color Coding & Display**: The system displays heatmap tile colors based on the calculated adherence percentage. It colors each tile according to the adherence value:

* Red indicates 0%.

* Green indicates 100%.

* The color transitions in 10% increments between red and green.

* Gray indicates that the adherence percentage doesn't apply.


* **Failed Interactions and Fatal Errors**: When an interaction fails, the system applies the following two conditions:: 
        
    * **Failed Interactions**: Includes all agent interactions that don't meet minimum quality or compliance thresholds. This category encompasses both fatal errors and process failures that cause the interaction to fail. Examples include missed greetings, providing incorrect information, or any compliance breaches.       

    * **Fatal Errors**: The system treats fatal errors as critical issues and immediately flags them, regardless of other correct responses or scores. Examples include major compliance breaches. When a fatal error occurs, the system sets the entire interaction’s adherence score or scorecard to 0% (red) and marks the interaction as failed.
    
    Supervisors Agents can use flagged fatal errors to self-assess and prepare for coaching. Visual adherence scores (heat maps) and question-level feedback support this process. For more information, refer to [AI-Assisted Manual Audit](../ai-assisted-manual-audit.md#by-question). 

* **Hover Tooltip**: This displays the adherence percentage and number of interactions for each selected date range. If no interactions exist for a range or filter, it displays nothing.      
<img src="../adherence-heatmap/images/no-interaction.png" alt="No Interaction" title="No Interaction" style="border: 1px solid gray; zoom:100%;">

* **Adherence Percentage Calculation**: The system calculates adherence by dividing the number of interactions where the agent meets the metric by the number of interactions where the metric applies. 

The system calculates the percentage adherence for each tile (box) in the heatmap based on the selected evaluation form, agent, and date range.

## Filters

This enables supervisors to drill down into agent performance based on selected criteria. This outlines the following filter types based on the form, date range, and agent selected.

**Date Range Filter View**

You can filter the data by selecting a specific date range. The system sets the default date range to the last 7 days based on the selected queue. The system applies the user’s system time zone to determine timezone settings.

You can select from three views (Daily, Weekly, and a Custom range):  

**Date Range View**

You can select from three views (Daily, Weekly, and a Custom range):

* **Manual Evaluation Metrics Indicator**: Shows Manual Evaluation metrics with a visual indicator and represents unaudited conversations if no data is available in the Adherence Heatmap.
<img src="../adherence-heatmap/images/manual-evaluation-indicator.png" alt="Manual Evaluation Metrics Indicator" title="Manual Evaluation Metrics Indicator" style="border: 1px solid gray; zoom:100%;">

* **Daily**: When the selected date range is 1–14 days, and each tile shows adherence for a specific day, with a horizontal scroll option if the date range is more than 7 days.    

* **Weekly**: When the selected range is more than 14 days, and each tile shows adherence for the full week, with similar scrolling and display logic as the daily view. 

* **Custom Range**: All interaction data from the given date (12:00:00 AM to 11:59:59 PM), in the agent’s time zone, limited to 31 days.       

**Evaluation Form**: Select forms across assigned queues and set a default that persists across sessions (both on the Heatmap page and the QA dashboard). Selecting a new default replaces the previous one and highlights fatal metrics with visual indicators.      

**Agent**:By default, the system displays all agents in the selected queues, including those assigned to the queues linked to the selected form. You can search and multi-select them, and update the heatmap to show adherence for their completed interactions. Only adherence tiles for the selected date range, agent, and language remain active; others grayed out and don’t appear on the map.   

* **All Languages**: This enables multi-selection of languages from the All Languages drop-down menu on the Adherence Heatmap page, corresponding to the languages selected in the evaluation form.   

!!! Note

    When the language filter is applied, only metrics configured for the selected languages appear under the All Languages drop-down menu. 

## Clickable Functionality

This describes the functionality of a heatmap interface for tracking agent adherence to specific metrics over a selected date range (selected agent, date range, and adherence status).  
<img src="../adherence-heatmap/images/click-through.png" alt="Click-Through" title="Click-Through" style="border: 1px solid gray; zoom:100%;"> 

The clickable date range tiles (each box is a metric) display the interactions for the selected agents, showing the following metrics for each date:  

* **Adherence Display**: You can sort the adherence column by percentage, with the default order showing the lowest adherence first.     
<img src="../adherence-heatmap/images/adherence-percentage-column-sorting.png" alt="Adherence Display" title="Adherence Display" style="border: 1px solid gray; zoom:100%;"> 

* **Heatmap Interaction**: Select a date range tile in the heatmap to open a window, which displays agent-wise adherence for the selected metric, ordered from least to most adherence. This displays the percentage count of adherence interactions.      
<img src="../adherence-heatmap/images/adherence-percentage-count.png" alt="Heatmap Interaction" title="Heatmap Interaction" style="border: 1px solid gray; zoom:100%;"> 

* **View Interactions**: Select the **View Interactions** option, which directs you to the [Conversation Mining](../analyze/conversation-mining-interactions.md){:target="_blank"} page, where you can view failed interactions of all agents. The applied filters (as **Unsaved**) include the evaluation metric name or metric used with queues, and metric qualification or the number of failed interactions (pass/fail).  
<img src="../adherence-heatmap/images/conversation-mining-failed-interactions.png" alt="View Interactions" title="View Interactions" style="border: 1px solid gray; zoom:100%;"> 

**View Interactions Filter Parameters**

The following describes the filter parameters for View Interactions:

* Agents with no applicable interactions for the metric appear at the end of the list.   
<img src="../adherence-heatmap/images/not-applicable.png" alt="No Applicable Interaction" title="No Applicable Interaction" style="border: 1px solid gray; zoom:100%;"> 

* The system displays No Interactions for N/A cases. The system shows the Agent Adherence tile in gray when there are no interactions and displays No Failed Interactions for agents with 100% adherence. The system disables the View Interactions option for agents with no applicable interactions or with 100% adherence.   
<img src="../adherence-heatmap/images/no-interactions-with-failed-interactions.png" alt="No Interactions" title="No Interactions" style="border: 1px solid gray; zoom:100%;"> 

    !!!Note

        * Click the **View Interaction** button to view the **Conversation Mining** page, where you can view all failed interactions see the tags explaining the filtering criteria based on the metric you clicked. 

        * Notification tags are shown only when navigating to the **Conversation Mining** from **Adherence Heatmap**, and not when accessing the **Conversation Mining** page directly.      
    <img src="../adherence-heatmap/images/conversation-mining-interaction-notification-tag.png" alt="No Interactions" title="No Interactions" style="border: 1px solid gray; zoom:100%;"> 

**Action Filters**

* **Filter Heatmap by Agent**: Selecting this icon takes you to the agent’s heatmap metrics page for the selected date range, as shown in the View Interactions screen.  
<img src="../adherence-heatmap/images/heatmap-by-agent.png" alt="Filter Heatmap by Agent" title="Filter Heatmap by Agent" style="border: 1px solid gray; zoom:100%;"> 

* **View Failed Interactions in Conversation Mining**: Selecting the agent interaction icon opens the Interactions page in Conversation Mining to view the agent’s failed interactions.

**QA or Supervisor Dashboard**: This dashboard shows a simplified Adherence Heatmap with data from the last 7 days, a default evaluation form, and no clickable functionality. You can select and set an evaluation form as the default from the dropdown. For more information, see [Supervisor Dashboard](../analyze/dashboard.md). 