--8<-- "includes/qualityai-reports-back-link.md"

# Evaluation Form Summary Report 

Summarizes evaluation metric adherence using selected forms, providing aggregated compliance statistics. This report focuses on metric-level performance across all interactions, highlighting adherence rates and fatal metric violations.

## Generate Evaluation Form Summary Report

Steps to generate the Evaluation Form Summary Report:

1. **Create the New Report**
    1. On the **Reports** tab, select **+ New Report**.

    1. From the **Create New Report** list, select the **Evaluation Form Summary Report**.  
        <img src="../images/evaluation-form-report.png" alt="Report Selection" title="Report Selection" style="border: 1px solid gray; zoom:50%;">

    1. Select **Next**.

1. **Configure General Settings**

    1. Enter a unique **Name** for the report.

    1. Enter a **Description**.
 
    1. Select **Next**             
        <img src="../images/create-new-report-general.png" alt="General" title="General" style="border: 1px solid gray; zoom:50%;">    

1. **Configure Filters and Options**

    1. Select an evaluation **Form** to define the data scope (at least one form you must select).

    1. Select a **Date** or date range.

    1. Select a **Timezone**.

    1. Select **+Add Filter** to apply filters and their respective values such as Channel, Queue, Language, Agents, and Agent Groups.        

    1. Add **Optional Fields** to include additional metrics. 

    1. Enter one or more recipient emails in **Send Email to** (minimum one required). 

    1. Select **Next**.       
        <img src="../images/create-new-report-config.png" alt="Configure" title="Configure" style="border: 1px solid gray; zoom:50%;">

1. **Schedule the Report**
 
    1. Choose **Run on Demand** or **Schedule**.

        1. **Run on Demand**: To generate the report immediately.
    
        1. **Schedule**: To generate the report automatically.
    
    1. If you select **Schedule**:

    1. Choose a **Frequency or Repeat** (Hourly, Daily, Weekly, Monthly, Quarterly, or Yearly).

    1. Select a **Start Date** and **Timezone**.

    1. Select **Save**.   

## Report Fields

### Metric Adherence Summary Report  

This report summarizes adherence results for evaluation metrics across selected forms. It aggregates metric-level performance for all evaluated interactions, including total applicability, adherence counts, adherence percentages, and identification of fatal metrics.

| Metric Names              | Is Fatal | Total Interactions | Total Applicable | Total Adhered | Metric Adherence Percent |
|---------------------------|----------|--------------------|------------------|---------------|--------------------------|
| AI Agent Metric Check     | 0        | 13                 | 13               | 0             | 0.00%                    |
| Agent Blaming Customer    | 0        | 13                 | 13               | 0             | 0.00%                    |
| Agent Rude                | 0        | 13                 | 13               | 0             | 0.00%                    |
| COMMON AU – GEN & DET     | 0        | 13                 | 13               | 2             | 15.38%                   |


### View and Download the Report

1. On the **Reports** tab, locate the report in the **Actions** column.

1. Select More options (⋮), then select **History**. 

1. Select **Download** to save the report as a CSV file.

### Report Format

* **Format**: CSV file

* **File Name**: [ReportName]-YYYY-MM-DD-HH-MM-SS.csv   
<img src="../images/sample-evaluation-form-summary-report.png" alt="Reports Access" title="Reports Access" style="border: 1px solid gray; zoom:80%;">

## Related Links

* [Scheduled Reports](../reports/scheduled-reports.md)

* [Agent Performance Report](../reports/agent-performance-report.md)

* [Interaction Evaluation and Conversation Analytics Report](../reports/interaction-conversation-analytics-report.md)