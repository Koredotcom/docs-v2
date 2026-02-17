# Models

Configure and manage AI models for your agents, tools, and workflows.

## Overview

Agent Platform is model-agnostic, supporting a wide range of AI models from commercial providers, open-source repositories, and custom fine-tuned deployments. Access Model Hub from the top navigation to manage all your models in one place.

Model Hub provides three ways to work with models:

| Model Type | Description | Best For |
|------------|-------------|----------|
| **External Models** | Commercial models from OpenAI, Anthropic, Google, Azure, Cohere, and Amazon Bedrock | Production workloads requiring proven reliability |
| **Open-Source Models** | 30+ curated models plus any Hugging Face text generation model | Cost control, customization, data privacy |
| **Fine-Tuned Models** | Custom models trained on your enterprise data | Domain-specific tasks, consistent outputs |



## Tool Calling Support

Not all models support tool calling, which is required for Agentic Apps. Use models with tool calling support for agent orchestration.

**Supported for Tool Calling:**
- OpenAI: GPT-4o, GPT-4 Turbo, GPT-3.5 Turbo
- Anthropic: Claude 3.5 Sonnet, Claude 3 series
- Google: Gemini 1.5 Pro, Gemini 1.5 Flash
- Azure OpenAI: GPT-4o, GPT-4, GPT-3.5 Turbo
- Amazon Bedrock: Models via supported providers

**Not Supported:**
- Kore-hosted open-source models
- Most Hugging Face imports
- Models without function calling capabilities


## Model Selection Guide

Choose the right model based on your use case:

| Use Case | Recommended Models | Why |
|----------|-------------------|-----|
| Complex reasoning | GPT-4o, Claude 3 Opus | Highest accuracy |
| Fast responses | GPT-3.5, Claude 3 Haiku, Gemini Flash | Low latency |
| Code generation | GPT-4o, Claude 3.5 Sonnet | Best code quality |
| Cost-sensitive | GPT-3.5, Claude 3 Haiku | Lower token cost |
| Long context | Claude 3, Gemini 1.5 | 100K+ token windows |
| Data privacy | Open-source (Kore-hosted) | No external API calls |
| Real-time voice | GPT-4o Realtime Preview | Native voice support |

---

## Structured Output

Enable consistent, parseable responses using JSON schemas.

**Supported:**
- External models (OpenAI, Anthropic, Google)
- Kore-hosted open-source models with vLLM or no optimization

**Not Supported:**
- CT2-optimized models
- Fine-tuned models
- Hugging Face imports
- Locally imported models



## Model Endpoint & API Keys

After deployment, each model provides:

- **API Endpoint**: Use models externally via REST API
- **API Keys**: Secure access tokens for endpoint authentication
- **Deployment History**: Track version changes

Access these from the model's three-dot menu → **API Endpoint**.



## Monitoring

Track model performance across Agent Platform:

- **Model Analytics Dashboard**: Token usage, latency, error rates
- **Model Traces**: Detailed request/response logs
- **Usage Summary**: Cost tracking by model

Access via **Settings** → **Monitoring** → **Analytics**.



## Related

- [Supported Models](./supported-models/) — Complete list of all supported models
- [Prompt Studio](../prompts/overview/) — Create and test prompts with different models
- [AI Nodes](../ai-agents/tools/tool-flows/types-of-nodes/ai-node/) — Use models in workflow tools
- [Model Analytics](../settings/monitoring/analytics/model-analytics-dashboard/) — Monitor model performance
