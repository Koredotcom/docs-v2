


# Default Standard Responses

On the Platform, you can view the default Natural Language Processing or NLP interpreter responses to user inputs or events.

For example, a reply to a user input of *Hi!* The AI Agent replies with one of the following responses, chosen randomly at runtime:

* Hi!
* Hello
* Hi there!
* Hey 🙂

The NLP interpreter displays pre-defined text responses to users based on an event, condition, trigger, or user input. Depending on your custom AI Agent and the users of that AI Agent, you may want to modify the default responses to users displayed for an event or request for input.

Example

* **User Input** – When were you born?
* **Event** – Authorization Failure
* **Trigger** – Task canceled

You can define both standard responses, or if desired, add a channel override response displayed only in the specified channel the user is in, otherwise, one of the standard default responses is displayed.

For example, in the SMS channel, you may only want to use short app responses to save data.

## Standard Response

XO Platform provides a few default text responses. To access and manage the default responses on the Platform,

Go to **Automation AI** >**Conversation Intelligence** > **Conversation Management** > **Standard Responses**.

For each standard response category tab, the event or user input is listed, followed by one or more NLP interpreter standard responses.

You can modify the default response, and if needed, add additional responses selected randomly by the NLP interpreter in response to user input or system event.

In the **Standard Response** section, the standard responses are categorized in the following tabs:

### Statements

Responses are displayed to the user as the result of an action by the AI Agent or user. For example, a user cancels a task, or a user gives an invalid response to your AI Agent request.

<table border="1.5">
  <tr bgcolor="#ECECEC">
   <td><strong>MESSAGE</strong>
   </td>
   <td><strong>DEFINITION</strong>
   </td>
  </tr>
  <tr>
   <td>When the user confirms to close the conversation in a language and switch to another language.
   </td>
   <td>Shown when the user switches languages after confirming the end of a conversation in one language and begins the next interaction in a different language.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>When only field prompt is present in the oob
   </td>
   <td>This is a field prompt message for action and alert tasks. This is only for the Kore platform to use. Enterprises should not be changing this. As part of the next deployment, this will be hidden from the app developer.
   </td>
  </tr>
  <tr>
   <td>When language preference is set
   </td>
   <td>Shown when the user switches language using <em>cheat lang</em> or picks a language from the options shown.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>When task is not accessible to user
   </td>
   <td>Shown when the developer tries to access an app task for which they do not have access
   </td>
  </tr>
  <tr>
   <td>User confirms alert setup
   </td>
   <td>Applicable to Alert Task Only
<p>
This response is displayed when an alert is set up successfully and the app will trigger the task at the given frequency or specified time.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>User discards/abandons the current activity
   </td>
   <td>Shown in the following cases:
<p>
1. When a user ends the task by saying <em>discard</em>
<p>
2. When a task ends on exceeding max tries at an entity or choices not available in a LoV, or a cURL problem in an HTTP request, etc.
   </td>
  </tr>
  <tr>
   <td>User implies to end the conversation (For example, good night, bye, ttyl)
   </td>
   <td>This condition occurs only for Dialog tasks for which the following Follow-up Tasks Setting is configured: <em>Yes, at the end of this dialog ask the user to select and perform a task from the Follow-up task list in the Dialog settings</em>. The AI Agent shows this message when it presents the Follow-Up Intents array to the user at the end of the Dialog.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Location provided by user is invalid for a field in an action
   </td>
   <td>This message is displayed when the AI Agent is not able to validate the user input for a <em>Location</em> type of entity.
   </td>
  </tr>
  <tr>
   <td>Amending an Alert field
   </td>
   <td>Applicable to Alert Task Only
<p>
When setting up an alert, the end-user needs to provide values for the parameters that the alert needs along with the frequency at which the alert will be triggered. If the developer specifies that the alert should confirm all values from the user before setting up the alert, the AI Agent will display an option to the user if he wants to amend the values.
<p>
This response is displayed if the user says <em>Yes</em> to amend
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Amending a task which has no fields
   </td>
   <td>Applicable to Alert, Action and Information Task
<p>
The standard confirmation message in case of Action, Alert, and Information tasks ends with an option to amend entities. In case the task does not have any entities (Fields) then this message will be shown.
   </td>
  </tr>
  <tr>
   <td>Ask at least one optional field
   </td>
   <td>Applicable to Action Task Only
<p>
Under the Advanced settings when defining the action task, the developer can set an option to enforce the user to provide at least one of the optional fields (parameters/entity) of all the configured optional parameters. This is to handle the use case of Modify.
<p>
This response is displayed if the user does not provide value to any of the optional parameters
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Topic retry limit exceeded
   </td>
   <td>This is only for the developer (Developer mode on).
<p>
The platform has set up a check on loop limit and if the dialog conditions result in looping through the same nodes multiple times (Defined limit) then the task is discarded and this message is shown to the developer.
   </td>
  </tr>
  <tr>
   <td>Universal fallback response
   </td>
   <td>Shown in the following cases:
<p>
1. Universal catchall: For any reason, be it technical or others, when the AI Agent is not able to generate further responses
<p>
2. When the app exceeds the maximum number of nodes that can be executed in a volley, and the user is not an app developer. For an app developer <em> the Topic retry limit exceeded</em> the message displayed in this case.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Server returned authorization failure and the user needs to re-authorize
   </td>
   <td>This message is displayed for a Server Authorization failure during the execution of the script node or making an API call.
   </td>
  </tr>
  <tr>
   <td>User selects a valid option from the list of options
   </td>
   <td>The message is displayed when the AI Agent displays a list of all the tasks and the user selects an action/alert/information task.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>User selects an action
   </td>
   <td>The message is displayed when the user selects an action task to be executed. The AI Agent confirms that the task has been selected and asks the user to provide values for the parameter required to complete the task.
   </td>
  </tr>
  <tr>
   <td>Alert is identified, ask the user to enter alert time
   </td>
   <td>Applicable to Alert Task Only
<p>
During the setup of the Alert, the AI Agent will ask the user the frequency at which the alert will be triggered. The end-user will need to specify at what interval the alert task will be triggered.
<p>
This AI Agent message is displayed to request the user to specify the Alert time if the Trigger interval option is set to At a specific time in the day.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Alert is identified, ask the user to enter alert time interval
   </td>
   <td>Applicable to Alert Task Only
<p>
During the setup of the Alert, the AI Agent will ask the user the frequency at which the alert will be triggered. The end-user will need to specify at what interval the alert task will be triggered.
<p>
This message is displayed to request the user to specify the Alert time interval if the Trigger interval option is set to Every X mins.
   </td>
  </tr>
  <tr>
   <td>User selects an alert
   </td>
   <td>The message is displayed when the user selects an alert task to be executed. The AI Agent confirms that the task has been selected and asks the user to provide values for the parameter required to complete the task.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Task discarded
   </td>
   <td>Shown when the user types <em>discard</em> in the middle of the task flow. The AI Agent discards the task.
   </td>
  </tr>
  <tr>
   <td>App choosing the default account
   </td>
   <td>Used in alerts. Shown when the user is asked if they want to amend anything before setting up the alert, and what the user replies with is not understood by the AI Agent.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Confirmation Dialog for Task consolidated
   </td>
   <td>Used in Action and Information tasks.
<p>
Before executing the task, the AI Agent confirms with the user with the parameters captured if it can go ahead and execute the task
   </td>
  </tr>
  <tr>
   <td>Confirmation Dialog for Alert consolidated
   </td>
   <td>Applicable to Alert task Only
<p>
During a task set up by the end user, the AI Agent will confirm all the details entered with the user before setting up the alert. It also gives the user an option to amend the values, proceed, or discard.
<p>
This message is displayed only if the developer has enabled confirmation of all parameters before the execution of the task.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Confirmation Dialog for Alert consolidated without fields
   </td>
   <td>Applicable to Alert Task Only
<p>
If the alert is not expecting any parameters from the end user, the AI Agent will display this message before the final execution of the alert.
<p>
This message will be displayed only if the developer has enabled confirmation with the user before the execution of the task.
   </td>
  </tr>
  <tr>
   <td>The alerts will be muted
   </td>
   <td>This message is displayed when the developer has muted the alert notifications
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Confirmation Dialog when alerts are muted
   </td>
   <td>Applicable to Alert Task Only
<p>
This response is displayed when the developer has enabled <em>Mute alert notifications</em> for the RSS feed. Developers can enable or disable <em>Mute alerts notifications</em> if they do not want desktop or mobile phone notifications to display on the desktop or their mobile phone each time an alert for the RSS is received. By default, notifications are enabled.
   </td>
  </tr>
  <tr>
   <td>Alert Frequency description
   </td>
   <td>Applicable to Alert Task Only
<p>
Alert tasks when configured using web service, make requests based on the frequency selected by the app user.
<p>
This message is displayed as an alert task setup confirmation about the frequency of the query.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Not understanding the input at confirmation
   </td>
   <td>In the process of setting up the alerts, the user is asked to confirm the frequency settings and the user response does not relate to the frequency query.
   </td>
  </tr>
  <tr>
   <td>No results found for the search string
   </td>
   <td>Applicable to Alert, Action, and Information Task
<p>
When a typeahead field does not return any results
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Successful task setup
   </td>
   <td>This message is displayed when an alert task is set up successfully
   </td>
  </tr>
  <tr>
   <td>I am not sure what you mean
   </td>
   <td>Shown when the AI Agent finds one or more not-so-confident intents against a user utterance. Usually shown for FAQ suggestions.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Ambiguity in intent recognition
   </td>
   <td>This response is displayed when the AI Agent fails to identify the intent of the end user utterance. The AI Agent then prompts the user to re-phrase the statement.
   </td>
  </tr>
  <tr>
   <td>User has selected to setup an alert per day and AI Agent needs to know if the choice is based on frequency or specific time
   </td>
   <td>Applicable to Alert Task Only
<p>
This message is displayed when the AI Agent asks the user to provide the frequency at which the alert task will be auto-triggered. This can be specified in terms of af a particular time as 10 am or frequency like every 10 minutes. This is a message when both options are set up.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>App needs to present the filter options
   </td>
   <td>Applicable to Alert Task Only
<p>
This message is displayed when more than one filter is available during the setup of an alert. In this situation, the AI Agent will display this message followed by the list of available filters from where the user can select the filter to apply.
   </td>
  </tr>
  <tr>
   <td>App needs to present the filter options with exit option
   </td>
   <td>Applicable to Alert Task Only
<p>
This message is displayed when more than one filter is available during the setup of an alert. In that situation, the app will display this message followed by the list of available filters from where the user can select the filter to apply and an option to skip.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>User finished configuring filters
   </td>
   <td>Applicable to Alert Task Only
<p>
This message is displayed after a user completes configuring a filter while setting up an alert task.
   </td>
  </tr>
  <tr>
   <td>User asks <em>Who am I</em>
   </td>
   <td>Shown when a user types <em>Who am I</em>
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>User asks for help
   </td>
   <td>This message is displayed when the user types <em>Help</em>. The AI Agent lists all the dialog tasks, alert/action/information tasks it can perform.
<p>
Part of the <em>Help</em> message.
   </td>
  </tr>
  <tr>
   <td>Skipped values
   </td>
   <td>Applicable to Action and Information Task
<p>
This is part of the confirmation message for an action/Information task, we mention the skipped parameters in the confirmation message.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>While filling fields, ask user to change the field that this fields depends on
   </td>
   <td>Applicable to Action dropdowns
<p>
This message is displayed to the user when a drop-down field at actions is dependent on another field and the platform is not able to fetch the data from the dependent field.
   </td>
  </tr>
  <tr>
   <td>When there is no data
   </td>
   <td>Applicable to Action Tasks
<p>
This message is displayed when the user chooses to change the account and upon AI Agent confirmation, the user provides <em>no</em> as input.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>When date given in Invalid format
   </td>
   <td>Shown when the user enters an invalid entry for a date entity. The platform recognizes the following date formats: YYYY-MM-DD, DD-MM-YYYY.
<p>
DD-MM-YY, 1 Jan 1982 or 1st Jan, or the following type of date descriptions This day last year, Next Friday
   </td>
  </tr>
  <tr>
   <td>This message is displayed by the AI Agent when the end user discard the current task in execution. The user can use the <em>discard/discard all</em> command to discard the current task in execution. Other similar commands like exit, cancel etc also results in discard.
   </td>
   <td>Follow up sentence post User discards/abandons the current activity
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Confirmation Dialog for task with skipped fields
   </td>
   <td>Applicable to Action and Information Task
<p>
This message is displayed to confirm the setup of Action/Information before the final execution of the task when a few fields are not mandatory to provide by the user.
   </td>
  </tr>
  <tr>
   <td>Listing all tasks
   </td>
   <td>This message is displayed when the end user types <em>Help</em> and the AI Agent lists all tasks. This is part of the message shown when the user utterance does not match any task/faq.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Listing all alerts
   </td>
   <td>This message is displayed when the end user types <em>Help</em> and the AI Agent lists all alert tasks. This is part of the message shown when the user utterance does not match any task/faq.
   </td>
  </tr>
  <tr>
   <td>Listing all FAQs
   </td>
   <td>Shown when responding to the user when requesting <em>Help</em>. This response is part of a bigger response and deals with the knowledge graph collections.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Listing all alerts after tasks
   </td>
   <td>If an app just has alert tasks, the AI Agent shows this message along with showing the list of all alert tasks when the AI Agent fails to understand the user intent.
   </td>
  </tr>
  <tr>
   <td>Listing all alerts after tasks and FAQs
   </td>
   <td>When a user provides the input <em>Help</em> and all types of tasks Actions, Dialogs, FAQs, and Alerts are configured at the app.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Lists all actions and FAQs for an app
   </td>
   <td>This message is displayed when the app is unable to find a matching task for the end-user utterance and lists all actions and FAQs.
   </td>
  </tr>
  <tr>
   <td>Lists all alerts and FAQs for a app
   </td>
   <td>This message is displayed when the app is unable to find a matching task for the end-user utterance and lists all alerts and FAQs.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>When app has no tasks
   </td>
   <td>Shown when the developer tries to run an app that doesn’t have any tasks created.
   </td>
  </tr>
  <tr>
   <td>When a server call fails and the task has to be discarded
   </td>
   <td>Shown when a Kore API call couldn’t be made (webhook node or service node) and the task had to be discarded.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>User prompt when a task is discarded due to a server call failure
   </td>
   <td>This message is displayed when there is a server call failure due to which the API call was not completed successfully.
   </td>
  </tr>
  <tr>
   <td>Specific app is not available for conversation
   </td>
   <td>This message is displayed when an app is not published yet and the end user tries to communicate with it.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Field title and value in confirmation
   </td>
   <td>Applicable to Alert, Action, and Information Task
<p>
This is part of the confirmation step before executing the alert, action, or information task. The format of showing the captured parameters is described here.
   </td>
  </tr>
  <tr>
   <td>Recursive dialog found
   </td>
   <td>Shown when the AI Agent calls a dialog recursively and exceeds the maximum limit (100).
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Loop limit reached for a node
   </td>
   <td>Shown when the AI Agent repeatedly invokes the same node in a loop for more than an allowed number of times.
   </td>
  </tr>
  <tr>
   <td>Message component doesn’t have a message
   </td>
   <td>When the message from a message node or service node is empty or cannot be resolved, we show this default message.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>User says thanks
   </td>
   <td>Shown when the user thanks the AI Agent.
   </td>
  </tr>
  <tr>
   <td>User says OK, fine, yes, etc. when there is no task in context
   </td>
   <td>Shown when the user says OK, fine, got it, etc (probably after finishing a task)
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>User says no, nope etc. when there is no task in context
   </td>
   <td>This is small talk in response to user utterances such as – <em>No, Nopes,</em> etc.
   </td>
  </tr>
  <tr>
   <td>User says great, awesome etc. when there is no task in context
   </td>
   <td>Shown when the user says great, awesome, etc. (probably after finishing a task)
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>User says that helped, that was useful, etc.
   </td>
   <td>Shown when the user says good, great, awesome, cool, “fair enough”, “that helped”, “it helps”, “that was useful”, “that was handy” etc. (probably after finishing a task)
   </td>
  </tr>
  <tr>
   <td>User says I am done. That’s it for now! etc.
   </td>
   <td>Shown when the user says <em>I am done, that’s it for now, that’s all</em>, done, etc. (probably after finishing a task)
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Successfully added filter
   </td>
   <td>This message is displayed when a filter is added successfully to an alert
   </td>
  </tr>
  <tr>
   <td>After successfully adding a filter, showing the filter options again
   </td>
   <td>Applicable to Alert Tasks only
<p>
Developers can define filters for end users to limit the results of an alert task as per the end-user needs. When the alert is set up by the end user, and the filter applied, only alert messages that meet the filter specifications are displayed to the end-user.
<p>
This message is displayed when a filter is enabled for an alert.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>User gave invalid input for filter, showing the filter options again
   </td>
   <td>Applicable to Alert Task Only
<p>
The message is displayed when the user specifies a filter name that does not match the ones that have been configured.
   </td>
  </tr>
  <tr>
   <td>Resume paused task.
   </td>
   <td>This message is displayed when the user chooses to resume the On-hold task. The message is displayed only when the Resume option is set to <em>Notify the user with a message that the on-hold task is being resumed.</em>
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Notify the user that we have canceled the paused task.
   </td>
   <td>This message is displayed when the user chooses to cancel the on-hold task. This option of canceling the on-hold task is available only when the Resume option is set to <em>Get confirmation with the user before resuming on hold task</em>. When the user is asked to confirm resumption and selects to cancel the on-hold task this message is shown.
   </td>
  </tr>
  <tr>
   <td>Notify the user that we have canceled the current task to switch to another
   </td>
   <td>This message is displayed when the Hold and Resume – Hold option is set to <em>Discard the current task and switch to new</em>. Before discarding the current task, the AI Agent will display the given message. This message can be customized from the <em>Manage response</em> option.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>When an interruption is identified but hold is not allowed
   </td>
   <td>This message is displayed when the user input matches with another task when one task is in execution but the current task cannot be interrupted. In this situation, the AI Agent will add the new task to the follow-up task list and continue the execution of the current task. For this behavior, the developer needs to select <em>Continue the current task and add a new task to the follow-up task list in the Hold and Resume settings.</em>
   </td>
  </tr>
  <tr>
   <td>Service call timedout
   </td>
   <td>Shown when a third-party API call timed out (webhook node or service node-third party async API timeout)
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Dialog has no transitions
   </td>
   <td>Applicable to Dialog Task Only
<p>
This response is displayed when the AI Agent identifies a dialog task for which no conversation flow has been defined. The task is defined only with an Intent node.
   </td>
  </tr>
  <tr>
   <td>manage account
   </td>
   <td>The user says <em>manage app accounts, add a new phone number, manage my profile, I want to delete my app account, I want to reactivate my account,</em> etc.
   </td>
  </tr>
</table>

### Queries

Statements from the AI Agent to the user to ask for more information. For example, *Which field do you want to change?*
<table border="1.5">
  <tr bgcolor="#ECECEC">
   <td><strong>MESSAGE</strong>
   </td>
   <td><strong>DEFINITION</strong>
   </td>
  </tr>
  <tr>
   <td>Ask if the user would like to switch to the new language detected during a conversation
   </td>
   <td>This message is displayed when multiple new languages are detected from the user's input during an ongoing conversation. It informs the user of the languages identified and prompts them to select their preferred language to continue the interaction.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Ask if the user would like to switch to the new language detected during a conversation
   </td>
   <td>This message is displayed when the system detects that the user is communicating in a different language than the current one being used. It offers the user the option to either switch to the newly detected language or continue in the current language.
   </td>
  </tr>
  <tr>
   <td>Follow up sentence post Task execution or discard of task
   </td>
   <td>This message is displayed after a task is either completed or discarded. The message confirms that the task has been canceled and reassures the user that they can restart the task at any time.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Confirmation before discard
   </td>
   <td>It applies only to selected clients like Citibank. Shown when the user enters Discard or Discard All during task execution.
   </td>
  </tr>
  <tr>
   <td>User Types <em>Change</em> or similar words
   </td>
   <td>Applicable to Alerts
<p>
While setting filters for an alert, the user says they changed their mind.
<p>
This message is displayed when the AI Agent discards the current alert setup.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>User prompted to enter text to search for the relevant results
   </td>
   <td>Applicable at action, alerts, and information tasks. When the parameter is type – <em>Type ahead</em>, the user will be shown this message.
   </td>
  </tr>
  <tr>
   <td>Ask the user to enter alert frequency
   </td>
   <td>Applicable to Alerts
<p>
This message is used to prompt the user while setting an alert frequency, and the frequency options are either an interval (every 4 hours) or a time (at 10 am).
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Ask the user to enter alert interval
   </td>
   <td>Applicable to Alerts
<p>
This message is used to prompt the user while setting an alert frequency, and the frequency option is an interval (every 4 hours).
   </td>
  </tr>
  <tr>
   <td>Ask the user to enter alert time
   </td>
   <td>Displayed as per schedule options defined by the developer of the alert and would be prompted while setting up the alert. For example, when the user selects <em>daily</em>, the AI Agent prompts the user to enter a time.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Alert is identified, Ask the user to enter frequency
   </td>
   <td>Displayed as per schedule options defined by the developer at the alert and would be prompted while setting up the alert.
   </td>
  </tr>
  <tr>
   <td>Prompting user to enter name for alert instance
   </td>
   <td>Applicable for alerts – when users try to install the alert in the Kore messaging app – rooms
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>User needs to select a value from a list presented as a result of static drop-down
   </td>
   <td>Applicable for alerts.
<p>
When the user opts to apply a filter on notifications and chooses a filter of field type static dropdown, the options name will be presented to the user with this message.
   </td>
  </tr>
  <tr>
   <td>User needs to select a value from a list presented as a result of search results
   </td>
   <td>Applicable for alerts.
<p>
When the user opts to apply a filter on notifications and chooses a filter of field type dynamic dropdown, the label key will be presented to the user with this message.
   </td>
  </tr>
  <tr>
   <td>Request for email address to send webhook instructions
   </td>
   <td>Applicable for webhook alerts wherein the developer would be mailed the setup instructions.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Query to get the alert instance description
   </td>
   <td>Applicable to Alerts
<p>
This message is used to ask the user for a description while setting up an alert.
   </td>
  </tr>
  <tr>
   <td>Tell me the alphabet or a unique word for action you want
   </td>
   <td>When the AI Agent has to display a list of options, it displays this message before the list to prompt the user to select an option. If the AI Agent doesn’t use any custom template, the list is displayed as an alphabetically ordered list and the user can either enter the choice or the letter associated with it.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>I am not sure what you mean after an invalid choice
   </td>
   <td>When a user utterance leads to the detection of not-so-confident matches, the AI Agent displays the options for the user to pick from. If the user’s follow-on message doesn’t match any of the initially identified ambiguous alerts, this message occurs.
   </td>
  </tr>
  <tr>
   <td>Asking user to pick an alert
   </td>
   <td>Applicable to Alerts
<p>
This message is displayed when a list of alerts is shown to the user to pick from
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Asking user to pick an alert after an error
   </td>
   <td>Applicable to Alerts
<p>
This message is displayed when a list of alerts is shown to the user to pick from and they pick a wrong choice (a wrong index, maybe)
   </td>
  </tr>
  <tr>
   <td>When User responded with an invalid answer to confirmation dialog
   </td>
   <td>At a confirmation for an action, when the user says they want to amend something but the app does not understand what, we show this message and ask for confirmation again
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Typeahead field prompt, when it is the first field in a task
   </td>
   <td>Applicable at action, alerts, and information tasks. When the parameter is type – <em>Type ahead</em>, the user will be shown this message
   </td>
  </tr>
  <tr>
   <td>After user selecting a valid alert from the list of alerts, then tries to change the alert name
   </td>
   <td>Applicable to Alerts
<p>
Users can change/amend the name of the alert during setup.
<p>
This message is used to ask the user what they want to name the alert.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>After user selects amend and enters the choice
   </td>
   <td>Applicable to Alerts
<p>
Users can amend parameters like name, description, notification, frequency, etc. during alert setup.
<p>
This message is used to ask the users if they want to change anything else after any parameter has been amended successfully.
   </td>
  </tr>
  <tr>
   <td>No results found for the search string. Ask user to try again.
   </td>
   <td>Applicable at action, alerts and information tasks. When the parameter is type – <em>Type ahead</em>, and the user input doesn’t fetch any results from the API response.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Follow up sentence post User discards/abandons the current activity – Part2
   </td>
   <td>Applicable to Alerts
<p>
At an alert confirmation, the user says no, and then we ask if they want to change anything (message with the title <em>User says <strong>no</strong> for alert setup confirmation</em>), to which the user says no again.
   </td>
  </tr>
  <tr>
   <td>Listing ambiguous tasks
   </td>
   <td>This message is displayed when the user is prompted to pick a task from a list, and their reply leads to ambiguity
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Ask user if they want to continue the last paused task after completing the interrupting task.
   </td>
   <td>This condition applies only to AI Agents for which the following resume option in the Hold and Resume settings is configured: <em>Get confirmation with the user before resuming an on-hold task Resume option.</em> The AI Agent shows this message when it completes executing the new task and confirms if it can resume the on-hold task.
   </td>
  </tr>
  <tr>
   <td>To be displayed to ask if user would like to switch
   </td>
   <td>Applicable to Manage Interruptions
<p>
This message is displayed when <em>Hold and Resume</em> are set to <em>Allow the end user to select the behavior</em>. In this situation, when the user utterance matches with a task name, the AI Agent will confirm with the end user before switching to the new task.
   </td>
  </tr>
</table>

### Errors & Warnings

Statements from the AI Agent to the user, when an error occurs during the scenario, such as the *End date, cannot be before or the same as the start date!*

<table border="1.5">
  <tr bgcolor="#ECECEC">
   <td><strong>MESSAGE</strong>
   </td>
   <td><strong>DEFINITION</strong>
   </td>
  </tr>
  <tr>
   <td>Agent Transfer fallback response
   </td>
   <td>This response  is displayed under the following scenarios:  
    <ul>
    <li>When there is a wait time for the agent to receive the chat.  
    <li>When an agent is unavailable to take the chat.
    <li>When an agent closes or rejects the chat.
    <li>When there is a technical error with the third-party agent system.
    <li>When the Platform fails to transfer the conversation to the agent.</ul>
    <br>
    <strong>Note:</strong> This is currently managed specifically for agent integrations like Salesforce and Helpshift, based on the events emitted by these integrations.
   </td>
  </tr>
  <tr>
   <td>User exceeds the maximum allowed retries for an entity when another task is on hold
   </td>
   <td>This response is displayed when the user exceeds the maximum allowed retries for an entity when another task is on hold.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Dialog task associated to a FAQ is not available
   </td>
   <td>This response is displayed in case the dialog linked with FAQ is suspended, deleted, or not assigned to the user
   </td>
  </tr>
  <tr>
   <td>User needs to authorize or re-authorize
   </td>
   <td>This response is displayed when the end-user authorization or re-authorization is requested.
<p>
The Authorization URL required for obtaining the user’s authorization is dynamically appended to the messages defined in the Simple mode. For defining the message in Advanced Mode, you can use the <code>koreUtil.getCurrentOptions()</code> function to retrieve the Authorization URL and use it as part of the message.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>User authorization has failed or user is yet to authorize
   </td>
   <td>If access to a AI Agent/task needs authorization, the AI Agent prompts the user with this message, requesting authorization. This message is followed by a link that will open on a web page depending on the type of auth profile.
   </td>
  </tr>
  <tr>
   <td>User’s intent is recognized, but authorization fails
   </td>
   <td>This response is displayed when the intent identified by the AI Agent needs to make a service call that needs authorization and no accounts have been created by authorized yet.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>User authorization failed for more than 3 times
   </td>
   <td>Shown when the user enters the wrong authorization credentials three times in a row.
   </td>
  </tr>
  <tr>
   <td>User provided value which is not unique.
   </td>
   <td>When a list of partially matched intents is shown to the user, and the user instead of selecting from the options, types something that again creates ambiguity.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>App did not find any options based on user’s choice
   </td>
   <td>When the set of options to show for a list is empty.
<p>
Can also be shown if there are no account credentials to select from.
   </td>
  </tr>
  <tr>
   <td>Discarding the task since we did not find any options for a list or lookup.
   </td>
   <td>Shown when the user entered choices is not present in the response after making a service call. The fields at simple tasks for user inputs wherein the user input is looked up from the response of the third party is an instance. (Actions, Alerts, and Information tasks – Dynamic drop-down or Type ahead field types with user input from the chat window can be considered an example).
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>When the task is identified, Server call failure is returned
   </td>
   <td>Shown when the task is identified but the user account on Kore to access third-party API expired or failed
   </td>
  </tr>
  <tr>
   <td>User enters Invalid email
   </td>
   <td>Shown when the user enters an invalid email address for an alert, action, or information task.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>User enters Invalid country
   </td>
   <td>Shown when the user enters an invalid country name for an alert, action, or information task.
   </td>
  </tr>
  <tr>
   <td>User enters Invalid url
   </td>
   <td>Shown when the user enters an invalid URL for an alert, action, or information task.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>User enters Invalid phone number
   </td>
   <td>Shown when the user enters an invalid phone number for an alert, action, or information task.
   </td>
  </tr>
  <tr>
   <td>User enters Invalid number
   </td>
   <td>Shown when the user enters a string or description against a number input for an alert, action, or information task.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Invalid date format
   </td>
   <td>Shown when the user enters an invalid date format for an alert, action, or information task.
   </td>
  </tr>
  <tr>
   <td>Missing date
   </td>
   <td>Shown when the user doesn’t enter a date format for an alert, action, or information task.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Ask user to enter time for a field
   </td>
   <td>Shown when the user doesn’t enter time for entities of type – <em>Date Time</em> at dialog tasks
   </td>
  </tr>
  <tr>
   <td>Ask user to enter time
   </td>
   <td>Shown when the user enters just the date and not the time for a DateTime entity. For example, in a Schedule Appointment task, if the AI Agent asks for the preferred date and time, and the user just enters the date.
   </td>
  </tr>
  <tr>
   <td>Invalid time. Ask user to try again for a field
   </td>
   <td>Applies to a DateTime Entity
<p>
This message is displayed when the AI Agent asks the user to enter the time portion for a DateTime entity and the user’s response doesn't have time, the AI Agent asks them to try again.
   </td>
  </tr>
  <tr>
   <td>Invalid time. Ask user to try again
   </td>
   <td>Shown when the user enters an invalid time value for a DateTime entity.
<p>
For example, in a Schedule Appointment task, if the AI Agent asks for the preferred date and time, and the user enters something like Aug 29 at 25.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Missing date/time
   </td>
   <td>Applicable to Actions and Alerts
<p>
This message is displayed as an Error prompt for a DateTime entity in actions and alerts.
   </td>
  </tr>
  <tr>
   <td>You have chosen a wrong choice.
   </td>
   <td>This is a subkey for other keys with the following conditions.
<p>
<em>Tell me the alphabet or a unique word for the action you want after an invalid choice</em>
<p>
<em>I am not sure what you mean after an invalid choice</em>
<p>
<em>Asking the user to pick an alert after an error</em>
<p>
<em>When need to show the possible intervals for an alert schedule</em>
<p>
<em>You have chosen the wrong choice for the task schedule</em>
<p>
<em>Listing all tasks after a wrong choice</em>
<p>
<em>Listing all alerts after a wrong choice</em>
<p>
<em>Listing all FAQs after a wrong choice</em>
<p>
<em>Listing all tasks and alerts after a wrong choice</em>
<p>
<em>Listing all alerts, tasks, and FAQs after a wrong choice</em>
<p>
<em>Lists all actions and FAQs for an app after a wrong choice</em>
<p>
<em>Lists all alerts and FAQs for an app after a wrong choice</em>
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Can not understand your request
   </td>
   <td>Shown when the AI Agent cannot recognize the user’s intent. It is usually displayed along with a list of tasks and FAQs available in the AI Agent for the users to select.
   </td>
  </tr>
  <tr>
   <td>When app is selected, user is asked for reauthorization
   </td>
   <td>Applicable to Service Calls
<p>
This message is displayed when an API call fails due to the expiry of user credentials and the AI Agent asks the user to reauthorize.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Listing all tasks after a wrong choice
   </td>
   <td>Help related – When the developer has only configured Actions/ Dialogs/Information tasks and the user input doesn't match with any task
   </td>
  </tr>
  <tr>
   <td>Listing all alerts after a wrong choice
   </td>
   <td>Help related – When the developer has only configured Alerts at the app and the user input doesn't match with any task
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Listing all FAQs after a wrong choice
   </td>
   <td>Help related – When the developer has only configured FAQS at the app and the user input doesn't match with any FAQ
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Listing all FAQs after not understanding your request
   </td>
   <td>If an app just has a Knowledge Graph, the app shows this message when the app fails to understand the user intent.
   </td>
  </tr>
  <tr>
   <td>Listing all actions after not understanding your request
   </td>
   <td>If an app just has action tasks, the app shows this message when the app fails to understand the user intent. It provides the names of the action tasks along with the message.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Listing all actions and alerts after not understanding your request
   </td>
   <td>If an app just has action and alert tasks, the app shows this message when the app fails to understand the user intent. It provides the names of the alert tasks and action tasks along with the message.
   </td>
  </tr>
  <tr>
   <td>Listing all actions and FAQs after not understanding your request
   </td>
   <td>If an app just has action tasks and a KG Graph, the app shows this message when the app fails to understand the user intent. It provides the names of the action tasks and the Knowledge Graph along with the message.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Listing all alerts after not understanding your request
   </td>
   <td>If an app just has alert tasks, the app shows this message when the app fails to understand the user intent. It provides the names of the alert tasks along with the message.
   </td>
  </tr>
  <tr>
   <td>Listing all alerts and FAQs after not understanding your request
   </td>
   <td>If an app just has alert tasks and a KG Graph, the app shows this message when the app fails to understand the user intent. It provides the names of the alert tasks and the Knowledge Graph along with the message.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Listing all tasks after not understanding your request
   </td>
   <td>When the app fails to understand user intent, it shows this message along with the names of tasks it can perform.
   </td>
  </tr>
  <tr>
   <td>Listing all tasks and alerts after a wrong choice
   </td>
   <td>Shown when a user types Help and from the tasks lists that open they choose an invalid option. For example, if the tasks lists have options from a to c and the user types d.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Listing all alerts, tasks and FAQs after a wrong choice
   </td>
   <td>Help related – When the developer has only configured Alerts/ Dialogs/FAQs tasks and the user input didn’t match with any task
   </td>
  </tr>
  <tr>
   <td>Lists all actions and FAQs for an app after a wrong choice
   </td>
   <td>It occurs only when the app just has action tasks and a Knowledge Graph. When an app shows the names of the action tasks and the KG Graph to choose from, the app shows this message when the user selects an invalid option. For example, if the tasks lists have options from a to c and the user types d.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Lists all alerts and FAQs for a app after a wrong choice
   </td>
   <td>It occurs only when the app just has alert tasks and a Knowledge Graph. When an app shows the names of the action tasks and the KG Graph to choose from, this message is displayed when the user selects an invalid option. For example, if the tasks lists have options from a to c and the user types d.
   </td>
  </tr>
  <tr>
   <td>Task is discarded when user exceeds maximum number of allowed attempts.
   </td>
   <td>Shown when the user enters an invalid format for an entity type 5 times. For example, the entity is of type <em>number</em> and the user enters an email 5 times.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>When the entity component in dialog doesn’t have error prompt
   </td>
   <td>Shown when there is not at least one error prompt associated with an Entity node. It typically occurs when you accidentally delete the default error prompt and try to save the node properties.
   </td>
  </tr>
  <tr>
   <td>When the entity component in dialog doesn’t have message attribute
   </td>
   <td>Fallback message if an entity does not have a message prompt defined.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>User input exceeds the maximum allowed sentence limit or contains one or more words that exceed the allowed word length.
   </td>
   <td>Shown when the user types an input that exceeds the maximum sentence or word limit. You can customize this message and the language based on your business needs.
   </td>
  </tr>
</table>

### Questions

Questions the app may pose to the user when not included in any other category.

<table border="1.5">
  <tr bgcolor="#ECECEC">
   <td><strong>MESSAGE</strong>
   </td>
   <td><strong>DEFINITION</strong>
   </td>
  </tr>
  <tr>
   <td>When user input matches and frequency is asked
   </td>
   <td>Applicable to Alerts
<p>
This message is displayed when the user is prompted to set a frequency for an alert, and their reply leads to ambiguity.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>When asking the user to input the frequency at which the alert updates need to be checked for
   </td>
   <td>Applicable to Alert Task
<p>
This message is displayed when the app asks the user to input the frequency at which the alert will be triggered.
   </td>
  </tr>
</table>

### Choices

The app is asking for Yes/No input. For example, *Would you like to receive push notifications every time this task occurs?*

<table border="1.5">
  <tr bgcolor="#ECECEC">
   <td><strong>MESSAGE</strong>
   </td>
   <td><strong>DEFINITION</strong>
   </td>
  </tr>
  <tr>
   <td>Search results displayed based on user input. (Type ahead search)
   </td>
   <td>Applicable to Alert Task.
<p>
For an alert task, developers can set up filters to restrict the output of an alert task. In the filter setup, the <em>Field Type</em> can be specified as <em>Type Ahead</em>. This field type displays a dynamically populated drop-down list of choices to the user at runtime when the user enters three or more characters that match the search results based on the response from the URL defined for the task.
<p>
This message is displayed when the end user provides input for the <em>Field Type</em> of <em>Type Ahead</em> type when setting up the filter for an alert task.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Confirming alert frequency
   </td>
   <td>Applicable to Alert Task.
<p>
This message is displayed when the app confirms the current trigger frequency of an alert task with the end user.
   </td>
  </tr>
  <tr>
   <td>Repeat confirmation of default alert frequency
   </td>
   <td>Applicable to Alert Task
<p>
The End user can change/amend the trigger frequency of the alert task.
<p>
This message is displayed when the user input does not match with the expected input for the alert frequency
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Confirmation to set up an alert task with a frequency
   </td>
   <td>Applicable to Alert task
<p>
This message is displayed to confirm the trigger frequency for an alert task.
   </td>
  </tr>
  <tr>
   <td>Prompting the user to set up filters
   </td>
   <td>Applicable to Alert Task
<p>
Developers can create filters for an alert task. These filters will limit the results of an alert task to the results an end-user needs.
<p>
This message is displayed when the app asks whether the user wants to set up any filter.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Prompting the user to set up filters as soon as an alert is identified
   </td>
   <td>Applicable to Alert Task
<p>
Developers can create filters for an alert task. These filters will limit the results of an alert task to the results an end-user needs.
<p>
This message is displayed when the app asks whether the user wants to set up any filter.
   </td>
  </tr>
  <tr>
   <td>Asking user to set up push notifications
   </td>
   <td>Applicable to Alert Task
<p>
The app confirms the parameters entered by the user before an alert setup. The user can select <em>no</em> or <em>amend</em> on which the app will allow the user to modify the name, description, notification, frequency, or any other parameter in the alert before proceeding with alert setup.
<p>
This message is displayed when the user wants to change/amend the alert notification setting. The user can enable/disable alert notification by responding yes/no.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Repeat asking user to set up push notifications
   </td>
   <td>Applicable to Alert Task
<p>
The app confirms the parameters entered by the user before an alert setup. The user can select <em>no</em> or <em>amend</em> on which the app will allow the user to modify the name, description, notification, frequency, or any other parameter in the alert before proceeding with alert setup.
<p>
This message will be displayed when the user input to the amending notification setting does not match the pre-defined response (yes/no).
   </td>
  </tr>
  <tr>
   <td>Amending the request for a description
   </td>
   <td>Applicable to Alert Task
<p>
The app confirms the parameters entered by the user before an alert setup. The user can select <em>no</em> or <em>amend</em> on which the app will allow the user to modify the name, description, notification, frequency, or any other parameter in the alert before proceeding with alert setup.
<p>
This message is displayed when the user wants to change/amend the alert description.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Amending the request for a description
   </td>
   <td>Applicable to Alert Task
<p>
The app confirms the parameters entered by the user before an alert setup. The user can select <em>no</em> or <em>amend</em> on which the app will allow the user to modify the name, description, notification, frequency, or any other parameter in the alert before proceeding with alert setup.
<p>
This message is displayed when the user wants to change/amend the alert description.
   </td>
  </tr>
  <tr>
   <td>Amending the request for frequency
   </td>
   <td>Applicable to Alert Task
<p>
The app confirms the parameters entered by the user before an alert setup. The user can select <em>no</em> or <em>amend</em> on which the ap will allow the user to modify the name, description, notification, frequency, or any other parameter in the alert before proceeding with alert setup.
<p>
This message is displayed when the user wants to change/amend the alert trigger frequency.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Amending the request for notification settings
   </td>
   <td>Applicable to Alert Task
<p>
The app confirms the parameters entered by the user before an alert setup. The user can select <em>no</em> or <em>amend</em> on which the app will allow the user to modify the name, description, notification, frequency or any other parameter in the alert before proceeding with alert setup.
<p>
This message is displayed when the user wants to change/amend the alert notification setting i.e. user can specify whether he wants to receive notifications whenever the alert is triggered.
   </td>
  </tr>
  <tr>
   <td>Prompting user to choose the ‘Days of the week’ to setup notification frequency
   </td>
   <td>Applicable to Alert Task
<p>
This message prompts the user to select Weekday/Weekend for the Trigger frequency when setting up the alert. Currently, a dropdown box is displayed with all the options available for the trigger frequency and the user can select any frequency from the list.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Query to choose the interval to set up notification frequency
   </td>
   <td>Applicable to Alert Task
<p>
During the alert setup, the end-user needs to specify an interval at which the alert will be executed.
<p>
This message is displayed by the app prompting the end-user to set up the frequency interval for the alert task.
   </td>
  </tr>
  <tr>
   <td>Query to send webhook setup instructions via email
   </td>
   <td>Applicable for webhook alerts
<p>
The app checks with the end-user if it needs to send an email to the developer with instructions to configure the webhook alert at the third-party app.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Do you want to change the name of the alert &lt;alert-name>?
   </td>
   <td>Applicable to Alert Task
<p>
The app confirms the parameters entered by the user before an alert setup. The user can select <em>no</em> or <em>amend</em> on which the app will allow the user to modify the name, description, notification, frequency, or any other parameter in the alert before proceeding with alert setup.
<p>
This message is displayed when the user wants to change/amend the alert name.
   </td>
  </tr>
  <tr>
   <td>Query to choose the operator while setting up a filter &lt;current-filter>.
   </td>
   <td>Applicable to Alert Task
<p>
Developers can configure filters for an alert task. The filter will have one or more operations that the end-user can select to apply to the filter. The operation depends on the Data Type selected for the filter.
<p>
This message is displayed when the user sets up the filter for the alert task. The app prompts the user to select one of the available operators.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Options to pick the frequency for alert notification days
   </td>
   <td>Applicable to Alert Task
<p>
Developers can select all the options like <em>Daily</em>, <em>Weekday</em>, <em>and Weekend</em> when setting up the Trigger Interval Options for an alert task. Users will need to select/specify the interval from the available list as the frequency at which the alert will be triggered during setup.
<p>
This message is displayed when all the interval options are available and the app prompts the user to select one of the Trigger Interval during alert task setup.
   </td>
  </tr>
  <tr>
   <td>When the user needs to choose one of the provided choices
   </td>
   <td>Applicable to Alerts and Actions
<p>
This message is displayed when the user is prompted to pick a choice for a drop-down in alerts and actions.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Confirming with the user if he/she wishes to re-used a pre-saved context
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>When need to show the possible intervals for an alert schedule
   </td>
   <td>Applicable for Alert Task
<p>
Developers can set up the trigger frequency for an alert in terms of interval duration like every 10 minutes, 20 minutes, etc., or specific times like 9:00 am, 11:00 am, etc.
<p>
This message is displayed when the frequency is specified in terms of the interval like every 10 minutes, 20 minutes, etc. and the user inputs a specific time like 9:00 am at which he would like to trigger the app. In this situation, the app will prompt the user with the available valid frequencies that can be set up for the alert.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>When only finding a close frequency for an alert schedule
   </td>
   <td>Applicable to Alert Task
<p>
Developers specify <em>Default Trigger Interval</em> for the frequency of the Alert task. Users need to select one of these intervals at the time of setting up the alert.
<p>
This message will be displayed when the interval/time specified does not match the list of intervals set by the developers. The Alert prompts the nearest available time from the list of frequencies available.
   </td>
  </tr>
  <tr>
   <td>When only finding a close time for an alert schedule
   </td>
   <td>Applicable to Alert Task
<p>
Developers can specify times like <em>9:00 am, 11:00 am, and 3:00 pm</em> as the frequency at which the alert will be triggered. Users need to select a particular time from the available options when setting up the alert.
<p>
This message will be displayed if the user specifies a time that is not mentioned in the alert setup.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>When changing a field
   </td>
   <td>Applicable to an Alert Task.
<p>
This message is displayed when the user selects <em>No</em> while confirming the parameters of an alert task.
   </td>
  </tr>
  <tr>
   <td>Prompting the user to set up filters after an alert is identified
   </td>
   <td>Applicable to an Alert Task.
<p>
Developers can set up filters during the configuration of an alert task. Only the notifications that satisfy the filters will be displayed to the end user.
<p>
This message is displayed when the user gives input for setting up an alert task.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>If asking the user if they want setup instructions to be sent via email is the first prompt in an alert
   </td>
   <td>Applicable to Alerts
<p>
This message is displayed when the User starts setting up an alert and the first prompt in the process is to ask them if they want an email about installation instructions
   </td>
  </tr>
  <tr>
   <td>While choosing options
   </td>
   <td>Applicable to Alerts and Action Task
<p>
This message is used to show options returned by the platform for a typeahead entity in an action or an alert
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>After the user selects a valid task from the list of tasks, then tries to type something for schedule
   </td>
   <td>Applicable to Alerts
<p>
This message is displayed when an alert is selected by the user from a list and the app asks them how often they want to be notified
   </td>
  </tr>
  <tr>
   <td>You have chosen a wrong choice for task schedule
   </td>
   <td>Applicable to Alerts
<p>
This message is displayed when the user gives a wrong value for the frequency while setting an alert and the app asks again.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>After user selecting a valid task from the list of tasks, then tries to enter field value
   </td>
   <td>Applicable to Alerts and Action Task
<p>
This message is displayed when an action or alert is triggered, and the first field is a dropdown.
   </td>
  </tr>
  <tr>
   <td>User says ‘no’ for alert setup confirmation
   </td>
   <td>Applicable to Alert Task
<p>
During alert task configuration, developers can enable confirmation of all parameters with the user before the execution of the alert. The app will display all the values entered by the user for setting up the alert. The app will allow the user to select how to proceed with the execution of the alert with the options <em>yes</em>, <em>no,</em> and <em>amend</em>.
<p>
This message will be displayed if the user selects option <em>no</em>.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>After selecting task, user selects wrong choice in Dialog.
   </td>
   <td>When a list of choices is presented (not from a List of Values entity) and the user enters something that cannot be matched to one of those items
   </td>
  </tr>
  <tr>
   <td>User enters a wrong choice for alert frequency
   </td>
   <td>Applicable to Alert Task
<p>
At the time of setting up alert tasks, users need to provide the frequency at which the alert will be triggered. This value had to match with one of the frequencies given by the developer at the time of creating the alert
<p>
This message is displayed when the alert frequency given by the user does not match any of the frequencies specified by the developer.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>User enters a wrong value for a dropdown.
   </td>
   <td>Applicable to the List of values
<p>
This message is displayed when the user input does not match any values given in the List of Values
   </td>
  </tr>
  <tr>
   <td>List ambiguous list of values to user to choose from
   </td>
   <td>For a List of Values entity, if a user has entered something that cannot uniquely identify an item then the set of possible items that partially match the input are shown along with this message
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>User enters an invalid choice for an action
   </td>
   <td>This message is displayed when the user is prompted to pick a task from a list, and their response does not match the list.
   </td>
  </tr>
  <tr>
   <td>Ambiguous date
   </td>
   <td>Shown when you enter an ambiguous date value. For example, if the user enters 6/9 for a date, the app shows 9 June &lt;year> and 6 September &lt;year> as options for the user to select from.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Ambiguous airport
   </td>
   <td>Shown when you enter a value for an Airport entity that is unclear and requires further selection. For example, if you enter London, the app shows London Heathrow Airport and Gatwick Airport as options to select from.
   </td>
  </tr>
  <tr>
   <td>Ambiguous location
   </td>
   <td>For a Location entity, if the geocode service returns multiple possibilities then the list is shown along with this message
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>There are more than one account for the user to pick from
   </td>
   <td>When the user has more than one account (third party, eg. Jira) they are asked to pick one.
   </td>
  </tr>
  <tr>
   <td>The user’s intent is recognized, but there are more than one account for the user to pick from
   </td>
   <td>When the user has more than one account (third party – Jira) they are asked to pick one.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Custom lookup query returned more than one value. Ask user to pick one.
   </td>
   <td>Shown when the user query returns more than one item from a list of items. All the items are presented to the user to pick the relevant option.
   </td>
  </tr>
  <tr>
   <td>After the user selecting a valid choice from the list, the chosen list found to be empty
   </td>
   <td>Applicable to Alert and Action Task
<p>
This message is displayed when a dropdown (in an action or an alert) depends on another field, and the value of that other field does not create any options for this dropdown. In this situation, the app will ask the user to set a different value for the dependent field.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>When user selects an invalid choice.
   </td>
   <td>Same as above but the value provided by the user for the dependent field is not valid.
   </td>
  </tr>
  <tr>
   <td>At the end of a dialog, present user with list of followup tasks identified. Ask them to pick one task to execute
   </td>
   <td>This condition occurs only for Dialog tasks for which the following Follow-up Tasks Setting is configured: <em>Yes, at the end of this dialog ask the user to select and perform a task from the <strong>Follow-up task</strong> list in the Dialog settings.</em> The app shows this message when it presents the Follow-Up Intents array to the user at the end of the Dialog.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Ask the user to select an entity to be amended when the entity value provided for amending is valid for multiple entities
   </td>
   <td>Applicable to amending entity values during Dialog execution
<p>
This message is displayed during a dialog execution when the user wants to amend an entity value by mentioning the entity value and the app is not able to determine the entity to be amended since multiple entities hold the same value. Eg: change Bangalore to Mumbai and Bangalore is set to more than one entity
   </td>
  </tr>
  <tr>
   <td>The user is trying to put more than the max on-hold quantity of tasks on hold. Ask them to pick a task to cancel one.
   </td>
   <td>When the developers set up the Hold and Resume settings, they can configure the maximum number of tasks that the app can allow to be put on hold. The app shows this message when the user executes the app if the number of tasks that are put on hold is more than that number.
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>User provides an intent when prompted for String/Description entity
   </td>
   <td>Applicable to an entity node of String/Description type.
<p>
Developers can configure <em>Intent Detection</em> in the <em>Instance Property</em> of an entity node of String/Description type to <em>Ask the user how to proceed</em>
<p>
This message will be displayed if the user’s input matches with intent and the app wants to confirm before proceeding to execute the new intent.
   </td>
  </tr>
</table>

## Add and Edit Responses

To add a new standard response, follow the steps below:

1. Select a tab category for the standard response. For example, **Choices**, and then hover over the situation for which you want to add the response.
2. Click **Add Response**.
3. When the **Add Channel Overrides** dialog is displayed, follow the steps below:
    * In the **Choose a channel** drop-down list, select a channel to create a channel-specific response. You can go with the Any Channel option to enable the response for all channels.
    * In the case of channel-specific response, from the **Choose a Task** drop-down list, select **Any Task** to apply this channel-specific response to all tasks or select a specific task.
    * When a specific task is selected, the **Choose a Field** drop-down is displayed. Select **Any Field** or a specific field for this channel-specific response. 

      <img src="../images/add-channel-override.png" alt="add-channel-override" title="add-channel-override" style="border:1px solid gray; zoom:70%;">

    * In the **Response** editor, you can override the default app response for this channel using basic editor controls on the **Simple Mode** tab, or write custom JavaScript for the response on the **Advanced Mode** tab as follows:
         * **Simple Mode** tab – Enter the text for the default standard response. For example, *There* you are, I was *hoping* you would return soon! and then optionally, format the text using the formatting buttons for bold, italics, header styles, hyperlinks, ordered and unordered lists, and inserting a line. For more information, refer to [Using the Prompt Editor](../../use-cases/dialogs/prompt-editor.md).
         * **Advanced Mode tab** – Enter JavaScript to override the channel message as described in the following code examples.
    * Click **Save** to save and close the **Edit Response** dialog and apply the new standard response.

