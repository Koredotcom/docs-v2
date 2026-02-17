--8<-- "includes/automationai-api-back-link.md"

# Add Questions from Extract – KG

To add specific questions to the Knowledge graph.


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
   <td><code>https://{{host}}/api/public/bot/{{botId}}/faqs/bulk?language=en</code>
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
   <td><em>Bot ID</em> or <em>Stream ID</em> can be accessed under <strong>General Settings</strong> page.
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
   <td>The agent language which is identified by the language acronym. For example, <em>en</em> for English and <em>de</em> for German. The user can set the default language of the bot.
   </td>
   <td>Required
   </td>
  </tr>
</table>


 


## Sample Request


```json
curl --location 'https://platform.kore.ai/api/public/bot/botID/faqs/bulk?language=en' \
--header 'auth: {YOUR_JWT_ACCESS_TOKEN}' \
--header 'content-type: application/json' \
--data-raw '{
"faqs": [
{
"questionPayload": {
    "question": "question", //question - GET EXTRACTION QUESTION
    "tagsPayload": []
},
"answerPayload": [{
    "text": "", //answer - GET EXTRACTION QUESTION
    "type": "basic",
    "channel": "default"
}],
"knowledgeTaskId": "645e0aab1ee65252a433d457", // "_id" - GET KNOWLEDGE TASKS
"subQuestions": [],
"responseType": "message",
"subAnswers": [],
"streamId": "botId",
"parent": "f1324935-341d-5b0e-8551-c705a2eb58b9", //"parent" - GET KNOWLEDGE TASKS
"leafterm": "Botname", 
"qsId": "qna-f6014fd0-f8e8-5cb1-b952-cf9e57091ffc" // "_id" -  GET EXTRACTION QUESTION
```

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
   <td><strong>faqs</strong>
   </td>
   <td>An array with the following parameter values:
<ul>

<li>questionPayload 
<ul>
 
<li>question
</li> 
</ul>

<li>answerPayload 
<ul>
 
<li>text
 
<li>type
 
<li>channel
</li> 
</ul>

<li>knowledgeTaskId

<li>subQuestions

<li>responseType

<li>subAnswers

<li>streamId

<li>parent

<li>leafterm

<li>qsId
</li>
</ul>
   </td>
   <td>Required
   </td>
  </tr>
</table>



### Sample Response


```json
{ 
      "status": "success"
}
