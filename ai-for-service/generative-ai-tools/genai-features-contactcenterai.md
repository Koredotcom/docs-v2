
# Generative AI Features - Contact Center AI



Utilize generative AI features to supercharge your AI Agent with powerful tools that enhance productivity, enable natural conversations, improve intent detection, analyze customer sentiment, and support agent performance, all working together to create seamless end-user experiences through intuitive design.

### Model Feature Matrix

The following table displays the features and the supported models.

(✅ Supported | ❌ Not supported)


| Feature | Azure OpenAI Model(s) | OpenAI Model(s) | Custom LLM | XO GPT |
|:--|:--|:--|:--:|:--:|
| Agent Response Rephrasing | ❌ | ❌ | ❌ | ✅ |
| Conversation Summary | ❌ | GPT-3.5 | ✅ | ❌ |
|Disposition Prediction for Agent Wrap-Up|GPT-4o and GPT-4o mini|GPT-4o and GPT-4o mini|✅ | ❌ |
| Sentiment Analysis | GPT-4o | GPT-4o | ✅ | ❌ |




### Agent Response Rephrasing

Agents will be able to choose the LLM to rephrase their responses in the following tones.



* **Formalize**: Enables agents to enhance the formality of their writing, making it suitable for business or other formal contexts.
* **Friendly**: Offers suggestions and improvements to promote a friendly and approachable tone in text.
* **Expand**: Enables agents to enhance the formality of their writing, making it suitable for business or any other formal setting.
* **Rephrase**: Allows agents to elevate the formality of their writing, making it suitable for business or any other formal context.



### Conversation Summary

Generate LLM-based summaries of conversations that have transpired up to that moment. This can be triggered upon arrival at a conversation with an agent, transfer of conversation between agents, and at the wrap-up of a conversation, providing comprehensive wrap-up summaries. [Learn more](../contactcenter/configurations/settings/llm-based-conversation-summary.md).

### Disposition Prediction for Agent Wrap-Up

Use an LLM to analyze the full conversation transcript and disposition metadata, then automatically recommend the most appropriate wrap-up code to the agent at the end of a customer conversation. Agents can accept or override the recommendation, which improves accuracy and reduces wrap-up time. [Learn more](../console/interacting-with-customers.md#intelligent-disposition-code-suggestions).



### Sentiment Analysis

Agents will be able to monitor customer sentiment dynamically during active chat conversations. When enabled, this feature displays a sentiment indicator that updates in real-time based on ongoing analysis of the conversation. [Learn more](../contactcenter/configurations/settings/real-time-sentiment-analysis.md).

