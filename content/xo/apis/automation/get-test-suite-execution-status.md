
--8<-- "includes/automationai-api-back-link.md"

# Get the Execution Status and Summary of a Test Suite API

To get the status of the Conversation Test Suite Execution request against a unique **_testSuiteId_** if the request is in progress, and provide the download link for the results file after the test execution is complete.

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
   <td><code>https://{{host}}/api/public/stream/:streamId/conversation/testsuite/:testSuiteName/:testRunId/status</code>
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

<li>App Builder: Conversation Tests Execution

<li>Admin Console: Conversation Tests Execution
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
   <td><strong>testSuiteName</strong>
   </td>
   <td>The name of the Test Suite.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>testRunId</strong>
   </td>
   <td>The ID of the test run to track the execution status.
   </td>
   <td>Required
   </td>
  </tr>
</table>



## Sample Request


```json
curl --location --request GET \
  'https://{{host}}/api/public/stream/:streamId/conversation/testsuite/:testSuiteName/:testRunId/status' \
    --header 'auth: {YOUR_JWT_ACCESS_TOKEN}' \
    --header 'bot-language: {language-code}'
```



## Body Parameters

No Body parameters are passed.


## Sample Response



* When the request in progress.


```json
{
    "_id": "ctr-80xxxxxa-bxx1-5xx1-axx7-d5xxxxxxxxxb",
    "streamId": "st-4xxxxxx7-3xx4-5xxa-9xxa-d8xxxxxxxxx0",
    "testSuiteId": "ctc-3xxxxxx5-6xxf-5xxb-bxx8-04xxxxxxxxxc",
    "status": "inprogress",
    "totalTestStepsCount": 13,
    "result": {
        "nlpVersion": [],
        "startTime": "2023-08-23T10:14:13.330Z",
        "version": "configured",
        "status": "inprogress"
    },
    "percentageCompleted": 85
}
```

* When the request is completed.


```json
{
    "_id": "ctr-8xxxxxxa-bxx1-5xx1-axx7-d5xxxxxxxxxb",
    "streamId": "st-4xxxxxx7-3xx4-5xxa-9xxa-d8xxxxxxxxx0",
    "testSuiteId": "ctc-3xxxxxx5-6xxf-5xxb-bxx8-04xxxxxxxxxc",
    "status": "passed",
    "totalTestStepsCount": 13,
    "result": {
        "nlpVersion": [
            "v3",
            "v3",
            "v3",
            "v3",
            "v3",
            "v3",
            "v3",
            "v3",
            "v3",
            "v3",
            "v3",
            "v3",
            "v3"
        ],
        "startTime": "2023-08-23T10:14:13.330Z",
        "version": "configured",
        "status": "passed",
        "stepDetails": {
            "passed": 13,
            "failed": 0,
            "total": 13
        },
        "errorDetails": null,
        "executionResults": [            {
                "actualOutput": [
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
                                        "text": "test",
                                        "status": "passed"
                                    }
                                ],
                                "status": "passed"
                            },
                            "context": {
                                "enabled": false,
                                "contains": []
                            }
                        }
                    }
                ],
                "intents": [],
                "faqs": [],
                "smalltalk": [],
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
                                        "text": "test",
                                        "status": "passed"
                                    }
                                ],
                                "status": "passed"
                            },
                            "context": {
                                "enabled": false,
                                "contains": []
                            }
                        }
                    }
                ],
                "event": "Start_Flow",
                "requestId": "ctr-8xxxxxxa-bxx1-5xx1-axx7-d5xxxxxxxxxx0",
                "nlpVersion": "v3",
                "status": "passed"
            },
            {
                "actualOutput": [
                    {
                        "text": "{\"type\":\"template\",\"payload\":{\"template_type\":\"quick_replies\",\"text\":\"Sorry! We are unable to detect the language. Please choose one of the below languages :\\n\",\"quick_replies\":[{\"content_type\":\"text\",\"title\":\"English\",\"payload\":\"English\"},{\"content_type\":\"text\",\"title\":\"Deutsch\",\"payload\":\"Deutsch\"}]}}",
                        "category": "Confirmation",
                        "isStandardResponse": true,
                        "userPrompts": [],
                        "assertions": {
                            "flowLevel": {
                                "enabled": true,
                                "contains": [
                                    {
                                        "nodeId": "Confirmation",
                                        "status": "passed"
                                    }
                                ],
                                "status": "passed"
                            },
                            "text": {
                                "enabled": true,
                                "contains": [
                                    {
                                        "text": "{\"type\":\"template\",\"payload\":{\"template_type\":\"quick_replies\",\"text\":\"Sorry! We are unable to detect the language. Please choose one of the below languages :\\n\",\"quick_replies\":[{\"content_type\":\"text\",\"title\":\"English\",\"payload\":\"English\"},{\"content_type\":\"text\",\"title\":\"Deutsch\",\"payload\":\"Deutsch\"}]}}",
                                        "status": "passed"
                                    }
                                ],
                                "status": "passed"
                            },
                            "context": {
                                "enabled": false,
                                "contains": []
                            }
                        }
                    }
                ],
                "intents": [],
                "faqs": [],
                "smalltalk": [],
                "input": "help",
                "outputs": [
                    {
                        "text": "{\"type\":\"template\",\"payload\":{\"template_type\":\"quick_replies\",\"text\":\"Sorry! We are unable to detect the language. Please choose one of the below languages :\\n\",\"quick_replies\":[{\"content_type\":\"text\",\"title\":\"English\",\"payload\":\"English\"},{\"content_type\":\"text\",\"title\":\"Deutsch\",\"payload\":\"Deutsch\"}]}}",
                        "category": "Confirmation",
                        "isStandardResponse": true,
                        "userPrompts": [],
                        "assertions": {
                            "flowLevel": {
                                "enabled": true,
                                "contains": [
                                    {
                                        "nodeId": "Confirmation",
                                        "status": "passed"
                                    }
                                ],
                                "status": "passed"
                            },
                            "text": {
                                "enabled": true,
                                "contains": [
                                    {
                                        "text": "{\"type\":\"template\",\"payload\":{\"template_type\":\"quick_replies\",\"text\":\"Sorry! We are unable to detect the language. Please choose one of the below languages :\\n\",\"quick_replies\":[{\"content_type\":\"text\",\"title\":\"English\",\"payload\":\"English\"},{\"content_type\":\"text\",\"title\":\"Deutsch\",\"payload\":\"Deutsch\"}]}}",
                                        "status": "passed"
                                    }
                                ],
                                "status": "passed"
                            },
                            "context": {
                                "enabled": false,
                                "contains": []
                            }
                        },
                        "textMismatch": true
                    }
                ],
                "requestId": "ctr-8xxxxxxa-bxx1-5xx1-axx7-d5xxxxxxxxxx1",
                "nlpVersion": "v3",
                "status": "passed"
            }
            ......................................................................................
        ],
        "duration": 14364
    },
    "percentageCompleted": 100
}
```