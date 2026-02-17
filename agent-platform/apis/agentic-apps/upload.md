[:octicons-arrow-left-24: Back to API List](../../apis/list-of-apis.md)

# Managing Uploads

## Upload API

Uploads a file as an attachment to a session. 

<table>
  <tr>
   <td>Method
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td>Endpoint
   </td>
   <td>/apps/&lt;AppID>/environments/&lt;EnvName>/attachments/upload
   </td>
  </tr>
  <tr>
   <td>Content-type 
   </td>
   <td>multipart/form-data
   </td>
  </tr>
  <tr>
   <td>Authorization Header
   </td>
   <td>x-api-key: &lt;API-KEY>
   </td>
  </tr>
</table>

### Path Parameters


<table>
  <tr>
   <td><strong>Fields</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>AppID
   </td>
   <td>Unique Identifier for the app. 
   </td>
  </tr>
  <tr>
   <td>EnvName
   </td>
   <td>Name of the environment to be used for the agent. 
   </td>
  </tr>
</table>



### Request Parameters (form-data)


<table>
  <tr>
   <td><strong>Fields</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Mandatory</strong>
   </td>
  </tr>
  <tr>
   <td>File 
   </td>
   <td>The actual file to be uploaded.
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>userReference
   </td>
   <td>User reference 
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>uploadType
   </td>
   <td>Specifies the context of the upload. Set this to ‘runtime’.
   </td>
   <td>Yes
   </td>
  </tr>
</table>


**Sample Request**

**Example Curl Command**

```json
curl --location 'http://{host}/api/v2/apps/{appId}/environments/{envName}/attachments/upload' \
--header 'x-api-key: your-x-api-key \
--form 'file=@"/path/to/file/file.pdf"' \
--form 'userReference="your-session-reference”' \
--form 'uploadType="runtime"'
```

### Response 

Each uploaded file is assigned a unique file ID, which is returned in response along with other details of the file, such as name, path, size, extension, etc. 

**Sample response**

```
{
  "fileId": "f-a84242a9-9d9f-4590-8622-59cd93c7f7c3",
  "fileName": "myfile.pdf",
  "filePath": "AppFileSystem/f-a84242a9-9d9f-4590-8622-59cd93c7f7c3.pdf",
  "fileSize": 62996,
  "mimeType": "application/pdf",
  "extension": "pdf",
  "uploadedAt": "2025-04-23T12:05:45.782Z"
}
```

Refer to [this to learn more about supported file types and file size limits](../../ai-agents/agentic-apps/settings/app-configurations.md). 

## Delete File

Deletes an uploaded file. 


<table>
  <tr>
   <td>Method
   </td>
   <td>DELETE
   </td>
  </tr>
  <tr>
   <td>Endpoint
   </td>
   <td>/apps/&lt;AppID>/environments/&lt;EnvName>/attachments/<fileId>
   </td>
  </tr>
  <tr>
   <td>Content-type 
   </td>
   <td>multipart/form-data
   </td>
  </tr>
  <tr>
   <td>Authorization Header
   </td>
   <td>x-api-key: <API-KEY>
   </td>
  </tr>
</table>


### Path Parameters


<table>
  <tr>
   <td>Fields
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>AppID
   </td>
   <td>Unique Identifier for the app. 
   </td>
  </tr>
  <tr>
   <td>EnvName
   </td>
   <td>Name of the environment to be used for the agent. 
   </td>
  </tr>
  <tr>
   <td>fileId
   </td>
   <td>Unique identifier of the file to be deleted. 
   </td>
  </tr>
</table>


### Request Parameters


<table>
  <tr>
   <td>Fields
   </td>
   <td>Description
   </td>
   <td>Mandatory
   </td>
  </tr>
  <tr>
   <td>sessionId
   </td>
   <td>Unique Identifier of the session
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>sessionReference
   </td>
   <td>Reference associated with the session
   </td>
   <td>No
   </td>
  </tr>
</table>



#### Sample Request

```
{
  // Provide session ID or reference to uniquely identify the session. 
  "sessionId": "string", // Enum: "sessionId" | "sessionReference" 
  "sessionReference": "string" 
}

```



#### Sample Response

```
{
  "message": "file deleted successfully",
  "success": "true",
  "fileId": "f-a84242a9-9d9f-4590-8622-59cd93c7f7c3"
}
```
