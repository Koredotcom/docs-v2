# Utility Functions in Voice Gateway

Voice Gateway (VG) offers two utility libraries to manage call handling and transfers - Agent Utils and Voice Utils. These utilities provide comprehensive control over call flows, including features like SIP transfers, audio control, Dual-Tone Multi-Frequency (DTMF) handling, and custom header management. Together, they offer flexible options for implementing both complex agent-assisted scenarios and straightforward external transfers.

## Agent Utils (SmartAssist/Contact Center Library)

The `agentUtils` library lets you to dynamically modify call transfer properties through the app builder before transferring the call to a human agent. It provides a wide range of options, including:

* **Dynamic SIP Configuration**: Modify the SIP properties before transferring the call.
* **Transfer Types**: Change the type of transfer (for example, Skill-based, SIP-based).
* **User Information**: Update user-specific information before routing the call to the agent.

With `agentUtils`, you can adjust SmartAssist properties directly from the app, which is ideal when you need to fine-tune call transfers by modifying parameters like SIP URIs or transfer methods before sending the call to the Outer Source or Agent Desktop.

Agent Transfer Node in XO Platform (Used with agentUtils)

To apply changes made with `agentUtils`, you need to use the Agent Transfer node in AI for Service. The Agent Transfer node routes the call back to SmartAssist from the app, and based on the type of transfer selected in SmartAssist (for example, External, SIP Transfer, SmartAssist Agent Desktop), the call is appropriately routed.

You can make this process dynamic by using `agentUtils` to modify transfer properties (such as SIP URI or transport type) before executing the Agent Transfer node.

Major Advantage:  

Unlike voiceUtils, the agentUtils + Agent Transfer Node flow supports header encoding/decoding and user-to-user (UUI) data transfer, enabling secure and efficient data transfer during the process. This is one of the key reasons to prefer this method for complex call transfers that require encoded headers or UUI support.

Example Use Case:  

If you need to dynamically change the SIP transport type or update the SIP URI based on the user's session, `agentUtils` lets you to modify these properties via a script node in the app builder. The Agent Transfer node handles the actual routing to the SmartAssist platform. [Learn more](../../flows/node-types/utils.md#script-nodes-call-flows-agent-utils-and-usersessionutils).

## Voice Utils (SmartAssist Library)

The `voiceUtils` library is specifically for the SmartAssist Voice Gateway. Used for transferring calls to external sources, such as SIP endpoints or phone numbers, without involving the Agent Desktop. This library supports functionalities. [Learn more](../../flows/node-types/utils.md#script-nodes-call-flows-agent-utils-and-usersessionutils).

* Hangup
* Agent Transfer (via Invite and Refer)
* Abort Prompt
* Play and Pause Audio, etc

In the case of agent transfers using `voiceUtils`, the call is directly routed to an external source (such as a SIP endpoint or a phone number), bypassing the SmartAssist platform. There is no interaction with the Use SmartAssist Agent Desktop for scenarios that require completing the call transfer externally.

* **Transfer with Headers**: You can use `voiceUtils.invite()` and `voiceUtils.refer()` to transfer the call with custom headers. However, it's important to note that this doesn't support header encoding/decoding or user-to-user (UUI) data transfer.

   **Example Use Case**:
If you are transferring the call to an external SIP provider or a phone number directly, `voiceUtils` is the ideal choice. This method bypasses SmartAssist and works best for simple SIP or phone number transfers.

## When to Use What

* `agentUtils` + `Agent Transfer Node`:<br>
Use this method when the call transfer requires header encoding/decoding or user-to-user (UUI) data transfer. It provides dynamic control over SmartAssist-specific properties (like SIP URIs or transport types) and ensures proper data handling for more complex call transfer scenarios involving the SmartAssist agent desktop.
* `voiceUtils`:
Use this method when you need to transfer the call directly to an external source like a SIP endpoint or phone number, bypassing the SmartAssist platform. It's best for simple transfers without the need for header encoding or UUI support.

## VoiceUtils Helper Methods

Use these functions in the Channel Override template within JavaScript sections. You can execute all functions in the Message Node.

General Syntax - `print(utility function)`

### Hangup

Use Cases:

1. If you need to forcibly hang up the call from the app during the flow or call.

2. Use this function with Run Automation to dynamically send headers in a BYE message, similar to a SIP BYE.

   Syntax: `print(voiceUtils.hangup(message,headers,queueCommand))`

   The message, headers, and queueCommand are optional parameters.

   Header syntax:

| **Options**    | **Description**                                                                                                     | **Type**  | **Required**        |
|----------------|---------------------------------------------------------------------------------------------------------------------|-----------|----------------------|
| message        | Message to play before Hangup.                                                                                      | String    | No                   |
| Headers        | An object containing SIP headers to include in the BYE request.                                                     | Object    | No                   |
| queueCommand   | If set to true, the system queues this command until previous commands complete; if false, it interrupts and flushes all previous commands to execute this command immediately. | Boolean   | No (Default: True)   |

`````
"headers": { \
"X-Reason" : "maximum call duration exceeded" \
}
`````
The system first plays the message, then hang up the call and transmit the headers.

!!! Note

    To skip the message and only send the headers, provide an empty string as the first argument.

Example:

```
        1 With message and headers
        var message = "Call completed";
        var headers : {

        	`"X-Reason"` `:` `"Call hangup from system side"`
        }

        print(voiceUtils.hangup(message,headers));

        2 Without Message but containing headers
          var message = "";
          var headers = { "X-Reason" : "completed"}
        print(voiceUtils.hangup(message,headers));
```

### SIP Refer

This function transfers the call to an external contact number (telephone number or SIP URI). After the transfer (Refer), the app's call leg will disconnect.

Use Case:

Transfer the call to a third party using the utility in the message node with Run Automation from SmartAssist.

message - Optional (Send Empty Message), referTo - Required, headers - Optional, referredBy - Optional

Syntax: `print(voiceUtils.refer(message,ReferTo,headers,queueCommand,referredBy))`

| **Options**    | **Description**                                                                                                     | **Type**  | **Required**           |
|----------------|---------------------------------------------------------------------------------------------------------------------|-----------|-------------------------|
| message        | Play message before transferring a call to agent.                                                                  | String    | NA                      |
| ReferTo        | A SIP URI or a phone number/user identifier.                                                                       | String    | Yes                     |
| headers        | Additional SIP headers to include in the response.                                                                 | Object    | NA                      |
| queueCommand   | If true, the system queues this command until previous commands complete; if false, it interrupts and clears all previous commands and executes this command immediately. | Boolean   | NA (Default: True)      |
| referredBy   | Enter a SIP URI or phone number/user identifier; if omitted, the system defaults to the identity of the transferred party. | String   | NA      |

!!! Note

    * Parameters order must be maintained.
    * Parameters after `referTo` are optional but must be passed in the correct sequence.
    * If skipping `headers` but specifying `queueCommand` or `referredBy`, pass `null` or `{}` as placeholders accordingly.

Example:

```
Base function 

voiceUtils.refer(message: string,referTo: string,headers?:object,
queueCommand?: boolean, referredBy?: string
)


1. Using all the options

var message = "Transferring Call to xxxx number";
var referTo = "+91xxxxxxxxxx";   // Can also be a SIP URL
var headers = {
    "X-Reason": "Call Received"
};
var queueCommand = true,
var referredBy = "sip:xxxxxxxxx"

print(voiceUtils.refer(message, referTo, headers,queueCommand,referredBy));

2. without Message and headers 

var message = "";
var referTo = "+91xxxxxxxxxx";
print(voiceUtils.refer(message, referTo));

3. With QueueCommand (Passing false/true for the 4th parameter)

var message = "";
var headers = {};
var referTo = "sip:test@5060";

print(voiceUtils.refer(message, referTo, headers, false));

 Passing ReferredBy Parameter (5th argument)
var message = "";
var headers = {};
var referTo = "sip:test@5060";
var referredBy = "+1411111";

print(voiceUtils.refer(message, referTo, headers, false, referredBy));

Note: Parameter order must be maintained.
```

### SIP Invite

The SIP Invite initiates a conference call. The app's leg remains active after the call connects to the third party, and once the call with the third party ends, the app's call resumes. The callerId and target fields are mandatory and contains either a SIP URI or a phone number. To pass these values, provide an empty string for the message, followed by the callerId and target.

Syntax: `print(voiceUtils.invite(message, callerId, target,headers,queueCommand))`

| **Options**     | **Description**                                                                                                     | **Type**                                      | **Required**        |
|------------------|---------------------------------------------------------------------------------------------------------------------|------------------------------------------------|----------------------|
| Message          | Message to play before transferring the call to a third party.                                                     | String                                         | No                   |
| CallerId         | The inbound caller’s phone number, displayed to the dialed number. The caller ID must be a valid E.164 number. | String containing phone number with country code (AI Agent Number) | Yes                  |
| Target           | The target property specifies the call destinations.                                                              | String (SIP URI)                               | Yes                  |
| Headers          | Additional SIP headers to include in the response.                                                                | Object                                         | NA                   |
| QueueCommand     | If true, queue this command until previous commands complete; otherwise, interrupt and flush all previous commands and execute this command immediately. | Boolean                                        | No (Default: True)   |

Example:

```
let callerId = "+1901xxxx";
let target = "sip:test.com:5060";
let message = "SIP Invite Transfer"
let headers = {
"X-CallId" : "xxxxx"
}
print(voiceUtils.invite(message,callerId,target,headers))
```

### AbortPrompt

The abortPrompts event cancels all pending prompts sent before it's triggered. For example, if the app sends an abortPrompts event right after sending three prompt messages, the first prompt stops playing immediately, and the remaining two prompts won't play.

Use Case:

Killing the previous prompt with the current Message.

Syntax: `print(voiceUtils.abortPrompt())`

The “Message” parameter is Optional.

| **Options** | **Descriptions**                                     | **Type** | **Required** |
|-------------|------------------------------------------------------|----------|--------------|
| Message     | Kill the previous command and play the configured message. | String   | NA           |

!!! note

    It supports .wav files and multiple messages, which must be sent as an array.

example - var message = [“[https://example.wav](https://example.wav)” , “welcome message”]

Example:

```
var message = "Aborting the Previous Message",

print(voiceUtils.abort(message))

//without message
print(voiceUtils.abortPrompt())
```

### Send Dual Tone Multi-Frequency (DTMF)

Use this function to send DTMF digits from the app. The system sends the digits as Real-Time Transport Protocol (RTP) payloads following RFC 2833.

Use Case:

When one app interacts with another app and tries to give DTMF Input.  

| **Options** | **Type** | **Description**                                                             | **Required**            |
|-------------|----------|------------------------------------------------------------------------------|--------------------------|
| dtmf        | String   | A string containing a sequence of DTMF digits (0-9, *, #).                   | Yes                      |
| duration    | Number   | The length of each digit, in milliseconds. Defaults to 500.                 | No (Default value: 500)  |

Example:

```
let dtmf = "99865",
let duration = 600

print(voiceUtils.sendDTMF(dtmf,duration))
```

### Pause and Play

The pause command waits for a specified number of seconds. Play is Optional; If you pass the message, it plays after the pause.

| **Options** | **Type**                                                                 | **Description**                                       | **Required** |
|-------------|--------------------------------------------------------------------------|--------------------------------------------------------|--------------|
| length      | number (seconds) - for example, `4`. Default is 3 seconds.               | Number of seconds to wait before continuing the app.   | Yes          |
| message     | string or array of strings containing a URL and string. <br>Example: `["This is the message", "https://text.wav"]` | Play the message after executing the pause time.       | No           |

**Example:**

`\`
`let` `length` `=` `4,`

```
let message = "After 4 second this message plays"
print(voiceUtils.pauseAndPlay(length,message))
```

### Play

Use the play command to stream recorded audio to either a call or a text message.

The message can be either a single string or an array of strings that includes both audio URLs and text messages.

Syntax: `print(voiceUtils.play(message))`

| **Option** | **Description**                            | **Type**                                                                 | **Required** |
|------------|---------------------------------------------|--------------------------------------------------------------------------|--------------|
| message    | To play text messages and audio URLs.       | `String` - Only message<br>`Array of strings` - Both audio URL and message. | Yes          |

Example:

```
Let message = ["this is First message", "https://audiofiile.wav" , "this is second Message"]

 //  All three messages are played in Sequence WIse (Text Message -> Audio File -> Text Message)
```

### Voicemails

Use Cases:

1. When you need to configure voicemail settings and notifications for customer calls. 

2. When you need to receive transcriptions of voicemail messages. 

3. When you need to collect and process customer voicemail content with metadata.

Syntax: `print(voiceUtils.voicemail(message,beepRequired,transcriptionRequired,notifyUrl,metaInfo,callControlParams))`

Header Syntax:

| **Options**             | **Description**                                                                 | **Type**   | **Required/Optional** |
|--------------------------|----------------------------------------------------------------------------------|------------|--------------|
| message                  | The message played to the customer before the voicemail recording starts.       | string     | Required          |
| beepRequired             | When true, plays a beep sound after the message to indicate the recording start. Default: false | boolean    | Optional           |
| transcriptionRequired    | When true, generates text transcription of the voicemail. Default: false        | boolean    | Optional           |
| notifyUrl                | Specify the client endpoint URL to receive voicemail notifications.                 | string     | Required          |
| metaInfo                 | Additional metadata to include with the notification.                           | object     | Optional           |
| callControlParams                 | An object to define ASR & TTS vendor, language, and their properties.                           | object     | Optional           |

```
"metaInfo": {
    "sessionId": "session123",
    "userId": "user456",
    "auth_token": "YOUR_SECURE_TOKEN"
}
```

Example 1:

```
var message = "Leave your voicemail after beep and hang up the call";
var beepRequired=true;
var transcriptionRequired=true;
var notifyUrl={
    "url": "https://puma-singular-regularly.ngrok-free.app",
    "headers": {
        "auth":"YOUR_SECURE_TOKEN",
        'Accept': "application/json",
        'Content-Type': 'application/json'
    }
};
var metaInfo={
    "newVar":context.session.opts.streamId
}
print(voiceUtils.voicemail(message,beepRequired,transcriptionRequired,notifyUrl,metaInfo));
```

Example 2:

```
var message = "Por favor, deje su mensaje de voz después del pitido y cuelgue la llamada.";
var beepRequired=true;
var transcriptionRequired=true;
var notifyUrl={
    "url": "https://puma-singular-regularly.ngrok-free.app",
    "headers": {
        "auth":"YOUR_SECURE_TOKEN",
        'Accept': "application/json",
        'Content-Type': 'application/json'
    }
};
var metaInfo={
    "newVar":context.session.opts.streamId
}
var callControlParams = {language :"es-US", vendor : "google"}
print(voiceUtils.voicemail(message,beepRequired,transcriptionRequired,notifyUrl,metaInfo,callControlParams));
```

### Transfer Calls

The `voiceUtils.transfer` utility enables developers to programmatically transfer an active call to another conversational experience or an external phone number. It provides a simple interface to support seamless call routing within voice applications.

Syntax:

`print(voiceUtils.transfer({ number: <phoneNumber> }));`

The utility accepts one required header inside the configuration object:

| **Header**      | **Required** | **Description**                                                                                                                                           |
|------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| number     | Yes      | Specifies the target phone number for the call transfer. The number must be in E.164 format, which includes the country code followed by the full subscriber number, with no spaces or hyphens. |


Example:

`print(voiceUtils.transfer({ number: "+1234567890" }));`

In this example, the system transfers the call to +1234567890.

Use cases:

The `voiceUtils.transfer` utility transfers an ongoing call. It supports two primary use cases:

1. Transfer to a Target Experience Flow: The system can transfer callers from one experience flow to another within the application. Use this for:

* Routing callers to a different IVR module.  
* Moving users to specialized agent queues.  
* Directing callers to an alternative automated flow based on context or customer input.

Example: A caller navigates a self-service flow and requests a human agent. The system transfers the call to an agent experience flow using this utility.

2. Transfer to an External Phone Number: The system can transfer callers to external recipients outside the platform. Use this for:

* Connecting callers to third-party vendors.  
* Redirecting to business partners or external support lines.  
* Escalating calls to off-platform teams.

Example: An AI Agent identifies that a customer inquiry requires a third-party vendor’s assistance. The system transfers the call to the vendor’s helpline.

## Raw Packet (JavaScript Code)

 It's recommended to use those call controls or Inbuilt Utility Functions rather than overriding using Raw JavaScript Code.

If the Call Control Parameter or Inbuilt Utility Function doesn't achieve something, then the developer can contact the Support Team.

!!! note

    The platform does not perform design-time validation of message overrides; they are passed as is, increasing the likelihood of errors.