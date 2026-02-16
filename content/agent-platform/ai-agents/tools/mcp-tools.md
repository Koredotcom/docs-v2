# About MCP Tools

The Model Context Protocol is an open standard that enables AI Agents to interact with external tools, data, and services. MCP acts as a universal translator or connector for AI agents, making it easy for LLMs to communicate with any tool without custom integration, using a standard interface.

Consider this scenario: An AI agent needs to handle a user query like *“How is the weather in Mumbai? Can you help me plan a trip to Mumbai this weekend?”*

To answer this query, the agent must:

* Check weather forecasts
* Verify ticket availability
* Find hotel availability

**Without MCP:** The agent would require three separate tool integrations with custom logic for each system.

**With MCP:** The agent interacts with all three systems through a single, consistent interface, dramatically simplifying development and reducing complexity.


![Comparison](images/mcp/comparison.png "Comparison")


## MCP Key Features

The following key features make MCP a powerful solution for connecting AI models to external systems while maintaining security, consistency, and ease of development.

* Open Standard: Universal standardized protocol for AI and Tool integration.
* Simplified Development: The MCP client can communicate with all the available tools in the MCP server through the same interface.
* Scalable Architecture: Easy to add new tools to agents without custom integration.
* Universal Compatibility: Regardless of which MCP server is used, all compatible MCP clients communicate using a standardized protocol, ensuring seamless interoperability without additional adjustments.

## How MCP Works

MCP provides a standardized communication layer between AI agents and external tools. It follows a client-server architecture, where:

* **The MCP server** exposes specific capabilities through tools.
* **The host or MCP client** (in this case, the Platform) connects to the server, discovers available tools, and invokes them as part of agent interactions. The language model within the client or host application decides when to invoke the tools exposed by the server.
* **The MCP protocol** is the communication layer between these two components, defining how requests and responses are structured and exchanged.

![MCP At Play](images/mcp/mcp-atplay.png "MCP")


1. **LLM** sends requests through the MCP client.
2. **MCP Client** communicates with one or more MCP servers.
3. **MCP Servers** host tools that interact with external systems.
4. **Tools** retrieve information from databases, APIs, and other services.

This decoupling of the MCP server from the client allows for greater flexibility, scalability, modularity, and extensibility. 

## MCP Client–Server Interaction Workflow

1. **Tool Discovery**

    During MCP server configuration,  the MCP Client discovers the tools available on the MCP server. This is important for the application to learn the capabilities available on the server. These tools can then be assigned to the agents for dynamic decision-making.

2. **Intent Detection and Tool Invocation**

    When a user sends a query, the list of tools and the query are sent to the LLM for intent detection and tool invocation. The LLM identifies the tool to be used and forms a structured tool call. 

3. **MCP Client Sends Invocation to MCP Server**

    The MCP Client sends a structured request to the MCP Server with the tool name and required parameters.

4. **Execution**

    The MCP Server executes the tool logic and sends the results back to the MCP client. 

5. **Response Generation**

    The agent uses the tool’s output to formulate a natural language response for the user with the help of the LLM.

![MCP Workflow](images/mcp/mcp-workflow.png "MCP Workflow")



### **Example: Weather Check Agent via MCP Tools**



1. The MCP server sends a list of available tools to the client.
    Includes a tool like ‘getWeatherForecast’.
2. The user submits a query to the client.
  *"What's the weather like in Dubai today?"*
3. The MCP client forwards both the query and the list of tools to the LLM. 
4. The LLM selects the *getWeatherForecast* tool as the most suitable tool to answer the user's query. 
5. The MCP client sends the tool name, ‘*getWeatherForecast’,* and parameters like region *‘Dubai’* to the MCP server.
6. The tool in the MCP server calls the external weather API and returns the weather data to the MCP client.
   Example result: "36°C, Partly cloudy, Wind: 15 km/h" 
7. The MCP client sends the result back to the LLM.
8. The LLM generates a final natural language response.
 *"The weather in Dubai today is partly cloudy with a temperature of 36°C and light winds from the northwest."*

[Learn More.](https://docs.anthropic.com/en/docs/agents-and-tools/mcp){:target="_blank"} 

Agentic Apps enable seamless integration with the MCP server, allowing the apps to use the tools hosted by the MCP server. 

**Key Points:**

* The Platform supports only tool discovery and invocation from MCP servers. 
* Dynamic updates from the MCP server, such as changes to tool definitions or newly added tools, aren't automatically reflected in the Platform. Developers must manually reconfigure the MCP server and reselect the tools to apply updates. 
* The Platform supports both SSE-based and HTTP-based MCP server endpoint configurations.
