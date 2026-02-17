--8<-- "includes/ccai-api-back-link.md"

# Create Contact List API

Use this API to create a new contact list for use in passive voice campaigns.

| **Method**       | POST                                                                                                                             |
|------------------|----------------------------------------------------------------------------------------------------------------------------------|
| **Endpoint**     | `https://{{host}}/agentassist/api/v1/public/{{IID}}/campaign/contactList/createContactList`        |
| **Content-Type** | `application/json`                                                                                                               |
| **Authorization**| `auth: {{JWT}}`<br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope**    | Campaign Management                                                                                                              |

## Path Parameters

| **Parameter** | **Description**                                                                                     | **Type**          |
|---------------|-----------------------------------------------------------------------------------------------------|-------------------|
| `host`        | Environment URL, for example, `https://platform.kore.ai`                                            | string, required  |
| `IId`    | The Application ID.            | string, required  |

## Sample Request

```
curl --location 'https://{{host}}/agentassist/api/v1/public/{{IID}}/campaign/contactList/createContactList' \
--header 'auth: <token>' \
--header 'Content-Type: application/json' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14b9xxxx' \
--header 'accountId: 67777ce93e25326494e9xxxx' \
--data '{
    "name1": "Renewal Due - July 2025",
    "description": "This list contains customers with services expiring in July 2025. It includes contact details and subscription info to help agents provide tailored support during live calls.",
    "source": "passiveApiIntegration",
    "allowDuplicates": true
}'
```

## Headers

| **Header** | **Description**                   | **Required/Optional** |
|------------|-----------------------------------|------------------------|
| `auth`     | JWT token for authentication.     | required               |
| `iid`     | The Application Id.     | required               |
| `accountId`     | The Account Id.     | required               |

## Body Parameters

| **Parameter**        | **Description**                                                                                                                  | **Type**               |
|--------------------|------------------------------------------------------------------------------------------------------------------------------|--------------------|
| `name`             | Name of the contact list. Max 48 characters. Used to identify and display the list across the platform.                      | string, required   |
| `description`      | Description of the contact list. Max 256 characters. Should briefly explain the list’s purpose and audience.                 | string, required   |
| `source`           | Data origin/source. Must be `"passiveApi"`, indicating the list is populated via API rather than file/manual upload.         | string, required   |
| `allowDuplicates`  | Whether to allow duplicate contact entries in the list. Defaults to `false` if not provided. Must be a boolean value.        | boolean, optional  |

## Sample Response

```
{
    "status": "success",
    "message": "Contact list Contact list of Passive June 27 created successfully",
    "data": {
        "isActive": true,
        "name": "Contact list of Passive June 27",
        "description": "contact list Description",
        "totalRecordCount": 0,
        "status": "Ready",
        "createdBy": "u-4baef569-f6c2-5486-a119-96857249xxxx",
        "updatedBy": "u-4baef569-f6c2-5486-a119-96857249xxxx",
        "mapping": {
            "firstName": "firstName",
            "lastName": "lastName",
            "phoneNumber": "phoneNumber",
            "timeZone": "timeZone",
            "uniqueId": "uniqueId"
        },
        "isListInUse": false,
        "listType": "call",
        "campaignInUse": [],
        "source": "passiveApi",
        "apiConfigurations": {
            "dataSyncMode": "allowDuplicates"
        },
        "files": [],
        "createdAt": "2025-06-27T07:37:17.489Z",
        "updatedAt": "2025-06-27T07:37:17.489Z",
        "_id": "cl-4db9a03-07a3-4009-973a-b8940e81xxxx",
        "allowDuplicates": true
    }
}
```

## Response Body Parameters

| **Parameter**                      | **Description**                                                                 | **Type**         |
|------------------------------------|---------------------------------------------------------------------------------|------------------|
| `_id`                              | Unique ID of the contact list                                                  | string           |
| `name`                             | Name of the contact list                                                       | string           |
| `description`                      | Description of the contact list                                                | string           |
| `status`                           | Current state of the contact list. Usually `Ready`                             | string           |
| `isActive`                         | Indicates if the contact list is active                                        | boolean          |
| `totalRecordCount`                 | Number of records currently in the list                                        | number           |
| `source`                           | Source of list creation. For passive API, the value is `passiveApi`            | string           |
| `allowDuplicates`                 | Indicates if duplicate contact records are allowed                             | boolean          |
| `createdAt`                        | Timestamp when the list was created (ISO format)                               | string           |
| `updatedAt`                        | Timestamp when the list was last updated (ISO format)                          | string           |
| `createdBy`                        | Internal ID of the user who created the list                                   | string           |
| `updatedBy`                        | Internal ID of the user who last updated the list                              | string           |
| `mapping`                          | Field mapping for contact data                                                 | object           |
| `apiConfigurations`               | Contains passive API sync configuration (for example, `dataSyncMode`)                | object           |
| `apiConfigurations.dataSyncMode` | Describes how the API handles duplicate entries (`allowDuplicates`)            | string           |
| `listType`                         | Type of list. Value is `call` for voice campaigns                              | string           |
| `isListInUse`                      | Indicates if the contact list is currently associated with any campaign        | boolean          |
| `campaignInUse`                    | List of campaigns (IDs) currently using this list (empty if unused)            | array            |
| `files`                            | List of file objects, if any uploaded via UI or API (empty for passive API)    | array            |