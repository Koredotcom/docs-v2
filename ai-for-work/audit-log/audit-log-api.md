# Audit Log API

Audit Log API enables developers and administrators to retrieve and manage detailed logs of activities, events, or actions performed within a system. These logs are used to track user behavior, system events, and other critical actions such as data changes, security events, or administrative actions. Audit logs are essential for monitoring system usage, ensuring compliance with regulations, detecting suspicious activity, and troubleshooting issues.

<table>
  <tr>
   <td><b>Method</b>
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td><b>Endpoint</b>
   </td>
   <td>`https://{{host}}/api/public/auditlogs`
   </td>
  </tr>
  <tr>
   <td><b>Content-Type</b>
   </td>
   <td>application/json
   </td>
  </tr>
  <tr>
   <td><b>Authorization</b>
   </td>

   <td>auth: {{Admin’s Personalkey}}
   </td>
  </tr>
</table>


## Query Parameters

| **PARAMETERS**        | **DESCRIPTION**                                                                                                                                                                | **MANDATE** | **EXAMPLE**                                                                                                                                         |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| entity                | Defines the type of system component or resource the audit log is related to. By specifying an entity, you can narrow the logs to events tied to a specific part of the system | Yes           | “entity=usergroups”- Returns events related to user group modifications.                                                                            |
| entityId              | The unique ID is used to identify and filter logs for a specific instance of an entity.                                                                                        | Yes           | “entityId=12345”- Returns logs for the entity with the ID 12345 such as a specific user group or service account.                                   |
| userId                | Allows you to search for logs related to a specific user.                                                                                                                      | Yes           | “userId=john_doe” : Returns logs of all actions performed by the user with ID 'john_doe'.                                                             |
| emailId               | Allows you to search for actions tied to a particular email address                                                                                                            | Yes           | emailId=`john.doe@example.com` : Returns logs related to actions performed by the user associated with the email `john.doe@example.com`               |
| startTime and endTime | Allows you to define the time window for which you want to query audit logs.                                                                                                   | Yes           | “startTime=2024-12-01T00:00:00Z&endTime=2024-12-05T23:59:59Z” :Returns logs for actions occurring between December 1, 2024, and December 5, 2024.   |
| action                | Filter logs based on the type of activity performed. Common actions include create, update, and delete.                                                                        | Yes           | “action=create”:Returns logs for all actions where new records were created.                                                                       |

## Supported Entity and Action Value

| **ENTITY NAME**                | **ENTITY KEY**               | **ACTION**             |
|--------------------------------|------------------------------|------------------------|
| User Group                     | usergroup                    | create, update, delete |
| Agent                          | Agent                        | create, update, delete |
| Role                           | role                         | create, update, delete |
| SSO Status                     | ssostatus                    | update                 |
| Service Account                | serviceaccount               | create, update, delete |
| LLM Integrations               | llmintegrations              | create, update, delete |
| Domains                        | domains                      | create, update, delete |
| Rate Limits                    | ratelimits                   | update                 |
| Email Notification Preferences | emailnotificationpreferences | update                 |
| Business Rules                 | nlprules                     | create, update, delete |
| User Enrollment                | userenrollment               | update                 |

## Sample Request

```
    curl --location 'https://{{host}}/api/public/auditlogs?startTime=2024-12-01T23%3A59%3A59Z&endTime=2024-12-12T23%3A59%3A59Z&entity=nlprules&action=update&emailId=test.user%40example.com' \
--header 'auth: {{Admin’s Personalkey}}'


```


## Sample Response


```
 
     "logs": [
       {
           "parentIds": [],
           "_id": "67584fc8a16721a7bb876d3b",
           "entity": "nlprules",
           "action": "update",
           "userId": "u-6fd26567-2b99-5265-9b69-54fba448d26f",
           "accountId": "ac-a16b8603-4c4d-57b7-a6e2-ddf53fee4efb",
           "entityId": "66a389b40e9b336c5e6edb19",
           "delta": {
               "from": {},
               "to": {
                   "name": "Answer rule - 67"
               }
           },
           "htmlText": "Update business rule <b>Answer rule - 67</b>",
           "userName": "john Doe",
           "emailId": "john.doe@example.com",
           "keywords": "",
           "cOn": "2024-12-10T14:27:20.286Z",
           "__v": 0 
       },


     
```
