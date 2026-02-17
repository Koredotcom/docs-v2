--8<-- "includes/automationai-api-back-link.md"

# Get Extractions History – KG

To get the KG extractions’ history as a list.


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
   <td><code>https://{{host}}/api/public/stream/{{streamId}}/qna/history?language=en</code>
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
   <td><strong>language</strong>
   </td>
   <td>The Bot language which is identified by the language acronym. For example, <em>en</em> for English and <em>de</em> for German. The user can set the default language of the bot.
   </td>
   <td>Required
   </td>
  </tr>
</table>



## Sample Request


```json
curl -X GET \
  https://{{host}}/api/public/stream/{{streamId}}/qna/history?language=en \
  -H 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
  -H 'content-type: application/json'
```


 


## Body Parameters

No body parameters are passed.

 


## Sample Response


```json
{
    "metaqnas": [
        {
            "_id": "ke-bxxxxxxb-bxx2-5xx8-bxx8-14xxxxxxxxxx",
            "editable": false,
            "status": "success",
            "isVisited": false,
            "fileId": "5e0xxxxxx8b",
            "name": "KG_QuestionExtraction",
            "extractionType": "faq",
            "streamId": "st-xxxxx-xxx-xxx-xxx-xxxxx",
            "createdBy": "u-xxxxx-xxx-xxx-xxx-xxxxx",
            "language": "en",
            "fileName": "KGCSVBotQuestionExtraction.csv",
            "createdOn": "2020-01-03T06:17:50.416Z",
            "modifiedOn": "2020-01-03T06:17:56.932Z",
            "__v": 0,
            "qnaAddedCount": 0,
            "qnaExtractedCount": 113,
            "qnaCount": 113
        }
    ]
}
```