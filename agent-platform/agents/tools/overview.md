# About Tools

Tools are foundational components that empower agents to perform purposeful actions. They serve as the functional extensions of an agent’s intelligence, enabling it to interact with third-party applications, retrieve information, perform logic-based operations, and trigger workflows across complex environments.

Powered by the tool invocation capabilities of large language models (LLMs), agents can dynamically identify and invoke the most relevant tools at runtime, ensuring flexibility, scalability, and precision in task execution.

For example, a ‘Leave Managing Agent’ might include tools like:

* Get Leave Balance tool - Invokes an external API to retrieve leave details.
* Leave Application tool - Gathers necessary information and applies leaves in the backend system. 

Similarly, a ‘Credit Card Assistant’ might include tools like:

* Retrieve Outstanding Amount tool - Fetches the current due amount.
* Fetch Credit Limit tool - Retrieves the user's maximum credit limit.
* Initiate Bill Payment tool - Initiates the bill payment process.
* Find Recent Transactions tool - Displays recent user transactions, often by retrieving data from a database.

## Types of Tools

The Platform supports three types of tools that agents can use to perform tasks and integrate with external systems: **Workflow Tools**, **Code Tools**, and **MCP Tools**. Each type serves a different purpose, ranging from orchestrating visual tasks to executing custom scripts or invoking remote services. Understanding the differences between these tool types will help you design agent behaviors that are both efficient and scalable.

!!! info

    * Workflow Tools - Visual tools that let you design, configure, and automate conversational flows involving multiple steps. 
    * Code Tools - Developer-defined tools implemented in code for custom logic and integrations.
    * MCP Tools - Tools exposed via the Model Context Protocol.
    
    Tools can be created and managed via the Tools Page in the Agentic App. 

### Workflow Tools

Workflow Tools provide a visual, no-code interface for designing and orchestrating agent actions with ease. Built for clarity and control, these tools allow users to define multi-step workflows using an intuitive graphical builder, making them ideal for standardized, repeatable processes. They support both synchronous and asynchronous execution modes, enabling rapid development and reliable task automation without writing any code.

**Best suited for:** Scenarios where business logic is consistent, well-defined, and benefits from visual traceability.

Examples:

* Weather API tool: Retrieves live weather updates.
* Stock Market tool: Fetches real-time stock prices.
* Database Query tool: Accesses structured data from a company’s database.

Workflow Tools can be created either through the Agentic App or directly under the Tools section.

When workflow tools are created under the **Tools** menu, they function as universal tools that, once deployed, are accessible across multiple apps. These tools act as templates, and when imported into an app, they generate a local copy that can be further customized without altering the original. Importing is restricted to tools that have been deployed from the Tools library.

In contrast, when workflow tools are created within the Agentic App, they're scoped exclusively to that app. You can also import a workflow tool from the library into the Agentic App. Any modifications or updates made to these imported tools apply only to the local copy and don't affect the version available in the Tools library. To ensure that changes take effect, the tool must be deployed within the app. 

For more information on Workflow tools, see [Workflow Tools](../tools/workflow-tools.md).


### Code Tools

Code Tools provide maximum flexibility by enabling agents to run custom JavaScript or Python code. These tools are ideal for handling dynamic logic, conditional processing, or integrations that can't be captured through pre-defined workflows. Code Tools support synchronous execution and are ideal when precision, extensibility, or complex algorithms are required.

**Best suited for:** Advanced use cases involving business-specific logic, data transformation, or interaction with complex systems.

Examples:

* SQL Query Processor: Executes SQL queries on a specified database.
* Custom Validator: Validates inputs using custom logic before proceeding.

For more information, see [Code Tools](../tools/code-tools.md).


### MCP Tools

MCP Tools connect agents to remote functions hosted on Model Context Protocol (MCP) servers. These tools serve as reusable logic or integration blocks, such as scripts, webhooks, or service connections, which are created and maintained outside the platform.

Following a client-server discovery model, agents can dynamically invoke third-party or proprietary services in real time without embedding logic directly into workflows or code.  Once connected, MCP Tools can be selected, configured, versioned, and managed independently, allowing modular and scalable integration across environments. 

Because MCP Tools are centrally managed, they support versioning, cross-feature reuse, and simplified development—ideal for scaling integrations across multiple agents.

**Best suited for:** Seamless integration with external APIs, proprietary platforms, or shared toolsets across teams or organizations.

Examples:

* Enterprise HR Toolset (MCP): A suite of HR tools exposed via MCP.
* Remote Invoice Processor: Executes billing operations through a secure MCP endpoint.

For more information, see [MCP Tools](../tools/mcp-tools.md).

## Tools Page

The **Tools** page provides a structured view of available tools with clear visibility into their types, statuses, and linked agents. It shows the total number of tools in the app.

Key highlights

* Displays total count categorized under **Workflow**, **Code**, and **MCP.**
* Displays the **Workflow tool status** as **Draft** or **Deployed.**
* Provide empty-state CTAs: **Import** and **New Tool** for Workflow tools, **New Tool** for Code tools, **Import** and **Link Tool** for MCP tools.
* **Import Tool** and **New Tool** CTAs are located at the top right for easy access.

<img src="../images/tools-listing-page.png" alt="Tools Listing Page" title="Tools Listing Page" style="zoom:70%; border: 1px solid gray;">
