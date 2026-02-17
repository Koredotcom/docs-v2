# Playground

After you define your app and configure one or more tasks, test your settings to make sure they're correct before publishing the app. App owners and developers can chat with the app in real-time to test recognition, performance, and flow as if it were a live session.


## Testing an App

To test your tasks in a messaging window, select the **Test** icon located in the top right corner of the Platform.  

<img src="../images/test.png" alt="test" title="test" style="border:1px solid gray; zoom:70%;">

You can also test it by navigating to **Automation AI** > **Evaluation**> **Playground**.
When a conversation is active, and the developer is working in the Playground, they can change the conversation status only from within the Playground module. The status options in the top menu (Test / Stop / Resume) remain disabled.

When the developer leaves the Playground module, the session remains active, but the system treats this action as minimizing the chat window, keeping both Debug Logs and chat windows in the background and updating the conversation status to ‘Resume’. The system always matches the Test status with the Playground status, but it allows updates only when the developer is outside the Playground.

When you first open the Playground section, you need to select whether you wish to proceed with Voice or Chat. This content describes the chat experience.

The Debug Logs and the Chat windows open in the Playground display area, side-by-side.  

<img src="../images/playground.png" alt="playground" title="playground" style="border:1px solid gray; zoom:70%;">

In the **Message** section, enter text to begin interacting and testing your app. Dialog GPT begins processing the task, verifying authentication with the user and the web service, and then prompting for the required task field information. After the system collects all required task fields, it executes the task. While testing your app, try different variations of user prompts. If the app returns unexpected results, consider adding or modifying synonyms for your tasks and task field names as required.

The Debug window lets you explore the following:

* **Debug Log**: Lists the processing or processed Dialog task components.
* **Session Context & Variables**: Shows both context object and session variables used in the dialog task processing.

<img src="../images/debug_window.png" alt="debug_window" title="debug_window" style="border:1px solid gray; zoom:70%;">

### Debug Log

**Debug Log** provides the sequential progression of a dialog task and context, and session variables captured. It's a chat-like interface, grouped by user inputs and app responses for easier conversation flow tracing. It offers improved navigation and contextual information at a glance. This significantly enhances log readability and streamlines the debugging process.  

<img src="../images/debug_log.png" alt="debug_log" title="debug_log" style="border:1px solid gray; zoom:70%;">

### Session Context and Variables

The **Session Context & Variables** tab dynamically displays the populated `Context` object and session variables updated at each processed component in Dialog Builder. The following is an example of the **Session & Context Variables** panel in **Debug Log**.  For more information about the parameters, see [Using Session and Context Variables in Tasks](../use-cases/using-session-and-context-variables.md) and [Context Object](../intelligence/context-object.md).
