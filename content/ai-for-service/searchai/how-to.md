# How-To Guide

This guide covers two common customization tasks: how to integrating a custom embedding model and how to customizing responses based on channel type.


## Integrate a Custom Embedding Model

Connect your own embedding model to control how Search AI vectorizes text, enabling domain-specific embeddings or compliance with data privacy requirements.

### Supported Vector Dimensions

Your embedding model must output one of these vector sizes:

| Supported Sizes |
|-----------------|
| 128, 256, 384, 512, 768, 1024, 1028, 1536, 2048, 3072 |

### Integration Steps

#### Step 1: Configure the Model

1. Go to **Generative AI Tools > Model Library**
2. Click **+New Model** and select **Custom Integration**
3. In the **Configurations** tab, provide:

| Field | Description |
|-------|-------------|
| Integration Name | Unique identifier for this integration |
| Model Name | Your model name (e.g., `text-embedding-ada-002`) |
| Endpoint | API endpoint that returns embeddings |
| Auth | Authorization profile (if required) |
| Headers | Any required request headers |

4. Click **Next** and enter your **Request Prompt** (the payload sent to the model):

```json
{
  "input": "The food was delicious and the waiter...",
  "model": "text-embedding-ada-002",
  "encoding_format": "float"
}
```

5. Click **Test** to verify the response, then **Save**

#### Step 2: Create a Custom Prompt

1. Go to **Generative AI Tools > Prompt Library**
2. Click **+New Prompt** and configure:

| Field | Description |
|-------|-------------|
| Name | Unique identifier for this prompt |
| Feature | Select **Vector Generation** |
| Model | Select your custom model from Step 1 |

3. Define the **Request** using the `{{embedding_input}}` variable:

```json
{
  "input": "{{embedding_input}}",
  "model": "text-embedding-ada-002",
  "encoding_format": "float"
}
```

4. Enter sample values and click **Test**
5. In the **Response**, double-click the field containing the embeddings array to set the **Text Response Path**

**Expected Response Structure:**

The selected field must contain an array of numbers:

```json
{
  "data": [
    {
      "embedding": [-0.022822052, 0.01614314, 0.008042404, ...]
    }
  ]
}
```

6. Click **Save**

> **Note:** If the response format doesn't match, use a post-processor script to transform it.

#### Step 3: Enable the Model

1. Go to **GenAI Features**
2. For **Vector Generation**:
   - Select the model from Step 1
   - Select the prompt from Step 2
3. Enable the feature

Search AI now uses your custom embedding model.

### Fine-Tuning Embedding Models

For improved relevance, fine-tune embedding models with your domain-specific data using the [Fine-Tune Embedding Utility]() from the Search AI Toolkit.



## Customize Responses by Channel Type

Search AI can format responses differently for digital channels (chat, messaging) versus voice channels (IVR, phone). Digital responses can include rich formatting, while voice responses should be concise and TTS-compatible.

### How It Works

The `{{answer_mode}}` variable tells the LLM which channel type is being used:

| Value | Channel Types |
|-------|---------------|
| `digital` | Chat, messaging, email, SMS, web widgets, social platforms (WhatsApp, Slack, Teams, etc.) |
| `voice` | IVR, Alexa, Twilio Voice, Voice Gateway, AudioCodes |

### Default Behavior

The **Default-v2** prompt automatically includes `{{answer_mode}}`. No configuration needed if you're using the default prompt.

### Custom Prompt Configuration

When creating a custom prompt for Answer Generation, include `{{answer_mode}}` so the model adapts its response style.

**Example prompt structure:**

```json
{
  "messages": [
    {
      "role": "system",
      "content": "Generate answers based on the provided context. Customize format based on {{answer_mode}}:\n\n**Digital Channel:**\n- Use markdown for formatting\n- Include bullet points, numbered lists, headings\n- Ensure visual hierarchy and readability\n\n**Voice Channel:**\n- Remove markdown syntax for TTS compatibility\n- Keep responses short and concise\n- Use natural language transitions (First, Second, Lastly)"
    },
    {
      "role": "user",
      "content": "Context: {{chunks}}\nQuery: {{query}}\nAnswer Mode: {{answer_mode}}"
    }
  ]
}
```

### Response Formatting Guidelines

| Channel | Formatting |
|---------|------------|
| Digital | Markdown, bullet points, headings, structured layout |
| Voice | Plain text, short sentences, natural transitions, no special characters |

---

## Quick Reference

### Custom Embedding Model Checklist

| Step | Action |
|------|--------|
| 1 | Verify model outputs a supported vector dimension |
| 2 | Configure model in Model Library with endpoint and auth |
| 3 | Create prompt in Prompt Library for Vector Generation |
| 4 | Set the response path to the embeddings array field |
| 5 | Enable model and prompt in GenAI Features |

### Channel Response Customization Checklist

| Step | Action |
|------|--------|
| 1 | For default behavior, use Default-v2 prompt (no changes needed) |
| 2 | For custom prompts, include `{{answer_mode}}` variable |
| 3 | Add formatting instructions for both digital and voice modes |

---
