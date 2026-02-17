# LLM Selection and Configuration

The Language Model (LLM) selection is a critical decision that fundamentally shapes your Search AI implementation's performance, accuracy, cost-efficiency, and user experience. This section provides comprehensive guidance on selecting and configuring the right LLM for your specific use cases.


## Model Selection Guidelines

Different LLMs offer varying capabilities at different price points, creating essential tradeoffs to consider:


### Cost-Sensitive Applications


* **Recommended models**: GPT-4o mini
* **Best for**:
    * Applications with high query volume where per-token costs significantly impact overall expenses
    * Use cases with straightforward information retrieval needs
    * Deployments with strict budget constraints
* **Considerations**:
    * May struggle with complex reasoning or nuanced understanding
    * Provide faster response times, which can be valuable for user experience


### Performance-Prioritizing Applications



* **Recommended models**: GPT-4o, or similar high-performance models
* **Best for**:
    * Customer-facing applications where quality is paramount
    * Complex document sets requiring sophisticated reasoning
    * Use cases involving technical, medical, legal, or scientific content
    * Applications where accuracy justifies higher costs
* **Considerations**:
    * Higher per-token costs
    * Generally provide more coherent, accurate, and contextually aware responses.
    * Can process more complex instructions and fine-tuning directives
    * Often have larger context windows, enabling more chunks to be included


### Context Window Considerations



* The context window—the amount of text a model can process in a single call—is especially critical for RAG applications: \

* **Matching Window Size to Chunk Strategy**
    * For smaller chunks (300-500 tokens):
        * Models with 8k-16k context windows are typically sufficient.
        * Can accommodate 15-40 chunks depending on prompt and output size.
        * Examples: GPT-3.5 Turbo (16k), GPT-4o (128k used at lower capacity).
    * For medium chunks (1k-2k tokens):
        * Models with 16k-32k context windows are recommended.
        * Can accommodate 8-15 medium-sized chunks.
        * Consider the information density and relationships between chunks.
    * For larger chunks (3k-5k tokens):
        * Models with 32k-128k context windows are essential.
        * Examples: GPT-4o (128k), Claude 3 Opus (200k).
        * Critical for preserving context in complex documents. \

* **Impact of Limited Context Windows**
* Models with 4k-8k context windows:
    * Force extremely small chunk sizes (potentially fragmenting concepts).
    * Limit the number of chunks per query (reducing search breadth).
    * May result in "context window exhausted" errors for complex queries.
    * Consider using these models only for narrowly focused applications.

To summarize, the sophistication of your content and use case should guide your model selection. Here is a table with some recommendations; while they provide a starting point, they should not be followed blindly. Always exercise your professional discretion, as your specific needs, budget constraints, and project requirements may necessitate a different approach. 


<table>
  <tr>
   <td><strong>Content-Type</strong>
   </td>
   <td><strong>Recommended Model</strong>
   </td>
   <td><strong>Rationale</strong>
   </td>
  </tr>
  <tr>
   <td>Simple FAQs, straightforward knowledge base
   </td>
   <td>Basic models (GPT-3.5, GPT-4o mini)
   </td>
   <td>Cost-effective for retrieving explicit information
   </td>
  </tr>
  <tr>
   <td>Technical documentation, multi-step processes
   </td>
   <td>Mid-tier models (GPT-4 Turbo)
   </td>
   <td>Better handling of technical concepts and procedures
   </td>
  </tr>
  <tr>
   <td>Legal contracts, scientific papers, complex narratives
   </td>
   <td>Advanced models (GPT-4o)
   </td>
   <td>Superior reasoning for content requiring interpretation
   </td>
  </tr>
  <tr>
   <td>Responses requiring specialized knowledge about a task or domain.
   </td>
   <td>Fine-tuned custom model (could be open-source or self-hosted)
   </td>
   <td>Requires industry-specific knowledge to answer the questions accurately.
   </td>
  </tr>
</table>



## Token Management

Effective token management is essential for both system performance and cost control. Understanding and optimizing token usage requires attention to several factors:


#### Understanding Token Allocation Within Context Windows



* The context window of your chosen LLM accommodates three components:
    * **System and User Prompts (Input)**
        * System prompts typically consume 500-1000 tokens
        * Instructions for how to process the retrieved chunks
        * User input
        * Format specifications for the response
        * Custom instructions for domain-specific handling
    * **Retrieved Document Chunks**
        * The primary consumer of context window space
        * Varies based on:
            * Chunk size configuration
            * Number of chunks retrieved
            * Semantic search settings and thresholds
        * Represents 70-90% of total token usage in typical implementations
    * **Expected Model Response (Output)**
        * Typically 500-2000 tokens depending on prompt and max response tokens setting
        * Impacts both context window requirements and costs
        * Can be controlled through specific output length instructions
        * May vary widely based on query complexity


#### Configuring Maximum Chunk Tokens



* The "Max tokens for Chunks" setting is a critical control point for system behavior:
    * **Default and Adjustment Principles**
    * Default setting: 20,000 tokens
    * This setting controls the maximum tokens allocated for retrieved chunks in the prompt
    * Should be adjusted based on:
        * Your LLM's context window size
        * Complexity of your prompts
        * Expected response length
        * Chunk size strategy


#### Token Usage Calculation Examples



* Understanding practical token allocation is critical for avoiding errors and optimizing costs:
    * **Example 1: 16k Context Window Model**
        * System prompt: 500 tokens
        * Max tokens for chunks: 12 chunks of 1000 tokens each = 12,000 tokens
        * Expected answer: 1500 tokens
        * Total requirement: 14,000 tokens (fits within 16k window)
    * **Example 2: 8k Context Window Model with Reduced Chunks**
        * System prompt: 500 tokens
        * Max tokens for chunks: 6 chunks of 1000 tokens each = 6,000 tokens
        * Expected answer: 1000 tokens
        * Total requirement: 7,500 tokens (fits within 8k window)
    * **Example 3: Problematic Configuration Leading to Errors**
        * System prompt: 800 tokens
        * Max tokens for chunks: 20 chunks of 800 tokens each = 16,000 tokens
        * Expected answer: 1200 tokens
        * Total requirement: 18,000 tokens (exceeds 16k window → will cause failure)

**Recommended Configurations by Context Window**


<table>
  <tr>
   <td><strong>Model Context Window</strong>
   </td>
   <td><strong>Recommended "Max tokens for Chunks"</strong>
   </td>
   <td><strong>Reasoning</strong>
   </td>
  </tr>
  <tr>
   <td>4k window
   </td>
   <td>2,000-2,500 tokens
   </td>
   <td>Reserves space for prompts and responses in smaller windows
   </td>
  </tr>
  <tr>
   <td>8k window
   </td>
   <td>5,000-6,000 tokens
   </td>
   <td>Balances chunk count with sufficient prompt/response space
   </td>
  </tr>
  <tr>
   <td>16k window
   </td>
   <td>12,000-13,000 tokens
   </td>
   <td>Maximizes information while preventing context overflows
   </td>
  </tr>
  <tr>
   <td>32k window
   </td>
   <td>25,000-27,000 tokens
   </td>
   <td>Takes advantage of larger windows while maintaining a safety margin
   </td>
  </tr>
  <tr>
   <td>64k+ window
   </td>
   <td>50,000+ tokens
   </td>
   <td>Leverages expansive context for comprehensive information retrieval
   </td>
  </tr>
</table>


**Fine-Tuning Considerations**



* For verbose responses, reduce the "Max tokens for Chunks" setting
* For complex system prompts, account for their increased token usage
* For multi-part queries, reserve more tokens for the model's reasoning process
* Monitor token usage patterns and adjust accordingly


## Cost Optimization Strategies

Token usage directly drives costs in LLM-based systems. Implementing thoughtful optimization strategies can dramatically reduce expenses while maintaining performance:


#### Understanding the Cost Structure



* **Input vs. Output Token Costs**
    * Input tokens (prompts and chunks) typically cost less than output tokens
    * Most LLM providers charge different rates for input vs. output
    * Example pricing (illustrative):
        * GPT-4o: $2.5/million input tokens, $10/million output tokens
        * GPT-3.5 Turbo: $0.5/million input tokens, $1.5/million output tokens
* **Fixed vs. Variable Costs**
    * Fixed components:
        * System prompts (relatively constant per query)
        * User query (varies but typically small)
    * Variable components:
        * Retrieved chunks (the largest and most controllable cost factor)
        * Model responses (controllable through instructions)

**Configuration Examples with Cost Implications**


<table>
  <tr>
   <td><strong>Configuration</strong>
   </td>
   <td><strong>Approximate Tokens</strong>
   </td>
   <td><strong>Query Cost (GPT-4o)</strong>
   </td>
   <td><strong>Weekly Cost (1000 queries)</strong>
   </td>
  </tr>
  <tr>
   <td>Conservative (5k tokens for chunks)
   </td>
   <td>~7k input, ~1k output
   </td>
   <td>$0.275 per query
   </td>
   <td>$275
   </td>
  </tr>
  <tr>
   <td>Moderate (10k tokens for chunks)
   </td>
   <td>~12k input, ~1.5k output
   </td>
   <td>$0.45 per query
   </td>
   <td>$450
   </td>
  </tr>
  <tr>
   <td>Expansive (20k tokens for chunks)
   </td>
   <td>~22k input, ~2k output
   </td>
   <td>$0.75 per query
   </td>
   <td>$750
   </td>
  </tr>
</table>



## Custom LLM Implementation Notes

When integrating custom or third-party LLMs with Search AI, special considerations are necessary to ensure compatibility and optimal performance:


#### Model Parameter Configuration



* **Context Window Management**
    * Search AI does not automatically detect context window limits for custom LLMs
    * You must consider:
        * Setting maximum input token limits in the prompt
        * Max tokens for chunks according to the context window 
        * Consider tokenization rules for the selected model
    * Regular testing is essential to prevent context window overflow errors
* **Temperature and Sampling Settings**
    * Lower temperature settings (0.0-0.3) generally provide more consistent and factual responses for RAG applications.
    * Higher temperatures may be appropriate for creative applications or generating multiple answer perspectives.
    * Custom LLMs may use different parameter names or scales to control randomness.