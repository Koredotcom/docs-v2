# Alert Task – Configuring the Schedule


As seen [Alert task](../use-cases/alert-tasks.md), alert tasks only reach out to a web service for data when AI Agent makes a request. 

For each task, you need to define when, and how often the web service is queried for data for an alert message. You can define the scheduling options presented to the end-user when the task is set up, as well as the default schedule for the task. This article explains how to do so.

## Configuring the Schedule for a Task

To get started with defining the schedule to run a task on, please follow the steps below:

1. Go to **Build** > **Conversation Skills** > **Alert Tasks**.
2. **Create** or **select** the task you want to work with. 
3. On the **Settings** tab, click the **Expand** icon in the **Schedule** section as shown in the following illustration.

    <img src="../images/configure-schedule-for-a-task.png" alt="configure schedule for a task" title="configure schedule for a task" style="border: 1px solid gray; zoom:75%;">

To configure the schedule for your task, you must define the **Trigger Interval Options**, and then the **Default Trigger Interval**.

The **Default Trigger Interval** is the elapsed time between the last task request and the next automated task request.

To set the options displayed to the end-user, in the **Trigger Interval Options** section, follow the steps below:

1. In the first field, select one or more of **Daily**, **Weekday**, **Weekend**, individual **days of the week** or **Select All**, and then click **OK**.
2. In the second field, select one or more of **Every, At**, or **Select All**, and then click **OK**.
3. In the third field, select one or more of the available 5-minute intervals or 30-minute time slots (based on whether the second field is Every or At), or **Select All**, and then click **OK**.