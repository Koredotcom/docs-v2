# Search AI Release Notes

This document provides information on the feature updates and enhancements introduced in **Search AI** of AI for Service (XO) v11.x releases.

## v11.21.1 January 31, 2026
<u>Patch Release</u>

This update includes enhancements and bug fixes. The key enhancements included in this release are summarized below.

<font size="4">Streaming Support for Search AI Answers</font>

Search AI now streams LLM-generated answers in real-time, displaying responses token-by-token as they're generated. This creates a more interactive experience and reduces wait times for longer answers. To use streaming, use the new default streaming prompt or add streaming options to your custom prompt. Note that streaming is not available for API-based responses and is currently supported only for OpenAI and Azure OpenAI models. 

[Learn more :octicons-arrow-right-24:](./../../searchai/answer-streaming.md)


<font size="4">Webhook-Based Content Updates</font>

Search AI now supports webhooks for near real-time content synchronization with Confluence Server and ServiceNow. Webhooks capture create, update, and delete events directly from these systems, ensuring content stays up to date between scheduled syncs and improving indexing efficiency.
Note that this update doesn't support syncing user information for updated content and Confluence spaces.

[Learn more :octicons-arrow-right-24:](../../searchai/content-sources/connectors/confluence-server.md)

<hr>

## v11.21.0 January 17, 2026
<u>Minor Release</u>

This update includes enhancements and bug fixes. The key enhancements included in this release are summarized below.

<font size="4">Export and Import Search AI Apps via Public APIs</font>

Search AI now supports app configuration export and import via public APIs, enabling easy migration and backup. Users can initiate an app-export job and track its progress using the job-status API, which returns the download URL for the exported JSON file upon completion. For imports, users can upload a config file and then programmatically trigger an app-import request. This capability allows admins to efficiently replicate configurations across apps. Supported configurations include chunk processing stages, advanced configurations, business rules, search results config, answer generation settings, and answer retrieval configuration.

[Learn more :octicons-arrow-right-24:](./../../apis/searchai/api-list.md)

<font size="4">Github Connector Enhancements: Support for Multiple Auth Profiles</font>

Search AI now supports ingesting and indexing content from multiple GitHub organizations using the same GitHub connector with multiple profiles. 

Key Features

* Add multiple GitHub authentication profiles, each representing a different organization.
* Filters and Manage Content configurations are maintained separately for each organization.
* Permissions, Content Types, and Sync Schedules are shared across all GitHub authentication profiles.

[Learn more :octicons-arrow-right-24:](../../searchai/content-sources/connectors/github-onprem.md)

<hr>

## v11.20.0 December 07, 2025

<u>Minor Release</u>

This update includes enhancements and bug fixes. The key enhancements included in this release are summarized below.

<font size="4">Access Control Enhancements</font>

Search AI now automatically enforces RACL rules at design time for all new workspaces, protecting sensitive content. Access is based on the permission settings defined in the connector. Existing workspaces retain full design-time access for backward compatibility, with runtime access following source-system RACL rules. When design-time RACL is enabled, queries made through the public API return only public content. To enable design-time RACL for existing workspaces, contact support. 

[Learn more :octicons-arrow-right-24:](./../../searchai/content-sources/racl-support.md)

<font size="4">Connector Enhancements</font>

**New Axero Connector**

The Axero connector enables ingestion and management of content from the Axero knowledge base platform, including Pages, Wiki, Discussions, Documents, Articles, Announcements, Blogs, and associated comments. The connector also preserves hyperlinks within content for use in the answers.

[Learn more :octicons-arrow-right-24:](./../../searchai/content-sources/connectors/axero.md)

**GitHub Connector**

The GitHub Connector now supports additional content types, including the conversations on pull requests,  issue threads, file names, and wiki pages. It also improves incremental synchronization of ingested content, ensuring that any new, updated, or deleted content is processed incrementally.

[Learn more :octicons-arrow-right-24:](./../../searchai/content-sources/connectors/github-onprem.md)


**Custom Connector**

Search AI enhances the Custom Connector configuration by introducing a new per-header Encoding Format option. Developers can choose whether a header value should be Base64-encoded or sent as plain text, providing greater flexibility for integrations and removing the previous limitation that forced Base64 encoding for all headers. 

[Learn more :octicons-arrow-right-24:](./../../searchai/content-sources/connectors/custom-connector.md)


<font size="4">Deprecation and Automatic Migration Notice</font>

To improve platform performance and stability, Search AI is automatically upgrading legacy embedding models, legacy re-ranker models, and the legacy web crawler. Starting December 7, 2025, the following components will be automatically upgraded in applications where they're in use:

* Embedding Models: MPNet, LaBSE, E5, and BGE-M3 V1 are upgraded to BGE-M3 V2. Users must trigger training to apply the changes to their index.
* Re-rankers: MS MARCO Cross Encoder and Mixbread Large are upgraded to BGE Re-ranker. This change applies automatically with no user action required.
* Legacy Web Crawler: The legacy web crawler is replaced with the AI-Powered Crawler. Users must trigger a re-crawl to extract content using the new crawler.

After migration, manual retraining of Search AI applications is required to ensure the updates take effect and maintain optimal performance. 

[Learn more :octicons-arrow-right-24:](deprecations.md)


<hr>

## v11.19.1 November 19, 2025

<u>Patch Release</u>  

This update includes enhancements and bug fixes. The key enhancements included in this release are summarized below.

<font size="4">Enhanced Default Extraction Strategies</font>

Search AI now offers optimized default extraction and chunking strategies tailored to each content type and source, enabling more accurate, efficient data processing automatically. These enhanced defaults are automatically applied to new apps.

[Learn more :octicons-arrow-right-24:](./../../searchai/content-extraction/extraction.md#default-extraction-strategies)

<font size="4">View Document Access Controls</font>

Search AI introduces new UI capabilities to provide greater visibility into RACL implementations. These enhancements are currently available only for the following connectors: Google Drive, HubSpot, Jira, Confluence Cloud, Confluence Server, Bitbucket, SharePoint, ServiceNow, Asana, Guru, and JFrog.

* Permission Entity Viewer: View the groups, sub-groups, and users assigned to each permission entity.
* Document Permissions: Lists and displays the users and groups who have access to each document.

These features help admins and developers validate that permissions are correctly enforced across the platform.
[Learn more :octicons-arrow-right-24:](./../../searchai/content-sources/connectors.md#permission-entities)

<font size="4">Connector Enhancements</font>

**Slack Connector**

The Slack Connector now offers enhanced flexibility and control for data ingestion:

* API key–based authentication, eliminating the need for channel invitations (required earlier with OAuth) to retrieve channel content.
* Channel-based standard filtering option and advanced date-range based filtering for targeted ingestion.
* Support for crawling message history from the past six months.

**Confluence Data Center Connector**

The Confluence Data Center connector now includes several enhancements to broaden content coverage and improve indexing control.

* Expanded ingestion support for blogs and spaces, in addition to pages, and comments from both pages and blogs.
* Space-based standard filters for targeted content selection.
* Advanced filtering options for more precise indexing.
* Incremental sync capability and webhook-based deletion handling are available upon request.

**ServiceNow Connector**

Expired articles are now automatically excluded from indexing, ensuring that only valid and up-to-date content is ingested into Search AI.


<hr>

## v11.19.0 October 25, 2025

<u>Minor Release</u>  

This update includes only bug fixes.

<hr>

## v11.18.0 September 27, 2025

<u>Minor Release</U>

This update includes enhancements and bug fixes. The key enhancement included in this release is summarized below.

<font size="4">Dynamic Custom Data Support in Business Rules</font>

Users can now define Business Rules using the customData fields sent via the Advanced Search API. During rule evaluation, context.customData is dynamically bound to the API payload, enabling rules to adapt in real-time based on the provided custom data.

[Learn more :octicons-arrow-right-24:](./../../searchai/business-rules.md)

<hr>

## v11.17.1 September 15, 2025

<u>Patch Release</U>

This update includes enhancements and bug fixes. The key enhancement included in this release is summarized below.

<font size="4">Index Configuration Enhancements</font>

The Vector Configuration page now offers more flexibility when working with custom embedding models and prompts for both text and visual content. 

Key improvements:

* Separate Models and Prompts for Text & Image: Users can now configure distinct embedding models and prompts for text and image vectors. Image embeddings are managed using the *Vector Generation – Image* feature, while text embeddings are handled by *Vector Generation – Text.* The appropriate model is automatically determined based on the chunk extraction method. 
* Simplified Prompt and Model management: Users can now configure and edit prompts directly in the Search AI UI, streamlining the setup process.
* Conditional Custom Prompt UI: The updated interface allows for the creation of new custom prompts directly when a custom model is selected for vector generation.

[Learn more :octicons-arrow-right-24:](./../../searchai/index-configuration.md)


<font size="4">Change Log Support for Public API Events</font>

The enhanced Change Logs now capture events triggered via the public API. This ensures complete visibility into system activity, enabling users to track, audit, and troubleshoot changes with a unified record of events, whether performed through the UI or programmatically.

<hr>

## v11.17.0 August 23, 2025

<u>Minor Release</U>

This update includes enhancements and bug fixes. The key enhancements included in this release are summarized below.

<font size="4">LLM Stage for Document Transformation and Chunk Enrichment</font>

Search AI introduces a new LLM Stage within the pipeline, enabling the seamless integration of large language models into transformation and enrichment workflows. Users can configure this stage using a model from the configured Models Library and a custom prompt. This feature empowers teams to automate content transformation, improve metadata quality, and add custom enhancements to content with minimal effort.

[Learn more :octicons-arrow-right-24:](./../../searchai/workbench/llm-stage.md)


<font size="4">API Stage Enhancements</font>

The API Stage in Workbench has been enhanced to give users more flexibility when integrating with external services during the transform or enrich phase. Users can now include dynamic variables directly in the endpoint URL, in addition to the request body. These variables can be resolved from the document schema or chunk context available at simulation/training time. With this update, the API stage can be used with APIs that depend on document-level details as query parameters.

[Learn more :octicons-arrow-right-24:](./../../searchai/workbench/api-stage.md)


<font size="4">Improved Training Visibility and Control</font>

The training process in Search AI has been enhanced to provide greater transparency and flexibility. Users can now access detailed training logs that provide document-level visibility into the training lifecycle, including insights into errors and failures. This makes it easier to monitor the progress effectively and identify and address issues promptly.

[Learn more :octicons-arrow-right-24:](./../../searchai/application-training.md)


<font size="4">Answer Debug Improvements</font>

The Answer debugging feature has been enhanced to provide comprehensive visibility into the retrieval process for effective troubleshooting, result validation, and a deeper understanding of system behavior. 
Key improvements:

* Image Support: Extracted images are also displayed alongside text content in the Retrieved Chunks tab. 
* Universal Retrieval Tab: This tab displays the retrieval process, including key metrics for each step in the pipeline.  
* Enhanced Error Handling: Provide detailed error visibility in both UI and JSON views.
* UI Improvements: Remove visual clutter and enhance the information hierarchy.

[Learn more :octicons-arrow-right-24:](./../../searchai/testing-and-debugging-answers.md)


<font size="4">Unified Schema Management Enhancements</font>

Search AI introduces a new Manage Schema interface that gives users enhanced control and visibility over document fields based on the unified schema. With this update, users can:

* View key field properties, including field name, description, data type, custom field indicator, and mapped chunk field.
* Create up to 50 custom fields for greater flexibility in data handling.
* Edit descriptions of existing ones to add meaningful references to their system fields. 

[Learn more :octicons-arrow-right-24:](./../../searchai/content-sources/connectors.md)


<hr>

## v11.16.1 August 11, 2025

<u> Patch Release </u>

This update includes bug fixes.

<hr>

## v11.16.0 July 26, 2025

<u>Minor Release</U>

This update includes enhancements and bug fixes. The key enhancements included in this release are summarized below.

<font size="4">Advanced RACL Capabilities in Connectors</font>

The following key enhancements have been made to the RACL feature in Search AI connectors, enabling more secure and efficient access control.

* Introduction of an RACL scheduler that gives the ability to sync RACL-related data from the connectors independently of regular content sync tasks. This provides greater flexibility to keep access permissions in Search AI in sync with those in the third-party applications.
* Automatic mapping of individual users to the permission entities in Search AI. This automation streamlines the implementation process, allowing enterprises to enforce RACL without requiring additional setup or processing. This has been implemented for the following connectors: Google Drive, Jira, SharePoint, Trello, Miro, LumApps, Workday, OneDrive, YouTrack, Zulip, Box, Shortcut, Zeplin, HelpScout, Slack, HubSpot, Zendesk, Microsoft Teams, Salesforce, Hive, GitHub, Aha, JIRA On-Prem.
* RACL support for the Confluence Server connector.

[Learn more :octicons-arrow-right-24:](./../../searchai/content-sources/racl-support.md)

<font size="4">Simplified LLM Setup within Answer Configuration</font>

Users can now configure the LLM directly within the Answer Configuration page, streamlining the setup process and eliminating the need to navigate to the Gen AI features section. This improvement enhances usability and reduces configuration time.

<hr>

## v11.15.1 July 12, 2025

<u>Patch Release</U>

This update includes only bug fixes.

<hr>

## v11.15.0 June 30, 2025

<u>Minor Release</u>

This update includes enhancements and bug fixes. The key enhancements included in this release are summarized below.

<font size="4">Multi-Vector Search</font> 

Search AI introduces **Multi-Vector Search** that allows users to associate multiple vectors with a single chunk of data. This advanced technique significantly improves retrieval accuracy by capturing different essential fields of a chunk. Each vector can be assigned a weight based on the relative importance of the fields used in that vector generation, enabling the system to prioritize specific fields during search and retrieval. This leads to more relevant and accurate results.

For example, consider a document utilizing a dual-vector approach for information retrieval. One vector, generated from the document's content and title, captures detailed context. The other vector, derived from questions related to the content, anticipates user inquiries. By appropriately weighting these vectors, retrieval efficiency is significantly enhanced. This is because the vectors encompass various content aspects, such as title, content, and derived questions, resulting in improved alignment with diverse user queries.

[Learn more :octicons-arrow-right-24:](./../../searchai/index-configuration.md)


<font size="4">Enhanced Multilingual Support</font>

Search AI now supports over 100 languages, enabling a seamless multilingual experience across content ingestion, query understanding, and result delivery. Users can:

* Add and organize content in these languages.
* Understand and interpret queries in these languages.
* Search and deliver answers and results in the same language as the user query.

Additional enhancements include:

* **Markdown extraction support** for Hungarian, German, and Chinese, improving the accuracy of content parsing in these languages.
* **Image-based extraction** and **Advanced HTML extraction** are now supported for German, enabling richer parsing of complex and visually structured documents.

[Learn more :octicons-arrow-right-24:](./../../searchai/language-support.md)


<font size="4">API Stage in Document Workbench</font>

Search AI now features a new **API stage** in the **Chunk Enrichment** process. This enhancement allows users to leverage external services for content transformation. Users can specify a custom POST API endpoint along with the necessary headers and request body to send chunks for enrichment. This integration facilitates seamless collaboration with third-party tools, enabling the classification, tagging, or enhancement of metadata for the chunks. 

<font size="4">Enhanced Insights Export API</font>

The **Analytics Export Public API** now supports additional filtering parameters, providing more granular control over exported data. These new filters work in conjunction with the existing group and filter date-based keys to enable more targeted analytics exports.

With this enhancement, you can now include the following optional filter in the API request payload:

* **eventTypes**: Filter data by user feedback events such as 'thumbsUp' or 'thumbsDown'.

[Learn more :octicons-arrow-right-24:](./../../apis/searchai/answer-insights.md)


<font size="4">New Connector Support in Search AI </font>

Search AI introduces out-of-the-box connectors for the following platforms. These connectors enable seamless content ingestion from both cloud and self-hosted environments, expanding integration flexibility across enterprise systems.

* **Confluence Data Center**
* **xMatters**
* **Jira On-Prem**
* **JFrog On-Prem**
* **GitHub On-Prem**

[Learn more :octicons-arrow-right-24:](./../../searchai/content-sources/connectors/connector-directory.md)


<font size="4">Enhancements to Existing Connectors</font>

Search AI now offers improved capabilities through enhancements to existing connectors:

* **Zoom Connector**: Added support for advanced filters to refine content retrieval.
* **LumApps Connector**: Now supports fetching and indexing attachments, enhancing search coverage and relevance.

[Learn more :octicons-arrow-right-24:](./../../searchai/content-sources/connectors/connector-directory.md)

<hr>

## v11.14.1 June 14, 2025

<u>Patch Release</u>

<font size="4">Enhanced Date Filtering for Jira Connector</font>

The Jira connector now supports **customizable date filters**, offering users greater control over data ingestion. Users can now define custom date ranges for data ingestion as part of standard filters. Once configured, the connector automatically syncs and ingests data for the specified time frame, allowing for more targeted, relevant, and flexible data extraction based on specific requirements. 

[Learn more :octicons-arrow-right-24:](./../../searchai/content-sources/connectors/jira.md)

<hr>

## v11.14.0 May 31, 2025

<u> Minor Release </u>

<font size="4">API Stage in Document Workbench</font>

Search AI now features a new **API stage in the Content Transformation process** within the Extraction Module. This enhancement allows users to leverage external services for content transformation. Users can specify a custom POST API endpoint along with the necessary headers and request body to send extracted content for enrichment before chunking. This integration facilitates seamless collaboration with third-party tools, enabling the extraction, classification, and transformation of metadata and content.

[Learn more :octicons-arrow-right-24:](./../../searchai/content-extraction/transformation.md)

<font size="4">New and Improved Web Crawler</font>

Search AI now includes a new and improved web crawler, designed for better performance and higher-quality content extraction. 

Key enhancements

* Improved Performance with above 80% reduction in crawling time. 
* Enhanced Stability and Reliability with complex web pages.
* Optimized JavaScript Crawling & Memory Management with reduced resource usage. 
* Enhanced Sitemap Processing with asynchronous sitemap fetching and application of crawl depth limits and URL filters at the fetch stage for faster processing.
* Default Exclude Tags like header, footer, script, style, form, iframe, noscript, etc., to improve content relevance.
* Improved Error Handling in case of crawl failures and timeouts. 

Existing applications will continue to use the current crawler. 

<font size="4">Dynamic Prompt and Model Selection in Answer Generation APIs</font>

Search AI answer generation APIs (v1 and v2) now support optional fields in the request to specify the **prompt** and **model** for generating answers. This enhancement enables dynamic selection of LLM configurations, allowing users to tailor responses based on context, use case, or audience.

[Learn more :octicons-arrow-right-24:](./../../apis/searchai/advance-search.md)


<font size="4">Enhanced Multilingual Support</font>

Search AI now offers expanded multilingual support with the addition of Spanish to enhance the customer experience. Users can:

* Add and organize content in multiple languages.
* Understand and interpret queries in supported languages.
* Search and deliver answers and results in the same language as the user query.

[Learn more :octicons-arrow-right-24:](./../../searchai/language-support.md)

<hr>

## v11.13.1 May 17, 2025

<u> Patch Release </u>

This update includes only bug fixes.

<hr>

## v11.13.0 May 03, 2025

<u> Minor Release </u>

This update includes enhancements and bug fixes. The key enhancements included in this release are summarized below.

<font size="4">Image-Based Document Extraction</font>

Search AI now supports image-based extraction for complex PDF documents using Vision embeddings. This feature is especially useful for rich-layout PDFs. Each page is converted into an image, and VDR embeddings are generated to capture the visual structure and textual content. This enables accurate and intelligent retrieval from visually complex documents, significantly improving search relevance. Currently, this capability is supported only for PDF files. Learn more.

[Learn more :octicons-arrow-right-24:](./../../searchai/content-extraction/extraction.md)

<font size="4">Enhanced Connector UI</font>

With this release, Search AI introduces a new and improved experience for configuring connectors, making it easier to manage data sources and providing complete control over the type of data ingested and processed, improving the connector configuration experience.

Key enhancements

* Streamlined Configuration: Set up connectors intuitively with improved navigation and layout. 
* Flexible Field Mapping: Gain enhanced visibility and control over how source fields are mapped to the Search AI schema, use the post-processing script to customize mappings, and refer to a detailed field mapping guide that includes schema requirements and sample API responses.

[Learn more :octicons-arrow-right-24:](./../../searchai/content-sources/connectors.md)


<font size="4">Support for Simulator in Document Workbench</font>

Search AI now includes a **Simulator for Content Transformation Stages in the Extraction Module**, enabling users to preview and validate how the configured stages affect the ingested data before vectorization. This helps ensure cleaner, more contextual, and optimized data for AI models. The simulator enhances data quality by allowing users to test and refine transformations, improving search results' accuracy and relevance. [Learn more :octicons-arrow-right-24:](./../../searchai/content-extraction/transformation.md)

<font size="4">New Search AI Connectors</font>

Search AI extends support for two new connectors, enabling seamless content ingestion and retrieval from Teamwork and Opsgenie applications. These connectors enhance enterprise search by integrating knowledge from these platforms. The connectors also enable access control for the content that is ingested from the applications.

In addition to the new connectors, the capabilities of several existing connectors have been expanded, enabling them to ingest additional content types from their respective platforms. This enhancement significantly increases the volume and variety of searchable content.

[Learn more :octicons-arrow-right-24:](./../../searchai/content-sources/connectors/connector-directory.md)

<hr>

## v11.12.1 April 19, 2025

<u> Patch Release </u>

This release includes some enhancements and bug fixes. The key updates are summarized below.

<font size="4">Support for Sending Complete documents to LLM</font>

Search AI now introduces Document-Level Processing, a new configuration that enables sending full documents, alongside relevant chunks, to the LLM for more accurate and context-rich responses. When enabled, Search AI identifies the most relevant chunks and automatically includes their complete associated documents, all within a defined token budget.

This feature is especially beneficial for complex queries that require critical information to be distributed across multiple parts of a document. By providing the LLM with a more comprehensive context, it significantly enhances the quality of the generated answers.

<font size="4">User Feedback Support </font>

Search AI now includes a built-in feedback mechanism that allows users to rate the quality of answers by providing a thumbs-up or thumbs-down. This helps in capturing valuable user sentiment, enabling continuous evaluation and improvement of the responses generated by the system. Feedback can be submitted via the Web SDK or through the public API. 

<hr>

## v11.12.0 April 05, 2025

<u> Minor Release </u>

This update includes enhancements and bug fixes. The key enhancements included in this release are summarized below.

<font size="4">Agentic RAG Architecture</font>

Search AI now features an Agentic RAG architecture that leverages LLMs to improve query understanding and generate optimized retrieval queries for more accurate responses. This system uses autonomous agents to break down complex queries, enable preprocessing, and facilitate multi-step retrieval. The following agents process a user query sequentially to enhance it for effective retrieval and answer generation. 

* Query Rephrasing Agent: Refines the user query by understanding the context and intent, using the previous conversation. 
* Query Transformation Agent: Identifies key terms and removes noise from the query for better retrieval. 
* Result Type Classification Agent: Determines whether the user's query requires a direct answer and search results or only a list of search results in the response.
* Metadata Extractor Agent: Extracts the source and fields from user queries and maps them to standard fields of the source, which helps to apply appropriate filters and enhance retrieval accuracy.

[Learn more :octicons-arrow-right-24:](./../../searchai/rag-agents.md)

<font size="4">Exclude Stage in Document Workbench</font>

Search AI now offers an **Exclude Stage in the Document Workbench** to restrict chunk generation from extracted content. This feature provides greater control over content processing, allowing users to exclude unnecessary content, thereby improving search relevance and reducing processing time. 

[Learn more :octicons-arrow-right-24:](./../../searchai/content-extraction/transformation.md)

<font size="4">Enhanced SharePoint Integration with Restricted Permissions</font>

To address security concerns and provide more controlled access, SearchAI now supports **<code>Sites.Selected</code>** permission for SharePoint integration. This limits access to only the specific site collections explicitly granted by administrators. This is implemented by introducing the **OAuth Client credentials grant type** auth mechanism for SharePoint Integration. 

[Learn more :octicons-arrow-right-24:](./../../searchai/content-sources/connectors/sharepoint.md)


<font size="4">Channel Aware Response Formatting</font>

Search AI now supports **Channel-Aware Response Formatting** to deliver a more engaging and seamless user experience across digital and voice channels. The default prompt has been updated to generate channel-appropriate responses that vary as per the mode of interaction. For voice channels, responses are concise and free of complex formatting, ensuring clear and effective communication. In contrast, digital channels benefit from well-structured responses with enhanced formatting for improved readability and user engagement. Learn more.


<font size="4">Enhanced Multilingual Support</font>

Search AI now offers expanded multilingual support with the addition of the **Ukrainian** language to enhance the customer experience. Users can:


* Add and organize content in multiple languages.
* Understand and interpret queries in supported languages.
* Search and deliver answers and results in the same language as the user query.

[Learn more :octicons-arrow-right-24:](./../../searchai/language-support.md)


<font size="4">Secure One-Time URLs for Uploaded Documents</font>

To enhance security, the citations or references in the search results and answers will now have one-time-use URLs, which **expire after a single** **use or within 15 minutes**, whichever occurs first. This feature applies to all uploaded documents and is enabled by default. It ensures controlled and temporary access to cited documents and aims to prevent the unauthorized sharing of URLs. 

[Learn more :octicons-arrow-right-24:](./../../searchai/advanced-configurations/single-use-URLs.md)


<font size="4">New Search AI Connectors</font>

Search AI extends support for eight new connectors, enabling seamless content ingestion and retrieval from PagerDuty, Figma, LumApps, Zoho CRM, TestRail, DataDog, Jenkins, and Zeplin. These connectors enhance enterprise search by integrating knowledge from various collaboration and productivity platforms. They also enable access control for the content ingested from the applications. Listed below are the connectors and the type of content that can be ingested from the corresponding applications. 

* [DataDog](./../../searchai/content-sources/connectors/datadog.md) - Metrics, Dashboard, and Monitors
* [Figma](./../../searchai/content-sources/connectors/figma.md)– Figma Files
* [Jenkins](./../../searchai/content-sources/connectors/jenkins.md) - Dashboard, Builds, Jobs, and Plugins
* [LumApps](./../../searchai/content-sources/connectors/lumapps.md) - Pages, News, Custom Objects, and Community Posts
* [PagerDuty](./../../searchai/content-sources/connectors/pagerduty.md)– Ingests Escalation Policies and Schedules
* [TestRail](./../../searchai/content-sources/connectors/testrail.md) - Test cases 
* [Zeplin](./../../searchai/content-sources/connectors/zeplin.md) - Screens
* [Zoho CRM](./../../searchai/content-sources/connectors/zoho.md) - Leads, Accounts, Contacts, and Deals

<hr>

## v11.11.1 March 15, 2025

<u>Patch Release</u>

This update include only bug fixes.

<hr>

## v11.11.0 March 04, 2025

<u> Minor Release </u>

This update includes enhancements and bug fixes. The key enhancements included in this release are summarized below.

<font size="4">Salesforce Connector Enhancements</font>

The Salesforce Connector has been enhanced to support custom object ingestion in addition to the capability of ingesting default objects like Knowledge Articles, Cases, Documents, Opportunities, Leads, Contacts, Accounts, and Tasks. During configuration, users can select the type of content to be ingested, providing greater flexibility. Additionally, the filtering feature has been enhanced, allowing users to refine document ingestion based on specific fields. [Learn more :octicons-arrow-right-24:](./../../searchai/content-sources/connectors/salesforce.md)

<font size="4">New Search AI Connectors</font>

Search AI extends support for five new connectors, enabling seamless content ingestion and retrieval from Guru, Miro, Help Scout, Wrike, and Zulip. These connectors enhance enterprise search by integrating knowledge from various collaboration and productivity platforms. The connectors also enable access control for the content that is ingested from the applications.

* [Guru](./../../searchai/content-sources/connectors/guru.md) – Ingests knowledge cards for centralized access to organizational information.
* [Miro](./../../searchai/content-sources/connectors/miro.md) – Enables searching the Miro boards.
* [HelpScout](./../../searchai/content-sources/connectors/helpscout.md) – Enables search across knowledge base articles.
* [Wrike](./../../searchai/content-sources/connectors/wrike.md) – Provides access and searchability for tasks.
* [Zulip](./../../searchai/content-sources/connectors/zulip.md) – Integrates messages from channels into search results and answers.

<hr>

## v11.10.0 February 12, 2025

<u> Minor Release </u>

This update includes enhancements and bug fixes. The key enhancements included in this release are summarized below.

<font size="4">Custom Embeddings Support for Enhanced Vector Generation</font>

The Custom LLM feature now supports Vector Generation in Search AI, allowing users to leverage custom embedding models for improved accuracy and relevance. Users can define custom requests, pre-processors, and post-processors, specify input and output keys, and seamlessly integrate with existing features. Search AI triggers vector generation during indexing and user query processing, while the document browser displays embedding status and allows filtering. This enhancement provides greater control, customization, and monitoring capabilities for delivering tailored search experiences.

<font size="4">Custom Extraction</font>

The new Custom Extraction feature in Search AI enables a tailored approach to extracting content from sources. It sends ingested content to a third-party service, which processes and returns the extracted data in a structured chunk format. This enhances flexibility in handling diverse content extraction needs and ensures improved data retrieval and indexing within Search AI.

[Learn more :octicons-arrow-right-24:](./../../searchai/content-extraction/extraction.md#custom-extraction)

<font size="4">Answer Insights</font>

The new Answer Insights feature provides comprehensive data about each query-response interaction, enabling a better understanding of system performance and easier troubleshooting.

Key features

* View a list of all answers for a grouped query.
* Search logs by answer and channel.
* Filter logs based on channel
* A detailed view of each answer, including query overview, answer debug information, and LLM request-response details (if available).

[Learn more :octicons-arrow-right-24:](./../../analytics/searchai/answer-insights.md)

<font size="4">Search Results and Facets</font>

The new Search Results feature, along with faceted search capabilities, allows retrieving and displaying multiple search results ranked by relevance for each query. 

Key changes

* Search Results now use the same pipeline as Answers for improved accuracy and consistency.
* Search Results Configuration - Enable/disable the feature and set the number of search results to display.
* Faceted search offers default filters, customizable filter creation, and static and dynamic filter types.

[Learn more :octicons-arrow-right-24:](./../../searchai/search-results.md)

<font size="4">Introducing Connector Ingestion Logs for Greater Visibility</font>

Search AI now provides Connector Ingestion Logs, providing file-level status information (successful, failed, or skipped) and pop-ups with error details. Users can now easily identify and troubleshoot issues, understand the actual content available, and re-sync connectors to ensure up-to-date content. The update also improves tracking capabilities and record document sizes in Search AI. 

[Learn more :octicons-arrow-right-24:](./../../searchai/content-sources/connectors.md)

<font size="4">New Connector Experience: Discover and Configure with Ease</font>

The revamped connector experience makes it easier to discover and configure integrations. The new Configured and All Connectors tabs provide a more informative and intuitive interface, with improved search functionality for quick access to connector configuration. These enhancements streamline the process of connecting data sources and leveraging the unified search capabilities.

[Learn more :octicons-arrow-right-24:](./../../searchai/content-sources/connectors.md)

<font size="4">General Availability of Key Features</font>

We are announcing the general availability (GA) of the following important features to all our users: 

* [RACL support in connectors](./../../searchai/content-sources/racl-support.md) 
* [Custom Extraction](./../../searchai/content-extraction/extraction.md#custom-extraction) 
* [Layout Aware Extraction](./../../searchai/content-extraction/extraction.md#layout-aware-extraction)
* [Reranking Chunks](./../../searchai/advanced-configurations/reranking-chunks.md)


<hr>

## v11.9.1 January 25, 2025

<u>Patch Release</u>

This update include only bug fixes.

<hr>

## v11.9.0 January 05, 2025

<u>Minor Release</u>

This update include only bug fixes.

<hr>

## v11.8.1 December 19, 2024

<u>Patch Release</u>

This update include enhancement and bug fixes. The key enhancements included in this release are summarized below.

<font size="4">Content Transformation</font>

Search AI introduces an ETL tool, empowering users to enrich content immediately after extraction and before vectorization. This feature enhances data quality by enabling users to fix errors and enrich data while preserving essential relationships and context between sections of the original document during enrichment.

This tool offers flexibility and control through enrichment stages that can be applied based on the document's extraction strategy. Currently, the following enrichment stages are supported:

* Field Mapping: Map extracted data fields to desired fields.
* Custom Script: Apply custom transformations using custom scripts.

This enrichment process ensures high-quality input for improved answers.

<font size="4">Change Logs</font>

SearchAI introduces a comprehensive **Change Logs** feature to track and manage application updates made by all team members. Users can search logs by user, export them in CSV format, and access them through public APIs. This feature ensures transparency and simplifies auditing and troubleshooting by providing a centralized view of all changes.

<font size="4">Chunk Size Configuration</font>

To leverage the potential of the LLM capabilities, Search AI has now increased the chunk size and the maximum number of tokens sent to the LLM. This update ensures that the LLM receives sufficient context for more accurate and comprehensive answer generation.

* The **default chunk** size has been updated to **1000**, with a maximum limit of **5000** tokens per chunk.
* The value of the maximum number of tokens for **Chunk Overlap** is also increased to **100**.
* A new configuration, **Max Tokens for Chunks**, has been introduced that specifies the total number of tokens that can be included in the chunks sent to the LLM for processing. This allows users to fully utilize the LLM’s context-handling capabilities. This has a default value of 20,000 and can take a maximum value of 10,00,000. 

<hr>


## v11.8.0 December 11, 2024

<u> Minor Release </u>

This update include enhancement and bug fixes. The key enhancements included in this release are summarized below.

<font size="4">Comprehensive Analytics Logs</font>

The new Answer Insights feature provides enhanced visibility into query-response interactions, aiding developers and analysts in debugging, performance improvement, and response quality assessment. 

<font size="4">Enhanced API Support</font>

Search AI now provides expanded API functionality, enabling users to manage content, retrieve chunks, Ingest new content, and Train the application. This enhancement provides greater control and flexibility for application developers.

<font size="4">Enhancement for Hybrid Retrieval Search</font>

Search AI now automates query optimization by removing stop words from user queries when using the Hybrid retrieval strategy. This enhancement improves retrieval accuracy, delivering more relevant and precise search results without requiring manual adjustments.

<font size="4">Public API to fetch the List of Connectors</font>

Search AI now includes a Public API that allows users to retrieve a list of all connectors configured in the application. This addition allows developers to manage connectors programmatically, enhancing productivity.

<hr>

## v11.7.1 November 18, 2024

<u> Patch Release </u>

This update includes enhancements and bug fixes. Key enhancements included in this release are summarized below.

<font size="4">Advanced Search API Enhancement </font>
The Answer Generation API has been enhanced to support passing permission entity IDs, enabling refined and secure search responses. This update provides control over content access and ensures that users receive answers tailored to their permissions.

<font size="4">Introduction of Get Content API</font>
Search AI introduces a new API that enables users to retrieve a document's content, metadata, or both using its ID. This enhancement simplifies access to document data and improves the overall content retrieval experience. 

<font size="4">Permission Entity API Enhancement</font>
The Get Permission Entity API has been enhanced to provide more comprehensive information. The update adds the entity type and source type to the existing permission entity details in the response. This enhancement helps developers gain deeper insights into permission entities, streamlining integration efforts.


<hr>

## v11.7 November 03, 2024

<u> Minor Release </u>

This update include enhancement and bug fixes. The key enhancements included in this release are summarized below.

<font size="4">Support for Custom Connector</font>

Search AI now supports content ingestion from any application using the Custom Content Connector. This connector utilizes the application's REST APIs to ingest content facilitated through the Custom Connector Service. Additionally, Search AI enables access control for content ingested via the Custom Connector, ensuring secure access. This feature enhances flexibility by seamlessly integrating various applications, even without pre-built connectors.

<font size="4">Advanced Filters for ServiceNow and SharePoint Connector</font>

Search AI now supports advanced content filtering within the ServiceNow and SharePoint connectors, enabling users to refine the scope of ingested data from the repositories. This functionality allows administrators to apply specific criteria to select only relevant records or knowledge articles to make searchable. By filtering content based on attributes like status, category, and custom fields, organizations can tailor search responses to meet specific user needs, improving search accuracy.

<font size="4">Ingesting Documents with Attachments in the Confluence Server</font>

Search AI now supports ingesting Confluence Server documents with attachments, streamlining content indexing and retrieval. Users can include documents as attachments with Confluence knowledge articles. The primary content and its attachments are searchable and accessible, enhancing content discoverability and maximizing the accessibility of embedded knowledge. 

<font size="4">Enhanced Multi-Modal Content Preview</font>

End-users and developers can now seamlessly preview content within answers and the chunk browser. This enhanced viewing experience includes zoom functionality for tables and images, allowing users to thoroughly examine complex data and visual content. When content contains multiple images, a new carousel interface presents them in an elegant slideshow format, enabling effortless navigation through all visual assets. This integrated preview system streamlines the user experience by making all content immediately accessible and interactive within the natural workflow.


<hr>

## v11.6.1 October 21, 2024

<u> Patch Release </u>

This update include enhancement and bug fixes. The key enhancement included in this release is summarized below.

<font size="4">Public APIs for Ingesting Structured Data</font>

Search AI introduces public APIs to automate the ingestion and indexing of structured data within the application. Structured data, organized in predefined formats, enables more accurate and relevant search outcomes. This enhancement provides seamless integration for structured data, improving search accuracy and content accessibility.

<hr>

## v11.6.0 September 28, 2024

<u> Minor Release </u>

This update includes enhancements and bug fixes.

<font size="4">Structured Data as a Source Type</font>

SearchAI now enables the ingestion and indexing of structured data in JSON format using the JSON connector, providing greater flexibility in handling complex data. This feature allows users to seamlessly process and search through structured datasets for more efficient and accurate results.

<font size="4">Retrieve Chunk Metadata through Advanced Search API</font>

This enhancement to the Advanced Search API allows users to specify and include custom metadata fields in the generated answers. The API response can now be customized to fetch user-defined metadata fields for each chunk in addition to the default fields, providing a more customized and detailed output.

<hr>

## v11.5.1 September 14, 2024

<u> Patch Release </u>

<font size="4">Advanced Content Extraction from Web Pages</font>

With this release, Search AI introduces advanced support for extracting content from images and tables embedded in web pages. Using advanced extraction technologies, Search AI can now analyze and extract text from image files and complex, structured tables, providing a more comprehensive approach to processing web-based content. This enhancement significantly enhances the application’s ability to index and search diverse content formats.

<hr>

## v11.5.0 September 01, 2024

<u> Patch Release </u>

This update includes enhancements and bug fixes. Key enhancements included in this release are summarized below.

<font size="4">Content Browser</font>

Search AI chunk browser is now enhanced to make it more user-friendly, providing a detailed view of the extracted content and making it easier to edit. Additionally, you can now view tables directly in the browser. 

<font size="4">Extraction of Complex Tables from HTML</font>

Search AI can now extract content from complex HTML tables using the Layout-Aware Extraction Strategy, enhancing its ability to accurately capture and process data from table structures. This improvement ensures more reliable data extraction and accurate information retrieval from tabular content.

<font size="4">Support for New Connectors</font>

Search AI now extends support for data ingestion from a broader range of knowledge bases and enterprise applications through connectors, including Airtable, HubSpot, GitLab, GitHub, Jira, Monday, Notion, and Slack. This expansion allows users to seamlessly integrate and ingest content from these platforms, enhancing the versatility of the data sources.

<font size="4">Sharepoint Site Support Enhancement</font>

Search AI now supports ingesting content from up to 6,000 sites from Sharepoint using the connector. This enhancement allows users to seamlessly access and search through a large volume of data, ensuring better search capabilities and improving the information retrieval process across the organization.

<font size="4">Support for Re-Rankers </font>

Search AI now offers advanced re-ranking capabilities to improve the quality and relevance of retrieved content significantly. Re-ranking is a crucial second step in the search process that refines initial results for greater accuracy. Enable and configure re-ranking models, like Cross Encoder, BGE, or MixedBread re-rankers, to reorder the chunks provided by the first-stage retriever, ensuring more relevant and accurate answers. 

<font size="4">Enhanced Search AI Navigation </font>

The latest version of Search AI offers a simplified interface that is easy to use and intuitive to navigate. The newer design enhances usability and productivity. 

<hr>

## v11.4.1 August 11, 2024

<u> Patch Release </u>

This update includes bug fixes and minor enhancements.

<font size="4">Search AI Menu Update</font>

The "Answers" menu is renamed "Search Configurations" across the product, aligning with the revised product naming convention. 

Key updates:

* “Search AI > Answers” is now "Search AI > Search Configurations".
* The header in the side navigation for this section now reads "Search Configurations".
* In Automation AI, "Answers" is replaced with "Search Configurations".

<hr>

## v11.4 July 27, 2024

<u> Patch Release </u>

This update includes feature enhancements and bug fixes. Key features and enhancements included in this release are summarized below.

<font size="4">Source Ingestion Logs</font>

Search AI now maintains comprehensive logs for the content ingested through web crawling. These logs include status codes, sizes, and other necessary details for each page ingested or skipped during the crawling process. Detailed logs help the administrators monitor the ingestion process and promptly identify and resolve issues. 

<font size="4">Detailed Error Messages for Web Crawl Failures</font>

Search AI now provides detailed error messages for web crawl failures, along with recommended actions to take. This enhancement aids in quick troubleshooting and rectification of issues.

<font size="4">Answer Generation API Enhancement</font>

The Answer Generation API now allows for more details about the answer in the response. You can get detailed information about the qualified chunks for the query in response, along with the answer to the query. This can be particularly useful to orchestrate complex use cases.

<font size="4">Answer Generation Errors</font>

Search AI now displays error messages to users when the answer generation process fails. These errors may occur for various reasons, such as an invalid OpenAI key or the absence of relevant chunks. This feature ensures users are promptly informed of any issues, facilitating quicker resolution.

<font size="4">Layout Aware Content Extraction Strategy</font>

Search AI introduces an advanced way of extracting content from documents (PDF and DOCX) by detecting the objects in the document using a combination of OCR technology, layout detection models, and layout awareness rules. This advanced strategy can accurately extract content from tables, graphs, and charts in the documents.

<hr>

## v11.3.1 July 13, 2024

<u> Patch Release </u>

This update includes bug fixes.

<hr>

## v11.3.0 June 29, 2024

<u> Patch Release </u>

Key features and enhancements included in this release are summarized below.

<font size="4">Support for Filtered Content Ingestion from third-party applications</font>

Search AI now extends support for content ingestion from a wider variety of third-party applications, including Confluence Cloud, Azure Storage, Salesforce, Oracle Knowledge, and dotCMS, in addition to the existing connectors. The connectors now offer customizable filters that give platform users the flexibility to selectively ingest data, allowing for precise and targeted indexing and enhancing the search index's efficiency and accuracy.

<font size="4">Advanced Web Crawl Configurations</font>

Search AI now offers advanced web crawl capabilities that allow platform users to remove redundant sections of a web page while indexing. Also, for JavaScript-rendered pages, the users can now introduce a delay after which the crawler starts indexing the page, allowing all dynamic content to load properly. These enhancements provide greater control and precision in web crawling, leading to a more efficient and accurate search experience.

<hr>

## v11.2.1 June 15, 2024

<u>Patch Release</u>

Key features and enhancements included in this release are summarized below.

<font size="4"> Automated Content Syncing and Training with Connectors</font>

Search AI now offers the capability to schedule automatic content syncing from third-party applications using connectors. The data is automatically ingested, and the application is trained with the new data, ensuring that the content is always up to date.

<font size="4"> Enhanced Web Crawl Error Reporting</font>

The enhanced web crawl error reporting feature in Search AI provides detailed information about crawl failures, enabling quick identification and resolution of issues. 


<hr>

## v11.2 June 01, 2024

<u>Patch Release</u>

Key features and enhancements included in this release are summarized below.

<font size="4"> Support for Hybrid Chunk Retrieval Strategy</font>

Search AI now supports the Hybrid Chunk Retrieval strategy, which leverages both keyword-based and semantic search techniques to deliver more precise and contextually appropriate answers. This improvement ensures that users receive high-quality responses tailored to their queries, enhancing the overall search experience.

<font size="4"> Chunk Order Configuration </font>

Search AI now allows adding relevant chunks in your preferred order within the prompt. The order of the chunks in the prompt can affect the performance depending upon the LLM limitations of context retention, prompt lengths, and attention mechanism. By allowing users to configure the chunk order, SearchAI ensures that relevant data is prioritized, improving the generated responses' quality and reliability.

<hr>

## v11.1.1 May 11, 2024

<u>Patch Release</u>

This update includes feature enhancements and bug fixes. Key enhancement included in this release is summarized below.

<font size="4">Extended Connector Support</font>

In addition to the existing ServiceNow connector, Search AI now supports more knowledge base connectors, including Zendesk, Confluence Server, Google Drive, and Dropbox. The new connectors make it easier to integrate Search AI with these platforms, helping users quickly find and access information to boost productivity. [Learn more :octicons-arrow-right-24:](../../searchai/content-sources/connectors.md)

<hr>

## v11.1.0 April 27, 2024

<u>Minor Release</u>

This update includes feature enhancements and bug fixes. Key feature included in this release is summarized below.

<font size="4">Business Rules Support</font>

Business Rules Support allows users to define custom rules that modify the answers provided by the AI search system. By using contextual data specific to their needs, users can create tailored rules to refine the AI's responses. The system also suggests relevant context variables dynamically to assist in defining these rules. [Learn more :octicons-arrow-right-24:](../../searchai/business-rules.md)
