--8<-- "includes/ccai-api-back-link.md"

# Stop Voice Campaign API

Use this API to stop an active Voice campaign for a given stream ID and campaign ID.

| **Method**        | POST                                                                                                                                                                                                      |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Endpoint**      | `https://{{host}}/campaign/api/v1/public/{{IID}}/campaign/{{campaignId}}?campaignType={{campaignType}}&trigger={{trigger}}`                                                 |
| **Content-Type**  | `application/json`                                                                                                                                                                                        |
| **Authorization** | `auth: {{JWT}}`  <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token)                                                                  |
| **API Scope**     | Campaign Management                                                                                                                                                                                       |

## Path Parameters

| **Parameter** | **Description**                                                                                 | **Type**           |
|---------------|-------------------------------------------------------------------------------------------------|--------------------|
| `host`        | Environment URL, for example, `https://platform.kore.ai`                                        | string, required   |
| `IId`    | The application ID.                | string, required   |
| `campaignId`  | Unique identifier of the campaign to trigger.                                                  | string, required   |

## Query Parameters

| **Parameter**   | **Description**                                                    | **Type**          |
|-----------------|--------------------------------------------------------------------|-------------------|
| `campaignType`  | Type of campaign. Use `"voice"` for voice campaign.                             | string, required  |
| `trigger`       | Action to perform. Use `"stop"` to stop the campaign.              | string, required  |

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
    "status": "Stopped",
    "message": "Campaign Stopped",
    "updatedAt": "2025-06-27T07:13:51.444Z",
    "campaignInstanceId": "cid-dbb5e25-605e-4556-8912-9292181axxxx"
}
```

## Response Body Parameters

| **Parameter**         | **Description**                                                     | **Type**         |
|-----------------------|---------------------------------------------------------------------|------------------|
| `status`              | Indicates the current status of the campaign. For example, Stopped | string           |
| `message`             | Success confirmation message. For example, Campaign Stopped        | string           |
| `updatedAt`           | ISO timestamp when the campaign was activated.                     | string           |
| `campaignInstanceId`  | ID of the specific campaign instance that was stopped.             | string           |