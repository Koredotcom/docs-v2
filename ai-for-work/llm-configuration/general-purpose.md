
# General Purpose

Configure Large Language Models (LLMs) for your deployment.

AI for Work provides secure and seamless integration with leading large language models (LLMs), enabling you to leverage powerful AI capabilities for your virtual assistants and workflows. Choose from pre-configured models from industry-leading providers or integrate your own custom models to suit your specific business needs.

## What is LLM Configuration

LLM Configuration allows you to connect and manage various language models for use across all features. This includes both pre-built integrations with commercial providers and the flexibility to bring your own models.

**Key Capabilities:**

* **Pre-Built Integrations**: Access leading AI services from OpenAI, Azure OpenAI, and Google Gemini with minimal configuration.
* **Embedding Models**: Configure specialized models to generate embeddings that power semantic search and other AI features.
* **Flexible Authorization**: Support for API keys, custom headers, and various authentication methods.
* **Enterprise-Grade Security**: Maintain control over your data with policy guidelines and secure credential management.

## Supported LLM Providers and Models

Platform supports a range of models from leading providers, each offering different capabilities and pricing tiers. Choose the right model based on your use case requirements, performance needs, and budget considerations.

### Pre-Built LLM Providers

<table>
  <tr>
   <td><strong>Provider</strong>
   </td>
   <td><strong>Available Models</strong>
   </td>
   <td><strong>Access Method</strong>
   </td>
   <td><strong>Recommended For</strong>
   </td>
  </tr>
  <tr>
   <td><strong>OpenAI</strong>
   </td>
   <td>GPT-5-mini, GPT-5-nano, GPT-5, GPT-4.1, GPT-4.1- mini, GPT-4o, GPT-3.5-turbo, o3, o3-mini, o4-mini
   </td>
   <td>Direct API integration through OpenAI API key
   </td>
   <td>General-purpose tasks, conversational AI, complex reasoning, and content generation
   </td>
  </tr>
  <tr>
   <td><strong>Azure OpenAI</strong>
   </td>
   <td>GPT-5-mini, GPT-5-nano, GPT-5, GPT-4.1, GPT-4.1- mini, GPT-4o, GPT-3.5-turbo, o3, o3-mini, o4-mini
   </td>
   <td>Azure Portal integration through Azure OpenAI Service
   </td>
   <td>Enterprise deployments requiring Azure infrastructure, enhanced security, and compliance
   </td>
  </tr>
  <tr>
   <td><strong>Google Gemini</strong>
   </td>
   <td>Gemini 2.5 Pro (Recommended), Gemini 2.5 Flash (Recommended), 
<p>
Gemini 2.5 Flash Lite, Gemini 2.0 Flash, Gemini 2.0 Flash Lite
   </td>
   <td>Google Vertex AI integration, Gemini Studio
   </td>
   <td>Multi-modal tasks, fast response times, and Google Cloud-based deployments
   </td>
  </tr>
</table>

### Model Tier Recommendations

Understanding model tiers helps you select the right balance between capability and cost:

* **Basic Tier Models**: Ideal for high-volume, straightforward tasks such as classification, simple Q&A, and routine customer inquiries. These models offer faster response times and lower costs.
    * Examples: GPT-4o-mini, Gemini 2.5 Flash, Gemini 2.0 Flash.
* **Standard Tier Models**: Best for complex reasoning, multi-step workflows, and tasks requiring deeper contextual understanding. These models are recommended as the default for all system prompts and orchestrator.
    * Examples: GPT-4.1, GPT-4o, Gemini 2.5 Pro.
* **Premium Tier Models**: Reserved for advanced reasoning tasks, complex problem-solving, and scenarios requiring the highest level of AI capability.
    * Examples: o3, o3-mini, o4-mini.

## Configuration Methods

Platform provides two primary methods for configuring LLMs, each designed to meet different organizational needs and deployment scenarios.

### Pre-Built LLM Configuration

Pre-built integrations offer the fastest path to leveraging leading AI models with minimal technical setup. These integrations are optimized for ease of use while maintaining enterprise-grade security and compliance standards.

**Configuration Steps:**

1. Navigate to **Admin Console > Assist Configuration > General Purpose**.
   <img src="../images/general-purpose-llm.png" alt="general-purpose-llm" title="general-purpose-llm" style="border: 1px solid gray; zoom:80%;"/>
2. Click **New** and select your desired LLM provider from the dropdown menu:
    * OpenAI
    * Azure OpenAI
    * Google Gemini
    <img src="../images/general-purpose-llm-new.png" alt="general-purpose-llm" title="general-purpose-llm" style="border: 1px solid gray; zoom:80%;"/>
3. Enter the required authorization details:
    * **Integration Name**: A unique identifier for this configuration (e.g., "OpenAI-Production").
    * **API Key**: Your provider-specific API key obtained from their portal.
    * **Model Name**: Select the specific model from the dropdown menu.
4. Review the **Policy Guidelines** carefully:
    * Understand data usage and retention policies.
    * Ensure compliance with your organization's governance requirements.
    * Acknowledge the terms by selecting the checkbox.
    <img src="../images/open-ai.png" alt="open-ai" title="open-ai" style="border: 1px solid gray; zoom:80%;"/>
5. Click **Save** to activate the configuration.
6. Verify the integration appears in the **General LLM Integrations** list with an active status.
<img src="../images/configured-model.png" alt="configured-model" title="configured-model" style="border: 1px solid gray; zoom:80%;"/>

**Provider-Specific Configuration Notes**:

**OpenAI**:

* Obtain your API key from the OpenAI Platform dashboard ([OpenAI](https://platform.openai.com)).
* API keys should be stored securely and rotated regularly according to your security policies.
* Monitor usage through the OpenAI dashboard to track costs and ensure rate limits are appropriate.

**Azure OpenAI**:

* Access your Azure Portal and navigate to Azure OpenAI Service.
* Locate **Keys and Endpoints** in the resource settings.
* Copy the endpoint URL and one of the available API keys.
* Ensure your Azure subscription has the necessary quotas and permissions.
* Configure network security rules if your deployment requires VNet integration.

**Google Gemini**:

* Access Google Cloud Console and enable Vertex AI API, or use Gemini Studio.
* Create a service account with appropriate permissions.
* Generate and download the API credentials.
* Ensure selected models are enabled in Google Model Garden.
* Configure project-level access and billing settings.

### Custom LLM Configuration

Custom LLM configuration provides maximum flexibility for organizations with unique requirements, specialized models, or specific hosting preferences. This approach supports virtually any LLM that exposes an API endpoint.

**Configuration Steps:**

1. Navigate to **Admin Console > Assist Configuration > General Purpose**.
2. Click **New** and select **Custom LLM** from the dropdown.
3. Enter the integration details: **Basic Configuration:**
    * **Integration Name**: A descriptive name for this custom integration.
    * **Model Name**: The specific model identifier.
    * **Endpoint URL**: The full API endpoint URL where your model is hosted.
    <img src="../images/custom-llm.png" alt="custom-llm" title="custom-llm" style="border: 1px solid gray; zoom:80%;"/>
4. **API Configuration**:
    * **Method**: Select the HTTP method (typically POST or GET) from the dropdown.
    * **Max Request Tokens**: Set the maximum number of tokens for each request to control costs and response size.
5. **Authentication**:
    * **Auth Type**: Choose your authentication method (API Key, Bearer Token, Custom Header).
    * Configure authentication credentials based on your model's requirements.
6. Configure custom headers:
    * Click **+ Add a Header** to add additional HTTP headers.
    * Enter key-value pairs for each required header (e.g., "Content-Type: application/json").
    * Add multiple headers as needed for your integration.
    <img src="../images/add-header.png" alt="add-header.png" title="add-header" style="border: 1px solid gray; zoom:80%;"/>
7. Test the connection:
    * Enter a sample test payload in the provided field.
    * Click **Test** to verify connectivity and model response.
    * Review the response to ensure proper configuration:
        * **Success**: Connection is validated, and you can proceed to save.
        * **Error**: Review error messages to troubleshoot connection issues, authentication problems, or endpoint configuration.
    <img src="../images/success-message.png" alt="success-message" title="success-message" style="border: 1px solid gray; zoom:80%;"/>
8. Review and accept:
    * Read the **Policy Guidelines**.
    * Select the checkbox to acknowledge compliance.
    * Click **Save** to finalize the configuration.
9. Confirm the integration appears in the **General LLM Integrations** list with an active status.

## Embedding Models Configuration

Embedding models generate vector representations of text, enabling semantic search, similarity matching, and other advanced AI features. Platform supports both pre-built and custom embedding models to power these capabilities.

**What are Embeddings?**

Embeddings are numerical representations of text that capture semantic meaning. Unlike traditional keyword matching, embeddings allow AI systems to understand context, intent, and relationships between concepts. This enables more intelligent search results, better content recommendations, and improved natural language understanding.

!!!note
     Embedding models are required for the attachments functionality, where end users can attach files and ask questions about them.

## Managing LLM Integrations

Once configured, your LLM integrations require ongoing management to ensure optimal performance, security, and cost efficiency.

### Viewing Active Integrations

All configured models appear in the **General LLM Integrations** list, which provides:

* **Integration Name**: Quick identification of each configured model.
* **Provider**: The LLM provider (OpenAI, Azure OpenAI, Gemini, Custom).
* **Model Name**: The specific model version in use.
* **Status**: Active, inactive, or error states.
* **Last Updated**: Timestamp of the most recent configuration change.

### Modifying Existing Integrations

To update an existing LLM configuration:

1. Locate the integration in the **General LLM Integrations** list.
2. Click the **edit** icon or select the integration name.
3. Modify the necessary fields (API key, model version, headers, etc.).
4. Test the connection after making changes.
5. Save the updated configuration.

### Removing Integrations

To deactivate or remove an LLM integration:

1. Locate the integration in the **General LLM Integrations** list.
2. Click the delete or deactivate option.
3. Confirm the action when prompted.
4. Verify that dependent features are configured to use alternative models.