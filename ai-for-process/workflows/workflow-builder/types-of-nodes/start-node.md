# Start Node - Automate Workflow Initiation

The Start node is the mandatory entry point for every workflow. When you create a new workflow, the Start node is automatically added to the canvas. Every workflow must begin with this node to function properly.

Key requirements

* The Start node must connect to at least one other node.
* All workflow nodes must have a connection path back to the Start node.
* Unconnected nodes will cause the workflow to fail.

!!! note

    You can reposition the Start node and all other nodes by dragging them anywhere on the canvas.

## Automation Features

The Start node provides two powerful automation options that can be used individually or together: Event Triggers and Scheduled Execution.

### Event Triggers

Event triggers automatically executes your workflow when specific events occur in connected applications. For example, when a customer's account balance falls below the quarterly minimum, the workflow can automatically send an email notification via integrated services such as Gmail.

### Scheduled Execution

The scheduler executes your workflow at predetermined times or intervals. For example, you can schedule a workflow to run on the 5th of each month to identify customers below minimum balance thresholds and send automated SMS notifications. The scheduler supports custom time zones for global operations.

## Configure the Start Node

The Start node is the entry point for your workflow. Configure it to define inputs, outputs, triggers, and schedules.

Steps to configure the node:

1. Navigate to **Workflows** in the top menu, select your workflow, and click **Go to Flow**.

2. The Start node appears by default in the flow builder. Click the node to open its configuration panel.

3. Configure the following:

    * **Input**: Define initial data for your workflow. [Learn more](../perform-other-actions-on-the-flow-builder/manage-input-and-output.md#adding-input-variables) about adding input variables.
    * **Output**: Specify variables to capture workflow results. [Learn more](../perform-other-actions-on-the-flow-builder/manage-input-and-output.md#adding-output-variables) about adding output variables.
    * **Trigger**: Configure event-based triggers from third-party apps. For details, see [Add event-based triggers](../types-of-nodes/start-node.md#add-event-based-triggers).
    * **Schedule**: Set time-based automation for your workflow. For details, see [Configure time-based schedules](../types-of-nodes/start-node.md#configure-time-based-schedules).

### Add Event-Based Triggers

**Prerequisites:**

* Set up the required integration connection. For details, see [Add a connection](../../../settings/integrations/about-integrations.md#add-a-connection-to-set-up-integration).
* Add the third-party app to your workspace. For details, see supported [Third-party applications](../types-of-nodes/start-node.md#supported-third-party-services-for-triggers).
* Create an authentication profile to enable and secure the integration. For details, see [Add Authorization profile](../../../settings/security-and-control/authorization-profile.md#add-authorization-profile).

**Steps to configure the node**:

1. Click Add Trigger and select your integration app.
2. Enable the trigger and select a connection. To create a new connection, see [Add a connection](../../../settings/integrations/about-integrations.md#add-a-connection-to-set-up-integration).
3. Select your trigger event and configure parameters.
4. Save and test the workflow.

<img src="../images/add_trigger.png" alt="triggers" title="triggers" style="border: 1px solid gray; zoom:60%;">

!!! note

    Triggers must be active and enabled. Attachments from triggers are accessible via URL for 24 hours.

### Configure Time-Based Schedules

1. Click the Schedule icon and enable the scheduler.
2. Set frequency (Daily, Weekly, Monthly, Once, Cron, or Custom). [Learn more](../types-of-nodes/start-node.md#schedule-frequencies).
3. Configure start date, start time, and time zone.
4. Save and test the workflow.

<img src="../images/scheduler.png" alt="schedule" title="schedule" style="border: 1px solid gray; zoom:60%;">

## Supported Third-Party Services for Triggers

| Service provider | No. of triggers |
|------------------|-----------------|
| Asana | 1 |
| Canvas | 6 |
| Coda | 4 |
| Discord | 1 |
| Fireflies | 1 |
| Gmail | 2 |
| GitHub | 6 |
| Google Calendar | 7 |
| Google Docs | 3 |
| Google Drive | 7 |
| Google Sheets | 2 |
| Google Slides | 1 |
| Google Super | 16 |
| Hubspot | 2 |
| Jira | 3 |
| Linear | 3 |
| Mailchimp | 4 |
| Notion | 5 |
| OneDrive | 8 |
| Outlook | 5 |
| Pipedrive | 3 |
| Salesforce | 7 |
| Slack | 9 |
| Slackbot | 9 |
| Spotify | 3 |
| Stripe | 7 |
| TimelinesAI | 1 |
| Todoist | 1 |
| Trello | 5 |
| YouTube | 4 |
| Zendesk | 2 |


## Schedule Frequencies

<table>
  <tr>
   <td><strong>Frequency</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>Daily
   </td>
   <td>Runs every day
   </td>
  </tr>
  <tr>
   <td>Weekly
   </td>
   <td>Runs every 7 days on a selected day of the week
   </td>
  </tr>
  <tr>
   <td>Monthly
   </td>
   <td>Runs on a specific date each month
   </td>
  </tr>
  <tr>
   <td>Once
   </td>
   <td>Runs at selected date and time
   </td>
  </tr>
  <tr>
   <td>Cron
   </td>
   <td>Runs based on a custom cron expression
   </td>
  </tr>
  <tr>
   <td>Custom
   </td>
   <td>Repeats every N days or weeks
   </td>
  </tr>
</table>

## Troubleshooting

1. **Undefined output variables**: If any output variable is not defined, a list of unresolved outputs appears.

    * Open the Start node and define all required output variables.
    * Save and re-run the workflow.

2. **Inactive triggers**: A warning appears if a trigger is inactive or has an authentication issue.

    * Re-deploy the workflow to refresh connections.
    * Retest the auth profile in **Settings → Security & Control → Authorization profiles**.
    * Ensure the trigger is active before running the workflow.



