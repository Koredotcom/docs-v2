--8<-- "includes/automationai-api-back-link.md"

# Upload File API

To upload the _botdefinition_, _botconfig_, and _botfunction_ files (if any) and the **bot** icon to the local server. You can also use this API to upload files for ingestion using Search AI. The API returns the file ID in response which is required in Import Bot API or Ingest Data API for further actions on the file.

!!! note
    To upload  botdefinition, botconfig, and botfunction files, you need to upload the files separately. You can upload a file by signing with any app created by the account administrator.

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
   <td><code>https://{{host}}/api/public/uploadfile</code>
   </td>
  </tr>
  <tr>
   <td><strong>Content Type</strong>
   </td>
   <td><code>multipart/form-data</code>
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

<li>App Builder: Not Applicable

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
   <td>host
   </td>
   <td>The environment URL. For example, <code>https://platform.kore.ai</code>
   </td>
   <td>Required
   </td>
  </tr>
</table>


 


## Sample Request

```json
curl -X POST 'https://{{host}}/api/public/uploadfile' \
  -H 'auth: YOUR_JWT_ACCESS_TOKEN' \
  -H 'content-type: multipart/form-data' \
  -F file=@botDefinition.json \
  -F fileContext=bulkImport \
  -F fileExtension=json
```



## Body Parameters

The following parameters are **Required** and passed based on the _file id_.

For Bot Definition File ID


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>file</strong>
   </td>
   <td>Upload the Botdefinition.json file.
   </td>
  </tr>
  <tr>
   <td><strong>fileContext</strong>
   </td>
   <td>bulkImport
   </td>
  </tr>
  <tr>
   <td><strong>fileExtension</strong>
   </td>
   <td>.json
   </td>
  </tr>
</table>


For Bot Config File ID


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>file</strong>
   </td>
   <td>Upload the Botconfig.json file.
   </td>
  </tr>
  <tr>
   <td><strong>fileContext</strong>
   </td>
   <td>bulkImport
   </td>
  </tr>
  <tr>
   <td><strong>fileExtension</strong>
   </td>
   <td>.json
   </td>
  </tr>
</table>


For Bot Function File ID


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>file</strong>
   </td>
   <td>Upload the Bot function file.
   </td>
  </tr>
  <tr>
   <td><strong>fileContext</strong>
   </td>
   <td>bulkImport
   </td>
  </tr>
  <tr>
   <td><strong>fileExtension</strong>
   </td>
   <td>.js
   </td>
  </tr>
</table>


For Bot icon File ID


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>file</strong>
   </td>
   <td>Upload the Bot icon file.
   </td>
  </tr>
  <tr>
   <td><strong>fileContext</strong>
   </td>
   <td>bulkImport
   </td>
  </tr>
  <tr>
   <td><strong>fileExtension</strong>
   </td>
   <td>.json
   </td>
  </tr>
</table>


For ML Utterances File ID


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>file</strong>
   </td>
   <td>Upload the ML Utterance file (.json or .csv)
   </td>
  </tr>
  <tr>
   <td><strong>fileContext</strong>
   </td>
   <td>bulkImport
   </td>
  </tr>
  <tr>
   <td><strong>fileExtension</strong>
   </td>
   <td>.json or .csv
   </td>
  </tr>
</table>

For Data Ingestion in Search AI


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td><strong>file</strong>
   </td>
   <td>Upload the file to be ingested into the Search AI application
   </td>
  </tr>
  <tr>
   <td><strong>fileContext</strong>
   </td>
   <td>findly
   </td>
  </tr>
  <tr>
   <td><strong>fileExtension</strong>
   </td>
   <td>pdf, docx, txt, pptx
   </td>
  </tr>
</table>

