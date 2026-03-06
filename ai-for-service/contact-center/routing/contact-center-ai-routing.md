# Contact Center AI Routing

Contact Center AI offers a robust and flexible approach to routing conversations within contact centers. Designed to handle a wide range of use cases, Contact Center AI empowers organizations to seamlessly connect customers with the most suitable agents, ensuring efficient service delivery.

## Routing Scenarios

### Assigning Conversations to Queues

Contact Center AI simplifies the assignment of conversations to queues using the no-code **Experience Builder** for straightforward use cases. For advanced requirements, [queues](../routing/queues/queue-management.md) and [skills](../routing/skills/skill-management.md) can be dynamically configured programmatically throughout the conversation lifecycle, leading to an agent transfer.

## Routing Methods

Contact Center AI provides a variety of routing methods to suit different operational needs:

1. **Named Routing**: Routes conversation directly to specific agents for the flow.
2. **Standard Routing(V2)**: Matches conversations with agents based on all required skills and language match.
    1. **Routing with Proficiency**: Incorporates agent skill and language proficiency into the decision-making process.
3. **Advanced Routing(V2)**
    2. **Routing to Preferred Agent**: Overrides skill-based rules to prioritize agent-specific requests.
    3. **Time-based Skill Relaxation**: When no agents possess all required skills, conversations are routed using a partial skill match based on skill expiry.
4. **Load Balanced Routing(V3):** Used in simpler environments, this method focuses on skill eligibility within a queue while ignoring proficiency matching. Conversations are assigned based on the agent's **oldest last assignment time**, ensuring fair distribution. When multiple agents match the required skills, the conversation is routed to the agent with the longest last acceptance timeline, preventing recently assigned agents from being prioritized. This ensures a balanced workload among agents. [Learn more](../agent-and-supervisors/agent-management/agent-management.md).
5. **Reprioritization**: Allows reprioritizing conversations during queue transfers to adapt to changing customer or business demands.
6. **Routing Fallback**: Invokes the 'No Agents Available' flow if no agents are logged into the system or invokes the ‘Out of Operational Hours Flow’ if the conversations are received outside configured working hours.

### Pre-Transfer Workflow

Before transferring a conversation:

* Conversations are queued, and required skills can be attached to the conversation.
* **Queues**: Act as holding areas for conversations and are independent of skills.
* **Skills**: Represent agent attributes such as expertise in specific topics or languages.

### Transfer Workflow

When the transfer is initiated, Contact Center AI employs two primary routing strategies:

1. **Standard Routing (V2)**: Matches conversations with agents based on skill and language eligibility.
2. **Advanced Routing (V2)**: Adds layers of complexity, such as:
    * Matching with a preferred agent.
    * Expiring specific skills over time to widen the eligibility pool.
3. **Load Balanced Routing (V3)**: Used in simpler environments, this method focuses on skill eligibility within a queue while ignoring proficiency matching. Conversations are assigned based on the agent's **oldest last assignment time**, ensuring fair distribution. When multiple agents match the required skills, the conversation is routed to the agent with the longest last acceptance timeline, preventing recently assigned agents from being prioritized. This ensures a balanced workload among agents.

### Multi-Queue Assignment

Agents assigned to multiple queues are managed using the following logic:

* Conversations are assigned a priority level (1 to 10).
* Higher-priority conversations are matched with agents first.
* For conversations with the same priority, preference is given to:
    * Conversations where the agent is a preferred agent.
    * If no preferred agent exists, skill match determines the assignment.

### Priority-Based Routing

Contact Center AI enables priority-based routing, allowing businesses to handle conversations efficiently based on various contextual factors. The system supports dynamic prioritization using multiple criteria, including but not limited to:

**Intent-Based Routing**: Conversations with critical intents, such as account closure requests, can be given higher priority and routed to expert agents.  

**Ticket Value-Based Routing**: Customers with high-value tickets (for example, VIP customers with transactions exceeding $10,000) can be prioritized over standard users.  

**Location-Based Routing**: Conversations from specific regions can be prioritized to ensure faster response times or localized support.  

To implement such flexible prioritization, Contact Center AI's Flow Editor provides a [Set Queue](../../flows/node-types/set-queue.md) and [Script Node](../../flows/node-types/script-task.md) with scripting capabilities. Once a conversation is created, its context is available for use. Businesses can configure custom scripts to:

* Define priority levels dynamically,
* Assign skill tags based on conversation attributes,
* Route conversations to the appropriate queue.

This approach ensures that high-priority conversations are handled effectively while providing a scalable and customizable routing framework.

### Language-Based Routing

Language plays a crucial role in matching conversations with agents. Both conversations and agents are assigned language attributes, ensuring that only agents proficient in a given language handle those conversations.

### Winning Agent Selection

Contact Center AI determines the best-suited agent for a conversation based on:

* Routing method (preferred agent, skill-based, or skill expiry over time).
* Agent availability and skill and language matching.
* Additional factors, if enabled, such as:
    * Skill proficiency.
    * Current load (for digital interactions).

Agents are ranked based on these parameters. The best agent is selected from this ranking. Alternatively, a **Load balanced routing** method can be employed for simpler environments, which focuses solely on skill eligibility within a queue.

!!! Note

    If an agent is marked as a preferred agent, the interaction waits until the preferred agent’s timeout period expires before routing to standard agents.

### Percentage-Based Call Routing

You can implement percentage-based routing within the flow by using a Script node to generate a random value and route calls based on predefined ranges.

Example:

To distribute 60 percent of calls to Destination A and 40 percent to Destination B, configure the flow as follows:

1. Add a [Script node](../../flows/node-types/script-task.md) that generates a random integer between 0 and 9.

1. Treat values 0-5 as 60 percent of the distribution and map them to Destination A.

1. Treat values 6-9 as 40 percent of the distribution and map them to Destination B.

1. Add a [Split node](../../flows/node-types/split.md) (If-Else) to evaluate the generated number.

Route the call to the appropriate call center based on the evaluated condition.

## Key Benefits

* **Efficient Handling**: Reduces wait times by intelligently matching conversations with suitable agents.
* **Flexibility**: Supports simple and advanced routing needs, catering to diverse business scenarios.
* **Customer Satisfaction**: Enhances customer experience by prioritizing preferred agents and language compatibility.