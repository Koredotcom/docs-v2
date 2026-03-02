# Migration from SearchAssist to Search AI

As part of the shift to the next-generation Search AI, existing SearchAssist applications can be migrated to Search AI  in the AI for Service platform to ensure continuity and improved performance. Automatic Migration from SearchAssist to Search AI streamlines the transition to the new platform by carrying forward the existing configurations with minimal effort. 

Learn more about [Search AI](../searchai/about-search-ai.md).

!!!note
    SearchAssist is scheduled for deprecation in September 2026. 

During migration to Search AI, a new Search AI app is created, while the existing SearchAssist app remains unchanged. This guide explains how the migration works, what gets configured automatically, and what to review after the migration to ensure a smooth experience. 

## About Search AI

Search AI is the next-generation evolution of SearchAssist, designed to move beyond traditional keyword-based search. It leverages advanced techniques and the latest LLMs for indexing, search, and answer generation, delivering more accurate, relevant, and natural answers to the users.

A key difference is in platform integration. While SearchAssist is a standalone application, Search AI is offered as part of the AI for Service platform. This integration enables users to build applications seamlessly and access multiple AI-powered products within a unified ecosystem.

With the use of the latest technology, many configurations and manual settings required in SearchAssist are now automatically handled by Search AI, simplifying the setup process.


### Architecture at a Glance

Search AI introduces a modernized architecture compared to SearchAssist, with several improvements that provide greater flexibility, transparency, and control over how search and answers are generated. The new design moves away from rigid, predefined workflows to a modular and configurable framework.

Key Changes

* Indexes: In Search AI, a single index serves both search results and answers. In SearchAssist, separate indexes are maintained, enabling optimized retrieval for each use case.
* Chunk Workbench: Search AI provides a Chunk Workbench to review and refine how ingested content is split before indexing. This ensures higher-quality chunks and improves downstream results.
* Extraction Techniques & advanced Vector generation models: Search AI introduces an Extraction Module that supports multiple strategies and advanced vector generation techniques, producing more accurate, context-aware results.
* Agentic RAG: Search AI leverages Agentic Retrieval-Augmented Generation to enhance user queries with contextual information, improving the precision and naturalness of answers.
* The role-based access control feature offered for content ingested via connectors is enhanced to automatically fetch and store the users associated with a group or permission entity. This removes the need to associate users with permission entities via APIs manually.  Learn More. 

The diagram below shows the architectural components of Search AI. 

![Search AI architecture](images/searchai/migration/architecture.png "Search AI architecture")

## Scope of Automatic Migration

Automatic migration replicates selected SearchAssist components in Search AI while preserving their behavior and configuration.
Some features are partially migrated due to platform differences that require adjustments. Certain elements aren't transferred and require manual configuration in Search AI.


### Ingestion Configurations

During migration, content from web pages, documents, and connectors in SearchAssist is automatically transferred to Search AI. Structured data is only partially migrated, and FAQs must be manually configured after migration.

* **Web pages**
    * All existing web crawl configurations are fully replicated, including the web crawl setup directly, via a CSV file. 
    * But the crawl needs to be manually triggered. 
    * Any scheduled crawls do not run automatically.
    * Training the application with newly ingested content must be done manually in Search AI to generate chunks from the ingested content.
* **Documents** 
    * All document pages are automatically uploaded, and the original directory structure is preserved.
    * Manual training is required after migration.
* **Connectors**
    * All connectors are automatically reconfigured during migration.
    * You must re-enter the credentials to re-sync the content.
    * The existing SearchAssist content is automatically migrated to Search AI. 
    * If filters are set in SearchAssist, they're automatically configured in Search AI as well.
    *  Any existing permissions data ( in sys_racl) in the content is automatically applied to the content upon training. The RACL feature in Search AI is more advanced than SearchAssist. Learn more about RACL in Search AI. 
    * Scheduler configuration from the connectors isn't replicated into Search AI and must be manually configured. 
* **Structured Data**
    * Structured data is partially replicated. Only the content in the title, content, and URL fields is replicated as-is during migration. Content in other fields is migrated as custom fields. Manually review the fields and map them into corresponding fields in Search AI. 
    * Manually, structured data can be imported into Search AI using the [JSON connector](../searchai/content-sources/connectors/json.md). This connector enables ingestion and indexing of structured data in JSON format. Use the sample file to prepare the structured data in the expected format and then upload the file. 
    * Alternatively, structured data can also be imported via APIs. Refer to [this for details](../apis/searchai/ingest-data.md). 
    * Manually train the app to view the chunks from the structured data. 
* **FAQs**
    * FAQs aren't automatically migrated. 
    * You can manage FAQs using the [Knowledge Module](../automation/knowledge-ai/manage-faqs.md) under Automation AI. 
    * You can [export the existing FAQs](https://docs.kore.ai/searchassist/manage-content-sources/managing-faqs/#Exporting_FAQs) from SearchAssist and import them into Automation AI as part of its Knowledge Graph.
    * You can also manually add FAQs or [extract them from unstructured web pages or files ](../automation/knowledge-ai/knowledge-extraction.md)into the application. 
    * Alternatively, use the [JSON connector](../searchai/content-sources/connectors/json.md) to add FAQs by saving the question as chunkTitle and the answer as chunkText.

### Indexing Configurations

Index fields are fully replicated, but traits aren't replicated. There is no longer a need for index settings, as multilingual capabilities are now integrated. Workbench stages are partially replicated in Search AI. 


#### Index Fields

Index fields are fully replicated and mapped to corresponding fields in Search AI. The custom fields in SearchAssist are automatically mapped to the corresponding fields in Search AI. [Learn more](../searchai/content-sources/connectors/unified-schema.md). 


#### Index Configurations

Index Configurations must be reconfigured manually after migration. For more details, refer to [this](../searchai/index-configuration.md). 

In Search AI, the BGE-M3 vector model is selected by default for generating embeddings. You can also set up a custom embedding model. 


#### Workbench

In SearchAssist, the Document Workbench helps you process and enrich documents as they're ingested. 

In Search AI, this is expanded with two separate workbenches: 

* Document Workbench that lets you apply transformations during extraction.
* Chunk Workbench that enables you to enrich or refine content after it's split into chunks, giving you greater flexibility and control.

During migration, the following stages from the SearchAssist Document Workbench are automatically replicated in Search AI:

* Field Mapping
* Exclude Content

The following stages are not migrated and require manual configuration or are no longer supported:



* LLM Prompt - Must be reconfigured manually using the LLM Stage in Search AI.
* Entity Extraction, Traits Extraction, Keyword Extraction, and Semantic Meaning - These stages are deprecated and aren't carried over.

For custom script stage, Search AI only supports the script editor for outcomes, not for conditions. As a result, any custom script stage that uses script-based conditions is migrated by moving those conditions into the outcome script editor.

Note 



1. in Search AI stages, basic conditions aren't supported. Therefore any stage that has basic conditions is partially migrated. Enhance the custom script manually in those cases to address the basic conditions. 
2. All custom scripts are automatically converted from Painless to JavaScript during migration.

Additionally, you can also configure the Chunk Workbench manually in Search AI to apply additional processing on extracted chunks. [Learn More](../searchai/workbench/introduction.md). 


#### Index Settings

Search AI supports 100+ languages and can handle all the languages supported by the underlying LLM and embedding models. Refer to [this ](../searchai/language-support.md)for language-specific configuration and recommendations. No specific configuration is required for the supported languages. 


#### Traits

Traits aren't replicated as this feature is no longer required.

Since Search AI uses semantic embeddings for search and doesn't rely on traditional search-relevance tools, traits aren't required. Vector representations of content, along with keyword relevance via hybrid search, can capture relationships between terms based on their context.  


### Retrieval Configurations


#### Answer Snippets

The Answer Snippet Configurations are replicated to Answer Generation. However, you must configure the Answer Generation Model again in the case of the Generative Answers. [Learn More](../generative-ai-tools/configure-llm-integration.md). 


#### Business Rules

In Search AI, semantic search has replaced traditional keyword-based search, so NLP-based rules from SearchAssist are deprecated. Only rules with the vi_prefix are replicated. The following context categories are not migrated: trait, entity, and keywords. Additionally, only rules applied to chunk fields are replicated.

!!!note
    * Some field names have been updated per the new unified schema in Search AI. Hence, after migrating the business rules, carefully review and select the correct field names to ensure proper configuration.
    * The `context` object used in the condition block now refers to the context object and session variables provided by the AI for Service platform. [Learn More](../automation/intelligence/context-object.md). 


#### Custom Configurations

Some custom configurations are replicated as Advanced Configurations in Search AI, some configurations have been productized, and some custom configurations are not replicated. 


<table>
  <tr>
   <td><strong>Config</strong>
   </td>
   <td><strong>Auto Migrated</strong>
   </td>
   <td><strong>Notes</strong>
   </td>
  </tr>
  <tr>
   <td>Chunk Extraction Method
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Chunk Token Size
   </td>
   <td>Yes
   </td>
   <td>Automatically replicated. Moved to Extraction Strategy Configuration. Refer to <a href="https://docs.kore.ai/xo/searchai/content-extraction/extraction/#adding-a-new-strategy">this</a> for more details. 
   </td>
  </tr>
  <tr>
   <td>Chunk Vector Fields
   </td>
   <td>Yes
   </td>
   <td>Automatically replicated. This is available as part of the <a href="https://docs.kore.ai/xo/searchai/index-configuration/">Vector configuration</a>. Refer to <a href="https://docs.kore.ai/xo/searchai/index-configuration/">this </a>for details. 
   </td>
  </tr>
  <tr>
   <td>Number Of Chunks
   </td>
   <td>Yes
   </td>
   <td>Instead of setting the number of chunks, you can set the token budget. This allows the application to dynamically calculate the number of chunks based on the selected LLM and extraction strategies. This is available as part of <a href="https://docs.kore.ai/xo/searchai/answer-generation/">Answer Configuration</a>. 
   </td>
  </tr>
  <tr>
   <td>Rewrite Query
   </td>
   <td>No
   </td>
   <td>This feature has been enhanced. Search AI offers two ways to implement this. <p>
1. <a href="https://docs.kore.ai/xo/searchai/rag-agents/#query-rephrase-agent">Query Rephrase for Advanced Search API</a> - This is implemented via Agentic RAG. Queries can be dynamically enhanced with contextual information through APIs.
<p>
2.<a href="https://docs.kore.ai/xo/generative-ai-tools/genai-features-searchai/#rephrase-user-query"> Rephrase User Query</a> - This is implemented by the platform to enhance or reconstruct incomplete or ambiguous user inputs using the conversation context. 
   </td>
  </tr>
  <tr>
   <td>Chunk Retrieval Strategy
   </td>
   <td>Partial
   </td>
   <td>Some of the older retrieval methods have been deprecated. With Search AI, you can configure both Vector Retrieval and Hybrid Retrieval through the Retrieval page.
<p>
By default, the hybrid retrieval strategy is used. However, if the “Enable Vector Search” configuration is enabled in SearchAssist, or if the Chunk Retrieval strategy is set to ‘vector’, vector search is automatically enabled in Search AI.
<p>
<a href="https://docs.kore.ai/xo/searchai/retrieval/">Learn more.</a> 
   </td>
  </tr>
  <tr>
   <td>Enable Vector Search
   </td>
   <td>Yes
   </td>
   <td>This can be enabled using the configurations on the retrieval page. 
   </td>
  </tr>
  <tr>
   <td>Chunk Deviation Percent
   </td>
   <td>Yes
   </td>
   <td>This can be configured in Retrieval under Proximity Threshold
   </td>
  </tr>
  <tr>
   <td>Rerank Chunks
   </td>
   <td>Yes
   </td>
   <td>This is available as an <a href="https://docs.kore.ai/xo/searchai/advanced-configurations/advanced-configurations/">advanced configuration</a>. 
   </td>
  </tr>
  <tr>
   <td>Rerank Chunk Fields
   </td>
   <td>Yes
   </td>
   <td>This is available as an <a href="https://docs.kore.ai/xo/searchai/advanced-configurations/advanced-configurations/">advanced configuration</a>. 
   </td>
  </tr>
  <tr>
   <td>Maximum re-rank chunks
   </td>
   <td>Yes
   </td>
   <td>This is available as an <a href="https://docs.kore.ai/xo/searchai/advanced-configurations/advanced-configurations/">advanced configuration</a>. 
   </td>
  </tr>
  <tr>
   <td>Chunk Order
   </td>
   <td>Yes
   </td>
   <td>This is available as a config field in the <a href="https://docs.kore.ai/xo/searchai/answer-generation/">Answer Configuration</a> page.
   </td>
  </tr>
  <tr>
   <td>Snippet Selection
   </td>
   <td>No
   </td>
   <td>This configuration has been deprecated and is no longer supported. 
   </td>
  </tr>
  <tr>
   <td>Snippet Selection LLM
   </td>
   <td>No
   </td>
   <td>This configuration has been deprecated and can no longer be used. 
   </td>
  </tr>
  <tr>
   <td>Max Token Size
   </td>
   <td>Yes
   </td>
   <td>This can be implemented using the Token Budget field in Answer Generation. <p>
   <p>
Max Token Size in SearchAssist is used to define the total number of tokens sent to the LLM (including the prompt, the chunks, and the model’s output). The Token Budget field, on the other hand, specifies the number of tokens allocated only for the retrieved chunks. It excludes tokens used by the system prompt and the LLM’s output, which are automatically accounted for. 
<p>
<a href="https://docs.kore.ai/xo/searchai/answer-generation/#answer-configuration">Learn More.</a> 
   </td>
  </tr>
  <tr>
   <td>top_p
   </td>
   <td>No
   </td>
   <td>In SearchAssist, this field was specific to OpenAI. <p>
In SearchAI, you can configure this for every LLM that supports it.  <p> <p>

You can configure this by navigating to Generative AI Tools > GenAI Features. Open Advanced Settings using the gear icon for the feature. The Advanced Settings dialog box appears, where you can configure the Temperature for the model associated with Answer Generation. <a href="https://docs.kore.ai/xo/generative-ai-tools/genai-features/#change-settings-for-a-model">Learn More</a>
   </td>
  </tr>
  <tr>
   <td>Response Size
   </td>
   <td>
   </td>
   <td>This can be implemented using the Response Length parameter in Answer Configuration(Generative Answers). 
   </td>
  </tr>
  <tr>
   <td>Answer Response Length
   </td>
   <td>Yes
   </td>
   <td>This can be implemented using the Response Length parameter in Answer Configuration (Extractive Answers).
   </td>
  </tr>
  <tr>
   <td>Enable Page Body Cleaning
   </td>
   <td>Yes
   </td>
   <td>Enable this feature via the Automatic Cleaning option in web crawl configuration.  \
To do this, navigate to the <em>Advanced Crawl Configurations</em> for a web crawl and select <em>Automatic Cleaning</em> under <em>Processing Options</em>. 
   </td>
  </tr>
  <tr>
   <td>Custom Vector Model
   </td>
   <td>No
   </td>
   <td>Set the Embedding model via the Vector Configuration page. 
   </td>
  </tr>
  <tr>
   <td>Hypothetical Embeddings
   </td>
   <td>No
   </td>
   <td>This configuration has been deprecated and is no longer supported. 
   </td>
  </tr>
  <tr>
   <td>Crawl Delay
   </td>
   <td>Yes
   </td>
   <td>To set this, navigate to the <em>Advanced Crawl Configurations</em> for a web crawl and set the value for <em>Crawl Delay</em>. This field is applicable only when the JavaScript Rendered option is enabled.
   </td>
  </tr>
</table>



#### Search Settings



* The following settings have been deprecated, as the Search AI processing pipeline leverages semantic similarity and enhanced retrieval methods, removing the need for traditional keyword-based search configurations.
    * Weights
    * Presentable
    * Prefix Search
    * Search Relevance
* Small Talk is also deprecated from Search AI, but can be managed through conversational flows in Automation AI. If required, this must be manually set up after migration. Go to the[ SmallTalk page in Automation AI](../automation/use-cases/small-talk.md) and provide the details of the small talk to be managed.[ Learn More](../automation/use-cases/small-talk.md). 
* Synonym and stop word support isn't available in Search AI and is planned for a future release. 
* Spell correction isn't required since we don't rely on keyword matching in Search AI. Hence, this configuration isn't replicated. 


#### Result Ranking

 In Search AI, [Business rules](../searchai/business-rules.md) and [Agentic Rag](../searchai/rag-agents.md) capabilities provide more flexible, context-aware control over retrieval, eliminating the need to configure ranking rules for each unique user query.

Hence, this functionality has been deprecated and doesn't need migration. 


#### Search and Result Interface

Custom interfaces can be built using [Search AI’s public APIs](../apis/searchai/api-list.md). By default, the AI for Service Platform provides agent experiences across 40+ channels that can be easily integrated with minimal configuration. Refer to the [respective documentation](../channels/adding-channels-to-your-bot.md) for more details.

This must be manually set up after migration completes. 


## Initiating the Migration Process



1. Click on the *Set up Search AI* link in the banner at the top of the page in SearchAssist. ![SearchAssist Home](images/searchai/migration/SA-home.png "SearchAssist Home") 
2. Select the app to be migrated. ![Select App](images/searchai/migration/select-app.png "Select App")
3. Click on *Next* to initiate the migration process. This process may take a little while as it configures the Search AI app according to the settings in the selected app.  

!!!note "Points to Note"

    * It creates an app in the same workspace as the SearchAssist app. 
    * The newly created Search AI app is named as &lt;SearchAssist-app-name>_mig_&lt;timestamp>

After the migration is complete, the new app's name appears in Search AI. Download the logs to see the details of the migration process. 

![Migration Success](images/searchai/migration/success.png "Migration Success")


Next Steps: 

* Go to the corresponding Search AI app.
* Review and complete the setup. 

![Search AI app review](images/searchai/migration/searchai-app.png "Search AI app review")


## Review Checklist

1. Initiate the migration process from SearchAssist. 
2. Review the logs for the status. 
3. Review Content Sources.
    1. Enter the credentials for the connectors
    2. Set up schedulers for connectors or web crawls, if required. 
    3. Set up FAQs.
4. Configure Embedding Generation Models and verify index configuration. 
5. Verify the field mappings in the workbench stages.
6. Verify Custom Configurations. 
7. Configure Answer Generation models and verify answer generation configuration. 
8. Verify Business Rules.
9. Train the app. 
10. Test Answer Generation.


## Testing Search AI Answers

You can test a Search AI app in two ways:

1. Test answers directly within Search AI 
2. Test the app end-to-end from the AI for Service platform


### Testing within Search AI

Use this method to validate answers generated by Search AI in isolation. This allows testing the answer generation using Search AI. 

* Go to the Answer configuration page in the Search AI app.
* Click on Test Answers. 


![alt_text](images/searchai/migration/test-answers.png "image_tooltip")


### Testing Answers End-to-End in the AI for Service Platform

Use this method to test the complete application flow.

!!!note
    When you create a new app in the AI for Service platform, DialogGPT orchestration is enabled by default. In this mode, Search AI–based answer generation is disabled.

When you click *Test* in the top-right corner to test answers

* The system uses DialogGPT to generate responses, by default.
* Answers from Search AI aren't used unless explicitly enabled. 


To test the application using Search AI, do one of the following:

* Enable Knowledge from Search AI as a conversation type, or
* Disable DialogGPT orchestration.

**Enabling Knowledge from Search AI**

Click on Conversation Types and enable Knowledge from Search AI


![Add Search AI as knowledge](images/searchai/migration/add-knowledgeai.png "Add Search AI as knowledge")

![Add Search AI as knowledge](images/searchai/migration/enable-knowledge.png "Add Search AI as knowledge")


**Disabling DialogGPT** 

Go to the options and click Disable DialogGPT.

![Disable DialogGPT](images/searchai/migration/disable-dialogGpt.png "Disable DialogGPT")