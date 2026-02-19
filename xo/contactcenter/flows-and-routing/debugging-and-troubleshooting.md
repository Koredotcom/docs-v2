# Debug and Troubleshoot

The Debug window helps you review natural language processing details, logs, and the session context and variables for a chat. To access it, click the Debug icon in the upper-right corner of the chat window.  
<img src="../images/debug-icon.png" alt="Debug Logs Icon" title="Debug Logs Icon" style="border: 1px solid gray; zoom:80%;"/>

The Debug window includes three tabs:

* **Debug Log**: Records dialog task activity, including Script Node, Service Node, and Webhook Node logs, with timestamps.  
* **NL Analysis**: Provides task loading details and, for each user utterance, displays task name analysis and recognition scores.  
* **Session Context & Variables**: Lists the context object and session variables used in dialog task execution.

## Debug Log

The **Debug Log** outlines the step-by-step flow of an interaction, capturing the session context and variables at each stage. It uses a chat-style format, grouping user inputs with system responses to simplify conversation tracking. This layout enhances navigation, presents contextual information clearly, and streamlines the debugging process. [Learn more](../../automation/testing/talk-to-bot.md#debug-log).

**Debug Log Events by Node Type**

| **Node(s)**                  | **Initiation Message**                              | **Key Events**                                                                                           | **Success / Failure Cases**                   |
|-------------------------------|-----------------------------------------------------|----------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| **IVR Menu, IVR Digit Input** | IVR Menu/Digit Input node initiated                 | User input handling → Transitioning from X to Y → Execution completed → Timeout/Retry/Wrong input/Error   | –                                             |
| **Split**                     | Split node initiated                                | Transitioning from X to Y → Execution completed → Error detected                                         | –                                             |
| **Check Agent Availability**  | Check agent availability node initiated             | Transitioning from X to Y → Execution completed → Error detected                                         | Agents available / Agents unavailable         |
| **Check Business Hours**      | Checking business hours and triggering selected node | User input handling → Transitioning from X to Y → Execution completed                                    | Inside business hours / Outside business hours |
| **Message Prompt**            | Message prompt initiated to the user                | Transitioning from X to Y → Execution completed                                                          | –                                             |
| **Automation**                | Automation node initiated and message triggered     | Waiting for user input                                                                                   | –                                             |
| **Agent Transfer**            | Agent transfer node triggered                       | Transitioning from X to Y → Execution completed → Specific dialog executed                               | Transfer successful / Transfer failure         |
| **Connect to API**            | API connection established and node triggered       | Transitioning from X to Y → Execution completed → Error detected                                         | –                                             |
| **Go to Flow, Script Task**   | Go to flow / Script task initiated                  | Transitioning from X to Y → Execution completed                                                          | –                                             |
| **Set Queue, Deflection Flow**| Set queue / Deflection flow initiated               | Transitioning from X to Y → Execution completed → Error detected                                         | –                                             |
| **End Flow**                  | End flow initiated                                  | Transitioning from X to Y → Execution completed                                                          | –                                             |