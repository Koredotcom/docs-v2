--8<-- "includes/digital-channels-back-link.md"

# Adding the Unblu Channel

Unblu is a Conversational Platform for Financial Services.

To set up Unblu as a channel, you will need to create an External Integration bot in Unblu, create a ‘Named Area’ and map this Named Area to your Kore.ai assistant.


## Channel Integration


### Step 1: Create a Named Area

Named Areas in Unblu are used to identify the origins of the chat requests from your website. The Kore.ai assistant should be associated with a Named Area to ensure that it responds to users only when the chat has originated from the sections of your website associated with this Named Area. This mapping is optional if you are enabling the Unblu channel for a single kore.ai bot alone.

1. [Login ](https://latest.demo.unblu.com/)to your Unblu Account Administration.
2. Under the Named Areas module, select the ‘New named area’ option.
3. Provide all the requested information.
4. Make a note of the name of the Named Area you have created.


### Step 2: Create Unblu Bot

An assistant should be created in your Unblu account for integrating it with your current Kore.ai assistant.

The Unblu Bot can be directly created from the Kore.ai XO Platform.



1. Create or Open the assistant in the XO platform.
2. Go to **Channels & Flows** > **Channels** > **Digital** > **All** > and select **Unblu**.
3. Proceed to the **Configurations tab** and provide the following details for creating an assistant in your Unblu account:
    * **Unblu Host URL** -the URL of your Unblu application. For example, use [https://www.unblu.com/](https://www.unblu.com/) for the Unblu cloud.
    * **Unblu Account Username** –Provide your Unblu account username.
    * **Unblu Account Password** – Provide the password associated with your Unblu username.
    * **Unblu Bot Name** – Provide a name you would like to use for your Unblu bot.
    * **Unblu Bot Description** – Provide a short description of your Unblu bot.
    * **Bot Person** – Provide a Name to represent the Unblu bot to your users.
    * **Secret Key** – Provide a confidential key to secure the communication between Unblu and Kore.ai Assistants.
    * **Named Area** – Provide the Named Area you would like to associate with your Kore.ai assistant. Kore.ai will respond only to the user chats that have originated in the Named Area that you have selected here. This field is optional if you are enabling Unblu channel for a single kore.ai assistant alone.
    * Select to **Enable** the channel and **Save** your settings.
4. **Enable** the channel.  
<img src="../images/unblu.png" alt="unblu integration" title="unblu integration" style="border: 1px solid gray; zoom:70%;">


After enabling the channel and verifying all the configurations, you can optionally publish the assistant for the new channel. Learn more about[ Publishing your App](../deploy/publishing-bot.md).

To learn more about working with Channels within the Kore.ai XO Platform, please see [Channel Enablement.](../channels/adding-channels-to-your-bot.md)


## Additional Instructions

For the seamless exchange of information from Unblu to Kore.ai, a few additional steps need to be performed.
For a detailed document on the implementation, [refer here](../app-settings/integrations/agents/kore-unblu-integration.md).


* The _host URL_ where the Unblu SDK would be hosted needs to be added to the **Domain** section of your Unblu Account.
* From your Unblu Account, **API Keys** section, make a note of the _API Key_.
* Configure the **Unblu SDK** to give access to Kore.ai assistant, following the steps given below.
* Open the Unblu SDK HTML file. Ensure that the following attributes are set:
    * In the `<head>` the meta tag should look thus: `<meta name="unblu:named-area" content="your-namedArea-Id>" />` This is the named area that you created in Step 1 above.
    * Script tag to populate the visitor information needs point to the Unblu host: `<script src="your-unblu-host>/unblu/js-api/v2/visitor/visitor-api.min.js"></script>`
    * Invoke the function `setVisitorData` to pass the visitor data to Kore.ai assistant. Note that the `visitorData` should be in string format and if you need to pass an object use Stringify.

Locate the following section and populate the apiKey and serverUrl fields with the above-mentioned values. 

```
  {
    window.unblu.api
    .configure({
       apiKey: "<your-unblu-apikey>",
       serverUrl: "<your-unblu-host>"
            * `  }
            )`
```

In the following Script tag, add Unblu host URL and the API key: `<script type="text/javascript" defer="defer" src="your-unblu-host>/unblu/visitor.js?x-unblu-apikey=&lt;your-unblu-apikey>"></script>`

The entire Unblu SDK HTML file would look like this:


```
<!DOCTYPE html>
<html>
<head>
   <meta name="unblu:named-area" content="<your-namedArea-Id>" />
   <script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"></script>
   <script src="<your-unblu-host>/unblu/js-api/v2/visitor/visitor-api.min.js"></script>
 <script>
   function setVisitorData(engagementType, visitorData) {
      return Promise.resolve(JSON.stringify({ name: "John", about: "Tester" }));
       }
     window.unblu.api
      .configure({
         apiKey: "<your-unblu-apikey>",
         serverUrl: "<your-unblu-host>"
       })
      .initialize().then(function (api) {
        console.log("API initialized successfully!");
        api.setNewConversationInterceptor(setVisitorData);
            }).catch(e => {
                console.log("------error : ", e);
                if (e.type === 'INITIALIZATION_TIMEOUT') {
                  //retry
                 } else if (e.type === 'UNSUPPORTED_BROWSER') {
                  // display unsupported browser dialog
                } else {
                 // show generic error message
                 }
           }
           );
</script>
<script type="text/javascript" defer="defer"
src="<your-unblu-host>/unblu/visitor.js?x-unblu-apikey=<your-unblu-apikey>"></script>
</head>
<body>
</body>
</html>
```

You can access the Visitor Data from the `usercontext.customData`  along with the user information for each message from Unblu,

Following is the structure of the `usercontext.customData 
`

```
{
"timestamp" : 1594113137065.0,
"eventType" : "bot.dialog.opened",
"accountId" : "wZvcAnbBSpOps9oteH-Oxw",
"dialogToken" : "qG8dFE7ZQPW1p6qcI293hQ-c-QY7P7MNqTxxxxxx-m-FSQ",
"dialogType" : "ONBOARDING",
"counterpartPerson" : {
   "type" : "PersonData",
   "id" : "xZHnVmhxQNKvyf5ybxyLoQ",
   "accountId" : "wZvcAnbBSpOps9oteH-Oxw",
   "personSource" : "VIRTUAL",
   "sourceId" : "awhFjUq1RQCvdMDoV5OW2Q",
   "sourceData" : null,
   "firstName" : null,
   "lastName" : null,
   "username" : null,
   "nickname" : null,
   "displayName" : "Visitor - xZHnV",
   "personType" : "VISITOR",
   "authorizationRole" : "ANONYMOUS_USER",
   "email" : null,
   "phone" : null,
   "teamId" : null,
   "teamName" : null,
   "avatar" : null
   },
"conversation" : {
   "type" : "ConversationData",
   "id" : "qG8dFE7ZQPW1p6qcI293hQ",
   "accountId" : "wZvcAnbBSpOps9oteH-Oxw",
   "topic" : null,
   "recipient" : {
   "type" : "NamedAreaData",
   "id" : "WkUGFqcORCCor3bxHa3I5A",
   "accountId" : "wZvcAnbBSpOps9oteH-Oxw",
   "displayName" : "testlocal",
   "avatar" : null
  },
"participants" : [
 {
   "type" : "ParticipantData",
   "state" : "ACTIVE",
   "personId" : "yb8ALAiGQOWlCoBahUCfgQ",
   "connectedViaExternalMessenger" : false,
   "hidden" : true
 }
 ],
 "assigneePersonId" : null,
 "contextPersonId" : "xZHnVmhxQNKvyf5ybxyLoQ",
 "state" : "ONBOARDING",
 "initialEngagementType" : "CHAT_REQUEST",
 "locale" : "en",
 "tokboxSessionId" : null,
 "visitorData" : "{\"name\":\"John\",\"about\":\"Tester\"}",
 "conversationTemplateId" : "R6W3x2uzQ1KXzARnIqdNZw",
 "links" : [
 {
   "type" : "OPEN_IN_VISITOR_DESK",
   "url" : "https://kore.dev.unblu-test.com/unblu/visitordesk/#/conversation/qG8dFE7ZQPW1p6qcI293hQ"
 },
 {
  "type" : "OPEN_IN_AGENT_DESK",
  "url" : "https://kore.dev.unblu-test.com/unblu/desk/#/conversation/qG8dFE7ZQPW1p6qcI293hQ"
 },
{
  "type" : "OPEN_IN_AGENT_SINGLE_VIEW",
  "url" : "https://kore.dev.unblu-test.com/unblu/single/#/conversation/qG8dFE7ZQPW1p6qcI293hQ"
 }
 ],
 "externalMessengerChannelId" : null,
 "sourceId" : null,
 "configuration" : null,
 "text" : null
},
"presencePersonInfo" : {
  "id" : "OuG04Q0WSFe3-iaIA1GlLw",
  "creationTimestamp" : 1594112743472.0,
  "modificationTimestamp" : 1594112743472.0,
  "accountId" : "wZvcAnbBSpOps9oteH-Oxw",
  "joinedTimestamp" : 1594112743472.0,
  "leftTimestamp" : null,
  "personId" : "xZHnVmhxQNKvyf5ybxyLoQ",
  "deviceInfo" : {
    "id" : "fx7Q8qZyQXmnf62xpoePWg",
    "creationTimestamp" : 1594112743454.0,
    "modificationTimestamp" : 1594112743454.0,
    "accountId" : "wZvcAnbBSpOps9oteH-Oxw",
    "osName" : "Ubuntu",
    "osVersion" : "Other",
    "browserName" : "Chromium",
    "browserVersion" : "81.0",
    "userAgent" : null,
    "screenWidth" : null,
    "screenHeight" : null,
    "screenPixelRatio" : null,
    "type" : "DESKTOP",
    "identifier" : "awhFjUq1RQCvdMDoV5OW2Q",
    "identifierSource" : "COOKIE",
    "pushToken" : null,
    "ownerPersonId" : "xZHnVmhxQNKvyf5ybxyLoQ"
  },
 "touchTimestamp" : 1594113153628.0,
 "impersonationType" : "NONE",
 "impersonatedFromUserId" : null,
 "impersonatedFromAccountId" : null,
 "additionalInfo" : null,
 "authInfo" : null,
 "propagated" : false
 }
}

```


## Special Notes

There are multiple functionalities that can be achieved by the integration of Unblu channel with Kore.ai assistant

* When mapping a named area to a bot, _multiple named areas_ can be mapped. This way a single Kore.ai assistant has the ability to accept Unblu dialog offer requests from different origins like SDKs or namedAreas.
* Also, the named area mapping is optional if you are enabling the Unblu channel for a single Kore.ai assistant.
* You can redirect user conversations to agents by adding an _agent transfer_ node in the dialog flow, note that you need not enable the Agent Transfer or BotKit specifically for this Channel. Having an agent transfer node is sufficient.
* The user information for each message from Unblu is available in the `usercontext.customData` and you can use it for further processing. This information includes _deviceInfo_, _authInfo_, _joinedTime_ of the user. [See here for how to use context object](../automation/intelligence/context-object.md).

## Using Unblu supported message templates

By default, the following message templates are used – Button/multi-choice, List template. You can override templates like card message, List message, multi-choice/Button message.

Following is a code example for how to use the above mentioned templates, change it to suit your requirements:

**Card Template**:


```
`var unbluCardTemplate = {`
    "$_type": "CardPostMessageData",
    "type": "CARD",
    "imageUrl": "data:image/png;base64,",
    "imageAltText": "test image",
    "title": "Title",
    "body": "This is the **body text** with markdown",
    "bodyTextType": "MARKDOWN",
    "actions": [
      {
        "$_type": "MessageAction",
        "actionType": "LINK_INTERNAL",
        "label": "Unblu homepage",
        "value": "https://unblu.com"
      },
      {
        "$_type": "MessageAction",
        "actionType": "LINK_EXTERNAL",
        "label": "Wikipedia",
        "value": "https://www.wikipedia.org/"
      },
      {
        "$_type": "MessageAction",
        "actionType": "REPLY_MESSAGE",
        "label": "More info",
        "value": "Could you provide me with more info?"
      }
    ]
  };

print(JSON.stringify(unbluCardTemplate));

```

**List Template**:


```
`var unbluListTemplate = {`
    "$_type": "ListPostMessageData",
    "type": "LIST",
    "header": {
      "$_type": "MessageHeader",
      "imageUrl": "data:image/png;base64,",
      "imageAltText": "test image",
      "title": "Title",
      "body": "This is the **body text** with markdown",
      "bodyTextType": "MARKDOWN"
    },
    "items": [
      {
        "$_type": "PostListMessageCardItemData",
        "imageUrl": "data:image/png;base64,",
        "imageAltText": "test image",
        "title": "Title",
        "body": "This is the **body text** with markdown",
        "bodyTextType": "MARKDOWN",
        "action": null
      },
      {
        "$_type": "PostListMessageCardItemData",
        "imageUrl": "data:image/png;base64,",
        "imageAltText": "test image",
        "title": "Title",
        "body": "This is the **body text** with markdown",
        "bodyTextType": "MARKDOWN",
        "action": {
          "$_type": "MessageAction",
          "actionType": "LINK_INTERNAL",
          "label": "Unblu homepage",
          "value": "https://unblu.com"
        }
      }
    ],
    "actions": [
      {
        "$_type": "MessageAction",
        "actionType": "LINK_INTERNAL",
        "label": "Unblu homepage",
        "value": "https://unblu.com"
      },
      {
        "$_type": "MessageAction",
        "actionType": "LINK_EXTERNAL",
        "label": "Wikipedia",
        "value": "https://www.wikipedia.org/"
      },
      {
        "$_type": "MessageAction",
        "actionType": "REPLY_MESSAGE",
        "label": "More info",
        "value": "Could you provide me with more info?"
      }
    ]
}
print(JSON.stringify(unbluListTemplate)
);

```


**Multi Choice Template**:

```
`var unbluMultiChoiceTemplate =  {`
    "$_type": "MultichoiceQuestionPostMessageData",
    "type": "MULTICHOICE_QUESTION",
    "text": "Choose one of the options",
    "textType": "MARKDOWN",
    "options": [
      {
        "$_type": "MultichoiceQuestionOption",
        "label": "Option 1",
        "value": "1",
        "primary": true
      },
      {
        "$_type": "MultichoiceQuestionOption",
        "label": "Option 2",
        "value": "2",
        "primary": false
      }
    ]
  };
print(JSON.stringify(unbluMultiChoiceTemplate));

```
