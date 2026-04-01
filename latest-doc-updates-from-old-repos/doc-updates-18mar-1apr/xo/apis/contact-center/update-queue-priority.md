--8<-- "includes/ccai-api-back-link.md"

# Update Queue Priority API

To update the queue priorities on a scale of 1 to 10.

!!! note
    The Dynamic Queue Reprioritization toggle must be enabled at the UI level to update queue priorities through the Update Queue Priority API. If this toggle is disabled, any priority updates made through the API aren't reflected.


| **METHOD**          | **PUT**                                               |
|-----------------|------------------------------------------------------|
| **Endpoint**       | `https://{{host}}/agentassist/api/v1/public/{{streamId}}/queues/dynamicqueues/priorities` |
| **Content Type**    | `application/json`                                   |
| **Authorization**   | `auth: {{JWT}}`<br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope**       | Configuration                                        |

## Path Parameters

| **Parameter** | **Description**                                       | **Type**/**Required**  |
|---------------|-------------------------------------------------------|------------|
| `host`          | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `streamId`         | botId or streamId. You can get it from the App Settings page. | string, required |

## Sample Request

```bash
curl --location --request PUT 'https://{{host}}/agentassist/api/v1/public/{{streamId}}/queues/dynamicqueues/priorities' \
--header 'accept: application/json, text/plain, /' \
--header 'accept-language: en-US,en;q=0.9' \
--header 'accountId: {{AccountId}}' \
--header 'app-language: en' \
--header 'content-type: application/json;charset=UTF-8' \
--header 'auth: {{jwt_token}}' \
--header 'iId: st-ceb5fb14-37eb-54a8-a32d-1d751cxxxxxx' \
--data '{
    "queuePriorityData": [
        {
            "queueId": "qu-e30b539-dd3c-4e10-90a9-354a3e7xxxxx",
            "priority": 6
        },
        {
            "queueId":"qu-e079499-2c0d-4709-b312-3682b30xxxxx",
            "priority": 3
        }

        
    ]
}    
'
```

## Header Parameters

| **Parameter**        | **Description**                                                                 | **Optional/Required** |
|-----------------|-----------------------------------------------------------------------------|-------------------|
| `auth`            | A token to authenticate and authorize the user with the server.             | required          |
| `accept-language` | Indicates the preferred language for the response.                          | optional          |
| `app-language`    | The language the application must use for the request.                    | optional          |
| `accountId`       | Unique account identifier.                                                  | required          |
| `Content-Type`    | Represents the type of data present in the request body.                    | required          |
| `iId`             | Agent ID or Stream ID.                                                       | required          |

## Request Body Parameters

| **Parameter**                   | **Description**                                                                                                      | **Type**              |
|----------------------------|------------------------------------------------------------------------------------------------------------------|-------------------|
| `queuePriorityData`          | List of queue-priority mappings used to influence routing order.                                                 | array of objects  |
| `queuePriorityData.queueId`  | Unique identifier of the queue for which the priority is defined.                                                | string, required  |
| `queuePriorityData.priority` | Numeric value indicating the priority assigned to the queue. Acceptable priority values range from 1 to 10.     | integer, required |

## Sample Response 

```json
{
   "updatedCount": 2,
   "updatedQueueIds": ["qu-e30b539-dd3c-4e10-90a9-354a3e7xxxxx", "qu-e079499-2c0d-4709-b312-3682b30xxxxx"]
}
```

## Response Parameters

| **Parameter**        | **Data type**        | **Description**                                                       | **Example**                                                                                                      |
|------------------|------------------|-------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| `updatedCount`     | integer          | Total number of queues that were successfully updated.            | 2                                                                                                            |
| `updatedQueueIds`  | array of strings | List of queue identifiers whose priority values were updated.     | ["qu-e30b539-dd3c-4e10-90a9-354a3e7xxxxx", "qu-e079499-2c0d-4709-b312-3682b30xxxxx"] |