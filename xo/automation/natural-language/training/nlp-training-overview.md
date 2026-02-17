[ :octicons-arrow-left-24: Back to NLP Topics](../../../nlp-topics.md)

# NLP Training 

NLP  Training ensures that app meet the designated business case requirements. NLP Training to achieve the best results requires leveraging the features on the Platform. The NLP Engine is the core component that interprets what users say at any given time and converts that language to structured inputs the system can process.

The Platform employs NLP engines for Machine Learning, Fundamental Meaning, Knowledge Graph, Traits, and intents ranking to handle complex use cases. 

## The NLP Training Process

Morphology is the underlying principle behind NLP. Morphology is the study of words, how they are formed, and their relationship to other words in the same language. It analyzes the structure of words and parts of words, such as stems, root words, prefixes, and suffixes. Morphology also looks at parts of speech, intonation, and stress, and the ways the context can change a word’s pronunciation and meaning.

Based on this, a user utterance undergoes the following preprocessing before an attempt at entity extraction and intent detection:

* **Tokenization** – Splitting of utterances into sentences (Sentence tokenization) and Splitting of Sentence(s) into words. Kore.ai NLP uses TreeBank Tokenizer for English. Each language might have its own tokenizer.
* **toLower()** – Convert all the text into lower (Not done for German, since the word meaning changes based on the case). This process is done only by ML and KG engines.
* **StopWord removal** – Each language has its own set of stop words that can be edited by the developer. Removes words that may not contribute to improving the learning. This process is done only in ML and KG engines. This setting is optional, but is disabled by default.
* **Lemmatization or Stemming** depending on the language 
    * **Stemming** – Retains the stem of the word like “Working”-> ”work”, “Running”-> ”Run”, “housing”-> "house”. It basically cuts the words. The output word may not be a valid language word.
    * **Lemmatization** – Converts the word to its base form using the dictionary. Like in earlier examples “Working”-> ”work”, “Running”-> ”Run” however,  “housing”-> ”house”. 
* **N-grams** – Helps in combining co-occurring words. For example, “New York City” and “Internet Explorer”. Each word has its own meaning. But when we take tri-gram in the first case and bi-gram in the second case, it actually results in a more meaningful word. N-grams also help in getting some context before or after a word.

### Scoping

The first step in NLP training is to define the scope of the app, narrowing down the problem the Virtual Assistant will need to solve. This helps in configuring the various training nuances you will require. This involves brainstorming sessions with various stakeholders like SMEs/BAs, Conversation Experience Designers, app Developers, NLP Analysts/Data Engineers, NLP Trainers, and Testers.

The basic guidelines we suggest to keep in mind while scoping the app are the following:

* **Start with a problem to solve**: Get a clear idea of what the app is supposed to accomplish. Talk to business analysts and app developers to understand the requirements and the actual functionality of the Virtual Assistant.
* **Create a list of Intents**: This will streamline the entire process
    * For each intent, identify the key results that the app is aiming to accomplish;
    * The focus should be on the needs of the user, not the platform requirements.
* **Detail out example conversations**: Both user utterances and responses
    * Create user personas and think about the conversations they might engage in with your app. 
    * Think through edge cases, follow-ups, and clarifying questions;
    * You can leverage the Storyboard feature of the platform if it has not been already used for the app development phase.
* **Brainstorm what an end user might ask as part of achieving their intent**: These would be the alternate utterances for every intent. Try to also include idioms and slang.

## Primary NLU Engines 

The Platform offers the following primary NLU engines for app training and optimization:

* Machine Learning (ML)
* Fundamental Meaning (FM)
* Knowledge Collection  / Knowledge Graph (KG)
* Traits Engine
* Ranking and Resolver

When do you use each engine? Each of these engines has settings and configurations for [Optimizing NLP to Improve app Performance](#nlp-optimization-within-the-platform){:target="_blank"}. Here we will list out guidelines and scenarios to leverage each type of NLP engine.

### Machine Learning Engine

Machine Learning (ML) is the recommended engine for training a app. The reason for this is its flexibility and auto-learn feature. Given a few examples, the engine learns and is capable of understanding similar new utterances. The training utterances need not be full sentences, as the ML can learn from phrases too.

If you have a large corpus for each intent that you are planning to implement, then use Machine Learning. If you don’t have a corpus it would be a good idea to develop one. In the long run, it is better to spend time building a large corpus and use ML rather than going for the other less time-consuming, easier options.

The way you define a large corpus could differ depending on the intents. For example, if the intentions are very different from each other and can be understood using their sample data like “Find Flight” or “Change Sear“, then a corpus of 200-300 for each intent is sufficient. However, if intents are closer to each other and usually start with a similar utterance, such as “Change Seat” and “Change Flight”, then the corpus should be in 1000s.

Similarly, if you are planning to use Deep Neural Networks, you need a higher number of samples for better predictions of both True Positives and True Negatives, as these networks are data-hungry. [Learn more](machine-learning-engine.md){:target="_blank"}.

### Knowledge Graph Engine

If your intents are more query-like in nature than transactional tasks or if the content is in documents and you want the app to answer user queries from documents, then use Knowledge Collection. This engine can also be used to trigger dialog tasks in response to user queries thus incorporating other features available within the Platform.

If you have a lot of Intents and do not have time to prepare alternate utterances, but you are able to manually annotate some important terms, use Knowledge Collection. It is advisable to spend some time building a corpus and going for Machine Learning since annotation in the Knowledge Graph works in a similar way to ML’s auto-learning process. [Learn more](../../knowledge-ai/knowledge-graph-overview.md){:target="_blank"}.

### Fundamental Meaning Engine

If you have cases where users employ idiomatic sentences or command-like sentences or if you are not too strict about some false positives then use the Fundamental Meaning (FM) engine. [Learn more](fundamental-meaning.md){:target="_blank"}.

## NLP Optimization within the Platform

To get started optimizing your app’s NLP, you need to select the app you’re working with, then access  **Natural Language**. The NLP options are categorized under various headings for your convenience:

* **Training** – In the Training section, you can define how the NLP interpreter recognizes and responds to the user input for a app, and then train the interpreter to recognize the correct user intent.
* **Engine Tuning** – In this section, you can define the recognition confidence levels required for minimum recognition actions, the confidence range for asking a user to choose from a list of possible matches, and a recognition confidence level for a positive match for the knowledge graph.
* Modify **Advanced Settings** like auto training settings for user utterances and negative intent patterns.