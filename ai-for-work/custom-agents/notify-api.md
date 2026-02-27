# Notify API

The Notify API enables developers to send interactive notifications to the users. These notifications can include customizable response options and action buttons.
  
!!! note

    Applicable only for Bot, Autonomous, and Workflow Agents.

| Method           | Post                                                                                                                                               |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| Endpoint         | `https://{{host}}/api/public/agents/{agentId}/notify`                                                                                                |
| Content type     | application/json                                                                                                                                  |
| Authorization    | authorization: &lt;authToken> The access token obtained from the agent settings page will serve as the authorization token. |
| API Scope        | Notification                                                                                                                                       |


## Path Parameter

| Parameter    | Required/Optional    | Description                                                                                                                                                                                                                                                                                                        |
|------------------|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| host         | Required             | Environment URL, for example, `https://work.example.ai`                                                                                                                                                                                                                                                                  |
| agent ID     | Required             | This portion of the URL is a placeholder for the unique identifier of the specific agent. When making an actual API request, you must replace {agentId} with the actual ID of the agent you want to notify. Obtain the agent ID from the Post URL field while creating an agent. |

## Sample Request

```

curl --location --request POST 'https://work.example.ai/api/1.1/public/agents/ag-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/notify' \
--header 'authorization: <YOUR_AUTH_TOKEN>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "to": "john.doe@example.com",
    "message": {
        "title": "Agent Update",
        "body": "Notification description"
    },
    "category": "agent",
    "actions": [
        {
            "title": "LaptopRequest",
            "type": "postback",
            "utterance": "submit action 1",
            "payload": {
                "transactionId": "tx-qwe2cd11",
                "sessionId": "s-hr3wx21rt",
                "event": "laptopRequest"
            }
        }
    ]
}'
```

### Request Body Parameters

| <strong>Parameter</strong> | <strong>Type</strong> | <strong>Required/Optional</strong> | <strong>Description</strong> |
| --- | --- | --- | --- |
| to | string | Required | Email address of the application user (single recipient) |
| message | object | Required | Contains notification title and body text |
| category | string | Required | Category of the notification (e.g., "agent") |
| action | array | Required | Array of interactive response buttons |
| title | string | Required | Notification Title |
| body | string | Required | Notification Message |
| title | string | Required | Button text |
| type | string | Required | Action type (e.g., "postback") |
| utterance | string | Required | Text to be sent when button is clicked |
| payload | object | Required | Custom data passed with the action |

## Sample Response

```
{
    "notify": "success"
}
```

## Key Points

* The email address of the receiver needs to be a valid users.
  
* Use custom payload data for tracking and response handling.
  
* The ***to*** key in the request payload must be a valid user email Id, and it is singular in the initial implementation.
  
* Transmit ***actions*** in the request payload to users as buttons for input.