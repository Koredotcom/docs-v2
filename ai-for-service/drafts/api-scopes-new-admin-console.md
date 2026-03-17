# Manage API Scopes for Apps - New Admin Console

API Scopes define the level of access and control that an app has over various features and services within the platform. By creating apps and assigning appropriate scopes, developers and administrators can securely manage how different components of the platform are accessed and interacted with via public APIs.

This modular approach ensures fine-grained access control, enabling you to expose only the required functionalities to each app or integration.

##  Getting Started

To begin using API scopes:

1. **Create an App**
    * Click the **+ New API Scope** button to create a new app.
    * Select the **+Create App** option from the App drop-down.
    * Enter an App Name. Once submitted, a **Client ID** and **Client Secret** are generated    automatically.
    * These credentials are used to authenticate API requests made by the app. 

2. **Assign API Scopes**
    * Assign scopes based on the features your app needs to access. 
    * Scopes are permission categories that unlock specific platform capabilities.  

<img src="../images/api-scope-new-admin-console.png" alt="API Scopes" title="API-Scopes" style="border: 1px solid gray;zoom:70%;"/>

## Supported API Scopes

The following API scopes are available for this feature.

| API Scope               | Description |
|-------------------------|-------------|
| IntentIdentification   | Grants access to detect intents and entities from an utterance using a secured API |
| BotDefinition           | Allows bot creation, export, and import operations |
| BatchTest               | Enables execution and management of Batch Test Suites, including running tests and retrieving results |
| BotPublish              | Enables publishing bots for deployment |
| TestAndTrain            | Provides access to train ML models, manage FAQs, and import/export utterances |
| Logs                    | Grants access to retrieve bot audit and admin console logs |
| GenAILLMUsageLogs       | Allows the retrieval of GenAI and LLM usage logs through secure APIs |
| ProfileManagement       | Enables role management and deletion of user data |
| BotAnalytics            | Allows retrieval of chat history and conversation sessions |
| UserManagement          | Supports user management operations |
| CustomReports           | Allows fetching of data used in custom widgets and reports |
| ManageKnowledgeGraph    | Grants permission to manage and export knowledge graph definitions |
| ChannelManagement       | Enables creation and update of communication channels |
| BotKit                  | Allows configuration of botkits and agent transfers |
| MasterAdmin             | Grants access to view and use sample bots |
| Processflow             | Grants permission to execute Process Apps using secure APIs |
| ProcessDefinition       | Enables importing, exporting, and listing of Process Apps through secure APIs |
| ProcessPublish           | Grants permission to publish Process Apps securely via API |
| ProcessLogs             | Grants access to retrieve audit logs related to Process App executions and actions |
| LanguageSettings        | Allows management of bot languages—enabling/disabling languages, updating language settings, and changing the default language |
| Getlinkedbot details    | Assign this scope to get the linked bot details for UB |
| Addlinkedbot            | Assign this scope to add a linked bot to UB |
| ConversationTests       | Assign this scope to manage and execute conversation test suites, including creation, deletion, and status retrieval |
| FileAccess              | Assign this scope to retrieve the download URL of an uploaded file |
| Answers                 | Assign these scopes to enable full control over Search AI, including Answer Generation, managing feedback, ingesting and maintaining data, configuring facets, chunks, highlights, and overseeing document and permission entities |

Once an app is configured with the necessary scopes, it can be used either from within the **App Builder Platform** or externally through the platform’s **public APIs**. For the complete list of supported APIs, refer to the corresponding public API ([see here for list](../../apis/automation/api-list.md){:target="_blank"}).
