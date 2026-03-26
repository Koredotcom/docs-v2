# Message Nodes

The Message Node is used to deliver a message to the user. Message nodes commonly follow an API, web service call, or webhook event to define their results as a formatted response.  

You can format node responses as below:

* **Plain text**: Type a message in plain text. You can use stored context values with `{{variable brackets}}`. For example: `'Hello {{context.session.UserContext.firstName}}. How can I help you?'`
* **Javascript**: Compose JavaScript responses either:
    * For dynamically constructing messages using context and session variables.
    * for displaying templates or widgets as supported by various channels.  
    For example, you can compose a JavaScript message for Facebook Channel to present a Carousel template.
    * Optionally, you can generate links to view the information in an HTML report format using templates and share the URL with the app message.

For example, the _Book Flights_ sample dialog uses the following message nodes:



* **_WeatherReport:_** This shows the weather details returned by the _WeatherApi_ Service node, formatted using the _LocationScript_ node.
* **_FinalFlightinfo_**: This shows the flight itineraries that the _Flights info_ service node returns.
* **_Thanks_**: After showing the final flight details, prompts the user if they have any other requests.

To understand customized JavaScript responses and channel-specific templates, refer to [_Customize JavaScript Responses_](../prompt-editor.md#javascript-prompts-or-responses){:target="_blank"} in [User Prompts](../prompt-editor.md){:target="_blank"} article.


## Set-Up

Setting up a Message node in a dialog task involves the following steps:

### Add Node

1. Open the dialog task to add the Message node.
2. Add a message node in the designated place. For steps in adding nodes, read the [Using the Dialog Builder](../using-the-dialog-builder-tool.md){:target="_blank"} article.

    !!! note

        You can add a message node within an existing sequence or outside any existing sequence. If you add it outside, a new, untitled sequence will automatically get created containing the new message node.

3. The Message window is displayed with the **Component Properties** tab selected by default.


## Configure Node

### Component Properties

!!! Note

    The configurations you set up or edit in this section reflect in all other dialog tasks that use this node.

1. On the **Component Properties** tab, enter a **Name** and **Display Name** for the message node.
2. Under the **Bot Responses** section, compose and format the bot response either as plain text or as a JavaScript message. A default message is set by the platform, you can customize it.
3.  Enter channel-specific messages for bot responses using the **Manage** link. For more information, read the [Using the Prompt Editor](../prompt-editor.md){:target="_blank"} article.
4. To add more bot responses, click **Add Bot Response** and repeat the above steps.
5. Toggle [Rephrase Responses](../../../../generative-ai-tools/genai-features.md) to rewrite AI Agent replies using AI based on conversation, context, and user emotions. [Learn more](../../../../generative-ai-tools/genai-features.md#change-settings-for-a-pre-built-model).  
<img src="../images/re-responses.png" alt="Rephrase Responses" title="Rephrase Responses" style="border:1px solid gray;zoom:70%;">



### Generate Message as Report Link (Optional)

The Message node allows you to generate links to view the information in an HTML report format using templates. The URL link is added to the app message. When you add a link to a app response, the users can select the link and get more details, such as a table of values for _Closed Sales Opportunities_ in the _SalesForce_ Bot.  

To generate a report link, follow these steps:

1. On the **Component Properties** tab, under the **Report URL** section, click **Generate Report Link**.
    
    <img src="../images/message-node-img2-generate-report.png" alt="Message node - Generate report" title="Message node - Generate report" style="border:1px solid gray;zoom=70%;">
 
2. On the Generate Report dialog box, enter the following values:
    1. **Link Title** – The link text displayed in the app channel. For example, _View Shopping Cart_.
    2. **Header** – The title of the report. For example, _These are the items in your Shopping Cart_.
    3. **Details** – End-user help information displayed directly below the header, describing the content of the report. For example, _Review your Shopping Cart_, _and then click Continue when you are ready to place your order._
    4. **Data Path** – Path for the data, usually the response from the web service. For example, _context.ShoppingCartService.response.body_
    5. **Template** – Select one of the following format templates to display the data from the task response. For each type, define the **Column Name**, **Key Mapping**, **Data Type**, and template-specific options.
        * **Table** – Uses a table format with defined columns. Each mapping for the **Table** template is set to **Is Sortable**, **Display as an image**, and **Display it as a link**. For more information, refer to the [Report Link ](https://community.kore.ai/t/report-link-is-not-getting-displayed-in-message-node/1676){:target="_blank"}community post.
        * **Fixed Column Table** – Uses a table format with one or more columns fixed. Each mapping for the **Fixed Column Table** template is set to **Is Sortable**, **Column in fixed**, **Display as an image**, and **Display it as a link**. 
        * **Card Layout** – Uses a contact card format. Each mapping for the **Card Layout** template is set to **Is Sortable**, **Display as an image**, and **Display it as a link**. 
        * **Weather Info** – Define a date for a weather service response payload. Each mapping for the **Weather Info** template is set to **Is Sortable**, **Display as an image**, and **Display it as a link**. 
        * **Card Layout with Group By** – Shows a list of items grouped by a specific field. 
3. Click **Save**.


### Variable Namespace

In the **Variable Namespaces** section, associate the variable namespaces to execute this node and its transitions. This option is visible only when the Variable Namespace is enabled for the AI Agent. You can go with the task level settings or customize it for this node. For more information, refer to [Managing Namespace](../../../../app-settings/managing-namespace.md){:target="_blank"}.


### Instance Properties

1. On the Message window, click the **Instance Properties** tab.
2. Under the **Interruptions Behavior** section, you can configure the interruptions behavior for this node.  

    !!! Note
    
        The settings in the Instance Properties tab are specific to the current task and do not reflect in other dialog tasks that use this node.
    
    1. **Use the task level ‘Interruptions Behavior’ setting**: The AI Agent refers to the Interruptions Behavior settings set at the dialog task level.
    2. **Customize for this node option:** You can customize the Interruptions Behavior settings for this node by selecting this option and configuring the same. For more information, refer to the [Interruption Handling and Context Switching](../../../intelligence/conversation-management/manage-interruptions.md){:target="_blank"} article.

3. **Analytics-Containment Type:** Select one of the below options to determine how to treat user-abandoned conversations.
    1. **Use task-level default settings:** This refers to the Containment Type settings set at the dialog level.
    2. **Customize for this node:** You can customize the Containment Type for this node by selecting this option. You can choose whether to Self Service or Drop-off in case of user-abandoned conversations.

3. Under the **Custom Tags** section, add tags to build custom profiles of your app conversations. [Click here for more](../../../../analytics/automation/custom-dashboard/custom-meta-tags.md){:target="_blank"}.


### IVR Properties

Use the IVR properties tab on the Message Node to define the initial prompts, timeout prompts, no match prompts, and error prompts with customization for the retries behavior, input mode, grammar settings for Global and Node level use cases, prompts, and call behavior parameters for this node to use in IVR Channel. These settings are defined at the Message Node level. For more information, read the [Voice Call Properties](../../../../automation/use-cases/dialogs/node-types/voice-call-properties.md){:target="_blank"} article.

!!! Note

    The Message Node supports all voice call properties for the IVR, Audio Codes, Twilio Voice, and Voice Gateway channels provided the **On User Input Transition** setting is enabled for the node.
    
<img src="../images/message-node-ivr-properties.png" alt="Message node - Voice call properties" title="Message node - Voice call properties" style="border:1px solid gray;zoom:50%;">

### Connections Properties

!!! Note

    If the node is at the bottom in the sequence, then only the connection property is visible.

From the node’s **Connections** tab, you can determine the node in the dialog task to execute next. You can write the conditional statements based on the values of any Entity or Context Objects in the dialog task, or you can use intents for transitions.  

To setup Component Transitions, follow these steps:

1. On the Message window, click the **Connections** tab.
2. On the **Connections** tab, under the **Connection Rules** section, you can select nodes from the **Default** drop-down list.
3. To configure a conditional flow, click **Add IF**.
4. Configure the conditional expression based on one of the following criteria:
    1. **Entity**: Compare an entity node in the dialog with a specific value using one of these operators:
        1. exists
        2. equals to
        3. greater than equals to 
        4. less than equals to 
        5. not equal to 
        6. greater than 
        7. less than
    
    2. Select the entity, operator using the respective drop-down lists, and type the number in the **Value** box. For example, **PassengerCount**(entity) **greater than**(operator) **5**(specified value).
    3. **Context**: Compare a context object in the dialog with a specific value using one of these operators.  

        * exists  
        * equals to  
        * greater than equals to   
        * less than equals to   
        * not equal to   
        * greater than  
        * less than

        For example, **Context.entity.PassengerCount**(Context object) **greater than**(operator) **5**(specified value).
    
    4. **Intent:** Select an intent that matches the next user utterance.

5. In the **Then go to** drop-down list, select the next node to execute in the dialog flow if the conditional expression succeeds. For example, **if the** _PassengerCount_(entity) _is greater than_(operator) _5_(specified value), **Then go to** _Offers_(sub-dialog).
6. In the **Else** drop-down list, select the node to execute if the condition fails.

    !!! Note
    
        If you want to write multiple _If_ conditions, click **Add Else If** below the last _If_ conditional expression.

The Connection Path property offers three default variants:

1. Not Connected - No specific next node is defined
2. End of Dialog - Explicitly ends the current dialog
3. Return to Flow - Terminates the Dialog Task and returns control to the Flow Builder. The Flow Builder resumes from the next node.
    * Enable the **Deflect to Chat** option to create conversation flows that transition from voice to chat-based interactions within the same context.
    It has two deflection types - ‘ Automation’ and ‘Agent Transfer’.  
    <img src="../images/deflect-to-chat1.png" alt="Deflect to Chat" title="Deflect to Chat" style="border:1px solid gray;zoom:70%;">


!!! Note

    Deflect to Chat works only with Kore Voice Gateway Channels (Phone number or SIP Transfer).