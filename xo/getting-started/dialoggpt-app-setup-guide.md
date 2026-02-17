

# AI Agent Setup Guide

The setup guide provides a comprehensive walkthrough of creating a DialogGPT-based App or AI Agent. The steps include creating the foundational application, setting up DialogGPT as the core orchestration model, constructing conversation flows, integrating necessary tools, and finalizing the agent for thorough testing and deployment.


## 1. Create and Configure an App

1. **Create a DialogGPT-based App**: When you create an app, the platform automatically enables the required XO GPT models for DialogGPT. Dialogs and FAQs conversations are enabled by default. After creating your app, review and configure the remaining DialogGPT settings. Refer to [Guided Onboarding](guided-onboarding.md).
2. **Configure DialogGPT**: Define and manage Conversation Types. It defaults to an XO GPT model for Chunk Shortlisting and Conversation Orchestration, which you can change. You can enable or disable Intent and Conversation Events and customize their fulfillment by overriding default settings, enabling precise, adaptable conversation management. Refer to [Conversation Orchestration](../generative-ai-tools/dgpt-conversation-orchestration.md).


## 2. Configure Generative AI Tools

1. **Integration with Large Language Models (LLMs)**: The Platform supports integration with leading LLM providers, bring-your-own (BYO) models, and the Kore.ai XO GPT module to enhance your AI Agent's generative AI capabilities. XO GPT can be used for both embedding and conversation management. However, for advanced platform capabilities like Tool Calling, Streaming Responses, and Dynamic Variables, you must use a custom prompt with a pre-built or custom integration. Refer to [LLM Integration](../generative-ai-tools/models-library.md).
2. **Create Custom Prompt**: Custom prompts let you tailor model behavior for specific use cases and GenAI features. You can build prompts from scratch or import and modify existing ones to meet your needs. The Agent Node supports both tool calling and prompt streaming in custom JavaScript V2 prompts using the OpenAI or Azure OpenAI response format. Refer to [Prompts Library](../generative-ai-tools/prompts-library.md).
3. **Enable GenAI Feature**: The Generative AI features accelerate an AI Agent development and enhance performance. LLM-powered functionalities streamline the development process, reducing time and effort while boosting overall efficiency. You must enable GenAI features to use them. Refer to [Generative AI Features](../generative-ai-tools/genai-features.md).
4. **Safeguards your Data**: Manage data privacy with assistant-level and LLM-level anonymization of PII & sensitive data. Set up Guardrails to enforce appropriate AI outputs. Refer to [PII and Sensitive Data Anonymization](../generative-ai-tools/data-anonymization.md) and [Guardrails](../generative-ai-tools/guardrails.md).


## 3. Set up AI Workflow/Dialog and Search AI

1. **Create a Dialog**: Dialogs are a core component of the Platform. Along with the Conversation Designer, they form the foundation for building conversations that connect to your business logic. Each dialog consists of interlinked nodes that act as the building blocks of the experience. These nodes retrieve information, perform actions, integrate with external applications, send messages to users, and control the overall flow of the interaction. Refer to [Dialog](../automation/use-cases/dialogs/dialog-tasks-overview.md).
2. **Agent Node**: The Agent Node uses LLMs, generative AI, and tool calling to create powerful, data-driven AI Agents that handle complex tasks. It supports streamlined entity collection, contextual intelligence, multilingual conversations, and integrations with external systems, enabling human-like, dynamic interactions. Refer to [Agent Node](../automation/agent-node/working-with-agent-node.md).
3. **Search AI Sources**: Search AI ingests and indexes content from multiple sources so the DialogGPT can use it as a reliable knowledge base. It extracts information from websites, processes documents such as PDFs and Office files, and connects to third-party systems such as ServiceNow, Confluence, etc. You can add or update any content source at any time, and the platform organizes each source type into dedicated pages for easier navigation. Refer to [Search AI Content Sources](../searchai/content-sources/introduction.md).
4. **Additional Nodes**: The Platform also provides other nodes, such as the Prompt Node, Entity Node, and Agent Transfer Node, along with transitions that connect each component of your dialog. These nodes work together to shape the flow, gather information, trigger actions, and deliver a seamless conversational experience. Refer to [Nodes Overview](../automation/use-cases/dialogs/node-types/nodes-transitions.md).


## 4. Test the App

1. **Test the App**: After you define your app and configure one or more tasks, test your settings to make sure they're correct before publishing the app. Refer to [Playground](../automation/testing/playground.md).
2. **Batch Testing**: Validate AI Agent accuracy and reliability at scale by running bulk tests through CSV or JSON uploads, with comprehensive performance metrics. Refer to [DialogGPT - Batch Testing](../automation/testing/batch-testing-dialoggpt.md).



## 5. Deploy the App

1. **Enable a Channel**: After your AI Agent is ready, it's not available to users unless you define one or more channels through which it can communicate with the end users. The Platform supports multiple communication channels. Refer to [Enable Digital Channels](../channels/adding-channels-to-your-bot.md).
2. **Set up Agent Transfer**: Configure agent transfer to seamlessly hand off customer conversations to a live human agent. The Platform hosts these agent transfer integrations, and there is no need to host any custom BotKit. Refer to [Agent Transfer Integrations](../app-settings/integrations/agents/agent-transfer-integrations.md).
3. **Publish the App**: End users can interact with an AI Agent only when the app is published. The platform provides a publishing flow to allow administrators to review new agents and updates before they are made available to end users. Refer to [Publishing your App](../deploy/publishing-bot.md).


