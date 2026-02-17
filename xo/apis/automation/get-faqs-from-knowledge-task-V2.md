--8<-- "includes/automationai-api-back-link.md"

# Get FAQs – KG V2

To get a list of questions and nodes under the Knowledge task. This API supports parameters like botId, language, mode (configured/published), and nodeName.

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
   <td><code>https://{{host}}/api/public/bot/{{botId}}/v2/faqs?state=&limit=&offset=&nodeName=&withallchild=&type=&language=en</code>
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

<li>Knowledge AI: Manage Knowledge Graph

<li>Admin Console: Manage Knowledge Graph
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
   <td>The environment URL. For example, <code>https://platform.kore.ai/</code>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>BotId</strong>
   </td>
   <td><em>Bot ID</em> or <em>Stream ID</em> can be accessed under <strong>App Settings</strong> on the App Profile.
   </td>
   <td>Required
   </td>
  </tr>
</table>



## Query Parameters


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
   <td><strong>state</strong>
   </td>
   <td>The mode or state of the app - Published or Configured.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>limit</strong>
   </td>
   <td>The number of records to be fetched. The default count and the maximum limit is 50.
   </td>
   <td>Optional
   </td>
  </tr>
  <tr>
   <td><strong>offset</strong>
   </td>
   <td>The number of records to be skipped. The default count is set to 0.
   </td>
   <td>Optional
   </td>
  </tr>
  <tr>
   <td><strong>nodeName</strong>
   </td>
   <td>The ID of the nodes in the Knowledge tasks section.
   </td>
   <td>Optional
   </td>
  </tr>
  <tr>
   <td><strong>withallchild</strong>
   </td>
   <td>Whether child nodes need to be included. Accepted conditions are true or false.

   </td>
   <td>Optional
   </td>
  </tr>
  <tr>
   <td><strong>type</strong>
   </td>
   <td>Type of FAQs or tasks to be fetched
   </td>
   <td>Optional
   </td>
  </tr>
  <tr>
   <td><strong>language</strong>
   </td>
   <td>The Bot language that's identified by the language acronym. For example, <em>en</em> for English and <em>de</em> for German.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>search</strong>
   </td>
   <td>Used to search the KG using the <em>reference id</em> or <em>display name</em>.
   </td>
   <td>Optional
   </td>
  </tr>
</table>

## Sample Request

```json
curl --location 'https://localhost/api/public/bot/st-8b87fxxxxx4e90e/v2/faqs?limit=3&offset=0&search=&type=all&language=en&state=configured&nodeName=A&withallchild=true' \
--header 'auth: eyJfxxxxxI6IkpXVCJ9.eyJhcHBJZCI6ImNzLWJjZTZiMfxxxxxNTFkYS1iYjNhLWY5MzkwMDM0Mjg2ZiJ9.40rpnPhnY1CnDPwWfxxxxx'
 
```

## Sample Response


```json
{
    "faqs": [
        {
            "_id": "673d8ec3c2c0874923ad8a7a",
            "streamId": "st-8b873b9c-15cc-5167-a04a-1c801fxxxxxx",
            "conditionalResp": false,
            "questionPayload": {
                "question": "Dup AA Node1",
                "tagsPayload": []
            },
            "responseType": "message",
            "answerPayload": [
                {
                    "_id": "mt-979b11e9-7187-5d8a-918b-6b6801xxxxxx",
                    "streamId": "st-8b873b9c-15cc-5167-a04a-1c801f5xxxxx",
                    "channel": "default",
                    "createdBy": "u-83c6112b-d759-5e13-8dcf-6995fabxxxxx",
                    "createdOn": "Wed Nov 20 2024 12:54:51 GMT+0530 (India Standard Time)",
                    "lModBy": "u-83c6112b-d759-5e13-8dcf-6995fabxxxxx",
                    "lMod": "Wed Nov 20 2024 12:54:51 GMT+0530 (India Standard Time)",
                    "text": "Sample%20Ans",
                    "type": "basic"
                }
            ],
            "subQuestions": [],
            "subAnswers": [],
            "parent": "492e6eab-8da1-41b9-bc5a-09ccfxxxxxxx",
            "leafterm": "A",
            "createdOn": "2024-11-20T07:24:51.445Z",
            "createdBy": "u-83c6112b-d759-5e13-8dcf-6995fabxxxxx",
            "modifiedOn": "2024-11-20T07:24:51.445Z",
            "lastModifiedBy": "u-83c6112b-d759-5e13-8dcf-6995fabxxxxx",
            "botName": "Test5",
            "knowledgeTaskId": "673d8c93c2c0874923xxxxxx",
            "sortId": 1732087491445,
            "language": "en",
            "faqStatus": true,
            "editLocked": false,
            "isPublished": true,
            "refId": "74e7d27f-bcb1-5dab-a339-957a415xxxxx",
            "label": "Dup A Node1",
            "faqLinkedBy": [],
            "__v": 0,
            "fullPath": [
                "Test5",
                "Node1",
                "A"
            ]
        },
        {
            "_id": "673d8e98c2c0874923ad889axxxxxx",
            "streamId": "st-8b873b9c-15cc-5167-a04a-1c801fxxxxxx",
            "conditionalResp": false,
            "questionPayload": {
                "question": "Dup A Node1",
                "tagsPayload": []
            },
            "responseType": "message",
            "answerPayload": [
                {
                    "_id": "mt-d0d70fb0-44fb-577d-99d4-1ffc14xxxxxx",
                    "streamId": "st-8b873b9c-15cc-5167-a04a-1c801fxxxxxx",
                    "channel": "default",
                    "createdBy": "u-83c6112b-d759-5e13-8dcf-6995fabxxxxx",
                    "createdOn": "Wed Nov 20 2024 12:54:08 GMT+0530 (India Standard Time)",
                    "lModBy": "u-83c6112b-d759-5e13-8dcf-6995faxxxxxx",
                    "lMod": "Wed Nov 20 2024 12:54:08 GMT+0530 (India Standard Time)",
                    "text": "sample%20ans",
                    "type": "basic"
                }
            ],
            "subQuestions": [],
            "subAnswers": [],
            "parent": "417634bb-33c6-4fb5-8311-177a4fxxxxxxx",
            "leafterm": "A",
            "createdOn": "2024-11-20T07:24:08.831Z",
            "createdBy": "u-83c6112b-d759-5e13-8dcf-6995fabxxxxx",
            "modifiedOn": "2024-11-20T07:24:08.831Z",
            "lastModifiedBy": "u-83c6112b-d759-5e13-8dcf-6995fabxxxxxx",
            "botName": "Test5",
            "knowledgeTaskId": "673d8c93c2c0874923xxxxxx",
            "sortId": 1732087448831,
            "language": "en",
            "faqStatus": true,
            "editLocked": false,
            "isPublished": true,
            "refId": "24850e9f-d899-58d8-ab6f-a9c3a1xxxxxx",
            "label": "Dup A Node1",
            "faqLinkedBy": [],
            "__v": 0,
            "fullPath": [
                "Test5",
                "A"
            ]
        },
        {
            "_id": "673d8ce8c2c0874923xxxxx",
            "streamId": "st-8b873b9c-15cc-5167-a04a-1c801f5xxxxx",
            "conditionalResp": false,
            "questionPayload": {
                "question": "A Node1",
                "tagsPayload": []
            },
            "responseType": "message",
            "answerPayload": [
                {
                    "_id": "mt-abf1d001-d7a1-5ca0-bf1b-5c707d1xxxxx",
                    "streamId": "st-8b873b9c-15cc-5167-a04a-1c801f5xxxxx",
                    "channel": "default",
                    "createdBy": "u-83c6112b-d759-5e13-8dcf-6995fabxxxxx",
                    "createdOn": "Wed Nov 20 2024 12:46:56 GMT+0530 (India Standard Time)",
                    "lModBy": "u-83c6112b-d759-5e13-8dcf-6995fabxxxx",
                    "lMod": "Wed Nov 20 2024 12:46:56 GMT+0530 (India Standard Time)",
                    "text": "Sample%20Ans",
                    "type": "basic"
                }
            ],
            "subQuestions": [],
            "subAnswers": [],
            "parent": "db9173d7-3611-4bd2-b206-011fe2xxxxxx",
            "leafterm": "A",
            "createdOn": "2024-11-20T07:16:56.712Z",
            "createdBy": "u-83c6112b-d759-5e13-8dcf-6995faxxxxxx",
            "modifiedOn": "2024-11-20T07:16:56.712Z",
            "lastModifiedBy": "u-83c6112b-d759-5e13-8dcf-6995fabxxxxx",
            "botName": "Test5",
            "knowledgeTaskId": "673d8c93c2c0874923xxxxxx",
            "sortId": 1732087016712,
            "language": "en",
            "faqStatus": true,
            "editLocked": false,
            "isPublished": true,
            "refId": "bce3ee09-c91e-5282-9aed-7cb96axxxxxx",
            "label": "A Node1",
            "faqLinkedBy": [],
            "__v": 0,
            "fullPath": [
                "Test5",
                "Node1",
                "A"
            ]
        }
    ],
    "moreAvailable": true,
    "count": 41
}

```
