


# Agent Node: Frequently Asked Questions


## Language Models


### What types of language models are available on the Platform?

The Platform offers three types of language models:



* **System or Out-of-Box Integrations**: Includes models from providers like OpenAI, Azure OpenAI, and Anthropic.
* **Custom models (Bring Your Own Models)**: Allows users to bring their own models to the platform.
* **Fine-tuned XO GPT models**: Used for specific features like DialogGPT, Answer Generation, Query Rephrase, Rephrase Dialog Response, and Vector Generation.



### How do I configure out-of-box (OOB) integrations?

To configure OOB integrations:



1. Use your API keys for models such as OpenAI, Azure OpenAI, or Anthropic.
2. The platform offers various models, but you can also connect to new ones by entering the correct model names and API key.
3. The platform verifies these by calling the provider's endpoints.
4. OOB system models come with default prompts, while dynamically added models require custom prompts. 

[Learn more](../../generative-ai-tools/models-library.md).


### How do I set up a custom model (Bring Your Own Model)?

To set up a custom model, follow these steps:



1. Enter the integration name and model name (customizable to your preferences).
2. Provide the endpoint where your models are hosted and the required authentication and headers. Create a test prompt to verify the credentials.
3. The platform will validate the credentials and configure the model.
4. Once configured, the custom model can be utilized with tailored prompts for various GenAI and LLM features.

 [Learn more](../../generative-ai-tools/configure-llm-integration.md#custom-llm-integration).


### Are XO GPT models compatible with Agent Nodes?

No. XO GPT models are not compatible with Agent Nodes. You'll need to choose from other available system or custom models.


## Tools


### What are the tools in the Agent Node?

Tools are special capabilities you can give to language models that allow them to interact with external systems. They enable the LLM to reach beyond its own knowledge and interact with the outside world during a conversation.


### Which LLM providers support tool calling?

All major LLM providers support some version of tool calling, including:



* Anthropic
* Cohere
* Google
* Mistral
* OpenAI
* Azure OpenAI


### What are the key components of a tool?

There are five key components to creating and using tools:



* **Name**: A clear and descriptive name helps the LLM understand the tool's purpose.
* **Description**: The most crucial part; it explains what the tool can do, when to use it, and any limitations.
* **Parameters**: The specific pieces of information necessary for your tool to function.
* **Action Nodes**: The components that execute when the tool is called, including script nodes, service nodes, or search AI nodes.
* **Transitions**: Defines what happens after the tool executes, such as Default, Exit Out, or Jump to a Node.


### What transition options are available after a tool executes?

The Platform provides three options:



* **Default transition**: Sends the output back to the language model for incorporation into the conversation.
* **Exit Out**: The agent node completes, and the flow advances to the next node in your dialog.
* **Jump to a Node**: Redirects the conversation flow to a specific node within your dialog.


## Prompts


### What types of prompts does the Platform offer?

The Platform offers two main categories of prompts:



* **System or Default Prompts**: Ready-made prompts for each feature come with the platform.
* **Custom Prompts**: These prompts you create yourself, tailored to your specific needs.


### What versions of custom prompts are available?

For the agent node specifically, there are two different versions of custom prompts:



* **Version 1**: Enables multi-turn conversations with or without tools (using a more traditional prompt structure).
* **Version 2**: A newer, more advanced prompt framework that supports tools (enhances accuracy and simplifies agent development).


### Can I use tool calling with system prompts?

No, all system prompts for the agent node are categorized under Version 1 and do not permit tool-calling capabilities. If you require those advanced features, you must create a custom prompt.


### How do I create a custom prompt?

To create a custom prompt:



1. Go to the Prompts Library.
2. Choose to create a New Prompt.
3. Decide whether to start fresh or use a template.
4. Select the appropriate version based on your needs.
5. Use the editor to craft your instructions.
6. Define the necessary output keys and test your prompt. 

[Learn more](../../generative-ai-tools/prompts-library.md).


## Agent Node Components


### What are the main components of an Agent Node?

The main components of an Agent Node include:



1. **Language Model Selection**: Select the model that will power your agent node.
2. **Prompts**: Guidelines that direct your language model's behavior and responses. **System Context**: Defines your agent's role, communication style, and operational parameters.
3. **Entities**: Information that your agent needs to gather from users.
4. **Business Rules**: Guidelines that your agent must follow when interacting with users.
5. **Tools**: Allow your LLM to engage with external resources.
6. **Exit Scenarios**: Specify when to alter direction in the conversation.
7. **Pre/Post-Processor Scripts** offer greater control over your agent's behavior.


### What is system context?

System context is your agent's comprehensive framework that defines:



* Identity and purpose
* Behavioral guidelines
* Processing parameters
* Role and communication style
* Knowledge domains
* Response patterns and decision-making
* Operational workflows
* Context evolution throughout conversations


### What are business rules?

Business rules are guidelines your agent follows when interacting with users. They define:



* The scope of what your agent can and should do.
* Validation logic and process requirements.
* Data quality standards.
* Compliance with organizational policies.


### What are exit scenarios?

Exit scenarios refer to conditions that enable you to determine when the conversation should take a different path, such as:



* When a user expresses frustration.
* When you've gathered enough entities to proceed.
* When a user explicitly requests to end the conversation.
* When a user provides invalid information multiple times.
* When a user asks to speak with a human agent.


## Version Differences


### What's the difference between Version 1 and Version 2 prompts?



* **Version 1**: The legacy prompt system functions effectively for straightforward tasks but has certain limitations. It supports both tool calling and text generation.
* **Version 2**: The newer system is designed around tool calling functionality. It integrates better with other systems and manages more complex workflows. However, it only works with JavaScript prompts, not JSON mode.


### How does entity collection differ between Version 1 and Version 2?



* **Version 1**: Requires separate definitions of entity collection logic and manages the complexity of mapping entities to business processes.
* **Version 2**: Integrates entity collection directly into the tool-calling framework. Instead of juggling separate systems, you define custom tools with parameters that naturally capture the entities needed.


### What types of tools does Version 2 include in its prompts?

Version 2 provides two types of tools:



1. **System tool**: Included by default. Includes "End_Orchestration" to help the platform understand when to end the conversation with the language model.
2. **Custom tools**: Entirely defined by you based on your specific use cases.


## Implementation


### How does the execution flow work with pre and post-processor scripts?

When configuring pre- and post-processor scripts at both the node and prompt levels, the execution order is: Node Pre-processor → Prompt Pre-processor → Prompt Execution → Prompt Post-processor → Node Post-processor.


### Can I import templates for custom prompts?

Yes, the Platform provides templates that you can use as a starting point. Version 2 includes a template specifically designed for GPT-4o, which comes pre-configured with a post-processor script and all the necessary output keys.


### How does the conversation history function with Agent Nodes?

You can configure the duration of the conversation history, which determines how many of the most recent messages exchanged between the user and the AI Agent are sent to the language model. This allows the model to maintain context throughout the interaction.


### How can I test my custom prompt?

After setting up your prompt and entering test values for any variables, click "Test" to verify if the structure aligns with expectations. This will display the response from the language model and assist you in debugging any issues.
