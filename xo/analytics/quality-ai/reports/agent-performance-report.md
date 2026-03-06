--8<-- "includes/qualityai-reports-back-link.md"

# Agent Performance Report 

Exports agent performance scorecard data based on selected scorecards, with optional agent attribute inclusion. This report provides comprehensive insights into individual agent performance, including scorecard scores, attribute ratings, metric adherence, and coaching assignments.

## Generate the Agent Performance Report

1. **Create the New Report**

    1. On the **Reports** tab, select **+ New Report**.    
    
    1. From the **Create New Report** list, select the **Agent Performance Report**.     
        <img src="../images/general-report-selection.png" alt="Report Selection" title="Report Selection" style="border: 1px solid gray; zoom:50%;">

    1. Select **Next**.

1. **Configure General Settings**

    1. Enter a unique **Name** for the report.

    1. Enter a **Description** for the report.
 
    1. Select **Next**.        
        <img src="../images/agent-general.png" alt="General" title="General" style="border: 1px solid gray; zoom:50%;">    

1. **Configure Filters and Options**

    1. Select an **Agent Scorecard** to define the data scope (at least one form you must select). 

    1. Select a **Date** or date range.

    1. Select a **Timezone**.

    1. Select **+Add Filter** to apply filters and their respective values such as Channel, Queue, Language, Agents, and Agent Groups. 
    
    1. Add **Optional Fields** to include additional metrics. 

    1. Enter one or more recipient emails in **Send Email to** (minimum one required). 

    1. Configure the required Filters:

        * Select **+Add Filter** to configure additional filters.

            * **Channel**: Select communication channel (Chat, Voice).

            * **Queue**: Select one or more queues.

            * **Language**: Select languages assigned to the scorecard.

            * **Agents**: Select specific agents for tracking.

             * **Agent Groups**: Select a team or group of agents.

         * Set the values vs. the selected/added filters. 

    1. Add **Optional Fields** to include additional metrics or attributes.

    1. Enter one or more addresses in the **Send Email to** fields to send the automated reports (minimum one required). 

    1. Select **Next**.    
        <img src="../images/agent-config.png" alt="Configure" title="Configure" style="border: 1px solid gray; zoom:60%;">

1. **Schedule the Report**
 
    1. Choose **Run on Demand** or **Schedule**.

        1. **Run on Demand**: To generate the report immediately.
    
        1. **Schedule**: To generate the report automatically.
    
    1. If you select **Schedule**:

    1. Choose a **Frequency or Repeat** (Hourly, Daily, Weekly, Monthly, Quarterly, or Yearly).

    1. Select a **Start Date** and **Timezone**.

    1. Select **Save**.  

## Report Fields

### Agent Performance Summary 

This report provides an overview of each agent’s performance, summarizing key metrics such as total interactions, evaluation and audit scores, and adherence levels, along with detailed attribute-level results that show scores, adherence percentages, and interaction counts for each evaluated category.

| Agent Name | Total Interactions | Kore Evaluation Score | Scorecard Score | Audit Score | Fail % | Coaching Assignments | Contained Metrics & Adherence Summary |
|----------------|------------------------|----------------------------|----------------------|------------------|------------|---------------------------|-------------------------------------------|
| **Lily Agent** | 20                     | 0.00                       | 28.00               | 0.00            | 0.00%      | N/A                       | COMMON Closing Resolution: **40%**, Dead Air: **33.33%**, Cross Talk: **22.22%**, Speech Rate: **11.11%**, Greeting: **100%**, Price: **100%**, Resolution: **100%**, Sign-off: **100%** |
| **Rosie V**      | 11                     | 0.00                       | -20.00              | 0.00            | 0.00%      | N/A                       | Closing Resolution: **0%**, Dead Air: **0%**, Cross Talk: **0%**, Speech Rate: **0%** |

### View and Download the Report

1. On the **Reports** tab, locate the report in the **Actions** column.

1. Select More options (⋮), then select **History**. 

1. Select **Download** to save the report as a CSV file.

### Report Format

* **Format**: CSV file

* **File Name**: [ReportName]-YYYY-MM-DD-HH-MM-SS.csv   
<img src="../images/sample-agent-performance-report.png" alt="Sample Report Format" title="Sample Report Format" style="border: 1px solid gray; zoom:80%;">

## Related Links

* [Scheduled Reports](../reports/scheduled-reports.md)

* [Evaluation Form Summary Report](../reports/evaluation-form-summary-report.md)

* [Interaction Evaluation and Conversation Analytics Report](../reports/interaction-conversation-analytics-report.md)