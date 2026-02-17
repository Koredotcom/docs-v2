[:octicons-arrow-left-24: Back to API List](../../apis/list-of-apis.md)

# Runs API

Provides API endpoints to execute the Agentic application within a session.

## Execute a Run

Sends input to the Agentic app within a specific session and retrieves the response. This endpoint supports multiple execution modes - **synchronous, asynchronous, and streaming.**


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
   <td>/apps/&lt;AppID>/environments/&lt;EnvName>/runs/execute
   </td>
  </tr>
  <tr>
   <td><strong>Content-type</strong>
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
   <td></strong>Fields</strong>
   </td>
   <td><strong>Description
   </td></strong>
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

**sessionIdentity**- Required

An array of objects, each with a type and value, used to identify or create sessions and manage user session mappings. The three supported identifier types are: The objects can be of three types:

1. userReference (highest priority)
2. sessionReference
3. sessionIdentity(lowest priority)

[Refer to this for a detailed description.](overview.md#session-resolution-process)

<hr/>

**input**- Required

An array of user inputs to the Agentic application. This field can be used to pass the user query or the tool details when a tool is invoked directly. 

When passing the user input, provide the following fields.

* type: Set this to "text". 
* content: the actual user input string

When using this API to invoke a tool directly, use the following to pass the tool's details.

*  type:  Set this to "tool_input".
*  content: Use this object to pass the tool parameters.

For example:
  ```json
  "type": "tool_input",
  "content": {
      "employeeId": "KI01642"
   }
  ```

<hr/>

**debug**- Optional

Controls debug info in the response, useful for troubleshooting, understanding agent behavior, and inspecting intermediate reasoning or function execution. The debug objects contain the following fields:

* Enable - set this to true to enable debug information in the response.
* debugMode - this can take the following values:
    * function-call - Includes details about the function(s) triggered by the agent
    * thoughts - Provides internal reasoning traces of the agent.
    * all - Includes both function-call and thoughts

*Currently, only thoughts are supported.*

<hr/>

**stream**- Optional

Enable or disable streaming of the agent's response. This object contains two fields:

* enable - set it to true to enable message streaming. 
* streamMode - set the streaming type. It can take the following values:
    * **tokens**: The response is sent token by token as the agent generates it. 
    * **messages**:  Each complete thought or output message is sent as a separate event as soon as it's available.
    * custom: Allows for custom streaming behavior

If debug mode is enabled and set to thoughts, irrespective of streamMode, thoughts are always sent as complete messages. 

<hr/>

**isAsync**- Optional

Indicates whether the API should execute asynchronously.

* false (default): Executes synchronously and returns the result immediately.
* true: Executes asynchronously. If the callbackURL is provided, the response is shared on the URL else this API returns a <code>runId</code> that can be used to retrieve the status or result later.

<hr/>

**callbackUrl**- Optional 

The endpoint to which the asynchronous response should be sent. Must be a valid, publicly accessible URL.

* If provided, the platform makes an HTTP POST request to the `callbackURL` with the result payload after the processing is complete.
* If omitted in an async request, you must use the `runId` to fetch the result manually.

<hr/>

**callbackToken**- Optional

An authentication token included when sending the asynchronous response to the specified `callbackUrl`. This ensures secure delivery of results to the given endpoint. 

If `callbackToken` is provided, it's included in the HTTP request headers to the `callbackURL` using the standard Bearer token authentication format:

```
`Authorization: Bearer <callbackToken>`
```

<hr/>

**attachments**- Optional 

Allows users to associate files with the session. This object takes the following fields:

* enable (String): Set to "true" to attach files to the session 
* includeFiles (Array): List of file IDs to include `as contextual information in the session.`
* excludeFiles (Array): List of file IDs to exclude from the session. 

Once a file is added to the includeFiles list, it remains associated with the session for its duration unless it's explicitly removed by listing it in excludeFiles.

<hr/>

**metadata**- Optional

Allows users to pass metadata information. This data is stored in sessionMeta and remains available for the duration of the session. 

<hr/>

**invoke**- Optional 

This field allows direct invocation of a specific agent or tool within the application, bypassing the orchestrator. It is particularly useful when the client knows exactly which agent or tool should handle the request. 

The invoke field accepts an array of task objects. Each task object must include:

* type: 
    * Set this to "agent" to specify the task as an agent invocation. 
    * Set this to “tool” for invoking a specific tool. 
* name: The name of the agent or tool you want to invoke.

When the type is set to `agent`, provide the following additional fields. 

* toolType: This field is used only for tools. It can take one of the following values - `workflow`, `code` or `mcp`.
* agentName : Name of the agent with which the tool is associated.

Example - To invoke a ‘PolicyFinder’ Agent in the app, use the following. 

```json
"invoke": {
    "tasks": [
      {
        "type": "agent",
        "name": "PolicyFinder"
      }
    ]
  }
```

Example: To directly invoke the leaveBalanceById tool in a specific agent, set the invoke field as shown below. Additionally, send the tool's input parameters in the `input` field.

```json
"invoke": {
        "tasks": [
            {
                "type": "tool",
                "name": "leaveBalanceById",
                "toolType": "code",
                "agentName": "LeaveBalanceCalculator"
            }
        ]
  }
```

!!!note
    The first agent/tool in the tasks array is used for handling the query. If more than one agent/tool is given in this array, the first one is used, and the others are ignored. 


<hr/>

**source**- Optional

Identifies the system from which the API request is initiated. This field enables better analytics, monitoring, and observability by indicating what triggered the agentic app execution. This field is available as a filter in the session logs.

If not provided, the platform automatically assigns the default value.

Recommended Values:

* AP: This is the default value. Used when the `source` field is not explicitly passed.
* AIS-AA: AI for Service - Agent Assist
* AIS-QM: AI for Service - Quality Module
* AIS-CC: AI for Service - Contact Center
* AP-PG: Agent Platform - Playground
* AP-ES: Agent Platform - Evaluation Studio
* AIW: AI for Work
* AIP: AI for Process
* MP: Agent Platform - Marketplace

<hr/>

#### Sample Request

```json
{
  "sessionIdentity": [
    {
      "type": "sessionReference",//Mandatory for associating the Session
      "value": "s-a302e3c6-308b-4a0a-9a5f-a01a5846fae1" //update Your value 
    },
    {
      "type": "userReference", // Mandatory for associating with the user
      "value": "usr_1a2b3c4d5e" //update your value 
    }
  ],
  "input": [
    {
      "type": "text",
      "content": "Order me a thick crust medium-sized pizza with extra cheese "   // Change the content as required 
    }
  ],
  "debug": {
    "enable": false // Setting to false for no debug response.
  },
  "stream": {
    "enable": false, // Setting to false for non-streaming response.
    "streamMode": "tokens" 
  },
  "metadata": { //
   "userProfile": { //custom data
     "userId": "user123",
     "preferences": {...}
   },
   "chatHistory": [...],
   "sourceSystem": "MyApp"
   },
  "isAsync": false // Setting to false for synchronous execution
}
```



### Response

Returns the agent's response to the query along with the session details. 


<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>messageId
   </td>
   <td>Unique identifier for the response message
   </td>
  </tr>
  <tr>
   <td>output
   </td>
   <td>Array of agent responses. Each object includes: 
<p>
- type: "text" 
<p>
- content: agent's response
   </td>
  </tr>
  <tr>
  <td>Artifacts</td>
  <td>Array of responses from the tools in the order of execution. For example, if tool 1 was executed followed by tool 2, artifacts[0] will contain the response from tool 1 and artifacts[1] will contain the response from tool 2. 
  <p>
  Note that the response from a tool is updated in this array only if the ‘Include tool response in artifacts’ flag is enabled in the corresponding tool. Learn More.
  </td> 
</tr>
  <tr>
   <td>sessionInfo
   </td>
   <td>Object containing session metadata such as: 
<p>
- status: current session state 
<p>
- conversationState: e.g., COMPLETED 
<p>
- userReference, sessionReference, userId, sessionId, runId, appId
   </td>
  </tr>
</table>



#### Sample Response


```json
{
  "messageId": "msg-915be88a-0fe3-401a-856c-8aec9fa5f641",
  "output": [
    {
      "type": "text",
      "content": "Could you please specify the exact crust type you would like for your thick crust pizza?"
    }
  ],
  "sessionInfo": {
    "status": "idle",
    "userReference": "u-1",
    "sessionReference": "s-1",
    "userId": "u-2e4cbb36-c9a0-52df-8800-b1ab60e137f2",
    "sessionId": "s-262c98f8-3543-4f1c-a4e7-d96219f10bdc",
    "runId": "r-ebe5eec7-f12f-467d-b0f8-32e1ef16008d",
    "appId": "aa-2d38a297-6c74-4ec4-bf72-3b3ee5d326f2",
    "attachments": []
  }
}
```


If debug is enabled, the response has additional information as shown below. 


```json
{
  "messageId": "msg-ae69b37d-b699-4b2c-b2a6-643778d93607",
  "output": [
    {
      "type": "text",
      "content": "Could you please specify the exact crust type you would like for your thick crust pizza?"
    }
  ],
  "debug": [
    {
      "type": "thought",
      "content": "The user wants to order a pizza with specific customization, including size, crust type, and additional toppings.",
      "source": "Orchestrator"
    },
    {
      "type": "thought",
      "content": "The user has requested a thick crust medium-sized pizza with extra cheese, and I need to place the order and calculate the billing.",
      "source": "Orchestrator"
    }
  ],
  "sessionInfo": {
    "status": "idle",
    "userReference": "u-1",
    "sessionReference": "s-2",
    "userId": "u-2e4cbb36-c9a0-52df-8800-b1ab60e137f2",
    "sessionId": "s-58787f2d-47f9-4ac4-a0d6-422a51e24d65",
    "runId": "r-78498c8a-da68-4864-b2c6-7301de50507d",
    "appId": "aa-2d38a297-6c74-4ec4-bf72-3b3ee5d326f2",
    "attachments": []
  }
}
```

#### Sample Response when OAuth authorization is pending

**Note**: If any tool used by an agent requires OAuth authorization, the API response for the initial request (when a new session starts) will include a special event of type `IDP_Redirect`. This event contains a URL that the user must visit to complete the authorization. If the required authorization is not completed, the associated tools will return an error upon invocation.

```
{
  "events": [
    {
      "type": "IDP_Redirect",
      "content": {
        "auth_profiles": [
          {
            "url": "https://{host}/r/396c6351567xxxxx4648357955",
            "idpName": "Google",
            "isAuthorized": false,
            "sso_type": "oauth2"
          }
        ]
      }
    }
  ]
}
```

### Specific Config Samples

#### Synchronous Execution

* Waits for the agent to respond. Best for real-time interactions.
* **Key configuration:**

    ```
     "isAsync": false

    ```


**Sample Request**: 


```
{
 "sessionIdentity": [
   {
     "type": "sessionReference",
     "value": "s_c234234mf4x"
   }
 ],
 "input": [
   {
     "type": "text",
     "content": "Hi!"
   } 
 ],
 "stream": {
   "enable": false,
   "streamMode": "tokens"
 },
 "isAsync": false
}
```

#### Asynchronous Execution

* **Key configuration fields:**
    * “isAsync”: true
    * callbackUrl(optional): The endpoint to which the response must be sent. 
    * callbackToken(optional): Auth token to be passed for authentication on the callbackUrl. 
* Initiates an agent run. 
* If `callbackUrl` is provided, the response is sent to that endpoint upon completion. The platform makes an HTTP POST request to the `callbackURL` with the result payload.
* If `callbackUrl` is not provided, the API responds immediately with a `runID`, which can be used later to query the execution status and response.
* If `callbackToken` is provided, it is included in the HTTP request headers to the `callbackURL` using the standard Bearer token authentication format:

    `Authorization: Bearer <callbackToken>` 



**Example - Sample Request without Callback URL**


```json
{
 "sessionIdentity": [
   {
     "type": "sessionReference",
     "value": "xxxx"
   }
 ],
 "input": [
   {
     "type": "text",
     "content": "Place an order for a thin crust pizza with bell peppers."
   } 
 ],
 "stream": {
   "enable": false,
   "streamMode": "tokens"
 },
 "isAsync": true
}
```


**Response**

A runId is returned in response. Use this ID to check the status of the run. Refer to the Run Status API to learn more. 


```json
{
"status": "processing",
"runId": "r-e4c42e99-39ce-44d6-8ab3-0a3de20c432f",
"message": "Request is being processed asynchronously"
}
```


**Example - Sample Request with Callback URL**

```json
{
 "sessionIdentity": [
   {
     "type": "sessionReference",
     "value": "xxxx"
   }
 ],
 "input": [
   {
     "type": "text",
     "content": "Place an order for a thin crust pizza with bell peppers."
   } 
 ],
 "stream": {
   "enable": false,
   "streamMode": "tokens"
 },
 "isAsync": true,
 "callbackUrl": "https://example.org/api/response",
 "callbackToken": "my-token"


}
```

#### Streaming Execution



* Enables streaming of response from the agent. Returns tokens or messages as the agent responds. 
* Key Configuration fields: 
* `stream.enable`: Set to "true" to enable streaming
* `stream.streamMode`:
    * "messages" - Sends complete messages as they're generated
    * "tokens" - Streams final results as tokens.
    * "custom" - For customized streaming behavior

**Series of Responses (streamMode: “messages”)**

*Event 1*


```
{
  "eventIndex": 0,
  "messageId": "msg-d13eab67-6942-488a-9546-49859b41f088",
  "sessionInfo": {
    "status": "busy",
    "userReference": "u-1",
    "sessionReference": "s-1",
    "userId": "u-2e4cbb36-c9a0-52df-8800-b1ab60e137f2",
    "sessionId": "s-262c98f8-3543-4f1c-a4e7-d96219f10bdc",
    "runId": "r-e4c8d69e-faa6-48dd-a306-c5c2b2c624e9",
    "appId": "aa-2d38a297-6c74-4ec4-bf72-3b3ee5d326f2"
  }
}
```


*Event 2*


```
{
  "eventIndex": 1,
  "messageId": "msg-4b0305d3-de5b-44a2-8ff9-126412ca70de",
  "output": [
    {
      "type": "text",
      "content": "Your thick crust medium-sized pizza with extra cheese has been successfully ordered. The total cost for this pizza is $5. If there's anything else you'd like to add or inquire about, please let me know!"
    }
  ],
  "sessionInfo": {
    "runId": "r-e4c8d69e-faa6-48dd-a306-c5c2b2c624e9"
  }
}
```


*Event 3*


```
{
  "eventIndex": 2,
  "messageId": "msg-1521e406-4abe-4038-abaa-bf54992f22f6",
  "sessionInfo": {
    "status": "idle",
    "userReference": "u-1",
    "sessionReference": "s-1",
    "userId": "u-2e4cbb36-c9a0-52df-8800-b1ab60e137f2",
    "sessionId": "s-262c98f8-3543-4f1c-a4e7-d96219f10bdc",
    "runId": "r-e4c8d69e-faa6-48dd-a306-c5c2b2c624e9",
    "appId": "aa-2d38a297-6c74-4ec4-bf72-3b3ee5d326f2",
    "output": [
      {
        "type": "text",
        "content": "Your thick crust medium-sized pizza with extra cheese has been successfully ordered. The total cost for this pizza is $5. If there's anything else you'd like to add or inquire about, please let me know!"
      }
    ]
  },
  "isLastEvent": true
}
```

#### Thought Streaming

Thought Streaming allows the agent to return the intermediate reasoning steps (called “thoughts”) while it's working and not just the final answer. This helps with transparency and debugging.

Thought Streaming can be enabled with the help of **debug and streaming** config fields. 

Key Configurations:


```
"debug": {
  "enable": true,
  "debugMode": "thoughts" // Used to get thoughts in the response. 
}
```



<table>
  <tr>
   <td><strong>debugMode</strong>
   </td>
   <td><strong>Streaming Enabled?</strong>
   </td>
   <td><strong>Behavior</strong>
   </td>
  </tr>
  <tr>
   <td><code>thoughts</code>
   </td>
   <td>No
   </td>
   <td>Thoughts are received as part of the response as an array. 
   </td>
  </tr>
  <tr>
   <td><code>thoughts</code>
   </td>
   <td>Yes
   </td>
   <td>The thoughts and responses are sent back as separate events 
   </td>
  </tr>
</table>


**Example - Thoughts enabled, streaming disabled.**

Different reasoning thoughts are part of an array, **debug,** in the response. Thoughts can be identified by the **type** fields of the object as shown below. 


```
{
  "messageId": "msg-123",
  "output": [
    {
      "type": "text",
      "content": "Final answer"
    }
  ],
  "debug": [
    {
      "type": "thought",
      "content": "Analyzing the query...",
    },
    {
      "type": "thought",
      "content": "Processing data...",
    }
  ],
  "sessionInfo": {}
}
```


**Example: Thoughts enabled, streaming enabled**

The thoughts and responses are sent back as separate events at each step of the processing. 

**Initial Event**: - provides the message ID and session details. 


```
{
  "messageId": "msg-123",
  "sessionInfo": { /* Session details */ }
}
```


**Thought Events**: Contains the thoughts as part of debug array. 


```
{
  "messageId": "msg-123",
  "debug": [
    {
      "type": "thought",
      "content": "Going to Agent A",
      "source": "AgentName" // Optional source identifier
    }
  ],
  "sessionInfo": { "runId": "run-123" }
}
```


**Output Token Events** (when streamMode = "token") - Contains the output as part of output array. 


```
{ 
  "messageId": "msg-123",
  "output": [
    {
      "type": "text",
      "content": "Streamed tokens",
    }
  ]
}
```


**Final Event**: Contains session details. 


```
{
  "messageId": "msg-123",
  "sessionInfo": { /* Updated session details */ }
}
```



#### Adding Attachments to a session

You can attach a file to a session and use it in the current execution. This is a two-step process:



1. **Upload the file**. 

    Use the [File Upload API](upload.md) to upload the desired files. Uploaded files remain available only for the duration of the session.

2. **Include the File in Execution**

    Add the file details while invoking the execute API in the attachments field. You can use the include and exclude arrays to specify the list of files to be added to the current run of the execute API. 


!!!note

    * Files are **not automatically included** in the current execution after upload. They must be explicitly listed in the includeFiles array.
    * The **isActive** field in the response indicates whether a file was used in the current run:
        
        * true → File was included in the execution.
        * false → File was excluded. 
    * Once a file is added to the **includeFiles** list, it remains associated with the **session** for its duration unless it is explicitly removed by listing it in **excludeFiles**.

**Sample Request**


```
{
  "sessionIdentity": [
    {
      "type": "sessionReference",
      "value": "your-session-reference" 
    }
  ],
  "input": [
    {
      "type": "text",
      "content": "your text here"
    }
  ],
  "debug": {
    "enable": "false"
  },
  "stream": {
    "enable": "false",
    "streamMode": "tokens" 
  },
  "Attachments": {
     "enable": true,
     "includeFiles": "[f-123]", //Array of fileId's to include in the session.
     "excludeFiles": "[f-456]" //Array of fileId's to exclude from session.
  }
  "isAsync": false
}
```


Sample Response


```
{
   "messageId": "msg-04662062-9f63-4854-9b1d-16a9a97b2db6",
   "output": [
       {
           "type": "text",
           "content": "Your Response"
       }
   ],
   "sessionInfo": {
       "status": "idle",
       "conversationState": "COMPLETED",
       "userReference": "your-user-reference",
       "sessionReference": "your-session-reference",
       "userId": "your-user-id",
       "sessionId": "current-session-id",
       "runId": "run-id",
       "appId": "your-app-id"
       "attachments": [
           {
              "fileId": "f-123",
              "isActive": true,
              "fileName": "file1.pdf",
              "mimetype": "application/pdf"
           },
           {
              "fileId": "f-456",
              "isActive": false,
              "fileName": "file2.pdf",
              "mimetype": "application/pdf",
              "Metadata": {
                  "tokens": 8192,
                  "error": "The combined file content exceeds 80% of the token limit allowed by the {your-llm-model} model (max {maxTokens} tokens)" //Error if file extracted text exceeds the max token
                          } 
           }
       ]
   }
}
```
#### Invoking an Agent



* Use the invoke field to specify the agent to be invoked. 

**Sample Request**

```
curl --location 'https://{domain}/api/v2/apps/aa-0959e994-xxxx-xxxx-9217-45653a69772a/environments/draft/runs/execute' \
--header 'x-api-key: <your-api-key>' \
--header 'Content-Type: application/json' \
--data '{
    "sessionIdentity": [
        {
            "type": "sessionReference",
            "value": "test-session-value"
        }
    ],
    "invoke": {
        "tasks": [ // invoke a code tool - check_balance_tool
            {
                "type": "tool",
                "name": "check_balance_tool",
                "toolType": "code",
                "agentName" : "Balance_agent"
            }
        ]
    },
    "input": [ //input parameters of check_balance_tool
        {
            "type": "tool_input",
            "content": {
                "accountId": "123"
            }
        }
    ],
    "debug": {
        "enable": true
    },
    "stream": {
        "enable": false
    }
}'
```



**Sample Response**


```
{
    "messageId": "msg-c954db38-xxxx-xxxx-b15d-2b81d91adb3a",
    "output": [
        {
            "type": "text",
            "content": "Your balance is 100$, {\"success\":true,\"data\":{\"key\":\"draft\",\"content\":{\"b\":1765271238787},\"createdAt\":1765271238996,\"updatedAt\":1765271238996,\"retention\":{\"ttl\":2592000,\"expiresAt\":\"2026-01-08T09:07:18.997Z\",\"isPermanent\":false}}}"
        }
    ],
    "sessionInfo": {
        "status": "idle",
        "userReference": "test-session-dev5_01",
        "sessionReference": "test-session-Dev5_01",
        "userId": "u-798fd752-f5e7-5ffb-8924-b03241431686",
        "sessionId": "s-4272145c-14f7-407f-a6db-26d006f7a2ba",
        "runId": "r-c04a09b0-dbf8-411b-8a26-82931b8f83de",
        "appId": "aa-0959e994-48c8-45b1-9217-45653a69772a",
        "envId": "env-edfa5f46-2dbd-459f-9b51-c941f28de05c",
        "envName": "draft",
        "attachments": []
    }
}
```

#### Invoking a Tool

* Use the invoke field to specify that it is for invoking a tool.
* Use the inputs field to specify the parameters of the tool. 
* The tool has read/write access to session-scoped memory.

**Sample Request**


```
curl --location 'https://{domain}/api/v2/apps/aa-0959e994-xxxx-xxxx-9217-45653a69772a/environments/draft/runs/execute' \
--header 'x-api-key: <your-api-key>' \
--header 'Content-Type: application/json' \
--data '{
    "sessionIdentity": [
        {
            "type": "sessionReference",
            "value": "test-session-value"
        }
    ],
    "invoke": {
        "tasks": [ // invoke a code tool - check_balance_tool
            {
                "type": "tool",
                "name": "check_balance_tool",
                "toolType": "code",
                "agentName" : "Balance_agent"
            }
        ]
    },
    "input": [ //input parameters of check_balance_tool
        {
            "type": "tool_input",
            "content": {
                "accountId": "123"
            }
        }
    ],
    "debug": {
        "enable": true
    },
    "stream": {
        "enable": false
    }
}'
```


**Sample Response**

```
{
    "messageId": "msg-c954db38-xxxx-xxxx-b15d-2b81d91adb3a",
    "output": [
        {
            "type": "text",
            "content": "Your balance is 100$, {\"success\":true,\"data\":{\"key\":\"draft\",\"content\":{\"b\":1765271238787},\"createdAt\":1765271238996,\"updatedAt\":1765271238996,\"retention\":{\"ttl\":2592000,\"expiresAt\":\"2026-01-08T09:07:18.997Z\",\"isPermanent\":false}}}"
        }
    ],
    "sessionInfo": {
        "status": "idle",
        "userReference": "test-session-dev5_01",
        "sessionReference": "test-session-Dev5_01",
        "userId": "u-798fd752-f5e7-5ffb-8924-b03241431686",
        "sessionId": "s-4272145c-14f7-407f-a6db-26d006f7a2ba",
        "runId": "r-c04a09b0-dbf8-411b-8a26-82931b8f83de",
        "appId": "aa-0959e994-48c8-45b1-9217-45653a69772a",
        "envId": "env-edfa5f46-2dbd-459f-9b51-c941f28de05c",
        "envName": "draft",
        "attachments": []
    }
}
```


### Points to Notes

1. When implementing thought streaming, ensure proper error handling for cases where the connection might be interrupted.
2.  The **source** field in debug thoughts indicates the origin of each thought (e.g., agent, orchestrator), helping pinpoint issues during debugging and trace execution flow across components.
3. When using streamMode: "tokens", be aware that only the final output content will be streamed token by token, while debug thoughts will still come as complete messages.
4. The sessionInfo object contains important tracking information, including the status of the conversation and run identifiers.
5. For high-frequency thought streams, implement client-side buffering to ensure a smooth user experience and reduce rendering or processing lag.


## Find Run Status

Returns the status and response of a run. It is useful for asynchronous runs. 


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
   <td>/apps/&lt;AppID>/environments/&lt;EnvName>/runs/&lt;runId>/status
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
   <td>Name of the environment to be used for the agent. 
   </td>
  </tr>
  <tr>
   <td>RunID
   </td>
   <td>Unique identifier of the run 
   </td>
  </tr>
</table>



### Request Parameters


<table>
  <tr>
   <td><strong>Fields</strong>
   </td>
   <td><strong>Description</strong>
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

Refer to this for a detailed description.
<p>
This is useful for verifying the context and permissions on the run. 
</ol>
   </td>
  </tr>
</table>


#### Sample Request


```
{
 "sessionIdentity": [
  {
     "type": "sessionReference",
     "value": "your-session-reference" // update your value 
   }]
}
```

### Response 

Returns the current status and details of the run. The important fields include:



* **run.status**: Describes the current status of the run. It can have the following values:
    * success - The run completed successfully without any errors.
    * failed - The run encountered an error and did not complete successfully.
    * Pending - The run has been created but has not started yet.
    * Running -  The run is currently in progress.
* **run.kwargs.output**: Contains the final result after a successful run. 

#### Sample Response 

```json
{
  "run": {
    "_id": "r-e4c42e99-39ce-44d6-8ab3-0a3de20c432f",
    "sessionId": "s-a0e95d6c-c806-4577-bf37-154b026edacf",
    "status": "success",
    "metadata": {
      "isInternalCall": false,
      "runtimeContext": {
        "userId": "u-2e4cbb36-c9a0-52df-8800-b1ab60e137f2",
        "userReference": "u-1",
        "sessionId": "s-a0e95d6c-c806-4577-bf37-154b026edacf",
        "sessionReference": "s-3",
        "accountId": "67bd783757932e0013cad873",
        "envId": "env-960dca42-9a4a-42f1-9ba9-dc35539c3965",
        "appId": "aa-2d38a297-6c74-4ec4-bf72-3b3ee5d326f2",
        "appvId": "av-a0493ab3-91f7-4e12-8c61-be647d282290",
        "streamId": "st-769dd97d-f973-5f61-be10-d9e4a788e5c6",
        "asyncConfig": {
          "isAsync": true,
          "noTimeout": false,
          "post_url": "https://example.org/posturl",
          "app_token": "xxxxxxxx",
          "asyncTimeout": 180,
          "isInternalCall": false
        }
      }
    },
    "kwargs": {
      "input": [
        {
          "type": "text",
          "content": "Order me a thick crust medium-sized pizza with extra cheese "
        }
      ],
      "debug": {
        "debugMode": "thoughts",
        "enable": true
      },
      "stream": {
        "streamMode": "messages",
        "enable": false
      },
      "output": [
        {
          "type": "text",
          "content": "To complete your order for a medium-sized thick crust pizza with extra cheese, please let us know if you'd like any additional toppings and your preferred payment method."
        }
      ]
    },
    "multitaskStrategy": "reject",
    "createdAt": "2025-05-16T07:02:34.847Z",
    "updatedAt": "2025-05-16T07:02:42.263Z",
    "__v": 0
  }
}
```

!!!note
    * Check the output only if the status is ‘success’. The output field may contain error details if the status field is otherwise. 
    * If status is "pending" or "running", poll again after a suitable delay.
