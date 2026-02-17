# Contact Center AI Migration from XO v10 to v11

This document provides step-by-step instructions for upgrading your SmartAssist or Contact Center AI (CCAI) account to XO v11. The upgrade process ensures a streamlined transition to the new platform.

**Prerequisites**

* A valid SmartAssist account.
* The user with Bot Owner access can only upgrade the SmartAssist account.

**Pre-Upgrade Checklist**

* Download reports that aren't supported in the XO v11. 
Agent Login Logout Details Report-If you need data from this report, go to SmartAssist, rerun the report before the upgrade, and download the reports. 
* Learn about changes and enhanced features.
* Tell your SmartAssist users of the new upgrade and downtime.
* During the upgrade, they're terminated if there are any active conversations on all channels (or wait for them to taper off).
* The system preserves all other data (in Reports, Dashboards, etc.).

## What Changes

### Bot to App Transition

The bot system is transitioning to a consolidated app in the XO11 application. SmartAssist Instance bot and child bots become individual Apps on XO v11.

### Workflow Migration

All existing workflows transfer to their current state. The system maintains flows containing deflection nodes during the transfer, but with a renewed experience. The system combines Conversational Input and Run Automation.

### User and Role Migration

User migration aligns with the user management framework. All current roles transfer directly. The system recreates SmartAssist roles as custom roles, maintaining identical permissions, with the naming convention: `{roleName}_{instanceBotName}`.

### Use Case Handling

After the upgrade, configurations made in use cases in SmartAssist work as before on XO v11, but the dialogs won't be visible. If you want to make any changes [contact Support](https://support.kore.ai).

### Agent Transfer Settings

The system preserves agent transfer configurations implements them at the application level.

### Default Flow Changes

XO v11 discontinues the existing default flows, such as No Agents Available and Out of Hours, that were previously available from the left navigation menu because dedicated flow types now support these scenarios.

### New or Changed Reports

* Agent Entry-Exit Summary Report (New Report): This report won't include login or logout events, but tracks the Agent’s app entry and exit events.
* Agent Activity Summary Report (Changed Report): This report no longer contains the first login and last logout fields; instead, it includes the agent’s App Entry and Exit fields. 
* If you need reports with previous columns, rerun them in SmartAssist before upgrading to XO v11. The reports run with new columns after the upgrade.

### Billing Structure Change

Billing structure changes for different user categories:

* Enterprise users convert to XO v11 Enterprise standard (includes Automation AI, Contact Center AI, Basic RAG Search AI, Basic Agent AI).
* Non-Enterprise Free users receive an XO v11 trial version for Automation AI and Search AI, with a “Try now” option for Agent AI and Search AI.
* Non-Enterprise paid users ($10>) receive an XO v11 trial version for Automation AI and Search AI, with a “Try now” option for Agent AI and Search AI.

### Updated Automation Node in Experience Flows

The updated node features new transitions (`On Success` and `On Failure`) and expanded Default routing options that let users to select linked apps along with the current app. During migration, existing `Let the bot handle` configurations map to appropriate radio buttons in XO v11, and `Go to a node` selections map to `Exit Automation and go to a selected node` under the respective success or failure categories, maintaining the same connections. For Agent Transfer functionality, the system either uses existing configurations from Conversational IVR (as these nodes are now merged in XO v11) or create new Agent Transfer nodes with the default `Connect to Agent` dialogs. This migration preserves the SmartAssist user experience and maintains the same behavior when configuring `Let the bot handle` options, with no return path unless the flow encounters an Agent Transfer Node.

### Deflection Flow

After migrating to XO v11, the Deflect to Chat node in SmartAssist experience flows continues to function as configured, preserving original use cases and behavior. XO v11 supports chat deflection triggers based on the selected configuration—Automation or Agent Transfer—through a similar Deflection Flow node.

Within Agent Transfer selections, chat deflection remains available in both waiting and transfer contexts. XO v11 introduces a new Deflection Flow node for voice channels. Default flows (Default Conversational Input Voice Flow and Agent Deflection Flow) and custom flows using Deflect to Chat automatically upgrade to use this node.

By default, the node uses `trigger using automation context.` Flow developers can override it by selecting `trigger using user selection,` which prompts a dropdown for Chat Automation or Agent Transfer. The system validates that the `Go to node` is set for `User Selection`. If missing, an error appears. Chat Automation selections don't require this validation.

Migrated flows appear under Start Flows. The Deflection Flow node is available in both Start and Conditional Voice flows, enabling testing and support for the Waiting experience in voice deflection.

!!! Note

    To use the Deflection Flow, users must upgrade to enable automation access.

## Important Points

### Upgrade Access Impact

The upgrade process is irreversible, and the system can't revert accounts upgraded from SmartAssist to XO v11 to their previous state. If an error occurs during the upgrade, the system automatically reverts the process, and users continue to access SmartAssist.

### Localization

The XO11 Contact Center UI only supports English, Japanese, and Korean. After migration, the system automatically switches users who selected any other app language to English.

### Audit Trail Requirements

* On Initiating an upgrade, the system creates Audit Events records.
* The system tracks upgrade status updates throughout the process.

### Role-Based Access Control

* Only app owners have upgrade privileges for both the SmartAssist instance and child bots.
* After the upgrade, agents and supervisors receive notifications about upgrades.
* Users can use existing credentials to access the XO v11.
* The system redirects agents and supervisors to XO v11 for content center operations.

## Upgrade Journey from SmartAssist to XO v11

### Upgrade Notification

Steps to initiate the upgrade to XO v11:

1. Log in to **SmartAssist** > **Configurations**. A notification displays at the top of the screen.  
    <img src="../images/sa-migrate-banner.png" alt="Migrate Banner" title="Migrate Banner" style="border: 1px solid gray; zoom:70%;"> 

2. The following options are available:
    * **Learn More**: Redirect to [XO v11 Documentation](https://docs.kore.ai/xo/home/).
    * **Go to new XO Platform**: Redirect to the [XO v11 Platform](https://platform.kore.ai/).
3. Select **Go to new XO Platform** to initiate the upgrade. 

    !!! Note

        Only app owners can upgrade the SmartAssist instance bots and child bots.

4. Login to XO v11 using your SmartAssist credentials.  
    <img src="../images/xo-login-page.png" alt="Login Page" title="Login Page" style="border: 1px solid gray; zoom:70%;"> 

5. All apps (SmartAssist and automation bots) appear. Select the **SmartAssist bot** to upgrade to an App in XO v11.  
    <img src="../images/customer-success-app.png" alt="SA AI Agent" title="SA AI Agent" style="border: 1px solid gray; zoom:70%;"> 

6. A pop-up appears with the following options:  
    * Why Upgrade?  
    * Attention  
    * Upgrade  
    Select **Continue**.  
        <img src="../images/upgrade-screen.png" alt="SmartAssist AI Agent" title="SmartAssist AI Agent" style="border: 1px solid gray; zoom:70%;">

7. The system selects the Include Agent Configuration checkbox by default. It includes agent profile data, agent group assignments, agent-to-skill mappings, agent-to-experience flows, and agent-to-queue mappings. Select **Download & backup your bot**, and select **Start Upgrade**. The system downloads the following configuration data:  
    * Instance-bot configurations.
    * Agent-related information (for example, agent mapping to queues and agent groups).
    * Experience flow and channel configurations
    * All contact center settings, including:
        * Standard responses,
        * Digital forms,
        * Conversation status control configurations,
        * All other relevant SmartAssist configurations.  
        <img src="../images/include-agent-config.png" alt="Download Bot Config" title="Download Bot Config" style="border: 1px solid gray; zoom:70%;">

    !!! Note

        A complete backup of your SmartAssist configuration is downloaded. While this data can’t be imported into XO10 or XO v11, it serves as a reference for troubleshooting any issues that may arise during migration. 

8. A progress bar displays. Select **Finish** on completion.  
    <img src="../images/upgrade-success.png" alt="Upgrade Successful" title="Upgrade Successful" style="border: 1px solid gray; zoom:70%;">

    The system selects the Send Email to SmartAssist users option by default. When the app owner selects Finish, the system sends an email to tell users about the upgrade. Selecting **Visit Documentation Portal** redirects the user to the [XO v11 documentation page](https://docs.kore.ai/xo/home/).  
    <img src="../images/email.png" alt="Email" title="Email" style="border: 1px solid gray; zoom:70%;">

    !!! Note

        Supervisors and agents cannot access XO11 during the upgrade. Users can log in to XO11 and see the app to which they have access only after the instance bot is upgraded to an app. They can log in using their SmartAssist credentials.

9. A success message displays. In XO11, the SmartAssist instance bot upgrades to an app.  
    <img src="../images/explore-app.png" alt="Explore App" title="Explore App" style="border: 1px solid gray; zoom:70%;">

### Upgrade Failure

If there is an error during the upgrade, the system stops the upgrade and instantly auto reverts it. 

1. An error notification appears on the upgrade window.  
    <img src="../images/error-notification.png" alt="Error Notification" title="Error Notification" style="border: 1px solid gray; zoom:70%;">

2. The upgrade process is auto reverted, highlighting the steps where issues occurred during the upgrade.  
    <img src="../images/auto-revert.png" alt="Auto Revert" title="Auto Revert" style="border: 1px solid gray; zoom:70%;">

3. Select the **Download Audit Log** to download the .CSV file, share it with [Support](https://support.kore.ai) for further assistance, and select **Close**.  
    <img src="../images/download-audit-log.png" alt="Download Audit Log" title="Download Audit Log" style="border: 1px solid gray; zoom:70%;">

    The system redirects you to the XO v11 home page.

## Post Upgrade Journey

### License Migration

SmartAssist License is seamlessly migrated for existing SmartAssist Enterprise accounts to XO v11 by automatically provisioning predefined module-specific licenses. The License Migration specifically manages the automatic enablement of appropriate license tiers for Contact Center AI, Automation AI, Search AI, and Agent AI modules based on the customer’s existing SmartAssist configuration and usage patterns.  
<img src="../images/product-switcher.png" alt="Product Switcher" title="Product Switcher" style="border: 1px solid gray; zoom:70%;">

Access the modules on the XO v11 platform by selecting the Product Switcher at the top-left corner.

### Upgrade of Instance Bot and Child Bot to XO v11

* Enterprise licenses from SmartAssist are automatically analyzed and converted into equivalent module-specific licenses on XO v11.
* The system provisions new licenses across four distinct AI modules based on the customer’s previous usage and configuration:
    * Contact Center AI
    * Automation AI
    * Search AI
    * Agent AI
* The system integrates the license conversion process into the broader upgrade framework to maintain uninterrupted service access for customers during the transition.

!!! note

    When upgrading an account associated with SmartAssist, the instance bot does not initially appear in XO v11. Contact the Support team, to execute a migration script to make the instance bot visible in XO v11 for that account. Afterward, the instance bot must be upgraded, which then becomes the Contact Center AI instance. At this stage, the SmartAssist configurations are properly migrated to Contact Center AI.

### Upgrade Access Matrix

#### Enterprise Standard

**App Owner**

* Default landing: CCAI flows and channels page.
* Access rights:
    * **Contact Center AI**: Full access (excluding Campaigns, Case Management, and Quality Management).
    * **Automation AI**: Full access.
    * **Search AI**: Basic RAG access.
    * **Agent AI**: Basic access.

**Supervisor_BotName**

* The system limits access to CCAI.
* No access to Automation AI, Search AI, or Agent AI.
* Data Restrictions: The system limits monitor access to supervised queues.
* Available features: Monitor dashboard without queue restrictions.

**Agent_BotName**

* The system limits access to CCAI.
* No access to Automation AI, Search AI, or Agent AI.
* **Landing page**: Agent Console.
* **Data access**: Limited to own interactions.
* **Available features**: Agent Console, Interactions Dashboard, My Dashboard.

**CustomRole_BotName**

* The system grants access based on configured permissions.
* If granted, include Automation AI access alongside CCAI.
* Landing page determined by permissions:
    * Flow Management permission → Flows and Channels
    * Monitor permission → Monitor
    * Agent Console permission → Agent Console

#### Non-Enterprise

**App Owner**

* Default landing: CCAI flows and channels page (trial version).
* Access rights:
    * **Contact Center AI**: Full trial access (excluding Campaigns, Case, and QM).
    * **Automation AI**: Full trial access.
    * **Search AI**: Basic RAG with “Try Now” option.
    * **Agent AI**: Basic access is available with the “Try Now” option.

**Other Non-Enterprise Roles**

* Similar restrictions as Enterprise Standard, but in trial mode.
* The system limits supervisor and agent roles to CCAI trial access.
* Custom roles follow the permission-based access model.

### Automation Bots Upgrade

#### Enterprise Automation Bots

* App Owner:
    * Default landing: Automation AI flows page.
    * Full access to Automation AI.
    * Full access to CCAI.
    * Basic RAG access for Search AI.
    * Basic Agent AI access.
* All other roles (Supervisor, Agent, Custom): No access.

#### Non-Enterprise Automation Bots

* App Owner:
    * Default landing: Automation AI flows page (trial version).
    * “Try Now” access to Contact Center AI.
    * The trial version of Search AI with Basic RAG.
    * “Try Now” access to Agent AI.
* All other roles (Supervisor, Agent, Custom): No access.

### Data Access Restrictions

* **Supervisors**: Limited to assigned queue data.
* **Agents**: Limited to their own interaction data.
* **App Owners**: No data restrictions.
* **Custom Roles**: Based on assigned permissions.

### Roles and Permissions

The system maps roles in SmartAssist at the instance bot level. After the upgrade to XO v11, the system maps these roles-including default and custom roles-at the workspace level. 

| **SmartAssist Role**             | **XO v11 CCAI Role**         |
|----------------------------------|-------------------------------|
| Instant bot creator in SmartAssist | App Owner                    |
| Agent                            | Agent + botName              |
| Supervisor                       | Supervisor + botName         |
| Custom roles                     | Custom roles + botName       |

Roles in Contact Center AI have additional access see [Role Management](../user-management/role-management.md) for details.

## SmartAssist vs Contact Center AI Documentation Links

| **SmartAssist**                         | **XO11 Contact Center AI Module** |
|----------------------------------------|-----------------------------------|
| Experience Flows | 1. Inbound Flows are moved to Flows & Channels > Start Flows. [Learn more](../flows/create-flows.md#the-start-flows)<br>2. Call Disconnect Flow moved to Flows & Channels > Exit Flows. [Learn more](../flows/create-flows.md#the-exit-flows)<br>3. All other flows moved to Contact Center AI > Conditional Flows. [Learn more](../contactcenter/flows-and-routing/conditional-flows.md) |
| Waiting Experience                     | Moved to Contact Center AI > Waiting Flows. [Learn more](../contactcenter/flows-and-routing/waiting-flows.md) |
| Use Cases                              | Deprecated. Existing Q&A use cases are moved to Answers > Knowledge AI > FAQs. [Learn more](../automation/knowledge-ai/manage-faqs.md)<br>Existing conversation use cases are moved to Automation > Use Cases > Dialogs. [Learn more](../automation/use-cases/dialogs/managing-dialogs.md)<br>Ability to classify conversation use cases for automation, deflection, or agent transfer is deprecated. Modify dialogs to include agent transfer nodes manually. |
| Skills                                 | Moved to Contact Center AI > Skills. [Learn more](../contactcenter/routing/skills/skill-management.md) |
| Queues                                 | Moved to Contact Center AI > Queues. [Learn more](../contactcenter/routing/queues/queue-management.md) |
| Hours of Operation                     | Moved to Contact Center AI > Hours of Operation. [Learn more](../contactcenter/configurations/hours-of-operation/manage-hours-of-operation.md) |
| Default Flows                          | Deprecated. Use conditional flows for no agents available & out of hours. [Learn more](../contactcenter/flows-and-routing/conditional-flows.md#conditional-flows) |
| Users                                  | Moved to Contact Center AI > Agent Management > Agent Groups. [Learn more](../contactcenter/agent-and-supervisors/agent-management/agent-management.md#agent-groups) |
| Agent Groups                           | Moved to Contact Center AI > Agent Management > Agent Groups. [Learn more](../contactcenter/agent-and-supervisors/agent-management/agent-management.md#agent-groups) |
| Agent Settings                         | Moved to Contact Center AI > Agent Management > Agent Settings. [Learn more](../contactcenter/agent-and-supervisors/agent-management/agent-management.md#agent-settings) |
| Role Management                        | Moved to Users > Access Controls > Role Management. [Learn more](../user-management/role-management.md#manage-role-and-permissions) |
| Agent Status                           | Moved to Contact Center AI > Agent Management > Agent Status. [Learn more](../contactcenter/agent-and-supervisors/agent-management/agent-management.md#agent-status-management) |
| Service Level                          | Moved to Contact Center AI > Performance Management > SLAs & Alerts. [Learn more](../contactcenter/performance-management/slas-and-alerts.md#service-level) |
| Channels > Voice                       | Moved to Flows & Channels > Channels > Voice Gateway. [Learn more](../channels/voice-gateway/configure-voice-gateway.md) |
| Channels > Chat                        | Moved to Flows & Channels > Channels > Digital. [Learn more](../channels/adding-channels-to-your-bot.md) |
| Channels > Email                       | Moved to Flows & Channels > Channels > Digital. [Learn more](../channels/adding-channels-to-your-bot.md) |
| Agent Transfer > Voice                 | Moved to App Settings > Integrations > Voice. [Learn more](../app-settings/integrations/agents/agent-transfer-integrations.md)<br>**Note**: Additional settings may be required. |
| Agent Transfer > Chat                  | Moved to App Settings > Integrations > Chat. [Learn more](../app-settings/integrations/agents/agent-transfer-integrations.md)<br>**Note**: Additional settings may be required. |
| Agent Console                          | Moved to Contact Center AI > Console. [Learn more](../console/agent-console-introduction.md) |
| Monitor                                | Moved to Contact Center AI > Console > Monitor. [Learn more](../console/monitor-queues-agents-and-interactions.md) |
| Surveys                                | Moved to Contact Center AI > Configurations > Surveys. [Learn more](../contactcenter/configurations/surveys/configure-surveys.md) |
| Agent Forms                            | Moved to Contact Center AI > Configurations > Agent Forms. [Learn more](../contactcenter/configurations/agent-forms/configure-agent-forms.md) |
| Dispositions                           | Moved to Contact Center AI > Agent Management > Dispositions. [Learn more](../contactcenter/agent-and-supervisors/dispositions/manage-dispositions.md) |
| Languages & Speech                     | Moved to Contact Center AI > Configurations > Languages & Speech. [Learn more](../contactcenter/configurations/languages-and-speech/configure-languages-and-speech.md) |
| Standard Responses                     | Moved to Contact Center AI > Configurations > Response Templates. [Learn more](../contactcenter/configurations/response-templates/manage-response-templates.md) |
| Interactions                           | Moved to Contact Center AI > Analytics > Interactions. [Learn more](../analytics/overview/conversations.md) |
| Queues & Agents                        | Moved to Contact Center AI > Analytics > Queues & Agents. [Learn more](../analytics/contact-center/queues-and-agents.md) |
| Reports                                | Moved to Contact Center AI > Analytics > Reports. [Learn more](../analytics/contact-center/reports/reports-list.md) |
| API Setup                              | Moved to App Settings > Dev Tools > API Scopes. [Learn more](../administration/security-and-control/api-scopes.md) |
| Widgets                                | Moved to Contact Center AI > Configurations > Widgets. [Learn more](../contactcenter/configurations/widgets/configure-widgets.md) |
| AgentAssist settings                   | Moved to the AgentAI module. [Learn more](../agentai/configuration/widget-settings.md) |
| SearchAssist                           | Moved to the AgentAI module. [Learn more](../agentai/configuration/linked-services.md) |
| Advanced settings                      | Moved to Contact Center AI > Configurations > Advanced Settings.|

!!! Note

    SmartAssist is nearing its end-of-life. All new Contact Center features will be developed exclusively on XO v11. Existing users must migrate to ensure uninterrupted service and continued feature access.

<hr>

 **Related Links**

* [What's New in XO v11](./whats-new-in-xo-platform.md)
* [Key Differences Between XO v11 and v10](../getting-started/key-differences-between-xo11-and-xo10.md)