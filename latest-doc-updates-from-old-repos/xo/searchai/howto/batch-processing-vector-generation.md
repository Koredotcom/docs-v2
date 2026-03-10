# Batch Processing of Vector Generation

Batch processing of custom embeddings means generating vector embeddings for many data chunks at once rather than one-by-one in real time. It introduces dynamic batching and rate limiting to optimize this flow.

When there are large volumes of content, the system:

* Groups chunks into batches.
* Sends each batch to the embedding model.
* Stores the generated vectors for later search or retrieval.

This allows multiple chunks to be grouped into a single API request, and requests are automatically paced to stay within provider limits. Batch processing helps to:

* Improve throughput and performance
* Reduce API overhead and cost
* Handle large-scale ingestion efficiently

**Example: Impact of Batching**

**Without Batching**

* Chunk 1 → API Call 1 
* Chunk 2 → API Call 2 
* Chunk 3 → API Call 3 …
* Chunk 100 → API Call 100 

Total: 100 API calls

**With batching**

Assuming: Token limit per request = 10000, each chunk is 1000 tokens

* Multiple chunks are packed into one batch.
* Batches are sent until all chunks are processed

Total: ~10 API calls instead of 100


## Enabling Batch Processing

1. Navigate to GenAI Features → Prompt Library → Add Prompt / Edit Prompt.
2. Provide the following rate limit configurations. These three configuration fields work together to control the size and speed of batches sent to the model. 	

    <table>
    <tr>
    <td>
    <strong>Field</strong>
    </td>
    <td><strong>Description</strong>
    </td>
    <td><strong>Mandatory</strong>
    </td>
    </tr>
    <tr>
    <td><strong>Token limit per request</strong>
    <p>
    How big can one batch be?
    </td>
    <td>Maximum tokens the system can pack into a single API call to the model. 
    <p>
    Set this to your embedding model’s maximum input token limit.
    <p>
    For example, for OpenAI's text-embedding-3-small, this is 8191 tokens.
    </td>
    <td>Yes
    <p>
    If left empty, batching is disabled, and chunks are sent individually for vector generation.
    </td>
    </tr>
    <tr>
    <td><strong>Token limit per minute</strong>
    <p>
    How much total content per minute can be processed?
    </td>
    <td>Maximum tokens sent to the API per minute.
    <ul>

    <li>Check your provider's rate limits page.</li>

    <li>Set to 0 for unlimited. When set to 0, the system doesn't enforce any token-per-minute limit. Use this when the provider doesn't have any limit, or you don't want to throttle by tokens.</li>
    </ul>
    </td>
    <td>No
    </td>
    </tr>
    <tr>
    <td><strong>Rate limit</strong>
    <p>
    How many batches per minute can be sent?
    </td>
    <td>Maximum API calls allowed per minute.
    <ul>

    <li>Check your provider's rate limits page.</li>

    <li>Set to 0 for unlimited. When set to 0, the system doesn't enforce any request-per-minute limit. Use this when the provider doesn't have any limit, or you don't want to throttle by request count.</li>
    </ul>
    </td>
    <td>No
    </td>
    </tr>
    <tr>
    <td colspan="3" ><strong>Note:</strong>
    <ol>
     <li> When both Token limit per minute and Rate limit are 0, the system performs dynamic batching (grouping chunks by Token limit per request) but sends them as fast as possible without throttling.</li>
     <li>If a single chunk exceeds the token limit, it's skipped. Ensure your chunk size is always smaller than the token limit per request to avoid skipped chunks.</li>
     <li>Only successfully indexed chunks appear in the Chunk Browser. If the token limit per request is lower than the chunk size, no chunks are indexed or displayed.</li>
    </ol>
    </td>
    </tr>
    </table>


This enables batch processing of vector generation whenever indexing occurs next. 
