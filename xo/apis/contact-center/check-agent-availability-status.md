--8<-- "includes/ccai-api-back-link.md"

# Check Agent Availability Status

To check the availability of agents based on specified skill IDs, queue IDs, and agent IDs.

| **METHOD**   | POST                                                                                   |
|--------------|---------------------------------------------------------------------------------------------|
| **Endpoint** | `https://{{host}}/agentassist/api/v1/public/{{botId}}/agents/availability` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}`<br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope** | Configuration |

## Path Parameters

| **Parameter** | **Description** | **Type** |
|------------|---------------|------------|
| host | Environment URL, for example, `https://platform.kore.ai` | string, required |
| botId | BotId or StreamId. You can access it from the App Settings page. | string, required |

## Sample Request

```
curl --location --request POST 'https://{{host}}/agentassist/api/v1/public/<botId>/agents/availability' \
--header 'auth: <token>' \
--header 'Content-Type: application/json' \
--header 'accountId: <accountId>' \
--data-raw '{
   "skillIds": ["65d74b5d6610c92860cfbxxxx"],
   "queueIds": ["qu-65e176a-b2ca-4844-9686-228cd1a54xxxx"],
   "agentIds": ["a123"],
}'
```

## Headers

| **Header** | **Description** | **Required/Optional** |
|-----------|---------------|-------------------|
| accountId | The account ID associated with the API request. | required |
| auth | JWT token for authentication. | required |

## Body Parameters

| **Parameter** | **Description** | **Type** |
|------------|---------------|------------|
| skillIds | An array of skill IDs to check agent availability. | string, optional |
| queueIds | An array of queue IDs for filtering agents. | string, optional |
| agentIds | An array of specific agent IDs to check | string, optional |

## Sample Response

```
{
    "AVAILABLE": [
        {
            "_id": "a-551a805-04ab-4c08-88ab-c23eb5aaxxxx",
            "userId": "u-ac66a8f2-5988-56d9-b54f-51a4ea6axxxx",
            "firstName": "Jane",
            "lastName": "Doe",
            "emailId": "sa@yopmail.com",
            "customId": "1111",
            "phoneNumber": "9999999999"
        }
    ],
    "BUSY": [],
    "OFFLINE": [
        {
            "_id": "a-645446e-51ca-4b28-94b2-b0b8d87axxxx",
            "userId": "u-edeea799-0020-5c13-b3ce-bf25c0e0xxxx",
            "firstName": "John",
            "lastName": "Doe",
            "emailId": "john_doe@yopmail.com",
            "customId": "1313",
            "phoneNumber": "8888888888"
        },
        {
            "_id": "a-631e11a-9c19-4d11-a577-9838ab4cxxxx",
            "userId": "u-f2d41372-2440-5c86-8b9d-26483611xxxx",
            "firstName": "John",
            "lastName": "Smith",
            "emailId": "john.smith@yopmail.com",
            "customId": "1111",
            "phoneNumber": "+91 9876543210"
        }
    ],
    "AWAY": []
}
```

## Response Body Parameters

| **Parameter** | **Description** | **Type** |
|------------|---------------|------------|
| AVAILABLE | List of agents who are currently available. | array |
| BUSY | List of agents who are currently busy. | array |
| OFFLINE | List of agents who are currently offline. | array |
| AWAY | List of agents who are currently away. | array |
| _id | Unique identifier of the agent. | string |
| userId | Unique identifier of the user. | string |
| firstName | First name of the agent. | string |
| lastName | Last name of the agent. | string |
| emailId | Email address of the agent. | string |
| customId | The custom identifier for the agent. | string |
| phoneNumber | The contact number of the agent. | string |