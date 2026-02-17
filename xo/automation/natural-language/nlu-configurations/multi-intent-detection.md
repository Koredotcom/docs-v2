[ :octicons-arrow-left-24: Back to NLP Topics](../../../nlp-topics.md)


# Multi-Intent Detection

Kore.ai’s NLP engine breaks conversations down to their essence, identifies and follows-up on multiple action items, or intents, from a single message. The app can then execute tasks in a sequential and logical manner.

You can allow the NLP engine to detect and execute multiple intents identified in a single user utterance. By default, this setting is disabled and you can enable it. Once enabled, the NLP engine identifies multiple intents in a user utterance based upon the presence of keywords like:

* _later_
* _following that_
* _second_
* _then_
* _before that_
* _first_
* _beforehand_
* _prior to that_

The sequence in which these intents are executed is based on the standard phrases like _before that_, _after that_, _and then_, etc. in the user utterance. If no order is specified or identified by the NLP engine, then the intents are executed in the order they are present in the original utterance.

After the execution of each intent, the Platform will automatically trigger the next intent in the identified order.

If a task fails to get executed, then the Platform will not initiate the subsequent tasks (identified from the utterance).

Following are the steps to enable multi-intent detection:

1. Open the app for which you want to add multiple intents.
2. From the left menu, click **Natural Language** > **NLU Config** > **Multi Intent Detection**.
3. Turn on the toggle to enable it.

   <img src="../images/multi-intent-detection-toggle-window.png" alt="amend hidden entities" title="amend hidden entities" style="border: 1px solid gray; zoom:75%;">
