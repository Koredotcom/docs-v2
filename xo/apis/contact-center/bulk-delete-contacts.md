--8<-- "includes/ccai-api-back-link.md"

# Bulk Delete Contacts API

Use this API to delete multiple contacts simultaneously by IDs. 

| METHOD | DELETE |
| :---- | :---- |
| **Endpoint** | `https://{{host}}/agentassist/api/v1/public/{{streamId}}/contacts/bulk-delete` |
| **Content Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` <br> See [How to generate the JWT Token.](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope** | Configuration |

## Path Parameters

| PARAMETER | DESCRIPTION | TYPE |
| :---- | :---- | :---- |
| `host` | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `streamId` | BotId or StreamId. You can access it from the App Settings page of the bot. | string, required |

## Sample Request

```
curl --location --request DELETE 'https://{{host}}/agentassist/api/v1/public/{{streamId}}/contacts/bulk-delete' \
--header 'Content-Type: application/json' \
--header 'accountId: {{accountId}}' \
--header 'auth: {{jwt_token}}' \
--data '{
    "ids": [
      "6960cbe9b155d194e2fxxxxx",
      "6960cc07b155d194e2fxxxxx"
    ]
  }'
```

## Request Headers

| Header | Description | Required/Optional |
| :---- | :---- | :---- |
| `auth` | JWT token for authentication. | Required |
| `accountId` | The account ID associated with the API request. | Required |
| `Content-Type` | The format in which the request payload is sent to the server  application/json | Required |

## Body Parameters

| PARAMETER | DESCRIPTION | TYPE |
| :---- | :---- | :---- |
| `id` | Contains contact IDs to be deleted | array\[strings\], required |

## Sample Response

```
{
    "totalRequested": 2,
    "successful": 2,
    "failed": 0,
    "successfulRecords": [
        {
            "id": "6960cbe9b155d194e2fxxxxx"
        },
        {
            "id": "6960cc07b155d194e2fxxxxx"
        }
    ],
    "failedRecords": []
}
```

## Response parameters

| Parameter | Description | Type |
| :---- | :---- | :---- |
| `totalRequested` | Total number of records requested. | integer |
| `successful` | Total number of records successfully deleted. | integer |
| `failed` | Number of records that failed to process. | integer |
| `successfulRecords` | Contains array of contact IDs that were deleted | array of objects |
| `id` | Unique identifier of a successfully deleted record. | string |
| `failedRecords` | List of records that failed to delete. This array is empty when there are no failures. | array of objects |