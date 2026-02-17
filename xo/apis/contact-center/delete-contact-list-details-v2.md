--8<-- "includes/ccai-api-back-link.md"

# Delete Contact List Details API-v2

Use this API to delete an existing contact list associated with a campaign.

| **Method** | **DELETE** |
| :---- | :---- |
| **Endpoint** | `https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/contactList/{{contactList}}?accountId={{accountId}}` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope** | Campaign Management |

## Path Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `host` | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `streamId` | Bot ID or Stream ID. You can get it from the general settings page.| string, required |
| `contactListId` | Unique identifier of the contact list to update. | string, required |

## Sample Request

```
curl --location --request DELETE 'https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/contactList/{{contactList}}?accountId={{accountId}}' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14bxxxxx' \
--header 'accountId: 67777ce93e25326494exxxxx' \
--header 'auth: <token>' \
--data ''

```

## Headers

| **Header** | **Description** | **Required/Optional** |
| :---- | :---- | :---- |
| `auth` | JWT token for authentication. | string, required |
| `iid` | The Application Id. | string, required |
| `accountId` | The Account Id. | string, required |

## Sample Response

```
{
    "status": "success",
    "message": "Contact list Renewal Due - May/June 2025 deleted successfully",
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
| `status` | Indicates whether the API call was successful. | string |
| `message` | Describes the outcome of the delete operation. | string |
| `data` | Object containing the details of the deleted contact list. | object |
| `data._id` | Unique identifier of the contact list. | string |
| `data.isActive` | Indicates if the contact list was active before deletion. | boolean |
| `data.orgId` | Identifier of the organization to which the contact list belongs. | string |
| `data.name` | Display name of the contact list. | string |
| `data.lname` | Lowercase version of the contact list name. | string |
| `data.description` | Description of the contact list and its purpose. | string |
| `data.totalRecordCount` | Number of contacts in the list. | number |
| `data.status` | Status of the contact list (for example, `Ready`). | string |
| `data.createdBy` | ID of the user who created the list. | string |
| `data.updatedBy` | ID of the user who last updated the list. | string |
| `data.mapping` | Object defining how contact fields are mapped. | object |
| `data.mapping.firstName` | Field mapping for the contact's first name. | string |
| `data.mapping.lastName` | Field mapping for the contact's last name. | string |
| `data.mapping.phoneNumber` | Field mapping for the contact's phone number. | string |
| `data.mapping.timeZone` | Field mapping for the contact's timezone. | string |
| `data.mapping.uniqueId` | Field mapping for the contact's unique identifier. | string |
| `data.isListInUse` | Indicates if the list was actively used in campaigns before deletion. | boolean |
| `data.iId` | Internal ID associated with the contact list. | string |
| `data.listType` | Type of list (`call`, `sms`, etc.). | string |
| `data.campaignInUse` | List of campaign IDs currently associated with the contact list. | array |
| `data.accountId` | Identifier of the account owning the contact list. | string |
| `data.source` | Source of the list data (`passiveApiIntegration`, `upload`, etc.). | string |
| `data.apiConfigurations` | Object that defines API data sync configurations. | object |
| `data.apiConfigurations.dataSyncMode` | Sync mode for contact data (for example, `allowDuplicates`). | string |
| `data.files` | List of file objects uploaded with the contact list. | array |
| `data.createdAt` | ISO timestamp when the list was created. | string |
| `data.updatedAt` | ISO timestamp of the last update made to the list. | string |