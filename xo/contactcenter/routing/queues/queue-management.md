# Queues

Queues are virtual waiting areas that hold and process incoming requests for conversations between agents and customers. They serve as temporary holding points for digital and voice conversations until the system assigns an agent.

All conversations get assigned to queues based on the agent selection logic and skill proficiency match. A conversation can only be in one queue at any given time. When conversations get assigned to a queue, Contact Center AI assigns them to agents. The agent assignment works based on pre-established rules and criteria.
When a conversation comes in, it gets assigned to a queue, the next step is to check the routing mode.

## Queue Routing Modes

All conversations get assigned to queues as they come in. This process depends on the following three Routing modes:

1. Standard Routing

    * Queue routing is primarily based on the highest average skill and proficiency match for a given conversation. This routing mode only considers proficiency after a skill match has occurred.
    * If multiple agents match a skill and have the same proficiency level, the system routes the conversation to the agent with the fewest utilized slots. If a tie exists, the agent who has been idle the longest receives priority.

2. Advanced Routing

    * In this case, the conversation first routes to a preferred agent, or a set of preferred agents.
    * During this check, the system ignores skills. If the system can't assign a preferred agent and the preferred agent timeout expires, it expands the search to all agents and matches skills to select the best available agent according to the Simple Routing Mode.
    * When preferred agents are busy and the consideration pool expands to include all available agents with matching skills, configurable timers for skill expiry enable progressive relaxation of skill match criteria, thereby gradually expanding the agent pool.

3. Conditional Group Routing (CGR)

Conditional Group Routing is a dynamic routing feature in a Contact Center as a Service (CCaaS) environment designed to reduce customer wait times by intelligently expanding the pool of eligible agents beyond a single queue without affecting other queues. Unlike traditional routing, which assigns conversations based on skill match and proficiency, Conditional Group Routing uses rule-based eligibility expansion to include agents from similar queues when conversations wait too long, helping maintain service levels.

Configure CGR at the queue level for queues containing a single channel type.

Administrators can configure CGR rules in the routing settings of a queue by turning on the toggle.  
<img src="../images/cgr-toggle.png" alt="Enable CGR" title="Enable CGR" style="border: 1px solid gray; zoom:80%;"/>

How it works?

**Initial Routing Attempt**: The system first attempts to route the conversation within the originating queue (for example, Queue A) using standard skill and proficiency matching. This attempt occurs for a configurable duration, such as 30 seconds.

**Conditional Expansion**: If no eligible agent is available in the originating queue within the configured wait period, the system expands the search to other similar queues (for example, Queue B, Queue C). This expansion is conditional and based on predefined KPIs, such as Average Handle Time (AHT) and Estimated Wait Time (EWT).  
<img src="../images/options.png" alt="Options" title="Options" style="border: 1px solid gray; zoom:80%;"/>

Eligibility Rules:

* Consider queues meeting the configured conditions.  
* For example, if Queue B’s EWT is less than 1 minute, pull its agents into the consideration pool.  
* Agents must satisfy the skill and proficiency requirements for the conversation.  

Routing Decision:

* The conversation is then routed to the most suitable agent within this expanded pool.  
* If a queue doesn't meet the conditions (for example, EWT is too high), skip it to avoid service-level impact.

Example Scenario:

* **Queue A (QA)**: A new conversation arrives. QA’s Estimated Wait Time (EWT) = 5 minutes.  
* **Configurable Wait Period**: The system attempts to find an agent in QA for 30 seconds.  
* **Expansion Check**: After 30 seconds, the system checks Queue B (QB).  
    * If QB’s EWT < 1 minute → Adds agents from QB to the routing pool.  
    * If QB’s EWT ≥ 1 minute → Skips QB, and the system evaluates Queue C (QC).  
* **Result**: By pulling in eligible agents from QB (or QC if QB fails), the system can route the conversation faster, reducing customer wait time while ensuring no negative impact on other queues’ service metrics.  

Key Benefits:

* Reduces long wait times in queues with high load.  
* Maintains queue-level service levels by applying KPI-based conditions.  
* Provides flexibility through configurable wait periods and rules.  
* Consider skilled and proficient agents, preserving service quality.  

## The Queues Live Board

To access _Queues_, go to **Contact Center AI** > **ROUTING** > **Queues**.
<img src="../images/queues-page.png" alt="Queues Page" title="Queues Page" style="border: 1px solid gray; zoom:80%;"/>

This section displays the following:

* **Search**: Enter keywords to find queues by name;
* **Queue**: The name and description of available queues;
* **Actions**: Lists the **Edit Queue** option;
* **Agents**: Shows the agents available for a particular queue;
* **Mode**: Specifies whether the set queue is in **Simple** or **Advanced** routing mode;
* **ACW**:  Displays the After Call Work (ACW) configuration;
* **Status**: Displays the status of the conversation, **Active** or **Inactive**.

### Add a Queue

1. At the top-right corner of the Configuration page, select **New Queue**.
2. In the **New Queue** window, you can set up the queue as follows:  
    <img src="../images/new-queue-button.png" alt="New Queue Icon" title="New Queue Icon" style="border: 1px solid gray; zoom:80%;"/>
    1. With **Simple Routing**, you can configure the Queue Settings and Assignments;  
    2. With **Advanced Routings**, you can configure the Queue Settings, Assignments, Preferred Agents, and Skills.

### Settings

This section is available in `Simple` and `Advanced Routing` modes and enables you to configure the following:

1. The **Name** by which to identify the queue;
2. A short **Description** of the queue (optional);
3. **Hours of Operation**: Select from the available [Hours of Operation](../../configurations/hours-of-operation/manage-hours-of-operation.md).
4. **Transfer Rules:** This feature lets you limit the agents’ ability to transfer from one queue to another. If this feature is enabled, you can select the specific queues to which agents can transfer customers. If disabled, agents can transfer to any queue from the current one. Turn on the Transfer Rules toggle, select a Queue and select **Done**.  
    <img src="../images/transfer-rules.png" alt="Transfer Rules" title="Transfer Rules" style="border: 1px solid gray; zoom:70%;">

    !!! Note

        If the customer ends the chat before the completion of a transfer, then the transfer is dropped, and the interaction isn't assigned to any queue or agent. This feature only applies to chat conversations and is available if you are using WebSDK v1.0.

5. **Maximum Wait Time**: Specify the maximum time a conversation waits in the queue before the default `No available agent` flow handles it.
6. **After Call Work (ACW)** You can enable or disable ACW.

    **ACW Enabled**

    1. **Immediate Slot Release**: The slot becomes available immediately when the conversation ends. Agents can finalize the disposition at their convenience.
    2. **Timed Slot Release**: Agents must complete the disposition within a pre-set time duration, during which the slot remains occupied. A default 30-second timer appears by default, which administrators can modify. The configurable time duration ranges between a minimum of 10 seconds and a maximum of 15 minutes. If the timer field is blank, an alert message appears to enter a timeout value ranging between 10 seconds and 15 minutes for the timed slot release.

        You can edit the `Is Required?` and `Assignment` fields for disposition sets, including the default [disposition sets](../../agent-and-supervisors/dispositions/manage-dispositions.md#disposition-sets). This enables existing users to switch any configured disposition set to an optional mode.  

    3. **Indefinite Slot Release**: If selected, the slot remains occupied until the agent submits the disposition.  

7. **Advanced Routing**: If enabled, preferred agents and skill dropoffs are available.  

8. Select **Save**.

### Assignments

This section is available in `Simple` and `Advanced Routing` modes and enables you to assign agents, agent groups, or both to the queue.

#### Assign Agents

Follow these steps to assign agents to a queue:

1. Select **Add Agent**;  

2. Select the checkbox next to an agent’s name and select **Done**. You can use the Search field at the top of the list to find a specific person.  

#### Assign Agent Groups

1. Select **Add Agent Group**;  

2. Select the checkbox next to a group name and select **Done**. You can use the Search field at the top of the list to find a specific group.

    !!! Note

        Agents from the agent group are not displayed in the agent’s list. The list of agents added to the queue is displayed, along with the agent groups that are part of the queue.

#### Preferred Agents

In the **Preferred** tab, you can assign preferred agents to the queue.

1. Under **Preferred Agents**, find the agent you need in the list. You can use the Search field for this purpose. Select the corresponding **Preferred** checkbox to set the agent as preferred.

2. Under **Advanced Settings**, configure the preferred agent timeout. During a preferred agent check, the system ignores skills. If a preferred agent isn't assigned and the preferred agent timeout expires, the check expands to the full agent list, and skills match to select the best available agent for the conversation.  

#### Skills

1. In the **Skills** tab, search for a specific skill to assign to the Queue.

2. Choose whether you want the skill to expire and set the time for this. When a skill assignment expires, the conversation routes to other assigned skills.

    When you are ready to save the Queue, select **Create**. The new Queue is then listed among your available queues.

#### Additional Configuration

Select this tab to configure:

Outbound Phone Numbers

Steps to configure outbound phone numbers:

1. Enter the phone numbers or choose from the list.  
2. Select **Apply** to save the outbound phone numbers.

Outbound Email IDs

Steps to configure outbound email IDs:

1. Enter the email IDs or choose from the list.  
2. Select **Apply** to save the email IDs.

Administrators can turn on the Queue-level Outbound Numbers or Emails feature from [System Settings](../../configurations/settings/queue-level-settings.md) to restrict agents to only see the outbound phone numbers or email addresses assigned to their respective queue.

## Edit a Queue

1. Select the **Edit** icon corresponding to the queue you want to edit.
2. Make the required changes and select **Save**.

## Delete a Queue

To delete a queue, follow these steps:

1. Select the **Edit** icon corresponding to the queue you want to edit.
2. Select **Delete** on the left side and confirm your choice.

    !!! Note

        * Deleting a queue means that all corresponding routing rules are removed.
        * The queue cannot be deleted if an active campaign associated with it is running. Ensure that all campaigns are inactive before attempting to delete them.

## Assign a Conversation to a Queue

There are two ways to assign a conversation to a queue:

1. Using the [Set Queue](../../../flows/node-types/set-queue.md) node within an experience flow.
2. Using the [agentUtils.setQueue()](../../../flows/node-types/utils.md#set-queue) method.

## When the Contact Center Permission is Disabled

Users with full user management access can restrict selected users from participating in contact center interactions until they complete mandatory tasks or meet other requirements. If disabled, the user can't access contact center functionalities or appear in agent status lists. However, users can access Automation AI, Agent AI, or Search AI, based on their assigned roles and permissions. Disabled users appear with a `Disabled` tag in user management and agent selection lists. They don't appear in active analytics dashboards. This supports seamless permission control while preserving user visibility and data integrity.

A pop-up message appears upon selecting queues and a disabled tag appears beside the user.  

!!!Note

    Agent permissions cannot be disabled if the agent is the only member of the queue or is engaged in an active conversation.