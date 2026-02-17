# Multilingual AI Agent Behavior

In the case of multi-lingual AI Agent, while much of the AI Agent behavior does not change with the language, but the language semantics does impose some restrictions. In this document we will list out the different behaviors that would be language-dependent, so you as app developer can cater for such scenarios.


## Pattern Support

Patterns can be used for Intent detection and Entity extraction. Those rules are for AI Agents in the English language. Though the multilingual AI Agents honor those rules, the language semantics impose some restrictions.

Also, patterns can also be used in [Small Talk](../../automation/use-cases/small-talk.md#terminology){:target="_blank"} (while defining queries), [Knowledge Graph](../../automation/knowledge-ai/build-a-knowledge-graph.md){:target="blank"} (using alternate question field), and [Trait](../../automation/natural-language/training/traits.md#trait-definition){:target="_blank"} identification but their behavior might differ slightly.


<table border="1">
<tr>
<td><strong>Pattern syntax</strong></td>
<td colspan="2"><strong>Intent detection and entity extraction</strong></td>
<td><strong>Small talk</strong></td>
<td><strong>Traits</strong></td>
<td><strong>Knowledge graph</strong></td>
</tr>
<tr>
<td></td>
<td>Supported languages</td>
<td>Unsupported languages</td>
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
This mandates all the words defined to be available in the user utterance in the same consecutive order with additional words allowed in between, before and after
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
<td> –
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
<td> –
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
<td> –
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
<td> –
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
<td> –
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
<td> –
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
Indicates the word/concept “abc” should not exist anywhere in the user utterance after this token
</td>
<td>All languages
</td>
<td> –
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
<td> –
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
Used to define a group of words/concepts and the match should be against exactly one of the group declared in [ ].
</td>
<td>All languages
</td>
<td> –
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
Used to define an optional group or words/concepts and the match would be against zero or one of the words/patterns declared in { }.
</td>
<td>All languages
</td>
<td> –
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
contain a pattern i.e when a pattern or part of a pattern is enclosed in these parentheses, we treat it as a pattern unlike [ ] and { }.
</td>
<td>All languages
</td>
<td> –
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
<td> –
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
If you quote words or use words that are not in canonical form, the system will restrict itself to what you used in the pattern
</td>
<td>All languages
</td>
<td>  –
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
<br>
German,
<br>
Spanish,
<br>
French
</td>
<td>

Portuguese (Brazilian),
<br>
Italian,
<br>
Chinese simplified,
<br>
Chinese traditional,
<br>
Indonesian,
<br>
Korean,
<br>
Dutch,
<br>
Japanese,
<br>
Arabic,
<br>
Finnish,
<br>
Russian,
<br>
Polish,
<br>
Ukrainian,
<br>
Swedish,
<br>
Kazakh,
<br>
Norwegian,
<br>
Hindi,
<br>
Telugu,
<br>
Tamil,
<br>
Marathi,
<br>
Catalan,
<br>
Tagalog,
<br>
Portuguese (European)
</td>
<td>No
</td>
<td>No
</td>
<td>No
</td>
</tr>
<tr>
<td><strong>Developer concepts</strong>
<br>
Support for developer-defined concepts
</td>
<td>

English,
<br>
German,
<br>
Spanish,
<br>
French,
<br>
Portuguese (Brazilian)*,
<br>
Italian*,
<br>
Chinese simplified*,
<br>
Chinese traditional*,
<br>
Indonesian*,
<br>
Korean*,
<br>
Dutch*,
<br>
Japanese*,
<br>
Arabic*,
<br>
Finnish*,
<br>
Russian*,
<br>
Polish*,
<br>
Ukrainian*,
<br>
Swedish*,
<br>
Kazakh*,
<br>
Norwegian*,
<br>
Hindi*,
<br>
Telugu*,
<br>
Tamil*,
<br>
Marathi*,
<br>
Catalan*
</td>
<td> –
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
<br>
German,
<br>
Spanish,
<br>
Portuguese (Brazilian),
<br>
Italian,
<br>
Chinese simplified,
<br>
Chinese traditional,
<br>
Indonesian,
<br>
Korean,
<br>
Dutch,
<br>
Japanese,
<br>
Arabic,
<br>
Finnish,
<br>
Russian,
<br>
Polish,
<br>
Ukrainian,
<br>
Swedish,
<br>
Kazakh,
<br>
Norwegian,
<br>
Hindi
</td>
<td>

French,
<br>
Telugu,
<br>
Tamil,
<br>
Marathi,
<br>
Catalan,
<br>
Tagalog,
<br>
Portuguese (European)
</td>
<td>–
</td>
<td>–
</td>
<td>No
</td>
</tr>
</table>


‘*’ - In these cases, developer concepts are not supported in entity extraction


## NLP Support

Here we will list out the NLP features and their support.


!!! note

      The Spell Correction feature is not supported in Universal Apps.


<table border="1">
<tr>
<td><strong>NLP feature</strong></td>
<td><strong>Supported languages</strong></td>
<td><strong>Unsupported languages</strong></td>
<td><strong>Small talk</strong></td>
<td><strong>Traits</strong></td>
<td><strong>Knowledge graph</strong></td>
</tr>
<tr>

<td><strong>List of Values</strong>
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
<td> All languages
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
<td> All languages
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
<td> All languages
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
<td> All languages
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
<td> English
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
<br>
German,
<br>
Spanish,
<br>
French,
<br>
Portuguese (Brazilian),
<br>
Portuguese (European),
<br>
Italian,
<br>
Indonesian,
<br>
Korean (from ver7.3),
<br>
Dutch,
<br>
Arabic,
<br>
Finnish,
<br>
Russian
<br>
Polish,
<br>
Ukrainian,
<br>
Swedish,
<br>
Kazakh,
<br>
Norwegian
</td>
<td>

Chinese simplified,
<br>
Chinese traditional,
<br>
Japanese,
<br>
Hindi,
<br>
Telugu,
<br>
Tamil,
<br>
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
<br>
German,
<br>
Spanish,
<br>
French,
<br>
Dutch,
<br>
Korean (from ver7.3),
<br>
Japanese (from ver8.0),
<br>
Russian (from ver8.0),
<br>
Kazakh (from ver8.0),
<br>
Polish (from ver9.2),
<br>
Norwegian,
<br>
Portuguese (European)
</td>
<td>

Portuguese (Brazilian),
<br>
Italian,
<br>
Chinese simplified,
<br>
Chinese traditional
<br>
Indonesian,
<br>
Arabic,
<br>
Finnish,
<br>
Ukrainian,
<br>
Swedish,
<br>
Hindi,
<br>
Telugu,
<br>
Tamil,
<br>
Marathi,
<br>
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
<br>
German,
<br>
Spanish,
<br>
French
</td>
<td>

Portuguese (Brazilian),
<br>
Portuguese (European),
<br>
Italian,
<br>
Chinese simplified,
<br>
Chinese traditional
<br>
Indonesian,
<br>
Korean,
<br>
Dutch,
<br>
Japanese,
<br>
Arabic,
<br>
Finnish,
<br>
Russian
<br>
Polish,
<br>
Ukrainian,
<br>
Swedish,
<br>
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
<br>
German (from ver7.3),
<br>
Spanish (from ver7.3),
<br>
French (from ver7.3),
<br>
Portuguese (Brazilian) (from ver7.3),
<br>
Italian (from ver7.3),
<br>
Indonesian (from ver7.3),
<br>
Dutch (from ver7.3),
<br>
Finnish (from ver7.3),
<br>
Polish (from ver7.3),
<br>
Swedish (from ver7.3),
</td>
<td>

Chinese simplified,
<br>
Chinese traditional,
<br>
Korean,
<br>
Japanese,
<br>
Arabic,
<br>
Russian,
<br>
Ukrainian,
<br>
Kazakh,
<br>
Portuguese (European)
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
<br>
German,
<br>
Spanish,
<br>
French,
<br>
Portuguese (Brazilian),
<br>
Portuguese (European),
<br>
Italian,
<br>
Indonesian,
<br>
Korean,
<br>
Dutch,
<br>
Arabic,
<br>
Finnish,
<br>
Polish,
<br>
Swedish,
<br>
Ukrainian
<br>
Russian (from ver8.0),
<br>
Kazakh (from ver8.0),
<br>
Japanese (from ver8.0),
</td>
<td>

Chinese simplified,
<br>
Chinese traditional,
<br>
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
<br>
French (from ver7.3),
<br>
Italian (from ver8.0)
</td>
<td>

English,
<br>
Spanish,
<br>
Portuguese (Brazilian),
<br>
Chinese simplified,
<br>
Chinese traditional
<br>
Indonesian,
<br>
Korean,
<br>
Dutch,
<br>
Japanese,
<br>
Arabic,
<br>
Finnish,
<br>
Russian
<br>
Polish,
<br>
Ukrainian,
<br>
Swedish,
<br>
Kazakh,
<br>
Norwegian,
<br>
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


