# Interacting with Customers

## The Interaction Pane

### Compose Responses

Agents can respond to customers by typing their messages in the text editor.  
<img src="../images/compose-bar-blank.png" alt="Blank Text Editor" title="Blank Text Editor" style="border: 1px solid gray; zoom:80%;"/>

Agents can type their responses in the text editor and send the message by selecting **Send**. Pressing **Tab** on your keyboard shifts the focus to the Send icon. You can also press **Tab + Enter** to send a message.  
<img src="../images/send-response.png" alt="Send Response" title="Send Response" style="border: 1px solid gray; zoom:80%;"/>

!!! Note

    You can press **Enter** to send messages. Pressing (ctrl+enter or shift+enter) on Windows and (ctrl+return or shift+return) on Mac creates a new line.

Agents can send a standard response to the customer from a pre-configured library. Press **/** in the text editor to display the standard response templates window.  
<img src="../images/standard-response-prompt.png" alt="Standard Response Library" title="Standard Response Library" style="border: 1px solid gray; zoom:80%;"/>

Pressing **Escape** after typing “**/**” closes the standard response window.

**Translation enabled**: Responses appear in the agent’s selected target language in both the text editor shortcut command and the response widget.

**Translation disabled**: Responses appear in the conversation language, as set through [Agent Utils at the time of agent transfer](../flows/node-types/utils.md#set-live-chat-agent-transfer), ensuring they're not limited to the application language.

### AI-enhanced Compose Text Box

Using the AI-enhanced compose text box, agents can create customized responses to address customer inquiries, concerns, or issues. They can also add personal touches to their messages to make the communication more human and empathetic.
There are three choices available:  
<img src="../images/ai-options-compose-bar.png" alt="AI Enhanced Options" title="AI Enhanced Options" style="border: 1px solid gray; zoom:80%;"/>

1. **Make more friendly**: This option rephrases the draft response to make it more friendly and informal.
This option rephrases the draft response to make it more friendly and informal. For example, it rephrases the formal draft response “Your mortgage appointment is scheduled for Jun 24, 2023, 1 PM” to “Great news! We’ve scheduled your mortgage appointment for Jun 24, 2023, at 1 PM.”
2. **Make more formal**: This option expands the draft response. For example, it expands the draft response “Your mortgage appointment is scheduled for Jun 24, 2023, at 1 PM” to “We would like to notify you that we've successfully scheduled your mortgage appointment for June 24, 2023. Be available at 1:00 PM for your appointment.”
3. **Expand**: This option expands the draft response. For example, it elaborates the draft response “Your mortgage appointment is scheduled for Jun 24, 2023, at 1 PM” to “We would like to notify you that your mortgage appointment has been successfully scheduled for June 24, 2023. Be available at 1:00 PM for your appointment.”
4. **Rephrase**: This option lets agents to elevate the formality of their writing, making it suitable for business or any other formal contexts.

    To enable this, go to [Generative AI Tools > GenAI Features > Agent Response Rephrasing](../generative-ai-tools/genai-features.md).

### Add/Delete Hyperlinks in the Text Editor

Agents can add/delete hyperlinks in the text editor while responding to the messages.

Steps to add/remove hyperlinks:

1. Highlight the text that you want to hyperlink and select the **Add Link** icon.  
    <img src="../images/highlight.png" alt="Highlight Text" title="Highlight Text" style="border: 1px solid gray; zoom:80%;"/>

2. In the **Add Link** dialog box, do the following:

    * Select the **web address** option and enter the URL in the box, for linking a web page.  
        <img src="../images/link-to-web-address.png" alt="Link to Web Address" title="Link to Web Address" style="border: 1px solid gray; zoom:60%;">

    * For linking an email address, select the **Email Address** option and enter the email address in the box.  
        <img src="../images/add-link-email.png" alt="Add Link Email" title="Add Link Email" style="border: 1px solid gray; zoom:60%;">

        !!! Note

            The highlighted text appears in the Text to display field.

3. Select **Ok** to hyperlink the selected text.  
    <img src="../images/hyperlinked.png" alt="Hyperlinked Text" title="Hyperlinked Text" style="border: 1px solid gray; zoom:80%;"/>

4. Hover over the hyperlinked text to view the following options:

    * Open
    * Break Link (icon)
    * Edit

5. Press **Enter** to send the message.  
    <img src="../images/send-message.png" alt="Send Message" title="Send Message" style="border: 1px solid gray; zoom:80%;"/>

## Viewing New Messages in the Console

When agents are reviewing earlier parts of a conversation, and a new message arrives while you are at the top of the live interaction pane, a New Message icon appears at the bottom of the conversation thread. The icon also displays the number of unread messages. To view the latest message, select the New Message icon. The most recent message appears.  
<img src="../images/new-message.png" alt="Auto Scroll" title="Auto Scroll" style="border: 1px solid gray; zoom:70%;">

## Resend Message When Network Disconnects

The following table lists scenarios with expected results if a network fails while an agent attempts to send a response.

| **Scenario**                             | **Result**                                                                                                                      |
|------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| When an agent sends a message            | `Sending` appears on the chat window.                                                                                           |
| If the system sends the message      | `Sent` appears on the chat window.                                                                                              |
| When network disrupts              | Disables the chat window. Undelivered messages appear as `Not Delivered` with the Resend icon in the compose bar’s left corner. |
| When the network restores            | Enables the chat window.                                                                                                     |
| Selecting the re-send option            | Sends the message again.                                                                                                      |
| If the conversation terminates       | The Resend icon doesn't appear.                                                                                                |
| If the page refreshes                 | The undelivered messages don't appear.                                                                                         |

## Audio and Video Calls with Customers

Agents can request the customer for an audio or video call during the chat conversation if required. Selecting the **Audio** or **Video Call** icon initiates a call.  
<img src="../images/audio-video-icons.png" alt="Audio and Video Call Icons" title="Audio and Video Call Icons" style="border: 1px solid gray; zoom:70%;">

!!! Note

    * Accounts using Voice Gateway and AudioCodes can access the video call option. 
    * Agents must close the chat interaction and the audio or video call separately, each with its own disposition.

### Manual Outbound Call

Agents can initiate manual outbound calls from the agent console. Following are the conditions under which agents can or can't initiate outbound calls. These rules help maintain efficient call management while preserving routing integrity across the system.

**Rules for Outbound Calls**

1. **Initiating Outbound Calls from Any Status**  

    * Agents can initiate outbound calls from any status within the agent interface.
    * Exceptions:  

        * Agents can't initiate outbound calls when their status is `System Away` for both Chat and Voice interactions.
        * Agents can't initiate outbound calls when their status is `System Busy` for voice interactions.

2. **Outbound Calls During Digital Interactions**

    * Agents can initiate an outbound call even when handling digital interactions.
    * If an agent's slots are full and their status is `System Busy`, they can initiate an outbound call.

3. **Inbound Voice Interaction Restriction**

    * Agents can't initiate an outbound call if they're handling an existing inbound voice call.

**Outbound Calling**

* The system disables outbound calling:

    * When agents are in a status that doesn't permit outbound calls (for example, System Away for both Chat and Voice interactions, System Busy for Voice interactions).
    * When agents are handling an inbound voice call.
    * When agents are handling an outbound call.

**Handling Multiple Outbound Calls**

Agents can initiate a secondary outbound voice call only after completing the ongoing call. This approach helps agents manage their workload and provide undivided attention to each customer interaction.

**Status Updates**

When an agent initiates an outbound call, the system automatically changes the agent's status to `System Busy`. This automatic status update helps manage agent availability and workload distribution, ensuring efficient call handling and resource allocation.

!!! note "Outbound Calling"
 
    Outbound calls connect an agent to a customer using a number provisioned by Kore or an external provider. When the number is provisioned by Kore, the platform routes calls through the Twilio-based telephony. When the number is provisioned externally, for example through Verizon, the platform routes calls using SIP Trunk integration. To place outbound calls, the calling number must be a valid Twilio number associated with the same account. After the number is registered and permissions are enabled, outbound calling works as expected.

#### Contacts

Selecting Contacts displays the list of configured contacts. Agents can search for a contact by entering a name or phone number in the search bar.

#### Outbound Dialer

The outbound dialer has the following functionalities:

* Search Bar: The search bar on the dialer interface lets agents to enter keywords or partial numbers to find configured contacts.  

* International Subscriber Dialing (ISD) Code Update: The dialer automatically adjusts the outbound phone number’s ISD code based on the last used country code. This streamlines the process for agents making calls to different regions. For example, if an agent selects India as the country but enters a phone number from the USA, the dialer automatically changes the country to the USA.

* Phone Number Formatting: The system displays the phone number in a standardized format when an agent enters it for dialing, regardless of whether the original number contains hyphens or brackets, as long as the format is valid (for example, 090-1234-5678 or (123) 456-7890).

* Validation and Error Handling: An error message appears on entering an invalid number  (for example, incorrect length or characters). The call option is unavailable till you enter a valid number, preventing accidental calls to inaccurate numbers.  
    <img src="../images/invalid-phone-number.png" alt="Invalid Phone Number" title="Invalid Phone Number" style="border: 1px solid gray; zoom:70%;">  

* Enable Call Controls during ringing: Turning on this toggle lets agents to use the call control features (mute, hold, keypad, transfer) when the call is in the dialing phase. To enable this functionality, refer to the [Permissions](../user-management/role-management.md#permissions) section.  
    <img src="../images/enable-call-controls-during-ringing.png" alt="Enable Call Controls During Ringing" title="Enable Call Controls During Ringing" style="border: 1px solid gray; zoom:70%;"> 

Agents can make outbound calls to the customers as follows:

1. Select **+** on the conversation tray and then select Outbound Call. The dial pad displays.  
    <img src="../images/outbound-call-button.png" alt="Outbound Call" title="Outbound call" style="border: 1px solid gray; zoom:70%;">

2. Select the Calling from option on the Dialer tab, and select the number for placing the outbound call. Agents can use phone numbers or configured SIP trunks while making outbound calls.  
    <img src="../images/sip-and-phone-numbers.png" alt="Calling From Number" title="Calling From Number" style="border: 1px solid gray; zoom:60%;">

3. Agents can dial the outbound calls in two ways:

    1. Enter the phone number with the country code, and select Call to place the outbound call.  
        <img src="../images/global-dialpad.png" alt="Global Dialpad" title="Global Dialpad" style="border: 1px solid gray; zoom:60%;">

    2. Select the country code from the dropdown, enter the phone number without the country code, and select the Call option to place the outbound call.  
        <img src="../images/country-code.png" alt="Call" title="Call" style="border: 1px solid gray; zoom:60%;">  

        The following scenarios are possible:

        | Scenario | User Input | What Happens |
        |----------|------------|--------------|
        | Entering a number without a country code | `123124` | The system doesn't select or validate any country code by default and places the call directly. If the user intends to dial a US number, the user can change the country code to **Unknown**. |
        | Pasting a number without a country code | `123121` | The system displays a validation error because the number doesn't match the default country format. The user can change the country code to **Unknown**, after which the system places the call directly. |
        | Entering or pasting a valid international number | `+91987654321` | The system automatically detects and selects **India** as the country code and places the call. |
        | Entering or pasting an invalid international number | `+919876543` | The system displays a validation error and disables the call icon and prevents placing the call. |


    !!! Note

        The country code defaults to the last dialed country. If no calls are dialed, the default country code is the US.

#### Inbound Click-to-Call Interaction

Agents receive the Click-to-Call interaction in the Live Interaction pane, similar to an inbound voice call. The system displays the metadata and prior chat transcript to the agent. During the call, agents can pause and resume recording when handling sensitive information. After the call ends, the system stores the transcription and disposition summary. [Learn more](../contactcenter/flows-and-routing/conditional-flows.md#click-to-call-flow).  

!!! note 
 
    This capability is supported only in the Eternal SDK.

<img src="../images/click-to-call-interaction.png" alt="Click to Call Interaction" title="Click to Call Interaction" style="border: 1px solid gray; zoom:70%;">  

Agents also have access to the following call controls:  

* Mute  
* Un-mute  
* Hold  
* Resume  
* Recording - Pause and Resume  
* Transcription - Pause and Resume  
* Transfer - Internal

## Voicemail

If auto answer mode is enabled in [Agent Settings](../contactcenter/agent-and-supervisors/agent-management/agent-management.md#agent-settings), the transcript and recording appear automatically in the conversation tray of the agent.  
<img src="../images/next-in-queue-voicemail.png" alt="Next in Queue - Voicemail" title="Next in Queue - Voicemail" style="border: 1px solid gray; zoom:50%;">

If manual mode is enabled, a notification appears on the [Next in Queue Notification](../console/managing-incoming-interactions.md#next-in-queue-notifications) panel. The agent must accept the voicemail, even though the system doesn't consume any inbound conversation slots.

When the agent accepts the voicemail, the transcript and recording displays on the interaction pane. The agent can play, transfer, call (outbound), and download the voicemail from the interaction pane.  
<img src="../images/voicemail-playback.png" alt="Voicemail Playback" title="Voicemail Playback" style="border: 1px solid gray; zoom:70%;">

### Callback Option

You can call the customer as follows:

1. Select the **Call** option on the VOICEMAIL panel.  
    <img src="../images/callback button.png" alt="Call Option" title="Call Option" style="border: 1px solid gray; zoom:50%;">

2. The outbound call dialer appears. Select the **Call** option to initiate the outbound call.  
    <img src="../images/dialpad-call-button.png" alt="Dialpad Call Option" title="Dialpad Call Option" style="border: 1px solid gray; zoom:70%;">
    
    The agent can continue the conversation. 

### Consult Call, Conference Call, and Warm Transfer for Voice Calls

Agents can initiate Consult calls, Conference calls, and Warm Transfer voice calls while interacting with customers. It increases agent efficiency by allowing the initiating agent to share relevant context with the receiving agent before transferring the call. To help in effective call handling, the receiving agent provides the necessary information, leading to smoother transitions and improved customer outcomes. Additionally, this feature enables seeking expert opinions during customer calls.

#### Consult Call

Selecting an agent from the transfer list activates the consult and subsequent merge to a conference call.

The agent chosen for consultation must be available and have zero load occupation. If an agent joins for consultation, their slots remain occupied throughout the consultation and conference call.

During the consult call, the system automatically places the customer on hold, allowing internal agents to communicate with each other. The system records all calls when recording is enabled. Agents can transfer calls to external agents by pre-saving their phone numbers through an API.

The initiating agent can switch to the original customer call if needed, and vice versa, using the Swap functionality. The initiating agent can merge the two calls, converting them into a conference call.

##### Consult Call to a Queue (Voice Channel Only)

The “Consult a Call to a Queue” lets agents handling voice calls to initiate a consult with an available agent from a selected queue. When the agent chooses a queue during the consult action, the system displays a list of agents who belong to that queue, are in “Available” status, and aren't handling any assignments or active calls for that queue. The list appears in alphabetical order. The agent can select one agent from the list, after which a "Consult" option becomes available. Selecting this initiates a consult call, which proceeds only if the chosen agent remains available at the time of connection.

During the consult, the agent can use existing call control features such as Swap, Merge, and Transfer. When the consult call ends—either by the consulting agent or the internal agent—the system automatically routes the agent back to the original caller leg without requiring manual intervention.

##### Queue Level Consult Without Selecting an Agent

The platform lets agents to initiate a consult call by selecting a queue without specifying a particular agent. After the agent starts the consult, the system automatically connects the consult to an available agent in the selected queue.
Use a queue-based consult when you are handling an active interaction and need assistance without knowing which agent to contact. You must have access to one or more consult-enabled queues. This option helps you reduce time spent searching for agents and allows the system to route the consult based on skills, availability, and capacity.

Steps to Initiate a Queue-Based Consult call:

1. During an active interaction, select **External Consult Call**.  
    <img src="../images/external-consult-call.png" alt="External Consult Call" title="External Consult Call" style="border: 1px solid gray; zoom:70%;">
2. Select a Queue.
    <img src="../images/queue-select.png" alt="Select Queue" title="Select Queue" style="border: 1px solid gray; zoom:70%;">
3. (Optional) Select a specific agent.  
4. Select Queue Consult to initiate the consult call.  

The Consult option becomes available when you select a queue.

What Happens After You Start the Consult

* If you don't select an agent, the system routes the consult call to an available agent in the selected queue based on skills, availability, and capacity.  
* If you select an agent, the system connects the consult call directly to the selected agent, following the existing consult behavior.

#### Conference Call

Up to 4 supervisors, and the primary agent, can join the same conference call from the contact center side.  
<img src="../images/conference-participants.png" alt="Conference Participants" title="Conference Participants" style="border: 1px solid gray; zoom:70%;">

If a network disruption occurs, it disconnects the affected participants. They can rejoin the conversation seamlessly. Agents and supervisors can manage only one call at a time.  
<img src="../images/rejoin-button.png" alt="Rejoin" title="Rejoin" style="border: 1px solid gray; zoom:60%;">

When a supervisor joins a call, the system consumes their slot and updates their status to system busy for both chat and voice interactions. All chat transcripts from supervisors appear in yellow.  
<img src="../images/supervisor conversation.png" alt="Supervisor Conversation" title="Supervisor Conversation" style="border: 1px solid gray; zoom:60%;">

If an agent leaves the call, the supervisor has complete control of the conversation.

Each participant in the conference call can transfer the conversation or exit the call. Selecting the transfer option pushes the conversation to a queue or a target agent, who receives an incoming request.

The Customer Satisfaction (CSAT) links to the last agent who handled the conversation. If a user drops off, the primary agent (the longest participant) completes After Call Work (ACW).

#### Warm Transfer

Following the consult or conference call, the initiating agent can proceed with a warm transfer by clicking **Forward**.

##### Limitations

| **Category**           | **Sub-category**               | **Detail**                                                                                       | **Scenario**                                                                                                                                                                                                 |
|-------------------------|--------------------------------|-------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Consult Calls           | Ongoing consult call           | The system can't initiate a conference call during an ongoing consult call.                           | -                                                                                                                                                                                                           |
| Consult Calls           | After merging the consult call.    | The system can't initiate a conference call during an ongoing consult call.                           | When the agent and user are on call and the agent initiates a consult with the Supervisor: <br> (a) If the system merges the consult, it doesn't let a conference. <br> (b) If the supervisor drops from the consult call, the system lets a conference. |
| Consult Calls           | Ongoing conference call        | The system restricts Consult calls during an ongoing conference call.                                 | -                                                                                                                                                                                                           |
| Consult Calls           | Post-conference call ends      | The system restricts consult calls even if the conference ends and only the user and the agent remain on the call. | When the agent and user are on a call and the supervisor joins from the monitor tab, it gets converted to a conference call. Even if the supervisor exits, the system continues to consider the call a conference call. |
| Call Transfers/Consult  | Outbound calls                 | The system restricts Call transfers and Consult calls to Outbound calls.                              | -                                                                                                                                                                                                           |
| Agent AI Widget         | Ongoing conference/consult     | Agent AI Widget are during ongoing conference or consult calls.                       | -                                                                                                                                                                                                           |

### Call Transfer

Steps to initiate a Call Transfer:

1. Select the **Transfer** option to initiate the transfer.  
    <img src="../images/transfer-consult-call.png" alt="Transfer" title="Transfer" style="border: 1px solid gray; zoom:80%;"/>

    Recent transfer results appear.  
    <img src="../images/transfer-results.png" alt="Recent Transfer Results" title="Recent Transfer Results" style="border: 1px solid gray; zoom:80%;"/>

2. You can search for an **Agent** or **Queue** to transfer the call.  
    <img src="../images/agent-queue-transfer.png" alt="Agent/Queue Transfer" title="Agent/Queue Transfer" style="border: 1px solid gray; zoom:80%;"/>

### Agent Transfer

* The following options appear on selecting an agent:  
    <img src="../images/transfer-options.png" alt="Agent Transfer Options" title="Agent Transfer Options" style="border: 1px solid gray; zoom:30%;">

* Select **Transfer** to directly transfer the call to another agent.  
    <img src="../images/transfer-agent.png" alt="Agent Transfer" title="Agent Transfer" style="border: 1px solid gray; zoom:50%;">

!!! Note

    Agents are not listed in Agent Transfers when the Chat and Email channel slots are set to zero.

### Consult Call

* Select **Consult** to initiate a call with another agent while the external call progresses.  
    <img src="../images/consult-button.png" alt="Consult" title="Consult" style="border: 1px solid gray; zoom:30%;">

* A consult call initiates, and the places external call on hold.  
    <img src="../images/connecting-consult-call.png" alt="Initiate Consult Call" title="Initiate Consult Call" style="border: 1px solid gray; zoom:80%;"/>

* The consult call displays on the conversation tray of the receiving agent.  
    <img src="../images/accept-consult-call.png" alt="Conversation Tray" title="Conversation Tray" style="border: 1px solid gray; zoom:80%;"/>

* On accepting the call it appears on the Live Interaction pane of the receiving agent.  
    <img src="../images/consult-call-connected.png" alt="Consult Call Connected" title="Consult Call Connected" style="border: 1px solid gray; zoom:60%;">

* The initiating agent can continue the conversation with the receiving agent. The following options are available to the initiating agent.  
    <img src="../images/customer-on-hold-Consult.png" alt="Agent Options Consult Call" title="Agent Options Consult Call" style="border: 1px solid gray; zoom:50%;">

* Select the **Swap** option to swap between the external and internal (consult) calls. When switching to the external call, places the internal call on hold and pauses the recording.  
    <img src="../images/swap-button.png" alt="Swap" title="Swap" style="border: 1px solid gray; zoom:40%;">

### Conference Call

* Select the **Merge** option to initiate a Conference Call with the customer.  
    <img src="../images/merge-button.png" alt="Merge" title="Merge" style="border: 1px solid gray; zoom:50%;">

* The conference call appears on the conversation tray of the receiving agent and a notification displays on the right corner of the agent console.  
    <img src="../images/initiate-conference-call.png" alt="Initiate Conference Call" title="Initiate Conference Call" style="border: 1px solid gray; zoom:60%;">

* On accepting the call, the conference call connects and the agents can no longer interact privately.  
    <img src="../images/conference-call-connected.png" alt="Conference Call Connected" title="Conference Call Connected" style="border: 1px solid gray; zoom:60%;">

* A notification appears on the right corner of the console if the customer drops off during a conference call.  
    <img src="../images/conference-call-terminated.png" alt="Conference Call Terminated" title="Conference Call Terminated" style="border: 1px solid gray; zoom:60%;">

### Warm Transfer

* Select the **Forward** option to transfer the conversation to another agent.  
    <img src="../images/forward-button.png" alt="Forward" title="Forward" style="border: 1px solid gray; zoom:40%;">

* The initiating agent gets disconnected and the conversation appears on the conversation tray of the receiving agent. A notification appears on the right corner of the agent console.  
    <img src="../images/initiate-call-forwarding.png" alt="Initiate Call Forwarding" title="Initiate Call Forwarding" style="border: 1px solid gray; zoom:50%;">

* On accepting, the call transfers to the receiving agent.  
    <img src="../images/call-transferred.png" alt="Call Transferred" title="Call Transferred" style="border: 1px solid gray; zoom:70%;">

### Queue Transfer

* The following options appear on selecting a queue:  
    <img src="../images/queue-transfer-options.png" alt="Queue Transfer Options" title="Queue Transfer Options" style="border: 1px solid gray; zoom:50%;">

* Select **Transfer** to directly transfer the call to another queue.  
    <img src="../images/transfer-queue.png" alt="Transfer Queue" title="Transfer Queue" style="border: 1px solid gray; zoom:50%;">

### External Consult and Conference During an Ongoing Interaction

While interacting with a customer, if an agent needs to seek external consultation, they can initiate an outbound call as follows:

1. Select the **Dialpad** icon.  
    <img src="../images/dialpad.png" alt="Dialpad" title="Dialpad" style="border: 1px solid gray; zoom:60%;">

2. The **External Consultation Call** window appears. You can dial an external call in three ways:
    1. **Manual Dialer**: Enter the phone number with the country code, and the country’s flag appears automatically on the left. Select the **🕻** option to initiate an external outbound call.  
        <img src="../images/dialer.png" alt="Dial Phone Number" title="Dial Phone Number" style="border: 1px solid gray; zoom:50%;">

    2. **Contacts Tab**:
        1. Select the **Contacts** tab, enter the name of the contact in the search bar, and press **enter**.  
            <img src="../images/contacts-tab.png" alt="Contacts Tab" title="Contacts Tab" style="border: 1px solid gray; zoom:70%;">

        2. The search results appear. Select **🕻**.  
            <img src="../images/call-button (2).png" alt="Call Icon" title="Call Icon" style="border: 1px solid gray; zoom:60%;">

        3. The phone number appears on the dialer tab. Select **🕻** to dial the call.  
            <img src="../images/contact-call.png" alt="Call Dialer" title="Call Dialer" style="border: 1px solid gray; zoom:60%;">

    3. **Call History Tab**:

        1. Select the **Call History** tab.  
            <img src="../images/call-history (2).png" alt="Call History Tab" title="Call History Tab" style="border: 1px solid gray; zoom:60%;">

        2. Select the **🕻** option for the number to which you want to forward the call.  
            <img src="../images/call-button (3).png" alt="Call" title="Call" style="border: 1px solid gray; zoom:60%;">

        3. The phone number appears on the dialer tab. Select the **🕻** option to dial the call.  
            <img src="../images/dialer.png" alt="Dialer" title="Dialer" style="border: 1px solid gray; zoom:60%;">

3. The external consult call connects and places the customer on hold. The following options are available with agents during the external consult call:

    * **Mute** - Silence the conversation.
    * **Hold** - Place the external consult call on hold.
    * **Keypad** -  To enter DTMF inputs, enabling users to navigate IVR menus to connect external parties to the conference.
    * **Merge** - Merge the external call with the existing inbound call (conference).
    * **Forward** - Forward the call to another agent.
    * **End** - End the external consult call.
    * **Swap** - Swap between the customer and the external call.  
        <img src="../images/consult-call-option.png" alt="Consult Call Options" title="Consult call Options" style="border: 1px solid gray; zoom:60%;">

    The Call History tab contains records of the outbound calls.  
        <img src="../images/call-history-tab.png" alt="Call History Tab" title="Call History Tab" style="border: 1px solid gray; zoom:60%;">

### Apply or Change a Virtual Background During a Video Call

Follow these steps to apply, change, or remove a virtual background during an active video call:

1. Start or join a video call with a customer.
2. From the active video call interface, open the Virtual Background option.
3. Preview the available background options in the Virtual Background panel.
4. Select one of the following background types:

    * A predefined static image background
    * A blurred background

5. Apply the selected background. The system applies the background immediately without disconnecting or pausing the call. The background updates only the agent’s video feed.  
    <img src="../images/background-effects.png" alt="Background Effects" title="Background Effects" style="border: 1px solid gray; zoom:60%;">
6. To change the background during the same call, select a different background from the list. The system switches the background in real-time while the call remains active.
7. To remove the virtual background, select the option to revert to the original camera feed. The system restores the agent’s live camera view instantly.

    !!! note 
 
        This feature is in Beta and requires you to [contact Support](https://support.kore.ai) for enablement. Safari is not recommended, as video calls may intermittently fail with a Bad Media Description error when the customer uses Safari (WebSDK) and the agent uses Chrome or Safari.

### Agent-to-Customer Screen Sharing

1. Start an interaction that supports video.
2. Initiate screen sharing from the interface. Review the system-provided disclaimer regarding sensitive information.  
    <img src="../images/agent-screen-share.png" alt="Agent Screen Share" title="Agent Screen Share" style="border: 1px solid gray; zoom:60%;">
3. Select the content to share. Choose a specific application window or browser tab.
4. Manage screen sharing during the interaction.

    * Stop screen sharing when required.
    * Change the shared content by stopping the current share and selecting a new one.

5. End screen sharing by selecting Stop Screen Sharing or ending the interaction. The system automatically terminates screen sharing when the interaction ends.
    <img src="../images/stop-screen-sharing.png" alt="Stop Screen Share" title="Stop Screen Share" style="border: 1px solid gray; zoom:60%;">
    
    !!! note 
     
        The system maintains security, performance, and browser compatibility throughout the session.

## Co-Browse

The Co-browse functionality lets agents and customers to collaborate in real time by sharing the customer’s web session. Agents can guide customers, highlight areas of interest, and if permitted, temporarily control the session to assist with navigation. Customers remain in control always. To configure Co-browse, refer to [Co-browse Settings](../contactcenter/configurations/settings/co-browse.md).

!!! Note

    Co-browse is supported only on websites that have the Web SDK embedded. It is not available in other channels such as Telegram, WhatsApp, etc.

### Starting a Co-browse Session

**Agent**

1. In the Console, select **CoBrowse**.

    **Chat**  
    <img src="../images/co-browse-button.png" alt="Chat Co-Browse" title="Chat Co-Browse" style="border: 1px solid gray; zoom:70%;">

    **Voice**  
    <img src="../images/voice-co-browse-feature.png" alt="Voice Co-Browse" title="Voice Co-Browse" style="border: 1px solid gray; zoom:70%;">

2. Select **Start CoBrowse** on the pop-up window. The system sends a session request to the customer.  
    <img src="../images/start-co-browse.png" alt="Start Co-Browse" title="Start Co-Browse" style="border: 1px solid gray; zoom:70%;">

**Customer**

1. A pop-up request appears on the website.

2. Select **Accept** to start the session or **Reject** to decline.  
    <img src="../images/accept-reject.png" alt="Co-Browse Request" title="Co-Browse Request" style="border: 1px solid gray; zoom:70%;">

3. If accepted, the agent can view the shared screen.

### Toolbar Options

**Agent Tools**

During a session, the agent can access the following toolbar options:

* **Color Selection**: Choose different annotation styles for clarity.  
    <img src="../images/color-selection.png" alt="Color Selection" title="Color Selection" style="border: 1px solid gray; zoom:70%;">

* **Annotate**: Draw or highlight elements on the customer’s screen. Use the Eraser tool to remove annotations or undo the most recent action.  
    <img src="../images/annotate.png" alt="Annotate" title="Annotate" style="border: 1px solid gray; zoom:70%;">

* **Request Control**: Ask permission to control the customer’s screen. If granted, the agent can navigate or type on behalf of the customer.  
    <img src="../images/request-control.png" alt="Request Control" title="Request Control" style="border: 1px solid gray; zoom:70%;">

* **Reconnect**: Re-establish the session if connectivity issues occur.  
    <img src="../images/agent-reconnect.png" alt="Reconnect" title="Reconnect" style="border: 1px solid gray; zoom:70%;">

    !!! note 
     
        The Reconnect option appears dynamically on the Console when used with the latest external SDK version [v11.21.1](https://github.com/Koredotcom/web-kore-sdk/blob/v3/11.2.1/docs/plugins/proactive-web-campaign/README.md). If an earlier SDK version is in use, this option does not display in the Console.

* **Release Control**: Release control after completing an action.  
    <img src="../images/release-control.png" alt="Release Control" title="Release Control" style="border: 1px solid gray; zoom:70%;">

**Customer Tools**

Customers always remain in control of their session and can access the following toolbar options:

* **Release Control**: Withdraw the agent’s control at any point.  
    <img src="../images/customer-release-control.png" alt="Release Control" title="Release Control" style="border: 1px solid gray; zoom:70%;">

* **Reconnect**: Re-establish the session if connectivity issues occur.  
    <img src="../images/reconnect.png" alt="Reconnect" title="Reconnect" style="border: 1px solid gray; zoom:70%;">

* **Annotate**: Mark areas on the screen to show the agent what needs attention.  
    <img src="../images/customer-annotate.png" alt="Annotate" title="Annotate" style="border: 1px solid gray; zoom:70%;">

* **Mask/Block Input**: Hide sensitive information while typing, such as passwords or payment details.

    * Customers select which inputs or areas to mask.  
        <img src="../images/block-input.png" alt="Block Input" title="Block Input" style="border: 1px solid gray; zoom:70%;">

    * Masked fields are invisible to the agent and not stored in logs. Masking doesn't apply to all inputs automatically.  
        <img src="../images/masked-input.png" alt="Input Masked" title="Input Masked" style="border: 1px solid gray; zoom:70%;">

### Initiate a Co-browse Session Between the Agent and the Customer Desktop Over the Phone

To initiate a Co-browse session when the connection between the agent and the customer desktop screen is over the phone:

1. In the Console, select **CoBrowse**.

2. The agent generates a security code to establish a website-to-website connection.  
    <img src="../images/generate-co-browser-code.png" alt="Generate Co-Browse Code" title="Generate Co-Browse Code" style="border: 1px solid gray; zoom:80%;"/>

    <img src="../images/security-code.png" alt="Co-Browse Security Code" title="Co-Browse Security Code" style="border: 1px solid gray; zoom:80%;"/>

3. Share the security code with the customer.
4. The customer selects Co-browse. A prompt appears to enter the code shared by the agent during the voice call.  
    <img src="../images/co-browse-page.png" alt="Co-Browse Page" title="Co-Browse Page" style="border: 1px solid gray; zoom:80%;"/>

5. After entering the code, the system establishes an end-to-end connection between the agent and the customer desktops to initiate co-browsing.  
    <img src="../images/co-browse-page-chat-window.png" alt="Chat Window in Co-Browse" title="Chat Window in Co-Browse" style="border: 1px solid gray; zoom:80%;"/>

### Initiate a Co-browse on the Console When Connected to an External System

When the agent and user connect through an external system (for example, Genesys) and need to initiate a co-browse session using the Agent console, they can achieve this using this feature.

Steps to initiate co-browse session:

1. Select **Co-browse** on the conversation tray.  
    <img src="../images/co-browse-external-system.png" alt="Co-Browse Conversation Tray" title="Co-Browse Conversation Tray" style="border: 1px solid gray; zoom:80%;"/>

2. The system generates a security code. Share the security code with the customer.  
    <img src="../images/co-browse-security-code.png" alt="Co-Browse Security Code" title="Co-Browse Security Code" style="border: 1px solid gray; zoom:80%;"/>

    The system initiates a co-browse session .  
        <img src="../images/co-browse-session-initiated.png" alt="Co-Browse Session Initiated" title="Co-Browse Session Initiated" style="border: 1px solid gray; zoom:80%;"/>

### Co-browse Limitations

* Co-browse operates within the browser’s active tab and displays a reconstructed Document Object Model (DOM) view, not a live screen share.

* Native browser and OS-level UI elements aren't captured or controlled, including dialogs, pickers, permission prompts, browser menus, extensions, and system notifications.

* Other browser tabs, windows, desktop applications, and full-screen or OS-level content aren't available.

* Agent interactions support basic DOM actions, such as clicking, hovering, scrolling, and entering data in HTML form elements.

* Agent and user views may occasionally fall out of sync due to inherent limitations of the underlying DOM-based technology.

## Sending Emojis

During a conversation, agents can select the **Emoji** icon to react to the conversation.  
<img src="../images/emoji-icon.png" alt="Emoji" title="Emoji" style="border: 1px solid gray; zoom:80%;"/>

## Sending Attachments to Customers

During a conversation, agents can select the **Attachments** icon to share attachments with customers. The system stores the attached files in the Amazon S3 bucket.

!!! Note

    Uploading files with malicious content (for example, HTML scripts) are blocked, irrespective of the file extension. Retry after removing any embedded elements in the attachments.  
<img src="../images/attachment-icon.png" alt="Attachment" title="Attachment" style="border: 1px solid gray; zoom:80%;"/>

## Agent Forms for Handling Sensitive Information

Agents can guide customers to fill in data using agent forms. The agent forms option is an additional security layer that helps customers provide information faster while maintaining confidentiality.  
<img src="../images/secure-forms-button.png" alt="Agent Forms" title="Agent Forms" style="border: 1px solid gray; zoom:80%;"/>

When a user submits information on an agent form, the agent can't directly view the submitted information when trying to open the data in their console.
While the form headers are visible, the data redacts. The system reveals the information to the agents when they select **view**.

There are two ways to secure the agent form:

1. Turn on the toggle during [form creation](../contactcenter/configurations/agent-forms/configure-agent-forms.md#create-an-agent-form) to secure the entire form. . In this case, the **view** icon appears to view masked data in the header with the agent form text.
All headers are visible, and masks only submitted data  
    <img src="../images/agent-form-masked.png" alt="Agent Form Masked" title="Agent Form Masked" style="border: 1px solid gray; zoom:60%;">

2. The system masks specific fields, retaining the redaction per the configuration for that field. The data appears when the agent selects the unmask.  
    <img src="../images/unmask-button.png" alt="Unmask Form" title="Unmask Form" style="border: 1px solid gray; zoom:60%;">

Steps to share an Agent Form:

1. Select **Agent Form**.  
    <img src="../images/agent-form-icon.png" alt="Agent Form Icon" title="Agent Form Icon" style="border: 1px solid gray; zoom:60%;">

2. Select the form and then select **Send Form**.  
    <img src="../images/select-form.png" alt="Select Form" title="Select Form Icon" style="border: 1px solid gray; zoom:60%;">

3. The system sends the form to the customer and the status of the form on the live interaction pane shows **Sent**.  
    <img src="../images/form-sent.png" alt="Form Sent" title="Form Sent" style="border: 1px solid gray; zoom:70%;">

4. A message displays on the console once the customer submits the form and the status of the form shows Filled. Selecting the form/View Form on the confirmation message displays the form.  
    <img src="../images/filled-form-confirmation.png" alt="Form Filled" title="Form Filled" style="border: 1px solid gray; zoom:60%;">

5. Select the **Unmask** icon to view the fields (This applies when the system enables masking during form creation.).  
    <img src="../images/masked-form.png" alt="Masked Form" title="Masked Form" style="border: 1px solid gray; zoom:70%;">

    The agent form fields appear.  
    <img src="../images/unmasked-details.png" alt="Unmasked Form" title="Unmasked Form" style="border: 1px solid gray; zoom:70%;">

    The demonstration shows how you can share an agent form with a customer and view the filled form.  
    <img src="../images/agent-forms-demo.gif" alt="Agent Forms Demo" title="Agent Forms Demo" style="border: 1px solid gray; zoom:70%;">

## Manual PII Redaction

During live chat sessions, the manual redaction feature enables agents to remove or mask sensitive information, including Personally Identifiable Information (PII). This capability lets agents to respond immediately to accidental disclosures and helps prevent the storage or exposure of sensitive data, supporting compliance with data privacy regulations. Administrators can configure this functionality from [Permissions](../user-management/role-management.md#permissions).

Steps to manually redact PII data:

1. Highlight the text you want to redact. The **Redact Data** option appears.  
    <img src="../images/highlight-text.png" alt="Highlight Text" title="Highlight Text" style="border: 1px solid gray; zoom:70%;">
2. Select **Redact Data**.  
    <img src="../images/redact-data-button.png" alt="Redact Data" title="Redact Data" style="border: 1px solid gray; zoom:70%;">
3. In the confirmation prompt, select **Redact Data** again.  
    <img src="../images/confirmation.png" alt="Redact Data Confirmation" title="Redact Data Confirmation" style="border: 1px solid gray; zoom:70%;">  
    The system redacts the selected text.  
    <img src="../images/redacted.png" alt="Redacted" title="Redacted" style="border: 1px solid gray; zoom:70%;">  
    The following demonstration illustrates this process.  
    <img src="../images/redact-data.gif" alt="redaction Demo" title="Redaction Demo" style="border: 1px solid gray; zoom:70%;">  

!!! Note

    * Agents can select and redact only one user message at a time. They can select multiple lines within that message.
    * Manual redaction applies to all digital channels except email.
    * This feature does not support redacting messages in the user's console.
    * Redaction applies to plain text, even if the text is already redacted.

## Snooze

Waiting for customer responses or time spent on information retrieval can result in prolonged conversations and negatively impact agents’ performance metrics like Average Handle Time (AHT). Snooze lets agents to pause the conversation timer and resume it when the agent responds while freeing up slots for additional conversations.

Administrators can configure the snooze functionality from the [Agent Settings](../contactcenter/agent-and-supervisors/agent-management/agent-management.md#snooze).

Steps to snooze a conversation:

1. Select **Snooze** at the top of the live interaction window.  
    <img src="../images/snooze-button.png" alt="Snooze" title="Snooze" style="border: 1px solid gray; zoom:80%;"/>

    !!! Note

        The snooze function is not available if the conversation is overdue or a reply is due from the agent.

2. On the **Snooze Conversation Until** pop-up window, select the snooze duration from the available options or select a custom snooze duration. To select a custom snooze duration, turn on the Custom Snooze toggle and configure the required duration. Agents can choose Today, Tomorrow, or Day After as quick snooze options, or define a custom Date and Time. You can set the maximum snooze date up to 30 days in advance.  
    <img src="../images/custom-snooze-without-note.png" alt="Snooze without note" title="Snooze without note" style="border: 1px solid gray; zoom:70%;">  

    If Administrators turn on Make Snooze Notes Mandatory in [Agent Settings](../contactcenter/agent-and-supervisors/agent-management/agent-management.md#snooze), the Reason for Snoozing dialog box appears. Enter the message to display.  
    <img src="../images/reason-for-snoozing.png" alt="Reason for snooze" title="Reason for snooze" style="border: 1px solid gray; zoom:70%;">  

3. To select a custom snooze duration, turn on the **Custom Snooze** toggle, configure your required snooze duration, and set the snooze duration.  
    <img src="../images/snooze-conversation-till.png" alt="Snooze Conversation Till" title="Snooze Conversation Till" style="border: 1px solid gray; zoom:70%;">

4. Select **Apply**. The system sets the snooze duration, displays a message at the top of the live interaction pane, and sends an intimation to the agent in the live interaction.

    Hovering over a snoozed conversation in the conversation tray displays the snooze duration and the total count of snoozed conversations.  
        <img src="../images/snooze-hover.png" alt="Snooze Hover" title="Snooze Hover" style="border: 1px solid gray; zoom:70%;">  

!!! note "Snooze Behavior"

    * Administrators can control how snoozed interactions behave. When Agent Logout with Snoozed Interactions is enabled, agents can log out while snoozed interactions remain in their personal inbox and resume at the next login. When Reactivation of Snoozed Interactions on User Message is enabled, new user messages automatically reactivate snoozed conversations. When disabled, the agent must resume them manually. Both options support Live Chat, Messaging, and Email.
    * When a supervisor transfers a snoozed conversation, the system opens the snoozed interaction when the new agent accepts it.

## Emails

Agents can view and respond to emails on the console. The emails appear on the console as follows:

**Threaded email structure**: A threaded email structure features a visible distinction between agent and user emails. Previously, emails sent to external clients appeared as separate messages even within the same thread. To resolve this, the system implements a threading logic using Message-ID and Reference headers, ensuring replies are correctly linked to their original email chains. This enables seamless conversation continuity, so both internal users and external recipients view related messages as part of the same thread.  
<img src="../images/threaded-email-structure.png" alt="Threaded Email Structure" title="Threaded Email Structure" style="border: 1px solid gray; zoom:70%;">

**_Agents_**

* Emails display as threaded conversations in email clients.
* Replies from customers automatically map to the correct conversation, reducing confusion.

**_Customers_**

* Emails appear as part of a single, continuous thread, improving readability and context.

**_Supervisors and Admins_**

* Greater consistency between conversation records and customer-facing email threads.

!!! note

    The system stores the metadata for all inbound and outbound messages.

**Collapsible email tiles**: This lets agents to minimize or expand email threads as needed, reducing clutter and improving the organization of the email inbox.  
<img src="../images/collapsible-email-tiles.png" alt="Collapsible Email Tiles" title="Collapsible Email Tiles" style="border: 1px solid gray; zoom:70%;">

Admins can configure this from [Agent settings](../contactcenter/agent-and-supervisors/agent-management/agent-management.md#agent-settings).

**Reply and Reply All**: Agents can select **Reply** to open a response window addressed only to the most recent sender. Clicking **Reply All** opens a response window addressed to all participants in the email thread, including the original sender and all CC’ed recipients.  
<img src="../images/reply-all-email.png" alt="Reply and Reply All" title="Reply and Reply All" style="border: 1px solid gray; zoom:70%;">

**Resend Emails**: The Email Resend feature lets agents and supervisors to resend email interactions directly from the Agent Console. It supports two scenarios:

* Resending the same email content to the same recipient, including formatting and attachments.
* Editing the email before resending, which can include adding missed information, correcting errors, or attaching additional files.

The system links Re-sent emails to the original interaction for audit and traceability, ensuring agents maintain consistent and accurate communication with customers.

Steps to resend an email:

1. Open the email interaction.
2. Select the **Resend** option.  
    <img src="../images/resend-email.png" alt="Resend Email" title="Resend Email" style="border: 1px solid gray; zoom:70%;">

    The email composer opens with the recipient details and original email content prefilled. (Optional) Update the email content.

3. Select **Send**.  
    <img src="../images/resend-email.png" alt="Resend" title="Resend" style="border: 1px solid gray; zoom:70%;">

    * The system sends the re-sent email as a new interaction while linking it to the original interaction. 
    * The interaction log marks the message as **Resent** for clarity.

**Forward Emails**: When a user selects Forward, a new email draft opens with the subject prefixed by `Fwd`. The previous mail information appears on initiating the forward option. This includes all previous attachments, with the option to select which ones to forward. Users can edit recipients, add text, and send the email. The sent message retains headers indicating the forwarded content within the email body.  
<img src="../images/forward-email-button.png" alt="Forward Email" title="Forward Email" style="border: 1px solid gray; zoom:70%;">

**Arrival Summary**: Every email conversation begins with an Arrival summary once an agent accepts it. For more information about the arrival summary, refer to [Arrival Summary](#arrival-summary).  
<img src="../images/email-summary.png" alt="Arrival Summary" title="Arrival Summary" style="border: 1px solid gray; zoom:70%;">

**Distribution**: You can distribute emails to multiple recipients using CC (Carbon Copy) and BCC (Blind Carbon Copy) fields.  
<img src="../images/cc-and-bcc.png" alt="CC and BCC" title="CC and BCC" style="border: 1px solid gray; zoom:70%;">

If [Inline Email ID Suggestions](../contactcenter/configurations/settings/email-settings.md) is enabled, the inline suggestions display in the To, CC, and BCC fields.

**_Agents_**

* Can add or remove recipients dynamically when replying or forwarding emails.
* Send to multiple recipients using comma-separated email IDs.

**_Supervisors/Admins_**

* Configure whether agents can modify distribution lists.

**Standard Responses** (Text editor): Agents can choose from a library of configured standard responses.

1. Select the **Standard Response** icon at the bottom of the email text editor. The count of response templates in each category appears.  
    <img src="../images/standard-response.png" alt="Standard Response Icon" title="Standard Response Icon" style="border: 1px solid gray; zoom:60%;">

2. Select the category to view the standard response templates in that category.  
    <img src="../images/standard-response-library.png" alt="Standard Response Templates" title="Standard Response Templates" style="border: 1px solid gray; zoom:60%;">

3. Select the Standard Response from the list to use that response in the email.  
    <img src="../images/standard-response-filled.png" alt="Send Standard Response" title="Send Standard Response" style="border: 1px solid gray; zoom:60%;">

4. Select **Send**, and then confirm the action in the pop-up window.

**Standard Responses** (Widget): Agents can choose a standard response from the Responses widget as follows:

1. Replace and Append options appear when you add a Standard Response. 
    <img src="../images/replace-append.png" alt="Replace/Append" title="Replace/Append" style="border: 1px solid gray; zoom:60%;">

2. Select **Send**, and then confirm the action in the pop-up window.

    Administrators can enable this feature in the [Email settings](../contactcenter/configurations/settings/email-settings.md).

Replace behavior

When an agent selects Replace, the system replaces the entire editor content with the selected standard response.

For channels that support a subject (such as email):

* Replace with subject updates both the body and subject.  
* Replace (body only) updates only the body.

Append behavior

* When an agent selects Append, the system inserts a line break and adds the standard response as a new paragraph.  
* The system displays Append and Replace only when the editor has content; otherwise, it displays Copy.  
* The system renders and preserves all formatting, placeholders, and variables.

For email with subject support:

* Append with subject replaces the existing subject.  
* Append (body only) appends only the body.

Subject handling

For standard responses with a subject, the system provides:

* Replace (body only)  
* Replace with subject  
* Append (body only)  
* Append with subject

For channels without subject support, the system displays only Replace and Append. Replace with subject applies only to responses with subjects and only for the initial outbound email.

Empty editor behavior

When the editor is empty, the system lets only Copy. The system supports multiple append actions and returns keyboard focus to the editor after each action.

**Attachments**: You can attach files and documents to the email to share relevant information or resources with customers. Attachments appear in a list format. If there are more than three attachments, a **View More** option appears. The system stores attachments received in emails in the Amazon S3 bucket. 

Select the **Attachment** icon to select and upload files.  
    <img src="../images/attachments-compose-bar.png" alt="Attachment Icon" title="Attachment Icon" style="border: 1px solid gray; zoom:70%;">

**Notes**: You can add notes on the interaction (customer feedback, key points, next action, suggestions). This section includes any previous notes added by agents while interacting with the same customer.

To add a new note:

1. Select **Notes**.  
    <img src="../images/notes-icon.png" alt="Notes Icon" title="Notes Icon" style="border: 1px solid gray; zoom:80%;"/>

2. Select **+ Add New Note**.  
    <img src="../images/add-new-note.png" alt="Add New Note" title="Add New Note" style="border: 1px solid gray; zoom:80%;"/>

3. Type the message and select **Save**. A confirmation message appears  
    <img src="../images/notes-created-confirmation.png" alt="Note Added Confirmation" title="Note Added Confirmation" style="border: 1px solid gray; zoom:80%;"/>

4. **Drafts**: If you select the **Close** option on the email editor and there’s content inside, the system preserves mail  as a draft. Drafts are available at the bottom of the console.  
    <img src="../images/draft.png" alt="Drafts" title="Drafts" style="border: 1px solid gray; zoom:80%;"/>

### Outbound Email

Outbound email functionality is a key feature within Contact Center AI designed to streamline communication between agents and customers through email channels. It's crucial to reach out to customers proactively and provide personalized interactions based on their needs and preferences. Expanding omnichannel capabilities lets the system reach customers through multiple channels to address their needs. This helps in seamless follow-up after interactions to guarantee satisfaction and provide timely support whenever required.

#### Send Outbound Email

Steps to send an outbound email:

1. Select the **+** on the right corner of the conversation tray.  
    <img src="../images/button.png" alt="+ option" title="+ option" style="border: 1px solid gray; zoom:80%;"/>

2. Select the **New Mail** option.

3. The email panel appears, and an email conversation appears on the conversation tray. Enter the recipients' Email addresses, such as `john.doe@example.com`.  

4. Select a **Queue** from the dropdown.  

5. Enter the **Subject** and body of the email. The email address appears on the conversation tray and the subject appears as the email thread header.  
6. You can perform the following actions:

    **Send**:

    * Select the **Send** option to send the email.  
        <img src="../images/send-button.png" alt="Send" title="Send" style="border: 1px solid gray; zoom:80%;"/>

        A confirmation appears, and sends the email.  

    **Send & Close**:

    Select the down arrow beside Send and select **Send & Close**. A confirmation appears and sends the email. A disposition window appears.   
        <img src="../images/disposition-sent-mail.png" alt="Disposition Sent Mail" title="Disposition Sent Mail" style="border: 1px solid gray; zoom:80%;"/>
    If Wrap-up Code prediction is enabled, a disclaimer appears requesting users to verify the content before using it.  
        <img src="../images/ai-generated-content.png" alt="AI Generated Content" title="AI Generated Content" style="border: 1px solid gray; zoom:80%;"/>

    !!! Note

        * The send button is activated when all mandatory fields (recipient, subject, queue, and email body) are filled. Sent conversations remain in the agent's conversation tray until closed.

        * Sending an email consumes one slot from the agent's allocation and appears on the Monitor tab.

        * Outbound emails occupy the same slots as any other configured email. Agents can create as many outbound emails as their allocated email slots allow.

    **Draft**:

    Select the **X** on the corner of the email editor window.  
        <img src="../images/x-button.png" alt="X-icon" title="X-icon" style="border: 1px solid gray; zoom:80%;"/>

    The editor window minimizes, and saves the mail as a draft.  
        <img src="../images/draft-minimized.png" alt="Draft Minimized" title="Draft Minimized" style="border: 1px solid gray; zoom:80%;"/>

    Drafts are automatically saved and remain available in the following scenarios:

    1. After an agent logout and subsequent login.
    2. Network interruptions and subsequent re-connections.
    3. If the editor closes, the system saves the current email content as a draft.
    4. The system saves the drafts only after updating the mandatory fields (recipient, subject, queue, and email body).

    The system permits saving multiple drafts for each email conversation. Each draft is identifiable and available within its respective email thread.

    **Delete**:

    Select the **Delete** icon on the left corner of the editor.  
        <img src="../images/delete-button.png" alt="Delete" title="Delete" style="border: 1px solid gray; zoom:80%;"/>

    A confirmation message displays. Select **Delete**. 

## Color Codes

Color codes help in easy identification and better readability of conversations on digital channels.

* The blue dot represents a conversation in which an agent is engaged.  
    <img src="../images/blue-dot.png" alt="Blue Dot" title="Blue Dot" style="border: 1px solid gray; zoom:80%;"/>

* The red dot represents an overdue conversation.  
    <img src="../images/red-dot.png" alt="Red Dot" title="Red Dot" style="border: 1px solid gray; zoom:60%;">

* New email conversations in the conversations tray.  
    <img src="../images/new-email.png" alt="New Email Notification" title="New Email Notification" style="border: 1px solid gray; zoom:60%;">

## Add Notes to Interactions

You can add notes on the interaction (customer feedback, key points, next action, suggestions). This section includes any previous notes added by agents while interacting with the same customer.

To add a new note:

1. Select **Notes**.  
    <img src="../images/interactions-notes.png" alt="Notes" title="Notes" style="border: 1px solid gray; zoom:80%;"/>

2. Select **+ Add New Note**.

3. Type the message and select **Save**.

## Modify Skills in Interactions

Modify skills in a live interaction by selecting the Live Interaction option in [Skill Modification](../contactcenter/agent-and-supervisors/agent-management/agent-management.md#skill-modification):

1. Select the **Add Skills** option on the Skills bar.  
    <img src="../images/add-skills-button.png" alt="Add Skills" title="Add Skills" style="border: 1px solid gray; zoom:80%;"/>

2. Select the necessary skills from the drop-down.  
    <img src="../images/skills.png" alt="Select Skills" title="Select Skills" style="border: 1px solid gray; zoom:80%;"/>

## Transfer Interactions

Contact Center AI lets agents to transfer ongoing conversations to other queues, other agents, or both. The Agent Console displays transfer options according to the [Transfer Destinations](../contactcenter/agent-and-supervisors/agent-management/agent-management.md#transfer-destinations) setting. The example screenshots show that the system enables both queues and agents for transfers.

**Transfer to Another Queue**

To transfer a conversation to another queue when the [Enforce Skill Match for Transfers](../contactcenter/agent-and-supervisors/agent-management/agent-management.md#enforce-skill-match-for-transfers) setting is enabled:

1. Select **Transfer** at the top of the live interaction pane. You can also use the shortcut key **Alt + Shift + T** to open the transfer window.  
    <img src="../images/transfer-shortcut.png" alt="Transfer" title="Transfer" style="border: 1px solid gray; zoom:80%;"/>

2. Search for a queue in the search bar on the **Transfer to** window.
3. Select a queue from the dropdown list. Agents with matching skills appear for the queue during the transfer.  
    <img src="../images/transfer-to.png" alt="Transfer to Window" title="Transfer to Window" style="border: 1px solid gray; zoom:80%;"/>

4. Select **Transfer**. The conversation gets transferred to the selected queue.  
    <img src="../images/conversation-transferred.png" alt="Conversation Transferred" title="Conversation Transferred" style="border: 1px solid gray; zoom:80%;"/>

!!! Note

    * When transferring an interaction to another queue, you need to consider the following rules:
    * The system verifies the valid hours of operation and displays the online queues.
    * If the skill match option is enabled, the destination queue must have agents with the right skills based on the skill match rules. If there are no agents with the required skills, the conversation waits for the maximum wait period assigned to the destination queue and then timeout to the no agents available scenario.

To transfer a conversation to another queue when the [Skill Modification](../contactcenter/agent-and-supervisors/agent-management/agent-management.md#skill-modification) setting is enabled:

1. Select **Transfer** at the top of the live interaction pane. You can also use the shortcut key **Alt + Shift + T** to open the transfer window.  
    <img src="../images/transfer-shortcut.png" alt="Transfer" title="Transfer" style="border: 1px solid gray; zoom:80%;"/>

2. Search for a queue in the search bar on the **Transfer to** window. All matching queues appear.
3. Select the queue and select **Next**.  
    <img src="../images/transfer-to-queue.png" alt="Transfer to Window" title="Transfer to Window" style="border: 1px solid gray; zoom:80%;"/>

4. You can add or delete skills to the interaction before transferring it to another queue.  
    <img src="../images/add-skills.png" alt="Add or Delete Skills" title="Add or Delete Skills" style="border: 1px solid gray; zoom:80%;"/>

5. Select **Transfer**. The conversation transfers to the selected queue.  
    <img src="../images/conversation-transferred-confirmation.png" alt="Conversation Transferred Confirmation" title="Conversation Transferred Confirmation" style="border: 1px solid gray; zoom:80%;"/>

**Transfer to Another Agent**

To transfer a conversation to another agent:

1. Select **Transfer** at the top of the live interaction pane. You can also use the shortcut key **Alt + Shift + T** to open the transfer window.  
    <img src="../images/transfer-shortcut.png" alt="Transfer" title="Transfer" style="border: 1px solid gray; zoom:80%;"/>

2. Search for an agent in the search bar on the **Transfer to** window.
3. Select an available agent.
4. Select **Transfer**. The conversation transfers to the selected agent.  
    <img src="../images/transfer-to-agent.png" alt="Transfer to Window" title="Transfer to Window" style="border: 1px solid gray; zoom:80%;"/>

!!! Note

    If the customer ends the chat before the agent completes the transfer, Contact Center AI drops the transfer, and the conversation isn't assigned to any queue or agent. WebSdk v1.0 supports this feature only for chat conversations.

**Transfer to External Contacts**

An agent can transfer the call to an external contact during a voice interaction. An administrator must enable this feature in [Agent Settings](../contactcenter/agent-and-supervisors/agent-management/agent-management.md#agent-settings) to let external transfer of ongoing customer calls. To transfer a conversation to an external contact from the Agent Console, follow these steps:

1. Select **Transfer** at the top of the live interaction pane. You can also use the shortcut key **Alt + Shift + T** to open the transfer window.  
    <img src="../images/transfer-shortcut.png" alt="Transfer" title="Transfer" style="border: 1px solid gray; zoom:80%;"/>

2. Search for an external contact in the search bar on the **Transfer to** window.
3. Select an available contact.
4. Select **Transfer**. The conversation transfers to the selected contact.  
    <img src="../images/transfer-to-external-contact.png" alt="Transfer to External Contact" title="Transfer to External Contact" style="border: 1px solid gray; zoom:80%;"/>

    !!! Note

        * The outbound transferred call by the agent is a blind transfer.
        * For the agent, the call ends like other interactions. 
        * The agent must add a disposition and perform After Call Work (ACW).

## End Interactions

1. To end an interaction session, select **End** in the _Live Interaction_ pane.  
    <img src="../images/end-button.png" alt="End Interaction" title="End Interaction" style="border: 1px solid gray; zoom:80%;"/>

2. If selecting _End_, you must **confirm** that you want to end the interaction. Select **Yes** to do so, or otherwise, select **No**.  
    <img src="../images/end-interaction-window.png" alt="End Interaction pop-up" title="End Interaction pop-up" style="border: 1px solid gray; zoom:60%;">

    Selecting **_Yes_** ends the session and moves the interaction to _After Call Work_.

### Timer After Caller Disconnects a Voice Call

When a caller disconnects, agents can either call back or end the call. If an agent doesn't take any action, a depleting timer prompts the agent to act within a specified timeframe. By default, this feature is available for existing users. Administrators can enable this functionality from the [Agent Settings](../contactcenter/agent-and-supervisors/agent-management/agent-management.md).

**Timer when the caller disconnects the call**: A depleting timer appears on the live interaction pane, with options to end the call or call back.  
<img src="../images/end-call.png" alt="End Call" title="End Call" style="border: 1px solid gray; zoom:80%;"/>  

**Timer when the caller disconnects during a conference call**: A depleting timer appears on the live interaction pane, with options to close or rejoin the conference call.  
<img src="../images/end-conference-call.png" alt="End Conference Call" title="End Conference Call" style="border: 1px solid gray; zoom:80%;"/>  

The call transitions to After Call Work (ACW) at the end of the configured timeout duration.

### After Call Work (ACW)

If ACW is enabled, then the system manages the conversations based on the ACW configuration:

**Immediate Slot Release**

* Slots free up, and accepts other conversations.
* The close option appears on selecting all the required disposition codes.
* There is no time restriction for selecting the disposition codes and they're available until the agent manually closes them.  
<img src="../images/immediate-slot-release.png" alt="Immediate Slot Release" title="Immediate Slot Release" style="border: 1px solid gray; zoom:80%;"/>

**Timed Slot Release**

* Agents can see a countdown timer when the conversation ends, indicating the time left to provide a disposition.
* The slot becomes available if the agent submits a disposition or when the timer elapses.
* The system generates a disposition code and fills any empty disposition fields when agents don't provide dispositions within the allotted time.  
    <img src="../images/timed-slot-release.png" alt="Timed Slot Release" title="Timed Slot Release" style="border: 1px solid gray; zoom:80%;"/>

* When the disposition timer expires, the system displays a message to the agent.  
    <img src="../images/time-expired-message.png" alt="Time Expired Message" title="Time Expired Message" style="border: 1px solid gray; zoom:80%;"/>

* For conversations transferred to another queue, the system applies the final queue’s disposition mode to determine the required dispositions.

If ACW is disabled the conversation disappears from the agent console at the end of the conversation, freeing the slots for accepting other conversations. Agents don't receive any disposition sets or summary notes related to these conversations.

!!! note 
 
    When ACW is configured under [General Alerts](../contactcenter/performance-management/slas-and-alerts.md#general-alerts), the system triggers an ACW General Alert when the configured condition is met for the specified queue or channel. The alert includes all mandatory details, such as agent name, queue, channel, configured threshold, and actual ACW duration. Users can save, update, or delete ACW configurations from SLA General Alerts without impacting other alert settings. The system delivers alerts to all configured recipients through the selected delivery modes, including email and in-app notifications.

### Dispositions

A Disposition Code is a short label assigned to the outcome of an interaction. [Learn more](../contactcenter/agent-and-supervisors/dispositions/manage-dispositions.md#disposition-codes).

There are two ways to assign a disposition:

1. During the conversation (Dynamic):
    1. Select **+ Add Disposition**.  
        <img src="../images/add-disposition.png" alt="+ Add Disposition" title="+ Add Disposition" style="border: 1px solid gray; zoom:80%;"/>

    2. Select a disposition from the dropdown menu and select **Save**.

    3. The system assigns the disposition. You can either **Transfer** or **End** the conversation.  
        <img src="../images/disposition-added.png" alt="Disposition Added" title="Disposition Added" style="border: 1px solid gray; zoom:80%;"/>

    4. When you select **End**, a confirmation message appears. Select **Yes** to confirm.

    5. The **Disposition & Notes** window appears, and you can make any necessary changes. Select **Close**, and the conversation closes with the disposition attached.  
        <img src="../images/disposition-and-notes.png" alt="Disposition and Notes" title="Disposition and Notes" style="border: 1px solid gray; zoom:80%;"/>

    !!! Note

        If the disposition and description are not completed during the After Call Work (ACW) period, the system automatically closes the conversation with a system-generated disposition.

2. At the end of the conversation:

    1. Select the **Conversation** in your tray.
    2. You must select a **Status** from the following available options:
        * **Resolved**: Select after resolution of customer query.
        * **Abandoned**: Select if the customer has abandoned the conversation and is no longer responding.
        * **Pending**: Select if the query is pending resolution.
        * **Custom**: Administrators can [create custom disposition codes](../contactcenter/agent-and-supervisors/dispositions/manage-dispositions.md#custom-disposition-codes)to address specific business needs. Select according to your use case.  
     Optionally, type a **Description** of your reason for selecting the disposition.
    3. Select **Close** to close the conversation.

#### Intelligent Disposition Code Suggestions

When enabled, agents receive intelligent disposition code suggestions automatically at the end of customer conversations. The feature uses LLM analysis of the full conversation transcript and disposition set metadata to recommend the most appropriate wrap-up code. Suggestions appear prominently in the disposition bar and accepted with one click or overridden manually, ensuring higher accuracy and reduced wrap-up time. [Learn more](../contactcenter/configurations/settings/wrap-up-code-prediction.md).

Steps to receive intelligent disposition code suggestions:

1. Select **End** to close the conversation.

2. The **Disposition & Notes** window opens with suggested disposition codes.  
    <img src="../images/disposition-window.png" alt="Disposition & Notes" title="Disposition & Notes" style="border: 1px solid gray; zoom:70%;">

3. Agents can select a disposition code to accept it, or choose multiple disposition codes if needed, and then select **Close**.  
    <img src="../images/select-and-close.png" alt="Close" title="Close" style="border: 1px solid gray; zoom:70%;">

#### Disposition Handling for Campaigns

* The system processes only the active disposition at the end of the conversation.  
* If the disposition includes a callback, the system posts the scheduled date, time, timezone, and callback type.  
* The system supports both system-initiated and agent-initiated callback types.  

Do Not Call (DNC) handling

* For Do Not Call - This Campaign, the system inserts the contact phone number and a 3-month validity period into the campaign-level DNC list.
* For Do Not Call - Ever, the system adds the contact's phone number and a 3-month validity period to the Global DNC list.
* If a required DNC list isn't configured, the system displays a warning and permits to Continue or Cancel.

    * If the user selects Continue, the system saves the campaign.  
    * At runtime, the system skips saving to the missing DNC list.  

Call-back and call-list handling

* For Call-Me-Later, the system inserts the contact’s phone number. The agent must configure the scheduled date and time.  
    <img src="../images/follow-up-disposition.png" alt="Disposition Details" title="Disposition Details" style="border: 1px solid gray; zoom:70%;">
    
    The system schedules a callback.  
    <img src="../images/follow-up-scheduled.png" alt=Scheduled" title="Scheduled" style="border: 1px solid gray; zoom:70%;">

Additional rules

* Editing dispositions after the conversation ends doesn't change handling.  
* The system logs errors when payloads are invalid or when required lists are missing.  

### Translate Conversations in Real Time

Agents can translate conversations in real time on the live interaction pane. Administrators can enable this functionality from [Translation Configurations](../contactcenter/configurations/settings/translation-configurations.md).

Steps to translate real-time conversations:

1. Select **Translate** on the live interaction pane.  
    <img src="../images/translate-option.png" alt="Translate" title="Translate" style="border: 1px solid gray; zoom:70%;">

2. Select the language from the dropdown. Select **Mark as Default** to make it the default language for translation.  
    <img src="../images/select-language-dropdown.png" alt="Select Language" title="Select Language" style="border: 1px solid gray; zoom:70%;">

3. The conversation translates into the selected language.  
    <img src="../images/translated-conversation.png" alt="Translated Conversation" title="Translated Conversation" style="border: 1px solid gray; zoom:70%;">  
    <img src="../images/summary.png" alt="Summary" title="Summary" style="border: 1px solid gray; zoom:70%;">

## Information Provided to Agents and Customers During Live Interactions

You can interact with customers within the **Live Interaction** area of the Agent Console.  
<img src="../images/information-during-live-interaction.png" alt="Information Provided to Agents during Live Interactions" title="Information Provided to Agents during Live Interactions" style="border: 1px solid gray; zoom:80%;"/>

The **Live Interaction** area provides access to features and information used during live conversations, as follows:

## Arrival Summary

Every conversation begins with an Arrival summary once an agent accepts it.

This section displays the live interaction summary with the following details:

* **Agent Name**: Identifies the agent who is handling the live interaction.
* **SUMMARY**: Conversation Summary leading up to the transfer. For multiple transfers, the summary of all transfers appears.
* **Queue**: Indicates the queue in which the system places the conversation.
* **Wait Time**: This shows the time that the chat has been waiting for an agent to respond.
* **Intent**: Shows the customer’s primary purpose for initiating the live interaction.
* **Sentiment**: Captures the customer sentiments based on their responses.  
    <img src="../images/arrival-summary.png" alt="Arrival Summary" title="Arrival Summary" style="border: 1px solid gray; zoom:70%;">

After accepting the conversation, all interactions by the agent displays after the arrival summary. If generating the arrival summary takes time, a loading indicator appears until the summary is ready. After an agent transfer, Agent 2 sees the entire summary of the prior conversation, displayed immediately after the last message from Agent 1.

!!! Note

    When sentiment analysis is configured but no utterances are available to analyze, the Sentiment field in the arrival summary displays "Unavailable" instead of remaining blank.

### Refreshing Bot-Customer Interactions

A reload option appears at the top of the conversation transcript when the bot-customer conversation transcript is missing. Selecting Reload displays the missing information.  
<img src="../images/reload-button.png" alt="Arrival Summary" title="Arrival Summary" style="border: 1px solid gray; zoom:60%;">

## Typing Chat Indicator

When the agent types a response during a chat conversation with a customer, the customer’s chat window displays three dots, indicating that the agent is responding to the customer.

Do the following to enable the typing indicator for chat conversations:

1. To integrate bots chat capability into custom applications, install WebSDK 3.0 on your server. WebSDK 3.0 is a set of libraries that offer a quick and convenient way to do this. Refer to the [installation instructions](https://github.com/Koredotcom/web-kore-sdk/tree/v3/11.20.0) for additional information on installing WebSDK 3.0.
2. To receive read receipts, and typing indicators, install the AgentDesktop plugin in WebSDK 3.0. The Agent Desktop plugin lets the user to interact with the human agent through the AI Agent and supports the following features:

    * Audio Calling
    * Video Calling
    * Co-browse
    * Screen Sharing

    Refer to the [installation instructions](https://github.com/Koredotcom/web-kore-sdk/tree/v3/11.20.0/docs/plugins/agent-desktop) for additional information on installing the plugin.

## Request Supervisor Support

Agents can send requests to the appropriate supervisors for assistance. The supervisor receives a notification and can take necessary actions to resolve the issue. Administrators can configure this functionality from [Permissions](../user-management/role-management.md#permissions)

Steps to request supervisor assistance:

1. Se;ect ⋮ at the corner of the Live Interaction pane, and select **Request Supervisor Support**.  
    <img src="../images/ellipsis-button.png" alt="Request Supervisor Support" title="Request Supervisor Support" style="border: 1px solid gray; zoom:70%;"> 

2. The agent can request support from a specific supervisor or multiple supervisors. The supervisor list displays either all supervisors or only those assigned to the relevant skill.  
    <img src="../images/supervisor-select.png" alt="Select Supervisor" title="Select Supervisor" style="border: 1px solid gray; zoom:70%;">

3. A notification displays, and sends the request to supervisors and have their status set to Available.  
    <img src="../images/success-message.png" alt="Success Message" title="Success Message" style="border: 1px solid gray; zoom:70%;">

4. A notification displays to the supervisor. Supervisors can manage the notifications [Learn more](../console/manage-layout.md#notifications).  
    <img src="../images/agents-page.png" alt="Supervisor Notification" title="Supervisor Notification" style="border: 1px solid gray; zoom:70%;">

5. The Internal Chat window appears after accepting the agent’s request. The supervisor can support the agent on the internal chat.  
    <img src="../images/supervisor-internal-chat.png" alt="Supervisor Internal Chat" title="Supervisor Internal Chat" style="border: 1px solid gray; zoom:70%;">

## Real Time Sentiment Capture

Agents can view customers' real-time sentiments during conversations (Chat, Voice, and Email) on the [Conversation Tray](../console/conversation-tray.md#customer-sentiment) and the Live Interactions pane. Administrators can enable the real-time sentiment capture functionality. [Learn more](../contactcenter/configurations/settings/real-time-sentiment-analysis.md).

**Chat**:  
<img src="../images/console-sentiment.png" alt="Chat Sentiment" title="Chat Sentiment" style="border: 1px solid gray; zoom:80%;"/>  

**Voice**:  
<img src="../images/sentiment-voice.png" alt="Voice Sentiment" title="Voice Sentiment" style="border: 1px solid gray; zoom:80%;"/> 

**Email**:  
<img src="../images/sentiment-email.png" alt="Email Sentiment" title="Email Sentiment" style="border: 1px solid gray; zoom:80%;"/> 

When agents select the sentiment indicator, a graph appears, visually representing emotional fluctuations throughout the interaction. Agents gain immediate insight into customer emotions. This insight helps them adjust their tone, approach, and responses, leading to improved empathy and more effective issue resolution. Agents can also customize the graph to focus on specific timeframes or sentiment ranges, allowing deeper analysis when needed.  
<img src="../images/sentiment-analysis-graph.png" alt="Sentiment Graph" title="Sentiment Graph" style="border: 1px solid gray; zoom:80%;"/> 

## Stacked Messages, Timestamp, and Read Status

* Any message sent by an agent displays along with a date and timestamp.
* If the customer doesn't respond to the first message sent by an agent, the message displays a timestamp, and the following messages  won't show a timestamp until the clock minute changes. For example, If an agent sends a message at 11:30:24, the second message at 11:30:36, the third message at 11:30:45, and the fourth message at 11:31:08, then the first three messages get stacked under one timestamp, and the fourth message has a different timestamp.
* If the customer responds in the same minute, the response displays the date and timestamp. The responses from the customer only show a timestamp once the clock minute changes.
* Agents can see the read status on the last message sent. If the messages get stacked, the read status appears only against the most recent one.  
<img src="../images/stacked-messages.png" alt="Stacked Messages, Timestamp, and Read Status" title="Stacked Messages, Timestamp, and Read Status" style="border: 1px solid gray; zoom:80%;"/>

## Behavior When Login Prep Status is Enabled

A message appears on the console for the duration configured on the [Agent Status](../contactcenter/agent-and-supervisors/agent-management/agent-management.md#agent-status-management) page. This status lets an agent to prepare themselves before they start receiving interactions.  
<img src="../images/login-prep-status.png" alt="Login Prep Status Enabled" title="Login Prep Status Enabled" style="border: 1px solid gray; zoom:80%;"/>

<img src="../images/login-prep.png" alt="Login Prep Status" title="Login Prep Status" style="border: 1px solid gray; zoom:80%;"/>

At the end of the Login Preparation time slot, the system automatically marks the agent as ‘Away,’ and a pop-up message appears with the following content:  
<img src="../images/marked-as-away.png" alt="Marked as Away" title="Marked as Away" style="border: 1px solid gray; zoom:60%;">

Agents can choose the following options:

**Mark as Available** - Selecting this option changes an agent’s status to Available.

**Keep Away Status** - Selecting this option keeps the status as Away. If agents select Keep Away Status, they remain in the ‘Away’ state with a notification displayed for the ‘Away’ status. Agents can mark themselves as ‘Available’ when they're ready to receive conversations.

## Behavior During Active Interactions

### If Auto Answer Is Enabled, Transfer and End are Disabled Until the First Agent Response

If the Auto Answer mode is enabled in [Agent Settings](../contactcenter/agent-and-supervisors/agent-management/agent-management.md#voice), the Transfer/End buttons don't display on the Live Interaction pane until the assigned agent sends the first message.

This is what the Agent Console looks like **before the first message** from the agent:  
<img src="../images/before-first-message-from-agent.png" alt="Before First Message From Agent" title="Marked as Away" style="border: 1px solid gray; zoom:80%;"/>

This is what the Agent Console looks like **after the first message** from the agent:  
<img src="../images/after-first-message-from-agent.png" alt="After First Message From Agent" title="After First Message From Agent" style="border: 1px solid gray; zoom:80%;"/>

### Behavior When an Agent Changes Their Status

A warning message displays if an agent changes their status to **_Away_** or a custom status tagged to _Away_ during an active interaction.  
<img src="../images/set-status-to-away.png" alt="Set Status to Away" title="Set Status to Away" style="border: 1px solid gray; zoom:50%;">

### Behavior When an Agent Tries Logging Out

Contact Center AI doesn't permit agents to log out during an ongoing conversation.

If an agent tries to log out during an ongoing conversation, Contact Center AI prevents the agent from logging out without transferring or closing the conversation. A pop-up window displays along with the following message:

If an agent logs out suddenly (the browser closes or the system crashes, for example), then the counter for Agent inactivity starts and after the threshold, any active conversations get assigned to the Queue.  
<img src="../images/logout-restricted.png" alt="Logout Restricted" title="Logout Restricted" style="border: 1px solid gray; zoom:50%;">

### Behavior When an Agent Doesn't Accept or Send a Response Within a Specified Time

If an agent doesn't accept or send a response within a specified time, the system automatically changes the status to **Away (Idle)**.
This status isn't available for selection by an agent.  
<img src="../images/away-idle.png" alt="Away (Idle)" title="Away (Idle)" style="border: 1px solid gray; zoom:80%;"/>

### Behavior When No Agents are Available

The system keeps conversations in the queue until they reach the queue’s maximum wait time when there are no logged in agents.
After the queue’s maximum wait time expires, the system triggers the [No Agents Available](../contactcenter/flows-and-routing/conditional-flows.md#no-agents-available-flow)" flow. The system enables this behavior at the account level for new accounts, and it applies to all channels.
For existing accounts, the existing routing logic is applicable. For accounts wanting to modify their routing logic, contact Support.

## CSAT Survey

The CSAT (Customer Satisfaction) survey is essential for contact centers because it provides valuable feedback on customer satisfaction levels, enabling continuous improvement of service quality.

CSAT surveys trigger based on the scenarios configured by administrators/supervisors while [Creating a Survey](../contactcenter/configurations/surveys/configure-surveys.md#create-a-survey):

* **Show to Everyone**: When administrators configure this scenario, the system automatically triggers a survey for every completed interaction between an agent and a customer on digital or voice channels.
* **Show to Every nth User**: When administrators configure this scenario, the system automatically triggers a survey for every completed nth interaction between an agent and a customer on digital or voice channels. For example: If the set frequency is 2, then the system triggers the survey for every second customer.
* **Agents can trigger**: When administrators configure this scenario, agents can trigger a survey at any point during the interaction:
    * Select **Send Survey** on the right corner. Th s highlights the send survey and a survey icon appears on the **End** icon in the live interaction pane.  
        <img src="../images/csat-button.png" alt="CSAT" title="CSAT" style="border: 1px solid gray; zoom:70%;">

    * The system triggers the survey to the customer when the agent selects End with the survey selected.

    * When you select Auto Trigger Survey, the system keeps the option disabled by default. Agents must explicitly disable it to trigger surveys automatically, and they can turn it off when needed.

For scenarios where the agent actively participates in interactions and the interactions end, the feedback from surveys contributes to their CSAT scores.

The system also triggers CSAT surveys in scenarios when there are no active participants:

* Outside hours of operation
* No Agents Available flow
* Agent/Customer side terminations or system terminations due to user inactivity
* Sub-flows (No agents flow/Out of hours flow)

For these scenarios, the system assigns the CSAT scores to the interaction.

### Supported scenarios for CSAT in voice channels

| **Scenario** | **Description** |
|---------|-------------|
| Inbound and outbound calls | The system triggers CSAT at the end of any standard inbound or outbound voice interaction. |
| Inbound or outbound calls + internal agent transfer | When agents transfer a call internally, the system presents the CSAT survey after the final agent interaction. |
| Inbound or outbound calls + callback triggered by agent | If an agent initiates a callback and the interaction completes, the system triggers a CSAT survey afterward. |
| Inbound or outbound calls + internal agent consult involved | When an agent consults another internal agent, the system presents the CSAT survey after the interaction ends. |
| Inbound or outbound calls + conference (more than two internal agents or supervisor) | When the call involves conferences with multiple internal agents or supervisors, the system applies CSAT once the interaction concludes. |
| Inbound call + courtesy callback | When the system triggers a courtesy callback, it presents the CSAT survey at the end of the callback interaction. |

!!! note 
 
    CSAT surveys do not apply to inbound or outbound calls when the customer interacts with external agents or when an external consult occurs during the call. Only interactions handled fully within the internal agent ecosystem qualify for CSAT.

### Viewing CSAT scores submitted by users

When callers complete CSAT surveys, the system automatically captures and stores their feedback and scores for review.

How to view CSAT scores

1. Navigate to the [Interactions Dashboard](../analytics/overview/conversations.md).

2. Open the interaction for which you want to view CSAT details.

3. Select the Details tab to view all interaction information.

4. If the caller completed a CSAT survey, the CSAT Score field appears in the Details tab, as shown in the example.  
    <img src="../images/insights-to-logs-csat.png" alt="CSAT Score" title="CSAT Score" style="border: 1px solid gray; zoom:70%;">

This view enables supervisors and administrators to assess caller satisfaction and evaluate agent performance.