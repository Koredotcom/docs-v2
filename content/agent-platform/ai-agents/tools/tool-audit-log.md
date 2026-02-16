# Track Events and Actions For a Tool

Agent Platform’s comprehensive Audit Logs provides full visibility into user actions and system interactions, tracking logins, role changes, and model updates through dynamic time-stamped logs and tracking capabilities.

This empowers admins to ensure compliance with internal policies and regulations, while proactively mitigating risks like data privacy breaches and algorithmic bias.

Each log entry includes the following to provide actionable insights on account and tool-level activities:

- Event name and category.
- The user who performed the action.
- Date and time of the event.
- Detailed description of the action.

<img src="../images/agent_audit_log_details.png" alt="audit logs metadata" title="audit logs metadata" style="border: 1px solid gray; zoom:75%;"/>

The event metadata provides business users with actionable insights, helping them in efficiently identifying patterns in user activities within their accounts. It also aids in detecting anomalies, spotting unauthorized usage, and enhancing overall account security.

You can specify a **current** or **past period** to view the logs and have complete visibility into the activities and modifications in your account. [Learn more](../../settings/monitoring/audit-logs.md#steps-to-set-time-range-for-audit-logs){:target="_blank"}.

Additionally, you can set **custom filters** based on a specific category, event, or user value to view only the required audit logs. [Learn more](../../settings/monitoring/audit-logs.md#steps-to-add-a-custom-filter){:target="_blank"}.

## Access Audit Logs

Steps to access and view tool audit logs:

1. Log in to your Agent Platform account and click **Tools** from the list of modules.
2. On the **All tools** page, click the desired tool.
3. In the left navigation pane, click **Audit logs**. The Audit logs page is displayed.
4. Click each row to view more details about the event. For more information, see Tool-Level Audit Logs. [Learn more](../../settings/monitoring/audit-logs.md#tool-level-audit-logs){:target="_blank"}.

    <img src="../images/agent_audit_log.png" alt="agent audit logs" title="agent audit logs" style="border: 1px solid gray; zoom:80%;"/>

## Dashboard Information

The Audit Logs dashboard displays the following information to collectively provide a comprehensive overview of activities within your Platform account:

* **Event Name:** Describes the specific event or action that occurred.
* **Category:** Identifies the module or entity affected by the event.
* **User Name:** Specifies the name of the user who performed the action or triggered the event.
* **Date and Time:** Represents when the event occurred.
* **Description:** Provides detailed information about what was done.
