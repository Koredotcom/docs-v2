# Single Agent Orchestration Pattern

The Single Agent orchestration pattern is used when an application relies on one autonomous agent to handle all user requests and generate responses independently. In this pattern, the agent is responsible for understanding user intent, accessing knowledge, invoking tools if required, and producing the final response to the user.

This pattern provides a simple, efficient, and low-overhead orchestration model for focused use cases. By centralizing reasoning and execution within one agent, applications can deliver faster responses with minimal orchestration complexity.

## When to Use a Single Agent

This approach is ideal for applications with one primary capability or a well-defined domain where task delegation across multiple agents is not required. Use this pattern when:

* The user's request clearly falls within the domain of one agent.
* The task doesn't depend on other agents.
* The workflow involves a straightforward, single-action, or closely related set of actions

## Architecture and Execution Flow

In this architecture, the sole agent has the responsibility to manage all the capabilities - intent understanding, knowledge retrieval, tool invocation, llm interactions and response generation. 

![Single Agent Architecture](images/single-agent/single-agent.png "Single Agent Architecture")

1. The user sends a request to the application.

2. The request is routed directly to the agent.

3. The agent:

    * Interprets the user intent
    * Retrieves relevant knowledge, if configured
    * Invokes tools or workflows, if required
    * Generates a response using the configured AI model

4. The response is returned to the user without delegation to other agents.


## Example Scenario

An organization wants an AI assistant to handle all employee leave-related requests, such as applying for leave, checking leave balances, and cancelling leave, through a conversational interface.

Since leave management is a well-defined, single-domain capability, all user intents fall within the same functional boundary. This allows a single agent to own the entire interaction lifecycle without delegating tasks to other agents.

**Sample Interaction**

This example illustrates how a single-agent orchestration pattern manages user requests.

* User: “How many casual leaves do I have left?”
* Agent (Identifies intent: Leave Balance Inquiry): “I’ll check your current leave balance.” 

    [Agent invokes Leave Balance Tool with parameters- `employeeId = 10234, leaveType = Casual`]

* Leave Balance Tool: "4"
* Agent (Processes output and formats the response): "You have 4 casual leaves remaining."