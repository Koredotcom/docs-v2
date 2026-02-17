[:octicons-arrow-left-24: Back to API List](../../apis/list-of-apis.md)

# Create Agentic App API

Provides an endpoint to create a new Agentic App. 


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
   <td>https://&lt;agent-platform-env>.&lt;domain>.ai/api/public/apps/createApp  </td>
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



### Additional Request Headers


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
   <td>accountid
   </td>
   <td>Account Id to be used for app creation.
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>userid
   </td>
   <td>Unique user Id to be used for app creation.
   </td>
   <td>Yes
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
   <td>name
   </td>
   <td>Unique name of the app to be created
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>description
   </td>
   <td>Brief description of the purpose of the app. 
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>appIcon
   </td>
   <td>Details of the icon to be used for the app. Use the following fields to describe the app icon. If this field isn't provided, a random icon is used for the app. 
<ul>

<li>name (required, string): Identifier for the logo to be used as the app icon; allowed values are “logo1-logo10.”</li>

<li>type(required, string): Must always be set to "logo."</li>

<li>color(required, string): Hexadecimal color code for the icon. Example: #RRGGBB. </li>
</ul>
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
</table>



## Sample Request

**Example Curl Command**


```curl
curl --location 'https://&lt;agent-platform-env>.&lt;domain>.ai/api/public/apps/createApp' \ 
--header 'Content-Type: application/json' \ 
--header 'x-api-key: your-api-key' \ 
</code>--header 'accountid: axxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx45' \ 
--header 'userid: uxxxxxxxxxxxxxxxxxxx' \ 
--header 'authorization: bearer xxxxxxxxxxxxxxxxxxx' \ 
--data '{ \
    "name": "Calendar Assistant", \
    "description": "Calendar Assistant app for calendar management." \
}'
```


## Response 

On successful creation of the app, response in the following format is received. 

**Sample response - Success (201)**

```json
{
  "success": true,
  "data": {
    "appId": "aa-xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "name": "Calendar Assistant",
    "description": "Calendar Assistant app for calendar management",
    "appIcon": {
      "name": "logo5",
      "type": "logo",
      "color": "#B2CCFF"
    },
    "status": "IN_DEVELOPMENT",
    "type": "Agentic",
    "accountId": "axxxxxxxxxxxxxx",
    "createdBy": {
      "id": "uxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      "emailId": "john@example.com"
    },
    "createdAt": "2025-08-18T06:58:21.313Z",
  },
  "meta": {
    "requestId": "req_12345678",
    "timestamp": "2025-08-18T06:58:21.313Z"
  }
}
```


**Sample response - Error**


```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": {} // Optional additional error details
  },
  "meta": {
    "requestId": "req_1234567890",
    "timestamp": "2025-08-18T06:58:21.313Z"
  }
}
```


Where ERROR_CODE is one of the following.


<table>
  <tr>
   <td>HTTP Status
   </td>
   <td>Error Code
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>400
   </td>
   <td>VALIDATION_ERROR
   </td>
   <td>One or more request parameters are invalid.
   </td>
  </tr>
  <tr>
   <td>400
   </td>
   <td>INVALID_APP_ICON
   </td>
   <td>App icon name, type, or color is invalid. When this error occurs, a random icon is added to the app. 
   </td>
  </tr>
  <tr>
   <td>400
   </td>
   <td>INVALID_NAME_FORMAT
   </td>
   <td>App name contains special characters or an invalid format.
   </td>
  </tr>
  <tr>
   <td>401
   </td>
   <td>UNAUTHORIZED
   </td>
   <td>API key is missing, invalid, or expired.
   </td>
  </tr>
  <tr>
   <td>401
   </td>
   <td>API_KEY_EXPIRED
   </td>
   <td>The provided API key is no longer valid.
   </td>
  </tr>
  <tr>
   <td>401
   </td>
   <td>API_KEY_REVOKED
   </td>
   <td>The API key has been manually revoked.
   </td>
  </tr>
  <!--
  <tr>
   <td>403
   </td>
   <td>INSUFFICIENT_SCOPE
   </td>
   <td>The API key does not have the required scope
   </td>
  </tr>
  -->
  <tr>
   <td>403
   </td>
   <td>ACCOUNT_ACCESS_DENIED
   </td>
   <td>The user does not have access to the account. 
   </td>
  </tr>
  <tr>
   <td>403
   </td>
   <td>USER_PERMISSION_DENIED
   </td>
   <td>User does not have permission to create apps.
   </td>
  </tr>
  <tr>
   <td>409
   </td>
   <td>RESOURCE_CONFLICT
   </td>
   <td>An app with this name already exists in the workspace.
   </td>
  </tr>
  <tr>
   <td>500
   </td>
   <td>INTERNAL_ERROR
   </td>
   <td>Unexpected server error during processing.
   </td>
  </tr>
  <tr>
   <td>503
   </td>
   <td>SERVICE_UNAVAILABLE
   </td>
   <td>The API service is temporarily down for maintenance.
   </td>
  </tr>
</table>
