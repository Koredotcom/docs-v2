[ :octicons-arrow-left-24: Back to NLP Topics](../../nlp-topics.md)

# Knowledge Graph

A Knowledge Graph (KG) component helps convert static FAQ text into an intelligent, personalized conversational experience. It goes beyond the usual practice of capturing FAQs as flat question-answer pairs, allowing you to either build an ontology structure or leverage LLM and Generative AI to simplify knowledge organization, maintenance, and training.

## Why a Knowledge Graph?

People express a query in multiple ways, so identifying all the options is complex. The XO Platform Knowledge Graph simplifies this process by either building an ontology structure or using an LLM model that does not require such an ontology.

## Knowledge Graph Types

There are two types of Knowledge Graphs:

1. The **Ontology Knowledge Graph** lets you create an ontological structure of key domain terms and associate them with context-specific questions and their alternatives, synonyms, and Machine-Learning-enabled Traits.
2. The **Few-Shot Knowledge Graph** leverages a Large Language Model (LLM) to simplify knowledge organization. Using this model, you are not required to build an ontology. All you need to do is add all FAQs to the root node/term. This significantly reduces the complexity of building and maintaining an ontology structure.

## Choosing Your Knowledge Graph Type

Starting with v10.1 of the XO Platform, the Few-Shot Model is the default for all new Knowledge Graphs created under NLP V3 and in English.

If you have built your Ontology-based graph before this release, you can migrate to the new model anytime. You must upgrade to NLP V3 to use the Few-Shot Model. You can return to the Ontology model if you change your mind later.

You can select your desired Knowledge Graph Type by going to **Automation** > **Knowledge AI** > **FAQs**.

Changing Knowledge Graph Types is captured in the Change Logs, which you can access by going to **App Settings** > **Change Logs**.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Before changing your Knowledge Graph Type, we recommend backing up your existing knowledge graph by either creating a new app version or by exporting a copy of your knowledge graph as a JSON or CSV.</p>
</div>

Please continue reading to learn more about each type of knowledge graph. See [Knowledge Graph Terminology](./knowledge-graph-terminology.md) for in-depth information about Knowledge Graph features and components.

## The Ontology Knowledge Graph

This type lets you organize FAQs using Default, Mandatory, and Organizer Terms/Nodes, tags, synonyms, context, traits, and more.

Whenever someone asks your VA a question, the terms (node names) in the Knowledge Graph are checked and matched with keywords from the utterance. We call this process path qualification. Tags and synonyms are also checked, and based on the score they receive, questions are shortlisted as likely matches or intents. These shortlisted questions are then compared with the actual utterance to identify the response, which can be either a simple response or the execution of a dialog task.

You can also add completely different alternative questions to the FAQ and provide tags, synonyms, and terms appropriately such that any untrained question can also be matched. The performance and intelligence of the Knowledge Graph depend on the way you train it with the appropriate terms, tags, synonyms, etc.

### Enable the Ontology Knowledge Graph

To enable this Knowledge Graph type, go to **Automation AI** > **Natural Language** > **NLU Configuration** > **Engine Tunning** > **Knowledge Graph**, and select **Ontology Model** as the Knowledge Graph Type.

Before enabling the Ontology Knowledge Graph model, please consider the following:

1. You must build a Graph Ontology structure so the engine can qualify paths and compare them with query input. Each relevant term/node is considered while identifying the appropriate FAQ, so you must regularly maintain the node structure to facilitate optimum performance.
2. The model supports three [Type of Term](knowledge-graph-training.md#term-type) : _Default, Mandatory,_ and _Organizer_.
3. The Ontology Model also supports other features such as Traits, Patterns, Path Synonyms, KG Synonyms, Bot Synonyms, Preconditions, and more. Please see the Comparison Table below for a detailed list of supported features. Also, see [Knowledge Graph Training](./knowledge-graph-training.md) for configuration details.

### How It Works

The Ontology Knowledge Graph engine uses a two-step approach while extracting a response. It combines a search-driven intent detection process with rule-based filtering. The settings for path coverage (percentage of terms needed) and term usage (mandatory or optional) in the user utterance help in the initial filtering of the FAQ intents. Tokenization and the n-gram-based cosine scoring model help fulfill the final search criteria.

When a new utterance reaches the Ontology Knowledge Graph:

* The user utterance and KG nodes/terms are tokenized, and n-gram is extracted (The Knowledge Graph Engine supports a maximum of a quad-gram).
* The tokens are mapped with the KG nodes/terms to obtain their respective indices.
* Path comparison between the user utterance and KG nodes/terms establishes the qualified path for that utterance. This step considers the path coverage and term usage mentioned above.
* From the list of questions in the qualified path, the best match is selected based on cosine scoring.

Training the Ontology Knowledge Graph Model involves the following steps:

* All the terms/nodes, along with synonyms, are identified and indexed.
* Using these indices, a flattened path is established for each KG Intent.

## The Few-Shot Knowledge Graph

This Knowledge Graph type uses Kore.ai’s Large Language Model (LLM) to identify the appropriate FAQ for a query based on semantic similarity. This model only uses Mandatory and Organizer terms and does not perform path qualification, so you are not required to build an ontology. All you need to do is add all FAQs to the root node/term. It significantly reduces the complexity of building and maintaining an ontology structure.

### Enable the Few-Shot Knowledge Graph

To enable the Few-Shot Knowledge Graph, go to **Automation AI** > **Natural Language** > **NLU Configuration** > **Engine Tunning** > **Knowledge Graph**, and select **Few-Shot Model** as the Knowledge Graph Type.

Before enabling the Few-Shot Knowledge Graph, please consider the following:

1. When switching from an Ontology-based Knowledge Graph to the Few-Shot model, _Default_ terms/Nodes are still stored until you update them. From this point onwards, the terms are stored as _Organizer_ unless you make them _Mandatory_.
2. Only _Mandatory_ terms support path-level synonyms.
3. The Few-Shot model works with Ranking & Resolver V2 and NLP V3. When you enable this model, the Ranking & Resolver version will be updated automatically. If you are not using NLP V3, you will be asked to upgrade before enabling it.
4. The available embedding model options for the Few-Shot Model are BGE M3, MPNet, and LaBSE.

### How It Works

When a new utterance reaches the Few-Shot Knowledge Graph, the Large Language Model determines possible and definitive intent matches. The model uses semantic similarity to identify the relevant FAQs. The model returns a similarity score used to determine the match type (definite, probable, etc.) based on set thresholds. Identified intents are then sent to Ranking and Resolver to select the winning intent, after which the assistant responds to the query.

Training this model involves adding tags and alternative questions to FAQs. Other training features, such as term synonyms, traits, context, etc., are optional but still recommended to improve performance for specific use cases where the LLM cannot identify the intent.

## Compare Knowledge Graph Types

<table border="1.5">
  <tr bgcolor="#ECECEC">
   <td><strong>FEATURE</strong>
   </td>
   <td><strong>FEW-SHOT KG MODEL </strong>
   </td>
   <td><strong>ONTOLOGY KG MODEL</strong>
   </td>
  </tr>
  <tr>
   <td>Ontology Structure
   </td>
   <td>Yes, Optional.
   </td>
   <td>Yes, Mandatory.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Default Terms
   </td>
   <td>No, unless you switch from an Ontology KG and don’t update the term. After updating, the term becomes an <em>Organizer </em>and can be set as <em>Mandatory</em>. 
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Mandatory Terms
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
 <tr bgcolor="#FAFAFA">
   <td>Organizer Terms
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Path Qualification
   </td>
   <td>No
   </td>
   <td>Yes, always performed.
   </td>
  </tr>
<tr bgcolor="#FAFAFA">
   <td>Tags
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Synonyms
   </td>
   <td>Yes, for Mandatory Terms and Tags.
   </td>
   <td>Yes
   </td>
  </tr>
<tr bgcolor="#FAFAFA">
   <td>Path-Level Synonyms
   </td>
   <td>Yes, for Mandatory Terms
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Knowledge Graph Synonyms
   </td>
   <td>Yes, for Mandatory Terms
   </td>
   <td>Yes
   </td>
  </tr>
 <tr bgcolor="#FAFAFA">
   <td>Traits
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Context
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
 <tr bgcolor="#FAFAFA">
   <td>Stop Words
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>KG Import/Export
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
 <tr bgcolor="#FAFAFA">
   <td>Auto-Generate KG
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Bot Synonyms
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
<tr bgcolor="#FAFAFA">
   <td>Lemmatization using Parts of Speech
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Path Coverage
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
  </tr>
<tr bgcolor="#FAFAFA">
   <td>Search in answer
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Qualify Contextual Paths
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
  </tr>
<tr bgcolor="#FAFAFA">
   <td>Auto-Correction
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Minimum and Definitive Level for Knowledge Graph Intent
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
<tr bgcolor="#FAFAFA">
   <td>KG Suggestions Count
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Proximity of Suggested Matches
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
<tr bgcolor="#FAFAFA">
   <td>Manage Long Responses
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Intent Preconditions
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
<tr bgcolor="#FAFAFA">
   <td>Context Output
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Supports All Platform Languages
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
</table>
