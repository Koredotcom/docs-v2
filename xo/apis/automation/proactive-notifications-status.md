--8<-- "includes/automationai-api-back-link.md"

# Proactive Notification Status API

To fetch the status of Proactive Notifications API.

<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td><code>https://{{host}}/api/public/bot/{{BotID}}/notify/status/{{requestId}}</code>
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
   <td><em>Bot ID</em> or <em>Stream ID</em> can be accessed under <strong>General Settings</strong>on the App Builder.
<p>
<strong>Note</strong>: This is required only for App Builder API scope of Proactive Messages.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>requestId</strong>
   </td>
   <td>The unique ‘Request ID’ returned by the Proactive Notifications API to track the progress.
   </td>
   <td>Required
   </td>
  </tr>
</table>

## Sample Request

```json
curl --location 'https://{{host}}/api/public/bot/{{BotId}}/notify/status/{{requestId}}' \
--header 'auth: {{jwt-token}}' \
```

## Body Parameters

No body parameters are passed.

## Sample Response


```json
{
    "_id": "ds-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "status": "PARTIAL_SUCCESS", // can be "SUCCESS" / "FAILURE" / "PARTIAL_SUCCESS"
    "percentageComplete": 100,
    "streamId": "st-xxxxx-xxx-xxx-xxx-xxxxx",
    "createdBy": "u-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "jobType": "PROACTIVE_NOTIFICATIONS_API",
    "action": "PROACTIVE_NOTIFICATIONS",
    "statusLogs": [
        {
            "_id": "nl-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "requestId": "ds-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "originalId": "john@abc.com",
            "status": "FAILURE",
            "createdBy": "u-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "comments": "'Identity is not associated with the channel'",
            "streamId": "st-xxxxx-xxx-xxx-xxx-xxxxx",
            "channel": "msteams",
            "createdOn": "2022-01-24T20:55:21.918Z",
            "__v": 0
        },
        {
            "_id": "nl-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "requestId": "ds-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "createdBy": "u-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "channel": "msteams",
            "comments": "Notification has been sent successfully",
            "streamId": "st-xxxxx-xxx-xxx-xxx-xxxxx",
            "koreId": "u-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "channelId": "29:1964-sxxxxxxxxxxxx-1MxxxxxxxxxxxxxxLqSODuQ",
            "messagestoreId": "ms-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx",
            "originalId": "john@abc.com",
            "status": "SUCCESS",
            "createdOn": "2022-01-24T20:55:23.029Z",
            "__v": 0
        }
    ],
    "lMod": "2022-01-24T20:55:23.000Z",
    "createdOn": "2022-01-24T20:55:21.254Z",
    "requestedTime": "2022-01-24T20:55:21.254Z",
    "__v": 0,
    "count": 2
}
```
