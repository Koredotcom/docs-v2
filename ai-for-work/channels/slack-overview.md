# Slack Channel - Overview

AI for Work integrates seamlessly with Slack, enabling employees to access AI-powered assistance directly within their collaboration environment. This integration streamlines productivity by enabling users to perform work-related tasks, query enterprise knowledge sources, and interact with AI agents all within Slack. 

The following guide provides step-by-step instructions to deploy the Platform as a custom Slack application, covering app manifest generation, credential configuration, and organizational rollout.

<img src="../images/slack-config.png" alt="teams_1" title="teams_1" style="border: 1px solid gray; zoom:70%;">

## Strategic Value and Use Cases

* **Seamless Workflow Integration**: Deploying this integration allows teams to access AI assistance instantly during active conversations and collaborative sessions. Designed for departments that require persistent conversation history and context retention across multiple interactions, ensuring that support is always available exactly when and where work happens.
* **Enterprise Knowledge Access**: Beyond simple chat, this integration connects your workforce to centralized knowledge repositories. Users can upload documents, query connected LLM models, and retrieve data-driven answers directly within their channels, transforming Slack from a communication tool into a powerful knowledge retrieval engine.
* **Optimizing Heavy Slack Usage**: This integration delivers maximum value for remote or hybrid organizations that treat Slack as their central hub for communication and project coordination. By embedding AI capabilities into this existing ecosystem, companies can enhance productivity and modernize workflows without requiring employees to adopt new interfaces or disrupt their daily habits.

## Prerequisites

Before you begin the deployment process, ensure you have:

* **Slack Workspace**: Active workspace with administrative privileges.
* **Slack Developer Portal Access**: Permission to create and manage apps in your workspace.
* **AI for Work Account**: Active subscription with access to the Admin Console.
  

## Architecture Overview

The integration between the Platform and Slack follows an app-based architecture using Slack's Developer Portal and OAuth authentication.

**[AI for Work Platform]** ↔ **[Slack App Configuration]** ↔ **[Slack Workspace]**

### Integration Lifecycle

The deployment process is a linear sequence designed for security and ease of setup:

1. **Configuration and Creation:** Administrators start by customizing the app details in the the Platform's Admin Console to generate a specific App Manifest. This manifest is then used to create the application within the Slack Developer Portal.
2. **Connection and Security:** Once created, a Credential Exchange is performed to link the platforms, followed by an Authorization step to grant the necessary permissions.
3. **Rollout:** Finally, administrators define the Welcome Experience (introductory messages and prompts) before granting User Access to onboarded employees.

For detailed implementation instructions, including step-by-step configuration procedures, credential setup, and deployment guidance, refer to the [Slack Integration Configuration](../channels/slack-configuration.md).
