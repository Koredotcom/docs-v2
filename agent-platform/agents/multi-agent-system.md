# Multi-Agent System

**A Multi-Agent System** (MAS) is a framework in which multiple autonomous software agents interact and coordinate to solve complex problems. The agents collaborate to achieve system-level goals that would be challenging for any single agent to accomplish alone.

**An Agentic App** (or Agentic AI) provides a robust framework for developing sophisticated multi-agent systems. It integrates and orchestrates multiple specialized AI agents to deliver intelligent, adaptive solutions to complex problems. The Agentic framework enables complexity management, promotes flexibility, allows for scalability, and encourages the reuse of components when creating advanced AI apps.

## Key Concepts

* **AI Agents**: Autonomous, task-focused software entities that perform specific functions. They serve as the building blocks of Agentic apps. [Learn more](./overview.md).

* **Agentic App**: Higher-level systems that coordinate multiple AI agents to solve complex problems with greater autonomy, adaptability, and reasoning than individual agents. [Learn more](./agentic-apps/overview.md).

## Advantages Over Single-Agent System

| **Feature**   | **Multi-Agent System**   | **Single-Agent System**         |
| ------------- | ------------------------ | ------------------------------- |
| Capability    | Plan, Decide, and Adapt  | Linear, rule-based              |
| Task Handling | Distributed, specialized | Centralized, general            |
| Scalability   | Easily scalable          | Limited scalability             |
| Robustness    | High (fault-tolerant)    | Lower (single point of failure) |
| Flexibility   | Highly adaptable         | Less adaptable                  |
| Efficiency    | Parallel, collaborative  | Sequential, isolated            |

## Orchestrator and its Roles

The orchestrator is a critical component that manages the overall multi-agent system workflow and coordinates agent interactions. Orchestration can be centralized or adaptive, enabling scalability and robust operations. Without orchestration, agents operate in isolation. An orchestrator takes care of the following functions:

* Breaks down tasks and delegates to appropriate agents.
* Resolves conflicts between agents.
* Facilitates communication, manages context, and data sharing.
* Monitors performance and optimizes agent allocation.
* Enables system-wide adaptability.
* Detects and handles errors and failures.
* Supports scalability by allowing new agents to be seamlessly added without disrupting existing workflows.

<hr/> 

**Related Resources**

* [Create your first Agentic App](./../ai-agents/agentic-apps/create-app.md)
* [Set up AI Agents](./../ai-agents/create-agent.md)
* [Configure Tools for Agents](./../ai-agents/tools/overview.md)
