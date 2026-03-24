# Create Flows

A _flow_ is a step-by-step process that helps you define the end-to-end customer experience for each communication channel.

You can create experience flows using the Flow Designer.

## Flow Types

There are two types of Flows:

1. **Start Flows**: Most flows are classified as start flows, applicable to both voice and chat channels.
2. **Exit Flows**: Used when a call disconnects, applicable to voice channels.

### The Start Flows

Start flows represent the most complex flow type, providing access to all [node types](../flows/node-types/introduction-to-flow-nodes.md). This flow type allows you to create experiences for inbound calls and chats.

!!! Note

    All fields of the default Start Flows can be edited except Channels. [Learn more](#edit-a-start-flow).

#### Default Welcome Flows

The default welcome flows are created automatically when you create a new account. Default Flows support both Chat and Voice functionalities. These flows act as fallback. You can edit these flows to customize the experience for your users.

**Chat-Welcome Flow**  
The Welcome Chat Flow allows you to simulate user interactions on any configured chat channel. Use the RTM (Real-Time Messaging) channel to test chat scenarios. This flow ensures that the AI Agent responds appropriately when users initiate conversations without clearly stating their intent.  
<img src="../images/welcome-chat-flow.gif" alt="Welcome Chat Flow" title="Welcome Chat Flow" style="border: 1px solid gray; zoom:70%;">

**Voice-Welcome Flow**  
The Welcome Voice Flow provides a similar capability for voice-based experiences. You can test voice interactions using the SBC (Session Border Controller) simulation channel. This flow handles default voice call routing when no predefined intent is matched.  
<img src="../images/welcome-call-flow.gif" alt="Welcome Voice Flow" title="Welcome Voice Flow" style="border: 1px solid gray; zoom:70%;">

**Use Cases**  

* Validate fallback behavior for both chat and voice channels.  
* Ensure the AI Agent responds effectively during first-time interactions or when there are no defined intents.  
* Simulate and verify channel-specific configurations using test channels to ensure accurate results.
Welcome Flows help developers confirm that AI Agent behavior remains consistent and user-friendly from the initial point of contact across all channels.

### The Exit Flows

This flow type runs when a call gets disconnected and is useful in gathering customer data during post-call analytics, clean-up, or updates in other systems after a call ends. Conversational context can be passed from the main experience flow into the _Exit Flows_.

!!! Note

    Exit flows are currently configurable only for voice channels.

## Create a Start Flow

Steps to create a Start Flow:

1. In the left navigation, go to **Flows & Channels** > **FLOWS**.
2. Select **+ New Start Flow**.  
    <img src="../images/new-start-flow.png" alt="New Start Flow" title="New Start Flow" style="border: 1px solid gray; zoom:80%;"/>

3. In the New Start Flow window, provide inputs for the following fields:
    1. **Start Flow Name**: This name helps identify the flow.
    2. **Description**: Input text to describe what the experience flow does or its purpose.
    3. **Attach a Channel**: Select one of the following channels to integrate with this flow:

### Voice

1. Selecting this option displays the list of phone numbers available within your account. Select a number to map to the start flow.
    <img src="../images/voice-channel-phone-number.png" alt="Phone Number" title="Phone Number" style="border: 1px solid gray; zoom:100%;">

2. If you haven't added any number to your account, select **Purchase a phone number**.  
    <img src="../images/purchase-phone-number.png" alt="Purchase a Phone Number" title="Purchase a Phone Number" style="border: 1px solid gray; zoom:100%;">

    * The _Phone Number_ window displays. You can configure a custom local or toll-free number by clicking **Get New Phone Number**:  
    <img src="../images/get-new-phone-number.png" alt="Get New Phone Number" title="Get New Phone Number" style="border: 1px solid gray; zoom:100%;">

    * Select the **Country**.
    * Select either the **Local** or **Toll-Free Number** option.
    * Select the **State**.
    * Enter the **Area Code**.
    * Once the above fields are configured, the monthly fee and the operational charge per minute are displayed.  
    <img src="../images/area-code.png" alt="Pricing" title="Pricing" style="border: 1px solid gray; zoom:100%;">

3. Configure an available number with the following steps:
    * Select **Get Number**n.
    * Review the number on the _Forward to Phone Number_ page, select whether the number will be used for Inbound, Outbound Calls, or both, and click **Done**. A success confirmation message is displayed, and the phone number is added.
    <img src="../images/forward-to-phone-number.png" alt="Reserve Phone Number" title="Reserve Phone Number" style="border: 1px solid gray; zoom:80%;"/>

    * You can now use this number for your Start Flow.

!!! Note

    This feature is only available when using our Twilio account. It's not supported for SIP trunk setups.

4. Select an **ASR Speech Recognition Engine**. You can choose from the following:
    * Microsoft Azure Speech Services,
    * Google Cloud Speech-to-Text,
    * Amazon Transcribe.  
    <img src="../images/speech-recognition-engine.png" alt="Speech Recognition Engine" title="Speech Recognition Engine" style="border: 1px solid gray; zoom:80%;"/>

5. Select an English Dialect.

6. Select a **TTS Speech Recognition**. You can choose from the following:
    * Microsoft Azure Speech Services,
    * Google Cloud Text-to-Speech,
    * AWS Amazon Polly,
    * ElevenLabs,
    * Whisper,
    * PlayHT,
    * Deepgram Text-to-speech.  
    <img src="../images/text-to-speech-engine.png" alt="Text to Speech Engine" title="Text to Speech Engine" style="border: 1px solid gray; zoom:80%;"/>

7. Select a **Language** for text-to-speech, then select a **Voice**.

8. Add text to the **Voice Preview** field. Click **Sample Text**, then click Play to hear a preview of the voice to be implemented into your flow.

#### Show Advanced Settings

Enter the Primary and Fallback TTS Configuration.  
<img src="../images/tts-configuration.png" alt="Text to Speech Configuration" title="Text to Speech Configuration" style="border: 1px solid gray; zoom:100%;">

#### Bot No Input

To handle situations where there are delays in backend operations or unexpected system failures, administrators can configure Bot No Input to provide users with appropriate responses or cues. This prevents users from experiencing dead air during such occurrences. The following configurations allow pre-programmed instructions for such scenarios.  
<img src="../images/bot-no-input.png" alt="Bot No Input Toggle" title="Bot No Input Toggle" style="border: 1px solid gray; zoom:80%;"/>

* When enabled, the below configurations are applied.
* When disabled, the default give-up timeout is applied, causing the call to disconnect if the bot doesn't respond within 30 seconds.

##### Configuration Options

###### Bot No Input Timeout

* If the bot doesn't respond within this duration, an action based on the "Interaction Type" is triggered.
* This periodic message repeats until the bot responds or until the "Bot No Input Give Up Timeout" is reached.  
<img src="../images/bot-no-input-timeout-message.png" alt="Bot No Input Timeout" title="Bot No Input Timeout" style="border: 1px solid gray; zoom:80%;"/>

###### Interaction Type

You can play audio or background music (BGM) to users on hold when an agent initiates a tool call or checks the knowledge base. The Realtime TTS model supports audio playback only through an input URL and doesn't support speech input.

The following options are available:

* **Bot No Input Speech**: Enter the text that the bot will say when triggered by the no input timeout.  
<img src="../images/interaction-types.png" alt="Interaction Type" title="Interaction Type" style="border: 1px solid gray; zoom:80%;"/>

* **Bot No Input URL**: Enter a valid audio URL. The bot will play the audio file from this URL when triggered by the no-input timeout.  
<img src="../images/background-music.png" alt="Interaction Type" title="Interaction Type" style="border: 1px solid gray; zoom:80%;"/>

###### Bot No Input Retries

* Specifies the number of times to perform the no input actions, with a "Bot No Input Timeout" duration between each retry.  
    <img src="../images/retries.png" alt="Bot No Input Retries" title="Bot No Input Retries" style="border: 1px solid gray; zoom:80%;"/>

###### Bot No Input Give Up Timeout

* The total duration (in seconds) to wait before performing the give-up action and stopping further no input retries. The following options are available:

    * **End the Call**: Ends the call after the "Bot No Input Give Up Timeout" is reached.
        * Enter a message that the bot will say before ending the call.  
            <img src="../images/end-the-call.png" alt="End the Call" title="End the Call" style="border: 1px solid gray; zoom:80%;"/>

    * **Transfer the Call**: Transfers the call to a SIP phone number.
        * **Text Message**: The bot will say this message before transferring the call.
        * **SIP Transfer Method**: Select the desired SIP transfer method from the dropdown menu (SIP REFER).
        * **Redirect URL**: Enter the SIP redirect URL for transferring the call.
        * **SIP Headers**: Provide key-value pairs for SIP headers as needed.  
            <img src="../images/transfer-the-call.png" alt="Transfer the Call" title="Transfer the Call" style="border: 1px solid gray; zoom:80%;"/>

##### Usage Scenarios

* **Normal System Delays**: If backend operations take longer than expected (for example, CRM updates or HTTP requests), users will receive periodic messages or audio cues, ensuring they remain informed.
* **Unexpected Failures**: In cases of backend crashes or offline services, this provides fallback actions to maintain a positive user experience.

##### Example Configuration

**Scenario**:

* Configuration:
    * **Enabled**: true
    * **Bot No Input Timeout**: 10 seconds
    * **Bot No Input Speech**: "Please wait while the bot responds."
    * **Bot No Input Retries**: 15
    * **Bot No Input Give Up Timeout**: 120 seconds
    * **Give-Up Action**: End Call (message: "Bot not responding ending the call")

**Behavior**:

* The bot will play the message "Please wait while the bot responds" every 10 seconds.
* This will continue until the bot responds, the retries (15) are exhausted, or the give-up timeout (120 seconds) is reached.
* After 120 seconds, if the bot still does not respond, the bot will say the configured end-call message "Bot not responding ending the call" and disconnect the call.

This configuration ensures that user interactions remain seamless and informative, even during unexpected system delays or failures.

* Select an **Exit Flow** (Optional): When the exit event is triggered, the published version of the selected flow will be executed. You can either select the default _Exit Flow_ or one that you have created yourself.
    <img src="../images/exit-flow.png" alt="Exit Flow" title="Exit Flow" style="border: 1px solid gray; zoom:80%;"/>

* Select a **No Agents Available Flow** (Optional): The published version of the selected flow will be executed when an agent transfer is triggered, but no agents are available, or the conversation exceeds the maximum waiting time in the queue. You can either select the default _No Agents Available Flow_ or one that you have created yourself.
    <img src="../images/no-agents-available-flow.png" alt="No Agents Available Flow" title="No Agents Available Flow" style="border: 1px solid gray; zoom:80%;"/>

* Select an **Out-of-Hours Flow** (Optional): The published version of the selected flow will be executed when an agent transfer is triggered outside the queue's working hours. You can either select the default _Out-of-Hours Flow_ or one that you have created yourself.
    <img src="../images/out-of-hours-flow.png" alt="Out of Hours Flow" title="Out of Hours Flow" style="border: 1px solid gray; zoom:80%;"/>

    !!! Note

        Only flows that have been published will be available for selection in the dropdowns.

#### Answering Machine Detection

The Answering Machine Detection (AMD) feature provides intelligent call handling capabilities for voice-based communication flows by detecting whether a human or an answering machine answers an incoming call.

When enabled, the system detects Answering Machine Detection (AMD) from incoming calls and stores the result in context variables available through `context.session.UserSession`. 

Selecting the Disconnect the call after detecting a machine checkbox automatically terminates the call upon machine detection.

!!! Note

    * This is applicable only to voice flows.
    * For calls disconnected due to AMD detection, the status is shown in the ‘Interactions’ page
        * [Interactions](../analytics/overview/conversations.md) Dashboard
            * Status: Completed
            * Mode:  Machine Detected
        * ['Insights to Log'](../analytics/overview/conversations.md#insights-to-logs) tab
            * Status: Completed (Closed)
            * Mode: Machine Detected
            * Reason: Machine Detected
            * Disconnecting Event: System
            * Smart Status: Closed (This status can be seen only in v2 Public API response)

<img src="../images/answering-machine-detection.png" alt="Answering Machine Detection" title="Answering Machine Detection" style="border: 1px solid gray; zoom:80%;"/>

#### TTS Streaming

Enabling this option streams the TTS response and saves 200ms of TTS connection latency. Supported only for Deepgram TTS and ElevenLabs TTS.

#### Continuous Gather

This option appears when enabling TTS Streaming. Enable this option to capture user responses and reduce latency. Use it only for Agentic App use cases.  
<img src="../images/tts-streaming-continuous-gather.png" alt="TTS Streaming and Continuous Gather" title="TTS Streaming and Continuous Gather" style="border: 1px solid gray; zoom:80%;"/>

#### Chat

Selecting chat displays all the chat channels configured in the channels section. The displayed values include:

1. **All**: Selecting it selects the Web/Mobile Client and any other services available within your account for the chat flow.
2. **Web/Mobile Client**: The web client is the front-end component of any conversational AI system or application that communicates with a server and is accessed by the end-user on a desktop or mobile device.  
    <img src="../images/chat-channels.png" alt="Chat Channels" title="Chat Channels" style="border: 1px solid gray; zoom:80%;"/>

3. Under Advanced Settings, you can enable **Prompt Overrides at Input Nodes**. When this feature is enabled, unprocessed user inputs will be passed to the first input node encountered in the flow without returning the actual prompt stored against the input node. This is useful for scenarios where a conversation ends and is then restarted by the user. For example, the user will not see the first “Welcome Message” again, as they would when starting a new conversation. Instead, they will receive a relevant reply to the utterance.
    <img src="../images/prompt-overrides-at-input-nodes.png" alt="Prompt Overrides at Input Nodes" title="Prompt Overrides at Input Nodes" style="border: 1px solid gray; zoom:80%;"/>

4. Select a **No Agents Available Flow** (Optional): The published version of the selected flow will be executed when an agent transfer is triggered, but no agents are available, or the conversation exceeds the maximum waiting time in the queue.
    <img src="../images/no-agents-available-flow-chat.png" alt="No Agents available Flow" title="No Agents Available Flow" style="border: 1px solid gray; zoom:80%;"/>

5. Select an **Out-of-Hours Flow** (Optional): The published version of the selected flow will be executed when an agent transfer is triggered outside the queue's working hours.
    <img src="../images/out-of-hours-flow-chat.png" alt="Out of Hours Flow" title="Out of Hours Flow" style="border: 1px solid gray; zoom:80%;"/>

    !!! Note

        Only flows that have been published will be available for selection in the dropdowns.

6. Click **Update & Continue to Flow Design**, you are taken to the Flow Designer, where you can work on the Flow itself.

#### SMS

Selecting SMS will display all the phone numbers configured in the channels section.

1. Select a phone number to map to the start flow.  
    <img src="../images/select-number.png" alt="Select Number" title="Select Number" style="border: 1px solid gray; zoom:80%;"/>

2. Select a **No Agents Available Flow** (Optional): The published version of the selected flow will be executed when an agent transfer is triggered, but no agents are available, or the conversation exceeds the maximum waiting time in the queue.
    <img src="../images/no-agents-available-flow-chat.png" alt="No Agents available Flow" title="No Agents Available Flow" style="border: 1px solid gray; zoom:80%;"/>

3. Select an **Out-of-Hours Flow** (Optional): The published version of the selected flow will be executed when an agent transfer is triggered outside the queue's working hours.
    <img src="../images/out-of-hours-flow-chat.png" alt="Out of Hours Flow" title="Out of Hours Flow" style="border: 1px solid gray; zoom:80%;"/>

    !!! Note

        Only flows that have been published will be available for selection in the dropdowns.

## Edit a Start Flow

Steps to edit a start flow:

1. Click the Ellipsis (**⋮**) beside the Description and click **Update**.
    <img src="../images/update-start-flow.png" alt="Update Start Flow" title="Update Start Flow" style="border: 1px solid gray; zoom:80%;"/>

2. Make the changes and click **Update**.
    <img src="../images/edit-flow-experience.png" alt="Update Button" title="Update Button" style="border: 1px solid gray; zoom:80%;"/>

## Delete a Start Flow

Steps to delete a start flow:

1. Click the Ellipsis (**⋮**) beside the Description and click **Delete**.
    <img src="../images/delete-start-flow.png" alt="Delete Button" title="Delete Button" style="border: 1px solid gray; zoom:80%;"/>

2. A confirmation is displayed. Click **Delete**.
    <img src="../images/confirm-delete.png" alt="Delete Confirm" title="Delete Confirm" style="border: 1px solid gray; zoom:80%;"/>

    !!! Note

        * You cannot delete default start flows.
        * You cannot delete a flow that is linked to an active campaign. Please remove the flow from the campaign before attempting to delete it.

## Create an Exit Flow

Steps to create an Exit Flow:

1. In the left navigation, go to **Flows & Channels** > **FLOWS**.
2. Click **+ New Exit Flow**.
    <img src="../images/new-exit-flow.png" alt="New Exit Flow" title="New Exit Flow" style="border: 1px solid gray; zoom:80%;"/>

3. In the New Exit Flow window, provide inputs for the following fields:
    1. **Exit Flow Name**: This name will help identify the flow.
    2. **Description**: Input text to describe what the experience flow does or its purpose.
    3. **Attach a Channel**: Select either voice or chat to integrate with this flow.
    <img src="../images/exit-flow-fields.png" alt="Exit Flow Fields" title="Exit Flow Fields" style="border: 1px solid gray; zoom:80%;"/>

4. Click **Update & Continue to Flow Design**, you are taken to the Flow Designer, where you can work on the flow.

## Edit an Exit Flow

Steps to edit an exit flow:

1. Click the Ellipsis (**⋮**) beside the Description and click **Update**.
    <img src="../images/update-exit-flow.png" alt="Update Exit Flow" title="Update Exit Flow" style="border: 1px solid gray; zoom:80%;"/>

2. Make the changes and click **Update**.
    <img src="../images/update-button-exit-flow.png" alt="Update Button" title="Update Button" style="border: 1px solid gray; zoom:80%;"/>

## Delete an Exit Flow

Steps to delete an exit flow:

1. Click the Ellipsis (**⋮**) beside the Description and click **Delete**.
    <img src="../images/delete-exit-flow.png" alt="Delete Button" title="Delete Button" style="border: 1px solid gray; zoom:80%;"/>

2. A confirmation is displayed. Click **Delete**.
    <img src="../images/confirm-delete-exit-flow.png" alt="Delete Confirm" title="Delete Confirm" style="border: 1px solid gray; zoom:80%;"/>

## Navigate the Flow Designer

Once you reach the Flow Designer, you can create your flow using the canvas and nodes. The visual guide below gives you an overview of the tools you will be working with.
<img src="../images/flow-designer-page.png" alt="Flow Designer Page" title="Flow Designer Page" style="border: 1px solid gray; zoom:80%;"/>

For a detailed navigation guide, please see [Navigate the Flow Designer](../flows/navigate-the-flow-designer.md).

## Publish a Flow

When the Flow is published, it becomes available to end-users. [Learn more](../deploy/publishing-bot.md#publishing-components).