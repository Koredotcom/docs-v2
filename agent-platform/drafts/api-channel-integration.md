---
title: Integrate using API Channel
audience: Customer backend and application developers  
---

The API Channel is intended for applications that want to own their user interface and call the agent from their own backend or application code. Unlike the Web SDK Channel, it doesn't provide or create a chat widget. The customer application sends one HTTP request for every user message.

Protocol: HTTPS REST. Server-Sent Events (SSE) is optional.
Authentication: Public-key bootstrap or Hosted Exchange.

{/* AG: Check the need for prerequisites */}

## How the API Channel works

The integration requires three-step:

1. Obtain an SDK session token.
2. Send the user's first message to the chat endpoint.
3. Save the returned `sessionId` and include it in every later message in that conversation.

The normal request flow is:

{/* AG: Convert to Mermaid diagram? */}

```text
Customer application                         ABL Runtime
        |                                         |
        | POST /api/v1/sdk/init                   |
        |---------------------------------------->|
        | SDK token                               |
        |<----------------------------------------|
        |                                         |
        | POST /api/v1/chat/agent                 |
        | message: "Hello"                        |
        |---------------------------------------->|
        | response + sessionId                    |
        |<----------------------------------------|
        |                                         |
        | POST /api/v1/chat/agent                 |
        | sessionId + next message                |
        |---------------------------------------->|
        | next response                           |
        |<----------------------------------------|
```

There is no persistent WebSocket connection in this flow.

- Use `POST /api/v1/chat/agent` for a normal JSON response.
- Use `POST /api/v1/chat/agent/stream` when token-by-token SSE streaming is required.

### API call summary

| Endpoint                             | When is it called                                                                             |
| ------------------------------------ | --------------------------------------------------------------------------------------------- |
| `POST /api/v1/sdk/customer-sessions` | Hosted Exchange only: once when a trusted backend needs a bootstrap token for a verified user |
| `POST /api/v1/sdk/init`              | Once when an end-user application session starts or needs a new SDK identity                  |
| `POST /api/v1/chat/agent`            | Once for every user message when using normal REST responses                                  |
| `POST /api/v1/chat/agent/stream`     | Alternative to `/chat/agent`: once for every user message that should stream over SSE         |
| `POST /api/v1/sdk/refresh`           | Before the current SDK token expires                                                          |

Don't call both chat endpoints for the same message. Choose either the normal REST endpoint or the SSE endpoint for that turn.

Human-agent transfer requires an additional asynchronous delivery mechanism; the endpoints in this table don't provide complete human-agent event delivery. See [Asynchronous human-agent transfer](#asynchronous-human-agent-transfer).

## Information required from the ABL platform owner

Before implementation begins, obtain the following values:

| Value                   | Example                           | Purpose                                                    |
| ----------------------- | --------------------------------- | ---------------------------------------------------------- |
| Runtime base URL        | `https://runtime.example.com`     | Base URL for all runtime requests                          |
| Project ID              | `project_123`                     | Identifies the ABL project                                 |
| Channel ID              | `channel_456`                     | Identifies the configured API Channel                      |
| Approved request origin | `https://app.customer.com`        | Must match the origin policy configured for the public key |
| Authentication mode     | `Public key` or `Hosted Exchange` | Determines how the SDK token is obtained                   |
| Public key              | `pk_...`                          | Required for public-key bootstrap                          |
| Tenant ID               | `tenant_123`                      | Required for Hosted Exchange                               |
| Channel secret          | `sk_...`                          | Required for Hosted Exchange; backend-only                 |

The ABL platform owner must also confirm that:

- The API Channel is active.
- The channel points to the intended environment or deployment.
- The deployment is active.
- The public key is active and is bound to the channel.
- The public key has `session:send_message` permission.
- The customer's request origin is allowed.

The channel binding determines which deployed agent handles the request.
Customers should not select or override a different deployment in normal API
Channel requests.

## Choose the authentication mode

### Option A: Public-key bootstrap

Use this mode when the conversation can be anonymous or session-scoped.

The application calls `/api/v1/sdk/init` with:

- `X-Public-Key`
- `channelId`

The returned SDK token represents one API Channel session identity.

<Caution>Don't use one token for all customers. Create and store a separate token for each user application session. Reusing a token across users can mix their identity and conversation ownership.</Caution>

### Option B: Hosted Exchange

Use this mode when the customer has an authenticated user and wants ABL to
receive a verified, stable customer user ID.

The trusted customer backend:

1. Exchanges the channel secret for a five-minute, single-use bootstrap token.
2. Exchanges that bootstrap token for a four-hour SDK session token.
3. Uses the SDK session token to call the chat API.

<Important>Don't send channel secret to a browser, mobile app, or other untrusted client.</Important>

### Recommended choice

| Requirement                                       | Recommended mode     |
| ------------------------------------------------- | -------------------- |
| Anonymous visitor or temporary session            | Public-key bootstrap |
| Authenticated customer user                       | Hosted Exchange      |
| Stable user identity across sign-ins              | Hosted Exchange      |
| Server-to-server integration with a known user ID | Hosted Exchange      |

The `metadata.customerId` field on a chat request does not establish identity. Use Hosted Exchange and `verifiedUserId` when verified identity is required.

## Quick start: public-key bootstrap

### Step 1: Set the integration values

The examples use shell variables for readability:

```bash
export ABL_RUNTIME_URL="https://runtime.example.com"
export ABL_PROJECT_ID="project_123"
export ABL_CHANNEL_ID="channel_456"
export ABL_PUBLIC_KEY="pk_replace_with_public_key"
export ABL_REQUEST_ORIGIN="https://app.customer.com"
```

`ABL_REQUEST_ORIGIN` must be the value approved by the ABL platform owner. Server-side HTTP clients can set the `Origin` header explicitly. Omit it only when the platform owner confirms that the deployment does not require it.

### Step 2: Initialize an SDK session

Call this endpoint when a new end-user application session begins:

```http
POST /api/v1/sdk/init
```

Example:

```bash
curl --request POST "${ABL_RUNTIME_URL}/api/v1/sdk/init" \
  --header "Content-Type: application/json" \
  --header "Origin: ${ABL_REQUEST_ORIGIN}" \
  --header "X-Public-Key: ${ABL_PUBLIC_KEY}" \
  --data "{
    \"channelId\": \"${ABL_CHANNEL_ID}\"
  }"
```

Example response:

```json
{
  "token": "<opaque-sdk-session-token>",
  "tokenEnvelope": "signed",
  "tenantId": "tenant_123",
  "projectId": "project_123",
  "deploymentId": "deployment_789",
  "channelId": "channel_456",
  "permissions": ["session:send_message", "session:read"],
  "showActivityUpdates": true,
  "expiresIn": 14400
}
```

Save:

- `token`: send it as `X-SDK-Token` on chat requests.
- `expiresIn`: use it to schedule a proactive token refresh.

Treat the token as opaque. Don't decode it or depend on its internal format.

### Step 3: Send the first user message

Call:

```http
POST /api/v1/chat/agent
```

Do not send a `sessionId` on the first message:

```bash
curl --request POST "${ABL_RUNTIME_URL}/api/v1/chat/agent" \
  --header "Content-Type: application/json" \
  --header "Origin: ${ABL_REQUEST_ORIGIN}" \
  --header "X-SDK-Token: <opaque-sdk-session-token>" \
  --data "{
    \"projectId\": \"${ABL_PROJECT_ID}\",
    \"message\": \"Hello, I need help with my order\",
    \"interactionContext\": {
      \"locale\": \"en-US\",
      \"timezone\": \"Asia/Kolkata\"
    }
  }"
```

Example response:

```json
{
  "sessionId": "session_abc123",
  "response": "Sure. What is your order number?",
  "action": {
    "type": "continue"
  },
  "outcome": {
    "status": "ok",
    "usedFallback": false
  }
}
```

Save the returned `sessionId`. It is the conversation identifier.

### Step 4: Send every later message with the same `sessionId`

For the second and all later turns:

```bash
curl --request POST "${ABL_RUNTIME_URL}/api/v1/chat/agent" \
  --header "Content-Type: application/json" \
  --header "Origin: ${ABL_REQUEST_ORIGIN}" \
  --header "X-SDK-Token: <same-sdk-session-token>" \
  --data "{
    \"projectId\": \"${ABL_PROJECT_ID}\",
    \"sessionId\": \"session_abc123\",
    \"message\": \"My order number is ORD-10001\"
  }"
```

For one conversation, keep these values together:

```json
{
  "sdkToken": "<opaque-sdk-session-token>",
  "sdkTokenExpiresAt": "2026-07-28T14:30:00.000Z",
  "sessionId": "session_abc123"
}
```

Do not use a `sessionId` with a token that belongs to a different user,
project, channel, or tenant.

### Step 5: Refresh the SDK token before it expires

SDK session tokens currently have a four-hour lifetime. Refresh the token
before expiration, for example five minutes early:

```http
POST /api/v1/sdk/refresh
```

```bash
curl --request POST "${ABL_RUNTIME_URL}/api/v1/sdk/refresh" \
  --header "Content-Type: application/json" \
  --header "Origin: ${ABL_REQUEST_ORIGIN}" \
  --header "X-SDK-Token: <current-sdk-session-token>" \
  --data "{}"
```

The response contains a new `token` and `expiresIn`. Replace the old token
atomically in the conversation record.

The current token must still be valid when `/refresh` is called. If an
anonymous token has already expired, a new `/init` creates a new anonymous
identity; start a new conversation instead of attaching an old `sessionId`.

## Hosted Exchange implementation

Hosted Exchange is a two-stage token exchange. It keeps the channel secret on
the trusted customer backend while allowing ABL to associate conversations
with a verified customer identity.

### Step 1: Store the channel secret securely

Store these values in the customer backend's secret manager:

```bash
export ABL_RUNTIME_URL="https://runtime.example.com"
export ABL_TENANT_ID="tenant_123"
export ABL_PROJECT_ID="project_123"
export ABL_CHANNEL_ID="channel_456"
export ABL_CHANNEL_SECRET="sk_replace_with_channel_secret"
export ABL_REQUEST_ORIGIN="https://app.customer.com"
```

The channel secret is shown when the channel is created or rotated. It must be
treated like a password.

### Step 2: Request a single-use bootstrap token

Only the trusted backend should call:

```http
POST /api/v1/sdk/customer-sessions
```

```bash
curl --request POST "${ABL_RUNTIME_URL}/api/v1/sdk/customer-sessions" \
  --header "Content-Type: application/json" \
  --header "X-SDK-Channel-Secret: ${ABL_CHANNEL_SECRET}" \
  --data "{
    \"tenantId\": \"${ABL_TENANT_ID}\",
    \"projectId\": \"${ABL_PROJECT_ID}\",
    \"channelId\": \"${ABL_CHANNEL_ID}\",
    \"verifiedUserId\": \"customer-user-87421\",
    \"customAttributes\": {
      \"plan\": \"gold\",
      \"region\": \"in\"
    }
  }"
```

Example response:

```json
{
  "bootstrapToken": "<opaque-single-use-bootstrap-token>",
  "tokenEnvelope": "signed",
  "expiresIn": 300,
  "tenantId": "tenant_123",
  "projectId": "project_123",
  "channelId": "channel_456"
}
```

Rules for `verifiedUserId`:

- Use the customer's stable internal user identifier.
- Do not use an email address or phone number unless that is an approved
  identity design.
- Do not allow the browser to choose this value. Derive it from the
  authenticated backend session.

Keep `customAttributes` small and include only values required by the agent.

### Step 3: Exchange the bootstrap token for an SDK token

The bootstrap token expires in five minutes and can be used only once:

```bash
curl --request POST "${ABL_RUNTIME_URL}/api/v1/sdk/init" \
  --header "Content-Type: application/json" \
  --header "Origin: ${ABL_REQUEST_ORIGIN}" \
  --data '{
    "bootstrapToken": "<opaque-single-use-bootstrap-token>"
  }'
```

Do not include `X-Public-Key`, `channelId`, or `channelName` in this request.
Hosted initialization uses only the `bootstrapToken`.

The response is the same SDK token response shown in the public-key flow.

### Step 4: Send and continue the conversation

Use the returned SDK token with `/api/v1/chat/agent`. The first request omits
`sessionId`; every later request includes the returned `sessionId`.

### Step 5: Refresh before expiration

Call `/api/v1/sdk/refresh` with the current `X-SDK-Token`, exactly as shown in
the public-key flow.

If the SDK token has fully expired, the backend can perform a new Hosted
Exchange for the same verified user. Whether an earlier conversation may be
resumed is controlled by the configured identity and session policy. The
safest implementation is to refresh proactively and treat a failed resume as
a request to begin a new conversation.

## Chat request reference

### Required fields

| Field       | Type   | Description                               |
| ----------- | ------ | ----------------------------------------- |
| `projectId` | string | Project ID supplied by the platform owner |
| `message`   | string | Current user message; must not be empty   |

### Conversation field

| Field       | Type   | Description                                                     |
| ----------- | ------ | --------------------------------------------------------------- |
| `sessionId` | string | Omit on the first turn; reuse the returned value on later turns |

### Optional customer fields

| Field                         | Type         | Description                                                         |
| ----------------------------- | ------------ | ------------------------------------------------------------------- |
| `attachmentIds`               | string array | Previously uploaded attachment identifiers                          |
| `metadata`                    | object       | Data associated with the current turn                               |
| `sessionMetadata`             | object       | Data that should be merged into the conversation's session metadata |
| `interactionContext.locale`   | string       | User locale, for example `en-US`                                    |
| `interactionContext.timezone` | string       | IANA timezone, for example `Asia/Kolkata`                           |

Example:

```json
{
  "projectId": "project_123",
  "sessionId": "session_abc123",
  "message": "Show the delivery options",
  "metadata": {
    "clientRequestId": "request-7d603",
    "source": "customer-portal"
  },
  "sessionMetadata": {
    "journey": "order-support"
  },
  "interactionContext": {
    "locale": "en-US",
    "timezone": "Asia/Kolkata"
  }
}
```

Do not put passwords, access tokens, payment data, or unnecessary personal data
in `metadata`, `sessionMetadata`, or `customAttributes`.

## REST response and server message types

The REST endpoint returns one JSON document per request. It does not send
WebSocket-style messages. Your application should understand the following
top-level response fields.

| Field              | Meaning                                   | Customer action                      |
| ------------------ | ----------------------------------------- | ------------------------------------ |
| `sessionId`        | Conversation ID                           | Save it and send it on the next turn |
| `response`         | User-facing agent text                    | Display it                           |
| `action`           | What the runtime expects or what happened | Branch on `action.type`              |
| `outcome`          | Public status/result information          | Use for status and analytics         |
| `actions`          | Interactive controls such as buttons      | Render supported elements            |
| `richContent`      | Structured or formatted response content  | Render when supported                |
| `renderables`      | Additional UI-ready output                | Render only supported types          |
| `citations`        | Sources associated with an answer         | Display when present                 |
| `localization`     | Localization details                      | Apply when supported                 |
| `responseMetadata` | Public response provenance/metadata       | Store only if needed                 |

All fields other than `sessionId`, `response`, and `action` may be absent.
Ignore unknown fields so that future response additions do not break the
integration.

### Standard text response

```json
{
  "sessionId": "session_abc123",
  "response": "Your order will arrive tomorrow.",
  "action": {
    "type": "continue"
  }
}
```

### Interactive response

```json
{
  "sessionId": "session_abc123",
  "response": "Choose a delivery option.",
  "action": {
    "type": "waiting_for_action"
  },
  "actions": {
    "elements": [
      {
        "id": "standard",
        "type": "button",
        "label": "Standard",
        "value": "standard"
      },
      {
        "id": "express",
        "type": "button",
        "label": "Express",
        "value": "express"
      }
    ]
  }
}
```

When the user selects an option, call `/api/v1/chat/agent` again with the same
`sessionId`. Send the selected element's `value` as the message when present;
otherwise follow the agent contract supplied by the platform owner.

### End-user authorization required

```json
{
  "sessionId": "session_abc123",
  "response": "Please connect your account before I continue.",
  "action": {
    "type": "auth_required",
    "pending": [
      {
        "connector": "crm",
        "authProfileRef": "customer-crm",
        "connectionMode": "per_user"
      }
    ],
    "satisfied": []
  }
}
```

When `action.type` is `auth_required`, pause the business action and follow the
authorization experience agreed with the ABL platform owner. Do not repeatedly
resend the same chat message while authorization is pending.

### AI-agent handoff or delegation

```json
{
  "sessionId": "session_abc123",
  "response": "I am transferring this request to the billing specialist.",
  "action": {
    "type": "handoff",
    "target": "billing-specialist",
    "success": true
  }
}
```

This response means one ABL AI agent handed work to another ABL AI agent. It
does not mean that a human contact-center agent joined the conversation. The
same REST request/response flow continues with the same `sessionId`.

Possible action types include `continue`, `waiting_for_action`,
`auth_required`, `handoff`, `delegate`, `complete`, and other
forward-compatible values. Treat unknown action types safely: display the
`response`, preserve the `sessionId`, and do not assume the conversation has
ended unless the public outcome says so.

## Optional SSE streaming

Use SSE when the user interface should display the response while it is being
generated.

Call:

```http
POST /api/v1/chat/agent/stream
```

The request body and headers are the same as the REST chat request:

```bash
curl --no-buffer \
  --request POST "${ABL_RUNTIME_URL}/api/v1/chat/agent/stream" \
  --header "Accept: text/event-stream" \
  --header "Content-Type: application/json" \
  --header "Origin: ${ABL_REQUEST_ORIGIN}" \
  --header "X-SDK-Token: <opaque-sdk-session-token>" \
  --data "{
    \"projectId\": \"${ABL_PROJECT_ID}\",
    \"message\": \"Explain my delivery options\"
  }"
```

### SSE server event types

| Event         | Example data                                                                       | Meaning                                     |
| ------------- | ---------------------------------------------------------------------------------- | ------------------------------------------- |
| `session`     | `{"sessionId":"...","deploymentId":"...","environment":"prod"}`                    | First event; save the session ID            |
| `token`       | `{"delta":"Hello","index":0}`                                                      | Append `delta` to the displayed answer      |
| `tool_call`   | `{"name":"lookup_order","arguments":{},"id":"..."}`                                | Agent started a tool call                   |
| `tool_result` | `{"id":"...","result":{}}`                                                         | Tool call completed                         |
| `action`      | `{"type":"handoff","data":{}}`                                                     | Public execution action or suspension       |
| `done`        | `{"sessionId":"...","usage":{},"outcome":"completed","reconnectSuggestion":false}` | Terminal success/cancellation/timeout event |
| `error`       | `{"code":"EXECUTION_ERROR","message":"..."}`                                       | Terminal stream error                       |

Example stream:

```text
event: session
data: {"sessionId":"session_abc123","deploymentId":"deployment_789","environment":"prod"}

event: token
data: {"delta":"Your","index":0}

event: token
data: {"delta":" order","index":1}

event: token
data: {"delta":" is ready.","index":2}

event: done
data: {"sessionId":"session_abc123","usage":null,"outcome":"completed","reconnectSuggestion":false}
```

The server can also send comment-only heartbeat frames:

```text
: heartbeat
```

Ignore heartbeat comments. A stream is complete only after `done` or `error`,
or when the connection ends unexpectedly.

Important streaming rules:

- This is SSE over an HTTP `POST`, not a WebSocket.
- Save the `sessionId` from the initial `session` event.
- Concatenate `token.data.delta` in `index` order.
- Stop loading indicators on `done` or `error`.
- Do not automatically replay the message after an uncertain disconnect.
  The server may already have processed it.
- Tool events are informational. Do not expose raw tool arguments or results
  unless the customer experience has explicitly approved them.
- The stream belongs to one agent turn. It ends after `done` or `error` and
  does not remain open to receive human-agent messages that arrive later.

## Asynchronous human-agent transfer

Human-agent transfer is different from AI-agent `handoff` or `delegate`.
It transfers the conversation from the ABL AI agent to a human-agent desktop
such as SmartAssist, Genesys, Five9, Salesforce, ServiceNow, or another
configured provider.

This section documents both the behavior that exists today and the delivery
decision required for a REST-only API Channel.

### Important REST-only limitation

The three-call API Channel flow:

```text
POST /api/v1/sdk/init
POST /api/v1/chat/agent
POST /api/v1/sdk/refresh
```

can initialize a session, initiate a transfer, and forward later customer
messages to the human agent. It cannot, by itself, deliver a human agent's
unsolicited messages to the customer application.

Human-agent events are asynchronous. A human agent might join or send a message
seconds or minutes after the customer's last REST request has completed. A
normal REST response cannot be sent when no customer request is open.

The optional `/api/v1/chat/agent/stream` endpoint does not remove this
limitation:

- Its SSE stream belongs to one agent turn.
- It ends after the `done` or `error` event.
- It is not a permanent subscription to the human-agent conversation.
- It must not be kept open or repeatedly invoked as an undocumented polling
  mechanism.

The current Runtime can push human-transfer events to a connected SDK
WebSocket. The base API Channel contract does not create that WebSocket and
does not currently define a customer webhook or customer-facing polling API
for these events.

Therefore, do not promise complete live human-agent chat through a REST-only
API Channel until an asynchronous delivery mechanism has been selected and
enabled.

### Supported-behavior matrix

| Capability                                                                      | Base REST API Channel     |
| ------------------------------------------------------------------------------- | ------------------------- |
| AI agent starts a configured human transfer                                     | Supported                 |
| Conversation context is passed to the transfer provider                         | Supported when configured |
| Customer sends a later message with the same `sessionId`                        | Supported                 |
| Runtime forwards that message to the active human-agent session                 | Supported                 |
| Customer receives a reliable transfer-start status in a dedicated REST envelope | Not currently guaranteed  |
| Customer receives queue and agent-connected events through REST                 | Not provided              |
| Customer receives later human-agent messages through REST                       | Not provided              |
| Per-turn SSE remains subscribed after the agent turn completes                  | Not supported             |
| API Channel automatically opens a WebSocket                                     | Not supported             |
| Base API Channel provides a documented transfer-event polling endpoint          | Not currently provided    |
| Web SDK receives transfer events over its connected WebSocket                   | Supported                 |

### End-to-end transfer lifecycle

The logical transfer lifecycle is:

```text
AI_ACTIVE
    |
    | transfer requested
    v
TRANSFER_PENDING
    |
    | provider accepts the request
    v
QUEUED / WAITING
    |
    | human agent accepts
    v
HUMAN_ACTIVE
    |
    | human agent disconnects
    v
POST_AGENT
    |
    +-- postAgentAction = "return" --> AI_ACTIVE
    |
    +-- postAgentAction = "end" ----> ENDED
```

Internally, transfer sessions can move through `pending`, `queued`, `active`,
`post_agent`, and `ended`. Customer integrations should use public lifecycle
events instead of depending directly on internal state names.

### Step 1: Configure transfer before customer integration

The ABL platform owner must configure:

- A supported human-agent provider.
- Provider credentials and connection settings.
- The routing queue, skills, priority, or named-agent rules.
- The behavior when the queue is unavailable or outside business hours.
- The post-agent action:
  - `return`: return subsequent conversation control to the AI agent.
  - `end`: finish the runtime conversation after the human agent disconnects.
- The asynchronous delivery mechanism that the API Channel customer will use.

Hosted Exchange is recommended when transfer context must contain a stable,
verified customer identity. Arbitrary `metadata.customerId` does not establish
that identity.

Before launch, the platform owner and customer must agree on which transfer
data may be shared with the human-agent provider, including transcript,
contact details, attachments, locale, and other context.

### Step 2: Customer asks for a human agent

The customer application sends a normal chat request:

```bash
curl --request POST "${ABL_RUNTIME_URL}/api/v1/chat/agent" \
  --header "Content-Type: application/json" \
  --header "Origin: ${ABL_REQUEST_ORIGIN}" \
  --header "X-SDK-Token: <opaque-sdk-session-token>" \
  --data "{
    \"projectId\": \"${ABL_PROJECT_ID}\",
    \"sessionId\": \"session_abc123\",
    \"message\": \"I want to speak to a person\"
  }"
```

The AI agent decides whether to invoke its configured transfer behavior. The
initiating turn normally returns user-facing text such as:

```json
{
  "sessionId": "session_abc123",
  "response": "I am connecting you with a customer support agent.",
  "action": {
    "type": "continue"
  },
  "outcome": {
    "status": "ok",
    "usedFallback": false
  }
}
```

The exact transfer-start response is agent-dependent. The current REST
contract does not guarantee one dedicated `human_transfer_started` action or
status. In particular:

- `action.type: "handoff"` normally represents AI-agent-to-AI-agent routing.
- Customer code must not interpret every `handoff` as a human transfer.
- User-facing response text must not be parsed to infer transfer state.
- Reliable transfer state must come from the selected asynchronous transfer
  event delivery contract.

If a customer requires an explicit transfer-start acknowledgement in the REST
response, that must be defined as an additional public contract before
implementation.

### Step 3: Transfer enters the human-agent queue

After the transfer provider accepts the request, lifecycle events can indicate:

- The conversation is queued.
- A waiting message is available.
- Queue position or estimated wait time changed, when supplied by the
  provider.
- No agent is available.
- The request is outside business hours.
- The queue is invalid.
- The transfer was declined or failed.

Transfer initiation results can include:

| Result          | Meaning                                 |
| --------------- | --------------------------------------- |
| `transferred`   | Provider accepted the transfer request  |
| `queued`        | Conversation entered a queue            |
| `waiting`       | Waiting for an agent                    |
| `outside_hours` | Queue is outside its operating hours    |
| `no_agents`     | No eligible human agent is available    |
| `queue_invalid` | Configured queue is invalid             |
| `declined`      | Provider or agent declined the transfer |
| `failed`        | Transfer could not be created           |

These provider transfer results are not guaranteed as top-level fields in the
base `/chat/agent` response. The customer-facing asynchronous contract must
map them to lifecycle events or an equivalent public status model.

### Step 4: Customer sends a message while transfer is active

The customer continues using the same endpoint, SDK identity, and `sessionId`:

```json
{
  "projectId": "project_123",
  "sessionId": "session_abc123",
  "message": "Here is some additional information."
}
```

When the Runtime marks the transfer active, it forwards the message to the
human-agent provider instead of sending it through the AI agent.

The REST turn can expose:

```json
{
  "sessionId": "session_abc123",
  "response": "",
  "action": {
    "type": "transfer_active"
  }
}
```

The response text may be empty or may contain channel fallback text. Customer
applications should:

- Treat `action.type: "transfer_active"` as confirmation that this outbound
  user message was routed to the active transfer.
- Avoid displaying an empty response bubble.
- Avoid displaying generic fallback text as if it came from the human agent.
- Wait for the asynchronous `agent:message` event for the human agent's actual
  reply.
- Keep using the same identity-scoped SDK token and `sessionId`.
- Serialize messages for the conversation to preserve user-visible ordering.

### Step 5: Human-agent events are delivered asynchronously

When a supported SDK WebSocket is connected, the Runtime uses this envelope:

```json
{
  "type": "agent_transfer_event",
  "sessionId": "transfer_session_xyz",
  "event": {
    "type": "agent:message",
    "data": {
      "message": "Hello, I am Priya from customer support."
    },
    "timestamp": "2026-07-28T10:30:00.000Z"
  }
}
```

The envelope's `sessionId` identifies the transfer session. It is not
guaranteed to equal the `sessionId` used with `/api/v1/chat/agent`. The existing
Web SDK handles this correlation internally. A new customer webhook or polling
contract must include an explicit, stable way to correlate:

- The customer conversation.
- The ABL chat `sessionId`.
- The transfer session identifier.
- The verified end-user identity.

Do not correlate conversations using timestamps, message text, or human-agent
names. Event data is sanitized before public delivery, but its optional fields
can vary by provider. Customer code must ignore unknown fields.

#### Message-type layers

There is one top-level transfer envelope:

```json
{
  "type": "agent_transfer_event"
}
```

`agent_transfer_event` is a WebSocket server-message type in the current SDK
transport. It is not a response type returned by `/api/v1/chat/agent`.

#### Top-level SDK server-message types

At the published Web SDK transport layer, there are currently 20 top-level
server-message `type` values:

| Category                 | Top-level `type` values                                                                                                    |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| Response lifecycle       | `response_start`, `response_chunk`, `response_end`                                                                         |
| Activity and routing     | `typing_update`, `thought`, `handoff`, `status_update`, `status_clear`                                                     |
| Authentication           | `auth_challenge`, `auth_required`, `auth_gate_updated`, `auth_gate_satisfied`, `auth_challenge_resolved`, `message_queued` |
| Error and health         | `error`, `tool_warnings`, `session_health`                                                                                 |
| Media and human transfer | `agent_media`, `agent_transfer_event`                                                                                      |
| Feedback                 | `feedback.ack`                                                                                                             |

That is:

```text
3 response
+ 5 activity/routing
+ 6 authentication
+ 3 error/health
+ 2 media/transfer
+ 1 feedback
= 20 top-level SDK server-message types
```

This is a Web SDK transport contract, not the REST API Channel response contract. The raw Runtime WebSocket can contain additional internal wire messages, such as trace envelopes, that the SDK translates or drops. Customers must not implement against those internal messages.

#### Examples for all 20 top-level SDK server message types

The following examples show the normalized `TransportServerMessage` objects consumed by the Web SDK. They're not raw Runtime WebSocket frames, REST API Channel responses, or SSE events.

##### 1. `response_start`

Indicates that a new assistant response has started.

```json
{
  "type": "response_start",
  "messageId": "msg_001"
}
```

Customer handling: create a pending assistant message associated with `messageId`.

##### 2. `response_chunk`

Contains one piece of a streaming assistant response.

```json
{
  "type": "response_chunk",
  "messageId": "msg_001",
  "content": "Your order"
}
```

Customer handling: append `content` to the matching pending message. More than one chunk can arrive for the same `messageId`.

##### 3. `response_end`

Completes the assistant response and provides its final content and optional presentation data.

```json
{
  "type": "response_end",
  "messageId": "msg_001",
  "content": "Your order will arrive tomorrow.",
  "metadata": {
    "agentName": "order-support",
    "contentFormat": "markdown"
  },
  "citations": [
    {
      "index": 1,
      "title": "Order details",
      "url": "https://customer.example.com/orders/ORD-10001",
      "sourceType": "connector"
    }
  ]
}
```

Customer handling: replace any accumulated draft with the final `content`, render supported optional fields, and mark the response complete.

##### 4. `typing_update`

Reports whether the AI experience is showing a typing state.

```json
{
  "type": "typing_update",
  "isTyping": true
}
```

Customer handling: show or hide the typing indicator based on `isTyping`.

##### 5. `thought`

Provides a customer-safe activity or thought summary when the channel's activity-visibility policy allows it.

```json
{
  "type": "thought",
  "content": "Checking the latest order status.",
  "metadata": {
    "agentName": "order-support",
    "toolName": "lookup_order"
  }
}
```

Customer handling: display only in an approved activity area. Don't treat it as the final assistant response or expose unapproved diagnostic content.

##### 6. `handoff`

Reports an AI-agent-to-AI-agent routing change.

```json
{
  "type": "handoff",
  "metadata": {
    "handoffFrom": "triage-agent",
    "handoffTo": "billing-agent",
    "agentName": "billing-agent"
  }
}
```

Customer handling: optionally show an AI routing notice. This event doesn't mean that a human contact-center agent connected.

##### 7. `status_update`

Provides temporary progress text for the current operation.

```json
{
  "type": "status_update",
  "text": "Looking up your order",
  "operation": "tool_call",
  "fillerId": "filler_001",
  "turnId": "turn_001"
}
```

Customer handling: show the temporary status without adding it as a permanent chat message.

##### 8. `status_clear`

Clears the current temporary progress status.

```json
{
  "type": "status_clear"
}
```

Customer handling: remove the active status indicator.

##### 9. `auth_challenge`

Requests just-in-time authorization for a paused tool call.

```json
{
  "type": "auth_challenge",
  "code": "AUTH_JIT_REQUIRED",
  "sessionId": "session_abc123",
  "toolCallId": "tool_call_001",
  "authType": "oauth2",
  "authUrl": "https://auth.example.com/authorize",
  "profileId": "profile_001",
  "profileName": "Customer CRM",
  "prompt": "Connect your CRM account to continue.",
  "timeoutMs": 30000
}
```

Customer handling: show an authorization experience for the named profile and associate its result with `toolCallId`.

##### 10. `auth_required`

Reports one or more preflight authorization requirements.

```json
{
  "type": "auth_required",
  "code": "AUTH_PREFLIGHT_REQUIRED",
  "sessionId": "session_abc123",
  "presentation": "append",
  "pending": [
    {
      "connector": "crm",
      "authProfileRef": "customer-crm",
      "profileId": "profile_001",
      "profileName": "Customer CRM",
      "connectionMode": "per_user",
      "consentMode": "preflight",
      "authUrl": "https://auth.example.com/authorize"
    }
  ],
  "satisfied": []
}
```

Customer handling: render the pending authorization requirements and don't repeatedly resend the blocked user message.

##### 11. `auth_gate_updated`

Updates the pending and satisfied requirements for an existing authorization gate.

```json
{
  "type": "auth_gate_updated",
  "code": "AUTH_PREFLIGHT_REQUIRED",
  "sessionId": "session_abc123",
  "pending": [
    {
      "connector": "calendar",
      "authProfileRef": "customer-calendar",
      "connectionMode": "per_user"
    }
  ],
  "satisfied": [
    {
      "connector": "crm",
      "authProfileRef": "customer-crm",
      "connectionMode": "per_user"
    }
  ]
}
```

Customer handling: replace the current authorization-gate state with these arrays.

##### 12. `auth_gate_satisfied`

Indicates that every preflight authorization requirement has been satisfied.

```json
{
  "type": "auth_gate_satisfied",
  "code": "AUTH_PREFLIGHT_SATISFIED",
  "sessionId": "session_abc123"
}
```

Customer handling: close or mark the authorization gate complete and allow the conversation to continue.

##### 13. `auth_challenge_resolved`

Indicates that a just-in-time authorization challenge for a specific tool call has been resolved.

```json
{
  "type": "auth_challenge_resolved",
  "code": "AUTH_JIT_RESOLVED",
  "sessionId": "session_abc123",
  "toolCallId": "tool_call_001"
}
```

Customer handling: mark the matching authorization card or tool call as connected.

##### 14. `message_queued`

Indicates that a user message was queued, commonly while preflight authorization is unresolved.

```json
{
  "type": "message_queued",
  "code": "AUTH_PREFLIGHT_REQUIRED",
  "sessionId": "session_abc123",
  "reason": "Waiting for required authorization"
}
```

Customer handling: show a queued state and do not submit another copy of the same message.

##### 15. `error`

Reports a customer-safe transport or execution error.

```json
{
  "type": "error",
  "content": "The request could not be completed.",
  "metadata": {
    "errorCode": "EXECUTION_ERROR",
    "severity": "error"
  }
}
```

Customer handling: stop the current loading state, display a safe error, and apply the agreed retry policy.

##### 16. `tool_warnings`

Provides non-fatal warnings associated with tool configuration or execution.

```json
{
  "type": "tool_warnings",
  "sessionId": "session_abc123",
  "warnings": ["The order-history connector returned partial results."]
}
```

Customer handling: log or display warnings only when approved. The conversation can normally continue.

##### 17. `session_health`

Provides one or more health diagnostics for the current session.

```json
{
  "type": "session_health",
  "sessionId": "session_abc123",
  "health": [
    {
      "category": "configuration",
      "severity": "warning",
      "code": "OPTIONAL_TOOL_UNAVAILABLE",
      "message": "An optional integration is currently unavailable."
    }
  ]
}
```

Customer handling: treat warnings as non-terminal. For error-severity diagnostics, show a safe failure state and collect support information.

##### 18. `agent_media`

Carries a human-agent media event such as a WebRTC call, screen-share, or co-browse invitation.

```json
{
  "type": "agent_media",
  "sessionId": "transfer_session_xyz",
  "event": {
    "schemaVersion": 1,
    "provider": "contact-center",
    "providerEventType": "call_invite",
    "mediaKind": "webrtc_call",
    "action": "invite",
    "callType": "audio",
    "conversationId": "provider_conversation_001",
    "mediaSessionId": "media_session_001",
    "agent": {
      "firstName": "Priya"
    },
    "credentialState": "masked"
  }
}
```

Customer handling: process only explicitly supported media kinds and actions. Do not expose raw provider credentials or endpoints.

##### 19. `agent_transfer_event`

Carries an asynchronous human-agent lifecycle or content event.

```json
{
  "type": "agent_transfer_event",
  "sessionId": "transfer_session_xyz",
  "event": {
    "type": "agent:message",
    "data": {
      "message": "Hello, I am Priya from customer support."
    },
    "timestamp": "2026-07-28T10:30:00.000Z"
  }
}
```

Customer handling: branch on the nested `event.type`. Don't assume the outer `sessionId` equals the REST chat `sessionId`.

##### 20. `feedback.ack`

Acknowledges a previously submitted feedback action.

```json
{
  "type": "feedback.ack",
  "messageId": "msg_001",
  "success": true,
  "feedbackId": "feedback_001",
  "actionRenderId": "feedback-control-001"
}
```

Customer handling: mark the matching feedback control as submitted. When `success` is `false`, the optional `error` object contains a safe error code and message.

These message types are forward-compatible. SDK consumers should ignore unknown top-level types rather than terminating the connection.

#### Nested human-transfer event types

Its nested `event.type` identifies the transfer event. The current generic transfer contract defines 14 core nested event types. SDK delivery can also produce one derived attachment event, `agent.attachment`. That gives customers 15 transfer-specific nested event names to handle or safely ignore.

|   # | Nested `event.type`       | Meaning                                                     | Recommended customer behavior                                |
| --: | ------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------ |
|   1 | `agent:message`           | Human agent sent text                                       | Display it as a human-agent message                          |
|   2 | `agent:media`             | Media, co-browse, screen-share, or call event               | Handle only explicitly supported media types                 |
|   3 | `agent:connected`         | Human agent connected                                       | Show the connected state                                     |
|   4 | `agent:joined`            | Human agent joined                                          | Update participants when supported                           |
|   5 | `agent:exited`            | Human agent exited without necessarily closing the transfer | Update participants; provider support can vary               |
|   6 | `agent:queued`            | Conversation entered or changed position in the queue       | Show a queued status                                         |
|   7 | `agent:disconnected`      | Human agent left or ended the interaction                   | Clear typing/queue state and apply post-agent behavior       |
|   8 | `agent:typing`            | Human agent started typing                                  | Show a typing indicator                                      |
|   9 | `agent:typing_stop`       | Human agent stopped typing                                  | Clear the typing indicator                                   |
|  10 | `agent:delivery_receipt`  | Provider acknowledged message delivery                      | Update delivery status                                       |
|  11 | `agent:form`              | Human agent sent a form or link                             | Render only approved form fields                             |
|  12 | `agent:assist_suggestion` | Provider supplied an agent-assist suggestion                | Ignore unless the customer experience explicitly supports it |
|  13 | `agent:call_status`       | Associated call status changed                              | Handle only for an approved voice/media experience           |
|  14 | `agent:waiting_message`   | Provider supplied a waiting update                          | Display the safe waiting text                                |
|  15 | `agent.attachment`        | Derived SDK event for a human-agent attachment              | Show a safe authenticated download action                    |

The delimiter is significant: the core events use a colon, while the derived attachment event uses a dot.

Not every provider emits every event. Some events are meaningful only for voice, media, forms, or a particular agent desktop. The customer must:

- Implement the events required by its approved experience.
- Safely ignore known but unsupported events.
- Safely ignore unknown future event types.
- Never treat an unknown event as proof that the transfer ended.

### Example event sequence

A typical transfer sequence over an asynchronous delivery channel is:

```text
agent:queued
agent:waiting_message
agent:connected
agent:typing
agent:typing_stop
agent:message
agent:disconnected
```

An example for queued event:

```json
{
  "type": "agent_transfer_event",
  "sessionId": "transfer_session_xyz",
  "event": {
    "type": "agent:queued",
    "data": {
      "queuePosition": 3,
      "estimatedWaitTime": 120
    },
    "timestamp": "2026-07-28T10:28:00.000Z"
  }
}
```

An example for connected event:

```json
{
  "type": "agent_transfer_event",
  "sessionId": "transfer_session_xyz",
  "event": {
    "type": "agent:connected",
    "data": {
      "agentName": "Priya"
    },
    "timestamp": "2026-07-28T10:30:00.000Z"
  }
}
```

An example for human-agent message:

```json
{
  "type": "agent_transfer_event",
  "sessionId": "transfer_session_xyz",
  "event": {
    "type": "agent:message",
    "data": {
      "message": "I found your order. Let me check the delivery status."
    },
    "timestamp": "2026-07-28T10:30:05.000Z"
  }
}
```

An example for disconnected event:

```json
{
  "type": "agent_transfer_event",
  "sessionId": "transfer_session_xyz",
  "event": {
    "type": "agent:disconnected",
    "data": {
      "message": "The support agent has left the conversation."
    },
    "timestamp": "2026-07-28T10:35:00.000Z"
  }
}
```

Queue position, wait time, agent details, and message field names are provider-dependent and may be absent. The integration must not require them.

### Step 6: Select an asynchronous delivery mechanism

The platform owner and customer must select one of the following designs.

#### Option A: Customer webhook

This is the recommended design for backend-first API Channel integrations. ABL pushes transfer lifecycle events to a customer-owned HTTPS endpoint.

The base API Channel does not currently define this webhook. Before using this option, the platform must add or publish a contract that defines:

- How the callback URL is registered and changed.
- Authentication, preferably request signing or mutually authenticated TLS.
- The exact provider-neutral event envelope.
- Tenant, project, channel, user, and session ownership fields.
- Stable correlation between the customer conversation, ABL chat session, and   transfer session.
- Event identifier and ordering semantics.
- Retry schedule and maximum attempts.
- Duplicate-delivery behavior.
- Timeout policy.
- Dead-letter and replay procedures.
- Callback URL validation and SSRF protection.
- Secret rotation.
- Supported attachment and media delivery.

The customer webhook must:

- Return a success status only after the event is durably accepted.
- Authenticate every callback before processing it.
- Bind the event to the expected tenant, project, channel, user, ABL chat   session, and transfer session.
- Process duplicate deliveries idempotently.
- Preserve per-conversation ordering where possible.
- Reject oversized or invalid payloads.
- Avoid logging credentials or sensitive message content.

Do not invent a callback endpoint or assume a payload until the platform owner provides the published webhook contract.

#### Option B: Supported long-lived WebSocket

The existing Web SDK uses a WebSocket and receives `agent_transfer_event` messages.

Using that transport for an API Channel would change the API Channel from REST-only to a hybrid REST/WebSocket integration. It requires an explicitly supported connection, authentication, resume, backpressure, heartbeat, reconnection, and transcript-recovery contract.

Do not connect an API Channel customer directly to an internal or Web SDK-specific WebSocket endpoint unless the platform owner publishes it as a supported API Channel contract.

#### Option C: Customer-facing polling API

The customer periodically requests transfer events or transcript changes after its last cursor.

The base API Channel does not currently publish such an endpoint. A polling contract must define:

- An SDK-token-authenticated, identity-scoped endpoint.
- A stable cursor or event sequence.
- Pagination and maximum page size.
- Long-polling or polling interval limits.
- Event retention and transcript backfill.
- Duplicate and ordering behavior.
- Rate limits.
- Terminal transfer state.

Internal session, analytics, and agent-transfer history APIs must not be exposed to customers as an undocumented polling substitute.

### Recommended REST-only customer architecture

For a customer that requires a REST-only API Channel and human transfer, the recommended target architecture is:

```text
Customer UI
    |
    | customer message
    v
Customer backend
    |
    | POST /api/v1/chat/agent
    v
ABL Runtime ---------------------> Human-agent provider
    |                                      |
    | authenticated transfer webhook       | human message/event
    v                                      |
Customer callback endpoint <--------------+
    |
    | publish through customer's own realtime layer
    v
Customer UI
```

The customer's own backend can deliver callback events to its UI using its existing WebSocket, SSE, mobile push, or polling infrastructure. That customer-facing connection is owned and secured by the customer; it is not the ABL API Channel WebSocket.

### Customer-side transfer state

Store transfer state with the existing conversation record:

```json
{
  "customerConversationId": "customer-conversation-901",
  "ablSessionId": "session_abc123",
  "sdkTokenReference": "encrypted-token-reference",
  "transfer": {
    "transferSessionId": "transfer_session_xyz",
    "state": "queued",
    "lastEventTimestamp": "2026-07-28T10:28:00.000Z",
    "humanAgentConnected": false
  }
}
```

**Recommended states**

| Customer state     | Enter when                              | Exit when                          |
| ------------------ | --------------------------------------- | ---------------------------------- |
| `ai_active`        | Conversation begins or returns to AI    | Transfer is requested              |
| `transfer_pending` | Transfer request begins                 | Queued, connected, or failed event |
| `queued`           | `agent:queued` or waiting event arrives | Connected, failed, or disconnected |
| `human_active`     | `agent:connected` arrives               | Disconnected                       |
| `post_agent`       | `agent:disconnected` arrives            | AI resumes or conversation ends    |
| `ended`            | Post-agent policy ends the session      | New conversation only              |
| `transfer_failed`  | Transfer cannot be created              | AI fallback or retry policy        |

Do not let the browser select the ABL `sessionId`, customer identity, or transfer ownership record. Resolve them from the authenticated customer backend session.

### Post-agent behavior

When the human agent disconnects:

- `postAgentAction: "return"` clears the active transfer state and allows later messages to return to the ABL AI agent.
- `postAgentAction: "end"` completes the runtime session. The customer should start a new conversation for later messages.
- Some providers can run post-agent work such as customer-satisfaction surveys or after-call work before the transfer is fully ended.

The customer must not assume that `agent:disconnected` immediately means the entire session can be deleted. Keep the conversation record for the retention period agreed with the platform owner.

### Failure and recovery rules

#### Transfer cannot be created

For `outside_hours`, `no_agents`, `queue_invalid`, `declined`, or `failed`:

- Display an approved fallback message.
- Keep or return control to the AI agent when configured.
- Do not repeatedly create new transfers without user confirmation.
- Record the status, timestamp, and customer-side request ID for support.

#### Customer request fails during an active transfer

- Do not blindly replay the message after an uncertain network failure.
- The provider may already have received it.
- Reconcile through the selected transfer event or transcript contract before retrying.

#### Asynchronous connection is lost

- Mark the customer UI as reconnecting.
- Do not declare the human agent disconnected solely because the customer delivery connection dropped.
- Resume from the last acknowledged cursor or request a transcript snapshot if the selected contract supports it.
- If the selected contract has no replay or backfill, document that messages can be missed during disconnection and do not claim reliable transfer support.

#### Events arrive more than once or out of order

- Use the published event identifier for idempotency.
- Apply events only to the matching customer, channel, ABL chat session, and transfer session.
- Do not move from a terminal state back to `queued` because of a delayed event.
- If no event identifier or ordering contract exists, the delivery design is incomplete and must be resolved before launch.

### Attachment, form, and media limitations

Human-agent transfer may include:

- Attachments sent by the customer to the human agent.
- Attachments sent by the human agent to the customer.
- Forms or external links.
- Audio/video invitations.
- Screen sharing or co-browse events.

Each capability requires an explicit customer contract for:

- Supported file types and maximum sizes.
- Malware scanning and content validation.
- Short-lived authenticated download URLs.
- Tenant, user, and session ownership checks.
- URL allowlisting.
- Form field validation.
- Media credential redaction.
- Expiration and cleanup.

Do not render arbitrary provider HTML, URLs, forms, or media credentials directly.

### Transfer-specific security requirements

- Prefer Hosted Exchange so the transfer has a verified end-user identity.
- Never accept a customer-supplied `verifiedUserId` without authenticating the customer first.
- Bind transfer events to tenant, project, channel, end user, ABL chat session, and transfer session.
- Do not expose provider credentials, internal IDs, routing configuration, raw provider payloads, or internal runtime state.
- Sign webhook deliveries and protect against replay.
- Rate-limit message sending and callback processing.
- Redact sensitive transcript content according to the agreed policy.
- Audit transfer initiation, connection, failure, and termination without logging SDK tokens or channel secrets.

### Transfer go-live checklist

- [ ] The business has chosen AI-to-AI handoff, human-agent transfer, or both.
- [ ] A human-agent provider and routing configuration are active.
- [ ] Hosted Exchange is used when verified identity is required.
- [ ] The post-agent action is explicitly configured as `return` or `end`.
- [ ] An asynchronous delivery mechanism has been published and enabled.
- [ ] The customer can receive queued, connected, message, and disconnected events.
- [ ] Transfer events are authenticated and identity-scoped.
- [ ] Transfer-session events are reliably correlated to the correct ABL chat session and customer conversation.
- [ ] Duplicate and out-of-order events are handled.
- [ ] Disconnection recovery and transcript backfill are tested.
- [ ] Customer messages sent during transfer reach the human-agent provider.
- [ ] Human-agent messages reach the correct customer conversation.
- [ ] Queue unavailable, outside-hours, declined, and failed paths are tested.
- [ ] Empty `transfer_active` responses do not create blank message bubbles.
- [ ] Attachments, forms, and media are disabled unless explicitly supported.
- [ ] The `return` and `end` post-agent paths are tested.
- [ ] Tokens, provider credentials, and sensitive transfer payloads are absent from logs.
- [ ] Customer documentation states any event-retention or message-loss limitations.

### Customer implementation decision

Before a customer implements human-agent transfer, record the following decisions.

```text
Transfer provider:
Transfer routing/queue:
Verified identity mode:
Asynchronous delivery: webhook | supported WebSocket | polling
Delivery contract version:
Callback authentication:
Conversation/session correlation field:
Idempotency field:
Ordering/cursor rule:
Retry/replay rule:
Transcript backfill:
Post-agent action: return | end
Attachments/forms/media enabled:
```

If any of the asynchronous delivery, authentication, identity, idempotency, ordering, or recovery fields are undefined, the integration is not ready to be presented as complete human-agent transfer.

## Node.js reference implementation

The following example uses the built-in `fetch` available in Node.js 20 or later. It shows both token bootstrap modes and synchronous REST chat.

```js expandable=true
class AblApiError extends Error {
  constructor(status, body) {
    const apiMessage =
      typeof body?.error === 'string'
        ? body.error
        : (body?.error?.message ?? body?.message ?? `ABL request failed (${status})`);
    super(apiMessage);
    this.name = 'AblApiError';
    this.status = status;
    this.code = body?.error?.code;
    this.retryAfterMs = body?.retryAfterMs;
  }
}

const config = {
  runtimeUrl: process.env.ABL_RUNTIME_URL.replace(/\/+$/, ''),
  tenantId: process.env.ABL_TENANT_ID,
  projectId: process.env.ABL_PROJECT_ID,
  channelId: process.env.ABL_CHANNEL_ID,
  publicKey: process.env.ABL_PUBLIC_KEY,
  channelSecret: process.env.ABL_CHANNEL_SECRET,
  requestOrigin: process.env.ABL_REQUEST_ORIGIN,
};

function requestHeaders(extra = {}) {
  return {
    'Content-Type': 'application/json',
    ...(config.requestOrigin ? { Origin: config.requestOrigin } : {}),
    ...extra,
  };
}

async function postJson(path, body, headers = {}) {
  const response = await fetch(`${config.runtimeUrl}${path}`, {
    method: 'POST',
    headers: requestHeaders(headers),
    body: JSON.stringify(body),
  });

  const raw = await response.text();
  let parsed;
  try {
    parsed = raw ? JSON.parse(raw) : {};
  } catch {
    parsed = { message: raw || 'Invalid JSON response' };
  }

  if (!response.ok) {
    throw new AblApiError(response.status, parsed);
  }

  return parsed;
}

// Public-key mode: create this per end-user application session.
async function initializeAnonymousSession() {
  return postJson(
    '/api/v1/sdk/init',
    { channelId: config.channelId },
    { 'X-Public-Key': config.publicKey },
  );
}

// Hosted Exchange: call only from a trusted customer backend.
async function initializeVerifiedUser(verifiedUserId, customAttributes = {}) {
  const bootstrap = await postJson(
    '/api/v1/sdk/customer-sessions',
    {
      tenantId: config.tenantId,
      projectId: config.projectId,
      channelId: config.channelId,
      verifiedUserId,
      customAttributes,
    },
    { 'X-SDK-Channel-Secret': config.channelSecret },
  );

  return postJson('/api/v1/sdk/init', {
    bootstrapToken: bootstrap.bootstrapToken,
  });
}

async function refreshSdkToken(currentToken) {
  return postJson('/api/v1/sdk/refresh', {}, { 'X-SDK-Token': currentToken });
}

async function sendMessage({ sdkToken, sessionId, message, metadata = {} }) {
  const result = await postJson(
    '/api/v1/chat/agent',
    {
      projectId: config.projectId,
      ...(sessionId ? { sessionId } : {}),
      message,
      metadata,
    },
    { 'X-SDK-Token': sdkToken },
  );

  return {
    sessionId: result.sessionId,
    response: result.response,
    action: result.action,
    outcome: result.outcome,
    actions: result.actions,
    raw: result,
  };
}

// Example public-key conversation.
const initialized = await initializeAnonymousSession();

const conversation = {
  sdkToken: initialized.token,
  sdkTokenExpiresAt: Date.now() + initialized.expiresIn * 1000,
  sessionId: undefined,
};

const firstTurn = await sendMessage({
  sdkToken: conversation.sdkToken,
  sessionId: conversation.sessionId,
  message: 'Hello, I need help with my order',
});

conversation.sessionId = firstTurn.sessionId;
console.log(firstTurn.response);

const secondTurn = await sendMessage({
  sdkToken: conversation.sdkToken,
  sessionId: conversation.sessionId,
  message: 'The order number is ORD-10001',
});

console.log(secondTurn.response);
```

In a service:

- Store the conversation record in a server-side session store or database.
- Key it by the authenticated customer and the customer's conversation ID.
- Encrypt tokens at rest when persisted.
- Never log public keys, channel secrets, bootstrap tokens, or SDK tokens.
- Refresh the SDK token before expiration.
- Serialize concurrent messages for the same `sessionId`.
- Apply a client timeout that is longer than the agreed agent execution time.

This Node.js sample implements the base synchronous REST conversation only. It does not receive asynchronous human-agent events. Do not use it as a complete human-transfer implementation without one of the published delivery contracts described in Section 9.

{/* AG: Add link to what used to be Section 9. */}

## Error handling

Error response bodies can contain either an `error` string or a structured `error` object.

```json
{
  "success": false,
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Invalid request body"
  }
}
```

**How to handle common HTTP statuses**

| Status | Meaning                                                                        | Recommended handling                                                     |
| ------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `400`  | Invalid body or unsupported value                                              | Fix the request; do not retry unchanged                                  |
| `401`  | Missing, invalid, revoked, or expired credential                               | Refresh or initialize once; then require a new session if still rejected |
| `403`  | Origin or permission is not allowed                                            | Stop and correct channel/key configuration                               |
| `404`  | Project, channel, or session not found; may also conceal an ownership mismatch | Verify identifiers and that the token owns the session                   |
| `409`  | Ambiguous channel selection or conflicting state                               | Send the exact `channelId`; do not guess                                 |
| `410`  | Channel/deployment is no longer active                                         | Ask the platform owner to activate or rebind it                          |
| `413`  | Token or request context is too large                                          | Reduce metadata or custom attributes                                     |
| `429`  | Rate or concurrency limit reached                                              | Respect `retryAfterMs` or `Retry-After`; retry with bounded backoff      |
| `500`  | Unexpected runtime error                                                       | Record correlation details and retry only when safe                      |
| `503`  | Runtime dependency or required configuration unavailable                       | Retry with bounded backoff, then escalate                                |
| `504`  | Execution timed out                                                            | Inform the user; do not blindly replay the same turn                     |

### Safe retry policy

Do not automatically retry `/api/v1/chat/agent` after a network timeout, connection reset, `500`, or `504` when it is unclear whether execution began. The agent may have already completed a tool call or changed external state, and the API does not accept a customer idempotency key in this request contract.

Recommended policy:

1. Retry `429` only after the server-provided delay.
2. Retry `503` with short, bounded exponential backoff when the response clearly indicates the request was not executed.
3. On `401`, refresh or initialize once, then stop if authentication still fails.
4. On an uncertain chat failure, show a recoverable error to the user and reconcile the business operation before resending.
5. Never run two chat requests concurrently for the same conversation unless the agent design explicitly supports it.

## Security requirements

- Use HTTPS only.
- Keep `X-SDK-Channel-Secret` on the trusted backend.
- Never expose the channel secret in browser JavaScript, a mobile binary, URLs, analytics, logs, or error messages.
- Treat bootstrap tokens and SDK tokens as sensitive opaque values.
- Do not reuse an SDK token across different end users.
- Bind each stored `sessionId` to the same customer identity and SDK token context that created it.
- Validate the authenticated customer before loading a stored conversation.
- Configure an explicit production origin allowlist.
- Send the minimum required personal data.
- Rotate the channel secret and revoke affected sessions after suspected   exposure.
- Do not request or display runtime debug state through the customer API.
- Ignore unknown response fields and action types rather than failing open.

Disabling the channel, revoking its public key, changing its permissions, or removing its valid deployment binding can invalidate existing SDK tokens.

## Go-live validation checklist

Complete these tests in a non-production environment before launch:

- [ ] `/api/v1/sdk/init` succeeds for the intended channel.
- [ ] An unapproved `Origin` is rejected.
- [ ] The first chat request returns both `response` and `sessionId`.
- [ ] A second message with the same `sessionId` continues the conversation.
- [ ] A session cannot be resumed with another user's token.
- [ ] Tokens are not present in application logs or telemetry.
- [ ] Proactive `/api/v1/sdk/refresh` replaces the token successfully.
- [ ] A revoked or expired credential is handled without an infinite retry.
- [ ] `auth_required` is handled without repeatedly resending the message.
- [ ] Interactive actions render and send the correct selection.
- [ ] `429`, `503`, timeout, and network-disconnect experiences are tested.
- [ ] If SSE is used, `session`, `token`, `done`, `error`, and heartbeats are handled correctly.
- [ ] Customer support can locate a failed request using the timestamp, customer-side request ID, project ID, and session ID without receiving any secret or token.
- [ ] If human-agent transfer is enabled, every item in the [transfer go-live checklist](#transfer-go-live-checklist) is complete.

## Troubleshoot integration issues

{/* AG: Can we convert this to a table? */}

### `/sdk/init` returns `401`

Check that the public key or channel secret:

- Was copied correctly.
- Has not expired or been revoked.
- Belongs to the same tenant, project, and channel.
- Is being sent in the correct header.

For Hosted Exchange, confirm that the channel uses the Hosted Exchange authentication mode.

### `/sdk/init` returns `403 Origin not allowed`

Compare the exact `Origin` header with the origin configured for the public key. Scheme, host, and port are significant.

### `/sdk/init` returns `409`

More than one channel may be associated with the key. Send the exact `channelId` supplied by the platform owner.

### Chat returns `404` for a known `sessionId`

Make sure that:

- The same project and channel are being used.
- The session belongs to the same end-user identity.
- The application did not mix tokens or session IDs between users.
- The stored session ID was not overwritten by another conversation.

The runtime can return `404` instead of revealing that a session belongs to a different identity.

### Every message starts a new conversation

Save the `sessionId` returned by the first chat response and include it in the body of every later request.

### The browser does not receive streamed tokens

Make sure that:

- The client calls `/api/v1/chat/agent/stream`.
- The request sends `Accept: text/event-stream`.
- Reverse proxies disable response buffering for this route.
- The client parses named SSE events, not WebSocket frames.

### Human-agent messages do not arrive in the API Channel

This is expected when only the base REST endpoints are configured. Human-agent messages arrive asynchronously after the original chat request has completed.

Make sure that:

- A customer webhook, supported WebSocket, or customer-facing polling contract has been selected.
- The selected asynchronous mechanism is enabled for the channel.
- Transfer events are correlated to the correct ABL chat session and customer conversation.
- The customer's callback or realtime connection is healthy.
- Recovery or transcript backfill is configured for missed events.

Per-turn `/api/v1/chat/agent/stream` SSE is not a human-agent event subscription.

## Implementation summary

{/* AG: This section should be the first one after prerequisites? */}

For a basic API Channel integration:

1. Get the Runtime URL, project ID, channel ID, origin, and authentication credential from the ABL platform owner.
2. Call `/api/v1/sdk/init` to obtain an SDK token.
3. Call `/api/v1/chat/agent` once for every user message.
4. Omit `sessionId` on the first turn.
5. Save the returned `sessionId`.
6. Include that `sessionId` and the same identity-scoped SDK token on every later turn.
7. Refresh the SDK token before its four-hour expiration.
8. Use `/api/v1/chat/agent/stream` only when SSE streaming is needed.
9. Do not create a WebSocket connection for the API Channel.
10. If human-agent transfer is required, select and publish a webhook, supported WebSocket, or polling contract before implementation.
11. Do not describe REST-only human-agent transfer as complete until asynchronous event delivery, correlation, ordering, idempotency, and recovery are defined and tested.

Use the endpoint paths and integration values supplied by the ABL Studio Channel configuration for the deployed release. Do not construct alternative runtime endpoint paths without confirmation from the ABL platform owner.
