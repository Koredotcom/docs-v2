--8<-- "includes/ccai-api-back-link.md"

# Get all Contacts of a Contact List API-v2

Use this API to fetch all contacts of a contact list.

| **Method** | **GET** |
| :---- | :---- |
| **Endpoint** | `https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/contactList/{{contactList}}/getAllContacts?accountId={{accountId}}` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope** | Campaign Management |

## Path Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `host` | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `streamId` | Bot ID or Stream ID. You can get it from the general settings page.| string, required |
| `contactListId` | Unique identifier of the contact list to fetch the contacts. | string, required |

## Sample Request

```

curl --location 'https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/contactList/{{contactList}}/getAllContacts?accountId={{accountId}}' \
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
                "_id": "cc-3f9949ab-f9ab-5752-85c0-77e6300xxxx",
                "createdAt": "2025-12-09T04:28:44.832Z",
                "updatedAt": "2025-12-09T04:28:44.832Z",
                "phoneNumber": "91223334xxxxx"
            },
            {
                "_id": "cc-b97bc0a5-d208-57e6-8cee-5fc1a9cxxxxx",
                "createdAt": "2025-12-09T04:28:44.832Z",
                "updatedAt": "2025-12-09T04:28:44.832Z",
                "phoneNumber": "91223334xxxxx"
            },
            {
                "_id": "cc-219d81d7-4b37-5843-9f8b-f106445xxxxx",
                "createdAt": "2025-12-09T04:28:44.833Z",
                "updatedAt": "2025-12-09T04:28:44.833Z",
                "phoneNumber": "91223334xxxxx"
            }
        ],
        "skip": 0,
        "limit": 50,
        "hasMore": false,
        "totalPages": 1,
        "totalResults": 3
    }
}

```

## Response Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `status` | Indicates whether the API call was successful. | string |
| `message`  | Optional message describing the result of the operation | string |
| `data`  | Object that holds the paginated contact results. | Object |
| `data.results` | Contains retrieved contacts in a contact list | Array of objects |
| `data.results._id` | Unique identifier of the contact. | string |
| `data.results.createdAt` | Timestamp indicating when the contact was created (ISO-8601 format). | string |
| `data.results.updatedAt` | Timestamp indicating when the contact was last updated (ISO-8601 format). | string |
| `data.results.phoneNumber` | Contact phone number. | string |
| `skip` | Number of records skipped for pagination. | Integer |
| `limit`  | Maximum number of records returned in the current response. | Integer |
| `hasMore` | Indicates whether additional pages of data are available. | boolean |
| `totalPages`  | Total number of pages available. | Integer |
| `totalResults ` | The total number of contacts retrieved. | Integer  |