# Generative AI Features - Search AI

Utilize generative AI features to supercharge your AI Agent with powerful tools that enhance productivity, enable natural conversations, improve intent detection, analyze customer sentiment, and support agent performance, all working together to create seamless end-user experiences through intuitive design.

## Model Feature Support Matrices

The following sections categorize model features and show feature support across supported models.

(✅ Supported | ❌ Not supported | ✅* - Supported but no default prompt | NA = Not Applicable)

### Answer Generation and Enrichment Features

* For Enrich Chunks with LLM and Transform Documents with LLM features, use the templates in the prompt library to write custom prompts. 

<table>
  <tr>
   <td>
<strong>Model</strong>
   </td>
   <td><strong>Answer Generation</strong>
   </td>
   <td><strong>Enrich Chunks with LLM</strong>
   </td>
   <td><strong>Transform Documents with LLM</strong>
   </td>
  </tr>
  <tr>
   <td>Azure OpenAI - GPT 4 Turbo
   </td>
   <td>✅
   </td>
   <td><strong>✅*</strong>
   </td>
   <td>✅*
   </td>
  </tr>
  <tr>
   <td>Azure OpenAI - GPT 4o
   </td>
   <td>✅
   </td>
   <td>✅*
   </td>
   <td>✅*
   </td>
  </tr>
  <tr>
   <td>Azure OpenAI -GPT-4o mini
   </td>
   <td>✅<strong>*</strong>
   </td>
   <td>✅*
   </td>
   <td>✅*
   </td>
  </tr>
  <tr>
   <td>OpenAI - GPT 3.5 Turbo, GPT 4, GPT 4 Turbo
   </td>
   <td>✅
   </td>
   <td>✅*
   </td>
   <td>✅*
   </td>
  </tr>
  <tr>
   <td>OpenAI - GPT 4o
   </td>
   <td>✅
   </td>
   <td>✅*
   </td>
   <td>✅*
   </td>
  </tr>
  <tr>
   <td>OpenAI - GPT-4o mini*
   </td>
   <td>✅*
   </td>
   <td>✅*
   </td>
   <td>✅*
   </td>
  </tr>
  <tr>
   <td>Custom LLM
   </td>
   <td>✅*
   </td>
   <td>✅*
   </td>
   <td>✅*
   </td>
  </tr>
  <tr>
   <td>XO GPT
   </td>
   <td>✅
   </td>
   <td>❌
   </td>
   <td>❌
   </td>
  </tr>
  <tr>
   <td>Amazon Bedrock
   </td>
   <td>✅*
   </td>
   <td>✅*
   </td>
   <td>✅*
   </td>
  </tr>
</table>

### Query Processing Features


<table>
  <tr>
   <td><strong>Model</strong>
   </td>
   <td><strong>Metadata Extractor Agent</strong>
   </td>
   <td><strong>Query Rephrase (Adv Search)</strong>
   </td>
   <td><strong>Query Transformation</strong>
   </td>
   <td><strong>Rephrase User Query</strong>
   </td>
   <td><strong>Result Type Classification</strong>
   </td>
  </tr>
  <tr>
   <td>Azure OpenAI - GPT 4 Turbo
   </td>
   <td>❌
   </td>
   <td>❌
   </td>
   <td>❌
   </td>
   <td>✅*
   </td>
   <td>❌
   </td>
  </tr>
  <tr>
   <td>Azure OpenAI - GPT 4o
   </td>
   <td>✅
   </td>
   <td>✅
   </td>
   <td>✅
   </td>
   <td>✅
   </td>
   <td>✅
   </td>
  </tr>
  <tr>
   <td>Azure OpenAI -GPT-4o mini
   </td>
   <td>✅*
   </td>
   <td>✅*
   </td>
   <td>✅*
   </td>
   <td>✅*
   </td>
   <td>✅*
   </td>
  </tr>
  <tr>
   <td>OpenAI - GPT 3.5 Turbo, GPT 4, GPT 4 Turbo
   </td>
   <td>❌
   </td>
   <td>❌
   </td>
   <td>❌
   </td>
   <td>✅*
   </td>
   <td>❌
   </td>
  </tr>
  <tr>
   <td>OpenAI - GPT 4o
   </td>
   <td>✅
   </td>
   <td>✅
   </td>
   <td>✅
   </td>
   <td>✅
   </td>
   <td>✅
   </td>
  </tr>
  <tr>
   <td>OpenAI - GPT-4o mini*
   </td>
   <td>✅*
   </td>
   <td>✅*
   </td>
   <td>✅*
   </td>
   <td>✅*
   </td>
   <td>✅*
   </td>
  </tr>
  <tr>
   <td>Custom LLM
   </td>
   <td>✅* <p>
(If underlying LLM is GPT 4o / GPT 4o mini)
   </td>
   <td>✅* <p>
(If underlying LLM is GPT 4o / GPT 4o mini)
   </td>
   <td>✅* <p>
(If underlying LLM is GPT 4o / GPT 4o mini)
   </td>
   <td>✅*   </td>
   <td>✅* <p>
(If underlying llm is GPT 4o / GPT 4o mini)
   </td>
  </tr>
  <tr>
   <td>XO GPT
   </td>
   <td>❌
   </td>
   <td>❌
   </td>
   <td>❌
   </td>
   <td>✅
   </td>
   <td>❌
   </td>
  </tr>
  <tr>
   <td>Amazon Bedrock
   </td>
   <td>✅*
   </td>
   <td>✅*
   </td>
   <td>✅*
   </td>
   <td>✅*
   </td>
   <td>✅*
   </td>
  </tr>
</table>

### Vector Generation Features 


<table>
  <tr>
   <td><strong>Model</strong>
   </td>
   <td><strong>Vector Generation - Text</strong>
   </td>
   <td><strong>Vector Generation - Image</strong>
   </td>
  </tr>
  <tr>
   <td>Azure OpenAI - GPT 4 Turbo
   </td>
   <td>NA
   </td>
   <td>NA
   </td>
  </tr>
  <tr>
   <td>Azure OpenAI - GPT 4o
   </td>
   <td>NA
   </td>
   <td>NA
   </td>
  </tr>
  <tr>
   <td>Azure OpenAI -GPT-4o mini
   </td>
   <td>NA
   </td>
   <td>NA
   </td>
  </tr>
  <tr>
   <td>OpenAI - GPT 3.5 Turbo, GPT 4, GPT 4 Turbo
   </td>
   <td>NA
   </td>
   <td>NA
   </td>
  </tr>
  <tr>
   <td>OpenAI - GPT 4o
   </td>
   <td>NA
   </td>
   <td>NA
   </td>
  </tr>
  <tr>
   <td>OpenAI - GPT-4o mini
   </td>
   <td>NA
   </td>
   <td>NA
   </td>
  </tr>
  <tr>
   <td>Custom LLM
   </td>
   <td>✅*
   </td>
   <td>✅*
   </td>
  </tr>
  <tr>
   <td>XO GPT
   </td>
   <td>✅
   </td>
   <td>✅
   </td>
  </tr>
  <tr>
   <td>Amazon Bedrock
   </td>
   <td>NA
   </td>
   <td>NA
   </td>
  </tr>
</table>

**Supported Vector Dimensions for Embedding Models for Custom Integrations**

 When integrating an embedding model, it’s crucial to ensure that it aligns with the supported vector dimensions. Below is a list of the vector sizes that we support.

Supported Vector Sizes



*  128
*  256
*  384
*  512
*  768
*  1024
*  1028
*  1536
*  2048
*  3072

See [how to do custom integration](https://docs.kore.ai/xo/searchai/howto/integrate-custom-embedding-model/). 



<!--

The following table displays the features and the supported models. 

(✅ Supported | ❌ Not supported)

| Model     | Answer Generation     | Vector Generation <br>(Image & Text)     | Metadata Extractor Agent     | Query Rephrase for Advanced Search API     | Query Transformation     | Result Type Classification     |Rephrase User Query|
|---|---|---|---|---|---|---|---|
| Azure OpenAI - GPT 4 Turbo     | ✅     | ❌     | ❌     | ❌     | ❌     | ❌     | ✅     |
| Azure OpenAI - GPT 4o, and GPT-4o mini*     | ✅     | ❌     | ✅     | ✅     | ✅     | ✅     | ✅     |
| OpenAI - GPT 3.5 Turbo, GPT 4, GPT 4 Turbo     | ✅     | ❌     | ❌     | ❌     | ❌     | ❌     | ✅     |
| OpenAI -   GPT 4o, and GPT-4o mini*     | ✅     | ❌     | ✅     | ✅     | ✅     | ✅     | ✅     |
| Custom LLM     | ✅     | ✅     | ✅   (If underlying llm is GPT 4o / GPT 4o mini)     | ✅   (If underlying llm is GPT 4o / GPT 4o mini)     | ✅   (If underlying llm is GPT 4o / GPT 4o mini)     | ✅   (If underlying llm is GPT 4o / GPT 4o mini)     | ✅     |
| XO GPT     | ✅     | ✅     | ❌     | ❌     | ❌     | ❌     | ✅     |
| Amazon Bedrock     | ❌     | ❌     | ❌     | ❌     | ❌     | ❌     |❌     |

\* *The OpenAI GPT-4o mini and Azure OpenAI GPT-4o mini don't include system prompts, but they can be used with custom prompts.* 

\** *To use the Provider's New LLM, you must create a custom prompt as system prompts are unavailable.*

-->

## Answer Generation

This feature helps generate an answer to the user question based on the data ingested into the Search AI application. The relevant data with a user query is inserted into the prompt, and the configured LLM responds with the answer. This answer is then formatted appropriately and presented to the user. [Learn more](../searchai/answer-configuration.md#answers-generation).

## Enrich Chunks with LLM

This feature helps leverage the capabilities of an external LLM to refine, update, or enrich the chunks extracted from the ingested content. [Learn More](../searchai/workbench/llm-stage.md). 

Note:

* Create a custom prompt to use this feature. 
* All the chunk fields are available for use in the custom prompt for this feature. Click on View Field Details while adding a Workbench Stage during chunk enrichment process to view the complete list of Chunk Fields.

## Transform Documents with LLM

This feature allows Search AI to leverage external LLM capabilities to enhance or update documents during the extraction process.

[Learn More](../searchai/content-extraction/transformation.md)

Note:

* Create a custom prompt to use this feature. 
* All the document fields are available for use in the custom prompt for this feature. Click on View Field Details while adding a Transformation Stage during content extraction to view the complete list of Document Fields. 

## Vector Generation - Image

This feature helps create vector embeddings for image data ingested into the Search AI application When the user inputs a query, the query is converted into an embedding, and then a vector search is performed to get a list of relevant data from the ingested data. This relevant data is then sent to the answer generation feature.

## Vector Generation - Text

This feature helps create vector embeddings for text data ingested into the Search AI application When the user inputs a query, the query is converted into an embedding, and then a vector search is performed to get a list of relevant data from the ingested data. This relevant data is then sent to the answer generation feature.

## Metadata Extractor Agent

This feature is used to extracts relevant sources and fields from a query, map them to structured data, and apply filters or boosts for accurate retrieval. This is particularly useful for data from third party applications. [Learn More](../searchai/rag-agents.md). 

If you are using a custom prompt for this feature, ensure that the output from the LLM is in the following structured format. 

```
{
  "extractedMetaData": [
    {
      "sourceName": "string",
      "chunkMeta": {
        "metaKey1": ["value1", "value2"],
        "metaKey2": ["value3"]
      }
    }
  ],
  "range": [
    {
      "createdOn": {
        "gte": "YYYY-MM-DDTHH:MM:SSZ",
        "lte": "YYYY-MM-DDTHH:MM:SSZ"
      }
    }
  ],
  "sourceIntent": true
}
```

* extractedMetaData: Array of sources and their associated metadata.
* range: date range filter. This is optional. 
* sourceIntent: This is a boolean field that indicates if the source explicitly. 


## Query Rephrase for Advanced Search API

This feature is used to add contextual information to the user queries and enhance them for relevance. [Learn More](../searchai/rag-agents.md).

While using custom prompts for this feature, ensure that the LLM responds with a structure response as shown below. 

```

{
  "rephrased_query": "string",
  "confidence": "High",
  "reasoning": "The rephrasing adds clarity and reflects the conversation context."
}
```

* rephrased_query: The reworded version of the original user query.
* confidence: Confidence level in the quality of rephrasing.
* reasoning: Justification behind the transformation.


## Query Transformation

This feature is used to identify key terms within a query, removing noise and prioritizing relevant documents. [Learn More](../searchai/rag-agents.md).

If you are using a custom prompt for this feature, ensure that the output from the LLM is in the following format. 
```
{
  "query_processing": {
    "original_query": "string",
    "keyword_search_query": "string",
    "vector_search_query": "string"
  },
  "core_terms": ["string"],
  "semantic_expansions": ["string"],
  "search_priority": {
    "must_include": ["string"],
    "should_include": ["string"],
    "context_terms": ["string"]
  }
}

```

* query_processing: Describes how the original query is transformed to support different search strategies:
    * original_query: The input query provided by the user.
    * keyword_search_query: The version optimized for keyword-based search.
    * vector_search_query: The version adapted for vector-based semantic search.
* core_terms: The key terms extracted from the original query. This field is currently not used but reserved for future enhancements. 
* semantic_expansions: Related or semantically similar terms. This field is currently not used but reserved for future use.
* search_priority: Categorizes search terms based on their relevance and intended role in query resolution. This object must include three arrays of strings, each serving a distinct purpose in boosting logic during the search process:
    *  must_include: Terms that are critical for high search relevance. These terms receive the strongest boost in content fields such as chunkText, chunkTitle, and recordTitle. 
        * Can include single-word terms. 
        * Ideal for pinpointing exact matches that are central to the query intent.
    * should_include: Terms that provide a moderate relevance boost, enhancing result quality if present. 
        * Must contain at least two words
        * Useful for improving relevance without being overly restrictive.
    * context_terms: Terms that offer light contextual boosting to enrich the semantic relevance of the query.
        * Must contain at least two words
        * Helps in disambiguating queries or adding background context.

Example:
```
{
    "query_processing": { 
        "original_query": "what are the large language models which have large context window in them",
        "keyword_search_query": "large language models large context window",
        "vector_search_query": "large language models which have large context window"
    },
    "search_priority": {
        "must_include": [
            "large language models",
            "large context window"
        ],
        "should_include": [
            "models"
        ],
        "context_terms": [
            "LLM"
        ]
    }
}

```

## Result Type Classification

This feature is used in Agentic RAG to determine whether the user seeks a specific answer or a list of search results in response to the query. [Learn More](../searchai/rag-agents.md)


If you are using a custom prompt for this feature, ensure that the output from the LLM is in the following format. 
```
{
  "query_type": "TYPE_1/TYPE_2",
  "confidence": "High",
  "reasoning": "This query closely matches the definition of TYPE_1 based on its intent and phrasing."
}
```

* query_type: Must be one of the defined enum values such as TYPE_1 or TYPE_2. Type_1 refers to Search Results and Type_2 refers to answers. 
* confidence: String value indicating certainty (for example, High, Medium, Low).
* reasoning: A brief explanation for the chosen type.


## Rephrase User Query

The Rephrase User Query feature enhances the AI Agent’s understanding by reconstructing incomplete or ambiguous user inputs using the ongoing conversation history. This helps improve intent detection and entity extraction accuracy, especially when user input is fragmented across multiple messages.

When users submit queries that are incomplete or rely on previous context (coreference), the system uses an LLM to rephrase the input at runtime. This rephrased version consolidates relevant details from earlier messages, helping the NLP engine better understand the user’s intent and extract entities more accurately.

**Usage**
The LLM rephrases the query using one of the following methods depending on the scenario:

**Completeness**: The user query should be complete within the conversation context, allowing the application to identify the correct intent. If the user query is incomplete, the system urges the user to rephrase with more information. However, using this feature, the user query is automatically completed using the conversation context. 

For example:

* User: What's the weather forecast for New York tomorrow? 
* App : It will be Sunny, with temperatures ranging between 30 and 35 degrees Celsius. 
* User: How about Orlando? 

Without rephrasing, the last query is ambiguous.

Rephrased Query: What's the weather forecast for Orlando tomorrow?

**Co-referencing**: Handles situations where the user refers to something previously mentioned using pronouns or vague references.

For example:

* User: I’ve had a headache for the past week.
* App : I’m sorry to hear that. Have you taken any medication?
* User: Yes, ibuprofen, but it’s not helping.
* App : I see. How often do you take it?
* User: Every six hours.

Without rephrasing, the last user message isn't meaningful and doesn't suggest the user intent.

Rephrased Query: I take ibuprofen every six hours.

**Completeness and Co-referencing**: Handles both issues together by reconstructing the full meaning.

For example:

* User: I want to apply for a personal loan.
* App : You're eligible for up to $20,000.
* User: How about a home loan?
* App : You’re eligible for up to $100,000.
* User: What about interest rates?

Rephrased Query: What are the interest rates for personal and home loans?

### Conversation History Length

This setting controls how many previous messages (from both the user and the App ) are used to provide context for rephrasing. The default value is 5, and the maximum is 25. If the session history contains fewer messages than the configured number, only the available messages will be sent, even if the set value is higher. 

You can access the Conversation History Length from **Rephrase User Query > Advanced Settings**.

