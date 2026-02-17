--8<-- "includes/automationai-api-back-link.md"

# Proactive Notifications API

Proactive Notifications allow enterprises to engage with their end users (customers or employees) by providing relevant and timely updates.

Proactive notification includes:

* Nudge the employees to reset their password before it expires in certain days
* Remind users to submit expense reports.
* Inform customers about their order status.
* Other reminders which are defined.

<table>
  <tr>
   <td>
<strong>Method</strong>
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td><code>https://{{host}}/api/public/bot/{{BotID}}/notify</code>
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
See <a href="../api-introduction/#generating-the-jwt-token">How to generate the JWT Token</a>.
   </td>
  </tr>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td>
<ul>

<li>App Builder: Proactive Messages

<li>Admin Console: Channel Management > Proactive Messages
</li>
</ul>
   </td>
  </tr>
</table>

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

```json
curl --location 'https://{{host}}/api/public/bot/{{BotId}}/notify' \
--header 'Content-Type: application/json' \
--header 'auth: {{jwt-token}}' \
--data-raw '{
"channel": "msteams",
"userIdentityType": "resolve",
"message": {
"type": "text",
"val": "Please reset your password."
},
"identities": [
"pxxxxxxn@example.com"
]
}'
```

## Body Parameters


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
   <td>channel
   </td>
   <td>Name of the channel for which notifications to be sent
<p>
Accepted channel types are:“<strong>msteams</strong>” and “<strong>slack</strong>“.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>userIdentityType
   </td>
   <td>Define whether to resolve the user identities provided in the API call to get the channel identities, or to directly use the user identities for delivering the messages
<p>
The values is <em>resolve</em>.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>message
   </td>
   <td>It is an object and accepts two fields
<ul>

<li><em>type</em> → Indicates the type of message. “text” for sending plain text and “script” for sending JavaScript templates as messages.

<li><em>val</em> → value of the message to be sent to user.

<strong>Example 1:Text</strong>:
<code>{
"type": "text",
"val": "Hi User"
}</code>

<strong>Example 2: Script</strong>:

<pre>{
   "type": "script",
   "val": "var envMsg = 'John'; var channel = context.session.BotUserSession.lastMessage.channel; print(JSON.stringify({text: 'Hi ' + envMsg + ' message is from ' + channel + ' channel'}));" 
}</pre>
</li>
</ul>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>identities
   </td>
   <td>It accepts the list of user identities for whom notifications need to be sent. A maximum of 1000 identities are supported.
   </td>
   <td>Required
   </td>
  </tr>
</table>

## Sample Response

```json
{
    "status": "IN_PROGRESS",
    "percentageComplete": 0,
    "streamId": "st-xxxxx-xxx-xxx-xxx-xxxxx",
    "createdBy": "u-xxxxx-xxx-xxx-xxx-xxxxx",
    "jobType": "PROACTIVE_NOTIFICATIONS_API",
    "action": "PROACTIVE_NOTIFICATIONS",
    "statusLogs": [],
    "_id": "ds-xxxxx-xxx-xxx-xxx-xxxxx",
    "lMod": "2022-01-25T06:56:48.000Z",
    "createdOn": "2022-01-25T06:56:48.891Z",
    "requestedTime": "2022-01-25T06:56:48.891Z",
    "__v": 0
}
```
