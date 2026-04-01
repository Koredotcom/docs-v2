# API Key Management 

The following APIs can be used to create, revoke, and manage API keys and scopes for an application in the Agent Platform.


### Prerequisites

Ensure the following before testing:

* Valid App ID
* Valid API Key (`apikey` header) with:
    * API Scope/Key = FULL permission


## Create API Key

Provides an endpoint to create a new API key with an existing scope.


### Specifications


<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Value</strong>
   </td>
  </tr>
  <tr>
   <td>Method
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td>Endpoint
   </td>
   <td><code>/apikeys/create</code>
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
   <td>apikey: <code>&lt;API-KEY></code>
   </td>
  </tr>
</table>



### Request Body


<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Required</strong>
   </td>
  </tr>
  <tr>
   <td>scope_name
   </td>
   <td>string
   </td>
   <td>Name of the existing scope
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>api_key_name
   </td>
   <td>string
   </td>
   <td>Name of the API key to be created
   </td>
   <td>Yes
   </td>
  </tr>
</table>



### Sample Request


```
{
 "scope_name": "Scope 2",
 "api_key_name": "Public 2"
}
```



### Success Response

Status: `201 Created`


```
{
 "success": true,
 "api_key": {
   "apikey": "generated-key",
   "key_id": "ak-xxxx",
   "key_name": "Public 2",
   "scope_name": "Scope 2"
 }
}
```



### Important Notes

* API key is returned only once. Store it securely.
* `scope_name` must already exist.
* `api_key_name` must be unique within the scope.


## Revoke API Key

Deletes an existing API key permanently.

<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Value</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td><strong>DELETE</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td><strong><code>/apikeys/{keyId}</code></strong>
   </td>
  </tr>
  <tr>
   <td><strong>Content-type</strong>
   </td>
   <td><strong>application/json</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Authorization Header</strong>
   </td>
   <td><strong>apikey: <code>&lt;API-KEY></code></strong>
   </td>
  </tr>
</table>

### Path Parameter

<table>
  <tr>
   <td>Field 
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>keyId
   </td>
   <td>API Key Id to be deleted.  (Example: <code>ak-a74c3b6b-cb71-48da-bee8-963c95de7abc</code>)
   </td>
  </tr>
</table>

### Success Response

Status: `200 OK`


```
{
 "success": true,
 "revoked": {
   "key_id": "ak-xxxx",
   "status": "revoked"
 }
}
```



### Important Notes


* This is a hard delete, and revoked keys can't be restored.
* Any ongoing requests using this key will fail immediately.

## Get Scope Details

Fetches scope details and permissions. Returns details for valid keys and fails if the key is invalid or not linked. 


### **Specification**


<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Value</strong>
   </td>
  </tr>
  <tr>
   <td>Method
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Endpoint
   </td>
   <td><code>/apps/{appId}/scopes/{scopeId}</code>
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
   <td>apikey: <code>&lt;API-KEY></code>
   </td>
  </tr>
</table>



### **Sample cURL**


```
curl --location 'https://<domain>/api/public/apps/{appId}/scopes/{scopeId}' \
--header 'apikey: <api-key>' \
--header 'Content-Type: application/json'
```



### **Sample Response**


```
{
  "success": true,
  "scope": {
    "scope_id": "as-3d2a9759-6461-xxxx-xxxx-29670d75c8f1",
    "scope_name": "AppScope",
    "description": "AppScope",
    "created_at": "2026-03-27T10:26:37.838Z",
    "permissions": {
      "APP_VIEW": "NO",
      "APP_EDIT": "NO",
      "APP_FULL": "NO",
      "AGENTS_VIEW": "NO",
      "AGENTS_EDIT": "NO",
      "AGENTS_FULL": "NO",
      "API_SCOPE_KEY_VIEW": "NO",
      "API_SCOPE_KEY_EDIT": "NO",
      "API_SCOPE_KEY_FULL": "NO",
      "RUN_API": "YES",
      "SESSION_CREATION": "YES",
      "DOCUMENT_UPLOAD": "YES",
      "SESSION_TERMINATION": "YES",
      "SESSIONS_LIST": "YES"
    }
  },
  "meta": {
    "requestId": "tr-44a2a3cc-6c60-41a5-9ee3-f1b7a5af47c2",
    "timestamp": "2026-03-30T13:08:51.257Z"
  }
}
```



## Update Scope Permission

Updates permissions for a given scope. The API key used to invoke this API must belong to the scope that is being updated. 

### Specification


<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Value</strong>
   </td>
  </tr>
  <tr>
   <td>Method
   </td>
   <td>PUT
   </td>
  </tr>
  <tr>
   <td>Endpoint
   </td>
   <td><code>/apps/{appId}/scopes/{scopeId}</code>
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
   <td>apikey: <code>&lt;API-KEY></code>
   </td>
  </tr>
</table>



### Request Body


<table>
  <tr>
   <td>Field 
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>permissions
   </td>
   <td>List of permissions to be updated for this scope. Refer to the Get Scope Details sample for the list of permissions. 
   </td>
  </tr>
</table>



### Sample cURL


```
curl --location --request PUT 'https://domain/api/public/apps/{appId}/scopes/{scopeId}' \
--header 'apikey: <api-key>' \
--header 'Content-Type: application/json' \
--data '{
 "permissions": {
   "API_SCOPE_KEY": "NO"
 }
}'
```
### Error Codes


<table>
  <tr>
   <td><strong>Status Code</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>401
   </td>
   <td>Missing or invalid API key
   </td>
  </tr>
  <tr>
   <td>403
   </td>
   <td>The API key does not have the required permissions
   </td>
  </tr>
  <tr>
   <td>404
   </td>
   <td>Scope or API key not found
   </td>
  </tr>
  <tr>
   <td>409
   </td>
   <td>Duplicate API key name
   </td>
  </tr>
  <tr>
   <td>429
   </td>
   <td>API key limit reached
   </td>
  </tr>
</table>

