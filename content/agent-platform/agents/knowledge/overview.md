# Search AI: Empower AI Agents with Enterprise Context 

The **Search and Data AI** is a critical enterprise context layer for AI agents, enabling them to deliver intelligent and context-aware responses. 

Without rich, relevant context, even the most sophisticated AI agents operate with significant limitations, resulting in uninformed decisions, generic responses, and failure to deliver business value. Search and Data addresses this challenge by connecting AI agents to an organization's complete knowledge ecosystem through the following key capabilities:

* **Extensive Data Connectivity**: The platform offers 100+ connectors to various content repositories and knowledge bases, including SharePoint, Confluence, ServiceNow, OneDrive, Google Drive, Slack, and Teams. This allows AI agents to access a wide range of enterprise knowledge sources.
* **Enterprise Application Integration**: Structured data connectors to business applications like Salesforce, ServiceNow, Jira, and HubSpot enable agents to access real-time business data. This integration ensures that AI agents have the most up-to-date information to respond accurately.
* **Advanced Hybrid Search Capabilities**: The platform features hybrid text and multi-vector weighted search, programmable intelligent extraction pipelines, and customizable query pipelines. These advanced search capabilities allow AI agents to retrieve the most relevant information from the indexed content.
* **Enterprise Security Compliance**: The platform integrates with existing access control mechanisms to ensure data governance and maintain security protocols. This ensures that AI agents operate within the organization's security framework.
* **Contextual Intelligence Engine**: The platform provides AI agents with dynamic enterprise and user context essential for effective operations. This contextual intelligence enables agents to deliver personalized and relevant responses.
* **Seamless Agent Enablement**: The platform supplies AI agents with relevant contextual information for handling complex tasks. This seamless integration allows agents to leverage the full potential of the organization's knowledge ecosystem.

## Knowledge Integration

The Platform enables easy integration with Search AI via **AI for Service** and offers seamless search capabilities on content from various sources. The Search AI application is at the core of this integration, which facilitates **Retrieval-Augmented Generation (RAG)-based search** across various content sources, such as enterprise knowledge bases, document repositories, FAQs, and third-party systems.

This advanced RAG-based architecture enables autonomous agents to deliver context-aware, accurate, and timely responses using information from knowledge sources.

## Search AI

**Search AI** is an advanced AI-driven **RAG-based search solution** that enables organizations to search across large datasets conversationally. It combines LLM capabilities with intelligent retrieval to generate accurate and context-aware answers. These answers can be provided to fulfill user queries.

Search AI enables an end-to-end workflow for creating a robust, intelligent, and scalable knowledge experience. This involves three stages, as illustrated and explained below.

![Search AI](images/searchai.png "Search AI")


### Ingestion

Integrate and index content from diverse data sources to build a unified knowledge base. Search AI provides a versatile solution for data ingestion, supporting methods such as [web crawling](https://docs.kore.ai/xo/searchai/content-sources/web-crawl/), [directory indexing](https://docs.kore.ai/xo/searchai/content-sources/directory/), and [connectors](https://docs.kore.ai/xo/searchai/content-sources/connectors/) for third-party applications.


### Enhancement and Vector Generation

Refine and enrich the ingested content to align with specific organizational needs and improve the quality of answer generation. Key aspects of enhancement include:


* [Processing ingested content using Workbench](https://docs.kore.ai/xo/searchai/workbench/introduction/): Clean up irrelevant content, remove noise, tag or annotate content with custom metadata, or apply rules to exclude or update content. 
* [Selecting the most suitable embedding models and fields for vector generation](https://docs.kore.ai/xo/searchai/index-configuration/): This involves choosing the right models to convert the content into vector representations and specifying which parts of the content (such as title, body, metadata) should be used for vectorization. This ensures that the semantic meaning of the content is accurately captured. 


### Retrieval

Set up retrieval and answer generation strategies to deliver the most accurate and relevant information to the users, including: 

* [Selecting the optimum retrieval strategy](https://docs.kore.ai/xo/searchai/retrieval/): This defines how relevant content is fetched in response to user queries. Search AI supports Vector Retrieval and Hybrid Retrieval. 
* [Query Processing to improve retrieval relevance](https://docs.kore.ai/xo/searchai/rag-agents/): Leverages LLM to enhance and clarify user queries by understanding the context and user intent. Also identifies key terms within a query and removes noise from the user query. This helps improve query understanding and retrieval accuracy. 
* [Answer Generation configuration](https://docs.kore.ai/xo/searchai/answer-generation/): Define how responses are composed based on retrieved content. You can configure whether the response should be extractive (directly from content) or generative (summarized and rephrased). For generative answers, configure further properties for optimized results. 

[Learn more about Search AI](https://docs.kore.ai/xo/searchai/about-search-ai/).


### An Example Scenario

Suppose an AI agent is designed to answer questions about a company’s product offerings. The relevant details are available on the company’s public website. The agent can configure a knowledge tool that uses Search AI to index the website’s content.

When a user asks, “What AI solutions does the company offer?”, the agent retrieves information directly from the indexed content and delivers an accurate, up-to-date answer.

![Flow](images/knowledgetoolflow.png "Knowledge Tool Flow")

### Accessing and Managing Search AI Applications

Click on **Search AI** to view and manage all Search AI applications available in your current workspace. These applications can be integrated directly into Agentic Apps as **Knowledge Tools** to power intelligent search experiences. The Linked Apps column lists the agentic apps that utilize a given Search AI integration. 

![Integrate Search AI](images/integrate-searchai.png "Integrate Search AI")


From this page, you can also create a new Search AI application:


1. Click **+ New Integration**.
2. Provide a name and description for your application.
3. Once the application is created, click **Manage Content** to open it in **AI for Service**.
4. Configure the application as needed to suit your use case.

To include these integrations in your Agentic App, go to the Knowledge page of the corresponding app and add them.  
