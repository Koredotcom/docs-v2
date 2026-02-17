# Error codes

List of error codes returning, including their descriptions, actions, and required fields for resolution.

## Socket Errors

| Error Code   | Message                        | Action | Required Fields            |
|-------------|--------------------------------|--------|----------------------------|
| ERR_WS_INIT | Socket connection failed      | show   | token, conversationId      |
| ERR_WS_INIT | Socket connection timeout     | show   | token, conversationId      |
| ERR_WS_INIT | Socket disconnected           | show   | token, conversationId      |
| ERR_WS_INIT | Socket reconnection failed    | show   | token, conversationId      |
| ERR_WS_INIT | Socket error                  | show   | token, conversationId      |

## API Errors

| Error Code                      | Message                      | Action | Required Fields                          |
|----------------------------------|------------------------------|--------|------------------------------------------|
| ERR_SETTINGS_API_FAILURE        | Settings API failed         | show   | botId, channel                          |
| ERR_CHECKLIST_API_FAILURE       | Checklist API failed        | show   | botId                                   |
| ERR_ASST_HISTORY_API_FAILURE    | Assist history API failed   | show   | botId, conversationId                   |
| ERR_MYBOT_HISTORY_API_FAILURE   | MyBot history API failed    | show   | botId, conversationId                   |
| ERR_FEEDBACK_API_FAILURE        | Feedback API failed        | show   | tab, conversationId                     |
| ERR_SUMMARY_LOAD_FAILURE        | Summary load failed        | show   | conversationId, botId, channel, sessionId |

## Validation Errors

| Error Code                | Message                                      | Action            | Required Fields                          |
|---------------------------|----------------------------------------------|-------------------|------------------------------------------|
| ERR_TOKEN_INVALID        | Invalid token                                | show             | token, botId                            |
| ERR_MISSING_REQ_FIELDS   | Missing required fields to send user message | sendUserMessage  | author, type, conversationId, value, botId |
| ERR_MISSING_REQ_FIELDS   | Missing required fields to send agent message| sendAgentMessage | author, type, conversationId, value, botId |

## Miscellaneous Errors

| Error Code   | Message        | Action | Required Fields |
|-------------|---------------|--------|----------------|
| ERR_JS_CODE | JS code failed | show   | None           |
