--8<-- "includes/ccai-api-back-link.md"

# Agent Activity API

To get the agent status in real-time or changes stacked every 30 seconds.

| **Field**       | **Details** |
|------------------|-------------|
| **Method**       | GET |
| **Endpoints**    | `https://{{host}}/agentassist/api/public/analytics/account/{{AccountID}}/agentactivity` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}`<br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope**    | WFM Integration |

## Path Parameters

| **Parameter** | **Description** | **Type** |
|----------------|-----------------|-----------|
| `host` | Environment URL. Example: `https://platform.kore.ai` | string, required |
| `AccountId` | Unique identifier associated with the account. | string, required |

## Sample Request

```
curl --location 'https://{{host}}/agentassist/api/public/analytics/account/636f5b36bcf8a8c7101exxxx/agentactivity?fromTimeStamp=2023-04-02T09%3A45%3A00Z&toTimeStamp=2023-04-06T10%3A00%3A00Z' \
--header 'auth: <token>' \
--header 'Content-Type: application/json'
```

## Sample Response

```
{ 
"accountId":"63fb9a0f90425b644d3exxxx",
 	"AgentUpdates": [ 
{
 	"AgentId":"a-59bb17e-0cae-46b0-8d80-a8a8ac34xxxx", 
"EventTime":"10/20/2020 2:13:12", 
"Activity":"notready", 
"ReasonCode":"1"
        }
    ] 
}
```

## Body Parameters

| **Parameter** | **Description** | **Type** |
|----------------|-----------------|-----------|
| `accountId` | Specifies the unique ID associated with the account. For example, `63fb9a0f90425b644d3exxxx`. | String |
| `agentUpdates` | Contains a list of objects that define the updates to agent statuses. | Array |
| `agentUpdates.agentId` | Specifies the unique ID of the agent. For example, `a-59bb17e-0cae-46b0-8d80-a8a8ac34xxxx`. | String |
| `agentUpdates.eventTime` | Specifies the timestamp of the event in the `MM/DD/YYYY HH:MM:SS` format. | String |
| `agentUpdates.activity` | Defines the agent’s activity status at the time of the event. For example, `"notready"`. | String |
| `agentUpdates.reasonCode` | Specifies the code representing the reason for the agent’s status change. For example, `"1"`. | String |