--8<-- "includes/automationai-api-back-link.md"

# Import Batch Test Suite API

To import the test cases from a given Test Suite file.


<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td><code>https://{host}/api/public/bot/{botId}/testsuite/import</code>
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
   <td>The environment URL. For example, <code>https://platform.kore.ai</code>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>BotID</strong>
   </td>
   <td>The <em>Bot ID</em> or <em>Stream ID</em> that can be accessed under <strong>General Settings</strong> on the App Builder.
   </td>
   <td>Required
   </td>
  </tr>
</table>

## Sample Request


```json
curl --location --request POST \
     'https://{host}/api/public/stream/{streamId}/testsuite/import' \
      --header 'auth: {YOUR_JWT_ACCESS_TOKEN}' \
      --header 'bot-language: {language-code}' \
      --header 'Content-Type: application/json' \
      --data-raw '{
         "delimiter": ",",
         "description": "fcgfddfg",
         "fileName": "5ff70b47a664d31999d9202c",
         "fileType": "json",
         "importType": "update",
         "name": "hgf",
         "engine": "dgpt"
        }'
```
!!! note

    * If [engine = "regression" (or) empty] or engine is not provided, it will execute for ML Batch Testing.

    * If engine is set to "dgpt", it will execute for Dialog GPT Batch Testing.





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
   <td>fileName
   </td>
   <td>File containing the Batch Test suite details.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>fileType
   </td>
   <td>JSON.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>importType
   </td>
   <td>new/update
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>delimiter
   </td>
   <td>Field delimiter in the file
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>description
   </td>
   <td>Test suite description
   </td>
   <td>Required
   </td>
  </tr>
</table>

## Sample Response


```json
{
    "_id": "ts-8304802f-6f85-5f67-8964-de04446c1c93",
    "name": "hgf",
    "description": "fcgfddfg",
    "streamId": "st-15864388-c33d-5caf-86a6-d17951ff3d5b",
    "language": "en",
    "fileId": "5ff70b47a664d31999d9202c",
    "createdBy": "u-49bd0ecd-18d1-53e1-988d-84d3004d79ea",
    "createdOn": "2021-01-05T17:43:43.927Z",
    "modifiedOn": "2021-01-07T13:48:14.169Z",
    "__v": 0,
    "fileName": "sampleBatchtesting (2) (copy) (1).json"
}
```
