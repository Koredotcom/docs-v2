# MCP Agents

MCP Agents enable your AI agents to interact with external systems through tools hosted on MCP servers. By configuring MCP tools within your agents, you empower them to execute complex workflows spanning multiple external services through a standardized interface.
<img src="../images/mcp-agents-home.png" alt="mcp-agents-home" title="mcp-agents-home" style="border: 1px solid gray; zoom:70%;">

## How MCP Agents Work?

MCP Agents use the Model Context Protocol to discover, select, and invoke tools from connected MCP servers. This architecture separates tool hosting (MCP server) from tool usage ,providing flexibility and scalability.


### MCP Client-Server Interaction Workflow

The following workflow describes how MCP Agents interact with MCP servers to process user requests:

1. Tool Discovery: During MCP server configuration, the MCP Client discovers the tools available on the MCP server. This discovery process enables the application to learn the capabilities available on the server. You can then assign these tools to agents for dynamic decision-making.
2. Intent Detection and Tool Invocation: When a user sends a query, the system sends the list of tools and the query to the LLM for intent detection and tool invocation. The LLM identifies the tool to use and forms a structured tool call.
3. MCP Client Sends Invocation to MCP Server: The MCP Client sends a structured request to the MCP Server with the tool name and required parameters.
4. Execution: The MCP Server executes the tool logic and sends the results back to the MCP client.
5. Response Generation: The agent uses the tool's output to formulate a natural language response for the user with the help of the LLM.


## Creating an MCP Agent

You create MCP Agents to enable your AI agents to use tools from MCP servers. During agent creation, you select which MCP tools the agent can access and configure how the agent uses those tools.
<img src="../images/mcp-agents-creation.png" alt="mcp-agents-creation" title="mcp-agents-creation" style="border: 1px solid gray; zoom:70%;">

**To create an MCP Agent:**

1. Navigate to the **MCP Connections** section under your **Workspace**.
2. Click **Create Agent**.
3. Define your agent's details and purpose for optimal performance:
    * **Icon**: Choose from the predefined icon library or upload a custom icon.
    * **Agent Name**: Enter a unique and meaningful name for your agent.
    * **Purpose of Agent**: Define the intended functionality of the agent for query routing and training. This field specifies both the default prompt and sample queries that help the system correctly route user queries to the appropriate agent.
4. In the **Configure MCP** section, the platform displays all tools you have access from both workspace connections and account connections.
5. Select the specific tools you want the agent to use from the available connections.
6. Configure each tool's input parameters.
7. **Business Rules** (Optional): Set rules for entity selection and responses based on keywords. On detection of specific keywords, the rule fills entities in a query. Set rules to determine which entities to populate based on criteria. You have options to set either an Entity Rule or an Answering Rule.
8. Click **Save** and **Publish**.


## Configuring Tool Parameters

Each MCP tool requires specific input parameters to function correctly. You configure these parameters to control how the agent collects and uses data when invoking tools.

### Input Parameter Types

Agent Platform supports two types of input parameters:


#### Static Values

You manually enter static values during agent configuration. These values remain constant unless you modify the agent configuration.

When you configure static values, you can:

* **Show in End-User Form**: Make the input field visible to end users when they interact with the agent.
* **Set as Editable**: Allow end users to modify the value before the agent invokes the tool.
* **Set as Read-Only**: Display the value to end users but prevent them from changing it.

Static values work well for parameters that rarely change, such as API endpoints, default regions, or standard configuration settings.


#### Dynamic Values

The system handles dynamic values in two ways:

* **Extraction from Query**: The system extracts values from the user's query using entity extraction. The agent identifies relevant information from the user's natural language input and maps it to the required tool parameters.
* **Form Field Collection**: If the system can't extract a value from the query, it displays the field in the end-user form during the conversation to collect the value directly from the user.

Dynamic values facilitate conversational interactions, allowing users to provide information naturally. The agent intelligently extracts the necessary data to invoke tools or prompts users to supply missing information through an interactive form.


### Configuring a Tool

**To configure an MCP tool in your agent:**

1. During agent creation or editing, select the tool you want to configure.
2. The platform displays all input parameters the tool requires.
3. For each parameter:
    * **Group**: The logical grouping or category of the parameter.
    * **Field Name**: The unique identifier for the parameter.
    * **Description**: Information about the parameter's purpose and expected input.
    * **Field Type**: The system shows the expected data type (string, number, boolean, etc.).
    * **Required/Optional**: The platform indicates whether the parameter is mandatory.
    <img src="../images/mcp-agents-config.png" alt="mcp-agents-config" title="mcp-agents-config" style="border: 1px solid gray; zoom:70%;">

4. Choose the input type:
    * For **Static Values**:
        * Enter the value in the input field.
        * Select whether to show the field in the end-user form.
        * If shown, choose whether to make it editable or read-only.
    * For **Dynamic Values**:
        * Select **Extract from Query**.
        * The system uses entity extraction to identify the value from user input.
5. Save the tool configuration.

!!! note
    You can configure multiple tools from the same MCP connection or from different connections within a single agent.

### Enabling and Disabling Tools

You can control which tools remain active in your agent without removing them from the configuration.

**To enable or disable a tool**:

1. Navigate to the agent's tool configuration.
2. Locate the tool you want to modify.
3. Toggle the **Enable** switch.
    * **Enabled**: The agent can invoke the tool during interactions.
    * **Disabled**: The agent cannot use the tool, but the configuration remains saved.

This feature allows you to temporarily deactivate tools without losing your configuration settings.

## End-User Experience

When end users interact with an MCP Agent, the platform provides a guided experience that collects necessary input parameters and executes the requested actions.


### Form-Based Input Collection

When a user triggers an MCP agent, the platform follows this flow:

1. The system displays a form view showing the required input fields for the selected tool.
2. The platform matches data types in the form with data types the MCP server defines.
3. If the agent extracts values from the query through entity extraction, the system pre-fills those values in the form.
4. The **Continue** button remains disabled until the user completes all mandatory fields.
5. When the user clicks **Continue**, the agent executes the corresponding MCP action using the provided inputs.
6. The platform displays the results in a natural language response.


### Use-Case Example: Sending an Email through MCP Agent

Consider an agent configured with a Gmail tool from an MCP server:

1. The user asks: *"Send an email to `john@example.com` about tomorrow's meeting."*
2. The agent displays a form with:
    * **Recipient**: Pre-filled with `john@example.com` (extracted from query)
    * **Subject**: Empty field (mandatory)
    * **Body**: Empty field (mandatory)
3. The user fills in the subject and body fields.
4. The user clicks **Continue**.
5. The agent invokes the Gmail tool through the MCP server with all parameters.
6. The platform displays the result: *"I've sent the email to `john@example.com` successfully."*


## Managing MCP Agents

After you create an MCP Agent, you can modify its configuration, update tool selections, and manage its behavior.

### Editing an MCP Agent

To edit an MCP Agent:

1. Navigate to the **MCP Agents** section.
2. Select the agent you want to modify.
3. Click **Edit**.
<img src="../images/mcp-agents-manage.png" alt="Details and Purpose" title="Details and Purpose" style="border: 1px solid gray; zoom:70%;">

1. Update any of the following:
    * Agent name, description, or instructions
    * Tool selections from available MCP connections
    * Tool parameter configurations
    * Tool enable/disable status
2. Click **Save**.

The system applies changes immediately, and the updated configuration takes effect in the next user interaction.

### Adding Tools from Multiple Connections

You can configure an agent to use tools from multiple MCP connections, enabling complex workflows that span different external systems.

To add tools from multiple connections:

1. During agent creation or editing, click **Add MCP Tools**.
2. Select tools from your first MCP connection.
3. Click **Add MCP Tools** again.
4. Select tools from a different MCP connection.
5. Configure each tool's parameters independently.
6. Save the agent.

The agent can now invoke tools from both connections based on user queries and the LLM's intent detection.

### Handling Connection Updates

When you update an MCP connection by refreshing it to retrieve new tools or modified schemas, you must manually update your agents to use the new tool definitions.

To apply connection updates to your agent:

1. Refresh the MCP connection.
2. Navigate to the affected agent.
3. Click **Edit**.
4. Review the tool configurations for any changes.
5. Reselect or reconfigure tools as needed.
6. Save the agent.

!!! note
    The platform does not automatically update agents when MCP server definitions change. You must manually review and update agent configurations to ensure compatibility with the latest tool schemas.

 
