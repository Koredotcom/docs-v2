# External Models

Connect commercial and custom models to Agent Platform.

---

## Overview

External models are AI models hosted outside the platform. Once connected, they can be used across Agent Platform in Agentic Apps, Prompt Studio, Tools, and Evaluation Studio.

**Supported Providers (Easy Integration)**:

| Provider | Authentication | Tool Calling |
|----------|---------------|--------------|
| OpenAI | API Key | ✓ |
| Anthropic | API Key | ✓ |
| Google | API Key | ✓ |
| Cohere | API Key | ✓ |
| Azure OpenAI | API Key + Endpoint | ✓ |
| Amazon Bedrock | IAM Role ARN | ✓ |

**Custom Models (API Integration)**: Connect any model via REST API endpoint.

For the complete list of supported models, see [Supported Models](../supported-models/).

---

## Manage Connected Models

### View Models

* Go to **Models** → **External Models** to see all connected models.


### Manage Connections

Each model can have multiple connections with different API keys, enabling separate usage tracking and billing.

| Action | Description |
|--------|-------------|
| Inference Toggle | Enable/disable model availability across platform |
| Edit | Update API key or credentials |
| Delete | Remove the connection |

When adding multiple API keys for the same model, each connection must have a unique name and API key. In Agentic Apps, you can assign specific connections at the Agent or Supervisor level.

---

## Add a Model via Easy Integration

Use Easy Integration for commercial providers with API keys or IAM roles.

### Standard Providers (OpenAI, Anthropic, Google, Cohere)

1. Go to **Models** → **External Models** → **Add a model**
2. Select **Easy Integration** → click **Next**
3. Choose your provider → click **Next**
4. Select a model from the supported list
5. Enter a **Connection name** and your **API key**
6. Click **Confirm**

The model is now available across Agent Platform.

### Amazon Bedrock

Bedrock uses IAM role-based authentication instead of API keys.

**Prerequisites**: Create an IAM role in AWS with Bedrock permissions and a trust policy allowing Agent Platform to assume the role. See [Configuring Amazon Bedrock](./configuring-aws/) for IAM setup.

**Steps**:

1. Go to **Models** → **External Models** → **Add a model**
2. Select **Easy Integration** → **AWS Bedrock** → **Next**
3. Configure credentials and model details:

| Field | Description |
|-------|-------------|
| IAM Role ARN | Your IAM role with Bedrock permissions |
| Trusted Principal ARN | Platform's AWS principal (pre-populated) |
| Model Name | Internal identifier |
| Model ID | Bedrock Model ID or Endpoint ID |
| Region | AWS region of the model |
| Headers | Optional custom headers |

4. Configure model settings using [Default](#default-mode) or [Existing Provider Structures](#existing-provider-structures-mode)
5. Click **Confirm**

---

## Add a Model via API Integration

Use API Integration for custom endpoints or self-hosted models.

> **Note**: For Agentic Apps compatibility, custom models must support tool calling and follow OpenAI or Anthropic request/response structures.

### Steps

1. Go to **Models** → **External Models** → **Add a model**
2. Select **Custom Integration** → click **Next**
3. Enter basic configuration:

| Field | Description |
|-------|-------------|
| Connection Name | Unique identifier |
| Model Endpoint URL | Full API endpoint URL |
| Authorization Profile | Select configured auth profile or *None* |
| Headers | Optional key-value pairs for requests |

4. Configure model settings using [Default](#default-mode) or [Existing Provider Structures](#existing-provider-structures-mode)
5. Click **Confirm**

---

## Model Configuration Modes

When using API Integration or advanced Bedrock setup, choose one of these configuration modes:

### Default Mode

Manually configure request/response handling for complete control.

**1. Define Variables**

| Variable Type | Description |
|---------------|-------------|
| Prompt | Primary input text (required) |
| System Prompt | System instructions (optional) |
| Examples | Few-shot examples (optional) |
| Custom Variables | Additional dynamic inputs with name, display name, and data type |

**2. Configure Request Body**

Create JSON payload using `{{variable}}` placeholders:

```json
{
  "model": "your-model-name",
  "messages": [
    {"role": "system", "content": "{{system.prompt}}"},
    {"role": "user", "content": "{{prompt}}"}
  ],
  "max_tokens": 1000,
  "temperature": 0.7
}
```

**3. Map Response JSON Paths**

Click **Test** to send a sample request, then configure extraction paths:

| Field | Description | Example |
|-------|-------------|---------|
| Output Path | Location of generated text | `choices[0].message.content` |
| Input Tokens | Input token count | `usage.prompt_tokens` |
| Output Tokens | Output token count | `usage.completion_tokens` |

### Existing Provider Structures Mode

Automatically apply pre-defined schemas from known providers. Recommended when your model follows a standard API format.

**1. Select Provider Template**

| Template | Use When |
|----------|----------|
| OpenAI (Chat Completions) | Model follows OpenAI chat API format |
| Anthropic (Messages) | Model follows Anthropic messages API format |
| Google (Gemini) | Model follows Gemini API format |

**2. Enter Model Name**

Specify the model identifier for request bodies.

**3. Enable Model Features**

Enable only features your model supports:

| Feature | Description |
|---------|-------------|
| Structured Response | JSON-formatted outputs for Prompts and Tools |
| Tool Calling | Function calling for Agentic Apps and AI nodes |
| Parallel Tool Calling | Multiple tool calls per request |
| Streaming | Real-time token generation for Agentic Apps |
| Data Generation | Synthetic data generation in Prompt Studio |
| Modalities | Text-to-Text, Text-to-Image, Image-to-Text, Audio-to-Text |

> **Warning**: Enabling unsupported features may cause unexpected behavior.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Test fails | Verify endpoint URL and authentication |
| Empty response | Check JSON path mapping matches response structure |
| Model not in dropdowns | Ensure Inference toggle is ON |
| Tool calling not working | Verify model supports it and feature is enabled |
| Bedrock connection fails | Check IAM role ARN and trust policy configuration |

---

## Related

- [Supported Models](../supported-models/) — Complete list of supported models
- [Configuring Amazon Bedrock](./configuring-aws/) — IAM role setup for AWS
- [Authorization Profiles](../../settings/security-and-control/authorization-profile/) — Configure authentication
