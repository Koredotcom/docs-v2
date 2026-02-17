--8<-- "includes/automationai-api-back-link.md"

# Get ChangeLogs API

To get the list of changes made to the bot definition for a given date period.


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
   <td><code>https://{{host}}/api/public/bot/{{BotID}}/changelogs</code>
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
See <a href="../api-introduction/#generating-the-jwt-token">How to generate the JWT Token.</a>
   </td>
  </tr>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td>
<ul>

<li>App Builder: Logs History

<li>Admin Console: Logs > Bot Audit Logs
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
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>host
   </td>
   <td>Required
   </td>
   <td>Environment URL, for example, https://platform.kore.ai
   </td>
  </tr>
  <tr>
   <td>BotID
   </td>
   <td>Required
   </td>
   <td>Bot ID or Stream ID. You can access it from the General Settings page of the bot.
   </td>
  </tr>
</table>



## Sample Request


```json
curl -X GET \
  https://{{host}}/api/public/bot/{{bot_id}}/changelogs \
  -H 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
  -H 'content-type: application/json' \
```



## Query Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>offset
   </td>
   <td>Optional
   </td>
   <td>The page number from which to start fetching the changeLog. If unspecified, it starts from 0, which is the first page of the Change Log.
   </td>
  </tr>
  <tr>
   <td>limit
   </td>
   <td>Optional
   </td>
   <td>The number of records to fetch. The maximum applicable limit is 50.
   </td>
  </tr>
  <tr>
   <td>startDate
   </td>
   <td>Optional
   </td>
   <td>The start date from which you want to see the changes. If unspecified, the date is automatically set to the bot creation date. Enter the date in ISO date format. For example, March 30, 1998 would be 1998-03-30.
   </td>
  </tr>
  <tr>
   <td>endDate
   </td>
   <td>Optional
   </td>
   <td>The end date up to which you want to see the changes. Enter the date in ISO date format. For example, March 30, 1998 would be 1998-03-30.
   </td>
  </tr>
</table>

## Sample Response


```json
[
    {
        "_id": "btl-039ca909-5dd2-59ce-a5b7-30c61a385ebf",
        "userId": {
            "id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "firstName": "demo",
            "lastName": "bots",
            "emailId": "demobots@qakore.xyz",
            "activationStatus": "active",
            "profColour": "#ff4500",
            "profImage": "no-avatar",
            "_id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "orgId": "o-daf5c054-e63b-561e-9a31-e53478aa154b"
        },
        "streamId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceType": "stream",
        "message": "Bot updated",
        "createdOn": "2019-06-27T05:25:37.148Z",
        "__v": 0
    },
    {
        "_id": "btl-0ff1cc72-c2c5-508d-b58c-a58257cd829f",
        "userId": {
            "id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "firstName": "demo",
            "lastName": "bots",
            "emailId": "demobots@qakore.xyz",
            "activationStatus": "active",
            "profColour": "#ff4500",
            "profImage": "no-avatar",
            "_id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "orgId": "o-daf5c054-e63b-561e-9a31-e53478aa154b"
        },
        "streamId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceId": "dg-14fd680d-3c42-5594-9d1b-c1b5504effa7",
        "resourceType": "dialog",
        "message": "Published task Book a ticket",
        "createdOn": "2019-06-27T05:29:17.748Z",
        "__v": 0
    },     
    {
        "_id": "btl-6a0d7027-e0d9-51eb-9377-7c0d6dd62ca0",
        "userId": {
            "id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "firstName": "demo",
            "lastName": "bots",
            "emailId": "demobots@qakore.xyz",
            "activationStatus": "active",
            "profColour": "#ff4500",
            "profImage": "no-avatar",
            "_id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "orgId": "o-daf5c054-e63b-561e-9a31-e53478aa154b"
        },
        "streamId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceType": "variables",
        "message": "Bot variables are exported",
        "createdOn": "2019-06-27T05:26:26.596Z",
        "__v": 0
    },
    {
        "_id": "btl-6b8d6b9f-f7a4-5eb9-b1a5-f242d2d2165a",
        "userId": {
            "id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "firstName": "demo",
            "lastName": "bots",
            "emailId": "demobots@qakore.xyz",
            "activationStatus": "active",
            "profColour": "#ff4500",
            "profImage": "no-avatar",
            "_id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "orgId": "o-daf5c054-e63b-561e-9a31-e53478aa154b"
        },
        "streamId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceType": "app",
        "message": "Scope definition updated for PublicAPI app",
        "createdOn": "2019-06-26T11:44:31.621Z",
        "__v": 0
    },
    {
        "_id": "btl-6bbf175b-9c01-56c2-8208-a565bfb27e37",
        "userId": {
            "id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "firstName": "demo",
            "lastName": "bots",
            "emailId": "demobots@qakore.xyz",           
            "activationStatus": "active",
            "profColour": "#ff4500",
            "profImage": "no-avatar",
            "_id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "orgId": "o-daf5c054-e63b-561e-9a31-e53478aa154b"
        },
        "streamId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceType": "stream",
        "message": "Trained ML after BOT approval",
        "createdOn": "2019-06-26T11:45:32.641Z",
        "__v": 0
    },
    {
        "_id": "btl-77eb7249-8bb4-508c-9103-f7bce1eaa4ee",
        "userId": {
            "id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "firstName": "demo",
            "lastName": "bots",
            "emailId": "demobots@qakore.xyz",
            "activationStatus": "active",
            "profColour": "#ff4500",
            "profImage": "no-avatar",
            "_id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "orgId": "o-daf5c054-e63b-561e-9a31-e53478aa154b"
        },
        "streamId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceType": "app",
        "message": "Scope definition added for PublicAPI app",
        "createdOn": "2019-06-26T11:43:57.767Z",
        "__v": 0
    },
    {
        "_id": "btl-8cbe200a-9b42-5fcc-948c-41be4648d7c6",
        "userId": {
            "id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "firstName": "demo",
            "lastName": "bots",
            "emailId": "demobots@qakore.xyz",
            "activationStatus": "active",
            "profColour": "#ff4500",
            "profImage": "no-avatar",
            "_id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "orgId": "o-daf5c054-e63b-561e-9a31-e53478aa154b"
        },
        "streamId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceType": "app",
        "message": "Scope definition updated for PublicAPI app",
        "createdOn": "2019-06-27T05:28:43.525Z",
        "__v": 0
    },
    {
        "_id": "btl-8e7b8388-97d9-5582-bfbb-b6577cccdec5",
        "userId": {
            "id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "firstName": "demo",
            "lastName": "bots",
            "emailId": "demobots@qakore.xyz",
            "activationStatus": "active",
            "profColour": "#ff4500",
            "profImage": "no-avatar",
            "_id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "orgId": "o-daf5c054-e63b-561e-9a31-e53478aa154b"
        },
        "streamId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceId": "5d1359fb64dd501a8ad729f9",
        "resourceType": "Knowledge Task",
        "message": "Knowledge task published",
        "createdOn": "2019-06-27T05:29:17.742Z",
        "__v": 0
    },
    {
        "_id": "btl-968044ec-1f8e-5be5-8617-03ca7902a088",
        "userId": {
            "id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "firstName": "demo",
            "lastName": "bots",
            "emailId": "demobots@qakore.xyz",
            "activationStatus": "active",
            "profColour": "#ff4500",
            "profImage": "no-avatar",
            "_id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "orgId": "o-daf5c054-e63b-561e-9a31-e53478aa154b"
        },
        "streamId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceId": "dc-f7b697bb-f561-53bb-b365-2ed1bcb0ac57",
        "resourceType": "intent",
        "message": "Trained ML after updating the dialog component Book_a_ticket ",
        "createdOn": "2019-06-26T11:41:40.556Z",
        "__v": 0
    },
    {
        "_id": "btl-9a9fbcfd-6860-5a68-954f-45cbe59df2ad",
        "userId": {
            "id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "firstName": "demo",
            "lastName": "bots",
            "emailId": "demobots@qakore.xyz",
            "activationStatus": "active",
            "profColour": "#ff4500",
            "profImage": "no-avatar",
            "_id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "orgId": "o-daf5c054-e63b-561e-9a31-e53478aa154b"
        },
        "streamId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceId": "dg-14fd680d-3c42-5594-9d1b-c1b5504effa7",
        "resourceType": "Sentence",
        "message": "Trained ML after editing the dialog task Book a ticket successfully.",
        "createdOn": "2019-06-27T05:36:05.546Z",
        "__v": 0
    },
    {
        "_id": "btl-9b8e6cdc-f360-5a85-bf36-eae1bceba08c",
        "userId": {
            "id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "firstName": "demo",
            "lastName": "bots",
            "emailId": "demobots@qakore.xyz",
            "activationStatus": "active",
            "profColour": "#ff4500",
            "profImage": "no-avatar",
            "_id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "orgId": "o-daf5c054-e63b-561e-9a31-e53478aa154b"
        },
        "streamId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceId": "dg-14fd680d-3c42-5594-9d1b-c1b5504effa7",
        "resourceType": "dialog",
        "message": "Trained ML after upgrading dialog task Book a ticket ",
        "createdOn": "2019-06-26T12:04:07.374Z",
        "__v": 0
    },
    {
        "_id": "btl-9ef0d718-d2b3-53a2-a770-ffb934c89439",
        "userId": {
            "id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "firstName": "demo",
            "lastName": "bots",
            "emailId": "demobots@qakore.xyz",
            "activationStatus": "active",
            "profColour": "#ff4500",
            "profImage": "no-avatar",
            "_id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "orgId": "o-daf5c054-e63b-561e-9a31-e53478aa154b"
        },
        "streamId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceId": "bir-6d600d86-15c6-561f-99ef-da4ebd02a9b7",
        "resourceType": "Import",
        "message": "Import request completed",
        "createdOn": "2019-06-27T05:36:05.669Z",
        "__v": 0
    },
    {
        "_id": "btl-a435be8a-fb82-5467-9bf2-96ee38d4859d",
        "userId": {
            "id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "firstName": "demo",
            "lastName": "bots",
            "emailId": "demobots@qakore.xyz",
            "activationStatus": "active",
            "profColour": "#ff4500",
            "profImage": "no-avatar",
            "_id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "orgId": "o-daf5c054-e63b-561e-9a31-e53478aa154b"
        },
        "streamId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceId": "dg-14fd680d-3c42-5594-9d1b-c1b5504effa7",
        "resourceType": "Dialog",
        "message": "Hold & Resume settings updated for book a ticket",
        "createdOn": "2019-06-27T05:36:05.547Z",
        "__v": 0
    },
    {
        "_id": "btl-a6548aea-38af-51fc-b3e7-5eeffed53913",
        "userId": {
            "id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "firstName": "demo",
            "lastName": "bots",
            "emailId": "demobots@qakore.xyz",
            "activationStatus": "active",
            "profColour": "#ff4500",
            "profImage": "no-avatar",
            "_id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "orgId": "o-daf5c054-e63b-561e-9a31-e53478aa154b"
        },
        "streamId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceType": "stream",
        "message": "BOT channels edited : Kore Messenger channel update",
        "createdOn": "2019-06-27T05:29:09.032Z",
        "__v": 0
    },
    {
        "_id": "btl-a8a40880-0b09-5bf8-9ca3-de7575baa338",
        "userId": {
            "id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "firstName": "demo",
            "lastName": "bots",
            "emailId": "demobots@qakore.xyz",
            "activationStatus": "active",
            "profColour": "#ff4500",
            "profImage": "no-avatar",
            "_id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "orgId": "o-daf5c054-e63b-561e-9a31-e53478aa154b"
        },
        "streamId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceType": "stream",
        "message": "Saved BOT",
        "createdOn": "2019-06-26T11:41:13.784Z",
        "__v": 0
    },
    {
        "_id": "btl-bf10483a-32ec-5e1d-ac2a-b0c78fd208d6",
        "userId": {
            "id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "firstName": "demo",
            "lastName": "bots",
            "emailId": "demobots@qakore.xyz",
            "activationStatus": "active",
            "profColour": "#ff4500",
            "profImage": "no-avatar",
            "_id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "orgId": "o-daf5c054-e63b-561e-9a31-e53478aa154b"
        },
        "streamId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceId": "5d1359fb64dd501a8ad729f9",
        "resourceType": "KnowledgeTask",
        "message": "Edited KnowledgeTask Public APIs",
        "createdOn": "2019-06-27T05:25:37.285Z",
        "__v": 0
    },
    {
        "_id": "btl-c6740977-6311-55b5-96ae-9db6b38c2a90",
        "userId": {
            "id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "firstName": "demo",
            "lastName": "bots",
            "emailId": "demobots@qakore.xyz",
            "activationStatus": "active",
            "profColour": "#ff4500",
            "profImage": "no-avatar",
            "_id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "orgId": "o-daf5c054-e63b-561e-9a31-e53478aa154b"
        },
        "streamId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceType": "stream",
        "message": "User Demo Bots is assigned with new role Bot Owner",
        "createdOn": "2019-06-26T11:41:13.729Z",
        "__v": 0
    },
    {
        "_id": "btl-cce62c28-cf95-5a5d-95aa-11b843c0a237",
        "userId": {
            "id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "firstName": "demo",
            "lastName": "bots",
            "emailId": "demobots@qakore.xyz",
            "activationStatus": "active",
            "profColour": "#ff4500",
            "profImage": "no-avatar",
            "_id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "orgId": "o-daf5c054-e63b-561e-9a31-e53478aa154b"
        },
        "streamId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceType": "variables",
        "message": "Bot variables are exported",
        "createdOn": "2019-06-27T05:39:18.707Z",
        "__v": 0
    },
    {
        "_id": "btl-d0948aeb-fdb0-5545-871d-3cce70ae0311",
        "userId": {
            "id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "firstName": "demo",
            "lastName": "bots",
            "emailId": "demobots@qakore.xyz",
            "activationStatus": "active",
            "profColour": "#ff4500",
            "profImage": "no-avatar",
            "_id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "orgId": "o-daf5c054-e63b-561e-9a31-e53478aa154b"
        },
        "streamId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceId": "dg-14fd680d-3c42-5594-9d1b-c1b5504effa7",
        "resourceType": "Dialog",
        "message": "Created Dialog Book a ticket",
        "createdOn": "2019-06-26T11:41:40.192Z",
        "__v": 0
    },
    {
        "_id": "btl-d35fbc0b-86aa-56e7-9176-7e0037615f3c",
        "userId": {
            "id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "firstName": "demo",
            "lastName": "bots",
            "emailId": "demobots@qakore.xyz",
            "activationStatus": "active",
            "profColour": "#ff4500",
            "profImage": "no-avatar",
            "_id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "orgId": "o-daf5c054-e63b-561e-9a31-e53478aa154b"
        },
        "streamId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceType": "stream",
        "message": "Bot updated",
        "createdOn": "2019-06-27T05:29:09.029Z",
        "__v": 0
    },
    {
        "_id": "btl-d48a795d-7f36-505e-a76d-f671113eaff5",
        "userId": {
            "id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "firstName": "demo",
            "lastName": "bots",
            "emailId": "demobots@qakore.xyz",
            "activationStatus": "active",
            "profColour": "#ff4500",
            "profImage": "no-avatar",
            "_id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "orgId": "o-daf5c054-e63b-561e-9a31-e53478aa154b"
        },
        "streamId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceId": "dg-14fd680d-3c42-5594-9d1b-c1b5504effa7",
        "resourceType": "Sentence",
        "message": "Trained ML after editing the dialog task Book a ticket successfully.",
        "createdOn": "2019-06-26T11:41:40.497Z",
        "__v": 0
    },
    {
        "_id": "btl-da3fe886-b12b-59c1-a759-2fa95bdd2e59",
        "userId": {
            "id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "firstName": "demo",
            "lastName": "bots",
            "emailId": "demobots@qakore.xyz",
            "activationStatus": "active",
            "profColour": "#ff4500",
            "profImage": "no-avatar",
            "_id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "orgId": "o-daf5c054-e63b-561e-9a31-e53478aa154b"
        },
        "streamId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceType": "stream",
        "message": "Bot updated",
        "createdOn": "2019-06-27T05:36:05.445Z",
        "__v": 0
    },
    {
        "_id": "btl-da5fc1b5-5eca-512f-b3a9-128670f99d0e",
        "userId": {
            "id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "firstName": "demo",
            "lastName": "bots",
            "emailId": "demobots@qakore.xyz",
            "activationStatus": "active",
            "profColour": "#ff4500",
            "profImage": "no-avatar",
            "_id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "orgId": "o-daf5c054-e63b-561e-9a31-e53478aa154b"
        },
        "streamId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceId": "5d1359fb64dd501a8ad729f9",
        "resourceType": "KnowledgeTask",
        "message": "Created KnowledgeTask Public APIs",
        "createdOn": "2019-06-26T11:41:47.288Z",
        "__v": 0
    },
    {
        "_id": "btl-db9637bc-8da8-53b3-b49c-8d878e2f2e26",
        "userId": {
            "id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "firstName": "demo",
            "lastName": "bots",
            "emailId": "demobots@qakore.xyz",
            "activationStatus": "active",
            "profColour": "#ff4500",
            "profImage": "no-avatar",
            "_id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "orgId": "o-daf5c054-e63b-561e-9a31-e53478aa154b"
        },
        "streamId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceId": "bir-a6a1b825-8882-5603-81ac-a822af9c3276",
        "resourceType": "Import",
        "message": "Import request completed",
        "createdOn": "2019-06-27T05:25:37.375Z",
        "__v": 0
    }
    {
        "_id": "btl-ff3f76fa-1c00-54b4-8982-ed6943feae8b",
        "userId": {
            "id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "firstName": "demo",
            "lastName": "bots",
            "emailId": "demobots@qakore.xyz",
            "activationStatus": "active",
            "profColour": "#ff4500",
            "profImage": "no-avatar",
            "_id": "u-5dad2ccd-b271-5c00-a338-2e6e25e1ec91",
            "orgId": "o-daf5c054-e63b-561e-9a31-e53478aa154b"
        },
        "streamId": "st-6ecb5ba2-5e31-5a40-b918-8cbee40f3fdb",
        "resourceId": "dg-14fd680d-3c42-5594-9d1b-c1b5504effa7",
        "resourceType": "Dialog",
        "message": "Hold & Resume settings updated for book a ticket",
        "createdOn": "2019-06-26T11:41:40.498Z",
        "__v": 0
    }
]
```

### Related Link

* [Change Log](../../app-settings/change-logs.md)