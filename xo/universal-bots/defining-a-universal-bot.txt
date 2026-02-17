# Defining a Universal Bot

Kore.ai’s Universal Bots facilitate a scalable, modular approach to bot building by linking several standard individual bots into one.



* **Modularity**: Build separate bots that address domain-specific issues and then integrate them to optimally interoperate.
* **Scalability**: Start building bots that address key use cases and keep adding additional bots to address more use cases.

Before starting with[ creating a Universal Bot](https://developer.kore.ai/docs/bots/advanced-topics/universal-bot/creating-a-universal-bot/), let us understand how Universal Bots work and how they differ from Standard Bots.


### Bot Behavior

Universal bot responses vary with the number of bots and tasks that match the user intent along with their relevance (exact matches or suggestions). The Natural Language Processing (NLP) engine processes the utterances sent to the linked bots, detects the user intents, and ranks them based on relevance. As a developer, you can test and train the bot responses as explained in[ Test the Universal Bot](https://developer.kore.ai/docs/bots/advanced-topics/universal-bot/creating-a-universal-bot/#Testing_a_User_Utterance).

Following the table shows how universal bot responses operate in various possible NLP outcomes:


<table>
  <tr>
   <td><strong>NLP Outcome</strong>
   </td>
   <td><strong>Bot Response</strong>
   </td>
  </tr>
  <tr>
   <td>Only one exact match found from any of the linked bots
   </td>
   <td>Executes the task with the exact match
   </td>
  </tr>
  <tr>
   <td>Exact matches found in more than one linked bot
   </td>
   <td>Tries to match the invocation names from the user utterance with the bot results, else prompts the user to select one.
   </td>
  </tr>
  <tr>
   <td>Exact matches found with two or more tasks of a single linked bot
   </td>
   <td>Disambiguates using the current bot context, else prompts the user to select one.
   </td>
  </tr>
  <tr>
   <td>Suggestions found in more than one linked bot
   </td>
   <td>Evaluates the individual scores and executes the winning intent based on the P&R settings.
   </td>
  </tr>
  <tr>
   <td>Suggestions found with two or more tasks of a single linked bot
   </td>
   <td>Executes the winning intent based on the P&R settings.
   </td>
  </tr>
  <tr>
   <td>Only one suggestion found
   </td>
   <td>Shows the suggestion to the user asking if they would like to select it
   </td>
  </tr>
  <tr>
   <td>No exact match or suggestion found
   </td>
   <td>Checks for intent in the Universal Bot – small talk or fallback bot
   </td>
  </tr>
</table>



### Standard Bots vs. Universal Bots

Universal Bots connect multiple Standard Bots into a single bot. They support most Standard Bot features with a few exceptions.


#### Enabled Features and Configurations

This section assumes that you understand the fundamentals of[ standard bots](https://developer.kore.ai/docs/bots/bot-builder-tool/bot-creation/defining-a-standard-bot/). Details relevant to the Universal Bots alone are listed here. We recommend you to refer to the relevant standard bot documentation for help with the basics.

The **Feature** column entries in the following table provide URLs to the standard bot documentation.

The _Learn more_ links in the **Description** column refer to the universal bot documentation.


<table>
  <tr>
   <td><strong>Feature</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td colspan="2" >
<h5><strong>Natural Language</strong></h5>


   </td>
  </tr>
  <tr>
   <td><a href="https://developer.kore.ai/docs/bots/test-your-bot/testing-your-bot-with-nlp/">Testing</a>
   </td>
   <td>Since the universal bot links together standard bots, the Natural Language Processing (NLP) settings are optimized to accurately recognize the relevant bot and intent. You can test and train the universal bot like a standard bot with small differences. When you train the task it happens at the linked bot level.<a href="https://developer.kore.ai/docs/bots/advanced-topics/universal-bot/creating-a-universal-bot/#Step_4_Test_the_Universal_Bot"> Learn more</a>.
   </td>
  </tr>
  <tr>
   <td><a href="https://developer.kore.ai/docs/bots/test-your-bot/testing-your-bot-with-nlp/">Training</a>
<p>
(UB 2.0)
   </td>
   <td>Post ver7.3 of the platform, the Universal Bot 2.0 can be trained, the approach is slightly different from the standard bots.<a href="https://developer.kore.ai/docs/bots/advanced-topics/universal-bot/training-a-universal-bot/"> Learn more</a>.
   </td>
  </tr>
  <tr>
   <td><a href="https://developer.kore.ai/docs/bots/bot-intelligence/default-dialog/#Standard_Responses">Standard Responses</a>
   </td>
   <td>The universal bot will hold a limited set of standard responses that are relevant to bot level functions like greetings. Go to <strong>Natural</strong> <strong>Language -> Default Conversation</strong>, to access the <strong>Standard Responses</strong> section to edit the relevant standard responses.
   </td>
  </tr>
  <tr>
   <td><a href="https://developer.kore.ai/docs/bots/test-your-bot/batch-testing/batch-testing/">Batch Testing</a>
   </td>
   <td>Universal bots only support testing <em>Custom-defined utterances</em> and not <em>Developer-defined utterances</em> and <em>Succesful user utterances</em>.
<p>
The <em>Custom-defined utterances</em> test suites remain similar to the standard bots’ except that the JSON Dataset file that you upload should contain a bot name along with the intent and input for every test case. Also, the downloaded batch test report shows the results with corresponding bot names.
   </td>
  </tr>
  <tr>
   <td><a href="https://developer.kore.ai/docs/bots/bot-intelligence/default-dialog/#Default_Dialog">Default Dialog</a>
   </td>
   <td>Universal bots come with a default dialog task that gets triggered for unidentified intents. You can customize this task or import a new one.<a href="https://developer.kore.ai/docs/bots/advanced-topics/universal-bot/customizing-the-universal-bots-default-dialog-task/#Default_Dialog_Task"> Learn more</a>.
   </td>
  </tr>
  <tr>
   <td><a href="https://developer.kore.ai/docs/bots/bot-intelligence/event-based-bot-actions/">Event-Based Bot Actions</a>
   </td>
   <td>With ver8.0, you can choose different tasks from the linked bots for various events.<a href="https://developer.kore.ai/docs/bots/advanced-topics/universal-bot/customizing-the-universal-bots-default-dialog-task/#Event_Handlers"> Learn more</a>.
   </td>
  </tr>
  <tr>
   <td>Help
   </td>
   <td>When a user types <strong>Help</strong> during a chat, a standard bot responds with the list of tasks that it can perform, allowing the user to select a task name to execute.
<p>
When it comes to Universal bots, if a user types <strong>Help</strong>, the bot responds with the names of linked bots. The user cannot select or execute a task from the list.
   </td>
  </tr>
  <tr>
   <td colspan="2" >
<h5><strong>Channel Configuration</strong></h5>


   </td>
  </tr>
  <tr>
   <td><a href="https://developer.kore.ai/docs/bots/channel-enablement/adding-channels-to-your-bot/">All</a>
   </td>
   <td>Universal bots do not obtain the channel configurations of the linked bots and need an independent channel configuration. You can set up new channels for the universal bot independent of the linked bot channels. The published tasks in the linked bots execute from the universal bot channels.<a href="https://developer.kore.ai/docs/bots/advanced-topics/universal-bot/creating-a-universal-bot/#"> Learn more</a>.
   </td>
  </tr>
  <tr>
   <td colspan="2" >
<h5><strong>Settings</strong></h5>


   </td>
  </tr>
  <tr>
   <td><a href="https://developer.kore.ai/docs/bots/bot-settings/general-settings/">General Settings</a>
   </td>
   <td>Universal and standard bots share the same general settings.
   </td>
  </tr>
  <tr>
   <td><a href="https://developer.kore.ai/docs/bots/advanced-topics/multi-lingual/building-multi-language-bots/">Language Management</a>
   </td>
   <td>Universal bots do not obtain the enabled languages of the linked bots. You must enable default and additional languages explicitly for the universal bot. But when user utterances are made in an enabled language, the universal bot routes it to only those linked bot tasks that support the language. For example, if German is enabled for the universal bot and a user utters in German, the NLP engine looks for all the linked bot tasks that support German and sends the utterance to those tasks.<a href="https://developer.kore.ai/docs/bots/advanced-topics/universal-bot/enabling-additional-languages-for-the-universal-bot/"> Learn more</a>.
   </td>
  </tr>
  <tr>
   <td><a href="https://developer.kore.ai/docs/bots/advanced-topics/collaborative-development/sharing-bots-for-development/">Developer Collaboration</a>
   </td>
   <td>Works similar to standard bots. Once you share a Universal Bot with other developers, they can link and unlink bots.
   </td>
  </tr>
  <tr>
   <td><a href="https://developer.kore.ai/docs/bots/advanced-topics/bot-management/viewing-the-bot-change-log/">Change Logs</a>
   </td>
   <td>Universal bot change logs record all the changes applicable to the standard bots, plus the following:
<ol>

<li>Linking of a bot

<li>Un-linking of the bot

<li>Change to default dialog

<li>Publishing of default dialog
</li>
</ol>
   </td>
  </tr>
  <tr>
   <td><a href="https://developer.kore.ai/docs/bots/bot-settings/bot-management/bot-management-2/">Import & Export bot</a>
<p>
(supported from ver7.1)
   </td>
   <td>Like standard bots, you can export and import the published and unpublished universal bots. Since universal bots deal with linked bots the following need to be taken care of:
<ul>

<li><span style="text-decoration:underline;">Export of a universal bot</span> – only the reference to the linked bot (reference id) will be included not the entire linked bot definition;

<li><span style="text-decoration:underline;">Import of the universal bot</span> – in the environment where the bot is being imported to, the platform checks for the bots with reference id matching the linked bot. If found they are automatically linked to the imported universal bot. Also you should have permissions for the linke bot, else it will not be linked. Ensure that you import the linked bots before importing the universal bot.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><a href="https://developer.kore.ai/docs/bots/bot-settings/bot-management/bot-management-2/#Deleting_a_Bot">Delete bot</a>
   </td>
   <td>Like standard bots, you can delete the unpublished universal bots.
   </td>
  </tr>
  <tr>
   <td><a href="https://developer.kore.ai/docs/bots/bot-settings/bot-management/using-bot-variables/">Variable Management</a>
<p>
(UB 2.0)
   </td>
   <td>Like standard bots, you can define global and content variables in universal bots. In addition, you can choose whether or not the variables can be propagated to the linked bots.
   </td>
  </tr>
  <tr>
   <td colspan="2" >
<h5><strong>API Extensions</strong></h5>


   </td>
  </tr>
  <tr>
   <td><a href="https://developer.kore.ai/docs/bots/sdks/using-the-botkit-sdk/">SDK toolkit</a>
   </td>
   <td>Enabled with the following events – on message, on hook, on event, on alert
   </td>
  </tr>
  <tr>
   <td><a href="https://developer.kore.ai/docs/bots/bot-builder-tool/dialog-task/working-with-the-agent-transfer-node/">Agent Transfer</a>
   </td>
   <td>Agent Transfer can be configured for a Universal Bot. The Agent Node needs to be added in default dialog and addition of any subsequent nodes after the agent node is not allowed.
   </td>
  </tr>
  <tr>
   <td><a href="https://developer.kore.ai/docs/bots/bot-builder-tool/dialog-task/working-with-the-web-hook-node/">WebHook Node</a>
   </td>
   <td>Multiple webhook nodes can be placed in the default dialog. When a webhook node is reached during the conversation, the platform invokes the BotKit similar to that of a Standard Bot.
   </td>
  </tr>
  <tr>
   <td>SDK as Channel
   </td>
   <td>Enabled
   </td>
  </tr>
  <tr>
   <td colspan="2" >
<h5><strong>Analyze</strong></h5>


   </td>
  </tr>
  <tr>
   <td>Chat History
   </td>
   <td>All the Universal Bot chats get recorded. Any initiated training will affect the individual linked bot.
   </td>
  </tr>
  <tr>
   <td colspan="2" >
<h5><strong>Publish</strong></h5>


   </td>
  </tr>
  <tr>
   <td><a href="https://developer.kore.ai/docs/bots/publish/publishing-bot/#Publishing_Tasks">All</a>
   </td>
   <td>You can select one or more linked bots and publish the Universal Bot.<a href="https://developer.kore.ai/docs/bots/advanced-topics/universal-bot/creating-a-universal-bot/#Step_6_Publishing"> Learn more about the publish flow</a>.
   </td>
  </tr>
</table>



### Event Management

Let us see the behavior of Universal Bots for the following BotKit events in Linked Bots:



* End of Conversation ([see below](https://developer.kore.ai/docs/bots/advanced-topics/universal-bot/defining-universal-bots/#eoc))
* On Message
* Agent
* Webhook
* Event
* Alert Events

When a child bot is in context i.e., a task from a child bot is in progress, then the events related to the child bots will be triggered based on the configurations set up by the developer:



* If an event is enabled in child bot, then the event will be forwarded to child bot BotKit
* If an event is not enabled in child bot and
    * if that event is enabled in Universal bot, then the event will be sent to Universal bot BotKit
    * if that event is not enabled in Universal bot as well, then the event will not be forwarded to any BotKit.

Following table summarises the above scenarios and behavior:


<table>
  <tr>
   <td><strong>Event Name</strong>
   </td>
   <td><strong>Child Bot Status</strong>
   </td>
   <td><strong>Universal Bot Status</strong>
   </td>
   <td><strong>Expected Behavior</strong>
   </td>
  </tr>
  <tr>
   <td>On Message
   </td>
   <td>Enabled
   </td>
   <td>–
   </td>
   <td>Event sent to child bot BotKit
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>Disabled
   </td>
   <td>Enabled
   </td>
   <td>Event sent to Universal BotKit
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>Disabled
   </td>
   <td>Disabled
   </td>
   <td>Invalid scenario. The event does not trigger in this case
   </td>
  </tr>
  <tr>
   <td>All other events
   </td>
   <td>Enabled
   </td>
   <td>–
   </td>
   <td>Event sent to child bot BotKit
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>Disabled
   </td>
   <td>Enabled
   </td>
   <td>Event sent to Universal BotKit
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>Disabled
   </td>
   <td>Disabled
   </td>
   <td>Same as the current behavior. E.g. dialog reaches Webhook node but ‘on Hook’ event is not enabled
   </td>
  </tr>
</table>



#### End of Conversation

The following table depicts the bot behavior for the end of the conversation event:


<table>
  <tr>
   <td><strong>Conversation ends</strong>
   </td>
   <td><strong>End of Conversation Event in Universal Bot</strong>
   </td>
   <td><strong>End of Conversation Event in Linked Bot</strong>
   </td>
   <td><strong>Behavior</strong>
   </td>
  </tr>
  <tr>
   <td>Universal Bot
   </td>
   <td>Enabled
   </td>
   <td>Enabled or Disabled
   </td>
   <td>Trigger event in Universal Bot
   </td>
  </tr>
  <tr>
   <td>Universal Bot
   </td>
   <td>Disabled
   </td>
   <td>Enabled or Disabled
   </td>
   <td>No event triggered
   </td>
  </tr>
  <tr>
   <td>Linked Bot
   </td>
   <td>Enabled or Disabled
   </td>
   <td>Enabled
   </td>
   <td>Tigger event in Linked Bot
   </td>
  </tr>
  <tr>
   <td>Linked Bot
   </td>
   <td>Enabled
   </td>
   <td>Disabled
   </td>
   <td>Tigger event in Universal Bot
   </td>
  </tr>
  <tr>
   <td>Linked Bot
   </td>
   <td>Disabled
   </td>
   <td>Disabled
   </td>
   <td>Event not triggered
   </td>
  </tr>
</table>



## Next Steps



* You can start creating your Universal Bots by[ referring here](https://developer.kore.ai/docs/bots/advanced-topics/universal-bot/creating-a-universal-bot/).
* You can learn about training the Universal Bots from[ here](https://developer.kore.ai/docs/bots/advanced-topics/universal-bot/training-a-universal-bot/#Invocation_Names).

		

	
