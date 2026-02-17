--8<-- "includes/ccai-api-back-link.md"

# Queues API

To get the Queues/Skills associated with an `accountId`.

| Method            | GET                                                                                                                                     |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Endpoint**      | `https://{{host}}/agentassist/api/public/analytics/account/{{accountId}}/queues`                                             |
| **Content-Type**  | `application/json`                                                                                                           |
| **Authorization** |  `auth: {{JWT}}`<br>See [How to generate the JWT Token.](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope**     | WFM Integration                                                                                                                         |

## Path Parameters

| **Parameter** | **Description**                                                                                 | **Type**          |
| ------------- | ----------------------------------------------------------------------------------------------- | ----------------- |
| `host`        | The environment URL. Example: `https://platform.kore.ai` | string (required) |
| `accountId`   | The unique identifier for the account.                                                          | string (required) |

## Sample Request

```
curl --location 'https://{{host}}/agentassist/api/public/analytics/account/{{accountId}}/queues' \
--header 'auth: <token>' \
--header 'Content-Type: application/json'
```

## Sample Response

```
 [
	{
		accountId: "63fb9a0f90425b644d3exxxx",
		"collectionPointId":"qu-59bb17e-0cae-46b0-8d80-a8a8ac34xxxx",
		"Description": "Default Queue"
	}
]
```

## Body Parameters

| **Parameter**       | **Description**                                                                                                   | **Type** |
| ------------------- | ----------------------------------------------------------------------------------------------------------------- | -------- |
| `accountId`         | Unique identifier for the account. Example: `63fb9a0f90425b644d3exxxx`.                                | String   |
| `collectionPointId` | Unique identifier for the collection point (queue). Example: `qu-59bb17e-0cae-46b0-8d80-a8a8ac34xxxx`. | String   |
| `description`       | Description of the collection point or queue. Example: `Default Queue`.                                | String   |