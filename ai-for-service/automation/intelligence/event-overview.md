# Events

Events are triggered when specific actions occur during a conversation with the AI Agent or when specific events are triggered on any active channels.

To access **Events**, navigate to **Automation > Conversation Management > Events**.


<img src="../images/access-event-handlers-window.png" title="access event handlers" style="border: 1px solid gray; zoom:75%;">

## Event Actions

Developers can define what action the AI Agent should take when an event is triggered using one of the following options:

### Initiate a Task

Select a Dialog task (Standard or Hidden) to be invoked when the event triggers. Once the event is triggered, the dialog starts executing. If it is interrupted by other intent detections, the Hold and Resume settings come into play. During execution, the event is discarded if the selected Dialog is not published in the AI Agent.

In some cases, the Dialog may not be available to the user during a conversation for various reasons, such as the task not being published, suspended, or simply not having been assigned to the user. In such cases, the AI Agent shows an error message that the task is not currently available for execution.

Developers can preempt such situations by testing the AI Agent in Debug mode. The Debug Console shows full details about the error, including why the task is not available.

### Run a Script

Define a JavaScript to run when the event triggers. The script can use all applicable components, such as session, context objects, variables, and functions. You can also fix the code using the Debug mode.

### Show a Message

When the event triggers, define a simple or advanced message for the user. It supports all messaging formatting features available in the XO Platform, including multiple messages with channel override options.  
<img src="../images/show-a-message.gif" alt="show a message" title="show a message" style="border: 1px solid gray; zoom:75%;">

#### Multilingual AI Agent Behavior for Messages

* You can define language-specific messages;
* If a message is deleted from an Event for a specific language, then it will be removed from all other languages of the AI Agent;
* If a message is added for a language, then the message would be added in all other languages using the same content;
* If a message is modified in a language, the modifications will be applied only to that language. [Learn more](../../sdk/web-mobile-sdk-message-formatting-and-templates.md).

## Event Types

Events are classified as **Intent Events**, **Conversation Events**, and **Sentiment Events**. 
<img src="../images/event-types-window.png" alt="event types" title="event types" style="border: 1px solid gray; zoom:75%;">

You can configure the following events to trigger responses:
<table border="1.5">
<tr bgcolor="#ECECEC">
   <td><strong>EVENT</strong>
   </td>
   <td><strong>TRIGGER</strong>
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong>Intent Events</strong>
   </td>
  </tr>
  <tr>
   <td>Intent not Identified
   </td>
   <td>Runs every time the AI Agent cannot understand the user’s intent.
   </td>
  </tr>
  <tr>
   <td>Ambiguous Intents Identified
   </td>
   <td>On identifying ambiguous intents from the user utterance
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong>Conversation  Events</strong>
   </td>
  </tr>
  <tr>
   <td>End of Task
   </td>
   <td>On completing a task (Dialog Task or FAQ)
   </td>
  </tr>
  <tr>
   <td>Task Execution Failure
   </td>
   <td>On encountering an error in dialog task execution like:
<ul>

<li>An error in the execution of the AI Agent,

<li>Service call failure,

<li>Unable to reach the server

<li>Error in invoking agent node in case of agent transfer,

<li>Knowledge Graph Task failures,

<li>Webhook node failures,

<li>Dialog related to a sub-dialog node is not available,

<li>Exceptions in parsing the AI Agent message.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>RCS Opt-in Event
   </td>
   <td>On receiving the message that a user has opted for the RCS Messaging channel.
   </td>
  </tr>
  <tr>
   <td>RCS Opt-out Event
   </td>
   <td>On receiving the message that a user has opted out of the RCS Messaging channel.
   </td>
  </tr>
  <tr>
   <td>Repeat Bot Response Event
   </td>
   <td>On identifying the user's request to repeat the bot responses.
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong>Sentiment Events</strong>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>You can define multiple sentiment events. Click<strong> + New Event</strong> to define an event based on which to capture the user’s emotion.
   </td>
  </tr>
</table>