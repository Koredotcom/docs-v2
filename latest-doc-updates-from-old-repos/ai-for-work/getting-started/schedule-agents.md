# Schedulers

The Schedulers feature provides a centralized location to create, manage, and monitor automated schedules for agents, flows, and platform modes. You can access all your schedulers from a single tab instead of navigating to individual agent detail pages.


## Accessing Schedulers

1. On the homepage, click **Agents and Flows**.
2. Navigate to the **Schedulers** tab.

The Schedulers tab displays all schedulers you have created, along with any admin-enforced schedulers assigned to you.
<img src="../images/scheduler-1.png" alt="Marketplace" title="Marketplace" style="border: 1px solid gray; zoom:100%;">

## Creating a Scheduler

1. On the **Schedulers** tab, click **Create**.
2. The platform opens the **Scheduler configuration pop-up**.
<img src="../images/scheduler-2.png" alt="Marketplace" title="Marketplace" style="border: 1px solid gray; zoom:100%;">

1. In the **Agent** selection field, choose one of the following:
    * An agent you have access to
    * A flow you have access to
    * A mode: **Work**, **Web**, or **AI Model**
2. Configure the schedule timing and frequency (Once, Hourly, Daily, Weekly, Monthly, Custom, or Cron). The scheduling configuration options remain the same as the existing schedule trigger setup.
3. In the **Trigger Query** field, enter the instructions that describe what the agent or flow should execute during each scheduled run.
4. Select an **Execution Mode**:
     * **Ask before running**: The platform sends a notification when the scheduled time arrives and runs the agent only after you approve the execution.
     * **Run automatically**: The platform runs the agent on schedule without waiting for approval and sends a notification when the execution completes.
1. Click **Save**.

On successful save, the platform enables the scheduler by default.

## Managing Schedulers

You can toggle any scheduler on or off at any time. Changes take effect immediately. 

**Edit a Scheduler**

Click on an existing scheduler to open its configuration. Update the agent/flow selection, schedule timing, or query as needed, and save your changes. Edits take effect immediately.

**Delete a Scheduler**

Select the scheduler you want to remove and click **Delete**. The platform removes the scheduler immediately.

**Use the Same Agent Across Multiple Schedulers**

You can assign the same agent to different schedulers. Each scheduler operates independently with its own timing, frequency, and query.


## Admin-Enforced Schedulers

Your administrator can create and assign schedulers that appear automatically in your Schedulers tab. Administrators configure this from the Admin Console under **Assist Configuration > Scheduler Settings**. In Scheduler Settings, admins can enable the Scheduler feature for the workspace, set a scheduling limit per user (such as 5, 10, 20, or 30 schedulers), and enable Workspace Owner Scheduler Permissions to allow workspace owners to publish agents with pre-configured schedules that run automatically for end users. When Workspace Owner Scheduler Permissions are enabled, workspace owners can add schedulers during agent creation and publish agents with active schedules. These admin-enforced schedulers follow specific rules:

* If you have available capacity within your scheduling limit, the platform enables admin-enforced schedulers by default. If you have reached your limit, they appear in a disabled state.
* You can enable or disable admin-enforced schedulers.
* You cannot edit the schedule configuration of admin-enforced schedulers. They appear in a view-only state.
* You cannot delete admin-enforced schedulers.