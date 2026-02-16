# What's New in AI for Service (XO v11)

Learn about the new features and enhancements included in AI for Service (XO v11).

AI for Service helps enterprises deliver better conversations with customers, employees, and agents. It combines conversational AI intelligence and generative AI innovations to create engaging customer experiences.

Built for security and scalability, the platform uses a no-code interface that lets businesses build agents. These assistants use large language models to hold natural conversations in multiple languages across various channels.

## Comprehensive Suite of Products and Services

The unified platform offers a comprehensive suite of products, features, and services to help businesses leverage AI to deliver exceptional customer experiences, improve operational efficiency, and drive business growth.

**Key Products, Features, and Services Offered by the XO Platform:**

<img src="../images/xo-platform-components.png" alt="New Unified XO Platform" title="New unified XO Platform">

<hr>

Key updates to products and features are summarized below.

### Automation AI

Automation AI offers sophisticated AI-powered tools for creating agents to handle customer interactions through intelligent automation. You can also empower agents to handle interruptions and provide clarifications for more natural dialogues. It also offers testing tools to ensure a smooth and reliable user experience by identifying and fixing issues before deployment.
    
Key Automation AI updates are summarized below.

    
* **Advanced AI Capabilities**: The platform has introduced several Advanced AI Capabilities that simplify building agentic experiences. Users can create more natural and personalized agents conversations while streamlining their development workflow.

    * **DialogGPT, an Agentic Orchestration for Intelligent Conversations**: DialogGPT is an intelligent, agentic orchestration engine that powers natural conversations at scale, providing autonomous orchestration across multiple topics through Dialog Tasks. [Learn more :octicons-arrow-right-24:](../automation/dialog-gpt-based-orchestration.md)

    * **Enhanced Agent Node with V2 Prompt and Tool Calling**: Agent Node (previously GenAI Node) has been enhanced to take full advantage of the Tool Calling capability of advanced AI Models. The latest version (v2) orchestrates the Agent Node using the Tool Calling construct to collect entities, instruct business rules, and perform user-defined custom actions. [Learn more :octicons-arrow-right-24:](../automation/agent-node/prompt-setup.md#types-of-prompts)

    * **Build Agentic Experience with DialogGPT and Agent Node**: Tool Calling enables the new Agent Node to interact with your business applications. Users can define tools, connect multiple actions, and incorporate external data into the conversation context. DialogGPT manages conversation orchestration, while Agent Node with Tool Calling creates more natural interactions.
    [Learn more :octicons-arrow-right-24:](../automation/agent-node/working-with-agent-node.md#tools)
 
    * **Seamless Integration with Agentic Apps for Multi-agent Orchestration**: The fully autonomous Agentic Apps, powered by the Kore.ai Agent Platform, can now easily integrate with the XO Platform. [Learn more :octicons-arrow-right-24:](../flows/node-types/automation.md)

    * **Support for Dynamic Routing Capability Powered by DialogGPT**: The Platform now supports Dynamic Routing capability powered by DialogGPT. This capability allows teams to develop and manage automation apps for various functions independently and then link them to a standard app. More importantly, it enables businesses to provide a single, unified interface to the end users instead of a separate interface for each function. The orchestration is powered by DialogGPT, which provides context-aware, intelligent, and dynamic routing. [Learn more :octicons-arrow-right-24:](../automation/dynamic-routing.md)

* **LLM and Generative AI Framework**:

    * **Guardrails**: LLMs are usually pre-trained with a vast corpus of public data sources, and the content is not fully reviewed and curated for correctness and acceptability for enterprise needs. This results in generating harmful, biased, or inappropriate content at times. The Guardrail framework mitigates these risks by validating LLM requests and responses to enforce safety and appropriateness standards. [Learn more :octicons-arrow-right-24:](../generative-ai-tools/guardrails.md)

    * **Monitoring**: It offers comprehensive insights into utilizing Large Language Models (LLMs) and Generative AI features. The framework collects, analyzes, and presents comprehensive data on user interactions, request-response dynamics, and payload details. [Learn more :octicons-arrow-right-24:](../analytics/genai-analytics/llm-usage-logs.md)

* **All-new Dialog Builder**: The all-new dialog builder is super intuitive, user-friendly, and visually appealing. The user interface allows users to design conversational flows by dragging and dropping components onto a canvas. This simplifies the process of constructing dialogues, allowing users to visually structure and customize interactions between the AI system and users. It empowers developers and non-technical users alike to design and create conversational flows effortlessly. 

[Learn more about the new features in AI for Service (XO v11) :octicons-arrow-right-24:](../release-notes/11.x/automation-ai.md#v1100-march-30-2024)

<hr>

### Search AI

Search AI is an enterprise-grade platform that combines advanced search, retrieval, and generative AI to deliver accurate, context-aware answers across a wide range of content sources. It is designed to handle complex queries, unstructured data, and varied use cases with high precision and flexibility. It offers AI-driven search precision and flexible integration, making it ideal for enterprises seeking intelligent knowledge discovery and automation. By combining Automation AI (Use Cases) and Search AI (Answers), businesses can create an exceptional, seamless conversational experience for their users.

Key Search AI capabilities are summarized below. 

* **Smart Answer Generation**: Search AI uses Advanced RAG technologies to deliver accurate, context-aware answers by intelligently combining information retrieval and generative AI. It is built on an end-to-end process:

    **Content ingestion -> Extraction ->Indexing -> Retrieval -> Answer Generation.** 

    The platform efficiently ingests content from various sources, applies advanced extraction techniques to understand complex formats, and uses sophisticated indexing and retrieval methods to identify the most relevant information. This information is then passed to a Large Language Model to generate clear, human-like responses. Search AI supports flexible LLM integration, enabling enterprises to utilize built-in models, third-party providers (such as OpenAI or Azure), or even bring their custom or fine-tuned LLMs.
    To further enhance response quality, Search AI uses Agentic RAG Architecture to optimize query interpretation and retrieval. By combining autonomous agent capabilities with RAG, it can break down complex queries, retrieve targeted knowledge from specific sources, and generate highly contextual answers.

* **Expanded Connectivity and High-Speed Crawling**: Search AI provides a robust and flexible content ingestion framework that enables enterprises to integrate data from diverse sources seamlessly. This ensures quick access to accurate information and simplifies the discovery of relevant answers. 
    * **Connector Ecosystem**: Supports **60+ out-of-the-box connectors** to ingest structured content from popular CRMs, CMSs, cloud storage platforms, productivity suites, and collaboration tools like Salesforce, SharePoint, Google Drive, Confluence, and more.
    * **Web Content Integration**: Advanced **web crawling** capabilities designed to handle **complex site structures** and **dynamically loaded content**, ensuring reliable and efficient indexing of online information.
    * **File & Folder Support**: Easily ingest files in various formats (PDF, DOCX, TXT, etc.) from local or cloud-based storage—ideal for processing structured and unstructured documents at scale.

* **Advanced Content Extraction**: Once ingested, Search AI offers a powerful and customizable extraction strategy framework that adapts to different content formats, structures, and enterprise needs. This ensures that meaningful data is extracted accurately and efficiently for search. Supported extraction strategies include:
    * Text Extraction Model
    * Layout Aware Extraction
    * Advanced HTML Extraction
    * Custom Extraction
    * Markdown Extraction
    * Image-Based Document Extraction

* **Flexible Content Enrichment**:Search AI features an intuitive and powerful enrichment framework through its Workbench tool, enabling teams to transform and refine extracted content before it is indexed. This is accomplished through a series of steps known as stages. The enrichment process is essential for ensuring high-quality, contextually rich data that drives accurate responses. The workbench can be used for Metadata injection, noise reduction, or custom business-specific updates. 

* **Vector Generation**: Search AI includes a highly optimized vector generation pipeline to convert processed content into dense embeddings, enabling advanced semantic search and RAG workflows. 
    * Generate high-quality, context-aware vector representations using advanced embedding models for accurate semantic retrieval.
    * Leverage VDR embeddings to create vectors from image-based or visually structured documents.
    * Configure which content fields are used for embedding, allowing flexible and targeted vectorization based on your data structure and retrieval needs.

* **Advanced Content Retrieval**: Search AI provides powerful, intelligent retrieval capabilities, ensuring users receive the most relevant and context-aware responses. Key technologies include:
    * Hybrid RAG: Utilizes a hybrid retrieval method based on RAG Fusion, combining multiple keyword and vector scores to significantly boost accuracy, relevance, and performance of search results.
    *  Semantic-Powered Search: Replaces traditional keyword-based retrieval with semantic search, enabling the system to understand the intent and context behind a query. This provides deeper, more relevant results tailored to user needs.

* **Search vs. Automation Setting**: You can either keep Automation First and Answers as a fallback or otherwise.  
<img src="../images/xo-platform-Search vs. Automation Setting.png" alt="Search vs. Automation Setting" title="Search vs. Automation Setting" style="border: 1px solid gray; zoom:70%;">  
    
[Learn more about Search AI features :octicons-arrow-right-24:](../searchai/about-search-ai.md)

<hr>

### Contact Center AI

Contact Center AI (previously SmartAssist) is now a part of AI for Service. You can now leverage Automation AI Use Cases and Search AI Answers to automate regular customer queries and seamlessly transfer them to a human agent as needed. The new Campaigns module helps streamline outbound voice and web campaigns. It provides templates and analytics to easily create targeted campaigns, reach audiences efficiently, track performance, and achieve goals more effectively.

Key updates are summarized below.

**Experience Flows**

* OnConnect/Welcome Events merged into unified Experience Flows for streamlined logic management.
* Revamped Flow Builder with intuitive interface similar to Dialog Builder for seamless transition.
* Enhanced automation through merged Conversational Input and Run Automation Nodes into single "Automation" entity.
* Deflect to Chat feature deprecated due to limited customer usage.
* Improved workflow reduces confusion and simplifies app invocation.

**Publishing**: Centralized Publish Module ensures consistency and simplifies workflow management across all flows

**Channels**

* Omni-channel Setup: Seamless integration of voice, chat, email, social media, and custom SDKs for unified customer experience
* Voice Gateway: Kore.ai Voice Gateway enables natural language voice interactions for inbound calls
* Selective Routing: Choose between automation or human assistance based on complexity, urgency, or preference
* Digital Channels: Extended support for social platforms, enterprise messaging apps, and custom SDKs
* 3rd Party Integration: Compatible with existing IVR systems to leverage current infrastructure

**User & Role Management**

* App-level user definitions with granular role-based access control.
* Additional contact center attributes for enhanced customization.
* Administrator/Admin role deprecated and seamlessly transitioned to custom roles with equivalent 
permissions.
* Improved permission management for specific requirements.

**Architecture**: Simplified AI Agent architecture merges Instance and Automation apps into single entity (new accounts only; existing accounts maintain separate bots during migration)

**Campaigns Module**

* Voice Campaigns: Personalized voice technology for targeted outreach with interactive experiences
* Proactive Web Campaigns: Digital campaigns to increase visibility, generate leads, and build brand awareness
* Create campaigns from scratch or use pre-defined templates for consistency and efficiency
* List Management: Organize Contact Lists and maintain Do Not Contact (DNC) compliance
* Dashboard: Comprehensive campaign overview showing active/inactive/completed status with drill-down insights
* Settings: Configure maximum concurrent calls for optimal performance

[Learn more about Contact Center AI features :octicons-arrow-right-24:](../release-notes/11.x/contact-center-ai.md#v1100-march-30-2024)

<hr>

### Agent AI

Agent AI (previously AgentAssist) is now a part of AI for Service. It is an AI-powered assistant for contact centers that enhances agent efficiency and service quality. It automates repetitive tasks like information retrieval and transactions and provides real-time customer insights and suggestions. By using Kore.ai's NLP and AI/ML technologies, AgentAI understands customer intent and offers contextually appropriate responses and FAQs. AgentAI operates as a widget within popular contact center platforms, supporting both voice and chat interactions.

The key features and experience changes are summarized below.

* **Configuration**: The Configuration section lets users customize the various aspects of Agent AI. This section includes:
    
    * **Welcome Events**: Welcome Events are pre-configured messages or prompts that are automatically triggered when a conversation is assigned to an agent in Agent AI. Welcome Events guide agents to handle inquiries effectively by streamlining workflows, lowering their Average Handle Times (AHT), reducing repetition, and contributing to enhanced customer satisfaction. [Learn more :octicons-arrow-right-24:](../agentai/configuration/conversation-events.md#welcome-events)

    * **Answer Configuration**: SearchAssist provides an intelligent, contextual, and personalized experience in every interaction across web and mobile channels. You can enhance the search capabilities of Agent AI by integrating it with the SearchAssist application. [Learn more :octicons-arrow-right-24:](../searchai/answer-configuration.md)

    * **Widget Settings**: The Agent AI Settings page lets users set the Agent AI widget’s appearance. On this page, users can decide what features they want on the widget, how the widget’s search functionality should work, the channel-specific settings, the landing page, and the URL opening behavior. [Learn more :octicons-arrow-right-24:](../agentai/configuration/widget-settings.md)

* **Channels**:

    * **Voice Gateway**: Voice Gateway (VG) helps configure how Contact Center AI handles automation for inbound voice calls.

        By going to **Automation AI** > **Flows & Channels** > **Channels** > **Kore.ai Voice Gateway**, you can add phone numbers, set up SIP Transfer, and configure the voice preferences to personalize the Automatic Speech Recognition (ASR) Engine and the voice that plays for your Text-to-Speech (TTS) conversions. In this section, you can enable the AI Agent on the Voice channel using the built-in voice gateway that allows you to purchase a new phone number or use your existing phone number (with SIP transfer). [Learn more :octicons-arrow-right-24:](../channels/voice-gateway/configure-voice-gateway.md)

    * **Web/Mobile Client**: To use any Kore.ai Bot SDKs, you must first register your app to get the authentication credentials to communicate between the Kore.ai bot and your application hosting the bot. The Kore.ai bot SDKs can be used to add a chat widget to your company application that enables users to chat with the application using natural language input. The Kore.ai platform interprets the user input, processes the request, and responds to the user. In this section, you can enable the AI Agent to be on digital channels, including live chat platforms, third-party messengers, and more. [Learn more :octicons-arrow-right-24:](../channels/add-web-mobile-client.md)

* **Experience**:

    * **Agent Coaching**: The Real-time Agent Coaching feature enables real-time coaching based on the analysis of agent utterances and speech. You can set up specific utterances and speech patterns for Agent AI to take relevant actions, such as providing hints and nudges or emailing the manager when those patterns occur. In this section, you can create and manage Agent Coaching Rules to be triggered during User-Agent Interactions. [Learn more :octicons-arrow-right-24:](../agentai/agent-experience/agent-realtime-coaching.md)

    * **Agent Playbook**: Contact center agents are expected to provide the best customer experience despite high call volumes and complex interactions. To empower agents in this endeavor, AgentAssist introduces the Playbook feature—a standard tool offering structured guidance for handling customer interactions. In this section, you can create and manage the adherence checklist to be triggered for an Agent in a conversation with the user. [Learn more :octicons-arrow-right-24:](../agentai/agent-experience/playbook.md)

* **Dashboard**: The Agent AI Dashboard provides the Agent AI Widget’s performance data and the end user’s (agents and customers) behavioral trends. You can filter data by channel or time period. You can also view the total number of sessions and widget suggestions, the average number of widget suggestions used per session, which automations helped agents resolve customer issues, what the agents are searching for, automation performance results, and agent feedback in the form of likes and dislikes. [Learn more :octicons-arrow-right-24:](../analytics/contact-center/agentai-dashboard.md)

[Learn more about Agent AI features :octicons-arrow-right-24:](../agentai/about-agent-ai.md)

<hr>

## Current Limitations

* Solutions like BankAssist, HR Assist, and IT Assist cannot be upgraded to v11.

* The App language (display language) is available in English, Japanese (Beta), Korean (Beta), Simplified Chinese, and German (Beta).

<hr>

<font size="4"> Related Links</font>

* [Key UI Differences - v11 vs. v10](key-differences-between-xo11-and-xo10.md)
* [Migration Path for Existing Customers - Upgrade Journey](migration-path-xo10-to-xo11.md)
