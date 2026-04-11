# Triggers

The Triggers page provides a detailed view of all configured triggers for your workflows. It helps you monitor trigger activity, understand their configuration, and manage workflows effectively.

## Key Capabilities

* Event and Schedule Information: View key details for each trigger, including its configuration, timing, and recent activity.
* Inactive Trigger Alerts: Inactive triggers display a clear error message with recommended actions.
* Filtering and Searching: Easily filter and find specific triggers using the search bar, column filters, and operators, with dynamic value entry and instant results.

## Best Practices

* Regularly check the Triggers page to ensure all triggers are active and running as expected.
* Expand trigger details selectively to avoid clutter and maintain clarity.
* Monitor inactive triggers and follow the recommended actions to keep workflows functioning properly.

## Accessing Triggers

1. Log in to your **AI for Process** account and go to **Workflows**.
2. Select the desired workflow. Ensure the workflow status is **Deployed**. Only deployed workflows can have active triggers.
3. In the left navigation pane, click **Monitoring** > **Triggers**. The Triggers page displays all configured triggers. 
4. Click a trigger to expand its details.

### Event-Based Triggers

* **Provider**: The service generating the trigger (e.g., webhook provider).
* **Trigger Name**: Unique name of the trigger.
* **Description**: Summary of what the trigger does.
* **Setup Time**: When the trigger was configured.
* **Last Run**: The last time the trigger executed the workflow.

### Schedule-Based Triggers

* **Frequency**: How often the trigger fires (e.g., hourly, daily).
* **Description**: Summary of the scheduled trigger.
* **Setup Time**: When the schedule was configured.
* **Start Time / End Time**: The execution window of the trigger.
* **Time Zone**: Time zone used for scheduling.
* **Last Run / Next Run**: Execution history and upcoming scheduled run.
