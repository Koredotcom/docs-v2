# Advance Configuration and Developer Toolkit

## Overview

The Dev Tools section in Search AI provides advanced configuration options and developer utilities to optimize search performance, extend functionality, and integrate custom solutions.

**Navigation:** Dev Tools menu in Search AI


## Advanced Configuration

Advanced Configurations allow you to fine-tune retrieval and answer optimization settings for specific requirements.

### Accessing Advanced Configuration

1. Navigate to **Dev Tools > Advanced Configurations**
2. Search for the configuration you want to modify
3. Select or provide the appropriate values

### Available Configurations

| Configuration | Description | Use Case |
|--------------|-------------|----------|
| Re-Rank Chunks | Select the reranking feature and Re-Ranker model | Improve result relevance by reordering chunks based on semantic similarity |
| Re-Rank Chunk Fields | Select fields used to rerank chunks | Customize which chunk attributes influence reranking |
| Maximum Re-Rank Chunks | Set maximum chunks sent for reranking | Balance performance vs. quality by limiting reranking scope |
| Enable Exact KNN Matching | Enable Exact K-Nearest Neighbors matching | Improve precision for vector similarity searches |
| Single-Use URLs for Uploaded Documents | Enable secure, temporary access to uploaded documents | Enhance security for sensitive document access |

### Configuration Details

**Re-Ranking**

Re-ranking improves search quality by applying a secondary model to reorder initially retrieved chunks based on deeper semantic analysis.

| Setting | Purpose |
|---------|---------|
| Re-Rank Chunks | Enable/disable reranking and select model |
| Re-Rank Chunk Fields | Define which fields (title, content, metadata) to use |
| Maximum Re-Rank Chunks | Limit chunks processed (affects latency vs. quality) |

**KNN Matching**

Exact KNN (K-Nearest Neighbors) matching provides more precise vector similarity searches compared to approximate methods.

| Consideration | Impact |
|--------------|--------|
| Accuracy | Higher precision in finding similar vectors |
| Performance | May increase query latency for large datasets |
| Use Case | Recommended when accuracy is prioritized over speed |

**Document Security**

Single-Use URLs provide temporary, secure access links to uploaded documents, ensuring documents cannot be accessed after the link expires.



## Toolkit - Developer Utilities

The Toolkit provides SDKs and utilities for content processing, data extraction, performance evaluation, and custom connector development.

### Available Tools

#### Evaluation Tools

| Tool | Purpose | Key Features |
|------|---------|--------------|
| **RAG Evaluator** | Evaluate RAG system performance | Measures search quality using RAGAS and CEQA frameworks; API integration; flexible results storage |

[RAG Evaluator on GitHub](https://github.com/Koredotcom/SearchAssist-Toolkit/tree/master/Evaluation/RAG_Evaluator)

#### Integration Tools

| Tool | Purpose | Key Features |
|------|---------|--------------|
| **Custom Connector SDK** | Build custom data source integrations | Standardized data ingestion; metadata integrity; optimized for enterprise RAG applications |

[Custom Connector SDK on GitHub](https://github.com/Koredotcom/SearchAssist-Toolkit/tree/master/Utilities/customSDKConnector)

#### Extraction Utilities

| Tool | Purpose | Key Features |
|------|---------|--------------|
| **HTML to Structured Data Extractor** | Extract content from HTML sources | Identifies tables of contents; preserves heading-content relationships; outputs JSON |
| **Adobe Extraction Utility** | Extract content from PDFs | Preserves original layout and structure; intelligent document parsing |
| **Azure Extraction Utility** | Extract from Azure-hosted documents | Uses Azure AI Document Intelligence; automatic content structuring |
| **Google Document AI** | Batch process documents from cloud storage | Automates extraction from unstructured/semi-structured documents |
| **Salesforce Custom Extraction Utility** | Extract from Salesforce Knowledge Base | Retains hierarchy and relationship structure |

| Utility | GitHub Link |
|---------|-------------|
| HTML to Structured Data | [View Repository](https://github.com/Koredotcom/SearchAssist-Toolkit/tree/master/Extraction/Hierarchical_Extraction_Utility) |
| Adobe Extraction | [View Repository](https://github.com/Koredotcom/SearchAssist-Toolkit/tree/master/Extraction/Adobe) |
| Azure Extraction | [View Repository](https://github.com/Koredotcom/SearchAssist-Toolkit/tree/master/Extraction/Azure) |
| Google Document AI | [View Repository](https://github.com/Koredotcom/SearchAssist-Toolkit/tree/master/Extraction/Google%20DocumentAI) |
| Salesforce Extraction | [View Repository](https://github.com/Koredotcom/SearchAssist-Toolkit/tree/master/Extraction/SalesforceCustomExtractionUtility) |

#### Model Optimization

| Tool | Purpose | Key Features |
|------|---------|--------------|
| **Fine-Tune Embedding Utility** | Fine-tune embedding models | Uses domain-specific documents; compares pre/post fine-tuning performance |

[Fine-Tune Embedding Utility on GitHub](https://github.com/Koredotcom/SearchAssist-Toolkit/tree/master/Utilities/FineTune%20Embeddings)


## Quick Reference

### Advanced Configuration Summary

| Category | Configurations |
|----------|---------------|
| Retrieval Optimization | Re-Rank Chunks, Re-Rank Chunk Fields, Maximum Re-Rank Chunks |
| Vector Search | Enable Exact KNN Matching |
| Security | Single-Use URLs for Uploaded Documents |

### Toolkit Categories

| Category | Tools |
|----------|-------|
| Evaluation | RAG Evaluator |
| Integration | Custom Connector SDK |
| Extraction | HTML, Adobe, Azure, Google Document AI, Salesforce utilities |
| Optimization | Fine-Tune Embedding Utility |

### When to Use Each Tool

| Scenario | Recommended Tool |
|----------|-----------------|
| Measure answer quality | RAG Evaluator |
| Connect custom data source | Custom Connector SDK |
| Ingest HTML documentation | HTML to Structured Data Extractor |
| Process PDF documents | Adobe or Azure Extraction Utility |
| Batch process cloud documents | Google Document AI |
| Extract Salesforce knowledge | Salesforce Custom Extraction Utility |
| Improve domain-specific search | Fine-Tune Embedding Utility |

---
