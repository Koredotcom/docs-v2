

# Manage Interruptions

Human conversations are characterized by twists and turns, and no two directions are ever the same. Natural conversations often tend to go beyond linear intent resolution paths defined in AI Agents. Ideally, a user allows the AI Agent to take an intent to its logical conclusion before initiating another, but that is not always the case.

Consider the following conversation for example:

<img src="../images/flight-usecase-manage-interruptions.png" alt="Flight use case manage interruptions" title="Flight use case manage interruptions" style="border: 1px solid gray; zoom:65%;">

It includes an entity value for the assistant to proceed with the current intent, while also presenting a new user requirement or intent.

AI Agents must account for this by allowing users to pause a task, start and complete another task, and seamlessly return to the original task without losing important contextual data and conversation continuity.

Kore.ai provides granular control over the hold and resume functionality at the AI Agent, task, and node levels, and allows you to [control context switching](../context-management.md){target="_blank"} rules and behaviors with the **Manage Interruptions** feature. You can handle such interruptions in intent flows by providing a whole range of options to select if and how a user can switch to another task, the exit strategies, and the task-switching experience.

Managing Interruptions ensures the configurations for interruptions are layered to suit your various business requirements. This includes allowing, disallowing, and letting the user manage interruptions. You can also add conditional exceptions between tasks with the ability to pass contextual data between them.

Interruptions can be managed for FAQs, Small Talk, and Ambiguous intents on the UXO Platform.

The following sections describe:

* The configuration hierarchy at the AI Agent, task, and node levels.
* The various configurations you can use to Manage Interruptions.

### Interruptions Hierarchy

Apart from defining the generic interruptions options at the app level, you can customize these options at the dialog task or dialog node level. When you set up the Hold and Resume options in more than one levels, the order of precedence of the settings works as follows:

1. Node level settings
2. Dialog task level settings
3. App level settings

#### Node Level Settings

You can customize the interruptions settings at the node level. If you customize the settings for a node, this configuration takes the highest precedence.

To customize the interruptions settings for a node:

1. Open the dialog task and then the node to change settings.
2. Click the **instance tab** and select **Advanced Controls**.
3. Under the **Interruptions Behavior** section, select **Customize for this node** and make the necessary configurations. These configurations are the same as discussed above for the app level [interruptions](#manage-interruptions){target="_blank"}.

   <img src="../images/node-level-customization.gif" alt="node level customization" title="node level customization" style="border: 1px solid gray; zoom:65%;">

#### Dialog Level Settings

The dialog level Interruptions customizations have higher priority over app level settings but rank lower than the node level customizations or any exceptions.

To customize the Interruptions settings for a dialog:

1. **Open the Dialog task** you want to customize.
2. On the top-right of the dialog builder, click the **more options icon** and then click **Manage Interruptions**.
<img src="../images/dialog-level-manage-interruptions.png" alt="node level customization" title="node level customization" style="border: 1px solid gray; zoom:75%;">

3. Under the Interruptions Behavior section, select **Customize for this task** and make the necessary configurations. These settings are the same as discussed above for the App Level [interruptions](#allow-interruptions){target="_blank"}.

<img src="../images/dialog-level-manage-interruptions.png" alt="dialog level manage interruptions" title="dialog level manage interruptions" style="border: 1px solid gray; zoom:75%;">

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>If you do not customize Interruptions settings at the node or task level, the app level settings apply.</p>
</div>

####  App Level Settings

The AI Agent Level interruptions settings can be overridden at the task level as discussed above.

You can access the interruption settings for your AI Agent from under **Conversation Intelligence** > **Conversation Management** > **Manage Interruptions** page.
<img src="../images/bot-level-settings-manageinterruptions-window-1.png" alt="bot level settings manage interruptions" title="bot level settings manage interruptions" style="border: 1px solid gray; zoom:75%;">

The Platform provides options for _Interruptions Behavior_ under the following three categories:

* **Allow interruptions**: Provides options for you to choose for holding a task and options to resume it later.
* **Do not allow interruptions**: Stops new tasks from interrupting the current task.
* **Allow the end user to select the behavior**: Seeks end-user confirmation to switch to a new task and provides several resume options for you to pick from.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>When the user provides input after a session has ended, i.e. after at least 15 minutes of inactivity, and if the input is within the previous session context, it is treated as an interruption scenario. If instead, the user comes back with a new utterance, then the old context is discarded and a new conversation is started.</p>
</div>

##### Allow Interruptions

Once you allow for task interruption, you need to specify the AI Agent’s  behavior in such scenarios as what should happen to the current task, where should the conversation go once the interruption task has been completed, etc.

Following are the options under **Allow interruptions**.

<table border="1.5">
  <tr bgcolor="#ECECEC">
   <td><strong>OPTION</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Hold the current task and resume back once the new task is completed</strong>
   </td>
   <td>This option lets the assistant switch to a new intent as soon as it is detected irrespective of the current intent flow. When you select this option, the Resume Options section appears providing further choices to define how to resume the on-hold task once the new intent task is completed.  Refer to the Resume Options section below for details.
   </td>
  </tr>
 <tr bgcolor="#FAFAFA">
   <td><strong>Discard the current task and switch to new</strong>
   </td>
   <td>When you select this option, the AI Agent discards the current task and switches to a new task soon after it encounters another intent. The AI Agent sends a message to notify the user before switching to the new task and the current task would be discarded. You can customize the response message by clicking <strong>Manage Response </strong> and setting the message for the <b>Notify the user that we have cancelled the current task to switch to another</b> option. In addition to the available responses, click <b>+ Add Response</b> to add a custom response text.</td>
  </tr>
  <tr>
   <td><strong>Switch to a new task without any notification to the user and discard the current task</strong>
   </td>
   <td>When you select this option, the AI Agent discards the current task and switches to a new task soon after it encounters another intent. The AI Agent does not notify the user about the switch and does not resume the current task later.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Continue the current task and add new task to the follow-up task list.</strong>
   </td>
   <td>When you select this option, the AI Agent continues on the current task even if it encounters a new intent. It, however, adds the new intent to the Follow-up intents array. You can customize the response message by clicking <strong>Manage Response </strong> and setting the message for the <b>Notify the user that we have cancelled the current task to switch to another</b> option. In addition to the available responses, click <b>+ Add Response</b> to add a custom response text.</td>
  </tr>
</table>

##### Do not allow interruptions

When you select this option, the assistant-level **interruptions** are turned off. However, you may override this behavior for selected tasks, linked dialogs (exceptions), or node levels. Refer to the [Interruptions Hierarchy](#interruptions-hierarchy){target="_blank"} section above for more information.

##### Allow the end user to select the behavior

When you select this option, the AI Agent presents the end-user with a confirmation message asking if the user wants to switch to a new task. The AI Agent switches to the new task only if the end-user chooses to do so. You can customize the confirmation message sent to the user by clicking the **Manage Response** link next to the option.

You need to define a *Resume* option that the AI Agent should take if the user decides to switch the task. Refer to the [Resume Options](#resume-options){target="_blank"} section below for details.

##### Resume Options

Once you allow the task to be put on hold and proceed with the interruption task, you must configure the _Resume_ option i.e. how the on-hold task should be handled once the interrupting task is completed.

<table border="1.5">
  <tr bgcolor="#ECECEC">
   <td><strong>OPTION</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Get confirmation with the user before resuming an on-hold task</strong>
   </td>
   <td>After executing the new task, the AI Agent gives Yes or No options to the user to return to the last on-hold task. You can write a custom message for the user by clicking the <strong>Manage Response</strong> link next to the option.
<p>
<strong>Example:</strong>
<p>
<code>User: Hi 
AI Agent: Hello! 
User: Can you book me a flight for tomorrow? 
AI Agent: From which city are you flying? 
User: Los Angeles 
AI Agent: Where to? 
User: By the way, what's the weather forecast for tomorrow? 
AI Agent: Please enter the name of the city for the forecast. 
User: Los Angeles 
AI Agent: Weather Forecast for Los Angeles 
Date: March 15 
Temperature: 25 C 
Condition: Mostly Sunny 
AI Agent: Should I continue with the task 'Book Flight'? 
User: Yes 
AI Agent: Enter the name of the destination airport</code>
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Notify the user with a message that the on-hold task is being resumed</strong>
   </td>
   <td>Notifies the user with a message and resumes the last task that’s kept on hold without user confirmation.
<p>
You can customize the notification message by clicking the <strong>Manage Response</strong> link next to the option.
<p>
<strong>Example:</strong>
<p>
<code>User: Hi 
AI Agent: Hello! 
User: Can you book me a flight for tomorrow? 
AI Agent: From which city are you flying? 
User: Los Angeles 
AI Agent: Where to? 
User: By the way, what's the weather forecast for tomorrow? 
AI Agent: Please enter the name of the city for the forecast. 
User: Los Angeles 
AI Agent: Weather Forecast for Los Angeles 
Date: March 15 
Temperature: 25 C 
Condition: Mostly Sunny 
AI Agent: Resuming interrupted task Book Flight 
AI Agent: Enter the name the of the destination airport</code>
   </td>
  </tr>
  <tr>
   <td><strong>Resume the on hold task without any specific message to the user</strong>
   </td>
   <td>Directly resumes the last task that’s kept on hold soon after the current task is executed.
<p>
<strong>Example:</strong>
<p>
<code>User: Hi 
AI Agent: Hello! 
User: Can you book me a flight for tomorrow? 
AI Agent: From which city are you flying? 
User: Los Angeles 
AI Agent: Where to? 
User: By the way, what's the weather forecast for tomorrow? 
AI Agent: Please enter the name of the city for the forecast. 
User: Los Angeles 
AI Agent: Weather Forecast for Los Angeles 
Date: March 15 
Temperature: 25 C 
Condition: Mostly Sunny 
AI Agent: Enter the name of the destination airport</code>
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td><strong>Always resume the on hold task without any specific message to the user if the task is ended in a single response</strong>
   </td>
   <td>Sometimes, the switched-over tasks end with a single response. For example, in the weather forecast example above, if the user had directly entered <em>By the way, what’s the weather forecast for LA tomorrow?</em> the AI Agent would have merely responded with the forecast, with no further steps.
<p>
In such cases, if you select this option, the assistant switches back to the task on hold without any confirmation or notification, regardless of the option you’ve chosen.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The switching happens directly, without any notification to the end-user.</p></div>
 </td>
</tr>
</table>

##### On Hold Quantity

You can select the number of tasks that you want to keep on hold from the **On Hold Quantity** field. The default value is <b>1</b>. The assistant keeps a maximum of this number of tasks on hold and ignores the tasks once this value is reached.

For example, if you specify the On Hold Quantity as 1 and if a third intent comes into play, the AI Agent will not allow the new task to be initiated regardless of interruptions options.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>Tasks always resume in reverse chronological order. So, if you kept task 2 on hold after task 1, task 2 resumes before task 1.</li>
<li>We recommend only having one or two levels of tasks on hold to avoid confusion during user interaction.</li></ul></p>
</div>

##### Manage Behavior for FAQs

You can choose whether FAQs should honor the interruptions settings or if FAQs should be always responded to.

<img src="../images/faq-interruption-behavior-window.png" alt="faq interruption behavior" title="faq interruption behavior" style="border: 1px solid gray; zoom:75%;">

The flag **Interruption Behavior for FAQs** will allow you to:

* <b>Respond to FAQs and resume the on-hold task</b>: This is the default setting where first, the AI Agent responds to the FAQs and then, resumes executing the task on hold.
* <b>Execute the FAQs using Hold & Resume Settings</b>: The AI Agent always identifies FAQs when interruptions are enabled and proceeds as per the Hold and Resume settings you've configured.

##### Manage Behavior for Ambiguous Intents

You can handle ambiguous intents during a conversation flow by setting the flag **Behavior for Ambiguous Interruptions**.

<img src="../images/ambiguous-interruption-behavior-window.png" alt="ambiguous intent interruption behavior" title="ambiguous intent interruption behavior" style="border: 1px solid gray; zoom:75%;">

These settings allow you to do the following:

* <b>Present the ambiguous intents to the end-user and proceed as per the <i>Hold and Resume</i> Settings</b>: Select this option in case the user selects a task and the interruptions setting is as follows:
    * _Continue the current task and add a new task to the follow-up task list_, then the current task will be kept on hold and the new task will be initiated.
    * _Allow the end-user to select the behavior_, then the new task will be initiated without asking the user since the selection has been already made.
    * All other _hold_ options will be applied as usual.
* <b>Do not present ambiguous intents to the end users and continue on the current task</b>: This is the default setting where the AI Agent continues with the current task without presenting the ambiguous intents to the user.

##### Manage Behavior for Small Talk

You can handle Small Talk during a conversation flow by setting the flag **Interruption Behavior for Small Talk**. 

<img src="../images/smalltalk-interruption-behavior-window.png" alt="small talk interruption behavior" title="small talk interruption behavior" style="border: 1px solid gray; zoom:75%;">

These settings allow you to:

* <b>Respond to Small Talk and resume the on-hold task</b>: This is the default setting where the AI Agent responds to the Small Talk message by putting the current task on hold. Then, the AI Agent resumes the on-hold task.
* <b>Execute the Small Talk using Hold & Resume settings</b>: Executes the Small Talk task based on your configurations for <b>Hold & Resume</b>.

##### Manage Behavior for User Authorization

When a user gives any input at a prompt message for authorization that is not relevant, the following flow is followed:

* If Small Talk intent is identified, then the Small Talk’s response is displayed, and the authorization is re-prompted.
* The Platform checks for the presence of any intents (tasks or FAQs) in the user utterance, irrespective of the configurations set for Manage Interruptions:
    * If the intent is identified, confirmation to discard the current task and trigger the new task is sought.
    * If multiple intents are identified, an ambiguity dialog along with the option to ignore the utterance and continue with the current task is presented.
* If no intent is identified, then the user is re-prompted with the authorization link.