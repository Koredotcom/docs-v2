[ :octicons-arrow-left-24: Back to NLP Topics](../../../nlp-topics.md)

# Improving Performance – NLP Optimization

A chatbot’s ability to consistently understand and interact with a user is dictated by the robustness of the Natural Language Processing (NLP) that powers the conversation.

The Platform uses a unique Natural Language Processing strategy, combining Fundamental Meaning and Machine Learning engines for maximum conversation accuracy with little upfront training. Bots built on Kore.ai’s platform can understand and process multi-sentence messages, multiple intents, contextual references made by the user, patterns and idiomatic sentences, and more. [Learn more](../nlp-introduction.md){:target="_blank"}.

The NL engine includes recognition support for a wide range of entities and provides the tools needed to further customize your app’s language understanding using additional patterns.


## Optimizing your Assistant

To make sure your app is NLP-optimized, you can define, and refine names and terms used for your app to enhance the NLP interpreter accuracy and performance to recognize the right app task for the user.
You begin by defining synonyms at the task level, and then manage and refine synonyms, and test at the app level.

To get started optimizing your Assistant and tasks, you need to access the **Natural Language** options. These options are categorized under various headings for your convenience:

* **Training** – In the Training section, you can define how the NLP interpreter recognizes and responds to the user input for a app, and then train the interpreter to recognize the correct user intent.
    * **Machine Learning Utterances** – With Machine Learning, you can enhance recognition of user utterances for better recognition and system performance for the user intent which is the intended task that the user wants to access.
    * **Synonyms & Concepts** – You can use the Synonyms section to optimize the NLP interpreter accuracy in recognizing the correct intent and entity provided by the user.
    * **Patterns & Rules** – In the Patterns section, you can define slang, metaphors, or other idiomatic expressions for intent and entities.

* **NLU Config** – In this section, you can define the recognition confidence levels required for minimum recognition actions, the confidence range for asking a user to choose from a list of possible matches, and a recognition confidence level for a positive match for the knowledge graph.

## NLP Version 3

Version 10.0 of the Platform includes a new version of the NLP Engine (Version 3) that comes with many advantages:

* Improved performance and accuracy of Traits Engine.
* Improved accuracy using network types like Transformer and KAEN models for the English Language.
* Improved accuracy using the Transformer model for other languages.
* Improved the security of NLP by addressing several security vulnerabilities.
* Improved performance by enabling LLM & Generative AI.

In addition, it allows you to explore the latest features like [Zero-shot Model](machine-learning-engine.md){:target="_blank"}, [Few-shot Model](machine-learning-engine.md#few-shot-model-koreai-hosted-embeddings){:target="_blank"}, and [Intent Discovery](../../tools/intent-discovery.md){:target="_blank"}.

The new VAs will automatically use the new version by default. As of January 21, 2024, existing VAs are already migrated to Version 3, and the Platform no longer supports Version 2.

On-Premise customers can run both versions in parallel or switch directly to Version 3.

You can start optimizing your app, by:

* [Customizing the ML engine](machine-learning-engine.md){:target="_blank"}
* [Customizing the KG engine](../../knowledge-ai/knowledge-graph-training.md){:target="_blank"}
* [Customizing the FM engine](fundamental-meaning.md){:target="_blank"}
* [Customizing the Traits engine](traits.md){:target="_blank"}
* [Customizing the RR engine](ranking-and-resolver.md){:target="_blank"}