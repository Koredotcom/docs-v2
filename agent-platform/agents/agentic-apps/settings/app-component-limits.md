# App Component Limits

To optimize performance and manage resources effectively, the following limits apply to Agentic App components. Once a limit is reached, the system displays an error on the UI.

## App-Level Limits

The following limits apply to applications in your workspace:

| Component              | Limit | Description                                                                 |
|-----------------------------|-----------|---------------------------------------------------------------------------------|
| Apps per Workspace          | 1,000     | The maximum number of apps you can create in a workspace.|
| App Versions                | 20        | The maximum number of versions maintained per app.|
| App Sharing Recipients      | 100       | The maximum number of users or teams an app can be shared with.|
| Environments per App        | 5         | Available/defined environments in addition to Draft: for example, Development, Staging, UAT, Production, and Demo.|


## Agent-Level Limits

The following limits apply to agents within an application:

| Component               | Limit | Description                                                                                           |
|--------------------------|-------|-------------------------------------------------------------------------------------------------------|
| Agents per App           | 50    | The maximum number of agents per app.|
| Agent Versions           | 40    | The maximum number of versions maintained per agent.|
| Tools Assigned per Agent | 20    | The maximum number of tools, including Workflow Tools, Code Tools, MCP Tools, and Knowledge Tools, that can be linked to an individual agent.|

## Tool-Level Limits

The following limits apply to tools within an application:

| Component                | Limit | Description                                      |
|---------------------------|-------|--------------------------------------------------|
| Workflow Tools per App    | 50    | The maximum number of workflow tools in the app library.|
| Code Tools per App        | 50    | The maximum number of code tools in the app library.|
| MCP Servers per App       | 10    | The maximum number of MCP servers, regardless of the number of tools.|
| Knowledge Bases per App   | 20    | The maximum number of SearchAI knowledge base tools.|

## Code Tool Complexity Limits

The following limits apply to individual code tools:

| Component               | Limit    | Description                                                                 |
|--------------------------|----------|-----------------------------------------------------------------------------|
| Parameters per Code Tool | 20       | The maximum number of input parameters for a code tool. |
| JSON Object Hierarchy    | 5 levels | The maximum number of depth for JSON parameter objects. |

## Memory Store Limits

The following limits apply to memory stores within an application:

| Component              | Limit | Description                                               |
|-------------------------|-------|-----------------------------------------------------------|
| Memory Stores per App   | 15    | The maximum number of memory stores in an application (excluding SessionMeta). |

## Variables

The following limits apply to variables within an application:

| Component            | Limit | Description                              |
|-----------------------|-------|------------------------------------------|
| Content Variables     | 50    | The maximum number of content variables per app.       |
| Environment Variables | 50    | The maximum number of environment variables per app.   |
| Namespaces            | 20    | The maximum number of namespaces per app.    |

## API Scopes and Keys

The following limits apply to API configuration:

| Component   | Limit | Description                     |
|-------------|-------|---------------------------------|
| API Scopes  | 20    | The maximum number of API scopes per app.     |
| API Keys    | 40    | The maximum number of API keys per API scope. |

## PII and Guardrails

The following limit applies to PII (Personally Identifiable Information) patterns:

| Component    | Limit | Description                    |
|--------------|-------|--------------------------------|
| PII Patterns | 20    | The maximum number of PII patterns that can be configured for an app.  |