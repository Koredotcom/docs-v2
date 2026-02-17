# Agentic App APIs

The Agent Protocol API enables programmatic interaction with your agents, allowing you to manage conversational sessions, execute agent logic, retrieve responses, and track asynchronous tasks.

## Working with Agent Protocol APIs


### Base URL

All requests are made to the following base URL. 

```
https://<agent-platform-env>.<domain>.com/api/v2/
```


Replace `<agent-platform-env>` with your specific environment name and `<domain>` with your domain name.


### Authentication

All API requests must include an **API Key** in the **<code>Authorization</code>** header. You can generate the API key from the application. Refer to [this](../../ai-agents/agentic-apps/deployment/access-deployed-version.md#generate-the-api-key-for-app-authentication) to learn more about generating an API Key. 


```json
x-api-key: YOUR_API_KEY
```


Note: API keys are **app-specific**. They're not shared across accounts or workspaces. Ensure that you use the API key associated with the correct app when making requests. 

## Key Concepts and Terminologies

Below is a list of important terms used across the API documentation. 



* **App (AppId)**: Represents a specific app created for the Platform.
* **Environment (envName)**: Refers to a deployment environment for the app. The environment name must match the exact name as configured in the application. 
* **Session (sessionId)**: A unique ID representing a single conversation between an user and the agent. Sessions allow multi-turn conversations by preserving context.
* **Session Identity**: Used to reference a session or user. You can refer to the session in one or more of the following ways. 
    * sessionId: The unique, platform-generated ID for the session.
    * sessionReference: A custom session identifier. If not set, it defaults to the userReference. This can be the session identifier for the application from which the Agentic app API is invoked. 
    * userReference: A unique identifier from your system that ties all sessions to a specific user. This must be unique to your system. It's a crucial identifier. 

    Refer to [Session Resolutions steps](overview.md#session-resolution-process) for more information. 



* **Run (runId)**: Represents a single execution step within a session, typically triggered by user input and resulting in the agent’s response.

## Session Resolution Process

Each session is uniquely identified by **sessionId**. **sessionReference** is used as a secondary way to refer to the session. It can be particularly useful when the app invoking Agentic App APIs needs to maintain its own session tracking. Each session is owned by a user, identified by a system-generated **<code>userId</code>**, which is typically derived from the provided **<code>userReference</code>**.

Session resolution follows a **priority-based approach** to determine how a session is created or reused. When more than one identifier is provided as input, the platform checks them in order of priority, starting with the highest. The session is resolved using the first identifier that matches. If no match is found, the platform moves on to the next identifier in the input.


<table>
  <tr>
   <td><strong>Identifier</strong>
   </td>
   <td><strong>Priority</strong>
   </td>
   <td><strong>Purpose</strong>
   </td>
  </tr>
  <tr>
   <td>sessionId
   </td>
   <td>Highest
   </td>
   <td>Used only to retrieve an existing session. This identifier cannot be used to create new sessions. If a <code>userReference</code> is provided, it is validated against the session owner for security purposes. 
   </td>
  </tr>
  <tr>
   <td>sessionReference
   </td>
   <td>Medium
   </td>
   <td>Attempts to find an existing session with the given sessionReference.
<ul>

<li>If a session with the given sessionReference exists, it's retrieved.</li>

<li>If no session is found, a new session is created using the sessionReference.</li>

<li>If both sessionReference and userReference are provided, the userReference is validated to ensure it matches the session owner.</li>

<li>If only sessionReference is provided, the session owner is automatically mapped as the user.</li>

<li>When creating a new session, if no user mapping exists, the sessionReference is used as the userReference for the new session.   </li>
</ul>
   </td>
  </tr>
  <tr>
   <td>userReference
   </td>
   <td>Lowest
   </td>
   <td>Always creates a <strong>new session</strong> associated with the specified user. Does not check for existing sessions.
   </td>
  </tr>
</table>


The above session resolution steps are summarized using the flow chart below. 


![Session Resolution using Identify fields](images/session-resolution.png "Session resolution")

## Authorization Process for API Calls

If an agent in an Agentic App includes tools that require authorization to execute APIs, the platform ensures that the necessary authorizations are completed before any API calls are made during the agent’s execution.

**When OAuth Authorization is Required**

At the **first invocation** of the session (via the **Session** or **Execute API**), if any required authorization is pending, the API will return a response containing a special event type: **IDP_Redirect**. This indicates that the user needs to complete an authorization flow before the agent can proceed. The response includes:

* An IDP_Redirect event. 
* A URL for the user to complete the authorization process. 
* The identity provider (IDP) name and the authentication method.

Sample Response


```json
{
    "messageId": "msg-260f4d3c-5b8c-4056-af97-11317fc28c8d",
    "events": [
        {
            "type": "IDP_Redirect",
            "content": {
                "auth_profiles": [
                    {
                        "url": "https://{host}/r/396c63515671634648357955",
                        "idpName": "Google",
                        "isAuthorized": false,
                        "sso_type": "oauth2"
                    }
                ]
            }
        }
    ],
    "output": [
        {
            "type": "text",
            "content": "Hello! How can I assist you today with HR, Finance, or IT queries?"
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
    }
}
```


**Next Steps**

* Go to the URL in the events object and complete the authorization. 
* Reinvoke the API after successful authorization. 

**Important Notes**

* Authorization is only required once per user (across sessions) or until the token expires.
* If one or more authorizations are pending, all of them must be completed before continuing. If the required authorization is not completed, the associated tools will return an error upon invocation.

<hr/>

**Related resource**

* [List of available APIs](../../apis/list-of-apis.md).
