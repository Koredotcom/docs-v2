# Tool Calling Overview

Tool calling enables large language models (LLMs) to interact with external systems, APIs, and functions to perform tasks beyond text generation. It allows AI agents and nodes to access additional resources, retrieve data, execute business logic, and complete complex workflows effectively.

Essentially, tool calling is the ability of an LLM to identify when external functionality is needed, select the appropriate tool, invoke it with the correct parameters, process the output, and incorporate the results into responses. This capability bridges the gap between conversational AI and actionable automation.


## Tool Calling Across the Platform

The Platform supports tool calling in two primary contexts: **Agentic Apps** and **Workflow Tools (AI Nodes)**. In Agentic Apps, agents receive user queries through an orchestrator and dynamically select the most appropriate tools based on the LLM's reasoning capabilities. 

Within Workflow Tools, tool calling extends the AI Node's capabilities beyond text generation. The node's prompt is dynamically enhanced with tool definitions, enabling it to connect with Service, Script, and Search AI nodes during execution.

## Tool Calling Process

The tool calling process follows a consistent sequence across the platform:

1. **Input Processing**: The LLM receives a query or input from the user.

2. **Tool Identification**: The LLM analyzes the request and identifies which tool (or tools) are required to fulfill it. This decision is based on tool descriptions and the model's reasoning capabilities.

3. **Parameter Preparation**: The LLM extracts relevant entities from the user input (such as location, date, or preferences) and maps them to the required input format for the tool.

4. **Tool Invocation**: The platform triggers the mapped tool with the prepared arguments.

5. **Execution**: The tool performs its designated task—such as calling an external API, querying a database, or running a script—and returns the result.

6. **Result Processing**: The LLM processes the tool's output, validating and formatting it as needed.

7. **Output Delivery**: The final result is either used for subsequent processing or delivered to the user.

## Tool Calling in Agentic Apps

In Agentic Apps, tool calling enables agents to perform purposeful actions within a multi-agent architecture. Agents are specialized, autonomous workers that utilize tools to enhance their capabilities and interact with external environments.

When an agent receives a user query from the orchestrator, it selects the most suitable tool based on:

* **Tool Descriptions**: Comprehensive details outlining each tool's functions and purpose.

* **Reasoning Capabilities**: The LLM's analytical ability to match task requirements with appropriate tools.

The agent then prepares the required input parameters, invokes the tool, processes the result, and returns the output to the orchestrator or user. This process allows Agentic Apps to dynamically understand, plan, and execute actions based on user queries without relying on predefined workflows.

### Supported Tool Types

Agentic Apps support three types of tools:

* **Workflow Tools**: Visual, no-code tools for designing multi-step workflows with both synchronous and asynchronous execution.

* **Code Tools**: Custom JavaScript or Python code for advanced logic, data transformation, and complex integrations.

* **MCP Tools**: Tools exposed via the Model Context Protocol for connecting to remote functions on external servers.

[Learn more](./../create-agent.md#adding-tools).

## Tool Calling in Workflow Tools (AI Nodes)

Within Workflow Tools, the AI Node leverages tool calling to expand its capabilities beyond text generation. The AI Node can invoke additional resources to interact with external systems, fetch or post data, and perform specialized operations during flow execution.

When tool calling is enabled in an AI Node, the node's prompt is enhanced to include tool definitions and contextual information. Based on user input and the ongoing conversation, the LLM dynamically decides whether to generate text or call a tool. This enables more dynamic, data-driven conversational experiences.

### Tool Configuration in AI Nodes

Each tool configured in an AI Node includes:

* **Name**: A meaningful identifier that helps the LLM recognize when to call the tool.

* **Description**: A detailed explanation of the tool's purpose and capabilities.

* **Parameters**: The inputs the tool requires, which the LLM collects from the user.

* **Actions**: The nodes executed when the LLM requests a tool call (such as Service, Script, or Search AI nodes).

[Learn more](./tool-flows/types-of-nodes/ai-node.md).

### Using Multiple Tools in AI Nodes

In a single AI node, multiple tools can be called together to handle more complex tasks. Multiple-tool calling refers to the model’s ability to interact with and use various tools or external systems in a single session. These tools can be called sequentially or in parallel, depending on the workflow.

* **Sequential tool calling**: Tools are triggered one after another, with each tool waiting for the previous one to finish. This ensures tasks are done in a specific order. For example, if a user asks for weather data for a city and a recommendation based on that data, the weather tool would run first, followed by the recommendation tool.

* **Parallel tool calling**: Multiple tools are triggered simultaneously, enabling tasks to run in parallel and speeding up the overall process. For example, if a user requests weather information for multiple cities, the model can call weather APIs for all cities simultaneously and retrieve data in parallel.

This flexibility enables AI nodes to handle more complex workflows efficiently, combining the best of both approaches as needed.


### Use Case

Consider a user query: "What's the weather in Paris, and is it a good time to visit?"

In this example, two tools are used to provide a comprehensive response. The system maps the user input to relevant functions/tools, gathers the necessary data, and combines the weather information with travel advice.

**Step 1: User input (Initial query)**  
The user enters a query: *"What's the weather in Paris like, and is it a good time to visit?"*

**Step 2:** **Query processing - clarifying and mapping tools**  
The model processes the query and identifies two distinct tools based on the user's request:

1. *Get Weather* – To check the current weather in Paris.
2. *Get Travel Advice* – To provide travel recommendations based on the weather.

The model maps the query to these tools and prepares a response to clarify the intent: *"I will check the weather in Paris and provide travel advice based on the current conditions."*

**Step 3: Model response - Preparing tool call for weather API**  
The model generates the tool call for the Get Weather API, which includes the necessary arguments:

* Function Name: `get_weather`
* Arguments:
    * `location: "Paris"`
    * `unit: "Celsius"`

The model sends this information in the response body, asking the Platform to trigger the weather tool.

**Step 4: Tool Call 1 - Weather API**  
The Get Weather tool is triggered, and the external Weather API returns the following data:

* *Temperature: 16°C*
* *Condition: Partly cloudy*
* *Forecast: Light rain later*

The model then prepares to trigger the next tool based on the weather data.
In a sequential execution, the tool sends the data to the model, which then processes it and determines the next tool or function to execute.

**Step 5: Model response - Preparing tool call for travel advice**  
The model now generates the tool call for Get Travel Advice based on the weather conditions, including:

* Function Name: `get_travel_advice`
* Arguments:
    * `location: "Paris"`
    * `weather_condition: "Partly cloudy with light rain"`

The model sends this information in the response body, and the AI node calls the Get Travel Advice tool.

**Step 6: Tool Call 2 - Travel Recommendation tool**  
The Get Travel Advice tool is triggered and returns:

* *Best Time to Visit: Spring or Fall is ideal*
* *Current Advice: It’s okay to visit, but bring an umbrella due to rain.*

The model processes this information and prepares the final response.

**Step 7: Model response generation - combining results**  
The model combines the output from both tools and formats the response:  
*"The weather in Paris is 16°C, partly cloudy, with light rain later. It’s a good time to visit, but bring an umbrella."*  
The model sends this response back to the tool, which maps the output to the end node.

**Step 8: Final output to the user**  
The user receives the final output, which includes both the weather update and travel advice in a single, cohesive response.


## Why is Tool Calling Important?

1. **Extended capabilities**: Tool calling enables the LLM to go beyond its core capabilities by calling external tools, making them more versatile. For example, the model can generate text and simultaneously call a text-to-speech tool to read it aloud.

2. **Increased efficiency**: With tool calling, the model uses specialized tools to complete tasks faster. For example, quickly translate text using a translation tool, speeding up the process compared to manual translation.

3. **Real-time updates**: Tool calling enables the model to fetch real-time information, such as weather or stock data, through APIs or web scraping tools, ensuring up-to-date information.

4. **More autonomy**: Tool calling allows the model to automatically decide when to use tools, reducing manual input and allowing for faster, smarter interactions with users.

5. **Better user experience**: By automatically calling the right tools, the model can respond more dynamically, providing quicker, more accurate, and relevant answers, leading to better user satisfaction.


## Supported Models for Tool Calling

Tool calling functionality is available when commercial models are added to an AI node. However, only specific commercial models support this feature. Currently, Platform-hosted and Hugging Face models don't support tool calling. 

Below is a list of models across various platforms that support tool calling in the Platform:

**OpenAI**

* gpt-4
* gpt-3.5-turbo
* gpt-3.5-turbo-1106
* gpt-4-0613
* gpt-4-0125-preview
* gpt-4-turbo-preview
* gpt-4-1106-preview
* gpt-4o

**Azure OpenAI**

* gpt-4
* gpt-3.5-turbo

**Anthropic**

* Claude 3 Opus
* Claude 3 Haiku
* Claude 3 Sonnet
* Claude 3.5 Sonnet

**Google**

* Gemini-1.5-flash-latest
* Gemini-1.5-pro

<hr> 

**Related Resources**

* [Code Tools](./code-tools.md)
* [MCP Tools](./mcp-tools.md)
* [Workflow Tools](./workflow-tools.md)

