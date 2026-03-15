# Functions for the BotKit SDK

The Platform BotKit SDK provides functions that you can use for greater control of your bot and provide a better user experience.

The following functions are supported by the BotKit SDK.


- [Functions for the BotKit SDK](#functions-for-the-botkit-sdk)
  - [sdk.sendUserMessage](#sdksendusermessage)
  - [sdk.sendBotMessage](#sdksendbotmessage)
  - [sdk.AsyncResponse](#sdkasyncresponse)
  - [sdk.respondToHook](#sdkrespondtohook)
  - [sdk.registerBot](#sdkregisterbot)
  - [sdk.saveData](#sdksavedata)
  - [sdk.getSavedData](#sdkgetsaveddata)
  - [sdk.getMessages](#sdkgetmessages)
  - [sdk.clearAgentSession](#sdkclearagentsession)
  - [sdk.startAgentSession](#sdkstartagentsession)
  - [sdk.resetBot](#sdkresetbot)
  - [sdk.extendRequestId](#sdkextendrequestid)
  - [sdk.skipBotMessage](#sdkskipbotmessage)
  - [sdk.skipUserMessage](#sdkskipusermessage)
  - [sdk.closeConversationSession](#sdkcloseconversationsession)


## sdk.sendUserMessage

This function sends the message to the user.

**Usage**
Used inside the `on_bot_message` event callback. An `on_bot_message` event is called when the bot sends the reply to the user. In the SDK, payload data such as `message` can be modified and sent to the Platform.

**Syntax**

```javascript
sdk.sendUserMessage(payload, callback)
```

**Parameters:**

* payload – A JSON response payload as follows:

```json
 {
   "message":"Spell-corrected message sent by the bot to the user",
   "originalMessage":"Original message sent by the bot to the user",
   "taskId":"Dialog task ID",
   "nodeId":"Current node ID in the dialog flow",
   "channel":"Channel name",
   "context": <context object>
}
```
The above message payload is when the user language is detected and the spell correction is done. In case the user language is not detected then the following would be the message structure

```json
{
   "message":"Original message sent by the bot to the user",
   "originalMessage":"Original message sent by the bot to the user",
   "languageInfo": {
        "currentLanguage": "current user language",
        "detectedLanguages": [
            "language detected 1",
            "language detected 2"
        ],
        "spellCorrectedInput": [
            "language 1": "spell correction in language 1",
            "language 2": "spell correction in language 2"
        ]
    }
}

```

* callback – The function to call at event completion used to send the updated message and context back to the Platform.

**Examples:**
The following code snippet shows an example of the `sdk.sendUserMessage` function returning an error to the user.

```javascript
return sdk.sendUserMessage(payload, function(err){
    if(err)
       console.log("err", err)});
```

In the following code example, the initial message to a user is displayed when a user switches to a Live Agent.

```javascript
   formdata.welcome_message = "";
    var visitorId = _.get(payload, 'channel.channelInfos.from');
    if (!visitorId) {
        visitorId = _.get(payload, 'channel.from');
    }
    visitorId = payload.context.session.UserContext._id;
    userDataMap[visitorId] = payload;
    data.message = "An Agent will be assigned to you shortly!!!";
    sdk.sendUserMessage(payload, callback);
```

In the next code example, the message sent to the user with the `sdk.sendUserMessage` function is based on user selection for converting currency. The `isTemplate` parameter determines if custom or default message formatting should be used.

```javascript
   on_user_message : function(requestId, payload, callback) {
        message = payload.message.toLowerCase();console.log("MESSAGE",payload.message);
        //payload .context.session.BotContext.currency = "koko";
        if ( message == "Yes" || message == "yes")
        {
            var overrideMessagePayload = {
                body : " Enter the currency code for which the amount will be converted",
                isTemplate :false
            };
            data.overrideMessagePayload = overrideMessagePayload;
            currCode = true;
            return sdk.sendUserMessage(payload);
        }
        else if ( message == "No" || message == "no" )
        {
            var overrideMessagePayload = {
                body : "Ok, Enter the country name so that I can fetch it on your behalf",
                isTemplate :false
            };
            payload.overrideMessagePayload = overrideMessagePayload;
            countryname = true;
            return sdk.sendUserMessage(payload);
        }
   }
```

Post the release of ver8.0 of the Platform, you can add User, Message, and Session Meta Tags. The following would be the syntax for the necessary payload:

```json
metaTags":{
     "userMetaTags":[
        {
            "name":"<string>",
           "value":"<string>"
       }
    ],
   "sessionMetaTags":[
      {
         "name":"<string>",
         "value":"<string>"
      }
    ],
 "messageMetaTags":[
     {
          "name":"<string>",
          "value":"<string>"
     }
  ]
}
```

## sdk.sendBotMessage

This function sends the message to the bot.

**Usage**
Used inside the `on_user_message` event callback. An `on_user_message` event is called when the user sends a message to the bot. In the SDK, payload data such as `message` can be modified and sent to the Platform. A validation check is performed on the user message – the message cannot have more than 3000 characters and each word cannot have more than 1200 letters.

**Syntax:**

```javascript
sdk.sendBotMessage(payload, callback)
```

**Parameters:**

* payload – A JSON response payload as follows:
    
    ```json
    {
    "message":"Message sent by the user",
    "channel":"Channel name",
    "context": <context object>
    }
    ```

* callback – The function to call at event completion used to send the updated message and context back to the Platform.

**Examples**
The following code snippet send the user response to the bot.

```javascript
   on_user_message: function(requestId, payload, callback) {
        sdk.sendBotMessage(payload, callback);
    }
```

In this `on_user_message` function, the message is returned directly to the user, and if not a transfer to a Live Agent, then is sent to the bot.

```javascript
   on_user_message: function(requestId, payload, callback) {
        if (payload.message === "Hi") {
            payload.message = "Hello";
            //Sends back 'Hello' to user.
            return sdk.sendUserMessage(payload, callback);
        } else if (!payload.agent_transfer) {
            //Forward the message to bot
            return sdk.sendBotMessage(payload, callback);
        } else {
            payload.message = "Agent Message";
            return sdk.sendUserMessage(payload, callback);
        }
    };
```

Post the release of ver8.0 of the Platform, you can add User, Message, and Session Meta Tags. The following would be the syntax for the necessary payload:


```json
metaTags":{
     "userMetaTags":[
        {
            "name":"<string>",
           "value":"<string>"
       }
    ],
   "sessionMetaTags":[
      {
         "name":"<string>",
         "value":"<string>"
      }
    ],
 "messageMetaTags":[
     {
          "name":"<string>",
          "value":"<string>"
     }
  ]
}
```

## sdk.AsyncResponse

This function prepares the asynchronous response to send to the Platform.

**Usage**
If the dialog task execution flow reaches a webhook node, the Platform makes an `on_webhook` event call to the SDK. The `on_webhook` event call supports two types of responses:

* **Synchronous response** – If the business logic execution can be completed within an acceptable time, the SDK can respond synchronously using the `callback(null, payload)` function.
* **Asynchronous response** – If the business logic execution needs more time, the SDK can send the asynchronous response to the Platform by calling the `callback(null, new sdk.AsyncResponse())` function to send an HTTP code 202 to the Platform. When the response is ready, the SDK can call the `sdk.respondToHook(payload)` function.

**Syntax:**

```javascript
sdk.AsyncResponse()
callback(null, new sdk.AsyncResponse())
```

**Parameters:**
None.

**Examples**
This example of an `on_webhook` function, the bot waits asynchronously for the booking of the cab selected by the user.


```javascript
on_webhook : function(requestId, payload, componentName, callback) {
        var context = payload.context;
        if (componentName === 'FindNearbyCabs') {
            findCabs()
                .then(function(cabList) {
                    context.cabList = cabList;
                    callback(null, data);
                });
        } else if (componentName === 'BookTheCab') {
            sdk.saveData(requestId, payload)
                .then(function() {
                    bookTheCab(requestId, context.entities.selectedCab.id, context.session.UserSession.location, context.entities.whereTo);
                    callback(null, new sdk.AsyncResponse());
                });
        }
    }
```

## sdk.respondToHook

This function sends the webhook response to the Platform.

**Usage**
If the dialog task execution flow reaches a webhook node, the Platform makes an `on_webhook` event call to the SDK. The `on_webhook` event call supports two types of responses:

* **Synchronous response** – If the business logic execution can be completed within an acceptable time, the SDK can respond synchronously using the `callback(null, payload)` function.
* **Asynchronous response** – If the business logic execution needs more time, the SDK can send the asynchronous response to the Platform by calling the `callback(null, new sdk.AsyncResponse())` function to send an HTTP code 202 to the Platform. When the response is ready, the SDK can call the `sdk.respondToHook(payload)` function.

**Syntax:**

```javascript
sdk.respondToHook(payload)
```

**Parameters:**

* payload – A JSON response payload as follows:

```json
{
   "taskId":"Dialog task ID",
   "nodeId":"Current node ID in the dialog flow",
   "channel":"Channel name",
   "context": <context object>
}
```

**Examples** 
In the following code snippet, if the booking of the cab fails, the event is handled synchronously. Conversely, the booking of the cab is handled asynchronously via a webhook.

```javascript
function onBookingFailure(requestId) {
    sdk.getSavedData(requestId)
        .then(function(payload) {
            payload.context.successful = false;
            sdk.respondToHook(payload);
        });
}
//call cabBookingService with the requestId. This service is expected to respond asynchronously.
//'requestId' must be passed along all asynchronous flows, to allow the BotKit to respond
// back to the hook once the async process is completed.
function bookTheCab(requestId, cabId, userLoc, destination) {
    cabBookingService(requestId, cabId, userLoc, destination, {
        on_success: onBookingSuccess,
        on_failure: onBookingFailure
    });
}
```

## sdk.registerBot

This function registers the App and makes callback events available at runtime.

**Usage**
The BotKit SDK is designed to require you to create one Node.js file for each bot. All callbacks for that bot are maintained in the Node.js file. To register a bot, you must export the following variables and functions as:

```javascript
module.exports = {
      botId : "xxxxx",
      botName : ""xxxxx",
      on_user_message : function(requestId, data, callback) {
           //code goes here
      },
      on_bot_message : function(requestId, data, componentName, callback) {
           //code goes here
      },
     on_webhook : function(requestId, data, componentName, callback) {
           //code goes here
      },
}
```


**Syntax:**
To register the bot, call

```javascript
sdk.registerBot(require('./<Bot Name>.js'));
```

**Parameters:**

* Node.js file for the bot to register

**Examples**
The following code example shows registration of the bot by `botId` and `botName`.

```javascript
module.exports = {
    botId : botId,
    botName : botName,
    on_user_message : function(requestId, payload, callback) {
        debug('on_user_message');
        onUserMessage(requestId, payload, callback);
    },
    on_bot_message : function(requestId, payload, callback) {
        debug('on_bot_message');
        onBotMessage(requestId, payload, callback);
    },
    on_agent_transfer : function(requestId, payload, callback) { console.log("on agent transfer event");
        debug('on_webhook');
        onAgentTransfer(requestId, payload, callback);
    },
    gethistory: gethistory
};
```

## sdk.saveData

This function saves the data in the _Redis_ in-memory data structure store.

**Usage**
When you respond to an `on_webhook` event call asynchronously, you can store the payload in the _Redis_ store by `requestId`. After completion of your business logic execution, you can read the data using the `sdk.getSavedData(requestId)function` while preparing the webhook response.

**Syntax:**

```javascript
sdk.saveData(requestId, payload)
```

**Parameters:**

* requestId – The `requestId` from the asynchronous `on_webhook` event call.
* payload – A JSON response payload as follows:

```json
{
   "taskId":"Dialog task ID",
   "nodeId":"Current node ID in the dialog flow",
   "channel":"Channel name",
   "context": <context object>
}
```

**Examples**
In this `on_webhook` event, the user request to book a cab is saved in the _Redis_ store and the asynchronous processing of the booking begins.

```javascript
on_webhook : function(requestId, payload, componentId, callback) {
        var context = data.context;
        if (componentId === 'FindNearbyCabs') {
            findCabs()
                .then(function(cabList) {
                    context.cabList = cabList;
                    callback(null, payload);
                });
        } else if (componentName === 'BookTheCab') {
            sdk.saveData(requestId, payload)
                .then(function() {
                    //Assuming the cab booking was successful. A mock service to book the cab can be called here.
                    payload.successful = 'true';
                    payload.bookedCab = context.entities.selectedCab || {};
                    callback(null, payload);
                });
        }
    }
```

## sdk.getSavedData

This function reads the data in the _Redis_ in-memory data structure store.

**Usage**
When you respond to an `on_webhook` event call asynchronously, you can store the payload in the _Redis_ store by `requestId`. After completion of your business logic execution, you can read the data using the `sdk.getSavedData(requestId)function` while preparing the webhook response.

**Syntax:**

```javascript
sdk.getSavedData(requestId, payload)
```

**Parameters:**

* requestId – The `requestId` from the asynchronous `on_webhook` event call.
* payload – A JSON response payload as follows:

```json
{
   "taskId":"Dialog task ID",
   "nodeId":"Current node ID in the dialog flow",
   "channel":"Channel name",
   "context": <context object>
}
```

**Examples**
In this code example, the `sdk.getSavedData` function is used to return the selected cab and booking information, or if the asynchronous booking webhook event fails, sends the failure message for the selected booking to the user.

```javascript
/*/
 * Responds to the webhook asynchronously with the success flag.
 */
function onBookingSuccess(requestId) {
    sdk.getSavedData(requestId)
        .then(function(payload) {
            payload.context.bookedCab = payload.entities.selectedCab;
            payload.context.successful = true;
            sdk.respondToHook(payload);
        });
}
function onBookingFailure(requestId) {
    sdk.getSavedData(requestId)
        .then(function(payload) {
            payload.context.successful = false;
            sdk.respondToHook(payload);
        });
}
```

## sdk.getMessages

This function is used to get the transcript of previous conversations between the bot and the user. It works similar to the public API Conversation History. See here for [Conversation History API](../apis/automation/conversation-history.md).

**Usage**
Fetches the conversational messages between the bot and user in reverse chronological order. This API supports pagination. You can provide offset/skip and limit to get a certain number of messages at a time.

**Syntax:**

```javascript
sdk.getMessages(requestData, callback)
```

**Parameters:**

* requestData – `requestData.baseUrl + '/getMessages?' + "skip=" + offset + "&limit=" + limit + "&userId=" + userId+"&channelType"=channel-type`, where
    * stream_id – Bot ID accessible from the Config Settings page of the Platform
    * user_id – The ID of the user whose conversation history to access
    * skip – The number of messages to be skipped.
    * limit – The number of messages to be shown on each page.
    * channelType – Optional, the channel where the conversation was hosted.
* callback – The function to call at event completion used to send the message history back to the Platform.

**Examples**


```javascript
//this example is from the LiveChat.js
//where the gethistory() function uses getMessage() to extract the messages
    var userId = req.query.userId;
    var data = userDataMap[userId];
    if(data) {
        data.limit = 100;
        return sdk.getMessages(data, function(err, resp){
            if(err){
                res.status(400);
                return res.json(err);
            }
            var messages = resp.messages;
            res.status(200);
            return res.json(messages);
        });
```

## sdk.clearAgentSession

This function is used to clear the Agent session and reestablish the conversation with the bot.

**Usage**
In an Agent Transfer scenario, when the agent closes the conversation with the user, `chat_closed` event gets triggered from 3rd party provider. In such situations, this function is invoked to re-establish the conversation with the bot

**Syntax:**

```javascript
sdk.clearAgentSession(requestData, callback)
```

**Parameters:**

* requestData – `requestData.baseUrl+ '/clearAgentSession/' + requestData.requestId`, where
    * requestId – the session id
* callback – The function to call at event completion.

**Examples**

```javascript
//this example is from the LiveChat.js
//where the function is invoked to clear agent session when the chat is closed by the user
    if (event.type==="chat_closed"){
       console.log('chat_closed');
       delete userResponseDataMap[visitorId];
       delete _map[visitorId];
       sdk.clearAgentSession(data);
    }
```

Post the release of ver8.0 of the Platform, you can add User, Message, and Session Meta Tags. The following would be the syntax for the necessary payload:


```json
metaTags":{
     "userMetaTags":[
        {
            "name":"<string>",
           "value":"<string>"
       }
    ],
   "sessionMetaTags":[
      {
         "name":"<string>",
         "value":"<string>"
      }
    ],
 "messageMetaTags":[
     {
          "name":"<string>",
          "value":"<string>"
     }
  ]
}
```

## sdk.startAgentSession

This function is used to notify the Platform that an Agent session has started.

**Usage**
This function is used when an Agent Transfer is initiated and you want to indicate to the bot that the agent transfer is in progress. Followed by this, the data object received by BotKit at onMessages(), for instance, would have agent session as true. Further, if the _sdk.clearAgentSession_ is called from BotKit, the Platform is notified that agent session is completed and the data object received by the BotKit would have the agent session set to false.

**Syntax:**

```javascript
sdk.startAgentSession(requestData, callback)
```

**Parameters:**

* `requestData` – as follows: \
` requestData.baseUrl + '/startAgentSession/' + requestData.requestId \
`where
    * `requestId` – the session id
* `callback` – The function to call at event completion.

**Examples**

```javascript
//The following function call is used in the LiveChat.js for connectToAgent() function
//Invoking the startAgentSession before invoking the initChat function will ensure that
// the bot detects the Agent transfer in progress
function connectToAgent(requestId, data, cb) {
    var formdata = {};
    formdata.license_id = config.liveagentlicense;
    formdata.welcome_message = "";
    var visitorId = _.get(data, 'channel.channelInfos.from');
    if (!visitorId) {
        visitorId = _.get(data, 'channel.from');
    }
    userDataMap[visitorId] = data;
    data.message = "An Agent will be assigned to you shortly!!!";
    sdk.sendUserMessage(data, cb);
    sdk.startAgentSession(data, cb);
    formdata.welcome_message = "Link for user Chat history with the bot: " + config.app.url + "/history/index.html?visitorId=" + visitorId;
    return api.initChat(visitorId, formdata)
        .then(function(res) {
            _map[visitorId] = {
                secured_session_id: res.secured_session_id,
                visitorId: visitorId,
                last_message_id: 0
            };
        });
}
```

Post the release of ver8.0 of the Platform, you can add User, Message, and Session Meta Tags. The following would be the syntax for the necessary payload:

```json
metaTags":{
     "userMetaTags":[
        {
            "name":"<string>",
           "value":"<string>"
       }
    ],
   "sessionMetaTags":[
      {
         "name":"<string>",
         "value":"<string>"
      }
    ],
 "messageMetaTags":[
     {
          "name":"<string>",
          "value":"<string>"
     }
  ]
}
```

## sdk.resetBot

This function is used to clear the context and discard the current task silently.

**Usage**
At run time, during the execution of dialog, if the user input might want to clear the bot using “reset bot” command. Then the context can be cleared and the task discarded.

**Syntax:**

```javascript
sdk.resetBot(requestData, callback)
```

**Parameters:**

* requestData – `requestData.resetBotUrl`
* callback – The function to call at event completion.

**Examples**


```javascript
on_user_message : function(requestId, data, callback) {
     if (data.message==="reset bot"){
        sdk.resetBot(data, callback);
      }
```


## sdk.extendRequestId

This function is used to extend the time allocated for botKit to send messages to the Platform.

**Usage**
This function is used when an Agent Transfer is initiated and after sometime Platform might not be receiving messages. This can be addressed by extending the time allocated for the botKit to send messages to the Platform.

**Syntax:**

```javascript
sdk.extendRequestId(requestData, callback)
```

**Examples**

```javascript
function onBotMessage(requestId, data, cb) {
    console.log("bot message", JSON.stringify(data));
    var visitorId = _.get(data, 'channel.from');
    event = schedular.scheduleJob("*/4 * * * *", function() {
        pub.get(visitorId + ':data', function(err, reply) {
            if (err) throw err;
            sdk.extendRequestId(data, cb);
        })
    });
}
on_user_message: function(requestId, data, callback) {
        var visitorId = _.get(data, 'channel.from');
        registerEvent(visitorId, data);
        if (event) {
            event.cancel();
        } else {
            console.log(new Date(), 'event not found');
        }
        event = schedular.scheduleJob("*/4 * * * *", function() {
            pub.get(visitorId + ':data', function(err, reply) {
                if (err) throw err;
                sdk.extendRequestId(data, callback);
            })
        });
```

!!!note
    Extending the time will not be effective in case of no active conversation for a period of 15 minutes. An inactive session would cause the agent_transfer mode to be reset irrespective.

## sdk.skipBotMessage

This function is used to skip a specific message for a specific business use case.

**Usage**

At run time, during the execution of dialog, instead of waiting for the BotKit to send a message to proceed, the system will proceed to the next step.

**Syntax:**

```javascript
sdk.skipBotMessage(requestData, callback)
```

**Parameters:**

* requestData – data
* callback – The function to call at event completion.

**Examples**


```javascript
if(data.message === "skipBotMessage"){ // condition for skipping a Bot message
	sdk.skipBotMessage(data, cb);
}
```

Post the release of ver8.0 of the Platform, you can add User, Message, and Session Meta Tags. The following would be the syntax for the necessary payload:

```json
metaTags":{
     "userMetaTags":[
        {
            "name":"<string>",
           "value":"<string>"
       }
    ],
   "sessionMetaTags":[
      {
         "name":"<string>",
         "value":"<string>"
      }
    ],
 "messageMetaTags":[
     {
          "name":"<string>",
          "value":"<string>"
     }
  ]
}
```

## sdk.skipUserMessage

This function is used to skip a specific message for a specific business use case.

**Usage**
At run time, during the execution of dialog, instead of waiting for the BotKit to send a confirmation message to proceed, the system will proceed with the next step.

**Syntax:**
```javascript
sdk.skipUserMessage(requestData, callback)
```

**Parameters:**

* `requestData` – data
* `callback` – The function to call at event completion.

**Examples**

```javascript
if(data.message === "skipUserMessage"){ // condition for skipping a user message
	sdk.skipUserMessage(data, cb);
}
```

Post the release of ver8.0 of the Platform, you can add User, Message, and Session Meta Tags. The following would be the syntax for the necessary payload:

```json
metaTags":{
     "userMetaTags":[
        {
            "name":"<string>",
           "value":"<string>"
       }
    ],
   "sessionMetaTags":[
      {
         "name":"<string>",
         "value":"<string>"
      }
    ],
 "messageMetaTags":[
     {
          "name":"<string>",
          "value":"<string>"
     }
  ]
}
```

## sdk.closeConversationSession

This function is used to close a conversation session.

**Syntax:**

```
sdk.closeConversationSession(requestData, callback)
```
**Parameters:**

* requestData – data
* callback – The function to call at event completion.

**Examples**

```javascript
if(data.message === "closeConversationSession"){ // condition for skipping a user message
    sdk.closeConversationSession(data, cb);
}
```

Post the release of ver8.0 of the Platform, you can add User, Message, and Session Meta Tags. The following would be the syntax for the necessary payload:


```json
metaTags":
{
    "userMetaTags":[
        {
            "name":"<string>",
            "value":"<string>"
       }
    ],
    "sessionMetaTags":[
      {
         "name":"<string>",
         "value":"<string>"
      }
    ],
    "messageMetaTags":[
     {
          "name":"<string>",
          "value":"<string>"
     }
    ]
}
```