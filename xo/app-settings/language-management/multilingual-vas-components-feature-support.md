# Multilingual AI Agents: Components & Feature Support

In the case of multilingual AI Agents, while much of the assistant’s behavior does not change with the language, the semantics does impose some restrictions. In this document we will list out the different behaviors that would be language-dependent, so you can cater for such scenarios.

This article discusses language-specific components for multilingual AI Agents, as well as feature support and behavior, as compared to single language assistants. 

This article lists the AI Agent elements for which you can provide language-specific values. You need not translate Standard Responses as the Platform automatically translates them when you enable a language.



## Metadata

JSON object consisting of the following translatable elements

<table border="1">
<tr>
<td><strong>FIELD NAME</strong>
</td>
<td><strong>TYPE</strong>
</td>
<td><strong>DESCRIPTION</strong>
</td>
</tr>
<tr>
<td>App Name
</td>
<td>String
</td>
<td>Name of the assistant
</td>
</tr>
<tr>
<td>App Description
</td>
<td>String
</td>
<td>Description of the assistant
</td>
</tr>
<tr>
<td>AI Agent Synonyms
</td>
<td>Object
</td>
<td>Arrays of important words in the task names and their corresponding synonyms. Enter translation of the words as well as their synonyms. Refer to <a href="../../../automation/natural-language/training/fundamental-meaning/#manage-synonyms" target="_blank">Managing Synonyms</a> to learn more about AI Agent synonyms.
</td>
</tr>
<tr>
<td>App Error Codes
</td>
<td>Object
</td>
<td>Arrays of error codes and their corresponding messages. Enter translations of the error message. Refer to <a href="../../app-profile/#customizing-error-messages" target="_blank">Customizing Error Messages</a> to learn more about error messages.
</td>
</tr>
</table>

## Dialog Tasks

JSON object consisting of the following translatable components of your AI Agent's [Dialog Tasks](../../automation/use-cases/dialogs/dialog-tasks-overview.md){:target="_blank"}.

<table border="1">
<tr>
<td><strong>FIELD NAME</strong>
</td>
<td><strong>TYPE</strong>
</td>
<td><strong>DESCRIPTION</strong>
</td>
</tr>
<tr>
<td>Dialog Task Name
</td>
<td>String
</td>
<td>Name of the dialog task
</td>
</tr>
<tr>
<td>Dialog Task Desc
</td>
<td>String
</td>
<td>Description of the dialog task
</td>
</tr>
<tr>
<td>Dialog Task Upgrade Message
</td>
<td>String
</td>
<td>Message displayed to the developer on the History page for the upgraded task
</td>
</tr>
</table>



## Dialog Components

JSON object consisting of the following translatable components related to the NLP settings of a dialog task.

<table border="1">
<tr>
<td><strong>FIELD NAME</strong>
</td>
<td><strong>TYPE</strong>
</td>
<td><strong>DESCRIPTION</strong>
</td>
</tr>
<tr>
<td>Dialog Component Intent
</td>
<td>String
</td>
<td>Name of the User Intent node
</td>
</tr>
<tr>
<td>Dialog Component Description
</td>
<td>String
</td>
<td>Description of the User Intent node
</td>
</tr>
<tr>
<td>Dialog Component Synonyms
</td>
<td>Object
</td>
<td>Synonyms for the words in the entity node names. Refer to <a href="../../../automation/natural-language/training/fundamental-meaning/#manage-synonyms" target="_blank">Managing Synonyms</a> to learn more.
</td>
</tr>
<tr>
<td>Dialog Component Patterns
</td>
<td>Object
</td>
<td>Patterns for the User Intent and Entity nodes in the dialog task. Refer to <a href="../../../automation/natural-language/training/fundamental-meaning/#manage-patterns-and-rules" target="_blank">Managing Patterns</a> to learn more.
</td>
</tr>
</table>

## Message Templates

JSON object with arrays of Message Template IDs and Message Template Text values. They correspond to the **User Responses** field in the Message node and the **App Prompts** and **Error Prompts** fields in the [Entity node](../../automation/use-cases/dialogs/node-types/working-with-the-entity-node.md){:target="_blank"} of the dialog tasks.


<table border="1">
<tr>
<td><strong>FIELD NAME</strong>
</td>
<td><strong>TYPE</strong>
</td>
<td><strong>DESCRIPTION</strong>
</td>
</tr>
<tr>
<td>Message Template Text
</td>
<td>String
</td>
<td>The text entered in User Responses, App Prompts, or Error Prompts fields in any Message or Entity node of a dialog task.
</td>
</tr>
</table>



## Alert Task

JSON object consisting of the following translatable components of your assistant’s Alert Tasks.


<table border="1">
<tr>
<td><strong>FIELD NAME</strong>
</td>
<td><strong>TYPE</strong>
</td>
<td><strong>DESCRIPTION</strong>
</td>
</tr>
<tr>
<td>Alert Name
</td>
<td>String
</td>
<td>Name of the alert task
</td>
</tr>
<tr>
<td>Alert Short Desc
</td>
<td>String
</td>
<td>Description of the alert task
</td>
</tr>
<tr>
<td>Alert Keywords
</td>
<td>Array
</td>
<td>The search keywords entered for the alert task
</td>
</tr>
<tr>
<td>Alert Patterns
</td>
<td>Array
</td>
<td>Array of patterns related to the alert task’s name. Replace the pattern text with the translated text. Refer to <a href="../../../automation/natural-language/training/fundamental-meaning/#manage-patterns-and-rules" target="_blank">Managing Patterns</a> to learn more.
</td>
</tr>
<tr>
<td>Alert Field Synonyms
</td>
<td>Object
</td>
<td>Arrays consisting of synonyms for each task field. Replace the field name and the synonyms with the translated text. Refer to <a href="../../../automation/natural-language/training/fundamental-meaning/#manage-synonyms" target="_blank">Managing Synonyms</a> to learn more.
</td>
</tr>
<tr>
<td>Alert Field Patterns
</td>
<td>Object
</td>
<td>Arrays consisting of patterns for each task field. Replace the pattern text with the translated text. Refer to <a href="../../../automation/natural-language/training/fundamental-meaning/#manage-patterns-and-rules" target="_blank">Managing Patterns</a> to learn more.
</td>
</tr>
<tr>
<td>Alert Ignore Words
</td>
<td>Array
</td>
<td>Arrays of ignore words related to the alert task. Replace the words with the translated text. Refer to <a href="../../../automation/intelligence/conversation-management/ignore-words-and-field-memory/" target="_blank">Managing Ignore Words and Field Memory</a> to learn more.
</td>
</tr>
<tr>
<td>Alert Upgrade Short Message
</td>
<td>String
</td>
<td>Upgrade short message related to the alert task.
</td>
</tr>
<tr>
<td>Alert Upgrade Long Message
</td>
<td>String
</td>
<td>Upgrade long message related to the alert task.
</td>
</tr>
<tr>
<td>Alert Query Fields
</td>
<td>Object
</td>
<td>Arrays consisting of key-value pairs of Alert Field Help and Alert Field Title. Replace the text with the translated text.
</td>
</tr>
<tr>
<td>Alert Payload Fields
</td>
<td>Object
</td>
<td>Arrays consisting of key-value pairs of Alert Payload fields. Replace the text with the translated text.
</td>
</tr>
</table>



## Alert Fields

JSON object consisting of the following translatable components in the [API Request tab](../../automation/use-cases/alert-tasks.md){:target="_blank"} of the Alert task.

<table border="1">
<tr>
<td><strong>FIELD NAME</strong>
</td>
<td><strong>TYPE</strong>
</td>
<td><strong>DESCRIPTION</strong>
</td>
</tr>
<tr>
<td>Alert Field Title
</td>
<td>String
</td>
<td>The title of the user input field related to the alert task, for example, <em>Choose city</em>
</td>
</tr>
<tr>
<td>Alert Field Help
</td>
<td>String
</td>
<td>The help text displayed below the field title to describe the task, for example, <em>Which city would you like to get weather alerts for?</em>
</td>
</tr>
<tr>
<td>Alert Field Placeholder
</td>
<td>String
</td>
<td>The placeholder text displayed inside the field.
</td>
</tr>
</table>


## App Filters

JSON object consisting of the following translatable components related to app filters

<table border="1">
<tr>
<td><strong>FIELD NAME</strong>
</td>
<td><strong>TYPE</strong>
</td>
<td><strong>DESCRIPTION</strong>
</td>
</tr>
<tr>
<td>Filter Name
</td>
<td>String
</td>
<td>Name of the task filter
</td>
</tr>
</table>



## IDP Config Form Fields

JSON object consisting of the following translatable components related to IDP configuration form

<table border="1">
<tr>
<td><strong>FIELD NAME</strong>
</td>
<td><strong>TYPE</strong>
</td>
<td><strong>DESCRIPTION</strong>
</td>
</tr>
<tr>
<td>IDP Form Field
</td>
<td>String
</td>
<td>Name of the IDP Form Field displayed to the end-user in the authentication dialog
</td>
</tr>
</table>


## Pattern Support

Patterns can be used for Intent detection and Entity extraction. These rules are for AI Agent in the English language. In other languages, there may be differences. 

Patterns can be used in [Small Talk](../../automation/use-cases/small-talk.md#terminology){:target="_blank"} (while defining queries), [Knowledge Graph](../../automation/knowledge-ai/build-a-knowledge-graph.md){:target="_blank"} (using alternate question fields), and [Trait](../../automation/natural-language/training/traits.md#trait-definition){:target="_blank"} identification but their behavior might differ slightly. The table below provides an overview of how this may occur.

<table border="1">
<tr>
<td><strong>PATTERN SYNTAX</strong>
</td>
<td colspan="2" ><strong>INTENT DETECTION AND ENTITY EXTRACTION</strong>
</td>
<td><strong>SMALL</strong>

<strong>TALK</strong>
</td>
<td><strong>TRAITS</strong>
</td>
<td><strong>KNOWLEDGE</strong>

<strong>GRAPH</strong>
</td>
</tr>
<tr>
<td>
</td>
<td><strong>SUPPORTED <br>IN LANGUAGES</strong>
</td>
<td><strong>NOT SUPPORTED <br>IN LANGUAGES</strong>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
</tr>
<tr>
<td><strong>word1 word2 … wordn</strong>
<br>
This mandates all the words defined to be available in the user utterance in the same<br> consecutive order with additional words allowed in between, before and after.
</td>
<td>All languages
</td>
<td>–
</td>
<td>Yes
</td>
<td>Yes
</td>
<td>Yes
</td>
</tr>
<tr>
<td><strong>word1_word2</strong>
<br>
Enforce phrase, no additional words allowed in between word1 and word2.
</td>
<td>All languages
</td>
<td>–
</td>
<td>Yes
</td>
<td>Yes
</td>
<td>Yes
</td>
</tr>
<tr>
<td><strong>word1 * word2</strong>
<br>
0 to infinite number of additional words between the specified words/phrases
</td>
<td>All languages
</td>
<td>–
</td>
<td>Yes
</td>
<td>Yes
</td>
<td>Yes
</td>
</tr>
<tr>
<td><strong>word1 *n word2</strong>
<br>
Exactly <em>n</em> number of additional words between the specified words/phrases
</td>
<td>All languages
</td>
<td>–
</td>
<td>Yes
</td>
<td>Yes
</td>
<td>Yes
</td>
</tr>
<tr>
<td><strong>word1 *0 word2</strong>
<br>
To disable wildcards between two tokens.
</td>
<td>All languages
</td>
<td>–
</td>
<td>Yes
</td>
<td>Yes
</td>
<td>Yes
</td>
</tr>
<tr>
<td><strong>word1 &lt; word2</strong>
<br>
Indicates the match for word2 should start from the beginning of a sentence.
</td>
<td>All languages
</td>
<td>–
</td>
<td>Yes
</td>
<td>Yes
</td>
<td>Yes
</td>
</tr>
<tr>
<td><strong>word1 > word2</strong>
<br>
Indicates the end of the sentence and no words are allowed after it.
</td>
<td>All languages
</td>
<td>–
</td>
<td>Yes
</td>
<td>Yes
</td>
<td>Yes
</td>
</tr>
<tr>
<td><strong>!abc</strong>
<br>
Indicates the word/concept “abc” should not exist anywhere in the user <br>utterance after this token
</td>
<td>All languages
</td>
<td>–
</td>
<td>Yes
</td>
<td>Yes
</td>
<td>Yes
</td>
</tr>
<tr>
<td><strong>!!abc</strong>
<br>
The very next word/concept should not be “abc”
</td>
<td>All languages
</td>
<td>–
</td>
<td>Yes
</td>
<td>Yes
</td>
<td>Yes
</td>
</tr>
<tr>
<td><strong>[ … ]</strong>
<br>
Used to define a group of words/concepts and the match should be against <br>exactly one of the group declared in [ ].
</td>
<td>All languages
</td>
<td>–
</td>
<td>Yes
</td>
<td>Yes
</td>
<td>Yes
</td>
</tr>
<tr>
<td><strong>{ … }</strong>
<br>
Used to define an optional group or words/concepts and the match would be<br> against zero or one of the words/patterns declared in { }.
</td>
<td>All languages
</td>
<td>–
</td>
<td>Yes
</td>
<td>Yes
</td>
<td>Yes
</td>
</tr>
<tr>
<td><strong>( … )</strong>
<br>
contain a pattern i.e when a pattern or part of a pattern is enclosed in these<br> parentheses, we treat it as a pattern unlike [ ] and { }.
</td>
<td>All languages
</td>
<td>–
</td>
<td>Yes
</td>
<td>Yes
</td>
<td>Yes
</td>
</tr>
<tr>
<td><strong><&lt; … >></strong>
<br>
Used to find words in any order
</td>
<td>All languages
</td>
<td>–
</td>
<td>Yes
</td>
<td>Yes
</td>
<td>Yes
</td>
</tr>
<tr>
<td><strong>‘word1</strong>
<br>
If you quote words or use words that are not in canonical form, the system will<br> restrict itself to what you used in the pattern
</td>
<td>All languages
</td>
<td>–
</td>
<td>No
</td>
<td>No
</td>
<td>No
</td>
</tr>
<tr>
<td><strong>System Concepts</strong>
<br>
Support for built-in concepts
</td>
<td>

English,
<br><br>
German,
<br><br>
Spanish,
<br><br>
French
</td>
<td>

Portuguese (Brazilian),
<br><br>
Portuguese (European),
<br><br>
Italian,
<br><br>
Chinese simplified,
<br><br>
Chinese traditional,
<br><br>
Indonesian,
<br><br>
Korean,
<br><br>
Dutch,
<br><br>
Japanese,
<br><br>
Arabic,
<br><br>
Finnish,
<br><br>
Russian,
<br><br>
Polish,
<br><br>
Ukrainian,
<br><br>
Swedish,
<br><br>
Kazakh,
<br><br>
Norwegian,
<br><br>
Hindi,
<br><br>
Telugu,
<br><br>
Tamil,
<br><br>
Marathi,
<br><br>
Catalan,
<br><br>
Tagalog
</td><br>
<td>No
</td>
<td>No
</td>
<td>No
</td>
</tr>
<tr>
<td><strong>Developer concepts</strong>
<br><br>
Support for developer-defined concepts
</td>
<td>

English,
<br><br>
German,
<br><br>
Spanish,
<br><br>
French,
<br><br>
Portuguese (Brazilian)*,
<br><br>
Italian*,
<br><br>
Chinese simplified*,
<br><br>
Chinese traditional*,
<br><br>
Indonesian*,
<br><br>
Korean*,
<br><br>
Dutch*,
<br><br>
Japanese*,
<br><br>
Arabic*,
<br><br>
Finnish*,
<br><br>
Russian*,
<br><br>
Polish*,
<br><br>
Ukrainian*,
<br><br>
Swedish*,
<br><br>
Kazakh*,
<br><br>
Norwegian*,
<br><br>
Hindi*,
<br><br>
Telugu*,
<br><br>
Tamil*,
<br><br>
Marathi*,
<br><br>
Catalan*
</td>
<td>–
</td>
<td>Yes
</td>
<td>Yes
</td>
<td>Yes*
</td>
</tr>
<tr>
<td><strong>Two-letter identifiers for Dates</strong>
<br>
Like Mo for Monday, Tu for Tuesday, etc
</td>
<td>

English,
<br><br>
German,
<br><br>
Spanish,
<br><br>
Portuguese (Brazilian),
<br><br>
Portuguese (European),
<br><br>
Italian,
<br><br>
Chinese simplified,
<br><br>
Chinese traditional,
<br><br>
Indonesian,
<br><br>
Korean,
<br><br>
Dutch,
<br><br>
Japanese,
<br><br>
Arabic,
<br><br>
Finnish,
<br><br>
Russian,
<br><br>
Polish,
<br><br>
Ukrainian,
<br><br>
Swedish,
<br><br>
Kazakh,
<br><br>
Norwegian,
<br><br>
Hindi
</td>
<td>

French,
<br><br>
Telugu,
<br><br>
Tamil,
<br><br>
Marathi,
<br><br>
Catalan,
<br><br>
Tagalog
</td>
<td>–
</td>
<td>–
</td>
<td>No
</td>
</tr>
</table>


'*' - In these cases, developer concepts are not supported in entity extraction


## NLP Support

Here are the NLP features supported by Multilingual AI Agents:


<table border="1">
<tr>
<td><strong>NLP FEATURE</strong>
</td>
<td><strong>SUPPORTED IN LANGUAGES</strong>
</td>
<td><strong>NOT SUPPORTED IN LANGUAGES</strong>
</td>
<td><strong>SMALL TALK</strong>
</td>
<td><strong>TRAITS</strong>
</td>
<td><strong>KNOWLEDGE GRAPH</strong>
</td>
</tr>
<tr>
<td><strong>LIST OF VALUES</strong>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
</tr>
<tr>
<td>Full Match
</td>
<td>All languages
</td>
<td>–
</td>
<td>–
</td>
<td>–
</td>
<td>No
</td>
</tr>
<tr>
<td>Partial Match
</td>
<td>All languages
</td>
<td>–
</td>
<td>–
</td>
<td>–
</td>
<td>No
</td>
</tr>
<tr>
<td>Exact Match
</td>
<td>All languages
</td>
<td>–
</td>
<td>–
</td>
<td>–
</td>
<td>No
</td>
</tr>
<tr>
<td>Ambiguity behavior
</td>
<td>All languages
</td>
<td>–
</td>
<td>–
</td>
<td>–
</td>
<td>No
</td>
</tr>
<tr>
<td>Ambiguity with multi-item selection
</td>
<td>English
</td>
<td>Not supported in any language except English
</td>
<td>–
</td>
<td>–
</td>
<td>No
</td>
</tr>
<tr>
<td><strong>Spell Correction</strong>
</td>
<td>

English,
<br><br>
German,
<br><br>
Spanish,
<br><br>
French,
<br><br>
Portuguese (Brazilian),
<br><br>
Portuguese (European),
<br><br>
Italian,
<br><br>
Indonesian,
<br><br>
Korean (from ver7.3),
<br><br>
Dutch,
<br><br>
Arabic,
<br><br>
Finnish,
<br><br>
Russian
<br><br>
Polish,
<br><br>
Ukrainian,
<br><br>
Swedish,
<br><br>
Kazakh,
<br><br>
Norwegian
</td>
<td>

Chinese simplified,
<br><br>
Chinese traditional,
<br><br>
Japanese,
<br><br>
Hindi,
<br><br>
Telugu,
<br><br>
Tamil,
<br><br>
Marathi
</td>
<td>–
</td>
<td>–
</td>
<td>Yes
</td>
</tr>
<tr>
<td><strong>Amend Entities</strong>
</td>
<td>English
</td>
<td>Not supported in any language except English
</td>
<td>–
</td>
<td>–
</td>
<td>Yes
</td>
</tr>
<tr>
<td><strong>Sentiment Analysis</strong>
</td>
<td>

English,
<br><br>
German,
<br><br>
Spanish,
<br><br>
French,
<br><br>
Dutch,
<br><br>
Korean (from ver7.3),
<br><br>
Japanese (from ver8.0),
<br><br>
Russian (from ver8.0),
<br><br>
Kazakh (from ver8.0),
<br><br>
Norwegian,
<br><br>
Tagalog,
<br><br>
Portuguese (European)
</td>
<td>

Portuguese (Brazilian),
<br><br>
Italian,
<br><br>
Chinese simplified,
<br><br>
Chinese traditional
<br><br>
Indonesian,
<br><br>
Arabic,
<br><br>
Finnish,
<br><br>
Polish,
<br><br>
Ukrainian,
<br><br>
Swedish,
<br><br>
Hindi,
<br><br>
Telugu,
<br><br>
Tamil,
<br><br>
Marathi,
<br><br>
Catalan
</td>
<td>–
</td>
<td>–
</td>
<td>Yes
</td>
</tr>
<tr>
<td><strong>App Synonyms (default)</strong>
</td>
<td>

English,
<br><br>
German,
<br><br>
Spanish,
<br><br>
French,
<br><br>
Tagalog
</td>
<td>

Portuguese (Brazilian),
<br><br>
Portuguese (European),
<br><br>
Italian,
<br><br>
Chinese simplified,
<br><br>
Chinese traditional
<br><br>
Indonesian,
<br><br>
Korean,
<br><br>
Dutch,
<br><br>
Japanese,
<br><br>
Arabic,
<br><br>
Finnish,
<br><br>
Russian
<br><br>
Polish,
<br><br>
Ukrainian,
<br><br>
Swedish,
<br><br>
Kazakh
</td>
<td>–
</td>
<td>–
</td>
<td>Yes
</td>
</tr>
<tr>
<td><strong>Knowledge Graph</strong>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
</tr>
<tr>
<td>Patterns
</td>
<td>All Languages
</td>
<td>–
</td>
<td>–
</td>
<td>–
</td>
<td>Yes
</td>
</tr>
<tr>
<td>Search in Answer
</td>
<td>

English,
<br><br>
German (from ver7.3),
<br><br>
Spanish (from ver7.3),
<br><br>
French (from ver7.3),
<br><br>
Portuguese (Brazilian) (from ver7.3),
<br><br>
Italian (from ver7.3),
<br><br>
Indonesian (from ver7.3),
<br><br>
Dutch (from ver7.3),
<br><br>
Finnish (from ver7.3),
<br><br>
Polish (from ver7.3),
<br><br>
Swedish (from ver7.3),
<br><br>
Tagalog,
<br><br>
Portuguese (European)
</td>
<td>

Chinese simplified,
<br><br>
Chinese traditional,
<br><br>
Korean,
<br><br>
Japanese,
<br><br>
Arabic,
<br><br>
Russian,
<br><br>
Ukrainian,
<br><br>
Kazakh
</td>
<td>–
</td>
<td>–
</td>
<td>Yes
</td>
</tr>
<tr>
<td>Spell Correction
</td>
<td>

English,
<br><br>
German,
<br><br>
Spanish,
<br><br>
French,
<br><br>
Portuguese (Brazilian),
<br><br>
Italian,
<br><br>
Indonesian,
<br><br>
Korean,
<br><br>
Dutch,
<br><br>
Arabic,
<br><br>
Finnish,
<br><br>
Polish,
<br><br>
Swedish,
<br><br>
Ukrainian
<br><br>
Russian (from ver8.0),
<br><br>
Kazakh (from ver8.0),
<br><br>
Japanese (from ver8.0),
<br><br>
Portuguese (European)
</td>
<td>

Chinese simplified,
<br><br>
Chinese traditional,
<br><br>
Catalan,
<br><br>
Tagalog
</td>
<td>–
</td>
<td>–
</td>
<td>Yes
</td>
</tr>
<tr>
<td>Special Character support
</td>
<td>All languages except English
</td>
<td>English
</td>
<td>–
</td>
<td>–
</td>
<td>Yes
</td>
</tr>
<tr>
<td><strong>NL Engines</strong>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
</tr>
<tr>
<td>Dependency Parser Model
</td>
<td>

German (from ver7.3),
<br><br>
French (from ver7.3),
<br><br>
Italian (from ver8.0)
</td>
<td>

English,
<br><br>
Spanish,
<br><br>
Portuguese (Brazilian),
<br><br>
Portuguese (European),
<br><br>
Chinese simplified,
<br><br>
Chinese traditional
<br><br>
Indonesian,
<br><br>
Korean,
<br><br>
Dutch,
<br><br>
Japanese,
<br><br>
Arabic,
<br><br>
Finnish,
<br><br>
Russian
<br><br>
Polish,
<br><br>
Ukrainian,
<br><br>
Swedish,
<br><br>
Kazakh,
<br><br>
Norwegian,
<br><br>
Hindi
</td>
<td>–
</td>
<td>–
</td>
<td>–
</td>
</tr>
</table>