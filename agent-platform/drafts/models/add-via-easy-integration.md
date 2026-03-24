# Add a Model via Easy Integration

Connect models from OpenAI, Anthropic, Google, Cohere, or Amazon Bedrock using guided setup.

---

## Before You Begin

- Obtain an API key from your provider
- For Amazon Bedrock: Set up IAM role with appropriate permissions ([see Configuring Amazon Bedrock](./configuring-aws/))

---

## Add a Model (Standard Providers)

Use this method for OpenAI, Anthropic, Google, or Cohere.

1. Go to **Models** → **External Models** → **Add a model**
2. Select **Easy Integration** and click **Next**
3. Choose your provider and click **Next**
4. Select a model from the supported list
5. Enter a **Connection name** and your **API key**
6. Click **Confirm**

The model appears in the External Models list and is ready to use.

### After Integration

- **Enable/Disable**: Use the Inference toggle to control model availability
- **Edit**: Click the three-dot menu to update credentials
- **Delete**: Remove the model via the three-dot menu

---

## Add Amazon Bedrock Models

Amazon Bedrock requires IAM role-based authentication instead of API keys.

### Prerequisites

Create an IAM role in your AWS account that:
- Grants permission to invoke Amazon Bedrock models
- Includes a trust policy allowing Agent Platform to assume the role

For detailed IAM setup, see [Configuring Amazon Bedrock](./configuring-aws/).

### Steps

1. Go to **Models** → **External Models** → **Add a model**
2. Select **Easy Integration** → **AWS Bedrock** → **Next**

3. **Configure Credentials**:
   | Field | Description |
   |-------|-------------|
   | IAM Role ARN | Full ARN of your IAM role with Bedrock permissions |
   | Trusted Principal ARN | Pre-populated; Platform's AWS principal (read-only) |

4. **Configure Model Details**:
   | Field | Description |
   |-------|-------------|
   | Model Name | Internal name for identification |
   | Model ID | Bedrock Model ID or Endpoint ID |
   | Region | AWS region where the model is deployed |
   | Headers | Optional custom headers for requests |

5. **Configure Model Settings** — Choose one option:

   **Option A: Default** (Manual Configuration)
   - Define prompt variables and custom variables
   - Configure request body with variable placeholders (`{{prompt}}`)
   - Test the response and map JSON paths for output extraction

   **Option B: Existing Provider Structures** (Recommended)
   - Select a provider template (OpenAI Chat Completions or Anthropic Messages)
   - Enable supported features (Tool calling, Streaming, Structured response, etc.)

6. Click **Confirm** to save, or **Save as draft** to configure later

---

## Model Configuration Options

When adding Bedrock models or using advanced configuration, you can choose between two setup modes:

### Default Mode

Manually configure all API components:

| Setting | Description |
|---------|-------------|
| Variables | Define prompt variables and custom variables for dynamic binding |
| Request Body | JSON payload with `{{variable}}` placeholders |
| JSON Path Mapping | Extract output, input tokens, and output tokens from response |

**Example Request Body**:
```json
{
  "prompt": "{{prompt}}",
  "max_tokens": 200,
  "temperature": 0.7
}
```

**JSON Path Mapping**:
- Output path: `choices[0].message.content`
- Input tokens: `usage.prompt_tokens`
- Output tokens: `usage.completion_tokens`

### Existing Provider Structures Mode

Automatically apply pre-defined schemas from known providers:

| Provider Template | API Reference |
|-------------------|---------------|
| OpenAI (Chat Completions) | Standard OpenAI chat format |
| Anthropic (Messages) | Standard Anthropic messages format |
| Google (Gemini) | Standard Gemini format |

**Available Features** (enable as supported by your model):
- Structured response
- Tool calling
- Parallel tool calling
- Streaming
- Data generation
- Modalities (Text-to-Text, Text-to-Image, Image-to-Text, Audio-to-Text)

---

## Related

- [External Models Overview](./managing-external-models/)
- [Add via API Integration](./add-an-external-model-using-api-integration/)
- [Configuring Amazon Bedrock](./configuring-aws/)
- [Supported Models](../supported-models/)
