# Agent Platform Release Notes

This document provides information on the feature updates and enhancements introduced in the recent Agent Platform releases.

## v1.6.0 January 31, 2026

<u> Minor Release </u>

This release empowers you to build more sophisticated, secure, and flexible AI solutions. Key updates include an expanded agent-creation workflow and AI-assisted prompt refinement. Security enhancements give workspace administrators granular control over tool logs and improve access management. The developer experience is significantly enhanced with support for environment variables in workflow tools, improved access control for security, native integration with Google Vertex AI-hosted Gemini models, and the addition of over 40 new models from Google and OpenAI.

<font size="4">Multi-Agent Orchestration</font>

**Enhanced Agent Creation Flow**

Agent creation now supports three paths: building agents from scratch, importing pre-built agents from the Marketplace, or adding externally deployed agents for orchestration. Each path provides a tailored setup flow with agent-specific configurations. This streamlines agent onboarding with guided experiences and eliminates the previous two-step enablement process across apps and agent profiles. 

[Learn more :octicons-arrow-right-24:](../ai-agents/create-agent.md)


**AI-Assisted Prompt Refinement**

The prompt editor now includes AI-assisted refinement, enabling users to easily improve and optimize prompts directly within the editor. This feature reduces iteration cycles and improves prompt accuracy through clearer, more effective definitions, making prompt writing faster and easier.

**Note**: This feature is in preview and can be enabled upon request.

<!--**Enhanced Security for Session Logs**

The Secure Logs feature gives workspace admins granular control over access to detailed session logs and sensitive conversation data. When enabled, developers cannot view detailed logs unless administrators explicitly grant them access. Admins can configure access at the role level or apply restrictions across the entire enterprise workspace, ensuring sensitive customer interactions and debugging data remain visible only to authorized personnel. 

This feature applies only to environment-level logs, such as production and UAT, not to logs in draft versions during development.
-->

<font size="4">No-code & Pro-Code Tools</font>

**Enhanced Access Control for Tool Logs**

Tool-level role management has been enhanced with separate permissions for tool log visibility, allowing administrators to control access to the tool log list and detailed execution logs independently. These permissions support three access levels - detailed access, view-only, and no access, providing finer control over log.

**Environment Variable for Workflow Tools in Agentic Apps**

Workflow Tools created within or scoped to Agentic Apps can now use environment variables defined at the app level. Access is managed through namespaces—when you attach a namespace to a tool, all environment variables within that namespace become available for use.

Workflow Tools created outside an Agentic App and not linked to any app cannot access namespaces or app-level environment variables.

[Learn more :octicons-arrow-right-24:](../ai-agents/tools/workflow-tools.md#accessing-app-environment-variables-in-workflow-tools)

<font size="4">AI Engineering Tools</font>

**Vertex AI Model Integration**

Agent Platform now offers secure connections to Google Vertex AI-hosted Gemini models (2.5 and 3.0 families). You can configure connections manually or via cURL import with automated credential extraction for both AI Studio and Vertex AI formats. A guided setup includes built-in validation, connection testing, and error handling. The platform stores all credentials securely using encryption. This integration works across Agentic Apps, Workflow Tools, and Prompts.

[Learn more :octicons-arrow-right-24:](../models/external-models/add-an-external-model-using-easy-integration.md#integrate-a-model-from-vertex-ai)

**Expanded Model Support**

The Agent Platform now supports additional AI models, giving users greater flexibility in selecting the right model for their use case.

New models include:

* **Google**: gemini-3-pro-preview, gemini-3-pro-image-preview, gemini-3-flash-preview, gemini-2.5-flash-native-audio-preview-12-2025, gemini-2.5-flash-native-audio-preview-09-2025, gemini-2.5-flash-preview-09-2025, gemini-2.5-flash-lite-preview-09-2025, gemini-2.5-flash-lite, and gemini-2.5-flash-image.
* **OpenAI**: gpt-realtime-mini-2025-10-06, gpt-audio-mini-2025-10-06, gpt-audio-2025-08-28, gpt-realtime-2025-08-28, gpt-4o-audio-preview-2025-06-03, gpt-4o-realtime-preview-2025-06-03, o3-2025-04-16, o4-mini-2025-04-16, gpt-4o-search-preview-2025-03-11, o3-mini-2025-01-31, gpt-4o-realtime-preview-2024-12-17, gpt-4o-mini-audio-preview-2024-12-17, gpt-4o-audio-preview-2024-12-17, o1-2024-12-17, gpt-4o-2024-11-20, gpt-4o-2024-08-06, gpt-4o-mini-2024-07-18, gpt-4o-2024-05-13, gpt-4-turbo-2024-04-09, gpt-4.1-nano, gpt-4.1-mini, gpt-4.1, gpt-4-turbo, gpt-3.5-turbo-0125, gpt-4o-mini-transcribe, gpt-4o-mini-audio-preview, gpt-4o-audio-preview, gpt-4o-realtime-preview, gpt-audio-mini, gpt-audio, gpt-image-1-mini, gpt-image-1, gpt-realtime-mini, gpt-realtime, o4-mini, o3, and o1.

[Learn more :octicons-arrow-right-24:](../models/supported-models.md)

<hr>

## v1.5.0 January 17, 2026

<u> Minor Release </u>

This release empowers you to build more sophisticated, secure, and flexible AI solutions. You can now improve voice interactions with direct real-time integration for single-agent apps,  create better user experiences with customizable waiting messages while agents process requests, and maintain tighter security controls with configurable session log settings.
Access tool outputs directly through Artifacts for custom client-side experiences and expand deployment options with open-source LLM support for agentic applications. Additional improvements include enhanced PII handling in workflows, improved selection of context variables, and configurable default user roles for streamlined team onboarding.

<font size="4">Multi-Agent Orchestration</font>

**Direct Real-Time Voice Integration for Single-Agent Apps**

The Single Agent Orchestration Pattern now supports real-time models, which significantly reduce response latency when your agentic app contains only one agent. The platform now automatically bypasses the supervisor routing layer and connects users directly to the agent, eliminating unnecessary orchestration overhead. This improvement is especially beneficial for voice interactions with real-time models where speed is critical, and it works automatically without requiring any configuration changes.

[Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/orchestrator.md#single-agent-configuration)

**Customizable Waiting Messages**

The Waiting Experience feature enhances voice interactions by streaming natural filler messages during processing delays, reducing perceived latency and ensuring smoother conversations. This feature is now publicly available and includes a customizable prompt editor for creating AI-generated dynamic waiting messages. This feature is supported only in ASR/TTS mode (not available for real-time models).

[Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/settings/app-configurations.md#waiting-experience)

**Tool Output Artifacts in Response Payload**

You can now configure tools to include their outputs as artifacts in the final response payload. This new capability allows you to capture specific tool execution results and make them available under the ‘artifacts’ key in the response, enabling downstream channels and applications to access structured data for custom processing, display logic, or integration workflows. Artifact inclusion is configurable at the individual tool level, giving you precise control over which tool outputs are exposed in the response.

[Learn more :octicons-arrow-right-24:](../apis/agentic-apps/execute.md)

<font size="4">No-code & Pro-Code Tools</font>

**PII Handling for Workflow Tools**

The Agent Platform extends existing PII handling to Workflow Tools, ensuring sensitive data is securely processed while preventing exposure in logs, traces, or model outputs. Before a Workflow Tool starts execution, input fields are automatically scanned for declared PII patterns. Inputs identified as PII are masked as configured and passed to the tool in redacted form. If the Workflow tools are granted access to the original value in the PII configuration:

* The tool can securely unredact and use the PII internally for execution.
* All monitoring, debugging logs, and execution traces continue to display only masked values.

[Learn more :octicons-arrow-right-24:](../ai-agents/tools/workflow-tools.md#2-app-scoped-tools)

**Improved Context Variable Selection in the Flow Builder**

Selecting context variables is now faster and more intuitive. When users type `{{` in any field that supports context variables, a dynamic dropdown appears showing all available variables grouped by node, including environment variables defined at the workflow-tool level. This eliminates the hassle of manually entering the full path. [Learn more :octicons-arrow-right-24:](../ai-agents/context-object.md#using-the-context-object)

*Coming Soon:* Support for selecting and referencing agentic app-level environment variables in Workflow Tools is currently in progress and will be available in an upcoming release.


<font size="4">AI Engineering Tools</font>

**Expanded Model Support**

The Agent Platform now supports additional AI models, giving users greater flexibility in selecting the right model for their use case.

New models include:

* OpenAI Models: gpt-5.2-chat-latest, gpt-5.2-2025-12-11, gpt-5.2, gpt-5.1-chat-latest, gpt-5.1-2025-11-13, and gpt-5.1.
* Anthropic: claude-haiku-4-5-20251001, claude-sonnet-4-5-20250929, and claude-opus-4-5-20251101

[Learn more :octicons-arrow-right-24:](../models/supported-models.md)

**Open-Source Model Support for Agentic Apps**

Agentic apps now support open-source models, offering flexible, cost-effective alternatives for building AI agents. You can use the following models directly within your agentic applications:

* meta-llama/Llama-3.1-8B-Instruct
* meta-llama/Llama-3.2-1B-Instruct
* meta-llama/Llama-3.2-3B-Instruct
* mistralai/Mistral-7B-Instruct-v0.3
* mistralai/Mistral-Nemo-Instruct-2407
* XiaomiMiMo/MiMo-VL-7B-RL

These models offer diverse capabilities across different sizes and specializations, letting you optimize for performance, cost, or specific use cases while maintaining full access to platform orchestration, tools, and knowledge features. [Learn more :octicons-arrow-right-24:](../models/supported-models.md)


<font size="4">Other Improvements</font>

**Ability to Configure Default Role for New Users**

Workspace admins can now set a default role for new Platform users added via email, AD sync, or API in *Users Management → Settings*. This streamlines onboarding by assigning the correct permissions immediately, eliminating the need for manual role updates after provisioning. 

This setting applies only to new users. For existing users, change roles in *Users Management → Users*.


<hr>

## v1.4.0 December 6, 2025

<u> Minor Release </u>

This release enhances multi-agent orchestration with a unified Orchestrator interface, direct tool invocation via Agent Protocol, and Content Variables for centralized data management.

<font size="4">Multi-Agent Orchestration</font>

**Unified Orchestration Management**

The platform now supports creating Agentic Apps with a single AI Agent, making it easy to deploy use cases that do not require sophisticated multi-agent orchestration. The Adaptive Network Pattern is now generally available for all users. The new Behavioral Guidelines let you centrally manage safety, branding, and other instructions. Along with these updates, a dedicated Orchestrator section makes it easy to switch between the patterns. [Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/orchestrator.md)


**Direct Tool Invocation via Agent Protocol**

Agent Protocol now supports direct invocation of tools (workflow, code, and MCP tools) while maintaining full access to application context, including memory and environment variables. This enhancement enables developers to execute specific tools programmatically when they know exactly what action is needed, bypassing agent reasoning for faster, more cost-effective, and deterministic execution. [Learn more :octicons-arrow-right-24:](../apis/agentic-apps/execute.md)

**Introducing Content Variables**

Content Variables provide a centralized way for users to declare data used throughout the application—such as user profiles, customer IDs, and employee IDs. This data becomes automatically accessible to all components, including supervisor prompts, agent definitions, tools, events, and knowledge. It helps streamline context management during execution and eliminates the need for manual configuration. [Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/settings/content.md)

<font size="4">AI Engineering Tools</font>

**External Model Connection APIs**

The platform now provides External Connection APIs that enable programmatic management of model connections in addition to the existing UI. These APIs support viewing existing connections, creating new connections for both easy and custom integrations, and rotating keys for supported providers. 
Two new API scopes, View connections and Manage connections, have been added, offering more granular permission control for accessing and updating external model connections. [Learn more :octicons-arrow-right-24:](../apis/apis-list/connections-api.md)

**New Model Support**

The OpenAI gpt-4o-search-preview model is now supported in Prompts and Workflow tools. The model is optimized for search and RAG workflows, and features multi-chunk document retrieval and grounded response generation. [Learn more :octicons-arrow-right-24:](../models/supported-models.md#supported-external-models-for-easy-integration)

<hr>

## v1.3.1 November 21, 2025

<u> Minor Release </u>

This release enables you to expedite your AI agent deployments by running evals at scale with AI-powered simulations that use personas and scenarios. Other key features in this release include global availability of guardrails without the need to deploy per-workspace preprocessors to effectively manage the agent's context, and global PII redaction with selective unmasking support.

<font size="4">Multi-Agent Orchestration</font>

**Environment Variables & Namespace Support**

Environment Variables with namespace support enable secure, reusable, and environment-specific configuration management across the application. Developers can centrally define and manage variables and access them seamlessly in Code Tools. These variables are automatically resolved at runtime, eliminating the need to hardcode sensitive information such as API keys, endpoints, and tokens. This enhancement simplifies multi-environment deployments and ensures consistent, dynamic configuration across all environments.

[Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/settings/variables.md)

**Pre-Processor for Agent Execution**

Agent Platform introduces a new Pre-Processor capability that allows developers to transform and validate agent context before each execution. This enhancement enables custom logic to run before each agent invocation, allowing it to process incoming data, enrich context, and adjust agent inputs as required. The Pre-Processor supports user-defined scripts in JavaScript and Python.

**Note**: This feature is currently in preview and can be enabled upon request.

**API Key Permissions and Access Control**

Agent Platform now supports granular permission controls for API keys, allowing precise definition of each key's capabilities. Users can create app-level keys scoped to specific permissions to create, manage, or delete sessions, upload or delete files, and execute agent runs. Existing API keys maintain full backward compatibility.

[Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/api-keys.md)

**Agent Invocation Error Handling**

Agent Platform introduces a new error-handling framework that provides configurable timeouts, retry logic, fallback models, and recovery actions for model invocation failures. These enhancements ensure a predictable handling of failures, and improved user experience during model outages.

[Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/settings/app-configurations.md#error-handling)


<font size="4">AI Engineering Tools</font>

**Agentic Evaluation: Introducing Simulations for Agentic Apps**

Evaluation Studio now supports Simulations, enabling teams to generate realistic mock interaction sessions before deploying agentic apps to production. The feature helps validate agent behavior early, detect issues quickly, and assess quality across diverse conditions. Simulation sessions can be reviewed directly and imported into Evaluations, just like production data.

Key capabilities

* Reusable Personas: Create personas representing different communication styles and behaviors.
* Test Scenarios: Define scenarios to simulate specific tasks, intents, and edge cases.
* Mock Conversations: Generate realistic conversations (using personas and test scenarios) based on the agentic app's current configuration.
* Transcript Review: Review transcripts to validate agent behavior and reliability before your agentic app goes live.

[Learn more :octicons-arrow-right-24:](../evaluation/agentic-evaluation/create-simulation.md)



**Gemini Format Support in External Model Integrations**

Custom external model integrations now support the Gemini request–response format, in addition to OpenAI Completions and Anthropic Messages. When configuring external models, users can select Google (Gemini) as the provider, with automatic request routing and response parsing for Gemini-formatted requests handled by the Model Hub.

<font size="4">AI Safety, Security, and Governance</font>

**New PII Protection Framework**

Agent Platform introduces a comprehensive PII Protection Framework designed to safeguard sensitive information across the platform. The framework uses regex-based detection to identify sensitive data and automatically applies configured actions - redaction, masking, or replacement. Sensitive content is protected across users, agents, tools, and system logs, as configured, ensuring it's never exposed in traces or debug logs and providing end-to-end protection of sensitive data. Developers can selectively unmask and use original values in tools when needed.

[Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/settings/guardrails.md)

**Guardrails Now Available by Default for Built-in AI Safety**

System input and output scanners are now automatically deployed and available by default without consuming credits. Users can review, test, and enable them without manual deployment, ensuring safer, more compliant AI responses. 

[Learn more :octicons-arrow-right-24:](../guardrails/overview.md)

<hr>


## v1.3.0 November 3, 2025

<u> Minor Release </u>

This update includes filler messages for improved voice experiences, BYOK encryption key support, and AWS Bedrock integration enhancements.

<font size="4">Multi-Agent Orchestration</font>

**Waiting Experience**

Agent Platform now introduces a new feature that keeps users engaged during voice interactions when the AI Agent needs additional processing time, using configurable filler messages to update them on the current state.

These messages can be configured in two ways:

* Static messages: Pre-written responses for consistent communication.
* Dynamic messages: AI-generated responses tailored to the conversation context.

Customize timing, message frequency, and content to maintain a smooth conversational flow.

**Note**: 
* This feature is currently in preview and can be enabled upon request.
* This feature only works in ASR/TTS streaming mode.

[Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/settings/app-configurations.md#waiting-experience)

<font size="4">AI Safety, Security, and Governance</font>

**Bring Your Own Key Encryption for Public Cloud SaaS Deployments**

Agent Platform has introduced Bring Your Own Keys (BYOK) encryption for public cloud SaaS deployments, enabling enterprises to secure their data while retaining full control and management of their encryption keys. This feature seamlessly integrates with enterprise Key Management Systems (Azure Key Vault and AWS Key Management Service) to help meet compliance and security needs.

[Learn more :octicons-arrow-right-24:](../settings/security-and-control/encryption-key-management.md#bring-your-own-key)

<font size="4">AI Engineering Tools</font>

**AWS Bedrock Integration: Predefined API Mapping for Models**

Users can now easily integrate with AWS Bedrock by selecting a provider schema — Anthropic (messages) or OpenAI (chat completion). The platform automatically maps model requests and responses to the chosen format, simplifying configuration and ensuring API compatibility.

<hr>

## v1.2.0 September 27, 2025

<u> Minor Release </u>

​​This update includes a new knowledge base test tool for real-time validation, rolling context windows for better conversation management, and support for the latest GPT-5 family and other leading AI models. Additional improvements include streamlined workflow testing, custom model integration, and structured output support for open-source models.

<font size="4">Multi-Agent Orchestration</font>

**Introducing Knowledge Base Test Tool**

The new test feature at the app level allows users to enter queries directly and receive real-time responses from connected Search AI sources within the knowledge base. This enables quick validation and optimization of knowledge base content before deployment.

[Learn more :octicons-arrow-right-24:](../ai-agents/knowledge/manage-knowledge-tools.md#test-the-knowledge-base)

**Enhanced Context Management**

The Agent Platform now provides enhanced context handling for conversations with rolling context windows. Configure the number of recent messages to use as conversation context by setting a message count limit. When this limit is reached, the oldest messages are automatically removed to make room for new ones. This prevents context overflow and keeps conversations focused on relevant, up-to-date information.

[Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/app-profile.md)


<font size="4">No-code & Pro-Code Tools</font>

**Improved Workflow Tool Testing Experience**

The Platform now provides a unified interface for testing workflow tools directly within Agentic Apps. Users can view tool details, input parameters, and execute tools within a single, streamlined workflow. The interface includes sample execution capabilities and displays results in a standardized output format.

[Learn more :octicons-arrow-right-24:](../ai-agents/create-from-scratch.md#testing-a-tool)


<font size="4">AI Engineering Tools</font>

**Custom Model Support**

The Platform now supports seamless integration of custom models in Agentic Apps and Agents through API endpoints. To ensure compatibility, custom models must support tool calling and adhere to the request and response structures as per the API reference of Anthropic or OpenAI.  Custom model integrations with Default model settings are currently not supported in Agentic Apps. The platform provides standardized API integration, performance monitoring, and security controls to ensure consistent and secure usage.

[Learn more :octicons-arrow-right-24:](../models/supported-models.md#custom-model-support-in-agentic-apps)


**Structured Output Support for Open-Source Models**

Open-source models now support structured JSON output through the response_format parameter, aligned with OpenAI’s schema style. This enables schema-based responses across Prompts and Tools.

* Supported on the v2/chat/completions endpoint (default for new deployments).
* Works with most open-source models (see the documentation for the full [list of supported models](../models/supported-models.md#supported-models-for-structured-output).
* Not supported for fine-tuned models, Hugging Face imports, CT2-optimized models, or locally imported models.
* The schema editor automatically appears in AI nodes when a supported model is selected.

[Learn more :octicons-arrow-right-24:](../models/supported-models.md#supported-models-for-structured-output)


**Expanded Model Support**

The Agent Platform now supports additional AI models, providing greater flexibility for various use cases. These models include comprehensive platform integration with System Prompts, Tool Calling, Prompt Studio, Evaluation Studio, Tools, Parallel Tool Calling, Model Analytics, Audit Logs, Model Traces, Agentic Apps, and Image-to-Text Support.

* OpenAI Models GPT-5 Family: gpt-5-2025-08-07, gpt-5-mini-2025-08-07, gpt-5-nano-2025-08-07, and gpt-5-chat-latest
* Anthropic Model: claude-opus-4-1-20250805

   [Learn more :octicons-arrow-right-24:](../models/supported-models.md) 

<hr>

## v1.0.11 September 9, 2025

<u> Minor Release </u>

This release focuses on reliability and control, introducing Agent Diagnostics for pre-deployment issue resolution, new workflow tools like a Human Review node, data type validation for scripts, support for Gemini 2.5 and Llama models, improved debugging, and enhanced API integration.

<font size="4">Multi-Agent Orchestration</font>

**Introducing Agent Diagnostics**

Agent Diagnostics is a comprehensive validation framework that proactively validates your AI application before deployment, automatically checking for configuration errors and operational risks to prevent production failures. It provides detailed, actionable reports with direct navigation to problem areas. All diagnostic runs are recorded in Audit Logs for complete traceability. <br>
[Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/diagnostics-for-agent-platform.md)

**Enhanced Debug Logs with Actionable Insights**

Debugging is now more intuitive with enhanced execution logs. The refreshed interface provides detailed, actionable status messages across agents, tools, and supervisors. New features include Guardrails execution logging, auto expanded current traces, and improved navigation via session and trace IDs for a clearer view of the execution flow. <br>
[Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/app-testing.md#playground-interface-components)

**Enhanced Document Management in Playground**

The enhanced interface offers a smoother and more intuitive way to manage conversation attachments. The new ‘Manage’ panel features ‘In Context’ and ‘Removed’ tabs, clearly organizing documents by status, with visual indicators showing actively used files. This streamlined approach enhances user control and awareness of document usage, making it easier to track and manage attachments. <br>
[Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/app-testing.md)

<font size="4">No-code & Pro-Code Tools</font>

**New Human Node for Workflow Approvals**

The new Human review node enables human-in-the-loop workflows by pausing execution to collect user input or approvals, with custom input fields and automatic branching based on responses, timeouts, or failures. This ensures that critical decisions are validated by humans while maintaining workflow continuity and automatically managing exceptions.

Key benefits

* Improve Accuracy: Ensure critical decisions are validated by a person.
* Maintain Flow: Automatically manage interruptions and exceptions without breaking the workflow.
* Gain Control: Design the exact review process your business rules require. <br>

[Learn more :octicons-arrow-right-24:](../ai-agents/tools/tool-flows/types-of-nodes/human-node.md)


**Data Type Validation for Custom Scripts in the Function Node**

The Function node now supports data type selection and validation for Custom Function arguments. Users can define each argument as Text, Number, Boolean, or JSON, instead of the default String. During execution, the system validates that mapped values or variables match the defined type and throws a clear error if a mismatch occurs, preventing runtime failures. <br>
[Learn more :octicons-arrow-right-24:](../ai-agents/tools/tool-flows/types-of-nodes/function-node.md#add-and-configure-a-function-node)


<font size="4">AI Engineering Tools</font>

**Expanded Model Support**

This update introduces support for the following new AI models, providing greater flexibility for multimodal use cases and tool calling:

* Text-to-Text tasks handling and node support for open-source models:
    * Meta-llama/Llama-Guard-4-12B
    * Meta-llama/Llama-3.2-11B-Vision-Instruct 
* Audio-to-Text, Image-to-Text, and Text-to-Text nodes support for external models and Tool calling:
    * Gemini 2.5 Pro
    * Gemini 2.5 Flash 
* Real-time models for voice conversations in Agentic Apps
    * gemini-live-2.5-flash-preview
    * gemini-2.0-flash-live-001 <br>

[Learn more :octicons-arrow-right-24:](../models/supported-models.md)

**Enhanced Custom API Integration for External Models**

Custom API integration for external models now offers automatic provider format mapping (Anthropic, OpenAI) with improved error messaging, simplifying request/response configuration. Admins can also explicitly select supported features from a predefined list, making integration more robust and error-resistant. <br>
[Learn more :octicons-arrow-right-24:](../models/external-models/add-an-external-model-using-api-integration.md#add-an-external-model)

**Tool Calling Support for Open-Source Models**

All open-source and fine-tuned model API endpoints are now upgraded to the OpenAI Chat Completions format. Both the new chat completions endpoint and the existing endpoint are currently available to ensure backward compatibility. The existing endpoint will be deprecated soon, so users are encouraged to transition to the new format. Hugging Face models are excluded from this update.

The following models are now enabled for tool calling, allowing them to integrate with tools and return richer, more efficient responses:

* meta-llama/Llama-3.1-8B-Instruct
* meta-llama/Llama-3.2-1B-Instruct
* meta-llama/Llama-3.2-3B-Instruct
* mistralai/Mistral-7B-Instruct-v0.3
* mistralai/Mistral-Nemo-Instruct-2407


**Model Deployment Status in Model Hub**

The Model Hub landing page now provides an updated overview of model deployment statuses, including counts for active, failed, and ready-to-deploy models. <br>
[Learn more :octicons-arrow-right-24:](../models/open-source-models/open-source-summary.md)


**Enhanced Configuration Options for Realtime Models**

The platform now supports additional voice parameters for real-time models from Google Gemini and Ultravox, enabling more nuanced and personalized voice experiences. 

<font size="4">Other Improvement</font>

**Enhanced User Invitation UI for Admins**

The Settings console now features an improved multi-row form for user invitations. Admins can add or delete rows to invite multiple users simultaneously, assign system or custom roles to each user, and track total invites with an auto-updating counter. <br>
[Learn more :octicons-arrow-right-24:](../settings/user-management/invite-a-user.md)

<hr>

## v1.0.10 August 13, 2025

<u> Minor Release </u>

These updates focus on providing greater flexibility in model deployment, improved security controls, and enhanced monitoring capabilities across the platform.

<font size="4">Multi-Agent Orchestration</font>

**Agent Protocol Enhancements**

Significant enhancements have been made to the Agent Protocol, with a focus on improving security, optimizing memory management, and streamlining file upload workflows.

Key enhancements:

* Authentication Token Support for Async Operations: The platform now supports authentication tokens for callback URLs in asynchronous executions. When the callback URL is invoked, the configured token is included in the request headers, securing communication with external systems. [Learn more :octicons-arrow-right-24:](../apis/agentic-apps/execute.md)

* Document Upload Configuration in Create Session API: The Create Session API now returns upload configuration details, including the maximum file size, the allowed number of files, supported formats, and other relevant constraints. These details enable proactive validation, reducing failed uploads and improving user experience. [Learn more :octicons-arrow-right-24:](../apis/agentic-apps/sessions.md)


<font size="4">AI Engineering Tools</font>

**Single Model, Multiple Deployments**

The Agent Platform now allows multiple deployments and connections to be configured for a single model. Previously, only one API key was supported per model-provider combination. Now, multiple API keys can be configured for the same model, offering improved flexibility, better usage tracking, and enhanced control.

Across the platform, users can select their desired connection or deployment directly without being tied to a specific model. This means agents and supervisors can use different connections for various tasks, ensuring requests are routed to the appropriate endpoints based on their purpose.

Configuration options:

* Commercial models: Create multiple connections for the same model, each with its own API key/security token, and track usage separately per connection. [Learn more :octicons-arrow-right-24:](../models/external-models/managing-external-models.md)
* Fine-tuned and open-source models: Run multiple deployments of the same model to improve inference control, manage costs, and optimize performance. [Learn more :octicons-arrow-right-24:](../models/fine-tune-models/managing-fine-tuned-models.md)

Key benefits:

* Manage multiple connections or deployments for greater flexibility and control.
* Select the right model connection or deployment at runtime for different tasks or environments.

**Expanded Model Support**

This update introduces support for a new set of AI models in the Agent Platform, providing greater flexibility in selecting the suitable model for a specific use case. The newer models include:

* Agents and Supervisors
    * OpenAI -  o3-mini
    * Anthropic - claude-sonnet-4-20250514, claude-opus-4-20250514
    * Google - gemini-2.5-flash
    * Azure OpenAI - GPT-4.1, GPT-4.1-Nano, GPT-4.1-Mini, O1, O1-Mini, O3-Mini

* Text to Image Node (External models)
    * OpenAI - DALL·E 2 and DALL·E 3

* Open-source Model
    * Xiaomi Mimo-7B--VL-RL

[Learn more :octicons-arrow-right-24:](../models/supported-models.md)

**Structured Output Support for Anthropic Models**

Users can now use Anthropic models to generate structured output in the Tool builder.

**Agent Memory Access in Function Node**

Agent Memory stores can now be accessed via the function node in the workflow tools, removing the previous limitation that memory could only be accessed in the code tools. This enables the workflow tools to retrieve and update memory content. This enhancement allows for more dynamic and state-aware automation and processing. 


<font size="4">Observability</font>

**Enhanced Tracking & Billing for Multiple Model Deployments**

The platform now provides advanced filtering and usage tracking in the Settings console for multiple deployments of the same model.

Key improvements:

* Model Analytics & Traces: Filter and view data by deployment name & version (open-source/fine-tuned) or connection name (external). [Learn more :octicons-arrow-right-24:](../settings/monitoring/analytics/model-analytics-dashboard.md#model-performance-filters)
* Audit Logs: Model Added/Deleted events now display the relevant deployment or connection name. [Learn more :octicons-arrow-right-24:](../settings/monitoring/audit-logs.md#account-level-audit-logs)
* Billing & Usage: The drill-down view in the Usage page’s Models tab displays the *deployment name*, *type*, *credits used*, *last updated date,* and *status* for a model. Totals of all the deployments roll up to show model-level consumption, with deployment-level data reflected in *fine-tuning*, *hosting*, and *storage* metrics. [Learn more :octicons-arrow-right-24:](../settings/billing/billing-and-usage.md#models-usage)


<font size="4">Other Improvements</font>

* **Enhanced Data Security with Customer-Managed Keys on Azure:** For Azure cloud private deployments, the platform now supports Customer-Managed Key (CMK) encryption, allowing you to control your own encryption keys for all transaction data. This enhancement strengthens compliance, enhances data privacy, and provides full ownership of encryption management. The feature can be activated via environment-level configuration and requires MongoDB Atlas (not available for self-managed MongoDB).
* **Angular Upgrade**: Upgraded Angular from v17 to v20 across the platform to enhance performance, scalability, and long-term maintainability.
* **UX Enhancements**: UI refinements across the platform to improve the overall user experience, along with bug fixes and performance improvements.

 
<hr>



## v1.0.9 July 23, 2025

<u> Minor Release </u>

This update includes new features, enhancements, and bug fixes summarized below.

<font size="4">Multi-Agent Orchestration</font>

**Enhanced Support for Large Documents in Conversations**

Document upload limits have been increased to support more detailed and context-rich conversations.

* The file size limit has been increased to a maximum of 25MB.
* The max token limit for document content has been increased to 800,000 tokens.

[Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/settings/app-configurations.md)


**Automatic Restoration of MCP Server Configuration on App Restore**

Restoring an App version now includes the associated MCP Server configuration, eliminating inconsistencies and reducing manual effort. This enhancement ensures that tool connections and prompt contexts function as intended initially after a version rollback. This reduces manual intervention and the risk of misalignment after app restore.

[Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/deployment/app-deployment.md)


**Enhanced External Agent Integration**

The Agent Platform now offers enhanced flexibility and performance for integrating with external agents.

* Flexible Response Routing: Directly stream external agent responses to users for faster interactions, or route through the orchestrator for complex orchestration needs.
* Contextual Metadata Passthrough: Pass structured contextual metadata with agent requests for seamless context continuity, improved personalization, and smoother system integration.

[Learn more :octicons-arrow-right-24:](../ai-agents/external-agents.md)

**System-Defined Parameters in Events**

System Events, such as End of Conversation and Agent Handoff, now support defining parameters that do not rely on LLM for their values but use information already available with the system. These parameters can have static values or dynamic values derived from session context or memory. This is particularly useful for handling organizational or user-specific information that remains constant across sessions, or for sensitive information that should be hidden from the conversational layer.
[Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/settings/events.md)


**Playground Enhancements**

The Playground now supports voice input, allowing users to interact with agentic applications using speech. This enhancement improves accessibility and user convenience while preserving the platform’s text-based response model.

[Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/app-testing.md)


**Support for Metadata Injection from AI for Service Platform**

Developers can now leverage enhanced integration with the AI for Service platform by passing metadata, such as channel information or user data, into the Agentic App. This metadata is made available within agent prompts and tools, enabling more contextual and dynamic interactions.

[Learn more :octicons-arrow-right-24:](../ai-agents/ai-for-service.md)


<font size="4">No-code & Pro-code Tools</font>

**Introducing the 'Loop’ Node for Workflow Tools**

The Loop node is a new workflow component that enables automatic iteration through arrays within your workflows. This powerful node allows you to define a sequence of steps that will repeatedly execute for each item within the input array. This functionality is ideal for various tasks such as processing multiple invoices, transforming batch data, or sending notifications to multiple recipients. Simply drop a loop node onto your canvas, configure it with your input array, and define the steps that should execute for each item.

Key highlights:

* Seamless integration and intuitive design:
    * Easily accessible from the bottom tray, assets tray, or plus (+) icon.
* Flexible configuration and smart error handling:
    * Supports input arrays via context variables.
    * Customize how outputs are collected from each iteration of the loop.
    * Choose from built-in error-handling options to control how failures are managed:
        * Continue on Error: Skip over failed iteration and continue looping.
        * Remove failed results: Continue processing and exclude failed results from the final output array.
        * Terminate execution: Break out of the loop immediately.
* Smart path configuration: Separate "On Success" and "On Error" paths for robust logic.

**Note:**

1. The Loop node is currently available within the Tool Builder. Support for displaying related data in other parts of the product, including Monitoring, Analytics, and Import/Export, will be added in upcoming releases.
2. A restriction was added in v1.0.7 on backward connections, preventing loops from being created. (Please see the section under parallel connections in the release notes) This restriction is no longer relevant as customers can now create loops natively.

[Learn more :octicons-arrow-right-24:](../ai-agents/tools/tool-flows/types-of-nodes/loop-node.md)

**Enhanced Parameter Configuration for Code Tools**

Code tools now offer improved parameter configuration, supporting both default values and enumerated (list of values) inputs. These enhancements simplify tool execution, reduce repetitive inputs, and ensure better control over data validations.

Key highlights:

* Enable default values for parameters to streamline tool usage and maintain consistency.
* Define restricted value sets using enum parameters for dropdown-style input selection.
* Apply type-specific validation to ensure data accuracy.

[Learn more :octicons-arrow-right-24:](../ai-agents/tools/create-a-code-tool.md)

**Custom Script Functionality Extended Across All Agent Platform Tools**

The Agent Platform now fully supports custom scripts across all modules.

Key highlights:

* Audit Logging: Full tracking of custom script activities, including *Write Code* and *Custom Function* executions via the Function node.
* Import Tool: Automated population of Function node configurations and validation of script deployments.
* Share Tool: Preserves Function node configurations when sharing with other users.
* Tools Monitor Dashboard: Displays complete execution data and logging information for custom scripts.
* Validation Errors: The system now flags missing or undeployed scripts.


<font size="4">Observability</font>

**Introducing Real-Time Usage Analytics Dashboard**

The Usage Analytics Dashboard provides real-time visibility into platform activity and performance. The dashboard enables teams to understand adoption better, optimize resource utilization, and identify potential bottlenecks.

Key highlights:

* Real-time metrics on users, sessions, messages, tokens, and runs or executions. 
* Interactive visualizations with trend analysis and drill-down views.
* List views for detailed component-level insights.
* Filters data by date range for a specific set of analysis.

[Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/analytics-dashboard.md)

**Export All Runs and Logs Data**

Admins can now export and download All Runs and Logs from the Monitoring Custom Scripts dashboard as a <code><em>.csv</em></code> file, following the schema and file-naming conventions defined in the Agent Platform. [Learn more :octicons-arrow-right-24:](../settings/monitoring/monitoring-custom-scripts.md#export-runs-and-logs-data)

 
<hr>


## v1.0.8 July 7, 2025

<u> Minor Release </u>

This update includes new features, enhancements, and bug fixes summarized below.

<font size="4">Multi-Agent Orchestration</font>

**Simplified App Creation Process**

The Agent Platform has simplified the app creation process, making it faster and more user-friendly. Users can set up apps with fewer configurations upfront that capture only the essential information. This enhancement reduces the setup time and improves the overall onboarding experience. [Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/create-app.md)


**Updates to Agent Protocol**

The Agent Platform now supports a **Universal Session Closure** API for consistent and reliable session management. It enables seamless session termination across integrations, addressing issues such as orphaned sessions and incomplete closures and ensuring a unified approach to managing session lifecycle. [Learn more :octicons-arrow-right-24:](../apis/agentic-apps/sessions.md)


**Enhanced Document Upload Feature**

The Document Upload feature has been enhanced to provide a smoother and more intuitive experience for sharing files in conversations. Users now benefit from more explicit error messages, a visual loading indicator during uploads, and better enforcement of upload restrictions.

* Single File Upload Enforcement: The platform now allows only one file upload at a time, removing multi-file selection to align with one-at-a-time processing logic.
* Improved error handling: Users receive clear, actionable messages in the chat interface when uploads fail due to issues such as the document exceeding the configured token limit or the file type not being supported.

[Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/attachment-support.md)


**Enhanced Import Feature**

The Import/Export interface for Agentic Apps now lists all components involved in the app and clearly distinguishes between agent-linked and unlinked components. The interface uses visual indicators, including color-coded badges for tool types and proxy agent markers, to improve clarity and navigation. Additionally, upfront validation ensures smoother and more accurate imports, preventing configuration issues. [Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/import.md)


**User Interface Enhancements**

The Agentic App UI has been improved for better usability and visual appeal. Updates include a new list view for the Memory page, randomized icons and colors for agents and tools, and enhanced workspace identifiers in the landing page, making navigation and collaboration more intuitive for the users.

<font size="4">No-code and Pro-code Tools</font>

**Expanded Debug Panel View**

The Debug Log panel in the Tool Flow builder now supports a fully expanded view. Users can view all nodes aligned on the left and click on each node to inspect inputs, outputs, and metrics side by side. Linked tool calls are also visible for easier debugging and traceability.

<font size="4">AI Engineering Tools</font>

**Expanded Model Support**

Support for a broader range of models has been added, offering greater flexibility in building and evaluating AI workflows. The models are supported in Agentic Apps, Prompt Studio, Tools, and Evaluation Studio.

* Azure OpenAI models: Added support for `GPT-4.1`, `GPT-4.1-Mini`, and `GPT-4.5 preview`.
* Gemini 2.0 and 2.5 models: Added support for `gemini-2.0-flash`, `gemini-2.0-flash-lite`, and `gemini-2.5-flash-preview-05-20`. 
* Anthropic Claude 4 models: Added support for `claude-sonnet-4-20250514` and `claude-opus-4-20250514`. 

[Learn more :octicons-arrow-right-24:](../models/supported-models.md)


<font size="4">Observability</font>

**Monitoring Custom Scripts Across Runs and Logs**

The Monitoring module now allows administrators to track custom script executions across deployments (endpoints), Function nodes, and API nodes. The **All Runs** section shows performance metrics (response times, failure rates) and execution details, while the **Logs** section provides runtime debugging information. Administrators can filter by date, search for runs or logs, and copy IDs to identify and resolve script issues efficiently. [Learn more :octicons-arrow-right-24:](../settings/monitoring/monitoring-custom-scripts.md)


<font size="4">Bug Fix</font>

**Vulnerability Fixes in Flow Service**

Addressed multiple security vulnerabilities for risks such as RCE, authentication bypass, DoS, and XML signature verification issues. 

<hr>

## v1.0.7 June 20, 2025

<u> Minor Release </u>

This update includes new features, enhancements, and bug fixes summarized below.

<font size="4">Multi-Agent Orchestration</font>

**Preferred Agent Support**

The Agent Platform now supports direct agent invocation through the new Preferred Agent capability in the Agent Protocol. External systems consuming Apps or agents can now call specific agents directly, bypassing the supervisor routing layer for improved performance. 

[Learn more :octicons-arrow-right-24:](../apis/agentic-apps/execute.md)


**Import/Export Enhancements**

The import/export feature now supports MCP server configurations and Memory Stores. This enhancement enables users to include these elements during import and export, simplifying migrations and reducing manual work for more comprehensive deployments across various environments.
[Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/export.md)


**Typeahead Support for Memory Access**

The Agent Platform now includes type-ahead functionality across Code Tools and prompt editors, providing developers with contextual suggestions while they write. This enhancement streamlines variable referencing and reduces common development errors.


**Improved User Interface**

The Agentic App interface has been redesigned for consistent, informative listings, displaying essential information upfront to reduce navigation. Enhancements include streamlined Agent, Tools, and Knowledge listings, as well as improved App Profile and Configuration pages.

The Simulate feature has been transformed into Playground with enhanced debugging and testing capabilities, including chat history management and the ability to resume previous sessions. The new interface offers improved usability, featuring easy message copying and clear agent identification during thought streaming.


<font size="4">No-code and Pro-code Tools</font>

**Parallel Execution in Workflow Builder**

The Agent Platform now supports parallel execution within the workflow builder. You can create and trigger multiple branches simultaneously in a single flow — a major upgrade alongside traditional sequential execution.

Key benefits

* Improved Performance: Run branches concurrently to reduce total execution time.
* Faster Workflows: Significantly lowers overall runtime.
* Simplified Design: Ideal for independent tasks like multi-channel actions or parallel data operations.
* Easier Debugging: Outputs are grouped by branch in logs for clear visibility and troubleshooting.

Note: Backward connections are no longer supported in the workflow builder. Existing deployed workflows will continue to run as they are. New workflows cannot include backward connections. Exporting and re-importing workflows with such connections will cause execution failures.

[Learn more :octicons-arrow-right-24:](../ai-agents/tools/tool-flows/manage-flow-nodes.md)

**Revamped Code Tools Design**

The Code Tools design page has been redesigned to streamline development workflows and improve productivity. The updated interface offers a more intuitive experience, featuring enhanced parameter support and an optimized layout for faster iteration.

Key improvements

* Object parameter type: Accept structured JSON input alongside existing string and number types.
* Side-by-side layout: View parameters, code editor, and output simultaneously without scrolling.
* Enhanced usability: Streamlined interface reduces context switching and accelerates development cycles.

[Learn more :octicons-arrow-right-24:](../ai-agents/tools/create-a-code-tool.md)

**MCP Tool Execution and Validation**

The Agent Platform now enables direct testing of MCP tools during the design phase. Previously, developers could only view MCP tool definitions and had to wait for complete agent execution to test functionality. This enhancement allows immediate tool validation with sample data once the MCP servers are configured.

Key features

* Direct tool execution: Test individual MCP tools immediately after configuration without creating full agents.
* Dynamic input forms: Provide sample data through automatically generated parameter forms.
* Real-time results: View execution output instantly.

[Learn more :octicons-arrow-right-24:](../ai-agents/tools/configure-mcp-server.md)

<font size="4">AI Engineering Tools</font>

**AWS Bedrock Models Integration**

Agent Platform now offers secure connections to Amazon Bedrock-hosted models. This integration uses role-based authentication via IAM Role ARN, Model ARN, and custom endpoints. A guided setup form simplifies configuration with built-in validation and testing. The Platform seamlessly manages credential refreshing by assuming an AWS role and fetching temporary credentials through STS to reliably invoke the Bedrock models.

Key benefits

* Direct access to AWS Bedrock models via a secure, customer-managed setup.
* Built-in validation, testing, and draft-saving for seamless configuration.
* Automated credential management ensures secure and uninterrupted access to models.

[Learn more :octicons-arrow-right-24:](../models/external-models/add-an-external-model-using-easy-integration.md#integrate-a-model-from-amazon-bedrock)



**Pre-authorize Integration using Basic Auth**

Agent Platform now supports Basic Authentication for pre-authorizing third-party integrations. Admins need to set up the connection once using the *API Key* and *Secret*. After that, users don’t need to re-authenticate unless the connection expires.

Key benefits

* Easy to implement using a secure API Key and Secret.
* User-agnostic - It doesn’t maintain sessions or track user identity. Each request is treated independently.
* The same credentials remain valid until the connection expires, eliminating the need for re-authentication.


**Export Evaluation Tables to CSV**

Evaluation Studio now supports CSV export for evaluation tables from the three-dot menu, preserving all column data, scores, and footer metrics (e.g., pass%, fail%, avg, min, max).


<font size="4">Other Improvements</font>

**Display Account ID for an Account**

The *Account ID* is now visible in the usage summary section, making it easy to share with the support team for debugging or adding credits.


**Usage Trend and Credits Calculation for Guardrails and Custom Scripts**

The Agent Platform now shows usage data for Guardrails and Custom Scripts under Billing Usage. Admins can view module-wise credit allocation, usage, and balance using pie charts, line graphs, and other key metrics. Usage trends across linked accounts help track credit usage, negative balances, limits, and billing adjustments for the selected period.


**Added Instructions for Structured Output**

To improve usability, sample JSON schema instructions for structured output are now visible in the AI nodes and Prompt Studio. Users can now view the expected format directly in the UI pop-ups, making prompt creation easier and more consistent.


**Execute Function Node Using Custom Code or Script Function**

The Function node now allows admins to configure and execute custom functions using the following two methods:

* Write Code: Admins can utilize the integrated code editor to write and run either static or dynamic code, with immediate access to output and logs.
* Custom Function: Admins can select a particular function from an already deployed script or an imported project. This option offers several capabilities:
    * Dynamic configuration and execution of input parameters through context objects.
    * Mapping of selected function's input arguments to static or dynamic values.
    * The ability to add or remove input arguments as needed.
    * Testing of script and function configurations with varied input values.
    * Execution of the script as part of the tool's automation workflow, generating a debug log that includes custom function specifics like script name, function name, and tool parameters.

Note: By default, all arguments passed to the function are currently sent as '*string*'. If your function requires other data types, please handle the necessary conversions within your custom script. Support for input type validation and native data types will be available soon.

<hr>

## v1.0.6 June 5, 2025

<u> Minor Release </u>

This update includes new features, enhancements, and bug fixes summarized below.

<font size="4">Multi-Agent Orchestration</font>

**Memory Stores for Contextual Interactions with Read/Write support via Code Tools**

Agent Platform now supports persistent **Memory Stores** to retain contextual data, enabling more personalized and intelligent agent interactions. These stores can be directly accessed within prompts and programmatically managed via code tools to support dynamic, stateful behavior. The memory stores can be used to maintain user preferences, conversation history, or custom data.

Key benefits

* Stateful Interactions: Maintain and update contextual data to ensure accurate and consistent information.
* Personalized Experiences: Store user-specific data to tailor responses and behavior.
* Flexible Data Management: Access, modify, and persist custom data within the agent's execution flow.

Memory Stores support three access levels: **user-level, session-specific, and app-level**, offering flexible scope control based on your needs.
[Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/memory-stores.md)

**Thought Streaming Configurations**

Agentic Apps now offers a configuration to enable or disable Thought streaming. This gives greater control over what users see during execution. Additionally, this update introduces the ability to customize the thought prompt, enabling developers to define how internal reasoning or system insights are generated and presented. This enhancement helps tailor the agent's behavior and is particularly useful for debugging. 

[Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/settings/app-configurations.md)

**Document Upload Limits**

The Agent Platform now supports configurable document upload limits within the platform. Developers can define restrictions on the maximum number of files that the users can upload, the maximum file size, and the maximum token limit for each file. Files exceeding the token threshold are automatically ignored. This ensures more efficient, controlled, and optimized ingestion of contextual information.

[Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/settings/app-configurations.md)

<font size="4">No-code and Pro-code Tools</font>


**MCP Server Integration for Tool Calling**

The Agent Platform now supports integration with MCP (Model Context Protocol) servers, enabling seamless access to external tools. With this enhancement, admins can configure MCP servers and make tools available to agents for invocation during runtime workflows.

[Learn more :octicons-arrow-right-24:](../ai-agents/tools/mcp-tools.md)


**Improved Handling of Large Context Objects in Python Script Node**

The script execution flow in the Python script node has been updated to prevent passing the context object via command-line arguments. The new implementation ensures reliable handling of large context objects without impacting overall service functionality.

**OAuth Profile-Based Authorization Support**

Agentic Apps now support OAuth profile-based authorization. For agent actions that need authenticated access to external services, users are prompted to authorize the connection through OAuth. It enables seamless, secure, and user-specific access to data and services while maintaining proper authentication standards and overall integration reliability.

[Learn more :octicons-arrow-right-24:](../apis/agentic-apps/overview.md)


<font size="4">AI Engineering Tools</font>


**Support for Gemini Models in Agentic Apps**

Agentic Apps now supports Google's Gemini LLM in addition to OpenAI, Anthropic, and Azure OpenAI models. This integration expands the platform’s capabilities by:

* Enabling multimodal intelligence powered by Google’s advanced LLM.
* Supporting both Agent and Supervisor roles.
* Maintaining full compatibility with routing logic and tool-calling workflows.

This enhancement offers greater flexibility and model diversity for building powerful, context-aware agents.

[Learn more :octicons-arrow-right-24:](../models/supported-models.md)


**Support for the Latest OpenAI and Anthropic Models as External Models**

Added support for the latest models from OpenAI and Anthropic, including:

* OpenAI: gpt-4.5-preview, gpt-4.1, gpt-4.1-mini, gpt-4.1-nano
* Anthropic: claude-3-5-sonnet, claude-3-5-haiku, claude-3-7-sonnet

You can now use these models with configurable settings, such as temperature, top_p, and token limits, which are specific to each model. This update provides you with more flexibility and access to the latest LLM capabilities within your apps.


**Open Source Multimodal Support: Text+Image to Text Inference**

Added pipeline support for multimodal inference (text+image → text) for open-source models. This update supports both optimized (vLLM) and non-optimized execution paths, enabling flexibility in deployment. The updated API contract now accepts multimodal inputs, ensuring seamless integration across environments.

Supported models include llama-3.2-vision, phi-3-vision, phi-3.5-vision, and llava-1.5-7b.


**Improved Agentic Evaluation with Timeline View for Session Evaluators**

You can now easily track conversations with the Agentic app using the new timeline format, which clearly marks distinct dates in chat transcripts, making it ideal for following extended conversations that span multiple days.


**Improved Model Evaluation via Ground Truth Columns and Search AI Enhancements**

Users can add empty, inline-editable columns in model evaluations to manually input ground truth for RAGAS scoring, supporting both text and numeric values with customizable names. Multiple such columns can be added as needed. Additionally, Search AI responses now include enhanced answers and context fields in the output JSON for improved clarity and analysis. 

<font size="4">Other Improvements</font>


**Enhanced Workspace Switcher**

The Workspace switcher in the Agent Platform has been enhanced, allowing users to view workspaces with a clear understanding of their roles. Users can easily distinguish between their workspaces and others' workspaces, along with the workspace owner's information.

[Learn more :octicons-arrow-right-24:](../settings/workspaces/workspace-management.md)


<hr>


## v1.0.5 May 9, 2025

<u> Minor Release </u>

This update includes new features, enhancements, and bug fixes summarized below.

<font size="4">Evaluation</font>

**Agentic Evaluation**

Introducing Agentic Evaluation, a framework for analyzing the real-world performance of agentic AI applications. It enables multi-level evaluation across sessions and traces, offering deep insights into how orchestrators, agents, and tools operate in production. This feature provides visibility into how your system reasons, acts, and interacts with users over time, enabling data-driven improvements. Scoring interactions across the agentic workflow helps identify strengths, surface inefficiencies, and drive continuous improvement at scale.

Key capabilities

* Model Trace Analysis: Import and filter app sessions and traces by app version, environment and date range.
* Multi-Level Scoring: Evaluate performance at the session and trace levels.
* Evaluator Library: Apply built-in evaluators to assess reasoning quality, action effectiveness, and goal alignment.
* Interactive Scorecards and Trace Trees: Visualize agent behavior, drill into sessions, and explore full execution paths.
* Actionable Insights: Identify deviations, redundant interactions, or suboptimal tool usage to guide iteration.

**Search AI Integration in Evaluation Studio**

The new Search AI integration within Model Evaluation enables users to enrich their evaluation datasets with retrieval-augmented answers and supporting contexts. This functionality allows users to run a pre-configured Search AI connection across dataset inputs to fetch RAG answers and relevant context chunks. These results can be evaluated using the available evaluators. The workflow supports a seamless process from configuring the connection to reviewing answer quality and refining evaluation datasets.

<font size="4">Models</font>

**Support for google/gemma-3-12b-it in Open-Source Models**

Added support for the google/gemma-3-12b-it model as part of the open-source models library. This model is now available for integration into Agentic Apps, offering users increased flexibility and performance. The Gemma 3.12b model is accessible via open-source connections, enabling seamless deployment and improved application compatibility.


<font size="4">Settings</font>

**Support for Enhanced Custom Scripting**

This release introduces a powerful custom scripting capability that makes it easier for users to upload, configure, and deploy their own scripts. Customers can now run complex scripts without facing previous limitations around file input and output, network access, or limited library support.
A new Manage Custom Scripts section is now available in Settings, with role-based visibility and permissions. Users can create and manage scripts based on their access level, and function nodes will support executing these custom scripts.

Key benefits

* Simplified script deployment with an intuitive wizard.
* No more file and network limitations — run your custom scripts with full flexibility.
* Customizable runtime settings for improved performance.
* Efficient management of deployed scripts, including status tracking and API key management.

**New custom roles for Agentic apps in Settings**

The 'Create agentic apps' permission is now available to the admin user with the Account role type.
A new role type, ‘App’, enables users to configure, develop, and deploy agentic apps. It supports relevant permissions and access levels across different modules for app owners, admins, developers, testers, and viewers.

**Integrations – Audit Logs, Roles, and Permissions**

The Agent Platform now generates audit logs for the Integrations module in the Settings console, allowing admin users to track events such as adding, disabling, editing, and deleting third-party integrations.
Permissions and access levels for creating, deleting, updating, testing, and disabling Integrations are now defined for account-level roles such as Master Admin, Admin, Member, and Viewer.


<hr>

## v1.0.4 April 26, 2025

<u> Minor Release </u>

This update includes new features, enhancements, and bug fixes summarized below.

<font size="4">Agentic Apps</font>

**Knowledge Integration with Agent Platform**

The Agent Platform now integrates with AI for Service (XO) search capabilities, offering a RAG-based knowledge solution that enables users to leverage knowledge from multiple sources through agents easily. With this integration, users can easily link one or more knowledge bases to an agent and access them as Knowledge Tools. The agent can then leverage these tools to provide accurate and relevant responses to user queries, enhancing overall performance.

Key features

* Users can create a new Search AI app or link it to an existing app in the same workspace, streamlining knowledge management.
* Users can link one or more knowledge bases to the Agentic app, enabling access to various sources. 
* Agents can access the most up-to-date and relevant knowledge to deliver more accurate responses to user queries.

[Learn more :octicons-arrow-right-24:](../ai-agents/knowledge/overview.md)


**Export and Import Agentic Apps, Agents, and Tools**

Agent Platform now supports both importing and exporting of application configurations, agent definitions, and tool setups. This feature simplifies the process of reusing, sharing, and backing up components across different workspaces and environments. Users can export components in a standardized format and later import them to quickly replicate configurations, reducing manual effort and ensuring consistency across different deployment environments. 

Key features

* Standardized export format ensures consistency.
* A dependency-based import process where the platform follows an order of importing Tools, followed by Agents, and then the App config. This ensures that all components are successfully imported. If any step fails, the process is fully rolled back to maintain system integrity.
* Easy export and import streamlines deployment and accelerates setup across environments, saving time and minimizing errors.

[Learn more :octicons-arrow-right-24:](./../ai-agents/agentic-apps/import.md)

**Add Tools from Library, Marketplace, or File**

Users can now easily enhance the applications by importing tools from three sources: the enterprise library, the marketplace, or by importing from a file. This flexible tool's addition capability simplifies application development, encourages the reuse of existing resources, and accelerates the process. It also promotes consistency by allowing teams to standardize tool usage across applications and environments. 

[Learn more :octicons-arrow-right-24:](./../ai-agents/create-agent.md)

**Support for Attaching Files During Interaction**

Agentic Apps now enable real-time document sharing during user interactions. Users can upload documents directly through the chat interface, allowing AI Agents to analyze and extract relevant information. This enables personalized and contextual responses without requiring users to provide the content directly. 

Key features

* Intuitive Interface.
* Support for PDF document formats.
* Multiple file upload capability.
* Progress indicators for uploading and processing documents.

[Learn more :octicons-arrow-right-24:](./../ai-agents/agentic-apps/attachment-support.md)


**Support for System Events**

The Agent Platform now supports handling key system events, including welcome events, agent handoff, and end-of-conversation events. This enhancement enables the platform to effectively manage critical stages of a conversation, including initiation, closure, error handling, and scenarios that require human intervention. By offering more control over conversation flow, this feature significantly improves the user experience. 

Key features 

* The release supports three system events: welcome events, agent handoffs, and end-of-conversation events. Users can enable or disable these events as needed, offering greater flexibility. 
* System events are applied consistently across all agents within an agent-based app, ensuring uniform behavior throughout the platform. 
* Users can customize the data passed during agent handoff or end-of-conversation events. This customization enables apps to modify behaviors based on specific scenarios.

[Learn more :octicons-arrow-right-24:](./../ai-agents/agentic-apps/settings/events.md)

**Session Meta Memory Store for Contextual Prompts**

The Platform has introduced enhanced memory capabilities, enabling developers to access session-level information within the application and use it directly in the prompts for agents and supervisors.  With this feature, developers can design more contextual, intelligent, and personalized conversational experiences by dynamically using session-specific data stored in the default system memory store, *sessionMeta*. This data is retained for the duration of a session and is automatically cleared once the session ends. 

Key benefits

* Reduced repetitive inputs from users by using key details from the memory stores.
* Seamless personalization across interactions. 


<font size="4">Feature Enhancements</font>

Optimized the performance of prompt update and GET endpoints, resulting in significantly faster response times and enhanced overall system responsiveness.

<hr>

## v1.0.3 April 18, 2025

<u> Minor Release </u>

This update includes new features, enhancements, and bug fixes summarized below.


<font size="4">Tools</font>

**OAuth2 Support in API Node**

Users can now select an existing authorization profile from the Auth tab when configuring an API node, allowing a secure connection to third-party services using the saved authentication settings. By default, ‘None’ is selected, allowing users to proceed without choosing a profile for authentication.

**Support for New Integration Node**

Agent Platform introduces the Integration node in Tool Flow to help users connect to supported third-party services and perform specific actions for different use cases. It supports form-based and JSON configuration for easy, no-code integration into automation flows.


<font size="4">Models</font>

**Real-Time Model Support**

Support for real-time models (gpt-4o-realtime-preview, gpt-4o-mini-realtime-preview) via API key integration has been added. These models can now be added through the Models module and used within the Agentic Apps section. Support for other modules will be added in future updates.



<font size="4">Evaluation</font>

**New Table Features in Evaluation Studio**

A new table option has been added to make working with data easier in Evaluation Studio. Users can now filter and sort columns, adjust row heights, and hide or show columns to create a personalized view.


<font size="4">Settings</font>

**Custom Connection Integration with OAuth 2.0**

Users can now select preconfigured custom OAuth 2.0 auth profiles to preauthorize a connection. These profiles automatically populate the required parameters, such as Scopes, Refresh URLs, and more. Once a custom auth profile is selected, no further authentication is needed for the external integration.

**Centralized Integrations Management**

A dedicated Integrations section has been added to manage all external service integrations on the Agent Platform. Users can now go to Settings → Integrations to:

* View all supported integrations in one place.
* Search and filter integrations by category and authorization type.
* View key details, including supported authentication mechanisms, descriptions, and connection names.
* Easily switch between grid and list views.
* Add and set up a new connection, including the pre-authorization credentials to access the service securely.
* Test a configured connection and fix any errors.
* Edit, delete, enable, or disable a connection.



<font size="4">Feature Enhancements</font>

**Structured Output Support Across Modules**

The platform has added support for response JSON schemas across the modules, enhancing how structured outputs are handled in settings, models, tools, prompts, and agentic apps. The update ensures full backward compatibility, allowing existing users to add schemas to their current setups without any disruption.

* Trace & Monitor Responses: Response JSON schemas are now captured in model traces and monitoring, with token usage tracked for better insights.
* Save & Reuse with Templates: You can save prompts with attached schemas as templates and reuse them directly in AI nodes—no need to redefine.
* Seamless Sharing & Import/Export: Shared prompts retain their schemas, and exports now include schema details. Imports restore schema data automatically.
* Customize with Flexibility: Schemas can be added or edited directly in AI nodes, and templates or Prompt hub selections auto-load the schema.
* Consistency Across Tools: Cloned and scoped tools in Agentic Apps preserve schemas, and flow change logs now capture schema-related updates.



<font size="4">Bug Fixes</font>

* Fixed an issue where StableDiffusion models were not automatically undeployed after 1 hour. Models now undeploy as expected after the set time.


<hr>


## v1.0.2 April 05, 2025

<u> Minor Release </u>

This update includes new features, enhancements, and bug fixes summarized below.

<font size="4">Agentic Apps</font>

**Seamless Integration of Third-Party Agents**

Agent Platform now supports the integration of external agents via a proxy agent architecture, allowing enterprises to leverage their existing investments in agents built on various platforms. 

Key benefits

* Centralized management and monitoring of agents across multiple platforms.
* Consistent user experience when interacting with different agent systems.
* Ability to combine and orchestrate cross-platform agent capabilities.


**Integration with XO Platform**

Agent Platform now seamlessly integrates with the XO Platform. This integration simplifies the creation of highly contextual, self-service automation experiences from XO using multi-agent orchestration powered by Agentic Apps.

Key benefits

* Ability to integrate fully autonomous applications from the XO Platform.
* Leverage XO Platform's channel integrations while using Agent Platform capabilities.
* Streamlined user experience with shared authentication and session management.


**Voice Integration in Agentic Apps**

The XO Platform and the Agent Platform now support real-time voice interactions through the Voice Gateway using multi-modal language models, enabling low-latency, contextual, and real-time voice interaction experiences for customers.

Key features

* Real-time Voice Streaming: Enables real-time voice interactions when the Voice Gateway is selected as the channel.
* Voice Streaming to Users: Supports streaming voice responses to users in real-time based on agent responses.
* Model and Prompt Selection: Provides options to select supported AI models and prompts specific to voice interactions.


**Enhanced Tool Integration and Management**

The Agentic Apps tool management system has been redesigned to improve usability, functionality, and permissions. Tools are now cloned and directly linked to specific Agentic Apps, creating app-scoped tool instances, rather than being linked by reference. This simplifies management, updates, and permission assignment. The Tool Library remains the central source for importing tools from the Marketplace, Library, or Files. Also, the tools are now scoped into the app’s context during import.

Key improvements 

* Full Lifecycle Management: Each tool instance within an Agentic App now has full lifecycle management capabilities, including versioning and editing, ensuring greater control and flexibility.
* Simplified Permissions: The new structure simplifies permissions by making tools more securely controlled within each app, improving sharing control, and reducing complexity.
* Easier Updates: With tools directly associated with Agentic Apps, updates and modifications can be made more easily, without impacting other apps or instances.
* Improved Manageability: App-scoped tool instances make tools more manageable, as they are now organized and accessed within the context of each Agentic App.


**Enhanced Versioning System**

The advanced versioning system streamlines the management of AI-driven Agentic Applications by supporting continuous innovation and ensuring stability. This system allows users to seamlessly handle multiple versions of agents and applications across various environments (development, testing, production etc).

Key features

* Integrated Draft Development: Thoroughly test application functionality in draft mode before creating versions, minimizing disruptions to active environments.
* Flexible Agent Selection: When creating application versions, users can choose from the current draft, previous versions, or specific versions of agents and tools, ensuring optimal compatibility and performance.
* Unified Version Tracking: Agent versions automatically align with application versions, simplifying tracking and management of complex, multi-component systems.
* Seamless Environment Management: Effortlessly deploy and manage different versions of applications across development, testing, and production environments, ensuring consistency and reliability.


**Enhanced Tool Tracing and Logs**

Tool traces are now directly integrated into the Agentic app, providing greater visibility into tool execution. It results in a streamlined debugging process, enhanced transparency of tool operations, and simplified troubleshooting for complex tool interactions.

Key capabilities

* Detailed Execution Logs: Comprehensive logging for every tool interaction.
* On-Demand Trace Viewing: Instant access to execution details.
* Improved Troubleshooting: Deeper insights into tool performance and behavior.


**Advanced Environment Management for Agentic Apps**

The new Environment Management System offers a robust solution for managing and deploying AI-driven applications across multiple environments, including development, testing, staging, and production. Key benefits include flexible deployment processes, consistent application behavior, and improved version control.

Key capabilities 

* Create and manage distinct environments.
* Link specific application versions to environments.
* Use unique endpoints for each environment.
* Customize configurations per environment.
* Track deployment history.
* Streamline CI/CD integration.


**Simplified Web SDK Integration**

The Platform-hosted SDK can now be easily integrated into enterprise websites using the new, lightweight Webclient Script. This JavaScript solution eliminates the need for users to leave the enterprise website to access the application, creating a seamless user experience with minimal development.

Key features

* Simple integration via a script tag.
* Ability to launch the application directly within enterprise websites.
* Customizable configuration options.
* Seamless authentication and session management.

**AI Agent’s Thought Streaming**

Agent Platform now introduces thought streaming that provides insights into the AI Agent’s reasoning and planning process behind its decisions and actions. This enables users to understand how the agent analyzes, decides, and responds to the user's query. Thought Streaming promotes transparency, helps build trust, and improves overall engagement. 
Real-time insights into the decision process also serve as a tool to identify issues and improve performance.


<font size="4">Tools</font>

**Introducing Tool Templates**

The Agent Platform now supports Tool Templates—a library of 23 prebuilt templates integrated with third-party services. Instead of building tool flows from scratch, users can install a ready-to-use template based on their category and task, requiring zero coding effort. Each template includes a preconfigured tool flow of nodes that the users can customize. Once installed, the system automatically adds all predefined elements—nodes, flows, and configurations—to the Tools Flow canvas. The users can then modify the node settings as needed.


**Structured Output in AI nodes**

AI nodes now support structured output, enabling users to define a JSON schema for model responses. This optional feature can be enabled if the model supports the response format, with the default being "text" if no schema is provided. Supported schema types include String, Boolean, Number, Integer, Object, Array, Enum, and anyOf. Currently, the JSON schema from the prompt template cannot be persisted to the AI node. We are working on adding capabilities to support structured output across various impact areas on the platform, and this feature will be included in the next release.


<font size="4">Models</font>

**Optimized Inference Time for CTranslate2 (CT2)**

CTranslate2 (CT2) models have been optimized to reduce latency and enhance performance during deployment. These improvements affect both open-source models and fine-tuned models, providing a faster and more efficient inference process.


<font size="4">Prompts</font>

**Structured Output in Prompt Studio**

Prompt Studio now supports structured output, allowing users to define a JSON schema for model responses when writing prompts. This optional feature can be enabled if the model supports the specified format, and if not, the schema is sent with the prompt for the model to determine the response format. Supported schema types include String, Boolean, Number, Integer, Object, Array, Enum, and anyOf. Currently, the JSON schema from the prompt template cannot be persisted to the AI node. We are working on adding capabilities to support structured output across various impact areas on the platform, and this feature will be included in the next release.


<font size="4">Settings</font>

**Introducing OAuth2 Authorization**

Platform users can now set up an Authorization Profile using OAuth v2 in the Settings console to define the attributes for robust, customizable,, and reliable user authentication and authorization. This enables secure and confidential access to external models via custom APIs and API and AI nodes for Tools.


<font size="4">Feature Enhancements</font>

* Upgraded the TRL version of ml-training-service to support DPO Reinforcement Learning from Human Feedback (RLHF) fine-tuning, ensuring seamless functionality with custom parameters.


<font size="4">Bug Fixes</font>

* Fixed an issue with CTranslate2 where deploying models with more than 6 billion parameters (e.g., opt-6.7b) on A10 hardware was stuck in the Deploying state when optimization was not enabled.
* Fixed an issue where the output JSON in the model traces for diffusion models in the Text-To-Image node was returning null.
* Fixed an issue where the output JSON in the model traces for the Whisper model in the Audio-To-Text node was returning null.


<hr>

## v1.0.1 March 22, 2025

<u> Patch Release </u>

This update includes only bug fixes.

<hr>

## v1.0 March 14, 2025

<u> Major Release </u>

This update includes new features and enhancements summarized below.

**New Features**

* JSON schema validation for JSON input type: Users can now define and validate JSON schemas for the JSON input type in Tools. A new JSON editor with schema definition and validation ensures that input data matches the required format, with detailed error messages during agent runs and endpoint failures.
* Mapping environment variables in Tools: Tool builders can now specify and map environment variables when adding tools within an AI node. They can select existing environment variables from the tool’s configuration or context variables or enable tool-specific environment variables.
* Deepseek model support: Added support for deploying Deepseek models from Hugging Face on existing Agent Platform hardware. Users can now deploy models like *Deepseek-R1-Distill-Qwen-1.5B*, *Deepseek-R1-Distill-Llama-8B*, *Deepseek-R1-Distill-Qwen-14B*, and *Deepseek-R1-Distill-Qwen-7B*. These models are now available in the list of open-source models. This support is only available for the models listed above through Hugging Face connections.
* Text-to-Image support: The AI node now supports Text-to-image generation within the tools flow. In prompts, users can specify image details and attributes, including elements to include or exclude. Using the Stable Diffusion model, the system generates images in line with the given instructions/keywords. The output is converted to a URL for further usage. Developers can now seamlessly generate and modify images using text-based instructions for creative purposes like generating marketing content, etc.
* Audio-to-Text support: The AI node now supports Audio-to-text conversion for multi-speaker, multilingual conversations using the OpenAI Whisper model. It transcribes audio, removes banned words, and translates other languages into English. Users can customize transcription style, proper nouns, punctuation, and context through prompt inputs, ensuring accurate results.
* Support for Open AI Whisper and Anthropic Claude Sonnet Vision: Agent Platform now supports the following external commercial models in its modules and workflows:
    * Open AI Whisper
    * Anthropic Claude Sonnet Vision
* Support for Stable Diffusion: Agent Platform now supports the following variants of the Stable Diffusion open-source models in its modules and workflows:
    * stable-diffusion-xl-base-1.0
    * stable-diffusion-2-1
    * stable-diffusion-v1-5
* Evaluation Studio:
    * Added support for sharing and collaboration: Projects can now be shared with collaborators, enabling team-based evaluation in a centralized environment. Permissions can now be applied across all evaluations within the project.
    * Added support for creating custom evaluators: Users can now create custom AI evaluators using in-built templates, with the ability to select evaluator categories (Quality or Safety). Users can choose scoring mechanisms, set thresholds, and test evaluators, receiving scores and explanations. Custom evaluators can be edited, and saved as templates for use by other users. They can also be saved as global evaluators, making them accessible across multiple projects.
    * Added support for human evaluators: Users can now add human evaluators to datasets with three types: thumbs up/down, better output, and comments. These evaluators are added as columns, where users can use ‘thumbs up/down’ to show approval or disapproval, ‘better output’ to suggest improvements, and ‘comments’ for additional feedback.
    * Added support for running an API as an output column: Users can now integrate data from external sources using rows from the Evaluation Studio data table. For example, values from a row can be passed as input to a tool, which then generates a response by triggering an API call. This response is automatically populated into a new output column within Evaluation Studio.
    * Added support for RAGAS evaluators: RAGAS evaluators are now integrated into Evaluation Studio as system evaluators, particularly within RAG (Retrieval-Augmented Generation) pipelines. These evaluators assess both the accuracy of the answer and the relevance of the contexts used. The supported evaluators include Context Precision, Context Recall, Context Entity Recall, Noise Sensitivity, and Faithfulness. 
* Agentic Apps: We are excited to announce the general availability (GA) of Agentic Apps.


**Feature Enhancements**

* Tools export with automatic model linking: Improvements have been made to tool imports for better handling of linked models.
* Guardrails model deployment support from file system: The deployment process for Guardrail models has been updated to read model paths directly from the file system instead of S3. The file system is now mounted to the Guardrails pods, enabling seamless deployment and testing of Guardrail models.
* Multimodal input support using vLLM: Support added for models that process image & audio inputs. Supported models include:
    * *microsoft/Phi-3-vision-128k-instruct*
    * *microsoft/Phi-3.5-vision-instruct*
    * *meta-llama/Llama-3.2-11B-Vision-Instruct*
    * *llava-hf/llava-1.5-7b-hf*