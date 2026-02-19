# Schedule Trigger

The Schedule Trigger feature enables automated execution of agentic flows at predefined intervals. By configuring a schedule, you can automate routine tasks without manual intervention, allowing the agent to run autonomously based on your specified timing and frequency. The Schedule Trigger is optional and disabled by default. When enabled, it provides end users with the ability to configure and manage automated executions.

<img src="../images/schedule-trigger.png" alt="Details and Purpose" title="Details and Purpose" style="border: 1px solid gray; zoom:70%;">


## Configuring Schedule Trigger 

Follow these steps to set up a schedule for your agentic flow:

**Allow Schedule Trigger for Agent**

To enable schedule triggering for an agent, toggle the **Allow Schedule Trigger for Agent** option. When you enable this option, end users can see, set up, and activate schedules. Disabling it hides all scheduling options from them.

**Set Default Schedule**

Click **Default Schedule** to set the initial automation schedule. The system presents you with several schedule types: **Once**, **Hourly**, **Daily**, **Weekly**, **Monthly**, **Custom**, or **Cron**. Select the schedule type that best fits your automation needs.

After selecting a schedule type, configure the specific details. Specify the start and end dates and times, then select a timezone. You can choose a standard timezone or set it to **End User Specific**, which bases the trigger on each user's geolocation. For **Weekly** schedules, you must also select the specific days when you want the automation to run. If you enable the schedule trigger without specific configuration, the system defaults to a daily run at 8:00 AM.
 
**Instructions to Agent**

Enter clear instructions that describe what the agent should accomplish during its scheduled execution. Well-defined instructions help ensure the agent performs the intended tasks accurately.

**Configure Behavior Settings**

Configure notification preferences to control how the system communicates with users about scheduled executions.

* **Notify on Start** sends a notification when the agent is ready to begin execution. This setting applies to User-Triggered mode, where the agent waits for user confirmation before running.
* **Notify on Completion** sends a notification once the agent has finished executing. This setting applies to Auto-Triggered mode, where the agent runs automatically and informs users of the results afterward.

Schedule Trigger configuration becomes available only when scheduling is enabled by an administrator.

To understand the required admin-level controls, see [Scheduler Settings](../assist-configuration/scheduler-settings.md).
