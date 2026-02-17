[ :octicons-arrow-left-24: Back to NLP Topics](../../nlp-topics.md)

# Test - NLP

After you have defined your app and configured one or more tasks, test your settings before you publish your NLP-enabled app. App owners and developers can chat with the app in real-time to test recognition, performance, and flow as if it were a live session.


## Testing an App

To test your tasks in a messaging window, click the **Test** icon located on the top right corner on the Platform. 

<img src="../images/talk-to-bot-window.png" alt="Talk to Bot" title="Talk to Bot" style="border: 1px solid gray; zoom:80%;"/>

A messaging window for the app is displayed and connected to the NLP interpreter as shown in the following illustration for a _Flight Details Assistant_.

!!! Note

    The Test icon is not enabled until and unless at least one task is created.

<img src="../images/talk-to-bot-img2.png" alt="Talk to Bot - Messaging window" title="Talk to Bot - Messaging window" style="border: 1px solid gray; zoom:80%;"/>

When you first open the window, you need to select whether you wish to proceed with Voice or Chat. Chat experience is described in this content. In the **Message** section, enter text to begin interacting and testing your app, for example, _Book a flight._ The NLP interpreter begins processing the task, verifying authentication with the user and the web service, and then prompting for required task field information. When all the required task fields are collected, it executes the task. While testing your app , try different variations of user prompts and ensure the NLP interpreter is processing the synonyms (or lack of synonyms) properly. If the app returns unexpected results, consider adding or modifying synonyms for your tasks and task field names as required. For more information, see [Natural Language Processing](../natural-language/training/optimizing-bots.md){:target="_blank"}.


## Debug and Troubleshoot

You can open a **debug** window to view the natural language processing, logs, and session context, and variables of the chat. To open the debug, click the Debug icon <img src="../images/talk-to-bot-img3.png"> located on the top right-hand side of the Talk to Bot chat window. The Debug window consists of the following tabs: **Debug Log**, **NL Analysis**, **Session Context & Variables**. 

<img src="../images/talk-to-bot-debug-window.png" alt="Debug window" title="Debug window" style="border: 1px solid gray; zoom:80%;"/>

The Debug window lets you explore the following:

* **NL Analysis:** Describes the tasks loading status, and for each utterance presents a task name analysis and recognition scores.
* **Debug Log**: Lists the processing or processed Dialog task components, which include Script Node, Service Node, and Webhook Node logs along with a date timestamp.
* **Session Context & Variables**: Shows both context object and session variables used in the dialog task processing.


### Debug Log

**Debug Log** provides the sequential progression of a dialog task and context and session variables captured at every node. It's a chat-like interface, grouped by user inputs and app responses for easier conversation flow tracing. It offers improved navigation and contextual information at a glance. This significantly enhances log readability and streamlines the debugging process. The Debug log supports the following statuses:

* _initiated_: The Platform initiates the various nodes in a dialog task. For example, script, service, and webhook execution is initiated.
* _execution_: indicates execution of nodes has started. For example, script, service, and webhook execution has started.
* _execution successful_: indicates execution of nodes is successful. For example, script, service, and webhook execution is successful.
* _process completed_: indicates execution process for the script, service and webhook node is completed.  

* _expand_: You can expand the node and click the **JSON** to view node debug log details.  
<img src="../images/expand-option.png" alt="Expand to see debug log details" title="Expand to see debug log details" style="border: 1px solid gray; zoom:80%;"/>

* _node details_: shows the node details in the script format. You can copy, open the script in a full screen view or close the script view.  
* _parsing_: The Platform begins to parse the user prompt.
* _parsing successful_:  the user prompt is parsed successfully.
* _waitingForUserInput_: The user was prompted for input
* _pause_: The current dialog task is paused while another task is started.
* _resume_: The current dialog with paused status continues at the same point in the flow after completion of another task that was started.
* _waitingForServerResponse_: The server request is pending an asynchronous response.
* _error_: An error occurred, for example, the loop limit is reached, a server or script node execution fails.
* _end_: The dialog reached the end of the dialog flow.  



### NL Analysis

NL Analysis tab shows the task name analysis and recognition scores of each user utterance. It presents a detailed tone analysis, intent detection, and entity detection performed by the NLP engine. As a part of intent detection, the NL Analysis tab shows the outcomes of Machine Learning, Fundamental Meaning, and Knowledge Graph engines. For a detailed discussion on the scores, see [Training Your Assistant ](testing-your-bot-with-nlp.md){:target="_blank"}topic.

<img src="../images/talk-to-bot-img9.png" alt="End of the dialog flow" title="End of the dialog flow" style="border: 1px solid gray; zoom:80%;"/>


### Session Context and Variables

The **Session Context & Variables** tab displays dynamically the populated `Context` object and session variables updated at each processed component in Dialog Builder. The following is an example of the **Session & Context Variables** panel in **Debug Log**. For more information about the parameters, see [Using Session and Context Variables in Tasks](../use-cases/using-session-and-context-variables.md){:target="_blank"} and [Context Object](../intelligence/context-object.md){:target="_blank"}.

<img src="../images/talk-to-bot-img10.png" alt="Session and Context variables" title="Session and Context variables" style="border: 1px solid gray; zoom:80%;"/>


### System Commands

System Commands allow you to take control of the user-app conversation during evaluation. These can also be injected into the app using JavaScript code. [See here for more](../system-commands.md){:target="_blank"}.


## Record Session

Record option allows you to record conversations to help in regression testing scenarios.

<img src="../images/talk-to-bot-img11.png" alt="Record session" title="Record session" style="border: 1px solid gray; zoom:80%;"/>

While your recording is in progress, you can see a notification at the top of the chat window. Here is where you will also find a **STOP** option, which you can click on whenever you want to stop recording. 

<img src="../images/talk-to-bot-img12.png" alt="Stop" title="Stop" style="border: 1px solid gray; zoom:80%;"/>


Once you stop the recording, you can use the recorded conversation to create a test case, for further conversation testing. [Learn more](./regression-testing/conversation-testing/conversation-testing-landing-page.md){:target="_blank"}.

<img src="../images/talk-to-bot-img13.png" alt="Use recording for conversation testing" title="Use recording for conversation testing" style="border: 1px solid gray; zoom:80%;"/>

After clicking on _Create Test Case_, you can alternatively download the recorded content as a JSON file.

<img src="../images/talk-to-bot-img14.png" alt="Download recorded content as JSON file" title="Download recorded content as JSON file" style="border: 1px solid gray; zoom:80%;"/>

This is what a short conversation might look like: 

<img src="../images/talk-to-bot-img15.png" alt="Sample conversation" title="Sample conversation" style="border: 1px solid gray; zoom:80%;"/>