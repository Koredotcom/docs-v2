---
hide:
  - toc
  - feedback
---

# AI for Service (XO)

AI for Service is an enterprise-grade foundation for building AI Agents at scale to transform customer service operations through intelligent automation, agent augmentation, and personalized customer engagement. The platform deploys Agentic AI capabilities across the service lifecycle—from self-service interactions to agent assistance to proactive outreach—enabling organizations to scale service operations while improving both customer satisfaction and operational efficiency.

The platform also provides a flexible approach, enabling organizations to strategically combine deterministic workflows for regulated or compliance-critical operations with agentic capabilities for flexible, natural conversation handling. 

## Comprehensive Suite of Products and Services

AI for Service offers a comprehensive suite of products, features, and services to help businesses leverage AI to deliver exceptional customer experiences, improve operational efficiency, and drive business growth.

**Key Products, Features, and Services:**

<img src="../images/xo-platform-components.png" alt="New Unified XO Platform" title="New unified XO Platform">

=== "Automation AI"

    Automation AI offers agentic conversational experiences through DialogGPT and AI Agents, enabling multi-turn engagements that understand intent, retain context, and respond naturally. It empowers organizations to build sophisticated AI Agents that can handle complex customer interactions, manage interruptions, and provide clarifications for personalized, self-service experiences. Comprehensive testing tools ensure smooth, reliable deployments by identifying and fixing issues before they reach users.
    
    Key Features:
    
    * DialogGPT: Orchestrates conversations autonomously using embeddings and generative models—no training data required.
    * Agent Flows: Combines Dialog Tasks with Agent Nodes to create intelligent workflows that adapt dynamically to user needs.
    * AI Agent: Enables tool-calling through Agent Nodes to manage complex tasks with contextual intelligence and external integrations.
    * GenAI Framework: Enhances automation capabilities with generative AI.
 
    
    [Learn more about Automation AI features :octicons-arrow-right-24:](../automation/about-automation-ai.md)

=== "Search AI"

    Search AI offers AI-powered conversational search tools to quickly and accurately retrieve information from vast datasets and offer the most relevant piece of information to users. You can add multiple data sources to build your answer index, including website crawlers, structured data, unstructured documents, catalogs, and knowledge bases. You can also enrich and enhance your content to meet the specific needs of your users in accordance with your business needs. By combining Automation AI Use Cases and Search AI, businesses can create an exceptional, seamless conversational experience for their users.
    
    Key Features:
    
    * Knowledge AI with LLM: Integrates large language models to enrich knowledge bases.
    * Retrieval Augmented Generation: Enhances information retrieval with generative AI.
    * Advanced RAG: An advanced version of retrieval augmented generation for improved search capabilities.  
    
    [Learn more about Search AI features :octicons-arrow-right-24:](../searchai/about-search-ai.md)

=== "Contact Center AI"

    Contact Center AI offers a conversational AI-native Contact Center-as-a-service solution to enhance customer experience, increase revenue, and reduce operational costs. It helps create consistent, personalized, intelligent, and effortless customer and agent experiences across channels. You can leverage Automation AI use cases and Search AI to automate regular customer queries and seamlessly transfer them to a human agent as needed. The new Campaigns module helps streamline outbound voice and web campaigns. It provides templates and analytics to easily create targeted campaigns, reach audiences efficiently, track performance, and achieve goals more effectively.
    
    Key Features:
    
    * Routing & Experience Flows: Manages the routing of queries and the flow of customer experiences.
    * Agent Desktop: Provides a centralized workspace for agents.
    * Campaigns: Tools for managing voice and proactive web campaigns.  
    
    [Learn more about Contact Center AI features :octicons-arrow-right-24:](../contactcenter/about-contact-center-ai.md)

=== "Agent AI"

    Agent AI is your agent’s personal agent. It offers AI-native agent assistance to boost your contact center agents’ productivity and customer satisfaction. You can set up AI-powered automation workflows to empower your agents to deliver exceptional customer service by offering real-time assistance, the next best action, built-in Knowledge AI, automated assistance, and real-time guidance.
    
    Key Features:
    
    * Real-time AI suggestions: Offers live AI-powered guidance to agents.
    * Auto-fulfillment: Automates the completion of tasks and processes.
    * Agent Coaching & Playbooks: Provides resources and strategies for agent training and performance.  
    
    [Learn more about Agent AI features :octicons-arrow-right-24:](../agentai/about-agent-ai.md)

=== "Analytics"

    The Analytics Module provides a comprehensive 360-degree view of all voice and digital conversations across channels. It offers insightful dashboards, including containment information, conversation history, automation analytics, generative AI logs and analytics, search analytics, and contact center analytics. The module empowers your teams with data-driven insights, enabling them to make informed decisions to meet their targets.
    
    Key Features:
    
    * AI Agent - User Conversational Insights: Analyzes and provides insights on interactions between users and AI agents.
    * AI Agent Performance Insights: Monitors and evaluates the performance of AI agents.
    * Contact Center Quality AI Insights: Offers insights to improve contact center operations.  
    
    [Learn more about Analytics features :octicons-arrow-right-24:](../analytics/introduction.md)

=== "Platform Services"

    Common services help manage the entire lifecycle of products and services easily. You can configure the settings and the services once and use them across the Platform for all products and services.
    
    Key Services:
    
    * Life Cycle Management: Tools for managing the lifecycle of apps and services, including versioning, publishing, and collaboration.
    * Multi-lingual Support: Offers support for multiple languages.
    * Pre-built Integrations: Provides ready-to-use integrations with other systems.
    * Generative AI: Utilizes generative AI across the Platform.
    * Omnichannel: Ensures a seamless experience across various communication channels.  
    
    [Learn more about Common Services :octicons-arrow-right-24:](../app-settings/app-profile.md)

=== "Enterprise Services"

    The Platform empowers enterprise customers with additional services.   
    
    Key Services:
    
    * Role-based Access Controls, Audit Logs: Ensures security and accountability through access management and logging.
    * Security, Compliance (SOC-2, PCI, FedRAMP, HIPAA, GDPR): Compliant with major security and privacy standards.
    * Cloud and On-Premise Deployments: Flexible deployment options.
    * Scalability, Integrations, Authentication, and Authorization: Ensures the Platform can scale and integrate securely with other systems.  
    
    [Learn more about Enterprise Services :octicons-arrow-right-24:](../administration/adminconsole.md)

<hr>

## Integrated Architecture for Omnichannel Customer Engagement

The image below provides a high-level understanding of AI for Service capabilities, the integrated nature of its components, and how they work together to support customer engagement across multiple channels.

<img src="../images/xo-platform-components-flow.png">


1. Entry channels serve as the first point of contact, including Digital channels, Voice Gateways, and third-party IVR systems.

2. These channels feed into the Start or Exit flows, which handle the initial and final stages of interactions. The flow can branch out into an appropriate customer service flow, depending on the implementation.

3. Customer service flows:
    
    * Automation flow: The flow uses an agent to handle complex interactions with AI. In addition, Search AI retrieves information from vast datasets and feeds the most relevant information to users using the agent.

    * Agent transfer flow: The flow routes requests to live agents through the Contact Center or Agent Desktop. Agents receive AI-powered assistance during customer interactions. The flow can also connect with third-party Contact Centers.

4. Supporting systems:

    * Campaigns work with the Contact Center to manage outbound voice and web marketing efforts.
    
    * Analytics gathers data to provide insights into user interactions and system performance.
    
    * App Management handles the platform's administrative tasks such as publishing, importing/exporting apps, user management, collaboration, and billing.

<hr>

##### Related Links

* [What's New in AI for Service (XO) v11](whats-new-in-xo-platform.md)
* [Key Differences Between v11 and v10](key-differences-between-xo11-and-xo10.md)
* [Upgrade Journey: Migration Path for Existing Customers](migration-path-xo10-to-xo11.md)