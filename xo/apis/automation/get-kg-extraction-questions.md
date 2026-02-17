--8<-- "includes/automationai-api-back-link.md"

# Get Extraction Questions – KG

To get the list of KG Extraction Questions.


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
   <td><code>https://{{host}}/api/public/stream/{{streamId}}/qna/{{ExtractionId}}/questions?limit=&offset=</code>
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
   <td><code>auth: {{YOUR_JWT_ACCESS_TOKEN}}</code>
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
   <td><strong>streamId</strong>
   </td>
   <td>The <em>Stream ID</em> that can be accessed under <strong>General Settings</strong>
<p>
on the App Builder.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>ExtractionId</strong>
   </td>
   <td>The <em>ExtractionId</em> used to identify the extraction of the questions.
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
   <td><strong>limit</strong>
   </td>
   <td>The number of records to be fetched. The default count is 50.
   </td>
   <td>Optional
   </td>
  </tr>
  <tr>
   <td><strong>offset</strong>
   </td>
   <td>The number of records to be skipped. The default count is 0.
   </td>
   <td>Optional
   </td>
  </tr>
</table>


 


## Sample Request


```json
curl --location 'https://{{host}}/api/public/stream/{{streamId}}/qna/{{ExtractionId}}/questions?limit=20&offset=0' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
--header 'Content-Type: application/json'
```


## Body Parameters

No body parameters are passed.

 


## Sample Response


```json
{
    "extractions": [
        {
            "_id": "qna-64xxxxxx-axx5-5xx1-b2xx-exxxxxxxxxxa",
            "status": true,
            "question": "Am I going to be charged for this security feature?",
            "answer": "As of now, this service is free of charge and is a security measure for your online account safety.",
            "language": "en",
            "kEId": "ke-xxxxx-xxx-xxx-xxx-xxxxx",
            "createdBy": "u-xxxxx-xxx-xxxx-xxx-xxxxx",
            "streamId": "st-xxxxx-xxx-xxx-xxx-xxxxx",
            "createdOn": "2020-01-03T06:59:19.472Z",
            "modifiedOn": "2020-01-03T06:59:19.472Z",
            "__v": 0
        }
    ]
}
```