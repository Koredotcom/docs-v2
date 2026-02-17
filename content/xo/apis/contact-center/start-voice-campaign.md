--8<-- "includes/ccai-api-back-link.md"

# Start Voice Campaign API

Use this API to start an active Voice campaign for a given stream ID and campaign ID.

| **Method**        | POST                                                                                                                                                                                                                                                                                                |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Endpoint**      | `https://{{host}}/campaign/api/v1/public/{{IId}}/campaign/{{campaignId}}?campaignType={{campaignType}}&trigger={{trigger}}`                                                                                                                                           |
| **Content-Type**  | `application/json`                                                                                                                                                                                                                                                                                  |
| **Authorization** | `auth: {{JWT}}`  <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope**     | Campaign Management                                                                                                                                                                                                                                                                                 |

## Path Parameters

| **Parameter** | **Description**                                                                                  | **Type**          |
|---------------|--------------------------------------------------------------------------------------------------|-------------------|
| `host`        | Environment URL, for example, `https://platform.kore.ai`                                           | string, required  |
| `IId`    | The Application ID.                 | string, required  |
| `campaignId`  | Unique identifier of the campaign to trigger.                                                   | string, required  |

## Query Parameters

| **Parameter**   | **Description**                                        | **Type**          |
|-----------------|--------------------------------------------------------|-------------------|
| `campaignType`  | Type of campaign. Use `"voice"` for voice campaign.                 | string, required  |
| `trigger`       | Action to perform. Use `"play"` to start.              | string, required  |

## Sample Request

```
curl --location 'https://{{host}}/campaign/api/v1/public/{{IID}}/campaign/{{campaignId}}?campaignType={{campaignType}}&trigger={{trigger}}' \
--header 'auth: <token>' \
--header 'Content-Type: application/json' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14b9xxxx' \
--header 'accountId: 67777ce93e25326494e9xxxx' \
--data '{}
'
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
    "status": "Active",
    "message": "Campaign Started",
    "totalCallsCompleted": 0,
    "updatedAt": "2025-06-27T07:01:45.416Z",
    "campaignInstanceId": "cid-dbb5e25-605e-4556-8912-9292181axxxx"
}
```

## Response Body Parameters

| **Parameter**         | **Description**                                                          | **Type**          |
|-----------------------|--------------------------------------------------------------------------|-------------------|
| `status`              | Indicates the current status of the campaign. For example, `Active`      | string            |
| `message`             | Success confirmation message. For example, `Campaign Started`            | string            |
| `totalCallsCompleted` | Number of completed calls at the time of starting the campaign.          | number            |
| `updatedAt`           | ISO timestamp when the campaign was activated.                           | string            |
| `campaignInstanceId`  | ID of the specific campaign instance that was started.                   | string            |