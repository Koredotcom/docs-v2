# AI for Process Release Notes

This document provides information on the feature updates and enhancements introduced in the recent AI for Process releases.

## v1.0.9 February 24, 2026

<u> Minor Release </u>

This release introduces enhancements to AI-powered browser automation, workflow features, and general platform improvements. Key updates include the new Delay node, workflow caching, and browser automation enhancements such as configurable auto-healing, model connection updates, expanded model support, hardware upgrades, and improved audit logging.

<font size="4">Workflows</font>

**Delay Node for Workflows**

A new Delay Node allows users to pause workflow execution at specific steps. Users can configure the node name and define a timeout value, either static or variable-based, between 30 and 86,400 seconds. Workflow changes will be visible in debugging and monitoring tools.

**Workflow Cache Management**

Workflows now support a built-in cache for storing and retrieving values across steps or runs. Users can read and write cache data in Script nodes, use values in template-supported fields, choose account-level or workflow-level scope, and set custom TTLs. Draft and published runs maintain separate cache data.

**Browser Automation Enhancements:**

* **Configurable Auto-Healing**

Users can now control LLM-based auto-healing through a dedicated toggle in the Browser node configuration. Auto-healing is no longer enabled by default for new workflows, while existing workflows keep it enabled for backward compatibility.

* **Model Connection Configuration**

Users can now update the connection used by a model within a browser node after the automation is published. While the model itself cannot be changed, the associated connection can be switched to address issues such as expired API keys or rate limits.

* **Import and Export Enhancements**

Browser automation nodes are now included in workflow exports. Imports do not apply auto-mapping, so components must match between environments. Before exporting, users should verify that all required components — such as models, linked workflows, custom scripts and functions, integrations, triggers, agentic apps, OCR models, and automations — exist in the target environment. 


<font size="4">Models</font>

**Expanded Model Support for Browser Automation**

Browser automation now supports a wider set of LLMs across OpenAI, Anthropic, and Google. These additions give users more flexibility and access to the latest model capabilities. Supported models include: 

OpenAI:

* gpt-4o
* gpt-4o-mini
* gpt-4.1
* gpt-5

Anthropic:

* claude-sonnet-4-20250514
* claude-sonnet-4-5-20250929
* claude-haiku-4-5-20251001 

Google (Gemini):

* gemini-2.0-flash
* gemini-2.5-pro
* gemini-2.5-flash
* gemini-2.5-flash-lite


<font size="4">Settings</font>

**Browser Automation Enhancements:**

* **Browser Automation Playground Locking**

The Browser Automation playground now prevents conflicting edits by allowing only one active editor at a time. When a user is editing an automation, all other users enter view-only mode, where editing, running instructions, updating models, saving drafts, and publishing are disabled. The playground unlocks when the active user leaves or after one hour of inactivity.

* **Enhanced Hardware Options**

Users can now select larger hardware configurations to improve performance and increase parallel streaming capacity. In addition to the existing 4 vGPU / 16 GB option, an 8 vGPU / 32 GB configuration is now available. The platform also displays updated streaming limits based on the selected hardware, with credit consumption adjusted automatically.

* **Expanded Overview Details for Published Automations**

The Overview page for published automations now displays detailed configuration information. Users can view key automation parameters, including system prompt, max steps, recording status, auto-healing state, Go to URL value, and file-upload settings, for improved transparency.

* **Audit Log Enhancements**

Audit logs now capture additional account-level and workflow-level events related to browser automation, improving visibility into user actions and automation behavior across the platform.


## v1.0.7 January 24, 2026

<u> Minor Release </u>

This release includes a new AI-powered browser automation feature and general improvements across the platform. The new feature is summarized below.

**New AI-Powered Browser Automation**

AI for Process now supports human-like interactions with websites, converting plain-language goals into automated tasks such as clicks, typing, navigation, and validations. The platform securely handles authentication, dynamic content, and errors, enabling end-to-end process automation across web-only and legacy systems.

Key Capabilities:

* Instruction Generation & Simulation: Turn plain-language goals into step-by-step browser actions.
* Reusable Automation Nodes: Secure, reusable workflow steps with retries, timeouts, and visual validation.
* Automation Deployment: Safely promote workflows with versioning, approvals, validation checks, and rollback.
* Secure & Auditable: Detailed logs, replay visibility, and credential management ensure reliability and compliance.


<hr>

## v1.0.6 December 12, 2025

<u> Minor Release </u>

This release includes new features, enhancements, and general improvements across the platform. The key updates are listed below.

**Doc Intelligence Node Enhancements**

The enhanced Doc Intelligence node makes document processing more transparent, reliable, and easier to manage at scale.

* Processing progress visibility: Users can now view real-time document processing progress in both the node output and Workflow Monitor.
* Audit log support: Doc Intelligence–related events are now captured in Audit Logs, making it easier to review activity and improve traceability across workflows.
* Workflow portability: Doc Intelligence configurations are fully preserved during workflow import and export, including node settings, engine configuration, file URLs, and context variables, with automatic connection mapping.
* Simplified language configuration: English is selected by default during deployment, with support for selecting one additional language to reduce configuration complexity.
* Deployment history for OCR models: A new Deployment History tab provides visibility into past and current deployments, including version details, status, configuration, and lifecycle information.

<hr>



## v1.0.5 December 2, 2025

<u> Minor Release </u>

This release includes new features, enhancements, and general improvements across the platform. The key updates are listed below.

**Improved Monitoring Experience in Workflows**

The Monitoring section now includes dedicated pages for Triggers and Workflow runs, making it easier to track trigger configurations and workflow executions.

The Triggers page shows structured information about trigger configurations and execution behavior:

* Event-based triggers show provider, trigger name, description, setup time, and last run.
* Schedule-based triggers show frequency, start/end times, time zone, setup time, last run, and next run.
* Multiple cron configurations are numbered for easy identification.
* Inactive triggers display an error message with the next steps.

The Workflow Monitor page provides visibility into workflow runs:

* Each trigger activation receives a unique run ID.
* Run status is clearly displayed as Success, Failure, In Progress, or Waiting.
* Trigger type (event-based, schedule-based, or API-based) and source shown for each run.

<hr>

## v1.0.4 November 24, 2025

<u> Minor Release </u>

This update includes new features and enhancements summarized below.

**OCR Usage & Billing Analytics**

Users can now track OCR credit consumption across the workspace with dedicated billing insights. This provides better visibility into document-processing costs and helps teams monitor usage more accurately.

Key capabilities:

* OCR credits in Billing Overview: View total OCR usage for any date range alongside other credit categories.
* OCR included in Usage breakdown chart: Understand how much OCR contributes to the overall consumption.
* New OCR tab under Billing → Usage: View detailed OCR deployment usage, including credits used and status.

<hr>

## v1.0.3 November 13, 2025

<u> Minor Release </u>

This update includes new features and enhancements summarized below.

**New Doc Intelligence Node to Automate Document Processing**

The Doc Intelligence Node enables automated document processing directly within your workflows. It supports multiple AI engines, dynamic file inputs, and asynchronous execution for seamless automation. By automatically extracting text, layout, and structured data, it reduces manual effort, accelerates processing, and ensures consistent, accurate information for downstream tasks.

Key Capabilities:

* Supports Docling, OpenAI, Anthropic, and Azure Document Intelligence document-processing engines.
* Accepts static URLs or workflow context variables as file input.
* Runs asynchronously to avoid blocking workflows.
* Extracts structured data for downstream automation.
* Provides engine-specific configuration options for precise control.

**Centralized OCR Models Management for Docling and Azure**

The new Manage OCR Models page provides a central location to configure and maintain document-processing engines for your workflows. The page enables users to deploy, update, and manage Docling and Azure Document Intelligence models, ensuring they are ready for use in the Doc Intelligence node.

Key Capabilities:

* Deploy new Docling models with custom languages and resource allocation.
* Manage multiple deployments and model connections.
* Add and manage Azure Document Intelligence connections using API keys.
* Enable, disable, or remove OCR models and connections directly from the list.

## v1.0.2 November 7, 2025

<u> Minor Release </u>

This update includes a new feature summarized below.

**New Agentic Node**

AI for Process introduces the Agentic App Node, enabling workflows to invoke and interact with Agentic Apps created on the Agent Platform within the same workspace. This feature promotes the reuse of existing Agentic App capabilities and streamlines collaboration for more efficient task execution.

<hr>

## v1.0.1 October 14, 2025

<u> Minor Release </u>

This update includes new features, enhancements, and bug fixes summarized below.


**Inactivity Alerts for Deployed Workflow Triggers**

AI for Process introduces configurable triggers in the Start node to execute event and schedule specific actions in a workflow. This enables seamless integration with third-party applications, supporting diverse use cases and improving automation outcomes.

Users are notified with a warning when a trigger in a deployed workflow becomes inactive. This helps quickly identify and resolve issues that interrupt workflow execution.

To restore an inactive trigger:

* [Re-deploy the workflow](../workflows/deploy-a-workflow.md#redeploy-a-workflow-for-the-changes-in-the-flow), or
* [Re-test the associated Auth profile](../settings/security-and-control/authorization-profile.md#test-the-auth-profile)

Note: Alerts appear only for deployed workflows with inactive automation.

**Attachment URL Access in Workflows**

Workflows now support consuming file attachment contents via secure URLs, enabling richer automation and broader use cases. This allows users to work with various attachment types, such as images, documents, and videos, to enhance workflow outputs and manage more complex scenarios.

Key enhancements

* Support for multiple attachment formats.
* Secure, authorized URL access.
* Original file names preserved for easy identification.

Note: Currently supports processing one attachment at a time.

**Enhanced Human-in-the-Loop (HITL) Path Handling**

Workflows now accurately route HITL outcomes through their designated paths — On Approval, On Decline, On Timeout, and On Failure. Users can configure each path to ensure proper handling of approvals, rejections, timeouts, and errors, providing better control and visibility in HITL automation.

**Workflow Import/Export Enhancements**

Import and export now preserve complete configurations for Human, Start, and Integration nodes, with automatic connection mapping for smoother environment migrations.

* Human Node: Retains configuration settings, including reviewer and message details.
* Start Node: Preserves trigger definitions and linked integrations.
* Integration Node: Maintains action configurations and connection mappings.
