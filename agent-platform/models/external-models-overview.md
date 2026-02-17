# External Models

Connect commercial and custom models to Agent Platform.

---

## Overview

External models are AI models hosted outside the platform, including commercial providers (OpenAI, Anthropic, Google, Cohere, Amazon Bedrock) and custom models via API endpoints. Once connected, these models can be used across Agent Platform in Agentic Apps, Prompt Studio, Tools, and Evaluation Studio.

### Integration Methods

| Method | Use Case | Setup |
|--------|----------|-------|
| **Easy Integration** | Commercial providers with API keys | Select provider → Enter API key → Choose model |
| **API Integration** | Custom endpoints or self-hosted models | Configure endpoint → Set auth → Map request/response |

---

## Supported Providers (Easy Integration)

| Provider | Authentication | Tool Calling |
|----------|---------------|--------------|
| OpenAI | API Key | ✓ |
| Anthropic | API Key | ✓ |
| Google | API Key | ✓ |
| Cohere | API Key | ✓ |
| Azure OpenAI | API Key + Endpoint | ✓ |
| Amazon Bedrock | IAM Role ARN | ✓ |

For the complete list of supported models, see [Supported Models](../supported-models/).

---

## View Connected Models

Go to **Models** → **External Models** to see all connected models.

| Column | Description |
|--------|-------------|
| Model Name | Name assigned during integration |
| Type | Easy Integration or API Integration |
| Source | Provider or origin (OpenAI, Anthropic, Custom, etc.) |
| Added On | Date last added or updated |

Click a model to view or manage its connections.

---

## Manage Connections

Each model can have multiple connections with different credentials. This enables separate usage tracking and billing per API key.

### Connection Settings

| Setting | Description |
|---------|-------------|
| Connection Name | Unique identifier (not editable after saving) |
| Inference Toggle | Enable/disable model for use across platform |
| Edit | Update API key or credentials |
| Delete | Remove the connection |

### Multiple Connections

You can add multiple API keys for the same model. Each connection:
- Must have a unique name
- Must have a unique API key
- Appears as a separate option when selecting models
- Can be assigned at the Agent or Supervisor level in Agentic Apps

---

## Add a Model

### Quick Start: Easy Integration

For commercial providers with API keys:

1. Go to **Models** → **External Models** → **Add a model**
2. Select **Easy Integration**
3. Choose your provider (OpenAI, Anthropic, Google, Cohere, or AWS Bedrock)
4. Select the model and enter your API key
5. Click **Confirm**

[Detailed Easy Integration Guide →](./add-an-external-model-using-easy-integration/)

### Custom Models: API Integration

For custom endpoints or self-hosted models:

1. Go to **Models** → **External Models** → **Add a model**
2. Select **Custom Integration**
3. Configure endpoint URL, authentication, and request/response mapping
4. Test and confirm

[Detailed API Integration Guide →](./add-an-external-model-using-api-integration/)

---

## Using External Models

Once added, external models appear in model selection dropdowns across:

- **Agentic Apps** — Agent and Supervisor configuration
- **Prompt Studio** — Testing and iterating prompts
- **Tools** — AI nodes in workflow tools
- **Evaluation Studio** — Model evaluation projects

> **Note**: To use a model with Agentic Apps, it must support tool calling. Custom models integrated via API must follow OpenAI or Anthropic request/response structures.

---

## Related

- [Supported Models](../supported-models/) — Complete list of supported models
- [Add via Easy Integration](./add-an-external-model-using-easy-integration/) — Connect commercial providers
- [Add via API Integration](./add-an-external-model-using-api-integration/) — Connect custom models
- [Configuring Amazon Bedrock](./configuring-aws/) — IAM role setup for AWS
