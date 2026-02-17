# Handling Alert Tasks for Agents

The Bot, Workflow, and Autonomous Agents module of the application allows developers to integrate conversation hold and resume functionality within AI for Service Bots. This document provides a procedural overview of how Dialogflow handles brief pauses (holds) and subsequent resumption.

## Core Concepts

### Conversation Hold

A conversation hold represents a temporary pause in the dialogue flow, typically initiated when waiting for an external alert or event. The system maintains conversation context throughout the pause using a unique identifier called `conversation_reference_id`.

### Hold Template

A structured message is displayed to users during a conversation pause. It contains a title and description explaining the reason for the interruption.
Hold Template Customization**

The hold template can be customized to provide relevant information to the user during the pause.

**Fields:** Customizable fields typically include:

- **Title:** A concise title describing the reason for the pause.
- **Description:** A more detailed explanation of the pause and potential next steps.

## Prerequisites

* **Hold Trigger Mechanism:** Implement a mechanism to send a predefined `hold template` message to the user when a conversation needs to be paused.
* **Resume Mechanism:** Define how alerts or messages will trigger the resumption of the paused conversation. This should utilize the `conversation_reference_id`.
* **Correlation ID:** Ensure that both the hold template and the resuming alert or message include the same `conversation_reference_id` for proper matching.

## Workflow

### Triggering a Conversation Hold

When the bot encounters a situation requiring a pause (e.g., awaiting an alert), send a`hold template` message to the user.

#### Required Parameters

<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Required/Optional</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>type
   </td>
   <td>string
   </td>
   <td>Required
   </td>
   <td>Action type (e.g., "hold_conversation")
   </td>
  </tr>
  <tr>
   <td>title
   </td>
   <td>string
   </td>
   <td>Required
   </td>
   <td>Title of the hold message.
   </td>
  </tr>
  <tr>
   <td>description
   </td>
   <td>string
   </td>
   <td>Required
   </td>
   <td>Description of the hold message.
   </td>
  </tr>
  <tr>
   <td>conversation_reference_id
   </td>
   <td>string
   </td>
   <td>Required
   </td>
   <td>The unique identifier for this specific conversation.
   </td>
  </tr>
</table>

#### Example Hold Template Code

```

let sessionId = context.&lt;uniqConversationId>;  \
let response = { \
  "type": "template", \
  "payload": { \
    "template_type": "hold_conversation", \
    "title": "Request is being processed...", \
    "description": "You will be notified as soon as it is ready!", \
    "conversation_reference_id": sessionId // e.g., "abc123" \
  } \
}; \
response = JSON.stringify(response); \
print(response); \

```

#### Displaying the Hold Template

Upon receiving the hold template, the user interface in the application:

* Pauses the ongoing conversation.
* Displays the hold template to the user, including the customized title and description.

!!! note

    You must first activate the alert service before displaying the hold template.

### Resuming the Conversation

Removes the hold template and continues the conversation with the alert or message response.

#### Required Parameters

<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Required/Optional</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>conversation_reference_id
   </td>
   <td>string
   </td>
   <td>Required
   </td>
   <td>The unique identifier of the paused conversation.
   </td>
  </tr>
  <tr>
   <td>text
   </td>
   <td>string
   </td>
   <td>Required
   </td>
   <td>Response content to display upon resumption.
   </td>
  </tr>
</table>

#### Example Resume Response Code

```

let response = { \
  "conversation_reference_id": id, // e.g., "abc123" \
  "text": result  \
}; \
response = JSON.stringify(response); \
print(response); \

```

!!! note

    * The `conversation_reference_id` ensures that the response is correctly associated with the paused conversation.
    * Any text or template that includes `conversation_reference_id` can be used as an alert response or message to help start a new conversation.

#### Removing the Hold Template

Once the resume response is received:

* The hold template is removed from the user interface.
* The new alert or message is displayed to the user.

### Key Points

* **Customization:** Leverage the flexibility of the hold template to provide contextually relevant messages to users.
* **Mandatory Correlation ID:** The `conversation_reference_id` is critical for ensuring seamless conversation flow during pauses and resumes.
* **Alert/Message Flexibility:** Support various response formats, including plain text and custom bot templates, for optimal user experience.
