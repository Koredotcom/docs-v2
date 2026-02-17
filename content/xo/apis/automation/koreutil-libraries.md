# koreUtil Libraries

**koreUtil libraries** provide pre-written JavaScript functions which makes common or complex tasks easy to implement. These libraries often target specific tasks such as setting up recurring rules for calendars, parsing, and manipulation of dates, conversion of dates between timezones, tools to simplify programming with strings, numbers, arrays, functions, and objects, etc.


## How to Use

koreUtil libraries can be used anywhere in the AI Agent where there is flexibility to write JavaScript code such as script node, message node, confirmation node, entity node, standard responses, answers to FAQs, small talk, event handlers, etc.


## List of koreUtil libraries

Below is the list of koreUtil libraries provided by the Platform:

* [koreUtil.rrule](#koreutilrrule)
* [koreUtil.moment](#koreutilmoment)
* [koreUtil.intl](#koreutilintl)
* [koreUtil.momenttz](#koreutilmomenttz)
* [koreUtil.xml2js](#koreutilxml2js)
* [koreUtil.hash](#koreutilhash)
* [koreUtil._](#koreutil_)
* [koreUtil.getCurrentOptions](#koreutilgetcurrentoptions)
* [koreUtil.getAmbiguousIntents](#koreutilgetambiguousintents)
* [koreUtil.getSessionId](#koreutilgetsessionid)
* [koreUtil.closeConversationSession](#koreutilcloseconversationsession)
* [koreUtil.autoTranslate](#koreutilautotranslate)
* [koreUtil.getFormDefinition](#koreutilgetformdefinition)


### koreUtil.rrule

koreUtil.rrule is a platform-offered JS library for creating new recurrence rules, interpreting and reading them in human-readable format.

**Usage Example:**
```
context.rule = new koreUtil.rrule({ 
freq: koreUtil.rrule.WEEKLY, 
interval: 5, 
byweekday: [koreUtil.rrule.MO, koreUtil.rrule.FR], 
dtstart: new Date(2012, 1, 1, 10, 30), 
until: new Date(2012, 12, 31) 
}); 
context.between=context.rule.between(new Date(2012, 7, 1), new Date(2012, 8, 1)); 
context.readableFormat=context.rule.toText();
```

**Output:**

* For context.between  
   ```
   [ 
   "2012-08-27T10:30:00.000Z", 
   "2012-08-31T10:30:00.000Z" 
   ]
   ```

* For context.readableFormat  
   ```every 5 weeks on Monday, Friday until January 31, 2013```


### koreUtil.moment

koreUtil.moment is a platform-offered JS library for validating, manipulating, and formatting dates.

**Usage Example:** 

```context.german=koreUtil.moment().locale('de').format('LLLL');```

**Output:** 

For context.german:

```Montag, 18. November 2019 01:43```


### koreUtil.intl

koreUtil.intl is a platform-offered JS library for language-specific string comparison, number formatting, and date and time formatting.

**Usage Example:**

```
context.formattedNumberUK = koreUtil.intl.NumberFormat('en-GB').format(123456.789);
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0)); 
context.USdate=koreUtil.intl.DateTimeFormat('en-US').format(date);
```

**Output:**

* For context.formattedNumberUK:  
   ```123,456.789```

* For context.USdate  
   ```12/20/2012```


### koreUtil.momenttz

koreUtil.momenttz is a platform-offered JS library for the formatting of dates in any timezone and converting dates between timezones.

**Usage Example:**

```
var jun = koreUtil.moment("2014-06-01T12:00:00Z"); 
context.newyork= koreUtil.momenttz(jun,'America/New_York').format('ha z'); 
context.tokyo = koreUtil.moment().tz('Asia/Tokyo').format('ha z'); 
context.sydney = koreUtil.moment().tz('Australia/Sydney').format('ha z');
```

**Output:**

* For context.newyork:  
   ```5am PDT```

* For context.tokyo:  
   ```7pm JST```

* For context.sydney:  
   ```9pm AEDT```


### koreUtil.xml2js

koreUtil.xml2js is a Platform-offered JS library for parsing XML to JSON and vice versa.

**Usage Example:**  

```
var obj = {name: "John", Surname: "Doe", age: 23};
var builder = new koreUtil.xml2js.Builder();
context.xml = builder.buildObject(obj);
```

**Output:**

For context.xml:

```John Doe 23```


### koreUtil.hash

koreUtil.hash is a Platform offered JS library that supports SHA on JavaScript.

**Usage Example:**

```context.hashString= koreUtil.hash('sha256').update('42').digest('hex');```

**Output:**

For context.hashString:

```73475cb40a568e8da8a045ced110137e159f890ac4da883b6b17dc651b3a8049```


### koreUtil._

koreUtil._ is a Platform-offered JS library that provides utility functions for common programming tasks.

**Usage Example:**

```
context.chunkArray = koreUtil._.chunk(['a', 'b', 'c', 'd'], 2); 
var users = [ 
{ 'user': 'barney', 'age': 36, 'active': true }, 
{ 'user': 'fred', 'age': 40, 'active': false } 
]; 
context.filterActive =koreUtil._.pluck(koreUtil._.filter(users, { 'age': 36, 'active': true }), 'user');
```

**Output:**

* For context.chunkArray:  
   ```[["a","b"],["c","d"]]```

* For context.filterActive:  
   ```
   [
   "barney"
   ]
   ```

### koreUtil.getCurrentOptions

koreUtil.getCurrentOptions is a platform-offered JS library that provides utility functions to get the current template for language selection standard response options. This can be used to customize the standard response. 
Post the release of v8.1, this function has been enhanced to return the authorization URL used in the standard response when end-user authorization is requested.

Following is the return format for each of the situations:


* For the language selection standard response:  
   ```
   {"list_of_languages": [
         {"title": "English","value": "English"},
         {"title": "Deutsche","value": "Deutsche"},`
         {"title": "Español","value": "Español"}`
   ]}
   ```

* For the language ambiguity standard response:  
   ```
   {"current_language": "Español",
      "list_of_new_languages": [
         {"title": "English","value": "English"},
         {"title": "Deutsche","value": "Deutsche"},
         {"title": "Español","value": "Español"}
      ]}
   ```

* For the language switch standard response:  
   `{"new_language": "Español","current_language": "English"}`

* For User authorization request standard response:  
   ```
   {
      "authorizationURL": "https:///r/xxxxxxxxxxxxx"
   }
   ```

Following are the usage examples of how the above utility can be used to render the message in a button template, you can use any template as per your requirements.  [See here for more on message templates](../../sdk/web-mobile-sdk-message-formatting-and-templates.md).

**Usage Example 1:** To get the standard response for “_Ask if the user would like to select any of the languages_”

```javascript
var info = koreUtil.getCurrentOptions();
var message = {
   "type": "template",
   "payload": {
      "template_type": "button",
      "text": "please select your language",
      "subText": "Button Template Description",
      "buttons": []
   }
};
for (i = 0; i &lt; info.list_of_languages.length; i++) {
   var button = {
      "type": "postback",
      "title": info.list_of_languages[i].title,
      "payload": info.list_of_languages[i].value
   };
   message.payload.buttons.push(button);
}
print(JSON.stringify(message));
```

**Usage Example 2:** To get the standard response for “_Ask if the user would like to switch to any of the new languages detected during a conversation_”

```javascript
var info = koreUtil.getCurrentOptions();
var message = {
   "type": "template",
   "payload": {
      "template_type": "button",
      "text": "language ambiguity response for the current language" + info.current_language,
      "subText": "Button Template Description",
      "buttons": []
   }
};
for (i = 0; i &lt; info.list_of_new_languages.length; i++) {
   var button = {
      "type": "postback",
      "title": info.list_of_new_languages[i].title,
      "payload": info.list_of_new_languages[i].value
   };
   message.payload.buttons.push(button);
}
print(JSON.stringify(message));
```

**Usage Example 3:** To get the standard response for “_Ask if the user would like to switch to any of the new languages detected during a conversation_”

```javascript
var info = koreUtil.getCurrentOptions();
var message = {
   "type": "template",
   "payload": {
     "template_type": "button",
     "text": "would you like to switch to new language detected: current language " + info.current_language + "new language : " + info.new_language,
     "subText": "Button Template Description",
     "buttons": []
   };
};
var options = ["yes", "no"]
for (i = 0; i &lt; options.length; i++) {
   var button = {
      "type": "postback",
      "title": options[i],
      "payload": options[i]
   };
   message.payload.buttons.push(button);
}
print(JSON.stringify(message));
```

**Usage Example 4:** To get the standard response for “_User needs to authorize or re-authorize_”

```javascript
var info = koreUtil.getCurrentOptions();
var message = {
   type: 'template',
   payload: {
      template_type: 'button',
      text: 'Please authorize before we continue...',
      buttons: [
      {
         type: 'url',
         title: 'Click here to authorize',
         url: info.authorizationURL
      }
      ]
   }
};
print(JSON.stringify(message));`
```

### koreUtil.getAmbiguousIntents

The `koreUtil.getAmbiguousIntents` util function is used to obtain the ambiguous intents list when the [Ambiguity Intents Identified](../../automation/intelligence/event-handling.md#ambiguous-intents-identified) event gets triggered. Along with the list of ambiguous intents, the retrieved context object contains additional details such as ambiguity reasons – ‘multiple definite intents’, ‘multiple intents with similar scores’, etc., and the engine name that detects the intent (ML, FM, or KG), the score given by the respective engines, and so on. The [Ranking and Resolver](../../automation/natural-language/training/ranking-and-resolver.md) score is displayed wherever available.

**Usage Example**

You can use the `koreUtil.getAmbiguousIntents()` function in the entity prompt or any other node to obtain the list of ambiguous intents.

**Sample Response**

```json
{
"intents": [
   {
      "intent": "Transfer Money",
      "name": "Transfer Money",
      "intentType": "dialog",
      "mlScore": 100,
      "rrScore": 7980,
      "identifyingEngines": {
         "ml": true
         }
   },
   {
      "intent": "Pay Bills",
      "name": "Pay Bills",
      "intentType": "dialog",
      "rrScore": 0,
      "identifyingEngines": {
         "traits": true
      }
   },
   {
      "intent": "Status of Funds Transfer",
      "name": "Status of Funds Transfer",
      "intentType": "dialog",
      "fmScore": 5330,
      "rrScore": 5330,
      "identifyingEngines": {
         "fm": true
      }
   },
   {
      "PrimaryQuestion": "How to Send Money",
      "MatchedQuestion": "How to Send Money",
      "intentType": "FAQ",
      "faqScore": 100,
      "rrScore": 7960,
      "faqDemystification": {
         "path": [
            "Money Transfer"
         ]
      },
      "identifyingEngines": {
         "faq": true
      }
   }
],
"cause": "multipleChoices",
"userInput": "How do I make a payment or transfer"
};
```

In this response, we obtain the details of multiple ambiguous intents from different engines.

The type of intent is captured in the `intentType`object. For example, `Status of Funds Transfer` is a Dialog-type intent, and `How to Send Money` is a FAQ-type intent. The identifying engine for that respective intent and the confidence scores assigned by the engines for the intents are captured. For example, for the intent `Transfer Money`, the `mlScore`is 100. The `rrScore`is the [Ranking and Resolver](../../automation/natural-language/training/ranking-and-resolver.md) score for the winning intent. The object `faqDemystification`provides the bot path for the FAQ. The user input and the cause for the ambiguous intents are also captured.


### koreUtil.getSessionId

koreUtil.getSessionId is a Platform offered JS library for obtaining the current conversation session Id.

**Usage Example:**

`var sessionId = koreUtil.getSessionId();`

**Output:**

For sessionId:

`5x54321x11xx87654321xx12`

### koreUtil.getSunshineConversationsMetadata

The XO Platform captures and stores the metadata sent as part of the Pass control action that routes the conversation to the bot via Switchboard integration API in Zendesk. Developers can use the `koreUtil.getSunshineConversationsMetadata()` function to access the stored metadata. For more information, read the [Switchboard Integration](../../channels/add-sunshine-conversations-channel.md#switchboard-integration-for-agent-handoff) section.

The **koreUtil.getSunshineConversationsMetadata** function can be used by a bot developer to access the metadata captured in any node.

**Usage Example:**

`koreUtil.getSunshineConversationsMetadata();`

**Output:**

```json
{
   "dataCapture.systemField.tags" : "TransferToBot",
   "dataCapture.systemField.priority" : "high"
}
```

!!! note

    The **koreUtil.getSunshineConversationsMetadata** is supported in the Platform v10.1.9 and above versions.


### koreUtil.ClearAuthProfiles

The `koreUtil.ClearAuthProfiles` is a Platform function to clear tokens associated with an authorization profile of an active conversation by passing a particular profile name in the custom script. This function can be invoked from any component that supports JavaScript.

**Usage Example:**

To clear one or more authorization profile:

```javascript
koreUtil.ClearAuthProfiles([Auth_Profile_Name]);
```

Example:

```javascript
koreUtil.ClearAuthProfiles(["Auth_openai", "Auth_hubspot"]);
```


### koreUtil.ClearAllAuthProfiles

The `koreUtil.ClearAllAuthProfiles` is a Platform function to clear tokens associated with all auth profiles associated with any active conversation. This function can be invoked from any component that supports JavaScript.

**Usage Example:**

To clear all authorization profiles:

```javascript
koreUtil.ClearAllAuthProfiles ( );
```

### koreUtil.closeConversationSession

koreUtil.closeConversationSession is a Platform function for force closing any active conversation. This function can be invoked from any component that supports JavaScript. When you invoke this function, the Platform will discard any ongoing task and the active conversation session  will be closed. The Platform also presents the session timeout message on the supported channels.

**Usage Example:**

```javascript
koreUtil.closeConversationSession();
```

**Output:**

No response is returned and the session ends.

!!! note

    The koreUtil.closeConversationSession is supported in the Platform v8.1 and above versions.


### koreUtil.autoTranslate

koreUtil.autotranslate is a platform function that lets you automatically translate the AI Agent's response from a language in which it is configured to the language in which the user is interacting or a language of your choice. This function uses a translation engine to translate the bot responses into user input language. For more information on how to configure a translation engine, [refer here](..//../app-settings/language-management/managing-translation-services.md).

!!! note
    
    To use the `koreUtil.autoTranslate`function for language translation, you must have the Access Key provided by your translation service provider, such as Google Translator, Microsoft Translator, etc.

Please refer below for the translation behavior:

<table>
  <tr>
   <td><strong>RESPONSE TYPES</strong>
   </td>
   <td><strong>COMPONENTS</strong>
   </td>
   <td><strong>TRANSLATION BEHAVIOR</strong>
   </td>
  </tr>
  <tr>
   <td>Plain Text Responses
   </td>
   <td>Refers to plain text responses defined anywhere in the application. For example, prompts, responses etc.
   </td>
   <td>Default: Auto-translated
<br>
You can choose to translate only a specific part of the response by using the koreUtil.autoTranslate function only for that part.
   </td>
  </tr>
  <tr>
   <td>Advanced / JavaScript based Responses
   </td>
   <td>Refers to responses defined using JavaScript. For example, prompts, responses etc.
   </td>
   <td>Default: No auto-translation
<br>
You can use the AutoTranslation function inside the JavaScript to define the parts of the responses that need translation.
   </td>
  </tr>
  <tr>
   <td>Auto-formatted Responses
   </td>
   <td>Refers to the responses that are auto-formatted by the Platform as per the channel specifications - for example, confirmations, list of values, ambiguities, etc.
   </td>
   <td>Default: Auto-translated
   </td>
  </tr>
</table>


**Usage Example:**

```javascript
koreUtil.autoTranslate();
```

Here are a few use-case examples for your reference:

**Use Case-1:** To translate part of a sentence in the user’s language:

**Example:**

```javascript
{{koreUtil.autoTranslate('Welcome! I am a virtual assistant powered by ')}} General Insurance
```

**Output in Serbian**

```javascript
Добредојдовте! Јас сум виртуелен асистент напојуван од General Insurance
```

**Use Case-2:** To translate the content of a customized JavaScript template, then use koreUtil.autoTranslate as follows:

**Example:**

```javascript
var accountBalance = getbalance(); 
var message = koreUtil.autoTranslate("Your account balance is "); 
var message = message.concat(env.currency, ' ', accountBalance); print(message);
```

**Output in Serbian**

```
Баланс вашего счета USD 5,278.00
```

**Use Case-3:** To translate the bot responses in a particular language by passing the language code. An example where the agent will respond only in German even though the user is interacting in any language:

**Example**

```javascript
var message = koreUtil.autoTranslate("This is a sample message", "de");
print(message);
```

**Output in German**

```
Dies ist eine Beispielnachricht
```

<img src="../images/kore-util-auto-translate.png" alt="Auto translate service as Bot Response" title="Auto translate service as Bot Response" style="border:1px solid gray; zoom:60%;">

### koreUtil.getFormDefinition

The `koreUtil.getFormDefinition` allows you to get the form definition, which consists of the form meta, form components, and form messages.

**Usage Example:**

```
let formDef = koreUtil.getFormDefinition();
```

**Output:**

<img src="../images/xop-8553-json-preview.png" alt="Form Definition" title="Form Definition" style="border:1px solid gray; zoom:60%;">

**Related Link**

[Script Node](../../automation/use-cases/dialogs/node-types/working-with-the-script-node.md) (Write JavaScript code in a dialog task)