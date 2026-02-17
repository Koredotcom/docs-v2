# Logs

The Logs enables users to view and manage event logs for web campaigns. It provides visibility into campaign executions, display statuses, and reasons for campaign behavior. The feature helps supervisors monitor campaign activity, troubleshoot issues, and analyze campaign effectiveness.

## Key Benefits

* Provides centralized visibility into web campaign activity.
* Helps diagnose campaign execution issues using detailed event descriptions.
* Enables quick filtering, searching, and exporting for reporting or analysis.
* Offers flexible date selection through calendar-based range filtering.

## Accessing Campaign Logs

To access the logs, go to Contact Center AI > Campaigns > Campaign Management > Logs. Selecting this option opens the Logs page, which displays all event logs for the current day by default.
<img src="../images/logs-page.png" alt="Campaign Logs" title="Campaign Logs" style="border: 1px solid gray; zoom:70%;">

The Logs table displays the following columns:

| **Column** | **Description** |
|-------------|-----------------|
| **Date & Time** | The exact timestamp of the logged event. |
| **Log Type** | Identifies the campaign type. For example, *Proactive Web*. |
| **Sub Type** | Indicates the event type. For example, *Run time*. |
| **Description** | Provides a summary of the event in the format: `<campaign-name>` was `<shown>` or `<NOT shown>` to `<user>`. Reason: `<reason>`. |

## Filters

The Logs page includes date-based filters to refine results. A calendar control is available to select the specific date range for which logs are displayed.

## Search

The Search function supports queries on the Description field. Users can enter any part of a campaign name, user name, or reason to find matching log entries.

## Export Logs

Users can export campaign logs to a CSV file. The exported file includes all visible columns and reflects the applied filters and search criteria.