# Features and Capabilities

This section highlights additional features and capabilities of the Voice Gateway.

## SSML (Speech Synthesis Markup Language)

Using SSML allows developers to control aspects of speech synthesis such as pronunciation, volume, pitch, and rate of speech. Here's a guide on how to use SSML effectively:

### Understanding SSML Basics

* SSML is an XML-based markup language used to control text-to-speech synthesis.
* It provides tags to control various aspects of speech synthesis, including pronunciation, prosody, volume, and more.
* SSML is supported by many speech synthesis systems, including Amazon Polly, Google Text-to-Speech, and others.

### Basic SSML Tags

* `&lt;speak>`: This is the root element of an SSML document and indicates the start and end of the speech content.
* `&lt;break>`: Inserts a pause into the speech synthesis. You can specify the duration of the pause using the `time` attribute.
* `&lt;emphasis>`: Emphasizes a portion of the text. You can specify the level of emphasis using the `level` attribute. 
* `&lt;prosody>`: Modifies aspects of speech such as pitch, rate, and volume. Attributes include `pitch`, `rate`, and `volume`.
* `&lt;phoneme>`: Specifies the pronunciation of a word using phonetic alphabet symbols.
* `&lt;say-as>`: Indicates how a particular piece of text should be pronounced, such as numbers, dates, or currency.
* `&lt;audio>`: Embeds audio files into the speech output.

### Using SSML in Code

When using SSML in your code, wrap the SSML markup within `&lt;speak>` tags.

Example:
````
&lt;speak>

    Here is a number &lt;w role='amazon:VBD'>read&lt;/w>

    as a cardinal number:

    &lt;say-as interpret-as='cardinal'>12345&lt;/say-as>.

    Here is a word spelled out:

    &lt;say-as interpret-as='spell-out'>hello&lt;/say-as>.

&lt;/speak>
````

### Voice Tag Support

#### Support For Voice Elements in SSML

In the speak tag, follow below-mentioned steps:

1. Empty speak tag without attributes **&lt;speak>**
    1. In this case, Voice Gateway will construct **voice** and **language** elements on its own based on values supplied in Call control params.
2. Customized speak tag with attributes **&lt;speak version="1.0" xml:lang="en-US" xmlns="**[W3C Speech Synthesis namespace](https://www.w3.org/2001/10/synthesis) **">**
    1. In this case, Voice Gateway will send the SSML without any modifications to the TTS engine. Follow option 2 and the voice element will work.

Example:
```
<speak version="1.0" xml:lang="en-US" xmlns="https://www.w3.org/2001/10/synthesis"><voice name="en-US-AvaNeural">Hi, I'm eBay's automated phone assistant. Let me know in a few words how I can help.</voice></speak>
```