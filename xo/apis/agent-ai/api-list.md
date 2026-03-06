# Agent AI API List

The following table lists the APIs available for Agent AI.

| API            | Description                                 | App Scope         |
|----------------|---------------------------------------------|-------------------|
| [Raw Data API v2](./raw-data-api.md) | Updated version of the Raw Data API offering additional conversation data for deeper insights into Agent AI interactions and conversation flows. | Agent AI | 
| [Control Transcription API](./control-transcription-api.md) | This API lets you control the transcription session of an AI Agent conversation. You can end an ongoing transcription session with a valid conversationId and appropriate authentication tokens.  | Agent AI Transcription |
| [Control Transcription API_2](./control-transcription-api-2.md) | This API lets you control the transcription and call recording sessions for Agent AI SIP-REC calls on third-party agent desktops. | Agent AI Transcription and Call Recording |
| [API for Duration-Based Conversation Records](./api-for-duration-based-conversation-records.md) | Retrieves a paginated list of Agent AI conversation records within a specified date range. | AgentAssist Analytics |
|**Hooks APIs**|
| [Internal Transfers](./hooks-api-for-internal-transfers.md) | This API supports internal transfer events, reducing reliance on UI socket events. | Not applicable |
| [Summary Trigger API](./conversation-summary-trigger-api.md) | This API triggers a conversation summary event in the Agent AI system to send event data related to a conversation to the specified AI Agent. | Not applicable |
| [End of Conversation API](./end-of-conversation-api.md)| This API notifies Agent AI of final conversation termination to trigger post-conversation actions and prevent duplicate processing.| |

