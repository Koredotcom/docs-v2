# Document-Level Processing

In many documents, such as legal records, relevant information is distributed across multiple pages, chapters, or headings. When only selected chunks are sent to the LLM, the response may be incomplete or inaccurate because relationships between sections are missing.

Document-Level Processing addresses this by sending the full documents associated with the most relevant chunks to the LLM. This enables the model to consider document-wide context and generate more comprehensive answers. 

By default, only retrieved chunks are shared with the LLM; with Document-Level Processing enabled, the corresponding full documents are included.


## How It Works

By default, Search AI sends only the most relevant chunks retrieved for a query.

When Document-Level Processing is enabled:

* Chunk Retrieval: The system retrieves the most relevant chunks based on the retrieval configuration (top K chunks and token budget for chunks). 
* Document Identification: Then, it identifies the unique set of source documents to which those retrieved chunks belong.
* Document Ranking: The documents are ranked according to the relevance(score) of the chunks extracted from them. 
    * A document linked to the highest-ranked chunk is prioritized first.
    * If multiple chunks belong to the same document, the chunk with the highest relevance score (or rank position) determines that document’s priority.
    * Example: If *Document X* corresponds to the highest-ranked chunk (Chunk 1), it is ranked first. If *Document Y* corresponds to the next highest-ranked chunk (Chunk 2), it is ranked second.
* Context Sharing: It sends the entire document to the LLM rather than just chunks. Documents are included up to the configured token limit for documents.
* Answer Generation: The LLM generates the answer using this expanded context.

!!! note 
 
    Note that this feature does not affect how the content is indexed or chunked. 


## Enable Document-Level Processing

To enable Document-Level Processing, navigate to Answer Configuration and turn on the Enable Document Level Processing option and configure the Token budget for Documents. 

[Learn more.](answer-generation.md)

## When To Use The Feature

Enable Document-Level Processing when:

* There are knowledge-dense documents, and information is distributed across multiple pages. 
* Answers require cross-sectional context.
* Chunk-only responses seem incomplete.
* Documents contain connected or narrative content.

Common examples include policy manuals, legal contracts, research papers, and medical reports.


## Token Limit Considerations

Full documents are sent to the LLM if they're within the configured token budget for documents. 

* If only one document is selected and its size exceeds the token limit, the document is truncated. In such cases, only partial content from that document is sent to the LLM.
* If multiple documents are eligible to be shared, documents are added based on their ranking.
    * The highest-ranked document is added first.
    * If it fits within the token budget, the system proceeds to the next-ranked document.
    * This process continues sequentially until all the documents are added. 
    * Whenever any document exceeds the remaining token budget, it is either truncated or excluded.

The system continues this process until either the token budget is exhausted or all eligible documents have been processed.

!!! note 
 
    Adjust the [Token Budget for documents](answer-generation.md) as per the coverage needed.


## Best practices 

* Review the configured model’s context window. Avoid using models with limited context, especially when working with large documents. For reference, an average 10-page PDF can consume approximately 12K tokens.
* Plan token allocation carefully. The total tokens sent to the LLM include multiple components:
    * Document-level tokens
    * Prompt or instruction template tokens
    * Response token budget

    The combined total of these must remain within the model’s maximum context window. If this limit is exceeded, the LLM request fails.


**Example:** Consider the following allocations: 

* Response token budget: 10K tokens
* Prompt template: ~1K tokens
* Document token limit: 120K tokens

Total potential tokens = ~131K, exceeding the maximum context window of the OpenAI 4o model (128K tokens) and resulting in a failed call.
