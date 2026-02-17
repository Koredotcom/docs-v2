# Change Logs

Change Logs keep record of all the modifications made to the application. They are essential for tracking changes and are particularly useful for debugging, identifying configuration updates, and understanding their impact on application performance.

## Accessing Change Logs

To access the changelogs, follow the below steps:

1. Navigate to **App Settings**.
2. By default, the **App Profile** page is displayed.
3. On the left pane, click **Change Logs**.
4. The Change Logs page displays log files from all modules of the application, by default. Each log entry includes the following details:
    * User Name and Email ID: Identifies who made the change.
    * Module: Indicates the module where the change occurred. This page provides detailed updates for all modules, including **Automation AI**, **Search AI**, **Agent AI**, and **Contact Center AI**. Changes that apply universally across all modules are categorized as **Global**.
    * Changes: Provides a brief description of the change.
    * Date: Timestamp indicating when the change was made.

For more information about a specific change, click on the **Details** link.

![Change Logs](./images/change-logs-img1.png "Change logs")

This page shows the change made to the application in JSON format.

![Change Logs](./images/change-logs-img2.png "Change logs")

## Search and Filter Options

The Change Logs page includes search and filter functionalities to locate specific log entries. Filters can be applied to view logs from a specific module, for a given timeframe, from a specific user or with specific changes.

![Change Logs](./images/filter-logs.png "Change logs")

To download the changes in a CSV format, use the download option. All the details of the changes in the selected timeframe are captured and downloaded to the local machine.

![Download Logs](./images/download-csv.png "Download logs")

### Related Link

* [Get Change Logs API](../apis/automation/get-change-logs.md)