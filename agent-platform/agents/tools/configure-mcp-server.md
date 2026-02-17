# Configuring an MCP Server in an Agent

To integrate tools from an MCP server into an agent, follow these steps:

1. Navigate to the Tools section of the app and click on Add Tool. Click on +New Tool to configure a new MCP server and add tools. 
![Add Tool](images/mcp/home.png "Add tool")

2. Provide the MCP server configuration on the following page.![MCP Config](images/mcp/mcp-config.png "MCP Config")
    1. **Name**- Provide a unique name for the MCP server.
    2. **Description**- Provide a description of the capabilities/tools offered by the server. 
    3. **Request Definition** - Define how the platform sends a request to the MCP server to fetch available tools. Click Configure and provide the MCP server configuration details. ![MCP Config](images/mcp/mcp-config-type.png "MCP Config")
        1. Select the MCP server configuration type - HTTP or SSE. 
        2. URL: Endpoint that returns tool definitions.
        3. Headers:  Any required headers like Authorization tokens.

3. Click the Test button to fetch tool metadata from the MCP server. 
4. Upon successful connection, the platform displays the list of all the tools offered by the MCP server. Select the required tools and click *Add Selected* to add the tools to the agent. 

## Tool Preview

The Tool Preview allows you to view, inspect, and test MCP tools configured for an application.

To access the Tool Preview:

1. Navigate to the Tools menu within the app.
2. Open the MCP tab to see all tools configured for the app, grouped by MCP server.
3. Click on any tool to view its details.

The preview displays the tool’s metadata, including its description, input parameters, and sample responses. You can also enable the ‘**Include Tool Response in Artifacts**’ flag here. 

This flag is used to add the response of a tool in the `artifacts` field of the Execute API response payload. This allows programmatic access to individual tool outputs in the API response. Note that this setting affects only the API response payload. Tool execution behavior, playground simulations, and other agent or tool functionalities remain unchanged.


## Tool Naming Convention

To avoid naming conflicts and help identify the source, imported tool names are automatically **prefixed with the MCP server name**. 

Format: 
```
<MCP server name>__<Tool name as exposed by the server>
```

For instance, if the tool name is GMAIL_DELETE_DRAFT and the MCP server name is “GoogleMCP,” the tool name is presented as GoogleMCP__GMAIL_DELETE_DRAFT.

### Tool Testing

After the MCP server is configured, preview and test the tools to ensure they're functioning as expected. 

Testing the tools is essential as it helps validate their functionality, confirms the formats of requests and responses, identifies any issues, and  builds confidence in the tools’ reliability.

To test a tool, 

1. Open the tool in *Preview* mode.
2. Click on *Run Sample Execution*.
![Preview](images/mcp/tool-preview.png "Preview")

3. Enter sample values for the inputs and click *Execute* to initiate a request to the MCP server. 
![Test](images/mcp/test-mcp.png "Test MCP tool")
4. The request is sent to the MCP server, and the resulting output is displayed in the *Sample Response* section.


## Updating/Reconfiguring the MCP server

Whenever there are any updates to the tools hosted via the MCP server, reconfigure the MCP server in the Agentic App for the changes to reflect. 

Use the *refresh* icon to fetch updated content from the MCP server. 

![Refresh MCP](images/mcp/refresh.png "Refresh MCP")


To edit the MCP server configuration, select the More options menu in the top-right corner of the MCP server card, and then select Edit Server. Make the required changes and Save.

![MCP Config](images/mcp/edit-mcp.png "Modify MCP Config")

## Security Considerations

If the MCP server includes pre-authorized tools that access Personally Identifiable Information (PII), avoid sharing the Agentic app that uses those tools. Sharing the app could grant others access to sensitive data stored on the connected servers.

## FAQs

**What are MCP tools in the context of the Agent Platform?**

In the Platform, MCP Tools refer to the tools exposed by MCP servers.

**Can I manage multiple MCP servers within an Agentic App?**

Yes, an Agentic app can be configured to connect to one or more MCP servers, each exposing its own set of tools.

**Does the Platform automatically fetch the latest set of tools from the MCP server?**

The Platform doesn't automatically refresh or sync tools from the MCP server. If tools are added, removed, or updated on the server, manually reconfigure the MCP server to get the latest tool definitions.
