# Adherence Heatmap

The **Adherence Heatmap** feature helps supervisors to track and visualize trends in agent adherence to specific metrics over time, making it easy to filter out non-compliant interactions, particularly where agents fall short of meeting set metrics. Hovering over each tile highlights the corresponding date range, total number of interactions, interactions adhered, and adherence percentages. 

Based on the selected date range, agents, and language filters, supervisors can analyze the color-coded adherence data in the heatmap to identify areas of concern, monitor agent compliance across evaluation forms, metrics, or queues, and identify agents who need additional attention. These insights help supervisors make data-driven decisions and take targeted actions to improve agent performance.

### Access Adherence Heatmap

Navigate to **Quality AI** > **ANALYZE** > **Adherence Heatmap**.   
<img src="../adherence-heatmap/images/adherence-heatmap-landing-page.png" alt="Agent Leaderboard" title="Agent Leaderboard" style="border: 1px solid gray; zoom:100%;">

!!! Note

    To view this feature, you must enable **Auto QA** in the **Settings**.

From the dropdown list, you can select an evaluation form to visualize the adherence metrics in the heatmap.  

The adherence heatmap has the following key sections:

## Visualization Basis

This section explains how the system displays and calculates adherence metrics for a selected form across different date ranges.

* **Adherence Percentage Calculation**

    The system calculates by comparing:  
    <img src="../adherence-heatmap/images/adherence-calculation.png" alt="Agent Leaderboard" title="Agent Leaderboard" style="border: 1px solid gray; zoom:100%;">

    The system calculates the adherence percentage for each heatmap tile based on the evaluation form, agent, and date range.

* **Applicability of Metrics** 

    The applicability of metrics depends on the form of the queue selected:

    * **Static Metrics (By question)**: These metrics apply to all terminated or failed interactions within the respective queue (form).

    * **Dynamic Metrics (By question)**: If the trigger is missing, the system marks the metric as Not Applicable (N/A).

* **Failed Interactions and Fatal Errors**

    When an interaction fails, the system applies the following two conditions:: 
        
    * **Failed Interactions**: Includes all agent interactions that don't meet minimum quality or compliance thresholds. This category encompasses both fatal errors and process failures that cause the interaction to fail. Examples include missed greetings, providing incorrect information, or any compliance breaches.       

    * **Fatal Errors**: These are critical errors that typically trigger an immediate red flag or alert explaining the failure, regardless of other correct answers or scores. Examples include major compliance breaches. When a fatal error occurs, the entire interaction’s adherence score or scorecard is marked as 0% (red) and marked as failed. 
    
    Supervisors Agents can use flagged fatal errors to self-assess and prepare for coaching. Visual adherence scores (heat maps) and question-level feedback support this process. For more information, refer to [AI-Assisted Manual Audit](../ai-assisted-manual-audit.md#by-question). 

* **Color Coding & Display** 

    This displays the heatmap tile (box) color based on the calculated adherence %. Each tile is colored based on the adherence percentage. 

    * Red = 0% adherence
    
    * Green = 100% adherence

    * Grey = N/A (adherence not applicable)
    
    When a color Gradient gradually shifts from red to green in 10% steps, it denotes a smooth gradient change with better adherence.     
    <img src="../adherence-heatmap/images/color-coding -bar.png" alt="Agent Leaderboard" title="Agent Leaderboard" style="border: 1px solid gray; zoom:100%;">

* **Hover Tooltip**

    This displays the **% adherence** and the **number of calls adhered** to for each date range selected.

    * If there are no interactions for a selected date range and filter, it does not display any interactions.  
        <img src="../adherence-heatmap/images/no-interaction.png" alt="No Interaction" title="No Interaction" style="border: 1px solid gray; zoom:100%;">

## Filters

This allows supervisors to drill down into agent performance based on selected criteria chosen. This outlines the following filter types based on the form, date range, and agent selected. 

**Date Range Filter**

You can filter data within a specific date range. By default, the range is set to the last 7 days, depending on the selected queue. Timezone settings are based on the user's system time zone.   
<img src="../adherence-heatmap/images/date-range-view.png" alt="Agent Leaderboard" title="Agent Leaderboard" style="border: 1px solid gray; zoom:100%;">

**Date Range View**

You can select from three views (Daily, Weekly, and a Custom range):

* **Daily**: Displays adherence and evaluation data for each day within a selected date range of 1 to 14 days if selected. If the date range exceeds 7 days, you can view the adherence data by scrolling it horizontally. This view provides a detailed, day-by-day breakdown to track daily performance fluctuations and identify specific dates with high or low adherence.  
<img src="../adherence-heatmap/images/daily-view.png" alt="Daily View" title="Daily View" style="border: 1px solid gray; zoom:100%;">

* **Weekly**: For date ranges longer than 14 days, data is aggregated weekly (for example, Monday to Sunday) and shown as one summary point per week. This flexible daily variations, highlights broader trends for easier performance review and planning.  
<img src="../adherence-heatmap/images/weekly-view.png" alt="Weekly View" title="Weekly View" style="border: 1px solid gray; zoom:100%;">

* **Custom Range**: Lets you analyze interaction data within any custom date range of up to 31 days, based on your time zone (12:00:00 AM to 11:59:59 PM). You can filter by specific metrics or questions, group data by different periods (for example, biweekly or monthly), and apply multiple filters to tailor reports to your needs.     
<img src="../adherence-heatmap/images/custom-range-view.png" alt="Custom Range View" title="Custom Range View" style="border: 1px solid gray; zoom:100%;">

**Evaluation Form**

This allows you to select forms across all queues that agents are part of. You can set a form as the **Default**, which is persisted across sessions (both in the Heatmap page and the QA dashboard). If a different form is marked as default, it gets replaced with the previous form selected. It also highlights fatal metrics with visual indicators displaying the negative scores of agents for quality monitoring.    
<img src="../adherence-heatmap/images/eva-form.png" alt="Agent Leaderboard" title="Agent Leaderboard" style="border: 1px solid gray; zoom:100%;"> 

**Agent**

By default, all agents in the selected queues get displayed. In this, all agents under the queues that the selected form is assigned to are displayed. You can search for and multi-select agents by name and apply filters accordingly. When the agent filters are applied, the adherence heatmap is recalculated for the selected agents within the selected queue. This displays the adherence data only for the selected agents and their completed interactions.    
<img src="../adherence-heatmap/images/agents-list.png" alt="Agent Leaderboard" title="Agent Leaderboard" style="border: 1px solid gray; zoom:100%;"> 

!!! Note

    Based on the selected date range, agent and language, only the adherence interactions tiles within the visible date range are shown, and the others are greyed out. The date markers for these greyed-out dates do not appear at the top of the map.    
 <img src="../adherence-heatmap/images/greyed-out-tiles.png" alt="Greyed-out" title="Greyed-out" style="border: 1px solid gray; zoom:100%;"> 

## Click-Through Functionality

This describes the functionality of a heatmap interface for tracking agent adherence to specific metrics over a selected date range (selected agent, date range, and adherence status).  
<img src="../adherence-heatmap/images/click-through.png" alt="Click-Through" title="Click-Through" style="border: 1px solid gray; zoom:100%;"> 

The clickable date range tiles (each box is a metric) display the interactions for the selected agents, showing the following metrics for each date:  

* **Adherence Display**: Adherence percentages are shown within colored boxes, with color matching the heatmap’s color scheme. You can sort the adherence column by percentage, defaulting to the least adherence first.   
<img src="../adherence-heatmap/images/adherence-percentage-column-sorting.png" alt="Adherence Display" title="Adherence Display" style="border: 1px solid gray; zoom:100%;"> 

* **Heatmap Interaction**: Click a date range tile (box) in the heatmap to open a window that displays agent-wise adherence percentage for the selected metric, ordered from least to most adherence. This displays the percentage count of adherence interactions.  
<img src="../adherence-heatmap/images/adherence-percentage-count.png" alt="Heatmap Interaction" title="Heatmap Interaction" style="border: 1px solid gray; zoom:100%;"> 

* **View Interactions**: Click the **View Interactions** button, which directs you to the [Conversation Mining](../analyze/conversation-mining-interactions.md){:target="_blank"} page, where you can view failed interactions of all agents. The applied filters (as **Unsaved**) include the evaluation metric name or metric used with queues, and metric qualification or the number of failed interactions (pass/fail).  
<img src="../adherence-heatmap/images/conversation-mining-failed-interactions.png" alt="View Interactions" title="View Interactions" style="border: 1px solid gray; zoom:100%;"> 

**View Interactions Filter Parameters**

The following are the filter parameters of **View Interactions**:

* Displays agents' names at the end of the list who do not have any applicable interactions for that metric.  
<img src="../adherence-heatmap/images/not-applicable.png" alt="No Applicable Interaction" title="No Applicable Interaction" style="border: 1px solid gray; zoom:100%;"> 

* Displays **No Interactions** for N/A cases and **No Failed Interactions** for agents with 100% adherence. The **View Interactions** button gets disabled for agents with no applicable interactions or those with 100% adherence.   
<img src="../adherence-heatmap/images/no-interactions-with-failed-interactions.png" alt="No Interactions" title="No Interactions" style="border: 1px solid gray; zoom:100%;"> 

    !!!Note

        * Click the **View Interaction** button to view the **Conversation Mining** page, where you can view all failed interactions see the tags explaining the filtering criteria based on the metric you clicked. 

        * Notification tags are shown only when navigating to the **Conversation Mining** from **Adherence Heatmap**, and not when accessing the **Conversation Mining** page directly.      
    <img src="../adherence-heatmap/images/conversation-mining-interaction-notification-tag.png" alt="No Interactions" title="No Interactions" style="border: 1px solid gray; zoom:100%;"> 

**Interaction Action**

* **Filter Heatmap by Agent**: By clicking this icon, you can filter the heatmap metrics of any individual agent within a selected date range as displayed in the following **View Interactions** screen.  
<img src="../adherence-heatmap/images/heatmap-by-agent.png" alt="Filter Heatmap by Agent" title="Filter Heatmap by Agent" style="border: 1px solid gray; zoom:100%;"> 

* **View Failed Interactions in Conversation Mining**: When you select the agent interaction filter icon, it takes you to the **Interactions** page of **Conversation Mining** feature to view the failed interactions of the corresponding agent.    
<img src="../adherence-heatmap/images/no-failed-interactions.png" alt="No Interactions" title="No Interactions" style="border: 1px solid gray; zoom:100%;"> 

**QA or Supervisor Dashboard**: This displays a simplified version of the **Adherence Heatmap** from the QA Dashboard that displays data for the last 7 days with a default evaluation form selection, and no click-through functionality. You can choose an evaluation form from the drop-down menu and set it as the default within the QA Dashboard. For more information, see [Supervisor Dashboard](../analyze/dashboard.md). 