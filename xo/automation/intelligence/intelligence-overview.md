[ :octicons-arrow-left-24: Back to NLP Topics](../../nlp-topics.md)


# Intelligence Overview

The best, most memorable AI Agent have conversation flows that feel natural and human-like. 

Natural conversations, however, often tend to go beyond the pre-defined and linear intent resolution paths that seem inherent in most AI Agents. To further complicate this, users often fail to follow a task to its logical conclusion before initiating another, which means that the AI Agent must be able to guide the conversation in the new direction the user wants to go to achieve the desired result. i.e., without losing the original context of the conversation.

The XO Platform empowers your AI Agents to handle such nuances of human conversations, including interruptions, clarifications, and more. 

Below is an overview of the intelligence management features available within the XO Platform.

## Dialog Management

Dialog management features include the following:

* **Handling of interruptions and context switching** – The Platform provides you with granular control over hold and resumes functionality at the app, task, and node levels. [Learn more](./conversation-management/manage-interruptions.md){target="_blank"}.
* **Allowing users to modify entity values** – Very often users would want to amend the entity values, you can ensure that the AI Agent responds to such situations and control the post-amendment dialog behavior. [Learn more](../natural-language/nlu-configurations/amend-entities.md){target="_blank"}.
* **Enabling the detection of multiple intents** – The ability of the NLP engine can be enhanced to detect and execute multiple intents identified in a single user utterance. [Learn more](../natural-language/nlu-configurations/multi-intent-detection.md){target="_blank"}.
* **Ignoring some words from user utterances** –  When words and phrases in user input that are not helpful in task interpretation are marked, then AI Agents can respond faster to user input and improve the probability of correct task recognition. [Learn more](./conversation-management/ignore-words-and-field-memory.md){target="_blank"}.

## Context Management

AI Agents are inherently stateless, but conversations between people can differ greatly based on their relationship and how much they know about each other. Because of this, as a developer, you struggle to keep track of different variables while maintaining the context and natural flow of a conversation.

Kore.ai allows you to capture and reuse contextual data for a large variety of scenarios, so you can create more complex use cases and redefine the enterprise customer experience.

* The Platform handles complex and diverse **content switching** scenarios in an effective and efficient manner. You can enable or disable context switches and add conditional exceptions between tasks with the ability to pass contextual data between them. [Learn more](context-management.md){target="_blank"}.
* When you create tasks, you can access **Session Variables** provided by the Platform, or custom variables that you define, as well as the context that defines the scope of the variable. [Learn more](../use-cases/using-session-and-context-variables.md){target="_blank"}.

## Sentiment Management

Trigger conditional flows and steer user-AI Agent conversations with [Sentiment Analysis](./sentiment-management/sentiment-management-overview.md){target="_blank"} and [Tone Processing](./sentiment-management/tone-analysis.md){target="_blank"}.

AI Agents built with Kore.ai analyze the emotional state of users and callers and model their response to provide excellent service.
