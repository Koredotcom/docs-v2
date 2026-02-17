# Introduction to Generative AI Tools

The AI for Service offers a comprehensive solution for integrating Generative AI capabilities into conversational AI Agents. By leveraging the Platform's Generative AI capabilities, users can create powerful, engaging, and human-like conversational experiences for their end-users.

**Pre-built Integrations**

The Platform seamlessly integrates with leading AI services, including OpenAI, Azure OpenAI, and Anthropic.
These pre-built integrations come with pre-configured prompt templates, allowing users to quickly access their core capabilities while maintaining a standardized structure. Users can also create custom prompts tailored to their specific needs.

The pre-built integration framework also supports newly launched language models with required authentication, ensuring immediate availability. Users can integrate the models and create custom prompts for immediate use.

**Bring Your Own (BYO) Model Framework**

In addition to the out-of-the-box integrations, the Platform supports a bring-your-own (BYO) model framework. This allows the Platform users to integrate with externally hosted models by third parties as well as models hosted by enterprises themselves. The framework enables the creation of custom prompts optimized for specific purposes and models, working seamlessly with the Platform's Auth Profiles module. It enables enterprises to use their preferred authentication mechanism.

**Kore.ai XO GPT Models**

The new Kore.ai XO GPT Models module provides fine-tuned large language models optimized for enterprise conversational AI Agents. These models have been evaluated and fine-tuned to be accurate, safe, and efficient for production deployment. For more information, see [Kore.ai XO GPT](xo-gpt-module.md).




To configure Generative AI and LLM, go to **Product Switcher** > **Generative AI Tools** or click the Generative AI Tools icon in the left-side menu.

<img src="../images/genai-home.png" alt="Models-Library" title="Models-Library" style="border: 1px solid gray; zoom:70%;">



## Key Features

The Integration of Generative AI and LLM enables the following features:


* Model Library: Connect to Generative AI models of your choice using the out-of-box integrations (pre-built LLM integration) or custom integrations or XO GPT Module.

* Prompts Library: Complete flexibility to create fully customized prompts optimized for particular use cases using pre-built or custom models.

* [Automation AI Features](genai-features.md#automation-ai-genai-features)
* [Search AI Features](genai-features.md#search-ai-genai-features)
* [Agent AI Features](genai-features.md#agent-ai-genai-features)
* [Contact Center AI Features](genai-features.md#contact-center-ai-genai-features)
* [Quality AI Features](genai-features.md#quality-ai-genai-features)


* Safeguards:
    * **Data Anonymization**: Protect Personal Identifiable Information (PII) and Sensitive Data shared to LLMs in GenAI Features.
    * **Guardrails**: Ensure the safety and appropriateness of LLM responses using the Guardrails.

## Benefits

All these features benefit an AI Agent developers, NLP developers, and testers as follows:

* Being able to select among XO GPT or custom or pre-built LLM integrations.
* Developers can create dialog tasks on the fly through the prebuilt Dialog Tasks Flow.
* Developers can unlock the power of Generative AI with their prompts, enabling them to build creative and custom use cases.
* Mundane tasks like generating dialog tasks or training utterances are automated to help developers be more productive and focus on other important tasks like enhancing conversation design, creating complex test cases, and more.
* Testers can ensure that their intent descriptions are meaningful in the right context to generate the right content.
* The Platform provides suggestions and nudges developers in the right direction for the better design and development of an AI Agent. For example, it offers curated use case suggestions while[ creating an AI Agent](../getting-started/guided-onboarding.md), including probable user inputs (simulating end-user behavior) in[ Conversation Testing](../automation/testing/regression-testing/conversation-testing/conversation-testing-landing-page.md). This way, the AI Agent can simulate the end user’s behavior at every conversation step and respond more realistically by considering error scenarios, digressions, and contextual changes.
* Allows enterprises and advanced users to bypass the Platform’s pre-built integrations. They can establish customized connections to large language models and optimize prompts and requests for their specific use cases.


## Important Considerations

### Language Support

LLMs can now generate responses in app languages that LLMs also support. To learn more about managing languages for an AI Agents, click [here](../app-settings/language-management/managing-languages-for-multilingual-vas.md).

### Data Sharing

LLM and Generative AI features involve data sharing with third-party LLM providers, such as OpenAI, Azure OpenAI, Claude, and others.

## Next Steps

1. Integrate a [pre-built or custom LLM or XO GPT](models-library.md) in models library. 
2. Create [ New Prompts](prompts-library.md) in the prompts library.
3. Enable[ GenAI Features](genai-features.md).
4. (Optional) Enable [Data Anonymization](data-anonymization.md) and [Guardrails](guardrails.md).
