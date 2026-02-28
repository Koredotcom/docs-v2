# List of Agent Platform APIs

## Agentic App APIs

The following APIs let users interact with agents and manage sessions.

| Use Cases   | APIs     |
|--------|----------|
|  Create, retrieve, or end a session with an agent to maintain conversation context.     |     [Sessions API](agentic-apps/sessions.md)     |
|  Send user input to an agent within a session and receive the agent's response.      |  [Runs API](agentic-apps/execute.md) |
|  Upload or delete attachments to a conversation. You can reference these attachments as context during an agent run.   |   [File Attachment APIs](agentic-apps/upload.md)       |
|    Create a new Agentic App.    |  [Create App API](agentic-apps/create-app.md)   |

## File Management API

| Use Cases   | API     |
|--------|----------|
| Upload a small or large public file in the [supported formats](apis-list/upload-file-api.md). | [File Upload API](apis-list/upload-file-api.md) |

## View Process Status API

| Use Cases   | API     |
|--------|----------|
| Check the status of an ongoing or completed job related to tools or models. | [Get Dock Status API](apis-list/get-dock-status.md) |

## Manage Tools APIs

| Use Cases   | APIs    |
|--------|----------|
| Import a new tool.     |  [Import a New Tool API](apis-list/import-a-new-tool.md) |
| Import new configurations, datasets, or updates into a tool.      |   [Import to an Existing Tool API](apis-list/import-to-an-existing-tool.md) |
| Export a tool's configuration and associated data, including its flow, for backup, sharing, or reuse.      | [Export a Tool API](apis-list/export-a-tool.md) |
| Deploy a specific tool into an environment. | [Deploy a Tool API](apis-list/deploy-a-tool.md) |
| Undeploy a specific tool from an environment. | [Undeploy a Tool API](apis-list/undeploy-a-tool.md) |

## Manage Models APIs

| Use Cases  | APIs     |
|--------|----------|
|  Import a model in chunks.     |    [Import a Model API](apis-list/import-a-model.md)      |
|  Export a trained AI model.     |   [Export a Model API](apis-list/export-a-model.md)       |
| Deploy a model into the environment in the Ready to Deploy state and configure its parameters. You must perform the initial deployment manually in the Platform account. Consecutive deployments must happen via the public API.      | [Deploy a Model API](apis-list/deploy-a-model.md)         |
| Undeploy a model from the environment.      |   [Undeploy a Model API](apis-list/undeploy-a-model.md) |
| Manage external model connections.      |   [External Model Connection APIs](apis-list/connections-api.md) |


