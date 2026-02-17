# Contact Center AI API List

The following tables list the APIs available for Contact Center AI, grouped by the functionality they address:

  - [Contact Center AI (CCAI) APIs](#contact-center-ai-ccai-apis)
    - [Analytics and Reporting APIs](#analytics-and-reporting-apis)
    - [Agent Creation APIs](#agent-creation-apis)
    - [Skills APIs](#skills-apis)
    - [Skill Group APIs](#skill-group-apis)
    - [Agent Group APIs](#agent-group-apis)
    - [Contacts Public APIs](#contacts-public-apis)
    - [Import/Export Data APIs](#importexport-data-apis)
    - [Transfer Conversation to a Specific Agent or Queue API](#transfer-conversation-to-a-specific-agent-or-queue-api)
    - [Queue APIs](#queue-apis)
    - [WFM APIs](#wfm-apis)
    - [Hours of Operation API](#hours-of-operation-api)
  - [Campaign Management APIs](#campaign-management-apis)
    - [SMS Campaigns](#sms-campaigns)
    - [Voice Campaigns](#voice-campaigns)
    - [Campaign Status](#campaign-status)
    - [Campaign Schedule](#campaign-schedule)
    - [Campaign Details](#campaign-details)
    - [Contact List Management](#contact-list-management)
  - [Voice Gateway (VG) APIs](#voice-gateway-vg-apis)
    - [Call Recording APIs](#call-recording-apis)
    - [Voicemail Recording API](#voicemail-recording-api)
    - [Outbound Calling API](#outbound-calling-api)

## Contact Center AI (CCAI) APIs

### Analytics and Reporting APIs

| API                                                  | DESCRIPTION                                                                                                            | ASSOCIATED APP SCOPE |
|------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|----------------------|
| [Get Intent Real-Time Data](../contact-center/get-intent-real-time-data.md)            | To retrieve the most recent conversational data for the given  botId. Gets the latest 25 sessions data for the given botId that completed the execution of the flow. | SmartAssist Analytics |
| [Historical Agent Status Summary](../contact-center/historical-agent-status-summary.md) | To retrieve the status of every agent for each bucket in the given time interval. The status shown can be available, busy, away, etc. | SmartAssist Analytics |
| [Agent Status Details API](../contact-center/agent-status-details.md)                   | To retrieve the status of every agent for each bucket in the given time interval. The status shown can be available, busy, away, etc. | SmartAssist Analytics |
| [Get All Conversations Data – Call Details](../contact-center/get-all-conversations-data-call-details-v1.md) | To retrieve the raw data for all conversations with the given Account Id.                                              | SmartAssist Analytics |
| [Get All Conversations Data – Call Details (v2)](../contact-center/get-all-conversations-data-call-details-v2.md) | To retrieve the raw data for all conversations with the given Account Id.                                              | SmartAssist Analytics |
| [Get Conversations Details](../contact-center/get-conversation-details.md) | This API retrieves detailed information about a specific conversation session. It provides participant details, transfer history, queue activity, conversation status, notes, and dispositions. Id.                                              | SmartAssist Analytics |
| [List of Conversations](../contact-center/list-of-conversations.md)                     | To retrieve the list of conversations with the given stream Id.                                                        | SmartAssist Analytics |
| [Get a specific Conversation](../contact-center/get-a-specific-conversation.md)         | To retrieve a particular conversation by providing the Conversation Id.                                                 | SmartAssist Analytics |
| [Queue Size](../contact-center/queue-size.md)                                           | To retrieve the queueDetails by giving queueId and filters with the given stream Id.                                   | SmartAssist Analytics |

### Agent Creation APIs

| API                                                                                           | DESCRIPTION                                                                                                        | ASSOCIATED APP SCOPE |
|-----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|----------------------|
| [Create an Agent](../contact-center/create-an-agent.md)                                                         | To add an agent with the given Stream Id.                                                                         | SmartAssist Analytics |
| [List All Agents](../contact-center/list-all-agents.md)                                                         | To retrieve the list of all agents with the given Stream Id.                                                       | SmartAssist Analytics |
| [Get a Specific Agent](../contact-center/get-a-specific-agent.md)                                               | To retrieve the details of a particular agent with the given stream Id and agent Id.                              | SmartAssist Analytics |
| [Update a Specific Agent](../contact-center/update-a-specific-agent.md)                                         | To update the details of a particular agent with the given Stream Id and Agent Id.                                | SmartAssist Analytics |
| [Delete a Specific Agent from a Particular Agent Group](../contact-center/delete-a-specific-agent-from-a-particular-agent-group.md) | To delete a particular agent with the given Stream Id and Agent Id.                                               | SmartAssist Analytics |
| [Get the Agent ID Using the Custom ID](../contact-center/get-the-agent-id-using-custom-id.md)                                            | To get the Agent ID associated with a Custom ID (extension number).                                    | Configuration |
| [Check Agent Availability Status](../contact-center/check-agent-availability-status.md)                                            | To check the availability of agents based on specified skill Ids, queue Ids, and agent Ids.                                    | Configuration |

### Skills APIs

| API                                                                                                   | DESCRIPTION                                                                                                                       | ASSOCIATED APP SCOPE |
|-------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|----------------------|
| [Create a Skill](../contact-center/create-a-skill.md)                                                                  | To add a skill with the given Stream Id and Skill Group ID.                                                                      | SmartAssist Analytics |
| [Get All Skills from a Skill Group](../contact-center/get-all-skills-from-a-skill-group.md)                              | To retrieve the list of skills with the given Stream Id and Skill Group Id.                                                      | SmartAssist Analytics |
| [Get a Particular Skill](../contact-center/get-a-particular-skill.md)                                                  | To retrieve the details of a particular skill with the given Stream Id, Skill Group Id, and Skill Id.                            | SmartAssist Analytics |
| [Update a Particular Skill](../contact-center/update-a-particular-skill.md)                                            | To update a particular skill with the given Stream Id, Skill Group Id, and Skill Id.                                             | SmartAssist Analytics |
| [Delete a Skill from a Particular Skill Group](../contact-center/delete-a-skill-from-a-particular-skill-group.md)        | To delete a particular skill with the given Stream Id and Agent Id.                                                               | SmartAssist Analytics |

### Skill Group APIs

| API                                                                                    | DESCRIPTION                                                                                                       | ASSOCIATED APP SCOPE |
|----------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|----------------------|
| [Create a Skill Group](../contact-center/create-a-skill-group.md)                                        | To add a Skill Group with the given Stream Id.                                                                    | SmartAssist Analytics |
| [Get All Skill Groups](../contact-center/get-all-skill-groups.md)                                        | To retrieve the list of skills groups with the given Stream Id.                                                   | SmartAssist Analytics |
| [Get a Skill Group](../contact-center/get-a-skill-group.md)                                              | To retrieve the details of a particular skill group with the given Stream Id and Skill Group Id.                | SmartAssist Analytics |
| [Update a Skill Group](../contact-center/update-a-skill-group.md)                                        | To update a particular skill group with the given Stream Id and Skill Group Id.                                  | SmartAssist Analytics |
| [Delete a Skill Group](../contact-center/delete-a-skill-group.md)                                        | To delete a particular skill group with the given Stream Id and Skill Group Id.                                   | SmartAssist Analytics |

### Agent Group APIs

| API                                                                                           | DESCRIPTION                                                                                                          | ASSOCIATED APP SCOPE |
|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|----------------------|
| [Create an Agent Group](../contact-center/create-an-agent-group.md)                                            | To add an agent group with the given Stream Id.                                                                     | SmartAssist Analytics |
| [Get All Agent Groups](../contact-center/get-all-agent-groups.md)                                              | To retrieve the list of agent groups with the given Stream Id.                                                      | Configuration |
| [Get an Agent Group](../contact-center/get-an-agent-group.md)                                                  | To retrieve the details of a particular skill with the given Stream Id, Skill Group Id, and Skill Id.              | SmartAssist Analytics |
| [Update an Agent Group](../contact-center/update-an-agent-group.md)                                            | To update a particular agent group with the given Stream Id and Agent Group Id.                                      | SmartAssist Analytics |
| [Delete an Agent Group](../contact-center/delete-an-agent-group.md)                                            | To delete the particular skill group with the given Stream Id and Skill Group Id.                                    | SmartAssist Analytics |

### Contacts Public APIs

| API                                                                                               | DESCRIPTION                                                                                                 | ASSOCIATED APP SCOPE |
|---------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|----------------------|
| [Create a Contact by Giving Details](../contact-center/create-a-contact-by-giving-details.md)                        | To create a contact with the given Stream Id.                                                               | Configuration        |
| [Create Bulk Contacts](../contact-center/create-bulk-contacts.md)                                                    | To create bulk contacts from a CSV file with the given Stream Id.                                           | Configuration        |
| [Get All Contacts](../contact-center/get-all-contacts.md)                                                    | To retrieve all contacts created for outbound calling in a given stream ID.                                           | Configuration        |
| [Update a Contact](../contact-center/update-a-contact.md)                                                    | To update a specific contact associated with a stream ID.                                           | Configuration        |
| [Update Bulk Contacts](../contact-center/update-bulk-contacts.md)                                                    | To update multiple contacts simultaneously.                                           | Configuration        |
| [Delete a Contact](../contact-center/delete-a-contact.md)                                                    | To delete a specific contact.                                           | Configuration        |
| [Delete Bulk Contacts](../contact-center/bulk-delete-contacts.md)                                                    | To delete multiple contacts simultaneously.                                           | Configuration        |

### Import/Export Data APIs

| API                                                                                               | DESCRIPTION                                                                                           | ASSOCIATED APP SCOPE            |
|---------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|--------------------------------|
| [Import/Save Data by Giving Details](../contact-center/import-or-save-data-by-giving-details.md)                     | To import/save data with the given accountId and orgId.                                              | SmartAssist Import and Export Feature |
| [Import/Save Data by Giving Details (v2)](../contact-center/import-or-save-data-by-giving-details-v2.md)                     | To import/save data with the given accountId and orgId.                                              | SmartAssist Import and Export Feature |
| [Export Data by Giving Details](../contact-center/export-data-by-giving-details.md)                                   | To export data with the given accountId and orgId.                                                   | SmartAssist Import and Export Feature |
| [Export Data by Giving Details (v2)](../contact-center/export-data-by-giving-details-v2.md)                                   | To export data with the given accountId and orgId.                                                   | SmartAssist Import and Export Feature |

### Transfer Conversation to a Specific Agent or Queue API

| API                                                                                               | DESCRIPTION                                                                                                                      | ASSOCIATED APP SCOPE |
|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|----------------------|
| [Transfer Conversation to a Specific Agent](./transfer-conversation-to-a-specific-agent-or-queue.md)         | To transfer a conversation to a specific agent using the provided botSessionId and aId. It posts specific messages to the provided callbackUrl to indicate the success or failure of the conversation transfer. | Routing              |

### Queue APIs

| API                                                                                               | DESCRIPTION                                                                                                  | ASSOCIATED APP SCOPE |
|---------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|----------------------|
| [Create a Queue](../contact-center/create-a-queue.md)                                                               | To create a queue with the given streamId.                                                                   | Configuration        |
| [Get a List of Queues](../contact-center/get-a-list-of-queues.md)                                                   | To get a list of queues with the given streamId.                                                             | Configuration        |
| [Get a List of Agents or Queues](../contact-center/get-a-list-of-agents-or-queues.md)                               | To get all agents if you have queueIds and all the queues if you have agentIds.                               | Configuration        |
| [Get a Specific Queue](../contact-center/get-a-specific-queue.md)                                                   | To get a specific queue with the given streamId and queueId.                                                 | Configuration        |
| [Update a Specific Queue](../contact-center/update-a-specific-queue.md)                                             | To update a specific queue with the given streamId and queueId.                                               | Configuration        |
| [Delete a Queue](../contact-center/delete-a-queue.md)                                                               | To delete a specific queue with the given streamId and queueId.                                               | Configuration        |

### WFM APIs

| API                                                                                           | DESCRIPTION                                                                                                                     | ASSOCIATED APP SCOPE |
|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|-----------------------|
| [Agents API](../contact-center/agents.md)                                | To get all agent details associated with an accountId.                                                                          | WFM Integration       |
| [Queues API](../contact-center/queues.md)                                | To get the Queues/Skills associated with an accountId.                                                                          | WFM Integration       |
| [Agent Activity API](../contact-center/agent-activity.md)                | To get the agent status in real-time or changes stacked every 30 seconds.                                                       | WFM Integration       |
| [Contact Volume API](../contact-center/contact-volume.md)                | To retrieve call volume details associated with a specified collection point for a given interval, including fields mapped to specific field names relevant to the Workforce Management (WFM) client. | WFM Integration       |

### Hours of Operation API

| API                | DESCRIPTION                                                                                                                                          | ASSOCIATED APP SCOPE |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|
| [Hours of Operation](../contact-center/hours-of-operation.md) | To get the hours of operation by providing the orgId and queueId. | Configuration         |

## Campaign Management APIs

### SMS Campaigns

| API | DESCRIPTION | ASSOCIATED APP SCOPE |
|--------|------------------|---------------------------|
| [Create SMS Campaign (Without SMS Template)](../contact-center/create-sms-campaign-without-template.md) | Creates an SMS campaign with a “None” message format.  | Campaign Management |
| [Create SMS Campaign (Without SMS Template (v2))](../contact-center/create-sms-campaign-without-template-v2.md) | Creates an SMS campaign with a “None” message format. In this version, the DNC (Do Not Call) object is included in the request body as an optional field, allowing users to specify the relevant do-not-call contact list when needed. | Campaign Management |
| [Create SMS Campaign (Using Template)](../contact-center/create-sms-campaign-using-template.md) | Creates an SMS campaign using a predefined message template. | Campaign Management |
| [Create SMS Campaign (Using Template (v2))](../contact-center/create-sms-campaign-using-template-v2.md) | Creates an SMS campaign using a predefined message template. In this version, the DNC (Do Not Call) object is included in the request body as an optional field, allowing users to specify the relevant do-not-call contact list when needed. | Campaign Management |
| [Create SMS Campaign (Advanced Format)](../contact-center/create-sms-campaign-advanced-format.md) | Creates an SMS campaign with advanced formatting using a specified experience flow and contact list. | Campaign Management |
| [Create SMS Campaign (Advanced Format(v2))](../contact-center/create-sms-campaign-advanced-format-v2.md) | Creates an SMS campaign with advanced formatting using a specified experience flow and contact list. In this version, the DNC (Do Not Call) object is included in the request body as an optional field, allowing users to specify the relevant do-not-call contact list when needed.| Campaign Management |
| [Get SMS Campaign by ID](../contact-center/get-sms-campaign-by-id.md) | Retrieves full details of an SMS campaign using the campaign ID. | Campaign Management |
| [Get SMS Campaign by ID (v2)](../contact-center/get-sms-campaign-by-id-v2.md) | Retrieves full details of an SMS campaign using the campaign ID. | Campaign Management |
| [Update SMS Campaign](../contact-center/update-sms-campaign.md) | Updates an existing SMS campaign with new format, contact lists, experience flow, or dialing strategy. | Campaign Management |
| [Update SMS Campaign (v2)](../contact-center/update-sms-campaign-v2.md) | Updates an existing SMS campaign with new format, contact lists, experience flow, or dialing strategy. | Campaign Management |
| [Start SMS Campaign](../contact-center/start-sms-campaign.md) | Starts an SMS campaign using stream ID and campaign ID. | Campaign Management |
| [Start SMS Campaign (v2)](../contact-center/start-sms-campaign-v2.md) | Starts an SMS campaign using stream ID and campaign ID. | Campaign Management |
| [Stop SMS Campaign](../contact-center/stop-sms-campaign.md) | Stops an active SMS campaign using stream ID and campaign ID. | Campaign Management |
| [Stop SMS Campaign (v2)](../contact-center/stop-sms-campaign-v2.md) | Stops an active SMS campaign using stream ID and campaign ID. | Campaign Management |
| [Delete SMS Campaign](../contact-center/delete-sms-campaign.md) | Deletes an active SMS campaign using stream ID and campaign ID. | Campaign Management |
| [Delete SMS Campaign (v2)](../contact-center/delete-sms-campaign-v2.md) | Deletes an active SMS campaign using stream ID and campaign ID. | Campaign Management |
| [Send Outbound SMS](../contact-center/send-outbound-sms.md)  | This API enables sending outbound SMS messages through the platform's generic SMS channel. The capability can be integrated into applications or services to facilitate SMS communication with customers. | Outbound SMS          |

### Voice Campaigns

| API | DESCRIPTION | ASSOCIATED APP SCOPE |
|--------|------------------|---------------------------|
| [Create Voice Campaign - Agentless Mode](../contact-center/create-voice-campaign-agentless.md) | Creates a new outbound voice campaign with agentless dialing. | Campaign Management |
| [Create Voice Campaign - Agentless Mode (v2)](../contact-center/create-voice-campaign-agentless-v2.md) | Creates a new outbound voice campaign with agentless dialing. In this version, the DNC (Do Not Call) object is included in the request body as a mandatory field, requiring users to specify the appropriate do-not-call contact list. Additionally, enableMachineDetect now supports three options—no, detect, and disconnect—to control how answering machines or voicemails are handled during outbound calls.| Campaign Management |
| [Create Voice Campaign - Progressive Mode](../contact-center/create-voice-campaign-progressive.md) | Creates a voice campaign that routes answered calls to live agents using progressive dialing. | Campaign Management |
| [Create Voice Campaign - Progressive Mode (v2)](../contact-center/create-voice-campaign-progressive-v2.md) | Creates a voice campaign that uses progressive dialing to route answered calls to live agents. In API v2, the DNC (Do Not Call) object is a mandatory request body parameter, and the enableMachineDetect parameter has been removed, as it's no longer supported for progressive campaigns. | Campaign Management |
| [Create Voice Campaign - Preview Mode](../contact-center/create-voice-campaign-preview.md) | Creates a voice campaign that lets agents preview contact info before calling. Routes answered calls to a queue. | Campaign Management |
| [Create Voice Campaign - Preview Mode (v2)](../contact-center/create-voice-campaign-preview-v2.md) | Creates a voice campaign that lets agents preview contact info before calling. Routes answered calls to a queue. In API v2, the DNC (Do Not Call) object is a mandatory request body parameter, and the enableMachineDetect parameter has been removed, as it's no longer supported for preview campaigns. | Campaign Management |
| [Update Voice Campaign](../contact-center/update-voice-campaign.md) | Updates the configuration of an existing voice campaign, including metadata, strategies, and schedules. | Campaign Management |
| [Update Voice Campaign (v2)](../contact-center/update-voice-campaign-v2.md) | Updates the configuration of an existing voice campaign, including metadata, DNC list, strategies, and schedules. | Campaign Management |
| [Get Voice Campaign by ID](../contact-center/get-voice-campaign-by-id.md) | Fetches complete details of a voice campaign using campaign ID. | Campaign Management |
| [Get Voice Campaign by ID (v2)](../contact-center/get-voice-campaign-by-id-v2.md) | Fetches the complete details of a voice campaign, including its DNC list, using the campaign ID. | Campaign Management |
| [Start Voice Campaign](../contact-center/start-voice-campaign.md) | Starts an active voice campaign using stream ID and campaign ID. | Campaign Management |
| [Start Voice Campaign (v2)](../contact-center/start-voice-campaign-v2.md) | Starts an active voice campaign using stream ID and campaign ID. | Campaign Management |
| [Stop Voice Campaign](../contact-center/stop-voice-campaign.md) | Stops an active voice campaign using stream ID and campaign ID. | Campaign Management |
| [Stop Voice Campaign (v2)](../contact-center/stop-voice-campaign-v2.md) | Stops an active voice campaign using stream ID and campaign ID. | Campaign Management |
| [Delete Voice Campaign](../contact-center/delete-voice-campaign.md) | Deletes an active voice campaign using stream ID and campaign ID. | Campaign Management |
| [Delete Voice Campaign (v2)](../contact-center/delete-voice-campaign-v2.md) | Deletes an active voice campaign using stream ID and campaign ID. | Campaign Management |

### Campaign Status

| API | DESCRIPTION | ASSOCIATED APP SCOPE |
|--------|------------------|---------------------------|
| [Get Campaign Status](../contact-center/get-campaign-status.md) | Retrieves the current status (active, stopped, etc.) of a campaign using its campaign ID. | Campaign Management |
| [Get Campaign Status (v2)](../contact-center/get-campaign-status-v2.md) | Retrieves the current status (active, stopped, etc.) of a campaign using its campaign ID. | Campaign Management |

### Campaign Schedule

| API | DESCRIPTION | ASSOCIATED APP SCOPE |
|--------|------------------|---------------------------|
| [Enable Daily Scheduling of Voice or SMS Campaign](./enable-voice-or-sms-campaign-schedule-daily.md) | To schedule a recurring daily Voice or SMS campaign. | Campaign Management |
| [Enable Weekly Scheduling of Voice or SMS Campaign](./enable-voice-or-sms-campaign-schedule-weekly.md) | To schedule a recurring weekly Voice or SMS campaign. | Campaign Management |
| [Disable a Scheduled Voice or SMS Campaign API](../contact-center/disable-voice-or-sms-campaign-schedule.md) | To disable a previously scheduled Voice or SMS campaign. | Campaign Management |

### Campaign Details

| API | DESCRIPTION | ASSOCIATED APP SCOPE |
|--------|------------------|---------------------------|
| [Get All Campaigns](../contact-center/get-all-campaigns.md) | Retrieves all campaigns associated with a specific account. | Campaign Management |
| [Get All Campaigns (v2)](../contact-center/get-all-campaigns-v2.md) | Retrieves all campaigns associated with a specific account. | Campaign Management |

### Contact List Management

| API | DESCRIPTION | ASSOCIATED APP SCOPE |
|--------|------------------|---------------------------|
| [Get All Contact Details - Voice Campaigns](../contact-center/get-all-contact-details-voice-campaigns.md) | Retrieves metadata for all contact lists under a specific account, filtered by type. | Campaign Management |
| [Get All Contact Details - Voice Campaigns (v2)](../contact-center/get-all-contact-details-voice-campaigns-v2.md) | Retrieves metadata for all contact lists under a specific account, filtered by type. | Campaign Management |
| [Create Contact List](../contact-center/create-contact-list.md) | Creates a new contact list for use in passive voice campaigns. | Campaign Management |
| [Create Contact List (v2)](../contact-center/create-contact-list-v2.md) | Creates a new contact list for use in passive voice campaigns. | Campaign Management |
| [Update Contact List](../contact-center/update-contact-list.md) | Updates the name of a contact list associated with a campaign. | Campaign Management |
| [Update Contact List (v2)](../contact-center/update-contact-list-v2.md) | Updates the name of a contact list associated with a campaign. | Campaign Management |
| [Get Contact List Details](../contact-center/get-contact-list-details.md) | Retrieves full details of a specific contact list using its ID. | Campaign Management |
| [Get Contact List Details (v2)](../contact-center/get-contact-list-details-v2.md) | Retrieves full details of a specific contact list using its ID. | Campaign Management |
| [Get All Contact List Details](../contact-center/get-all-contact-lists.md) | Retrieves full details of a specific contact list using its ID. | Campaign Management |
| [Get All Contact List Details (v2)](../contact-center/get-all-contact-lists-v2.md) | Retrieves full details of a specific contact list using its ID. | Campaign Management |
| [Add Contacts to a Contact List](../contact-center/add-contacts-to-contact-list.md) | Adds one or more contacts to an existing contact list. | Campaign Management |
| [Delete Contact List Details](../contact-center/delete-contact-list-details.md) | Deletes a contact list associated with a campaign. | Campaign Management |
| [Delete Contact List Details (v2)](../contact-center/delete-contact-list-details-v2.md) | Deletes a contact list associated with a campaign. | Campaign Management |
| [Get Contacts of Contact List](../contact-center/get-all-contacts-of-a-contactlist.md) | Retrieves all contacts of a specific contact list. | Campaign Management |
| [Get Contacts of Contact List (v2)](../contact-center/get-all-contacts-of-a-contactlist-v2.md) | Retrieves all contacts of a specific contact list. | Campaign Management |

## Voice Gateway (VG) APIs

### Call Recording APIs

| API                                                                                               | DESCRIPTION                                                                                                                       | ASSOCIATED APP SCOPE |
|---------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|----------------------|
| [Fetch Call Recording](../contact-center/fetch-call-recording.md)                                                   | To retrieve the recording of a specific call using either the user Id or session Id.                                             | SmartAssist Recordings |
| [Fetch Call Recording (v2)](../contact-center/fetch-call-recording-(v2).md)                                         | This API facilitates the downloading of voice call recordings. The API provides an S3-hosted URL where the recording can be accessed. | SmartAssist Recordings |
| [Delete Call Recording](../contact-center/delete-call-recording.md)                                                 | This API is used to delete Voice Call Recordings. The response varies based on whether the execution is successful or not.        | Delete Recordings     |

### Voicemail Recording API

| API                                                                                               | DESCRIPTION                                                                                                                       | ASSOCIATED APP SCOPE |
|---------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|----------------------|
| [Fetch Voicemail Recording](../contact-center/fetch-voicemail-recording.md)                                                   | This API facilitates the downloading of voicemail recordings. The API provides an S3-hosted URL where the voicemail recording can be accessed.                                             | SmartAssist Voicemail |

### Outbound Calling API

| API                                                                                               | DESCRIPTION                                                                                                 | ASSOCIATED APP SCOPE |
|---------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|----------------------|
| [Outbound Calling (VG)- v1](./outbound-calling-vg.md)                                               | To trigger an outbound call and receive call status notifications.                                           | SmartAssist Dialout  |
| [Outbound Calling (VG)-v2](./outbound-calling-vg-v2.md)                                               | To trigger an outbound call and receive call status notifications. <br>In v2, the system sends Automatic Machine Detection (AMD) configurations on invoking the API , enabling the detection process to start earlier. This improves performance and reduces latency.                                   | SmartAssist Dialout  |