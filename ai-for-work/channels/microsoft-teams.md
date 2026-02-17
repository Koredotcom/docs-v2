# Microsoft Teams and Copilot Integration - Overview

AI for Work integrates seamlessly with Microsoft Teams, enabling employees to access AI-powered assistance directly within their collaboration environment. This integration streamlines productivity by allowing users to perform work-related tasks, receive proactive notifications, and utilize Copilot features all within Microsoft Teams. The following guide provides step-by-step instructions for deploying AI for Work as a custom Microsoft Teams application, covering Microsoft Azure Bot Service setup, authentication, configuration, and organizational rollout.

## When to Use Microsoft Teams Integration

The Microsoft Teams integration is designed for organizations seeking to embed AI capabilities directly into their existing collaboration workflows without requiring users to switch between applications or learn new interfaces. This integration is particularly valuable for teams that rely on Microsoft Teams as their primary communication and collaboration platform.

### Ideal Implementation Scenarios

**Organizations with Heavy Microsoft Teams Usage**

* Companies where Microsoft Teams serves as the central hub for daily communication and collaboration.
* Remote or hybrid workforces that conduct most meetings, file sharing, and project coordination through Microsoft Teams.
* Organizations already invested in the Microsoft 365 ecosystem seeking to enhance productivity without workflow disruption.

**Workflow Integration Requirements**

* Teams that need AI assistance during active meetings, chat conversations, or collaborative sessions.
* Departments requiring instant access to AI capabilities while working on shared documents or projects.
* Organizations wanting to reduce context switching between multiple applications during work processes.

**Proactive Notification Needs**

* Businesses requiring AI-driven alerts, reminders, or updates delivered directly within their collaboration environment.
* Teams that benefit from automated status updates, task reminders, or intelligent recommendations during their workflow.
* Organizations needing to push time-sensitive information or insights to users actively working in Teams.

**Copilot Enhancement**

* Companies utilizing Microsoft Copilot seeking to extend AI capabilities beyond standard Copilot features.
* Organizations wanting to integrate custom AI agents and workflows with native Microsoft AI tools.
* Teams requiring specialized AI assistance that complements existing Copilot functionality.

## Architecture Overview

The integration between the Platform and Teams follows a bot-based architecture using Azure Bot Service as the communication bridge:

`[AI for Work Platform] ↔ [Azure Bot Service] ↔ [Microsoft  Teams]`

Key Components:

* **AI for Work Platform**: Core AI service that processes user requests.
* **Azure Bot Service**: Microsoft's cloud-based bot framework that handles message routing.
* **Microsoft Teams**: The application where users interact with the AI bot.
* **Azure App Registration**: Manages authentication and permissions for the bot.

## Prerequisites

Before beginning the deployment process, ensure you have:

* **Azure Subscription** – Active subscription with administrative privileges.
* **Microsoft Teams Admin Access** – Permission to upload and manage custom apps in the Microsoft Team Admin Center.
* **AI for Work Account** – Active subscription with access to the Admin Console.

## Integration Flow

The integration process follows these sequential steps:

1. **Webhook Configuration** – Copy the Webhook URL from the Platform.
2. **Azure Bot Creation** – Create and configure the Azure Bot Service.
3. **Credential Exchange** – Securely transfer credentials between the Platform and Azure.
4. **Manifest Generation** – Generate the Microsoft Team application manifest file.
5. **Microsoft Team Deployment** – Upload manifest to Microsoft Team Admin Center.
6. **User Approval** – Configure user access and permissions.

For detailed implementation instructions, including step-by-step configuration procedures, authentication setup, and deployment guidance, refer to the [Microsoft Teams Integration Configuration Guide](../channels/microsoft-teams-config.md)