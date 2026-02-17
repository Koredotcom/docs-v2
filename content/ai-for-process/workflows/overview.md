# About Workflows

A workflow represents a structured, executable flow of tasks designed to automate a specific process. Each workflow follows a predefined sequence of steps and executes independently for each run, ensuring predictable, repeatable outcomes.

Workflows enable you to automate processes, orchestrate tasks, generate insights, and produce outputs such as deal summaries or emails. 

The platform provides a visual, no-code interface, the Workflow Builder, that allows you to design AI-powered workflows using nodes and transitions with minimal coding effort.


## Workflow Execution 

A workflow consists of nodes connected by transitions. During a workflow run, the platform maintains a runtime context shared across all nodes in that execution. After each node's execution, the context object is updated based on its state. 

Each workflow run executes independently based on the input provided at runtime and the defined flow. Workflows don't have a memory of their own. Workflows do not persist state or context across executions. After a run completes, the runtime context is discarded and unavailable to subsequent runs.


## Workflow Management

The platform offers features for end-to-end workflow implementation and maintenance.


### Build and Design

**Workflow Builder:** A visual no-code/low-code builder for creating and managing workflows and workflow versions. It uses nodes and transitions to automate end-to-end tasks without writing complex code. You can build workflows from [scratch](./create-a-workflow.md){target="_blank"} or [import existing ones](import-a-workflow.md){target="_blank"}.


### Configure and Manage

**Configurations:** Manage workflow metadata, define reusable values using environment variables, and control deployment of workflows. [Learn more](configure-a-workflow.md){:target="_blank"}.

### Collaborate and Control Access

**Sharing & Permissions**: Account owners can invite users to collaborate on specific workflows. Invited users can access the Models and Data modules for the invited account and see only the workflows to which they're invited.  [Learn more](./manage-user-roles-and-permissions.md).

### Deploy and Integrate

**Workflow Endpoint:** After building and testing a workflow, deploy it to generate a dedicated API endpoint. Use this endpoint to integrate the workflow with external applications and systems. [Learn more](deploy-a-workflow.md).

**API Keys:** Create API keys for deployed workflows to enable secure access from external systems. Share keys only with trusted users to maintain security. [Learn more](./create-a-new-api-key.md).

### Monitor and Optimize

**Workflow Monitor:** Track and analyze workflow executions across multiple runs. The monitor provides a time-based view of workflow activity, helping you identify issues and optimize performance. [Learn more](./monitoring/about-workflow-monitor.md).


### Govern and Audit

**Guardrails:** Apply guardrail models to scan LLM inputs and outputs, helping enforce safety, compliance, and content policies across workflows. [Learn more](guardrails/add-a-scanner.md){:target="_blank"}.

**Audit Logs:** View detailed audit logs for all workflow activities to support troubleshooting and ensure traceability with real-time event tracking. [Learn more](./workflow-audit-log.md){:target="_blank"}.