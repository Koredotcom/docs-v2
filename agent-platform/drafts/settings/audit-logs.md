---
title: Audit Logs - Track Account-level User Actions and Events
---

The Platform's comprehensive **Audit Logs** on the **Settings** console provides full visibility into user actions and system interactions, tracking logins, role changes, and model updates through dynamic time-stamped logs and tracking capabilities.

This empowers admins to ensure compliance with internal policies and regulations, while proactively mitigating risks like data privacy breaches and algorithmic bias. 

Each log entry includes the following to provide actionable insights on account and tool-level activities:

- Event name and category.
- The user who performed the action.
- Date and time of the event.
- Detailed description of the action.


![audit logs metadata](./images/audit-logs-metadata.png "audit logs metadata")



The event metadata provides business users with actionable insights, helping them in efficiently identifying patterns in user activities within their accounts. It also aids in detecting anomalies, spotting unauthorized usage, and enhancing overall account security.

You can specify a **current** or **past period** to view the logs and have complete visibility into the activities and modifications in your account. [Learn more](./audit-logs.md#steps-to-set-time-range-for-audit-logs).

Additionally, you can set **custom filters** based on a specific category, event, or user value to view only the required audit logs. [Learn more](./audit-logs.md#steps-to-add-a-custom-filter).

<Note><ul><li>The IP Address is fetched from the user’s current network.</li>
<li>User ID, Role ID, Model ID, Tool ID, Guardrail ID, Integration ID, and Experiment ID pertain to the unique identifier associated with the module’s entity in the system.</li></ul></Note>

## Account-Level Audit Logs

<Note>The User ID and IP Address are shown for audit log entries across all modules, in addition to module and category-specific metadata listed in the table below.</Note>

Category: Login/Logout
Metadata: Email ID is displayed for all the category events below.

| Event  | Description                         | Additional Metadata |
|:-------|:------------------------------------|:--------------------|
| Login  | Tracks the account login activity.  | Login method        |
| Logout | Tracks the account logout activity. | -                   |

**Category: Roles**
Metadata: Role ID is displayed for all the category events below, except Role Changed.

| Event        | Description                                                                                                      | Additional Metadata |
|:-------------|:-----------------------------------------------------------------------------------------------------------------|:--------------------|
| Role edited  | Tracks the edits done to a custom role.                                                                          | -                   |
| Role created | Tracks the creation of custom roles.                                                                             | Role Type           |
| Role deleted | Tracks the deletion of custom roles.                                                                             | -                   |
| Role changed | Tracks the role changes made for member users. This also includes role changes for multiple users (bulk change). | -                   |

**Category: App API Key**
Metadata: IP address and User Id are displayed for all the events.

| Event               | Description                            |
|:--------------------|:---------------------------------------|
| App API Key created | Tracks the creation of an App API key. |
| App API key deleted | Tracks the deletion of an App API key. |

**Category: API App**
Metadata: App id, IP address and User Id are displayed for all the events.

| Event           | Description                               |
|:----------------|:------------------------------------------|
| API App created | Tracks the creation of an API app.        |
| API App deleted | Tracks the deletion of an API app.        |
| API App updated | Tracks the updates/changes of an API app. |


**Category: Integrations**
Metadata: IP Address, Integration Name, Integration ID, Integration Type, and User ID are displayed for all the category events below.

| Event                | Description                                                                    |
|:---------------------|:-------------------------------------------------------------------------------|
| Integration added    | Tracks integrations added to the account.                                      |
| Integration deleted  | Tracks integration deletions in the account.                                   |
| Integration disabled | Tracks the disabling of an integration in the account.                         |
| Integration edited   | Tracks the modification of an integration’s configuration data in the account. |

**Category: Models**

Metadata:

* IP Address, User ID, Model ID and Model Name are displayed for all the Model category events.
* Model Type is displayed for Model Added, Model Deleted, API Key created, API Key deleted, Model Fine-tuning, Model Deployed, and Model Undeployed events.
* Hardware Type is displayed for Model fine-tuning, Model Deployed, and Model Undeployed events.

| Event             | Description                                                   | Additional Metadata                                                                                                                                        |
|:------------------|:--------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Model added       | Tracks the addition of models to the account.                 | For open-source and fine-tuned models, the Deployment Name is displayed., For commercial models, the Connection Name is displayed.                         |
| Model deleted     | Tracks the deletion of models from the account.               | For open-source and fine-tuned models, the Deployment Name is displayed., For commercial models, the Connection Name is displayed.                         |
| API Key created   | Tracks the creation of an API key for a model in the account. | -                                                                                                                                                          |
| API Key deleted   | Tracks the deletion of an API key for a model.                | -                                                                                                                                                          |
| Model fine-tuning | Tracks the fine-tuning process for models done.               | Training method, No. of epochs, Batch size, Learning rate, Training dataset, Test dataset, Weights and Biases.                                             |
| Model deployed    | Tracks the open-source model deployments in the account.      | Temperature, Max length, Top p, Top k, Stop Sequence, Inference batch size, Min Replicas, Max Replicas, Scale up Delay, Scale down Delay                   |
| Model undeployed  | Tracks the open-source model undeployments in the account.    | Hours of usage,  Temperature, Max length, Top p, Top k,  Stop sequence, Inference batch size, Min replicas, Max replicas, Scale up delay, Scale down delay |

**Category: Tools**
Metadata: Tool ID and Tool Name are displayed for all the category events below.

| Event        | Description                                   | Additional Metadata              |
|:-------------|:----------------------------------------------|:---------------------------------|
| Tool created | Tracks the creation of a tool in the account. | -                                |
| Tool deleted | Tracks the deletion of a tool in the account. | Model ID, Model Name, Model Type |

**Category: Tools Flow Management: Integration Node**
Metadata: User ID, IP Address, Agent ID, Node name, Node ID, and Node Type are displayed for all the category events below.

| Event               | Description                                                                         |
|:--------------------|:------------------------------------------------------------------------------------|
| Connection added    | Tracks the creation of a connection for an integration node.                        |
| Connection Modified | Tracks the change of the selected connection for an integration node.               |
| Action Added        | Tracks the addition of an action for the selected connection and its configuration. |
| Action Changed      | Tracks the change of the selected action.                                           |
| Action Edited       | Tracks the modification of action parameters for the defined action.                |

**Category: Users Management**

| Event        | Description                                             | Additional Metadata                |
|:-------------|:--------------------------------------------------------|:-----------------------------------|
| User invited | Tracks the invitation of new users to the account.      | Added User IDs, Role Name, Role ID |
| User deleted | Tracks the deletion of existing users from the account. | Removed User IDs                   |

**Category: Default Role Configuration**

| Event                   | Description                                                                      | Additional Metadata                                                       |
|:------------------------|:---------------------------------------------------------------------------------|:--------------------------------------------------------------------------|
| Default Role Configured | Tracks changes made by admins to the Workspace-level default role for new users. | The status message: "Default role for new users changed from 'X' to 'Y'". |

**Category: Prompts**
Metadata:

* Prompt ID is displayed for all the Prompts category events.
* Prompt Name is displayed for Prompt created, Versions Committed, Versions Restored, Prompt Shared, Endpoint Copied, and API Key Created category events.

| Event               | Description                                              | Additional Metadata                   |
|:--------------------|:---------------------------------------------------------|:--------------------------------------|
| Prompt created      | Tracks the creation of a prompt.                         | -                                     |
| Prompt deleted      | Tracks the deletion of a prompt.                         | -                                     |
| Versions committed  | Tracks the prompt versions committed.                    | Version Name                          |
| Version Restored    | Tracks the prompt version restored.                      | -                                     |
| Prompt Shared       | Tracks the prompts shared with other users.              | -                                     |
| Endpoint Copied     | Tracks the prompt endpoint copy done.                    | -                                     |
| Endpoint Consumed   | Tracks the prompt endpoint that was consumed externally. | -                                     |
| API Key Created     | Tracks the API key creation for the prompt endpoint.     | -                                     |
| Generated Test Data | Tracks the generation of test data.                      | Model name, Model ID, Tokens Consumed |
| Generated Prompt    | Tracks the prompt generation done by the account user.   | -                                     |

**Category: Dataset**

| Event            | Description                                | Additional Metadata  |
|:-----------------|:-------------------------------------------|:---------------------|
| Dataset uploaded | Tracks the dataset uploads in the account. | File type(extension) |

**Category: Manage Custom Scripts**
Metadata: user ID, user name, IP Address, and custom script name are displayed for all the category events below.

| Event                        | Description                                |
|:-----------------------------|:-------------------------------------------|
| Custom script saved as draft | Tracks the custom script saved as a draft. |
| Custom script deployed       | Tracks the custom script deployment.       |
| Custom script undeployed     | Tracks the custom script undeployment.     |
| Custom script re-deployed    | Tracks the custom script redeployment.     |
| Custom script deleted        | Tracks the custom script deletion.         |
| Custom script exported       | Tracks the custom script export.           |

**Category: Guardrails**
Metadata: Guardrail Name, Guardrail ID, and Hardware Type are displayed for all the category events below.

| Event                 | Description                                        | Additional Metadata |
|:----------------------|:---------------------------------------------------|:--------------------|
| Guardrails deployed   | Tracks the guardrails deployment in the account.   | -                   |
| Guardrails undeployed | Tracks the guardrails undeployment in the account. | Time of Usage       |

**Category: Script**
Metadata: user ID, user name, IP address, Agent ID, node name, node ID, and node type are displayed for all the category events below.

| Event           | Description                                               |
|:----------------|:----------------------------------------------------------|
| Write Code      | Tracks the user's selection to write a custom script.     |
| Custom Function | Tracks the user's selection to execute a custom function. |


## Tool-Level Audit Logs

<Note>The User ID, IP Address, and Tool ID are shown for audit log entries across all modules, in addition to module and category-specific metadata listed in the table below.</Note>

**Category: User Management**

| Event         | Description                                                                  |
|:--------------|:-----------------------------------------------------------------------------|
| Role Changed  | Tracks the change of a tool role for an account user by a user.              |
| Invited users | Tracks the invitation of one or more users to the account at the tool level. |
| Removed Users | Tracks the removal of one or more users from the account at the tool level.  |

**Category: Tool Management**
Tool version, API mode, sync/async, and URL are displayed for all the category events below.

| Event           | Description                                   |
|:----------------|:----------------------------------------------|
| Tool Deployed   | Tracks the tool deployments in the account.   |
| Tool Undeployed | Tracks the tool undeployments in the account. |

Version ID is displayed for all the category events below.

| Event                    | Description                              |
|:-------------------------|:-----------------------------------------|
| Version Created          | Tracks the tool version creation.        |
| Version Deleted          | Tracks the tool version deletion.        |
| API Key created          | Tracks the tool API Key creation.        |
| API Key deleted          | Tracks the tool API Key deletion.        |
| Tool description updated | Tracks the tool description update done. |
| Tool name updated        | Tracks the tool name update done.        |
| Tool exported            | Tracks the tool export done.             |
| API sync timeout updated | Tracks the synchronous time update.      |

| Event                        | Description                                                | Additional Metadata                                        |
|:-----------------------------|:-----------------------------------------------------------|:-----------------------------------------------------------|
| API async enabled            | Tracks the enabling of the asynchronous mode.              | URL, Access token, timeout: yes/no, timeout value (if yes) |
| API async updated            | Tracks the update of the asynchronous mode configurations. | -                                                          |
| API async disabled           | Tracks the disabling of the asynchronous mode.             | -                                                          |
| Environment variable added   | Tracks the addition of an environment variable.            | -                                                          |
| Environment variable deleted | Tracks the deletion of an environment variable.            | -                                                          |
| Environment variable edited  | Tracks the modification of an environment variable.        | -                                                          |

**Category: Guardrails**

| Event                  | Description                                   |
|:-----------------------|:----------------------------------------------|
| Input scanner added    | Tracks the addition of an input scanner.      |
| Input scanner edited   | Tracks the modification of an input scanner.  |
| Input scanner removed  | Tracks the deletion of an input scanner.      |
| Output scanner added   | Tracks the addition of an output scanner.     |
| Output scanner edited  | Tracks the modification of an output scanner. |
| Output scanner removed | Tracks the deletion of an output scanner.     |

## Access Audit Logs

To access and view audit logs, follow the steps below:

1. [Navigate](../../administration/overview.md#access-settings-console) to the **Settings** console.
2. Click **Monitoring** > **Audit Logs** on the left navigation menu.

![access audit logs](./images/audit-logs-new-dashboard.png "access audit logs")



## Dashboard Information

The **Audit Logs** dashboard displays the following information to collectively provide a comprehensive overview of activities within your account:

* **Event Name:** Describes the specific event or action that occurred.
* **Category:** Identifies the module or entity affected by the event.
* **User Name:** Specifies the name of the user who performed the action or triggered the event.
* **Date and Time:** Represents when the event occurred.
* **Description:** Provides detailed information about what was done.

## Filter Audit Logs

You can narrow down the information displayed in your account's audit logs by applying custom filters. 

These filters allow you to select specific categories, events, or users and then apply operators like **Is** **Equal To** or **Is Not Equal To** to specify the desired value. 

This customization helps you focus on relevant audit logs, making it easier to track or investigate specific actions or users within your account.

### Steps to Add a Custom Filter

1. [Navigate](../../administration/overview.md#access-settings-console) to the **Settings** Console. 
2. Navigate to **Monitoring** -> **Audit Logs**  on the left menu.
3. Click the **Filter** icon -> **+Add Filter**.
4. In the **Filter By** window, select the required option from the dropdown list for **Select Column**, **Select Operator**, and **Enter Value**.

![select filter](./images/select-filter-from-dropdown.png "select filter")



<Note>When you use "Is Equal To," the audit logs only show entries that match the specified value. Conversely, when you use "Is Not Equal To," the logs display all entries except those that match the specified value.</Note>

For example, applying the filter Event Is Equal To Role Created, as shown below, displays only the logs for the role creation event.


![example filter](./images/example-filter.png "example filter")



To view the logs for all the events except role creation, you must set the filter as follows:


![view all logs](./images/view-all-logs.png "view all logs")



6. Click Apply.

All the log entries relevant to the applied filter(s) are displayed, as shown below.

![log entries](./images/log-entries.png "log entries")



To clear the filter settings, click **Clear All**.


![clear all filters](./images/clear-all-filters.png "clear all filters")



The number of filters you have applied is displayed on the **Filter** icon.

### Add Multiple Filters

You can enhance your audit log visibility by adding multiple filters. This capability allows you to specify detailed criteria such as specific categories, events, or users, enabling you to obtain fine-grained results. 

By combining filters, you can precisely focus on and analyze the audit log entries that are most relevant to your requirements.

When adding multiple filters to refine your audit log queries, you can use the **AND** or **OR** operators in multiple filtering steps effectively. 

<Note>Consistency in operator usage is required for each filtering step. This means you need to use either the AND operator or the OR operator throughout all criteria. Both operators cannot be used together.</Note>

![mutually exclusive operators](./images/operators-mutually-exclusive.png "mutually exclusive operators")

Using the AND operator ensures that all specified conditions must be met for an entry to be included in the results. 

On the other hand, using the OR operator broadens the criteria, allowing entries that meet any of the specified conditions to be included. These operators provide flexibility in tailoring your audit log views.

#### Steps to Add Multiple Filters

1. Follow **Steps 1 to 3** mentioned [here](./audit-logs.md#steps-to-add-a-custom-filter).
2. Select the **AND/OR** operator tab in the **Filter by** window.

    ![filter operators](./images/filter-operators.png "filter operators")

3. Follow **Steps 4 to 5** mentioned [here](./audit-logs.md#steps-to-add-a-custom-filter).

The matched log entries are displayed in the dashboard. 

## Time-based Audit Logs

You can view and monitor audit logs within a specific period with the time selection feature. This capability allows you to focus on audit log entries that occurred within a defined time-frame, and track changes.

Time selection is available for past and current time periods, including the ones listed below:

<Note>Last 30 Days is the default selection, which displays logs for the past 30 days from the current date.</Note>

* **All Time**: Displays logs since the time the account was created.
* **Today**: Includes audit logs generated on the current day.
* **Yesterday**:  Includes audit logs generated on the previous day.
* **This Week**: Displays logs for all the days in the current week.
* **This Month**: Displays logs for all the days in the current month.
* **Last Month**: Displays logs for all the days in the previous month.
* **Last 30 Days**: Displays logs for the past 30 days from the current date, if events’ data exists.
* **Last 90 Days**: Displays logs for the past 90 days from the current date.
* **This Year**: Displays logs for all the days in the current year.
* **Last Year**: Displays logs for all the days in the past year.

### Steps to Set Time Range for Audit Logs

1. [Navigate](./audit-logs.md#access-audit-logs) to the **Audit Logs** dashboard.
2. Click the time selection button (displays **Last 30 Days**).

![time selection](./images/click-time-selection.png "time selection")



3. Select the required period on the left panel, or select a specific date, month or year on the calendar widget (the current day is the default selection).
4. Click **Apply**.

![apply changes](./images/apply-changes.png "apply changes")



The audit logs for events that occurred within the selected time period are displayed. 

### Key Considerations and Tips

The time range is automatically selected on the calendar widget once you select the period. Also, the date range is displayed at the bottom of the widget.


![time range display](./images/time-range-display.png "time range display")



You can select a specific month or year from the relevant dropdown list and switch to different months by clicking the **forward/backward** arrows.


![pagination arrows](./images/forward-back-arrows.png "pagination arrows")



To set a specific date as the start date for viewing audit logs, click on the desired date in the widget. 

By default, the current day will be set as the end date. This feature allows you to easily customize the period for which you want to monitor and analyze audit logs.


![custom start date](./images/custom-start-date.png "custom start date")



## Export Audit Logs

The **Export** feature helps prepare and export [account-level audit logs](./audit-logs.md#account-level-audit-logs) into a *.csv* file. The audit logs data for the following columns is downloaded. [Learn more](./audit-logs.md#dashboard-information).

* Date and Time
* Event Name
* Event Category
* Description
* User/App Name
* **IP Address**: The user's network IP address linked to the specific event.

Exporting audit logs offers the following benefits:

* **Detailed Analysis**: CSV format allows you to perform in-depth analysis of log data to identify patterns or anomalies over time, while supporting transparency and accountability.
* **Easy Sharing and Reporting**: CSV files of audit logs are easy to share with other stakeholders or integrate them into reporting tools.
* **Compliance and Record-Keeping**: Having a documented trail in a standardized format is useful for compliance and regulatory audits, ensuring data is readily available when needed.
* **Automation and Integration**: CSVs can be imported into other tools or systems, enabling automation and integration into workflows for continuous monitoring and alerts.

To export audit logs, follow the steps below:

1. [Navigate](./audit-logs.md#access-audit-logs) to the **Audit Logs** dashboard.
2. Click the **Export** icon.

A success message is displayed once the file is downloaded. The file can be found in the configured location in your system.

The downloaded *.CSV* file is automatically named as `Account_Audit_Logs`. The schema of the output file includes the following fields:

* Event Name
* Category
* User Name
* Date & Time
* Description

Audit Logs promotes transparency and accountability in AI operations, helping build trust internally and externally. 

You can confidently scale AI initiatives with event-based user activity logs to manage compliance and ensure responsible use of generative AI.

<hr/> 

**Related Resources**

* [Settings Console](../../administration/overview.md) - Other admin features of the Platform.
* [Users Management](../user-management/overview.md) - Manage users linked to your account.
* [Role Management](../user-management/role-management.md) - View and manage system and custom roles for your account.
* [Tool Flow Change Logs](../../ai-agents/tools/tool-flows/tool-canvas-change-log.md) - Track, audit, and review changes made to a tool's flow.
