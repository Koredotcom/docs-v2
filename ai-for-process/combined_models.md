# Add an External Model using API Integration

You can connect an external model to AI for Process using API integration. This feature extends AI for Process's functionality by allowing you to bring in models from external sources.

## Add an External Model

The steps to add an external model using API integration are given below:

1. Click **Models** on the top navigation bar. The **Models** page is displayed.

2. Click the **External models** tab.  
<img src="../images/navigating-to-external-models1.png" alt="Navigating to External Models" title="Navigating to External Models"/>

3. Click **Add a model**. The **Add an external model** dialog is displayed.  
<img src="../images/add-external-model-api-integration1.png" alt="Add External Model API Integration" title="Add External Model API Integration"/>

4. Select the **Custom integration** option to connect models via API integration, and click **Next**. The **Custom API integration** dialog is displayed.

5. Enter a **Model name** and **Model endpoint URL** in the respective fields.  
<img src="../images/custom-api-integration-general-details.png" alt="Custom API Integration General Details" title="Custom API Integration General Details"/>

6. Select the **Authorization profile** you want to use with the request payload from the configured options on the **Settings** console. [Learn more](../../settings/security-and-control/authorization-profile.md) about Auth Profiles. To proceed without authentication, choose ***None*** which is the default selection.
<img src="../images/set-auth-profile-parameter.png" alt="set auth profile" title="set auth profile"/>

7. In the **Headers** section, specify the headers such as **Key** and **Value** that need to be sent along with the request payload. 
<img src="../images/custom-api-integration-headers.png" alt="Custom API Integration Headers" title="Custom API Integration Headers"/>

8. In the **Model configurations** section, select one of the following options to define the model’s API settings:

    **Option A: Default**
      
      By selecting this option, you can define the variables, request body code, and a test response from the model. 
      
      <img src="../images/select-default.png" alt="select default" title="select default"/>

      <ul><li><b>Variables</b>: Provide the variables that you want to use in the request payload, including:</li>
    <ul><li><b>Prompt variables</b>: The Prompt variable is set to mandatory by default. You can Turn ON the toggle for the System prompt and examples if required.       
    <img src="../images/prompt-variables-add.png" alt="prompt variables" title="prompt variables"/></li>
    <li><b>Custom variables</b>: (Optional) To add, follow the steps below:</li>
      <ul><li>Click the <b>Custom variables</b> tab under the <b>Variables</b> section and click the <b>+Custom variables</b>.</li> 
      <img src="../images/custom-variables-add.png" alt="add custom variables" title="add custom variables"/></ul>
       <ul><li>The <b>Add Custom Variable</b> dialog is displayed. Enter the <b>Variable name</b> and <b>Display name</b>, and select the <b>Data type</b>.</li>
       <img src="../images/add-custom-variable.png" alt="custom variable form" title="custom variable form"/></li></ul></ul>         
     <li><b>Body</b>: The request body must include the model’s relevant parameters, which you must define manually. For dynamic variable mapping, use <code>{{variable}}</code>. Ensure the body is in the correct format, as shown in the screenshot below; otherwise, the API testing won't work.</li>
       <img src="../images/body-parameters.png" alt="request body" title="request body"/></ul>
     <ul><li><b>Test Response</b>: The response created for the configured LLM service appears here. To provide a test response from the model, follow the steps below:</li>
      <ul><li> Click <b>Test</b>.
      <img src="../images/click-test-request.png" alt="test request" title="test request"/></li>
       <li>In the <b>Sample Input</b> dialog, enter the <b>Prompt</b>, <b>System prompt</b>, and <b>Examples</b> in the respective fields, and click <b>Confirm</b>.</li>
       <img src="../images/sample-input-dialog.png" alt="sample input" title="sample input"/></ul></ul> 

These inputs are used to test the connection and receive a response from the model. Once the response is generated, you must configure the **JSON path** to capture the Output path, Input tokens, and Output tokens, as follows:

   * **Output Path**: When you interact with the model, you send a request in a specific format and receive a response in a corresponding format, often as a large JSON object. As a user, you are mainly interested in extracting the model’s answer from this response. The *output path* refers to the location or key within the JSON where the model’s main output is stored. Knowing this path is essential, especially in the prompt playground, as it tells you exactly which key to map to populate the response in the playground box. For example, in the sample response below, the output path is `choices[0].message.content.` 
   <img src="../images/output-path-entry.png" alt="output path" title="output path"/>

   * **Tokens**: Tokens are the units of text data provided to or generated by an LLM. Depending on the tokenization method, a token may be as short as a single character or as long as a word. Across the product—in the playground, agents, and other areas—token usage is displayed for every model. For commercial models, this information is supplied by the provider. For open-source and fine-tuned models, ML calculates and displays them in the UI. For custom API integration models, where token calculation is'nt known, users can define which key in the response JSON corresponds to this information.
     * **Input Tokens**: Input tokens are fed into the LLM for processing. For example, `usage.prompt_tokens` indicates the input tokens in the sample response below. 

          <img src="../images/input-tokens-entry.png" alt="input tokens" title="input tokens"/>

     * **Output Tokens**: Output tokens represent the text generated by the LLM after processing a prompt. Like input tokens, they can range from a single character to an entire word, depending on the tokenization method. For example, `usage.completion_tokens` indicates the output tokens in the sample response below. 

          <img src="../images/output-tokens-entry.png" alt="output tokens entry" title="output tokens entry"/>

   **Option B: Existing Model Provider Structures**

   Currently, external models added through custom API integration are limited to basic text generation because only minimal request/response structures are supported. 

   This prevents customers from utilizing these models for advanced scenarios, such as structured outputs, and multimodal use cases. Without a comprehensive way to define request/response mappings, these models can't be fully integrated across the platform.

   This feature removes that limitation by:

  * Allowing users to provide complete request/response definitions through the UI or OpenAPI specifications. 

  * Supporting commonly known request/response schemas (for example, OpenAI Completions, Anthropic Messages).

   With the **Default** option, you must manually define the request payload variables, including the model’s static and dynamic body parameters, and generate the response for the configured LLM. In this section, however, you can enable the required features and choose an LLM provider to automatically map the request and response schemas to their standard API format.

* **Model Features**: Easily enable or disable one or more of the following features to make the relevant model available within the modules that use the feature(s).

     <div class="admonition note"> 
     <p class="admonition-title">Important</p>
     <p><ul><li>This configuration requires at least one feature to be enabled.</li>
     <li>Users can enable any feature, but the model must support it. Otherwise, you may see unexpected behavior.</li></ul></p></div>

    * **Structured response**: Specifies that the model supports the generation of a structured response. Enabling this flag allows the model to be used for generating a structured output within [Prompts](../../prompts/using-prompt-studio.md#add-prompts) and [Workflows](../../workflows/workflow-builder/flows-overview.md).
    * **Data generation**: Specifies that the model can be used for synthetic data generation for text-based tasks. Turning this flag on allows the model to be used for prompt generation in [Prompts Studio](../../prompts/using-prompt-studio.md#add-prompts).
    * **Streaming**: Specifies that the model supports real-time, token-by-token generation for faster AI responses. Turning this flag on allows the model to be used for generating streaming responses within Agentic Apps. (coming soon) 
    * **Modalities Support**: Specifies the modalities supported by the model. Enabling this flag allows the model to run Text-to-Text, Text-to-Image, Image-to-Text, and Audio-to-Text tasks for seamless downstream integration within the [Workflows](../../workflows/workflow-builder/flows-overview.md).
     <img src="../images/model-features-list.png" alt="model features" title="model features"/>
 
 * **Body**: In this section, choose a provider to set the API reference. The platform uses this mapping to resolve your model’s request-response structure. The available options include:

     * **Anthropic (Messages)**:  Specifies that the selected model follows the request-response structure similar to [Anthropic’s Messages API](https://docs.anthropic.com/en/api/messages).
     * **OpenAI (Chat Completions)**: Specifies that the selected model follows the request-response structure similar to [OpenAI’s Chat Completions API](https://platform.openai.com/docs/api-reference/chat).
   <img src="../images/api-reference-model.png" alt="api reference" title="api reference"/>

     <div class="admonition note">
     <p class="admonition-title">Note</p>
     <p>Click <b>Save as Draft</b> to save the model. The status will be updated to *Draft*.</p></div></ol>

<ol start="9"><li>Click <b>Confirm</b> to save the details and add the external model to the list.</li></ol>

## Manage Custom API Integrations

Once the integration is successful and the inference toggle is ON, you can use the model across AI for Process. You can also turn inferencing OFF if needed.

To manage an integration, click the three-dot icon corresponding to its name and choose from the following options:  

 * **View**: View the integration details.
 * **Copy**: Make an editable copy of the integration details.
 * **Delete**: Remove the integration.

<img src="../images/three-dots-icon-options.png" alt="Three Dots Icon Options" title="Three Dots Icon Options"/>

# Add an External Model using Easy Integration

Easily integrate models from popular providers like OpenAI, Anthropic, Google, Cohere, and Amazon Bedrock using the Easy Integration option in AI for Process.

## Integrate a Model from Anthropic 

Steps to add the Anthropic Claude-V1 model using easy integration:

1. Click **Models** on the top navigation bar of the application. The **Models** page is displayed.
2. Click the **External models** tab on the **Models** page.

    <img src="../images/navigating-to-external-models.png" alt="Navigating to External Models" title="Navigating to External Models"/>

3. Click **Add a model** under the **External models** tab. The **Add an external model** dialog is displayed.

    <img src="../images/add-external-model-easy-integration.png" alt="Add External Model Easy Integration" title="Add External Model Easy Integration"/>

4. Select the **Easy integration** option to integrate models from Open AI, Anthropic, Google, or Cohere and click **Next**.
5. Select a provider to integrate with and click **Next**.

    <img src="../images/easy-integration.png" alt="Easy Integration" title="Easy Integration"/>

    A pop-up with the list of all the Anthropic models that are supported in AI for Process is displayed.
    
    For more information on the list of external models supported, see [Supported models](../supported-models.md).

    <img src="../images/select-model.png" alt="Select Model" title="Select Model"/>

6. Select the required **Model** from the options listed and click **Next**.

7. Enter the respective API key you have received from the provider in the **API key** field and click **Confirm** to start the integration.

      <img src="../images/api-key-for-model.png" alt="API Key for Model" title="API Key for Model"/></ol>

The model is integrated and is listed in the External models list.

!!! note

    * You can click the 3 dots icon corresponding to the Model name in the list of external models and edit or delete the model.
    * You can set the Inference option using the toggle button corresponding to the Model name. If the Inferencing toggle is ON, you can use this model across AI for Process. If the toggle button is OFF, it means you cannot infer it anywhere in AI for Process. For example, if you turn OFF the toggle button, then in the playground, an error message is displayed that the model is not active even though you have added it in the external models tab.


## Integrate a Model from Amazon Bedrock

You can easily connect Amazon Bedrock models to the AI for Process using a guided setup flow. This process enables secure role-based access using your own AWS credentials.

!!! important

    Customers must create an IAM role within their AWS account with the necessary permissions in their AWS account (e.g., access to AWS Bedrock APIs). This role must include a trust policy that allows the AI for Process’s AWS principal (or a designated IAM role in an AWS account) to assume it. For more information, see [Configuring Amazon Bedrock models](./configuring-aws.md).


Steps to add Amazon Bedrock models using easy integration:

**1. Start the Integration**

1. Click **Models** in the top navigation bar of the application.
2. Go to the **External Models** tab and click **Add a model**.
3. Select **Easy integration** > **AWS Bedrock** and click **Next**.

      <img src="../images/aws_dialog.png" alt="Select AWS Bedrock" title="Select AWS Bedrock"/>


**2. Configure the Integration**

In the AWS Bedrock dialog, configure the following:

   <img src="../images/aws_bedrock_config.png" alt="AWS Bedrock" title="AWS Bedrock"/>

* **Credentials**: 
    * **Identity Access Management (IAM) Role ARN**: Enter the full ARN of your IAM role that has permission to invoke Amazon Bedrock models. This role allows secure cross-account access following least-privilege principles.  
    For more information, see [Setting Up Credentials and Trust Policy (IAM Role & STS)](../external-models/configuring-aws.md#step-1-setting-up-credentials-and-trust-policy-iam-role-and-sts).
    * **Trusted Principal ARN**: The ARN of the AWS IAM principal (from the AI for Process) used to assume your IAM role. It’s pre-populated, read-only, and fetched securely — manual input is not required.

* **Model Details**: 
    * **Model name:** Enter a custom name to identify this model internally within your workflows.
    * **Model ID**: Enter the Model ID or Endpoint ID of the Amazon Bedrock model you want to use. For more information, see [Finding the Right Model ID and Region](./configuring-aws.md#step-2-finding-the-right-model-id-and-region).
    * **Region**: Specify the AWS region where the Bedrock model is deployed.

* **Headers (Optional)**: Provide any additional information to include with the HTTP request. Use this if your model requires custom headers for configuration or authentication.  
For example: "Content-Type": "application/json"

* **Variables:** In the Prompt Variables section, define any input variables that will be used within your request payload. These are used to bind dynamic input values to your payload structure.  
For example: `{{prompt}}`, `{{system.prompt}}`

* **Body**: Provide a sample JSON request body for invoking the model. Use the defined variable placeholders `{{variableName}}` (such as `{{prompt}}`)  to bind input fields dynamically.
For example:

      ```
      {
         "prompt": "{{prompt}}",
         "max_tokens": 200,
         "temperature": 0.7
      }
      ```

    **Note**: The structure of the request body should follow the model-specific API schema. Use only supported parameters for the selected Amazon Bedrock model.

**3. Test the Configuration**

* **Test Response**: Provide sample values for your variables and click **Test** to invoke the model and preview the response.
* **Configure JSON Path**: Define JSON paths to extract relevant output fields (for example, response text, token usage) from the model response.

**4. Finalize the Configuration**

* Click **Save as draft** to store the configuration without activating it.
* Or, click **Confirm** to finalize and add the model connection.

Once completed, your model appears in the **External Models** tab. You can now reference this model in your **Prompts** and **Workflow** across the AI for Process.


# Configure your Fine-Tuned Model

On the Configurations page, you can edit the model name and description, add tags, adjust the model endpoint timeout duration, undeploy, or delete the model.

<img src="../images/configure-fine-tuned-model-1.png" alt="Configure Fine-Tuned Model" title="Configure Fine-Tuned Model"/>

## Model Endpoint Timeout

You can configure a specific timeout for your model's endpoint. Enter the timeout duration from the allowed range - 30 to 180 seconds (3 minutes). The default is 60 Seconds (1 minute). If the request isn't completed within the specified time frame, a timeout error will be triggered for the endpoint.

!!! note 

    Timeout precedence: Workflow timeout > Node timeout > Model timeout.


## Undeploy the Model 

You can undeploy the model if it's no longer in use. Undeploying the model will result in an immediate disconnection from all active instances. Click **Proceed to undeploy** on the Configurations page and follow the on-screen instructions.

## Delete the Model

You can delete an undeployed model. Deleting the model will remove all the associated data. Click **Proceed to delete** on the Configurations page and follow the on-screen instructions.



# Configure your Open-Source Model


On the Configurations page, you can view the model name, edit the description, and add tags, adjust the model endpoint timeout duration, undeploy, or delete the model.

<img src="../images/configure-open-source-model-1.png" alt="Configure your Open-Source Model " title="Configure your Open-Source Model"/>

## Model Endpoint Timeout

You can configure a specific timeout for your model's endpoint. Enter the timeout duration from the allowed range - 30 to 180 seconds (3 minutes). The default is 60 Seconds (1 minute). If the request isn't completed within the specified time frame, a timeout error will be triggered for the endpoint.

!!! note 

    Timeout precedence: WOrkflow > Node timeout > Model timeout.    

## Undeploy the Model 

You can undeploy the model if it's no longer in use. Undeploying the model will result in an immediate disconnection from all active instances. Click **Proceed to undeploy** on the Configurations page and follow the on-screen instructions.

## Delete the Model

You can delete an undeployed model. Deleting the model will remove all the associated data. Click **Proceed to delete** on the Configurations page and follow the on-screen instructions.


[:octicons-arrow-left-24: Back to Add an External Model](../external-models/add-an-external-model-using-easy-integration.md)

# Configuring Amazon Bedrock Models

To ensure secure cross-account access, this setup follows the principle of least privilege. You must create an IAM Role that grants only the required permissions to invoke Bedrock models and explicitly trusts the platform to assume this role via AWS STS.

To integrate your Bedrock models, you will need to:

1. Set up IAM credentials and a trust policy to allow access.
2. Provide the correct Model ID and deployment region.
3. Test the configuration and map the output.


## Step 1. Setting Up Credentials and Trust Policy (IAM Role and STS)

### A. Create IAM Role and Configure Trust Policy

To begin, you must create an IAM role in your AWS account that allows Agent Platform to securely access Amazon Bedrock models. This role defines permissions and establishes a trust relationship so that the platform can assume the role via AWS STS.

Follow the steps below to configure the IAM role and trust policy:

**1. Create the IAM Role in Your AWS Account**

Create a new IAM role in your AWS account that grants access to invoke Amazon Bedrock models. This role will be assumed by the platform to make Bedrock API calls on your behalf.

You can follow the IAM role creation setup in the [AWS IAM documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html).

For best practices on setting up IAM policies for Bedrock, see the
[AWS policy examples guide](https://docs.aws.amazon.com/bedrock/latest/userguide/security_iam_id-based-policy-examples.html). 

Assign the necessary permissions to the role. An example IAM policy is shown below:

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "bedrock:InvokeModel",
        "bedrock:ListFoundationModels"
      ],
      "Resource": "*"
    }
  ]
}
```

**2. Set the Trust Policy in Your AWS Account**

Set the trust policy to allow the platform to assume the IAM role. Replace `<kore-arn>` with the AWS account ID provided by the platform.

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "<kore-arn>"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

For private/on-prem deployments, the trust policy should point to your internal AWS IAM role.

**3. Set the STS Endpoint**

Use the STS endpoint for the region where your IAM role resides.

You can find the full list of STS endpoints in the [AWS documentation](https://docs.aws.amazon.com/general/latest/gr/sts.html). 

For example:

```
https://sts.us-east-1.amazonaws.com/
```

Ensure the STS region matches the region of your IAM role — not necessarily the region of the model.

### B. Raise a Support Ticket to Register your IAM Role

After creating the IAM role in your AWS account, create a support ticket to update the trust policy with your IAM Role ARN. This allows the platform to assume the role and invoke Bedrock.

To complete the registration:

1. Raise a support ticket with your IAM role ARN, requesting that it be added to the trust policy.
2. Wait for confirmation from Support that the role has been registered.

**Note**: Without this step, the platform cannot assume your IAM role. Both your AWS account and Kore.ai’s environment must explicitly trust each other for secure cross-account access.



## Step 2. Finding the Right Model ID and Region

Amazon Bedrock supports different model ID formats depending on how the model is deployed. This section outlines how to find the correct values for each case.

**1. Base Foundation Models**

If you're using base foundation models provided by Bedrock, you can use their standard model IDs directly. Refer to the complete list in the [AWS Documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html).


**2. Marketplace-Deployed Models**

If you’ve subscribed to a model through the AWS Marketplace:

1. Go to **Bedrock Console → Model Access → Subscriptions**.
2. Locate the **Model ARN** or a Marketplace Model ID. For example:
   ```
   arn:aws:bedrock:us-east-1::foundation-model/your-model-id
   ```
3. In the **Model ID** field, enter only the model name (after `foundation-model/`).

**3. Models with Inference Profiles (Provisioned Throughput)**

For models that do not support on-demand throughput (like Claude 3), you must create a Provisioned Throughput inference configuration.

1. Go to **Bedrock Console > Provisioned Throughput**.
2. Select or create an **inference configuration**.
3. Copy the **Inference ARN** or ID. For example:
   ```
   bedrock:provisioned-model-inference/my-throughput-id
   ```
4. Use the `my-throughput-id` value in the **Model ID** field.


## Step 3. Testing and Mapping the Model

Once you’ve provided credentials and model details, you can test your configuration and map model responses.

**1. Define Prompt Variables**

In the Prompt Variables section, add any variables used in your request payload.

For example:

* `prompt`: user input
* `system.prompt`: system instructions


**2. Define Request Body**

Use {{variableName}} to bind input fields dynamically.

Example payload:

```
{
  "prompt": "{{prompt}}",
  "max_tokens": 200,
  "temperature": 0.8
}
```

**3. Test the Configuration**

1. Provide test values for the input variables.
2. Click **Test** to invoke the model.
3. Review the raw response.

**Note**: If the call fails, ensure the IAM Role, STS endpoint, and model ID are valid.

**4. Map Output Fields**

Configure JSON paths to extract:

* Model output (e.g., response text)
* Input and output token counts

Example:

<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>JSONPath</strong>
   </td>
  </tr>
  <tr>
   <td>Output Text
   </td>
   <td><code>$.output.text</code>
   </td>
  </tr>
  <tr>
   <td>Input Token Count
   </td>
   <td><code>$.usage.input_tokens</code>
   </td>
  </tr>
  <tr>
   <td>Output Token Count
   </td>
   <td><code>$.usage.output_tokens</code>
   </td>
  </tr>
</table>










# Create a Fine-Tuned Model

You can fine-tune a Platform-hosted model or import one from Hugging Face. The fine-tuning process involves the following steps:

1. General details
2. Selecting a base model
3. Fine-tuning configuration
4. Adding the training and evaluation datasets
5. Adding the test dataset (optional)
6. Selecting a hardware
7. Integrating with Weights & Biases (optional)

Steps to fine-tune a model:

1. Log in to your account and click **Model Hub** under AI for Process.

2. On the **Fine-tuned models** tab, click **Start fine-tuning**.<img src="../images/start-fine-tuning.png" alt="Start Fine-Tune Model" title="Start Fine-Tune Model"/>

3.  The **Create a fine-tuned model** dialog is displayed. In the **General details** section:
    * Enter a **Model name** and **Description** for the fine-tuned model.  
    <img src="../images/general-details-section.png" alt="General Details Section" title="General Details Section"/>

    * Provide tags to ease the search for the model and click **Next**.

4. In the **Base** **model** section, choose the model to be fine-tuned.
    * If you choose hosted models, select the **model** from the dropdown list and click **Next**.  
    **Note**: Imported models are also included in the list of models.  
    <img src="../images/base-model-kore hosted.png" alt="Platform hosted models" title="Platform hosted models"/>

    * If you choose to **Import from Hugging Face**, select the **Hugging Face connection** type from the dropdown, and paste the **model name**. Click **Next**. For more information about how to connect to your Hugging Face account, see[ How to Connect to your Hugging Face Account](../../settings/integrations/enable-hugging-face.md).
    <img src="../images/import-hugging-face.png" alt="Import from Hugging Face" title="Import from Hugging Face"/> 

5. In the **Fine-tuning configuration** section:
    * Select a **Fine-tuning type** to apply to the model: Full fine-tune, LoRA (Low-Rank Adaptation), or QLoRA (Quantized LoRA).

        The supported fine-tuning types vary based on the size of the base model:

        | Base model parameters            | Supported fine-tuning types                         |
        |----------------------------------|-----------------------------------------------------|
        | **< 1B**                         | Full fine-tune, LoRA, QLoRA                         |
        | **≥ 1B and < 5B**                | LoRA, QLoRA                                         |
        | **≥ 5B and ≤ 8B**                | QLoRA                                               |

    * Enter the **Number of Epochs**, which indicates how many times the model processes the entire dataset during training.
    * Enter a number for **Batch size**, which implies the number of training examples used in one training iteration.
    * Enter a value for the **Learning rate**, which implies the size of the steps taken during the optimization of a model.
    * Click **Next**.  
    <img src="../images/fine-tuning-configuration-section.png" alt="Fine-Tuning Configuration Section" title="Fine-Tuning Configuration Section"/>

6. In the **Dataset** section:
    * Select or upload the **Training dataset** from the dropdown to train the base model. It acts as the foundation for the model's learning.
    
        !!! note

            The system accepts JSONL, CSV, and JSON files. The training, evaluation, and test files must follow a specific format with at least two columns: one for the prompt and one for the completion. You can download a sample file. 
        <img src="../images/upload-dataset.png" alt="Dataset Section" title="Dataset Section"/>


    * **Evaluation dataset**: Select the **dataset** for the model evaluation and then click **Next**.
        1. **Use from training dataset (default)**: This enables you to allocate a percentage of the training dataset for model evaluation. By default, 15% of the training dataset is allocated for model evaluation.
        2. **Upload evaluation dataset**: Select or upload another dataset from the dropdown.
        3. **Skip the evaluation**: It will skip the model evaluation process.
        <img src="../images/use-training-dataset.png" alt="Dataset Section" title="Dataset Section"/>


7. Select or upload the test dataset to test the fine-tuned model. Click **Next**.
    <img src="../images/test-data-section.png" alt=" Test Data Section" title="Test Data Section"/>

    !!! note

        The system accepts JSONL, CSV, and JSON files. 
        

8. Select the required hardware for fine-tuning from the dropdown menu and click **Next**.  
<img src="../images/hardware-section.png" alt="Hardware Section" title="Hardware Section"/>

9. In the **Weights & Biases** section, select your **WandB connection** from the drop-down list and click **Next**. 
To create a Weight & Biases connection, click **+ New connection**. For more information about how to create the WandB account, see[ How to Integrate with WandB](../../settings/integrations/integrate-with-wandb.md). 

    !!! note

        You need an account with Weights and Biases. Enabling the integration with an API token will share your real-time fine-tuning status with the platform, allowing you to monitor your model's fine-tuning metrics comprehensively. Use the provided API token to create an integration, sending all fine-tuning process data to the associated account.

    <img src="../images/new-connection.png" alt="WandB Section" title="WandB Section"/>      

10. In the **Review** step, verify all the details before starting the fine-tuning. To modify previous steps, click **Back**. 
<img src="../images/review-section.png" alt="Review Section" title="Review Section"/>

11. Click **Start fine-tuning**.  
The model **Overview** page displays real-time progress. You can also view the model’s overview page by clicking the model on the **Fine-tuned models** page. [Learn more](../fine-tune-models/model-settings-overview.md).  
<img src="../images/overview1.png" alt="Overview Page" title="Overview Page"/>

Once testing is completed, you can download the training file, test results, and test data for your reference.

After fine-tuning, deploy the model in AI for Process or externally via the generated API endpoint. You can also create another fine-tuned model on top of this one.



# Deploy a fine-tuned model

Once the fine-tuning process is completed, you can deploy your fine-tuned model.

To deploy your fine-tuned model, follow these steps:


1. Do one of the following:

    * Go to **Models** > **Fine-tuned models** and click the required model from the list.  
    <img src="../images/deploy-a-fine-tuned-model-new.png" alt="Deploy-Fine-Tuned Model" title="Deploy-Fine-Tuned Model"/> 
    
    The model's **Overview** page is displayed. Click **Deploy model** at the top-right corner of the page.  
    <img src="../images/deploy-fine-tuned-model.png" alt="Deploy-Fine-Tuned Model" title="Deploy-Fine-Tuned Model"/>

    Or

    * Click **Model Endpoint** in the left navigation and then click **Deploy model** at the top-right corner of the page.  
    <img src="../images/deploy-fine-tuned-model-from-overview.png" alt="Deploy Fine-Tuned Model from Overview" title="Deploy Fine-Tuned Model from Overview"/>

2. The **Deploy** dialog is displayed. In the **General details** section:

    * Enter a **Deployment name** and **Description** for your model.

        <img src="../images/deploy-fine-tuned-general-details-section.png" alt="Deploy Fine-Tuned General Details Section" title="Deploy Fine-Tuned General Details Section"/>

    * Add tags and click **Next**. Tags can help search the model quickly.

3. In the **Parameters** section:

    * Select the Sampling **Temperature** to use for deployment.

    * Select the **Maximum length** which implies the maximum number of tokens to generate.

    * Select the **Top p** which is an alternative to sampling with temperature where the model considers the results of the tokens with top_p probability mass.

    * Select the **Top k** value which is the number of highest probability vocabulary tokens to keep for top-k-filtering.

    * Enter the **Stop sequences** which implies that where the model will stop generating further tokens.

    * Enter the **Inference batch size** which is used to batch the concurrent requests at the time of model inferencing.

    * Select the **Min replicas** which is the minimum number of model replicas to be deployed.

    * Select the **Max replicas** which is the maximum number of model replicas to auto-scale.

    * Select the **Scale up delay (in seconds)** which is how long to wait before scaling-up replicas.

    * Select the **Scale down replicas (in seconds)** which is how long to wait before scaling down replicas.  
    <img src="../images/deploy-fine-tuned-parameters-section.png" alt="Deploy Fine-Tuned Parameters Section" title="Deploy Fine-Tuned Parameters Section"/>

4. Click **Next**.

5. Select the required **Hardware** for deployment from the dropdown menu and click **Next**.  
<img src="../images/deploy-fine-tuned-hardware-section.png" alt="Deploy Fine-Tuned Hardware Section" title="Deploy Fine-Tuned Hardware Section"/>

6. In the **Review** step, verify all the details that you provided earlier. Select the **I accept all the terms and conditions** check box.  
<img src="../images/deploy-fine-tuned-review-section.png" alt="Deploy Fine-Tuned Review Section" title="Deploy Fine-Tuned Review Section"/>

    !!! note

        If you want to make any modifications, you can go to the previous step by clicking the **Back** button or a particular step indicator on the left panel.

7. Click **Deploy**.

    After the deployment process is complete the status is changed to Deployed. You can now infer this model across AI for Process and externally. The deployment of your model will start and after the deployment process is complete, you can find the API endpoint created for your fine-tuned model.




# Deploy an imported model from Hugging Face

You can deploy an open-source model by selecting the Hugging Face option in the deployment process.

!!! note

    AI for Process supports models compatible with Transformers library version lower than or equal to 4.43.1. Models that require a higher version of the Transformers library cannot be supported in AI for Process at this time.


To deploy a model from Hugging Face, follow these steps:


1. Click **Models** on the top navigation bar of the application. The **Models** page is displayed.
2. Click the **Open-source models** tab on the **Models** page.

    <img src="../images/deploy-a-model.png" alt="Deploy a Model" title="Deploy a Model"/>

1. Click the **Deploy a model**. A pop-up with a list of available models is displayed.

    <img src="../images/deploy-using-hugging-face.png" alt="Deploy using Hugging Face" title="Deploy using Hugging Face"/>

1. Click the **Hugging Face** option from the list. The **Hugging Face** dialog is displayed.
1. In the **General details** section:

    * Enter a **Deployment name** and **Description** for your model.

        <img src="../images/deploy-hugging-face-general-details-section.png" alt="Deploy Hugging Face General Details Section" title="Deploy Hugging Face General Details Section"/>

    * Provide tags to ease the search for the model and click **Next**.

1. In the **Import** model section:

    * Select the **Hugging Face connection to use** from the drop-down list.  For more information about enabling your Hugging Face account, see [How to Connect to your Hugging Face Account](../../settings/integrations/enable-hugging-face.md).

        <img src="../images/deploy-hugging-face-import-model-section.png" alt="Deploy Hugging Face Import Model Section" title="Deploy Hugging Face Import Model Section"/>

    * Enter the **Hugging Face model name** from Hugging Face that you wish to import and click **Next**.

1. In the **Parameters** section:

    * Select the Sampling **Temperature** to use for deployment.

    * Select the **Maximum length** which implies the maximum number of tokens to generate.

    * Select the **Top p** which is an alternative to sampling with temperature where the model considers the results of the tokens with top_p probability mass.

    * Select the **Top k** value which is the number of highest probability vocabulary tokens to keep for top-k-filtering.

    * Enter the **Stop sequences** which implies that where the model will stop generating further tokens.

    * Enter the **Inference batch size** which is used to batch the concurrent requests at the time of model inferencing.

    * Select the **Min replicas** which is the minimum number of model replicas to be deployed.

    * Select the **Max replicas** which is the maximum number of model replicas to auto-scale.

    * Select the **Scale up delay (in seconds)** which is how long to wait before scaling-up replicas.

    * Select the **Scale down replicas (in seconds)** which is how long to wait before scaling down replicas.

        <img src="../images/deploy-hugging-face-parameters-section.png" alt="Deploy Hugging Face Parameters Section" title="Deploy Hugging Face Parameters Section"/>

2. Click **Next**.
3. Select the required **Hardware** for deployment from the dropdown menu and click **Next**. 

     <img src="../images/deploy-hugging-face-hardware-section.png" alt="Deploy Hugging Face Hardware Section" title="Deploy Hugging Face Hardware Section"/>

1. In the **Review** step, verify all the details that you provided earlier. Select the **I accept all the terms and conditions** check box.

    <img src="../images/deploy-hugging-face-review-section.png" alt="Deploy Hugging Face Review Section" title="Deploy Hugging Face Review Section"/>

    !!! note

        If you want to make any modifications, you can go to the previous step by clicking the **Back** button or a particular step indicator on the left panel.

    
4. Click **Deploy**.

# Export your Fine-Tuned Model

You can export your fine-tuned model for reference.

Steps to export your fine-tuned model:

1. On the **Models** page, click the three dots icon corresponding to the **Model name** . A pop-up with a list of options is displayed.  
<img src="../images/export-fine-tuned-model.png" alt="Export Fine-Tuned Model" title="Export Fine-Tuned Model"/>

2. Click **Export model** from the list of options. The exported zip file is saved in your downloads folder.


# Generate a New API Key

You can generate an API key for your open-source model and share it with other trusted users. It's essential to have a secure API key when trying to connect to this open-source model in an external ecosystem.  

**To generate a new API key for your open-source model, follow these steps**:

1. Click the **API keys** tab from the left panel on the **Models** page.

    <img src="../images/generate-an-api-key.png" alt="Generate an API Key" title="Generate an API Key"/>

1. Click the **Create a new API key** button. The **Create new API key** dialog is displayed.

    <img src="../images/create-a-new-api-key-open-source-model.png" alt="Create a new API Key" title="Create a new API Key"/>

1. Enter a **Name** for the key and click the **Generate key** button. Click the **Copy and close** button to copy your API key and share it with others if required.

    <img src="../images/copy-and-close-api-key.png" alt="Copy API Key" title="Copy API Key"/>

    All the generated API keys are listed in the API key section. You can hover over any key and find the delete icon corresponding to the name of the key if you want to delete the key.

   

# Generate a New API Key

You can generate an API for your fine-tuned model and share it with other trusted users. It is essential to have a secure API key when trying to connect to this fine-tuned model in an external environment.  

Steps to generate a new API key for your fine-tuned model:

1. Go to **Models** > **Fine-tuned models** and click the required model from the list. The model's Overview page is displayed. Click **API keys** in the left navigation.  
<img src="../images/create-new-api-key.png" alt="Create New API Key" title="Create New API Key"/>

2. Click the **Create a new API key** button. The **Create new API key** dialog is displayed.  
<img src="../images/generate-api-key.png" alt="Generate API Key" title="Generate API Key"/>

3. Enter a **Name** for the key and click the **Generate key** button. Your API key is now generated. Click **Copy and close** button to copy your API key and share it with others if required.  
<img src="../images/copy-api-key.png" alt="Copy API Key" title="Copy API Key"/>


# Importing a Model

AI for Process enables users to import base and adapter model files from their local machines into the platform. For **base** models, users can directly upload model files and import them into AI for Process for further use. For **adapter** models, users must first select a compatible base model and then upload and import the adapter model file. Once imported, these models become available for deployment within AI for Process.

This process enables users to seamlessly integrate local models into AI for Process, ensuring compatibility and readiness for deployment. It facilitates efficient management and configuration,  just like other open-source models, and streamlines workflows within the platform.

!!! note

    **Base Model**: A base model is a pre-trained model that can be used for general tasks. It’s already trained on a large dataset and can be used as-is or fine-tuned for specific tasks.  
    
    **Adapter Model**: An adapter model is a smaller model that works with a base model to make it more suited for a specific task or dataset. It doesn’t need to retrain the entire base model but adjusts it for new purposes. To import an adapter model in AI for Process, it is necessary to specify the related base model.


### Best Practices

1. **Ensure model compatibility**: When importing an adapter model, always verify that it is compatible with a supported base model. The system informs you that a base model is required, so ensure that you select a base model from the Platform-hosted list before proceeding with the adapter model upload.
2. **Validate model files before importing**: Always check your model's file extension and format before uploading. The system validates the model file during the import process, so uploading a valid file upfront will prevent unnecessary errors and delays.
3. **One model at a time**: To avoid conflicts or issues with multiple simultaneous imports, import one model file at a time. Ensure that each model (whether base or adapter) is fully imported and validated before proceeding to the next.
4. **Monitor import and validation status**: Track the model's status during the import and validation process. If an error occurs, the system provides details about the failure. Use this information to address issues quickly, either by correcting the file or re-uploading a new one.
5. **Prepare for deployment after validation**: Once the model is successfully imported and validated, it is marked as ‘Ready to deploy’. Before deploying, ensure all necessary configurations, such as description, tags, and API keys, are set up. Also, familiarize yourself with the deployment process to ensure a smooth transition to production.
6. **Avoid interruptions during import:** To ensure a smooth import process, refrain from switching accounts or refreshing the page, as these actions may interrupt the import.


### Prerequisites

* The user must be logged in to AI for Process and have the necessary permissions to import models.
* The model file to be imported must be available on the user’s local machine.


## Importing Base Models into AI for Process

**Steps to import a base model into AI for Process:**

1. Go to **Models** > **Open-source models** and click the **Import model** button.
2. On the **Import model** dialog, choose the **Base Model** tab.  
    <img src="../images/base_model.png" alt="Base Model" title="Base Model"/>

3. **Upload the model file**: In the **Import base model file** section, drag and drop the model file into the designated upload area, or use the **Upload file** link to browse and select the file from your local machine. Ensure the file extension matches the supported model formats.  
Click ‘Instructions’ to view the detailed guidelines for the supported format and the necessary files to include in the zip folder for both base and adapter models.

4. **File Validation**: The system validates the file’s extension.
    * If the file is valid, the file name appears and the **Import** button is enabled.
    * If the file fails validation, an error message appears detailing why the file is invalid. You must correct the file before proceeding.
5. **Import the model**: Click the **Import** button to start the import process.

    The system displays the model name in the Open-Source Models dashboard with the following status updates as the import progresses:

    * **Importing**: When the file is being uploaded.
    * **Validating**: When the file is being validated.
    * **Import Failed**: If any errors occur during the import or validation process, the system displays the error details. You can choose to fix the issue and re-import the model or cancel the process.
    * **Ready to Deploy**: When the model is successfully imported and validated.  

6. Once the model is ready for deployment, you can click the row in the dashboard and manage the model’s deployment settings in the following sections:
    * **Configurations**: Edit the model’s description and tags.
    * **API keys**: Configure the API key and deployment settings.
    * **Model Endpoint**: Start the deployment.


## Importing Adapter Models into AI for Process

**Steps to import an adapter model into AI for Process:**

1. Go to **Models** > **Open-source models** and click the **Import model** button.
2. On the **Import model** dialog, choose the **Adapter Model** tab.  
    <img src="../images/adapter_model.png" alt="Adapter Model" title="Adapter Model"/>

3. **Select a base model**: Browse through the list of available base models and choose one that supports the adapter model you're importing. Once selected, the base model is associated with the adapter model.  
Click ‘Instructions’ to view the detailed guidelines for the supported format and the necessary files to include in the zip folder for both base and adapter models.

    <img src="../images/adapter_model_details.png" alt="Adapter Model" title="Adapter Model"/>  

4. **Upload the model file**: In the **Import base model file** section, drag and drop the model file into the designated upload area, or use the **Upload file** link to browse and select the file from your local machine. Ensure the file extension matches the supported model formats.
5. **File Validation**: The system validates the file’s extension.
    * If the file is valid, the file name appears and the **Import** button is enabled.
    * If the file fails validation, an error message appears detailing why the file is invalid. You must correct the file before proceeding. 
6. **Import the model**: After the adapter model file is validated and the base model is selected, click the **Import** button to start the import process. The system displays the model name in the Open-Source Models dashboard with the following status updates as the import progresses:
    * **Importing:** When the file is being uploaded.
    * **Validating**: When the file is being validated.
    * **Import Failed**: If any errors occur during the import or validation process, the system displays the error details. You can fix the issue, re-import the model, or cancel the process.
    * **Ready to Deploy**: When the model is successfully imported and validated.
7. Once the model is ready for deployment, you can click the row in the dashboard and manage the model’s deployment settings in the following sections:
    * **Configurations**: Edit the model’s description and tags.
    * **API keys**: Configure the API key and deployment settings.
    * **Model Endpoint**: Start the deployment.


## Key Considerations

* **Model details**: Once the model is ready, you can modify its description and tags. However, the model name remains uneditable, as it is derived from the file name.
* **Deployment and management**: All actions related to deployment, re-deployment, and failure management will follow the same process as existing open-source models. After deployment, the model’s status, re-deployment history, API endpoint, and related toasts or email notifications will be the same as those for other open-source models.
* **Manage deletion**:
    * If the model has not been deployed or while the model is being imported, you can delete it using the Delete option from the three-dot menu on the dashboard.
    * If the model is deployed, you can trigger re-deployment or view the deployment history.
* **Errors during model import**: If any errors occur during model import, such as invalid file formats, upload failures, extraction issues, or compatibility problems, refer to the error message displayed by the system for guidance on resolving the issue.
* **Further fine-tuning:** Imported models can be fine-tuned further and deployed as individual units. During fine-tuning, the imported models are included in the Models hub menu in the Base model section. 


!!! note

    The deployconfig.json file is added to the model export. If the same model is later imported into AI for Process, the deployment details from this file will be automatically retrieved and pre-filled in the deployment wizard. This includes the previously selected optimization techniques, hyperparameters, hardware settings, and scaling configuration.


# Managing External Models 

The External Models tab in the Models section allows you to connect and manage models hosted outside the AI for Process. These include provider-hosted models (such as OpenAI, Anthropic, Google, Cohere, and Amazon Bedrock) as well as custom models integrated via API. Once connected, these models can be used within the AI for Process.

You can connect external models to the AI for Process in two ways:

* [Easy Integration](../external-models/add-an-external-model-using-easy-integration.md) – Use a guided setup to connect with providers like OpenAI, Anthropic, Google, Cohere, or Amazon Bedrock.
* [API Integration](../external-models/add-an-external-model-using-api-integration.md) – Add a custom model by configuring API endpoint details, authentication, and request settings.

## Viewing Connected Models

The External Models tab displays all external models that have been connected to your workspace via Easy Integration or API Integration.

Each row in the list shows:

| Field         | Description |
|---------------|-------------|
| Model Name | Name assigned during integration. |
| Type     | Indicates whether the model was added via Easy Integration or API Integration. |
| Source     | The provider or origin of the model (e.g., OpenAI, Hugging Face, Custom). |
| Added On   | Date the model was last added or updated. |


Click a model from the list to view or manage its connections.

<img src="../images/external_models_list.png" alt="External models table" title="External models table"/>

## Managing Connections 

Each external model can have one or more associated connections, listed in the Connections page for that model. From this page, you can add new connections or edit and delete existing connections.

| Field               | Description |
|---------------------|-------------|
| Connection Name | Name given during model integration (not editable once saved). |
| Added By      | User who created the connection. |
| Added On        | Date the connection was created. |
| Actions         | - Toggle for Inference – Enable or disable usage of this connection for inference.<br /> - Edit – Update the API key or credentials.<br /> - Delete – Remove the connection from the workspace. |


<img src="../images/external_models_connections.png" alt="External models connections" title="External models connections"/>


## Adding Connections

You can create multiple connections for the same external model, each with its own credentials or API key. Each connection is managed separately, and you can track usage, billing, and analytics for each connection.

For example, you can add multiple API key–based connections for the same commercial model (such as multiple GPT-4 keys for OpenAI). Each API key is treated as a separate connection and can be managed individually.

When adding connections:

* Each connection name must be unique.
* Each API key must be unique for the model.

<img src="../images/add_model_connection.png" alt="Add model connection" title="Add model connections"/>

When multiple API keys are configured, each connection appears separately in the Connections list for the model, making it easier to manage access and switch between keys as needed.

Once added, the model name and its connection name appear across the AI for Process — including in Prompt Studio, Model Traces & Analytics, Audit Logs, Billing, and other areas — so wherever you select a model, you can choose from its available connection names if multiple connections are configured.

# Managing Fine-Tuned Models 

The Fine-Tuned Models tab in the Models section allows you to create, customize, and manage models fine-tuned to your specific use cases.

* **[Create a Model](./create-a-fine-tuned-model.md)**: Fine-tune a Platform-hosted model or import one from Hugging Face. Configure training parameters, datasets, and hardware resources as needed.
* **[Deploy a Model](./deploy-a-fine-tuned-model.md)**: Once fine-tuning is complete, deploy the model within the AI for Process or externally using the generated API endpoint. You can also fine-tune further on top of an already fine-tuned model.

Once deployed, the model is listed on the Fine-tuned models page, showing its deployment count and other details.

## Viewing the Model List

The Fine-Tuned Models listing page displays all available models along with the following details:

| Field               | Description |
|---------------------|-------------|
| **Model Name**      | Name of the fine-tuned model. |
| **Base model**      | The model used as the base for fine-tuning. |
| **Active Deployments** | Number of deployments that are currently active. |
| **Deployment Failed** | Number of deployments that failed. |
| **Ready to Deploy** | Number of deployments that are ready to be deployed. |
| **Tags**            | Labels associated with the deployment. |
| **Added by**        | User who created or imported the model. |
| **Updated on**      | Date of the deployment. |

<img src="../images/fine_tune_models_new.png" alt="Fine-tune models table" title="Fine-tune models table"/>

Select a model in the list to open the model’s detail view. By default, this opens the Overview page. The left navigation pane includes the following sections:

* [Overview](./model-settings-overview.md)– View general information, training progress, and test information.
* [Deployments](./managing-fine-tuned-models.md#managing-model-deployments) – Manage all deployments of the selected model.
* [Configurations](./configure-your-fine-tuned-model.md)– Edit model name and description, add tags, adjust the model endpoint timeout duration, or delete the model.

## Managing Model Deployments

Each model can have multiple deployments, which are tracked independently. 

Click the Deployments tab to see all deployments for the selected model, along with the following details:

<table>
  <thead>
    <tr>
      <th style="width: 150px;" />Field</th>
      <th style="width: 500px;" />Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Deployment Name</b></td>
      <td>Name given by the user during deployment.</td>
    </tr>
    <tr>
      <td><b>Deployment ID</b></td>
      <td>System-generated ID (not editable).</td>
    </tr>
    <tr>
    <td><b>Status</b></td>
    <td>
    The status of deployment: Deploying, Optimizing, Failed, Ready to Deploy, or Deployed.
  </td>
</td>
    </tr>
          <td><b>Deployed By</b></td>
      <td>User who performed the deployment.</td>
    </tr>
    <tr>
      <td><b>Added On</b></td>
      <td>Date of deployment.</td>
    </tr>
    <tr>
      <td><b>Actions</b></td>
      <td>
        <b>Copy cURL</b> – Copies the cURL command for invoking this deployment.
        <b>Manage API Keys</b> – Opens the API key management tab.
        <b>Re-trigger</b> – Restarts the deployment (Option available only if it has failed or stopped).
      </td>
    </tr>
  </tbody>
</table>

<img src="../images/fine_tune_deployments.png" alt="Fine-tune deployments table" title="Fine-tune deployments table"/>


## Managing Deployment Details

Selecting a specific deployment on the Deployment page opens its detail view, where you can view and manage the configuration, endpoint, and API keys for that deployment.

- **[Model Endpoint](./view-the-generated-api-endpoint.md)** – View or manage the live endpoint; re-deploy the model if needed (specific to this deployment).
- **[API Keys](./generate-an-api-key.md)** – Generate and manage keys scoped to this deployment. API keys are isolated per deployment for secure access control.
- **[Configurations](./configure-your-fine-tuned-model.md)** – Edit the description and tags, or undeploy/delete the model.

<img src="../images/fine_tuned_deployment_detailed.png" alt="Fine-tune deployments" title="Fine-tune deployments"/>



# Model Optimization Techniques

Model optimization is the process of improving a machine learning model's performance by making it more efficient and effective without compromising its accuracy or predictive power. This involves a variety of techniques aimed at reducing the computational resources required for the model, speeding up inference time, and minimizing latency. The goal is to ensure that the large model operates swiftly and efficiently, particularly in real-time or resource-constrained environments.

AI for Process supports the following optimization types: CTranslate2 and vLLM.

!!! note

    The model optimization is supported only for the AI for Process hosted models.


## CTranslate2

CTranslate2 is a fast and full-featured inference engine for Transformer models. It aims to provide comprehensive inference features and be the most efficient and cost-effective solution to deploy standard neural machine translation systems on CPU and GPU. 

Key advantages of using CTranslate2:



* **Optimized Computation**: Supports CPU and GPU inference, making it flexible for various deployment environments. Utilizes optimized kernels and quantization techniques to speed up inference without significant loss in accuracy.
* **Quantization**: Offers int8_float16 quantization, reducing the model size and enhancing inference speed while maintaining accuracy through post-training quantization. 
* **Multi-threading**:  Efficiently uses multi-threading for multi-core CPUs, handling batch processing to improve throughput for large-scale applications.
* **Compatibility**: Supports models from PyTorch and TensorFlow, facilitating easy integration into existing workflows.

[Learn more](https://opennmt.net/CTranslate2/).


## vLLM

Very Large Language Models (vLLM) optimization techniques focus on improving the performance of very large-scale language models. These techniques are particularly relevant for models with billions of parameters, such as GPT-3. 

Key advantages of using vLLM:



* **Efficient Memory Management**: Uses advanced strategies to handle large memory needs, reduce fragmentation, and maximize GPU memory, allowing for larger batch sizes and faster inference.
* **Parallelism**: Supports model and data parallelism to distribute computational load across multiple GPUs or nodes, managing communication overhead efficiently. Efficiently manages communication overhead between different parts of the model.
* **Layer-wise Adaptive Precision**: Adjusts computation precision layer by layer, using mixed-precision training and inference to enhance performance while maintaining accuracy.
* **Advanced Caching Mechanisms**: Adjusts computation precision layer by layer, using mixed-precision training and inference to enhance performance while maintaining accuracy.
* **Quantization**: Supports AWQ (Activation-Weighted Quantization) which lowers the precision of most weights and activations but preserves a small percentage of important weights. This approach minimizes performance loss, enabling models to run in 4-bit precision without accuracy degradation.


[Learn more](https://docs.vllm.ai/en/stable/index.html).


## CTranslate2 vs. vLLM

Choosing between CTranslate2 and vLLM depends on your model's needs and deployment environment. CTranslate2 suits small to medium-sized models and low-latency scenarios. The vLLM excels with large models needing extensive computational resources and advanced parallel processing capabilities.

Comparisons between CTranslate2 and vLLM on important attributes are listed below. 


### Model Size and Application



* CTranslate2 is ideal for small to medium-sized models, particularly in translation and NLP tasks where low latency and efficient CPU/GPU use are important.
* The vLLM is designed for large models like GPT-3, optimizing performance in large-scale, distributed environments.


### Deployment Environment



* For devices with limited resources or low latency needs, CTranslate2 is more beneficial due to its efficient quantization and multi-threading.
* In high-performance environments with abundant resources, vLLM excels with its advanced parallelism and memory management.


### Ease of Integration



* CTranslate2 integrates easily with models trained in frameworks like PyTorch and TensorFlow, making it ideal for teams seeking a straightforward deployment process.
* vLLM may require a more complex setup and infrastructure, yet it delivers unmatched performance for large models.


### Inference Speed and Throughput



* For quick, real-time responses, CTranslate2 is advantageous.
* For batch processing of large-scale data, vLLM optimizations offer better throughput.

# Overview

The model overview page displays real-time progress of the Fine-tuned models. 

To access the model’s overview page, log in to your account and click **Model Hub** under AI for Process.

On the Fine-tuned models tab, click the desired model to view the following information:  
<img src="../images/model-overview.png" alt="Model Overview" title="Model Overview"/>

* **General Information**: This section displays the model's progress status, Total time, and Author details.  

    * The progress statuses include Initializing, Training in progress, Testing in progress, Fine-tuning completed, Stopped, and Failed.

        !!! note

            If fine-tuning fails, the status changes to "Failed." View the reason, make necessary changes, and click the Re-trigger to restart fine-tuning.

    * If necessary, you can stop the process in the middle and resume it later; then, the status is changed to “Stopped.” Click Re-trigger to initiate the fine-tuning process again from the beginning.

* **Base model information**: This section shows the base model used for fine-tuning and its source.

* **Training information**: This shows important details like training type, number of training steps, training loss, percentage of validation data, validation loss, training start time, and duration. Click the downward arrows next to the training loss and validation loss fields to see their graphical trends.

* **Test data information**: It indicates the model performance on the test dataset using the BLEU score.

* **Hardware information**: This displays CPU and GPU utilization during fine-tuning.

* **Training parameters**: Displays the summary of the parameters provided.


# Managing Open-Source Models

The Open-source models tab in the Models section allows you to import, deploy, and manage open-source models. You can also view existing models, manage deployments, and configure access settings.

- **[Import a Model](../open-source-models/importing-models.md)** – Upload a .zip file from your local machine.  
- **[Deploy a Model](../open-source-models/select-and-deploy-an-open-source-model.md)** – Launch a new deployment for a listed or newly imported model.  

After deployment, the model appears in the listing page along with the number of deployments.

-----

## Viewing the Model List

The models list displays all the open-source models along with the following details:

| Field | Description |
|-------|-------------|
| **Model Name** | Name of the model. For imported models, the name is derived from the uploaded .zip file. |
| **Active Deployments** | Number of deployments that are currently active. |
| **Deployment Failed** | Number of deployments that failed. |
| **Ready to Deploy** | Number of deployments that are ready to be deployed. |
| **Source** | Origin of the model: File (uploaded locally), Platform Hosted, or Hugging Face. |

<img src="../images/open_source_models_new.png" alt="Open-source models table" title="Open-source models table"/>

Selecting a model opens its **Deployments** page, where you can view and manage all related deployments.


## Managing Model Deployments

Each model can have multiple deployments, which are tracked independently. The Deployments page displays all deployments of a selected model along with the following details:

<table>
  <thead>
    <tr>
      <th style="width: 150px;" />Field</th>
      <th style="width: 500px;" />Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Deployment Name</b></td>
      <td>Name given by the user during deployment.</td>
    </tr>
    <tr>
      <td><b>Deployment ID</b></td>
      <td>System-generated ID (not editable).</td>
    </tr>
    <tr>
    <td><b>Status</b></td>
    <td>
    The status of deployment: Deploying, Optimizing, Failed, Ready to Deploy, or Deployed.
  </td>
</td>
    </tr>
    <tr>
      <td><b>Tags</b></td>
      <td>Labels associated with the deployment.</td>
    </tr>
    <tr>
      <td><b>Added By</b></td>
      <td>User who performed the deployment.</td>
    </tr>
    <tr>
      <td><b>Added On</b></td>
      <td>Date and time of deployment.</td>
    </tr>
    <tr>
      <td><b>Actions</b></td>
      <td>
        <b>Copy cURL</b> – Copies the cURL command for invoking this deployment.
        <b>Manage API Keys</b> – Opens the API key management tab.
        <b>Re-trigger</b> – Restarts the deployment (Option available only if it has failed or stopped).
      </td>
    </tr>
  </tbody>
</table>

<img src="../images/open-source_deployment_listing_view.png" alt="Open-source models table" title="Open-source models table"/>


## Deployment Details

Selecting a specific deployment on the Deployment page opens its detail view, where you can view and manage the configuration, endpoint, and API keys for that deployment.

- **[Model Endpoint](../open-source-models/view-the-generated-api-endpoint.md)** – View or manage the live endpoint; re-deploy if needed.
- **[API Keys](../open-source-models/generate-an-api-key-open-source.md)** – Generate and manage keys scoped to this deployment. API keys are isolated per deployment for secure access control.
- **[Configurations](../open-source-models/configure-your-open-source-model.md)** – Edit the description and tags, or undeploy/delete the model.

<img src="../images/new_endpoint.png" alt="Deployed Model API Endpoint" title="Deployed Model API Endpoint"/>






# About Models

Model Hub empowers you to enhance base models by fine-tuning them directly within the product using your enterprise's proprietary data. This allows you to create customized models tailored to your specific needs. You can also seamlessly integrate models from external sources and open-source models, expanding the range of available models to address your unique requirements.

## Key Features

* **Fine-tuned model**: Customize existing models to suit your specific requirements. [Learn more](../models/fine-tune-models/create-a-fine-tuned-model.md).

* **Open-source model**: Choose from a curated list of 30+ popular open-source models or bring in any text generation model from Hugging Face. [Learn more](../models/open-source-models/select-and-deploy-an-open-source-model.md).

* **External models**: Add commercial models like OpenAI, Anthropic, Azure OpenAI, Cohere, and Google. You can also integrate your own hosted models into AI for Process using API connections. [Learn more](../models/external-models/add-an-external-model-using-easy-integration.md).

* **Quick deployment**: Deploy a model quickly in just a few steps - select the model, review parameters and hardware, and click Deploy. [Learn more](./fine-tune-models/deploy-a-fine-tuned-model.md).


## Accessing Model Hub

1. Log in to your AI for Process account and click **Model hub** under **AI for Process**.
 
2. On the Models page, you can see three tabs: Fine-tuned Models, Open-source Models, and External Models. Click any tab to explore the corresponding models.

    <img src="../fine-tune-models/images/start-fine-tuning.png" alt="Models page" title="Models page"/>


# Select and Deploy an Open-Source Model

AI for Process supports thirty-plus open-source models and provides them as a service. If you select the Platform-hosted model, you can optimize it before deployment.  
   For more information on the list of models supported, see [Supported models](../supported-models.md#supported-open-source-models).

To select and deploy a model, follow these steps:

1. Go to **Models** > **Open-source models** and click **Deploy a model**.

    <img src="../images/deploy-a-model.png" alt="Deploy a Model" title="Deploy a Model"/>

2. The **Deploy** dialog is displayed. In the **General details** section:

    * If you choose hosted models:

       * Select the **model** from the dropdown menu.
       * Add a **Description**.
       * Provide **tags** to ease the search for the model.
       * Click **Next**.

       <img src="../images/image8.png" alt=" " title=" "/>

     For more information on the list of models supported, see [Supported models](../supported-models.md#supported-open-source-models).

   * If you choose to **Import from Hugging Face**:

       * Select the **Hugging Face connection** type from the dropdown.
       * Paste the **model name**.

     For more information about connecting to your Hugging Face account, see [How to Connect to your Hugging Face Account](../../settings/integrations/enable-hugging-face.md).

     <Note> In the case of public mode, selecting a connection is not necessary. </Note>

     <img src="../images/image7.png" alt=" " title=" "/>

3. Based on the selected Platform-hosted model, the **Optimization** section is displayed. Choose the optimization option as required and then click **Next**. [Learn more](../open-source-models/model-optimization.md).

    * **Skip optimization**: Skips the model optimization.
    * **CTranslate2**: Select Quantization from the dropdown menu if applicable. [Learn more](model-optimization.md#ctranslate2).
    * **vLLM**: Select Quantization from the dropdown menu if applicable. [Learn more](model-optimization.md#vllm).

    <img src="../images/image1.png" alt=" " title=" "/>

4. In the **Parameters** section:

    * Select the Sampling **Temperature** to use for deployment.
    * Select the **Maximum length**, which implies the maximum number of tokens to generate.
    * Select **Top p**, an alternative to sampling with the temperature where the model considers the results of the tokens with top_p probability mass.
    * Select the **Top k** value, the highest probability vocabulary tokens to keep for top-k filtering.
    * Enter the **Stop sequences**, which tells the model when to stop generating further tokens.
    * Enter the **Inference batch size**, which is used to batch concurrent requests at the time of model inferencing.
    * Select **Min replicas**, which indicates the minimum number of model replicas to be deployed.
    * Select **Max replicas**, which indicates the maximum number of model replicas to auto-scale.
    * Select **Scale-up delay (in seconds)**, which indicates how long to wait before scaling up replicas.
    * Select **Scale down replicas (in seconds)**, which indicates how long to wait before scaling down replicas.

    <img src="../images/image2.png" alt=" " title=" "/>

5. Click **Next**.

6. In the **Hardware** section, select the required hardware for deployment from the dropdown menu and click **Next**.

    <img src="../images/image6.png" alt=" " title=" "/>

7. In the **Review** section, verify all the details before starting the fine-tuning.

    * To modify previous steps, click **Back**.
    * Go through the terms and conditions and select **I accept all the Terms and Conditions**.

    <img src="../images/image3.png" alt=" " title=" "/>

8. Click **Deploy**.

If you have selected optimization, the model optimization starts, and the status changes to “Optimization”. If not, the model is deployed. After deployment, the status changes to "Deployed." You can now use this model across AI for Process and externally.

Hover over the deployed model to view **more** icons (three dots) which provide access to the model **API endpoint** and **Configurations**. Selecting the API endpoint option shows the API endpoint, deployment history, API keys, and other details. Selecting the Configuration option allows you to add a description, tags, and deploy or delete the model.

<img src="../images/image4.png" alt=" " title=" "/>

#### Re-deploy a Deployed Model

After the initial deployment, if you wish to update the model’s parameters, hardware, or both, you must redeploy the updated model.


To re-deploy a deployed model, follow these steps:


1. Go to **Models** > **Open-source models** and select a **model** to redeploy.
2. Click the **Deploy model**. The **Model Configuration** page is displayed.
3. Modify the required fields and click the **Deploy**. Once deployed, the status changes to “Deployed”.




# Supported AI Models on AI for Process

The AI for Process offers flexible orchestration and runtime support for a wide range of AI Models across leading providers. Whether you're building real-time assistants or background workflows, you can choose from Platform-hosted, open-source, externally integrated, or third-party models to meet your needs.

## Supported Open-Source Models

AI for Process supports over thirty open-source models and provides them as a service. Platform-hosted models can be optimized prior to deployment, making them ideal for private environments or specialized applications.

The supported models and their variants are given below:

<table>

  </tr>
<td><strong>Model Provider</strong>
   </td>
   <td><strong>Model Variant</strong>
   </td
  <tr>
</tr>
   <td><strong>Amazon</strong>
   </td>
   <td>
   <ul>

<li>amazon/MistralLite</li>

</ul>
</td>
  </tr>
  <tr>
   <td><strong>Argilla</strong>
   </td>
   <td>
<ul>

<li>argilla/notus-7b-v1</li>

<li>argilla/notux-8x7b-v1</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>DeepSeek</strong>
   </td>
   <td>
<ul>
<li>deepseek-ai/DeepSeek-R1-Distill-Llama-8B</li>
<li>deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B</li>
<li>deepseek-ai/DeepSeek-R1-Distill-Qwen-14B</li>
<li>deepseek-ai/DeepSeek-R1-Distill-Qwen-7B</li>
</ul>
   </td>
  </tr>

  <tr>
   <td><strong>Eleutherai</strong>
   </td>
   <td>
<ul>

<li>EleutherAI/gpt-j-6b</li>

<li>EleutherAI/gpt-neo-1.3B</li>

<li>EleutherAI/gpt-neo-125m</li>

<li>EleutherAI/gpt-neo-2.7B</li>

<li>EleutherAI/gpt-neox-20b</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Facebook</strong>
   </td>
   <td>
<ul>

<li>facebook/opt-1.3b</li>

<li>facebook/opt-2.7b</li>

<li>facebook/opt-350m</li>

<li>facebook/opt-6.7b</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Google</strong>
   </td>
   <td>
<ul>

<li>google/flan-t5-base</li>

<li>google/flan-t5-large</li>

<li>google/flan-t5-small</li>

<li>google/flan-t5-xl</li>

<li>google/flan-t5-xxl</li>

<li>google/gemma-2-27b-it</li>

<li>google/gemma-2-9b-it</li>

<li>google/gemma-2b</li>

<li>google/gemma-2b-it</li>

<li>google/gemma-3-12b-it</li>

<li>google/gemma-7b</li>

<li>google/gemma-7b-it</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Helsinki-nlp</strong>
   </td>
   <td>
   <ul>
<li>Helsinki-NLP/opus-mt-es-en</li>

</ul>
</td>
  </tr>
  <tr>
   <td><strong>Huggingfaceh4</strong>
   </td>
   <td>
<ul>

<li>HuggingFaceH4/zephyr-7b-alpha</li>

<li>HuggingFaceH4/zephyr-7b-beta</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Meta-llama</strong>
   </td>
   <td>
<ul>

<li>meta-llama/Llama-2-13b-hf</li>

<li>meta-llama/Llama-2-7b-hf</li>

<li>meta-llama/Llama-3.2-1B</li>

<li>meta-llama/Llama-3.2-1B-Instruct</li>

<li>meta-llama/Llama-3.2-3B</li>

<li>meta-llama/Llama-3.2-3B-Instruct</li>

<li>meta-llama/Llama-3.2-11B-Vision-Instruct</li>
<li>meta-llama/Llama-Guard-4-12B</li>

<li>meta-llama/Meta-Llama-3-8B</li>

<li>meta-llama/Meta-Llama-3-8B-Instruct</li>

<li>meta-llama/Meta-Llama-3.1-8B</li>

<li>meta-llama/Meta-Llama-3.1-8B-Instruct</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Microsoft</strong>
   </td>
   <td>
<ul>

<li>microsoft/phi-1</li>

<li>microsoft/phi-1_5</li>

<li>microsoft/phi-2</li>

<li>microsoft/Phi-3-medium-128k-instruct</li>

<li>microsoft/Phi-3-medium-4k-instruct</li>

<li>microsoft/Phi-3-mini-128k-instruct</li>

<li>microsoft/Phi-3-mini-4k-instruct</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Mistralai</strong>
   </td>
   <td>
<ul>

<li>mistralai/Mistral-7B-Instruct-v0.1</li>

<li>mistralai/Mistral-7B-Instruct-v0.2</li>

<li>mistralai/Mistral-7B-Instruct-v0.3</li>

<li>mistralai/Mistral-7B-v0.1</li>

<li>mistralai/Mistral-Nemo-Instruct-2407</li>

<li>mistralai/Mixtral-8x7B-Instruct-v0.1</li>

<li>mistralai/Mixtral-8x7B-v0.1</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>OpenAI</strong>
   </td>
   <td>
   <ul>
<li>GPT2</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>OpenAI Community</strong>
   </td>
   <td>
<ul>

<li>openai-community/gpt2-large</li>

<li>openai-community/gpt2-medium</li>

<li>openai-community/gpt2-xl</li>
</ul>
   </td>
  </tr>
    <tr>
   <td><strong>Stable Diffusion</strong>
   </td>
   <td>
<ul>

<li>stabilityai/stable-diffusion-xl-base-1.0</li>

<li>stabilityai/stable-diffusion-2-1</li>

<li>stable-diffusion-v1-5/stable-diffusion-v1-5</li>  

(Available only in the text-to-image node, No Prompt Studio support.)

</ul>
   </td>
  </tr>
  <tr>
   <td><strong>T5</strong>
   </td>
   <td>
<ul>

<li>t5-base</li>

<li>t5-large</li>

<li>t5-small</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Tiiuae</strong>
   </td>
   <td>
<ul>

<li>tiiuae/falcon-40b</li>

<li>tiiuae/falcon-40b-instruct</li>

<li>tiiuae/falcon-7b</li>

<li>tiiuae/falcon-7b-instruct</li>

<li>tiiuae/falcon-rw-1b</li>

</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Xiaomi</strong>
   </td>
   <td>
   <ul><li>Mimo-7B--VL-RL</li></ul>
   </td>
   </tr>
</table>



### Supported Models for Structured Output

Kore-hosted open-source models can produce structured JSON responses, making outputs consistent and easy to parse.

* Structured output support depends on the optimization technique used: No optimization or vLLM.
* Models optimized with CT2, fine-tuned models, Hugging Face imports, and locally imported models are not supported.

The following table lists the models that support structured JSON output:

| Model Name                             | vLLM | No Optimization |
|----------------------------------------|------|----------------|
| amazon/MistralLite                     | ❌   | ✅             |
| argilla/notus-7b-v1                    | ❌   | ✅             |
| EleutherAI/gpt-j-6b                    | ❌   | ✅             |
| facebook/opt-1.3b                      | ✅   | ✅             |
| facebook/opt-2.7b                      | ✅   | ✅             |
| facebook/opt-350m                      | ✅   | ✅             |
| facebook/opt-6.7b                      | ✅   | ✅             |
| google/gemma-2b                        | ❌   | ✅             |
| google/gemma-2b-it                     | ❌   | ✅             |
| google/gemma-7b                        | ❌   | ✅             |
| google/gemma-7b-it                     | ❌   | ✅             |
| HuggingFaceH4/zephyr-7b-alpha          | ❌   | ✅             |
| HuggingFaceH4/zephyr-7b-beta           | ❌   | ✅             |
| meta-llama/Llama-2-7b-chat-hf          | ❌   | ❌             |
| meta-llama/Llama-2-7b-hf               | ❌   | ✅             |
| meta-llama/Llama-3.2-1B                | ✅   | ❌             |
| meta-llama/Llama-3.2-1B-Instruct       | ✅   | ❌             |
| meta-llama/Llama-3.2-3B                | ✅   | ❌             |
| meta-llama/Llama-3.2-3B-Instruct       | ✅   | ❌             |
| meta-llama/Meta-Llama-3-8B             | ✅   | ✅             |
| meta-llama/Meta-Llama-3-8B-Instruct    | ❌   | ✅             |
| meta-llama/Meta-Llama-3.1-8B           | ✅   | ✅             |
| meta-llama/Meta-Llama-3.1-8B-Instruct  | ❌   | ✅             |
| microsoft/Phi-3-medium-128k-instruct   | ❌   | ✅             |
| microsoft/Phi-3-medium-4k-instruct     | ❌   | ✅             |
| microsoft/Phi-3-mini-128k-instruct     | ✅   | ✅             |
| microsoft/Phi-3-mini-4k-instruct       | ❌   | ✅             |
| microsoft/phi-1                        | ❌   | ✅             |
| microsoft/phi-1_5                      | ❌   | ✅             |
| microsoft/phi-2                        | ✅   | ✅             |
| mistralai/Mistral-7B-Instruct-v0.1     | ❌   | ✅             |
| mistralai/Mistral-7B-Instruct-v0.2     | ❌   | ✅             |
| mistralai/Mistral-7B-Instruct-v0.3     | ✅   | ✅             |
| mistralai/Mistral-7B-v0.1              | ❌   | ✅             |
| openai-community/gpt2-large            | ❌   | ✅             |
| openai-community/gpt2-medium           | ❌   | ✅             |
| openai-community/gpt2-xl               | ❌   | ✅             |
| tiiuae/falcon-7b                       | ❌   | ✅             |
| tiiuae/falcon-7b-instruct              | ❌   | ✅             |
| tiiuae/falcon-rw-1b                    | ✅   | ✅             |


## Supported External Models for Easy Integration

With Easy Integration, you can quickly connect to external model providers, such as OpenAI, Anthropic, Google, Cohere, and Amazon Bedrock. No infrastructure setup is needed—just authenticate and start deploying models.

Here is the list of all the external models supported in AI for Process:


<table>
  <tr>
   <td><strong>Model Provider</strong>
   </td>
   <td><strong>Model Variant</strong>
   </td>
  </tr>
  <tr>
   <td>Anthropic
   </td>
   <td>
<ul>

<li>claude-3-5-sonnet-20240620</li>

<li>claude-3-haiku-20240307</li>

<li>claude-3-opus-20240229</li>

<li>claude-3-sonnet-20240229</li>

<li>claude-2.1</li>

<li>claude-2.0</li>

<li>claude-3-7-sonnet-20250219</li>

<li>claude-3-5-sonnet-20241022</li>

<li>claude-3-5-haiku-20241022</li>

<li>claude-sonnet-4-20250514</li>

<li>claude-opus-4-20250514</li>
<li>claude-opus-4-1-20250805</li>

<li>Claude Sonnet Vision (Available only for the Image-to-text node, No Prompt Studio support.)</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Azure Open AI
   </td>
   <td>
<ul>

<li>GPT-4</li>

<li>GPT-3.5-Turbo</li>
<li>GPT-4o-Mini</li>
<li>GPT-4o</li>
<li>GPT-4.1</li>
<li>GPT-4.1-mini</li>
<li>GPT-4.1-nano</li>
<li>GPT-4.5-preview</li>
<li>O1-Mini</li>
<li>O1</li>
<li>O3-Mini</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Cohere
   </td>
   <td>
<ul>

<li>command-light-nightly</li>

<li>command-light</li>

<li>command</li>

<li>command-nightly</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Google
   </td>
   <td>
<ul>

<li>gemini-1.5-flash-latest</li>
<li>gemini-1.5-pro</li>
<li>gemini-1.0-pro</li>
<li>gemini-2.5-Pro</li>
<li>gemini-2.0-flash</li>
<li>gemini-2.0-flash-lite</li>
<li>gemini-2.5-flash-preview-05-20</li>
<li>gemini-2.5-flash</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Open AI</td>
   <td>
<ul>

<li> gpt-4o</li>
<li> gpt-4o-mini</li>
<li> gpt-3.5-turbo</li>
<li> gpt-3.5-turbo-1106</li>
<li> gpt-4-0613</li>
<li> o1-preview</li>
<li> o1-mini</li>
<li> o3-mini</li>
<li> gpt-4-0125-preview</li>
<li> gpt-4-turbo-preview</li>
<li> gpt-4-1106-preview</li>
<li> gpt-5-2025-08-07</li>
<li> gpt-5-nano-2025-08-07</li>
<li> gpt-5-mini-2025-08-07</li>
<li> gpt-5-chat-latest</li>
<li> gpt-4</li>
<li>whisper (Available only for the Audio-to-text node, No Prompt Studio support.)</li>
<li>whisper-1</li>
<li> gpt-4o-realtime-preview</li>
<li> gpt-4o-mini-realtime-preview</li>
<li> gpt-4.1-2025-04-14</li>
<li> gpt-4.1-mini-2025-04-14</li>
<li> gpt-4.1-nano-2025-04-14</li>
<li> gpt-4.5-preview-2025-02-27</li>
<li> dall-e-3</li>
<li> dall-e-2</li>
<li> text-embedding-3-small</li>
<li> text-embedding-3-large</li>
<li> text-embedding-ada-002</li></ul>
   </td>
  </tr>
</table>









# View API Endpoint & Deployment History

## API Endpoint

After the open-source model is deployed, the API endpoint is generated which implies that your model is ready for inferencing externally and across the other sections in AI for Process. 

The API endpoint is available in 3 formats.

!!! note

    You will receive an email notification after your model deployment is completed and an API is generated, and it is ready to use.

To view the API Endpoint, follow these steps:

1. Click the required model from the models listing. Click the **Model Endpoint** tab in the left panel on the **Models** page of your open-source model. The API endpoint created for this open-source model is displayed.

1. To use this model as a service, the generated code is helpful. Click the **Copy** icon to copy and share the API Endpoint.

    <img src="../images/new_endpoint.png" alt="Deployed Model API Endpoint" title="Deployed Model API Endpoint"/>

!!! note

    Click the **Deployment history** tab on the Deploy page to view the history. This can be particularly useful for auditing and accountability purpose.


You can either embed the curl or the code that is generated into your own applications or use it externally. 

### Structured Output Support

Open-source models can return responses in a structured JSON format using the `response_format` parameter, aligned with OpenAI schema style.

You can use this capability in two ways:

* Through API calls: Add the response_format parameter to the model endpoint when calling the deployed model externally.
* Within the Workflow builder canvas: Define the schema directly in the builder. The AI for Process automatically attaches it as the response_format parameter for structured output.

This capability is supported on v2/chat/completions endpoints for selected open-source models. Older endpoints (v1/completions) don't support structured output. For the list of models that support structured output, see [Supported Models for Structured Output](../supported-models.md#supported-models-for-structured-output).

Supported schema data types include: string, number, boolean, integer, object, array, enum, and anyOf.

**How it works**:

* Add a `response_format` field to your request body.
* If provided, the model attempts to return a response in JSON object matching the defined schema.
* If not provided, the model responds with standard text output.


!!! note

    If a model supports both tool calls and JSON Schema, tool calls take precedence, and the schema will be ignored.


## Deployment History

After deploying a model, you can modify its parameters and redeploy the updated version. The deployment history table tracks the complete life cycle of the model, offering detailed information for each version. This includes the deployment name, the timestamp when it was deployed, the deployment duration, the individual who performed the deployment, and other relevant details. 

Additionally, the system automatically appends a version number to the deployment name and increments it with each subsequent redeployment, ensuring a clear and organized record of all model versions and their respective changes.

For example, if a model named "Flan T5" is deployed for the first time, it will be named as "Flan T5_v1". Subsequent deployments will be named as "Flan T5_v2", "Flan T5_v3", and so on, incrementing the version number with each redeployment.

The most recent deployment is marked with a green ticket next to the model name. Click on any deployment version to view the details.

 <img src="../images/deployment-history.png" alt="Deployment History" title="Deployment History"/>

**General details**: This section displays the model's basic information, such as its name, description, tags, optimization technique, parameters, the hardware used, and deployment duration.

**Deployment details**: This section includes who deployed the model, the start and end timestamps of deployment, the deployment duration, and its status (Success, Failed, or Deploying). In case of a failed deployment, hover over “Status” to view the reason for the failure.

**Un-deployment details**: This section appears only if the model is undeployed either automatically by the system or manually. In the case of manual un-deployment, the person who initiated the un-deployment, along with the start and end timestamps of the process, is displayed.


# View API Endpoint & Deployment History

## API Endpoint

After the model is deployed, the API endpoint is generated which implies that your fine-tuned model is ready for inferencing externally and across the other sections in AI for Process.

!!! note

    You will receive an email notification after your model deployment is completed and an API is generated and ready to use.

Steps to view the API Endpoint:

1. Go to **Models** > **Fine-tuned models** and click the required model from the list. The model's Overview page is displayed. Click **Model Endpoint** in the left navigation.

2. Click the **Copy** icon to copy and share the API Endpoint.  
<img src="../images/view-generated-api-endpoint.png" alt="Generated API Endpoint" title="Generate API Endpoint"/>

The API endpoint is available in 3 formats. You can copy and use the same as required.

### API Endpoint Use Case

You can use the deployed fine-tuned model in AI for Process for the following use cases:

* In the Prompt Playground to compare prompts against commercial, open-source, or any other fine-tune model.

* In a workflow in the workflow builder via the AI Node.

## Deployment History


The deployment history table tracks the complete lifecycle of the model, offering detailed information for each version, such as the deployment name, timestamp, deployment duration, the individual who performed the deployment, and other relevant details. This table provides a comprehensive view of the model’s evolution, helping users understand changes and updates over time.

After deploying a model, you can modify its parameters and redeploy the updated version. You can also edit the deployment name, but on redeployment, the system will retain the original name. This ensures a clear and organized record of all model versions and their respective changes.

The system automatically appends a version number to the original deployment name and increments it with each subsequent redeployment.
For example, if a model named "Flan T5" is deployed for the first time, it will be named "Flan T5_v1." Even if you edit the deployment name, subsequent redeployments will continue with the original name, resulting in "Flan T5_v2," "Flan T5_v3," and so on.

The most recent deployment is marked with a green tick next to the model name. You can click on any deployment version to view its details.

  
<img src="../images/deployment-history.png" alt="Deployment History" title="Deployment History"/>

**General details**: This section displays the model's basic information, such as its name, description, tags, optimization technique, parameters, the hardware used, and deployment duration.

**Deployment details**: This section includes who deployed the model, the start and end timestamps of deployment, the deployment duration, and its status (Success, Failed, or Deploying). In case of a failed deployment, hover over “Status” to view the reason for the failure.

**Un-deployment details**: This section appears only if the model is undeployed either automatically by the system or manually. In the case of manual un-deployment, the person who initiated the un-deployment, along with the start and end timestamps of the process, is displayed.
