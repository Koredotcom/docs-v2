# Sentiment Management

Emotion tones are critical indicators in understanding the attitudes and opinions of users interacting with AI Agent. **Sentiment Events** allow the developer to define and trigger events based on the user’s emotion or sentiment.

!!!Note

    This feature was introduced in v7.0 and is not supported in all languages. [Learn more](../../../app-settings/language-management/multi-lingual-bot-behavior.md).

Negative emotion scenarios like, anger or disgust, are typically considered factors that would determine a transfer of the conversation to a live agent.

The [NLP](../../../automation/natural-language/nlp-introduction.md) interpreter can parse user utterances for specific words and phrases, and then provide an average tone score based on the connotation, word placement, and any added modifiers. [Learn more](../../../automation/intelligence/sentiment-management/tone-analysis.md).

The tone or sentiment scores are stored as context and used to drive the flow of a dialog task through conditional transition statements. You can use these scores to steer user-assistant conversations or seamlessly invoke escalation to a live agent.

## Configuration

You can define multiple sentiment events from under **Conversation Intelligence** > **Events** > **Sentiment Events**. Click **+ New Event** to define an event based on which to capture the user’s emotion.

<img src="../images/new-event-window.png" alt="new event" title="new event" style="border: 1px solid gray; zoom:75%;">

The following parameters can be configured for a sentiment event:

* **Event Name** – Name of the event.
* **Event Trigger** – Defines how often the sentiment must be checked. It can be set to:
    * **On Task Completion** – Sentiment is checked only after completion of a task.
    * **After Every User Utterance**– Sentiment is checked after every utterance from the end-user. The event is evaluated before proceeding with the conversation using the incoming utterance.
* **Emotion Configurations**
    * The Session-level tone value is a consolidated tone value across all user messages in a conversation session.
    * The Message-level tone value is a tone value calculated for a given message from the user.
    * Select the required emotions to be captured from a list of six tones: anger, disgust, fear, sadness, joy, and positive.
    * Select if the tone should be considered at the _Session_ level or _Message_ level
    * Define the range to be considered for each of these tones, the range can be between -3 to +3. [Learn more](../../../automation/intelligence/sentiment-management/tone-analysis.md).
    * When multiple emotions are selected, the event is triggered when **ALL** the tone rules are met. In case you want the event to trigger when any tone rule is met, add them as separate rules.

<img src="../images/add-sentiment-based-event.png" alt="add sentiment based event" title="add sentiment based event" style="border: 1px solid gray; zoom:75%;">

## Event Flow

Emotion tones are continuously updated whenever a message is received from the users and as such the sentiment events are also continuously evaluated. When an event’s criteria are met, the Platform triggers the defined behavior.

* If the configuration used is to **Initiate a task**, the current task is discarded and the AI Agent switches to the new task according to the event configuration.
    * Any other implicitly paused tasks will also be discarded.
    * Tasks that are kept on hold using Hold and Resume settings are resumed as per Hold and Resume configuration.
    * If the dialog selected to trigger for the sentiment event is not available for any reason, a standard response is displayed. Refer to the standard response with the title _Dialog task required for conversation is not available_ for more information. [Learn more](../../../automation/intelligence/conversation-management/standard-responses.md).
* If the configuration used is to **Run a Script**, the Platform executes the script and continues with the task execution. In case of any errors executing the script associated with the sentiment event, a standard response is displayed. You may refer to the standard response titled _Error in continuing the conversation due to incorrect bot definition_ for more information. [Learn more](../../../automation/intelligence/conversation-management/standard-responses.md).
* In case of a conflict between a sentiment event and direct intent invocation by the user, sentiment event is given precedence.
* When tone criteria for two or more sentiment events are satisfied at the same instance, the Platform prefers the sentiment event with the highest order of precedence used in defining the events.

**Sentiment Analysis Behavior Overview**

When a sentiment event is enabled, the platform evaluates each user input to determine if the sentiment should be triggered. If so, the sentiment event executes first, followed by processing the user input.

If the configuration is set to ***Run Script*** and a sentiment is detected:

1. Smalltalks - Sentiment executes first, followed by the small talk execution.
2. Dialog - Sentiment executes first, followed by the dialog execution.
3. Execution Flow - Sentiment executes first, followed by fallback logic.
4. At Different nodes: 

    * Entity Node - Sentiment executes first, then an error prompt is triggered.
    * Confirmation Node - Sentiment executes first, followed by the confirmation node prompt.
    * On-Intent Message Node - Sentiment executes first, then moves into the else condition.

If the configuration is set to ***Initiate Task*** and a sentiment is detected:

1. Small talks -  Sentiment executes first, followed by the small talk execution.
2. Dialog - Sentiment executes first, followed by the configured dialog.
3. Execution Flow - Sentiment executes first, followed by the configured dialog.
4. At Different nodes:

    *  Entity Node - Sentiment executes first, then the connected dialog executes, reaching the end of both the parent and configured dialog.
    * Confirmation Node - Sentiment executes first, then the connected dialog executes, reaching the end of both the parent and configured dialog.
    * On-Intent Message Node - Sentiment executes first,  then the connected dialog executes, reaching the end of both the parent and configured dialog.

## Reset Tone

By default, sentiment values are reset at the beginning of every user conversation session.

Apart from the beginning of the conversation session, the Platform resets the sentiment values (i.e. tone scores) once the associated events are triggered. The reset behavior is based on the type of event trigger:

* If a script is run, then the values are reset after successful execution of the script.
* In case a dialog task is triggered, the values are transferred to the new dialog task’s (triggered by the sentiment event) context and reset in the original global context.