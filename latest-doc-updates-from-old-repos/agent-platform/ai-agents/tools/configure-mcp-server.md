# Configuring an MCP Server in an Agent

To integrate tools from an MCP server into an agent, follow these steps:

1. Navigate to the Tools section of the app and click on Add Tool. Click on +New Tool to configure a new MCP server and add tools. 
![Add Tool](images/mcp/home.png "Add tool")

2. Provide the MCP server configuration on the following page.![MCP Config](images/mcp/mcp-config.png "MCP Config")
    1. **Name**- Provide a unique name for the MCP server.
    2. **Description**- Provide a description of the capabilities/tools offered by the server. 
    3. **Namespace** - Choose the namespace that contains the variables to be shared with this MCP Server.
    4. **Request Definition** - Define how the platform sends a request to the MCP server to fetch available tools. Click Configure and provide the MCP server configuration details. ![MCP Config](images/mcp/mcp-config-type.png "MCP Config")
        1. Select the MCP server configuration type - HTTP or SSE. 
        2. URL: Endpoint that returns tool definitions.
        3. Auth Profiles: Select the authorization profile required to access the MCP server. If the MCP server doesn't require authentication, choose None. The selected profile is used to include the required authentication details when sending requests to the server. If the MCP server requires OAuth authentication, configure the OAuth settings in an Auth Profile and select that profile here. The platform will use the configured OAuth flow to obtain an access token and include it in requests sent to the MCP server.
        
        You can optionally configure request and response behavior using the following tabs:
        4. Headers:  Use this section to add header-based authentication or custom headers required by the MCP server. For example, to pass API keys, etc.
        5. Body: Define the request payload if the server requires additional parameters. 
3. Click the Test button to fetch tool metadata from the MCP server. The response from the server is shown in the Response tab.
4. Upon successful connection, the platform displays the list of all the tools offered by the MCP server. Select the required tools and click *Add Selected* to add the tools to the agent. 

## Tool Preview

The Tool Preview allows you to view, inspect, and test MCP tools configured for an application.

To access the Tool Preview:

1. Navigate to the Tools menu within the app.
2. Open the MCP tab to see all tools configured for the app, grouped by MCP server.
3. Click on any tool to view its details.

The preview displays the following information. 

1. Tool’s metadata  - Name and description of the tool.
2. Input parameters - The inputs field along with their data types.
3. Output Parameters - Output Parameters to define how the response returned by the external agent is processed and made available to the application. You can choose one of the following modes:

* **Use Complete Tool Output** - Select this option to return the entire response received from the tool as response. without modification. This is the default option. When enabled, you can choose to return the tool response in the artifacts field of the response payload of the Execute API using *Include Tool Response in Artifacts* field. This setting affects only the API response and doesn't change tool execution behavior, playground simulations, or other agent and tool functionalities.

* **Define Custom Parameters** - Select this option to extract specific values from the tool’s response and map them as structured outputs. It gives control over which parts of the response are passed to the agent or stored as artifacts. When this option is selected, you can configure one or more output parameters. Provide a name for the output parameter, select the data type of the output parameter and specify the path to the value in the response payload. 
    
You can click *+ Add* to define multiple output parameters if the response contains several values that need to be used by the agent.

Output Routing : Once the output is extracted, you can define how to use the value. 
        
   * Agent: Routes the extracted value to the agent so it can be used in subsequent processing.
   * Artifacts: Stores the extracted value in the artifacts section of the response payload. This allows the value to be accessed programmatically through the API response.

## Tool Naming Convention

By default, tools imported from an MCP server retain the original tool name exposed by the server when they're added to the Agentic app.

However, if a tool with the same name already exists, the system automatically prefixes the MCP server name to avoid naming conflicts and help identify the source.

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


## Refreshing the MCP server

If tools exposed by the MCP server are added, removed, or updated, you can refresh the MCP server configuration to synchronize the latest tool definitions. On refresh, the platform intelligently evaluates the changes and updates the configuration accordingly. Tool comparison is based on tool names. When refreshing or updating an MCP server configuration, the platform takes the following actions:

* Compares the latest tools returned by the server with the tools configured in the agent. 
* If all the MCP tools assigned to the agent exist on the MCP server, the update happens automatically without affecting the agent configuration.
* If any tools used by the agent are no longer available on the MCP server, the platform displays a message indicating the tools that are removed. Upon confirmation, the unavailable tools are automatically unlinked from the agent and the MCP server configuration is updated with the latest available tools.


Use the *refresh* icon to fetch updated content from the MCP server. 

![Refresh MCP](images/mcp/refresh.png "Refresh MCP")

## Reconfiguring the MCP server

You can modify an existing MCP server configuration if there are changes to the server details such as the server name, endpoint URL, or other configuration settings.

To edit the MCP server configuration:

* Navigate to the Tools section of the app.
* Locate the MCP server card you want to update.
* Click the More options menu in the top-right corner of the MCP server card.
* Select Edit Server.
* Update the required configuration fields.
* Click Save to apply the changes.

![MCP Config](images/mcp/edit-mcp.png "Modify MCP Config")

When key configuration values such as the server name or server URL are updated, the platform automatically retrieves the latest tool definitions from the MCP server and compares them with the tools configured in the app.

Based on this comparison, the platform performs one of the following actions:

* If all tools linked to the app are available on the MCP server, the update is applied automatically without affecting the existing tool configuration.
* If some tools used in the app are no longer available on the MCP server, the platform displays a message indicating the affected tools. On confirmation by the user, the affected tools are automatically unlinked from the app.

## Security Considerations

If the MCP server includes pre-authorized tools that access Personally Identifiable Information (PII), avoid sharing the Agentic app that uses those tools. Sharing the app could grant others access to sensitive data stored on the connected servers.

## FAQs

**What are MCP tools in the context of the Agent Platform?**

In the Platform, MCP Tools refer to the tools exposed by MCP servers.

**Can I manage multiple MCP servers within an Agentic App?**

Yes, an Agentic app can be configured to connect to one or more MCP servers, each exposing its own set of tools.

**Does the Platform automatically fetch the latest set of tools from the MCP server?**

The Platform doesn't automatically refresh or sync tools from the MCP server. If tools are added, removed, or updated on the server, manually reconfigure the MCP server to get the latest tool definitions.
