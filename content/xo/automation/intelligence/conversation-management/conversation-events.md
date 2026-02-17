# Conversation Events

Define the behavior of the AI Agent during conversations with user to optimize user interactions.

## End of Task

*End of Task* is triggered when the AI Agent is not expected to send any message to the user or receive any message from the user.

A new flag indicating the reason for ending the task, added to the _end of task_ event, will help decide the end of the conversation behavior. Client-side implementations of BotKits, RTM, and Webhook channels can use this reason for the task completion flag to determine an appropriate course of action.

On triggering this event, the context will be updated with the following details:

* Reason for triggering event (see the table below).
* Name of the task that has just ended. If it’s an FAQ, then the task name will be set to ‘FAQ’.

<table border="1.5">
<tr bgcolor="#ECECEC">
   <td>
<strong>SCENARIO</strong>
   </td>
   <td><strong>END OF TASK FLAG</strong>
   </td>
  </tr>
  <tr>
   <td>Reached the last node of the dialog
   </td>
   <td>Fulfilled
   </td>
  </tr>
  <tr>
   <td>The task is canceled by the user
   </td>
   <td>Canceled
   </td>
  </tr>
  <tr>
   <td>Error in a task or FAQs execution (without Task Failure Event, no hold tasks)
   </td>
   <td>Failed
   </td>
  </tr>
  <tr>
   <td>Linked dialog completed without returning to the parent dialog
   </td>
   <td>Fulfilled_LinkedDialog
   </td>
  </tr>
  <tr>
   <td>On answering a FAQ
   </td>
   <td>Fulfilled
   </td>
  </tr>
  <tr>
   <td>Successful event execution with Run Script or Show Message (no tasks on hold)
   </td>
   <td>Fulfilled_Event
   </td>
  </tr>
  <tr>
   <td>Error in executing an event with Run Script or Show Message (no tasks on hold)
   </td>
   <td>Failed_Event
   </td>
  </tr>
  <tr>
   <td>The user declines to resume the on-hold task (when no other task is on hold)
   </td>
   <td>Canceled
   </td>
  </tr>
</table>

## Task Execution Failure Event

* By default, this event is always enabled with the _Show Message_ option. This event cannot be disabled.
* This App-level behavior can be overridden for specific tasks by defining task-specific failure events from the dialog task settings. [Learn more](../../use-cases/dialogs/navigating-dialog-tasks.md#dialog-settings).

    <img src="../images/task-execution-failure-event.png" alt="task execution failure event" title="task execution failure event" style="border: 1px solid gray; zoom:75%;">
    
## RCS Opt-In / Opt-Out Events

These events trigger on receiving **_opt-in_** or **_opt-out_** requests from users via the RCS channel. These events allow you to configure a response to be sent to the user as a follow-up for their action.
<img src="../images/rcs-opt-in.png" alt="rcs opt-in" title="rcs opt-in" style="border: 1px solid gray; zoom:75%;">

## Repeat Bot Response Event

The **Repeat Bot Response** event is triggered to repeat the last bot response when certain predefined or custom-trained utterances are detected in voice channels such as IVR, Audiocodes, Twilio Voice and SmartAssist Gateway. 

To enable this event, the developer must define the context object as a precondition for triggering the event. This context object contains the specific set of utterances that should be recognized to repeat the bot’s most recent or last response.

By configuring the context object with appropriate utterances, the bot can understand specific phrases or keywords from the user to trigger the **Repeat Bot Response** event. When one of these utterances is detected, the bot will repeat the last response.

A developer can activate the **Repeat Bot Response** event and custom-train when this event can be triggered with conditions at any point in the conversation and can ask the bot to repeat its recent responses.

!!!note

    The Repeat Bot Response event uses the NLU multilingual model for non-English languages.

The following are some of the scenarios and the repeat bot response event behavior in those scenarios:

<table border="1.5">
<tr bgcolor="#ECECEC">
   <td><strong>SCENARIO</strong>
   </td>
   <td><strong>REPEAT BOT RESPONSE EVENT BEHAVIOR</strong>
   </td>
  </tr>
  <tr>
   <td>In the middle of the conversation
   </td>
   <td>Repeat event gets triggered.
   </td>
  </tr>
  <tr>
   <td>Conflict between Intent and Repeat event
   </td>
   <td>Intent gets prioritized.
   </td>
  </tr>
  <tr>
   <td>Conflict between Sub-Intent and Repeat
   </td>
   <td>Sub-intent gets prioritized.
   </td>
  </tr>
  <tr>
   <td>Conflict between FAQ and Repeat event
   </td>
   <td>FAQ gets prioritized.
   </td>
  </tr>
  <tr>
   <td>Conflict between group node sub-intent and repeat event
   </td>
   <td>Group node sub-intent gets prioritized.
   </td>
  </tr>

</table>

### Use Case Scenario

**Problem Statement**

In the Flight Booking AI Agent, the user couldn’t hear the last response on an IVR channel, and the user said, `"Sorry, I can't hear you. Can you please repeat it again?"`

In this conversation, the dialog has reached the end, and the last response says, `"Thank you. Your flight has been booked successfully. Your booking reference number is XYZ789 and you will receive a message shortly "`(Dialog reached to END).

**Solution**

If the conversation session is not closed or the call is not disconnected after the end of the dialog, the Repeat Bot Response event is triggered, and the last message of the dialog task is repeated when you configure a task in the End of Task event with a message that says `"Is there anything else I can help you with?"`. For more information, see the [End of Task](../conversation-management/conversation-events.md#end-of-task) section.

Now the ‘Repeat Bot Responses’ event considers the end of dialog after the ‘Last User Input’ configuration, the repeat response will say, `"Thank you. Your flight has been booked successfully. Your booking reference number is XYZ789 and you will receive a message shortly. Is there anything else I can help you with?".`

### Enabling the Repeat Bot Response Event

The developer uses the **Repeat Bot Response** to allow you to repeat the responses that users might have missed or if it is not clear during the conversation on an IVR channel.

**Steps to Enable the Repeat Bot Response Event**

1. Navigate to **Conversation Intelligence > Events**.  
<img src="../images/repeat-bot-responses-toggle.png" alt="repeat bot responses" title="repeat bot responses" style="border: 1px solid gray; zoom:75%;">

2. Click **Repeat Bot Response Event** to configure it. .
<img src="../images/savg11.png" alt="repeat bot responses" title="repeat bot responses" style="border: 1px solid gray; zoom:75%;">

3. Click **Manage Utterance** to review the pre-trained utterances that are added to the AI Agent by default.
<img src="../images/manage-utterances-event.png" alt="manage utterances" title="manage utterances" style="border: 1px solid gray; zoom:75%;">

4. You can add more utterances and click the **Train** link.
<img src="../images/click-train-link.png" alt="click train link" title="click train link" style="border: 1px solid gray; zoom:75%;">

5. Once Utterances are trained, you can add the following preconditions:

    * **Channels** – Allows you to add voice channels such as IVR, IVR Audiocodes, Twilio Voice or SmartAssist Gateway.
    * **Context Tags** – Allows you to add the context objects to trigger the Repeat Bot Response event. For more information, read the [Context Object](../../intelligence/context-object.md){target="_blank"} article.
    
 
!!! note

    The context tags are added to trigger the repeat bot responses whenever the dialog task with that particular context is executed. For example, when a book a flight dialog task is executed, then the context tag will trigger the repeat bot response event for that particular dialog task.

<ol start="6"><li>Select the <b>Event Configuration</b> options to define how to repeat the response:</li>
<ul><li><b>Repeat Only Last Bot Response</b> – By default, this option is selected with a filler message: "<i>Sure, I will repeat it for you.</i>"


You can edit or add the filler message for the repeat bot response event before it is triggered.
<img src="../images/add-filler-message.png" alt="add filler message" title="add filler message" style="border: 1px solid gray; zoom:75%;"></li></ul>

<li>Click <b>+Add Filler Message</b>, select the <b>IVR</b> channel, enter the filler messages and then click <b>Done</b>.
<img src="../images/add-filler-to-ivr.png" alt="add filler to ivr" title="add filler to ivr" style="border: 1px solid gray; zoom:75%;">

<ul><li>When the Repeat Bot Response event is triggered, these filler messages are used in the IVR channel conversation before repeating the response.
</li></ul>

<ul><li><b>Auto-generate Response</b> – When you select this option, you are redirected to enable the Advanced NLU model, if not enabled, to generate the bot response using the LLM and Generative AI engine.  
<img src="../images/auto-generate-response.png" alt="auto-generate responses" title="auto-generate responses" style="border: 1px solid gray; zoom:75%;"></li></ul>   
  

<li>Click <b>Enable Now</b> to define the Advanced NLU Settings for the <b>LLM and Generative</b> model and enable the Repeat Responses feature.</li></ul></ol>

!!!note

    When the Auto-generate response option is enabled, the repeat bot response event will not use the filler messages that were defined in the previous step. The responses are automatically sent from the LLM and Generative model when the event is triggered.

<ol start="9"><li>Expand the Advanced Settings and define the following options to repeat the response:</li>
<ul><li><b>Repeat Attempts Limit</b> – Set the number of retry attempts to repeat a response. The accepted value is between <b>1</b> and <b>10</b>. The default is <b>5</b>.</li>
<li><b>Behavior on Exceeding Repeat Attempts</b> – Define what AI Agent must do after exceeding the number of retry attempts to repeat the response. You can choose either the <b>End of Dialog</b> or <b>Initiate Dialog</b> option.

<img src="../images/behavior-on-exceeding-repeat-attempts.png" alt="behavior on exceeding repeat responses" title="behavior on exceeding repeat responses" style="border: 1px solid gray; zoom:75%;">

When you select the <b>Initiate Dialog</b> option, you can choose the task to which the conversation must be redirected after a number of retry attempts to repeat.</li></ul></ol>

<ol start="10"><li>Click <b>Save & Enable</b> to trigger the Repeat Bot Response event with the configurations.</li></ol>
