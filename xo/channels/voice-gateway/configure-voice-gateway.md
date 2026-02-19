# Getting Started and Basic Configuration

Voice Gateway is a comprehensive voice automation solution that manages inbound call automation for Contact Center AI. It integrates with existing voice systems or uses the native voice processing capabilities, enabling seamless transitions between automated and human interactions within the XO Platform.

This section covers the fundamental steps required to set up and configure your Voice Gateway for basic operation.

Go to The Product (For example, Automation AI/ Contact Center AI) > Flows & Channels > Channels > Voice Gateway.  
<img src="../images/vg-page.png" alt="Voice Gateway Page" title="Voice Gateway Page" style="border: 1px solid gray; zoom:80%;"/>

## Configuration

### Buy New Phone Number

Steps to buy a new phone number:

1. Select the **Phone Numbers** tab and then select **Buy New Phone Number**. You can configure a custom local or toll-free number by selecting **Get New Phone Number** on the **Phone Number** window.  
<img src="../images/buy-phone-number.png" alt="Get New Phone Number" title="Get New Phone Number" style="border: 1px solid gray; zoom:70%;">

    1. Select a country in the **Country Name** field.
    2. Select either the **Local** or **Toll-Free Number** option.
    3. Select the **State**.
    4. Enter the **Area Code**.
    5. After configuring the fields, Contact Center AI displays the monthly fee and the operational charge per minute. 

2. Configure an available number with the following steps:

    1. Select **Get Number**.
    2. On the **Forward to Phone Number** page, select whether the number is reserved for Inbound Calls, Outbound Calls, or both.  
    3. Select an App for outbound calls from the dropdown. AgentAI triggers this app when the agent makes an outbound call with this phone number.  
        <img src="../images/phone-number.png" alt="Forward To Phone Number" title="Forward To Phone Number" style="border: 1px solid gray; zoom:60%;">
    4. Select **Done**. A success confirmation message appears.
    5. You can now call this number to test your Use Cases.
    6. When ready to go live, forward the calls you receive to this phone number or use this number as your customer support number.

!!! Note

    This feature is only available when using our Twilio account. It's not supported for SIP trunk setups.

### Purchasing toll-free numbers

Voice Gateway doesn't support direct toll-free number purchases due to regional regulations and documentation requirements. All toll-free numbers require manual verification and regulatory approval.

To purchase a toll-free number:

1. [Contact Support](https://support.kore.ai) and specify the required country or region.  
1. Support guides you through the required documentation requirements and completes procurement through Twilio.  
1. Configure the [SIP trunk](#steps-to-configure-sip-trunk) after purchase.  
1. The number appears in the SIP DID numbers list-[Create Start Flows](../../flows/create-flows.md#create-a-start-flow) and associate them with the toll-free number.

Required documentation varies by region and may include business registration documents, proof of address, and letters of authorization. Lead times vary by country based on local regulatory approval timelines.

!!! note 
     
    Lead times vary by country and depend on local regulatory approval timelines.

### Attach Flow

Steps to attach a flow to the phone number:

1. Select **+ Attach Flow**. Hovering over the pie icon displays **No Flow Attached**.

2. Select a **Start Flow** you want to add to this number and select **Done**. You can add a start flow by clicking **+ New Start Flow**. [Learn more](../../flows/create-flows.md#create-a-start-flow).

3. The attached flow appears. Hovering over the pie icon displays **Configured**.

### Edit a Phone Number

Steps to edit a previously added phone number:

1. Select **︙** and then select **Update**.

2. On the **Forward to Phone Number** page, select **Change**.

3. Make the necessary edits, and select **Done**. A success confirmation message appears.

### Delete a Phone Number

Deleting a phone number means stopping all services associated with it. If you remove a phone number and want to add it back later, you may be unable to do so if another user has selected it.

Steps to delete an existing phone number:

1. Select the **︙**, and select **Delete**.

2. Select **Delete** to confirm your choice.  

3. Alternatively, select **Update**, go to the **Forward to Phone Number** window, and select **Remove**. A success confirmation message appears.

    !!! Note

        The phone number cannot be deleted if there are active voice campaigns or flows attached to the channel.

### SIP Trunk Setup

This option is useful when transferring calls to Contact Center AI from a toll-free or local phone number using Session Initiation Protocol (SIP) in the IVR system.

Under the SIP Trunk tab, you can configure the network IPs and domains, DID number, SIP transport protocol, SIP credentials (optional), and Inbound/Outbound direction for phone numbers while the SIP URI is pre-configured.

Agent AI supports real-time audio streaming through two primary methods:  

* **SIPREC (SIP Recording)**: Agent AI acts as a SIPREC server, receiving duplicated audio streams from the contact center platform or a Session Border Controller (SBC).

* **WebSocket Audio Streaming**: For cloud-native platforms like Genesys AudioHook, Agent AI subscribes to real-time audio feeds over secure WebSocket connections.

### Steps to configure SIP Trunk

1. Select **Configure SIP Trunk**. 

2. On the **Configure SIP Trunk** page, configure the following:  
    1. **Product Selection**: Select the product for SIP Trunk configuration. You can select from the following options:
        * <a href="#ccai">Contact Center AI</a>
        * <a href="#agentai">Agent AI</a>

        <span id="ccai">If you select **Contact Center AI**</span>:

        * **SIP URI**: This is a pre-configured field. A copy option enables you to copy the SIP URIs.
        * **Network**: To configure the Network, you can select one of the following:
            * Under **List of IP Address**, type the values for **Incoming IP Address** in the textbox.  
            <img src="../images/sip-uri.png" alt="SIP Trunk Setup" title="SIP Trunk Setup" style="border: 1px solid gray; zoom:80%;"/> 

            * Under **Domain Name**, provide the following:
                * **Fully Qualified Domain Name (FQDN)**: The domain name specifies all domain levels, including the top-level domain and the root zone. [Learn more](./../../channels/voice-gateway/deployment-and-operations.md#ips-ports-and-protocols).
                * **DNS (Domain Name System) Resolve Method** (Optional): Select an option from the list to translate IP addresses to domain names for resolution when the hostname associates with multiple IP addresses. You can choose a-record, srv, naptr, or ms-lync.  
                <img src="../images/dns-resolve-method.png" alt="DNS Resolve Method" title="DNS Resolve Method" style="border: 1px solid gray; zoom:80%;"/>

            * Under **MS Teams**, provide a **Fully Qualified Domain Name** (the domain name that specifies all domain levels, including the top-level domain and the root zone).  
            <img src="../images/ms-teams.png" alt="MS Teams" title="MS Teams" style="border: 1px solid gray; zoom:80%;"/>  

        * (Optional) By default, the system selects **E.164 Syntax**. Selecting this option prepends a + before the DID number.  

        * Under **Direct Inward Dialing (DID) number**, you can enable virtual phone numbers (SIP trunk numbers) that route calls to your existing telephone lines. You can configure SIP trunks by entering DID numbers using wildcard patterns (for example, `123*`) to automatically handle multiple similar DIDs without listing each one individually. On configuring two wildcard patterns for different experience flows within an application, and a caller dials a number that matches both patterns, the system triggers the experience flow associated with the pattern that matches the most digits.  
        
            Example:

            Map the DID numbers `7896*` and `789654*` to Experience Flow 1 and Experience Flow 2, and dial `78965478`, the system triggers Experience Flow 2, as `789654*` matches more digits than `7896*`.
        * **DTMF (Dual-Tone Multi-Frequency) Type**: (Optional) Select the DTMF type. RC2833 is the default selection.
        * Select an option from the list for **SIP Transport Type**. This field sets a protocol to route SIP traffic to servers and other endpoints. The available options are *TCP*, *UDF*, and *TLS*.
        * (Optional) Set the **SIP Credentials** (username and password) to access your SIP trunk setup account.
        * Under **SIP Termination URI**, enter the **IP Address**/**Domain Name**.

        !!! note "Termination URL"

            Configure the termination URL on your SIP trunk to enable outbound calls.

        * **Option Ping**: When selected, the system verifies access to the IP addresses. The system selects this option by default.   

        * Enter the **SIP Headers**. You can include all available agent data in the SIP headers, enabling customers to use only the parameters relevant to their needs. The system lists the parameters as key-value pairs:
            * X-AgentName: {{agentName}}
            * X-AgentPhoneNumber: {{agentPhoneNumber}}
            * X-AgentEmailID: {{agentEmailId}}
            * X-AgentGroup: {{agentGroup}}
            * X-AgentCustomID: {{agentCustomId}}
            * X-AgentNickName: {{agentNickName}}
            * X-QueueName: {{agentQueue}}
            * X-AgentFirstName: {{agentFirstName}}
            * X-AgentLastName: {{agentLastName}}

            !!! note

                The caller number specified in the [Script Task](../../flows/node-types/script-task.md) is passed through the SIP headers when a third-party desktop application transfers the call to an agent. 

        <span id="agentai">If you select **Agent AI**</span>: 

        **Select the SIP Trunk connection method**: Select the method based on your third-party vendor’s requirements (<a href="#siprec">SIPREC</a> or <a href="#websocket">WebSocket</a>). 

        * <span id="siprec">If you select **SIPREC**</span>:
            * **SIP URI**: This is a pre-configured field. A copy option lets you to copy the SIP URIs.
            * **Network**: To configure the Network, you can select one of the following:
                * Under **List of IP Address**, type the values for **Incoming IP Address** in the textbox.
                * Under **Domain Name**, provide the following:
                    * **Fully Qualified Domain Name (FQDN)**: The domain name specifies all domain levels, including the top-level domain and the root zone. [Learn more](./../../channels/voice-gateway/deployment-and-operations.md#ips-ports-and-protocols).
                    * **DNS Resolve Method** (Optional): Select an option from the list to translate IP addresses to domain names for resolution when the hostname associates with multiple IP addresses. You can choose a-record, srv, naptr, or ms-lync.
            * **Agent AI Initiated transcription**: Enable or disable auto transcription. When disabled, transcription starts automatically when the SBC receives an RTP stream.
            * **Record the calls**: Enable or disable call recordings for third-party Agent Desktop integrations. Access these recorded calls using a [public API](../../apis/contact-center/api-list.md#call-recording-apis).
            * (Optional) By default, the system selects **E.164 Syntax**. Selecting this option prepends a + before the DID number.
            * **Siprec Identifier**: Enter Siprec identifier values.
            * **DTMF Type**: (Optional) Select the DTMF type. RC2833 is the default selection.
            * Select an option from the list for **SIP Transport Type**. This field sets a protocol to route SIP traffic to servers and other endpoints. The available options are *TCP*, *UDF*, and *TLS*.
            * (Optional) Set the **SIP Credentials** (username and password) to access your SIP trunk setup account.
            * Under **SIP Termination URI**, enter the **IP Address**/**Domain Name**.
            * **Call control parameters**: Define the parameters to control the call behavior. Select **Add Parameter**, enter the **Parameter Name** and **Value**, and select **Save**. [Learn more](./../../channels/voice-gateway/speech-customization.md#introduction-to-call-control-parameters).
            * Enter the **SIP Headers**. You can include all available agent data in the SIP headers, enabling customers to use only the parameters relevant to their needs. The system lists the parameters as key-value pairs:
                * X-AgentName: {{agentName}}
                * X-AgentPhoneNumber: {{agentPhoneNumber}}
                * X-AgentEmailID: {{agentEmailId}}
                * X-AgentGroup: {{agentGroup}}
                * X-AgentCustomID: {{agentCustomId}}
                * X-AgentNickName: {{agentNickName}}
                * X-QueueName: {{agentQueue}}
                * X-AgentFirstName: {{agentFirstName}}
                * X-AgentLastName: {{agentLastName}}  
                <img src="../images/agentai-siprec-selection.png" alt="agentai-siprec-selection" title="agentai-siprec-selection" style="border: 1px solid gray; zoom:70%;">

        * <span id="websocket">If you select **WebSocket**:</span>

            * **Connection URL (Generate URL)**: Copy the auto generated URL and paste it into your third-party desktop configuration settings.  
            * **Agent AI Initiated transcription**: Turn on or turn off auto transcription. When turned off, transcription starts automatically when the SBC receives an RTP (Real-time Transport Protocol) stream. 
            * **Record the calls**: Enable or disable call recordings for third-party Agent Desktop integrations. Access these recorded calls can using a [public API](../../apis/contact-center/api-list.md#call-recording-apis). 
            * **Call control parameters**: Define the parameters to control the call behavior. Select **Add Parameter**, enter the **Parameter Name** and **Value**, and select **Save**. [Learn more](./../../channels/voice-gateway/speech-customization.md#introduction-to-call-control-parameters).

3. Select **Next**.

4. On the **Forward to Phone Number** window, reserve the phone numbers for **Inbound Calls**, **Outbound Calls**, or both by selecting the appropriate options. 
5. Select **Save**.  

    Wait for up to 10 minutes after saving for the IPs to be whitelisted.  

6. The selected information appears on the SIP Numbers tab.

### Attach a Flow

Steps to attach a flow to the SIP Number:

1. Select **+ Attach Flow**. Hovering over the link icon displays **No Flow Attached**.  

2. Select a **Start Flow** to add to individual numbers and select **Done**. You can add a start flow by selecting **+ New Start Flow**. [Learn more](../../flows/create-flows.md#create-a-start-flow).

3. The attached flows appear. A pie icon appears under the attached flows. Hovering over the pie icon displays **Configured**.  

!!! Note

    You cannot attach channels to the Default Welcome Voice flow or Default Welcome Chat flow. Channels already attached to these flows continue to function as configured. However, if a channel is reattached to a different flow, it cannot be reattached to a Default Welcome Voice flow or Default Welcome Chat flow.

### Edit a SIP Number

Steps to edit a previously added SIP number:

1. Select **︙** and then select **Update**.  

2. Make the necessary changes on the Transfer from IVR page, and select **Next**.  

3. Make the necessary changes on the Forward to Phone Number page, and select **Save**. A success confirmation message appears.

### Delete a SIP Number

Deleting a SIP number means stopping all services associated with it.

Steps to delete a SIP number:

1. Select **︙** and then select **Delete**.  

2. On the pop-up, select **Delete** to confirm your choice.  

### Best Practices

#### Voice Calls - Failures and Fallback Handling

This document outlines the comprehensive failure handling and fallback mechanisms available for voice calls in the platform. The system provides three distinct layers of failure handling to ensure robust call management and graceful degradation in the event of issues.

The failure handling mechanisms are designed to address different types of failures at various stages of the call lifecycle, from initial call establishment to ongoing conversation management and error recovery.

Failure Handling Mechanisms

1. App-Level Settings - Answer Call on Bot Response

Purpose

The "Answer Call on Bot Response" functionality controls the timing of call answering behavior. When enabled, the system delays answering the call until the first AI Agent response is prepared and ready for delivery.

Configuration

Location: App-level settings

AI for Service > App Settings > Advanced Settings > System Settings.  

* **Default Value**: `false` (disabled)

Behavior:  

* **Enabled (`true`)**: Call is answered only when the first AI Agent response is ready.  
* **Disabled (`false`)**: Call is answered immediately, with AI Agent response preparation occurring after call establishment.

Use Cases

* **SIP-Specific Error Handling**: Ideal for systems requiring SIP response codes for failure detection.  
* **Source System Integration**: Enables upstream systems to handle AI Agent unresponsiveness through standard SIP signaling.  
* **Quality Assurance**: Ensures users only hear prepared, ready responses.

Technical Benefits

* Prevents dead air or silence during AI Agent response preparation.  
* Provides clear SIP signaling for upstream system integration.  
* Enables proactive failure detection before call establishment.

Cons

Configuring this setting results in frequent call drops if we've many script/service nodes, which delays the initial AI Agent response and prevents answering the call.

2. Experience Flow Settings - Bot No Input Section

Purpose

The Bot No Input section provides configuration options for handling scenarios where the AI Agent becomes unresponsive after a successful initial response.

Location: Experience Flow → Bot No Input Section → BotNoInputGiveUp

AI for Service > Contact Center AI > Start Flows > Create a ‘New Start Flow’ or update an existing ‘Start Flow’  
<img src="../images/bot-no-input.png" alt="Bot no Input" title="Bot no Input" style="border: 1px solid gray; zoom:70%;">

Available Options

* **End Call**: Automatically terminates the call when the system detects the AI Agent's unresponsiveness.  
* **SIP URI Target Transfer**: Transfers the call to a specified SIP URI target.

Operational Behavior

* **Trigger Condition**: The AI Agent fails to respond within the configured timeout interval.  
* **Prerequisite**: First AI Agent response must have been successfully delivered.  
* **Detection Method**: Timeout-based monitoring of AI Agent responsiveness.

Configuration Parameters

* **Timeout Interval**: Configurable duration for AI Agent response detection.  
* **Action Type**: End call or transfer to target.  
* **SIP URI Target**: Destination for call transfer (On selecting the transfer option).

3. Automation Node Error Handling - OnError Path

Purpose

Provides explicit error handling for various types of system failures that can occur during call processing, including dialog flow errors, ASR (Automatic Speech Recognition) failures, and TTS (Text-to-Speech) errors.

Supported Error Types

* **Dialog Flow Errors**: Task failure events and flow execution errors.  
* **ASR Errors**: Speech recognition failures and timeout issues.  
* **TTS Errors**: Text-to-speech synthesis failures.  
* **Bot Failures**: Explicit AI Agent processing errors.

Configuration

Location: Experience Flow → Automation Node → OnError Path

AI for Service > Contact Center AI > Start Flows > Add an Automation Node > Error Handling.  

* **Trigger Events**: System-detected errors and exceptions.  
* **Response Actions**: Configurable error handling workflows.

**Error Handling Capabilities**

* **Custom Error Workflows**: Define specific actions for different error types.  
* **Graceful Degradation**: Maintain call continuity during error conditions.  
* **User Communication**: Provide appropriate feedback to callers during error scenarios.

Implementation Guidelines

When to Use Each Mechanism?

Use App-Level Settings When:

* Requires integration with SIP-aware source systems.  
* Upstream failure detection and handling capabilities exist.  
* Call quality requirements mandate prepared responses only.  
* Needs SIP response codes for system integration.

Use Experience Flow Settings When:

* First AI Agent response delivery is successful.  
* Requires ongoing AI Agent responsiveness monitoring.  
* Needs fallback targets or graceful call termination.  
* Prioritizes user experience continuity.

Use OnError Path When:

* Requires comprehensive error handling.  
* Multiple error types need specific handling.  
* Custom error workflows are necessary.  
* System resilience is a priority.

Configuration Priority

* **Always Configure**: OnError path handling (universal applicability).  
* **Conditionally Configure**: App-level settings (based on SIP integration needs).  
* **Scenario-Specific**: Experience flow settings (based on user experience requirements).

Configuration Recommendations

* **Always implement OnError path handling** for comprehensive error coverage.  
* **Evaluate SIP integration requirements** before enabling AI Agent-level settings.  
* **Define clear timeout values** for AI Agent responsiveness detection.

Use Case Scenarios

Scenario 1: SIP-Integrated Environment

Configuration:

* App-Level: Answer Call on Bot Response = true  
* Experience Flow: BotNoInputGiveUp = Transfer to SIP URI  
* OnError Path: Custom error handling workflow

Behavior:

* Call answered only when the bot response is ready.  
* SIP codes are available for the upstream system handling.  
* Unresponsive bot triggers transfer to fallback target.  
* Explicit errors are handled through a custom workflow.

Scenario 2: Direct Call Environment

Configuration:

* App-Level: Answer Call on Bot Response = false  
* Experience Flow: BotNoInputGiveUp = End call  
* OnError Path: Standard error messaging

Behavior:

* Immediate call answering for a better user experience.  
* AI Agent unresponsiveness results in call termination.  
* Errors handled with standard user messaging.

Scenario 3: High-Availability Environment

Configuration:

* App-Level: Answer Call on Bot Response = true  
* Experience Flow: BotNoInputGiveUp = Transfer to backup system  
* OnError Path: Comprehensive error recovery workflows

Behavior:

* Quality-assured response delivery.  
* Multiple fallback layers for different failure types.  
* Maximum call continuity and user experience preservation.

## ASR and TTS

### Voice Preferences

This section outlines the steps to configure Automatic Speech Recognition (ASR) and Text-to-Speech (TTS) for your Voice Gateway. You can configure the voice preferences to personalize the ASR Engine and the voice that plays for your TTS conversions by going to the Voice Preferences tab and selecting **Manage**.  
    <img src="../images/voice-preference.png" alt="Voice Preferences" title="Voice Preferences" style="border: 1px solid gray; zoom:80%;"/>

Steps to configure Voice Preferences:

1. Select the following on the Voice Preferences window:
    1. Language
    2. Automatic Speech Recognition Engine (ASR)
        1. ASR
            You can choose between
            * Microsoft Azure Speech Services,
            * Google Cloud Speech-to-Text,
            * Amazon Transcribe.
        2. Dialect
        3. ASR Model [BETA] (Advanced Setting)
        4. Primary ASR Configuration (Advanced Setting)
        5. Fallback ASR Configuration (Advanced Setting)
    3. Text to Speech Engine (TTS)
        1. TTS
            You can choose between
            * Microsoft Azure Speech Services,
            * Google Cloud Text-to-Speech,
            * AWS Amazon Polly,
            * ElevenLabs,
            * OpenAI TTS,
            * PlayHT,
            * Deepgram Text-to-speech.
        2. Voice
    4. Voice Preview
        1. Sample Text: Enter Sample Text to preview your voice selection. You can play, navigate through the audio (Back/Forward), and adjust the preview volume. Selecting the More Options (**⋮**) reveals options to adjust Playback Speed. Select Play next to any available voice to preview it. Voices are available for all TTS engines, but each engine has its voice options. Select a different Voice Language if required.
        2. TTS Model [BETA] (Advanced Setting)
        3. Primary TTS Configuration (Advanced Setting)
        4. Fallback TTS Configuration (Advanced Setting)
2. Select **Done** once you have completed configuring your voice preferences. The set voice, language, and dialect apply to automated customer responses that use text-to-speech.  

    <img src="../images/config-voice-preferences.png" alt="Voice Preferences Configuration" title="Voice Preferences Configuration" style="border: 1px solid gray; zoom:70%;">

!!! Note

    If a “TTS ERROR” appears when you dial a Voice Call and execute the Start Flow attached to an automation, the issue might occur because the voice name is not properly selected in the configuration. Even if you select a voice and save the changes, the system might not register the selection. Reselect the voice and make a small edit in the flow description (for example, add or remove a character). This action prompts the system to recognize the change and ensures that the TTS functions correctly and the audio plays as expected.

### Configure ASR (Automatic Speech Recognition)

#### Configure Primary and Fallback ASR/TTS

ASR/TTS Fallback functionality can be implemented at various levels within the system, such as the application level, experience flow level, or even the call control parameter level. This mechanism ensures that if there is an error or failure with the primary ASR (Automatic Speech Recognition) or TTS (Text-to-Speech) service, the system automatically switches to a secondary, or fallback, ASR/TTS configuration. By doing this, the fallback prevents interruptions in the service and ensures a seamless user experience, regardless of issues with the primary configuration.

* For optimal performance, it’s advised to configure the fallback with the same vendor in a different region/label.

Location 1 - Global Setting

In SmartAssist: Configurations > System Setup > Language & Speech > Voice Preferences > Show Advanced Settings. 

Location 2 - Call Control Parameters

In SmartAssist: Automation > Select app > Conversational Skills > Dialog Tasks > Select Dialog Task > Select the Node you want to configure > IVR Properties > Advance Controls > Call Control Parameters.  

Location 3 - Experience Flows

In SmartAssist: Configurations > Experience Flows > Update/New Experience Flow > Speech Recognition Engine (ASR/TTS) > Show Advanced Settings.  

Location 4 - Start Node in Experience Flow  

!!! Note
      
      * This feature is available only in ‘SmartAssist’ and not implemented in ‘AI for Service’. We will implement it in the next releases. 
      * For now, you can add Primary & Fallback ASR/TTS from the same vendor only.
         * Example: If you have selected the ‘Microsoft Azure Speech Services’ vendor as the ASR, you can enter a label name from the Microsoft vendor itself, such as ‘my_azure-US’.
         * You can configure the label name in Primary ASR/TTS configuration and Fallback ASR/TTS configuration under Show Advanced Settings.
         * The fallback ASR/TTS configuration should not be the same as the Primary ASR/TTS configuration.
         * Both Primary and Fallback ASR/TTS configurations should be available in VG Speech Services otherwise you will not be able to configure in SmartAssist.
         * The Credential Status of the Speech services configured in VG should be verified. If credential status is failed then ASR/TTS conversations fail.
      * In Call control parameters, 
         * You can configure the fallback for different vendors. But for optimal performance, it’s advised to configure the fallback with the same vendor in a different region.
         * In-call control parameters don’t have any validation of duplicate values for Primary and Fallback configurations, so you have to pay closer attention to spelling mistakes.

### Supported ASR, TTS, and Voice Biometrics Providers

Voice Gateway supports integration with third party ASR, TTS, and Voice Biometrics providers. [Learn more](../voice-gateway/third-party-asr-tts-support.md)

### Supported Languages and Dialects

The following languages and dialects are supported:

| English (Australia)    | English (Nigeria)         |
|:-----------------------|:--------------------------|
| English (Canada)       | English (Pakistan)        |
| English (Ghana)        | English (Philippines)     |
| English (Hong Kong)    | English (Singapore)       |
| English (India)        | English (South Africa)    |
| English (Ireland)      | English (Tanzania)        |
| English (Kenya)        | English (United Kingdom)  |
| English (New Zealand)  | English (United States)   |

### Use Custom ASR and TTS Credentials (BYOK)

Integrate your own Automatic Speech Recognition (ASR) and Text-to-Speech (TTS) licenses with the Voice Gateway instead of using the default providers.

Follow the steps to securely configure and use your credentials.

#### Initiation and Security

The platform manages custom provider onboarding through a controlled support process to protect sensitive API keys.

1. [Contact Support](https://support.kore.ai) and request a Custom Provider Configuration.

1. Provide your credentials using one of the following methods:

    * Send the credentials to your assigned support representative.

    * Schedule a session with the technical team and share the credentials.

#### Provider Labeling

After Support receives your credentials, the system maps them to a unique identifier in the Voice Gateway.

Label Creation: The system generates a unique label name (for example, Custom_Nuance_V2) for your account.

Activation Confirmation: Support sends a confirmation email after activating the label.

#### Implement in Call Flows

To use your custom ASR or TTS provider in a call or session, pass the assigned label in the call control parameters of your API request or dialog task.

| Parameter   | Description                                           | Example Value    |
| :---------- | :---------------------------------------------------- | :--------------- |
| `sttLabel`  | Unique label for your custom Speech-to-Text provider  | `"MyAzureSTT"`   |
| `ttsLabel`  | Unique label for your custom Text-to-Speech provider  | `"MyGoogleTTS"`  |

When you include these parameters, the system routes speech processing through your configured provider instead of the platform default.

### Best Practices

#### Multi-Language App Setup

This guide details the process for setting up a multilingual App that can switch languages based on the caller's selection. We'll cover the steps for both the **Experience Flow** (how the call routes) and the **Dialog Flow** (how the AI Agent responds).

**Understanding the Use Case**

The primary goal is to let a caller choose their preferred language (for example, by pressing a number on their phone) and have the AI Agent immediately start communicating with them in that language. This ensures a smooth, user-friendly experience from the first interaction.

Steps to configure a Multilingual App:

**Step 1: Add Languages to Your Platform**

Before you can use a language in an App, you need to enable it on the platform.

1. Sign in to AI for Service and select the **Product Switcher**.
2. Go to **Settings** > **Language Management**.
3. Select **+ Add Language** and select the languages your AI Agent supports, such as English, Hindi, and Telugu.  

**Step 2: Configure the Flow**

The Flow is the first part of your journey, where you'll present the caller with language options and then set the chosen language.

**The DTMF Approach (IVR Menu)**

The most common way to let a caller choose a language is through an **Interactive Voice Response (IVR)** menu.

1. Create a new Flow.
2. After the Start node, drag an [IVR Menu](../../flows/node-types/ivr-menu.md) node.
3. In the IVR Menu node, create prompts for each language option (for example, "Press 1 for English," "Press 2 for Hindi," "Press 3 for Telugu").  
    <img src="../images/ivr-menu.png" alt="IVR Menu" title="IVR Menu" style="border: 1px solid gray; zoom:60%;">

4. For each language option, connect the number key (for example, "1") to a new [Script node](../../flows/node-types/script-task.md). This is the key step where the language is set.  
    <img src="../images/ivr-digit.png" alt="IVR Digit Input" title="IVR Digit Input" style="border: 1px solid gray; zoom:60%;">

5. For each Script node:
    * Assign a name, such as 'Set Language to English'.
    * In the **'Define a Script'** section, add the following code, replacing '&lt;language code>' with the correct lowercase code for that language:
    * JavaScript

        `agentUtils.setBotLanguage('&lt;language code>');`

        * Example for English: `agentUtils.setBotLanguage("en");`
        * Example for Hindi: `agentUtils.setBotLanguage("hi");`
        * Example for Telugu: `agentUtils.setBotLanguage("te");`

    <img src="../images/script-node.png" alt="Script Node" title="Script Node" style="border: 1px solid gray; zoom:60%;">  

!!! Note

    Use two-letter language codes in **lowercase**. For example, use "en", not "EN",  "hi", not "HI", 

6. Connect all nodes to a **Run Automation** node. This triggers the main part of your AI Agent's logic, the Dialog Flow.

7. Inside the Run Automation node:

    * Under Automation AI options, select Run a specific Dialog.  
    * Choose the Dialog Flow you've built for your AI Agent.  
        <img src="../images/run-specific-dialog.png" alt="Run Specific Dialog" title="Run Specific Dialog" style="border: 1px solid gray; zoom:60%;">

    * Configure ‘Agent Transfer’ under ‘Connection Rules’.  
    * Reference configuration of the entire flow.  
        <img src="../images/reference-config.png" alt="Reference Config" title="Reference Config" style="border: 1px solid gray; zoom:60%;">

**Step 3: Configure the Dialog Flow**

The Dialog Flow is the AI Agent's conversation logic. Verify that the AI Agent's responses are in the correct language.

1. Open the Dialog Flow you connected in the previous step.
2. The platform enables you to configure different languages within the same flow. Look for a **language selector** on the app header.  
    <img src="../images/language-selector.png" alt="Language Selector" title="Language Selector" style="border: 1px solid gray; zoom:60%;">

3. Select a language (for example, Hindi) from the dropdown. Now, any text you add to nodes associate with this language.
4. For each node (like a **Message** node or **Entity** node), enter the text in the selected language.

    **Example:** For a Message node, if you've selected Hindi, you'll enter the Hindi text in the "Bot Response" box.  
    <img src="../images/message-node.png" alt="Message Node" title="Message Node" style="border: 1px solid gray; zoom:60%;">

5. Repeat this process for every language that the AI Agent supports. Switch the language selector and add the corresponding text for each node. This makes it easy to manage a single flow with all language variations.

**Advanced Configuration (ASR & TTS)**

For more precise control, you can customize the Automatic Speech Recognition (ASR) and Text-to-Speech (TTS) settings for each language.

1. In a specific Dialog Flow node (for example, a Message or Entity node), select the IVR Properties tab.
2. You can set specific call control parameters that override the default settings. This is useful for:  

    * Using a different TTS provider or voice in a particular language.  
        <img src="../images/tts-provider.png" alt="TTS Provider" title="TTS Provider" style="border: 1px solid gray; zoom:60%;">  

    * Choosing a different ASR provider that's better at understanding a particular accent or language.  
        <img src="../images/asr-provider.png" alt="ASR Provider" title="ASR Provider" style="border: 1px solid gray; zoom:60%;">  

For more details on these advanced settings, refer to the [Call Control Parameters](../voice-gateway/speech-customization.md#supported-call-control-parameters).

**Step 4: Publish and Test**

After configuring the Flow and Dialogs, publish the flows and perform thorough testing. Dial the number and verify that the language selection works correctly and that the AI Agent responds in the chosen language.

!!! Note

    Double-check that the language codes are in lowercase in the script node and that you've configured both the IVR and the Run Automation nodes correctly.

The multi-lingual behavior is also achieved with **Automatic Language Detection** based on the caller's speech.

#### Audio Tags (ElevenLabs v3)

The ElevenLabs V3 model supports Audio Tags, which are short text commands enclosed in square brackets (for example, `[excited]`, `[whispers]`). The TTS engine interprets these tags as stage directions and adjusts emotional tone, delivery style, and non-verbal cues in the generated audio.

This capability is available only with the ElevenLabs v3 (`eleven_v3`) model.

You can insert audio tags anywhere in a script to modify delivery in real time. Use a single tag or combine multiple tags to create complex emotional transitions within the same prompt.

Audio tag categories and examples

| Category        | Example Tags                                                       | Example Usage                            |
| :-------------- | :----------------------------------------------------------------- | :--------------------------------------- |
| Emotions        | `[excited]`, `[sad]`, `[angry]`, `[calm]`, `[dramatic]`, `[eager]` | `[excited] Your order has been shipped!` |
| Delivery Style  | `[whispers]`, `[shouts]`, `[rushed]`, `[slowly]`                   | `[whispers] Please stay quiet.`          |
| Human Reactions | `[laughs]`, `[sighs]`, `[clears throat]`, `[gulps]`                | `[sighs] I'm sorry to hear that.`        |
| Accents         | `[British accent]`, `[American accent]`                            | `[British accent] Hello, how are you?`   |

Best practices

* **Match context and voice**: Audio tags work best when they align with the natural personality of the selected voice.  
* **Use punctuation intentionally**: The V3 model interprets punctuation as delivery cues. Ellipses (`...`) introduce pauses, and capitalization increases emphasis.  
* **Confirm model selection**: Configure voice settings to use the `eleven_v3` model. Audio tags don't work with earlier models.  
* **Ignore tag casing**: Audio tags are case-insensitive. `[HAPPY]` and `[happy]` behave the same way.

Add audio tags in nodes

You can add audio tags anywhere you configure user prompts or bot responses.

1. Open the [Dialog Task](../../automation/use-cases/dialogs/navigating-dialog-tasks.md) and select a [Message Node](../../automation/use-cases/dialogs/node-types/nodes-transitions.md#message-or-bot-response-node), [Entity Node](../../automation/use-cases/dialogs/node-types/nodes-transitions.md#entity-node), or [Confirmation Node](../../automation/use-cases/dialogs/node-types/nodes-transitions.md#confirmation-node).  
1. Navigate to User Prompts or Bot Responses and select the Plain Text tab. If you use dynamic responses, open the JavaScript editor.  
1. Add bracketed tags at the exact point where the delivery changes.

    Example: `[warmly] Hello! [pause] How can I assist you today?`

1. Save the node. Voice Gateway sends the tagged text to ElevenLabs for processing.

Behavior by connection mode

Voice Gateway applies audio tags differently based on the connection mode configured in the Start Flow.

Non-streaming mode

* **Behavior**: The platform sends the entire tagged prompt to ElevenLabs in a single request.
* **Audio generation**: The TTS engine generates the full audio output and applies emotions sequentially based on the tags.
* **Recommended use**: Short responses where minimal latency is acceptable.

Streaming mode

Audio tags aren't supported in streaming scenarios.

Troubleshooting and limitations

* Feature maturity: Audio tags are an Alpha feature. Sometimes, the model may read tags aloud or ignore them if the selected voice doesn't support the requested emotion.
* Character limit: ElevenLabs V3 supports approximately 5,000 characters per request.
* Voice compatibility: Professional Voice Clones (PVCs) aren't completely optimized for V3. Use Instant Voice Clones (IVCs) or prebuilt voices for best results.

## Voice Call Properties (Account Level)

This section describes global voice call properties that apply to your entire Voice Gateway setup. Voice call properties are fundamental aspects that define the quality and reliability of communication over Voice Gateway. These properties include End of Task Behavior, Event Configuration, Call Termination Handler, Call Control Parameters, Timeout Prompt, Barge-in, Timeout, and No. of Retries, which collectively determine the user experience during a voice call. Configuring these properties is crucial for ensuring seamless and effective voice communication over network infrastructures.

You can configure the voice call properties by going to the Voice Preferences tab and selecting **Configure** on the **Voice Call Properties** section.  
    <img src="../images/voice-call-properties.png" alt="Configure Voice Call Properties" title="Configure Voice Call Properties" style="border: 1px solid gray; zoom:80%;"/>

The Voice Call Properties window displays.

### End of Task Behavior

Define the app's behavior when reaching the end of a task. You can choose the following actions:

* Trigger End of Task Event
* Terminate Call  
    <img src="../images/end-of-task-behavior.png" alt="End of Task Behavior" title="End of Task Behavior" style="border: 1px solid gray; zoom:80%;"/>

### Event Configuration

Define how to proceed on detecting this event. You can choose the following actions:

* **Initiate Task**: Select a task from the dropdown menu that initiates on detecting the event.  
    <img src="../images/initiate-task.png" alt="Initiate Task" title="Initiate Task" style="border: 1px solid gray; zoom:80%;"/>

* **Run Script**: Enter the script that runs on detecting the event.  
    <img src="../images/run-script.png" alt="Run Script" title="Run Script" style="border: 1px solid gray; zoom:80%;"/>

* **Show Message**: Select **+ Add Response**, enter the message that displays on detecting the event, and select **Done**.  
    <img src="../images/add-response.png" alt="Add Response" title="Add Response" style="border: 1px solid gray; zoom:80%;"/>

### Call Termination Handler

Specify the intent (dialog) to handle the call termination event from the dropdown.  
    <img src="../images/call-termination-handler.png" alt="Call Termination Handler" title="Call Termination Handler" style="border: 1px solid gray; zoom:80%;"/>

### Timeout Prompt

Define prompt to be played when user input isn't received within the time-out period.  
    <img src="../images/timeout-prompt.png" alt="Timeout Prompt" title="Timeout Prompt" style="border: 1px solid gray; zoom:80%;"/>

### Barge-in

Define whether user input is allowed while a prompt is in progress. By default, this option is un-available. 
    <img src="../images/barge-in.png" alt="Barge In" title="Barge In" style="border: 1px solid gray; zoom:80%;"/>

### Timeout

Define the maximum wait time to receive user input. The maximum wait time is 60 seconds.  
    <img src="../images/timeout.png" alt="Timeout" title="Timeout" style="border: 1px solid gray; zoom:80%;"/>

### No. of Retries

Define the maximum number of retries allowed.  
    <img src="../images/no-of-retries.png" alt="No.of Retries" title="No.of Retries" style="border: 1px solid gray; zoom:80%;"/>

Select **Save**. A success message appears, and saves the voice call properties.