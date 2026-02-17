# Tone Analysis

The XO Platform [NLP](../../natural-language/nlp-introduction.md){target="_blank"} interpreter can parse user utterances for specific words and phrases, and then provide an average tone score based on the connotation, word placement, and any added modifiers. 

You can use the score to help assess the user input and direct the flow of the conversation between the AI Agent and the user.

For example, if the tone score indicates a user is angry or sad, you want to transition the conversation to a live agent. In a dialog task, you can access the tone score from the `Context` object or you can configure events to be triggered, from the [Sentiment Events](sentiment-management-overview.md){target="_blank"} option under **Conversation Intelligence** > **Events**.

## Tones Types

The Kore.ai XO Platform evaluates user inputs to find the following six possible emotions:

* angry
* disgust
* fear
* sad
* joy
* positive – A special tone used to evaluate the general positivity of an utterance.

The XO Platform tone algorithm provides a nuanced overview of the user utterance tone by not making the emotions mutually exclusive. For example, an input could yield a high score for fear and a mild score for sadness. Another input could yield a very high score for joy while having a negative score for sadness.

Post v8.1, the Platform can identify the emojis in user utterance and set the tone accordingly.

## Score Tone Emotions

The XO Platform scores a tone emotion on a scale range of -3 to +3 where positive values represent an **expressed tone emotion** and a negative value represents a **suppressed tone emotion**.

For positive values, the tone emotion is explicitly communicated, while negative values are explicitly negated.

For example, a user’s utterance, _I am happy about this news,_ returns a positive tone score for joy, while _I am not happy about this news_ returns a negative score for joy.

The following scale shows the relationship of the score to the level of positive expression of the tone emotion or negative suppression of the tone emotion.



* **+3** – The user definitely expressed the tone emotion.
* **+2** – The user expressed the tone emotion.
* **+1** – The user likely expressed the tone emotion.
* **0** – The user tone emotion is neutral.
* **-1** – The user likely suppressed the tone emotion.
* **-2** – The user suppressed the tone emotion.
* **-3** – The user definitely suppressed the tone emotion.


## About Tone Scores

The overall tone score is calculated as a function of the base tone value and any tone modifiers. Modifiers are generally adverbs or adjectives that supplement a tone emotion word, either to increase or decrease the base tone score.

For example, a user’s utterance, _I am extremely disappointed_, returns a higher tone score for the angry tone emotion than if the user utterance is _I am disappointed._ Conversely, a user utterance of _I am not disappointed_ negates the tone emotion and the tone score.

The value of the base tone and modifiers are used to calculate the final tone score for each tone emotion. The tone analyzer compiles all base tones based on the tone emotion type and then calculates the average score of each tone emotion type in the current dialog task node and the tone total score since the last reset.

Tone results are returned as `Context` object variables as:

* `message_tone` – An array of recognized tone emotions and scores for the current node in a dialog task.
* `dialog_tone` – An array of average recognized tone emotions and scores for the entire conversation session. This value is reset at the end of each conversation session.

Each variable is populated with key/value pairs for each recognized tone emotion. Key/value pairs are not returned if a tone is not detected for an emotion. 

However, the NLP engine returns a tone score of 0 when a tone is recognized as neutral. When you access tone variables in the `Context` object, you must be able to handle positive, negative, zero, as well as undefined results.

## Examples

```
message_tone
   0
      tone_name : positive
      level : 2
   1
      tone_name : disgust
      level : -2
   2
      tone_name : angry
      level : -2
dialog_tone
   0
      tone_name : angry
      level : -3
   1
      tone_name : sad
      level : -3
   2
      tone_name : positive
      level : 3
   3
      tone_name : joy
      level : 3
```

Here are some examples of test sentences with their associated tone emotion scores: 

<div class="admonition note">
<p>"<i>I don’t think that this is a good idea and I am not happy with how it came out, especially because of your attitude.</i>"</p></div>

```
dialog_tone
   0
      tone_name : joy
      count : 1
      level : 0.67
   1
      tone_name : sad
      count : 1
      level : 0.5
   2
      tone_name : angry
      count : 1
      level : 0.5
```

<div class="admonition note">
<p>"<i>This is a great idea! I’m super excited already.</i>"</p></div>

```
dialog_tone
   0
      tone_name : joy
      count : 1
      level : 3
   1
      tone_name : sad
      count : 1
      level : 2.8
   2
      tone_name : angry
      count : 1
      level : -3
}
```

<div class="admonition note">
<p>"<i>This was a funny and casually well-written book, a good read. But it’s a little frustrating because it abandons the narrative, if you will, without finishing it.</i>"</p></div>

```
dialog_tone
   0
      tone_name : joy
      count : 1
      level : 1.5
   1
      tone_name : sad
      count : 1
      level : -1.5
   2
      tone_name : angry
      count : 1
      level : -1
```

You can access and use tone scores to help drive the flow of your dialog task using conditional transition statements. For example,

```
if context.message_tone.angry > 2.0
    then goTo liveAgent
```

For more information, refer to [Context Object](../context-object.md){target="_blank"}.

## Adding Sentiment Words to Concepts

For identifying the tone and analyzing the sentiment of a user utterance/phrase, you can add those utterances in the Concepts.

The sentiment words are all stored in concepts and it is possible for a AI Agent to extend the concepts by entering appropriate new words under the relevant concept name, during the concept training.

The syntax for the concept name is: ~tone-&lt;tonename>-&lt;level>, where &lt;tonename> indicates any of the 6 tone types listed in  [Tone Types](#tones-types){target="_blank"} and &lt;level> is a number from 1 to 7. 1 is equivalent to a -3, 7 is +3, and 4 is the neutral 0. [Learn more](#score-tone-emotions){target="_blank"}.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Apart from the basic tone words, sentiment analysis also uses words that can increase or decrease intensity, like "very" or "extremely." However, you don't have to add different phrases covering all the possibilities for various levels. Just add a basic tone word, and these intensifiers will adjust the level automatically.</p>
</div>

The following are some examples of words that can be mapped to relevant concepts.

* The word _freaking_ could be defined as a synonym under ~tone-angry-7, which indicates real bad anger.
* The word _Yikes!_ could be defined as a synonym under ~tone-angry-5, which indicates a bit angry.
* The word _please_ would come under ~tone-angry-4 which indicates a neutral tone.
* The word _Thanks!_ indicates a happy tone and could be defined as a synonym under ~tone-angry-1, which is mapped to not angry at all tone.