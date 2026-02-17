--8<-- "includes/ccai-api-back-link.md"

# Get all Contacts of a Contact List API

Use this API to fetch all contacts from a contact list.

| **Method** | **GET** |
| :---- | :---- |
| **Endpoint** | https://{{host}}/agentassist/api/v1/public/{{streamId}}/campaign/contactList/{{contactListId}}/getAllContacts?accountId={{accountId}} |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` See [How to generate the JWT Token](https://docs.kore.ai/xo/apis/automation/api-introduction/#generating-the-jwt-token). |
| **API Scope** | Campaign Management |

## Path Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `host` | Environment URL, for example, `https://platform.kore.ai` | string, required |
|  streamId | The Application ID. | string, required |
| `contactListId` | Unique identifier of the contact list to fetch the contacts. | string, required |

## Sample Request

```
curl --location 'https://{{host}}/agentassist/api/v1/public/{{streamId}}/campaign/contactList/{{contactListId}}/getAllContacts?accountId={{accountId}}' \
--header 'auth: <token>'

```
## Headers

| **Header** | **Description** | **Required/Optional** |
| :---- | :---- | :---- |
| `auth` | JWT token for authentication. | required |
| `iid` | The Application Id. | required |
| `accountId` | The Account Id. | required |

## Sample Response

```
{
    "status": "success",
    "message": "Contacts retrieved successfully",
    "data": {
        "results": [
            {
                "_id": "cc-6eb48e4b-45a5-5f87-8717-9687a84xxxxx",
                "createdAt": "2025-12-09T04:32:01.247Z",
                "updatedAt": "2025-12-09T04:32:01.247Z",
                "phoneNumber": "91223334xxxxx"
            },
            {
                "_id": "cc-02d41634-d46f-5757-befb-52f7090xxxxx",
                "createdAt": "2025-12-09T04:32:01.247Z",
                "updatedAt": "2025-12-09T04:32:01.247Z",
                "phoneNumber": "91223334xxxxx"
            },
            {
                "_id": "cc-31521027-4c64-52a1-a914-d092a4cxxxxx",
                "createdAt": "2025-12-09T04:32:01.247Z",
                "updatedAt": "2025-12-09T04:32:01.247Z",
                "phoneNumber": "91223334xxxxx"
            },
            {
                "_id": "cc-1c77a6a2-32bd-5cb3-a685-d5f3ea9xxxxx",
                "createdAt": "2025-12-09T04:32:35.321Z",
                "updatedAt": "2025-12-09T04:32:35.321Z",
                "phoneNumber": "91223334xxxxx"
            },
            {
                "_id": "cc-91ef4f71-9f63-572c-8166-b8b7f76xxxx",
                "createdAt": "2025-12-09T04:32:35.321Z",
                "updatedAt": "2025-12-09T04:32:35.321Z",
                "phoneNumber": "91223334xxxxx"
            },
            {
                "_id": "cc-2ab0bcae-e011-5da3-a24f-6b07c7cxxxxx",
                "createdAt": "2025-12-09T04:32:35.321Z",
                "updatedAt": "2025-12-09T04:32:35.321Z",
                "phoneNumber": "91223334xxxxx"
            }
        ],
        "skip": 0,
        "limit": 50,
        "hasMore": false,
        "totalPages": 1,
        "totalResults": 6
    }
}

```

## Response Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `status` | Indicates whether the API call was successful. | string |
| `message`  | Optional message describing the result of the operation | string |
| `data`  | Object that holds the paginated contact list results. | Object |
| `data.results` | Contains retrieved contacts in a contact list | Array of objects |
| `data.results._id` | Unique identifier of the contact. | string |
| `data.results.createdAt` | Timestamp indicating when the contact was created (ISO-8601 format). | string |
| `data.results.updatedAt` | Timestamp indicating when the contact was last updated (ISO-8601 format). | string |
| `data.results.phoneNumber` | Contact phone number. | string |
| `skip` | Number of records skipped for pagination. | Integer |
| `limit`  | Maximum number of records returned in the current response. | Integer |
| `hasMore` | Indicates whether additional pages of data are available. | boolean |
| `totalPages`  | Total number of pages available. | Integer |
| `totalResults`  | The total number of contacts retrieved. | Integer  |