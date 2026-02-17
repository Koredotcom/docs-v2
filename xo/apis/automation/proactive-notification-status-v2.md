--8<-- "includes/automationai-api-back-link.md"

# Proactive Notification Status API V2

To fetch the status of a proactive notification triggered via the async webhook channel. 


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
   <td><code>{{host}}/api/public/bot/{{streamId}}/notifyV2/status/{{dockstatusId}}</code>
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
   <td><code>auth: {{JWT}}</code> </a>
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

Refer [How to generate the JWT Token](../../apis/automation/api-introduction.md#generating-the-jwt-token).

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
   <td><em>Bot ID</em> or <em>Stream ID</em> can be accessed under <strong>General Settings </strong>on the App Builder.
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

```
curl --location 'https://{{host}}/api/public/bot/{{StreamId}}/notifyV2/status/{{dockstatusId}}' 
--header 'auth: {{jwt-token}}' 
```

## Body Parameters

No body parameters are passed.

## Sample Response

```
{
   "statusLogs": [
       {
           "_id": "nl-64c2a45e-1700-58f5-a474-add8bfc86f13",
           "streamId": "st-736ff917-d836-55b4-9a6b-3dad20c09af3",
           "messagestoreId": "ms-71acc889-b3ad-59be-9c51-865a76f24972",
           "comments": "Notification has been sent successfully",
           "koreId": "u-a1414a00-5089-5009-9365-dd3a6a09f107",
           "channelId": "john.doe@example.com",
           "channel": "ivr",
           "originalId": "john.doe@example.com",
           "requestId": "ds-adddc869-d773-5785-9c6a-cfe1cbd9df1b",
           "status": "SUCCESS",
           "createdBy": "u-ecff03e8-ba90-532e-ab7b-209082d91936",
           "createdOn": "2025-05-26T05:53:22.883Z",
           "__v": 0
       },
       {
           "_id": "nl-6f6a927d-a61b-50df-8089-25937ff610f8",
           "streamId": "st-736ff917-d836-55b4-9a6b-3dad20c09af3",
           "messagestoreId": "ms-7967b15a-e716-5d62-851c-f5d92781efb2",
           "comments": "Notification has been sent successfully",
           "koreId": "u-8490f9d4-193c-576b-a746-5974688f42a7",
           "channelId": "john.doe@example.com",
           "channel": "ivr",
           "originalId": "john.doe@example.com",
           "requestId": "ds-adddc869-d773-5785-9c6a-cfe1cbd9df1b",
           "status": "SUCCESS",
           "createdBy": "u-ecff03e8-ba90-532e-ab7b-209082d91936",
           "createdOn": "2025-05-26T05:53:22.954Z",
           "__v": 0
       }
   ],
   "count": 2,
   "status": "SUCCESS",
   "streamId": "st-736ff917-d836-55b4-9a6b-3dad20c09af3"
}
```

