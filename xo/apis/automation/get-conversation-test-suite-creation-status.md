--8<-- "includes/automationai-api-back-link.md"

# Conversation Test Suite Creation Status API

To get the creation/import request status of the Conversation Test Suite against a unique Import ID and provide the download link for the results file after the test execution is complete. Please refer to [Create (Import) a Test Suite API ](create-conversation-test-suite.md) to learn more.

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
   <td><code>https://{{host}}/api/public/stream/:streamId/conversation/testsuite/import/:dsId/status</code>
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

<li>App Builder: Conversation Tests Management

<li>Admin Console: Conversation Tests Management
</li>
</ul>
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
   <td><strong>host</strong>
   </td>
   <td>Environment URL. For example,<code>https://platform.kore.ai</code>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>StreamID</strong>
   </td>
   <td>The  <em>Stream ID</em> can be accessed under <strong>General Settings</strong> on the App Builder.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>dsId</strong>
   </td>
   <td>The unique ID to check the conversation test suite creation/import status.
   </td>
   <td>Required
   </td>
  </tr>
</table>



## Sample Request


```json
curl --location --request GET \
  'https://{{host}}/api/public/stream/:streamId/conversation/testsuite/import/:dsId/status' \
    --header 'auth: {YOUR_JWT_ACCESS_TOKEN}' \
    --header 'bot-language: {language-code}'
```


## Body Parameters

No body parameters are passed.


## Sample Response

* When the test suite creation/import is in progress.


```json
{
"_id": "ds-f8xxxxx5-5xxa-5xx4-axx4-48xxxxxxxxx9",
"status": "IN_PROGRESS",
"percentageComplete": 85,
"streamId": "st-45xxxxx7-3xx4-5xxa-9xxa-d8xxxxxxxxx0",
"jobType": "CONVERSATION_TESTING_VALIDATE",
"action": "RUN",
"countOfDockStatuses": 1,
"createdBy": "u-7dxxxxxf-7xxd-5xx7-axx7-37xxxxxxxxx4",
"testSuiteId": "ctc-a1xxxxxc-5xx3-5xx5-axx3-77xxxxxxxxxb",
"expireAt": "2023-08-23T10:18:21.820Z",
"statusLogs": [],
"lMod": "2023-08-23T10:03:36.109Z",
"createdOn": "2023-08-23T10:03:21.825Z",
"requestedTime": "2023-08-23T10:03:21.825Z",
"__v": 0
}

```

* When the test suite creation/import is completed.


```json
{
    "_id": "ds-f8xxxxx5-5xxa-5xx4-axx4-48xxxxxxxxx9",
    "status": "SUCCESS",
    "percentageComplete": 100,
    "streamId": "st-45xxxxx7-3xx4-5xxa-9xxa-d8xxxxxxxxx0",
    "jobType": "CONVERSATION_TESTING_VALIDATE",
    "action": "RUN",
    "countOfDockStatuses": 1,
    "createdBy": "u-7dxxxxxf-7xxd-5xx7-axx7-37xxxxxxxxx4",
    "testSuiteId": "ctc-a1xxxxxc-5xx3-5xx5-axx3-77xxxxxxxxxb",
    "expireAt": "2023-08-23T10:18:21.820Z",
    "statusLogs": [],
    "lMod": "2023-08-23T10:04:24.972Z",
    "createdOn": "2023-08-23T10:03:21.825Z",
    "requestedTime": "2023-08-23T10:03:21.825Z",
    "__v": 0,
    "response": {
        "schedule": {
            "enableSchedule": false
        },
        "channel": "rtm",
        "tags": [],
        "recentTags": [],
        "metadataAvailable": true,
        "name": "newtestcaseconvtest1979asdxxxxxxxxx9",
        "description": "",
        "preprocessor": "",
        "serviceMap": [],
        "authProfiles": [],
        "streamId": "st-45xxxxx7-3xx4-5xxa-9xxa-d8xxxxxxxxx0",
        "accountId": "639xxxxxxxxxxxxxxxxxxxx3",
        "lModBy": "u-7dxxxxxf-7xxd-5xx7-axx7-37xxxxxxxxx4",
        "createdBy": "u-7dxxxxxf-7xxd-5xx7-axx7-37xxxxxxxxx4",
        "testSteps": [
            {
                "input": "Start_Flow",
                "outputs": [
                    {
                        "text": "test",
                        "nodeId": "",
                        "componentType": "",
                        "intentId": "",
                        "nodeName": "",
                        "intentType": "",
                        "taskId": "",
                        "dialogName": "",
                        "transitions": [],
                        "transitionNodeNames": [],
                        "transitionNodeType": [],
                        "assertions": {
                            "flowLevel": {
                                "enabled": false,
                                "contains": []
                            },
                            "text": {
                                "enabled": true,
                                "contains": [
                                    {
                                        "text": "test"
                                    }
                                ]
                            },
                            "context": {
                                "enabled": false,
                                "contains": []
                            }
                        }
                    }
                ],
                "event": "Start_Flow"
            }
        ],
        "_id": "ctc-f9xxxxxc-7xx1-5xxe-axx6-80xxxxxxxxxd",
        "createdOn": "2023-08-23T10:03:37.404Z",
        "lModOn": "2023-08-23T10:03:37.404Z",
        "__v": 0
    }
}
```
