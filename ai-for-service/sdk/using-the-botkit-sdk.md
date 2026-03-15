# Using the BotKit SDK

The Platform BotKit SDK is a set of libraries that enable interaction control between users and the bots you build on the Platform.

When you build a dialog task using Dialog Editor in the Platform, you can subscribe to message and webhook events by adding event handlers and controlling the messages and webhook events using the SDK.

This topic describes how the BotKit SDK is integrated with the Platform, the SDK events you can use, and download and installation instructions for the BotKit SDK.

While an bot can be built to help answer user queries and perform a transaction for a user, in some cases, we may still need to switch from an interaction with the bot to a human agent to help the user complete the intent.

For example:

* A user asks a question or provides a response that the bot is not designed to answer.
* A user directly requests to chat with a Live Agent rather than that bot itself.
* As a developer, you design a Live Agent transfer based on the dialog flow based on a specific condition. For example, a specific user type, or based on tone analysis of the user, you want the dialog flow to transfer to a Live Agent.

## How it Works

You can integrate event handling using the BotKit SDK in your Dialog task by capturing the following event types on the Platform.

### Messaging

On the Platform, a user interacts with your bot on one of the defined channels. In the following diagram, you can see the user message flow through the Platform, the BotKit SDK, and our natural language processing engine.

![Platform messaging architecture](images/bot-platform-messaging-arch.png "Platform messaging architecture")

All messages, both user and bot responses are sent to the BotKit SDK as message events.

### Feedback Survey

When a feedback survey is created for a conversation over a specific channel, a user responds to the bot for a survey question based on the configured survey type (NPS, CSAT, or Thumbs-up/down). The feedback survey score sent by the user is captured in the system.

All the feedback survey messages exchanged between the user and the bot are sent to the BotKit SDK as message events.

### Webhooks

Your BotKit SDK receives webhook events whenever the natural language processor enters the SDK [Webhook node](../automation/use-cases/dialogs/node-types/working-with-the-web-hook-node.md) in an Platform dialog task flow. In the following sequence diagram, flow for a user sending a message via a channel until the user response is shown.

![send message via a channel](images/send-message-via-channel.png "send message via a channel")

For webhook events, you should add a [Webhook node](../automation/use-cases/dialogs/node-types/working-with-the-web-hook-node.md) in the dialog task flow whenever there is a need for server-side validation, execution of business logic, or a backend server call is required. Business logic and the response is sent on the same on_webhook event. The response is an HTTP status code 202. To send response data to the Platform from the SDK, call the sdk.sendWebhookResponse() event.

Webhook events are received by the SDK when the Platform NL Engine processes a Webhook node in a dialog task flow. The Platform NLP engine processes each node, and then transitions to the next node based on the conditions defined. When a Webhook node is processed, a webhook call is executed and the Platform sends the on_webhook event to the SDK. The following sequence diagram shows the message flow with a webhook.

![Message flow with Webhook](images/message-flow-with-webhook.png "Message flow with Webhook")

### Agent Transfer

In the following sequence diagram, the Platform responds to user input directly, until the Agent Transfer condition is matched. When matched, the Platform connects to your BotKit SDK implementation, and then initializes the chat, for example, getting the current conversation. The BotKit SDK integrates the user and agent conversation until the Live Agent session is closed. When switching to a Live Agent, the current dialog task ends.

![Switch to live agent](images/switch-to-live-agent.png "Switch to live agent")

To set up an Agent Transfer in your dialog conversation flow, you will need to:

1. Create an app on the Platform under **Build > Integrations > BotKit** section.

    !!! note

        RS256 and RS512 JWT signing algorithms are not supported for Custom BotKit or BotKit.

2. Define the **Callback URL** and generate **Client ID** and **Client Secret**, and enable **OnAgentTransferNode**.
3. Identify the steps and define the transition conditions to meet to transfer to an agent.
4. Add the Agent Transfer node in the dialog flow as shown in the following illustration

For more information, see [BotKit SDK Tutorial – Agent Transfer](./tutorials/agent-transfer.md).
