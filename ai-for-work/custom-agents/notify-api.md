# Notify API

The Notify API enables developers to send interactive notifications to the users. These notifications can include customizable response options and action buttons.
  
!!! note

    Applicable only for Bot, Autonomous, and Workflow Agents.

| Method<br>           | Post<br>                                                                                                                                               |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| Endpoint<br>         | https://{{host}}/api/public/agents/{agentId}/notify<br>                                                                                                |
| Content type<br>     | application/json<br>                                                                                                                                   |
| Authorization<br>    | authorization: &lt;authToken><br><br>**Note**: The access token obtained from the agent settings page will serve as the authorization token. |
| API Scope<br>        | Notification<br>                                                                                                                                       |


## Path Parameter

| Parameter<br>    | Required/Optional<br>    | Description<br>                                                                                                                                                                                                                                                                                                         |
|------------------|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| host<br>         | Required<br>             | Environment URL, for example, `https://work.example`.ai<br>                                                                                                                                                                                                                                                                  |
| agent ID<br>     | Required<br>             | This portion of the URL is a placeholder for the unique identifier of the specific agent. When making an actual API request, you must replace {agentId} with the actual ID of the agent you want to notify.<br><br> **Note**: Obtain the agent ID from the Post URL field while creating an agent. |

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

<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Required/Optional</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>to
   </td>
   <td>string
   </td>
   <td>Required
   </td>
   <td>Email address of the application user (single recipient)
   </td>
  </tr>
  <tr>
   <td>message
   </td>
   <td>object
   </td>
   <td>Required
   </td>
   <td>Contains notification title and body text
   </td>
  </tr>
  <tr>
   <td>category
   </td>
   <td>string
   </td>
   <td>Required
   </td>
   <td>Category of the notification (e.g., "agent")
   </td>
  </tr>
  <tr>
   <td>action
   </td>
   <td>array
   </td>
   <td>Required
   </td>
   <td>Array of interactive response buttons
   </td>
  </tr>
  <tr>
   <td>title
   </td>
   <td>string
   </td>
   <td>Required
   </td>
   <td>Notification Title
   </td>
  </tr>
  <tr>
   <td>body
   </td>
   <td>string
   </td>
   <td>Required
   </td>
   <td>Notification Message
   </td>
  </tr>
  <tr>
   <td>title
   </td>
   <td>string
   </td>
   <td>Required
   </td>
   <td>Button text
   </td>
  </tr>
  <tr>
   <td>type
   </td>
   <td>string
   </td>
   <td>Required
   </td>
   <td>Action type (e.g., "postback")
   </td>
  </tr>
  <tr>
   <td>utterance
   </td>
   <td>string
   </td>
   <td>Required
   </td>
   <td>Text to be sent when button is clicked
   </td>
  </tr>
  <tr>
   <td>payload
   </td>
   <td>object
   </td>
   <td>Required
   </td>
   <td>Custom data passed with the action
   </td>
  </tr>
</table>

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