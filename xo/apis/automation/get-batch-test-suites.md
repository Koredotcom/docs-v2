--8<-- "includes/automationai-api-back-link.md"

# Get Batch Test Suites API

To get the list of Batch Test Suites available for a bot.


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
   <td><code>https://{host}/api/public/bot/{botId}/testsuite?skip={skip}&limit={limit}</code>
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

<li>App Builder: Batch Tests Management

<li>Admin Console: Batch Tests Management
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
   <td><strong>BotID</strong>
   </td>
   <td>Bot ID or Stream ID. You can access it from the General Settings page of the bot.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>skip</strong>
   </td>
   <td>Number of records to skip before fetching.
   </td>
   <td>Optional
   </td>
  </tr>
  <tr>
   <td><strong>limit</strong>
   </td>
   <td>The number of records to fetch.
   </td>
   <td>Optional
   </td>
  </tr>
</table>

## Sample Request

```json
curl -X GET \
  https://{host}/api/public/bot/{botId}/testsuite?skip={skip}&limit={limit} \
  --header 'auth: {YOUR_JWT_ACCESS_TOKEN}' \
  --header 'bot-language: {language-code}'
```

## Body Parameters

No body parameters are passed.

## Sample Response

```json
{
    "count": 36,
    "moreAvailable": true,
    "ts-2xxxxxxc-exx0-5fxx-bxx2-3xxxxxxxxxxf": {
        "testSuiteType": "custom",
        "name": "sdsa",
        "description": "dfgfd",
        "results": [
            {
                "_id": "ts-2xxxxxxc-exx0-5fxx-bxx2-3xxxxxxxxxxf",
                "version": "inDevelopment",
                "results": {
                    "TP": 0,
                    "TN": 0,
                    "FP": 0,
                    "FN": 0,
                    "success": 0,
                    "failure": 2,
                    "totalEntitiesCount": 0,
                    "matchedEntitiesCount": 0,
                    "failedUtteranceCount": 2,
                    "failedEntitiesCount": 0
                },
                "recall": "0.00",
                "precision": "0.00",
                "f1_score": "0.00"
            },
            {
                "_id": "tx-e1xxxxxx-8cxx-5xx4-8xx8-ecxxxxxxxxxd",
                "version": "inDevelopment",
                "results": {
                    "TP": 0,
                    "TN": 0,
                    "FP": 0,
                    "FN": 0,
                    "success": 0,
                    "failure": 2,
                    "totalEntitiesCount": 0,
                    "matchedEntitiesCount": 0,
                    "failedUtteranceCount": 2,
                    "failedEntitiesCount": 0
                },
                "recall": "0.00",
                "precision": "0.00",
                "f1_score": "0.00"
            },
            {
                "_id": "tx-0xxxxxx9-4xx9-5xxa-9xx5-c8xxxxxxxxxx",
                "version": "inDevelopment"
            },
            {
                "_id": "tx-a1xxxxxx-6xx3-5xx2-8xxa-35xxxxxxxxxx",
                "version": "inDevelopment",
                "results": {
                    "TP": 0,
                    "TN": 0,
                    "FP": 0,
                    "FN": 0,
                    "success": 0,
                    "failure": 2,
                    "totalEntitiesCount": 0,
                    "matchedEntitiesCount": 0,
                    "failedUtteranceCount": 2,
                    "failedEntitiesCount": 0
                },
                "recall": "0.00",
                "precision": "0.00",
                "f1_score": "0.00"
            },
            {
                "_id": "tx-1axxxxxx-0axx-54xx-8xxc-8fxxxxxxxxb",
                "version": "inDevelopment",
                "results": {
                    "TP": 0,
                    "TN": 0,
                    "FP": 0,
                    "FN": 0,
                    "success": 0,
                    "failure": 2,
                    "totalEntitiesCount": 0,
                    "matchedEntitiesCount": 0,
                    "failedUtteranceCount": 2,
                    "failedEntitiesCount": 0
                },
                "recall": "0.00",
                "precision": "0.00",
                "f1_score": "0.00"
            },
            {
                "_id": "tx-8xxxxxxa-3xx2-5xxe-98xx-83xxxxxxxxxx",
                "version": "inDevelopment"
            },
            {
                "_id": "tx-2bxxxxxx-abxx-5xxb-9xx9-75xxxxxxxxxx",
                "version": "inDevelopment"
            },
            {
                "_id": "tx-7xxxxxx0-2xx5-5xx4-b3xx-8fxxxxxxxxxx",
                "version": "inDevelopment",
                "results": {
                    "TP": 1,
                    "TN": 0,
                    "FP": 0,
                    "FN": 1,
                    "success": 1,
                    "failure": 1,
                    "totalEntitiesCount": 0,
                    "matchedEntitiesCount": 0,
                    "failedUtteranceCount": 0,
                    "failedEntitiesCount": 0
                },
                "recall": "0.50",
                "precision": "1.00",
                "f1_score": "0.67"
            }
        ]
    },
    "Last100sentences": {
        "testSuiteType": "prebuilt",
        "results": [
            {
                "_id": "tx-dbxxxxxx-4xx5-5xx2-8xxc-baxxxxxxxxxx",
                "version": "inDevelopment",
                "results": {
                    "TP": 0,
                    "TN": 0,
                    "FP": 0,
                    "FN": 0,
                    "success": 0,
                    "failure": 3,
                    "totalEntitiesCount": 0,
                    "matchedEntitiesCount": 0,
                    "failedUtteranceCount": 3,
                    "failedEntitiesCount": 0
                },
                "recall": "0.00",
                "precision": "0.00",
                "f1_score": "0.00"
            },
            {
                "_id": "tx-8xxxxxx0-exxa-5xx6-8xx9-ddxxxxxxxxxx",
                "version": "inDevelopment",
                "results": {
                    "TP": 0,
                    "TN": 0,
                    "FP": 0,
                    "FN": 0,
                    "success": 0,
                    "failure": 3,
                    "totalEntitiesCount": 0,
                    "matchedEntitiesCount": 0,
                    "failedUtteranceCount": 3,
                    "failedEntitiesCount": 0
                },
                "recall": "0.00",
                "precision": "0.00",
                "f1_score": "0.00"
            },
            {
                "_id": "tx-7xxxxxx6-6xxa-5xxa-axx8-7xxxxxxxxxxa",
                "version": "inDevelopment",
                "results": {
                    "TP": 0,
                    "TN": 0,
                    "FP": 0,
                    "FN": 0,
                    "success": 0,
                    "failure": 3,
                    "totalEntitiesCount": 0,
                    "matchedEntitiesCount": 0,
                    "failedUtteranceCount": 3,
                    "failedEntitiesCount": 0
                },
                "recall": "0.00",
                "precision": "0.00",
                "f1_score": "0.00"
            },
            {
                "_id": "tx-2xxxxxx5-1exx-5xx4-8xx7-2xxxxxxxxxx4",
                "version": "inDevelopment",
                "results": {
                    "TP": 0,
                    "TN": 0,
                    "FP": 0,
                    "FN": 0,
                    "success": 0,
                    "failure": 3,
                    "totalEntitiesCount": 0,
                    "matchedEntitiesCount": 0,
                    "failedUtteranceCount": 3,
                    "failedEntitiesCount": 0
                },
                "recall": "0.00",
                "precision": "0.00",
                "f1_score": "0.00"
            },
            {
                "_id": "tx-4xxxxxx4-exx5-5xxf-8xx4-2xxxxxxxxxx9",
                "version": "inDevelopment",
                "results": {
                    "TP": 3,
                    "TN": 0,
                    "FP": 0,
                    "FN": 0,
                    "success": 3,
                    "failure": 0,
                    "totalEntitiesCount": 0,
                    "matchedEntitiesCount": 0,
                    "failedUtteranceCount": 0,
                    "failedEntitiesCount": 0
                },
                "recall": "1.00",
                "precision": "1.00",
                "f1_score": "1.00"
            },
            {
                "_id": "tx-0xxxxxxb-exx4-5xx9-bxx2-dxxxxxxxxxxa",
                "version": "inDevelopment",
                "results": {
                    "TP": 2,
                    "TN": 0,
                    "FP": 0,
                    "FN": 0,
                    "success": 2,
                    "failure": 0,
                    "totalEntitiesCount": 0,
                    "matchedEntitiesCount": 0,
                    "failedUtteranceCount": 0,
                    "failedEntitiesCount": 0
                },
                "recall": "1.00",
                "precision": "1.00",
                "f1_score": "1.00"
            }
        ]
    },
    "AllMlUtterances": {
        "testSuiteType": "prebuilt",
        "results": [
            {
                "_id": "tx-exxxxxx5-1xx7-59xx-8xxa-c6xxxxxxxxxx",
                "version": "inDevelopment"
            },
            {
                "_id": "tx-2xxxxxx9-1xx2-5xxc-axx0-a8xxxxxxxxxx",
                "version": "inDevelopment"
            },
            {
                "_id": "tx-1xxxxxx2-8xxc-5xx4-bxx9-7xxxxxxxxxx7",
                "version": "inDevelopment",
                "results": {
                    "TP": 2,
                    "TN": 0,
                    "FP": 0,
                    "FN": 0,
                    "success": 2,
                    "failure": 0,
                    "totalEntitiesCount": 0,
                    "matchedEntitiesCount": 0,
                    "failedUtteranceCount": 0,
                    "failedEntitiesCount": 0
                },
                "recall": "1.00",
                "precision": "1.00",
                "f1_score": "1.00"
            },
            {
                "_id": "tx-c1xxxxxx-fexx-5axx-8xx8-79xxxxxxxxxx",
                "version": "inDevelopment",
                "results": {
                    "TP": 2,
                    "TN": 0,
                    "FP": 0,
                    "FN": 0,
                    "success": 2,
                    "failure": 0,
                    "totalEntitiesCount": 0,
                    "matchedEntitiesCount": 0,
                    "failedUtteranceCount": 0,
                    "failedEntitiesCount": 0
                },
                "recall": "1.00",
                "precision": "1.00",
                "f1_score": "1.00"
            },
            {
                "_id": "tx-3xxxxxx6-9xx3-5xx9-8xxc-eexxxxxxxxxx",
                "version": "inDevelopment",
                "results": {
                    "TP": 2,
                    "TN": 0,
                    "FP": 0,
                    "FN": 0,
                    "success": 2,
                    "failure": 0,
                    "totalEntitiesCount": 0,
                    "matchedEntitiesCount": 0,
                    "failedUtteranceCount": 0,
                    "failedEntitiesCount": 0
                },
                "recall": "1.00",
                "precision": "1.00",
                "f1_score": "1.00"
            },
            {
                "_id": "tx-8exxxxxx-cbxx-5xxb-axx0-15xxxxxxxxxx",
                "version": "inDevelopment",
                "results": {
                    "TP": 2,
                    "TN": 0,
                    "FP": 0,
                    "FN": 0,
                    "success": 2,
                    "failure": 0,
                    "totalEntitiesCount": 0,
                    "matchedEntitiesCount": 0,
                    "failedUtteranceCount": 0,
                    "failedEntitiesCount": 0
                },
                "recall": "1.00",
                "precision": "1.00",
                "f1_score": "1.00"
            }
        ]
    }
}
```