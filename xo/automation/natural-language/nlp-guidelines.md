[ :octicons-arrow-left-24: Back to NLP Topics](../../nlp-topics.md)

# NLP Settings and Guidelines

This article provides you with some essential guidelines to optimize your workflow with the Platform’s NLP, and thus improve your app’s performance. Please refer to the guidance below before intent naming, ML training, and handling entities, concepts, and synonyms.

## Intent Naming Guidelines

The below guidelines help name your task (intent identifier) optimally:

* Use an action verb, an object, and possibly a modifier (placed before or after the object). Typically, an intent name consists of 2 to 4 words.
* Use less than 5 words to convey the purpose of the task.
* Use the same verb in different tasks if the action is similar (For example, Show Issue/Show Report instead of Show Issue/Get Report).
* Avoid single-word actions.
* Avoid determiners (the, a, my, that, etc.)
* Avoid digits but if you cannot, always use the numerical form.
* Avoid Kore.ai Platform terms such as task, alert, action, cancel, discard, amend, and webhook.
* Avoid using a potential entity in an intent name (For example, Get Weather Today, where today is a potential entity).
* Don’t use special characters such as () & / \ $ [ ] + *.
* Don’t use punctuation such as – , . ! ? ‘ “.
* Don’t use pronouns (i.e. Show Me All Issues)
* Don’t use terms related to the app name (For example, Create Asana Task).
* Don’t use a word both as a verb and as a noun (For example, Update Issue/Get Updates).
* For List of Items entity type, do not have the combination of following characters while defining synonyms – (), %, ° (degree symbol for degrees i.e. 30°C).

Dialog Tasks must always contain an action verb, an object, and possibly a modifier (placed before or after the object). You must map almost all actions to the form _how + what_ and complete the sentence _the goal is to_:

* _Do Something_
* _Get Status_
* _Send Detailed Report_
* _Email Report Critical_
* _Get 3 Day Forecast_

Alerts must contain an object and possibly a modifier (placed before or after the object). Avoid using verbs in alert altogether. Avoid using the word _alert_ in an alert name. Alerts must be mapped to the form _what_ and complete the sentence _alert me on:_

* Something
* Status Updates
* Critical Status Update
* Changes

## ML Training Guidelines

Here are a few recommendations that will improve the training of the Machine Learning engine within your app:

### General Recommendations

* Batch test suites are compulsory, for comparing various ML models. Run the batch suite, configure the parameters, re-run the suite and compare the results.
* There is no set rule as to which ML model to go for. It is a trial and error method –  configure the engine, run batch suites and compare results.
* If your dataset is large, then the stop words and synonyms are recognized automatically by the ML engine and taken care of without having to enable them explicitly.
* Check for influencer words and if needed add them as stop words, for the n-gram algorithm.
* Prepare examples that are as diverse as possible.
* Avoid adding noise or pleasantries. If unavoidable, add noise so that it is equally represented across intents, else you can easily overfit noise to intents.

### Using the Confusion Matrix

The Confusion Matrix can be used to identify training sentences that are borderline and fix them accordingly. Each dot in the matrix represents an utterance and can be individually edited. 

The graph can further be studied for each of the following parameters:

* Prevent false positives and false negatives by assigning the utterance to the correct intent. Click on the dot and on the edit utterance page assign the utterance to the correct intent.
* Improve cohesion by adding synonyms or rephrasing the utterance. Cohesion can be defined as the similarity between each pair of intents. The higher the cohesion the better the intent training. 
* Enlarge the distance between each pair of training phrases in the two intents. The larger the distance the better the prediction.
* Confusing phrases should be avoided i.e. phrases that are similar between intents.

### Using The K-fold Model 

The K-fold Model is ideal for large datasets, but can be used for less data too with two-folds. Track and fine-tune the F1-score, Precision, and Recall as per your requirements. A higher value of recall score is recommended.

## Patterns

While using synonyms is great for words used in the name, users may sometimes refer to a task using slang, metaphors, or other idiomatic expressions.

For example, a task name might be _Get Current Weather_, but the user inputs, _What’s happening with today’s rain situation?_. In such cases, none of the words used in the task name are used, yet the input has the same meaning. To optimize the accuracy and recognition of the NLP interpreter, you can create patterns.

When the [NLP](nlp-introduction.md){:target="_blank"} interpreter matches a synonym to one task or field, and a pattern to a different task or field, the pattern match is prioritized and used for recognition over the synonym match.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Patterns are evaluated in the order of their listing, so ensure  that you add patterns in the order of most restrictive to least restrictive.</p>
</div>

The following are some general guideline for creating intent patterns:

* Use a minimum of 3 words.
* Use words in their canonical forms (i.e. infinitive verbs, singular nouns).
* Use lowercase both for words and their synonyms.
* Use the US spelling of words (i.e. _normalize_ instead of _normalize_).
* Avoid using determiners and pronouns (the, a, my, that).
* Avoid using digits.
* Avoid using entity values in defining a task pattern.
* Don’t use elision (i.e. what’s ).
* Don’t use special characters such as () & / \ $ [ ] + *.
* Don’t use punctuation such as – , . ! ? ‘ “.



### Pattern Operators

* **AND: ( X Y )**: An ordered relationship of words in sequence. This is the default setting. i.e. when you specify a pattern as _cancel booking, it _is the same as _(cancel booking )_. 
For example, _(Cancel booking )_ matches _Cancel my flight booking_ but doesn’t match _I have booked a flight, can I cancel?_. The Platform uses patterns with increasing numbers of wildcards between words (up to 3 for an intent). So a pattern of _Cancel Order_ can match:
    * cancel booking,
    * cancel my booking,
    * cancel that last booking,
    * cancel last week’s booking.
* **OR: [X Y Z]**: Any of these can be interchangeably used in the user utterance. For example, ([get make] me [food drink dessert]) will match any of the below utterances:
    * Get me food,
    * Make me a drink,
    * Get me a drink,
    * Get me a dessert,
    * Make me some quick food.
* **NOT: !X**: Words that should not appear in the user utterance for an intent match. For example, (!forecast) is marked as a pattern for an intent named _Get current weather_ and the app supports another intent called _Get 3-day weather forecast._
    * User utterance: _Planning a trip to California get me the forecast_
        * will not match _Get current weather_
        * will match _Get 3-day weather forecast.
_Note that the word means _not after this point_. So (!forecast the weather) and (get the weather !forecast) are different. The utterance _get the forecast for the weather_ matches the second but not the first.
* **Optional: {X}**: For example, {phone} If the user utterance is _Get me a phone number_ or _get me a number_ the Platform will treat it equally.
* **Enforce Phrase:** X_Y: To enforce occurrence of the phrase as is in the user utterance, without any words in between. For example, book_tickets. The utterance _book tickets_ or _I want to book tickets _will match but not _Can I book some tickets?_.
* **Concepts**: The Platform has a large set of inbuilt concepts that developers can use to define a pattern. For example, (I [like love] ~world_country) will match
    * I like India,
    * I love traveling to Australia,
    * I would like to visit an African country.
* **Unordered: &lt;<, >>**: Used to find words in any order. For example, &lt;<Cancel Booking>> matches _Cancel my flight booking_ and also _I have a flight booking, can I cancel?._
* **Start/End of Statement: &lt;, >:** For example, ( _book tickets  >_ ) will match _I want to book tickets_but will not match _book tickets tomorrow._
* **Quote: ‘ –**: If you quote words or use words that are not in canonical form, the system will restrict itself to what you used in the pattern. For example, (_like to book tickets_) This matches _I would like to book tickets for a trip to London _but not _I need to book tickets for a trip to London_. 

### Entity Patterns

As above, to detect entities, developers can use a combination of entity patterns and NER training. Entity patterns guide the Platform to where to look for a valid value for the entity. It is possible for an entity pattern to be found in several places in a sentence and the Platform will extract the value from the first instance that has a valid value. Apart from the task pattern guidelines above, follow the below guideline for entity patterns:

* Include the positional wildcard * that indicates the expected position of the entity ( i.e. (from * to), (in * >)); without it the pattern is invalid.
* Use words that should be present in the pattern before and after the position of the entity. Words after the positional wildcard help to delimit the search range for a valid entity value.
* Use start and end of sentence symbols (&lt; and >) to separate the positional wildcard, but these are not strictly necessary because the Platform tool does not cross a sentence boundary to extract an entity value (except for a Description).
* Don’t use other positional wildcards in your field pattern. All field patterns are processed in the same way and all other positional wildcards except one are ignored.
* Don’t use field names or their synonyms in patterns or entity patterns. Only consider up to two wildcard words between the specified words.

**Examples**

Following are some examples of entity patterns to recognize the _from_ and _to_ flight number for an intent to _change flight_.

The pattern operators defined above can be applied to entity patterns also.

* **Pattern**: word1 *n – up to n words after the occurrence of word1 
pattern for entity _ToFlight_ –  _to *1_.

    _ToFlight_ captured from user utterance _change flight to ABC123_ but not from _change flight for ABC123._

* **Pattern**: word1 * word2 or word1 word2 *n – multiple entities from a user utterance. 
patterns for entity ToFlight–  _to * from_, and _from to *1_ patterns for entity FromFlight –  _from * to_ and _to from *1._
_ToFlight_ & _FromFlight_ captured from user utterance _change flight from XYZ321 to ABC123_ and _change flight to ABC123 from XYZ321_ but not from _change flight for ABC123 using XYZ321._

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>When multiple patterns are entered for an entity, a match of either one will be taken.</p>
</div>

* **Pattern**: [ word1 word2 ] *n – match against any one word or phrase as defined within […] pattern for entity ToFlight–  _to *1_ pattern for entity FromFlight –  _[ using from ] *1_.
_ToFlight_ & _FromFlight_ are captured from user utterance _change flight  from XYZ321 to ABC123_ and _change flight  to ABC123 using XYZ321_ but not from _change flight  for ABC123 using XYZ321._
* **Pattern**: ~concept *n – pattern built using concepts. 
pattern for entity ToFlight–  _to *1_ the pattern for entity FromFlight –  _~from *1_, where _from_ is a concept as (using) (from) _ToFlight_ & _FromFlight_ are captured from user utterance _change flight from XYZ321 to ABC123_ and _change flight  to ABC123 using XYZ321_ but not from _change flight for ABC123 using XYZ321._

For more information on how to add patterns, refer to [Manage Patterns](./training/fundamental-meaning.md#manage-patterns-and-rules){:target="_blank"}.

### Negative Patterns

Negative patterns are used to eliminate intents detected by the Fundamental Meaning or Machine Learning models.

For example, a user says _I was trying to Book a Flight when I faced an issue_. Though the machine identifies the intent as _Book a Flight_, that is not what the user wants to do. In such a case, defining `was trying to *` as a negative pattern, would ensure that the matched intent is ignored.

## Synonyms

Synonyms must be used when the words used to identify an intent/entity are used interchangeably. Synonyms are defined for both intents and entities.

Each intent has a name. For example, if your intent name is _Guided Search_. There are many synonyms that a user might enter to start this task, _such as Search Flights,_ or _Show me flights._

As a developer, you must limit the name of a task to only two or three words, then consider synonyms for each of those words.

**Example**

* Browse – Find, Search.
* Flight–  Seat, Ticket.

Consider alternative spelling for your synonyms, for example: _check in_, _check-in_ or checkin.

Synonyms must be ideally defined only for words defined as part of the task name. The synonyms added at the app level are applicable for all the tasks, i.e. when a developer adds a synonym for a word in Task A, those synonyms are also used for any other tasks with the same words in the task name. For example, synonyms defined for the word browse in the _Guided Search_ are also used for the _Keyword Search_. Synonyms can (and should) be used to increase the number of variations that we expect from a user requesting an intent. They supplement existing intent names with alternative wording, while not being so generic as to match everything. Remember that synonyms are unidirectional so tool=bar does not mean bar=tool.

The general guideline for Synonyms are as follows:



* Use words in their canonical forms (i.e. infinitive verbs, singular nouns).
* Use lowercase both for words and their synonyms.
* Keep synonym phrases to less than 5 words.
* Use the US spelling of words (i .e. _normalize_ instead of _normalize_).
* Use intent over meaning (i.e. _get_ is a good synonym to _show_ if the context of the action means _find and display_).
* Don’t add synonyms to determiners or pronouns (the, a, my, that, etc.).
* Don’t use a synonym that could match in two conflicting tasks.
* Don’t use special characters such as () & / \ $ [ ] + *.
* Don’t use punctuation such as – , . ! ? ‘ “.
* Don’t assign synonyms to multiple words (For example, this is wrong: wrong, bad).
* Don’t add synonyms to digits.
* Don’t use the phrasal form (i.e. don’t use _lookup_ as a synonym; simply use _look_).
* Don’t abbreviate to less than 2 letters.

### Synonym Operations

A match between the user input and synonym for entity (only for List of Values and Lookup types) identification can occur in one of the following ways:

* **Partial Match** – This is the default behavior whereby one or more words in the input must match one or more words for a given synonym. For example, the user utterance  _inflight services_ will match _inflight magazine.._
* **Exact Match** – Here the input must contain all the words for a given synonym. For example, _book inflight services_ will match _add inflight services_. But _inflight services_ will not match _inflight magazine_. To trigger an exact match, the synonym must be enclosed within double-quotes.
* **Full Match** – The entire input must exactly match a given synonym word. For example, a _flight booking_ should match &lt;flight booking> but _my flight booking_ should NOT match &lt;flight booking>. Similarly, a _flight booking_ should not match &lt;my flight booking>. To trigger an exact match, the synonym must be enclosed within angular brackets.

**Canonical Form Match** – This is the default behavior wherein the user input is matched with the synonym or its canonical form. For example, _Book me a flight_ will match with the synonym _booking request_ since _book_ is the canonical form of _booking_. To disable this behavior, prefix the synonym with a single apostrophe as _checking_. (post v7.1)

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Synonyms can be added to identify intents as well as entities. Entity identification is triggered only after an Intent is identified.</p>
</div>

For more information on how to add synonyms, refer to [Managing Synonyms](./training/fundamental-meaning.md#){:target="_blank"}.

## Concepts

Concepts are clusters of related and synonymous terms that you want to be considered as a group identified by a single term.

**Allowed concept naming conventions:**

* Must have **~** as a prefix
* Allowed characters in concept name are:
    * a to z and A-Z
    * 1 to 9
    * _(underscore)
* At least one alphabet symbol must follow the ~.
* Must not start or end with a _ (underscore).
* Concepts are case insensitive. i.e ~myConcept is the same as ~myconcept

Examples for allowed concept names:

* ~my_concept
* ~Sample
* ~test123
* ~my_new_concept

Examples of invalid concept names:

* ~_concept
* ~concept_
* ~a-concept
* ~123test

You can also define custom concepts using emojis.

For more information, refer to [Custom Concepts](./training/fundamental-meaning.md#manage-concepts){:target="_blank"}.

## Standard Responses

Standard Responses are template messages that the Platform uses to respond to specific situations during a conversation. Examples of these situations include resolution of ambiguous user inputs, requisition for authorization, obtaining confirmations, informing about interruptions and resumptions, and more. Standard Responses are categorized into the following:

* Statements
* Greetings
* Queries
* Errors & Warning
* Questions and Choices

While the Platform does come with canned responses, developers are encouraged to customize these messages and to add variations.

To provide a seamless end-user experience across the conversational journey, developers may have to review each of the Standard Responses to ensure that they fit the overall persona/theme of the app.

Standard Responses can be plain text messages or can be generated through JavaScript to compose dynamic messages and templates for supported channels. Where applicable, Standard Responses support contextual tags that help the developer to customize the messages.

For example, when a user requests what a app can do, the app responds with a message. Here_ are the tasks I can perform for you_. _&lt;list-of-tasks>_. In this example, the developer may choose to modify this message and reuse the tag &lt;list-of-tasks>where appropriate. These tags are replaced with the actual text context during the conversation with run-time values.

## The Knowledge Graph

For executable tasks, the intent is identified based on either the task name (used in the Fundamental Meaning model) or Machine Learning utterances defined for a task. This approach is appropriate when a task can be distinctly identified from other tasks, using language semantics, and statistical probabilities derived from the machine learning model.

In the case of FAQs, this approach may not fare well as most of the FAQs are similar to each other in terms of semantic variation, and will require additional intelligence about the domain to find a more appropriate answer.

Kore.ai’s Knowledge Graph-based model provides that additional intelligence required to represent the importance of key domain terms and their relationships in identifying the user’s intent (in this case the most appropriate question).

We will use the following two examples to explain the different configurations required to build a Knowledge Graph.

<table>
  <tr>
   <td><strong>EXAMPLE A</strong>
   </td>
   <td><strong>EXAMPLE B</strong>
   </td>
  </tr>
  <tr>
   <td>Consider a app trained with the following questions:
<ul>

<li><em>A1: How to book a flight?</em>

<li><em>A2: What is the process to check in for a flight?</em>
</li>
</ul>
   </td>
   <td>Consider a app trained with the following questions:
<ul>

<li><em>B1: Can I book tickets for two people?</em>

<li><em>B2: How do I book an extra seat for my baby?</em>

<li><em>B3: How can I change my booking?</em>

<li><em>B4: How do I check in for my flight?</em>
</li>
</ul>
   </td>
  </tr>
</table>

The following are a few challenges with intent recognition using a typical model based on pure machine learning and semantic rules:

* Results obtained from machine learning-based models have a tendency to produce a false positive result if the user utterance has more matching terms with the irrelevant question.
* The model fails when the app needs to comprehend based on domain terms and relationships. For example, the user utterance _What is the process to book a flight?_ will incorrectly fetch A2 as a preferred match instead of A1. As A2 has more terms matching with user utterance than A1.
* This model fails to fetch the correct response if part of a question is stated in a connection with another question. Example, A: the user utterance _I have booked a flight, can I check in?_ results in the ambiguity between A1 & A2. Example B: User utterance _I booked tickets for two people, how do I do the check in_? will incorrectly match B1 over B4.

In the Kore.ai Knowledge Graph model, having all the questions at the root level is equivalent to using a model based on term frequency and semantic rules. This challenge is mitigated by the multilevel KG approach which allows you to assign FAQs to nodes based on key terms and organize them into parent and child nodes.

### Key Domain Terms and their Relationship

Identifying key terms and their relationships is an important aspect of building ontology. 

Let us understand this using our sample Example A. Both A1 and A2 are about an air travel procedure, one talks about booking a flight  while the other talks about checking in for a flight. So while creating an ontology, we can create a parent node with two child nodes as *booking* and _check in_. Then A1 and A2 can be assigned to the child nodes of _booking_ and _check in_ respectively.

### Knowledge Graph Traits

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Traits replace Classes starting from v6.4 of the Platform.</p>
</div>

When using traits, ensure you use it judicially as overuse may result in false negatives. When using traits, please also ensure:

* Good coverage of traits.
* Traits should not get generalized improperly.
* All the FAQs get tagged to mutually exclusive traits.

Following is the example of how classes work: Let’s say we create a class called _Request_ and add request related phrases to it. If the user says _I would like to get WebEx_ and _I would like to get trained_ for the Request class, this FAQ is only considered across the Knowledge Graph paths where the word request is tagged with. This is a positive scenario. But if the user says _Can you help with getting WebEx?_, and we did not have similar utterances trained for the _Request_ class, it gets tagged with _None_ class, and this FAQ is only used with the paths where the word _request_ isn’t present. This results in a failure.

Another possibility is that if the user says _I want to request help fixing WebEx_ and we have trained the _Request_ class with some utterances having _I want to request_, and based on the training provided across all classes, the engine may generalize and tag this feature (phrase containing *I want to request* ) to the *Request* class. In this case, if the *Request* class is not present in the help path for WebEx, this results in failure of identifying the input against **help** > **WebEx**.

The cases where traits are useful are when we have a mutually exclusive set of FAQs. For example, in a Travel Assistant, we can have a set of FAQs for the booking process, and one for booking issues. 

* **FAQs for the booking process**
    * How do I make a booking online?
    * What is the process for booking a flight??
* **FAQs for booking Issues**
    * I am having issues making a booking.
    * How to resolve an issue with my booking?

When a user says *What is the process for making a booking when your mobile app doesn’t work?*, the engine may find that this input is similar to both A2 and B2, and may present both of them as suggestions. 

We know that *Issue is mutually exclusive to buy*, and it does not make sense to present _buy_ related FAQs at all, in this case. The opposite (matching *Issue FAQs for buy related questions*) may be a much bigger problem. To solve this, we will create two traits, one for type *issues* and another for *buy*. Every input is classified into either _buy_ or *issue* and only the relevant questions will be used in finding an appropriate answer.
