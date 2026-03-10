# About Workflow Tools

Workflow Tools enable you to automate processes, orchestrate workflows, and generate structured outputs using a visual, no-code or low-code approach. They're designed to help teams build reliable, reusable AI-powered automations without writing complex code.

Using the Workflow Tools, you can design workflows that integrate AI models, external systems, and business logic to produce desired outputs.

Workflow Tools allow you to:

* Automate multi-step processes using a visual flow builder.
* Combine AI features with deterministic business logic.
* Integrate with external systems (for example, APIs or cloud services).
* Generate structured outputs such as emails, summaries, or data responses.
* Reuse and customize tools across multiple Agentic Apps.

## Core Capabilities

**Visual Tool Flow Builder**

Design workflows using a node-based, drag-and-drop interface. Nodes and transitions define execution logic, enabling end-to-end automation without writing complex code. To build a flow, you can either [create a tool](./create-a-new-tool.md) from scratch, [import an existing tool](./import-a-tool.md), or [access prebuilt tool flows using the tool templates](../tools/tool-templates.md) available in the marketplace.

**Synchronous & Asynchronous Execution**

Workflow Tools support both synchronous and asynchronous execution modes. This makes them suitable for real-time actions that require immediate responses as well as long-running background tasks such as data processing, integrations, or multi-step workflows.

**Deployment & Tool Endpoints**

Once a tool is built and tested, it can be deployed. Deployment generates a public API endpoint that Agentic Apps or external systems can use to access the workflow. [Learn more](./deploy-a-tool.md).

**Security and Permissions**

Each deployed tool can be accessed using API keys. API keys enable secure access from external systems. Keys should be shared only with trusted consumers and can be revoked or rotated as needed. [Learn more](./create-a-new-api-key.md). 

Access to Workflow Tools is further governed through role-based permissions. Account owners can invite users to collaborate on specific Tools. Invited users can access the Models and Data modules for the invited account and see only the Tools to which they're invited. [Learn more](./manage-user-roles-and-permissions.md).


**Monitoring & Observability**

Workflow Tools include built-in observability features:

* Tool Monitor - View execution history, performance trends, and time-based activity.
* Audit Logs - Track tool changes, executions, and system events for troubleshooting and compliance.

[Learn more](./tool-monitor/about-tool-monitor.md).

**Guardrails**

Guardrails can be applied to Workflow Tools to enforce safety, policy, and compliance checks.

* Scan LLM inputs and outputs.
* Prevent unsafe or non-compliant responses.
* Apply consistent enforcement across workflows.

[Learn more](../../guardrails/enable-a-scanner.md).

**Configuration Management**

Each tool includes configuration options to:

* Manage general tool details.
* Define reusable values using environment variables.
* Deploy or undeploy tools safely.
[Learn more](./configure-a-tool.md).

## Tool Creation and Scope

Workflow Tools can be created in two different scopes, depending on whether they're intended for reuse or app-specific behavior.

### 1. Tools Library 

This includes the Tools created under the Tools Option on the console. These tools exist independently of any Agentic App. Once built and deployed, they function as a shared tools library, which serves as templates for the agentic apps. Learn more about [how to create and manage Workflow Tools](create-a-new-tool.md). 

### 2. App-Scoped Tools 

These include the Workflow Tools created directly within an Agentic App, which are scoped to that app only. When an existing tool is imported into the agentic app, it is also scoped to that app. This type of tool isn't shared across other apps.

This is ideal for app-specific logic or experimentation. Any updates made to app-scoped tools or imported tools apply only to the local copy and don't impact the corresponding tool in the library. 

!!! note "Access Control"
 
     Permissions for Workflow Tools are separate from Agentic Apps permissions. Users can view workflow tools associated with an app on the *App* > *Tools* page. However, to open the tool, view its flow, or perform edits, they must be assigned appropriate tool-level permissions by the tool owner. See [Roles and Permissions](../../settings/user-management/role-management.md).

#### Create a New Tool in App

When a new workflow tool is created within an app, it's accessible only to the app and isn't available in the Tool Library. 

#### Import an Existing Tool in App

To import an existing tool from the library, the tool must be deployed. When a deployed tool is imported into an Agentic App:

* A local copy of the tool is created inside the app.
* The local copy can be customized or extended, as required.
* Changes made in the app don't affect the original library tool.

#### PII Handling in Workflow Tools

Workflow Tools inherit the application’s PII protection capabilities, ensuring sensitive data is securely processed while preventing exposure in logs, traces, or model outputs. Before a Workflow Tool starts execution, input fields are automatically scanned for declared PII patterns in the application config. Inputs identified as PII are masked as configured and passed to the tool in redacted form. If the Workflow tools are granted access to the original value in the PII configuration, the tools can

* Securely unredact and use the PII internally for execution.
* Continue to display only masked values in monitoring, debugging logs, and execution traces.

!!!note
    PII handling applies only to workflow tools associated with agentic apps. Tools in the library operate independently and don't apply sensitization to PII inputs.

#### Accessing App Environment Variables in Workflow Tools

Environment variables defined at the application level can be accessed by workflow tools through namespaces. To make a variable available within a workflow tool, add the variable to a namespace and associate that namespace with the workflow tool. Once associated, all variables associated with the namespace can be referenced with the keyword:

`context.app.env.<variable-name>`

[Learn More](../agentic-apps/settings/variables.md).

#### Adding Tool Responses to the Artifacts

Go to the workflow tool in the app and open the Edit tool page. Enable *Include Tool Response in Artifacts* field. 

When this option is enabled, the tool’s response is added to the artifacts field in the Execute API response payload. This allows programmatic access to the tool output through the API response.

This setting only affects the API response structure. It doesn't impact tool execution behavior, playground simulations, or other agent and tool functionalities.