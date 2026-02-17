# Migration Guide: SearchAssist to Search AI

This guide helps you migrate your existing SearchAssist application to Search AI.

It outlines the changes in configuration, deprecated features, and the steps required to set up sources successfully, extraction strategies, answer generation, and business rules in Search AI.


## Overview 

Search AI is the next-generation evolution of SearchAssist, designed to move beyond traditional keyword-based search. It leverages advanced techniques and the latest LLMs for indexing, search, and answer generation, resulting in more accurate, relevant, and natural answers for end users.

A key difference is in platform integration. While SearchAssist is a standalone application, Search AI is offered as part of the **AI for Service** platform. This integration enables users to build applications seamlessly and access multiple AI-powered products within a unified ecosystem.

With the use of these latest techniques, many configurations and manual settings that were required in SearchAssist are now automatically handled in Search AI, making the setup process simpler.


## Architecture at a Glance

Search AI introduces a modernized architecture compared to SearchAssist, with several improvements that provide greater flexibility, transparency, and control over how search and answers are generated. The new design moves away from rigid, predefined workflows to a modular and configurable framework.

Key Changes

* Indexes: In Search AI, a single index is used for both search results and answers. In SearchAssist, separate indexes are maintained, enabling optimized retrieval for each use case.
* Chunk Workbench: Search AI provides a Chunk Workbench to review and refine how ingested content is split before indexing. This ensures higher-quality chunks and improves downstream results.
* Extraction Techniques & advanced Vectors generation models: Search AI introduces an Extraction Module that supports multiple strategies and advanced vector generation techniques, producing more accurate and context-aware results.
* Agentic RAG: Search AI leverages Agentic Retrieval-Augmented Generation to enhance user queries with contextual information, improving the precision and naturalness of answers.

 The diagram below shows the architectural components of Search AI. 

![Architecture](images/searchai-arch.png "Architecture")



## Migration Steps


## Creating an App

Search AI is now a product offered in the AI for Service platform.



1. Go to the [platform's homepage](https://platform.kore.ai/builder/home). After signing in to the Platform, you are directed to the landing page, which displays the existing apps in your workspace. 
2. Click on Create New under Search AI. 
3. Provide the details of the app and click on Create App. 
4. This will create a new app and take you to the search configurations of the app. 

[Learn More](../getting-started/guided-onboarding.md).  


## Migrating Sources


### Websites



1. Go to the [Websites page in the Search AI](https://platform.kore.ai/builder/app/websites) app.
2. Set up a web crawl for each of your web sources. You can provide the URL of your source or the sitemap file. Alternatively, if you have a CSV file with the sitemaps of multiple web sources, use the Upload URL option to set up a web crawl. 
3. Manually configure the crawl settings for each of the web sources. In Search AI, the following SearchAssist “Crawling” features are available under “Advanced Crawl Configurations”: 
    * Crawl Options
    * Use Cookies
    * Javascript rendered
    * Crawl beyond sitemap
    * Respect robots.txt

[Learn More](content-sources/web-crawl.md).


### File Upload



1. Go to the[ Documents page](https://platform.kore.ai/builder/app/documents).
2. Upload your files and directories. 
3. Organize the content into directories.  

[Learn More](content-sources/directory.md).


### FAQs



1. You can manage FAQs using the [Knowledge Module](../automation/knowledge-ai/manage-faqs.md) under Automation AI. 
2. You can [export the existing FAQs](https://docs.kore.ai/searchassist/manage-content-sources/managing-faqs/#Exporting_FAQs) from SearchAssist and import them into Automation AI as part of its Knowledge Graph.
3. You can also manually add FAQs or [extract them from unstructured web pages or files ](../automation/knowledge-ai/knowledge-extraction.md)into the application. 
4. Alternatively, use the [JSON connector](content-sources/connectors/json.md) to add FAQs by saving the question as chunkTitle and the answer as chunkText.


### Connectors



* Import the data from third-party applications using their respective [connectors](content-sources/connectors/connector-directory.md). Search AI supports 60+ connectors as opposed to the limited number of connectors in SearchAssist. 
* For each of the connectors, find relevant setup information in the respective documentation page. 
* In Search AI, the Sync Specific Content option from SearchAssist is available as Ingest Filtered Content. To use it, select Ingest Filtered Content, go to the Advanced Filters, and define your conditions for filtering.
* Additionally, Search AI supports Access Control (RACLs) for connectors, allowing you to manage permissions and content accessibility more effectively. Refer to the [RACL documentation](content-sources/racl-support.md) for more details.

[Learn More](content-sources/connectors/connector-directory.md).


### Structured Data



* Structured data can be imported into Search AI using the [JSON connector](content-sources/connectors/json.md).
* This connector enables ingestion and indexing of structured data in JSON format. 
* Use the sample file to prepare the structured data in the expected format and then upload the file. 
* Alternatively, structured data can also be imported via APIs. Refer to [this for details](../apis/searchai/ingest-data.md). 

[Learn More](content-sources/connectors/json.md).


## Migrating Extraction Configuration

In **Search Assist**, there is no dedicated Extraction module. Extraction happens automatically in the background:



* When **Extractive Answers are enabled**, the system adds a *snippet extraction module* that uses rule-based methods.
* If Extractive Answers are not enabled, the system applies simple **text extraction** by default. 

In **Search AI**, extraction works differently. There is now a **dedicated Extraction module** where users can choose how the content is processed before indexing. The extraction techniques can vary for different content types. By default, **text extraction** is applied to all the content, but you can also select more advanced strategies like **Layout-aware** or **HTML-aware extraction** for better accuracy on structured or complex documents. Rule-based extraction is no longer supported.


### Text Extraction

* By default, the extraction strategy for all the content is set to text extraction. 


### Rule-Based Extraction

* This extraction model is deprecated in Search AI. 
* If you previously relied on **rule-based snippet extraction** (via Extractive Answers), the recommended alternative is **Layout-aware Extraction**, which provides higher accuracy without requiring manual rules. For HTML-based content, **HTML-aware Extraction** offers better precision. In addition, Search AI offers other advanced extraction techniques, allowing you to choose the method best suited to your content type for more precise and reliable results. [Learn more](content-extraction/extraction.md).
* To change the default extraction strategy from text extraction, go to the [Extract page](https://platform.kore.ai/builder/app/extract) and set up your extraction strategy


## Migrating Workbench Stages

In SearchAssist, the *Document Workbench* is used to process and enrich documents ingested from different sources. In Search AI, this capability is extended with the addition of a *Chunk Workbench*, allowing enrichment at both the document level and the chunk level. This dual approach gives you greater flexibility—use the Document Workbench to apply transformations during extraction, and the Chunk Workbench to refine or enrich content after it has been split into chunks.


### Set up Document Workbench 

* Go to the [Extract ](https://platform.kore.ai/builder/app/extract)page.
* Go to the Content Strategy configured for specific type of content. 
* Add and configure the stage as required. 

Refer to [this for configuration details](content-extraction/transformation.md). 


### Set up Chunk Workbench

This is a new workbench offered by Search AI that allows processing of the chunks.[ Learn More.](workbench/introduction.md) 

To configure the Chunk Workbench, 

* Go to the [Enrich page](https://platform.kore.ai/builder/app/workbench). 
* Click on +New Stage and add a new Chunk Workbench Stage. 
* Refer to [this](https://platform.kore.ai/builder/app/workbench)for the supported stage types and their configuration details. 


### Points to Note

* The document and chunk workbench in Search AI offer the following stages:
    * [Field Mapping Stage](content-extraction/transformation.md#field-mapping-stage)
    * [Custom Script Stage](content-extraction/transformation.md#custom-script-stage)
    * [Exclude Documents Stage](content-extraction/transformation.md#exclude-documents-stage)
    * [API Stage](content-extraction/transformation.md#api-stage)
    * [LLM Stage](content-extraction/transformation.md#llm-stage)
* Search AI only supports script conditions for the Custom Script Stage. In case you have written your conditions for any other stage as a script, we recommend converting the entire stage to a custom script stage or writing your conditions in the “basic” format.
* Search AI does not support the “Rename” action through workbench; instead, users should use “Manage Schema” to edit field names or descriptions
* The following stages in SearchAssist have been deprecated in Search AI. This is because Search AI utilizes advanced semantic embeddings, eliminating the need for additional processing to enhance search efficiency and accuracy.
    * Entity Extraction
    * Traits Extraction
    * Keyword Extraction
    * Semantic Meaning
* In SearchAssist, the Snippet Extraction stage is automatically added to the Index pipeline, when extractive answers are enabled to extract answer snippets. This feature has been deprecated in Search AI. Instead, users should navigate to extraction strategies and select the strategy that is appropriate. 
* The Custom LLM Prompt stage is available as Transform Documents with LLM in Document Workbench and Enrich Chunks with LLM in Chunk Workbench. 
* Additionally, you can use th[e API stage](workbench/api-stage.md) for any other custom processing of the chunks. 
* Use the simulator to test the application's behavior after processing.
* Please note that the field names have been updated according to the unified schema. The field names in SearchAssist may not be exactly the same as those in Search AI. During the migration process, ensure you are choosing the correct field names. 

[Learn More](workbench/introduction.md)


## Migrating Answer Snippets

As in SearchAssist, answers can be generated using **Extractive Answers** or **Generative Answers**.

By default, Search AI presents Generative Answers. To verify this, go to the [Answer Configuration page](https://platform.kore.ai/builder/app/answergeneration).


### Generative Answers

By default, Generative Answers are selected with default configurations. Change the configurations as required. 

Note that for Generative Answers to work, you need to configure and enable the LLM for Answer generation. 

* Go to the Models Library in Generative AI Tools.
* Configure the required model. 
* Go to Gen AI features. 
* Select the configured model for Answer Generation. It uses a default prompt. Create a custom prompt if required. 

Some of the custom configurations from SearchAssist, like response token size and chunk order, are part of the Answer Configurations. 


### Extractive Answers

* In SearchAssist, extractive answers use rule-based chunking to generate content for answer snippets. In Search AI, the same outcome can be achieved by configuring extraction strategies and enabling Extractive Answers. To replicate **SearchAssist’s Extractive Model**:
* Go to the [Answer Configuration page](https://platform.kore.ai/builder/app/answergeneration) and select Extractive Answers and the corresponding configurations.  
* Go to the Extraction page in Search AI.
* Configure Layout-Aware Extraction using the General template for PDFs, DOCX, and documents with tables or images.
* Configure Advanced HTML Extraction using the General template for HTML content.
* Alternatively, you can choose [any strategy](content-extraction/extraction.md#adding-a-new-strategy) best suited for your content type and search use cases.

	
These steps ensure that headers, paragraphs, tables, and images are captured correctly, producing answer snippets similar to the Extractive Model in SearchAssist.

[Learn More](answer-generation.md). 


## Migrating Search Configuration



* The following settings have been deprecated since the processing pipeline leverages semantic similarity along with enhanced retrieval methods, removing the need for traditional keyword-based search configurations.
    * Weights
    * Presentable
    * Prefix Search
    * Search Relevance
* Small Talk can be managed through conversational flows in Automation AI. Go to the[ SmallTalk page in Automation AI](https://platform.kore.ai/builder/app/smalltalk) and provide the small talk details to be managed.[ Learn More](../automation/use-cases/small-talk.md). 
* Currently, Synonym and Stop Word support is not available in Search AI . It will be added in upcoming releases. 
* Spell correction is not required since we do not rely on keyword matching in Search AI. 


## Migrating Business Rules

In Search AI, semantic search has replaced traditional keyword-based search, so NLP-based rules from SearchAssist are deprecated. Instead, you must configure Contextual Business Rules manually.

The process of setting contextual rules in Search AI is the same as that of SearchAssist. However, the field names have been updated as per the new unified schema in Search AI. Hence, some field names may have changed. When migrating business rules, carefully review and select the correct field names to ensure proper configuration.

Note that the `context` object used in the condition block now refers to the context object and session variables provided by the AI for Service platform. [Learn More](../automation/intelligence/context-object.md). 


## Migrating Facets

Facets are supported in Search AI as filters. Currently, the search results can only be presented using the [Advance Search API](../apis/searchai/advance-search.md). Hence, the facets created are used while returning search results through the API only. 

To include facets in the search results, set the isFacetsEnable field in the API request.

 To create facets or filters,  



* Go to the [Search Results page](https://platform.kore.ai/builder/app/searchresults). 
* Manually create the required filters. 
* Note that a default filter is already available, which organizes content into tabs based on sourceType.


## Other Updates


### Language Support

The language support in Search AI is now extended. It supports 100+ languages and can handle all the languages supported by the underlying LLM and embedding models. Refer to [this ](language-support.md)for language-specific configuration and recommendations. 


### LLM Configuration

Search AI uses the model library of the AI for Service platform to configure the LLM and prompts for all its Gen AI capabilities. The library serves as a common place to configure the models and prompts. The Gen AI features page allows developers to choose the models and prompts for different features in Search AI. 

All the configurations can be done under Generative AI Tools. 

[Learn More](../generative-ai-tools/models-library.md)


### Custom Configurations

The following table captures the details of updates made to the custom configurations. Some of the configurations that are no longer relevant have been deprecated, and some have been moved to different sections of the application. 


<table>
  <tr>
   <td>Chunk Extraction Method
   </td>
   <td>Search AI offers different extraction methods, including the text and layout aware supported by SearchAssist. The extraction strategy can be configured on the Extract page. Refer to <a href="../content-extraction/extraction/#adding-a-new-strategy">this</a> for more details. 
   </td>
  </tr>
  <tr>
   <td>Chunk Token Size
   </td>
   <td>This can be configured while defining the Extraction Strategy for content. Refer to <a href="../content-extraction/extraction/#adding-a-new-strategy">this</a> for more details. 
   </td>
  </tr>
  <tr>
   <td>Chunk Vector Fields
   </td>
   <td>This is available as part of the <a href="../index-configuration/">Vector configuration</a>. Refer to <a href="../index-configuration/">this </a>for details. 
   </td>
  </tr>
  <tr>
   <td>Number Of Chunks
   </td>
   <td>Instead of setting the number of chunks, you can set the token budget. This allows the application to dynamically calculate the number of chunks based on the LLM used and the extraction strategies used. This is available as part of <a href="../answer-generation/">Answer Configuration</a>. 
   </td>
  </tr>
  <tr>
   <td>Rewrite Query
   </td>
   <td>This feature has been enhanced. Search AI offers two ways to implement this.  \
1. <a href="../rag-agents/#query-rephrase-agent">Query Rephrase for Advanced Search API</a> - This is implemented via Agentic RAG. Queries can be dynamically enhanced with contextual information through APIs.
<p>
2.<a href="../../generative-ai-tools/genai-features-searchai/#rephrase-user-query"> Rephrase User Query</a> - This is implemented by the platform to enhance or reconstruct incomplete or ambiguous user inputs using the conversation context. 
   </td>
  </tr>
  <tr>
   <td>Chunk Retrieval Strategy
   </td>
   <td>Some of the legacy retrieval methods have been deprecated. With Search AI, you can configure Vector Retrieval and Hybrid Retrieval. These can be configured via the Retrieval page. <a href="../retrieval/">Learn more.</a> 
   </td>
  </tr>
  <tr>
   <td>Enable Vector Search
   </td>
   <td>This can be enabled using the configurations on the retrieval page. 
   </td>
  </tr>
  <tr>
   <td>Chunk Deviation Percent
   </td>
   <td>This can be configured in Retrieval under Proximity Threshold
   </td>
  </tr>
  <tr>
   <td>Rerank Chunks
   </td>
   <td>This is available as an <a href="https://platform.kore.ai/builder/app/advanceConfiguration">advanced configuration</a>. 
   </td>
  </tr>
  <tr>
   <td>Rerank Chunk Fields
   </td>
   <td>This is available as an <a href="https://platform.kore.ai/builder/app/advanceConfiguration">advanced configuration</a>. 
   </td>
  </tr>
  <tr>
   <td>Maximum re-rank chunks
   </td>
   <td>This is available as an <a href="https://platform.kore.ai/builder/app/advanceConfiguration">advanced configuration</a>. 
   </td>
  </tr>
  <tr>
   <td>Chunk Order
   </td>
   <td>This is available as a config field in the <a href="https://platform.kore.ai/builder/app/answergeneration">Answer Configuration</a> page.
   </td>
  </tr>
  <tr>
   <td>Snippet Selection
   </td>
   <td>This configuration has been deprecated and is no longer supported. 
   </td>
  </tr>
  <tr>
   <td>Snippet Selection LLM
   </td>
   <td>This configuration has been deprecated and can no longer be used. 
   </td>
  </tr>
  <tr>
   <td>Max Token Size
   </td>
   <td>This can be implemented using the Token Budget field in Answer Generation.
   
   Max Token Size in SearchAssist is used to define the total number of tokens sent to the LLM (including the prompt, the chunks, and the model’s output). The Token Budget field, on the other hand, specifies the number of tokens allocated only for the retrieved chunks. It excludes tokens used by the system prompt and the LLM’s output, which are automatically accounted for. 
<p>
<a href="../answer-generation/#answer-configuration">Learn More.</a> 
   </td>
  </tr>
  <tr>
   <td>top_p
   </td>
   <td>In SearchAssist, this field was specific to OpenAI. 
   <p>
In SearchAI, you can configure this for every LLM that supports it. 

You can configure this by navigating to Generative AI Tools > GenAI Features. Open Advanced Settings using the gear icon for the feature. The Advanced Settings dialog box will appear, where you can configure the Temperature for the model associated with Answer Generation. <a href="../../generative-ai-tools/genai-features/">Learn More</a>
   </td>
  </tr>
  <tr>
   <td>Response Size
   </td>
   <td>This can be implemented using the Response Length parameter in Answer Configuration(Generative Answers). 
   </td>
  </tr>
  <tr>
   <td>Answer Response Length
   </td>
   <td>This can be implemented using the Response Length parameter in Answer Configuration (Extractive Answers).. 
   </td>
  </tr>
  <tr>
   <td>Enable Page Body Cleaning
   </td>
   <td>Enable this feature via the Automatic Cleaning option in web crawl configuration. 
   To do this, navigate to the <em>Advance Crawl Configurations</em> for a web crawl and select <em>Automatic Cleaning</em> under <em>Processing Options</em>. 
   </td>
  </tr>
  <tr>
   <td>Custom Vector Model
   </td>
   <td>Set the Embedding model via the Vector Configuration page. 
   </td>
  </tr>
  <tr>
   <td>Hypothetical Embeddings
   </td>
   <td>This configuration has been deprecated and is no longer supported. 
   </td>
  </tr>
  <tr>
   <td>Crawl Delay
   </td>
   <td>To set this, navigate to the <em>Advance Crawl Configurations</em> for a web crawl and set the value for <em>Crawl Delay</em>. This field is applicable only when the JavaScript Rendered option is enabled.
   </td>
  </tr>
</table>



### Unified Schema

Search AI introduces a Unified Schema that standardizes how content from diverse sources is ingested and managed. Search AI supports a much broader range of connectors and content types. To ensure consistency across ingestion and retrieval from these sources, the unified schema has been introduced. The schema also offers developers with the ability to define up to 50 custom fields, specific to their content source or use case, enabling them to capture domain-specific metadata. 


Note: Wherever schema fields are referenced in the Search AI setup process (e.g., workbench, business rules, filters), ensure that the correct field names are used to avoid mapping or retrieval errors.


### Training

In Search AI, the training process has been enhanced to provide greater automation and efficiency. During training, design-time configurations are applied, and ingested content is broken down into chunks based on these configurations.

Unlike SearchAssist, Search AI introduces Automatic Training, which runs during both initial ingestion and incremental updates, reducing the need for manual intervention. However, manual training may still be required in certain scenarios.

 Refer to [this to learn more about app training. ](application-training.md)


### New Crawler

The new web crawler is faster, more reliable, and LLM-ready. It processes more pages in less time, reduces errors and interruptions, and automatically converts content into Markdown for seamless use with AI/LLM applications. It also handles JavaScript-heavy pages more efficiently, ensuring smoother and more consistent crawling.


## Application Administration


### Workspace Management 

Search AI is now part of the AI for Service platform. The Platform organizes users and resources through Workspaces. Each workspace functions as a container that manages users, applications, and access controls. Workspaces can be collaborated between users to share all the apps within the workspace. Learn More to know[ how to create a workspace or manage it.](../manage-assistant/plan-and-usage/accounts-or-workspace-overview.md)


###  App Sharing

Search AI supports App Sharing, allowing applications to be shared with other users for seamless collaboration. Shared users can access and work on the same application, depending on the permissions assigned.

To share your app with another user



* Go to the [User Management](https://platform.kore.ai/builder/app/manageusers) page. 
* Click on Invite User and provide the details of the user and the role. 
* Share Invite. 

Learn more about [User Management and Roles here](../user-management/manage-users.md). 


### Change Logs

Since the app is a part of the platform, the change logs are maintained at the platform level and are common to all the components of the application, including Search AI. To see the change logs, 



* Navigate to [App Settings](https://platform.kore.ai/builder/app/generalsettings).
* Open the Change Logs page.
* By default, you will see logs for all modules in the application.
* To filter and view logs specific to Search AI, click More Filters, select Search AI from the *Modules* dropdown, and then click Add.

[Learn More.](../app-settings/change-logs.md)


### App Analytics

Search AI provides analytics at the **platform level**, consolidating insights across all integrated applications. This enables a broader and more unified view of user interactions and performance. To view the answer insights, 



* Navigate to the [Analytics page](https://platform.kore.ai/builder/app/atsummary) in the Search AI module. 
* Under the Search AI section, open the Answer Insights to view search-related metrics. 

[Learn More.](../analytics/searchai/answer-insights.md) 


### App Testing

Search AI supports testing at multiple levels to validate both performance and accuracy:



1. Document and Chunk Workbench: Provides a simulator to test the functionality and behavior of processing stages during development.
2. Answer Generation: Use the Test Answers tool in the Answer Generation page to test the answers generated from Search after all the configurations are made. This ensures the end-to-end behavior of the Search functionality is working as expected.
3. Complete Application Testing: The Test option (available at the top-right of each page) allows you to test the complete agent, including all integrated modules. Both voice and chat widgets are available to simulate the overall application flow.


## Deprecated Features


### Result Ranking

In SearchAssist, developers relied on manual result ranking rules. In Search AI, [Business rules](business-rules.md) and [Agentic Rag](rag-agents.md) capabilities provide more flexible and context-aware control over retrieval,  eliminating the need for configuring ranking rules for each unique user query.

Hence, this functionality has been deprecated. 


### Search Interface Configurations

Custom interfaces can be built using [Search AI’s public APIs](../apis/searchai/api-list.md). By default, the AI for Service Platform offers agent experiences across[ 40+ channels](../channels/adding-channels-to-your-bot.md), which can be easily integrated with minimal configurations. Refer to the respective documentation for more details.


### Traits

This feature is no longer required.

Since Search AI uses semantic embeddings for search and does not rely on traditional search relevance tools, traits are not required in Search AI. Vector representations of the content along with keyword relevance via hybrid search, can capture the relationship between different terms based on their context.  
