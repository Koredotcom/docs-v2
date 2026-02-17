--8<-- "includes/ccai-api-back-link.md"

# Get All Contact Lists

Retrieves metadata for all contact lists associated with all voice campaigns.

| **Method**         | POST|
|--------------------|-----------|
| **Endpoint**       | `https://{{host}}/agentassist/api/v1/public/{{IID}}/campaign/contactList/getAllListDetails?type=call` |
| **Content-Type**   | `application/json` |
| **Authorization**  | `auth: {{JWT}}`  <br> See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope**      | Campaign Management |

## Path Parameters

| **Parameter** | **Description** | **Type** |
|---------------|------------------|----------|
| `host` | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `IId` | The Application ID. | string, required |

## Query Parameter

| **Parameter** | **Description** | **Type** |
|---------------|------------------|----------|
| `type` | Value must be `call` to retrieve contact lists only. | string, optional |

## Sample Request

```
curl --location 'https://{{host}}/agentassist/api/v1/public/{{IID}}/campaign/contactList/getAllListDetails?type=call' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14b9xxxx' \
--header 'accountId: 67777ce93e25326494e9xxxx' \
--header 'auth: <token>' \
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
    "data": [
        {
            "_id": "cl-60bac2e-b440-439a-931e-2d9b2a17xxxx",
            "name": "Renewal Due - July 2025",
            "description": "This list contains customers with services expiring in July 2025. It includes contact details and subscription info to help agents provide tailored support during live calls.",
            "totalRecordCount": 2,
            "status": "Ready",
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
            "source": "passiveApiIntegration",
            "apiConfigurations": {
                "dataSyncMode": "allowDuplicates"
            },
            "files": [],
            "updatedAt": "2025-06-26T12:41:15.716Z"
        },
        {
            "_id": "cl-c2ce382-2516-457e-8eb4-9847deecxxxx",
            "name": "Renewal Due - August 2025",
            "description": "This list contains customers with services expiring in July 2025. It includes contact details and subscription info to help agents provide tailored support during live calls.",
            "totalRecordCount": 0,
            "status": "Ready",
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
            "source": "passiveApiIntegration",
            "apiConfigurations": {
                "dataSyncMode": "allowDuplicates"
            },
            "files": [],
            "updatedAt": "2025-06-26T12:38:25.793Z"
        }
    ]
}
```

## Response Body Parameters

| **Parameter**                             | **Description**                                                                 | **Type**    |
|---------------------------------------|-----------------------------------------------------------------------------|---------|
| `status`                              | Indicates whether the API call was successful.                             | string  |
| `message`                             | Optional message describing the result of the operation.                   | string  |
| `data`                                | Array of contact list objects.                                             | array   |
| `data[].\_id`                         | Unique identifier of the contact list.                                     | string  |
| `data[].name`                         | Name of the contact list.                                                  | string  |
| `data[].description`                  | Description of the contact list.                                           | string  |
| `data[].totalRecordCount`            | Number of contacts in the list.                                            | number  |
| `data[].status`                       | Current status of the contact list (for example, `Ready`).                        | string  |
| `data[].mapping`                      | Object that maps fields in the contact list to expected keys.              | object  |
| `data[].mapping.firstName`           | Mapping for the contact's first name.                                      | string  |
| `data[].mapping.lastName`            | Mapping for the contact's last name.                                       | string  |
| `data[].mapping.phoneNumber`         | Mapping for the contact's phone number.                                    | string  |
| `data[].mapping.timeZone`            | Mapping for the contact's timezone.                                        | string  |
| `data[].mapping.uniqueId`            | Mapping for the contact's unique identifier.                               | string  |
| `data[].isListInUse`                 | Indicates whether the list is currently in use in a campaign.              | boolean |
| `data[].listType`                    | Type of contact list (`call`, `sms`, etc.).                                | string  |
| `data[].campaignInUse`               | Array of campaign IDs currently using this contact list.                   | array   |
| `data[].source`                      | Source of the contact list (`passiveApiIntegration`, `upload`, etc.).     | string  |
| `data[].apiConfigurations`           | Configuration related to API data syncing.                                 | object  |
| `data[].apiConfigurations.dataSyncMode` | Mode for syncing data (for example, `allowDuplicates`).                        | string  |
| `data[].files`                       | List of uploaded files associated with the contact list.                   | array   |
| `data[].updatedAt`                   | Timestamp of the last update to the contact list (ISO 8601 format).        | string  |