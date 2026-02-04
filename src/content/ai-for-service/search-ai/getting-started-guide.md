# Getting Started with Search AI

## Overview

Search AI is an advanced RAG-based search solution that enables organizations to search across large datasets conversationally. It combines LLM capabilities with intelligent retrieval to generate accurate, context-aware answers.

**Answers** in Search AI are specific pieces of information extracted or generated in response to user queries. Unlike traditional search results that present ranked lists of documents, answers provide precise, tailored information directly addressing the user's question.

This guide covers key concepts, the answer generation pipeline, and the complete setup workflow for configuring Search AI.



## Key Terminology

### RAG (Retrieval Augmented Generation)

A method that extracts data from fragmented, unstructured content and formulates responses based on retrieved information. RAG retrieves both content and context from a dataset, significantly enhancing the precision and relevance of generated answers.

### Chunking

The process of segmenting large content units into smaller, searchable segments. Search AI offers multiple chunking strategies based on content format.

### Embeddings

Multi-dimensional vector representations of chunks, stored in a vector database. Different embedding models can be used for generating these vectors, enabling semantic similarity comparison.

### Tokens

The smallest unit of data in computing terminology. A token represents a group of characters.

**Token Estimation:** ~1 token ≈ 4 characters in English



## Answer Generation Pipeline

The answer generation process consists of five sequential steps:

| Step | Process | Description |
|------|---------|-------------|
| 1 | Content Ingestion | Importing source documents that will be used to generate answers |
| 2 | Chunking | Breaking down source documents into smaller, meaningful units called chunks |
| 3 | Vector Embedding Generation | Converting chunks into multi-dimensional vectors for storage and comparison |
| 4 | Chunk Retrieval | Selecting the most relevant chunks based on similarity to the user query |
| 5 | Answer Generation | Generating a response to the user query using the retrieved chunks |

**Pipeline Flow:**
```
Content Ingestion → Chunking → Vector Embeddings → Chunk Retrieval → Answer Generation
```



## Setup Workflow

The Search AI setup consists of three main stages:

| Stage | Purpose | Key Activities |
|-------|---------|----------------|
| Ingestion | Build unified knowledge base | Add content sources (websites, documents, connectors) |
| Enhancement | Refine and optimize content | Configure extraction, process via Workbench, set up vector generation |
| Retrieval | Configure answer delivery | Set retrieval strategy, query processing, answer generation |



## Stage 1: Content Ingestion

Integrate and index content from diverse data sources to build a unified knowledge base.

### Content Source Types

| Source Type | Description | Use Case |
|-------------|-------------|----------|
| Web Crawl | Index content from websites | Public websites, knowledge portals |
| Directory | Upload and index documents | PDFs, Word docs, presentations |
| Connectors | Connect third-party applications | SharePoint, Confluence, ServiceNow, Google Drive |

### Supported Connectors

Search AI provides 100+ connectors including: SharePoint, Confluence, ServiceNow, OneDrive, Google Drive, Slack, Teams, Salesforce, Jira, HubSpot, Zendesk, and more.



## Stage 2: Content Enhancement

Refine and enrich ingested content to improve answer quality.

### Chunking Strategies

| Strategy | Method | Best For |
|----------|--------|----------|
| Text-based | Token-based segmentation; fixed number of consecutive tokens per chunk | General text content |
| Rule-based | Header-based segmentation; content between headers treated as chunks | Structured documents with clear headings |

### Workbench Processing

The Workbench tool enables content transformation through various stages:

| Stage Type | Purpose |
|------------|---------|
| Field Mapping | Add, update, or delete fields |
| Custom Script | Apply JavaScript transformations |
| Exclude Documents | Filter content before indexing |
| API Stage | Enrich content via external APIs |
| LLM Stage | Refine content using LLM processing |

### Vector Configuration

Configure vector generation by selecting:

| Configuration | Description |
|---------------|-------------|
| Embedding Model | Choose from supported models for vector generation |
| Fields for Vectorization | Specify which content parts (title, body, metadata) to use for embeddings |



## Stage 3: Retrieval Configuration

Set up retrieval and answer generation strategies for optimal results.

### Retrieval Strategies

| Strategy | Description | Best For |
|----------|-------------|----------|
| Vector Retrieval | Finds vectors most similar to the query vector | Semantic similarity, contextual queries |
| Hybrid Retrieval | Combines keyword-based and vector retrieval techniques | Balanced precision and recall |

### Query Processing (Agentic RAG)

Leverages LLM to enhance retrieval:

| Capability | Description |
|------------|-------------|
| Context Understanding | Interprets user intent from query context |
| Key Term Identification | Extracts important terms within queries |
| Noise Removal | Filters irrelevant content from queries |
| Accuracy Improvement | Enhances overall retrieval precision |

### Answer Generation Types

| Type | Description |
|------|-------------|
| Extractive | Answers directly from content |
| Generative | Summarized and rephrased responses using LLM |



## Integration with Automation AI

Configure Search AI as a response method within AI Agents.

### Answers Configuration

Navigate to: **App Settings > App Profile > Enable Answers Feature**

### Intent Identification Priority Options

| Option | Behavior |
|--------|----------|
| Automation first, Search AI as Fallback | Prioritizes automation framework; uses Search AI if intent identification fails |
| Search AI first, Automation as Fallback | Uses Search AI first; falls back to automation if no satisfactory match found |

### Additional Settings

| Setting | Description |
|---------|-------------|
| Use Search AI for Unrecognized Inputs During Dialogs | Passes unidentified user inputs to Search AI during Dialog Tasks, allowing knowledge base access mid-dialog |



## Setup Checklist

| Step | Action | Location |
|------|--------|----------|
| 1 | Add content sources | Content > Sources |
| 2 | Configure extraction strategy | Index > Extraction |
| 3 | Process content via Workbench | Index > Workbench |
| 4 | Review chunks | Index > Content Browser |
| 5 | Configure vector settings | Index > Vector Configuration |
| 6 | Set retrieval strategy | Configuration > Retrieval Strategies |
| 7 | Configure answer generation | Configuration > Answer Generation |
| 8 | Enable Answers in App Profile | App Settings > App Profile |
| 9 | Test and debug | Configuration > Testing and Debugging |



## Key Capabilities Summary

| Capability | Description |
|------------|-------------|
| Extensive Data Connectivity | 100+ connectors to enterprise content repositories |
| Enterprise Application Integration | Real-time access to business data from Salesforce, ServiceNow, Jira, etc. |
| Advanced Hybrid Search | Text and multi-vector weighted search with customizable pipelines |
| Enterprise Security Compliance | Integration with existing access control mechanisms |
| Contextual Intelligence | Dynamic enterprise and user context for personalized responses |

---
