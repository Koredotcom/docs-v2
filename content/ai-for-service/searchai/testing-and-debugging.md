# Testing and Debugging Guide

## Overview

This guide covers validating your Search AI configuration through testing and debugging tools to ensure optimal answer quality before deployment.

**Navigation:** Configuration > Testing and Debugging


## Testing Answers

### Access Testing

1. Navigate to **Configuration > Answer Generation** or **Configuration > Testing and Debugging**
2. Click **Test Answers**
3. Enter a query
4. Review the generated answer
5. Use debug option to analyze behavior

### Testing Workflow

| Step | Action | Purpose |
|------|--------|---------|
| 1 | Enter test query | Simulate user input |
| 2 | Review answer | Verify response quality and accuracy |
| 3 | Open debug view | Understand how answer was generated |
| 4 | Analyze chunks | Check which content was used |
| 5 | Refine configuration | Adjust settings based on findings |


## Debug Information

The debug view provides comprehensive insights into answer generation.

### Debug Components

| Component | Description |
|-----------|-------------|
| Qualified Chunks | Chunks selected and used to generate the answer |
| Retrieval Details | How chunks were identified and ranked |
| LLM Request/Response | Full prompt sent and response received (for generative answers) |
| Processing Time | Time taken by each component |

### Agentic RAG Debugging

When Agentic RAG is enabled, an additional **Retrieval** tab appears showing:

| Information | Description |
|-------------|-------------|
| Agent Sequence | Order in which agents were invoked |
| Agent Input | Data sent to LLM by each agent |
| Agent Output | Results returned from each agent |
| LLM Timing | Time taken per LLM call |


## Answer Insights

The Answer Insights feature provides analytics for query-response interactions.

### Available Data

| Feature | Description |
|---------|-------------|
| Query Grouping | View all answers for grouped queries |
| Search Logs | Filter logs by answer and channel |
| Detailed View | Query overview, debug info, LLM details |
| Performance Tracking | Monitor answer quality over time |

### Accessing Answer Insights

Navigate to **Analytics > Search AI > Answer Insights**


## Debugging Checklist

### Common Issues and Solutions

| Issue | Possible Cause | Solution |
|-------|----------------|----------|
| No results returned | Content not indexed | Verify content sources and extraction settings |
| Poor relevance | Threshold too high/low | Adjust similarity score threshold |
| Missing information | Chunks too small | Increase chunk size or token budgets |
| Incomplete answers | Insufficient context | Increase Top K chunks or token budget |
| Business rules not applying | Condition mismatch | Test with debug to verify rule triggers |
| Slow responses | Too many LLM calls | Review Agentic RAG agent usage |

### Configuration Verification

| Check | Location | What to Verify |
|-------|----------|----------------|
| Retrieval Strategy | Configuration > Retrieval | Vector vs. Hybrid selection |
| Thresholds | Configuration > Retrieval | Similarity, proximity, Top K values |
| Answer Type | Configuration > Answer Generation | Extractive vs. Generative |
| LLM Settings | Configuration > Answer Generation | Model, prompt, temperature |
| Business Rules | Configuration > Business Rules | Active rules and conditions |


## Best Practices

### Testing Strategy

1. **Test incrementally** - Validate each configuration change before moving to the next
2. **Use varied queries** - Test different query types, lengths, and phrasings
3. **Include edge cases** - Test ambiguous queries and boundary conditions
4. **Compare results** - Document before/after when making changes

### Debug Analysis

1. **Review qualified chunks** - Ensure relevant content is being selected
2. **Check chunk rankings** - Verify highest-ranked chunks are most relevant
3. **Analyze LLM prompts** - Confirm context is properly structured
4. **Monitor timing** - Identify performance bottlenecks

### Ongoing Monitoring

1. **Track Answer Insights** - Review analytics regularly
2. **Monitor feedback** - Enable user feedback and review ratings
3. **Iterate configuration** - Continuously refine based on data
4. **Document changes** - Keep records of configuration modifications


## Testing Scenarios

### Scenario 1: Basic Answer Validation

```
1. Enter simple factual query
2. Verify answer accuracy
3. Check source citation
4. Confirm response time acceptable
```

### Scenario 2: Retrieval Quality Check

```
1. Enter query matching specific content
2. Open debug view
3. Verify expected chunks are qualified
4. Check similarity scores
```

### Scenario 3: Business Rule Verification

```
1. Configure test rule with known conditions
2. Enter query that should trigger rule
3. Open debug view
4. Confirm rule was applied correctly
```

### Scenario 4: Agentic RAG Testing

```
1. Enable Agentic RAG
2. Enter complex query
3. Review Retrieval tab in debug
4. Verify agent sequence and outputs
```


## Quick Reference

### Debug Tab Contents

| Tab | Shows |
|-----|-------|
| Qualified Chunks | Selected content for answer |
| Retrieval | Agent processing (Agentic RAG only) |
| LLM Details | Prompt and response data |

### Key Metrics to Monitor

| Metric | Healthy Range |
|--------|---------------|
| Response Time | < 3 seconds (varies by LLM) |
| Chunk Relevance | Top chunks match query intent |
| Answer Accuracy | Matches source content |
| User Feedback | Positive ratings trending up |

---