[:octicons-arrow-left-24: Back to API List](../../apis/list-of-apis.md)

# Sessions API

Endpoints for managing conversational sessions with your Agentic App.


## Create a Session

Establishes a new conversation session for a specific user with the Agentic App. 

*Note: This is the starting point for any new interaction.*


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
   <td>/apps/&lt;AppID>/environments/&lt;EnvName>/sessions
   </td>
  </tr>
  <tr>
   <td>Content-type 
   </td>
   <td>application/json
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
</table>



### Request Parameters


<table>
  <tr>
   <td>Fields
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>sessionIdentity
   </td>
   <td>This is an array of objects with a <code>type</code> and <code>value</code> used to identify or create sessions and manage user session mappings. The three supported identifier types are: The objects can be of three types:
<ol>

<li>userReference (highest priority)</li>

<li>sessionReference</li>

<li>sessionIdentity(lowest priority)</li>

Refer to <a href="../overview/">this</a> for a detailed description.
</ol>
   </td>
  </tr>
  <tr>
  <td>source(optional)</td>
  <td><p>Identifies the system from which the API request is initiated. This field enables better analytics, monitoring, and observability by indicating what triggered the agentic app execution. This field is available as a filter in the session logs.</p>If not provided, the platform automatically assigns the default value.</p>
    <p>Recommended Values:</p>
    <ul>
    <li>AP: This is the default value. Used when the sourcefield isn't explicitly passed.</li>
    <li>AIS-AA: AI for Service - Agent Assist</li>
    <li>AIS-QM: AI for Service - Quality Module</li>
    <li>AIS-CC: AI for Service - Contact Center</li>
    <li>AP-PG: Agent Platform - Playground</li>
    <li>AP-ES: Agent Platform - Evaluation Studio</li>
    <li>AIW: AI for Work</li>
    <li>AIP: AI for Process</li>
    <li>MP: Agent Platform - Marketplace</li>

    </ul>
</td>
  </tr>
</table>



#### Sample Request


```
{
  "sessionIdentity": [
    {
      "type": "userReference",  
      "value": "usr_1a2b3c4d5e"  //Your UserReference Value
    }
  ]
}
```



### Response

Returns details of the newly created session, which are required for managing and continuing conversations. The response also includes document upload configuration and allowed file types, enabling clients to validate uploads in advance and prevent unnecessary failures. The fields in the response include:



* **session** - Metadata about the created session.
    * **sessionId** - A unique identifier for the session.
    * **Status** - Indicates the current state of the session. Possible values: `idle`, `busy`, `error`.
    * **sessionReference** - A unique reference string associated with the session for easier cross-request tracking.
    * **userReference** - Unique reference string for the user associated with the session.
    * **userId** - Internal system-generated identifier for the user.
    * **createdAt** - Timestamp indicating when the session was created.
* **allowedMimeTypes** - List of supported file formats for uploads.
* **fileUploadConfig** - File Upload rules configured for the app. These rules apply to both types of documents - uploaded for context extraction and for Metadata generation. The following fields are available in this field. 
    * **maxFileCount** - Max number of files that can be uploaded. 
    * **maxFileSize** - Max size of each file that can be uploaded. The value is in MBs.
    * **maxTokens** - Specifies the maximum allowed combined size of all uploaded files, measured in tokens. If the total token size exceeds this limit, only files that comply with the threshold are uploaded; files exceeding it will be rejected.


#### Sample Response 

```json
{
  "session": {
    "sessionId": "s-307d13e4-669c-42c0-8fec-a7653cb97627",
    "sessionReference": "s-123",
    "userReference": "s-123",
    "status": "idle",
    "userId": "u-0cc7b4f5-1b49-5c4c-958f-7d3a3263af2c",
    "createdAt": "2025-06-27T11:48:58.892Z"
  },
   "allowedMimeTypes": [
    "pdf",
    "docx",
    "doc",
    "txt",
    "json",
    "csv",
    "htm",
    "mle",
    "ppt",
    "xls",
    "gif",
    "png",
    "jpg",
    "jpeg",
    "html",
    "rtf",
    "bmp",
    "xlsx",
    "pptx"
  ],
  "fileUploadConfig": {
    "enabled": true,
    "maxFileCount": 2,
    "maxFileSize": 25,
    "maxTokens": 790000
  }
}
```
**Note**: When a new session is initiated, and the application requires permissions for OAuth authorization from the user, the API response includes a special event of type `IDP_Redirect`. This event provides a URL that the user must visit to complete the authorization process. If the required authorization isn't completed, the associated tools will return an error upon invocation.

```json
{
  "messageId": "msg-260f4d3c-5b8c-4056-af97-11317fc28c8d",
  "events": [
    {
      "type": "IDP_Redirect",
      "content": {
        "auth_profiles": [
          {
            "url": "https://{host}/r/396c63515671xxxxxxxxxx7955",
            "idpName": "Google",
            "isAuthorized": false,
            "sso_type": "oauth2"
          }
        ]
      }
    }
  ],
  "sessionInfo": {
    "status": "idle",
    "userReference": "s-b8987503-696b-4111-a006-49c0cbcf0fb9",
    "sessionReference": "s-b8987503-696b-4111-a006-49c0cbcf0fb9",
    "userId": "u-f5e5e830-70d4-53d6-8034-86bfa765c04a",
    "sessionId": "s-54f40bda-1505-4f9e-b38e-88d39ea36d58",
    "runId": "r-41ad20e0-6295-4f0e-9b04-e51875356107",
    "appId": "aa-c31cccce-d0bf-4db5-a177-7ff45941c2d8",
    "attachments": []
  },
  "allowedMimeTypes": [ "pdf","docx","doc","txt","json","csv","htm","mle","ppt","xls","gif","png","jpg","jpeg","html","rtf","bmp","xlsx","pptx"],
  "fileUploadConfig": {
    "enabled": true,
    "maxFileCount": 2,
    "maxFileSize": 10,
    "maxTokens": 100000
  }
}
```



## List Sessions

Lists sessions for the selected app and environment. Supports optional filters such as session ID, user reference, and date range.


<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td>GET
   </td>
  </tr>
   <tr>
   <td><strong>Base URL</strong>
   </td>
   <td>https://&lt;agent-platform-env>.&lt;domain>.com/aaa/api/v1/
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td>/apps/&lt;AppID>/environments/&lt;EnvName>/sessions/list
   </td>
  </tr>
  <tr>
   <td><strong>Content-type </strong>
   </td>
   <td>application/json
   </td>
  </tr>
  <tr>
   <td><strong>Authorization Header</strong>
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
   <td>The name of the environment in which the application will run.
   </td>
  </tr>
</table>



### Query Parameters


<table>
  <tr>
   <td><strong>Fields</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td>Mandatory
   </td>
  </tr>
  <tr>
   <td>startDate</td>
   <td> Specifies the beginning of the date range for which sessions should be retrieved.
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>endDate </td>
   <td>Defines the end of the date range for sessions retrieval. </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>offset
   </td>
   <td>Indicates the number of records to skip before starting to return results. This field is primarily used for pagination. </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>limit </td>
   <td>Specifies the maximum number of records to return in a single response.  </td>
   <td>No
   </td>
  </tr>
</table>



#### Sample Request


```
{
  "sessionId": "string",               
  "userReference": "string",           
  "date": {                           
    "start": "string",
    "end": "string"
  },
  "filters": [                        // For future use
    {
      "key": "string",
      "value": "string",
      "operator": "string"
    }
  ],
  "offset": "number"
}
```



### Response Parameters


<table>
  <tr>
   <td><strong>Fields</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>sessions
   </td>
   <td>Details of the sessions
   </td>
  </tr>
  <tr>
   <td>pagination
   </td>
   <td>Details related to pagination include the total number of matching sessions, the Index of the last item returned in this response, and whether more sessions are available beyond the current result.
   </td>
  </tr>
</table>



#### Sample Response


```
{
  "sessions": [
    {
      "sessionId": "string",
      "sessionReference": "string",
      "status": "string",
      "userId": "string",
      "createdAt": "string"  // ISO timestamp
    }
  ],
  "pagination": {
    "totalCount": "number",
    "endIndex": "number",
    "hasMore": "boolean"
  }
}
```

## Get Session

Fetches the details of a given session. You must provide either a *sessionId* or a *sessionReference* to uniquely identify the session.


<table>
  <tr>
   <td>Method
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Endpoint
   </td>
   <td>/apps/&lt;AppID>/environments/&lt;EnvName>/sessions?sessionId={sessionId}
<p>
/apps/&lt;AppID>/environments/&lt;EnvName>/sessions?sessionReference={sessionReference}
   </td>
  </tr>
  <tr>
   <td>Content-type 
   </td>
   <td>application/json
   </td>
  </tr>
  <tr>
   <td>Authorization Header
   </td>
   <td>x-api-key:&lt;API-KEY>
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
   <td>The name of the environment in which the application will run.
   </td>
  </tr>
</table>



### Query Parameters


<table>
  <tr>
   <td>Fields
   </td>
   <td>Description
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>sessionId
   </td>
   <td>Unique Identifier for the session. 
   </td>
   <td>Optional(One of two is required )
   </td>
  </tr>
  <tr>
   <td>sessionReference
   </td>
   <td>The reference associated with the session 
   </td>
   <td>Optional (one of the two is required)
   </td>
  </tr>
</table>


!!!note
  Either sessionId or sessionReference must be provided to identify the session. 


### Sample Response


```json
{ "session": 
  {
    "sessionId": "string",
    "sessionReference": "string",
    "status": "string",
    "userId": "string",
    "appId": "string",
    "createdAt": "string",
    "events": "string[]",
    "attachments": [
      {
        "fileId": "string",
        "filename": "string",
        "mimetype": "string",
        "isActive": "string",
      },
    ]
  }
}
```




## Terminate Session

Terminates a given session. It also deletes the associated session-specific memory data. 


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
   <td>/apps/&lt;AppID>/environments/&lt;EnvName>/sessions/terminate
   </td>
  </tr>
  <tr>
   <td>Content-type 
   </td>
   <td>application/json
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
   <td>The name of the environment in which the application will run.
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
   <td>sessionIdentity
   </td>
   <td>Provide the sessionReference or sessionId to uniquely identify the session to be terminated.
   </td>
   <td>Yes
   </td>
  </tr>
</table>



#### Sample Request


```json
{
   "sessionIdentity": [
    {
      "type": "string",  // ["sessionReference", "sessionId"]
      "value": "s-1232123"
    }
  ]
}
```



#### Sample Response

```json
{
  "status": "terminated",
  "userReference": "string",
  "sessionReference": "string",
  "userId": "string",
  "sessionId": "string",
  "appId": "string",
  "attachments": [
    {
      "fileId": "string",
      "fileName": "string",
      "fileType": "string",
    },
  ]
}
```
