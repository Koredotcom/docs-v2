--8<-- "includes/ccai-api-back-link.md"

# Get the Agent ID Using the Custom ID

To get the agent ID associated with a Custom ID (extension number).

!!! Note

    An Agent ID will be returned if it is mapped one-to-one with the custom ID. In scenarios where the organization has multiple agent IDs for the same custom ID, it will return an array of agent IDs.

| **METHOD**   | GET                                                                                   |
|--------------|---------------------------------------------------------------------------------------------|
| **Endpoint** | `https://{{host}}/agentassist/api/v1/public/{{streamId}}/agents/customId/{{customId}}` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}`<br>See [How to generate the JWT Token.](../automation/api-introduction.md#generating-the-jwt-token)|
| **API Scope** | Configuration |

## Path Parameters

| **Parameter** | **Description**                                                                 | **Type**          |
|---------------|----------------------------------------------------------------------------------|-------------------|
| host          | Environment URL, for example, `https://platform.kore.ai`                          | string, required  |
| streamId      | botId or streamId. You can get it from the App Settings page. application ID.      | string, required  |
| customId      | The Agent’s ID from the customer’s system                                       | string, required  |

## Sample Request

```
curl --location 'https://{{host}}/agentassist/api/v1/public/{{streamId}}/agents/customId/{{customId}}' \
--header 'auth: {{jwt}}' \
--header 'Content-Type: application/json' \
--header 'accountId: {{accountId}}'
```

## Headers

| **Header**  | **Description**                             | **Required/Optional** |
|-------------|----------------------------------------------|------------------------|
| accountId   | The account ID associated with the API request. | required               |
| auth        | JWT token for authentication.               | required               |

## Sample Response

```
[
    {
        "firstName": "fdsa",
        "lastName": "Geller",
        "fullName": "fdsa Geller",
        "lFullName": "fdsa geller",
        "emailId": "x@yopmail.com",
        "nickName": "",
        "profImage": "no-avatar",
        "phoneNumber": "",
        "userId": "u-fa49c902-2c47-58d7-b61b-d00777dcxxxx",
        "accountId": "671103693114e02715cexxxx",
        "isAccountOwner": true,
        "orgId": "o-c8b351ff-6b3c-5769-afea-1a0adaf4xxxx",
        "agentGroups": [
            {
                "groupId": "ag-836c397-9ba0-4cac-9930-e29819c3xxxx",
                "accessLevel": "full",
                "role": "manager",
                "name": "Default Group"
            }
        ],
        "canSupportChat": true,
        "canSupportCase": false,
        "chatLanguageSupport": [
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
        "attachmentsEnabled": true,
        "emojisEnabled": true,
        "createdBy": "u-fa49c902-2c47-58d7-b61b-d00777dcxxxx",
        "status": "ACTIVE",
        "hoursOfOperationId": "677f7728c14c0b208a81xxxx",
        "roleId": "671103693114e02715cexxxx",
        "onlineStatus": "Offline",
        "onlineStatusType": "OFFLINE",
        "iId": "st-240f7943-fcb7-565e-ac83-e3c353cdxxxx",
        "createdByAId": "a-8b67d6c-db44-4806-ba3a-96605aeaxxxx",
        "preferences": {
            "theme": "light"
        },
        "desktopLayouts": [
            {
                "id": "ly-d87a5e8-c5bb-4e2a-9792-adacedd0xxxx",
                "isDefault": true
            }
        ],
        "voiceSupport": [
            {
                "type": "inbound",
                "isEnabled": true
            },
            {
                "type": "campaigns",
                "isEnabled": false
            }
        ],
        "maxDigitalChatSupport": 5,
        "maxEmailChatSupport": 5,
        "maxMessagingChatSupport": 5,
        "markedAutoAway": false,
        "caseLanguageSupport": [
            {
                "language": "en",
                "proficiency": "expert",
                "isActive": true
            }
        ],
        "lastOnlineAt": "2025-01-27T15:03:13.708Z",
        "createdAt": "2025-01-09T07:13:44.516Z",
        "updatedAt": "2025-01-28T07:18:02.593Z",
        "sipURI": "sip:support_production_a-8b67d6c-db44-4806-ba3a-96605aeaxxxx@uat-uxo-bots-vg-np:5060",
        "prevStatus": "Available",
        "prevStatusType": "AVAILABLE",
        "customId": "1111",
        "id": "a-8b67d6c-db44-4806-ba3a-96605aeaxxxx",
        "name": "fdsa Geller",
        "addresses": [
            "wss://sbc1-korevg-np.kore.ai:8443"
        ],
        "iceServers": [
            {
                "url": "stun:global.stun.twilio.com:3478",
                "urls": "stun:global.stun.twilio.com:3478"
            },
            {
                "url": "turn:global.turn.twilio.com:3478?transport=udp",
                "username": "38b91f68f32f4247b8c5ff1007ab68c6c3f152fb72f21b97b4246c42909bxxxx",
                "urls": "turn:global.turn.twilio.com:3478?transport=udp",
                "credential": "nPncCYbTAT4XX7H5t1iPMiYOfxxxx/kJ3ZadxTx0ncg="
            },
            {
                "url": "turn:global.turn.twilio.com:3478?transport=tcp",
                "username": "38b91f68f32f4247b8c5ff1007ab68c6c3f152fb72f21b97b4246c42909bxxxx",
                "urls": "turn:global.turn.twilio.com:3478?transport=tcp",
                "credential": "nPncCYbTAT4XX7H5t1iPMiYOfxxxx/kJ3ZadxTx0ncg="
            },
            {
                "url": "turn:global.turn.twilio.com:443?transport=tcp",
                "username": "38b91f68f32f4247b8c5ff1007ab68c6c3f152fb72f21b97b4246c42909bxxxx",
                "urls": "turn:global.turn.twilio.com:443?transport=tcp",
                "credential": "nPncCYbTAT4XX7H5t1iPMiYOfxxxx/kJ3ZadxTx0ncg="
            }
        ],
        "domain": "uat-uxo-bots-vg-np",
        "role": "Bot Owner",
        "skills": [
            {
                "skillId": "677f7728c14c0b208a81xxxx",
                "userId": "u-fa49c902-2c47-58d7-b61b-d00777dcxxxx",
                "createdBy": "u-fa49c902-2c47-58d7-b61b-d00777dcxxxx",
                "orgId": "o-c8b351ff-6b3c-5769-afea-1a0adaf4xxxx",
                "accountId": "671103693114e02715cexxxx",
                "proficiencyLevel": "expert",
                "iId": "st-240f7943-fcb7-565e-ac83-e3c353cdxxxx",
                "aId": "a-8b67d6c-db44-4806-ba3a-96605aeaxxxx",
                "createdByAId": "a-8b67d6c-db44-4806-ba3a-96605aeaxxxx",
                "createdAt": "2025-01-09T07:13:44.523Z",
                "updatedAt": "2025-01-28T07:11:32.235Z",
                "id": "677f7728c14c0b208a81xxxx",
                "name": "Default Skill",
                "skillGroupName": "Default SkillGroup",
                "skillGroupColor": "#D2000D"
            }
        ],
        "queues": [
            {
                "id": "qu-6106458-2d84-4b8d-9bc6-699ebcecxxxx",
                "name": "Default Queue",
                "description": "Auto created system default queue",
                "isPreferredAgent": true
            }
        ],
        "internalChatPermission": true,
        "callRegion": "US"
    }
]
```

## Response Body Parameters

| **Parameter**         | **Description**                                              | **Type** |
|-----------------------|--------------------------------------------------------------|----------|
| accountId             | Account identifier                                           | string   |
| addresses             | List of WSS addresses for voice communication                | array    |
| agentGroups           | List of agent groups containing groupId, accessLevel, role, and name | array    |
| attachmentsEnabled    | Whether file attachments are enabled                         | boolean  |
| callRegion            | The call region, for example, USA                            | string   |
| canSupportCase        | Whether the agent can handle cases                           | boolean  |
| canSupportChat        | Whether the agent can provide chat support                   | boolean  |
| canSupportVoice       | Whether the agent can provide voice support                  | boolean  |
| caseLanguageSupport   | List of supported case languages with proficiency levels     | array    |
| chatLanguageSupport   | List of supported chat languages with proficiency levels     | array    |
| createdAt             | Account creation timestamp                                   | string   |
| createdBy             | User ID of the creator                                       | string   |
| createdByAId          | Agent ID of the creator                                      | string   |
| customId              | The custom identifier for the user                           | string   |
| desktopLayouts        | List of desktop layout configurations                        | array    |
| domain                | Voice communication domain                                   | string   |
| emailId               | The user's email address                                     | string   |
| emojisEnabled         | Whether emoji usage is enabled                               | boolean  |
| firstName             | The user's first name                                        | string   |
| fullName              | Complete name of the user                                    | string   |
| hoursOfOperationId    | ID reference for operation hours                             | string   |
| iceServers            | List of ICE server configurations for voice communication    | array    |
| id                    | Agent identifier                                             | string   |
| iId                   | Internal identifier                                          | string   |
| internalChatPermission| Whether internal chat is permitted                           | boolean  |
| isAccountOwner        | Indicates if the user is the account owner                   | boolean  |
| lastName              | The user's last name                                         | string   |
| lastOnlineAt          | Timestamp of last online presence                            | string   |
| lFullName             | Lowercase version of the full name                           | string   |
| markedAutoAway        | Whether the user is marked as automatically away             | boolean  |
| maxDigitalChatSupport | Maximum concurrent digital chats allowed                     | number   |
| maxEmailChatSupport   | Maximum concurrent email chats allowed                       | number   |
| maxMessagingChatSupport| Maximum concurrent messaging chats allowed                  | number   |
| name                  | The display name                                             | string   |
| nickName              | The user's nickname (optional)                               | string   |
| onlineStatus          | Current online status text                                   | string   |
| onlineStatusType      | Current online status type                                   | string   |
| orgId                 | Organization identifier                                      | string   |
| phoneNumber           | The user's phone number                                      | string   |
| preferences           | User preferences (includes theme)                            | object   |
| prevStatus            | Previous online status text                                  | string   |
| prevStatusType        | Previous online status type                                  | string   |
| profImage             | Profile image identifier                                     | string   |
| queues                | List of queue assignments with ID, name, and preferences     | array    |
| role                  | The user's role (for example, Bot Owner)                     | string   |
| roleId                | The role identifier                                          | string   |
| sipURI                | The SIP URI for voice communications                         | string   |
| skills                | List of user skills with proficiency levels                  | array    |
| status                | The user's account status (for example, ACTIVE)              | string   |
| updatedAt             | Last update timestamp                                        | string   |
| userId                | Unique user identifier (UUID format)                         | string   |
| voiceLanguageSupport  | List of supported voice languages with proficiency levels    | array    |
| voiceSupport          | Voice support configuration details                          | array    |
