# Scheduler Settings

Scheduler Settings allow administrators to configure account-wide controls for automated agent execution. These settings determine scheduler availability, usage limits, and workspace-level permissions across the organization.

<img src="../images/rate-limit.png" alt="email-template" title="email-template" style="border: 1px solid gray; zoom:80%;">

## Enable Scheduler

Control whether end users can access scheduling functionality for agents. When enabled, users gain access to scheduling options that allow them to trigger agents automatically at specified intervals.

* **On** -- Users can create and manage schedulers for their agents.
* **Off** -- Scheduling functionality is disabled for all users.


## Set Scheduling Limit per User

Define the maximum number of schedulers each user can create simultaneously. This setting helps manage system resources and prevent excessive automated executions.

**Available Limits:**

* No Limit
* 5 schedulers
* 10 schedulers
* 20 schedulers
* 30 schedulers

Select the limit that aligns with your organization's automation needs and resource capacity.


## Workspace Owner Scheduler Permissions

Grant workspace owners the ability to publish and enable schedulers during agent creation. When enabled, workspace owners can configure default schedulers that run automatically for end users. End users receive agents with active schedulers but retain control to disable any scheduler they don't need. This approach strikes a balance between automated workflows and user flexibility.

**How it Works**:

When this setting is enabled, workspace owners can:

* Add schedulers during the agent creation workflow.
* Publish agents with pre-configured schedules.
* Set schedulers to run automatically for all end users.

Scheduler Settings control the availability and permissions for scheduling across the platform.

For details on configuring schedules at the agent level, see [Schedule Trigger](../custom-agents/schedule-trigger.md).
