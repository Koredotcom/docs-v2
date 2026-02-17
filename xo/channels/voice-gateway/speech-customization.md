# Speech Customization (Call Control Parameters)

This section provides in-depth information on customizing speech behavior using call control parameters.

## Introduction to Call Control Parameters

Call control parameters are general-purpose parameters that can modify a call's behavior, including ASR/STT & TTS configurations.

!!! note

    Automatic Speech Recognition (ASR) and Speech-to-Text (STT) are two terms that refer to the same technology. Both involve converting spoken language into written text by analyzing and interpreting audio input. The terms are used interchangeably, describing the same function—transforming speech into readable, actionable text.

There are two ways to define the Call Control Parameters - Node Level and Channel Level.

You can apply Call Control Parameters at either the Session or Node level, offering more flexibility in managing call behavior.

* **Session-Level Parameters**: Add the prefix `session.` to apply parameters throughout the session (for example, `session.ttsprovider`).
* **Node-Level Parameters**: Add the prefix node. to apply parameters only at a specific node (for example, `node.ttsprovider`).
* **Default Behavior**: The platform considers parameters without a prefix as session-level by default.
* Node-level parameters take precedence over session-level parameters. If no node-level parameters are defined, session-level properties apply.

## Node Level Call Control

The call control section is Available In [Entity Node](../../automation/use-cases/dialogs/node-types/working-with-the-entity-node.md)/[Message Node](../../automation/use-cases/dialogs/node-types/working-with-the-message-nodes.md#ivr-properties)/[Confirmation Node](../../automation/use-cases/dialogs/node-types/working-with-the-confirmation-nodes.md#ivr-properties) > IVR Properties > Advanced Controls. [Learn more](../../automation/use-cases/dialogs/node-types/voice-call-properties.md#configuring-grammar).  
<img src="../images/node-level-call-control-parameters.png" alt="Node Level Call Control" title="Node Level Call Control" style="border: 1px solid gray; zoom:80%;">

## Channel Level Call Control

## Update/Modify Parameters

When updating language settings or modifying Automatic Speech Recognition (ASR) and Text-to-Speech (TTS) parameters in Call Control Parameters, users can specify the updated field along with a minimal set of required parameters.

For example, if a user has configured the Speech-to-Text (STT) provider and language in the call control parameters and wants to add existing values. Users only need to provide the additional sttLanguage parameter without redefining the previously set values.

This behavior applies to Session-Level Call Control Parameters.

**Example**

**Existing Parameters:**

```
{
  "sttProvider": "microsoft",
  "sttLanguage": "en-IN"
}
```

**Adding a New Language:**

```
{
  "sttLanguage": "en-ES"
}
```

In this scenario, the system retains the existing `sttProvider` and previously set `sttLanguage`, ensuring that only the new parameter adds without requiring users to re-enter unchanged values.

## Supported Speech Engines (ASR/TTS)

Voice Gateway supports several third-party service providers for ASR/TTS. [Learn more](../voice-gateway/third-party-asr-tts-support.md)

## Supported Call Control Parameters

### Provider Related Parameters

Speech-to-text (STT) and text-to-speech (TTS) services interface with the user using a selected language (for example, English US, English UK, or German).

TTS services also use a selected voice (for example, female or male) to respond.

* Use STT for recognizer:
    `sttProvider` → `google`, `microsoft`

* Use TTS for synthesizer:
    `ttsProvider` → `google`, `microsoft`, `aws`

!!! Note

    * Apply the following parameters only when STT is set as Recognizer.
    * Otherwise, the system uses default bot-level or Voice Gateway settings.
    * These properties are applied at the session level.

**Examples**

**JSON**

```
{
  "sttProvider": "google",
  "sttLanguage": "en-IN",
  "ttsProvider": "google",
  "ttsLanguage": "en-IN",
  "voiceName": "en-IN-Wavenet-A"
}
```

| **Parameter**       | **Type** | **Supported STT/TTS** | **Description**                                                                                                                             | **Example**                                                                                                                                                                |
| ------------------- | -------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sttProvider`       | String   | All                   | Sets the speech-to-text engine. You can change the provider dynamically during a call.                                                      | `"sttProvider": "google"`                                                                                                                                                  |
| `sttLanguage`       | String   | All                   | Sets the STT language. The transcript language matches this value.                                                                          | `"sttLanguage": "en-US"`                                                                                                                                                   |
| `ttsProvider`       | String   | All                   | Sets the text-to-speech provider, similar to `sttProvider`.                                                                                 | `"ttsProvider": "microsoft"`                                                                                                                                               |
| `ttsLanguage`       | String   | All                   | Sets the language used for TTS. Ensure it matches the `voiceName`.                                                                          | `"ttsLanguage": "en-US"`                                                                                                                                                   |
| `voiceName`         | String   | All                   | Required for TTS output. The voice must align with `ttsLanguage`.                                                                           | `"voiceName": "en-AU-NatashaNeural"`<br>Example:<br>`json<br>{<br>  "ttsProvider": "microsoft",<br>  "ttsLanguage": "en-AU",<br>  "voiceName": "en-AU-NatashaNeural"<br>}` |
| `enableSpeechInput` | Boolean  | All                   | When set to `false`, disables speech input and lets only DTMF input. Default is `true`. Use this only through the Call Control Parameter. | `"enableSpeechInput": false`                                                                                                                                               |

### Labels and Fallback Provider Related Parameters

Label-Assign/Create a label only if you need to create multiple speech services from the same vendor. Then, use the label in your application to specify which service to use.

**How to Configure Label**

1. Add a speech service inside the Speech tab.  
2. Select a provider and add a label with a unique name.  
3. Use the same label in the call control parameter.  
4. At the same node where you use fallback call control parameters, you must also pass the primary Recognizer and Synthesizer.

Examples:

**JSON**

```
{
  "sttProvider": "google",
  "sttLanguage": "en-US",
  "sttLabel": "google-stt-2"
}
```

**STT**

```
{
  "sttProvider": "microsoft",
  "sttLabel": "my_azure-US",
  "sttLanguage": "en-US"
}
```

**TTS**

```
{
  "ttsProvider": "microsoft",
  "ttsLanguage": "en-US",
  "voiceName": "en-US-AmberNeural",
  "ttsLabel": "my_azure-US"
}
```

**Fallback**

```
{
  "sttProvider": "microsoft",
  "sttLabel": "my_azure-US",
  "sttLanguage": "en-US",
  "ttsProvider": "microsoft",
  "ttsLanguage": "en-US",
  "voiceName": "en-US-AmberNeural",
  "ttsLabel": "my_azure-US",
  "sttFallbackProvider": "microsoft",
  "sttFallbackLanguage": "en-US",
  "sttFallbackLabel": "my_azure_Europe",
  "ttsFallbackProvider": "microsoft",
  "ttsFallbackLanguage": "en-US",
  "ttsFallbackLabel": "my_azure_Europe",
  "ttsFallbackVoiceName": "en-US-AmberNeural"
}
```

!!! Notes

    * The node at which you use fallback call control parameters must also define the primary recognizer and synthesizer.
    * Best practice: use the same ASR engine in fallback with a different label or region.
    * If the current provider fails, Voice Gateway switches to the fallback provider.
    * Fallback properties are applied at the session level.

| **Parameter**          |**Type**| **Description**                                                                        | **Example Values**  |
| ---------------------- | ------ | -------------------------------------------------------------------------------------- | ------------------- |
| `sttLabel`             | String | Uniquely identifies the ASR engine in Voice Gateway.                                   | `my_azure-US`       |
| `sttFallbackLabel`     | String | Fallback label for ASR; switch happens on error. Prefer same vendor, different region. | `my_azure_Europe`   |
| `sttFallbackProvider`  | String | Specifies fallback STT provider.                                                       | `microsoft`         |
| `sttFallbackLanguage`  | String | Specifies fallback STT language.                                                       | `en-US`             |
| `ttsLabel`             | String | Uniquely identifies the TTS engine in Voice Gateway.                                   | `my_azure-US`       |
| `ttsFallbackLabel`     | String | Fallback label for TTS.                                                                | `my_azure_Europe`   |
| `ttsFallbackProvider`  | String | Specifies fallback TTS provider.                                                       | `microsoft`         |
| `ttsFallbackLanguage`  | String | Specifies fallback TTS language.                                                       | `en-US`             |
| `ttsFallbackVoiceName` | String | Specifies fallback voice name for TTS.                                                 | `en-US-AmberNeural` |

### Continuous ASR Related Parameters

Continuous ASR (Automatic Speech Recognition) lets the speech-to-text engine to handle user inputs like phone numbers or customer IDs that may include pauses between utterances. This improves recognition accuracy for digit or character strings.

!!! Note

    This feature is only available for Microsoft.

Microsoft Azure offers a property called AzureSegmentationSilenceTimeout that performs the same function as Continuous ASR. Since Azure's ASR engine handles silence detection directly (rather than the Voice Gateway), it achieves higher accuracy when merging utterances.

* AzureSegmentationSilenceTimeout is more accurate than Continuous ASR. [Learn more](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/how-to-recognize-speech?pivots=programming-language-csharp#change-how-silence-is-handled).

**Application Scope**:

Both `continuousASRTimeoutInMS` and `AzureSegmentationSilenceTimeout` apply at the session level. They remain active for the entire call and can be updated at individual nodes as needed.

| **Parameter**                  | **Type**                  | **Scope** | **Description**                                                                                                                                                                                | **Example**            |
| -------------------------- | --------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `continuousASRTimeoutInMS` | Number (milliseconds) | All   | Specifies the silence duration to wait after receiving a transcript before returning the result. If another transcript is received within this timeout, the input is merged and continued. | `5000` (5 seconds) |
| `continuousASRDigits`      | Character (DTMF key)  | All   | Specifies a DTMF key that, if pressed, immediately ends the speech recognition process and returns the gathered input.                                                                     | `&`                |

### Barge-In Related Parameters

Barge-In lets the Voice Gateway to detect and respond when a user interrupts the bot by speaking or entering DTMF digits while the bot responds. This enables quicker interactions by preventing users from waiting for the bot to finish speaking.

!!! Note

    Barge-In applies at the node level.

| **Parameter**             | **Type**                     | **Scope** | **Description**                                                                                                                     | **Example** |
| --------------------- | ------------------------ | ----- | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `listenDuringPrompt`  | Boolean (`true` or `false`) | All   | If set to `false`, the bot won't listen to user speech until it finishes playing the response. Defaults to `true`.       | `true`  |
| `bargeInMinWordCount` | Number                   | All   | When barge-in is enabled, this defines the **minimum number of words** required to interrupt the bot's speech. Defaults to `1`. | `1`     |
| `bargeInOnDTMF`       | Boolean (`true` or `false`) | All   | If `true`, DTMF input during bot speech interrupts playback, and the system starts collecting speech input.                     | `true`  |

### Timeout Related Parameters

These parameters control how long the Voice Gateway waits for user input (speech or DTMF).

!!! Note

    All timeout-related parameters apply at the node level.

| **Parameter**                        | **Type**                  | **Scope** | Description                                                                                                                                       | **Example**                        |
| -------------------------------- | --------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `userNoInputTimeoutMS`           | Number (milliseconds) | All   | Maximum wait time to receive user input. If set to `0`, Voice Gateway waits indefinitely.                                                         | `"userNoInputTimeoutMS": 20000 → waits 20 seconds before timeout.` |
| `dtmfCollectInterDigitTimeoutMS` | Number (milliseconds) | All   | Timeout between DTMF digit inputs. If the user doesn't enter another digit within this time, the gateway submits the collected digits to the bot. |               `"dtmfCollectInterDigitTimeoutMS": 3000 → waits up to 3 seconds between key presses.`                 |
| `dtmfCollectSubmitDigit`         | Number                | All   | Defines a special DTMF digit that submits all collected digits immediately to the bot, bypassing timeout and max digit wait.                      |            `"dtmfCollectSubmitDigit": 9 → pressing 9 submits the digits entered so far.`                    |
| `dtmfCollectMaxDigits`           | Number                | All   | Maximum number of DTMF digits to collect. If the user enters more than this number, only the first `maxDigits` are accepted.                      | `"dtmfCollectMaxDigits": 5 → only the first 5 digits are accepted.`     |
| `dtmfCollectminDigits`           | Number                | All   | Minimum number of DTMF digits expected. Defaults to `1`.                                                                                          |                       `"dtmfCollectminDigits": 3 → requires at least 3 digits before submission.`         |
| `dtmfCollectnumDigits`           | Number                | All   | Exact number of DTMF digits to collect. The bot waits until this number is reached before processing.                                             |           `"dtmfCollectnumDigits": 6 → system waits until exactly 6 digits are entered.`                     |

## Common ASR Parameters

| **Parameter**               | **Type**             | **Supporting STT/TTS**          | **Description**                                                                                                                                              | **Example** |
|------------------------------|----------------------|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| `alternativeLanguages` (Session Level) | Array of Objects     | Google, Microsoft, Deepgram      | Array of alternative languages the user might speak. Based on the utterance, the ASR chooses from the defined options.                                        | `"alternativeLanguages": [ { "language": "de-DE", "voiceName": "de-DE-KatjaNeural" }, { "language": "fr-FR", "voiceName": "fr-FR-DeniseNeural" } ]` |
| `alternativeLanguages` (Node Level)    | Array of Objects     | Google, Microsoft, Deepgram      | In addition to `voiceName` and `language`, this parameter supports `sttProvider`, `ttsProvider`, and `label`. If a label is configured initially, it updates automatically when the language changes. | `node.alternativeLanguages = [ { "language": "en-ES", "voiceName": "es-ES-ArabellaMultilingualNeural" }, { "language": "en-IN", "voiceName": "en-IN-PrabhatNeural", "ttsLabel": "microsoft2", "ttsProvider": "microsoft", "sttProvider": "microsoft2" } ]` |
| `sttMinConfidence`           | Number (0.1–0.9)     | All                              | If the transcript's confidence score is < this threshold, the input is ignored and the timeout prompt is triggered. Ensures only high-confidence transcriptions are accepted. | `"sttMinConfidence": 0.5` |
| `hints` with phrase-level boost | Array of Objects  | Google, Nvidia                   | Suggests specific phrases to the STT engine to improve accuracy. You can assign a boost value per phrase. Useful for distinguishing similar-sounding words.   | `"hints": [ { "phrase": "benign", "boost": 50 }, { "phrase": "malignant", "boost": 10 }, { "phrase": "biopsy", "boost": 20 } ]` |
| `hints` with `hintsBoost`    | Array + Number       | Google, Microsoft, Nvidia        | Instead of boosting each phrase individually, apply a single boost value to the entire array of hints.                                                        | `"hints": ["benign", "malignant", "biopsy"], "hintsBoost": 50` |
| `sttDisablePunctuation`      | Boolean              | Google, Microsoft                | Controls punctuation in ASR output. `false` enables punctuation (default); `true` disables it.                                                                | `"sttDisablePunctuation": true` |
| `vadEnable`                  | Boolean              | All                              | If `true`, the system delays connecting to cloud recognizer until voice activity is detected.                                                             | `"vadEnable": true` |
| `vadVoiceMS`                 | Number (milliseconds)| All                              | Specifies how many milliseconds of detected speech are required before connecting to cloud recognizer. Only applies if `vadEnable` is `true`.             | `"vadVoiceMS": 500` |
| `vadMode`                    | Number (0–3)         | All                              | Determines the sensitivity of the voice activity detector. Lower values make it more sensitive. Only applies if `vadEnable` is `true`.                        | `"vadMode": 2` |

### Microsoft ASR

| **Parameter** | **Type** | **Supporting STT/TTS** | **Description** | **Example / More Info** |
|---------------|----------|-------------------------|------------------|--------------------------|
| `azureSpeechSegmentationSilenceTimeoutMs` | Number | — | Sets timeout between phrases. Unlike continuous ASR (handled by Voice Gateway), Azure handles segmentation, improving accuracy. | `"azureSpeechSegmentationSilenceTimeoutMs": 5000`|
| `sttEndpointID` | String | — | Specifies a custom Microsoft endpoint instead of the default regional endpoint. | `"sttEndpointID": "custom-endpoint-id-12345"`|
| `azurePostProcessing` | String | — | Enables final transcript enhancements such as text normalization, punctuation, or custom formatting. | `"azurePostProcessing": "enabled"` |
| `azureSpeechRecognitionMode` | String (Enum: `AtStart`, `Continuous`) | — | - `AtStart`: Starts transcription at first detected input and stops after the utterance ends.<br>- `Continuous`: Keeps transcribing without stopping. Ideal for long sessions. | `"azureSpeechRecognitionMode": "Continuous"` |
| `profanityOption` | String (Enum: `masked`, `removed`, `raw`) | — | Controls how profane words appear in the transcript. Default: `raw`. | `"profanityOption": "masked"` |
| `initialSpeechTimeoutMs` | Number (milliseconds) | — | Sets how long the system waits for the user to start speaking before timing out. | `"initialSpeechTimeoutMs": 3000` |
| `requestSnr` | Boolean | — | If set to `true`, includes signal-to-noise ratio in the response. | `"requestSnr": true`|
| `outputFormat` | String (`simple`, `detailed`) | — | Sets the transcript detail level. Default: `simple`. | `"outputFormat": "detailed"` |

### Google ASR

| **Parameter** | **Type** | **Supporting STT/TTS**  | **Description**  | **Example / Notes**  |
|---------------|----------|-------------------------|------------------|----------------------|
| `sttProfanityFilter` | Boolean | — | Enables profanity filtering in transcripts. Default: `false`. | `"sttProfanityFilter": true`|
| `singleUtterance` | Boolean | — | If `true`, returns only a single utterance/transcript. | `"singleUtterance": true` |
| `sttModel` | String | — | Specifies the speech recognition model. Default: `phone_call`. | `"sttModel": "phone_call"` |
| `sttEnhancedModel` | Boolean | — | Enables the use of enhanced models for improved accuracy. | `"sttEnhancedModel": true` |
| `words` | Boolean | — | Enables word-level timestamps in the transcript. | `"words": true` |
| `diarization` | Boolean | — | Enables speaker diarization (that is, identifying speakers). | `"diarization": true`|
| `diarizationMinSpeakers` | Number | — | Sets the minimum number of speakers expected. | `"diarizationMinSpeakers": 2` |
| `diarizationMaxSpeakers` | Number | — | Sets the maximum number of speakers expected. | `"diarizationMaxSpeakers": 5` |
| `interactionType` | String | — | Specifies interaction type (for example, `discussion`, `presentation`, `phone_call`, `voicemail`, `professionally_produced`, `voice_search`, `voice_command`, `dictation`). | `"interactionType": "phone_call"` |
| `naicsCode` | Number | — | Sets a relevant industry NAICS code to tailor recognition. | `"naicsCode": 524210` |
| `googleServiceVersion` | String (`v1`, `v2`) | — | Specifies the Google ASR API version in use. | `"googleServiceVersion": "v2"` |
| `googleRecognizerId` | String | — | Identifies a specific speech recognition model. | `"googleRecognizerId": "projects/my-project/locations/global/recognizers/default"` |
| `googleSpeechStartTimeoutMs` | Number | — | Time (in ms) to wait before detecting speech initiation timeout. | `"googleSpeechStartTimeoutMs": 2000` |
| `googleSpeechEndTimeoutMs` | Number | — | Time (in ms) of silence to wait before detecting end of speech. | `"googleSpeechEndTimeoutMs": 1000` |
| `googleEnableVoiceActivityEvents` | Boolean | — | Enables start/stop speech detection events during recognition. | `"googleEnableVoiceActivityEvents": true` |
| `googleTranscriptNormalization` | Array | — | Normalizes transcripts (for example, punctuation, casing). | `"googleTranscriptNormalization": ["punctuation", "casing"]` |

### AWS ASR

| **Parameter** | **Type** | **Supporting STT/TTS**  | **Description**  | **Example / Notes**  |
|---------------|----------|-------------------------|------------------|----------------------|
| `awsAccessKey` | String | — | AWS access key used for authenticating requests. | `"awsAccessKey": "AKIAIOSFODNN7EXAMPLE"` |
| `awsSecretKey` | String | — | Secret key used with the access key for authentication. | `"awsSecretKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"` |
| `awsSecurityToken` | String | — | Temporary security token for requests using AWS Security Token Service (STS). Optional. | `"awsSecurityToken": "FQoGZXIvYXdzEDQaDJ..."` |
| `awsRegion` | String | — | AWS region for the service requests (for example, `us-west-2`, `eu-central-1`). | `"awsRegion": "us-west-2"`|
| `awsVocabularyFilterName` | String | — | Name of the vocabulary filter used to exclude specific words or phrases from transcription. | `"awsVocabularyFilterName": "BlockedWordsFilter"` |
| `awsVocabularyFilterMethod` | String (enum) | — | Method for handling filtered words: <br>• `"remove"`-Removes the word from transcript<br>• `"mask"`-Replaces the word with asterisks<br>• `"tag"`-Tags the word for reference | `"awsVocabularyFilterMethod": "mask"` |
| `awsLanguageModelName` | String | — | Name of the custom language model to use for domain-specific transcription. | `"awsLanguageModelName": <br>"FinanceDomainModel"` |
| `awsPiiEntityTypes` | Array | — | List of Personally Identifiable Information (PII) entity types to detect. | `"awsPiiEntityTypes": ["NAME", "EMAIL", "SSN"]` |
| `awsPiiIdentifyEntities` | Boolean | — | Indicates whether to detect and highlight PII in the transcript. | `"awsPiiIdentifyEntities": true` |

### NVIDIA ASR

| **Parameter** | **Type** | **Supporting STT/TTS**  | **Description**  | **Example / Notes**  |
|---------------|----------|-------------------------|------------------|----------------------|
| `nvidiaRivaUri` | String | — | gRPC endpoint (`ip:port`) hosting the NVIDIA Riva ASR service. | `"nvidiaRivaUri": "10.0.0.12:50051"` |
| `nvidiaMaxAlternatives` | Number | — | Number of alternative transcriptions to return. | `"nvidiaMaxAlternatives": 3`|
| `nvidiaProfanityFilter` | Boolean | — | Enables or disables profanity filtering in transcripts. | `"nvidiaProfanityFilter": true` |
| `nvidiaWordTimeOffsets` | Boolean | — | Enables word-level timestamp details in the transcript. | `"nvidiaWordTimeOffsets": true` |
| `nvidiaVerbatimTranscripts` | Boolean | — | Indicates whether to return verbatim (unprocessed) transcripts. | `"nvidiaVerbatimTranscripts": false`|
| `nvidiaCustomConfiguration` | Object | — | Object containing key-value pairs for sending custom configuration to NVIDIA Riva. | `"nvidiaCustomConfiguration": {"speech_confidence_threshold": 0.7}` |
| `nvidiaPunctuation` | Boolean | — | Indicates whether to include punctuation in the transcript output. | `"nvidiaPunctuation": true` |

### Deepgram ASR

| **Parameter**              | **Type**             | **Supporting STT/TTS** | **Description**                                                                                                                                                                                                                                                                                      | **Example / Notes**                      |
|---------------------------|----------------------|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|
| `deepgramApiKey`          | String               | —                       | Deepgram API key used for authentication. Overrides settings in the Voice Gateway portal.                                                                                                                                                                                                           | `"dg12345abcd6789xyz" (API key provided by Deepgram for authentication)`                                        |
| `deepgramTier`            | String               | —                       | Specifies the Deepgram tier: `enhanced` or `base`.                                                                                                                                                                                                                                                   | `enhanced (higher accuracy, higher cost) / base (faster, lower cost)`                                        |
| `sttModel`                | String               | —                       | Deepgram model used for processing audio. Possible values: `general`, `meeting`, `phonecall`, `voicemail`, `finance`, `conversationalai`, `video`, `custom`.                                                                                                                                        | `"nova-2-phonecall" (optimized for call audio)`                       |
| `deepgramCustomModel`     | String               | —                       | ID of the custom model.                                                                                                                                                                                                                                                                              | `project-12345-model-abc (custom model ID for domain-specific vocabulary)`                                        |
| `deepgramVersion`         | String               | —                       | Version of the Deepgram model to use.                                                                                                                                                                                                                                                                | `1.2 (use a specific model version for reproducibility)`                                       |
| `deepgramPunctuate`       | Boolean              | —                       | Adds punctuation and capitalization to the transcript.                                                                                                                                                                                                                                               |    `true → Transcript: Hello, how are you? / false → Transcript: hello how are you`  |
| `deepgramProfanityFilter` | Boolean              | —                       | Removes profanity from the transcript.                                                                                                                                                                                                                                                               | `true → "**** this product" instead of profanity`                                        |
| `deepgramRedact`          | Enum (`String`)      | —                       | Redacts sensitive data from transcript. Options: `pci`, `numbers`, `true`, `ssn`.                                                                                                                                                                                                                    | `"pci" → hides credit card numbers in transcript`                                       |
| `deepgramDiarize`         | Boolean              | —                       | Assigns a speaker to each word in the transcript.                                                                                                                                                                                                                                                    | `true → Speaker 1: Hello / Speaker 2: Hi`                                       |
| `deepgramDiarizeVersion`  | String               | —                       | Use `2021-07-14.0` to enable legacy diarization.                                                                                                                                                                                                                                                     | `"2021-07-14.0" (legacy diarization behavior enabled)`                                        |
| `deepgramNer`             | Boolean              | —                       | Enables Named Entity Recognition.                                                                                                                                                                                                                                                                    | `true → Tags entities like Microsoft (ORG), John (PERSON) in transcript`                                        |
| `deepgramMultichannel`    | Boolean              | —                       | Transcribes each audio channel independently.                                                                                                                                                                                                                                                        | `true → Transcribes each audio channel (for example, agent vs. customer) separately`                                       |
| `deepgramAlternatives`    | Number               | —                       | Specifies the number of alternative transcripts to return.                                                                                                                                                                                                                                           | `3 → Returns 3 possible transcriptions ranked by confidence`                                       |
| `deepgramNumerals`        | Boolean              | —                       | Converts written numbers.                                                                                                                                                                                                                              | `true → "twenty five" → "25"`                                       |
| `deepgramSearch`          | Array                | —                       | An array of terms or phrases to search within the submitted audio.                                                                                                                                                                                                                                  | `["refund", "cancellation"] → Flags all mentions of these words in transcript`                                        |
| `deepgramReplace`         | Array                | —                       | An array of terms or phrases to search and replace within the submitted audio.                                                                                                                                                                                                                       | `[{"search": "um", "replace": ""}] → Removes filler words like um`                                       |
| `deepgramKeywords`        | Array                | —                       | Keywords to boost or suppress in transcription for better context understanding.                                                                                                                                                                                                                     | `["premium", "loan"] → Boosts recognition accuracy for these terms`                                        |
| `deepgramEndpointing`     | Boolean / Number     | —                       | Sets the silence duration (in ms) to consider a speaker has finished. Use `false` to disable. Default is 10 ms. Recommend ≤ 1000 ms. For longer pauses, use `utteranceEndMs`.                                                                                                                        | `500 → Ends utterance after 500 ms silence`                                       |
| `deepgramVadTurnoff`      | Number               | —                       | Not documented. Placeholder for Voice Activity Detection (VAD) settings.                                                                                                                                                                                                                             | `2000 → Turns off VAD after 2 seconds of inactivity`                                        |
| `deepgramTag`             | String               | —                       | Adds a tag to the request. Useful for tracking and usage reports.                                                                                                                                                                                                                                   | `"BankingDemo-2025" → Helpful for tracking specific project/test runs`                                        |
| `deepgramUtteranceEndMs`  | Number               | —                       | Duration (ms) of silence used to detect the end of an utterance in live audio.                                                                                                                                                                                                                       | `1000 → Marks utterance end after 1s silence in live calls`                                       |
| `deepgramShortUtterance`  | Boolean              | —                       | Immediately returns transcript when `is_final` is set. Ideal for short commands.                                                                                                                                                                                                                     | `true → Immediately returns transcript for "Play" command without waiting for long silence`                                       |
| `deepgramSmartFormatting`     | Boolean              | —                       | Enables Deepgram's Smart Formatting for improved transcript readability. Behavior depends on model/language combination.                                                                                                                                                                             | `true → "one hundred dollars" → "$100"`                                        |
| `deepgramFillerWords`     | Boolean              | —                       | Includes filler words such as `uh` or `um` in transcripts.                                                                                                                                                                                                                                           | `true → Transcript includes uh, um instead of removing them`                                        |
| `deepgramkeyterm`         | String               | —                       | Boosts recall accuracy for key terms or phrases. Improves Keyword Recall Rate (KRR) by up to 90%.                                                                                                                                                                                                   | `["PIN number", "account ID"] → Special terms to highlight in transcription`                                       |
| `deepgramEntityPrompt`         | String               | —                       | Provides custom instructions or hints to Deepgram’s Named Entity Recognition (NER) system to improve detection and extraction of specific entities in transcripts. Useful for tailoring recognition to domain-specific terms (for example, product names, organizations).                                                                                                                                                                                                   | `Extract all mentions of credit card numbers and bank names`                                       |
| `eot_threshold `         | Float               | —                       | Specifies the confidence required to trigger an `EndOfTurn` event. Default value is `0.7`. Supported range is `0.5–0.9`. Higher values improve turn-detection reliability but slightly increase response latency.                                                                                                                                                                                                   |      —                                  |
| `eager_eot_threshold`         | Float               | —                       | Specifies the confidence required to trigger an `EagerEndOfTurn` event. The system doesn't set a default value. Supported range is `0.3–0.9`. This parameter enables early response generation. Lower values trigger earlier responses but increase the likelihood of false starts.                                                                                                                                                                                                   | —                                       |
| `eot_timeout_ms`         | Integer               | —                       | Specifies the maximum duration of silence, in milliseconds, before the system forces an `EndOfTurn` event regardless of confidence. Default value is `5000 ms`. Supported range is `500–10000 ms`.                                                                                                                                                                                                   | —                                      |
| `mipOptOutType`         | Boolean               | —                       | Specifies whether a user opts out of a specific feature or service.                                                                                                                                                                                                   | —                                      |
| `entityPromptType`         | String               | —                       | Specifies  the type of prompt used for entities, which may influence how information is presented or requested during interactions.                                                                                                                                                                                                   | —                                      |

### Azure ASR

| **Parameter**        | **Type**                 | **Supporting STT/ TTS**                   | **Description**                                                                                                                                                                                                                       | **Examples**                                       |
|------------------|----------------------|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| `azureAudioLogging`  | Boolean              | —                                   | Enables the logging of audio data for applications utilizing Azure's speech services.                                                                                                                                                              |    —                                            |

## Common TTS Parameters

| **Parameter**        | **Type**                 | **Supporting STT/ TTS**                   | **Description**                                                                                                                                                                                                                       | **Examples**                                       |
|------------------|----------------------|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| `disableTtsCache`  | Boolean              | ALL                                   | Using cache for calling TTS engine if same statement or word found.                                                                                                                                                              |    `"disableTtsCache": true`                                            |
| `ttsEnhancedVoice` | String               | AWS                                   | Amazon Polly has four voice engines that convert input text into life-like speech. These include Generative, Long-form, Neural, and Standard. To use an Amazon Polly voice                                                      | `"ttsEnhancedVoice": "neural"` |
| `ttsGender`        | String (Male, Female, Neutral) | Google                                |                                                                                                                                                                                                                                   |   `"ttsGender": "FEMALE"`                                             |
| `ttsLoop`          | Number / String      | All                                   | Use the `ttsLoop` parameter in Text-to-Speech (TTS) systems to control the repeated playback of a TTS-generated message. When `ttsLoop` is enabled, the specified TTS message plays multiple times in a loop.       |`"ttsLoop": 2` |
| `earlyMedia`       | Boolean              | All                                   | Use the **Early Media** parameter in TTS (Text-to-Speech) to control the playback of audio prompts or messages before a call connects.                                                                             |        `"earlyMedia": true`                                        |
| `ttsOptions`       | Object               | PlayHT, Deepgram, ElevenLabs, Whisper | It's used to tune the TTS.|                                 `"ttsOptions": {"stability": 0.7, "style": "conversational"}`               |

### TTS Options in Voice Gateway

Voice Gateway now supports a `ttsOptions` parameter that lets bot developers to customize Text-to-Speech (TTS) messages by passing dynamic objects tailored to the specific TTS provider. Depending on the provider, use these options to fine-tune aspects like voice settings, speed, and other properties.

!!! Note

    Each TTS provider has its own set of customizable parameters. For more detailed information on the parameters they support, refer to their official websites.

### Structure of `ttsOptions`

The `ttsOptions` object contains provider-specific settings in a key-value format. Following are examples of different TTS providers:

#### ElevenLabs

* `optimize_streaming_latency`: Adjusts the latency during streaming.
* `voice_settings`: Includes various voice customization options like `stability`, `similarity_boost`, and `use_speaker_boost`. [Learn more](https://elevenlabs.io/docs/creative-platform/playground/text-to-speech#voice-settings).
* `speed`: Controls the speed of the generated speech. The default value is 1, and the allowable values are >=0.7 and <=1.2. Values less < 1 slow down the speech, while values > 1 speed it up. [Learn more](https://elevenlabs.io/docs/conversational-ai/customization/voice/speed-control).

#### PlayHT

* `quality`: Sets the quality of the audio output.
* `speed`: Controls the playback speed.
* `emotion`, `voice_guidance`, `style_guidance`, and `text_guidance`: Let further customization of the voice's emotional tone and style. [Learn more](https://docs.play.ht/reference/api-generate-tts-audio-stream).
* `Voice_engine`: The voice engine used to synthesize the voice. It defaults to PlayDialog.

!!! Note

    Use the play-dialog model from PlayHT instead of the old models, as the old models are returning errors. Set the following parameters:

    `ttsProvider = playht`  
    `ttsLanguage = en-US`  
    `ttsOptions = {"voice_engine": "PlayDialog"}`  
    `voiceName = <respective voice name>` 

#### Deepgram

Apart from generic parameters like `ttsLanguage` and `voiceName`, which are common across most TTS engines, Deepgram offers a few additional parameters that enhance customization:

* **encoding (string)**: You can specify the desired encoding format for the output audio file, such as `mp3` or `wav`.
* **model (enum)**: Defines the AI model used for synthesizing the text into speech. The default model is `aura-asteria-en`, optimized for natural-sounding English voice output.
* **sample_rate (string)**: This enables you to set the sample rate of the audio output, offering control over the quality and clarity of the sound produced.
* **Container**: The Container feature lets users to specify the desired file format wrapper for the output audio generated through text-to-speech synthesis.

These parameters provide additional flexibility for developers to fine-tune the audio output to meet their specific needs. Set all these parameters inside ttsOptions. [Learn more](https://developers.deepgram.com/docs/tts-rest).

#### AWS

Apart from generic parameters like `ttsLanguage` and `voiceName`, which are common across most TTS engines, Aws offers a few additional parameters that enhance customization, like `ttsEnhanceVoice`, also known as an engine.

Amazon Polly has four voice engines that convert input text into lifelike speech. These include `standard`, `neural`, `generative`, and `long-form`. 

`ttsEnhancedVoice = “neural”`

#### Open AI (Whisper)

Apart from generic parameters like `ttsLanguage` and `voiceName`, which are common across most TTS engines, Whisper offers a few additional parameters that enhance customization, like a model.

For real-time applications, the standard tts-1 model provides the lowest latency but at a lower quality than the tts-1-hd model. Because of the audio generation process, tts-1 may produce more static in certain situations than tts-1-hd. Sometimes, the audio may not have noticeable differences depending on your listening device and the person.

```
ttsOptions = {
   model = "tts-1"
}
```

## Common Use Cases for Call Control Parameters

### Continuous ASR

Continuous ASR (Automatic Speech Recognition) is a feature that lets tuning Speech-to-Text (STT) recognition for the collection of phone numbers, customer identifiers, and other strings of digits or characters, which, when spoken, are often spoken with pauses between utterances. Two parameters to enable it are:

| **Parameter**              | **Type**                         | **Supporting STT/TTS**                        | **Description**                                                                                                                                                                                                                                                                                                                                     |
| -------------------------- | -------------------------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `continuousASRTimeoutInMS` | Number (milliseconds)            | STT-Google, Microsoft<br>TTS-Not Required | Duration of silence (in milliseconds) to wait after receiving a transcript from the STT vendor before returning the result. If another transcript is received before this timeout, transcripts combine and recognition continues. The combined result is returned after silence exceeds the timeout. <br><br>**Example:** `5000` for 5 seconds |
| `continuousASRDigits`      | Digit (for example, `*`, `%`, `&`, `#`) | STT-Google, Microsoft<br>TTS-Not Required | A DTMF key that terminates the gather operation and returns the collected results immediately.

### Handling Bot Delay

Configure Voice Gateway to act when the bot takes time to respond to a message.

#### Handle Bot Delay After User Input

The delay is only applied when Voice Gateway sends a response to the bot and is waiting for the bot's reply. This includes delays at the Entity Node, Confirmation Node, or Message Node with an "On Intent" (User-Bot delay).  
<img src="../images/handle-bot-delay.png" alt="Handle Bot Delay" title="Handle Bot Delay" style="border: 1px solid gray; zoom:80%;">

If a delay occurs between two Message nodes, the bot developer must handle it manually by playing audio and stopping it after the delay.

By setting timeout properties, configure the following actions:  

* Play a textual prompt to the user  
* Play an audio file to the user  
* Disconnect the call  

**Use Case**:

* To play a message to the user, configure a timeout on the botNoInputTimeoutMS parameter and define the action:
* To play a textual prompt, set the prompt on the `botNoInputSpeech` parameter.
* To play an audio file, set the file URL using the `botNoInputUrl` parameter.
* To replay the message if the timeout exceedes multiple times, configure the number of retries using the botNoInputRetries parameter.
* Configure a separate timeout for disconnecting the call using the `botNoInputGiveUpTimeoutMS` parameter, set to 30 seconds by default.

**Parameters Description**

The following table lists the bot parameters used to configure this feature:

| **Parameter**               | **Type**       | **Description**                                                                                                                                                                                                      | **Required**           |
| --------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `botNoInputGiveUpTimeoutMS` | Number         | Defines the timeout (in milliseconds) for the bot response before disconnecting the call. If no response is received when the timeout expires, Voice Gateway disconnects the call.<br><br>**Default:** 30 seconds. | Yes<br>Default: 30 sec |
| `botNoInputTimeoutMS`       | Number         | Defines the timeout (in milliseconds) before playing a prompt to the user. If no input is received from the bot, Voice Gateway plays a textual prompt (`botNoInputSpeech`) or an audio file (`botNoInputUrl`).     | Yes                    |
| `botNoInputRetries`         | Number         | Specifies the number of times the bot retries after a no-input timeout. For example, if set to `2`, and timeout is 1000 ms, the prompt plays two more times if no bot response is received.                   | Yes                    |
| `botNoInputSpeech`          | String / Array | Defines the prompt to play when no input is received from the bot. Can include:<br>- **Plain text**<br>- **SSML**<br>- **Audio URL**<br><br>**Example:** `["https://audiourl", "This is second message"]`            | Yes                    |
| `botNoInputUrl`             | String         | Specifies a URL from which an audio file plays to the user when the bot doesn't respond within the defined timeout.                                                                                             | Yes                    |

Example:  
<img src="../images/message-node-parameters.png" alt="Example Configuration" title="Example Configuration" style="border: 1px solid gray; zoom:80%;">

!!! Note

      `botNoInputSpeech` can contain multiple messages, including audio URLs. Example: `botNoInputSpeech` = [“this is first delay Msg”, `[https://](https://thisdummy.wav)`,” this is third textual Message”].

#### Handle Delay Between Two Message Nodes

Voice Gateway can only handle delays when it sends a response to the bot and waits for the bot's reply. If a delay occurs, Voice Gateway can handle it. If a delay occurs between a Message node or Script node where the user hasn’t spoken, Voice Gateway won’t be aware of the delay, and the bot developer must handle it manually.

Place a Service Node between two Message nodes (delay observed between two Message nodes):
Manage this manually, as the gateway has received a command to play a message and isn't waiting for user input. The gateway won't initiate a delay timer and waits for the next bot message.

To handle this scenario:

   * Play music before the API call in the Message node.
   * Configure the Service node.
   * Deliver the message after the Service node.

!!! Note

      If you receive a response from the API and don’t want to play the full music, immediately abort the music and play the Message node prompt using the channel override utility function:

   `print(voiceUtils.abortPrompt(“Dummy message“))` → (The message parameter is optional).  
      <img src="../images/optional-message-parameter.png" alt="Optional Message Parameter" title="Optional Message Parameter" style="border: 1px solid gray; zoom:80%;">

### Barge-In Scenarios

The Barge-In feature controls Voice Gateway behavior in scenarios where the user starts speaking or dials DTMF digits while the bot is playing its response to the user. In other words, the user interrupts ("barges-in") the bot.

| **Parameter**                    | **Type**                                                                             | **Supporting STT/TTS**                           | **Description**                                                                                                               |
| -------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `listenDuringPrompt`             | Boolean (true or false)<br>Similar to Barge-In                                       | STT-Google and Microsoft<br>TTS-Not Required | If `false`, the bot doesn't listen for user speech until the response finishes playing.<br>**Default:** `true`.              |
| `bargeInMinWordCount`            | Number                                                                               | STT-Google and Microsoft<br>TTS-Not Required | If Barge-In is enabled, the bot only interrupts playback after speaking the specified number of words.<br>**Default:** `1`. |
| `bargeInOnDTMF`                  | Boolean                                                                              | STT-Google and Microsoft<br>TTS-Not Required | Lets users to press a key to interrupt the audio playback. After pressing a key, the user can speak their input.            |
| `dtmfCollectInterDigitTimeoutMS` | Number (milliseconds)                                                                | STT-Google and Microsoft<br>TTS-Not Required | Time allowed between DTMF key presses before sending all digits to the bot.                                                   |
| `dtmfCollectSubmitDigit`         | Number                                                                               | STT-Google and Microsoft<br>TTS-Not Required | Special digit that submits all collected DTMF input immediately, bypassing the timeout or max digit limit.                    |
| `dtmfCollectMaxDigits`           | Number                                                                               | STT-Google and Microsoft<br>TTS-Not Required | Maximum number of DTMF digits to collect.<br>Example: If set to `5` and input is `1234567`, only processes `12345`.        |
| `dtmfCollectminDigits`           | Number                                                                               | STT-Google and Microsoft<br>TTS-Not Required | Minimum number of DTMF digits to collect. <br>**Default:** `1`.                                                               |
| `dtmfCollectnumDigits`           | Number                                                                               | STT-Google and Microsoft<br>TTS-Not Required | Exact number of DTMF digits to collect.                                                                                       |
| `input`                          | Array of strings<br>Valid values: `['digits']`, `['speech']`, `['digits', 'speech']` | STT-Google and Microsoft<br>TTS-Not Required | Specifies allowed input types. <br>**Default:** `['digits']`.                                                                 |

### Language Detection

In this setup, developers don't need to use DTMF or other methods to switch the bot's language. Instead, the bot automatically detects the language based on the user's utterance.

For example, if a user speaks in English, the conversation continues in English. If the user switches to Spanish, the language switches to Spanish. [Learn more](../../app-settings/language-management/managing-languages-for-multilingual-vas.md#adding-a-language-to-an-ai-agent).

**Configuration Steps**:

1. In Bot Builder (on the child bot), navigate to **Languages,** add a new language (for example, Spanish), and enable it.
2. Select English as the default language from the language dropdown menu. [Learn more](../../app-settings/language-management/managing-languages-for-multilingual-vas.md#adding-a-language-to-an-ai-agent).
3. Create a new dialog titled `Language Detection` (or choose a suitable name).
4. Inside this dialog, add an **entity node** to capture user intent input.
5. Set the entity precedence to **'Intent over Entity'** in the advanced controls.
6. Add the **AlternativeLanguage** call control parameter.
7. Switching languages mid-conversation isn't supported; doing so can cause the bot to lose context. Language detection should happen at the beginning of the conversation (for example, in the welcome task), with the switch based on the user's first utterance.
8. Opt for **'Intent over Entity'** to prioritize intent detection in the user's language.
9. Create another dialog with a specific intent (for example, "book flight") and add relevant entities (for example, selecting source and destination).
10. In the entity configuration, include the following call parameters:
    * **Name**: alternativeLanguages
    * **Value**: [] (Leave it empty if no further language switching is needed).
11. Add utterances in the desired language and train the bot.
12. Change the language to Spanish in the bot language dropdown.
13. Open the intent and update utterances and intent details in Spanish.
14. Update entity details in Spanish as well.
15. Publish the bot.

These steps make sure the bot can detect the user's language at the start and adjust the conversation flow accordingly.

### Click-to-Call

To configure ASR (Automatic Speech Recognition) and TTS (Text-to-Speech) in a ClickToCall flow, add the call control parameters in the [Script Task](../../flows/node-types/script-task.md) node at the start of the flow. Set the parameters must in the following format:

```
const ccParamList = [
    { key: 'ttsLanguage', val: 'ja-JP' },
    { key: 'ttsProvider', val: 'google' },
    { key: 'voiceName', val: 'ja-JP-Wavenet-B' },
   
    { key: 'sttLanguage', val: 'ja-JP'},
    { key: 'sttProvider', val: 'microsoft'}

];

ccParamList.forEach((ccParam) => {
    userSessionUtils.setCallControlParam(ccParam.key, ccParam.val);
})
```

| **Parameter** | **Type** | **Description**                                            | **Example**     |
|---------------|----------|------------------------------------------------------------|-----------------|
| `ttsLanguage` | String   | Specifies the language code for text-to-speech output.     | ja-JP           |
| `ttsProvider` | String   | Defines the provider for text-to-speech services.          | google          |
| `voiceName`   | String   | Identifies the voice used for text-to-speech output.       | ja-JP-Wavenet-B |
| `sttLanguage` | String   | Specifies the language code for speech-to-text recognition.| ja-JP           |
| `sttProvider` | String   | Defines the provider for speech-to-text services.          | Microsoft       |