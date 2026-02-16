--8<-- "includes/ccai-api-back-link.md"

# Contact Volume API

To retrieve call volume details associated with a specified collection point for a given interval, including fields mapped to specific field names relevant to the Workforce Management (WFM) client.

| **Method**        | POST                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Endpoint**      | `https://{{host}}/agentassist/api/public/analytics/account/{{AccountId}}/callvolume`                           |
| **Content-Type**  | `application/json`                                                                                             |
| **Authorization** | `auth: {{JWT}}`<br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope**     | WFM Integration                                                                                                           |

## Path Parameters

| **Parameter** | **Description**                                          | **Type**           |
| ------------- | -------------------------------------------------------- | ------------------ |
| `host`        | Environment URL. For example: `https://platform.kore.ai` | string, required |
| `AccountId`   | Unique identifier for the account.                       | string, required |

## Sample Request

```
curl --location 'https://{{host}}/agentassist/api/public/analytics/account/636f5b36bcf8a8c7101exxxx/callvolume' \
--header 'auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNzLWNhYzQ3NGEzLTBhYTktNWM2Yi1iMzA2LTMyNjNhM2E1YWQxYSJ9.W5HbU67WJ4YNaWtkZJsyLkxvq8nnK3sHb3StnUCxxxx' \
--header 'Content-Type: application/json' \
--data '{
    "orgId": "o-01aedac2-26fb-5bdb-bb0f-f71292caxxxx",
    "fromTimeStamp": "2023-01-07T09:45:00Z",
    "toTimeStamp": "2023-01-08T10:00:00Z",
    "skip": 0,
    "limit": 2
}'
```

## Request Body Parameters

| **Parameter**   | **Description**                                                                                                                                                                  | **Type**           |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `orgId`         | Organization ID associated with the account.                                                                                                                                     | `String`, required |
| `fromTimeStamp` | Start date and time in ISO 8601 format (for example, `2023-01-07T09:45:00Z`). <br>**Note:** Optional if fetching call records from the first available record for initial syncs. | `String`, optional |
| `toTimeStamp`   | End date and time in ISO 8601 format (for example, `2023-01-08T10:00:00Z`).                                                                                                      | `String`, required |
| `skip`          | Number of results to skip for pagination. Default is `0`.                                                                                                                        | `Number`, optional |
| `limit`         | Number of contact records to retrieve (for example, `2`).                                                                                                                        | `Number`, optional |

## Sample Response

```
{
    "hasMore": false,
    "CallVolumeUpdate": [
        {
            "_id": "647868bfc0cf4c7b7671xxxx",
            "intervalStartTimeStamp": "2023-06-01T09:45:00.000Z",
            "orgId": "o-8aa0607b-1d81-504a-9eb2-5a39f133xxxx",
            "queueId": "qu-6c47543-19ca-49ac-a085-2292bba5xxxx",
            "source": "rtm",
            "__v": 0,
            "intervalEndTimeStamp": "2023-06-01T10:00:00.000Z",
            "offeredContacts": 1,
            "answeredContacts": 1,
            "maxQueueHoldTimeAnswered": 34035,
            "queueHoldTimeAnswered": 34035,
            "acwDuration": 3949,
            "completedContacts": 1,
            "conversationHandleTime": 68043,
            "conversationTalkTime": 64094,
            "holdDuration": 0,
            "messageCount": 0,
            "savedMessageCount": 0,
            "csatResponses": 1,
            "csatScore": 1,
            "abandonedContacts": 1,
            "maxqueueHoldTimeAbandoned": 180150,
            "queueHoldTimeAbandoned": 180150,
            "iId": "st-b6ff0557-e54b-5ac1-946f-2b003d9exxxx",
            "queueName": "custom day"
        }
    ],
    "totalCount": 1
}
```

## Body Parameters

| **Parameter**                                | **Description**                                                      | **Type** |
| -------------------------------------------- | -------------------------------------------------------------------- | -------- |
| `hasMore`                                    | Indicates if there are more records to fetch.                        | Boolean  |
| `CallVolumeUpdate`                           | List of objects representing individual call volume updates.         | Array    |
| `CallVolumeUpdate._id`                       | Unique identifier for the call volume record.                        | String   |
| `CallVolumeUpdate.intervalStartTimeStamp`    | Start time of the interval in ISO 8601 format.                       | String   |
| `CallVolumeUpdate.intervalEndTimeStamp`      | End time of the interval in ISO 8601 format.                         | String   |
| `CallVolumeUpdate.orgId`                     | Organization ID associated with the call volume data.                | String   |
| `CallVolumeUpdate.queueId`                   | Queue ID where the calls were handled.                               | String   |
| `CallVolumeUpdate.source`                    | Source of the data (for example, "rtm" for real-time monitoring).    | String   |
| `CallVolumeUpdate.__v`                       | Version key for the database document (for example, 0).              | Integer  |
| `CallVolumeUpdate.offeredContacts`           | Number of contacts (calls) offered to the queue during the interval. | Integer  |
| `CallVolumeUpdate.answeredContacts`          | Number of contacts answered during the interval.                     | Integer  |
| `CallVolumeUpdate.maxQueueHoldTimeAnswered`  | Maximum hold time in seconds for answered contacts.                  | Integer  |
| `CallVolumeUpdate.queueHoldTimeAnswered`     | Total queue hold time in seconds for answered contacts.              | Integer  |
| `CallVolumeUpdate.acwDuration`               | After-call work duration in seconds.                                 | Integer  |
| `CallVolumeUpdate.completedContacts`         | Number of contacts completed during the interval.                    | Integer  |
| `CallVolumeUpdate.conversationHandleTime`    | Total handle time of the conversation in seconds.                    | Integer  |
| `CallVolumeUpdate.conversationTalkTime`      | Total talk time during the conversation in seconds.                  | Integer  |
| `CallVolumeUpdate.holdDuration`              | Total hold duration in seconds during the call.                      | Integer  |
| `CallVolumeUpdate.messageCount`              | Number of messages exchanged during the conversation.                | Integer  |
| `CallVolumeUpdate.savedMessageCount`         | Number of messages saved during the conversation.                    | Integer  |
| `CallVolumeUpdate.csatResponses`             | Number of Customer Satisfaction (CSAT) survey responses collected.   | Integer  |
| `CallVolumeUpdate.csatScore`                 | CSAT score from customer feedback (for example, 4).                  | Integer  |
| `CallVolumeUpdate.abandonedContacts`         | Number of contacts abandoned during the interval.                    | Integer  |
| `CallVolumeUpdate.maxqueueHoldTimeAbandoned` | Maximum hold time in seconds for abandoned contacts.                 | Integer  |
| `CallVolumeUpdate.queueHoldTimeAbandoned`    | Total queue hold time in seconds for abandoned contacts.             | Integer  |
| `CallVolumeUpdate.iId`                       | Unique instance ID for tracking the call or interaction.             | String   |
| `CallVolumeUpdate.queueName`                 | Name of the queue where the call or interaction took place.          | String   |