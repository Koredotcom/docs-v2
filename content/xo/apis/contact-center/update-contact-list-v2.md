--8<-- "includes/ccai-api-back-link.md"

# Update Contact List by ID-v2

Use this API to update a specific contact list associated with a campaign.

| **Method** | **PUT** |
| :---- | :---- |
| **Endpoint** | `https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/contactList/{{contactList}}?accountId={{accountId}}` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope** | Campaign Management |

## Path Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `host` | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `streamId` | Bot ID or Stream ID. You can get it from the general settings page.| string, required |
| `contactListId` | Unique identifier of the contact list. | string, required |

## Sample Request

```
curl --location --request PUT 'https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/contactList/{{contactList}}?accountId={{accountId}}' \
--header 'auth: <token>' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14bxxxxx' \
--header 'accountid: 67777ce93e25326494exxxxx' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Renewal Due - May/June 2025"
    "description": "This list contains customers with services expiring in July 2025. It includes contact details and subscription info to help agents provide tailored support during live calls."
}'
```

## Headers

| **Header** | **Description** | **Required/Optional** |
| :---- | :---- | :---- |
| `auth` | JWT token for authentication. | required |
| `iid` | The Application Id. | required |
| `accountId` | The Account Id. | required |

## Body Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `name` | Updated name of the contact list. Maximum 48 characters. Used for identification and UI display. | string, optional |
| `description` | Updated description of the contact list. Maximum 256 characters. Should explain the purpose or content of the list. | string, optional |

## Sample Response

```
{
    "status": "success",
    "message": "Contact list Renewal Due - May/June 2025 updated successfully",
    "data": {
        "contactListId": "cl-718e888-3aca-4008-973e-6d79940xxxxx",
        "body": {
            "name": "Renewal Due - May/June 2025",
            "scope": [
                "campaign_management"
            ],
            "orgId": "o-f8b351e7-f83a-51bd-bd42-d5d4086xxxxx",
            "iId": "st-0603182c-7ffb-53c3-b307-47ca14bxxxxx",
            "listType": "call",
            "accountId": "67777ce93e25326494exxxxx",
            "updatedBy": "u-eb5bbee1-6af9-5b9a-b471-03a3fe4xxxxx"
        }
    }
}

```
## Response Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `status` | Indicates the success or failure of the API call. | string |
| `message` | Message confirming the update operation. | string |
| `data` | Contains details of the updated contact list. | object |
| `data.contactListId` | Unique identifier of the contact list. | string |
| `data.body` | Object with updated metadata of the contact list. | object |
| `data.body.name` | Name of the contact list. | string |
| `data.body.description` | Description of the contact list. | string |
| `data.body.scope` | Scope of the contact list. | array |
| `data.body.orgId` | Unique identifier of the organization. | string |
| `data.body.iId` | Instance ID associated with the request context. | string |
| `data.body.listType` | Type of the list (for example, `call`, `sms`). | string |
| `data.body.accountId` | Identifier of the account to which the list belongs. | string |
| `data.body.updatedBy` | Identifier of the user who performed the update. | string |