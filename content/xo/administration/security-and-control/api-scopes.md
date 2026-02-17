# Manage API Scopes for Apps

API Scopes define the level of access and control that an app has over various features and services within the platform. By creating apps and assigning appropriate scopes, developers and administrators can securely manage how different components of the platform are accessed and interacted with via public APIs.

This modular approach ensures fine-grained access control, enabling you to expose only the required functionalities to each app or integration.


##  Getting Started

To begin using API scopes:

1. **Create an App**
    * Click the  **New** button to create a new app.
    * Select the **+Create App** option from the App drop-down.
    * Enter an App Name. Once submitted, a **Client ID** and **Client Secret** are generated    automatically.
    * These credentials are used to authenticate API requests made by the app. 

2. **Assign API Scopes**
    * Assign scopes based on the features your app needs to access. 
    * Scopes are permission categories that unlock specific platform capabilities.  

<img src="../images/api-scope.png" alt="API Scopes" title="API-Scopes" style="border: 1px solid gray;zoom:70%;"/>

## Supported API Scopes

The following API scopes are available for this feature.

<table>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><strong>IntentIdentification</strong>
   </td>
   <td>Grants access to detect intents and entities from an utterance using a secured API
   </td>
  </tr>
  <tr>
   <td><strong>BotDefinition</strong>
   </td>
   <td>Allows bot creation, export, and import operations.
   </td>
  </tr>
  <tr>
   <td><strong>BatchTest</strong>
   </td>
   <td>Enables execution and management of Batch Test Suites, including running tests and retrieving results.
   </td>
  </tr>
  <tr>
   <td><strong>BotPublish</strong> 
   </td>
   <td>Enables publishing bots for deployment.
   </td>
  </tr>
  <tr>
   <td><strong>TestAndTrain</strong>
   </td>
   <td>Provides access to train ML models, manage FAQs, and import/export utterances
   </td>
  </tr>
  <tr>
   <td><strong>Logs</strong>
   </td>
   <td>Grants access to retrieve bot audit and admin console logs.
   </td>
  </tr>
  <tr>
   <td><strong>GenAILLMUsageLogs</strong>
   </td>
   <td>allows the retrieval of GenAI and LLM usage logs through secure APIs.
   </td>
  </tr>
  <tr>
   <td><strong>ProfileManagement</strong>
   </td>
   <td>Enables role management and deletion of user data.
   </td>
  </tr>
  <tr>
   <td><strong>BotAnalytics</strong>
   </td>
   <td>Allows retrieval of chat history and conversation sessions.
   </td>
  </tr>
  <tr>
   <td><strong>UserManagement</strong>
   </td>
   <td>Supports user management operations.
   </td>
  </tr>
  <tr>
   <td><strong>CustomReports</strong>
   </td>
   <td>Allows fetching of data used in custom widgets and reports.
   </td>
  </tr>
  <tr>
   <td><strong>ManageKnowledgeGraph</strong> 
   </td>
   <td>Grants permission to manage and export knowledge graph definitions.
   </td>
  </tr>
  <tr>
   <td><strong>ChannelManagement </strong>
   </td>
   <td>Enables creation and update of communication channels.
   </td>
  </tr>
  <tr>
   <td><strong>BotKit</strong>
   </td>
   <td>Allows configuration of botkits and agent transfers.
   </td>
  </tr>
  <tr>
   <td><strong>MasterAdmin</strong>
   </td>
   <td>Grants access to view and use sample bots.
   </td>
  </tr>
  <tr>
   <td><strong>Processflow</strong>
   </td>
   <td>Grants permission to execute Process Apps using secure APIs.
   </td>
  </tr>
  <tr>
   <td><strong>ProcessDefinition</strong>
   </td>
   <td>Enables importing, exporting, and listing of Process Apps through secure APIs.
   </td>
  </tr>
  <tr>
   <td><strong>ProcessPublish</strong>
   </td>
   <td>Grants permission to publish Process Apps securely via API.
   </td>
  </tr>
  <tr>
   <td><strong>ProcessLogs</strong>
   </td>
   <td>Grants access to retrieve audit logs related to Process App executions and actions.
   </td>
  </tr>
  <tr>
   <td><strong>LanguageSettings</strong>
   </td>
   <td>Allows management of bot languages—enabling/disabling languages, updating language settings, and changing the default language.
   </td>
  </tr>
  <tr>
   <td><strong>ConversationTests</strong>
   </td>
   <td>Assign this scope to manage and execute conversation test suites, including creation, deletion, and status retrieval.
   </td>
  </tr>
  <tr>
   <td><strong>FileAccess</strong>
   </td>
   <td>Assign this scope to retrieve the download URL of an uploaded file.
   </td>
  </tr>
  <tr>
   <td><strong>Answers</strong>
   </td>
   <td>Assign these scopes to enable full control over Search AI, including Answer Generation, managing feedback, ingesting and maintaining data, configuring facets, chunks, highlights, and overseeing document and permission entities.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
  </tr>
</table>

Once an app is configured with the necessary scopes, it can be used either from within the **Bot Builder Platform** or externally through the platform’s **public APIs**. For the complete list of supported APIs, refer to the corresponding public API ([see here for list](../../apis/automation/api-list.md){:target="_blank"}).
