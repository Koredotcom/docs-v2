# Add an External Model using API Integration

You can connect an external model to Platform using API integration. This feature extends the Platform's functionality by allowing you to bring in models from external sources.

## Add an External Model

The steps to add an external model using API integration are given below:

1. In the top navigation bar, click **Models**, and then select the **External Models** tab.
<img src="../images/navigating-to-external-models1.png" alt="Navigating to External Models" title="Navigating to External Models" style="border: 1px solid gray; zoom:80%;"/>

2. Click **Add a model**. The **Add an external model** dialog is displayed.

3. Select the **Custom integration** option to connect models via API integration, and click **Next**.

4. On the **Custom API integration** dialog, enter the **Connection name** and **Model endpoint URL**.  
<img src="../images/custom-api-integration-general-details.png" alt="Custom API Integration General Details" title="Custom API Integration General Details" style="border: 1px solid gray; zoom:80%;"/>

5. Select the **Authorization profile** you want to use with the request payload from the configured options on the **Settings** console. [Learn more](../../settings/security-and-control/authorization-profile.md){:target="_blank"} about Auth Profiles. To proceed without authentication, choose ***None*** which is the default selection.
<img src="../images/set-auth-profile-parameter.png" alt="set auth profile" title="set auth profile" style="border: 1px solid gray; zoom:80%;"/>

6. In the **Headers** section, specify the headers such as **Key** and **Value** that need to be sent along with the request payload. 

7. In the Model configurations section, select one of the following options to define your model’s API behavior:

    * [**Default**](../external-models/add-an-external-model-using-api-integration.md#option-a-default) – Manually define variables, request body, and JSON path mappings for models.
    * [**Existing Provider Structures**](../external-models/add-an-external-model-using-api-integration.md#option-b-existing-model-provider-structures) – Automatically apply pre-defined schemas to map requests and responses.

8. Click **Confirm** to save the details and add the external model to the list. Or, click **Save as Draft** to save the model. The status will be updated to *Draft*.

### Option A: Default
      
By selecting this option, you can define the variables, request body code, and a test response from the model. 
      
<img src="../images/select-default.png" alt="select default" title="select default" style="border: 1px solid gray; zoom:75%;"/>

**Variables**: Provide the variables that you want to use in the request payload, including:

  * **Prompt variables**: The Prompt variable tab is set to mandatory by default. You can Turn ON the toggle for the System prompt and examples if required.
    <img src="../images/prompt-variables-add.png" alt="prompt variables" title="prompt variables" style="border: 1px solid gray; zoom:75%;"/>
  * **Custom variables**: (Optional) To add custom variables, click the Custom variables tab and click **+ Custom variables**.
    <img src="../images/custom-variables-add.png" alt="add custom variables" title="add custom variables" style="border: 1px solid gray; zoom:75%;"/>
    On the **Add Custom Variable** dialog, enter the **Variable name** and **Display name**, and select the **Data type**.

    <img src="../images/add-custom-variable.png" alt="custom variable form" title="custom variable form" style="border: 1px solid gray; zoom:50%;"/>
      
**Body**: The request body must include the model’s relevant parameters, which you must define manually. For dynamic variable mapping, use <code>{{variable}}</code>. Ensure the body is in the correct format, as shown in the screenshot below; otherwise, the API testing won't work.

  <img src="../images/body-parameters.png" alt="request body" title="request body" style="border: 1px solid gray; zoom:75%;"/>

**Test Response**: The response created for the configured LLM service appears here. To provide a test response from the model, click **Test**. In the **Sample Input** dialog, enter the Prompt, System prompt, and Examples in the respective fields, and click **Confirm**.
These inputs are used to test the connection and receive a response from the model.

  <img src="../images/sample-input-dialog.png" alt="sample input" title="sample input" style="border: 1px solid gray; zoom:75%;"/></ul></ul> 
 
Once the response is generated, you must configure the **JSON path** to capture the Output path, Input tokens, and Output tokens, as follows:

  * **Output Path**: When you interact with the model, you send a request in a specific format and receive a response in a corresponding format, often as a large JSON object. As a user, you are mainly interested in extracting the model’s answer from this response. The *output path* refers to the location or key within the JSON where the model’s main output is stored. Knowing this path is essential, especially in the prompt playground, as it tells you exactly which key to map to populate the response in the playground box. For example, in the sample response below, the output path is `choices[0].message.content.` 
  <img src="../images/output-path-entry.png" alt="output path" title="output path" style="border: 1px solid gray; zoom:75%;"/>

  * **Input Tokens**: Input tokens are fed into the LLM for processing. For example, `usage.prompt_tokens` indicates the input tokens in the sample response below.
  <img src="../images/input-tokens-entry.png" alt="input tokens" title="input tokens" style="border: 1px solid gray; zoom:75%;"/>

  * **Output Tokens**: Output tokens represent the text generated by the LLM after processing a prompt. Like input tokens, they can range from a single character to an entire word, depending on the tokenization method. For example, `usage.completion_tokens` indicates the output tokens in the sample response below. 
  <img src="../images/output-tokens-entry.png" alt="output tokens entry" title="output tokens entry" style="border: 1px solid gray; zoom:75%;"/>

!!! note

    Tokens are the units of text data provided to or generated by an LLM. Depending on the tokenization method, a token may be as short as a single character or as long as a word. Across the product—in the playground, agents, and other areas—token usage is displayed for every model. For commercial models, this information is supplied by the provider. For open-source and fine-tuned models, ML calculates and displays them in the UI. For custom API integration models, where token calculation is not known, users can define which key in the response JSON corresponds to this information.

### Option B: Existing Model Provider Structures

Currently, external models added through custom API integration are limited to basic text generation because only minimal request/response structures are supported.

This prevents customers from utilizing these models for advanced scenarios, such as tool calling, structured outputs, and multimodal use cases. Without a comprehensive way to define request/response mappings, these models cannot be fully integrated across the platform.

This feature removes that limitation by:

* Allowing users to provide complete request/response definitions through the UI or OpenAPI specifications. 
* Supporting commonly known request/response schemas (such as, OpenAI Completions, Anthropic Messages, Google Gemini).

With the Default option, you must manually define the request payload variables, including the model’s static and dynamic body parameters, and generate the response for the configured LLM. In this section, however, you can enable the required features and choose an LLM provider to automatically map the request and response schemas to their standard API format.

**Model Features**: Easily enable or disable one or more of the following features to make the relevant model available within the modules that use the feature(s).

!!! note

    This configuration requires at least one feature to be enabled.  
    Users can enable any feature, but the model must support it. Otherwise, you may see unexpected behavior.

  * **Structured response**: Specifies that the model supports the generation of a structured response. Enabling this flag allows the model to be used for generating a structured output within [Prompts](../../prompts/using-prompt-studio.md#add-prompts){:target="_blank"} and [Tools Flow](../../ai-agents/tools/tool-flows/flows-overview.md){:target="_blank"}.
  * **Data generation**: Specifies that the model can be used for synthetic data generation for text-based tasks. Turning this flag on allows the model to be used for prompt generation in [Prompts Studio](../../prompts/using-prompt-studio.md#add-prompts){:target="_blank"}.
  * **Streaming**: Specifies that the model supports real-time, token-by-token generation for faster AI responses. Turning this flag on allows the model to be used for generating streaming responses within Agentic Apps.
  * **Tool calling**: Indicates whether the model supports tool calling. 
  
!!! note 
   
      This feature must be enabled for the model to be used in Agentic Apps. If tool calling is not enabled, the model cannot be used within Agentic Apps or for executing tool calls in the AI Text-to-Text node in workflow tools. 
  
  * **Support Tools**: Specifies if the model supports simple tool calling. Dynamic function or API calling by the LLM to perform actions or retrieve real-time data during generation.
  * **Parallel Tool Calling**: Specifies if the model handles parallel tool calls emanating from a single user request. 
  * **Modalities Support**: Specifies the modalities supported by the model. Enabling this flag allows the model to run Text-to-Text, Text-to-Image, Image-to-Text, and Audio-to-Text tasks for seamless downstream integration within the [Tools Flow](../../ai-agents/tools/tool-flows/flows-overview.md){:target="_blank"}.
  <img src="../images/model-features-list.png" alt="model features" title="model features" style="border: 1px solid gray; zoom:75%;"/>
 
**Body**: In this section, specify the **model name** to be included in the request body and select a provider to set the API reference. The platform uses this mapping to resolve the model’s request-response structure. The available options include:

  * **Anthropic (Messages)**:  Specifies that the selected model follows the request-response structure similar to [Anthropic’s Messages API](https://docs.anthropic.com/en/api/messages){:target="_blank"}.
  * **OpenAI (Chat Completions)**: Specifies that the selected model follows the request-response structure similar to [OpenAI’s Chat Completions API](https://platform.openai.com/docs/api-reference/chat){:target="_blank"}.
  * **Google (Gemini)**: Specifies that the selected model follows the request–response structure for Google’s Gemini API, enabling compatibility with Gemini-formatted requests and responses.
  <img src="../images/api-reference-model.png" alt="api reference" title="api reference" style="border: 1px solid gray; zoom:75%;"/>

## Manage Custom API Integrations

Once the integration is successful and the inference toggle is ON, you can use the model across the Platform. You can also turn inferencing OFF if needed.

To manage an integration, click the three-dot icon corresponding to its name and choose from the following options:  

 * **View**: View the integration details.
 * **Copy**: Make an editable copy of the integration details.
 * **Delete**: Remove the integration.

<img src="../images/three-dots-icon-options.png" alt="Three Dots Icon Options" title="Three Dots Icon Options" style="border: 1px solid gray; zoom:80%;"/>
