--8<-- "includes/automationai-api-back-link.md"

# Proactive Notifications API v2

The Proactive Notifications API V2 enables sending various types of messages to users via `IVR`, `Hangout`, `Webhook` and `Whatsapp` channels. 

Proactive notification includes:

* Nudge the employees to reset their passwords before it expires in a certain days
* Remind users to submit expense reports.
* Inform customers about their order status.
* Other reminders that are defined.

!!!Note 

    Webhook Proactive Notifications only support Asynchronous V2.


<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td><code>https://{{host}}/api/public/bot/{{streamId}}/notifyV2</code>
   </td>
  </tr>
  <tr>
   <td><strong>Content Type</strong>
   </td>
   <td><code>application/json</code>
   </td>
  </tr>
  <tr>
   <td><strong>Authorization</strong>
   </td>
   <td><code>auth: {{JWT}}</code>
<p>
</a>
   </td>
  </tr>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td>
<ul>

<li>App Builder: Proactive Messages</li>

<li>Admin Console: Channel Management > Proactive Messages</li>
</ul>
   </td>
  </tr>
</table>

Refer [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token).

## Path Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>MANDATE</strong>
   </td>
  </tr>
  <tr>
   <td><strong>host</strong>
   </td>
   <td>The environment URL. For example, <code>https://platform.kore.ai</code>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>BotId</strong>
   </td>
   <td><em>Bot ID</em> or <em>Stream ID</em> can be accessed under <strong>General Settings</strong> on the App Builder.
<p>
<strong>Note</strong>: This is required only for App Builder API scope of Proactive Messages.
   </td>
   <td>Required
   </td>
  </tr>
</table>



## Sample Request

**Static Text Message**

Sends a non-personalized message to multiple users.


```
{
  "channel": "ivr",
  "webhookInstanceName": "Webhook",
  "userIdentityType": "resolve",
  "content": {
    "type": "text",
    "value": "Hello! Your order has been shipped. Track it using the provided details."
  },
  "identities": [
    { "email": "user1@example.com" },
    { "email": "user2@example.com" }
  ]
}
```


**Channel-Specific Adjustments:**

**hangoutchat**:


```
"identities": [
  { "spaceId": "AAQAPWixxxx" },
  { "spaceId": "o7ZNt8Axxxx" }
]
```

**Custom Message**

Sends a personalized message if `customMessage` is specified, else uses the main message.

```
{
  "channel": "ivr",
  "webhookInstanceName": "Webhook",
  "userIdentityType": "resolve",
  "content": {
    "type": "text",
    "value": "Hello! Your order has been shipped."
  },
  "identities": [
    { "email": "user@example.com", "customMessage": "Hi John, your package is on the way!" },
    { "email": "user@example.com" }
  ]
}
```


**Channel-Specific Adjustments:**

**hangoutchat**:


```
"identities": [
  { "spaceId": "AAQAPWixxxx", "customMessage": "Hi John, your package is on the way!" },
  { "spaceId": "o7ZNt8Axxxx" }
]
```


 **Parameterized Message**

Personalizes the message using dynamic parameters.


```
{
  "channel": "ivr",
  "webhookInstanceName": "Webhook",
  "userIdentityType": "resolve",
  "content": {
    "type": "text",
    "value": "Hello {name}! Your reference number is {refId}."
  },
  "identities": [
    { "email": "user@example.com", "parameters": { "name": "Charlie", "refId": "XYZ-789" } },
    { "email": "user@example.com", "parameters": { "name": "Diana", "refId": "UVW-012" } }
  ]
}
```


**Channel-Specific Adjustments:**

**hangoutchat**:

```
"identities": [
  { "spaceId": "AAQAPWixxxx", "parameters": { "name": "Charlie", "refId": "XYZ-789" } },
  { "spaceId": "o7ZNt8Axxxx" }
]
```

**Template-Based Message**

Uses templates with optional parameter substitution.

```
{
  "channel": "ivr",
  "webhookInstanceName": "Webhook",
  "userIdentityType": "resolve",
  "content": {
    "type": "template",
    "value": "Hello {name}, your order ID is {orderId}."
  },
  "identities": [
    { "email": "user@example.com", "parameters": { "name": "Alice", "orderId": "ABC-123" } },
    { "email": "user@example.com", "parameters": { "name": "Bob", "orderId": "DEF-456" } }
  ]
}
```

**Channel-Specific Adjustments:**

**hangoutchat**:

```
"identities": [
  { "spaceId": "AAQAPWixxxx", "parameters": { "name": "Charlie", "orderId": "XYZ-789" } },
  { "spaceId": "o7ZNt8AAxxxx" }
]
```
**whatsapp:**

```
{
    "channel": "whatsapp",
    "userIdentityType": "resolve",
    "message": {
        "type": "template",
        "value": {
            "type": "image",
            "image": {
                "link": "https://imagej.net/images/2D_Gel.jpg",
                "caption": "Random Image"
            }
        }
    },
    "identities": [
        {
            "phoneNumber": "91xxxxxxx4"
        }
    ]
}

```

## Body Parameters

<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Required / Optional</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><strong>channel</strong>
   </td>
   <td><code>string</code>
   </td>
   <td>Required
   </td>
   <td> Name of the channel for which notifications to be sent (e.g., <code>ivr</code>, <code>hangouts</code> and <code>whatsapp</code>)

   </td>
  </tr>
  <tr>
   <td><strong>webhookInstanceName</strong>
   </td>
   <td><code>string</code>
   </td>
   <td>Optional
   </td>
   <td>Name of the webhook instance, <strong>applicable only for <code>ivr</code> channel</strong>
   </td>
  </tr>
  <tr>
   <td><strong>userIdentityType</strong>
   </td>
   <td><code>string</code>
   </td>
   <td>Optional
   </td>
   <td>Identity resolution logic, e.g., <code>resolve</code>
   </td>
  </tr>
  <tr>
   <td><strong>message</strong>
   </td>
   <td><code>object</code>
   </td>
   <td>Required
   </td>
   <td>Message object containing message type and content
   </td>
  </tr>
  <tr>
   <td><strong>message.type</strong>
   </td>
   <td><code>string</code>
   </td>
   <td>Required
   </td>
   <td>Message format (e.g., <code>text</code>, <code>template</code>, <code>script</code>)
   </td>
  </tr>
  <tr>
   <td><strong>message.value</strong>
   </td>
   <td><code>string</code> or <code>json</code>
   </td>
   <td>Required
   </td>
   <td>Actual message content to send
   </td>
  </tr>
  <tr>
   <td><strong>identities</strong>
   </td>
   <td><code>array</code>
   </td>
   <td>Required
   </td>
   <td>List of recipient identity objects
   </td>
  </tr>
</table>

**Identities Array**

<table>
  <tr>
   <td><strong>identity field</strong>
   </td>
   <td><code>string</code>
   </td>
   <td>Required
   </td>
   <td>Identity key depending on the channel:- <code>ivr</code>: <code>email</code>, <code>hangouts</code>: <code>spaceId, and <code>whatsapp</code>: <code>phone number</code> 
</code><strong>Note:</strong> Other channels (e.g., <code>msteams</code>, <code>slack</code>) are not yet supported in public API v2.    
   </td>
  </tr>
  <tr>
   <td><strong>customMessage</strong>
   </td>
   <td><code>string</code>
   </td>
   <td>Optional
   </td>
   <td>Overrides the default message for this recipient. Supports placeholders like <code>{name}</code>, <code>{refId}</code>
   </td>
  </tr>
  <tr>
   <td><strong>parameters</strong>
   </td>
   <td><code>object</code>
   </td>
   <td>Optional
   </td>
   <td>A key-value map where each key corresponds to a placeholder in the <code>customMessage</code>.These values dynamically replace the placeholders when sending the message.If no <code>customMessage</code> is provided, this field is ignored for that identity.
   </td>
  </tr>
</table>

**Schema Constraints**

* `identities` array: 

    * Minimum items: 1 

    * Maximum items: 1000

* `parameters` object:

    * Maximum properties: 20

    * Each value must be a string ≤ 200 characters

* No additional properties are allowed at any level unless explicitly defined.

## Sample Response

```
{
   "_id": "ds-d0f6fed2-87ff-52b7-bf2b-a15216f0xxxx",
   "streamId": "st-736ff917-d836-55b4-9a6b-3dad20c0xxxx",
   "jobType": "PROACTIVE_NOTIFICATIONS_API",
   "action": "PROACTIVE_NOTIFICATIONS",
   "status": "IN_PROGRESS",
   "statusLogs": [],
   "percentageComplete": 0,
   "store": {
       "identitiesCount": 2
   },
   "createdBy": "u-ecff03e8-ba90-532e-ab7b-209082d9xxxx",
   "lMod": "2025-05-22T05:37:56.000Z",
   "countOfDockStatuses": 1,
   "createdOn": "2025-05-22T05:37:56.693Z",
   "requestedTime": "2025-05-22T05:37:56.693Z",
   "__v": 0
}
```