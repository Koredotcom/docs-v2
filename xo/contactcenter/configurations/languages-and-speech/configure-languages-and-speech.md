# Languages and Speech

This feature lets you configure the language and speech settings within Contact Center module, to manage how your contact center uses languages and speech recognition.

Go to **Contact Center AI** > **CONFIGURATIONS** > **Languages & Speech** to access Languages and Speech settings.
<img src="../images/languages-and-speech.png" alt="Languages & Speech Page" title="Languages & Speech Page" style="border: 1px solid gray; zoom:80%;"/>

This section of the Contact Center AI module provides access to the following settings:

* **[Language Supported for Bot & Agent](#list-of-supported-languages-for-ai-agents-bots-and-human-agents)**: Define the languages you want agents and automation to work with.
* **[Hold Audio](#hold-audio)**: Define the default audio that plays to callers while on hold or waiting in the queue.
* **[Voice Authentication](#voice-authentication)**: Voice authentication uses voiceprints to identify and authenticate users for secure access.

## Language Management

This feature helps manage the languages supported by the contact center infrastructure. You can add support for specific languages and enable, disable specific languages.

To manage languages, select **Supported Languages**.
<img src="../images/supported-languages.png" alt="Supported Languages Panel" title="Supported Languages Panel" style="border: 1px solid gray; zoom:80%;"/>

Administrators can add languages for AI Agents while setting up the app or later by accessing [Language Management](../../../app-settings/language-management/managing-languages-for-multilingual-vas.md).

### Add a Language

Follow these steps to add a new language:

1. Select the languages from the **Language** pane.
    <img src="../images/agent-supported-languages.png" alt="Add Language Window" title="Add Language Window" style="border: 1px solid gray; zoom:70%;">
2. Select **Save** to save your new languages.

### Disable and Re-Enable a Language

To disable a language and its access flows, uncheck its corresponding checkbox, then select **Save**. This deactivates the language, and it's no longer be available within the selected access channels; however, it won't be removed.

You can enable the language again later by selecting its corresponding checkbox, then saving.
<img src="../images/unchecked-status.png" alt="Enable Language Check-box" title="Enable Language Check-box" style="border: 1px solid gray; zoom:70%;">

### List of Supported Languages for AI Agents (Bots) and Human Agents

The system supports the following languages for AI Agents (Bots) and Human Agents:

| Afrikaans       | English        | Indonesian      | Malayalam       | Sesotho         | Ukrainian       |
|-----------------|----------------|-----------------|-----------------|-----------------|-----------------|
| Albanian        | Esperanto      | Irish           | Maltese         | Sona            | Urdu            |
| Amharic         | Estonian       | Italian         | Maori           | Sinhala (Sinhalese) | Uyghur          |
| Arabic          | Filipino       | Japanese        | Marathi         | Slovak          | Uzbek (Latin)   |
| Armenian        | Finnish        | Javanese        | Mongolian (Cyrillic) | Slovenian      | Vietnamese      |
| Assamese        | French         | Kannada         | Myanmar (Burmese) | Somali         | Welsh           |
| Azerbaijani     | Galician       | Kazakh          | Nepali          | Spanish         | Wolof           |
| Basque          | German         | Khmer           | Norwegian       | Sudanese        | Xhosa           |
| Belarusian      | Georgian       | Kinyarwanda     | Nyanja (Chichewa) | Swahili        | Yiddish         |
| Bangla          | Greek          | Korean          | Odia            | Swedish         | Yoruba          |
| Bosnian         | Gujarati       | Kurdish (Central) | Persian       | Tagalog         | Zulu            |
| Bulgarian       | Haitian Creole | Kyrgyz          | Polish          | Tajik           |                 |
| Catalan         | Hausa          | Lao             | Portuguese (Brazil) | Tamil         |                 |
| Cebuano         | Hawaiian       | Latin           | Portuguese (European) | Tatar         |                 |
| Chinese Simplified | Hebrew     | Latvian         | Punjabi         | Telugu          |                 |
| Corsican        | Hindi          | Lithuanian      | Russian         | Thai            |                 |
| Croatian        | Hmong Daw      | Luxembourgish   | Romanian        | Tibetan        |                 |
| Czech           | Hungarian      | Macedonian      | Samoan          | Traditional Chinese |                 |
| Danish          | Icelandic      | Malagasy        | Scots Gaelic    | Turkish         |                 |
| Dutch           | Igbo           | Malay           | Serbian (Cyrillic) | Turkmen       |                 |

## Hold Audio

This option helps configure the audio played to a caller while on hold or waiting in the queue.

To configure the **Hold Audio**, go to **Languages & Speech** and select the **Hold Audio** option.  
<img src="../images/hold-audio.png" alt="Hold Audio" title="Hold Audio" style="border: 1px solid gray; zoom:70%;">

### Add Hold Audio Files

1. In the **Hold Audio** panel, select **Browse** to select and upload your _.WAV_ audio file. Alternatively, you can drag the file to the panel.
1. After the file uploads, you can adjust the audio file name in the **Rename Audio** text area.
2. Select **Save** to add the new audio file and it's automatically added to the **Hold Audio** list. The uploaded audio plays to the caller while on hold or waiting in the queue.
    <img src="../images/configure-hold-tone.gif" alt="Add Hold Audio" title="Add Hold Audio" style="border: 1px solid gray; zoom:70%;">

### Delete Hold Audio Files

Follow these steps to delete hold audio files:

1. Delete a file from the saved list by selecting the **Delete** icon next to it. The system asks you to confirm your choice. Re-upload the files deleted from the list if you change your mind.
2. Remove an uploaded file that hasn't been saved to the list by selecting the **Delete (x)** option on the upper right corner of the upload panel.
    <img src="../images/delete-audio-file.png" alt="Delete Audio File" title="Delete Audio File" style="border: 1px solid gray; zoom:70%;">

## Voice Authentication

Voice authentication uses voiceprints to identify and authenticate users for secure access.

Follow these steps to configure voice authentication:

1. Go to **Languages & Speech** and select the **Voice Authentication** option.

2. Turn on the toggle to Enable Voice Biometric Authentication and select the Voice Biometric Provider. You can choose between **Illuma** and **ID R&D**.  
    <img src="../images/voice-authentication.png" alt="Voice Authentication" title="Voice Authentication" style="border: 1px solid gray; zoom:60%;">

3. Enter the Host URL and the API key provided by the Voice Biometric Provider.

4. Select **Save** to apply the changes.