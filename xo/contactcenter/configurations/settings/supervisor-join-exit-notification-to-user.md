# Supervisor Join/Exit Notification to User

This setting allows contact center administrators to control the visibility of supervisor join and exit notifications during live conversations. By default, end users receive a system-generated tag when a supervisor joins or exits a chat. This toggle allows administrators to disable such notifications, supporting silent supervision or internal monitoring.

Some enterprise environments require discretion during escalations or quality monitoring. End-user notifications about supervisor actions may conflict with those expectations or disrupt the user experience. This functionality provides flexibility to suppress such system messages based on organizational policies or compliance needs.

steps to configure the supervisor join notification for the user:

1. Go to **Contact Center AI** > **CONFIGURATIONS** > **Settings** > **System Settings**> **Supervisor Join Notification to User**.  
    <img src="../images/supervisor-join.png" alt="Supervisor Join Notification" title="Supervisor Join Notification" style="border: 1px solid gray; zoom:70%;">

2. This functionality is enabled by default. To disable it, click the arrow to turn off the toggle.  
    <img src="../images/toggle-off.png" alt="Toggle Off" title="Toggle Off" style="border: 1px solid gray; zoom:70%;">

## Behavior

| **Setting State** | **Behavior** |
|-------------------|--------------|
| **Enabled**       | Displays “Supervisor Joined the Chat” and “Supervisor Exited the Chat” messages to end users. (Default behavior) |
| **Disabled**      | Customers do not receive any visual indication when a supervisor joins or exits the chat. The change takes effect in real time and persists across sessions. |

All changes to the setting are recorded in the audit logs for traceability and administrative review.
