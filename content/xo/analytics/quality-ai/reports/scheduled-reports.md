# Scheduled Reports

The Quality AI scheduled reports feature provides a structured framework for monitoring, evaluating, and improving agent performance. It enables the tracking of agent productivity, adherence to quality standards, and interaction effectiveness, while providing insights into operational efficiency and compliance with evaluation metrics. By generating and analyzing scheduled reports, QA managers and supervisors can identify coaching opportunities, ensure alignment with organizational goals, and drive continuous improvement. 

## Reports Tab

The Reports tab consists of a list of generated reports. You can generate an instance of a new report, download reports, edit, view, and delete reports.

## Reports Access 

* **Navigation**: **Quality AI** > **Analytics** > **Reports**.

* **Required Permission**: The Quality AI Reporting (auto-enabled for App Owners and Supervisors).  
<img src="../images/reports.png" alt="Reports Access" title="Reports Access" style="border: 1px solid gray; zoom:80%;">

## Report Dashboard View

Displays all reports created by or assigned to the current user. 

### Reports Dashboard Tabs

On the **Reports** page, you can view all your reports organized by type.

| Tab        | Description                                                                                   |
|------------|-----------------------------------------------------------------------------------------------|
| **My Reports** | This shows only the reports created by the current user and provides quick access to run, edit, or schedule them. |
| **All Reports** | This shows all reports available organization-wide, based on permissions.                       |
| **Favorites**  | This shows reports created by any user that the current user has marked as favorites. |  
 
<img src="../images/report-categorization.png" alt="Reports Dashboard" title="Reports Dashboard" style="border: 1px solid gray; zoom:80%;">

### Reports List Columns

| Column          | Description |
|-----------------|-------------|
| **Name** | Displays the unique identifier/title of the report. It shows the visibility status of the report (for example, Private/Public). |
| **Report Type** | Shows **Evaluation Form Summary**, **Interaction Evaluation**, or **Agent Performance** to indicate the data or metrics covered. |
| **Created By** | Shows the report owner or creator of the report. |
| **Last Run** | Shows the timestamp of the most recent report execution. |
| **Next Run** | Shows the scheduled timestamp for the next automatic report run. If scheduling is off, it shows **Schedule Disabled**. |
| **Schedule Toggle** | Shows Displays the toggle switch to enable or disable automation directly from the list. 
- **Off (gray):** Disables scheduled execution.  
- **On (blue):** Enables scheduled execution.  
| **Actions** | - **Play/Run** (<img src="../images/run-icon.png" alt="Run icon" width="18">): Enables you to run or generate the report immediately. <br> - **Edit** (<img src="../images/edit-icon.png" alt="Run icon" width="18">): Enables you to edit the report settings to modify its details (parameters). <br> - **Menu Option** (<img src="../images/ellipsis-icon.png" alt="Run icon" width="18">): Click the vertical ellipsis menu button to view and execute more options, such as view history, clone, favorite/unfavorite, switch to public/private, and delete. |   
<img src="../images/reports-list-column.png" alt="Reports List Column" title="Reports List Column" style="border: 1px solid gray; zoom:60%;">                              

### Bulk Actions (Search and Filter)

The bulk actions enable you to search and perform run or delete functions on multiple selected reports.

* **Search Bar**: Lets you search reports by name, type, or other attributes.  

* **Bulk Operations**: Lets you search, filter and select reports in bulk for batch actions.

To run the bulk reports, 

1. Select multiple reports using checkboxes. 

1. The **Bulk Run** action menu appears on the top-left of the Reports page.  
<img src="../images/bulk-actions.png" alt="Bulk Reports" title="Bulk Reports" style="border: 1px solid gray; zoom:100%;">

1. Select **Bulk Run** or **Delete** to execute the action (to run or remove all selected reports). A confirmation message appears once you trigger the action. 

    !!! Note

        Deleting multiple reports requires confirmation.

## Report Configuration Process

With Quality AI, you can create, filter, and schedule reports for automated or on-demand delivery with customizable formats, bulk actions, and secure, role-based access.

### Report Generation Example

This section provides a visual walkthrough of the report generation process. Follow the same steps for all three report types.

### Creating New Report

Steps to create a new report,

1. Navigate to **Quality AI** > **Analytics** > **Reports** > **+ New Report**.

1. Select **+ New Report**.   
<img src="../images/new-report-selection.png" alt="New Report" title="New Report" style="border: 1px solid gray; zoom:60%;">

1. A new report page opens, showing the available report types. Choose any one of the preconfigured report options to create a new report.

1. Select **Agent Performance Report**.  
<img src="../images/report-types.png" alt="Report Types" title="Report Types" style="border: 1px solid gray; zoom:60%;">

1. Select **Next** to proceed.

    !!! Note

        You must select one report type before proceeding to General Configuration.

### Agent Performance Report Generation 

The following steps demonstrate the three-step configuration process.

#### General Configuration

Captures the basic report metadata and identification information.

**Required Fields**:

1. Enter a unique identifier **Name** for the report.

1. Enter a meaningful **Description** explaining the report's purpose and intended audience. 

1. Select **Next** to proceed.  
<img src="../images/agent-general.png" alt="Sample Agent Performance Report" title="Sample Agent Performance Report" style="border: 1px solid gray; zoom:60%;">

#### Configuration (Date Source Selection)

Defines the parameters specific to each report type, including data sources, filters, and time settings.

1. Select the required **Evaluation Form** or **Agent Scorecard** (as applicable) to determine the data scope and relevant interactions. 

    * You can select multiple scorecards for comparative analysis.

    * Includes only interactions evaluated using the selected forms or scorecards.  
    <img src="../images/agent-config.png" alt="Sample Agent Performance Configuration Report" title="Sample Agent Performance Configuration Report" style="border: 1px solid gray; zoom:60%;">    

        !!! Note

            * You must select at least one evaluation form/scorecard while configuring a report (mandatory). 
        
            * Only agents with assigned scorecards appear in the report.

1. Select a **Date** or a date range for report generation.

    * **Standard Ranges**: Current day, Previous day, Last 7 days, Last 30 days, Last 90 days.

    * **Custom Range**: Select specific start and end dates.

1. Select a standard **TimeZone** (device local Time Zone) to match the reporting accuracy.

1. Choose the necessary **Filter**, such as Channel, Queue, Language, Agents, and set their corresponding values.

##### Configure Filters and Fields

This lets you add filters when creating a new report or editing an existing report. You can change the following report’s details:

1. Select **+Add Filter** to add more, and add a value vs. the selected filter. 

1. Select the required filters, such as:

    * **Queues**
        * Select one or more queues from the dropdown list to evaluate workload distribution and queue-specific agent metrics.  
        <img src="../images/general-queues.png" alt="Queues" title="Queues" style="border: 1px solid gray; zoom:80%;">    

    * **Channel**
        * Select the **Channel** to set the value (**Chat** or **Voice**).  
        <img src="../images/general-channel.png" alt="Channel" title="Channel" style="border: 1px solid gray; zoom:80%;">

    * **Agents**
        * Select the **Agents** for agent-level performance tracking and evaluation.  
        <img src="../images/general-agents.png" alt="Agents" title="Agents" style="border: 1px solid gray; zoom:80%;">

    * **Agent Groups**
        * Select the **Agent Groups** to define the group or team of agents to include in the report.
        <img src="../images/general-agent-groups.png" alt="Agent Groups" title="Agent Groups" style="border: 1px solid gray; zoom:80%;">

    * **Language**

        * Select a **Language** that the system configures for Quality AI.

        * Defaults to the application's default language.
        <img src="../images/general-language.png" alt="Language" title="Language" style="border: 1px solid gray; zoom:80%;">   

1. Select the required **Optional Fields**.  
<img src="../images/general-optional.png" alt="Optional Fields" title="Optional Fields" style="border: 1px solid gray; zoom:80%;">   

1. Enter recipient addresses in **Send Email to** send the automated reports in the selected language. You must add at least one recipient email address.  
<img src="../images/general-send-email.png" alt="Send Email to" title="Send Email to" style="border: 1px solid gray; zoom:80%;">   

1. Select **Delete** to remove the selected filter.

1. Select **Next** to proceed.

#### Schedule Configuration

Lets you authorize users to automate report generation with minimal manual effort.

1. Choose one execution method: **Run on Demand** (manual) or **Schedule** (automated).

    * **Run on Demand**: 

        * Select this when you need immediate report generation (a new report or to edit an existing report).

        * Report executes instantly with the current configuration.

        * You can schedule the report to run on demand.	    
        <img src="../images/agent-run-on-demand.png" alt="Execution Method" title="Execution Method" style="border: 1px solid gray; zoom:60%;">   

    * **Schedule**: 

        * Select this for automated recurring generation.

        * Modify the schedule based on the chosen frequency.           

#### Schedule Frequencies

1. For scheduled reports, specify the frequency of report generation:

    * **Hourly**
        * Specify minutes of each hour (0-59).
        * The system generates report every hour at the specified minute.

    * **Daily**
        * Select a specific time in 24-hour format (hours, minutes, AM/PM).

    * **Weekly**
        * Choose a specific day (Monday to Sunday).
        * Select time (hours, minutes, AM/PM).
        * The system generates report every seven days.

    * **Monthly**
        * Select day of month (1-28 to avoid month-end issues). 
        * Select time (hours, minutes, AM/PM).

    * **Quarterly**
        * Select day of quarter (1-28/29/30/31).
        * Select time (hours, minutes, AM/PM).
        * The report is generated every three months.

    * **Yearly**
        * Select month (January-December).
        * Select day of month (1-28/29/30/31).
        * Select time (hours, minutes, AM/PM).
        * The system generates report once per year.  
        <img src="../images/agent-report-weekly.png" alt="Schedule Frequency" title="Schedule Frequency" style="border: 1px solid gray; zoom:70%;"> 

1. Specify the Additional Settings. 

    * **Start Date**: Select a schedule to begin.

    * **Timezone**: Select time zone (defaults to device local timezone).

1. Select **Instant Run**.

    * Manually, you can generate the report immediately.

    * Automatically, the system runs the report based on a pre-set schedule.   
    <img src="../images/insta-run.png" alt="Instant Run" title="Instant Run" style="border: 1px solid gray; zoom:80%;">   

1. Select **Save** to confirm and activate the schedule. The saved report appears in the **Reports > My Reports** dashboard.

    * Enable scheduling by switching on the Schedule toggle. 

    * From the **Actions** column, select **Run** to generate the report immediately.     
    <img src="../images/saved-report.png" alt="Activate Schedule" title="Activate Schedule" style="border: 1px solid gray; zoom:80%;">  
    
    !!! Note

        * If you configure a recurring schedule (for example, Daily or Weekly), the **Instant Run** button is disabled.

        * When a recurring schedule is active, the system automatically runs the report according to that schedule.

        * When in **Schedule** mode, the scheduling toggle remains enabled, and you can turn the schedule on or off at any time.

        * When you proceed to disable a report, the system displays displays a pop-up confirmation before updating the report status.  
        <img src="../images/disable-report.png" alt="Disable A Report" title="Disable A Report" style="border: 1px solid gray; zoom:80%;"> 

## Mandatory Configuration Fields

The following table describes the common mandatory fields for all three report types:

The following table describes the common mandatory fields for all three report types:

| Configuration Item                     | Description                                                             | Default Value                 |
|----------------------------------------|-------------------------------------------------------------------------|-------------------------------|
| **Evaluation Form/Agent Scorecard Selection** | Users must select at least one scorecard to determine data scope and agents. | Default                       |
| **Report Name**                            | User-defined name for the report.                                      | Default                       |
| **Language**                               | Language of the report text, configurable from available Quality AI languages. | Application default language  |
| **Date Range**                             | Selection of the reporting period.                                     | Default                       |
| **Timezone**                               | Time zone for date and time values.                                    | Device local time zone        |
| **Email Recipients**                       | At least one recipient from users with the required permissions.       | Default                       |

## Report Actions

For each report in the dashboard, the following actions are available:

### Edit Reports

Modify the report’s settings, including name, description, data scope, filters, recipients, and schedule, then save to activate automated generation.

To edit a report,

1. Select **Edit** to modify the report settings.

1. Modify the **Name** and **Description**. 

1. Modify the **Evaluation Form**, **Date**, **Timezone**, **Filter**, **Optional Fields**, and **Send Email to** fields to receive automated reports (minimum one required).     

1. Update **Run on Demand** or **Schedule** with the desired frequency details, such as **Hourly, Daily, Weekly, Monthly, Quarterly, Yearly, Start Date, and Time Zone**.

1. Select **Instant Run** to generate the report immediately.
    <img src="../images/insta-run.png" alt="History" title="History" style="border: 1px solid gray; zoom:80%;">  
    
    !!! Note

        Only visible while you’re configuring or customizing a report in **Edit** mode.
   
1. Select **Save** to activate the changes or reschedule the configuration. 

## Additional Actions

Select the vertical **Ellipsis** (⋮) button for more options:

### Report Generation History

View the generated report history (Successful, failed, and in-progress records) and download the required CSV files.

To view the history of any report:

1. Navigate to the **Reports** > **Actions** column.

1. Select the vertical **Ellipsis** (⋮) button.

1. Select the **History** to view the last 5 runs of the reports.  
<img src="../images/download-report-action.png" alt="History" title="History" style="border: 1px solid gray; zoom:80%;">  

1. Select **Download** to save the report in CSV format.   
<img src="../images/history.png" alt="History Report" title="History Report" style="border: 1px solid gray; zoom:60%;">  

1. Shows the generated reports' status: run success (green), run failed (red).

### Clone a Report

Create a copy of the report configuration.

To clone a report,

1. Navigate to the **Reports** > **Actions** column.

1. Select the vertical **ellipsis** (⋮) button.

1. Select **Clone** to create a copy of the report.   
<img src="../images/actions-clone.png" alt="Clone Report" title="Clone Report" style="border: 1px solid gray; zoom:80%;">

1. A successful message appears when cloned.  
<img src="../images/clone-report.png" alt="Clone Report Status" title="Clone Report Status" style="border: 1px solid gray; zoom:80%;">

### Favorite/Unfavorite a Report

Enables quick access to frequently used reports.

To mark a report favorite/unfavorite,

1. Navigate to the **Reports** > **Actions** column.

1. Select the vertical **Ellipsis** (⋮) button.

1. Select **Favorite/Unfavorite** to create a copy of the report. A successful message appears when marked as favorite/unfavorite.  
<img src="../images/actions-favorite.png" alt="Favorite Report" title="Favorite Report" style="border: 1px solid gray; zoom:80%;">

1. All the tagged favorite reports appear in the **Favorites** tab. 
<img src="../images/favorite.png" alt="Favorite Report Status" title="Favorite Report Status" style="border: 1px solid gray; zoom:80%;">

### Switch to Public (Accessibility)

This lets you control a report’s visibility to specific groups or individuals by toggling its status between public and private. You can restrict the accessibility of the reports as required. There are two permissions available:

* Public
* Private

By default, all reports are public. You can restrict access to the reports by making them private.

Steps to revise the access:

1. Select the **Ellipsis** (⋮) button under **Actions** to revise the access for the report.

1. Select **Switch to Public**. The Public report is permissible for all users.  
<img src="../images/actions-switch-public.png" alt="Accessibility Report" title="Accessibility Report" style="border: 1px solid gray; zoom:80%;">

1. Select **Switch to Private**. A successful message appears when switched to public/private.

    !!! Note

        The Private report is accessible to specific groups or individuals (or to the report creator) on the **Reports** tab.

### Delete Report

Permanently removes the report configuration, its associated schedule, and all its history.

To delete a report,

1. Navigate to the **Reports** > **Actions** column.

1. Click the vertical **Ellipsis** (⋮) button.

1. Select **Delete** to remove the report.  
<img src="../images/actions-delete.png" alt="Delete Report" title="Delete Report" style="border: 1px solid gray; zoom:80%;">
    
1. Click **Confirm**. A successful message appears when the selected reports are deleted.

### How to View and Download a Report

1. On the **Reports** tab, navigate to the **Actions** column.

1. Click the vertical **Ellipsis** (⋮) button.     

1. Select **History** to view all generated reports.

1. Click **Download** to save and view the required reports in CSV format.  
<img src="../images/download-csv-file.png" alt="Download Report" title="Download Report" style="border: 1px solid gray; zoom:60%;">     

!!! Note

    Reports are available for download in CSV format only with headers translated to the selected language. 

## Sample Report Format 

Only the CSV format is generated and available for download, with headers translated into the selected language in the following format:

* **File Format Output**: CSV file

* **File Name**: [ReportName]-YYYY-MM-DD-HH-MM-SS.csv

* **Content**: Headers translated to the selected language with filtered data     
<img src="../images/sample-agent-performance-report.png" alt="View and Download Report" title="View and Download Report" style="border: 1px solid gray; zoom:80%;">

!!! Note

    The same three-step process (**General > Configuration > Schedule**) applies to all report types, with variations in the Configuration step based on the specific report requirements.

## Email Delivery

### Standard Email Format

All scheduled reports are delivered via email following this standardized format:  
<img src="../images/email-config.png" alt="Email Format" title="Email Format" style="border: 1px solid gray; zoom:80%;">    

## Data Availability Handling

* Report generation continues with available data.

* Clear indication of data limitations in the report.

* Email notification includes a data availability summary.

### Empty Result Handling

* Empty CSV files generated with header rows intact.

* The email clearly indicates that no data matches the criteria.

* Suggestions provided for alternative filter configurations.

## Role-Based Permissions

The following table describes report-related permissions based on user roles:

| Role                                       | Create Report | Edit Own Reports | Edit Public Reports | Delete Own Reports | Delete Public Reports | Schedule Reports | View Report History            |
|--------------------------------------------|---------------|------------------|----------------------|---------------------|------------------------|-------------------|--------------------------------|
| App Owner                                  | ✓             | ✓                | ✓                    | ✓                   | ✓                      | ✓                 | ✓                              |
| Supervisor                                 | ✓             | ✓                | ✓                    | ✓                   | ✓                      | ✓                 | ✓                              |
| User with "Quality AI Reporting" Permission | ✓             | ✓                | ✓                    | ✓                   | ✗                      | ✓                 | ✓ (own reports only)           |
| User without Permission                     | ✗             | ✗                | ✗                    | ✗                   | ✗                      | ✗                 | ✗                              |

### Permission Restrictions

Users without the Quality AI Reporting permission can't:

* Access the Reports section
* View any reports (public or private)
* Create new reports
* Receive scheduled report emails
* Download historical reports

## Related Links

* [Reports List](../reports/qm-reports-list.md)

* [Agent Performance Report](../reports/agent-performance-report.md)

* [Interaction Evaluation and Conversation Analytics Report](../reports/interaction-conversation-analytics-report.md)

* [Evaluation Form Summary Report](../reports/evaluation-form-summary-report.md)