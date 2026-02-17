[ :octicons-arrow-left-24: Back to NLP Topics](../../../nlp-topics.md)

# The Machine Learning Engine

Developers need to provide sample utterances for each intent (task) the app needs to identify, to train the machine learning model. The Platform Machine Learning (ML) engine will build a model that will try to map a user utterance to one of the app’s intents.

The Platform allows fully unsupervised machine learning to constantly expand the language capabilities of your app – without human intervention. Unlike unsupervised models in which AI assistants learn from any input – good or bad – the Platform enables assistants to automatically increase their vocabulary only when the app successfully recognizes the intent and extracts the entities of a human’s request to complete a task.

However, we recommend keeping Supervised learning enabled to monitor the app performance and manually tune where required. Using the Platform, developers can evaluate all interaction logs, easily change NL settings for failed scenarios, and use the learnings to retrain the app for better conversations.

This article discusses the processes behind the Machine Learning Engine, and how to perform training for optimum performance.

## The Machine Learning Process

### Intent Detection

The below diagram summarizes the intent detection pipeline for both training and prediction stages. For the training pipeline, the language detection and auto-correction are not run with the assumption that the trainer would be aware of the language in which training needs to be done and of the spellings to be used which might include domain-specific non-dictionary words like Kore, etc. 

<img src="../images/intent-detection.png" alt="intent detection" title="intent detection" style="border: 1px solid gray; zoom:75%;">

### Entities Extraction

Entity extraction involves identifying any information provided by the user apart from the intent that can be used in the intent fulfillment. Entities are of three types

1. **System entities** like date, time, color, etc are provided out-of-the-box by the Platform. It includes nearly 22-24 entities and these are recognized by the ML engine automatically with no training except for string & description entity types.
2. **Custom entities** are defined by the platform user's and these include the list of values – enumerated, lookup, and remote, regex expressions, and composite entities. These are also mostly auto-detected by the ML engine.
3. **NER or named entity recognition** needs the training to identify the same entity type for different entities e.g. source & destination cities for flight booking intent, both of which are city type entities and the engine needs the training to distinguish between the two. NER can be conditional random field-based or neural network-based. CRF is preferred since it works on lesser data and has a faster training time compared to the NN-based method.

The following diagram summarizes the NER entity extraction pipeline.

<img src="../images/entity-extraction.png" alt="entity extraction" title="entity extraction" style="border: 1px solid gray; zoom:75%;">

### ML Output

The ML Engine runs the classification against the user utterance and generates the following scores output which Ranking and Resolver uses for identifying the correct intent:

* **The probability Score** for each class/intent, can be interpreted as follows
    * Definitive Match/Perfect Match: If the probability score >0.95 (default and adjustable) 
    * Possible match: If the score is &lt;0.95%, it becomes eligible for ranking against other intents which may have been found by other engines.

* **The fuzzy score** for each of the traits/intents which are greater than the Threshold score(default is 0.3) – Fuzzy logic goes through each utterance of a given intent and compares it against the user input to see how close the user input and the utterance are. The scores are usually from 0-100 and can be interpreted as follows:
    * Definite Match/Perfect Match: If the score is above 95%(default  & adjustable) 
    * Possible match: If the score is &lt;95%, becomes eligible for Ranking against other intents which may have been found by other engines.

* **CR Sentences**– The ML engine also sends the top 5 ML utterances for each of those Intents which have qualified using the Threshold score. These 5 ML utterances are derived using the Fuzzy score. Ranking & Resolver uses these CR sentences to Rescore and choose the best of these utterances (compares each utterance against user input and chooses an utterance with topmost score)

### Limitations

Though the ML model is very thorough, it has its own limitations, as follows:

* In cases where sufficient training data is not available, the ML model tends to overfit small datasets and subsequently lead to poor generalization capability, which in turn leads to poor performance in production.
* Domain adaptation might be difficult if trained on datasets originating from some common domains like the internet or news articles.
* The ability to control and interpret are hard because, most of the time, they work like a black box, making it difficult to explain the results.
* Cost is high both in terms of resources and time.
* The above two points also result in maintenance or problem resolution being expensive (again both in terms of time & effort) and can result in regression issues.

Hence, ML engines augmented by FM engines would yield better results. One can train the app with a basic ML model, and any minor issues can be addressed using FM patterns and negative patterns for idiomatic sentences, command-like utterances, and quick fixes.

## Training the ML Engine

### Training Overview

The Machine Learning Engine builds a model, based on training through intent detection and entity extraction, as follows: 

* The **intent prediction** model is trained using statistical modeling and neural networks.  Intent classification tags the user utterance to a specific intent. The classification algorithm learns from the set of sample utterances that are labeled on how they should be interpreted. Training utterance preparation and curation is one of the most significant aspects of building a robust Machine learning model. 

* **Entity Detection** involves recognizing System Entities (Out Of the Box, Rule-based model), predicting Custom Entities (Custom-trainable Rules-based Model), and Named Entity Recognition (NER). System Entities are defined using built-in rules. However, using the NER approach, any named entity can be trained using Machine Learning by simply choosing the value from the ML training utterances and tagging them against the named entity. 

**Training the ML Engine involves the following steps:**

1. Choosing and gathering data that can be used as the training set,
2. Dividing the training set for evaluation and tuning (test and cross-validation sets),
3. Training a few ML models according to algorithms (feed-forward neural networks, support vector machines, and so on) and hyperparameters (for example, the number of layers and the number of neurons in each layer for neural networks),
4. Evaluating and tuning the model over test and cross-validation sets,
5. Choosing the best performing model and using it to solve the desired task.

The NLP module improves the performance by constantly validating the ML Engine and presents  actionable insights to resolve the conflicts in intent and entity training.

### Optimizing Intent Recognition

#### Adding Machine Learning Utterances

To add utterances to the Machine Learning Engine, please follow the steps below:

1. Open the app for which you want to add sample user utterances.
2. From the left menu, select the **Natural Language > Training** option.
3. By default, the tab with a list of all **Intents** would be displayed.
4. You can use the filter option to restrict the display items to **Dialog Intents, Sub Intent Dialogs** or **Sub-Intents**. You can also choose to **Include Hidden Tasks**. 
5. Click **Utterances > + Utterance** against the Intent for which you want to add the utterances. 

    <img src="../images/add-utterances-click.png" alt="add utterance" title="add utterance" style="border: 1px solid gray; zoom:75%;">

6. The user utterance page opens.

    Here is where you can enter the utterances. 

    !!! Note

        Utterances greater than 3,000 characters in length are not allowed.

    <img src="../images/enter-utterance.png" alt="enter utterance value" title="enter utterance value" style="border: 1px solid gray; zoom:75%;">

    !!! Note
   
        Utterances should be unique, but in the case of multiple intent models, the same utterance can be used across different models. Read more about multiple intent models below.

The negation of trained intents will be ignored by the Platform.

For example, consider a Travel Assistant trained on the _Book a Flight_ utterance. A user might say: _Your app takes me to the booking screen, but I don’t want to book a flight._ In this case, the _Book a Flight_ intent will not trigger.

#### Adding Entities for Named Entity Recognition

Apart from the intent, you can train your app to recognize the entities, if present, in the user utterance. For example, if the user says: _Book Flight from Hyderabad to Mumbai_ apart from recognizing the intent as “Book Flight” the source and destination of the flight should also be recognized. This can be achieved by marking the entities in the user utterance during training.

**You can mark entities in your utterances**, by selecting the entity value and clicking the corresponding entity name.

<img src="../images/mark-entities-in-utterances.png" alt="mark entities in utterances" title="mark entities in utterances" style="border: 1px solid gray; zoom:75%;">

The Platform will also try to identify and mark the entities. You have the option to accept or discard these suggestions. The Platform will identify the entities based upon:

* System entities;
* Static List of items – either enumerated or lookup;
* NER trained entities (from above).

For each of the entities thus marked, the confidence scores identified by the ML engine are displayed. This score is available only when the Conditional Random Field is selected as the NER model.

<img src="../images/utterance-display-confidence-score.png" alt="display confidence score for utterances" title="display confidence score for utterances" style="border: 1px solid gray; zoom:75%;">

Further, if you have enabled Entity Placeholders, the Platform will replace the entity values in the training utterance with entity name placeholders for training the ML model. Using actual entity values as well as multiple additions of an utterance with just a change in the entity value will have an adverse impact on the ML training model. The name of entities also starts contributing highly to the intent detection model.

#### Using Negative Patterns

Negative patterns can be used to eliminate intents detected by the Fundamental Meaning or Machine Learning models. [Learn more](fundamental-meaning.md#negative-patterns){:target="_blank"}.

## Training your Assistant

After you added user utterances, you should train the Kore.ai interpreter to recognize the utterances and the associated user intent. When you have untrained utterances in your app, the following message is displayed:

_“You have untrained utterances in your ML model. Train your app to update with all your utterances.”_

Click **Train**. A status bar is displayed to show progress for utterance training. When complete, the _Utterances trained successfully_ message is displayed. The user utterances are added to the Machine Learning Database. You can further configure the ML engine, identify the dummy intents when a user utterance contains the words that are not used in the app’s training i.e. vocabulary, [Learn more](../nlu-configurations/engine-tuning.md){:target="_blank"}.

Once you have trained your app, you can test it on the newly trained data. [Learn](../../testing/testing-your-bot-with-nlp.md){:target="_blank"} how to test your app.

### Auto-Training

By default, machine learning is automatically trained for any defined user utterances whenever a task is:

* Updated with a new
    * Task name or intent name,
    * Entity name or parameter name,
    * Entity type,
    * app name

* Published
* Suspended by the Admin.
* Deleted by the Admin.

On the Platform, when auto-train is in progress, a warning message that “_untrained user utterances cannot be identified_“ is displayed if you try to test the app before auto-train is complete.

To set up the **Auto Train** option, follow the steps below:

1. Open the app for which you want to modify the settings.
2. On the left navigation menu, click **Natural Language > NLU Config > Machine Learning**.
3. Select “_Yes, add the successfully identified user utterances to the ML training model (Unsupervised Training)”_ for the **Auto Training For Machine Learning** option.

    <img src="../images/auto-train-ML-section.png" alt="auto train machine learning" title="auto train machine learning" style="border: 1px solid gray; zoom:75%;">

## NLU Config (Engine Tuning)

To train and improve the performance of your Assistant, Threshold and Configurations can be specified for all three NLP engines – FM, KG, and ML. You can access these settings by navigating to **Natural Language** > **NLU Config**.

!!! Note

    If your app is multilingual, you can set the Thresholds differently for different languages. If not set, the Default Settings will be used for all languages.

The Threshold & Configurations for the ML engine are discussed in detail in the following sections.

### Machine Learning Model Configuration Overview

The Platform ver 6.3 upgraded its Machine Learning (ML) model to v3. This includes a host of improvements and also allows developers to fine-tune the model using parameters to suit business requirements. The developers can change parameters like stop word usage, synonym usage, thresholds, and n-grams, as well as opt between [Deep Neural Network](https://en.wikipedia.org/wiki/Deep_learning#Deep_neural_networks){:target="_blank"} or [Conditional Random Field-based](https://en.wikipedia.org/wiki/Conditional_random_field){:target="_blank"} algorithms for the [Named-Entity Recognition](https://en.wikipedia.org/wiki/Named-entity_recognition){:target="_blank"} model.

In v8.0 of the Platform, provision has been enabled to use the v5 of the ML intent model and externalize several hyperparameters. This can be achieved through the Advanced NLP Configuration. [Learn more](../nlu-configurations/engine-tuning.md){:target="_blank"}.

When the Multiple Intents Model is enabled, the ML Engine maintains multiple intent models for the app as follows:

* **App level Intent Model** containing all the Primary Intents of the app which includes Primary Dialog Intents, and Alert Task Intents.
* **Dialog Intent Models** – one for every primary dialog intent and sub-dialog intent which includes the Sub-intent nodes added to the dialog definition, Sub-intents scoped as part of the Group nodes and Interruption exceptions added to the dialog definition.

You can configure the Thresholds and Configurations separately for each of the intent models using the **NLU Config** feature. This includes:

* All the configurations under Thresholds and Configurations – ML Engine as discussed in the below section;
* All the ML Engine configurations under the Advanced NLP Configurations discussed [here](../nlu-configurations/engine-tuning.md){:target="_blank"}.

#### The Multiple Intent Model

Training of “similar intents” with different purposes is usually difficult as the training given for an intent can add noise or conflict with the training given to the other intent. This is more evident in cases where the intents have a contextually different meaning or purpose.

Consider the following case: A user is in the **Make a Booking** task, so any query related to the Booking refund policy should be answered within this context. However, the query can also trigger FAQs from **Cancel a Booking**. 

<img src="../images/multiple-intent-model-example.png" alt="multiple intent model example" title="multiple intent model example" style="border: 1px solid gray; zoom:55%;">

Enabling the Multiple Intent Models from the [Advanced NLP Configurations](../nlu-configurations/engine-tuning.md){:target="_blank"} allows you to have a dedicated ML model only for the primary intents and separate ML Models for each of the dialogs with their associated sub-intents so that the intent detection of sub-intents gets preferential treatment.

Continuing with the above example, with a Multiple Intent Model, you can define a separate _context-based_ FAQ and ensure a proper response to the user.

<img src="../images/context-based-faq.png" alt="context-based faq" title="context-based faq" style="border: 1px solid gray; zoom:75%;">


All the primary intents of the app will be part of the **Bot Level Intent Model**. Each of the Dialog tasks will have its own ML Model consisting of all the sub-intents added to it. The Thresholds and Configurations can be individually configured for each of the models. For example, the Bot Level Intent Model can use ‘Standard’ Network Type and a specific Dialog’s intent model can use ‘LSTM’ Network Type.

### Configuring Machine Learning Parameters

The Platform provides language-wise defaults for the following parameters related to the ML performance of your app. You can customize them to suit your particular needs.

<img src="../images/ml-thresholds-default-parameters-access.png" alt="ml thresholds default parameters" title="ml thresholds default parameters" style="border: 1px solid gray; zoom:75%;">

!!! Key Pointers on ML configurations

    * The illustration below shows the list of all possible configurations and these are available for both single and multiple intent models.

    * When the multiple intent model is enabled, you can configure the individual models by selecting the Configure link against the model.

    * While there is only one app level intent model, you can add multiple dialog intent models using the Add New button and configure each as per your requirements.

    * Advanced ML Configurations can be applied from here or from the Advanced NLP Configurations section.

    <img src="../images/advanced-ml-configurations-section.png" alt="advanced ml configurations" title="advanced ml configurations" style="border: 1px solid gray; zoom:75%;">

#### Network Type

You can choose the Neural Network that you would like to use to train the intent models. This setting has been moved to Machine Learning from Advanced NLP Configurations in v8.1.

You can choose between the following types. Based on the selection additional configurations can be done from the Advanced NLP Configurations section. [Learn more](../nlu-configurations/engine-tuning.md#network-type){:target="_blank"}.

* **Standard.**
* **MLP-BOW** – The bag-of-words model is a simplifying representation used in natural language processing and information retrieval. In this model, a text is represented as the bag of its words, disregarding grammar and even word order but keeping multiplicity.
* **MLP-WordEmbeddings** – Word embedding is the collective name for a set of language modeling and feature learning techniques in natural language processing where words or phrases from the vocabulary are mapped to vectors of real numbers.
* **LSTM** (Long Short-Term Memory) is an artificial recurrent neural network (RNN) architecture used in the field of deep learning. LSTM has feedback connections and hence has the ability to capture long-term dependencies for texts of any length and is well suited for longer texts.
* **CNN** (convolutional neural networks) is a class of deep neural networks in deep learning most commonly applied to analyzing visual imagery. It makes use of the word order for a specific region size and has achieved remarkable results on various text classification tasks.
* **Transformers** use a Universal Sentence encoder in the vectorization stage of the Training pipeline. The output of the sentence encoder is fed to a Multi-Layer perceptron network for training. SentenceEncoder has an inbuilt capability of understanding the semantic similarity between sentences taking into account the synonyms and various usage patterns of the same sentence. 
   
    The Universal Sentence Encoder encodes text into high-dimensional vectors that can be used for text classification, semantic similarity, clustering, and other natural language tasks. The model is trained and optimized for greater-than-word length text, such as sentences, phrases, or short paragraphs. It is trained on a variety of data sources and a variety of tasks with the aim of dynamically accommodating a wide variety of natural language understanding tasks. The input is the variable-length English text and the output is a 512-dimensional vector.

* **KAEN** (Kore Advanced Embeddings Network) – Models trained with Sentence Embeddings alone can not understand the domain-specific terminology especially if the words from training are non-dictionary words. Kore.ai provides a model which can understand the meaning of the sentence and at the same time give importance to the domain-specific terminology. There are two parallel layers in work in this model – one to optimize the weights against the sentence embeddings and the other to optimize the word importance for a given sentence.  The activation function used for these two layers is RReLU (Randomized Leaky Rectified Linear Unit, [Learn more](https://arxiv.org/pdf/1505.00853.pdf){:target="_blank"}).
* **Zero-Shot Model (ZSM)**: Helps define descriptive intents that the app identifies in the user utterance based on semantic similarity without requiring training data.
* **Few-shot Model (Kore.ai Hosted Embeddings)**: Helps define more number of granular intents that describe the user’s intention in the utterance more accurately with limited training requirement.

### Zero-Shot Model


The Platform allows users to create a Natural Language Understanding (NLU) model to use in a app. The **Zero-Shot Model (ZSM)** allows developers to quickly create the model without needing training data. 

Instead, it relies on a pre-trained language model and a logic learning machine (LLM) to identify the intention of a user through the utterance based on semantic similarity. 

This feature uses the intent name to map or identify the intent name’s similarity with the user input to predict the utterances accurately. 

Thus, the intents have to be defined very well. This approach is well-suited for virtual assistants with relatively fewer intents and distinct use cases.

**Benefits**

* The **ZSM** network type helps create an NLU model quickly as it does not require training data.
* Uses **LLM & Generative AI models** to identify the intent names by comparing the user utterance.
* The user must only provide a descriptive intent name to leverage this functionality.

!!! Important Considerations

    * This model identifies and defines granular intents describing the purpose of the user interaction, and not what the app can do.
    * ZSM works well when the app has good intent coverage.
    * Utterances are required to train entities.
    * Intent names and user utterances will be shared with OpenAI.
    * When using ZSM, dialog intents and FAQs need to be treated the same.
    * The **ZSM network type** applies only to the ML engine and not the FM, KG, and Traits engines. The Platform continues to use Patterns for Intent matching by the FM engine.
    * There is no option to tweak the training if something does not work.
    * ZSM is available in the app-level model configuration and not in the dialog intent model.
    * Multiple intent models are not supported when **Zero-Shot** is enabled.
    * App Synonyms and stop words are not used for intent detection.
    * When ZSM is enabled, all the matches from the ML engine are definite.
    * Only the **_Incorrect Patterns_** and **_Wrong Entity Annotation_** goal-driven validations are enabled when **_Zero-Shot Model_** is enabled.

**How it works**

1. The user defines the intent to be identified by the system. For example, in the banking use case, instead of saying “_I see invalid transactions_“, the intent you provide has to be more descriptive within a subject, object, and nouns. It should be something more descriptive like “_I received an alert on my phone about transactions that I have not done._“. This helps the app correctly identify the intent “_Dispute credit card Transaction._“

    <img src="../images/user-defines-intent.png" alt="user defines intent" title="user defines intent" style="border: 1px solid gray; zoom:75%;">

    If required, the user can add dialogs for the intents.

2. The user should enable the **Zero-Shot Model Network Type** under **Training**.
3. The system identifies the most logical intent by matching the user utterance with the defined intent names (without training utterances). It then responds with the relevant intent. Intents identified by the **Zero-Shot model** are considered definitive matches.

**Rescoring of Intents for Definitive Matches**

When **Prefer Definite Matches** is disabled, and **Rescoring of Intents** is enabled, the platform continues rescoring for definite matches based on the similarity between the training data and user utterance to discover the winning intent(s). However, enabling Prefer Definite Matches is recommended to rescore for definitive matches based on the similarity between the intent names and user utterances.

**Demonstrating with an Example**

For an online shopping app, the following needs to be ensured to implement the **ZSM** model:

* The intent names should be very descriptive.
* Provide descriptive names, as the model relies heavily on intent names.

When an intent is named “**_Show the status of my order_**,” for example, **Dialogs** under **Virtual Assistant > USE CASES**.

<img src="../images/intent-name-example.png" alt="intent name example" title="intent name example" style="border: 1px solid gray; zoom:75%;">


For a new app, under **Natural Language** > **Training** > **Intents**, ensure that no training utterances are added for the intent.

<img src="../images/intent-training-utterances.png" alt="intent training utterances" title="intent training utterances" style="border: 1px solid gray; zoom:75%;">

When you enable **ZSM network type** for an existing app, the system does not identify the intent for its training data/utterances.

!!! Note

    For more descriptive intent names like _“I want to place an order”_ and _“Will I be able to place an order?”_, the system considers the punctuation and the case (upper or lower) to identify the intent.


!!! Note

    The Zero-shot Threshold and Zero-shot Definitive Score apply only to zero-shot v2 prompts.

**Zero-shot Threshold**

Zero-shot Threshold defines the criteria for qualifying a probability score of an intent to be a possible match. The default value is set to 0.7. This means that any intent that scores >0.7 is considered as a qualified Intent. Intents scoring <0.7 are rejected.

!!! note

    Apps created after the v11.13 release use a default threshold value of 0.7, while apps created before this release use a default threshold value of 0.6.

**Zero-shot Definitive Score**

Set the threshold score for definite matches between 80-100%. The default value is 95%. If the probability score exceeds 95%, the intent is classified as a Definite Match or Perfect Match.

!!! note

    The zero-shot score is considered if the LLM score is less than it.




**Enable the Zero-Shot Model Network Type**

To enable the **ZSM** model, follow the steps below:

1. Navigate to **Virtual Assistance** > **Natural Language** > **NLU Config** > **Engine Tuning** >  **Machine Learning**.
2. Select **Zero-Shot Model** in the dropdown list for **Network Type**, and click **Save**.  
<img src="../images/zero-shot-model-selection-window.png" alt="zero shot model" title="zero shot model" style="border: 1px solid gray; zoom:75%;">

3. Select the check box to **Agree to share the intent names, descriptions, and user utterances with the LLM**. Click **Confirm**. The success message is displayed.  
<img src="../images/zsm-confirm.png" alt="zero shot model" title="zero shot model" style="border: 1px solid gray; zoom:75%;">

4. (Optional) Adjust the Zero-shot threshold and Zero-shot Definitive Score as required.  
<img src="../images/zsm-threshold.png" alt="zero shot model" title="zero shot model" style="border: 1px solid gray; zoom:75%;">

**Testing the Utterance**

To test the utterance for the **Zero-Shot Model** Network Type, follow the steps below:

1. Navigate to **Testing** > **Utterance Testing**.
2. Type the utterance.

    **Example 1**: “_I don’t want the product_.”
    
    <img src="../images/test-utterance-example-1.png" alt="test utterance example" title="test utterance example" style="border: 1px solid gray; zoom:75%;">

    **Example 2**: “_Where is my delivery?_”

    <img src="../images/test-utterance-example-2.png" alt="test utterance example" title="test utterance example" style="border: 1px solid gray; zoom:75%;">

3. Click **Save & Run**.
4. The Machine Learning Model identifies and displays the following intents in the <b>NLP Analysis</b> window for each example.

    **Example 1**: **_Cancel My Order_** for “_I don’t want the product_.”

    <img src="../images/cancel-my-order.png" alt="cancel order" title="cancel order" style="border: 1px solid gray; zoom:75%;">

    **Example 2**: **_Show the status of my order_** for “_Where is my delivery?_”

    <img src="../images/Show-the-status-of-my-order.png" alt="Show the status of my order" title="Show the status of my order" style="border: 1px solid gray; zoom:75%;">

The most relevant intent is identified and considered a definitive match.

### Few-Shot Model (Kore.ai Hosted Embeddings)

The Few-shot model allows you to train your virtual assistants using the task names and a few training utterances if required. Kore.ai uses **custom NLU models pre-trained with large datasets** to identify the intents based on their semantic similarity in the user utterance. This model works in the same manner as the **ZSM** Model except that more intents are considered while identifying the user’s intention in the utterances through LLMs hosted by the Platform. This model does not share any data externally and needs no additional enablement or costs.

**Few-Shot as the Default ML Model**

The Platform sets the Few-Shot model as the default ML Engine model selection with the recommended thresholds for new standard workspace bots when **_English_** is selected as the NLU Language.

<img src="../images/few-shot-model-as-default.png" alt="Few-shot model as default" title="Few-shot model as default" style="border: 1px solid gray; zoom:75%;">

Since this model helps obtain good accuracy levels with fewer training utterances, it works best for the following configurations and is set as the default ML Model:

ConfigurationDefault Setting

<table border="1.5">
<tr bgcolor="#FAFAFA">
   <td><strong>ML Engine</strong>
   </td>
   <td>
<ul>

<li>‘<strong><em>Multiple Intent Models</em></strong>‘ is disabled.

<li>The minimum value for <strong>ML Threshold</strong> is set to 0.6.

<li>The <strong>ML Definitive Score</strong> is set to 90% (0.9).
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Ranking & Resolver</strong>
   </td>
   <td>‘<strong><em>Rescoring of Intents</em></strong>‘ (by the R&R engine to find the top-qualifying/winning intents) is disabled.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Fundamental Meaning</strong>
   </td>
   <td>‘<strong><em>Intent Detection using Task Name Words</em></strong>’ (to determine if the FM Engine should identify the intents using the words in the Task Name) is disabled.
   </td>
  </tr>
  <tr>
   <td><strong>Advanced NLP Settings</strong>
   </td>
   <td>
<ul>

<li>‘<strong><em>ML Suggestion Proximity</em></strong>‘ (for ML Engine) is added to the list by default with value set to 5.

<li>‘<strong><em>Exact Task Name Match</em></strong>‘ (for FM Engine) is added to the list by default and set to the <em>Disabled</em> state.

<li>‘<strong><em>Multi-intent Model</em></strong>‘ is set to the <em>Disabled</em> state.
</li>
</ul>
   </td>
  </tr>
</table>

**Benefits**

* The **FSL** model requires limited utterance training.
* Provides consistent responses with improved predictability.
* Easy to scale performance with additional training.

!!! Important Considerations

    * It is important to give descriptive names for your tasks so that the model finds the semantic similarity between the task names and the user utterances.
    * This model identifies and defines granular intents describing the purpose of the user interaction, and not what the app can do.
    * Works well when the app has good intent coverage.
    * You may need to add training utterances to identify entities by the NER model for specific scenarios.
    * When using FSL, dialog intents and FAQs need to be treated the same.
    * Bot Synonyms, Stop Words and a few other ML Configurations are not used by the Few-Shot Model (Kore.ai Hosted Embeddings).
    * The new Few-Shot Model (Kore.ai Hosted Embeddings) for Traits in NLP V3 allows the NLP Engine to train and identify Traits when set as the default model. This feature is available for only the new bots that have English as the NLU language. [Learn more](#few-shot-model-koreai-hosted-embeddings).
    * Intents are rescored by the R&R Engine by comparing the closest training sentences (including the task name) with the user utterance.
    * The available embedding model options for the Few-Shot Model are BGE M3, MPNet, and LaBSE.

**How it works**

The model uses embeddings generated using large pre-trained language models to compare the similarity between the training data and the user utterances.

1. You can start by just creating intents with descriptive names. Post-testing the performance of the intent, you can consider adding a few utterances only for the failed variations. For example, in the banking use case, when the utterance “_I forgot my pin_” (which is very straightforward) is given, the app correctly identifies the intent “_reset credit card pin_.”  
<img src="../images/few-shot-model-create-intent.png" alt="Few-shot model create intent" title="Few-shot model create intent" style="border: 1px solid gray; zoom:75%;">

2. However, for a more complex utterance like “_I received an alert on my phone about transactions that I have not done._“, the app identifies the intent “_Dispute credit card Transaction_” correctly only when a training utterance like “_Unidentified Transactions_” is added to nudge the model in the right direction.  
<img src="../images/few-shot-model-complex-utterance.png" alt="Few-shot model complex utterance" title="Few-shot model complex utterance" style="border: 1px solid gray; zoom:75%;">

3. This behavior varies from scenario to scenario where the correct intent can be identified accurately based on the training utterance you provide.
4. The system identifies the most logical intent by matching the user utterance(s) with the defined intent names. It then responds with the relevant intent. Intents identified by Few-Shot are considered definitive matches.

**Enable the Few-Shot Network Type**

To enable the **FSL** model, follow the steps below:

1. Navigate to **Natural Language > NLU Config**.
2. Under **Machine Learning** in the **Engine Tuning** tab Select **_Few-Shot Model (Kore.ai Hosted Embeddings)_** in the dropdown list for **Network Type**, and Confirm.

    <img src="../images/enable-few-shot-model-option.png" alt="enable Few-shot model" title="enable Few-shot model" style="border: 1px solid gray; zoom:75%;">

### Support for Standard Bot Traits

The Few-shot Model is now the default model for managing Traits. This feature is only available for the new bots created in NLP V3.

!!! Note

    All the older bots on NLP V3 will continue to use the Standard ML Model as the default traits model instead of the Few-shot model.

To manage the Few-shot Model as the default Network Type for traits, follow the steps below:

1. Navigate to **Natural Language > Training**, and click the **Traits** tab.
2. Click the trait you want to configure from the list. Otherwise, add a new trait by clicking **Add Traits**.
3. In the resulting window, click **Manage** to view the **Manage Traits** panel.
4. The system selects **Few-shot Model (Kore.ai Hosted Embeddings)** by default as the Network Type, and the following settings appear:

    i. **ML Threshold** is set to the default value 0.5.
    ii. The **Feature Extraction** and **Sequence Length** options available for Standard Models don’t appear as they’re not applicable.

    <img src="../images/Few-shot-trait-selection.png" alt="Few-shot traits selection" title="Few-shot traits selection" style="border: 1px solid gray; zoom:75%;">

### Support for App Synonyms

The Few-Shot model supports Bot synonyms where a specific word in the user utterance including an abbreviation, acronym, or enterprise-specific word like “_A/C_” is replaced by the relevant term or word (_Account_) which will enable better intent recognition.

For example:

When the **User utterance** is “_Check my a/c balance_,” the **Training data** matched is “_Check my account balance_.”

In this case, MPNET provides a high score (ML Threshold and ML Definitive scores) where the intent/entity/question is understood by the Virtual Assistant and matched to the training data. This support is helpful for migrating the solution-specific bots to the LLM approach.

**Enabling Synonyms**

On the Platform, you can use Bot Synonyms as part of the Few-shot model by enabling the **Bot Synonyms** option within **Engine Tuning > Machine Learning** window (after selecting the **Few-Shot Model (Kore.ai Hosted Embeddings)** Network Type under **Natural Language > NLU Config**).

<img src="../images/bot-synonyms-few-shot-model.png" alt="Few-shot bot synonyms" title="Few-shot bot synonyms" style="border: 1px solid gray; zoom:75%;">

When the **Bot Synonyms** option is enabled, the following happens:

* The Platform looks for any synonyms present in the training utterances and replaces them with the Synonym Key.
* The training sentences with the replaced words are used for training the model.
* The modified sentence is used for intent identification (generation of embedding as well as similarity checks).

### NLU Language Selection

When you select the **Zero-shot Model** or **Few-shot Model** Network Types to train the intent models (on the **_Engine Tuning > Machine Learning_** page), you must ensure that the NLU Language enabled is **_English_** (default) under **Configurations** > **Languages**.

If you enable another language, the system does not allow selecting these two network types, and displays an error message as shown below:

<img src="../images/nlu-non-english-language-selection.png" alt="nlu non-english language selection" title="nlu non-english language selection" style="border: 1px solid gray; zoom:75%;">

### ML Threshold

ML Threshold defines the criteria for qualifying a probability score of an intent to be a possible or definite match. The default value is set to 0.3. This means that any intent which scores >0.3 is considered as a qualified Intent. Intents scoring &lt; 0.3 are rejected.

### ML Definitive Score

Configure the threshold score for definite matches, which can be set to a value between 80-100%, with the following classification:

* **Probability Score** – If the probability score by the classification Engine is >0.95 (default which is adjustable using “ML Definitive Score” divided by 100) Intent is considered as a Definite Match/Perfect Match.
* **Fuzzy logic** goes through each utterance of a given Intent and compares it against the user input to see how close the user input and the utterance are (scores are usually from 0-100). If the score is above 95% (default which is adjustable using “ML Definitive Score”) Intent is considered as a Definite Match/Perfect Match.

### Bot Synonyms

This setting is **Disabled** by default. Enable this option if you would like to consider intent synonyms in building the ML model.

Enabling Synonyms allows the ML model to take the synonyms defined under “Synonyms and Concepts” to be considered while training the ML model. It helps in avoiding preparing duplicate utterances.

For example: “_I want to book a flight_”.

If we had defined “_buy_”, “_reserve_”, “_purchase_” as synonyms of “_book_” and “_ticket_” or  “_seat_” as synonyms of “flight”, then you need not add training utterances like “I want to buy a ticket” or “I want to reserve a seat” etc.

### Stop Words

This setting is **Disabled** by default. Enable this option if you would like to remove the stop words in the training utterances in building the ML model. Once enabled, stop words are used to filter out the words/phrases from the Training utterances before training the ML model and are removed from the user utterance before prediction.

This setting is not valid when _Network Type_ is set to _Transformer_.

### Support for Non-CS Languages

The Platform now supports the following **150 Polish stop words** for ML Engine Training, in addition to the current stop words:

Alphabet Polish Words

<table border="1.5">
<tr bgcolor="#FAFAFA">
   <td><strong>A</strong>
   </td>
   <td><code>"a","aby","ach","acz","aczkolwiek","aj","albo","ale","ależ","ani","aż"</code>
   </td>
  </tr>
  <tr>
   <td><strong>B</strong>
   </td>
   <td><code>"bardziej","bardzo","bez","bo","bowiem","by","byli","bym","bynajmniej","być",</code>
<br>
<code>"był","była","było","były","będzie","będą"</code>
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>C</strong>
   </td>
   <td><code>"cali","cała","cały","chce","choć","ci","ciebie","cię","co","cokolwiek","coraz",</code>
<br>
<code>"coś","czasami","czasem","czemu","czy","czyli","często"</code>
   </td>
  </tr>
  <tr>
   <td><strong>D</strong>
   </td>
   <td><code>"daleko","dla","dlaczego","dlatego","do","dobrze","dokąd","dość","dr","dużo","dwa",</code>
<br>
<code>"dwaj","dwie","dwoje","dzisiaj","dziś"</code>
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>G</strong>
   </td>
   <td><code>"gdy","gdyby","gdyż","gdzie","gdziekolwiek","gdzieś","go","godz"</code>
   </td>
  </tr>
  <tr>
   <td><strong>H</strong>
   </td>
   <td><code>"hab"</code>
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>I</strong>
   </td>
   <td><code>"i","ich","ii","iii","ile","im","inna","inne","inny","innych","inż","iv","ix","iż"</code>
   </td>
  </tr>
  <tr>
   <td><strong>J</strong>
   </td>
   <td><code>"ja","jak","jakaś","jakby","jaki","jakichś","jakie","jakiś","jakiż","jakkolwiek","jako",</code>
<br>
<code>"jakoś","je","jeden","jedna","jednak","jednakże","jedno","jednym","jedynie","jego",</code>
<br>
<code>"jej","jemu","jest","jestem","jeszcze","jeśli","jeżeli","już","ją"</code>
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>K</strong>
   </td>
   <td><code>"każdy","kiedy","kierunku","kilka","kilku","kimś","kto","ktokolwiek","ktoś","która","które",</code>
<br>
<code>"którego","której","który","których","którym","którzy","ku"</code>
   </td>
  </tr>
  <tr>
   <td><strong>L</strong>
   </td>
   <td><code>"lat","lecz","lub"</code>
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>M</strong>
   </td>
   <td><code>"ma","mają","mam","mamy","mało","mgr","mi","miał","mimo","między","mnie","mną","mogą","moi",</code>
<br>
<code>"moim","moja","moje","może","możliwe","można","mu","musi","my","mój"</code>
   </td>
  </tr>
  <tr>
   <td><strong>N</strong>
   </td>
   <td><code>"na","nad","nam","nami","nas","nasi","nasz","nasza","nasze","naszego","naszych","natomiast",</code>
<br>
<code>"natychmiast","nawet","nic","nich","nie","niech","niego","niej","niemu","nigdy","nim","nimi",</code>
<br>
<code>"nią","niż","no","nowe","np","nr"</code>
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>O</strong>
   </td>
   <td><code>"o","o.o.","obok","od","ok","około","on","ona","one","oni","ono","oraz","oto","owszem"</code>
   </td>
  </tr>
  <tr>
   <td><strong>P</strong>
   </td>
   <td><code>"pan","pana","pani","pl","po","pod","podczas","pomimo","ponad","ponieważ","powinien","powinna",</code>
<br>
<code>"powinni","powinno","poza","prawie","prof","przecież","przed","przede","przedtem","przez","przy"</code>
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>R</strong>
   </td>
   <td><code>"raz","razie","roku","również"</code>
   </td>
  </tr>
  <tr>
   <td><strong>S</strong>
   </td>
   <td><code>"sam","sama","się","skąd","sobie","sobą","sposób","swoje","są"</code>
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>T</strong>
   </td>
   <td><code>"ta","tak","taka","taki","takich","takie","także","tam","te","tego","tej","tel","temu",</code>
<br>
<code>"ten","teraz","też","to","tobie","tobą","toteż","trzeba","tu","tutaj","twoi","twoim","twoja",</code>
<br>
<code>"twoje","twym","twój","ty","tych","tylko","tym","tys",tzw","tę"</code>
   </td>
  </tr>
  <tr>
   <td><strong>U</strong>
   </td>
   <td><code>"u","ul"</code>
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>V</strong>
   </td>
   <td><code>"vi","vii","viii","vol"</code>
   </td>
  </tr>
  <tr>
   <td><strong>W</strong>
   </td>
   <td><code>"w","wam","wami","was","wasi","wasz","wasza","wasze","we","według","wie","wiele","wielu","więc",</code>
<br>
<code>"więcej","wszyscy","wszystkich","wszystkie","wszystkim","wszystko","wtedy","www","wy","właśnie","wśród"</code>
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>X</strong>
   </td>
   <td><code>"xi","xii","xiii","xiv","xv"</code>
   </td>
  </tr>
  <tr>
   <td><strong>Z</strong>
   </td>
   <td><code>"z","za","zapewne","zawsze","zaś","ze","znowu","znów","został","zł","żaden","żadna","żadne",</code>
<br>
<code>"żadnych","że","żeby"</code>
   </td>
  </tr>
</table>

### Feature Extraction

Using this option (introduced in ver8.0) you can associate the ML intent model with the preferred algorithm. This option is not valid when _Network Type_ is set to _MLP WordEmbeddings_, _LSTM, CNN,_ and _Transformer_.

The options are:

* **n-gram** – this is the default setting and can be used to define the contiguous sequence of words to be used from training sentences to train the model. 
For example, if _Generate weather forecast report_ is the user utterance and if the n-gram is set to 2, then _Generate weather_, _Weather forecast_, and _Forecast report_ are used in training the model. If n-gram is set to 3, then _Generate weather forecast_, and _Weather forecast report_ will be used in training the model. 
You can set the n-gram using the **n-gram Sequence Length –** The minimum n-gram limit is 1 by default. You can set the maximum limit up to 4.
* **skip-gram** – when the corpus is very limited or when the training sentences, in general, contain fewer words then skip-gram would be a better option. For this you need to define:
    * **Sequence Length** – the length for skip-gram sequences, with a minimum of 2 and a maximum of 4
    * **Maximum Skip Distance** – the maximum words to skip to form the grams, with a minimum of 1 and a maximum of 3.

### The NER Model

Choose the NER model to be used for entity detection. The Platform provides two entity recognition models for training using NER that follow the same approach with

* **Conditional Random Fields**: lightweight and is easy to use for all sizes of datasets
* **Neural network**: works well with medium to large datasets but training time is very high

!!! Note

    The CRF model supports all languages and the Deep Neural Network model supports English, Spanish, German, and French. This option appears on the screen only when the selected app language is supported by the Deep Neural Network model.

### NER Threshold

**NER Threshold** is a user-configurable parameter to set the minimum confidence score required for the system to identify and return only entity values above the set threshold. An entity with a confidence score below the set threshold is considered a _Probable Match_ and one with a score that is equal to or above the threshold is considered an _Exact Match_.

This setting helps filter out low-confidence recognitions and remove false positive results. This is beneficial for improving the accuracy of Named Entity Recognition (NER) results by excluding less reliable or uncertain identifications.

<img src="../images/NER-threshold.png" alt="NER threshold" title="NER threshold" style="border: 1px solid gray; zoom:75%;">

!!! Important Considerations

    While using the **NER Threshold** setting, the following considerations should be made:

    * This feature is useful for identifying NER entities for CRF and DNN methods.
    * The user can set the threshold value between 0 and 1 in **multiples of 0.01**
    * For all the existing bots and languages, the default threshold value is **0**, for all new bots, the default value is configurable. To **0.3** currently.
    * During runtime, the system returns only the matched entity values with a confidence score above the threshold.
    * The confidence score based on this setting is reflected in the following locations:
       * **Utterance Testing**: On the left panel.
       * **Batch Testing**: In the CSV file and <b>More Details</b> section of the **Test Case Details** screen.
       * **Health and Monitoring Dashboard**: In the **More Details** section of the **Test Case Details** screen.

    * In scenarios where multiple entity values are identified for an entity, the system compares the confidence scores and returns the entity value with the maximum confidence score.
    * When multiple entities are identified for a value, the system compares the confidence scores and qualifies the entity with the maximum confidence.

**Example of NER Identification**

For a flight booking service, when you set the **NER Threshold** value for the following entities:

* Source City
* Destination City
* Date of Travel

The training utterance is as follows:

“_I want to book a flight from New York to Boston._”

When the user provides the following inputs to the app:

* **Utterance 1**: “_I want to fly from New York to Boston._”
* **Utterance 2**: “_Book a ticket to New Jersey from Boston._”
* **Utterance 3**: “_Help me book a flight ticket on 25th of July, 2023._”

The system identifies all the entity names and checks their NER confidence score. Only the matched entities with a confidence score above the set limit are returned instead of all the recognized entities. Thus, the following results are returned:

* **Source City**: New York
* **Destination City**: Boston
* **Date of Travel**: 25 July 2023

### Entity Placeholders

Enable to replace entity values present in the training utterances with the corresponding entity placeholders in the training model. Entity placeholders remove the contribution of real entity values in Intent detection. This works only when the entity training(NER) is done via ML. 

!!! Note

    Enabling this flag reduces scores contributed by entity values.

**_Example_**: I want to fly to London tomorrow.

In the above example, we don’t want the engine to learn that “London” and “tomorrow” are important features. Hence they are replaced with their Placeholders once NER is done and the Entity Placeholders flag is enabled. Training utterance becomes “I want to fly &lt;to> on &lt;date>".

This option is not valid when _Network Type_ is set to _Transformer_.

### Upgrading the ML Model (for old VAs)

All new VAs that are created use the new ML model by default. Developers can upgrade the ML model for old VAs or downgrade the model for the VAs using the new model.

If you are using a previous model of ML in the app Platform, you can upgrade it as follows:

1. Open the app for which you want to upgrade the ML model and go to **Natural Language > NLU Config**.
2. Expand **Machine Learning**. Under the ML Upgrade section, click the **Upgrade Now** button. It opens a confirmation window.
3. Click **Upgrade and Train**. You can see new customizable options under the Machine Learning section.

!!! Note

    If a app is exported using the older model (V2) and imported as a new app, it continues to be in the V2 model until you upgrade it.

## Training Validations

The ML engine enables you to identify issues proactively in the training phase itself with the following set of recommendations: 

* **Untrained Intents** – notifies about intents that are not trained with any utterances so that you can add the required training. 
* **Inadequate training utterances** – notifies the intents that have insufficient training utterances so that you can add more utterances to them. 
* **Utterance does not qualify any intent (false negative)** – notifies about a utterance for which the NLP model cannot predict any intent. For example, an utterance added to Intent A is expected to predict Intent A. Whereas in some cases the model won’t be able to predict neither the trained Intent A nor any other Intents within the model. Identifying such cases proactively helps you to rectify the utterance and enhance the model for prediction. 
* **Utterance predicts wrong intent (false positive)** – Identifies utterances that predict intents other than the trained intent. For example, when you add an utterance that is similar to utterances from another intent, the model could predict a different intent rather than the intent to which it is trained to. Knowing this would help you to rectify the utterance and improve the model prediction
* **Utterance predicts intent with low confidence** – notifies about the utterances that have low confidence scores. With this recommendation, you can identify and fix such utterances to improve the confidence score during the app creation phase itself.

### Viewing NLU Training Validations

1. On the app’s menu, click **Natural Language > Training.**
2. In the **Intents** tab, you can see the set of recommendations for the Intents and ML utterances.
    
    <img src="../images/training-intents-tab-select.png" alt="select intents tab" title="select intents tab" style="border: 1px solid gray; zoom:75%;">

    !!! Note

        The errors and warnings in this screen are examples. The ML validations vary based on the error or warning recommendation as explained in the Goal-Based NLU Training Validations section above.


3. Hover over the validation options and view the following recommendations:

    * Hover on the **Error** icon to view the recommendations to resolve the error.

        !!! Note

            An Error is displayed when the intent has a definite problem that impacts the app's accuracy or intent score. Errors are high severity problems.

    * Hover on the **Warning** icon and follow the instructions in the warning to enhance the training for ML utterances. 

        !!! Note

            A warning is displayed when the issue impacts the app's accuracy and it can be resolved. Warnings are less severe problems when compared to errors.
        
        <img src="../images/handling-warning-section.png" alt="handle warning" title="handle warning" style="border: 1px solid gray; zoom:75%;">

Once you click on the Intent with an error or warning, hover over the **Bulb** icon to view the summary of error or warning messages as illustrated below:

<img src="../images/error-and-warning-summary.png" alt="error and warning summary" title="error and warning summary" style="border: 1px solid gray; zoom:75%;">

## Exporting and Importing Machine Learning Utterances

You can import and export ML utterances of a app into another in CSV and JSON formats. You can choose between ‘In-Development’ or ‘Published’ tasks to export, whereas importing utterances always replace the latest copy of the task.

### How to Export or Import ML Utterances

1. On the app’s menu, click **Natural Language > Training**.
2. The ‘In-Development’ version of the app’s ML utterances open by default. If you want to see the utterances in the ‘Published’ version, toggle on the top right side of the window to **Published**. 

    !!! Note

        The export of ML utterances varies based on this selection as explained in the Versioning and Behavior of the Exported Utterances section below.

3. Click the options icon and select an option:

    * Click **Import** to upload a CSV or JSON file with the utterances to import OR import utterances between different languages in the same app, or,
    * Click **Export** and select CSV or JSON formats to export the utterances.
    
        <img src="../images/import-export-utterances-select.png" alt="import export utterances" title="import export utterances" style="border: 1px solid gray; zoom:75%;">

You can import/export ML utterances using either of the below methods:

* Upload Utterances File
* Copy from another Language

    <img src="../images/import-options.png" alt="import export utterances" title="import export utterances" style="border: 1px solid gray; zoom:75%;">

#### Upload Utterances File (Default)

1. Ensure that the **Upload Utterances File (CSV / JSON)** option is selected. This is the default import option.
2. Select the language(s) for which you want to import. All the language added to the app will be available for selection.

    <img src="../images/import-file-target-languages.png" alt="import export utterances" title="import export utterances" style="border: 1px solid gray; zoom:75%;">

3. Upload or drag and drop the CSV or JSON file containing the utterances. Click **Import** to initiate the import.

    <img src="../images/import-file-upload.png" alt="import export utterances" title="import export utterances" style="border: 1px solid gray; zoom:75%;">

You can see a popup that would display the import status and details.

#### Copy from another Language

Using this option, you can copy the utterances from one language to another in the **same app** so that you can easily import and synchronize the utterances data between two languages.This option is available for app's that have more than one language enabled.

1. **Import From**: Select the language from which you want to copy the utterances. The base language of the app is pre-selected by default.
2. **Version**: Choose **Configured** or **Published**, whichever meets your requirements.
3. **Import To**: Select the language to which you wish to import. The current app language is pre-selected by default. If the current language is the primary language of the app, the field is pre-populated with any other language. You can change it by clicking the **Change** link, selecting a language and clicking Save.
4. **Choose Intents to Import:** You can choose either of the two options: 
    * **Import Utterances from all the Intents**: This is the default option. All the intents with all the utterances are imported. You can preview the summary of intents and utterances by clicking View Intents.
    * **Select Intents to import Utterances**: Having selected this option, you can choose which utterances to import. Only the utterances from the selected intents will be imported

Once you have finalized the selections, click Import. After the import completes, a popup appears that would display the import status and details.

<img src="../images/import-copy-from-another-language.png" alt="import export utterances" title="import export utterances" style="border: 1px solid gray; zoom:75%;">


### Versioning and Behavior of Imported Utterances

* The imported utterances in CSV/JSON (if imported from Utterance File) or the source language (if imported from another language of the same app) entirely replace the utterances present in the _latest copy_ of the tasks.
* If the task is in _Upgrade in Progress_ status, the utterances related to the task get entirely replaced with the task utterances present in the imported file or source language. The utterances in the _Published_ copy of the task aren’t affected.
* If the task is in the _Published_ status, an _Upgrade in Progress_ copy of the task gets created by default and the new utterances present in the imported file or source language will be added to the upgraded copy. The utterances in the Published copy of the task aren’t affected.

### Versioning and Behavior of Exported Utterances

* When you export a app’s utterances, all the utterances related to every task type – alert, dialog – get exported.
* When you export an _In Development_ copy of the app, the utterances of all tasks in the latest available copy get exported.
* When you export a _Published_ copy of the app, all the utterances in the published state get exported.
* In the case of multi-language VAs, the export of utterances includes utterances added in all of the languages.
* Export of utterances to JSON includes NER tagging present in the tasks, whereas CSV export doesn’t include them.

## Training Recommendations

### General ML Training Recommendations

* _Give a balanced training_ for all the intents that the app needs to detect, add approximately the same number of sample utterances. A skewed model may result in skewed results.
* Provide _at least 8-10 sample utterances_ against each intent. The model with just 1-2 utterances will not yield any machine learning benefits. Ensure that the utterances are varied and you do not provide variations that use the same words in a different order.
* Avoid training _common phrases_ that could be applied to every intent, for example, “I want to”. Ensure that the utterances are varied for larger variety and learning.
* After every change, _train the model_ and check the model. Ensure that all the dots in the ML model are diagonal (in the True-positive and True-negative) quadrant and you do not have scattered utterances in other quadrants. Train the model until you achieve this.
* _Regularly train_ the app with new utterances.
* Regularly review the _failed or abandoned utterances_ and add them to the utterance list against a valid task or intent.

### NLP Intent Detection Training Recommendations

* If there are a good number of sample utterances, try training the app using Machine Learning approach first, before trying to train the fundamental meaning model.
* Define synonyms to build a domain dictionary such as _pwd_ for a password; _SB_ for a savings bank account.
* After every change to the model training, run the batch testing modules. Test suites are a means to perform regression testing of your app’s ML model.

### NLP Entity Detection Training Recommendations

The best approach to train entities is based on the type of entity as explained below:

* Entity types like **List of Items** (enumerated, lookup), **City**, **Date**, **Country** do not need any training unless the same entity type is used by multiple types in the same task. If the same entity type is used in a task, use either of the training models to find the entity within the user utterances.
* When the entity type is **String** or **Description** the recommended approach is to use Entity patterns and synonyms.
* For all other entity types, both NER and Patterns can be used in combination.

### Entity Training Recommendations

* Use NER training where possible – NER coverage is higher than patterns.
* NER approach best suits detecting an entity where information is provided as unformatted data. For entities like Date and Time, the Platform has been trained with a large set of data.
* NER is a neural network-based model and will need to be trained with at least 8-10 samples to work effectively.