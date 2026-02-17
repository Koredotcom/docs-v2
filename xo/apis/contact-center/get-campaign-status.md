--8<-- "includes/ccai-api-back-link.md"

# Get Campaign Status API

Retrieves the current status of a specific campaign using its campaign ID. Use this API to check whether a campaign is active, stopped, or in another state.

| **Method**         | POST |
|--------------------|-----------|
| **Endpoint**       | `https://{{host}}/agentassist/api/v1/public/{{IID}}/campaign/{{campaignId}}/status?view=status` |
| **Content-Type**   | `application/json` |
| **Authorization**  | `auth: {{JWT}}`  <br> See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope**      | Campaign Management |

## Path Parameters

| **Parameter** | **Description** | **Type** |
|---------------|------------------|----------|
| `host` | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `IId` | The Application ID. | string, required |
| `campaignId` | Unique identifier of the campaign to trigger. | string, required |

## Query Parameter

| **Parameter** | **Description** | **Type** |
|---------------|------------------|----------|
| `view` | Value must be `status` to retrieve status only. | string, optional |

## Sample Request

```
curl --location --request POST 'https://{{host}}/agentassist/api/v1/public/{{IID}}/campaign/{{campaignId}}/status?view=status' \
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
    "data": {
        "id": "cd-0e0475b-a418-400d-9164-21eb7e89xxxx",
        "status": "Stopped",
        "name": "Voice From API- With Preview Dialing Mode- 2"
    }
}
```

## Response Body Parameters

| **Parameter**     | **Description**                                       | **Type** |
|-------------------|-------------------------------------------------------|----------|
| `status`          | API call result. Value: `"success"` or `"failure"`.   | string   |
| `data.id`         | Campaign ID.                                          | string   |
| `data.status`     | Current campaign status (for example, `Active`, `Stopped`). | string |
| `data.name`       | The campaign name.                                        | string   |