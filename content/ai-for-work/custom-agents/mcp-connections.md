# MCP Connections

The Model Context Protocol (MCP) is an open standard that enables AI Agents to interact with external tools, data, and services. MCP acts as a universal translator or connector for AI agents, making it easy for LLMs to communicate with any tool without custom integration, using a standard interface.

**Without MCP**: The agent would require three separate tool integrations with custom logic for each system.

**With MCP**: The agent interacts with all three systems through a single, consistent interface, dramatically simplifying development and reducing complexity.


## MCP Key Features

The following key features make MCP a powerful solution for connecting AI models to external systems while maintaining security, consistency, and ease of development.

* **Open Standard**: Universal standardized protocol for AI and Tool integration.
* **Simplified Development**: The MCP client can communicate with all the available tools in the MCP server through the same interface.
* **Scalable Architecture**: Easy to add new tools to agents without custom integration.
* **Universal Compatibility**: Regardless of which MCP server is used, all compatible MCP clients communicate using a standardized protocol, ensuring seamless interoperability without additional adjustments.


## Connection Levels

The platform supports two levels of MCP connections that determine the scope and accessibility of tools across your organization.

### Workspace-Level Connections

Workspace-level connections provide isolated access to MCP tools within a specific workspace:

* You can create connections with MCP servers that are accessible only within a specific workspace.
* The platform makes connections available to all agents within that specific workspace.
* These connections remain private to the workspace. The system does not make them visible or accessible outside of it.
<img src="../images/mcp-connections-home.png" alt="mcp-agents-creation" title="mcp-agents-creation" style="border: 1px solid gray; zoom:70%;">

### Account-Level Connections

Account-level connections provide broad access to MCP tools across your entire organization:

* You can create MCP connections at the account level under the **Connections** section in the **Account Hub**.
* The platform makes these connections accessible across all workspaces, including personal workspaces.
* When you view account-level connections from within a workspace:
    * The system displays them but prevents editing.
    * The platform hides authentication profiles and URLs for security.
<img src="../images/mcp-connections-account-level.png" alt="mcp-agents-creation" title="mcp-agents-creation" style="border: 1px solid gray; zoom:70%;">

## Creating an MCP Connection

You create MCP connections to establish communication between Platform and external MCP servers, enabling your agents to access tools hosted on those servers.

To create an MCP connection:

1. Navigate to the **Connections** section in your workspace or account view.
2. Click **Create MCP Connection**.
3. Enter the following details:
    * **Name**: Provide a descriptive name for the connection.
    * **Description**: Add details about the connection's purpose and the tools it provides.
    * **MCP URL**: Enter the endpoint URL of the MCP server.
    * **Authentication Profile**: Select or configure the authentication method required by the MCP server.
    * **Custom Headers** (optional): Add any custom headers required for server communication. 
  <img src="../images/mcp-connections-create.png" alt="mcp-agents-creation" title="mcp-agents-creation" style="border: 1px solid gray; zoom:70%;">

1. Click **Save Changes**.

The system validates the connection, contacts the MCP server, and retrieves the available tools. The platform displays each tool with its input and output schema for your review.

Key Points:

* The platform supports both SSE-based and HTTP-based MCP server endpoint configurations.
* The system performs real-time validation to ensure the MCP server responds correctly before saving the connection.


## Managing MCP Connections

After you create an MCP connection, you can manage and maintain it to ensure your agents have access to the latest tools and configurations.


### Refreshing a Connection

MCP servers may update their available tools or modify tool definitions over time. You must manually refresh connections to retrieve these updates.

To refresh an MCP connection:

1. Navigate to the **Connections** section.
2. Locate the MCP connection you want to update.
3. Click **Refresh**.

The system contacts the MCP server, fetches the updated list of tools, and displays any changes to tool schemas or added tools.

!!! note
    The Platform does not automatically reflect dynamic updates from the MCP server. You must manually reconfigure the MCP connection and reselect tools in your agents to apply updates.

### Viewing Tool Details

When you view an MCP connection, the platform displays:

* **Tool Name**: The identifier for each available tool.
* **Description**: Details about what the tool does.
* **Input**: The parameters the tool requires, including data types and whether fields are mandatory.
* **Output**: The structure of data the tool returns.

<img src="../images/mcp-connections-tools.png" alt="mcp-agents-creation" title="mcp-agents-creation" style="border: 1px solid gray; zoom:70%;">

This information helps you understand tool capabilities and configure them correctly in your agents.

### Editing a Connection

You can modify connection details to update server endpoints, authentication credentials, or custom headers.

To edit an MCP connection:

1. Navigate to the **Connections** section.
2. Select the connection you want to modify.
3. Click **Edit**.
4. Update the necessary fields.
5. Click **Save**.

The system validates the updated configuration and retrieves the current tool list from the server.

!!! note
    You cannot edit account-level connections from the workspace view. You must access them from the account-level Connections section.

### Deleting a Connection

When you delete an MCP connection, the system removes access to all tools from that server.

To delete an MCP connection:

1. Navigate to the **Connections** section.
2. Locate the connection you want to remove.
3. Click **Delete**.
4. Confirm the deletion.

!!! note
    Deleting a connection affects all agents that use tools from that MCP server. The platform disables those tools in the affected agents.

