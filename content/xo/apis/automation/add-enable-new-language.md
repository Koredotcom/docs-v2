--8<-- "includes/automationai-api-back-link.md"

# Add and Enable a New Language API

To initiate the addition and enablement of a new language for an AI Agent.

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
   <td><code>https://{{host}}/api/{{version-Id}}/public/bot/{{botId}}/language</code>
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

<li>App Builder: Language Configuration

<li>Admin Console: Language Settings > Language Management
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
  </tr>
  <tr>
   <td>host
   </td>
   <td>The environment URL. For example, <code>https://platform.kore.ai</code>.
   </td>
  </tr>
</table>

## Sample Request


```json
curl -X POST 'https://{{host}}/api/{{version-Id}}/public/bot/{{botId}}/language' \
--header 'Content-Type: application/json' \
--header 'auth: YOUR_JWT_ACCESS_TOKEN' \
--data '{
"enableLanguage" : "",
"langDefinitionMode": {
"baseLanguage": "language_code",
"type": "advancedConfig/fileUpload",
"fileId":"",
"preferredData":{
"training": true/false,
"faqs": true/false,
"ontology": true/false,
"smalltalk": true/false,
"traits": true/false
}
},
"multiLingualConfigurations":{
"nluLanguage": "language_code",
"inputTranslation": true/false,
"responseTranslation": true/false
}
}'
```

## Body Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>SUB-PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>MANDATE</strong>
   </td>
  </tr>
  <tr>
   <td>enableLanguage
   </td>
   <td>
   </td>
   <td>The language to be enabled based on the language code.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>langDefinitionMode
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>langDefinitionMode.baseLanguage
   </td>
   <td>Base language of the AI Agent.
   </td>
   <td>Optional
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>langDefinitionMode.type
   </td>
   <td>Type of language enablement <strong>Basic</strong>, <strong>advancedConfig</strong>, or <strong>fileUpload</strong>.
   </td>
   <td>Optional
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>langDefinitionMode.fileId
   </td>
   <td>The <strong>file ID</strong> for handling the file upload if the <strong>fileUpload</strong> language enablement is selected.
   </td>
   <td>Optional
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>langDefinitionMode.preferredData
   </td>
   <td>If the <strong>advancedConfig</strong> language enablement is selected, the True/False configuration setting for “training”, “faqs”, “ontology”, “Smalltalk” and “traits” keys should be included.
   </td>
   <td>Optional
   </td>
  </tr>
  <tr>
   <td>multiLingualConfigurations
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>multiLingualConfigurations.nluLanguage
   </td>
   <td>Refers to the language code of the A language.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>multiLingualConfigurations.inputTranslation
   </td>
   <td>Refers to True/False setting for the input language translation to English.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>multiLingualConfigurations.responseTranslation
   </td>
   <td>Refers to the True/False setting for the response language translation to English.
   </td>
   <td>Required
   </td>
  </tr>
</table>



## Sample Response

For success case:

```json
[{
"message": "Enabled language successfully",
"configurationDetails": {
"dialogs":3,
"alerts":0,
"actions":0,
"knowledgetTasks":0,
"smallTalk":1,
"panels":0,
"widgets":0
}
}]
```