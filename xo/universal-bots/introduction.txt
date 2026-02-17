# Universal Bots

Kore.ai’s Universal Bots facilitate a scalable, modular approach to Bot building by helping you link several Bots into one.

Universal Bot is a container bot that can be linked with one or more Standard Bots. When a user interacts with the Universal Bots, it routes the user utterance to the appropriate linked bot for intent detection or task fulfillment.
!!! note

    A universal Bot doesn’t own the linked bots, but it interprets the user utterances and maps them to the correct linked bots. The changes that you make to a linked bot task from inside the universal bot, such as training the task, are saved directly to the linked bot. Also, you cannot create any task for the universal bots except for customizing a default dialog task that gets created automatically with every universal bot.



## Highlights



* The universal bot acts as a **single interface** for the Bot users of an enterprise, across business lines or products or services.
* Standard bots that aim to meet a specific purpose can be built independently and then be associated with a Universal bot by **linking** them to the Universal Bot.
* The developer can **view and analyze all user interactions** from within the Universal bot and also **train the respective bots** with additional training data.
* The developer can **train the Universal bot** for identifying the relevant bots from a user utterance, using the ranking and disambiguation model. Universal Bot can be trained in three aspects:
    * Using example utterances like the Machine Learning model. This would help identify a set of linked bots as possible matches to the user utterance.
    * Invocation Names that would identify a specific linked bot from the user utterance.
    * Invocation Phrases that would identify a specific intent in a specific bot from the user utterance.
[Refer here to know more](https://developer.kore.ai/docs/bots/advanced-topics/universal-bot/training-a-universal-bot/) about training a Universal Bot.
* This trained Universal Bot can then be published so that when the end-users interact with Universal bot, it will perform **intent recognition across all linked bots** to understand the user’s intent and engage the appropriate bot to perform the task.
* In the case of ambiguity in identifying an appropriate bot or task, a sub-dialog is initiated to obtain confirmation from the user.
* Universal bots also provide a  **Fallback Bot** for gracefully handling any untrained/un-recognized requests.
* Linked bots can be marked as **Inclusive bots** that need not be trained with sample utterances to participate in the bot scoping process (introduced in ver8.0).
* Apart from this, the developer can define **eligible bots** ie. assign specific bots to specific end-users so that only the intents from these bots are made available to them.


### Implementation

The following flow chart shows the working of a Universal bot:


![alt_text](images/ub-process-flow-4.png "image_tooltip")

	

The following is the explanation for the above process flow:



* Universal Bot checks if any eligible bots are defined.
* If defined, then the list of eligible bots is obtained, else the user intent is checked against any Small Talk, etc.
* If eligible bots not defined then all the linked bots are considered as eligible.
* Once the linked eligible bots list is there, Universal Bot identifies the bots that qualify using the invocation phrases. ([See the bot training page for details](https://developer.kore.ai/docs/bots/advanced-topics/universal-bot/training-a-universal-bot/#Invocation_Phrases))
* The user utterance is sent to the scoped bots and the results are processed by the Universal Bot’s Ranking and Resolver engine.


## Universal Bot – upgrade

Post ver7.3 release of the platform, new Universal Bots would be versioned as 2.0.

We recommend you upgrade since the older version of universal bot will be deprecated soon. The previous version of Universal bot has the following <span style="text-decoration:underline;">limitations</span>:



* Training – you cannot train the universal bot, need to depend upon the training of the linked bots for proper functioning.
* There are performance issues with the older version if the number of linked bots exceeds 5 or the total number of intents exceeds 100.
* Variable Management is not possible from the older version of Universal bot.

Older version universal bots will prompt you to **Upgrade** when:



* you open the universal bot; or
* when from the left navigation menu you access **Natural Language -> Training**.

Once you upgrade, follow these steps to ensure that the user utterances are routed to the relevant linked bots:



* Train the Universal Bot to identify the linked bots by providing Training Utterances or Invocation Names. The Universal Bot will route the user utterances only to the identified linked bots.
* Mark linked bots as Fallback Bots. The utterances are routed to the Fallback bots when no other linked bots are qualified from the training provided. A maximum of 15 linked bots can be marked as Fallback bots.
* Review the linked bot identification flow from the Utterance Testing module.

[Refer here for more on training the Universal Bot](https://developer.kore.ai/docs/bots/advanced-topics/universal-bot/training-a-universal-bot/).


## Next Steps



* Know more about Universal Bots and compare with Standard Bots behavior from[ here](https://developer.kore.ai/docs/bots/advanced-topics/universal-bot/defining-universal-bots/).
* You can also start creating your Universal Bots by[ referring here](https://developer.kore.ai/docs/bots/advanced-topics/universal-bot/creating-a-universal-bot/).