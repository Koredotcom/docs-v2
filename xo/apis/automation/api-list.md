# Automation AI API List

The following tables list the APIs available for Automation AI, grouped by the functionality they address:

  - [Bot Definition APIs](#bot-definition-apis)
  - [NLP Training APIs](#nlp-training-apis)
  - [Analytics APIs](#analytics-apis)
  - [Admin APIs](#admin-apis)
  - [Data (Data Table) Access APIs](#data-data-table-access-apis)

!!! note

    All the APIs have rate limits to manage the usage. If the rate limit is exceeded, an API call fails with the following error message – “_Rate limit for this API has been reached. Please try again after some time._”


## Bot Definition APIs

| API | DESCRIPTION | ASSOCIATED APP SCOPE |     |
| --- | --- | --- | --- |
|     |     | **XO PLATFORM** | **ADMIN CONSOLE** |
| [Upload File](./upload-file.md) | To upload the botdefinition, botconfig, and botfunction file (if any) as well as the bot icon to the local server and get the file ID to be used in the Import Bot API.<br><br>To upload utterances in [ML Utterances Import API](./import-ml-utterances.md), bot roles, admin roles for [Import Roles API](./import-roles.md), [Import Batch Test Suite](./import-batch-test-suite.md) details and [Extraction from file or URL](./extract-kg-from-file-url.md) to extract FAQs. | NA  | Bot Definition > Bot Import |
| [Import Bot as a New Bot](./import-bot-as-new-bot.md) | To create a new agent in the account owner’s XO Platform using the File IDs generated when uploading the files. | NA  | Bot Definition > Bot Import |
| [Import Bot into an Existing Bot](./import-bot-into-an-existing-bot.md) | To import the bot definition file into an existing agent for upgrading to a new version or restoring to an earlier version. | NA  | Bot Definition > Bot Import |
| [Bot Import Status](./bot-import-status.md) | To get the status of the bot import request. | NA  | Bot Definition > Bot Import |
| [Install Sample Bot](./install-sample-bot.md) | To install a sample agent. | NA  | Bot Definition > Bot Create |
| [Bot Export](./bot-export.md) | To export a bot definition and all associated components. | Bot Export | Bot Definition > Bot Export |
| [Bot Export – Status](./bot-export-status.md) | To get the status of the Bot Export request and also provides the download link of the export copy after the export is completed. | Bot Export | Bot Definition > Bot Export |
| [Enable Channel](./channel-enablement.md) | To enable or update a channel for an AI Agent. | NA  | Channel Management |
| [Add and Enable a New Language](./add-enable-new-language.md) | To add and enable a new language for an AI Agent. | Languages Configuration. | API Scopes > Language Settings |
| [Enable an existing Language](./enable-existing-language.md) | To enable an [existing language](../../app-settings/language-management/building-multi-language-bots.md) for an AI Agent. | Languages Configuration. | API Scopes > Language Settings |
| [Disable an existing Language](./disable-existing-language.md) | To disable an existing language for an AI Agent that is currently enabled. | Languages Configuration. | API Scopes > Language Settings |
| [Update a Language Configuration](./language-updation.md) | To update the configuration of an existing language for an AI Agent. | Languages Configuration. | API Scopes > Language Settings |
| [Change the Default language ](../automation/change-default-language.md) | To change the default language of the app.| Languages Configuration. | API Scopes > Language Settings |
| [Proactive Notification](./proactive-notifications.md) | To send proactive notifications to the configured channel. | NA  | Channel Management > Proactive Messages |
| [Proactive Notification V2](./proactive-notifications-v2.md) | To send proactive notifications to users via IVR and Hangout channels. | NA  | Channel Management > Proactive Messages |
| [Proactive Notification Status](./proactive-notifications-status.md) | To send proactive notifications to the configured channel. | NA  | Channel Management > Proactive Messages |
| [Proactive Notification Status V2](./proactive-notification-status-v2.md) | To fetch the status of a proactive notification triggered via the async webhook channel. | NA  | Channel Management > Proactive Messages |
| [Publish Bot](./publish-bot.md) | To initiate a bot publish request. | NA  | Bot Publish > Publish |
| [Bot Publish Status](./bot-publish-status.md) | Gets the publish status of the current application or the last completed status request of the agent. | NA  | Bot Publish > Publish |
| [Bot Variables Import](./bot-variables-import.md) | To import global and content variables into the agent. | Import Variables | NA  |
| [Batch Test Execution](./batch-test-execution.md) | To invoke the execution of a Batch Test suite. | Batch Tests Execution | NA  |
| [Batch Test Execution Status](./batch-test-execution-status.md) | To know the status of the execution against a unique Test Request Id. | Batch Tests Execution | NA  |
| [Get Batch Test Suites](./get-batch-test-suites.md) | To get the list of Batch Test Suites available. | Batch Tests Management | Batch Tests Management |
| [Export Batch Test Suite](./export-batch-test-suite.md) | To export the test cases of a given Batch Test Suite. | Batch Tests Management | Batch Tests Management |
| [Import Batch Test Suite](./import-batch-test-suite.md) | To import a batch test suite. | Batch Tests Management | Batch Tests Management |
| [Delete Batch Test Suite](./delete-batch-test-suite.md) | To delete a Batch Test Suite. | Batch Tests Management | Batch Tests Management |
| [Delete Batch Test Suite Execution](./delete-batch-test-suite-execution.md) | To delete a specific execution of a Batch Test Suite. | Batch Tests Management | Batch Tests Management |
| [Create (Import) a Conversation Test Suite](./create-conversation-test-suite.md) | To create or import a Conversation Test Suite. | Conversation Tests Management | Conversation Tests Management |
| [Conversation Test Suite Creation Status](./get-conversation-test-suite-creation-status.md) | To get the creation status of a Conversation Test Suite. | Conversation Tests Management | Conversation Tests Management |
| [Conversation Test Suite Execution](./execute-test-suite.md) | To execute a Conversation Test Suite. | Conversation Tests Execution | Conversation Tests Execution |
| [Conversation Test Suite Execution Status](./get-test-suite-execution-status.md) | To get the execution status and summary of a Conversation Test Suite. | Conversation Tests Execution | Conversation Tests Execution |
| [Delete Conversation Test Suite](./delete-test-suite.md) | To delete a Conversation Test Suite. | Conversation Tests Management | Conversation Tests Management |
| [Manage SDK Push Notifications](./manage-sdk-push-notifications.md) | To subscribe and unsubscribe a user’s device(s) to SDK push notifications, and list all the subscribed devices. | SDK Push Notifications | NA |
| [Get Linked Apps](./get_linked_apps.md) | To retrieve all apps linked to a universal or parent app. | Get linked App details | Getlinkedbotdetails |

## NLP Training APIs

| API | DESCRIPTION | ASSOCIATED APP SCOPE |     |
| --- | --- | --- | --- |
|     |     | **XO PLATFORM** | **ADMIN CONSOLE** |
| [ML Utterances Import](./import-ml-utterances.md) | To import ML Utterances into an agent. | Utterances Import | Test > Utterances Import & Train |
| [ML Utterances Import Status](./ml-utterances-import-status.md) | To get the status of the ML utterances import request made through Import ML Utterances API. | Utterances Import | Test > Utterances Import & Train |
| [ML Utterance Train](./ml-utterances-train.md) | To initiate ML training of an agent. | Train ML | Test > Train ML & Train |
| [ML Utterance Train Status](./ml-utterances-train-status.md) | To get the status of the ML training. | Train ML | Test > Train ML & Train |
| [ML Utterances Export](./ml-utterances-export.md) | To export the ML utterances of an agent. | Utterances Export | Test > Utterances Export & Train |
| [ML Utterances Export Status](./ml-utterances-export-status.md) | To get the download link of the ML Utterances export copy. | Utterances Export | Test > Utterances Export & Train |
| [FAQ Training](./faq-training.md) | To initiate the training of the knowledge graph. | Train Faq | Test > Train FAQ & Train |
| [FAQ Training Status](./faq-training-status.md) | To get the status of the FAQ training. | Train Faq | Test > Train FAQ & Train |
| [Extraction from file or URL](./extract-kg-from-file-url.md) | To extract FAQs using a file or URL. | Manage Knowledge Graph | Manage Knowledge Graph |
| [Get Extractions History](./get-kg-extraction-history.md) | To get a list of KG Extractions history. | Manage Knowledge Graph | Manage Knowledge Graph |
| [Get Extraction Question](./get-kg-extraction-questions.md) | To get a list of KG Extraction Questions. | Manage Knowledge Graph | Manage Knowledge Graph |
| [Get KnowledgeTasks](./get-knowledge-tasks.md) | To get a listing of knowledge Tasks along with the nodes. | Manage Knowledge Graph | Manage Knowledge Graph |
| [Add Questions from Extraction](./add-questions-to-knowledgegraph.md) | To add specific questions from extraction to the Knowledge Graph. | Manage Knowledge Graph | Manage Knowledge Graph |
| [Get FAQs](./get-faqs-from-knowledge-task.md) | To get a list of questions and nodes under the Knowledge task. | Manage Knowledge Graph | Manage Knowledge Graph |
| [Get FAQs V2](./get-faqs-from-knowledge-task-V2.md) | To get a list of questions and nodes under the Knowledge task. | Manage Knowledge Graph | Manage Knowledge Graph |
| [Update NLP Configurations](./update-nlp-configurations.md) | To update the NLP thresholds and configurations. | NLP Configurations | Test > NLP Configurations & Train |


## Analytics APIs

| API | DESCRIPTION | ASSOCIATED APP SCOPE |     |
| --- | --- | --- | --- |
|     |     | **XO PLATFORM** | **ADMIN CONSOLE** |
| [Find Intent](./find-intent.md) | To obtain the intent recognition result and the scoring from NLP and ML engines. | Intent and Entity Detection | Intent Identification > Intent and Entity Detection |
| [Conversation History](./conversation-history.md) | To fetch the conversational messages between the AI Agent and user in reverse chronological order. | Chat History | Bot Analytics > Chat History |
| [Conversation History-Lightweight](./conversation-history-lightweight.md) | To fetch high-volume conversation summarization without additional metadata or payload overhead. | Chat History | Bot Analytics > Chat History |
| [Conversation Summary](./conversation-summary.md) | To summarizes the conversation between a user and an agent. | Conversation Summary | NA  |
| [Feedback Analytics](./fetch-feedback-survey-scores.md) | To fetch the Feedback Survey Response Data and push it to the Feedback Analytics Dashboard. | Feedback Survey | Bot Analytics > Feedback Analytics |
| [Debug Logs](./fetch-debug-logs.md) | To get debug logs of a specific conversation. | Debug Logs | NA  |
| [Get ChangeLogs](./get-change-logs.md) | To get the list of changes made to the agent definition for a given date period. | Logs History | Logs > Bot Audit Logs |
| [Sessions History](./get-sessions-history.md) | To retrieve the conversation sessions created. | Bot Sessions | Bot Analytics > Bot Sessions |
| [Billing Sessions](./billing-session.md) | To retrieves the list of individual billing sessions created for an app so that you can review them for correctness and reconciliation. | Billing Sessions | Billing > Usage > Billing Sessions |
| [Billing Usage Summary](./billing-usage-summary.md) | To get a summary of the billing usage specific to an account or bot for a given period. | Billing Sessions | Billing > Usage > Billing Sessions |
| [Get Dashboard Widget Data](./get-dashboard-widget-data.md) | To get the data result of a widget from a specific Custom Dashboard added to an agent. | Custom Reports | Custom Reports > Custom Reports |
| [Get Analytics](./get-analytics.md) | To extract the metrics data related to the intent detection and task performance using API | Metrics | NA  |
| [Task Execution-based Containment Report](./task-execution-based-containment-report.md) | To extract task execution details (including success and failure status) across all the conversation sessions of the AI Agent in the selected timeframe for Drop-off, Self-service, and Agent Hand-off containment types using API. | Metrics | NA  |
| [User Engagement Trend](./user-engagement-trend.md) | To provide the number of users who have interacted with the AI Agent in a given period across different time intervals. | User Engagement Trend | NA  |
| [User Engagement Trend (v2)](./user-engagement-trend-v2.md) | To retrieve engagement metrics for a specific app in a workspace over a chosen time period, including unique users, new users, returning users, and average user counts. | User Engagement Trend | NA  |
| [Conversation Details and Summary](./conversation-details-and-summary.md) | To fetch the conversational details and summary between the bot and the user. | Conversation History | NA  |
| [LLM and Generative AI Usage Logs API](./llm-usage-logs-api.md) | To fetch the LLM & Generative AI usage logs. | Gen AI and LLM Usage Logs | API Scopes > Gen AI and LLM Usage Logs |

## Admin APIs

| API | DESCRIPTION | ASSOCIATED BOT ADMIN APP SCOPE |
| --- | ----------- | ------------------------------- |
| [Get Bots](./get-bots.md) | To retrieve the list of agents available in an account | Profile Management > Role Management |
| [Import Roles](./import-roles.md) | To import bot or admin roles into an account | Profile Management > Role Management |
| [Get Roles](./get-roles.md) | To retrieve the list of bot or admin roles available in an account | Profile Management > Role Management |
| [Get User Roles Details](./get-user-roles-details.md) | To get full information on all users and their associated roles in the account | Profile Management > Role Management |
| [Get Groups](./get-groups.md) | To get the list of groups and group members available in the account | Profile Management > Role Management |
| [Export Roles](./export-roles.md) | To export bot or admin roles from an account | Profile Management > Role Management |
| [Assign BT Roles](./assign-bt-roles.md) | To assign a bot role to a set of users in a specific agent | Profile Management > Role Management |
| [Assign Admin Roles](./assign-admin-roles.md) | To add or remove users or groups from admin roles | Profile Management > Role Management |
| [Update User Access](./update-user-access.md) | To add or remove the ability to access AI for Service Platform, create new AI Agents | Profile Management > Role Management |
| [Create Users](./create-users.md) | To add users to an account | User Management |
| [Get Users Information](./get-user-information.md) | To retrieve the user details | User Management |
| [Update User](./update-user.md) | To update user details | User Management |
| [Remove Users from Account](./delete-users.md) | To remove users from an account | User Management |
| [Delete Customer Data](./delete-customer-data.md) | To delete customer data | Profile Management > Delete Users Data |
| [Delete Customer Data Status API](./delete-customer-data-status.md) | To get the status of the Customer Data Delete request | Profile Management > Delete Users Data |
| [Get Admin Console Audit Logs](./get-admin-console-audit-logs.md) | To get admin console audit logs | Logs Admin > Admin Console Audit Logs |

## Data (Data Table) Access APIs

| API | DESCRIPTION | ASSOCIATED APP SCOPE |
| --- | --- | --- |
| [Insert Data](./data-insert.md) | To insert data into Data Table | Write access to the Data Table |
| [Insert Bulk Data](./bulk-data-insert.md) | To insert bulk data into Data Table | Write access to the Data Table |
| [Update Data](./data-update.md) | To update data into Data Table. | Read and Write access to the Data Table |
| [Delete Data](./data-delete.md) | To delete data from Data Table. | Read and Delete access to the Data Table |
| [Get Table Data](./query-table-data.md) | To get data from Data Table. | Read access to the Data Table |
| [Get View Data](./query-data-table-view.md) | To get data from Data View. | Read access to the Table View |
