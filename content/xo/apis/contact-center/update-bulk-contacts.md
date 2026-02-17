--8<-- "includes/ccai-api-back-link.md"

# Update Bulk Contacts API

Use this API to update multiple contacts by IDs.

| METHOD | PUT |
| :---- | :---- |
| **Endpoint** | `https://{{host}}/agentassist/api/v1/public/{{streamId}}/contacts/bulk-update` |
| **Content Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` <br> See [How to generate the JWT Token.](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope** | Configuration |

## Path Parameters

| **PARAMETER** | **DESCRIPTION** | **TYPE** |
| :---- | :---- | :---- |
| `host` | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `streamId` | BotId or StreamId. You can access it from the App Settings page of the bot. | string, required |

## Sample Request

```
curl --location --request PUT 'https://{{host}}/agentassist/api/v1/public/{{streamId}}/contacts/bulk-update' \
--header 'Content-Type: application/json' \
--header 'accountId: {{accountId}}' \
--header 'auth: {{jwt_token}}' \
--data '[
    {
        "id": "6964af60450340957c6xxxxx",
        "firstName": "john",
            "lastName": "doee",
            "fullName": "john doee",
            "salutation": "mr",
            "cellPhone": {
                "extension": "+",
                "phoneNumber": "24456xxxxx",
                "countryCode": "+91"
            }
    },
       {
        "id": "6964af806fc554153c0xxxxx",
        "firstName": "jane",
            "lastName": "do",
            "fullName": "jane do",
            "salutation": "mr",
            "cellPhone": {
                "extension": "+",
                "phoneNumber": "244567xxxxx",
                "countryCode": "+91"
            }
    }
]'
```

## Request Headers

| **Header** | **Description** | **Required/Optional** |
| :---- | :---- | :---- |
| `auth` | JWT token for authentication. | required |
| `accountId` | The account ID associated with the API request. | required |
| `Content-Type` | The format in which the request payload is sent to the server  application/json  | required |

## Body Parameters

| **PARAMETER** | **DESCRIPTION** | **TYPE** |
| :---- | :---- | :---- |
| `id` | The unique identifier of the contact | string, required |
| `firstName` | The first name of the contact. | string, required |
| `lastName` | The last name of the contact. | string, required |
| `salutation` | The salutation (Mr. or Mrs.) of the contact. | string, required |
| `cellPhone.phoneNumber` | The phone number of the contact in numeric digits without any special characters or alphabets. | string, required |
| `cellPhone.countryCod`e | The country code of the contact. | string, required |
| `cellPhone.extension` | The extension of the contact. | string, required |
|  |  |  |

## Sample Response

```
{
    "totalRequested": 2,
    "successful": 2,
    "failed": 0,
    "successfulRecords": [
        {
            "id": "6964af60450340957c6xxxxx",
            "contact": {
                "_id": "6964af60450340957c6xxxxx",
                "firstName": "john",
                "lastName": "doe",
                "fullName": "john doe",
                "salutation": "mr",
                "cellPhone": {
                    "extension": "+",
                    "phoneNumber": "+9124456xxxxx",
                    "countryCode": "+91"
                },
                "status": "ACTIVE",
                "instanceBotId": "st-7dc994f0-4436-5134-9fa8-a942625xxxxx",
                "orgId": "o-16ff21d2-5d27-5fb2-b9bd-9fedb5fxxxxx",
                "accountId": "65f7d49a5dd06e2cefa45012",
                "createdBy": "u-cc6ebd6c-656c-5364-abfc-ad5f80exxxxx",
                "createdByAId": "a-6c63a33-c2a7-49e8-a5ab-82449c8xxxxx",
                "address": [],
                "twitterDetails": [],
                "createdAt": "2026-01-12T08:22:56.321Z",
                "updatedAt": "2026-01-12T09:55:04.840Z",
                "updatedBy": "u-cc6ebd6c-656c-5364-abfc-ad5f80exxxxx",
                "updatedByAId": "a-6c63a33-c2a7-49e8-a5ab-82449c8xxxxx"
            }
        },
        {
            "id": "6964af806fc554153c0xxxxx",
            "contact": {
                "_id": "6964af806fc554153c0xxxxx",
                "firstName": "jane",
                "lastName": "doe",
                "fullName": "jane doe",
                "salutation": "mr",
                "cellPhone": {
                    "extension": "+",
                    "phoneNumber": "+91244567xxxxx",
                    "countryCode": "+91"
                },
                "status": "ACTIVE",
                "instanceBotId": "st-7dc994f0-4436-5134-9fa8-a942625xxxxx",
                "orgId": "o-16ff21d2-5d27-5fb2-b9bd-9fedb5fxxxxx",
                "accountId": "65f7d49a5dd06e2cefaxxxxx",
                "createdBy": "u-cc6ebd6c-656c-5364-abfc-ad5f80exxxxx",
                "createdByAId": "a-6c63a33-c2a7-49e8-a5ab-82449c8xxxxx",
                "address": [],
                "twitterDetails": [],
                "createdAt": "2026-01-12T08:23:28.413Z",
                "updatedAt": "2026-01-12T09:55:04.846Z",
                "updatedBy": "u-cc6ebd6c-656c-5364-abfc-ad5f80exxxxx",
                "updatedByAId": "a-6c63a33-c2a7-49e8-a5ab-82449c8xxxxx"
            }
        }
    ],
    "failedRecords": []
}
```

## Response Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `totalRequested` | Total number of records requested. | integer |
| `successful` | Total number of records successfully deleted. | integer |
| `failed` | Number of records that failed to process. | integer |
| `successfulRecords` | Contains array of contacts that were updated | array of objects |
| `successfulRecords.id` | Unique identifier of the contact record. | string |
| `successfulRecords.contact._id`  | Unique identifier of the contact record. | string |
| `successfulRecords.contact. firstName` | Contact’s first name. | string |
| `successfulRecords.contact.lastName` | Contact’s last name. | string |
| `successfulRecords.contact.fullName` | Contact’s full name. | string |
| `successfulRecords.contact.salutation` | Salutation or title of the contact. | string |
| `successfulRecords.contact.cellPhone` | Mobile details of the contact. | object |
| `successfulRecords.contact.cellPhone.extension` | Dialing prefix | string |
| `successfulRecords.contact.cellPhone.phoneNumber` | Contact’s mobile phone number. | string |
| `successfulRecords.contact.cellPhone.countryCode` | Country calling code associated with the phone number. | string |
| `successfulRecords.contact.status` | Current status of the contact | string |
| `successfulRecords.contact.instanceBotId` | Unique identifier of the associated bot instance. | string |
| `successfulRecords.contact.orgId` | Unique identifier of the organization. | string |
| `successfulRecords.contact.accountId` | Unique identifier of the account. | string |
| `successfulRecords.contact.createdBy` | Unique identifier of the user who created the contact. | string |
| `successfulRecords.contact.createdByAId` | Unique identifier of the application that created the record. | string |
| `successfulRecords.contact.address` | List of addresses associated with the contact. | array of objects |
| `successfulRecords.contact.twitterDetails` | List of Twitter profile details associated with the contact. | array of objects |
| `successfulRecords.contact.createdAt` | Timestamp indicating when the contact was created. | String (ISO 8601 Date-Time) |
| `successfulRecords.contact.updatedAt` | Timestamp indicating when the contact was last updated. | String (ISO 8601 Date-Time) |
| `successfulRecords.contact.updatedBy` | Timestamp indicating when the contact was last updated. | string |
| `successfulRecords.contact.updatedByAId` | Unique identifier of the application that updated the contact. | string |
| `failedRecords` | List of records that failed to delete. This array is empty when there are no failures. | array of objects |