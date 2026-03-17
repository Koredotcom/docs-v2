# Add an External Model using Easy Integration

Easily integrate models from popular providers like OpenAI, Anthropic, Google, Cohere, and Amazon Bedrock using the Easy Integration option in the Platform.

## Integrate a Model from Anthropic 

Steps to add the Anthropic Claude-V1 model using easy integration:

1. Click **Models** on the top navigation bar of the application. The **Models** page is displayed.
2. Click the **External models** tab on the **Models** page.

    <img src="../images/navigating-to-external-models.png" alt="Navigating to External Models" title="Navigating to External Models" style="border: 1px solid gray; zoom:80%;">

3. Click **Add a model** under the **External models** tab. The **Add an external model** dialog is displayed.

    <img src="../images/add-external-model-easy-integration.png" alt="Add External Model Easy Integration" title="Add External Model Easy Integration" style="border: 1px solid gray; zoom:40%;">

4. Select the **Easy integration** option to integrate models from Open AI, Anthropic, Google, or Cohere and click **Next**.
5. Select a provider to integrate with and click **Next**.

    <img src="../images/easy-integration.png" alt="Easy Integration" title="Easy Integration" style="border: 1px solid gray; zoom:65%;">

    A pop-up with the list of all the Anthropic models that are supported in the Platform is displayed.
    
    For more information on the list of external models supported, see [Supported models](../supported-models.md).

    <img src="../images/select-model.png" alt="Select Model" title="Select Model" style="border: 1px solid gray; zoom:50%;">

6. Select the required **Model** and enter a **Connection name**.

7. Enter the respective API key you have received from the provider in the **API key** field and click **Confirm** to start the integration.

      <img src="../images/api-key-for-model.png" alt="API Key for Model" title="API Key for Model" style="border: 1px solid gray; zoom:50%;"></ol>

The model is integrated and is listed in the External models list.

!!! note

    * You can click the 3 dots icon corresponding to the Model name in the list of external models and edit or delete the model.
    * You can set the Inference option using the toggle button corresponding to the Model name. If the Inferencing toggle is ON, you can use this model across the Platform. If the toggle button is OFF, it means you cannot infer it anywhere in the Platform. For example, if you turn OFF the toggle button, then in the playground, an error message is displayed that the model is not active even though you have added it in the external models tab.


## Integrate a Model from Amazon Bedrock

You can easily connect Amazon Bedrock models to the Platform using a guided setup flow. This process enables secure role-based access using your own AWS credentials.

!!! important

    Customers must create an IAM role within their AWS account with the necessary permissions in their AWS account (e.g., access to AWS Bedrock APIs). This role must include a trust policy that allows the Platform’s AWS principal (or a designated IAM role in an AWS account) to assume it. For more information, see [Configuring Amazon Bedrock models](./configuring-aws.md){:target="_blank"}.


Steps to add Amazon Bedrock models using easy integration:

<font size="4">**1. Start the Integration**</font> 

1. Click **Models** in the top navigation bar of the application.
2. Go to the **External Models** tab and click **Add a model**.
3. Select **Easy integration** > **AWS Bedrock** and click **Next**.

    <img src="../images/aws_dialog.png" alt="Select AWS Bedrock" title="Select AWS Bedrock" style="border: 1px solid gray; zoom:50%;">


<font size="4">**2. Configure the Integration**</font> 

In the AWS Bedrock dialog, configure the following:

**Credentials**:

  * **Identity Access Management (IAM) Role ARN**: Enter the full ARN of your IAM role that has permission to invoke Amazon Bedrock models. This role allows secure cross-account access following least-privilege principles. For more information, see [Setting Up Credentials and Trust Policy (IAM Role & STS)](../external-models/configuring-aws.md#step-1-setting-up-credentials-and-trust-policy-iam-role-and-sts).
  * **Trusted Principal ARN**: The ARN of the AWS IAM principal (from the Platform) used to assume your IAM role. It’s pre-populated, read-only, and fetched securely — manual input is not required.

**Model Details**:

   * **Model name:** Enter a custom name to identify this model internally within your workflows.
   * **Model ID**: Enter the Model ID or Endpoint ID of the Amazon Bedrock model you want to use. For more information, see [Finding the Right Model ID and Region](./configuring-aws.md#step-2-finding-the-right-model-id-and-region).
   * **Region**: Specify the AWS region where the Bedrock model is deployed.

**Headers** (Optional): Provide any additional information to include with the HTTP request. Use this if your model requires custom headers for configuration or authentication.  
For example: "Content-Type": "application/json"

<img src="../images/aws_bedrock.png" alt="AWS Bedrock integration" title="AWS Bedrock" style="border: 1px solid gray; zoom:50%;">

<font size="4">**3. Configure Model Settings**</font>

In the **Model configurations** section, select one of the following options to define your model’s API behavior:

**Option A: Default**

Use this option to manually configure all API components and control how requests and responses are structured

* **Variables** – Define Prompt variables (mandatory) and add Custom variables as needed. These input variables are used within your request payload to bind dynamic input values to your payload structure.  
For example: {{prompt}}, {{system.prompt}}
* **Request Body** – Provide a sample JSON request body for invoking the model. Use the defined variable placeholders {{variableName}} (such as {{prompt}}) to bind input fields dynamically.
For example:

      ```
      {
         "prompt": "{{prompt}}",
         "max_tokens": 200,
         "temperature": 0.7
      }
      ```

    **Note**: Ensure the structure of the request body follows the model-specific API schema. Use only supported parameters for the selected Amazon Bedrock model.

* **Test Response** – Provide sample values for your variables and click Test to invoke the model and preview the response.
* **JSON Path Mapping** – Specify JSON keys to extract relevant output fields from the model response:
    * **Output path** – e.g., `choices[0].message.content`
    * **Input tokens** – e.g., `usage.prompt_tokens`
    * **Output tokens** – e.g., `usage.completion_tokens`

**Option B: Existing Provider Structures**

Use this option to automatically map known API formats for supported providers. This mode simplifies setup by applying pre-defined request/response mappings and enables advanced LLM features without manual configuration.

* **Provider Templates** – Choose a schema such as OpenAI (Chat Completions) or Anthropic (Messages).
* **Model Features** – Enable capabilities like Structured response, Tool calling, Data generation, Streaming, and Modalities support (Text-to-Text, Text-to-Image, etc.).

Each option determines how your model communicates with the platform and how responses are parsed. For more details, see [**Default**](../external-models/add-an-external-model-using-api-integration.md#option-a-default) and [**Existing Provider Structures**](../external-models/add-an-external-model-using-api-integration.md#option-b-existing-model-provider-structures).

<img src="../images/existing-provider-structures.png" alt="Existing Provider Structures" title="Existing Provider Structures" style="border: 1px solid gray; zoom:50%;">

<font size="4">**4. Finalize the Configuration**</font> 

* Click **Save as draft** to store the configuration without activating it.
* Or, click **Confirm** to finalize and add the model connection.

Once completed, your model appears in the **External Models** tab. You can now reference this model in your **Prompts** and **Tools** across the platform.

## Integrate a Model from Vertex AI

You can easily connect Google Vertex AI models to the Platform using a guided setup flow. This process enables secure access to Gemini models (2.5 and 3.0 families) using your own Google Cloud credentials.

!!! important

    Customers must create an API key within their Google Cloud account with the necessary permissions to access Vertex AI APIs. For Vertex AI endpoint configuration, you'll need to provide the Project ID and Region where your models are deployed.

**How to get your Google Cloud API Key**

Before you can integrate Vertex AI models, you need to obtain an API key from your Google Cloud account.

**For new users or express mode users**

1. Navigate to the [express mode setup page](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/overview){:target="_blank"}.
2. Follow the guided setup to automatically generate an API key.
3. View and manage your API keys at **APIs & Services > Credentials** in the Google Cloud Console.

**For existing Google Cloud users**

Prerequisites

* A Google Cloud project with billing enabled.
* Vertex AI API is enabled for your project.
* Organization Policy Administrator role (for policy configuration).

Steps to create an API key

1. Enable Service Account API Key Creation: Navigate to **IAM & Admin** > **Organization policies**, edit `iam.managed.disableServiceAccountApiKeyCreation`, override the parent’s policy, set enforcement to Off, and save.

2. Create a service account: Open **IAM & Admin > Service Accounts**, create a service account named `vertex-ai-runner` with ID `vertexairunner`, assign the **Vertex AI Platform Express User** role, then click continue and done.

3. Create the API key: In **APIs & Services** > **Credentials**, create an API key named `vertexaiapikey`, enable authentication through a service account, link it to `vertex-ai-runner`, click create, and securely store the key.

Steps to add Google Vertex AI models using easy integration:

1. **Start the Integration**:
    1. Click **Models** in the top navigation bar of the app.
    2. Go to the **External Models** tab and click **Add a model**.
    3. Select **Easy integration** > **Vertex AI** and click **Next**.
    
    <img src="../images/vertex-ai.png" alt="Existing Provider Structures" title="Existing Provider Structures" style="border: 0px solid gray; zoom:50%;">

2. **Configure the Integration**

In the Add connection dialog, you can choose between two configuration methods:

**Option A: Manual Setup**<br>
In the **Manual Setup** tab, configure the following:

**Connection Details**:

* **Model**: Select the desired Gemini model from the dropdown. For more information on the list of external models supported, see [Supported AI Models](../supported-models.md){:target="_blank"}.
* **Connection name**: Enter a custom name to identify this model connection within your workspace.

**Authentication**:

* **API key**: Enter your API key from your Google Vertex AI Console.

**Note**: API keys are validated during entry. If OAuth 2.0 access tokens or unsupported authentication credentials are detected, an error message displays. For more information, see [ Authentication methods at Google.](https://cloud.google.com/docs/authentication){:target="_blank"}

**Advanced Settings** (Optional): Configure additional endpoint settings:

* **Project ID**: Enter your Google Cloud project identifier.
* **Region**: The Google Cloud region where your models are deployed.

Click **Confirm** to save the configuration.

<img src="../images/manual-setup.png" alt="Manual Setup" title="Manual Setup" style="border: 0px solid gray; zoom:50%;">

**Option B: Import from cURL**

In the **Import from cURL** tab:

1. **Connection name**: Enter a name to identify this model connection within your workspace.
2. Paste a cURL command in the provided text area.
3. Click **Fetch** to extract the configuration, and then click **Confirm** to start the integration.

    <img src="../images/import-from-curl.png" alt="Import from cURL" title="Import from cURL" style="border: 0px solid gray; zoom:50%;">

The model is integrated and is listed in the External models list.

## Integrate a Model from Microsoft Foundry

You can easily connect Microsoft Foundry models to the Platform using a guided setup flow. Two authentication methods are supported: entering credentials manually or authenticating via an Azure Active Directory Service Principal.

**1. Start the Integration**

Go to **Models** > **External Models** > **Add a model** > **Easy integration** > **Microsoft Foundry** and click **Next**.

**2. Configure the Integration**

Select one of the following authentication methods:

**Option A: Enter Manually**

Directly provide credentials from your model's Details page in Microsoft Foundry.

- **Connection name:** A unique name to identify this model connection in the Platform.
- **Target URI:** The endpoint URI from your model's Details page in Microsoft Foundry.
- **Key:** The API key from your model's Details page in Microsoft Foundry.
- **Deployment name:** The deployment name as defined in Microsoft Foundry.

**Option B: Use Service Principal**

Authenticate through an Azure Active Directory Service Principal. A pre-configured Microsoft Foundry connection is required.

- **Connection name:** A unique name to identify this model connection in the Platform.

**Note:** If no Microsoft Foundry connection is configured, click **Configure Service Principal** and complete the steps below before proceeding.

**Create a Service Principal in Azure**

1. Open the Azure Portal: [https://portal.azure.com](https://portal.azure.com).
2. Go to **App registrations** and click **+ New registration**. Enter a name, select the account type, leave Redirect URI empty, and click **Register**.
3. Copy the **Application (Client) ID** and **Directory (Tenant) ID** from the app's Overview page.
4. Go to **Certificates & secrets** > **+ New client secret**. Add a description, set an expiry, and copy the **Value** immediately.
5. Navigate to the resource group that contains your Foundry project. Go to **Access control (IAM)** > **Add role assignment**. Assign a role (e.g., **Contributor**) and select your registered app as the assignee.

**Register the Connection in the Platform**

1. Click **Configure Service Principal**. The **Microsoft Foundry** connection panel opens.
2. Enter a **Connection name**.
3. Under **Authorization Details**, enter: Tenant (Directory) ID, Application (Client) ID, Client Secret, and Subscription ID.
4. Click **Test** to verify, then click **Save**.

**Note:** After saving, the connection becomes available in the **Use Service Principal** option on the model configuration page.

**3. Configure Model Settings**

In **Model configurations**, define the model settings and enable or disable the following capabilities under **Model features**:

- **Structured response:** Returns outputs in predefined JSON formats for machine-readable, downstream-ready integration.
- **Data generation:** Enables synthetic data generation for text-based tasks. Also enables data in the prompt playground.
- **Streaming:** Enables real-time, token-by-token generation for faster, interactive responses.
- **Tool calling:** Indicates whether the model supports tool calling.
- **Support tools:** Specifies if the model supports simple tool calling. Enables the LLM to dynamically invoke functions or APIs to perform actions or retrieve real-time data during generation.
- **Parallel tool calling:** Specifies if the model handles parallel tool calls emanating from a single user request.

**Note:** This feature must be enabled for the model to be used in Agentic Apps. If tool calling is not enabled, the model cannot be used within Agentic Apps or for executing tool calls in the AI Text-to-Text node in workflow tools.

- **Modalities supported:** Specifies the modalities the model supports. Enabling this allows the model to run Text-to-Text, Text-to-Image, Image-to-Text, and Audio-to-Text tasks for seamless downstream integration within the Tools Flow.
  - **Text to text:** Enables natural language understanding and generation by transforming input text into coherent, contextually relevant output.
  - **Text to image:** Supports generating high-quality images from natural language prompts using LLMs.
  - **Image to text:** Supports image-to-text generation by interpreting visual inputs and producing descriptive or structured text outputs.
  - **Audio to text:** Supports audio-to-text transcription using integrated speech recognition within the LLM pipeline.

**Body:** Specify the model name to be included in the request body and select a provider to set the API reference. The platform uses this mapping to resolve the model's request-response structure.

- **Anthropic (Messages):** The selected model follows the request-response structure similar to [Anthropic's Messages API](https://platform.claude.com/docs/en/api/messages).
- **OpenAI (Chat Completions):** The selected model follows the request-response structure similar to [OpenAI's Chat Completions API](https://developers.openai.com/api/reference/resources/chat).

**4. Save or Confirm**

- Click **Save as draft** to store the configuration without activating the model.
- Click **Confirm** to finalize and add the model.

The model is integrated and listed in the **External Models** tab. You can now reference it in **Prompts**, **Tools**, and **Agentic Apps** across the Platform.
