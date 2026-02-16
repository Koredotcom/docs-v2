# Voice Call Properties

You can enable voice interaction with your AI Agent, i.e., users can talk to the AI Agent. For this, you need to enable one of the voice channels like [IVR](../../../../channels/IVR-integration.md), [Twilio](../../../../channels/add-twilio-voice-channel.md), [IVR-AudioCodes](../../../../channels/ivr-audio-codes.md), [kore.ai Voice Gateway](../../../../channels/voice-gateway/configure-voice-gateway.md), etc and publish the app on those channels.

Any component with voice call capabilities supports language-specific values for prompts and grammar. Users can define voice call properties using the enabled language. When a new language is added to a app, existing voice properties from the selected base language are auto-copied to the new language.

There are some Voice Properties you can configure to streamline the user experience across the above-mentioned channels. These configurations can be done at multiple levels:

* App level – at the time of channel enablement;
* Component level – once you enable the voice properties at the App level, then you can define the behavior for various components like:
    * Entity Node
    * Message Node
    * Confirmation Node
    * Standard Responses
    * Agent Node

IVR Properties are accessible by going to a Dialog Task, selecting an _Entity, Message_ or _Confirmation_ Node, then by accessing the IVR Properties section.


<img src="../images/access-ivr.png" alt="IVR Properties" title="IVR Properties" style="border: 1px solid gray; zoom:70%;">



This document details the voice call properties and how they vary across various channels.


## Channel Settings

| **Field** | **Description** | **Applicable**<br>**to**<br>**Channel** |
| --- | --- | --- |
| IVR Data Extraction Key | Specify the syntax to extract the filled data<br><br>For Entity and Confirmation nodes, you can define the extraction rule overriding the channel level setting. This is particularly helpful with ASR engines that provide transcription results in a different format based on the input type. For example, VXML can contain the word format of the credit card in one key and the number format in another key | IVR |
| End of Conversation Behavior | This property can be used to define the AI Agent behavior at the end of the conversation. The options are:<br><br>- Trigger End of Conversation Behavior and configure the Task, Script or Message to be initiated. [See here for details](../../../intelligence/event-handling.md).<br>- Terminate the call.<br>    <br>    **Note**: Selecting the **Terminate call** option under **IVR Channel – Voice Call Properties – End of Task Behavior** no longer turns off the End of Task event at the app level. | IVR,<br>Twilio,<br>IVR-AudioCodes,<br>Kore.ai Voice Gateway |
| Call Termination Handler | Select the name of the Dialog task that you want to use as the call termination handler when the call ends in error. | IVR,<br>Twilio,<br>IVR-AudioCodes,<br>Kore.ai Voice Gateway |
| Call Control Parameters | Click **Add Parameter**. Enter property names and values to use in defining the call behavior.<br><br>**Note**: You should use these properties and values in the VXML files for all call flows in the IVR system and Session Parameters in AudioCodes channel. | IVR,<br>IVR-AudioCodes |
| ASR Confidence Threshold |     |     |
| Threshold Key | This is the variable where the ASR confidence levels are stored. This field is pre-populated, do not change it unless you are aware of the internal working of VXML. | IVR |
| Define ASR threshold confidence | In the range between 0 to 1.0 which defines when the IVR system hands over the control to the AI Agent. | IVR |
| Timeout Prompt | Enter the default prompt text to play when the user doesn’t provide the input within the timeout period. If you do not specify a Timeout Prompt for any node, this prompt takes its place. | IVR,<br>Twilio,<br>IVR-AudioCodes,<br>Kore.ai Voice Gateway |
| Grammar | Define the grammar that should be used to detect user’s utterance<br><br>- The input type can be Speech or DTMF<br>- Source of grammar can be Custom or Link<br>    - For Custom, write VXML grammar in the textbox.<br>    - For Link, enter the URL of the grammar. Ideally, the URL should be accessible to the IVR system so that the resource can be accessed while executing the calls at runtime<br>        <br>        [See below for a detailed configuration for Grammar syntax](#configuring-grammar). <br>  **Note**: If the **Enable Transcription** option is enabled for the AI Agent along with specifying the source of the transcription engine, defining grammar isn’t mandatory. | IVR |
| No Match Prompt | Enter the default prompt text to play when user input is not present in the defined grammar. If you do not specify a _No Match Prompt_ for any node, this prompt takes its place. | IVR |
| Barge-In | Select whether you want to allow a user input while a prompt is in progress. If you select no, the user cannot provide input until IVR completes the prompt. | IVR,<br>Twilio,<br>IVR-AudioCodes,<br>Kore.ai Voice Gateway |
| Timeout | Select the maximum wait time to receive user input from the drop-down list, from 1 second up to 60 seconds. | IVR,<br>Twilio,<br>IVR-AudioCodes,<br>Kore.ai Voice Gateway |
| No. of Retries | Select the maximum number of retries to allow. You can select from just 1 retry up to 10 retries. | IVR,<br>Twilio,<br>IVR-AudioCodes |
| Log | Select **Yes** if you want to send the chat log to the IVR system. | IVR |



## Dialog Node Settings

On the Voice Call Properties panel for a node, you can enter node-specific prompts, grammar, as well as parameters for call-flow behavior such as time-out and retries.

Voice Call Properties apply only for the following nodes and message types:

* Entity Node
* Message Node
* Confirmation Node
* Agent Node
* Standard Responses


!!! note

    Most settings are the same for all nodes, with a few exceptions.


<img src="../images/timeout_prompts.png" alt="Timeout Prompts" title="Timeout Prompts" style="border: 1px solid gray; zoom:70%;">


### Voice Call Settings Field Reference

The following sections provide detailed descriptions of each IVR setting, including descriptions, applicability to nodes, default values, and other key information.

!!! Notes on Prompts

    * You can enter prompts in one of these formats: Plain text, Script, File location of an audio file. If you want to define JavaScript or attach an audio file, click the icon before the prompt text message box and select a mode. By default, it is set to Text mode.
    * You can enter more than one prompt message of different types. You can define their order of sequence by dragging and dropping them.
    * Multiple prompts are useful in scenarios where the prompt has to be played more than once, to avoid repetition, since the prompts are played in order.


| **Field** | **Description** | **Applicable**<br>**to**<br>**Nodes** | **Applicable**<br>**to**<br>**Channel** |
| --- | -------------------- | --- | --- |
| Initial Prompts | Prompts that are played when the IVR first executes the node. If you do not enter a prompt for a node, the default user prompt for the node plays by default. If you do not enter a prompt for Standard Responses, the default Standard Response is played by default. | Entity,<br>Confirmation,<br>Message nodes;<br> and Standard Responses | IVR,<br>Twilio,<br>AudioCodes,<br>Kore.ai Voice Gateway |
| Timeout Prompts | Prompts that are played on the IVR channel when the user has not given any input within the specified time. If you do not enter a prompt for a node, the default Error Prompt of the node is played. Standard Responses and Welcomes have a default Timeout Prompt that plays if you don’t define No Match Prompts.<br><br>You can **Customize Retries Behavior** for the Timeout Prompts and define the number of retries to configure the number of times the user would be prompted for this entity value by setting the number of **Allowed Retries** to any value between 1 and 10. The default is 3.<br><br>Further, you can define the AI Agent’s **Behavior on Exceeding Retries**; this can be set to trigger _Invoke Call Termination Handler, Initiate Dialog Task,_ or _Jump to specific node in current task_. When you select _Initiate Dialog_ or _Jump to a specific node in the current task_ option, you are prompted to select the dialog task or task within the node.<br><br>**Note**: The **Customize Retries Behavior** function is supported only for the **IVR** channel at the Entity, Confirmation, and Message nodes. | Entity,<br>Confirmation,<br> Message,<br>Agent nodes ;<br> and Standard Responses | IVR,<br>Twilio,<br>AudioCodes,<br>Kore.ai Voice Gateway |
| Timeout | Users have the option to select between Preset/Env. Variables.<br><br>- **Preset**- Select the maximum wait time to receive user input from the drop-down list, from 1 second up to 60 seconds. The default value is the same as defined in the App IVR Settings page.<br>- **Env. Variables**- Select any environment variable from the  drop-down list. The list has a search bar for users to choose environment variables.<br> **Note**: If the value of the variable is a non numeric value or greater than 60 seconds, the platform will fallback to the timeout configuration set in the channel configuration.<br>| Entity,<br>Confirmation,<br> Message,<br>Agent nodes ;<br> and Standard Responses | IVR,<br>Twilio,<br>AudioCodes,<br>Kore.ai Voice Gateway |
| No Match Prompts | Prompts that are played on the IVR channel when the user’s input has not matched any value in the defined grammar. If you do not enter a prompt here or select **No Grammar** option for an Entity or Confirmation node, the default Error Prompt of the node is played. Standard Responses and Welcomes have a default No Match Prompt that plays if you do not enter it.<br><br>You can **Customize Retries Behavior** for the No Match Prompts and define the number of retries to configure the number of times the user would be prompted for this entity value by setting the number of **Allowed Retries** to any value between 1 and 10. The default is 3.<br><br>Further, you can define the AI Agent’s **Behavior on Exceeding Retries**; this can be set to trigger _Invoke Call Termination Handler, Initiate Dialog Task,_ or _Jump to specific node in current task_. When you select _Initiate Dialog_ or _Jump to a specific node in the current task_ option, you are prompted to select the dialog task or task within the node.<br><br>**Note**: The **Customize Retries Behavior** function is supported only for the **IVR** channel at the Entity, Confirmation, and Message nodes. | Entity,<br>Confirmation,<br> Message,<br>Agent nodes ;<br> and Standard Responses | IVR |
| Error Prompts | Prompts that are played on the IVR channel when user input is an invalid Entity type. If you do not enter a prompt here, the default Error Prompt of the node is played.<br><br>You can **Customize Retries Behavior** for the Error Prompts and define the number of retries to configure the number of times the user would be prompted for this entity value by setting the number of **Allowed Retries** to any value between 1 and 10. The default is 3.<br><br>Further, you can define the AI Agent’s **Behavior on Exceeding Retries**, this can be set to trigger _Invoke Call Termination Handler, Initiate Dialog Task,_ or _Jump to specific node in current task_. When you select _Initiate Dialog_ or _Jump to a specific node in the current task_ option, you are prompted to select the dialog task or task within the node.<br><br>**Note**: The **Customize Retries Behavior** function is supported only for the **IVR** channel at the Entity, Confirmation, and Message nodes. | Entity,<br>Confirmation, <br>Message nodes; | IVR,<br>Twilio,<br>AudioCodes,<br>Kore.ai Voice Gateway |
| Grammar | Define the grammar that should be used to detect a user’s utterance<br><br>- The input type can be Speech or DTMF<br>- Source of grammar can be Custom or Link<br>    - For Custom, write VXML grammar in the textbox.<br>    - For Link, enter the URL of the grammar. Ideally, the URL should be accessible to the IVR system so that the resource can be accessed while executing the calls at runtime<br>        <br>        [See below for a detailed configuration for Grammar syntax](#configuring-grammar). <br> **Note**: If the **Enable Transcription** option is enabled for the AI Agent along with specifying the source of the transcription engine, defining grammar isn’t mandatory. | Entity,<br>Confirmation,<br> Message,<br>Agent nodes ;<br> and Standard Responses | IVR,<br>Twilio |
| **Advanced Controls** |     |     |     |
| These properties override the properties set in the App IVR Settings page and apply to the Dialog Task that you are currently working with. |     |     |     |    
| No. of Retries | Select the maximum number of retries to allow. You can select from just 1 retry up to 10 retries.<br><br>The default value is the same as defined in the App IVR Settings page. | Entity,<br>Confirmation,<br> Message,<br>and Agent nodes | IVR,<br>Twilio,<br>AudioCodes,<br>Kore.ai Voice Gateway |
| Behavior on Exceeding Retries | Define behavior when either the timeout or number of retry attempts exceed the specified limit.<br><br>You can **Customize Retries Behavior** for the standard number of retries to configure the number of times the user would be prompted for this entity value by setting the number of **Allowed Retries** to any value between 1 and 10. The default is 3.<br><br>Further, you can define the AI Agent’s **Behavior on Exceeding Retries**, this can be set to trigger _Invoke Call Termination Handler, Initiate Dialog Task,_ or _Jump to specific node in current task_. When you select _Initiate Dialog_ or _Jump to a specific node in the current task_ option, you are prompted to select the dialog task or task within the node.<br><br>**Note**: The **Customize Retries Behavior** function is supported only for the **IVR** channel at the Entity, Confirmation, and Message nodes. | Entity,<br>Confirmation,<br> Message,<br>and Agent nodes | IVR,<br>Twilio,<br>AudioCodes,<br>Kore.ai Voice Gateway |
| Barge-In | Select whether you want to allow a user input while a prompt is in progress. If you select no, the user input is not considered until the prompt is completed. The default value is **No**. |Entity,<br>Confirmation,<br> Message,<br>and Agent nodes | IVR,<br>Twilio,<br>AudioCodes,<br>Kore.ai Voice Gateway |
| Call Control Parameters | Click **Add Property.** Enter property names and values to use in defining the VXML definition in the IVR system and Session Parameters in AudioCodes channel. These values defined for a node or a standard response override the global Call Control Parameters defined in the AI Agent IVR /AudioCodes settings page. | Entity,<br>Confirmation,<br> Message,<br>and Agent nodes | IVR,<br>AudioCodes,<br>Kore.ai Voice Gateway |
| Log | Select **Yes** if you want to send the chat log to the IVR system. The default value is **No**. | Entity,<br>Confirmation,<br> Message,<br>and Agent nodes | IVR |
| Locale Definition | Enable the **Locale Definition** property to define the **_(xml:lang = “&lt;value&gt;”)_** attribute in the VXML file by enabling the **Locale Definition** property. Automatic Speech Recognition engines use the language attribute to enhance speech recognition.<br><br>Once the property is enabled, you can see one or more language codes corresponding to the app languages. Enter the locale code for a specific app language in the **Locale Value** field. For example, enter ‘**US**‘ or ‘**UK**‘ as the Locale Value for the English (EN) app language.**Note**: By default, the **Locale Definition** property is disabled for all AI Agents. | N/A | IVR |
| Document Type Definitions | The Document Type Definition (DTD) typically refers to a specific syntax used to define the structure and constraints of a Voice Extensible Markup Language (VXML) document. The DTD settings help the VXML to understand the response.<br><br>You can use the **Default** DTD settings defined in the Status, Public ID, and System ID fields for the VXML. If you want to modify settings, click **Customize** to change the values.<br><br>**Note**: If the **Status** field is set to _Include_, you can enter the Public and System ID. If it is set to _Exclude_, you cannot view those fields. | N/A | IVR |
| Fallback Redirection | A Fallback Redirection is an alternative path that the IVR system uses to handoff the conversation whenever the call hangs up<br><br>You can add an URL to redirect the conversation whenever the call hangs up.<br><br>By default, the **Fallback Redirection** is disabled. If you want to enable the Fallback Redirection, click **Customize**.<br><br>**Note**: The Fallback Redirection is supported by both standard and universal apps. | N/A | IVR |
| VXML Error Threshold | The **VXML (VoiceXML) Error Threshold** is the maximum number of errors or failures that can occur during a VXML session before the system takes corrective action, such as ending the session, or initiating an alternative flow by re-establishing the VXML connection. The **Use Default** option is the default selection where the Platform enforces the environment-level retry limit (internally set to 3). The **Customize** option helps customize the number of retries to 1,2, or 3 by selecting the limit from the **No. of Retries** dropdown. | N/A | IVR |
| Propagate Values to Link Apss | Enable this option to propagate the Voice Call Properties from the Universal App to all its linked apps. It helps you to leverage the UB properties when a linked app’s execution is in progress. The Voice Call Properties of the linked app are used when the conversation is happening directly with the app as a Standard app.<br><br>By default this option is disabled. | N/A | IVR |
| Recording | Define the state of recording to be initiated. The default value is **Stop**. | Entity,<br>Confirmation,<br> Message,<br>and Agent nodes | IVR |


Below is a demo of the IVR Properties section of a Dialog Task node.

<img src="../images/ivr-properties.gif" alt="IVR Properties" title="IVR Properties" style="border: 1px solid gray; zoom:70%;">



## Configuring Grammar

You will need to define at least one Speech Grammar to the IVR system. 
There is no default Grammar that will be considered by the system. In this section, we will walk you through the steps needed to configure a Grammar system for the AI Agent to function on the IVR system.

Typically for an IVR-enabled AI Agent, the speech utterance of the user will be vetted and parsed by the Grammar syntax at the IVR system before being diverted to the AI Agent.

Kore.ai supports the following Grammar systems:



* Nuance
* Voximal
* UniMRCP

Each one requires its own configuration.


#### Nuance

In case you want to use grammar syntax rules from Nuance Speech Recognition System, you need to get a license for the same. Once you register and obtain a license from Nuance, you will be given access to two files – **dlm.zip** & **nle.zip**. Ensure that the path to this VXML is accessible to the AI Agent.

**Configurations**:



1. Set **Enable Transcription** to _no_
2. In the **Grammar** section:
    1. Select the **Speech** or **DTMF** option as per your requirement.
    2. In the text box to define vxml enter the vxml path to dlm.zip file. The url will be of the format: `https://nuance.kore.ai/downloads/kore_dlm.zip?nlptype=krypton&dlm_weight=0.2&lang=en-US`
    3. Replace the above path according to your setup
    4. The language code “_lang=en-US_” will be based on your setup
3. **Add Grammar** to add another path to `nle.zip`. Follow the above-mentioned steps.
4. **Save** the settings.


#### Voximal/UniMRCP

In case you want to use grammar syntax rules from Voximal or UniMRCP, you need to specify the transcription source.

**Configurations**:



1. Set **Enable Transcription** to _yes_
2. In the **Transcription engine source** text box that appears:
    1. for Voximal, enter _“builtin:grammar/text”_
    2. for UniMRCP, enter _“builtin:grammar/transcribe”_
3. You can leave the **Grammar** section blank, the above transcription source URL will handle the syntax and grammar vetting of the speech.
4. **Save** the settings.


[def]: ../../