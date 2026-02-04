# Search AI Frequently Asked Questions

## Overview

This document addresses common questions about application training, multilingual support, and user feedback handling in Search AI.


## Application Training

Training prepares ingested content for search by applying configurations, extracting chunks, and generating embeddings. Training is required whenever content or configuration changes.

### Training Types

| Type | Description | Scope |
|------|-------------|-------|
| Full Training | Complete training of the application | All content, regardless of changes |
| Incremental Training | Training only for changed content | Additions, deletions, or modifications |

### Automatic Training

The application automatically trains when new content is ingested through file uploads, web crawls, or connectors.

| Scenario | Behavior |
|----------|----------|
| Initial Ingestion | Full training of all ingested content |
| Incremental Updates | Training only for content changes (recrawling, connector resync) |

When auto-training initiates, a banner appears at the top of the application interface.

### Manual Training

Use the **Train** button on the **Extract** or **Vector Configuration** page to force retraining.

**When Manual Training is Required:**

| Scenario | Examples |
|----------|----------|
| Config Updates | Changes to extraction strategies, vector configuration |
| Content Deletion | Removing files or content sources |

**Training Scope Based on Change Type:**

| Change Location | Reprocessing Scope |
|-----------------|-------------------|
| Before extraction stage | Reprocesses from extraction and chunking onward (e.g., connector config, schema, extraction strategy) |
| After extraction stage | Skips re-chunking, updates enrichment and vector generation only (e.g., embedding model, embedding fields) |

### Training Logs

View detailed training logs with document-level visibility:

1. Navigate to the **Extract** page
2. Click the dropdown with the **Train** option
3. Select **View Training Logs**

**Log Information:**

| Field | Description |
|-------|-------------|
| Training Type | Full or Incremental |
| Trigger Time | When training was initiated |
| Successful Docs | Number of documents processed successfully |
| Failed Docs | Number of documents with errors |
| Overall Status | Training marked as failed if any doc fails |

Click individual records to view details grouped by extraction strategy.

### Important Notes

- Manual chunk edits are overwritten during retraining for affected content only
- Manually resynchronizing a connector may require manual training trigger (known issue)



## Multilingual Support

Search AI supports multilingual capabilities, enabling users to interact in their preferred language.

### Core Capabilities

| Feature | Description |
|---------|-------------|
| Content Management | Add and manage content in multiple languages |
| Query Processing | Submit queries in supported languages |
| Response Generation | Receive answers in the same language as the query |

### Language Support Requirements

Multilingual support works with any language supported by your configured LLM and vector generation model when using:
- Text Extraction strategy
- Vector Retrieval method

No additional configuration is required for basic multilingual support.

### Widely Supported Languages

Search AI supports languages commonly handled by advanced LLMs and embedding models like BGE-M3. Refer to your LLM or vector generation model's official documentation for a comprehensive list.

### Language-Sensitive Components

Certain modules require specific strategies or models depending on the language:

**Content Extraction:**

| Language | Supported Strategies |
|----------|---------------------|
| English | All extraction methods |
| Other languages | Varies by method - consult documentation |

**Vector Generation Models:**

| Model | Language Support |
|-------|-----------------|
| BGE-M3 | Wide range of languages; performance may be lower for underrepresented languages |
| Other models | Varies - check model documentation |

**Re-Ranker Models:**

| Model | Best For |
|-------|----------|
| Cross Encoder (ms-marco-MiniLM) | English - lightweight and fast |
| BGE Re-Ranker (bge-reranker-v2-m3) | Multilingual - lightweight with broad language support |
| MixedBread Re-Ranker | Highest accuracy - resource intensive |

### Best Practices

1. **Verify model compatibility** - Ensure your LLM and embedding model support target languages
2. **Test across languages** - Validate answer quality in each supported language
3. **Consider re-ranker selection** - Choose based on primary language requirements
4. **Monitor performance** - Low-resource languages may have reduced accuracy



## User Feedback Handling

The feedback mechanism allows end users to rate response quality, helping evaluate and improve answer delivery.

### How Feedback Works

Users express satisfaction through thumbs up/down actions captured via:
- Web SDK
- Public API

### Enabling Feedback

1. Navigate to **Configuration > Answer Generation**
2. Enable **Feedback Configuration**

### Capturing Feedback

**Via Web SDK:**

When enabled, thumbs up/down icons appear with each answer in the SDK interface.

**Via API:**

Use the [Feedback API](https://docs.kore.ai/xo/apis/searchai/feedback/) to capture feedback programmatically.

### Viewing Feedback Data

Feedback appears in **Analytics > Search AI > Answer Insights**.

**Feedback Display:**

| Scenario | Display |
|----------|---------|
| Majority positive | Green indicator with positive count |
| Majority negative | Red indicator with negative count |
| Mixed feedback | Highlights majority sentiment |

**Example:** 20 feedback entries with 16 positive and 4 negative displays as green with count of 16.

### Detailed Feedback Analysis

1. Click a query in Answer Insights to view the Answer Summary page
2. See all answers users received for that query with associated feedback
3. Click **View Details** for any answer to see user comments

### Implementation Notes

**When using SearchAINode:**

- Ensure `searchRequestId` is included in the channel response
- Automatic when SearchAINode response is presented directly
- Must be explicitly included if response is saved to context and rendered with a custom template

### Feedback vs. Feedback Surveys

| Feature | Purpose |
|---------|---------|
| Search AI Feedback | Captures answer relevance and accuracy ratings |
| Platform Feedback Surveys | General survey capabilities in AI for Service platform |

These are separate mechanisms - the Search AI feedback mechanism is specifically designed for answer quality evaluation.


## Quick Reference

### Training Summary

| Question | Answer |
|----------|--------|
| When does auto-training occur? | On content ingestion (uploads, crawls, connector syncs) |
| When is manual training needed? | Config changes, content deletion |
| Where to trigger manual training? | Extract or Vector Configuration page |
| Where to view training logs? | Extract page > Train dropdown > View Training Logs |

### Multilingual Summary

| Question | Answer |
|----------|--------|
| What languages are supported? | Any language supported by configured LLM and embedding model |
| Is configuration required? | No additional setup for basic support |
| Which re-ranker for multilingual? | BGE Re-Ranker (bge-reranker-v2-m3) |
| Which re-ranker for English only? | Cross Encoder (ms-marco-MiniLM) |

### Feedback Summary

| Question | Answer |
|----------|--------|
| How to enable feedback? | Configuration > Answer Generation > Enable Feedback Configuration |
| Where to view feedback? | Analytics > Search AI > Answer Insights |
| How to capture via API? | Use the Feedback API |
| What does feedback show? | Thumbs up/down counts with majority sentiment highlighted |

---
