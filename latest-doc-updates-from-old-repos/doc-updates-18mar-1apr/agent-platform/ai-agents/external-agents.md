# Connect with External Agents

The platform enables integration with external AI agents built on different platforms. To support diverse integration needs, external agents can be connected using either the A2A Protocol or the Kore Agent Protocol (Proxy Agent).

* **A2A Protocol** provides a standardized agent-to-agent communication model and is recommended when the external agent supports the A2A specification.

* **Kore Agent Protocol** (Proxy Agent) enables integration with external agents that don't support A2A by using a custom request and response mapping layer or a proxy agent. The Proxy Agent functions as an intermediary, effectively relaying communication between the platform and external agents. This approach ensures that protocols are translated while preserving the performance, security, and functional integrity of the existing agent ecosystem.


## Prerequisites

The External Agents connected to the Platform must adhere to the Agent Protocol.

## Set Up

Enter the following details of the agent. 

**Name**: Choose a unique name that reflects your agent's core function and persona. **  **

---

**Description**: Specify your AI agent's primary objectives and key responsibilities. The description should clearly define the agent's role in the application and differentiate it from other agents. The application orchestrator uses this description to select the most suitable agent for a specific task.

---
**Avatar**: Select an avatar for the agent. 

---

**Connection Type**: When configuring an external agent, choose one of the following connection methods:

1. Connect through A2A Protocol - Integrates with external agents that support the A2A protocol standard.
2. Connect through Kore Agent Protocol - Uses a proxy adapter to translate requests and responses between the platform and external agents.

### Connect Through A2A protocol

The A2A (Agent-to-Agent) Protocol client implementation enables Agent Platform to interact with external AI agents that expose their capabilities via the [A2A Protocol](https://a2a-protocol.org/latest/).

With this capability, the platform can treat external agents as part of the agent ecosystem and allow the supervisor agent to route requests to them like native agents.

This integration enables organizations to combine Agent platform orchestration with specialized external agents hosted on other platforms.

#### Prerequisites

External agent must:

* Support A2A protocol
* Expose the well-known agent card
* Be accessible via HTTPS REST  endpoint

#### Configuration Steps

1. Select Connection Type as Connect through A2A Protocol
2. Click Configure under Request Definition. The Request Definition section is used to configure how the platform retrieves agent metadata from the external A2A agent during setup.
    1. HTTP Method:  Select the HTTP method used to fetch the agent card from the external agent. For A2A integrations, this is typically GET.
    2. URL:  Enter the well-known URI of the external A2A agent. Example: `https://agent.example.com/` . This endpoint is invoked to fetch the Agent Card, which contains metadata describing the external agent, including its name, description, skills, capabilities, and messaging endpoint.
    3. Optional Configurations: These configuration parameters apply to the initial agent discovery request sent to the external endpoint. 
        1. Authentication Profiles: If the agent card endpoint requires authentication, select an Auth Profile from the dropdown. If authentication isn't required, select None.
        2. Headers: Add custom HTTP headers to include when retrieving the agent card. Example: Authorization: Bearer &lt;token>
        3. Response: Displays the response returned from the external agent when the Test button is used. This helps verify that the agent card is retrieved successfully and conforms to the A2A specification.

#### Agent Discovery 

When the request is successful, the platform retrieves the Agent Card and automatically populates key configuration fields such as, Agent Name, Description, skills, and other metadata about the agent. 

#### A2A Agent Configuration 

After configuring the request definition and saving the agent profile, you can configure additional runtime settings for the external A2A agent in the Configure tab.

These settings control how the platform communicates with the external agent during runtime.

1. **Timeout**: This setting defines the maximum duration the platform waits for a response from the external A2A agent. If the external agent doesn't return a response within the configured time, the request is considered failed and a timeout error is triggered.

    * Default: 60 seconds
    * Allowed range: 60 to 300 seconds

2. **Route Response to User**: This option controls how responses from the external agent are delivered. When enabled, the response from the external A2A agent is sent directly to the user, bypassing the supervisor. When disabled (default), the response is returned to the supervisor, which may perform additional processing before responding to the user.

3. **Authorization Method**: Determines how authentication is applied for requests sent to the external A2A agent. In the A2A protocol, the platform makes two types of requests to the external agent:

  - **Agent card request**: An initial discovery request to fetch the agent's metadata and capabilities (configured in the *Request Definition* section above).
  - **Task invocation requests**: Subsequent requests sent to the agent to perform actual tasks.

This setting controls authentication for the task invocation requests only.

  - When **Use same auth as Request Definition** is enabled, the platform uses the same authentication profile configured in the *Request Definition* section for task invocation requests as well.
  - When disabled, configure a separate authentication profile here for task invocation requests. Provide the auth details based on the authentication methods supported by the external agent.

4. **Metadata**: The Metadata section allows you to pass additional contextual information to the external A2A agent during each request. Metadata is provided as key-value pairs. Example: 
      * Key: `region`
      * Value: `us-east` 


#### Testing the Agent

You can validate the agent configuration using the Test Agent button in the top-right corner of the screen. Testing allows you to

* Send sample messages to the external agent.
* Verify connectivity.
* Verify the responses of the external agent.

Enter the test query, provide the values of metadata fields and validate the response. 

#### Points to Note

1. The Agent Platform can invoke external agents using the A2A protocol, but external agents can't directly invoke native agents created within the platform.
2. The platform communicates with A2A agents only via REST endpoints.
 Communication through JSON-RPC or gRPC methods isn't supported.
3. In the Adaptive Network orchestration pattern, an external A2A agent can only be configured as the last node in the workflow. External agents cannot further delegate tasks.
4. Streaming responses are supported when the external A2A agent supports streaming. If streaming is enabled for the application but the external agent doesn't support it, the response is returned as a non-streamed response.
5. The Agent Platform uses a sessionId to track conversations internally. When interacting with external A2A agents, the platform maps this sessionId to the context_id returned by the external agent, which represents the conversation context as defined by the A2A protocol. Additionally, the task_id returned by the external agent is used to track the lifecycle of a specific task. The platform stores and manages both context_id and task_id during the interaction and includes them in subsequent requests as required by the A2A protocol. However, when the task reaches a terminal state (such as `completed` or `failed`), the Agent Platform clears the stored task_id and doesn't include it in subsequent requests, allowing the external agent to initiate a new task if required.

---

### Connect through Kore Agent Protocol

The Kore Agent Protocol enables the Agent Platform to integrate with external agents that don't support the A2A standard. This approach uses a Proxy Agent architecture, in which the proxy agent acts as an intermediary that communicates with the external agent via a configurable API.
The Proxy Agent sends the request and response to the Eternal Agent in a specific format. The external agent is expected to consume the input and provide the output in this format for seamless integration. If the external agent varies in its request or response formats, it's recommended to create an adapter that processes the request from the Platform Proxy Agent and converts it according to the external agent's specifications. Similarly, the response from the external agent should be formatted as per the Kore Agent Protocol. 

This method is particularly useful when integrating with existing AI services or custom agents that expose REST APIs but do not follow a standardized agent communication protocol.

Once configured, the external agent behaves like any other agent in the platform. The orchestrator can route user requests to it based on its capabilities, enabling it to participate seamlessly in the overall workflow.

The Kore Agent Protocol is recommended when:

* The external agent does not support the A2A protocol.
* Developers need full control over request and response mappings.

#### Configuration Steps 

Use this section to Configure external agent connection details and other properties.

**Request Definition**: Define the complete structure and configuration required for the proxy agent to call the external agent via its API. This includes specifying the HTTP method, endpoint URL, headers, request body, and expected response format.

* HTTP Method - Specify the HTTP method used by the API call (for example, GET, POST, PUT, DELETE).
* URL - Enter the full endpoint URL to which the request will be sent.
* Request Headers - Key-value pairs sent with the request to provide context or authorization.
* Request Body - If the method supports or requires a payload (for example, POST, PUT), specify the body structure. Refer to the Request and Response format of the agent below.
* Metadata - 
* Response - The response from the API is displayed here when the Test is initiated with sample values.

Click on the *Test* button to initiate a sample request to the external agents and verify the connection and response format.

---

**Asynchronous Integration** - This property specifies whether the response expected from the external agent is synchronous or asynchronous. If this field is enabled, the proxy agent shows a URL that can be used as a callback URL from the external agent.

---

**Timeout** - This property specifies the maximum duration (in seconds) the proxy agent will wait for a response from the external agent. If a response isn't received within this specified time, the request is considered to have failed due to a timeout error.

---

**Route Response to User** - When enabled, the response from the external agent is directly presented to the user, bypassing the supervisor. This allows response to be presented in real time. Also, the response is delivered as it's without any modification or enrichment. This is ideal for scenarios where real-time responsiveness is prioritized, and the external agent is fully trusted to handle user queries independently.

---
#### Delegation

If the Adaptive Network orchestration pattern is enabled, add delegation rules for the agent. [Learn More](network-orchestration.md).

Review the changes and *Create*.

#### Key Characteristics of the Proxy Agent

The proxy agent offers a secure and streamlined method for integrating external agents with our platform.

* Enables secure communication with external platforms.
* Supports seamless data exchange between the proxy agent and the external agent.
* Translates data formats between our platform and the external system using the Agent Protocol format described below.
* Automatically manages timeouts and communication failures for reliability.
* External agents are listed alongside native agents, ensuring a consistent user interface.
* Users get a clear visual indicator of the external agent’s status.

#### Request and Response formats for the External Agent

The Proxy Agent sends the request and response to the Eternal Agent in a specific format. The external agent is expected to consume the input and provide the output in this format for seamless integration. If the external agent varies in its request or response formats, it's recommended to create an adapter that processes the request from the Platform Proxy Agent and converts it according to the external agent's specifications. Similarly, the response from the external agent should be formatted as per the specifications below.

**Request Format**

Following is the format of the request object sent from the Proxy agent to the external agent. The values of all the fields are passed to the external agent dynamically:

```json
{
  "sessionIdentity": [
    {
      "type": "sessionReference",       
      "value": "string"
    },
    {
      "type": "userReference",
      "value": "string"
    }

  ],
  "input": [
      "type": "text", //Enum: "text" 
      "content": "User Input" 
  ],
   "debug": {            // Optional
    "enable": "string",
    "debugMode": "string"  // Enum: "full" | "no" | "thoughts"
  },
  "stream": {           // Optional
    "enable": "string",
    "streamMode": "string" // Enum: "token" | "messages"
  }
}
```

* sessionIdentity: This field is used to maintain sessions in conversations. This field can be used to specify app sessions or user sessions. 
* input: This field is used to pass the actual input to the external agent. 
* debug: This field enables debug mode in the external agent. Set the ‘enable’ field to true and debugMode to “thoughts”. If debugging is enabled, the response from the external agent is expected to include debug information. 
* stream: This field enables the streaming of the response from the external agent. Set the ‘enable’ field to true and set streamMode to one of the following: token or messages. The ‘streamMode’ refers to how AI-generated responses are streamed back to the user.
    * Token - Streams output token-by-token
    * Messages - Streams complete message chunks. 
  Currently, only messages are supported.
* metadata: This field allows users to pass metadata information. This data is then available in the sessionMeta memory and is available for the duration of the session. 

Learn More about the fields [here](../apis/agentic-apps/execute.md). 

**Response Format**

The following is the response format expected by the Proxy agent:

```json
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
  "sessionInfo": {
     status: 'idle' | ‘busy’ | 'error';
     conversationState: 'COMPLETED' | ‘ACTIVE’| 'ERROR';
     userReference: string;
     sessionReference: string;
     userId: string;
     sessionId: string;
     runId?: string;
     appId: string;
     output?: {
        type: "text" | "image" | "file" | "audio";
     content: string;
     }
   }
}
```

Where,

* **output** is the response from the external agent. 

* **debug** is the debug information.

* **sessionInfo objects** contain session-related information. While streaming, a series of output events is sent, each with part of the total output. Ultimately, the entire output, stitched together under sessionInfo, is sent as a single unit.

#### Handling Format Variations

If your external agent doesn't follow the expected format, follow the steps listed below. 

* Create an adapter to translate incoming and outgoing data.
* Adapter should:
    * Accept the Platform-defined request structure.
    * Convert it to the format required by your external agent.
    * Reformat the external agent's response to match the Platform’s response structure.

![alt_text](images/externalagents/adapter.png "image_tooltip")
