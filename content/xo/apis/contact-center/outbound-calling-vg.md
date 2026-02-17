--8<-- "includes/ccai-api-back-link.md"

# Outbound Calling API (Voice Gateway)

Outbound calls can be made to external customers using Voice Gateway. The answering machine detection feature can be enabled on outbound calls to indicate whether a person or a machine has answered a call.

When the dialed call is answered, the answering machine detection feature starts listening to the outbound call, and after a short period, sends an indication of whether a person or a machine has answered the call.

This process happens in two parts:

1. The application triggers an Outbound Call.
2. Receiving Call Status Notifications.

## 1. Triggering the Outbound Call via API

The application triggers an outbound call using an HTTP POST request to the endpoint.

| **Method**      | POST                                                                                                     |
|-------------|----------------------------------------------------------------------------------------------------------|
| **Endpoint**    | `https:/{{host}}/api/1.1/public/bot/{{botId}}/smartassist/dialout` |
| **Content Type** | `application/json`                                                                                       |
| **Authorization** | `auth: {{JWT}}`<br>See [How to generate the JWT Token.](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope**   | SmartAssist Dialout                                                                                      |

### Path Parameters

| **PARAMETER** | **DESCRIPTION**                                                                                          | **TYPE**           |
|-----------|------------------------------------------------------------------------------------------------------|----------------|
| host      | Environment URL, for example, `https://platform.kore.ai`                                             | string, required |
| botId     | The botId or streamId. You can access it from the bot’s General Settings page.                       | string, required |

## Body Parameters

| **PARAMETER**           | **DESCRIPTION**                                                                                                                                              | **TYPE**             |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
| botId               | The botId or streamId. You can access it from the bot’s General Settings page.                                                                           | string, required |
| target              | URI of the target of the outbound call. For example:                                                                                                     | string, required |
|                     | - `tel:911234567890` with the country code                                                                                                               |                  |
|                     | - `sip:1234567890@1.23.345.678:1234`                                                                                                                    |                  |
| caller              | User part for the caller ID of the outbound call. It's the experience flow number in Contact Center AI.                                                | string, required |
| notifyurl           | Absolute URL of the dialer application where Voice Gateway sends notifications. If not provided, no notifications are sent.                     | string, optional |
| notifyHeaders           | If these are included in the API payload, these headers will be sent along with AMD notifications to the specified notifyUrl.                     | object, optional |
| timeoutInMs           | This provides improved control over how long the system should wait for the recipient to answer.                    | number, optional |
| trunk               | The trunk is a carrier for the account. If not provided, It will pick the default carrier for that account.                                             | string, optional |
| metadata            | Data to be sent to the bot (can be used to provide information to the bot about the call, such as the name of the target).                            | object, optional |
| timers              | An object containing various timeout properties. [Learn more](../contact-center/outbound-calling-vg.md#timers-configuration) | object, optional |
| machinedetection    | Activates machine (answering machine and fax) detection. Possible values:                                                                               | string, optional |
|                     | - “disconnect”: Machine detection is enabled, and the call is disconnected in amd.                                                                      |                  |
|                     | - “detect”: Machine detection is enabled, and the call isn't disconnected in amd.                                                                      |                  |
|                     | - “disabled”: Machine detection isn't enabled.                                                                                                          |                  |
| thresholdWordCount | Number of spoken words in a greeting that result in an amd_machine_detected result.                                                                      | number, optional |
| metadata | Key-value pairs to pass contextual information to the bot.                                                                      | object, optional |
| callControlParameter | This object enables you to specify dynamic values for the STT provider, language, and related properties, overriding the default settings configured at the application level.                                                                      | object, optional |
| callControlParameter.sttProvider | Name of the STT provider (for example, deepgram).                                                                      | string, required |
| callControlParameter.sttLanguage | Whether to return interim transcription results.                                                                      | string, required |
| callControlParameter.sttLabel | Custom label to identify the STT configuration/session.                                                                      | string, optional |
| callControlParameter.continuousASRTimeoutInMS| Time (in ms) to wait before stopping ASR after silence.                                                                      | number, optional |
| callControlParameter.deepgramUtteranceEndMs | Silence threshold (in ms) to determine utterance end (specific to Deepgram).                                                                      | number, optional |
| callControlParameter.deepgramEndpointing | Duration of silence (in ms) used for endpointing.                                                                      | number, optional |

### Timers Configuration

| **PROPERTY**                                   | **DESCRIPTION**                                                                                        | **REQUIRED**     |
|--------------------------------------------|----------------------------------------------------------------------------------------------------|--------------|
| `timers.noSpeechTimeoutMs`                 | Time in milliseconds to wait for a speech before returning amd_no_speech_detected.                 | no, default=5000 |
| `timers.decisionTimeoutMs`                | Time in milliseconds to wait before returning amd_decision_timeout.                                | no, default=15000 |
| `timers.toneTimeoutMs`                    | Time in milliseconds to wait to hear a tone.                                                       | no, default=20000 |
| `timers.greetingCompletionTimeoutMs`      | Silence in milliseconds to wait for during greeting before returning amd_machine_stopped_speaking. | no, default=2000  |
| `timers.noSpeechTimeoutMs`                | Time in milliseconds to wait for a speech before returning amd_no_speech_detected.                 | no, default=5000  |

### Outbound Calling API Sample Request

```
curl --location --request POST '{{host}}/api/1.1/public/bot/{{botId}}/smartassist/dialout' \
--header 'Format: application/json' \
--header 'auth: {{JWT_TOKEN}}' \
--data-raw '{
  "bot": "st-e38782ff-0d89-52e9-5678769a49fdexxxx",
  "target": "tel:911234567890",
  "caller": "+11234567890",
  "trunk": "TRUNK",
  "timers": {
    "noSpeechTimeoutMs": 12000,
    "decisionTimeoutMs": 15000,
    "toneTimeoutMs": 20000,
    "greetingCompletionTimeoutMs": 10000
  },
  "timeoutInMs": 60000,
  "thresholdWordCount": 4,
  "machineDetection": "detect",
  "notifyurl": "https://de8a-115-114-88-222.ngrok-free.app/notify",
  "notifyHeaders": {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "x-channel-type": "X42_IVR",
    "event-type": "x42-ivr-voice-voice-interactions"
  },
  "callControlParameter": {
    "sttProvider": "deepgram",
    "sttLanguage": "en-AU",
    "interim": true,
    "sttLabel": "deepgram-abcd",
    "continuousASRTimeoutInMS": 2000,
    "deepgramUtteranceEndMs": 1000,
    "deepgramEndpointing": 300
  },
  "metadata": {
    "jobPosition": "Software Engineer",
    "userName": "John Doe",
    "companyName": "abc corporation",
    "jobLocation": "USA"
  }
}'
```

### Outbound Calling API Sample Response

```
{
"sid":"f9bd46ab-ecbd-4216-842e-0c58db3axxxx",
"callId":"2c01240f-6880-123c-179b-02d8f501xxxx"
}
```

## 2. Receiving Call Status Notifications

To receive call status notifications, we can use the ‘notifyUrl’ property on the dial-out request.

When this property is set, the Voice Gateway sends an HTTP POST request to the specified URL.

Previously, the API supported notifications only for two call events: **Answered-Completed** or **Failed**. Now, we’ve expanded this to include all Answering Machine Detection (AMD) events during the call progress.

* By default, all AMD events (for example, `amd_machine_detected`, `amd_machine_stopped_speaking`, `amd_stopped`, etc.) are sent automatically.
* To avoid receiving all AMD events, you can opt out by setting `amdEventsSubscription: []` in the Dialout API payload.

### NotifyURL Sample Response

```
{
   "conversationId": "433a9a58-44eb-4c56-bb3e-ab2415f0xxxx",
   "reason": "200 OK",
   "reasonCode": "OK",
   "callConnectTime": "2025-06-26T12:49:17.600Z",
   "ringDurationInMS": 3381,
   "connectDurationInMS": 4343,
   "status": "Answered"
}
{
   "conversationId": "433a9a58-44eb-4c56-bb3e-ab2415f0xxxx",
   "reason": "200 OK",
   "reasonCode": "OK",
   "callConnectTime": "2025-06-26T12:49:21.761Z",
   "ringDurationInMS": 3381,
   "connectDurationInMS": 4343,
   "status": "Call-In-Progress",
   "machineDetection": "amd_machine_detected"
}
{
    "conversationId": "433a9a58-44eb-4c56-bb3e-ab2415f0xxxx",
    "reason": "200 OK",
    "reasonCode": "OK",
    "callConnectTime": "2025-06-26T12:49:31.103Z",
    "ringDurationInMS": 3381,
    "connectDurationInMS": 4343,
    "status": "Call-In-Progress",
    "machineDetection": "amd_stopped"
}
{
    "conversationId": "433a9a58-44eb-4c56-bb3e-ab2415f0xxxx",
    "reason": "200 OK",
    "reasonCode": "OK",
    "callConnectTime": "2025-06-26T12:49:31.092Z",
    "ringDurationInMS": 3381,
    "connectDurationInMS": 4343,
    "status": "Call-In-Progress",
    "machineDetection": "amd_machine_stopped_speaking"
}
{
    "conversationId": "433a9a58-44eb-4c56-bb3e-ab2415f0xxxx",
    "reason": "200 OK",
    "reasonCode": "bot-disconnected",
    "callConnectTime": "2025-06-26T12:49:17.609Z",
    "ringDurationInMS": 3381,
    "connectDurationInMS": 4343,
    "status": "completed",
    "callDuration": 109,
    "machineDetection": "amd_machine_detected",
    "sessionId": "685d41cd54d09f7f699axxxx",
    "callDisconnectTime": "2025-06-26T12:51:07.151Z"
}
{
    "conversationId": "00721e4f-bcbe-4965-ba3f-b24aec5bxxxx",
    "reason": "486 Busy Here",
    "reasonCode": "Busy Here",
    "callConnectTime": "2025-06-26T13:00:13.374Z",
    "ringDurationInMS": 15255,
    "connectDurationInMS": 17204,
    "status": "Failed",
    "callDisconnectTime": "2025-06-26T13:00:13.374Z"
}
```

### notifyHeaders

* You can now include notifyHeaders in the API payload. These custom headers will be passed along with the AMD notifications to the specified notifyUrl.
* This enhancement provides flexibility to send additional metadata or authentication information with your callbacks.
* Example Headers List (including both default and notifyHeaders)
    * Accept: /
    * Accept-Encoding: br, gzip, deflate
    * Accept-Language: *
    * Authorization: Basic a29yZS5haTp6dkw3JDckaUJxSjQyxxxx
    * Content-Length: 1495
    * Content-Type: application/json
    * Host: reptile-fitting-wolf.ngrok-free.app
    * SAVG-Signature: t=1750947610,v1=2bdbc3c37371dcd9cf62ef637624a4e7eff42ebeb4e5c100c83b7146422bxxxx
    * Sec-Fetch-Mode: cors
    * User-Agent: node
    * X-Forwarded-For: 23.21.52.56
    * X-Forwarded-Host: reptile-fitting-wolf.ngrok-free.app
    * X-Forwarded-Proto: https

### Response Body Parameters

| **PARAMETER**          | **DESCRIPTION**                                                                                                                                                              | **TYPE**             |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
| conversationId     | UUID of the conversation (matches the `conversationId` sent in the dial-out trigger response).                                                                            | string, required |
| status             | Call status:                                                                                                                                                             | string, required |
|                    | - “completed”: The call was completed (disconnected) after it was answered.                                                                                               |                  |
|                    | - “failed”: The call ended before it was answered.                                                                                                                        |                  |
|                    | - “answered”: When a call connection is established.                                                                                                                      |                  |
| reasonCode         | If the status is “failed”, it provides the reason for the failure:                                                                                                        | string, required |
|                    | - “Busy here”: The target number was busy.                                                                                                                                 |                  |
|                    | - “Service Unavailable”: When the server is not available.                                                                                                                 |                  |
|                    | - “Temporarily Unavailable”: The end-user declined or rejected the call.                                                                                                   |                  |
|                    | If the status is “completed”, it provides the reason for the call end:                                                                                                     |                  |
|                    | - “Caller-disconnected”: The call was disconnected from the end-user side.                                                                                                 |                  |
|                    | - “Bot-disconnected”: The call was disconnected by the bot.                                                                                                                |                  |
|                    | - “KoreVG-disconnected”: The call was disconnected due to amd-error.                                                                                                       |                  |
| reason             | Free text describing the reason for the failure (for example, the SIP Reason header).                                                                                      | string, required |
| callconnecttime    | The time when the call was connected (when the end-user picked up the phone).                                                                                             | string, required |
| callDisconnecttime | The time when the call was disconnected.                                                                                                                                 | string, required |
| duration           | The duration of the call from connectTime to the end of the call in seconds.                                                                                               | string, required |
| ringDurationInMs           | **Ringing to Connection Delay** – It is the time between when the call starts ringing and when the other person answers and the call connects.                                                                                               | number, required |
| connectDurationInMs          | **Dial to Connection Delay** – This is the time elapsed from when the caller dials to when the call is answered and connected.                                                                                               | number, required |
| machinedetection   | This property is included when answering machine detection is enabled (`machineDetection` is configured to “disconnect”) and detected, and the call ends. It provides the detection reason: | string, required |
|                    | - `amd_human_detected`: A human is speaking.                                                                                                                              |                  |
|                    | - `amd_machine_detected`: A machine is speaking.                                                                                                                           |                  |
|                    | - `amd_no_speech_detected`: No speech was detected.                                                                                                                        |                  |
|                    | - `amd_decision_timeout`: No decision was made in the time given.                                                                                                          |                  |
|                    | - `amd_machine_stopped_speaking`: A machine has completed the greeting.                                                                                                    |                  |
|                    | - `amd_tone_detected`: A beep was detected.                                                                                                                               |                  |
|                    | - `amd_error`: An error has occurred.                                                                                                                                     |                  |
|                    | - `amd_stopped`: Answering machine detection was stopped.                                                                                                                  |                  |

## 3. Accessing AMD Values Using Context Variables

These values will be available in the context and can help design more effective bot flows based on call behavior during Answering Machine Detection. You can access them using:

* `context.session.UserSession.amdInfo`
    * Contains the following values (some may be optional or unavailable)
        * `amdEvents` (all AMD-related events)
        * `amdGreeting` (amd_machine_detected related message)
        * `amdReason` (reason for amd_machine_detected)
        * `amdRingDurationInMs` (difference between call-in-progress and ringing/early-media)
        * `amdConnectDurationInMs` (difference between call-in-progress and trying)

* `context.session.UserSession.amd`
    * Contains the following values (some may be optional or unavailable)
        * amd_human_detected: A human is speaking.
        * amd_machine_detected: A machine is speaking.
        * amd_no_speech_detected: No speech was detected.
        * amd_decision_timeout: No decision was made in the time given.
        * amd_machine_stopped_speaking: A machine has completed the greeting.
        * amd_tone_detected: A beep was detected.
        * amd_error: An error has occurred.
        * amd_stopped: Answering machine detection was stopped.

## 4. Interaction Status Logs

Machine Detection Flag

* When the machineDetection parameter is set to disconnect, and the system detects a machine using either `amd_machine_detected` or `amd_tone_detected`, the call will be marked as `machineDetected` in the Interactions page under the Status column.  
    <img src="../images/status.png" alt="Status" title="Status" style="border: 1px solid gray; zoom:70%;"> 
* This helps you easily identify and track calls that were disconnected due to machine detection.