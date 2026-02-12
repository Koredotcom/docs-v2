# Search AI Best Practices Guide

This guide provides essential recommendations for building effective Search AI solutions. It covers three critical areas: data ingestion, chunking strategy, and LLM selection.

---

## 1. Data Ingestion

The quality of your data directly impacts search performance. Ensure you ingest the right content in the right format.

### Supported Data Sources

Search AI accepts content from:
- **Files**: PDF, DOCX, PPTX, TXT
- **Websites**: Web pages and HTML content
- **Connectors**: Third-party applications

### File Best Practices

#### Document Quality
- Use **digitally created documents** rather than scanned or handwritten files
- Maintain **consistent layouts** across pages
- Ensure documents are **unencrypted** and password-free
- Keep content **concise and well-structured** for better search accuracy
- Remove unnecessary headers, footers, and metadata

#### Layout and Formatting
- **Single-column documents** work best
- Multi-column layouts may reduce accuracy and need tuning
- Use clear section headers and logical organization
- Avoid switching between single and multi-column formats in the same document

#### Content Restrictions
Avoid these to prevent data loss:
- Compressed PDFs (can cause distortion)
- Multi-page tables (hard to process)
- Scanned or heavily formatted files
- Inconsistent formatting

#### Images and Tables
Search AI extracts text by default. For better results:
- Provide text descriptions for key information in images
- Add contextual summaries before or after tables and images
- Use meaningful titles for images and tables
- Update extraction strategies for documents with significant visual content

### Website Best Practices

#### Structure
- Follow **schema.org standards** for metadata
- If not using schema.org, apply **consistent heading logic** (h1, h2, p tags)
- Standard HTML tags provide the best results
- Custom CSS structures may need fine-tuning

#### Non-Standard Content
- Override default processing using **Document Workbench** for custom layouts
- Define custom extraction rules for non-standard structures

### Connector Integration Best Practices

#### Relevance and Filtering
- **Ingest only relevant data** for your use case
- Use **advanced filters** to select valuable content
- Avoid pulling entire datasets to prevent noise

#### Performance
- **Limit ingestion frequency** to avoid system overload
- **Monitor logs** and adjust based on performance
- Use **incremental updates** instead of full re-ingestion

---

## 2. Chunking Strategy

Chunking breaks content into smaller pieces for better search and retrieval. Choose your chunk size based on your specific needs.

**Default chunk size**: 1000 tokens (customize based on your use case)

### When to Use Smaller Chunks (300-500 tokens)

#### Best For
- **Precise question answering**: When answers are in short text segments
- **Technical documentation**: Dense content with tightly packed concepts
- **Multiple topics**: Documents covering various subjects requiring targeted retrieval
- **Limited context windows**: LLMs with smaller capacity
- **Memory efficiency**: Optimizing storage and processing
- **Cost sensitivity**: Managing token usage

### When to Use Larger Chunks (1000+ tokens)

#### Best For
- **Reasoning tasks**: When context and relationships between concepts matter
- **Narrative content**: Stories, case studies, or arguments that need coherence
- **Contextual dependency**: Information requiring surrounding text
- **Cross-paragraph references**: Content with internal references
- **Multi-step procedures**: Processes that must be followed in sequence
- **Conceptual understanding**: When grasping themes is more important than specific facts

---

## 3. LLM Selection and Configuration

Your choice of LLM shapes performance, accuracy, cost, and user experience.

### Model Selection

Different models offer different capabilities at different price points. Consider these factors:

#### Cost-Sensitive Applications
- **Recommended**: GPT-4o mini
- **Best for**: High query volume, straightforward retrieval, budget constraints
- **Trade-offs**: May struggle with complex reasoning but offers faster responses

#### Performance-Prioritizing Applications
- **Recommended**: GPT-4o or similar high-performance models
- **Best for**: Customer-facing apps, complex documents, technical/medical/legal content
- **Trade-offs**: Higher costs but better accuracy and coherence

#### Model Recommendations by Content Type

| Content Type | Recommended Model | Reason |
|--------------|-------------------|--------|
| Simple FAQs, knowledge base | GPT-3.5, GPT-4o mini | Cost-effective for explicit information |
| Technical docs, processes | GPT-4 Turbo | Better handling of technical concepts |
| Legal, scientific, complex | GPT-4o | Superior reasoning for interpretation |
| Specialized knowledge | Fine-tuned custom model | Industry-specific accuracy |

### Context Window Considerations

The context window is the amount of text a model can process in one call. This is critical for RAG applications.

#### Matching Window Size to Chunks

- **Small chunks (300-500 tokens)**: 8k-16k context windows are sufficient
  - Can accommodate 15-40 chunks
  - Examples: GPT-3.5 Turbo (16k)

- **Medium chunks (1k-2k tokens)**: 16k-32k context windows recommended
  - Can accommodate 8-15 chunks
  
- **Large chunks (3k-5k tokens)**: 32k-128k context windows essential
  - Examples: GPT-4o (128k), Claude 3 Opus (200k)

### Token Management

Effective token management controls both performance and cost.

#### Token Allocation Components

Your context window accommodates three parts:

1. **System and User Prompts** (500-1000 tokens)
   - Instructions for processing
   - Format specifications
   - Custom domain instructions

2. **Retrieved Chunks** (70-90% of total usage)
   - The largest consumer of tokens
   - Varies by chunk size, number of chunks, and search settings

3. **Model Response** (500-2000 tokens)
   - Controlled through output length instructions
   - Impacts both context window and costs

#### Configuring Maximum Chunk Tokens

The "Max tokens for Chunks" setting controls how many tokens are allocated for retrieved content.

**Recommended Settings by Context Window**:

| Context Window | Recommended Max Tokens | Reasoning |
|----------------|------------------------|-----------|
| 4k | 2,000-2,500 | Reserves space for prompts/responses |
| 8k | 5,000-6,000 | Balances chunks with prompt space |
| 16k | 12,000-13,000 | Maximizes info while preventing overflow |
| 32k | 25,000-27,000 | Uses larger windows with safety margin |
| 64k+ | 50,000+ | Leverages expansive context |

#### Example Token Calculations

**Example 1: 16k Context Window**
- System prompt: 500 tokens
- Chunks: 12 × 1000 = 12,000 tokens
- Response: 1,500 tokens
- **Total: 14,000 tokens** ✓ Fits in 16k window

**Example 2: Problematic Configuration**
- System prompt: 800 tokens
- Chunks: 20 × 800 = 16,000 tokens
- Response: 1,200 tokens
- **Total: 18,000 tokens** ✗ Exceeds 16k window → Error

### Cost Optimization

Token usage drives LLM costs. Here's how to optimize:

#### Understanding Costs
- **Input tokens** (prompts/chunks) cost less than output tokens
- Most providers charge different rates for input vs. output
- Example: GPT-4o charges $2.5/million input, $10/million output

#### Cost by Configuration

| Configuration | Approximate Tokens | Cost per Query (GPT-4o) | Weekly Cost (1000 queries) |
|---------------|-------------------|------------------------|---------------------------|
| Conservative (5k chunks) | 7k input, 1k output | $0.28 | $280 |
| Moderate (10k chunks) | 12k input, 1.5k output | $0.45 | $450 |
| Expansive (20k chunks) | 22k input, 2k output | $0.75 | $750 |

#### Optimization Tips
- For verbose responses, reduce "Max tokens for Chunks"
- For complex prompts, account for their increased token usage
- Monitor usage patterns and adjust accordingly
- Use lower temperature settings (0.0-0.3) for factual responses

### Custom LLM Implementation

When using custom or third-party LLMs:

#### Key Considerations
- Search AI doesn't auto-detect context window limits for custom LLMs
- Set maximum input token limits manually
- Configure "Max tokens for chunks" according to context window
- Test regularly to prevent overflow errors
- Adjust temperature settings for your use case (lower is better for factual content)

---

## Quick Reference Checklist

### Data Ingestion
- ☐ Use digitally created, unencrypted documents
- ☐ Maintain consistent single-column layouts
- ☐ Add text descriptions for images and tables
- ☐ Use filters to ingest only relevant data
- ☐ Implement incremental updates

### Chunking
- ☐ Choose chunk size based on content type and use case
- ☐ Use 300-500 tokens for precise retrieval
- ☐ Use 1000+ tokens for complex narratives

### LLM Configuration
- ☐ Select model based on budget vs. performance needs
- ☐ Ensure context window matches your chunk strategy
- ☐ Configure "Max tokens for Chunks" appropriately
- ☐ Monitor token usage and costs
- ☐ Test configurations to avoid context overflow

---

## Summary

Building an effective Search AI solution requires careful attention to three areas:

1. **Data Ingestion**: Ingest high-quality, well-structured, relevant data
2. **Chunking**: Choose chunk sizes that match your content and use case
3. **LLM Selection**: Balance cost, performance, and context window capacity

By following these best practices, you'll create a Search AI system that delivers accurate, cost-effective results for your users.
