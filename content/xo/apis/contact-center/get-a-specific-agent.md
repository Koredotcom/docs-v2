--8<-- "includes/ccai-api-back-link.md"

# Get a Specific Agent

To retrieve the details of a particular agent with the given `botId` and `agent Id`.

| **Method**   | GET                                                               |
|----------|-------------------------------------------------------------------|
| **Endpoint** | `https://{{host}}/agentassist/api/v1/public/{{botId}}/agents/{{agentId}}` |
| **Content Type** | `application/json`                                             |
| **Authorization** | `auth: {{JWT}}`<br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope** | SmartAssist Analytics                                           |

## Path Parameters

| **PARAMETER** | **DESCRIPTION**                                                      | **TYPE**           |
|-----------|------------------------------------------------------------------|----------------|
| host      | Environment URL, for example, `https://platform.kore.ai`       | string, required |
| botId  | botId or streamId. You can get it from the App Settings page.  | string, required |
| agentId   | The Agent Id of the particular agent whose details are being retrieved. You can get this from agents GET API. | string, required |

## Sample Request

```
curl --location 'https://{{host}}/agentassist/api/v1/public/{{streamId}}/agents/{{agentId}}' \
--header 'accept: application/json' \
--header 'auth: {{Your_JWT_token}}' \
--header 'accountId: {{accountId}}'
```

## Header Parameters

| **PARAMETER** | **DESCRIPTION**                                                                      | **TYPE**          |
| ------------- | ------------------------------------------------------------------------------------ | ----------------- |
| accept        | Specifies the expected response format. Use application/json to receive JSON data.   | string, required |
| auth          | JWT token used to authenticate the request.                                          | string, required |
| accountId     | Unique identifier of the account associated with the request context.                | string, required |

## Sample Response

```
{
    "firstName": "John",
    "lastName": "Doe",
    "fullName": "John Doe",
    "lFullName": "JDoe",
    "emailId": "john.doe@example.com",
    "nickName": "",
    "profImage": "no-avatar",
    "phoneNumber": "",
    "userId": "u-a1a49996-1817-5ce8-bf7b-e9a75d47xxxx",
    "accountId": "667e787ac78a65971ba8xxxx",
    "isAccountOwner": false,
    "orgId": "o-ba2d50ac-e797-56f2-abfa-2f2c937dxxxx",
    "customId": "",
    "agentGroups": [
        {
            "groupId": "ag-937a281-0b54-42ea-80b2-ae914c2dxxxx",
            "role": "agent",
            "name": "Default Group"
        }
    ],
    "canSupportChat": true,
    "canSupportCase": false,
    "maxCaseSupport": 0,
    "maxTaskSupport": 0,
    "canSupportVoiceMail": false,
    "maxVoiceMailSupport": 5,
    "chatLanguageSupport": [
        {
            "language": "en",
            "proficiency": "expert",
            "isActive": true
        }
    ],
    "caseLanguageSupport": [
        {
            "language": "en",
            "proficiency": "expert",
            "isActive": true
        }
    ],
    "canSupportVoice": true,
    "voiceLanguageSupport": [
        {
            "language": "en",
            "proficiency": "expert",
            "isActive": true
        }
    ],
    "maxDigitalConvoLimit": 6,
    "attachmentsEnabled": true,
    "emojisEnabled": true,
    "createdBy": "u-e2103f0d-e995-5a58-842a-52f1b7a4xxxx",
    "status": "ACTIVE",
    "roleId": "667e787ac78a65971ba8xxxx",
    "iId": "st-8e86fcaf-1500-5bc1-890b-1a9c493dxxxx",
    "desktopLayouts": [
        {
            "id": "ly-d63aadd-be95-4b02-b40b-6cabe9a3xxxx",
            "isDefault": true
        }
    ],
    "cmLayouts": [],
    "voiceSupport": [
        {
            "type": "campaigns",
            "isEnabled": false
        }
    ],
    "maxDigitalChatSupport": 2,
    "maxEmailChatSupport": 2,
    "maxMessagingChatSupport": 2,
    "markedAutoAway": false,
    "dAgentGroups": [],
    "lastOnlineAt": "2025-11-19T07:02:47.264Z",
    "createdAt": "2025-11-19T07:02:47.241Z",
    "updatedAt": "2025-11-19T07:19:54.470Z",
    "onlineStatus": "Offline",
    "onlineStatusType": "OFFLINE",
    "sipURI": "sip:support_production_a-3aeb689-a8b4-4dca-8954-9705ea04xxxx@unifiedxo-eu-prod-savg.kore.ai:5060",
    "isChannelUpdatedByAgent": false,
    "profImageUrl": "no-avatar",
    "id": "a-3aeb689-a8b4-4dca-8954-9705ea04xxxx",
    "name": "John Doe",
    "addresses": [
        "wss://eu-savg-sbc1.kore.ai:8443",
        "wss://eu-savg-sbc2.kore.ai:8443"
    ],
    "iceServers": [
        {
            "url": "stun:global.stun.twilio.com:3478",
            "urls": "stun:global.stun.twilio.com:3478"
        },
        {
            "credential": "aMFlLMjlOFuTAxlRWYOK25aVXddXOa1zSbBU0jQmxxxx",
            "url": "turn:global.turn.twilio.com:3478?transport=udp",
            "urls": "turn:global.turn.twilio.com:3478?transport=udp",
            "username": "87f6e016bdff9d4ef869729a1783f65ed4d0e197ff3dd53d149d39cf4e3cxxxx"
        },
        {
            "credential": "aMFlLMjlOFuTAxlRWYOK25aVXddXOa1zSbBU0jQmxxxx",
            "url": "turn:global.turn.twilio.com:3478?transport=tcp",
            "urls": "turn:global.turn.twilio.com:3478?transport=tcp",
            "username": "87f6e016bdff9d4ef869729a1783f65ed4d0e197ff3dd53d149d39cf4e3cxxxx"
        },
        {
            "credential": "aMFlLMjlOFuTAxlRWYOK25aVXddXOa1zSbBU0jQmxxxx",
            "url": "turn:global.turn.twilio.com:443?transport=tcp",
            "urls": "turn:global.turn.twilio.com:443?transport=tcp",
            "username": "87f6e016bdff9d4ef869729a1783f65ed4d0e197ff3dd53d149d39cf4e3cxxxx"
        }
    ],
    "domain": "example.com",
    "preferences": {
        "theme": "light"
    },
    "role": "Agent",
    "skills": [],
    "queues": [],
    "internalChatPermission": true,
    "callRegion": "DE"
}
```

## Response Body Parameters

| **PARAMETER**                   | **DESCRIPTION**                                  | **TYPE**              |
| ------------------------------- | ------------------------------------------------ | --------------------- |
| firstName                       | User’s first name.                               | string                |
| lastName                        | User’s last name.                                | string                |
| fullName                        | User’s full name.                                | string                |
| lFullName                       | User’s full name in lowercase.                   | string                |
| emailId                         | User’s email address.                            | string                |
| nickName                        | User’s nickname.                                 | string                |
| profImage                       | Profile image identifier.                        | string                |
| phoneNumber                     | User’s phone number.                             | string                |
| userId                          | Unique identifier of the user.                   | string                |
| accountId                       | Unique identifier of the account.                | string                |
| isAccountOwner                  | Indicates if the user owns the account.          | boolean               |
| orgId                           | Unique identifier of the organization.           | string                |
| customId                        | Custom identifier.                               | string                |
| agentGroups                     | List of agent groups the user belongs to.        | array(object)         |
| agentGroups.groupId             | Group identifier.                                | string                |
| agentGroups.role                | Assigned role in the group.                      | string                |
| agentGroups.name                | Group name.                                      | string                |
| canSupportChat                  | Indicates if the user can support chat.          | boolean               |
| canSupportCase                  | Indicates if the user can support cases.         | boolean               |
| maxCaseSupport                  | Maximum case capacity.                           | number                |
| maxTaskSupport                  | Maximum task capacity.                           | number                |
| canSupportVoiceMail             | Indicates if the user can support voicemail.     | boolean               |
| maxVoiceMailSupport             | Maximum voicemail support limit.                 | number                |
| chatLanguageSupport             | Supported chat languages.                        | array(object)         |
| chatLanguageSupport.language    | Language code.                                   | string                |
| chatLanguageSupport.proficiency | Language proficiency.                            | string                |
| chatLanguageSupport.isActive    | Indicates if the language is active.             | boolean               |
| caseLanguageSupport             | Supported case languages.                        | array(object)         |
| canSupportVoice                 | Indicates if the user can support voice.         | boolean               |
| voiceLanguageSupport            | Supported voice languages.                       | array(object)         |
| maxDigitalConvoLimit            | Maximum number of digital conversations.         | number                |
| attachmentsEnabled              | Indicates if attachments are enabled.            | boolean               |
| emojisEnabled                   | Indicates if emojis are enabled.                 | boolean               |
| createdBy                       | User who created this user record.               | string                |
| status                          | User status.                                     | string                |
| roleId                          | Assigned role identifier.                        | string                |
| iId                             | Internal identifier.                             | string                |
| desktopLayouts                  | Assigned desktop layouts.                        | array(object)         |
| desktopLayouts.id               | Layout ID.                                       | string                |
| desktopLayouts.isDefault        | Indicates if the layout is default.              | boolean               |
| cmLayouts                       | Case-management layouts.                         | array                 |
| voiceSupport                    | Voice support configuration.                     | array(object)         |
| voiceSupport.type               | Voice support type.                              | string                |
| voiceSupport.isEnabled          | Indicates if the voice support type is enabled.  | boolean               |
| maxDigitalChatSupport           | Maximum digital chat limit.                      | number                |
| maxEmailChatSupport             | Maximum email chat limit.                        | number                |
| maxMessagingChatSupport         | Maximum messaging chat limit.                    | number                |
| markedAutoAway                  | Indicates if the system marked the user as away. | boolean               |
| dAgentGroups                    | Additional dynamic agent groups.                 | array                 |
| lastOnlineAt                    | Timestamp of last online activity.               | string (ISO datetime) |
| createdAt                       | User creation timestamp.                         | string (ISO datetime) |
| updatedAt                       | User update timestamp.                           | string (ISO datetime) |
| onlineStatus                    | User’s online status.                            | string                |
| onlineStatusType                | Online status type.                              | string                |
| sipURI                          | SIP URI assigned to the agent.                   | string                |
| isChannelUpdatedByAgent         | Indicates if the agent updated the channel.      | boolean               |
| profImageUrl                    | URL of the profile image.                        | string                |
| id                              | Unique internal identifier.                      | string                |
| name                            | Display name.                                    | string                |
| addresses                       | WebSocket server addresses.                      | array(string)         |
| iceServers                      | ICE server list for voice/WebRTC.                | array(object)         |
| iceServers.url                  | Server URL.                                      | string                |
| iceServers.urls                 | Server URLs.                                     | string                |
| iceServers.username             | Username for TURN server.                        | string                |
| iceServers.credential           | Credential for TURN server.                      | string                |
| domain                          | SIP/WebRTC domain.                               | string                |
| preferences                     | User preferences.                                | object                |
| preferences.theme               | Preferred UI theme.                              | string                |
| role                            | User’s functional role.                          | string                |
| skills                          | Assigned skills.                                 | array                 |
| queues                          | Assigned queues.                                 | array                 |
| internalChatPermission          | Indicates if internal chat is allowed.           | boolean               |
| callRegion                      | Region used for voice routing.                   | string                |