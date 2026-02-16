--8<-- "includes/automationai-api-back-link.md"

# Batch Test Execution Status API

To get the status of the Batch Test Execution request against a unique ‘Request Id’ and provide the download link for the results file after the test execution is complete. Please refer to the [Batch Test Execution API](batch-test-execution.md) to learn more.


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
   <td><code>https://{host}/api/public/bot/{botId}/testsuite/{testSuiteName}/{testRunId}/status</code>
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

<li>App Builder: Batch Tests Execution

<li>Admin Console: Not Applicable
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
   <td>Environment URL, for example,<code>https://platform.kore.ai</code>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>BotID</strong>
   </td>
   <td>The <em>Bot ID</em> or <em>Stream ID</em> can be accessed under <strong>General Settings</strong> on the App Builder.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>testSuiteName</strong>
   </td>
   <td>Name of the test suite as created in the Bot’s platform that is being executed
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>testRunId</strong>
   </td>
   <td>The unique ‘Request ID’ returned by the Batch Test Execution API to track the progress
   </td>
   <td>Required
   </td>
  </tr>
</table>



## Sample Request


```json
curl --location --request GET \
  'https://{host}/api/public/stream/{streamId}/testsuite/{testSuiteName}/{testRunId}/status' \
    --header 'auth: {jwt-token}' \
    --header 'bot-language: {language-code}'
```



## Body Parameters

No body parameters are passed.


## Sample Response

When the test execution is completed \

```json
{
    "_id": "tr-74d94321-35f8-5066-bdc8-a0863e7axxxx",
    "streamId": "st-83a4989c-7f57-59e7-85b8-d6547a91xxxx",
    "testSuiteId": "ts-cf304560-7e39-5876-ad22-8c114743xxxx",
    "status": "completed",
    "utterance_count": 1,
    "result": {
        "_id": "tr-74d94321-35f8-5066-bdc8-a0863e7axxxx",
        "isPartialFailure": false,
        "status": "completed",
        "isAvailable": true,
        "testSuiteId": "ts-cf304560-7e39-5876-ad22-8c114743893d",
        "triggeredBy": "u-b6cd832d-d3c0-501f-9d94-9e4c76667e9e",
        "streamId": "st-83a4989c-7f57-59e7-85b8-d6547a91xxxx",
        "botLanguage": "en",
        "runType": "inDevelopment",
        "utterance_count": 1,
        "startTime": "2023-06-26T12:07:38.405Z",
        "__v": 0,
        "endTime": "2023-06-26T12:09:39.518Z",
        "f1_score": "0.00",
        "fileId": "649980035ebd2d3b2d5c6df5",
        "precision": "0.00",
        "recall": "0.00",
        "results": {
            "TP": 0,
            "TN": 0,
            "FP": 0,
            "FN": 0,
            "success": 0,
            "failure": 1,
            "traitSuccess": 0,
            "traitFailure": 0,
            "totalEntitiesCount": 0,
            "matchedEntitiesCount": 0,
            "totalTraitsCount": 0,
            "matchedTraitsCount": 0,
            "failedUtteranceCount": 1,
            "failedEntitiesCount": 0
        },
        "fileUrl": "https://hostname/api/getMediaStream/media/f-c6071507-a603-59ed-8d2b-5ec344be3696.csv?e=1689769306&n=2501205681&s=IkxtTVdUdTd4c3J6WTFaSWp0MUZHWHlaNjR5bEdmaEJPczNrdU42RHB6TWc9Ig$$&clientfilename=test1-26-06-23.csv&batchtesting=true"
    }
}

```

When the test execution is in progress \

```json
{
    "_id": "tr-beaadxxb-xxxx-xxxe-axfb-xxxxcxbexdxa",
    "streamId": "st-xxxxxxxx-cxxd-xcaf-xxax-dxxxxxxffxdxb",
    "testSuiteId": "ts-deaxxxxc-xxxx-xxxe-axbx-bxxcxxxxfxxx",
    "status": "running",
    "utterance_count": 10,
    "result": {
        "_id": "tr-beaadxxb-xxxx-xxxe-axfb-xxxxcxbexdxa",
        "isPartialFailure": false,
        "status": "running",
        "testSuiteId": "ts-deaxxxxc-xxxx-xxxe-axbx-bxxcxxxxfxxx",
        "triggeredBy": "u-xxbdxecd-xxdx-xxex-xxxd-xxdxxxxdxxea",
        "streamId": "st-xxxxxxxx-cxxd-xcaf-xxax-dxxxxxxffxdxb",
        "botLanguage": "en",
        "runType": "inDevelopment",
        "utterance_count": 10,
        "startTime": "2021-01-07T17:05:34.509Z",
        "__v": 0
    },
    "totalUtterances": 10,
    "utterance_ran": 5,
    "percentage": 50
}

```
