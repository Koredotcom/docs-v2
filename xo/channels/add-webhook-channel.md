--8<-- "includes/digital-channels-back-link.md"

# Adding WebHook as a channel

Webhook channel provides a generic integration framework to connect your AI Agent with any external communication systems. Kore.ai Platform provides standard request and response APIs to send and receive messages in text format. The end user’s input through a voice, keypad, or any other means must be converted to plain text before sending to the Kore.ai XO Platform using the Request API.

The Webhook Channel will continue to be available under the ‘Available Channels’ list, and you can choose to create additional instances. Each Webhook channel instances is presented as an independent channel to define messages, prompts, filters, etc., across the application.


## Webhook Versions

The platform supports two versions of the Webhook channel i.e., V1.0 and V2.0.

!!! note

    V2.0 is the recommended version as it provides a scalable request and response format.

Here are the key differences:


<table>
  <tr>
   <td><strong>FEATURE</strong>
   </td>
   <td><strong>WEBHOOK V1.0</strong>
   </td>
   <td><strong>WEBHOOK V2.0</strong>
   </td>
  </tr>
  <tr>
   <td>Events
   </td>
   <td>Not supported
   </td>
   <td>Supports ‘on connect’ event
   </td>
  </tr>
  <tr>
   <td>Poll Mechanism
   </td>
   <td>Not supported
   </td>
   <td>Supported in Synchronous Mode
   </td>
  </tr>
  <tr>
   <td>File Upload in Chunks
   </td>
   <td>Not supported
   </td>
   <td>Supported
   </td>
  </tr>
</table>



## Integration Mode

The platform supports Synchronous and Asynchronous modes of integrations for the Webhook channel. Here are the key differences:



* **Synchronous Mode**: The app responses are directly delivered as a response to the incoming requests. The app will execute the flow, identify the response or responses to be delivered, and provide them as the response to the incoming request. Some platform functionalities like Alert Tasks, Agent Transfer, and Proactive Session Closure messages are not supported in the Synchronous mode. You may consider using the onAlert event through BotKit, [Learn more](../sdk/sdk-events.md#onvariableupdate).

    !!! note

        Synchronous Webhook channel requests timeout after 15 seconds. We recommend using the Asynchronous Webhook Channel if you expect the requests to take beyond 15 seconds.

* **Asynchronous Mode**: Asynchronous mode is useful if you want to deliver the app responses to a URL other than the incoming request’s URL. You have to configure the POST_URL of your external system to enable the Async mode. The app responses are asynchronously delivered to this POST_URL. Do note the that Kore.ai XO Platform does not provide the service to host the POST URL. You need to host a custom service or use a third-party service for this.


## Step 1: Associate an App

To associate an App, follow the below steps:



1. In the XO Platform, select the assistant to which you want to add the channel.
2. Go to **Channels & Flows** > **Channels** > **Digital** > **All** > **Webhook**.
3. Go to the **Configurations** tab of this page and associate this channel with an app.
4. Enter a **Name** for the channel.
    1. Select one of these scopes for the app:
        1. Allow anonymous users to chat with the assistant: enables anonymous users to interact with the assistant.
        2. Auto register new users on Kore.ai XO Platform: Select to control the auto-user registration in Kore.ai if the user assertion is unknown.
    2. In the JWT Signing Algorithms Used For Client App Authentication drop-down list, select one of the following security algorithms:
        1. **RS256/RS512**: Select to enable the **Public Key.** _The Private key, used for encryption, is provided by the user, and the Public key, used for decryption, is provided by the Platform_. Both the keys have to be used for generating the token. The Public Key is used by the XO Platform to authenticate the client application.
        2. **HS256/HS512**: Select to generate a **Secret Key** and a **Client ID**. The **Client ID** is required for app initialization, and the **Secret Key** is used by the XO Platform to authenticate the client application
    3. Click **Create**. The app is created, and Client ID and Client Secret are generated. Copy the Client ID and Client Secret details
5. If you want to use the JSON Web Encryption (JWE) standard, you can view the _Public Key_ by clicking the link provided below the _Client Secret_ field.
6. The Webhook channel supports both **synchronous** and **asynchronous** modes. Depending on your business needs, you can enable one of these modes in the **Configurations** tab.
7. (Only for Webhook v2.0) In the **Synchronous** mode, by default, the **Enable the Polling for Webhook v2** option is selected.
<img src="../images/webhook.jpg" alt="webhook channel" title="webhook channel" style="border: 1px solid gray; zoom:70%;">

8. Deselect the **Enable the Polling in Webhook V2** option to retrieve the complete response, all at once, without the need for polling.

    !!! note

        This option is available only in Webhook v2.0. [Learn more](#webhook-v20).

9. In the **ASynchronous** mode, enable **Proactive Notifications** to send relevant updates to the users without requiring them to initiate interaction with the app first.  
<img src="../images/webhook_proactive_notification.png" alt="webhook channel" title="webhook channel" style="border: 1px solid gray; zoom:70%;">

10. Select **Yes** to **Enable Channel**.

11. **Save** the configuration. The Webhook URL in this channel instance is created dynamically.  
<img src="../images/webhook1.jpg" alt="enable webhook channel" title="enable webhook channel" style="border: 1px solid gray; zoom:70%;">  



## Step 2: Select the Integration Mode

Use the **Webhook URL** to establish integration with external communication systems. This URL is available only after enabling the channel.
<img src="../images/webhook2.png" alt="add webhook URL" title="add webhook URL" style="border: 1px solid gray; zoom:70%;">

## Step 3: Deploy the Client SDK (Optional)

You may skip this step if you already have a messaging application to integrate with the Webhook channel. Optionally, you can use the Kore.ai Platform’s Web/Mobile [SDK libraries](https://github.com/Koredotcom/web-kore-sdk) to integrate with the Webhook channel.  Use V2 of the Webhook APIs with synchronous mode for integrating with the client libraries. You can select the API version by going to the Instructions tab of the Webhook channel and scrolling down to Step 4.

After completing these steps, a success message appears on the screen, and a channel request is sent to your Administrator for approval.


* The channel will be enabled for the end users only after the channel configurations are published. The publish request must be auto-approved or approved by the account admin.
* Webhook channel instances are included in the app export copy, and are imported when the definition is imported into another app. The channel instances are imported as placeholders, and you need to associate them with a valid app from the target AI Agent.


## Step 4: Review Payload Formats

To select the API Version for your integration, go to the Instructions tab of the Webhook channel you are working with. You can use the following code snippets of the payload formats to verify the integration. The Webhook API V2 is the latest version and includes a more standardized request and response payload.


### Webhook Endpoints

The structure of the Webhook URL of the first instance varies from any additional instances enabled for the app.



* In case you have either – only one webhook channel. Or for the first webhook channel in case you have multiple webhook channels configured: \
<code>POST  {{host_url}}<em>/chatbot/hooks/{{bot</em> id}}</code>
* in case of multi-webhook configuration for the second instance onwards In case you have multiple webhook channels configured, this applies to the second instance onwards: \
<code>POST  {{host_url}}/chatbot/hooks/{{bot<em> id}}/hookInstance/{{webHookId}}  (This is auto-generated)</em></code>


##### Query Parameters


<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>host_url
   </td>
   <td>Your XO Platform URL.
   </td>
  </tr>
  <tr>
   <td>app id
   </td>
   <td>The ID of the app to which you want to post messages. You can access it from the App Settings page of the app.
   </td>
  </tr>
</table>



## Webhook V1.0

Webhook version 1.0 supports simple request and response interfaces for enabling the communication between your custom channel interface and the platform. It is recommended to use the Webhook V2.0 as it supports standardized and modular payloads for exchanging messages and events.


## Interaction Flow


<table>
  <tr>
   <td><strong>SCENARIO</strong>
   </td>
   <td><strong>SYNCHRONOUS MODE</strong>
   </td>
   <td><strong>ASYNCHRONOUS MODE</strong>
   </td>
  </tr>
  <tr>
   <td>Single Response
   </td>
   <td>AI Agent responses are sent as a response to the incoming request.
   </td>
   <td>AI Agent response is sent to the Post_URL configured as part of the channel configurations.
   </td>
  </tr>
  <tr>
   <td>Multiple consecutive response nodes
   </td>
   <td>AI Agent responses are sent as an array to the incoming request.
   </td>
   <td>Each of the app response is sent to the Post_URL configured as part of the channel configurations
   </td>
  </tr>
  <tr>
   <td>Multiple response nodes with service / webhook nodes in between
   </td>
   <td>The platform completes the service / webhook execution and sends the app responses as an array to the incoming request.
   </td>
   <td>Each of the app response is sent to the Post_URL after processing the relevant service / webhook nodes.
   </td>
  </tr>
</table>



### Authorization

Invoke the API with JWT in the header with the following syntax:


```
Authorization: bearer {{JWT}}
```


Generate JWT using the following header and payload [from this page](../apis/automation/api-introduction.md#generating-the-jwt-token).


### Response content type


```
application/json
```



### Request Parameters

The following are the parameters required/supported in the v1.0 of the Webhook channel


<table>
  <tr>
   <td><strong>PARAMETER NAME</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>DATA TYPE</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
   <td><strong>POSSIBLE VALUES</strong>
   </td>
  </tr>
  <tr>
   <td><code>session</code>
   </td>
   <td>Details of how the conversation session should be handled.
   </td>
   <td>Objects
   </td>
   <td>Optional
   </td>
   <td>N/A
   </td>
  </tr>
  <tr>
   <td><code>new</code>
   </td>
   <td>Parameter to define whether to start a new conversion or continue with the existing.
   </td>
   <td>Boolean
   </td>
   <td>Optional
   </td>
   <td>
<ul>

<li>true

<li>false
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><code>message</code>
   </td>
   <td>Includes the contents of the incoming request to the app.
   </td>
   <td>Object
   </td>
   <td>Required
   </td>
   <td>N/A
   </td>
  </tr>
  <tr>
   <td><code>text</code>
   </td>
   <td>The message text to be sent to the app.
   </td>
   <td>String
   </td>
   <td>Required
   </td>
   <td>N/A
   </td>
  </tr>
  <tr>
   <td><code>attachments</code>
   </td>
   <td>The list of attachments to be passed to the app.
   </td>
   <td>Array of Objects
   </td>
   <td>Optional
   </td>
   <td><code>{"url":"https://- - "}</code>
   </td>
  </tr>
  <tr>
   <td><code>from</code>
   </td>
   <td>Details of the request origin. It usually includes user information.
   </td>
   <td>Object
   </td>
   <td>Required
   </td>
   <td>N/A
   </td>
  </tr>
  <tr>
   <td><code>id</code>
   </td>
   <td>The unique identity of the user interacting with the app.
   </td>
   <td>String
   </td>
   <td>Required
   </td>
   <td>Usually a random string, alphanumeric number, email id etc.,
   </td>
  </tr>
  <tr>
   <td><code>userInfo</code>
   </td>
   <td>The user profile information.
   </td>
   <td>Object
   </td>
   <td>Optional
   </td>
   <td>N/A
   </td>
  </tr>
  <tr>
   <td><code>firstName</code>
   </td>
   <td>The first name of the user.
   </td>
   <td>String
   </td>
   <td>Optional
   </td>
   <td>N/A
   </td>
  </tr>
  <tr>
   <td><code>lastName</code>
   </td>
   <td>The last name of the user.
   </td>
   <td>String
   </td>
   <td>Optional
   </td>
   <td>N/A
   </td>
  </tr>
  <tr>
   <td><code>email</code>
   </td>
   <td>The email address of the user.
   </td>
   <td>String
   </td>
   <td>Optional
   </td>
   <td>N/A
   </td>
  </tr>
  <tr>
   <td><code>userLevelTags</code>
   </td>
   <td>Array of user level meta tags to be added to the current user.
   </td>
   <td>Array of Objects
   </td>
   <td>Optional
   </td>
   <td>Every tag to be added using “name” and “value” keys.
   </td>
  </tr>
  <tr>
   <td><code>sessionLevelTags</code>
   </td>
   <td>Array of session level meta tags to be added to the current conversion session.
   </td>
   <td>Array of Objects
   </td>
   <td>Optional
   </td>
   <td>Every tag to be added using “name” and “value” keys.
   </td>
  </tr>
  <tr>
   <td><code>messageLevelTags</code>
   </td>
   <td>Array of message level tags to be added to the current message.
   </td>
   <td>Array of Objects
   </td>
   <td>Optional
   </td>
   <td>Every tag to be added using “name” and “value’ keys.
   </td>
  </tr>
  <tr>
   <td><code>mergeIdentity</code>
   </td>
   <td>To merge the current conversation with any other conversation in progress.
   </td>
   <td>String
   </td>
   <td>Optional
   </td>
   <td>
<ul>

<li>true

<li>false
&lt;/ul
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><code>preferredChannelForResponse</code>
   </td>
   <td>To request the platform to provide a response for a different channel. By default, the platform provides the Webhook channel (instance) related responses.
   </td>
   <td>String
   </td>
   <td>Optional
   </td>
   <td>Any valid channel name.
   </td>
  </tr>
  <tr>
   <td><code>customData</code>
   </td>
   <td>To send additional custom data from the Webhook channel by including it in the request payload.
   </td>
   <td>Object
   </td>
   <td>Optional
   </td>
   <td>N/A
   </td>
  </tr>
</table>



### Sample Request Payload Reference

Below is the Webhook v1 payload format to send messages to the Kore.ai XO Platform:


```
curl -X POST 'https://bots.kore.ai/chatbot/hooks/st-xxxxxxxx-1dbc-xxx-aa8f-1fxxx6626ea' \
--header 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInxxxxxxxxxxxxxxxxxxxxxxxxQ3LTcwYTlmOTg3Yjg0NCJ9._pztYVnP2UfJNu4-xxxxT19tsM-hkU3gU7a6lU' \
--header 'Content-Type: application/json' \
--data '{
    "session": {
        "new": false
    },
    "message": {
        "text": "asdf",
        "attachments": [
            {
                "fileId": "6511643xxxxxxx19b79",
                "fileType": "txt",
                "fileName": "IVR Doc"
            }
        ]
    },
    "from": {
        "id": "xxxx12xxx6",
        "userInfo": {
            "firstName": "",
            "lastName": "",
            "email": ""
        }
    }
}'
```


You can send additional data from the Webhook channel by including it in the request payload using the _customData_ object. The _customData_ along with the full payload will be available as part of the _context.session.BotUserSession.lastMessage_ object.


### Response

The response contains the following fields:



* _to_– refers to the user to whom the message is delivered to.
* _from _– identity (Stream Id) of the app from which the response is generated.
* _text _– contains the response(s) from the app. Can be a string, object or an array of strings or objects.
* _endOfTask _– indicating whether the task was completed or not, values _true_ or _false_.
* _endReason_– the reason for the task completion – _fulfilled_, _interrupted_, or _canceled_
* _completedTaskId_– the id of the dialog task triggered.
* _completedTaskName _– the name of the dialog task triggered.

If the app response is a template, then the JSON object required for rendering the template is included in the ‘text’ field as an object or array of objects.


```
"customData": {"name":"John","age":30,"cars":
                             {"car1":"Ford","car2":"BMW","car3":"Fiat"}},
```



### Sample Response for Synchronous Mode


```
{
  "text": [
            "You have $45,000 in your Salary account.",
            "Let me know if you need any other assistance"
           ],
  "endOfTask": true,
  "endReason": "Fulfilled",
  "completedTaskId": "dg-eb0cc36e-06ac-5bff-8234-e4adf50xxxx",
  "completedTaskName": "show balance"
}
```
!!! note

    The ‘text’ field can contain a string, object or an array of strings or objects.


### Sample Response for Asynchronous Mode


```
{
"to": "john.doe@example.com",
"from": "st-b3a3dc49-bd57-5c5d-b12c-8e377619xxxx",
"text": "Your available account balance is $31,439.",
}
```


For Asynchronous integration mode, the platform sends an acknowledgement response to the incoming request with Status Code as 200. The app response to be delivered to the user is sent to the _Post_URL_ configured for the channel.



* The _text_ field can contain a string, object or an array of strings or objects.
* Separate messages are sent for every app response to be delivered to the user.
* The conversation flow related fields like “_endOfTask_“, “_endReason_“, “_completedTaskId_” and “_completedTaskName_“: “show balance” are delivered as a separate message.


## Webhook V2.0

The Webhook V2 API provides a more standardized and modular payload format and additional conversation management capabilities.


## Interaction Flow


<table>
  <tr>
   <td><strong>SCENARIO</strong>
   </td>
   <td><strong>SYNCHRONOUS MODE</strong>
   </td>
   <td><strong>ASYNCHRONOUS MODE</strong>
   </td>
  </tr>
  <tr>
   <td>Single Response
   </td>
   <td>AI Agent response is sent as a response to the incoming request.
   </td>
   <td>AI Agent response is sent to the <em>Post_URL</em> configured as part of the channel configurations.
   </td>
  </tr>
  <tr>
   <td>Multiple consecutive response nodes
   </td>
   <td>AI Agent responses are sent as an array to the incoming request.
   </td>
   <td>Each of the app response is sent to the <em>Post_URL</em> configured as part of the channel configurations
   </td>
  </tr>
  <tr>
   <td>Multiple response nodes with service / webhook nodes in between
   </td>
   <td>
<ul>

<li>The consecutive messages are delivered to the request along with a ‘pollid’.

<li>The platform initiates the execution of service / webhook nodes.

<li>The client should poll the platform using the ‘pollid’ at short intervals.

<li>The platform responds to the poll request with the status of the execution. If the execution is complete, then the response will include the next set of consecutive messages.
</li>
</ul>
   </td>
   <td>Each of the AI Agent response is sent to the Post_URL after processing the relevant service / webhook nodes.
   </td>
  </tr>
</table>



### Authorization


#### User Identity

The Webhook V2.0 allows you to authenticate the API call with JWT token user identity. If the user identity (‘from’ field) exists in both the request the payload and JWT token, then the Webhook v2 validates the user identity. Use the following payload for authentication with user identity:


#### JWT Payload


```
{
  "appId": "{{clientId of the bot}}",
  "sub" : "{{random number}}"
  "userIdentity": "{{unique user identity}}",
  "iat" : 161639822
  }

```



* If the _userIdentity_ is not present in JWT, you can validate the _userIdentity_ authentication using the appId and the _from_ value will be used to generate the userId in the Kore platform..
* If the _userIdentity_ is present in JWT as well as _from_ but both are NOT same, then authentication will be failed and throws an error saying that Invalid access token.
* The _userIdentity_ is present in JWT, and _from_ is present in the webhook payload, and both _userIdentity_ and _from_ are the same, then it will check against the authentication against the appId and proceed further.


### Request Parameters

The following are the parameters required/supported in the v2.0 of the Webhook channel.


<table>
  <tr>
   <td><strong>PARAMETER NAME</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>DATA TYPE</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
   <td><strong>POSSIBLE VALUES</strong>
   </td>
  </tr>
  <tr>
   <td><code>session</code>
   </td>
   <td>Details of how the conversation session should be handled.
   </td>
   <td>Objects.
   </td>
   <td>Optional
   </td>
   <td>N/A
   </td>
  </tr>
  <tr>
   <td><code>new</code>
   </td>
   <td>Parameter to define whether to start a new conversion or continue with the existing.
   </td>
   <td>Boolean
   </td>
   <td>Optional
   </td>
   <td>
<ul>

<li>true

<li>false
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><code>message</code>
   </td>
   <td>Includes the contents of the incoming request to the app.
   </td>
   <td>Object
   </td>
   <td>Required
   </td>
   <td>N/A
   </td>
  </tr>
  <tr>
   <td><code>type</code>
   </td>
   <td>The type of incoming message to the platform.
   </td>
   <td>String
   </td>
   <td>Required
   </td>
   <td>
<ul>

<li>text

<li>template

<li>event

<li>formData
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><code>val</code>
   </td>
   <td>The value for the incoming message type.
   </td>
   <td>String or Object
   </td>
   <td>Required
   </td>
   <td>
<ul>

<li>If the type = “<em>text</em>” then the <em>val </em>will be String.

<li>If the type = “<em>template</em>” or “<em>formData</em>” then the <em>val</em> will be Object.

<li>If the type = “<em>event</em>” then the <em>val</em> must be “<em>ON_CONNECT</em>”.

<li>if type=”event” then the val must be <em>SESSION_CLOSURE</em> to close an active session.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><code>attachments</code>
   </td>
   <td>The list of attachments to be passed to the AI Agent.
<p>
<strong>Note</strong>: If attachment is used, set <strong>type </strong>as <em>text </em>and the <strong>val </strong>parameter cannot be blank and it has to contain some user utterance.
   </td>
   <td>Array of Objects
   </td>
   <td>Optional
   </td>
   <td><code>{"url":"https://- - "},</code>
<p>
<code>{ "fileName": "Kore_ai_Logo.png", "fileType":"image", "fileId": "6163e17bf60e0xxxxxxxx" }</code>
   </td>
  </tr>
  <tr>
   <td><code>from</code>
   </td>
   <td>Details of the request origin. It usually includes user information.
   </td>
   <td>Object
   </td>
   <td>Required
   </td>
   <td>N/A
   </td>
  </tr>
  <tr>
   <td><code>id</code>
   </td>
   <td>The unique identity of the user interacting with the AI Agent.
   </td>
   <td>String
   </td>
   <td>Required
   </td>
   <td>Usually a random string, alphanumeric number, email id etc.,
   </td>
  </tr>
  <tr>
   <td><code>InteractiveLanguage</code>
   </td>
   <td>The interaction language of the AI Agent.
   </td>
   <td>String
   </td>
   <td>Optional
   </td>
   <td>Any language that is configured for the AI Agent.
<p>
For the list of Supported App Languages, read [Getting Started with Multilingual AI Agent](../app-settings/language-management/building-multi-language-bots.md)</a> article.
   </td>
  </tr>
  <tr>
   <td><code>userInfo</code>
   </td>
   <td>The user profile information.
   </td>
   <td>Object
   </td>
   <td>Optional
   </td>
   <td>N/A
   </td>
  </tr>
  <tr>
   <td><code>firstName</code>
   </td>
   <td>The first name of the user.
   </td>
   <td>String
   </td>
   <td>Optional
   </td>
   <td>N/A
   </td>
  </tr>
  <tr>
   <td><code>lastName</code>
   </td>
   <td>The last name of the user.
   </td>
   <td>String
   </td>
   <td>Optional
   </td>
   <td>N/A
   </td>
  </tr>
  <tr>
   <td><code>email</code>
   </td>
   <td>The email address of the user.
   </td>
   <td>String
   </td>
   <td>Optional
   </td>
   <td>N/A
   </td>
  </tr>
  <tr>
   <td><code>metaTags</code>
   </td>
   <td>Refers to the meta tags to be added.
   </td>
   <td>String
   </td>
   <td>Optional
   </td>
   <td>N/A
   </td>
  </tr>
  <tr>
   <td><code>userLevelTags</code>
   </td>
   <td>Array of user level meta tags to be added to the current user.
   </td>
   <td>Array of Objects
   </td>
   <td>Optional
   </td>
   <td>Every tag to be added using “name” and “value’ keys.
   </td>
  </tr>
  <tr>
   <td><code>sessionLevelTags</code>
   </td>
   <td>Array of session level meta tags to be added to the current conversion session.
   </td>
   <td>Array of Objects
   </td>
   <td>Optional
   </td>
   <td>Every tag to be added using “name” and “value’ keys.
   </td>
  </tr>
  <tr>
   <td><code>messageLevelTags</code>
   </td>
   <td>Array of message level tags to be added to the current message.
   </td>
   <td>Array of Objects
   </td>
   <td>Optional
   </td>
   <td>Every tag to be added using “name” and “value’ keys.
   </td>
  </tr>
  <tr>
   <td><code>mergeIdentity</code>
   </td>
   <td>To merge the current conversation with any other conversation in progress.
   </td>
   <td>String
   </td>
   <td>Optional
   </td>
   <td>
<ul>

<li>true

<li>false
&lt;/ul
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><code>preferredChannelForResponse</code>
   </td>
   <td>To request the platform to provide a response for a different channel. By default, the platform provides the Webhook channel (instance) related responses.
   </td>
   <td>String
   </td>
   <td>Optional
   </td>
   <td>Any valid channel name.
   </td>
  </tr>
  <tr>
   <td><code>customData</code>
   </td>
   <td>To send additional custom data from the Webhook channel by including it in the request payload.
   </td>
   <td>Object
   </td>
   <td>Optional
   </td>
   <td>N/A
   </td>
  </tr>
</table>



### Sample Request

Below is the Webhook v2.0 payload format to send messages to the Platform:


```
curl -X POST 'https://bots.kore.ai/chatbot/v2/webhook/st-e4xxxxa3-1dbc-xxxx-aa8f-1f2xxx626ea' \
--header 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInxxxxxxxxxxxxxxxxxxxxxxxxQ3LTcwYTlmOTg3Yjg0NCJ9._pztYVnP2UfJNu4-Unwx5eM7qT19tsM-hkU3gU7a6lU' \
--header 'Content-Type: application/json' \
--data '{
    "session": {
        "new": false
    },
    "message": {
        "type": "text",
        "val": "asdg",
        "attachments": [
            {
                "fileId": "65116439cd838811d981xxxx",
                "fileType": "txt",
                "fileName": "IVR Doc"
            }
        ]
    },
    "from": {
        "id": "New1234",
        "userInfo": {
            "firstName": "",
            "lastName": "",
            "email": ""
        }
    },
    "metaTags": {
        "userLevelTags": [
            {
                "name": "",
                "value": ""
            }
        ],
        "sessionLevelTags": [
            {
                "name": "",
                "value": ""
            }
        ],
        "messageLevelTags": [
            {
                "name": "",
                "value": ""
            }
        ]
    },
    "mergeIdentity": true,
    "preferredChannelForResponse": "rtm",
    "customData": {
        "customText": "This is generated by customData"
    }
}'
```



### OnConnect Event Request

The Webhook V2.0 supports the OnConnect event as part of the first user message. You can pass the OnConnect as an event parameter. Here is an example on how to trigger the onConnect event:


```
curl -X POST 'https://bots.kore.ai/chatbot/v2/webhook/st-e4xxxa3-1dbc-xxxx-aa8f-1f225xxxx6ea' \
--header 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInxxxxxxxxxxxxxxxxxxxxxxxxQ3LTcwYTlmOTg3Yjg0NCJ9._pztYVnP2UfJNu4-Unwx5eM7qT19tsM-hkU3gU7a6lU' \
--header 'Content-Type: application/json' \
--data '{
    "session": {
        "new": true
    },
    "message": {
        "type": "event",
        "val": "ON_CONNECT"
    },
    "from": {
        "id": "Kore9",
        "userInfo": {
            "firstName": "",
            "lastName": "",
            "email": ""
        }
    }
}'
```



### Response

The response contains the following fields:



* _to_ – refers to the user to whom the message is delivered to.
* _from_ – identity (Stream Id) of the app from which the response is generated.
* _text_ – contains the response(s) from the app. Can be a string, object or an array of strings or objects.
* _endReason_ – the reason for the task completion – _fulfilled_, _interrupted_, or _canceled_
* _completedTaskId_ – the _id _of the dialog task triggered.
* _completedTaskName_ – the name of the dialog task triggered.
* _endOfTask_ – indicates whether the task is completed or not in the asynchronous mode. It gets added to the response after executing a dialog or fallback task. Possible values are _true_ or _false_.
* _endOfMessage_ – indicates the last message of a session and is added in the asynchronous mode. It is added whenever a Smalltalk, Standard Response, or SessionClosure Event message is triggered, or after the execution of the entity node in the flow.
* _partialMessage_ – indicates that the message node is executed within the flow in the asynchronous mode.
* _createdOn_ - indicates the response is from a regular dialog node in a synchronous mode.



### Change Conversation Language Request

To change the language of an ongoing conversation, you can pass the `interactiveLanguage` as a parameter with a value (language code) of one of the configured app languages.

To change the conversation language from English (en) to French (fr), pass the value as “fr” in the `interactiveLanguage` parameter:

**Sample Request**


```
curl -X POST 'https://bots.kore.ai/chatbot/v2/webhook/st-a77a38cd-xxxx-xxxx-81c6-227xxxx8d48' \
--header 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInxxxxxxxxxxxxxxxxxxxxxxxxQ3LTcwYTlmOTg3Yjg0NCJ9._pztYVnP2UfJNu4-Unwx5eM7qT19tsM-hkU3gU7a6lU' \
--header 'Content-Type: application/json' \
--data '{
    "session": {
        "new": false
    },
    "message": {
        "type": "text",
        "val": "hola"
    },
    "from": {
        "id": "Kore987"
    },
    "to": {
        "id": "st-9ed05a51-3c93-xxxx-xxx-c41xxxx3b0e1"
    },
    "interactiveLanguage": "fr"
}'
```


For the list of Supported App Languages codes, read [Getting Started with Multilingual AI Agent](../app-settings/language-management/building-multi-language-bots.md#supported-ai-agent-languages) article.


### Close Conversation Session Event Request

The Webhook V2.0 supports the closeConversationSession event as part of the user message. You can pass the `Session_Closure` as an event parameter.

Here is a sample request to trigger the `Session_Closure` event:

**Sample Request**


```
curl -X POST 'https://bots.kore.ai/chatbot/v2/webhook/st-xxx5a51-xxxx-56bb-af81-c41ff9b3b0e1' \
--header 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInxxxxxxxxxxxxxxxxxxxxxxxxQ3LTcwYTlmOTg3Yjg0NCJ9._pztYVnP2UfJNu4-Unwx5eM7qT19tsM-hkU3gU7a6lU' \
--header 'Content-Type: application/json' \
--data '{
    "session": {
        "new": false
    },
    "message": {
        "type": "event",
        "val": "SESSION_CLOSURE"
    },
    "from": {
        "id": "xxx1234xxx"
    },
    "to": {
        "id": "st-9ed05a51-3c93-xxxx-xxx-c41xxxx3b0e1"
    }
}'
```



### Sample Responses

The following are the possible response scenarios.


#### Sample Response for Synchronous Mode

**Scenario 1**: Response without need for polling

The platform delivers the message or messages to the client and waits for the user input to continue any ongoing flow or initiate a new flow.


```
Response:
{
 "to": "john.doe@example.com",
 "from": "st-b3a3dc49-bd57-5c5d-b12c-xxxxxxxxxx",
 "data": [
        {
            "type": "text",
            "val": "The balance in your Salary Account ending with 3984 is $54,883",
            "createdOn": "2022-05-11T06:27:06.764Z",
            "messageId": "ms-16535527-0f27-5116-bee3-xxxxxxxx"
        },
        {
            "type": "text",
            "val": "The balance in your Checking Account ending with 9964 is $21,657",
            "createdOn": "2022-05-11T06:27:07.032Z",
            "messageId": "ms-e3e92480-3d23-50a7-a2e5-xxxxxxxxxxx"
        }
    ],
    "_v": "v2",
    "endOfTask": false,
    "endReason": "Fulfilled",
    "completedTaskId": "dg-79950d7e-cdc6-5ff4-a4be-xxxxxxxxx",
    "completedTaskName": "Show Balance"
}
```


**Scenario 2**: Responses with need for polling

If there is a Service node or a Webhook node between messages, either alone or in combination with Script nodes, the platform includes a ‘pollid’ in the response. The client should implement a polling framework to process the flow using the ‘pollid’ provided by the platform.



* The platform delivers the first message or set of consecutive messages along with a ‘_pollid_’ to the incoming request.
* The client should make a poll request to the platform using the ‘_pollid_’ provided by the platform in the response to the original request.
* The response to the poll request can result in one of the following:
    * The ‘_status_’ is returned as ‘_Inprogress_’ if the execution of service / webhook nodes is still in progress.
    * The response will include the message payload if the execution of service / webhook is completed.
    * The response will give an error message if the message for a ‘_pollid_’ is already delivered to the client.

**Sample request with messages and ‘pollid’**


```
curl -X GET 'https://bots.kore.ai/chatbot/v2/webhook/st-8e031d0a-xxxx-xxx-bf4c-b8axxxf0685/poll/7c1a981xxxxxxxxd9dbcb9345af39b2d' \
--header 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInxxxxxxxxxxxxxxxxxxxxxxxxQ3LTcwYTlmOTg3Yjg0NCJ9._pztYVnP2UfJNu4-Unwx5eM7qT19tsM-hkU3gU7a6lU'
```


**Sample response with messages and ‘pollid’**

The platform delivers the first message or set of consecutive messages along with a ‘pollid’ to the incoming request. The platform initiates the execution of Service / Webhook nodes.


```
{
    "data": [
        {
            "type": "text",
            "val": "Sample message for Message0013",
            "createdOn": "2022-05-11T06:48:50.801Z",
            "messageId": "ms-3a3538a7-91b8-5c09-af72-xxxxxxxx"
        }
    ],
    "_v": "v2",
    "pollId": "a69b1077c3541e76253be58aa340950b"
}
```


**Response to poll request when the execution is in progress**


```
URL:	   /chatbot/v2/webhook/:streamId/pollId
Method: GET
{
   "status": "Inprogress",
   "pollId": "a89627d5b85ba70257871bxxxxxxxxxe",
   "_v": "v2"
}
```


**Response to poll request when the execution is complete**

If the processing of service / webhook is completed, then the platform responds to the poll request with the message payload.



* The response format will be the same the regular response.
* If the flow execution includes execution of service / webhook nodes, then the response will include a new ‘pollid’ to be used for subsequent execution.

**Response to expired poll request**

The messages for a ‘pollid’ are provided by the platform only once. The platform responds with an error message if the client makes a poll request for a ‘pollid’ for which the platform has already delivered the messages.


```
{
   "errors": [
       {
           "msg": "No data found",
           "code": 400
       }
   ]
}
```


**Response when polling is disabled**

When you deselect the **Enable the Polling in Webhook V2** option in the **Configurations** tab, the platform retrieves the complete response, all at once, without the need for polling. [Learn more](#step-1-associate-an-app).

Sample Response:


```
{
"data": [
{
"type": "text",
"val": ""The City Name is Kondapur""The State Name is Telangana"",
"createdOn": "2022-09-29T07:17:52.451Z",
"messageId": "ms-e941520d-a512-5dac-98e3-xxxxxxxxx"
},
{
"type": "text",
"val": "End of Conversation Event",
"createdOn": "2022-09-29T07:17:52.741Z",
"messageId": "ms-e9473e2b-a8f8-5628-9146-xxxxxxxxx"
}
],
"_v": "v2",
"endOfTask": true,
"endReason": "Fulfilled",
"completedTaskId": "dg-2e50c369-ae83-50cb-9abf-xxxxxxxx",
"completedTaskName": "get state name"
}
```


**Response as a Request to Post URL**

Then use the _pollId_ from the Response to get the response of the second Message node.

Here is the sample curl to use pollId to fetch the response:


```
   "data": [
        {
            "type": "text",
            "val": "Current weather haze",
            "createdOn": "2022-05-11T06:48:51.545Z",
            "messageId": "ms-0421201b-6c7e-59a6-9246-xxxxxxxxx"
        },
        {
            "type": "text",
            "val": "Let me know if you need any other assistance",
            "createdOn": "2022-05-11T06:48:52.138Z",
            "messageId": "ms-c533f0d8-4495-58f8-9839-xxxxxxxxxx"
        }
    ],
    "_v": "v2",
    "endOfTask": true,
    "endReason": "Fulfilled",
    "completedTaskId": "dg-xxxxx-xxxx-xxxx-xxxx-xxxxxxx",
    "completedTaskName": "current weather"
}'
```



### Change Conversation Language Response

Here is the sample response for the change conversation language:


```
{
    "data": [
        {
            "type": "text",
            "val": ""Voici les tâches que je peux effectuer pour vous.\n a) ADialog \n b) BDialog \n c) Get user data \n
            d) Raise Complain \n e) Search song \n",
            "createdOn": "2022-07-28T07:06:55.843Z",
             "messageId": "ms-d4ca9e2e-6d2d-xxxx-xxxx-xxxxxxxxx"

        },
        {
            "type": "text",
            "val": "Salut, comment puis-je vous aider?",
            "createdOn": "2022-07-28T07:06:55.843Z",
            "messageId": "ms-d4ca9e2e-6d2d-xxxx-xxxx-xxxxxxxxx"
        }
    ],
    "_v": "v2",
    "endOfTask": true,
    "endReason": "Fulfilled",
    "completedTaskId": "dg-xxxxx-xxxx-xxxx-xxxx-xxxxxxx",
    "completedTaskName": "welcome_task"
}
```



### Close Conversation Session Event Responses

Here are sample responses for the `SESSION_CLOSURE`:

**Response 1: When an active session exists**


```
{
    "data": [
        {
            "type": "event",
            "val": "SESSION_CLOSURE",
            "eventType": "SESSION_CLOSURE_SUCCESS",
             "description": "session closed successfully",
        }
      ],
   "_v": "v2"
}
```


**Response 1: When an active session does not exist**


```
{
    "data": [
        {
            "type": "event",
            "val": "SESSION_CLOSURE",
            "eventType": "SESSION_CLOSURE_IGNORED",
             "description": "Active session doesn't exist"
         ],
        "_v": "v2"
}
```



### Sample Response for Asynchronous Mode

The POST_URL is the customer’s own asynchronous URL to send and receive requests. Kore.ai does not provide any POST_URL for Asynchronous setup because this URL is different from customer to customer.

The following response is an example for a successful asynchronous call:


#### Request Acknowledgement


```
{
  "status": "ok"
  "_v": "v2",
  "traceId":"RTM-TRACE-9JOHE3ALB"
}
```



#### Response as a Request to Post URL


```
{
   "data": [
       {
           "type": "text",
           "val": "Please provide your account number",
           "createdOn": "2021-10-11T13:44:34.675Z"
       }
   ],
   "_v": "v2",
}
```


For Asynchronous integration mode, the platform sends an acknowledgement response to the incoming request with Status Code as 200. The app response to be delivered to the user is sent to the Post_URL configured for the channel.



* The ‘text’ field can contain a string, object or an array of strings or objects.
* Separate messages are sent for every app response to be delivered to the user.
* The conversation flow related fields like “_endOfTask_“, “_endReason_“, “_completedTaskId_” and “_completedTaskName_“: “show balance” are delivered as a separate message.


## Support for Attachments

The Webhook API can be used to send attachments from the end users to the app. Files can be sent in multiple ways.


### Option 1: Upload Files from Web URLs


#### Type 1 : Upload File with URL

You can upload files hosted on external services by providing the Web URL of the file location. Make sure that the URL is accessible by the platform.


```
curl -X POST
'https://bots.kore.ai/chatbot/v2/webhook/st-4xxx3f-xxx-5657-xxx-a8cxxxxa086/hookInstance/ivrInst-c867xx54-e4b6-xxx-9471-dxxxx37305c' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NixxxxxxxkpXVCJ9.eyJhxxxxxx5ODk0NWYxLTRjMmUtNTc5NC1iMGJkLWUxZjUwYzY3ODVkZiJ9.RQQAw-jKwbKWxwwP1xxxxxxrzuGF9oOqz77aRw' \
--header 'Cookie: filetoken=cc7c5f79-xxxx-xxx-8c6b-a9xxxx26113' \
--data-raw '{
    "message": {
        "type": "text",
        "val": "Some description of the image",
        "attachments": [
            {
                "url": "https://user-images.gxxxrcontent.com/4432322/14xxx568-dbxxx6c9-xxxx-xxx-b104-a6xxx24890.png"
            }
        ]
    },
    "from": {
        "id": "10xxx0601",
        "userInfo": {
            "firstName": "first name",
            "lastName": "last name",
            "email": "example@abc.com",
            "user_data": {}
        }
    }
}'
```


For parameter descriptions, refer to the [request parameters](#request-parameters) table.


#### Type 2:  Using fileId obtained from [file upload API](../apis/automation/upload-file.md)

You can upload a file using the **fileId** obtained from file upload API. The following example uses a webhook instance when multiple webhook channels are configured:


```
curl -X POST
'https://bots.kore.ai/chatbot/v2/webhook/st-4b8ee63f-0bad-xxxx-xxx-a8c4xxxxx086/xxxInstance/ivrInst-c86xxxx54-xxxx-xxxx-9471-dfxxxx37305c' \
--header 'Authorization: Bearer {{YOUR_JWT_ACCESS_TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "message": {
        "type": "text",
        "val": "User utterance",
        "attachments": [
            {
                "fileName": "My image file",
                "fileType": "image",
                "fileId": "650c3XXXXXXbXXc31"
            }
        ]
    },
    "from": {
        "id": "103XXXXX601",
        "userInfo": {
        "userInfo": {
     		 "firstName": "<first-name(optional)>",
      	 "lastName": "<second-name(optional)>",
      	 "email": "<email@domain.com(optional)>"
             "user_data": {}
        }
    }
}'
```


For parameter descriptions, refer to the [request parameters](#request-parameters) table.


### Option 2: Upload Files to Kore.ai XO Platform

You can upload files directly to the Platform, capture the ‘file id’ provided by the platform, and share it with the app during the conversation. This option is supported only when the Webhook v2.0 is used.

Use the following API to upload your file to the platform. These APIs do not require any scopes and are accessible using any of the valid apps present in the app/account.


```
Request
URL: https://{{host}}/api/public/uploadfile
   Method: POST
   Body:
     {
        File:,
        fileContext :,
        fileExtension : ,
        Filename:
   }
Response
          Response: {
                        fileId:
                        hash:
  }
```


You can use the following API to upload file in chunks

**Token API**


```
URL: /api/attachments/:streamId/:channelType/token
     Method: POST
     Headers: {
                 authorization:bearer jwttoken
          }
     Body:{
    }
```


**Chunk Upload API**


```
URL: /api/attachments/:streamId/:channelType/token/:token/chunk
Method: POST
Headers: {
          authorization:bearer jwttoken
       }
      Body:{
              chunk:"",
              chunkNo:2
     }
```


**Commit API**


```
URL: /api/attachments/:streamId/:channelType/token/:token/chunk
Method: PUT
Headers: {
            authorization:bearer jwttoken
        }
     Body:{
             fileContext:"",
             filename:"",
             totalChunks:"",
             fileExtension:""
       }
```

!!! note

    You can also use the filename or fileID to upload a file. For example, use this syntax to upload a file with name and ID: `{ "fileName": "Kore_ai_Logo%405x.png", "fileType":"image", "fileId": "6163e17bf60e0a7e4799f423" }`.


## Handle Digital Forms

If your app has a form that needs user input, the synchronous WebHook channel gets the complete form definition in the response, and you need to send the _formData_ in the request when interacting with the app.

#### Sample Request

You can get the Webhook API URL on the WebHook channel **Configurations** tab. Learn more.

!!! note

    This URL is available only after enabling the channel.

```
 "session": {
       "new": false
   },
   "message": {
       "val": {
           "formId": "{{formId}}",
           "data": [
               {
                   "componentId": "{{ComponentId}}",
                   "input": "{{user input1}}"
               },
               {
                   "componentId": "{{ComponentId}}",
                   "input": "{{user input2}"
               },
               {
                   "componentId": "{{ComponentId}}",
                   "input": "Submit"
               }
           ],
           "meta": {}
       },
       "type": "formData"
   },
   "from": {
       "id": "",
       "userInfo": {
           "firstName": "",
           "lastName": "",
           "email": ""
       }
   },
   "to": {
       "id": "",
       "groupInfo": {
           "id": "",
           "name": ""
       }
   },
Others if any
}
```


#### Sample Response


```
{
    "text": [],
    "form": {
        "formDef": { Formdef },
        "formInitialization": { FormInitialization } //if any
    }
    ..other params if any
}
```


**FormDef** 

(This is the complete Form definition which is used to render the Form)


```
{
  "_id": "",
  "refId": "",
  "streamId": "st-####a#d-##fd-#b##-acab-b#f#f######",
  "branding": {
     "properties": []
    },
  "components": [
    {
     "_id": "fct-#f#e###d-d#b#-###a-#a##-######f###b",
     "refId": "#####f##-###c-###b-##a#-da########1d",
     "metaData": {
         "type": "textField",
         "key": "textField",
         "displayName": "Text Field",
         "name": "TextField0",
         "placeholder": "Provide your input",
         "toolTip": "",
         "isVisible": true,
         "required": false,
         "validations": {
            "validationType": "simple"
            },
         "validateOn": "onBlur"
      },
     "name": "TextField0",
     "type": "textField"
  },
  {
    "_id": "fct-#f#e###d-d#b#-###a-#a##-######f###b",
    "refId": "#####f##-###c-###b-##a#-da########1d",
    "metaData": {
       "type": "textField",
       "key": "textField",
       "displayName": "Text Field",
       "name": "TextField1",
       "placeholder": "Provide your input",
       "toolTip": "",
       "isVisible": true,
       "required": false,
       "validations": {
          "validationType": "simple"
         },
       "validateOn": "onBlur"
      },
      "name": "TextField1",
      "type": "textField"
    },
   {
     "_id": "fct-#f#e###d-d#b#-###a-#a##-######f###b",
     "refId": "#####f##-###c-###b-##a#-da########1d",
     "metaData": {
        "key": "button",
        "type": "button",
        "displayName": "Submit",
        "name": "Submit",
        "buttonAction": "submit",
        "isVisible": true,
        "buttonStyle": "primary",
        "sourceUrl": ""
       },
     "name": "Submit",
     "type": "button"
     }
    ],
   "description": "regular",
   "displayName": "Form 1",
   "name": "firstForm",
   "type": "regular",
   (... few other fields)
}
```


**FormInitialization**

(This must be used for pre-filling Forms)


```
{
       "valueMap": {
       "TextField0": "input1",
       "TextField1": "input2"
      }
}
```







## Error Scenarios in Webhook v2 Responses

The following is the failure response for 401 Error:


```
{
  "errors": [
    {
      "msg": "Invalid Access token",
      "code": 401
    }
  ],
  "_v": "v2", //versionId
  "_t": "RTM-TRACE-9JOHE3ALB" //traceId
}
```


The following is the failure response for 429 Error (Rate Limit)


```
{
  "errors": [
    {
      "msg": "Too Many requests",
      "code": 429
    }
  ],
  "_v": "v2", //versionId
  "_t": "RTM-TRACE-9JOHE3ALB" //traceId
}
```


The following is the failure response for 504 Error:


```
{
  "errors": [
    {
      "msg": "The request has been timed-out",
      "code": 504
    }
  ],
  "_v": "v2", //versionId
  "_t": "RTM-TRACE-9JOHE3ALB" //traceId
}
```


The following is the failure response for 400 Error:


```
{
  "errors": [
    {
      "msg": "Invalid Request Payload",
      "code": 400
    }
  ],
  "_v": "v2", //versionId
  "_t": "RTM-TRACE-9JOHE3ALB" //traceId
},
```
