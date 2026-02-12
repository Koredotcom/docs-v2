# Retrieval and Answer Configuration Guide

## Overview

This guide covers the configuration of retrieval strategies, answer generation, and search results in Search AI. These settings determine how content is retrieved from your index and how responses are delivered to users.

**Navigation:** Configuration menu in Search AI



## Retrieval Strategies

Configure the chunk retrieval strategy and corresponding thresholds for finding relevant content.

### Retrieval Methods

| Strategy | Description | Best For |
|----------|-------------|----------|
| Vector Retrieval | Uses cosine similarity between query vector and chunk vectors. Scores range from 0 (no match) to 1 (complete match) | Semantic similarity matching, contextual queries |
| Hybrid Retrieval | Combines keyword-based matching with vector-based scoring, leveraging strengths of both approaches | Balanced precision and recall, improved accuracy |

### Qualification Criteria

| Parameter | Description | Range | Default |
|-----------|-------------|-------|---------|
| Similarity Score Threshold | Minimum similarity score for a chunk to be considered relevant. Higher values require more similarity | 0-100 | 20 |
| Proximity Threshold | How closely retrieved chunks should be to the highest-ranking chunk. Lower values mean closer chunks | 0-50 | 20 |
| Top K Chunks | Maximum number of qualified chunks for answer generation | 1-100 | 20 |
| Token Budget for Chunks | Maximum tokens to send to LLM. Must account for prompt, query, context, and response within LLM's context window | 1-1,000,000 | 20,000 |

**Default Configuration Summary:**
- Retrieval Mechanism: Hybrid Retrieval
- Similarity Score: 20
- Proximity Threshold: 20
- Top K Chunks: 20
- Token budget for chunks: 20,000



## Answer Generation

Configure how responses are composed and delivered to users.

### Answer Components

| Component | Description |
|-----------|-------------|
| Answer Text | The generated response addressing the user's question |
| Snippet Reference | Link to source as citation for further reading |

### Answer Types

| Type | Description | Configuration |
|------|-------------|---------------|
| Extractive | Top chunk retrieved is directly presented as-is without text changes | Configure Response Length (tokens) |
| Generative | Top chunks are sent to configured LLM, which generates a paraphrased answer | Requires LLM integration and enabled Answer Generation in GenAI Tools |

### Generative Answer Configuration

**Chunk Settings:**

| Setting | Description | Default | Max |
|---------|-------------|---------|-----|
| Token Budget for Chunks | Total tokens for chunks sent to LLM | 20,000 | 1,000,000 |
| Enable Document Level Processing | Send full documents instead of just chunks for richer context | Disabled | - |
| Token Budget for Documents | Maximum tokens when sending full documents | 50,000 | 100,000 |

**Chunk Order Options:**

| Order | Description | Use Case |
|-------|-------------|----------|
| Most to Least Relevant | Highest relevance first, then decreasing | Standard prioritization |
| Least to Most Relevant | Lowest relevance first, most relevant at end followed by query | When recency in context matters |

**LLM Configuration:**

| Setting | Description |
|---------|-------------|
| Select Generative Model | Choose from configured LLM models |
| Answer Prompt | Select prompt template for answer generation |
| Temperature | Controls randomness (lower = more deterministic, higher = more creative) |
| Response Length | Expected answer length in tokens |

**Feedback Configuration:**
Enable feedback mechanism to allow users to rate answers. Feedback data appears in Answer Insights analytics.

### Response Streaming

Enable real-time token-by-token response delivery for Web/Mobile SDK channels, reducing perceived latency for longer answers.

**Note:** Streaming is configured via prompt settings and is currently supported only for OpenAI and Azure OpenAI models. Not available for API-based responses.


## Search Results

Search results display a ranked list of documents/chunks by relevance, providing broader information compared to direct answers.

### When to Use Search Results vs Answers

| Use Case | Recommended |
|----------|-------------|
| Direct, specific questions | Answers |
| Broad topic exploration | Search Results |
| Complex queries requiring comparisons | Search Results |
| Debugging/troubleshooting with multiple sources | Search Results |

### Configuration Settings

| Setting | Description | Range | Default |
|---------|-------------|-------|---------|
| Number of Search Results | Maximum chunks displayed | 1-100 | 20 |

**Note:** When both search results and extractive answers are enabled, the top result is omitted from search results (shown as the answer) to avoid redundancy.

### Filters (Facets)

Filters enable users to narrow results based on specific criteria, useful for large result sets.

**Filter Types:**

| Type | Description |
|------|-------------|
| Static | Fixed, predefined filter values |
| Dynamic | Values derived from search results |

**Filter UI Options:**

| UI Type | Availability | Selection |
|---------|--------------|-----------|
| Tabs | Static filters only | Single value, string fields only |
| Single Select | Dynamic filters | One value at a time |
| Multi Select | Dynamic filters | Multiple values concurrently |

### Creating Filters

1. Provide unique **Filter Name**
2. Select **Filter Type** (Static or Dynamic)
3. Choose **Field** for filtering
4. Select **Filter UI** style

**Filter Rules:**
- Only one tab-style filter can be enabled at a time
- Two filters cannot use the same field concurrently
- Filters apply only if search results contain the specified field

### Default Filters

Every application includes default filters that can be updated, deleted, or disabled as needed.

### Search Results Access

Currently available via Search API only.


## Configuration Checklist

| Step | Setting | Location |
|------|---------|----------|
| 1 | Choose retrieval strategy | Configuration > Retrieval Strategies |
| 2 | Set qualification criteria thresholds | Configuration > Retrieval Strategies |
| 3 | Select answer type (Extractive/Generative) | Configuration > Answer Generation |
| 4 | Configure LLM settings (if Generative) | Configuration > Answer Generation |
| 5 | Enable/configure search results | Configuration > Search Results |
| 6 | Set up filters | Configuration > Search Results |


## Quick Reference: Default Values

| Parameter | Default Value |
|-----------|---------------|
| Retrieval Strategy | Hybrid |
| Similarity Score Threshold | 20 |
| Proximity Threshold | 20 |
| Top K Chunks | 20 |
| Token Budget (Chunks) | 20,000 |
| Token Budget (Documents) | 50,000 |
| Search Results Count | 20 |

---
