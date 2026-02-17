--8<-- "includes/ccai-api-back-link.md"

# Get All Contact Lists-v2

Retrieves metadata for all contact lists associated with all voice campaigns.

| **Method** | **POST** |
| :---- | :---- |
| **Endpoint** | `https://{host}}/campaign/api/v2/public/{{streamId}}/campaign/contactList/getAllListDetails?accountId={{accountId}}&type=call` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope** | Campaign Management |

## Path Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `host` | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `IId` | The Application ID. | string, required |

## Query Parameter

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `type` | Value must be `call` to retrieve contact lists only. | string, optional |

## Sample Request

```
curl --location 'https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/contactList/getAllListDetails?accountId={{accountId}}&type=call' \
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
    "data": [
        {
            "_id": "cl-718e888-3aca-4008-973e-6d79940xxxxx",
            "name": "Renewal Due - May/June 2025",
            "description": "This list contains customers with services expiring in July 2025. It includes contact details and subscription info to help agents provide tailored support during live calls.",
            "totalRecordCount": 0,
            "status": "Ready",
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
            "campaignInUse": [],
            "source": "passiveApi",
            "apiConfigurations": {
                "dataSyncMode": "allowDuplicates"
            },
            "columns": [],
            "files": [],
            "updatedAt": "2025-12-05T10:35:41.551Z"
        },
        {
            "_id": "cl-2259a6e-250d-4e30-95a8-9b813c1xxxxx",
            "name": "Renewal Due - July 2025",
            "description": "This list contains customers with services expiring in July 2025. It includes contact details and subscription info to help agents provide tailored support during live calls.",
            "totalRecordCount": 0,
            "status": "Ready",
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
            "campaignInUse": [],
            "source": "passiveApi",
            "apiConfigurations": {
                "dataSyncMode": "allowDuplicates"
            },
            "columns": [],
            "files": [],
            "updatedAt": "2025-12-05T10:30:16.232Z"
        },
        {
            "_id": "cl-a87db5d-bd29-4327-ab8c-a7ac000xxxxx",
            "name": "CL Only 2020 Dec 4",
            "description": "CL Only 2020 Dec 4",
            "files": [
                {
                    "fileId": "693153a4f33d29f872fxxxxx",
                    "fileName": "contact list 2020 (with Priority).csv"
                }
            ],
            "totalRecordCount": 1,
            "status": "Validated",
            "mapping": {
                "firstName": "firstName",
                "lastName": "lastName",
                "phoneNumber": "phoneNumber",
                "timeZone": "timezone",
                "uniqueId": "",
                "contactPriority": ""
            },
            "isListInUse": false,
            "listType": "call",
            "campaignInUse": [
                {
                    "name": "Event Reminder SMS Campaign7",
                    "id": "cd-0c172a6b-2a01-5247-8e96-4e28effxxxxx"
                },
                {
                    "name": "Billing Alert Template Campaign-2",
                    "id": "cd-99d4074d-914e-5659-b4c1-09231b8xxxxx"
                },
                {
                    "name": "Interactive Support SMS Campaign1212",
                    "id": "cd-e35c04a1-52f7-5a7e-86ba-c4a6101xxxxx"
                },
                {
                    "id": "cd-62485d8-5d0b-4479-a433-37d3a4dxxxxx",
                    "name": "Product Feedback Voice Campaign-3.4"
                },
                {
                    "id": "cd-469cba4-2597-471d-b5ed-02732c2xxxxx",
                    "name": "Service Renewal Outreach Campaign6"
                },
                {
                    "id": "cd-10c85a3-57a3-4d2d-aad4-b09344axxxxx",
                    "name": "Billing Reminder Voice Campaign1"
                },
                {
                    "id": "cd-b2c1690-0a1b-497c-9326-1bdd229xxxxx",
                    "name": "Billing Reminder Voice Campaign1"
                },
                {
                    "id": "cd-071591b-95ce-43a0-83dd-73b465dxxxxx",
                    "name": "Agentless | Dec 5 | Latest Execution"
                },
                {
                    "name": "Event Reminder SMS Campaign71",
                    "id": "cd-964e76d3-2e70-51a5-bd47-b09b4d4xxxxx"
                },
                {
                    "name": "Billing Alert Template Campaign-21",
                    "id": "cd-99f05887-5638-59ef-90d9-5dc9ebdxxxxx"
                },
                {
                    "name": "Interactive Support SMS Campaign1212",
                    "id": "cd-e7110489-a30a-5d1e-80ee-f246cc8xxxxx"
                },
                {
                    "name": "Event Reminder SMS Campaign8",
                    "id": "cd-78d3f0a9-8f42-5d8c-af8d-d6a63eaxxxxx"
                }
            ],
            "source": "localDrive",
            "columns": [
                "firstName",
                "lastName",
                "phoneNumber",
                "timezone",
                "uniqueId",
                " Priority"
            ],
            "updatedAt": "2025-12-05T09:34:12.449Z"
        },
        {
            "_id": "cl-67a405c-ae3b-4a42-8cd2-5dcd699xxxxx",
            "name": "Renewal Due 1- July 2025",
            "description": "This list contains customers with services expiring in July 2025. It includes contact details and subscription info to help agents provide tailored support during live calls.",
            "totalRecordCount": 0,
            "status": "Ready",
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
            "campaignInUse": [],
            "source": "passiveApi",
            "apiConfigurations": {
                "dataSyncMode": "allowDuplicates"
            },
            "columns": [],
            "files": [],
            "updatedAt": "2025-12-05T09:22:51.001Z"
        },
        {
            "_id": "cl-0b6c38b-342d-4d65-91c5-d55aec8xxxxx",
            "name": "API List | Dec 5",
            "description": "API List | Dec 5",
            "files": [
                {
                    "fileId": "6932945892331438e86xxxxx",
                    "fileName": "contact list 2020 (with Priority).csv"
                }
            ],
            "totalRecordCount": 1,
            "status": "Validated",
            "mapping": {
                "firstName": "firstName",
                "lastName": "",
                "phoneNumber": "phoneNumber",
                "timeZone": "",
                "uniqueId": "",
                "contactPriority": ""
            },
            "isListInUse": false,
            "listType": "call",
            "campaignInUse": [],
            "source": "localDrive",
            "columns": [
                "firstName",
                "lastName",
                "phoneNumber",
                "timezone",
                "uniqueId",
                " Priority"
            ],
            "updatedAt": "2025-12-05T08:14:29.673Z"
        },
        {
            "_id": "cl-94380b8-8a99-487c-a852-3c9393cxxxxx",
            "name": "Renewal Due - Nov 2025",
            "description": "This list contains customers with services expiring in July 2025. It includes contact details and subscription info to help agents provide tailored support during live calls.",
            "totalRecordCount": 0,
            "status": "Ready",
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
            "campaignInUse": [],
            "source": "passiveApi",
            "apiConfigurations": {
                "dataSyncMode": "allowDuplicates"
            },
            "columns": [],
            "files": [],
            "updatedAt": "2025-12-04T10:03:02.550Z"
        }
    ]
}

```
## Response Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `status` | Indicates whether the API call was successful. | string |
| `message` | Optional message describing the result of the operation. | string |
| `data` | Array of contact list objects. | array |
| `data[]._id` | Unique identifier of the contact list. | string |
| `data[].name` | Name of the contact list. | string |
| `data[].description` | Description of the contact list. | string |
| `data[].totalRecordCount` | Number of contacts in the list. | number |
| `data[].status` | Current status of the contact list (for example, `Ready`). | string |
| `data[].mapping` | Object that maps fields in the contact list to expected keys. | object |
| `data[].mapping.firstName` | Mapping for the contact's first name. | string |
| `data[].mapping.lastName` | Mapping for the contact's last name. | string |
| `data[].mapping.phoneNumber` | Mapping for the contact's phone number. | string |
| `data[].mapping.timeZone` | Mapping for the contact's timezone. | string |
| `data[].mapping.uniqueId` | Mapping for the contact's unique identifier. | string |
| `data[].isListInUse` | Indicates whether the list is currently in use in a campaign. | boolean |
| `data[].listType` | Type of contact list (`call`, `sms`, etc.). | string |
| `data[].campaignInUse` | Array of campaign IDs currently using this contact list. | array |
| `data[].source` | Source of the contact list (`passiveApiIntegration`, `upload`, etc.). | string |
| `data[].apiConfigurations` | Configuration related to API data syncing. | object |
| `data[].apiConfigurations.dataSyncMode` | Mode for syncing data (for example, `allowDuplicates`). | string |
| `data[].files` | List of uploaded files associated with the contact list. | array |
| `data[].updatedAt` | Timestamp of the last update to the contact list (ISO 8601 format). | string |