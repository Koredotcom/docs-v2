--8<-- "includes/ccai-api-back-link.md"

# Get All Contact Details Of Voice Campaigns-v2

Retrieves the current status and contact details of a voice campaign.

| **Method** | **POST** |
| :---- | :---- |
| **Endpoint** | `https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/{{campaignId}}/status?view=contacts` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope** | Campaign Management |

## Path Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `host` | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `streamId` | Bot ID or Stream ID. You can get it from the general settings page.| string, required |
| `campaignId` | Unique identifier of the campaign to trigger. | string, required |

## Query Parameter

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `view` | Value must be `contacts` to retrieve contacts only. | string, optional |

## Sample Request

```
curl --location 'https://{{host}}/campaign/api/v2/public/{{streamId}}/campaign/{{campaignId}}/status?view=contacts' \
--header 'auth: <token>' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14bxxxxx' \
--header 'accountId: 67777ce93e25326494exxxxx' \
--header 'Content-Type: application/json' \
--data '{
"page": 1,
"limit" : 100
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
| `page` | Page number for pagination. Must be an integer ≥ 1. Used to fetch a specific page of results. </br> **Validations:** </br>• Must be a number </br>• Must be an integer </br>• Minimum value: 1 | number, optional |
| `limit` | Maximum number of records per page. Must be an integer between 1 and 100.</br> **Validations:** </br>• Must be a number </br>• Must be an integer </br>• Min: 1 </br> • Max: 100 | number, optional |

## Sample Response

```
{
    "status": "success",
    "data": {
        "results": [
            {
                "phoneNumber": "919876543210",
                "uniqueId": "",
                "dialerOutcome": "",
                "numberOfAttemptsSoFar": 2,
                "botSessionId": "685d3c819e81807087b6xxxx",
                "agentDispositionCodes": [],
                "botOutboundStatus": "userHangUp",
                "botOutboundStatusDetail": "Client side"
            },
            {
                "phoneNumber": "125xxxx0200",
                "uniqueId": "",
                "dialerOutcome": "completed",
                "numberOfAttemptsSoFar": 1,
                "botSessionId": "685d3c4a6b208b1e96a1xxxx",
                "agentDispositionCodes": [
                    "System Generated"
                ],
                "botOutboundStatus": "userHangUp",
                "botOutboundStatusDetail": "user_hangup"
            },
            {
                "phoneNumber": "911234567890",
                "uniqueId": "",
                "dialerOutcome": "completed",
                "numberOfAttemptsSoFar": 1,
                "botSessionId": "685d3c479e81807087b6xxxx",
                "agentDispositionCodes": [
                    "Requires Supervisor Attention"
                ],
                "botOutboundStatus": "agentHangUp",
                "botOutboundStatusDetail": "agent_hangup"
            }
        ],
        "page": 1,
        "limit": 100,
        "totalPages": 1,
        "totalResults": 4
    }
}

```
## Response Parameters

| **Parameter** | **Description** | **Type** |
| :---- | :---- | :---- |
| `status` | Indicates the success or failure of the request. | string |
| `data` | Object containing paginated call attempt records. | object |
| `data.results` | Array of call attempt results. | array |
| `data.results[].phoneNumber` | Phone number that the system attempted to reach. | string |
| `data.results[].uniqueId` | Unique identifier for the call attempt (if any). | string |
| `data.results[].dialerOutcome` | Final outcome from the dialer (for example, `completed`, blank if in progress). | string |
| `data.results[].numberOfAttemptsSoFar` | Number of call attempts made so far for the given number. | integer |
| `data.results[].botSessionId` | Identifier for the bot session associated with the call. | string |
| `data.results[].agentDispositionCodes` | List of agent-provided or system-generated disposition codes. | array |
| `data.results[].botOutboundStatus` | Final status of the outbound interaction (for example, `userHangUp`, `agentHangUp`). | string |
| `data.results[].botOutboundStatusDetail` | Additional detail about the outbound status. | string |
| `data.page` | Current page number of the response. | integer |
| `data.limit` | Maximum number of results per page. | integer |
| `data.totalPages` | Total number of pages available. | integer |
| `data.totalResults` | Total number of results across all pages. | integer |