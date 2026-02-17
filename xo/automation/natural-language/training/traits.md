[ :octicons-arrow-left-24: Back to NLP Topics](../../../nlp-topics.md)

# Traits

In natural conversations, it is very common that a user provides background/relevant information while describing a specific scenario.

**Traits** are specific entities, attributes, or details that the users express in their conversations. The utterance may not directly convey any specific intent, but the traits present in the utterance are used in driving the intent detection and app conversation flows.

For example, the utterance: _My flight is late and I will miss my connection_ because of it expresses two traits: _flight delay_ and _emergency_. In this scenario, the utterance does not convey any direct intent. However, the presence of the _emergency_ trait is used to directly assign the conversation to a human agent.

The **Traits** feature of the Platform is aimed at identifying such characteristics present in user utterances and use them for intent detection and in customizing the app definition using these characteristics.

## How Traits work

Traits are entities that can be extracted from the user input, before intent recognition. They can be used in multiple scenarios listed below:

* Indirect entity extraction, e.g.: gender or age-specific words can be inferred from the text.  A phrase such as: “Seat in front of the plane with extra legroom” implies, for example, a _First Class_ seat.
* Intent recognition, using rules. Any rule match for intent will be considered a definitive match.
* Identification based on keywords/phrases and their synonyms. For Example, **Trait-Color: Blue**– “Blue”, “Sapphire”, “Teal”; **Trait-Color-Red** – Red, Maroon, Crimson **Trait-Status: NotWorking:** “doesn’t work”, “switched off”;  **Trait-Status:Working**: “working”, “turned on.”
* Inference from a keyword or specific phrase in the sentence. There is no obvious association between certain words in the sentence and the value of the entity, but rather you need the sentence as a whole to determine the value. For example, **Trait-Greeting-Emotion: Positive** – “Good Morning”, “How are you”; **Trait-Greeting-Emotion: Negative** – “I hate to say”, “I am not having trouble”.

Configuring Traits involves:

* Trait Definition
* Trait Association Rules
* Trait Detection

We will discuss these in detail throughout this article, but first, let us look at a use case for traits.

## Use Case

A Travel Planning app might have an added requirement to book a flight based on the cost preference.

You might have the following user utterance: _I am looking for a low-cost option to London, which_ must result in ordering the available flights and picking the lowest-priced ticket.

This can be achieved by the following:

* Adding a _Trait Type_ called _Flight Fare_ with _Trait Economy_ trained with the utterance _low cost._
* Adding a _Rule_ for _book flight_ to be triggered in the presence of _Economy Trait._
* Add transition conditions in case _Trait Economy_ is present in the context.

## Trait Definition

To access **Traits**, follow the steps below:

1. Navigate to **Natural Language > Training > Traits**.
<img src="../images/access-traits-tab.png" alt="access traits" title="access traits" style="border: 1px solid gray; zoom:75%;">

The following key features can be leveraged when defining Traits:

1. **Trait Type** is a collection of related traits like _Travel Class_ in the above example.

    * Trait Type can be _ML Based_ or _Pattern Based_. Each trait of a trait type can be trained using words, phrases, utterances, or patterns based on the type. **Manage** Trait Type allows you to define the training configuration. Click [here](#the-ml-model-for-traits) for ML-based trait configuration.
    * Select the Network type (Standard or Few-shot Model) from the dropdown. The available embedding model options for the Few-Shot Model are BGE M3, MPNet, and LaBSE.
    * A _Trait Type_ can have one or more _Traits_.
    <img src="../images/trait-type-definition.png" alt="traits type definition" title="traits type definition" style="border: 1px solid gray; zoom:75%;">

2. **Traits names** should be unique in a group. But traits with the same name can be present in multiple groups.

    * For ML-based Traits, you can define the words, phrases, or utterances that identify the trait. One trait per trait type is detected for ML-based trait types.
    * For Pattern-based Traits, you can define the patterns associated with the given trait. There is a possibility of multiple traits getting detected for pattern-based trait types. Ordering of Traits within the Trait Type signifies the importance of a trait in a trait type and detects only one trait.

        !!! Note

            The latest version of the Platform supports a **new patterns engine flag** for performance optimization. It offers better response times for pattern evaluation after the app training is done. 
    
3. Once added, **Train** the app for the Traits to be detected from user utterances.

!!! note "Key Considerations"

    * You can add language-specific traits in the case of multi-lingual assistants.
    * When a trait name is modified, ensure that all the rules defined using that trait are corrected. This has to be done manually, the Platform will not handle it automatically.
    * The trait name must be unique in a group.
    * Traits with the same name can be present in multiple groups, but distinguishing them in trait rules or trait detection results is difficult.
    * For trait names, only spaces and underscores ("_") are supported as special characters. No other special characters are allowed.

## The ML Model for Traits

When choosing to train traits using the ML model, by default, the _n-gram model_ is used. An _n-gram_ is the contiguous sequence of words used from training sentences to train the model. But this might not be effective when the corpus is very less or when the training sentences, in general, contain fewer words.

From v8.0 of the platform, an option is included to skip or use the n-gram model. Further, the option to parameterize the _n-gram_ algorithm is included.

* When the **n-gram** option is selected, you can configure the _n-gram Sequence Length_ by setting the _maximum value_ of the n-gram. It is set to 1 by default and can be configured to any integer value between 1 and 5.
* When **skip-gram** is selected, you can configure the following:

    * _Sequence Length_ specifying the number of words to be included in a non-consecutive sequence. It is set to 2 by default and it can take any integer value between 2 and 4.
    * _Maximum Skip Distance_ for the number of words that can be skipped to form a non-consecutive sequence of words. This value is set to 1 by default and can take any integer value from 1 to 3.

    !!! Note

        While the settings are same for all languages (in case of multilingual app), for some languages like Chinese and Korean sequence of characters from grams and for other (Latin-based) languages are word grams.

### Trait Association Rules

Trait Rules define Dialog Execution and Knowledge Graph Intent detection.

### Dialog Execution

_Intent detection_ or _Dialog execution_ is achieved using traits, along with the ML utterances and patterns. To achieve this, intent must be associated with the required traits by adding **Rules**.

There are multiple ways to add rules:

1. From the **Traits** section using the **Add New Rule** link.
<img src="../images/add-new-rule-link-traits.png" alt="add new rule link" title="add new rule link" style="border: 1px solid gray; zoom:75%;">

2. From the Intent Node using the **Rules** section under the **NLP Properties**.
<img src="../images/add-rules-intent-node.png" alt="add rules intent node" title="add rules intent node" style="border: 1px solid gray; zoom:75%;">

3. Click the **Rules** tab for a given **Intent** to view the rules under **Natural Language > Training**.
<img src="../images/view-rules-link.png" alt="view rules" title="view rules" style="border: 1px solid gray; zoom:75%;">

Each rule can have one or more conditions with **AND** as the operator. Multiple trait rules can be defined for a given intent and the intent is considered as a definite match if any one of the rules matches.

### Knowledge Graph Intents

The Knowledge Graph can also be part of the discovery process using Traits. For this, each term or node can be associated with a trait. A given term can be associated with a single Trait. 

Navigate to **Virtual Assistant > Knowledge AI > FAQs**, and click **Manage KG**. On the **Knowledge Graph** screen, click the **Settings** (Gear icon) corresponding to the parent or any of the child nodes.

<img src="../images/navigate-to-manage-kg.png" alt="Navigate to Manage KG" title="Navigate to Manage KG" style="border: 1px solid gray; zoom:75%;">

<img src="../images/settings-click.png" alt="Settings" title="Settings" style="border: 1px solid gray; zoom:75%;">

<img src="../images/kg-intents.png" alt="kg intents" title="kg intents" style="border: 1px solid gray; zoom:75%;">

### Trait Detection

Only one trait from a group (trait type) will be detected and is considered as a definite match.

Traits detected are included in the context object. The context is populated with unique traits identified (without reference to trait type). This information can be used in:

* Intent identification
* Dialog transition
* Entity population
* app definitions

_Batch Testing_ reports also include information about traits detected as do the _Find Intent API_.

### Intent Detection

The Ranking and Resolver gets input from the three NL engines and Traits to analyze and come up with the possible/definitive matches.

* The intent is considered as a definite match only if all the traits (one in the case of Knowledge Graph) present in a trait rule are detected.
* NL Analysis includes information on traits detected and the NLP Flow shows the information about traits detected.
<img src="../images/utterance-testing-intent-detection.png" alt="utterance testing intent detection" title="utterance testing intent detection" style="border: 1px solid gray; zoom:75%;">

### Dialog Transition

The Conversation Flow is controlled using Traits. For a Dialog, **Connection Rules** are defined using the Trait Context. This is done from the **Connection** tab under the **Properties** Panel for the Dialog.

The Traits Context is accessed using `context.traits`. It returns an array of all traits matching the intent, hence the condition to be used is ‘_contains_'.

<img src="../images/traits-dialog-transition.png" alt="traits dialog transition" title="traits dialog transition" style="border: 1px solid gray; zoom:75%;">
