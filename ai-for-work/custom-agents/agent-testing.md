---
title: Agent Testing
description: The Agent Testing provides a controlled environment for
---

The Agent Testing provides a controlled environment for testing and refining agents before deployment, ensuring optimal performance in production environments.


![Details and Purpose](./images/Agent_Testing_1.png "Details and Purpose")



## Accessing the Testing Panel

The Test button becomes active after administrators complete the agent basic details step. When administrators click this button, the system opens the Agent Testing Panel with a compose bar scoped strictly to the selected agent. The system prevents administrators from changing agents or adding attachments within this testing mode.


![Details and Purpose](./images/Agent_Testing_2.png "Details and Purpose")



## Testing Capabilities

* The panel provides default sample queries for one-click execution.
* Users can manually enter custom queries.
* Responses for both query types are displayed within the panel for comprehensive testing.
* Administrators can submit multiple queries per session to thoroughly evaluate agent performance.
* **Clear Chat** button resets the chat history and input field for new sessions.

## Agent Improvement Workflow

Out-of-scope queries trigger an **Improve Purpose based on Query** button that opens a modal displaying the current agent purpose alongside the problematic query. Administrators can generate a revised purpose based on the query and save the updated configuration directly to the agent.


![Details and Purpose](./images/Agent_Testing_3.png "Details and Purpose")



<Note> Agent responses with submission actions show disabled execution buttons in testing mode to prevent unintended actions. </Note>

## Response Management

The panel includes utility features for response management, including copy functionality for agent responses, export options for test results, and configurable follow-up capabilities that administrators can disable as needed during testing scenarios.
