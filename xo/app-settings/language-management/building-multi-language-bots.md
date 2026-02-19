# Getting Started with Multilingual AI Agent

Consumers are more likely to engage with AI Agents that communicate in their preferred language. The Kore.ai XO Platform supports enabling multiple languages within an assistant without having to rebuild the definitions. The platform supports over 100 languages and you can choose to enable any of these languages for your assistant. You can start building with one language and enable additional languages as and when you need them.  

This article takes you through the general context within which multilingual AI Agents work. It discusses language use in AI Agent-user conversations and in NLU processes, language enablement options, as well as language detection and selection. 


## Building a Multilingual AI Agent

If you want to build a Multilingual AI Agent, there are a few points to keep in mind:

  1. There is a set of basic building blocks to a multilingual AI Agent: the language in which it talks to users, the language in which you train it, and the process through which it detects and selects which languages to use. Please continue reading this article to learn more.
  2. You can create a new AI Agent or add new languages to an existing one. Read more about managing languages [here](managing-languages-for-multilingual-vas.md){:target="_blank"}.
  3. Multilingual AI Agents have language-specific components and some features exhibit different behaviors compared to single language assistants. Read more about this [here](multilingual-vas-components-feature-support.md){:target="_blank"}.
  4. Translation can be automated using pre-built translation services from providers such as Microsoft or Google; or custom services, including any that you may build in-house. Read [here](managing-translation-services.md){:target="_blank"} to learn more.


## The Conversation (AI Agent) Language

Enabling a language requires you to train the model to understand the user’s input and present the responses in the user’s language. To achieve this, the platform allows you to choose a **Conversation (AI Agent) Language** and **NLU Language** for every language that you would like to enable. In most cases, the Conversation Language can be the same as the NLU Language.

Conversation Language is the one that users use to interact with the assistant. You can choose any of the over 100 languages as the Conversation Language. You can define the responses (prompts, messages. etc.,) in the Conversation Language. 

You can also use the automatic response translation feature when you or your team does not have expertise in the user’s language. You can write the responses in your preferred language and the platform will automatically translate them to the user’s language during the conversation. 


### Supported AI Agent Languages

The following are the Conversation Languages supported by the Platform:

<table border="1">
<tr>
<td>Afrikaans – af</td>
<td>Haitian_creole – ht</td>
<td>Romanian – ro</td>
</tr>
<tr>
<td>Amharic  – am</td>
<td>Hungarian – hu</td>
<td>Russian – ru</td>
</tr>
<tr>
<td>Assamese – as</td>
<td>Irish – ga</td>
<td>Sinhalese – si</td>
</tr>
<tr>
<td>Arabic – ar</td>
<td>Indonesian – id</td>
<td>Slovak – sk</td>
</tr>
<tr>
<td>Azerbaijani – az</td>
<td>Igbo –  ig</td>
<td>Slovenian – sl</td>
</tr>
<tr>
<td>Armenian – hy</td>
<td>Icelandic – is</td>
<td>Spanish – es</td>
</tr>
<tr>
<td>Albanian  – sq</td>
<td>Italian – it</td>
<td>Samoan – sm</td>
</tr>
<tr>
<td>Bulgarian – bg</td>
<td>Japanese – ja</td>
<td>Shona – sn</td>
</tr>
<tr>
<td>Belarusian – be</td>
<td>Javanese – jv</td>
<td>Somali – so</td>
</tr>
<tr>
<td>Bengali/Bangla – bn</td>
<td>Kazakh – kk</td>
<td>Serbian – sr</td>
</tr>
<tr>
<td>Basque – eu</td>
<td>Khmer – km</td>
<td>Sesotho – st</td>
</tr>
<tr>
<td>Bosnian – bs</td>
<td>Kannada – kn</td>
<td>Sundanese – su</td>
</tr>
<tr>
<td>Burmese – my</td>
<td>Korean – ko</td>
<td>Swedish – sv</td>
</tr>
<tr>
<td>Cebuano – ceb</td>
<td>Kurdish – km</td>
<td>Swahili – sw</td>
</tr>
<tr>
<td>Catalan – ca</td>
<td>Kyrgyz – ky</td>
<td>Tamil – ta</td>
</tr>
<tr>
<td>Chinese – izh</td>
<td>Kinyarwanda -rw</td>
<td>Tagalog - tl</td>
</tr>
<tr>
<td>Corsican – co</td>
<td>Latin – la</td>
<td>Tibetan – bo</td>
</tr>
<tr>
<td>Croatian – hr</td>
<td>Luxembourgish – lb </td>
<td>Telugu – te</td>
</tr>
<tr>
<td>Czech – cs</td>
<td>Laothian/Laos/lao – lo</td>
<td>Tajik – tg</td>
</tr>
<tr>
<td>Danish – da</td>
<td>Lithuanian – lt</td>
<td>Thai – th</td>
</tr>
<tr>
<td>Dutch – nl</td>
<td>Latvian – lv</td>
<td>Turkmen – tk</td>
</tr>
<tr>
<td>English – en</td>
<td>Marathi – mr</td>
<td>Tagalog/Filipino - fil</td>
</tr>
<tr>
<td>Esperanto – eo</td>
<td>Malay – ms</td>
<td>Turkish – tr</td>
</tr>
<tr>
<td>Estonian – et</td>
<td>Malagasy – mg</td>
<td>Tatar – tt</td>
</tr>
<tr>
<td>Finnish – fi</td>
<td>Maori – mi</td>
<td>Uighur/Uyghur – ug</td>
</tr>
<tr>
<td>French – fr</td>
<td>Macedonian – mk</td>
<td>Urdu – ur</td>
</tr>
<tr>
<td>Frisian – fy</td>
<td>Maltese – mt</td>
<td>Ukrainian – uk</td>
</tr>
<tr>
<td>German – de</td>
<td>Malayalam – ml</td>
<td>Uzbek – uz</td>
</tr>
<tr>
<td>Greek – el</td>
<td>Mongolian – mn</td>
<td>Vietnamese – vi</td>
</tr>
<tr>
<td>Galician – gl</td>
<td>Nepali – ne</td>
<td>Wolof – wo</td>
</tr>
<tr>
<td>Georgian – ka</td>
<td>Norwegian – nb</td>
<td>Welsh – cy</td>
</tr>
<tr>
<td>Gujarati – gu</td>
<td>Nyanja – ny</td>
<td>Xhosa – xh</td>
</tr>
<tr>
<td>Hausa – ha</td>
<td>Oriya/Odia – or </td>
<td>Yiddish – yi</td>
</tr>
<tr>
<td>Hawaiian – haw</td>
<td>Punjabi – pa</td>
<td>Yoruba – yo</td>
</tr>
<tr>
<td>Hebrew – he</td>
<td>Polish – pl</td>
<td>Zulu – zo</td>
</tr>
<tr>
<td>Hindi – hi</td>
<td>Portuguese (Brazilian) – pt</td>
<td></td>
</tr>
<tr>
<td>Hmong – hmn</td>
<td>Portuguese (European) - pt_pt</td>
<td></td>
</tr>
<tr>
<td>Hmong – hmn</td>
<td>Persian – fa</td>
<td></td>
</tr>
</table>



## The NLU Language

The NLU Language is the one that you train the assistant with, to identify the user’s intents. The NLU model is built using the NLU Language that you choose. This language can be the same as the Conversation language or it can be any other supported language. 


### Supported NLU Languages

The following are the NLU Languages supported by the platform. While most of the NLU features are supported in all languages, there are some exceptions, [see here for more details](multi-lingual-bot-behavior.md){:target="_blank"}.

<table border="1">
<tr>
<td>Arabic – ar</td>
<td>Kazakh (post v7.2 release) – kk</td>
</tr>
<tr>
<td>Chinese Simplified – zh_cn</td>
<td>Marathi (post v9.0 release) – mr</td>
</tr>
<tr>
<td>Chinese Traditional -zh_tw</td>
<td>Norwegian (post v8.1 release) – nb</td>
</tr>
<tr>
<td>Catalan (post v9.0 release) – ca</td>
<td>Polish (post v7.0 release) – pl</td>
</tr>
<tr>
<td>Dutch – nl</td>
<td>Portuguese (Brazilian) – pt</td>
</tr>
<tr>
<td>English – en</td>
<td>Portuguese (European) - pt_pt</td>
</tr>
<tr>
<td>French – fr</td>
<td>Russian (post v7.0 release) – ru</td>
</tr>
<tr>
<td>Finnish (post v6.4 release) – fi</td>
<td>Swedish (post v7.1 release) – sv</td>
</tr>
<tr>
<td>Hindi (post v8.1 release) – hi</td>
<td>Slovenian – sl </td>
</tr>
<tr>
<td>German – de</td>
<td>Spanish – es</td>
</tr>
<tr>
<td>Indonesian – id</td>
<td>Tagalog - tl</td>
</tr>
<tr>
<td>Italian – it</td>
<td>Telugu (post v9.0 release) – te</td>
</tr>
<tr>
<td>Japanese – ja</td>
<td>Tamil (post v9.0 release) – ta</td>
</tr>
<tr>
<td>Korean – ko</td>
<td>Ukrainian (post v7.0 release) – uk</td>
</tr>
</table>



### Language-specific NLU Models 

The platform supports language-specific NLU models for 26 languages. These models are pre-trained to understand system entities, concepts, sentiment, etc. in specific languages. 

  * In most cases, the NLU Language can be the same as the Conversation Language for the 26 languages listed below. 
  * There may be cases where you can choose an NLU Language that is different from the Conversation Language. For example, you want to enable the _Arabic_ language for your assistant but train using the _English_ language. You can enable the automatic input translation feature to support this flow. The user input is automatically translated to the NLU Language during the conversation. 
  * These models provide a wide range of configurations for you to fully customize the model behavior. 


### The Multilingual NLU Model 

Multilingual NLU model is a language-agnostic model that understands over 100 languages. 

  * Translation of user input is not required as the model is pre-trained to understand over 100 languages 
  * As the model is language agnostic, you can train the model in any of your preferred languages or a combination of languages. 
  * This model supports fewer configurations as compared to the language-specific NLU models.


## Language Enablement Options

The platform offers various options for you to enable additional languages. You can choose a combination of Conversation Language, NLU Language, Input Translation, and Response Translation that suits your needs.


### Scenario 1: Enabling a language in which you can train as well

Example

<table border="1">
  <tr>
   <td>Conversation Language
   </td>
   <td>NLU Language
   </td>
   <td>Input Translation
   </td>
   <td>Response Translation
   </td>
  </tr>
  <tr>
   <td>English 
   </td>
   <td>English
   </td>
   <td>Not Required
   </td>
   <td>Optional
   </td>
  </tr>
</table>

  * This is one of the common ways of enabling languages. 
  * The Conversation Language and the NLU Language will be the same. 
  * Input Translation and Response Translation are not required for this flow.


### Scenario 2: Enabling a language using another language as NLU Language

Example

<table border="1">
  <tr>
   <td>Conversation Language
   </td>
   <td>NLU Language
   </td>
   <td>Input Translation
   </td>
   <td>Response Translation
   </td>
  </tr>
  <tr>
   <td>Arabic 
   </td>
   <td>English
   </td>
   <td>Required
   </td>
   <td>Optional
   </td>
  </tr>
  <tr>
   <td>Georgian
   </td>
   <td>French
   </td>
   <td>Required
   </td>
   <td>Optional
   </td>
  </tr>
</table>

  * Use this flow if you want to train the assistant in a language other than the conversation language. 
  * You can also use this flow if the language you want to enable is not supported as an NLU Language.
  * Input Translation is required for this flow to translate the user’s input to the NLU Language. 
  * You will need to enable the Response Translation option if the responses are defined in a language other than the conversation language.


### Scenario 3: Enabling a language using the Multilingual NLU model

Example

<table border="1">
  <tr>
   <td>Conversation Language
   </td>
   <td>NLU Language
   </td>
   <td>Input Translation
   </td>
   <td>Response Translation
   </td>
  </tr>
  <tr>
   <td>Arabic 
   </td>
   <td>Multilingual Model
   </td>
   <td>Not Required
   </td>
   <td>Optional
   </td>
  </tr>
  <tr>
   <td>Georgian
   </td>
   <td>Multilingual Model
   </td>
   <td>Not Required
   </td>
   <td>Optional
   </td>
  </tr>
</table>

  * Use this flow if you want to train using the multilingual NLU model. 
  * You can also use this flow if the language you want to enable is not supported as an NLU Language.
  * Input Translation is not required for this flow as the multi-lingual model understands over 100 languages. 
  * You will need to enable the Response Translation option if the responses are defined in a language other than the conversation language.


## Language Detection and Selection

Multilingual AI Agent auto-detect and switch language based on the user’s utterance. An exception to this rule is when the user is expected to enter a value against an entity and the user input satisfies that entity’s criteria.


### Language Detection

There are three ways an assistant can detect the language based upon the user utterance:

  * **By Default**: Kore.ai’s platform uses its own language detection algorithm to detect language from the user utterance. This is the default setting and the end user’s language will be detected by the platform.
  * **Google API**: For on-prem installation, you can go with the above-mentioned default setting of Kore.ai’s in-house language detection algorithm or use Google APIs for language detections. You can set it in the Kore Config file.
  * **BotKit SDK**: If you are using BotKit SDK, you may also send the following cheat command from your BotKit to the platform:  
  cheat language &lt; _language name or code_>

The assistant continues to communicate with the user in the same language. If the user switches to another enabled language anytime later, the assistant changes to the new language automatically.

If the assistant fails to detect a user’s language with high confidence, it requests the user to select a preferred language from the list of enabled options.

**Tagalog language detection**

Tagalog is widely spoken in the Philippines and uses the Latin alphabet, the same script as English. This shared alphabet makes it challenging for standard language detection methods to distinguish between Tagalog and English, particularly in multilingual environments. To improve accuracy, the platform employs a specialized Tagalog detection wrapper with a two-layer system specifically designed to identify Tagalog utterances.

**Tagalog Detection Wrapper**
When Tagalog is enabled as a supported bot language, all incoming utterances are first processed through the Tagalog detection wrapper.

**Detection logic**

The system uses a two-step approach:

1. Primary Detection: The Langdetect module analyzes the input to determine if it's Tagalog. If Tagalog is detected, the utterance is processed accordingly.
2. Secondary Verification: If the Langdetect module doesn't identify the utterance as Tagalog, the system performs dictionary-based verification:

  * Short utterances (1–3 words): All words must exist in the Tagalog dictionary for the utterance to be classified as Tagalog.
  * Longer utterances (4+ words): At least 60% of the words must match entries in the Tagalog dictionary.

If fewer than 60% of words in longer texts match the Tagalog dictionary, the utterance is **not** classified as Tagalog, to avoid misclassification with English.


### Language Selection 

1. The AI Agent identifies user language from every utterance. In case a change is detected, it will get a confirmation from the user regarding the switch and will proceed as per the user response. These standard responses can be customized using the [getCurrentOptions utility](../../apis/automation/koreutil-libraries.md#koreutilgetcurrentoptions).
  
    !!! Note
    
        The current conversation will be discarded in case the user wants to switch languages.

2. Language selection settings – In addition, you may want to configure the language selection options. From the **Settings** , click **Configurations -> Language Management**. Under **Language Selection Logic** (scroll down for the option), for **language selection time frame**, set to one of the following:
    1. **Lifetime**: The auto-detected language will be set as the user’s preferred language and used for all subsequent communications until the user interacts in another enabled language anytime later. If the user starts to talk in another enabled language, the AI Agent changes to that language.
    2. **Per Session**: Detects the user’s language at the beginning of every session and responds accordingly.
    3. **Every User Message**: Identifies the user’s language from every utterance. In case a change is detected, the AI Agent will get a confirmation from the user regarding the switch and proceed as per the user response.  
      
      **Note:** The current conversation will be discarded in case the user wants to switch languages. This feature was introduced in release 7.2 and is the default setting for multilingual AI Agent.  

    <img src="../images/get-started-img1-language-selection-logic.png" alt="Language selection logic" title="Language selection logic" style="border: 1px solid gray;zoom:50%;"/>  
     

3. For testing and debugging purposes, you can override the language selection settings by using the cheat command during a chat session. Replace the language name or code with one of these values:
    1. English: **English** or **EN**
    2. German: **German** or **DE**
    3. French: **French** or **FR**
    4. Spanish: **Spanish** or **ES**
