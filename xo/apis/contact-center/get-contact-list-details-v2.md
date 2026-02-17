--8<-- "includes/ccai-api-back-link.md"

# Get Contact List Details API-v2

Use this API to retrieve the full details of a specific contact list using its ID.

| **Method** | **GET** |
| :---- | :---- |
| **Endpoint** | `https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/contactList/{{contactListId}}?accountId={{accountId}}` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope** | Campaign Management |

## Path Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `host` | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `streamId` | Bot ID or Stream ID. You can get it from the general settings page.| string, required |
| `contactListId` | Unique identifier of the contact list to update. | string, required |

## Sample Request

```
curl --location 'https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/contactList/{{contactListId}}?accountId={{accountId}}' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14bxxxxx' \
--header 'accountId: 67777ce93e25326494exxxxx' \
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
    "message": "",
    "data": {
        "_id": "cl-718e888-3aca-4008-973e-6d79940xxxxx",
        "isActive": true,
        "name": "Renewal Due - May/June 2025",
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
        "createdAt": "2025-12-05T10:30:57.258Z",
        "updatedAt": "2025-12-05T10:35:41.551Z",
        "allowDuplicates": true
    }
}

```
## Response Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `_id` | Unique ID of the contact list. | string |
| `name` | Name of the contact list. | string |
| `description` | Optional description of the contact list. | string |
| `totalRecordCount` | Number of contacts in the list. | number |
| `status` | Status of the list (for example, `"Ready"`). | string |
| `mapping` | Field mappings for contact attributes. | object |
| `isListInUse` | Indicates if the list is currently in use. | boolean |
| `listType` | Type of list – usually `"call"`. | string |
| `campaignInUse` | Campaigns currently using this list. | array |
| `source` | `"passiveApiIntegration"` if created via API. | string |
| `apiConfigurations` | Data sync settings, like duplicate handling. | object |
| `files` | List of files associated with this contact list. | array |
| `createdAt` | ISO timestamp of when the contact list was created. | string |
| `updatedAt` | ISO timestamp of the most recent update to the contact list. | string |