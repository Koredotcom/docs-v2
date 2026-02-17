[ :octicons-arrow-left-24: Back to NLP Topics](../../nlp-topics.md)

# Knowledge Graph Terminology

This article explains the terminology for [Building a Knowledge Graph](build-a-knowledge-graph.md) within the XO Platform. This terminology applies to both the Few-Shot and the Ontology KG Models unless otherwise specified. [Learn more](knowledge-ai-introduction.md).

## Terms or Nodes

Terms or Nodes are the building blocks of an ontology and are used to define the fundamental concepts and categories of a Knowledge Graph.

You can organize the terms in a hierarchical order to represent the flow of information in your graph. You can create, organize, edit, and delete terms and set term types to facilitate intent identification 

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p>The Knowledge graph is limited to 20 thousand nodes/terms and 50 thousand FAQs.</p>
</div>

### Node/Term Hierarchy

For easier representation, we identify node/term hierarchy using the following names:

### Root Term/Node

The **Root Term/Node** forms the topmost term of your Ontology. A Knowledge Graph contains only one root node, and all other nodes in the ontology become its child nodes. The *Root* node takes the name of the AI Agent by default, but you can change it as needed. In an Ontology-based KG, this node is not used for path qualification or processing. Path qualification starts from first-level nodes. 

For Ontology-Based graphs, it is best to organize your FAQs into a clear structure, so we don’t recommend adding them at the *Root* node. However, you can add a maximum of 100 FAQs, if required. 

### First-level Term/Node

The immediate next-level nodes after the *Root* node are known as **_First-Level Term/Node_**. There can be any number of first-level nodes in a graph. 

We recommend using first-level nodes to represent high-level terms, such as the names of departments, functionalities, etc. 

For example, in a Travel Assistant, you might have a first-level node called *Reservation*, which can be structured by functionality into subnodes such as: *Cancel and Update*.

### Leaf Term/Node

Any node at any level starting with the 2nd is called a **_Leaf Term/Node_**.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>This hierarchical organization of nodes is for your convenience to keep related questions together.</li>
<li>The Knowledge Graph Engine does not consider any parent-child relation while evaluating the questions for a match.</li>
<li>The hierarchy does not influence the FAQ matching process since all the nodes are considered the same way, irrespective of their position.</li>

<img src="../images/leaf-term-node.png" alt="leaf term" title="leaf term" style="border: 1px solid gray; zoom:75%;"></ul></p>
</div>

### Term/Node Types

Functionally, there are three types of Terms/Nodes.

* **Default**: Default terms do not have any particular considerations in shortlisting qualified paths in Ontology-based KGs. 
* **Mandatory**: When you mark a term as _Mandatory_, paths associated with it are shortlisted for ranking only if the user’s utterance includes the mandatory term or its synonyms.
* **Organizer**: This term type can be marked as part of the Knowledge Graph to organize the ontology and help qualify FAQs even when they don’t contain the specific terms.

    <img src="../images/organizer-term.png" alt="organizer term" title="organizer term" style="border: 1px solid gray; zoom:75%;">

## Tags

For each term/node, you can add custom [tags](#tags). Tags work exactly like terms but are not displayed in the Knowledge Graph ontology to avoid clutter. You can add synonyms and traits to tags as you do to terms.

## Synonyms

The Knowledge Graph allows you to add [Synonyms](#synonyms) for terms to include all possible alternative forms. Adding synonyms reduces the need for training the AI Agent with alternative questions.

For example, the reservation node in our previously-mentioned Travel Assistant may have the following synonyms added to it: booking, order, purchase, etc. 

### Synonym Types

When you add a synonym for a term or a tag in the Knowledge Graph, you can add it as a local or global synonym. Local synonyms (or **_Path Level Synonyms_**) apply to the term only in that particular path, whereas global synonyms (or **_Knowledge Graph Synonyms_**) apply to the term even if it appears on any other path in the ontology.

You can also use **_Bot Synonyms_** inside the Knowledge Graph engine for path qualification and question matching. With this setting, you need not recreate the same synonyms in Bot Synonyms and KG Synonyms.

## Traits

A trait is a collection of typical end-user utterances that define the nature of a question. [Learn more](../natural-language/training/traits.md).

A trait is applied to multiple terms across your Bot Ontology.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>Traits also help you filter nodes based on associated user utterances. Thus, if the user types an utterance that is present in a trait, the assistant only searches the nodes to which the trait is applied.</li> 
<li>If the utterance is present in any other node to which the trait is not applied, the node is ignored.</li></ul></p>
</div>

## Intents

An AI Agent can respond to a given question with an FAQ or the execution of a Dialog Task.

* **FAQ**: The question-answer pairs must be added to relevant nodes in your ontology. A maximum of 50k FAQs is permissible. A question is asked differently by different users, and to support this, you must associate multiple alternate forms for each question. Preceding an alternate question with || will allow you to enter patterns for FAQs.

    <img src="../images/faq-intent-bot-response.png" alt="faq intent and bot response" title="faq intent and bot response" style="border: 1px solid gray; zoom:75%;">

* **Task**: Linking a Dialog task to a KG Intent helps leverage the capabilities of the Knowledge Graph and Dialog tasks to handle FAQs that involve complex conversations.

    <img src="../images/link-dialog-task-to-kg-intent.png" alt="link dialog task to kg intent" title="link dialog task to kg intent" style="border: 1px solid gray; zoom:75%;">

<div class="admonition note">
<p class="admonition-title">Important</p>
<p><ul><li>For Few-shot graphs, you can add all your FAQs to the Root node because the LLM does not require an ontology.</li>
<li>Default terms are not available in Few-Shot Knowledge Graphs. The only exception is when you switch from an Ontology Graph, in which case existing Default terms are stored as such until updated. Afterward, Default terms become Organizer terms and can be set as Mandatory.</li>
<li>Path Level Synonyms are only supported for Mandatory Terms and for Tags.</li></ul></p>
</div>
