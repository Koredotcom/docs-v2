# Context Object

The `Context` object is the container object that persists data for dialog execution and across all intents i.e., dialog tasks, action, alert & info tasks, and FAQs. Kore.ai’s natural language processing (NLP) engine populates the intent identified, entities extracted, and history into this object. Keys from the `Context` object are used in the dialog task and intent transition conditions. Also, the `context` object can be accessed with additional system and session variables. 

The syntax when using a `Context` object key in a URL is to enclose the object name in double brackets, as shown next:
 `https://quora.com/{{context.entities.topic}}/rss`

The `Context` object can also be referenced in a script node as well as for dynamic values in an entity node and passed in the payload response to the Kore.ai SDK. You can update the `Context` object key values based on business logic to influence the dialog task execution.

!!!note
    
    The context object has a size limit of 1024 KB. The platform notifies the app designers when the size of the context object exceeds the limit. 
    
    We recommend you review these notifications and modify the app definition to keep the context object size under the limit. In the upcoming releases, the platform will discard conversations if the context size exceeds the limit.

The platform also creates and maintains Session Variables which can be referred to from [here](../../automation/use-cases/using-session-and-context-variables.md).
The following table describes the `Context` object keys. These can be classified into Global and Dialog contexts based on when they are created and populated. Click [here](../../app-settings/advanced-settings/bot-sessions.md#implementation) for details.

<table border="1.5">
<tr bgcolor="#ECECEC">
   <td><strong>KEY</strong>
   </td>
   <td><strong>CATEGORY</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>USAGE EXAMPLE</strong>
   </td>
  </tr>
  <tr>
   <td>intent
   </td>
   <td>Dialog
   </td>
   <td>The intent recognized by the NLP interpreter.
   </td>
   <td><strong>Syntax:</strong> <code>context.intent.<< intent name >></code>
   </td>
  </tr>
  <tr>
   <td>entities
   </td>
   <td>Dialog
   </td>
   <td>An array of key/value pairs based on user prompts and recognized user input for those prompts.
   </td>
   <td><strong>Syntax:</strong> <code>context.entities.<< entity name >></code>In the following code example, the <code>context.entities</code> object is used to access values for the amount and account names as a confirmation for a funds transfer between accounts
<p>
<code>var today = new Date();</code>
<p>
<code>if(today.getHours() < 21)</code>
<p>
<code> {</code>
<p>
<code>   print("You have requested to transfer " +context.entities.Passenger + </code>
<p>
<code>         " from " +context.entities.FromFlightNumber +</code>
<p>
<code>         " to " +context.entities.ToFlightNumber + ". " +  </code>
<p>
<code>         " It will take 24h for your boarding pass to reflect the change. Shall I go ahead? ");</code>
<p>
<code>  }</code>
<p>
<code> else</code>
<p>
<code> {</code>
<p>
<code>  print("You have requested to transfer" +context.entities.Passenger + </code>
<p>
<code>        " from " +context.entities.FromFlightNumber +</code>
<p>
<code>        " to " +context.entities.ToFlightNumber+ ". Shall I go ahead? " +</code>
<p>
<code>         context.accdata[0].transfers.length);</code>
<p>
<code>  }</code>  
   Use the flag, <code>reuseEntityWords: true</code>,  as part of the pre-conditions to enable entity values extracted in a parent dialog to be automatically available and reused in downstream dialogs without needing to prompt the user again.

   </td>
  </tr>
  <tr>
   <td>traits
   </td>
   <td>Dialog
   </td>
   <td>Traits set for the given context
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>currentLanguage
<p>
   </td>
   <td>Global
   </td>
   <td>the current conversation language
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>suggestedLanguages
<p>
   </td>
   <td>Global
   </td>
   <td>list of all languages detected by the platform from the user’s first utterance, presented in the order of confidence level. This will be reset at the start of each conversation.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>history
   </td>
   <td>Global
   </td>
   <td>An array that contains the <code>nodeId</code> for each component using the NLP interpreter.
   </td>
   <td>An array of objects defining the sequential and historical node path executed in the dialog flow.
<ul>

<li><code>nodeId</code> – The dialog task flow ID for this node using node type and incremental numbering, for example, intent0, service2, and so forth.

<li><code>state</code> – The status of the object for the timestamp indicated. One of: 
<ul>
 
<li><code>processing</code> – The Platform begins processing of the node
 
<li><code>processed</code> – The node and node connections are processed, the following node is found but the dialog has not yet moved to that node.
 
<li><code>waitingForUserInput</code> – The user was prompted for input but has not been received.
 
<li><code>pause</code> – The current dialog task is paused while another task is started.
 
<li><code>resume</code> – The current dialog with the status of pause continues at the same point in the flow after the completion of another task that was started.
 
<li><code>waitingForServerResponse</code> – The server request is pending an asynchronous response.
 
<li><code>error</code> – An error occurred, for example, the loop limit is reached, a server or script node execution fails.
 
<li><code>end</code> –  The dialog reached the end of the dialog flow.
</li> 
</ul>

<li><code>type</code> – The type of dialog task. One of: 
<ul>
 
<li><code>intent</code> – The dialog task is a user intent or task.
 
<li><code>faq</code> – The dialog task is a knowledge graph.
</li> 
</ul>

<li><code>componentName</code> – The name of the node.

<li><code>timestamp</code> – The JSON date timestamp of the node execution, for example, 1492794646000.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>onHoldTasks
   </td>
   <td>Dialog
   </td>
   <td>an array of all tasks that are kept on hold while a conversation is in progress. This is a read-only list that you can use for evaluation purposes. (introduced in ver 7.1)
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>service node name
   </td>
   <td>Dialog
   </td>
   <td>A collection of objects for Service node executions.
   </td>
   <td>
<ul>

<li><code>response</code> – Returns the request status and response body as a JSON payload. 
<ul>
 
<li><code>statusCode</code> – The HTTP status code of the request, for example, <code>200 OK</code>.
 
<li><code>body</code> – The JSON payload response body from the service request.
</li> 
</ul>
</li> 
</ul>
   </td>
  </tr>
  <tr>
   <td>resultsFound
   </td>
   <td>Dialog
   </td>
   <td>True, if results are returned
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>message_tone
   </td>
   <td>Global
   </td>
   <td>An array of recognized tone emotions and scores for the current node in a dialog task.
   </td>
   <td>
<ul>

<li><code>tone_name</code> – The name of the tone detected. One of: 
<ul>
 
<li><code>angry</code>
 
<li><code>disgust</code>
 
<li><code>fear</code>
 
<li><code>sad</code>
 
<li><code>joy</code>
 
<li><code>positive</code> – A special tone used to evaluate the general positivity of an utterance.
</li> 
</ul>

<li><code>count</code>

<li><code>level</code> – The level of the tone emotion ranging from -3 to +3. One of: 
<ul>
 
<li><strong>+3</strong> – The user definitely expressed the tone emotion.
 
<li><strong>+2</strong> – The user expressed the tone emotion.
 
<li><strong>+1</strong> – The user likely expressed the tone emotion.
 
<li><strong>0</strong> – The user tone emotion is neutral.
 
<li><strong>-1</strong> – The user likely suppressed the tone emotion.
 
<li><strong>-2</strong> – The user suppressed the tone emotion.
 
<li><strong>-3</strong> –  The user definitely suppressed the tone emotion.
</li> 
</ul>
</li> 
</ul>
   </td>
  </tr>
  <tr>
   <td>dialog_tone
   </td>
   <td>Global
   </td>
   <td>An array of average recognized tone emotions and scores for the entire dialog task session.
   </td>
   <td>
<ul>

<li><code>tone_name</code> – The name of the tone detected. One of: 
<ul>
 
<li><code>angry</code>
 
<li><code>disgust</code>
 
<li><code>fear</code>
 
<li><code>sad</code>
 
<li><code>joy</code>
 
<li><code>positive</code> – A special tone used to evaluate the general positivity of an utterance.
</li> 
</ul>

<li><code>count</code>

<li><code>level</code> – The level of the tone emotion ranging from -3 to +3. One of: 
<ul>
 
<li><strong>+3</strong> – The user definitely expressed the tone emotion.
 
<li><strong>+2</strong> – The user expressed the tone emotion.
 
<li><strong>+1</strong> – The user likely expressed the tone emotion.
 
<li><strong>0</strong> – The user tone emotion is neutral.
 
<li><strong>-1</strong> – The user likely suppressed the tone emotion.
 
<li><strong>-2</strong> – The user suppressed the tone emotion.
 
<li><strong>-3</strong> –  The user definitely suppressed the tone emotion.
</li> 
</ul>
</li> 
</ul>
   </td>
  </tr>
  <tr>
   <td><< nodename >>.response.body
   </td>
   <td>Dialog
   </td>
   <td>The HTTP JSON response from the Service node.
   </td>
   <td><strong>Syntax:</strong> <code>context.<< node name >>.response.body</code>
<p>
In the following code example, the response from a Service node is displayed to the end-user in a Message node.
<p>
<code>print(JSON.stringify(context.fetchopportunitiesnode.response.body));</code>
   </td>
  </tr>
  <tr>
   <td>Developer Defined Key
   </td>
   <td>Dialog
   </td>
   <td>A key/value pair defined by the developer.
   </td>
   <td><strong>Syntax:</strong> <code>context.<< varName >></code>
<p>
For example, <code>context.customerId</code>
   </td>
  </tr>
  <tr>
   <td>UserQuery
   </td>
   <td>Dialog
   </td>
   <td>Rephrase user query.
   </td>
   <td><strong>Syntax:</strong> <code>context.UserQuery : {
      	originalUserQuery : < original user input >,
         rephrasedUserQuery : < rephrase user query >
}
</code>
<p>
For example, <code>context.UserQuery{
"originalUserQuery": "How about Orlando?",
"rephrasedUserQuery": "How about the weather in Orlando?"
}</code>
   </td>
  </tr>
</table>

**Sample Context Object**

The following is a payload response that contains a context object:

```js
"context":{
   "bot":"Travel Planning Assistant Documentation",
   "botid":"st-b4a22e86-XXXX-575c-b888-e106d083a251",
   "taskid":"dg-df510618-XXXX-5a0b-8370-ee042b3e5b47",
   "intent":"Agent",
   "intentType":"dialog",
   "entities":{
      "Name":12345,
      "number":1234
   },
   "userInputs":{
      "originalInput":{
         "sentence":" agent",
         "timestamp":1501244143000
      }
   },
   "history":[
      {
         "originalSentence":"agent",
         "timestamp":1501244143000
      },
      {
         "dialogState":"started",
         "timestamp":1501244143000
      },
      {
         "nodeId":"intent0",
         "state":"processed",
         "type":"intent",
         "componentName":"Agent",
         "timestamp":1501244143000
      },
      {
         "nodeId":"entity1",
         "state":"processing",
         "type":"entity",
         "componentName":"Name",
         "timestamp":1501244143000
      },
      {
         "nodeId":"entity1",
         "state":"waitingForUserInput",
         "type":"entity",
         "componentName":"Name",
         "timestamp":1501244143000
      },
      {
         "nodeId":"entity1",
         "state":"processed",
         "type":"entity",
         "componentName":"Name",
         "timestamp":1501244149000
      },
      {
         "nodeId":"entity4",
         "state":"processing",
         "type":"entity",
         "componentName":"number",
         "timestamp":1501244149000
      },
      {
         "nodeId":"entity4",
         "state":"waitingForUserInput",
         "type":"entity",
         "componentName":"number",
         "timestamp":1501244149000
      },
      {
         "nodeId":"entity4",
         "state":"processed",
         "type":"entity",
         "componentName":"number",
         "timestamp":1501244156000
      },
      {
         "nodeId":"agentTransfer3",
         "state":"processing",
         "type":"agentTransfer",
         "componentName":"agenttransfer",
         "timestamp":1501244156000
      },
      {
         "dialogState":"transferredToAgent",
         "timestamp":1501244156000
      }
   ],
   "dialog_tone":[
      {
         "tone_name":"positive",
         "level":1
      }
   ],
   "message_tone":[
      {
         "tone_name":"positive",
         "level":1
      }
   ],
  "currentTags": {
    "tags": [
      "name"
    ]
  },
  "historicTags": [
    {
      "tags": [
        "name"
      ]
    }
  ],
   "session":{
      "EnterpriseContext":{
         "5":"500",
         "TestData-Ent":"1000234",
         "ec1":"Enterprise Context session variable from processor",
         "Enterprise_J_Doe_Email":"john.doe@example.com",
         "enterprisesessiondialog":"enterprisesessiondialogvalue",
         "enterprisecustomprocessor":"enterprisecustomprocessorvalue",
         "enterprisepreprocessor":"enterprisepreprocessorvalue",
         "EnterpriseContext":"EnterpriseContextvalueresponse",
         "Entersession123":"Entersession123value",
         "EnterpriseContext Summary":"TestingSpread",
         "enterprisecontext":"enterprisecontextvalue",
         "ec2":"Enterprise Context session variable from channel response",
         "EC":"ec session variable from initializer",
         "enterprisepreprocessorkey":"enterprisepreprocessorvalue"
      },
      "BotContext":{
      },
      "UserContext":{
         "profColour":"#3651fc",
         "workinghours":{
            "workdays":"Mon, Tue, Wed, Thu, Fri, Sat, Sun",
            "workstart":"12:00 AM",
            "workend":"12:00 PM"
         },
         "dept":"Product Development",
         "jTitle":"Documentation Manager",
         "profImage":"profile.png",
         "activationStatus":"active",
         "emailId":"john.doe@example.com",
         "firstName":"Help",
         "lastName":"Docs",
         "orgId":"o-b30656ae-XXXX-XXXX-9181-065f7de34be9",
         "_id":"u-4b9f02a3-XXXX-XXXX-b5cc-6df81c0af603",
         "customData":null,
         "identities":[
            {
               "val":"john.doe@example.com",
               "type":"email"
            },
            {
               "val":"kore/u-4b9f02a3-XXXX-XXXX-b5cc-6df81c0af603",
               "type":"mapped"
            }
         ]
      },
      "UserSession":{
      },
      "BotUserSession":{
         "isReturningUser": true,
         "lastMessage":{
            "channel":"rtm",
            "messagePayload":{
               "clientMessageId":1501244152843,
               "message":{
                  "body":"1234"
               },
               "resourceid":"/bot.message",
               "botInfo":{
                  "chatBot":"Travel Planning Assistant Documentation",
                  "taskBotId":"st-b4a22e86-XXXX-XXXX-b888-e106d083a251"
               },
               "client":"botbuilder",
               "meta":{
                  "timezone":"America/New_York",
                  "locale":"en-US"
               },
               "id":1501244152843
            }
         },
     "lastUserMessageTime": "2021-07-12T07:07:17.278Z"
      },
      "opts":{
         "userId":"u-4b9f02a3-XXXX-XXXX-b5cc-6df81c0af603",
         "streamId":"st-b4a22e86-XXXX-XXXX-b888-e106d083a251"
      }
   }
},
"channel":{
   "_id":"dc-5b4a742a-XXXX-XXXX-938f-520912935456",
   "channelInfos":{
      "requestId":"ms-26aae382-XXXX-XXXX-8bf1-a9e076770956",
      "message":"The bot is not accessible via Web / Mobile Client.",
      "body":"1234",
      "client":"botbuilder",
      "handle":{
         "spanId":"8cab2ce2f6aabc47",
         "traceId":"8cab2ce2f6aabc47",
         "taskBotId":"st-b4a22e86-XXXX-XXXX-b888-e106d083a251",
         "clientId":"5a37bf24-XXXX-XXXX-a816-f9602db08149",
         "userId":"u-4b9f02a3-XXXX-XXXX-b5cc-6df81c0af603",
         "handleId":"54e95c2b-XXXX-XXXX-ba6b-384d4166f1b2"
      },
      "botInfo":{
         "taskBotId":"st-b4a22e86-XXXX-XXXX-b888-e106d083a251",
         "chatBot":"Travel Planning Assistant Documentation"
      },
      "from":"u-4b9f02a3-3f6f-XXXX-XXXX-6df81c0af603",
      "type":"rtm"
   },
   "__v":0
},
"baseUrl":"https://bots.kore.ai/api/botsdk/stream/st-b4a22e86-XXXX-XXXX-b888-e106d083a251",
"sendUserMessageUrl":"https://bots.kore.ai/api/botsdk/stream/st-b4a22e86-e95b-XXXX-XXXX-e106d083a251/sendUserMessage/1501244156289",
"sendBotMessageUrl":"https://bots.kore.ai/api/botsdk/stream/st-b4a22e86-e95b-XXXX-XXXX-e106d083a251/sendBotMessage/1501244156289"
}
“lastUserMessageTime”: “2021-07-12T07:07:17.278Z”
```