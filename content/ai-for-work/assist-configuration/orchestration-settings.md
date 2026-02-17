# Orchestration Settings

Orchestration Settings provides a comprehensive pipeline management framework that allows organizations to customize their AI query processing workflow. The system operates as a central control hub, enabling administrators to selectively activate, configure, and manage individual components of the AI interaction pipeline. This feature transforms how organizations deploy AI capabilities by providing granular control over each processing step.

## **Accessing Orchestration Settings**

**Navigation Path**: Account Hub → Assist Configurations → Orchestration Settings

**Setup Process:**

1. In **Account Hub**, access to **Orchestration Settings** under ***Assist Configurations***.
2. Review available pipeline components and their current status.
3. Configure individual components based on your organizational requirements.
4. Test the pipeline configuration using sample queries.
5. Monitor performance and adjust settings as needed.

<img src="../images/orchestration-settings.png" alt="action" title="action" style="border: 1px solid gray; zoom:80%;">

## **Understanding the Interface Layout**

The Orchestration Settings interface is organized into five main pipeline components:

* **Guardrail Enforcement**: Applies safety and compliance checks to control AI responses.
* **Small Talk Handling**: Allows casual, conversational responses for a natural user experience.
* **Intelligent Agent Routing**: Analyzes user intents to route queries to the appropriate agent.
* **Enterprise Knowledge Lookup**: Searches configured enterprise knowledge bases to generate an accurate response.
* **Fallback to AI Knowledge**: Employs model-derived knowledge to provide responses in the absence of alternative data sources.

### Guardrails Enforcement

Guardrail Enforcement provides automated security policy application across all AI interactions through intelligent synchronization with your [Guardrails](./guardrails.md).

<img src="../images/guardrails-enforcement.png" alt="action" title="action" style="border: 1px solid gray; zoom:80%;">

**Configuration Options:**

* **Management Integration**: **Go To Guardrails** button provides direct navigation to the [Guardrails](./guardrails.md) interface.
* **Enabled State**: When guardrails are active in Guardrail Management, they automatically enforce security policies across all pipeline queries.
* **Disabled State**: When guardrails are disabled in management, security enforcement is automatically removed from the pipeline.

**Operational Features:**

* **Centralized Control**: All enable or disable actions are managed through the dedicated [Guardrails](./guardrails.md) interface.
* **Automatic Synchronization**: Cannot be manually toggled within **Orchestration Settings**.

### Small Talk Handling

Small Talk Handling enables AI systems to engage in casual, contextual conversations that improve user experience and interaction quality.

<img src="../images/small-talk-handling.png" alt="action" title="action" style="border: 1px solid gray; zoom:80%;">

**Configuration Options:**

* **Toggle Control**: Can be enabled or disabled based on organizational preferences.
* **Predefined Prompts**: Utilizes professionally crafted conversation templates.
* **Consistent Responses**: Ensures appropriate and brand-aligned casual interactions.

**Operational Features:**

* **Template System**: Pre-configured small talk prompts designed for professional environments.
* **Locked Configuration**: Prompts cannot be edited to ensure consistent brand voice and appropriate responses.

### Intelligent Agent Routing

Intelligent Agent Routing automatically analyzes incoming queries and directs them to the most appropriate AI agent or processing system for optimal response quality.

<img src="../images/intelligent-agent.png" alt="action" title="action" style="border: 1px solid gray; zoom:80%;">

**Configuration Options:**

* **Predefined Logic**: Professional routing algorithms optimized for accuracy and efficiency.
* **Locked Prompts**: Routing logic cannot be modified to ensure consistent performance.

**Operational Features:**

* **Response Quality**: Ensures queries reach the most qualified AI agent.
* **System Efficiency**: Reduces processing overhead through smart distribution.
* **Scalability**: Supports complex AI ecosystems with multiple specialized agents.

### Enterprise Knowledge Lookup

Enterprise Knowledge Lookup seamlessly integrates your organization's knowledge base with AI processing, ensuring responses draw from authoritative internal sources.

<img src="../images/enterprise-knowledge.png" alt="action" title="action" style="border: 1px solid gray; zoom:80%;">

**Configuration Options:**

* **Automatic Enablement**: When Enterprise Knowledge is configured and active, it automatically enables in Orchestration Settings.
* **Prerequisite Requirements**: Cannot be enabled without proper Enterprise Knowledge configuration.
* **Settings Integration**: Direct link to Enterprise Knowledge settings for comprehensive management.

**Operational Features:**

* **Configured and Enabled**: Full integration with automatic knowledge base queries.
* **Configured but Disabled**: Knowledge base appears as available agent but requires manual selection.
* **Not Configured**: Component remains inactive until Enterprise Knowledge is properly set up.

!!! note
    Enterprise Knowledge remains accessible through the compose bar's agent selector, despite being disabled in the query pipeline.

### Fallback to AI Knowledge

Fallback to AI Knowledge ensures continuous AI availability by providing alternative response generation when primary systems are unavailable or insufficient.

<img src="../images/fallback-ai.png" alt="action" title="action" style="border: 1px solid gray; zoom:80%;">

**Configuration Options:**

* **Toggle Control**: Can be enabled or disabled based on operational requirements.
* **LLM Model Selection**: Choose from available language models based on specific needs.
* **Web Search Integration**: Optional web search capabilities for enhanced information access.
* **Conditional Web Search**: Web search toggle appears only for models that support this capability.
* **Custom Prompt Engineering**: Editable response prompts for tailored AI behavior.

**Operational Features:**

* **Automatic Fallback**: Activates when primary AI systems cannot provide adequate responses.
* **Performance Optimization**: Configurable models allow optimization for speed or accuracy.