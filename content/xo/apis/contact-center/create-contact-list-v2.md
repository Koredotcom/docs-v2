--8<-- "includes/ccai-api-back-link.md"

# Create Contact List API-v2

Use this API to create a new contact list for use in passive voice campaigns.

| **Method** | **POST** |
| :---- | :---- |
| **Endpoint** | `https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/contactList/createContactList?accountId={{accountId}}` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}`<br> See [How to generate the JWT Token.](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope** | Campaign Management |

## Path Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `host` | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `streamId` | Bot ID or Stream ID. You can get it from the general settings page.| string, required |

## Sample Request

```
curl --location 'https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/contactList/createContactList?accountId={{accountId}}' \
--header 'auth: <token>' \
--header 'Content-Type: application/json' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14bxxxxx' \
--header 'accountId: 67777ce93e25326494exxxxx' \
--data '{
    "name": "Renewal Due 1- July 2025",
    "description": "This list contains customers with services expiring in July 2025. It includes contact details and subscription info to help agents provide tailored support during live calls.",
    "source": "passiveApi",
    "allowDuplicates": true
}'
```

## Headers

| Header | Description | Required/Optional |
| :---- | :---- | :---- |
| `auth` | JWT token for authentication. | required |
| `iid` | The Application Id. | required |
| `accountId` | The Account Id. | required |

## Body Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `name` | Name of the contact list. Max 48 characters. Used to identify and display the list across the platform. | string, required |
| `description` | Description of the contact list. Max 256 characters. Should briefly explain the list’s purpose and audience. | string, required |
| `source` | Data origin/source. Must be `"passiveApi"`, indicating the list is populated via API rather than file/manual upload. | string, required |
| `allowDuplicates` | Whether to allow duplicate contact entries in the list. Defaults to `false` if not provided. Must be a boolean value. | boolean, optional |

## Sample Response

```
{
    "status": "success",
    "message": "Contact list Renewal Due 1- July 2025 created successfully",
    "data": {
        "isActive": true,
        "name": "Renewal Due 1- July 2025",
        "description": "This list contains customers with services expiring in July 2025. It includes contact details and subscription info to help agents provide tailored support during live calls.",
        "totalRecordCount": 0,
        "status": "Ready",
        "createdBy": "u-eb5bbee1-6af9-5b9a-b471-03a3fe4xxxxx",
        "updatedBy": "u-eb5bbee1-6af9-5b9a-b471-03a3fe4xxxxx",
        "mapping": {
            "firstName": "firstName",
            "lastName": "lastName",
            "phoneNumber": "phoneNumber",
            "timeZone": "timeZone",
            "uniqueId": "uniqueId",
            "contactPriority": "contactPriority"
        },
        "isListInUse": false,
        "listType": "call",
        "isGlobalDNC": false,
        "isDefault": false,
        "campaignInUse": [],
        "source": "passiveApi",
        "apiConfigurations": {
            "dataSyncMode": "allowDuplicates"
        },
        "columns": [],
        "files": [],
        "createdAt": "2025-12-05T09:22:51.001Z",
        "updatedAt": "2025-12-05T09:22:51.001Z",
        "_id": "cl-67a405c-ae3b-4a42-8cd2-5dcd699xxxxx",
        "allowDuplicates": true
    }
}
```
## Response Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| status | Indicates the overall response status. Example: `"success"` | string |
| message | Descriptive message about the result. | string |
| data | Contains the contact list details. | object |
| `data.isActive` | Indicates if the contact list is active | boolean |
| `data.name` | Name of the contact list | string |
| `data.description` | Description of the contact list | string |
| `data.totalRecordCount` | Number of records currently in the list | number |
| `data.status` | Current state of the contact list. Usually `Ready` | string |
| `data.createdAt` | Timestamp when the list was created (ISO format) | string |
| `data.updatedAt` | Timestamp when the list was last updated (ISO format) | string |
| `data.mapping` | Field mapping for contact data. | object |
| `data.mapping.`firstName | Field mapped to the contact’s first name. | string |
| `data.mapping.`lastName | Field mapped to the contact’s last name. | string |
| `data.mapping.`phoneNumber | Field mapped to the contact’s phone number | string |
| `data.mapping.`timeZone | Field mapped to the contact’s time zone. | string |
| `data.mapping.`uniqueId | Field used as the unique identifier for each contact. | string |
| `data.mapping.`contactPriority | Field representing the priority of the contact. | string |
| `data.isListInUse` | Indicates if the contact list is currently associated with any campaign | boolean |
| `data.listType` | Type of list. Value is `call` for voice campaigns | string |
| `data.`isGlobalDNC | Indicates whether the list is part of the global Do Not Call list. | boolean |
| `data.`isDefault | Indicates whether this is the system’s default contact list. | boolean |
| `data.campaignInUse` | List of campaigns (IDs) currently using this list (empty if unused) | array |
| `data.source` | Source of list creation. For passive API, the value is `passiveApi` | string |
| `data.apiConfigurations` | Contains passive API sync configuration (for example, `dataSyncMode`) | object |
| `data.apiConfigurations.dataSyncMode` | Describes how the API handles duplicate entries (`allowDuplicates`) | string |
| `data.columns` | User-defined column metadata for contacts  | array |
| `data.files` | List of file objects, if any uploaded via UI or API (empty for passive API) | array |
| `data.createdBy` | Internal ID of the user who created the list | string |
| `data.updatedBy` | Internal ID of the user who last updated the list | string |
| `data._id` | Unique ID of the contact list | string |
| `data.allowDuplicates` | Indicates if duplicate contact records are allowed | `boolean` |