# Agent Platform Overview

The all-new Agent Platform is an enterprise-grade multi-agent orchestration platform. The platform is a comprehensive solution for enterprises to develop, deploy, and manage AI-powered business applications. It enables the orchestration of intelligent agents across service, work, and process automation while upholding enterprise-grade security and governance.

The Platform supports two distinct paradigms for building intelligent AI applications:

* **Dialog Agents** (Orchestrated Autonomy, Structured Flow Approach): This paradigm, powered by DialogGPT and Agent Node, offers a structured flow approach to enable a dynamic conversational experience. While responses are still somewhat deterministic, Dialog Agents can adapt to variations in input, handle multi-turn interactions with greater ease, recognize user intent, extract key information autonomously, and leverage context across conversations. This results in a more responsive and interactive AI that can assist users intelligently within defined boundaries. [Learn more :octicons-arrow-right-24:](../dialog-agents/dialoggpt.md)

* **AI Agents** (Full Autonomy, Reasoning-Driven Approach): This paradigm represents the highest level of AI sophistication, enabling the development of autonomous agents capable of human-like interaction. AI Agents, orchestrated by the AI Agent Orchestrator and leveraging Tools, function as multi-agent systems with reasoning and persistent memory. They possess a deep contextual understanding, grasp nuances, and tailor their responses based on the interaction history. The reasoning engine enables AI Agents to generate consistent responses through situational analysis, rather than relying on preset paths, resulting in fluid and natural conversations that adapt to ever-changing contexts. With AI Agents, AI can become a true collaborator capable of strategic thinking, problem-solving, and autonomous execution. [Learn more :octicons-arrow-right-24:](../ai-agents/agentic-apps/overview.md)

Both paradigms leverage the platform's core AI capabilities, which include Search/RAG, AI Models and Prompt Management, an Evaluation and Testing Framework, and AI Safety controls.


## Key Components

The Platform's key components provide comprehensive capabilities that empower organizations to efficiently scale and manage AI deployments across the AI lifecycle.

<img src="../images/agent-platform-components.png" alt="Components of the Platform" title="Components of the Platform">


### Multi-Agent Orchestration

It enables users to define agent behaviors, skills, and integrations through low-code, declarative programming. This enables both technical and non-technical users to easily create and manage intelligent agents. It gives agents advanced reasoning and planning skills, enabling them to analyze their environment, act effectively, and learn from the outcomes to operate autonomously and flexibly. 

It also provides real-time streaming of agent interactions across voice and chat channels, enabling seamless user experiences and dynamic agent-based applications.


### Tools

Tools are reusable components that agents can invoke to perform specific tasks or access external systems and data sources. The platform supports various methods for creating Tools:

* Visual Workflow Builders for low-code Tool development

* Custom coding in JavaScript and Python for advanced Tool logic

* Pre-built connectors to popular enterprise applications and data sources

* Integration with external APIs and services


### Search / RAG 

It enables agents to retrieve relevant information from connected enterprise data sources and knowledge bases to enhance their responses and decision-making. It uses a hybrid approach to retrieval, combining multiple methods to deliver the most relevant and comprehensive results. It supports Agentic retrieval, where multiple agents collaborate and coordinate their efforts to efficiently find and retrieve information. 

Additionally, it's context-aware, taking into account the specific context and requirements of each retrieval request. By considering factors such as user preferences, current tasks, and previous interactions, the retrieved data can be tailored to the specific needs of the user or application.


### Interaction Context

It provides comprehensive management of the interaction state throughout its entire lifecycle. By keeping a record of previous interactions, user preferences, and relevant data, the component enables agents to maintain continuity and provide contextually appropriate responses.

### AI Model Management

It facilitates the easy deployment and management of AI models, including fine-tuning for specific domains. It also supports the effortless deployment of open-source models and integration with third-party model providers.

### Prompt Management

Prompt Studio and Library enable efficient prompt design, management, reuse, and collaboration across teams. It enables real-time co-editing, commenting, version tracking, and integration with the overall Platform for seamless deployment.

### Evaluation and Testing Framework

The framework provides a comprehensive evaluation of agent performance, combining both AI-driven automated assessments and insights from human evaluators. Customizable scoring rubrics and real-time performance monitoring allow organizations to tailor evaluation criteria and enhance agent performance.

### AI Safety Controls 

It ensures responsible and safe agent operations while maintaining user trust and complying with data protection regulations. It anonymizes personally identifiable information (PII) and sensitive data and uses input and output guardrails, including advanced content filtering, to maintain appropriate content standards and ensure respectful communication. Granular role-based access controls ensure that users can only access data relevant to their job functions.

### Analytics and Observability

The platform offers deep insights into agent performance and usage through detailed analytics and end-to-end observability. Key capabilities include:

* Detailed activity data capture from underlying models and applications.
* Session logs, conversation histories, and usage metrics.
* Intuitive dashboards and visualizations for monitoring KPIs.
* End-to-end tracing of agent orchestration for debugging and optimization.
* Built-in features to trace and understand agent decision-making.
* Streaming of agent thoughts for transparency and human collaboration.

### Agent Protocol

The platform provides a standardized Agent Protocol for seamless communication and integration between agents, tools, and external systems. The protocol supports multi-modal content, real-time streaming, and flexible API design. This enables agents to comprehend and generate various data types, process information in real-time, and seamlessly integrate with external systems.

### SDKs

Comprehensive SDKs are available for developers to efficiently build and integrate various aspects of the Platform, including custom Agents, Tools, Search/RAG capabilities, and observability Traces.

### Enterprise Grade CI/CD

The platform offers granular versioning and multi-stage deployment capabilities to support a rigorous software development lifecycle for agent-based solutions. It allows organizations to establish separate environments (for example, QA, UAT, Prod) for thorough testing and validation, ensures consistent deployments, and streamlines the development process to deliver high-quality, reliable solutions.

### Collaboration and Audit

The platform facilitates streamlined collaboration among teams, enabling them to efficiently develop, test, and deploy agent-based solutions. It offers customizable roles and permissions to ensure clear responsibilities and access levels, promoting transparency and accountability within the team. Additionally, comprehensive audit logs track all activities, maintaining traceability, accountability, and compliance.

### Marketplace

It provides a comprehensive library of pre-built Agents, Tools, and extensions across diverse domains and use cases. This accelerates development by offering customizable templates, connectors, and sample implementations from the Marketplace.

## Deciding the Right Paradigm or Approach

When selecting the appropriate paradigm for your use case, consider the following factors:

* Level of autonomy required.
* Complexity of the tasks and decision-making.
* Need for contextual understanding and adaptability.
* Degree of structure and predictability in the interaction flow.

**Dialog Agents** are well-suited for orchestrated autonomy, offering semi-predictable responses, conversational fluidity, intent awareness, and context awareness. 

**AI Agents** provide full autonomy with deep contextual understanding, reasoning capabilities, and fluid, human-like interactions.

Regardless of the chosen paradigm, the platform's core capabilities ensure enterprise-grade security, robust performance, and seamless integration with existing systems and processes.

<hr>
