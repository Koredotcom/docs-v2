--8<-- "includes/ccai-api-back-link.md"

# Update a Contact API

Use this API to update a specific contact associated with a stream ID. 

| METHOD | PUT |
| :---- | :---- |
| **Endpoint** | `https://{{host}}/agentassist/api/v1/public/{{streamId}}/contacts/{{id}}` |
| **Content Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` <br> See [How to generate the JWT Token.](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope** | Configuration |

## Path Parameters

| **PARAMETER** | **DESCRIPTION** | **TYPE** |
| :---- | :---- | :---- |
| `host` | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `streamId` | BotId or StreamId. You can access it from the App Settings page of the bot. | string, required |
| `id` | Unique identifier of a specific contact | string, required |

## Sample Request

```
curl --location --request PUT 'https://{{host}}/agentassist/api/v1/public/{{streamId}}/contacts/{{id}}' \
--header 'Content-Type: application/json' \
--header 'accountId: 65f7d49a5dd06e2cefaxxxxx' \
--header 'auth: {{jwt_token}}' \
--data '{
    "firstName": "john",
    "lastName": "doe",
    "salutation": "mr",
    "cellPhone": {
        "phoneNumber": "95501xxxxx",
        "countryCode": "+91",
        "extension": "+"
    }
}
'
```

## Request Header Parameters

| **Header** | **Description** | **Required/Optional** |
| :---- | :---- | :---- |
| `auth` | JWT token for authentication. | required |
| `accountId` | The account ID associated with the API request. | required |
| `Content-Type` | The format in which the request payload is sent to the server  application/json | required |

## Sample Response

```
{
    "firstName": "john",
    "lastName": "doe",
    "fullName": "john doe",
    "salutation": "mr",
    "cellPhone": {
        "extension": "+",
        "phoneNumber": "+9195501xxxxx",
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
    "createdAt": "2024-06-28T05:24:07.218Z",
    "updatedAt": "2026-01-09T05:55:58.158Z",
    "updatedBy": "u-cc6ebd6c-656c-5364-abfc-ad5f80exxxxx",
    "updatedByAId": "a-6c63a33-c2a7-49e8-a5ab-82449c8xxxxx",
    "id": "667e48f7c8b972fc691xxxxx"
}
```

## Response parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `firstName` | Contact’s first name. | string |
| `lastName` | Contact’s last name. | string |
| `fullName` | Contact’s full name. | string |
| `salutation` | Salutation or title of the contact. | string |
| `cellPhone` | Mobile details of the contact. | object |
| `cellPhone.extension` | Dialing prefix | string |
| `cellPhone.phoneNumber` | Contact’s mobile phone number. | string |
| `cellPhone.countryCode` | Country calling code associated with the phone number. | string |
| `status` | Current status of the contact | string |
| `instanceBotId` | Unique identifier of the associated bot instance. | string |
| `orgId` | Unique identifier of the organization. | string |
| `accountId` | Unique identifier of the account. | string |
| `createdBy` | Unique identifier of the user who created the contact. | string |
| `createdByAId` | Unique identifier of the application that created the record. | string |
| `address` | List of addresses associated with the contact. | array of objects |
| `twitterDetails` | List of Twitter profile details associated with the contact. | array of objects |
| `createdAt` | Timestamp indicating when the contact was created. | string (ISO 8601 Date-Time) |
| `updatedAt` | Timestamp indicating when the contact was last updated. | string (ISO 8601 Date-Time) |
| `updatedBy` | Timestamp indicating when the contact was last updated. | string |
| `updatedByAId` | Unique identifier of the application that updated the contact. | string |
| `id` | Unique identifier of the contact record. | string |