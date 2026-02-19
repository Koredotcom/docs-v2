# Agentic Apps

Agentic Apps represent a paradigm shift from rule-based systems to dynamic, autonomous systems. They're intelligent software systems powered by multiple specialized AI agents that collaborate under the coordination of an orchestrator to understand user intent, decompose complex tasks, and deliver automated outcomes. By leveraging large language models (LLMs), Agentic apps can reason, adapt, and act without requiring constant human intervention.

## Key Components

Agentic Apps are composed of several key components that enable autonomous decision-making and complex task execution.

![Anatomy](images/anatomy.png "Agentic App Anatomy")

### Orchestrator

The orchestrator is the brain of the Agentic app. It manages agent interactions, task delegation, and workflow execution to achieve the app's goals.

Key responsibilities include:

* Interpreting user input to understand intent and context.
* Delegating tasks to the most suitable agents.
* Handling complex workflows by invoking multiple agents.
* Resolving conflicts between agent outputs.
* Verifying and validating responses before presenting to the user.

The Platform offers two types of orchestration patterns - the Supervisor pattern and the Adaptive Network pattern.

### Supervisor Pattern

The Supervisor Pattern is an architectural pattern used in the design of Agentic apps, where a central component called the "orchestrator" acts as a supervisor to manage and coordinate multiple AI agents. This pattern helps to efficiently handle complex tasks by breaking them down into smaller sub-tasks and delegating them to specialized agents. [Learn More](../supervisor.md).

### Adaptive Network Pattern

The Adaptive Network Orchestration Pattern is an architectural approach for designing agentic applications in which specialized AI agents dynamically transfer task control and context to one another based on the task's requirements. In contrast to the supervisor orchestration pattern, which relies on a single controlling entity, this approach is decentralized, flexible, and adaptive. This allows agents to evaluate tasks and hand them off to the most suitable agent with relevant expertise. [Learn more](../adaptive-network.md).

### Agents

Agents are specialized, autonomous workers that possess the knowledge and resources to perform tasks related to a specific goal. Each agent has a unique scope defining its core functions, objectives, and responsibilities.

Agents utilize various tools to enhance their capabilities. After receiving a user query from the orchestrator, the agent selects the most suitable tool, prepares the required input parameters, invokes the tool, processes the result, and returns the output to the orchestrator or user.

**Example:** In a banking app, specialized agents handle various user queries:

* A savings account agent processes fund transfers, adds new payees, displays balances, and performs other related tasks.
* A loan agent manages loan apps and payments.
* A card management agent handles PIN resets or card blocking.

Each agent is tailored to its specific domain, ensuring efficient and accurate handling of queries and actions.

### Tools

Tools are modules or capabilities that allow agents to access and interact with external environments. For example, an agent may use an SMTP tool to send email notifications.

The agent selects the appropriate tool for a task based on tool descriptions and its reasoning capabilities. It then generates a structured request to invoke the tool with the necessary parameters.

#### Tool Selection and Invocation

To accomplish a task, the agent intelligently selects the necessary tools. This decision-making depends on:

* Tool Descriptions: Comprehensive details and instructions outlining each tool's functions and purpose.
* Reasoning Capabilities: The language model's analytical skills to match task requirements with the most appropriate tools based on their available functionalities.

Once the appropriate tool is selected, the agent invokes it by generating a structured request, typically in the form of JSON or code, through tool or function calling. The framework then executes this request, passing the specified parameters to the selected tool for execution.

#### Tool Calling by Agents

The process of an agent using tools follows this sequence:

1. Task Planning: After receiving a user query via the orchestrator, the agent determines that it requires external functionality or data to fulfill the query.
2. Tool Identification: The agent selects the most suitable tool for the task at hand.
3. Parameter Preparation: Using LLM capabilities, the agent extracts relevant entities (for example, location, date, user preference) and maps them to the required input format.
4. Tool Invocation: The agent calls the tool, passing the prepared parameters.
5. Execution: The tool processes the input and performs the necessary action.
6. Result Processing: The agent processes the tool's output, validating, formatting, or using it for the next workflow step.
7. Output Delivery: The agent sends the result either back to the orchestrator or to the user if the task is complete.

### Interaction Context

Agentic apps maintain state and conversation history to enable more user-friendly and effective interactions. This comprehensive state management enables agents to maintain continuous and contextually relevant communication throughout the entire interaction.

**Example**: In the fund transfer scenario:

* The transfer amount is stored in short-term memory until the transaction is completed.
* The user's preferred transaction method is maintained as long-term memory.

## Example of an Agentic App: Banking Assistant

A Banking Assistant built as an Agentic App demonstrates how multiple specialized agents handle different banking tasks:

![Banking Example](images/banking-example.png "Banking example")

* The orchestrator (Supervisor, in this case) manages communication between users and banking agents.
* Specialized agents handle loans, transactions, cards, and more.
* Each agent utilizes tools with built-in business logic to complete specific tasks.

This approach ensures an organized, automated, and scalable banking solution.

<hr/> 

**Related Resources**

* [About AI Agents](../overview.md)
* [Supervisor Pattern](../supervisor.md)
* [Adaptive Network Pattern](../adaptive-network.md)
* [Create an Agentic App](./create-app.md)
* [Set up AI Agents](../create-agent.md)
* [Configure Tools for Agents](../tools/overview.md)
