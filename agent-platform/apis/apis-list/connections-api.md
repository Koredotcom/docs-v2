[:octicons-arrow-left-24: Back to API List](../../apis/list-of-apis.md)

# External Model Connection APIs

Use the Connections API to programmatically manage external model connections for OpenAI, Azure OpenAI, Anthropic, custom API providers, and other integrations.

**Prerequisites**

Before using these APIs, ensure your API App has the following scopes enabled:

* **View Connections** – Required for viewing connection details
* **Manage Connections** – Required for creating and updating connections

### Base URL

```
https://{host}/api/public
```

### Common Request Headers

<table>
  <tr>
   <td><strong>Header</strong>
   </td>
   <td><strong>Required</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><code>x-api-key</code>
   </td>
   <td>Yes
   </td>
   <td>API key for authentication
   </td>
  </tr>
  <tr>
   <td><code>Content-Type</code>
   </td>
   <td>Yes
   </td>
   <td><code>application/json</code>
   </td>
  </tr>
</table>

## API List

| API | Description | Method | Endpoint |
| --- | ----------- | ------ | -------- |
| [List All Connections](#list-all-connections) | Retrieves all configured connections | GET | `/connections` |
| [Get Connection by ID](#get-connection-by-id) | Retrieves a specific connection | GET | `/connections/{connectionId}` |
| [Create Connection](#create-connection) | Creates a new connection | POST | `/connections` |
| [Update Connection](#update-connection) | Updates an existing connection | PATCH | `/connections/{connectionId}` |

### List All Connections

Retrieves a list of all configured connections with optional filtering.


<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td><strong>Endpoint</strong>
   </td>
  </tr>
  <tr>
   <td>GET
   </td>
   <td><code>https://{{host}}/api/public/connections</code>
   </td>
  </tr>
</table>

#### Query Parameters

<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Required</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><code>provider</code>
   </td>
   <td>No
   </td>
   <td>String
   </td>
   <td>Filter by provider. Accepted values: <code>Open AI</code>, <code>Anthropic</code>, <code>Azure Open AI</code>, <code>API</code>
   </td>
  </tr>
  <tr>
   <td><code>status</code>
   </td>
   <td>No
   </td>
   <td>String
   </td>
   <td>Filter by status. Accepted values: <code>ACTIVE</code>, <code>INACTIVE</code>
   </td>
  </tr>
  <tr>
   <td><code>limit</code>
   </td>
   <td>No
   </td>
   <td>Integer
   </td>
   <td>Maximum number of results to return
   </td>
  </tr>
</table>

#### Sample Request

```
curl --location 'https://{{host}}/api/public/connections?limit=10' \
--header 'x-api-key: {{apiKey}}` \
--header 'Content-Type: application/json'
```


#### Sample Response

```
{

  "connections": [
    {
      "connectionId": "cn-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "connectionName": "OpenAI GPT-4o",
      "provider": "Open AI",
      "model": "gpt-4o",
      "status": "ACTIVE",
      "createdOn": "2024-01-15T10:30:00.000Z",
      "modifiedOn": "2024-01-15T10:30:00.000Z"
    }
  ],
  "total": 1
}
```

---


### Get Connection by ID

Retrieves the details of a specific connection using its unique identifier.


<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td><strong>Endpoint</strong>
   </td>
  </tr>
  <tr>
   <td>GET
   </td>
   <td><code>https://{{host}}/api/public/connections/{connectionId}</code>
   </td>
  </tr>
</table>


#### Path Parameters


<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Required</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><code>connectionId</code>
   </td>
   <td>Yes
   </td>
   <td>String
   </td>
   <td>The unique identifier of the connection
   </td>
  </tr>
</table>



#### Sample Request

```
curl --location 'https://{{host}}/api/public/connections/{{connectionId}}` \
--header 'x-api-key: {{apiKey}}' \
--header 'Content-Type: application/json'
```

#### Sample Response

```
{
  "connectionId": "cn-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "connectionName": "OpenAI GPT-4o",
  "provider": "Open AI",
  "model": "gpt-4o",
  "status": "ACTIVE",
  "fields": {
    "API_KEY": "sk-***************"
  },
  "createdOn": "2024-01-15T10:30:00.000Z",
  "modifiedOn": "2024-01-15T10:30:00.000Z"
}
```

---


### Create Connection

Creates a new connection to an external model provider. Supports creation of Custom API, OpenAI, Azure OpenAI, Anthropic, and other external model connections.


<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td><strong>Endpoint</strong>
   </td>
  </tr>
  <tr>
   <td>POST
   </td>
   <td><code>https://{{host}}/api/public/connections</code>
   </td>
  </tr>
</table>


**Body Parameters**


<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Required</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><code>provider</code>
   </td>
   <td>Yes
   </td>
   <td>String
   </td>
   <td>The provider type. Accepted values: <code>API</code>, <code>Open AI</code>, <code>Azure Open AI</code>, or <code>Anthropic</code>
   </td>
  </tr>
  <tr>
   <td><code>connectionName</code>
   </td>
   <td>Yes
   </td>
   <td>String
   </td>
   <td>Display name for the connection
   </td>
  </tr>
  <tr>
   <td><code>model</code>
   </td>
   <td>Conditional
   </td>
   <td>String
   </td>
   <td>Model identifier. Required for <code>Open AI</code>, <code>Azure Open AI</code>, and <code>Anthropic </code>providers
   </td>
  </tr>
  <tr>
   <td><code>modelType</code>
   </td>
   <td>Conditional
   </td>
   <td>String
   </td>
   <td>Set to <code>EASY_INTEGRATION</code> for <code>Azure Open AI</code> and <code>Anthropic</code> providers
   </td>
  </tr>
  <tr>
   <td><code>fields</code>
   </td>
   <td>Yes
   </td>
   <td>Object
   </td>
   <td>Provider-specific configuration fields
   </td>
  </tr>
</table>



#### Sample Request – Custom API Connection - Default Provider

```
curl --location '{{BASE_URL}}/api/public/connections' \
--header 'x-api-key: {{API_KEY}}' \
--header 'Content-Type: application/json' \
--data '{
  "model": "CustomProvider",
  "provider": "API",
  "connectionName": "CustomProvider",
  "promptVars": [
    {
      "name": "prompt",
      "displayName": "Prompt",
      "status": true,
      "dataType": "String",
      "elementType": "textBox",
      "defaultValue": "hlo",
      "required": true
    },
    {
      "name": "system_prompt",
      "displayName": "System prompt",
      "status": false,
      "dataType": "String",
      "elementType": "textBox",
      "defaultValue": "",
      "required": false
    },
    {
      "name": "examples",
      "displayName": "Examples",
      "status": false,
      "dataType": "String",
      "elementType": "textBox",
      "examples": true,
      "defaultValue": "",
      "required": false
    }
  ],
  "customVars": [],
  "endpointUrl": "{{LLM_API_URL}}",
  "headers": [
    {
      "key": "x-api-key",
      "value": "{{LLM_API_KEY}}"
    }
  ],
  "payload": {
    "model": "{{MODEL_NAME}}",
    "max_tokens": 1024,
    "messages": [
      {
        "role": "user",
        "content": "What is the weather like in San Francisco?"
      }
    ]
  },
  "outputPath": "content[0].text",
  "inputTokensPath": "usage.input_tokens",
  "outputTokensPath": "usage.output_tokens",
  "status": "FINALIZED",
  "isEnable": true
}'
```

**Custom API Fields (<code>provider: "API"</code>)**


<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Required</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><code>fields.BASE_URL</code>
   </td>
   <td>Yes
   </td>
   <td>String
   </td>
   <td>Base URL of the API endpoint
   </td>
  </tr>
  <tr>
   <td><code>fields.API_KEY</code>
   </td>
   <td>Yes
   </td>
   <td>String
   </td>
   <td>API key for authentication
   </td>
  </tr>
  <tr>
   <td><code>fields.MODEL_NAME</code>
   </td>
   <td>Yes
   </td>
   <td>String
   </td>
   <td>Model name
   </td>
  </tr>
  <tr>
   <td><code>LLM_API_URL</code>
   </td>
   <td>Yes
   </td>
   <td>String
   </td>
   <td>URL for the model endpoint
   </td>
  </tr>
  <tr>
   <td><code>LLM_API_KEY</code>
   </td>
   <td>Yes
   </td>
   <td>String
   </td>
   <td>API key of the model
   </td>
  </tr>
</table>

---

#### Sample Request – Custom API Connection - Existing Provider

```
curl --location '{{BASE_URL}}/api/public/connections' \
--header 'x-api-key: {{API_KEY}}' \
--header 'Content-Type: application/json' \
--data '{
  "model": "{{MODEL_NAME}}",
  "provider": "API",
  "connectionName": "Custom_Existingnew",
  "endpointUrl": "{{LLM_API_URL}}",
  "headers": [
    {
      "key": "x-api-key",
      "value": "{{LLM_API_KEY}}"
    }
  ],
  "status": "FINALIZED",
  "isEnable": true,
  "idp": "none",
  "bodyTab": "providerReferences",
  "mapProvider": "anthropicModel",
  "llmFeatures": {
    "toolCalling": false,
    "supportTools": true,
    "parallelToolCalling": true,
    "structuredResponse": true,
    "dataGeneration": false,
    "streaming": true
  },
  "IOMappings": [
    "textToText",
    "textToImage"
  ]
}'
```

**Custom API Fields (<code>provider: "API"</code>)**

<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Required</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><code>fields.BASE_URL</code>
   </td>
   <td>Yes
   </td>
   <td>String
   </td>
   <td>Base URL of the API endpoint
   </td>
  </tr>
  <tr>
   <td><code>fields.API_KEY</code>
   </td>
   <td>Yes
   </td>
   <td>String
   </td>
   <td>API key for authentication
   </td>
  </tr>
  <tr>
   <td><code>fields.MODEL_NAME</code>
   </td>
   <td>Yes
   </td>
   <td>String
   </td>
   <td>Model name
   </td>
  </tr>
  <tr>
   <td><code>LLM_API_URL</code>
   </td>
   <td>Yes
   </td>
   <td>String
   </td>
   <td>URL for the model endpoint
   </td>
  </tr>
  <tr>
   <td><code>LLM_API_KEY</code>
   </td>
   <td>Yes
   </td>
   <td>String
   </td>
   <td>API key of the model
   </td>
  </tr>
  <tr>
    <td><code>fields.IOMapping</code>
    </td>
    <td>Yes</td>
    <td>String</td>
    <td>Supported values: "textToText", "textToImage", "imageToText", and "audioToText"</td>
  </tr>
  <tr>
    <td><code>fields.mapProvider</code>
    </td>
    <td>Yes</td>
    <td>String</td>
    <td>Supported values: "anthropicModel", "geminiModel", and "openAIModel"</td>
  </tr>
</table>

---

#### Sample Request – OpenAI Connection

```
curl --location 'https://{{host}}/api/public/connections' \
--header 'x-api-key: {{apiKey}}' \
--header 'Content-Type: application/json' \
--data '{
  "provider": "Open AI",
  "connectionName": "OpenAI GPT-4o",
  "model": "gpt-4o",
  "fields": {
    "API_KEY": "sk-***************"
  }
}'
```


**OpenAI Field (<code>provider: "Open AI"</code>)**


<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Required</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><code>fields.API_KEY</code>
   </td>
   <td>Yes
   </td>
   <td>String
   </td>
   <td>Your OpenAI API key
   </td>
  </tr>
</table>



---


#### Sample Request – Azure OpenAI Connection

```
curl --location 'https://{{host}}/api/public/connections' \
--header 'x-api-key: {{apiKey}}' \
--header 'Content-Type: application/json' \
--data '{
  "connectionName": "Azure GPT-4",
  "provider": "Azure Open AI",
  "model": "GPT-4",
  "fields": {
    "API_KEY": "***************",
    "api_version": "2024-08-01-preview",
    "your_resource_name": "your-azure-resource",
    "deployment_id": "your-deployment-id"
  },
  "modelType": "EASY_INTEGRATION"
}'
```

**Azure OpenAI Fields (<code>provider: "Azure Open AI"</code>)**


<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Required</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><code>fields.API_KEY</code>
   </td>
   <td>Yes
   </td>
   <td>String
   </td>
   <td>Your Azure OpenAI API key
   </td>
  </tr>
  <tr>
   <td><code>fields.api_version</code>
   </td>
   <td>Yes
   </td>
   <td>String
   </td>
   <td>API version (for example, <code>2024-08-01-preview</code>)
   </td>
  </tr>
  <tr>
   <td><code>fields.your_resource_name</code>
   </td>
   <td>Yes
   </td>
   <td>String
   </td>
   <td>Your Azure resource name
   </td>
  </tr>
  <tr>
   <td><code>fields.deployment_id</code>
   </td>
   <td>Yes
   </td>
   <td>String
   </td>
   <td>Your deployment ID
   </td>
  </tr>
</table>



---


#### Sample Request – Anthropic Connection

```
curl --location 'https://{{host}}/api/public/connections' \
--header 'x-api-key: {{apiKey}}' \
--header 'Content-Type: application/json' \
--data '{
  "connectionName": "Anthropic Claude",
  "provider": "Anthropic",
  "model": "claude-3-5-haiku-20241022",
  "fields": {
    "API_KEY": "***************"
  },
  "modelType": "EASY_INTEGRATION"
}'
```


**Anthropic Field (<code>provider: "Anthropic"</code>)**


<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Required</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><code>fields.API_KEY</code>
   </td>
   <td>Yes
   </td>
   <td>String
   </td>
   <td>Your Anthropic API key
   </td>
  </tr>
</table>



---


#### Sample Response

```
{
  "connectionId": "cn-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
"fields": {
       "API_KEY": "sk***************MQAA"
   },
  "connectionName": "OpenAI GPT-4o",
  "provider": "Open AI",
  "model": "gpt-4o",
  "status": "ACTIVE",
  "createdOn": "2024-01-15T10:30:00.000Z"
}
```

---


### Update Connection

Updates the configuration of an existing connection. Supported only for external provider connections where `provider` is not `API`.


<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td><strong>Endpoint</strong>
   </td>
  </tr>
  <tr>
   <td>PATCH
   </td>
   <td><code>https://{{host}}/api/public/connections/{connectionId}</code>
   </td>
  </tr>
</table>


**Path Parameters**


<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Required</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><code>connectionId</code>
   </td>
   <td>Yes
   </td>
   <td>String
   </td>
   <td>The unique identifier of the connection
   </td>
  </tr>
</table>



#### Sample Request

```
curl --location --request PATCH 'https://{{host}}/api/public/connections/{{connectionId}}' \
--header 'x-api-key: {{apiKey}}' \
--header 'Content-Type: application/json' \
--data '{
  "fields": {
    "API_KEY": "sk-***************************"
  }
}'
```

**Body Parameters**


<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Required</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><code>fields</code>
   </td>
   <td>Yes
   </td>
   <td>Object
   </td>
   <td>Updated configuration field, API_KEY
   </td>
  </tr>
</table>


#### Sample Response

```
{
  "connectionId": "cn-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", 
"fields": {
       "API_KEY": "sk*****************MQAA"
   },
  "connectionName": "OpenAI GPT-4o",
  "provider": "Open AI",
  "model": "gpt-4o",
  "status": "ACTIVE",
  "modifiedOn": "2024-01-16T14:45:00.000Z"
}
```
