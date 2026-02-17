--8<-- "includes/automationai-api-back-link.md"

# Get FAQs – KG

To get a list of questions and nodes under the Knowledge task. This API supports parameters like  ktId and parentId (node ID).

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
   <td><code>https://{{host}}/api/public/bot/{{botId}}/faqs?ktId=&limit=&offset=&parentId=&withallchild=&type=&language=en</code>
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

<li>App Builder: Manage Knowledge Graph

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
   <td>The environment URL. For example, <code>https://platform.kore.ai</code>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>BotId</strong>
   </td>
   <td><em>Bot ID</em> or <em>Stream ID</em> can be accessed under <strong>General Settings</strong> on the App Builder.
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
   <td><strong>ktId</strong>
   </td>
   <td>The <em>Knowledge task ID</em> based on which the FAQs are listed.
<p>
You can retrieve the <em>ktId</em> from the request of the <em>GetFAQs</em> API call. <a href="https://community.kore.ai/t/using-getfaqs-api/1724/2">Learn more</a>.
<p>
<strong>Note:</strong> The <em>ktId</em> values are different for both in-development and published bots.
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
   <td>The number of records to be skipped. The default count is set 0.
   </td>
   <td>Optional
   </td>
  </tr>
  <tr>
   <td><strong>parentId</strong>
   </td>
   <td>The ID of the nodes in the Knowledge tasks section.
<p>
You can retrieve the <em>parentId</em> from the response of the <em>GetFAQs</em> API call. <a href="https://community.kore.ai/t/using-getfaqs-api/1724/2">Learn more</a>.
   </td>
   <td>Optional
   </td>
  </tr>
  <tr>
   <td><strong>withallchild</strong>
   </td>
   <td>Whether child nodes need to be included
   </td>
   <td>Optional
   </td>
  </tr>
  <tr>
   <td><strong>type</strong>
   </td>
   <td>Type of FAQs to be fetched.
   </td>
   <td>Optional
   </td>
  </tr>
  <tr>
   <td><strong>language</strong>
   </td>
   <td>The Bot language which is identified by the language acronym. For example, <em>en</em> for English and <em>de</em> for German. The user can set the default language of the bot.
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
curl -X GET \
  'https://{{host}}/api/public/bot/{{bot_id}}/faqs?ktId=5afxxxxxf&limit=30&offset=0&parentId=xxxxx-xxx-xxx-xxx-xxxxx&withallchild=true&type=all&language=en' \
  -H 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
  -H 'content-type: application/json'  
```

## Body Parameters

No body parameters are passed.


## Sample Response


```json
{
    "faqs": [
        {
            "_id": "670ceb958ba112b5eb958248",
            "streamId": "st-b4a0b261-7558-52e2-aca1-85171cf053f7",
            "conditionalResp": false,
            "questionPayload": {
                "question": "sub child faq1",
                "tagsPayload": []
            },
            "responseType": "message",
            "answerPayload": [
                {
                    "_id": "mt-eea8c021-30f9-5fe8-bd90-9cabced0199f",
                    "streamId": "st-b4a0b261-7558-52e2-aca1-85171cf053f7",
                    "channel": "default",
                    "createdBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                    "createdOn": "Mon Oct 14 2024 09:59:49 GMT+0000 (Coordinated Universal Time)",
                    "lModBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                    "lMod": "Mon Oct 14 2024 09:59:49 GMT+0000 (Coordinated Universal Time)",
                    "text": "ans2",
                    "type": "basic"
                }
            ],
            "subQuestions": [],
            "subAnswers": [],
            "parent": "5d7dd953-4dca-43ee-a62b-023455605344",
            "leafterm": "sub child german1",
            "createdOn": "2024-10-14T09:59:49.916Z",
            "createdBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
            "modifiedOn": "2024-10-14T09:59:49.916Z",
            "lastModifiedBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
            "botName": "Enterprise german New",
            "knowledgeTaskId": "6700d9778ba112b5eb928b66",
            "sortId": 1728899989916,
            "language": "de",
            "faqStatus": true,
            "editLocked": false,
            "isPublished": false,
            "refId": "e5320a4d-6b26-5ce9-b803-532e87412955",
            "label": "sub child faq1",
            "faqLinkedBy": [],
            "__v": 0,
            "fullPath": [
                "oct 5 german new",
                "child german1",
                "sub child german1"
            ]
        },
        {
            "_id": "670ceac28ba112b5eb9580c1",
            "streamId": "st-b4a0b261-7558-52e2-aca1-85171cf053f7",
            "conditionalResp": false,
            "questionPayload": {
                "question": "faq1",
                "tagsPayload": []
            },
            "responseType": "message",
            "answerPayload": [
                {
                    "_id": "mt-7651ca18-b08d-5aaf-84a8-b5f46e3f8381",
                    "streamId": "st-b4a0b261-7558-52e2-aca1-85171cf053f7",
                    "channel": "default",
                    "createdBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                    "createdOn": "Mon Oct 14 2024 09:56:18 GMT+0000 (Coordinated Universal Time)",
                    "lModBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                    "lMod": "Mon Oct 14 2024 09:56:18 GMT+0000 (Coordinated Universal Time)",
                    "text": "ans1",
                    "type": "basic"
                }
            ],
            "subQuestions": [],
            "subAnswers": [],
            "parent": "51c2934d-2070-4b7b-9fbf-d86ace0abd05",
            "leafterm": "child german1",
            "createdOn": "2024-10-14T09:56:17.991Z",
            "createdBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
            "modifiedOn": "2024-10-14T09:56:17.991Z",
            "lastModifiedBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
            "botName": "Enterprise german New",
            "knowledgeTaskId": "6700d9778ba112b5eb928b66",
            "sortId": 1728899777991,
            "language": "de",
            "faqStatus": true,
            "editLocked": false,
            "isPublished": false,
            "refId": "1fbb758a-70fa-57d9-8347-1e8f2baf8c0f",
            "label": "faq1",
            "faqLinkedBy": [],
            "__v": 0,
            "fullPath": [
                "oct 5 german new",
                "child german1"
            ]
        },
        {
            "_id": "670ce9745bf5e21f7932faed",
            "streamId": "st-b4a0b261-7558-52e2-aca1-85171cf053f7",
            "conditionalResp": true,
            "questionPayload": {
                "question": "child german2 condition faq",
                "tagsPayload": []
            },
            "responseType": "message",
            "answerPayload": [
                {
                    "_id": "mt-a2c69a5a-0d71-5f03-b93b-1b17ce276822",
                    "streamId": "st-b4a0b261-7558-52e2-aca1-85171cf053f7",
                    "channel": "default",
                    "createdBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                    "createdOn": "Mon Oct 14 2024 09:50:44 GMT+0000 (Coordinated Universal Time)",
                    "lModBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                    "lMod": "Mon Oct 14 2024 09:50:44 GMT+0000 (Coordinated Universal Time)",
                    "text": "default",
                    "type": "basic"
                }
            ],
            "subQuestions": [],
            "subAnswers": [
                [
                    {
                        "_id": "mt-a9b3da28-c344-5447-9a4f-ac8cd3c26694",
                        "streamId": "st-b4a0b261-7558-52e2-aca1-85171cf053f7",
                        "channel": "default",
                        "seqNum": 1,
                        "conditions": {
                            "operator": "",
                            "rules": [
                                {
                                    "condition": "context.session.UserContext.emailId",
                                    "value": "",
                                    "op": ""
                                }
                            ]
                        },
                        "createdBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                        "createdOn": "Mon Oct 14 2024 09:50:44 GMT+0000 (Coordinated Universal Time)",
                        "lModBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                        "lMod": "Mon Oct 14 2024 09:50:44 GMT+0000 (Coordinated Universal Time)",
                        "text": "pass",
                        "type": "basic"
                    }
                ]
            ],
            "parent": "idPrefix19",
            "leafterm": "oct 5 german new",
            "createdOn": "2024-10-14T09:50:44.915Z",
            "createdBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
            "modifiedOn": "2024-10-14T09:50:44.915Z",
            "lastModifiedBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
            "botName": "Enterprise german New",
            "knowledgeTaskId": "6700d9778ba112b5eb928b66",
            "sortId": 1728899444915,
            "language": "de",
            "faqStatus": true,
            "editLocked": false,
            "isPublished": false,
            "refId": "462b118d-cb5f-5d5e-b672-b4150bdb1d46",
            "label": "child german2 condition faq",
            "faqLinkedBy": [],
            "__v": 0,
            "fullPath": [
                "oct 5 german new"
            ]
        },
        {
            "_id": "670ce92e5bf5e21f7932fa47",
            "streamId": "st-b4a0b261-7558-52e2-aca1-85171cf053f7",
            "conditionalResp": false,
            "questionPayload": {
                "question": "child german1",
                "tagsPayload": []
            },
            "responseType": "message",
            "answerPayload": [
                {
                    "_id": "mt-0e3f7f59-8562-5de7-adf0-d2d5b05cdeb9",
                    "streamId": "st-b4a0b261-7558-52e2-aca1-85171cf053f7",
                    "channel": "default",
                    "createdBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                    "createdOn": "Mon Oct 14 2024 09:49:34 GMT+0000 (Coordinated Universal Time)",
                    "lModBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                    "lMod": "Mon Oct 14 2024 09:49:34 GMT+0000 (Coordinated Universal Time)",
                    "text": "default",
                    "type": "basic"
                }
            ],
            "subQuestions": [],
            "subAnswers": [],
            "parent": "idPrefix19",
            "leafterm": "oct 5 german new",
            "createdOn": "2024-10-14T09:49:34.474Z",
            "createdBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
            "modifiedOn": "2024-10-14T09:49:34.474Z",
            "lastModifiedBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
            "botName": "Enterprise german New",
            "knowledgeTaskId": "6700d9778ba112b5eb928b66",
            "sortId": 1728899374474,
            "language": "de",
            "faqStatus": true,
            "editLocked": false,
            "isPublished": false,
            "refId": "1e2fae51-35e6-552b-8b4c-a237bf38f380",
            "label": "child german1",
            "faqLinkedBy": [],
            "__v": 0,
            "fullPath": [
                "oct 5 german new"
            ]
        },
        {
            "_id": "6704d50ceb95f6f3c2bf7c5d",
            "streamId": "st-b4a0b261-7558-52e2-aca1-85171cf053f7",
            "conditionalResp": true,
            "questionPayload": {
                "question": "Wofür ist Deutschland berühmt?",
                "tagsPayload": []
            },
            "responseType": "message",
            "answerPayload": [
                {
                    "_id": "mt-b7751876-8b7b-5299-a112-b97f27b4ab6c",
                    "streamId": "st-b4a0b261-7558-52e2-aca1-85171cf053f7",
                    "channel": "default",
                    "createdBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                    "createdOn": "Tue Oct 08 2024 06:45:32 GMT+0000 (Coordinated Universal Time)",
                    "lModBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                    "lMod": "Tue Oct 08 2024 07:16:24 GMT+0000 (Coordinated Universal Time)",
                    "text": "Standard",
                    "type": "basic"
                }
            ],
            "subQuestions": [],
            "subAnswers": [
                [
                    {
                        "_id": "mt-d23a8c29-03c3-5ea5-8aab-d034f6ad60a2",
                        "streamId": "st-b4a0b261-7558-52e2-aca1-85171cf053f7",
                        "channel": "default",
                        "seqNum": 1,
                        "conditions": {
                            "operator": "",
                            "rules": [
                                {
                                    "condition": "context.session.UserContext.emailId",
                                    "value": "john.doe@example.com",
                                    "op": "eq"
                                }
                            ]
                        },
                        "createdBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                        "createdOn": "Tue Oct 08 2024 07:11:07 GMT+0000 (Coordinated Universal Time)",
                        "lModBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                        "lMod": "Tue Oct 08 2024 07:16:24 GMT+0000 (Coordinated Universal Time)",
                        "text": "Deutschland%20ist%20ber%C3%BChmt%20f%C3%BCr%20seine%20Burgen",
                        "type": "basic"
                    }
                ]
            ],
            "parent": "idPrefix19",
            "leafterm": "oct 5 german new",
            "createdOn": "2024-10-08T06:45:32.436Z",
            "createdBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
            "modifiedOn": "2024-10-08T07:16:24.496Z",
            "lastModifiedBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
            "botName": "Enterprise german New",
            "knowledgeTaskId": "6700d9778ba112b5eb928b66",
            "sortId": 1728369932436,
            "language": "de",
            "faqStatus": true,
            "editLocked": false,
            "isPublished": true,
            "refId": "063b6ccb-6c37-58fa-ba5b-34ce9aaaf55b",
            "label": "Wofür ist Deutschland berühmt?",
            "faqLinkedBy": [],
            "__v": 0,
            "fullPath": [
                "oct 5 german new"
            ]
        },
        {
            "_id": "6700f3fadee4b4508a5117fd",
            "streamId": "st-b4a0b261-7558-52e2-aca1-85171cf053f7",
            "conditionalResp": true,
            "questionPayload": {
                "question": "Wo ist Deutschland?",
                "tagsPayload": []
            },
            "responseType": "message",
            "answerPayload": [
                {
                    "_id": "mt-f29e5c61-456e-56a2-b905-93b975dcb008",
                    "streamId": "st-b4a0b261-7558-52e2-aca1-85171cf053f7",
                    "channel": "default",
                    "createdBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                    "createdOn": "Sat Oct 05 2024 08:08:26 GMT+0000 (Coordinated Universal Time)",
                    "lModBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                    "lMod": "Sat Oct 05 2024 08:08:26 GMT+0000 (Coordinated Universal Time)",
                    "text": "das%20ist%20Standard",
                    "type": "basic"
                }
            ],
            "subQuestions": [],
            "subAnswers": [
                [
                    {
                        "_id": "mt-5b913dfe-46ed-51ac-bf40-b64cfcc47c85",
                        "streamId": "st-b4a0b261-7558-52e2-aca1-85171cf053f7",
                        "channel": "default",
                        "seqNum": 1,
                        "conditions": {
                            "operator": "",
                            "rules": [
                                {
                                    "condition": "context.session.UserContext.emailId",
                                    "value": "",
                                    "op": ""
                                }
                            ]
                        },
                        "createdBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                        "createdOn": "Sat Oct 05 2024 08:08:26 GMT+0000 (Coordinated Universal Time)",
                        "lModBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                        "lMod": "Sat Oct 05 2024 08:08:26 GMT+0000 (Coordinated Universal Time)",
                        "text": "Bedingung%20bestanden",
                        "type": "basic"
                    }
                ],
                [
                    {
                        "_id": "mt-d05deb7a-2cbc-52e0-b532-92b31ee41c25",
                        "streamId": "st-b4a0b261-7558-52e2-aca1-85171cf053f7",
                        "channel": "telegram",
                        "seqNum": 2,
                        "conditions": {
                            "operator": "",
                            "rules": [
                                {
                                    "condition": "context.session.UserContext.emailId",
                                    "value": "",
                                    "op": "dne"
                                }
                            ]
                        },
                        "createdBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                        "createdOn": "Sat Oct 05 2024 08:08:26 GMT+0000 (Coordinated Universal Time)",
                        "lModBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                        "lMod": "Sat Oct 05 2024 08:08:26 GMT+0000 (Coordinated Universal Time)",
                        "text": "Bedingung%20bestanden%20ist%20Telegram",
                        "type": "basic"
                    }
                ]
            ],
            "parent": "idPrefix19",
            "leafterm": "oct 5 german new",
            "createdOn": "2024-10-05T08:08:26.781Z",
            "createdBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
            "modifiedOn": "2024-10-05T08:08:26.781Z",
            "lastModifiedBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
            "botName": "Enterprise german New",
            "knowledgeTaskId": "6700d9778ba112b5eb928b66",
            "sortId": 1728115706781,
            "language": "de",
            "faqStatus": true,
            "editLocked": false,
            "isPublished": true,
            "refId": "bb4591d0-3ce0-5c16-a5a7-7eba98255dab",
            "label": " Wo ist Deutschland?",
            "faqLinkedBy": [],
            "__v": 0,
            "fullPath": [
                "oct 5 german new"
            ]
        },
        {
            "_id": "6700ec1fdee4b4508a5112e3",
            "streamId": "st-b4a0b261-7558-52e2-aca1-85171cf053f7",
            "conditionalResp": false,
            "questionPayload": {
                "question": "Wie ist das Klima in Frankfurt?",
                "tagsPayload": []
            },
            "responseType": "dialog",
            "dialogId": "f53e7d6f-bcd6-5496-bad1-6bef40de8de6",
            "subQuestions": [
                {
                    "question": "Regnet es?",
                    "tagsPayload": []
                }
            ],
            "parent": "idPrefix19",
            "leafterm": "oct 5 german new",
            "createdOn": "2024-10-05T07:34:55.871Z",
            "createdBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
            "modifiedOn": "2024-10-05T08:36:50.292Z",
            "lastModifiedBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
            "botName": "Enterprise german New",
            "knowledgeTaskId": "6700d9778ba112b5eb928b66",
            "sortId": 1728113695871,
            "language": "de",
            "faqStatus": true,
            "editLocked": false,
            "isPublished": true,
            "refId": "0602522b-e943-59f4-949e-b1a829103a09",
            "label": "Wie ist das Klima in Frankfurt?",
            "faqLinkedBy": [],
            "__v": 0,
            "fullPath": [
                "oct 5 german new"
            ],
            "answerPayload": []
        },
        {
            "_id": "6700e0cd690ae390be0ad7b0",
            "streamId": "st-b4a0b261-7558-52e2-aca1-85171cf053f7",
            "conditionalResp": false,
            "questionPayload": {
                "question": "So testen Sie den Aufgabenauslöser",
                "tagsPayload": []
            },
            "responseType": "dialog",
            "dialogId": "5cfcab80-949c-576a-a26b-922490e9b7ba",
            "subQuestions": [],
            "parent": "idPrefix19",
            "leafterm": "oct 5 german new",
            "createdOn": "2024-10-05T06:46:37.142Z",
            "createdBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
            "modifiedOn": "2024-10-05T07:28:37.580Z",
            "lastModifiedBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
            "botName": "Enterprise german New",
            "knowledgeTaskId": "6700d9778ba112b5eb928b66",
            "sortId": 1728110797142,
            "language": "de",
            "faqStatus": true,
            "editLocked": false,
            "isPublished": true,
            "refId": "020d93ae-a516-5bf0-9d86-748bf4c9fa3c",
            "label": "So testen Sie den Aufgabenauslöser",
            "faqLinkedBy": [],
            "__v": 0,
            "fullPath": [
                "oct 5 german new"
            ],
            "answerPayload": []
        },
        {
            "_id": "6700db7815bab6aba08139c2",
            "streamId": "st-b4a0b261-7558-52e2-aca1-85171cf053f7",
            "conditionalResp": true,
            "questionPayload": {
                "question": "die hauptstadt deutschlands",
                "tagsPayload": []
            },
            "responseType": "message",
            "answerPayload": [
                {
                    "_id": "mt-c9f0ea65-3c11-5ff1-aaa1-035b60cbbcb6",
                    "streamId": "st-b4a0b261-7558-52e2-aca1-85171cf053f7",
                    "channel": "default",
                    "createdBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                    "createdOn": "Sat Oct 05 2024 06:23:52 GMT+0000 (Coordinated Universal Time)",
                    "lModBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                    "lMod": "Sat Oct 05 2024 06:32:54 GMT+0000 (Coordinated Universal Time)",
                    "text": "Hauptstadt%20von%20Deutschland%20ist%20Frankfurt",
                    "type": "basic"
                }
            ],
            "subQuestions": [],
            "subAnswers": [
                [
                    {
                        "_id": "mt-5170ca2b-82c6-505c-b497-9f659e58ccd2",
                        "streamId": "st-b4a0b261-7558-52e2-aca1-85171cf053f7",
                        "channel": "default",
                        "seqNum": 1,
                        "conditions": {
                            "operator": "",
                            "rules": [
                                {
                                    "condition": "context.session.UserContext.emailId",
                                    "value": "",
                                    "op": "dne"
                                }
                            ]
                        },
                        "createdBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                        "createdOn": "Sat Oct 05 2024 06:23:52 GMT+0000 (Coordinated Universal Time)",
                        "lModBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                        "lMod": "Sat Oct 05 2024 06:32:54 GMT+0000 (Coordinated Universal Time)",
                        "text": "Bedingung%20ist%20erf%C3%BCllt",
                        "type": "basic"
                    }
                ],
                [
                    {
                        "_id": "mt-eeb51822-b1ed-5a9f-841a-14bcc33712ab",
                        "streamId": "st-b4a0b261-7558-52e2-aca1-85171cf053f7",
                        "channel": "telegram",
                        "seqNum": 2,
                        "conditions": {
                            "operator": "",
                            "rules": [
                                {
                                    "condition": "context.session.UserContext.emailId",
                                    "value": "",
                                    "op": "dne"
                                }
                            ]
                        },
                        "createdBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                        "createdOn": "Sat Oct 05 2024 06:32:54 GMT+0000 (Coordinated Universal Time)",
                        "lModBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
                        "lMod": "Sat Oct 05 2024 06:32:54 GMT+0000 (Coordinated Universal Time)",
                        "text": "Dies%20ist%20eine%20telegrammspezifische%20Antwortbedingung%2C%20die%20erf%C3%BCllt%20ist",
                        "type": "basic"
                    }
                ]
            ],
            "parent": "idPrefix19",
            "leafterm": "oct 5 german new",
            "createdOn": "2024-10-05T06:23:52.952Z",
            "createdBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
            "modifiedOn": "2024-10-05T06:32:54.842Z",
            "lastModifiedBy": "u-fb720fec-2e37-5485-bbee-95ff521619d9",
            "botName": "Enterprise german New",
            "knowledgeTaskId": "6700d9778ba112b5eb928b66",
            "sortId": 1728109432952,
            "language": "de",
            "faqStatus": true,
            "editLocked": false,
            "isPublished": true,
            "refId": "c22e7f68-af03-5f1b-968f-f1096319a5f4",
            "label": "die hauptstadt deutschlands",
            "faqLinkedBy": [],
            "__v": 0,
            "fullPath": [
                "oct 5 german new"
            ]
        }
    ],
    "moreAvailable": false,
    "count": 9
}
```

!!!note
    
    Refer to Get [FAQs – KG V2](../automation/get-faqs-from-knowledge-task-V2.md)  which supports the Parameters: botId, language, mode (configured/published), and nodeName.