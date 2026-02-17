# Prompt Node

The Prompt Node lets app developers leverage the full potential of LLM and Generative AI models to quickly build their own prompts. Developers can select a specific AI model, tweak its settings, and preview the response for the prompt. The node allows developers to creatively leverage LLMs by defining the prompt using conversation context and the response from the LLMs in defining the subsequent conversation flow.

## Node Behavior

### Runtime

You can work with this node like with any other node within Dialog Tasks and can invoke it within multiple tasks. During runtime, the node behaves as follows:

1. On reaching the Prompt Node, the platform parses any variable used in the prompt and constructs the request using the Prompt and the Advanced Settings.
2. An API call is made to the model with the request.
3. The [response is stored in the context object](#about-responses) as part of the dialog context and can be used to define the transitions or any other part of the app configuration.
4. The platform exits from the Prompt Node when a successful response is received, or the defined timeout condition is met.


## Enable the Node

By default, the feature/node is disabled. To enable the feature, see [GenAI Features](../../../../generative-ai-tools/genai-features.md).

## Add the Node

1. Go to **Automation** > **Dialogs** and select the task to which you want to add the Prompt Node.
2. Click **Gen AI** and then click **Prompt Node**. Alternatively, you can drag and drop the **Prompt Node** node to the required location on the canvas. For more information on adding nodes, see [different ways to add a node](../using-the-dialog-builder-tool.md){:target="_blank"}.
3. The Prompt Node window is displayed with the **Component Properties** tab selected by default.

    <img src="../images/canvas.png" alt="  " title="  " style="border: 1px solid gray; zoom:70%;">
    
## Configure the Node

### Component Properties

The settings made within this section affect this node across all instances in all dialog tasks.

<img src="../images/promptnodenew.png" alt="  " title="  " style="border: 1px solid gray; zoom:70%;">

* Provide **Name** and **Display Name** for the node and write your own OpenAI **Prompt**.

    * **Prompt**: A prompt allows you to define the request to be sent to the LLMs for generating a response. Some of the use cases for prompts include entity or topic extraction, rephrasing, or dynamic content generation. The prompt can have up to 2000 characters, and it can be defined using text, Context, Content, and Environment variables.
    * **Preview Response**: Check the preview of the OpenAI response for your prompt. When you click **Preview Response**, the Platform parses any variable used in the prompt and constructs OpenAI request using the Prompt and the Advanced Settings. If the response is not relevant, you can tweak the Prompt and the Advanced Settings to make the response better.


* Change the model and tweak its settings.

    Adjusting the settings allows you to fine-tune the model’s behavior to meet your needs. **The default settings work fine for most cases**. However, if required, you can tweak the settings and find the right balance for your use case.

    <img src="../images/genai-prompt(1).png" alt="  " title="  " style="border: 1px solid gray; zoom:70%;">

    * **Model**: The default model for which the settings are displayed. You can choose another supported mode if it’s configured. If you select a non-default model, it’s used for this node only. If you want to change the default model, you can select the model in the drop-down list and use the **Mark Default** option shown next to its name.
    * **Temperature**: The setting controls the randomness of the model’s output. A higher temperature, like 0.8 or above, can result in unexpected, creative, and less relevant responses. On the other hand, a lower temperature, like 0.5 or below, makes the output more focused and relevant.
    * **Max Tokens**: It indicates the total number of tokens used in the API call to the model. It affects the cost and the time taken to receive a response. A token can be as short as one character or as long as one word, depending on the text.

* Select the maximum wait time to receive a response from the LLM. 

    <img src="../images/genai-prompt(7).png" alt="  " title="  " style="border: 1px solid gray; zoom:70%;">

    * **Timeout**: Select the maximum wait time from the drop-down list. The timeout range can be any value between 10 to 60, the default being 10.

### Instance Properties

On the **Instance Properties** tab, you can configure the instance-specific fields for this Prompt Node. These settings are applicable only for this instance and will not affect any other instances of this node.

<img src="../images/genai-prompt(3).png" alt="  " title="  " style="border: 1px solid gray; zoom:70%;">

#### Custom Tags

In this section, you can add Custom Meta Tags to the conversation flow to profile AI Agent-user conversations and derive business-critical insights from usage and execution metrics. You can add tags for the following:

* **Message**: Define custom tags to be added to the current message in the conversation.
* **User**: Define custom tags to be added to the user’s profile information.
* **Session**: Define custom tags to be added to the current conversation session.

For more information on custom tags, see [Custom Meta Tags](../../../../analytics/automation/custom-dashboard/custom-meta-tags.md){:target="_blank"}.


### Connections Properties

!!! Note

    If the node is at the bottom in the sequence, then only the connection property is visible.

On the **Connections** tab, you can set the transition properties to determine the node in the dialog task to execute next. You can write conditional statements based on the values of any Entity or Context Objects in the dialog task, or you can use intents for transitions. See [Adding IF-Else Conditions to Node Connections](../node-connections/nodes-conditions.md){:target="_blank"} for a detailed setup guide.

<img src="../images/genai-prompt(2).png" alt="  " title="  " style="border: 1px solid gray; zoom:70%;">

!!! Note

    These conditions apply only for this instance and will not affect this node when used in any other dialog.  

The Connection Path property offers three default variants:

1. Not Connected - No specific next node is defined
2. End of Dialog - Explicitly ends the current dialog
3. Return to Flow - Terminates the Dialog Task and returns control to the Flow Builder. The Flow Builder resumes from the next node.
    * Enable the **Deflect to Chat** option to create conversation flows that transition from voice to chat-based interactions within the same context.
    It has two deflection types - ‘ Automation’ and ‘Agent Transfer’.  
    <img src="../images/deflect-to-chat1.png" alt="Deflect to Chat" title="Deflect to Chat" style="border:1px solid gray;zoom:70%;">


!!! Note

    Deflect to Chat works only with Kore Voice Gateway Channels (Phone number or SIP Transfer).


## About Responses

All the responses collected are stored in context variables. For example, `{{context.GenerativeAINode.PromptNodeName.text}}`. You can define transitions using the context variables.

The responses are captured in a specific format, as shown below.

```
"context":{
"GenAIPrompt": {
    "NodeName": {
      "id": "cmpl-7UbzLTumD9ALpfa1mcpf15dK3xxxx",
      "object": "text_completion",
      "created": 1687530223,
      "model": "text-davinci-003",
      "choices": [
        {
          "text": "\n\nI'm sorry, I'm not able to provide that information. However, I would be happy to direct you to a website that may provide the information you are looking for.",
          "index": 0,
          "logprobs": null,
          "finish_reason": "stop"
        }
      ],
      "usage": {
        "prompt_tokens": 58,
        "completion_tokens": 37,
        "total_tokens": 95
      },
      "1687530221473": [
        {
          "nodeId": "NodeName",
          "startTime": "2023-06-23T14:23:42.904Z",
          "endTime": "2023-06-23T14:23:46.029Z"
        }
      ]
    }
  }
}
```