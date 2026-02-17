# Agentic RAG and Business Rules Guide

## Overview

This guide covers intelligent query processing with Agentic RAG and customizing responses through Business Rules in Search AI.

**Navigation:** Configuration menu in Search AI


## Agentic RAG

Agentic RAG enhances retrieval accuracy through LLM-powered agents that process queries intelligently before retrieval.

### What is Agentic RAG?

Agentic RAG extends traditional RAG by adding an intelligent, agent-driven control layer that can reason about tasks, determine required information, and actively shape the context used during generation. Instead of a static pipeline, Agentic RAG operates as a coordinated reasoning system that can plan, adapt, validate, and refine steps in real time.

### RAG Agents

| Agent | Purpose | Example |
|-------|---------|---------|
| Query Type Detection | Determines if user seeks a specific answer or search results list | Classifies query intent with confidence level |
| Query Transformation | Identifies key terms, removes noise, prioritizes relevant documents | Query: "What is the work-from-home policy for Kore.ai?" → Extracts: "work-from-home", "policy", "Kore.ai" |
| Metadata Extractor | Extracts sources and fields from query, maps to structured data, applies filters | Query: "Find Jira tickets assigned to John with status 'In Progress'" → Applies: assignee=John, status=In Progress |

### Supported Models

Currently, only **OpenAI** and **Azure OpenAI 4.0** models are supported for Agentic RAG.

### Enabling Agentic RAG

1. Navigate to **Configuration > Agentic RAG**
2. Enable Agentic RAG (enables all agents by default)
3. All agents use the configured model

### Customizing Agents

To change model/prompt settings or enable/disable specific agents:
1. Go to **Generative AI Tools > GenAI Features**
2. Configure individual agent settings

### Considerations

| Factor | Impact |
|--------|--------|
| Response Time | Multiple LLM calls may increase overall response time |
| API Usage | Enable agents only when utilizing search results via API |
| Accuracy | Improves retrieval precision for complex queries |


## Business Rules

Business Rules customize and personalize answers based on organizational requirements and policies.

### Purpose

Business rules define how results are promoted, positioned, or filtered. Use cases include:
- Personalized recommendations
- Promotional offers
- Content filtering
- Access control
- Language-based prioritization

### How Business Rules Work

1. User query received
2. Relevant chunks retrieved from Answer Index
3. Business rules evaluate conditions
4. Chunks filtered/modified based on rule outcomes
5. Filtered chunks used for answer generation

### Rule Types

**Contextual Rules** - Use context information (user profile, geography, search history) to specify conditions and actions.

### Defining Business Rules

Each rule consists of:

| Component | Description |
|-----------|-------------|
| Name | Unique identifier for the rule |
| Conditions | Criteria that trigger the rule (based on context variables) |
| Outcomes | Actions performed when conditions are met |

### Condition Configuration

**Select Context** - Specify the context variable for the condition. Dynamic suggestions show available variables.

**Custom Data** - Use `customData` field from Search APIs for business rules. Example: `customData.userContext.location`

### Outcome Actions

| Action | Description | Factor Range |
|--------|-------------|--------------|
| Boost | Prioritize chunks by boost factor | 1-5 (5 = maximum boost) |
| Lower | De-prioritize results by lower factor | 1-5 |
| Hide | Remove from search results | - |
| Filter | Filter results as per response criteria | - |

### Response Configuration

Define which chunks the action applies to using chunk fields and values.

**Example:** To target chunks where title contains 'Confidential':
- Field: `chunkTitle`
- Operator: `contains`
- Value: `Confidential`

Available chunk fields can be viewed in the Content Browser.

### Example Business Rule

**Scenario:** Restrict confidential information to managers in a specific department.

| Component | Configuration |
|-----------|---------------|
| Condition | `userContext.dept` does not equal `[target_dept]` |
| Action | Hide |
| Response | Chunks where `chunkTitle` contains `Confidential` |

### Important Notes

- Multiple conditions use logical **AND** (all must be satisfied)
- Multiple outcomes use logical **AND** (all are applied)
- Values are **case-sensitive** and use **entire word matching**
- Example: "Confidential" ≠ "confidential" ≠ "confidentially"

### Managing Business Rules

| Action | Steps |
|--------|-------|
| Add Rule | Click **+Contextual Rule** button |
| Activate/Deactivate | Use slider button in rules list |
| Edit Rule | Select rule from list, make changes, click **Save** |
| Delete Rule | Open rule details, click **Delete** button |


## Quick Reference

### Agentic RAG Agents

| Agent | Function |
|-------|----------|
| Query Type Detection | Answer vs. Search Results classification |
| Query Transformation | Key term extraction, noise removal |
| Metadata Extractor | Filter and boost application |

### Business Rule Actions

| Action | Effect |
|--------|--------|
| Boost (1-5) | Increase chunk priority |
| Lower (1-5) | Decrease chunk priority |
| Hide | Remove from results |
| Filter | Apply field-based filtering |

---
