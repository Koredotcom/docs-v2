


# About LLM Integration

The Platform enables you to configure and integrate with leading LLM providers, bring-your-own (BYO) models, and the Kore.ai XO GPT module to power your AI Agent's generative AI capabilities. This integration framework provides a comprehensive solution for enterprises to leverage language models while maintaining security, monitoring usage, and controlling costs.

## Integration Options

The LLM Integration framework supports multiple approaches to connect language models:

* **Pre-built Integrations**: Direct connections to Azure OpenAI, OpenAI, Anthropic, and Amazon Bedrock with out-of-the-box support.
* **Custom LLM Integration**: A flexible framework to connect any externally hosted or enterprise-hosted language model.
* **Kore.ai XO GPT**: Fine-tuned models optimized for enterprise conversational AI, including conversation summarization, query rephrasing, and dialog orchestration.


## Authorization


The Authorization step establishes a secure connection between the Platform and the selected LLM provider, such as Azure OpenAI, OpenAI, or Anthropic. During this step, you provide authentication details that allow the Platform to communicate with the provider’s APIs on your behalf.

| Provider     | Required Fields   | Description  |
| ------------ | ------ | -------- |
| Azure OpenAI | API Key, <br>User Sub-Domain, <br>Deployment ID | The API Key authenticates your Azure account. <br>The User Sub-Domain identifies your Azure resource endpoint. <br>The Deployment ID specifies the deployed model that the Platform connects to. |
| OpenAI       | API Key                                 | Authenticates your OpenAI account and grants access to models.  |
| Anthropic    | API Key                                 | Authenticates your Anthropic account and grants access to models.   |
|Amazon Bedrock|Access Key ID and Secret Access Key, <br>Region, <br>Model ID|The Access Key ID and Secret Access Key authenticate your AWS account. <br>The Region identifies the AWS service region. <br>The Model ID specifies the Amazon Bedrock model to connect to.|
|Custom LLM|Endpoint, <br>Authorization, <br><br>Headers|The Endpoint specifies the API URL for the LLM. <br>The Authorization field defines the authentication method or credentials. <br>The Headers field includes any additional key-value pairs required for the request.|


You can replace static authorization values with variables to keep credentials secure and reusable across environments. When you use variables, the Platform substitutes the actual values during runtime. This approach prevents exposure of sensitive information and simplifies updates when credentials change.

### Dynamic Variables

The Platform now enables seamless configuration of custom and pre-built LLMs, including newly launched ones, by allowing you to use content, context, and environment variables, including secure ones. Secure Variables, particularly for environment settings, function as smoothly as the current system ensures.


Key Advantages

* **Avoid Misuse of API Keys**: The system minimizes the risk of unauthorized access by utilizing secure environment variables for API keys. Properly configured permissions restrict visibility and usage to authorized applications or personnel only.


* **Rotate Your API Keys**: Regularly rotating API keys enhances security by limiting the risk associated with compromised keys. A well-defined rotation schedule ensures that even if a key is leaked, it becomes useless after a predetermined period.

Ensure all necessary variables are set up before configuring the LLM. For more details, see [App Variables](../app-settings/variables/using-bot-variables.md).


!!! note "Variable Access by Feature Type"

    * Runtime features can use content and environment variables.
    * Designtime features can use content, context, and environment variables.



The following table lists the fields you can configure as variables for each LLM provider.

| LLM Provider   | Fields Supported as Variables        |
| ------------------ | -------------- |
| Azure OpenAI   | API Key, Sub-Domain, Model Deployment IDs      |
| OpenAI        | API Key             |
| Anthropic      | API Key                 |
| Amazon Bedrock | IAM Role ARN, Amazon STS API, Amazon Resource Name (ARN), Endpoint, Headers(optional) |
| Custom LLM     | Endpoint, Authorization, Headers               |

You can use the variables to authorize the integration, as shown in the following examples.


=== "Pre-built LLM"


    For example, Azure OpenAI.  
    <img src="../images/azurellmdv1.png" alt="Dynamic Variables" title=" " style="border: 1px solid gray; zoom:70%;">

    In the next step, enter the sample values in the Test Connection pop-up. You can select the checkbox to save these values for future use.  
    <img src="../images/llmsampletestingdv1.png" alt="Dynamic Variables" title=" " style="border: 1px solid gray; zoom:70%;">


=== "Provider's New LLM"

    For example, Azure OpenAI. Refer [Provider's New LLM](configure-llm-integration.md#providers-new-llm). 
    <img src="../images/rrazureaddmodel.png" alt="Dynamic Variables" title=" " style="border: 1px solid gray; zoom:70%;">
 
    In the next step, enter the sample values in the Test Connection pop-up. You can select the checkbox to save these values for future use.  
    <img src="../images/llmsampletestingdv1.png" alt="Dynamic Variables" title=" " style="border: 1px solid gray; zoom:70%;">

=== "Amazon Bedrock" 

    <img src="../images/abr4.png" alt="Amazon Bedrock" title="Amazon Bedrock Test Payload" style="border: 1px solid gray; zoom:70%;">

=== "Custom LLM"

 
    <img src="../images/customdynamic.png" alt="Dynamic Variables" title=" " style="border: 1px solid gray; zoom:70%;">
   
    In the next step, you must enter the sample values for the endpoints and header values. Enter the test payload and then click **Test** to check the connection. You can also save the sample values and test payload using the check box.  
    <img src="../images/customvariable.png" alt="Dynamic Variables" title=" " style="border: 1px solid gray; zoom:70%;">
<hr>


## Manage Usage Limit

The LLM Usage gives you comprehensive visibility into LLM usage consumption and performance across AI for Service. You can track usage consumption, request volume, and median latency by module, model, and feature, with detailed breakdowns available in the Performance Analytics section. These insights help organizations monitor feature adoption, manage infrastructure costs, optimize AI capabilities, and make informed scaling decisions.

**LLM Usage Data Collection**

The Platform automatically captures usage data for pre-built models (OpenAI, Azure OpenAI, and Anthropic) regardless of the prompts used. For custom models and Amazon Bedrock models, you must map the Request and Response Token Keys in the custom prompts to enable tracking. Without this mapping, the Platform can't calculate consumption, which may result in unmonitored usage and unexpected costs.


Usage limits can be set during initial LLM integration or anytime after it's completion from more options. To track token consumption, enable the Token Usage Limit toggle and configure the following fields. 

To track token consumption, enable the Token Usage Limit toggle and configure the required settings. Usage limits can be set during initial model setup or anytime after configuration completion from more options.

### Set Token Limit 

* **Maximum Tokens**: Set the token usage limit for notification purposes. Exceeding this limit won't block usage but will trigger an alert.
* **Duration**: Set duration in days after which the token limit resets automatically. You can set a maximum duration of 90 days.
* **Schedule Start Date**: Set the date today onwards for the usage cycle.

### Enable Usage Notification

* **Usage Notification**: Enable the toggle to receive usage alert notifications when your usage reaches the defined threshold.
  
* **Send Notification at**: Set the threshold in percentage from the predefined or custom threshold. You can set a maximum of 5 alerts.
* **Send to Users**: Enter the email addresses of users who should receive the usage notification email.  
<img src="../images/token-usage-limit1.png" alt="token consumption" title="token consumption " style="border: 1px solid gray; zoom:70%;">






