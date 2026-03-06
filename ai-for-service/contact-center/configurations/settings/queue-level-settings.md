# Queue-level Settings

Queue-level settings define how outbound options, conversation routing, and queue prioritization work across the platform. These settings determine which outbound contact options users can access, how queued conversations behave during non-business hours, and how the system prioritizes queues when assigning conversations to agents.

To enable the Queue-level Settings:

Navigate to Contact Center AI > Configurations > Settings > System Settings > Queue-level Settings.  
    <img src="../images/queue-level-settings.png" alt="Queue Level Settings" title="Queue Level Settings" style="border: 1px solid gray; zoom:70%;">

* **Queue-level Outbound Numbers/Emails**: When the toggle is on, agents can see only the outbound phone numbers and email addresses configured for their respective queues.
* **Redirect Queued Conversations to Out of Business Hours Flow**: When the toggle is on, any conversation waiting in the queue is automatically redirected to the Out of Business Hours flow when the system enters Out of Business Hours.
* **Dynamic Queue Reprioritization**: When the toggle is on, administrators can dynamically adjust queue priorities in real time so that agents are assigned conversations from the most critical queues first, especially during conversation surpluses.

    Each conversation associates with a Hours of Operation (HOP) Config ID when the interaction is created and enters a queue. The system binds this HOP Config ID to the conversation for its entire lifecycle.

    How it works

    * The system assigns a HOP Config ID to every interaction when it enters a queue.  
    * The HOP Config ID determines the Hours of Operation rules that apply to the conversation.  
    * The system doesn't automatically update the HOP Config ID after assignment.

    Important limitations

    * Updating a queue to use a different HOP configuration doesn't affect interactions that are active or waiting in that queue.

    Recommended configuration approach

    * Don't replace or switch the HOP configuration assigned to a queue when active or waiting interactions exist.  
    * If operating hours need to change, update the timings within the existing HOP configuration instead of assigning a new HOP configuration.

    Configuration

    1. Turn on the toggle to enable Dynamic Queue Reprioritization.

    1. Select a queue priority between 1 and 10, where 1 represents the highest priority and 10 represents the lowest, and then select Save.
        <img src="../images/queue-priority-selection.png" alt="Queue Priority Selection" title="Queue Priority Selection" style="border: 1px solid gray; zoom:70%;">

Administrators can configure additional settings from [Queues](../../routing/queues/queue-management.md#additional-configuration).