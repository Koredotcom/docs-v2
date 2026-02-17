--8<-- "includes/ccai-api-back-link.md"

# Get Contact List Details API

Use this API to retrieve the full details of a specific contact list using its ID.

| **Method**   | GET |
|--------------|-----|
| **Endpoint** | `https://{{host}}/agentassist/api/v1/public/{{IID}}/campaign/contactList/{{contactListId}}` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}`<br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope** | Campaign Management |

## Path Parameters

| **Parameter**   | **Description**                                                                 | **Type**          |
|-----------------|----------------------------------------------------------------------------------|-------------------|
| `host`          | Environment URL, for example, `https://platform.kore.ai`                         | string, required  |
| `IId`      | The Application ID. | string, required  |
| `contactListId` | Unique identifier of the contact list to update.                                 | string, required  |

## Sample Request

```
curl --location 'https://{{host}}/agentassist/api/v1/public/{{IID}}/campaign/contactList/{{contactListId}}' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14b9xxxx' \
--header 'accountId: 67777ce93e25326494e9xxxx' \
--header 'auth: <token>'
```

## Headers

| **Header** | **Description**                   | **Required/Optional** |
|------------|-----------------------------------|------------------------|
| `auth`     | JWT token for authentication.     | required               |
| `iid`     | The Application Id.     | required               |
| `accountId`     | The Account Id.     | required               |

## Sample Response

```
{
    "status": "success",
    "message": "",
    "data": {
        "_id": "cl-c2ce382-2516-457e-8eb4-9847deecxxxx",
        "isActive": true,
        "orgId": "o-f8b351e7-f83a-51bd-bd42-d5d40861xxxx",
        "name": "Renewal Due - August 2025",
        "lname": "renewal due - august 2025",
        "description": "This list contains customers with services expiring in July 2025. It includes contact details and subscription info to help agents provide tailored support during live calls.",
        "totalRecordCount": 0,
        "status": "Ready",
        "createdBy": "u-eb5bbee1-6af9-5b9a-b471-03a3fe48xxxx",
        "updatedBy": "u-eb5bbee1-6af9-5b9a-b471-03a3fe48xxxx",
        "mapping": {
            "firstName": "firstName",
            "lastName": "lastName",
            "phoneNumber": "phoneNumber",
            "timeZone": "timeZone",
            "uniqueId": "uniqueId"
        },
        "isListInUse": false,
        "iId": "st-0603182c-7ffb-53c3-b307-47ca14b9xxxx",
        "listType": "call",
        "campaignInUse": [],
        "accountId": "67777ce93e25326494e9xxxx",
        "source": "passiveApiIntegration",
        "apiConfigurations": {
            "dataSyncMode": "allowDuplicates"
        },
        "files": [],
        "createdAt": "2025-06-26T12:32:02.735Z",
        "updatedAt": "2025-06-26T12:38:25.793Z"
    }
}
```

## Response Body Parameters

| **Parameter**       | **Description**                                         | **Type**  |
|---------------------|----------------------------------------------------------|-----------|
| `_id`               | Unique ID of the contact list.                           | string    |
| `name`              | Name of the contact list.                                | string    |
| `description`       | Optional description of the contact list.               | string    |
| `totalRecordCount`  | Number of contacts in the list.                          | number    |
| `status`            | Status of the list (for example, `"Ready"`).             | string    |
| `mapping`           | Field mappings for contact attributes.                   | object    |
| `isListInUse`       | Indicates if the list is currently in use.               | boolean   |
| `listType`          | Type of list – usually `"call"`.                         | string    |
| `campaignInUse`     | Campaigns currently using this list.                     | array     |
| `source`            | `"passiveApiIntegration"` if created via API.                       | string    |
| `apiConfigurations` | Data sync settings, like duplicate handling.             | object    |
| `files`             | List of files associated with this contact list.         | array     |
| `createdAt`         | ISO timestamp of when the contact list was created.      | string    |
| `updatedAt`         | ISO timestamp of the most recent update to the contact list. | string |