--8<-- "includes/ccai-api-back-link.md"

# Create a Queue

To create a queue with the given `streamId`.

| **METHOD**       | **POST**                                                                                           |
|------------------|----------------------------------------------------------------------------------------------------|
| **Endpoints**    | `https://{{host}}/agentassist/api/v1/public/{{streamId}}/queues`                                   |
| **Content Type** | `application/json`                                                                                 |
| **Authorization**| `auth: {{JWT}}`<br>See [How to generate the JWT Token.](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope**    | Configuration                                                                                      |

## Path Parameters

| **PARAMETER** | **DESCRIPTION**                                                         | **TYPE**         |
|---------------|--------------------------------------------------------------------------|------------------|
| host          | Environment URL, for example, `https://platform.kore.ai`                | string, required |
| streamId      | You can access it from the App Settings page of the bot.             | string, required |

## Sample Request

```
curl --location 'http://{{host}}/agentassist/api/v1/public/st-d2aa65cc-a2d2-5b6d-84d7-861509e2xxxx/queues' \
--header 'accept: application/json' \
--header 'accountId: 649bdcaf5037ed113942xxxx' \
--header 'auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiYXBwSWQiOiJjcy0zOWNkNmJhMC1mNmVlLTViYWUtOWI3ZC03M2I0YmE5N2FjOGIifQ.LAiNcKfUNeDaAtPei1nD6JZJbnEGsv1BKo1pQUexxxx' \
--header 'Content-Type: application/json' \
--data '{
    "isActive": true,
    "isDefault": false,
    "name": "11111122",
    "isAdvancedRoutingEnabled": true,
    "description": "queue2",
    "orgId": "o-a5f1f5a9-2244-5bc7-adf8-bd5e6519xxxx",
    "hoursOfOperation": {
        "id": "649bdd219d557c241ad0xxxx",
        "name": ""
    },
    "agents": [
        {
            "userId": "u-be1f62a6-1ea6-59eb-8cae-831edd2xxxx",
            "isPreferredAgent": true,
            "aId": "a-ee9919b-9343-48eb-a951-1085e06xxxx",
            "name": "kjhdkjhsddjk kjadksddjk",
            "id": ""
        }
    ],
    "skills": [{
"id": "123",
"name": "",
"isExpireEnabled": true,
"expireTime": {
"min": "1",
"sec": "0"
}
}],
    "agentGroups": [],
    "advancedSettings": {
        "preferredAgentTimeout": {
        
        },
        "isSkillMatchEnabled": true,
        "isAffinityMatchEnabled": true
    },
    "maxTimeout": {
        "min": 10,
        "sec": 0
    }
}'
```

## Sample Response

```
{
  "isActive": true,
  "isDefault": true,
  "name": "Queue1",
  "isAdvancedRoutingEnabled": true,
  "description": "queue description",
  "orgId": "o-cff7fba7-ebf6-5b01-81a3-42bd24faxxxx",
  "createdBy": "u-f9e37b9c-66d5-5525-9df1-da0edbeaxxxx",
  "id": "qu-268eda9-ba47-4b03-ab29-d1909c38xxxx",
  "hoursOfOperation": {
    "id": "h-e8e22e03-fe32-5748-b830-02d161a3xxxx",
    "name": "US West Coast"
  },
  "agents": [
    {
      "userId": "u-e8e22e03-fe32-5748-b830-02d161a3xxxx",
      "name": "Charlie Abraham",
      "isPreferredAgent": false,
      "hoursOfOperation": {
        "hoursOfOperationId": "h-e8e22e03-fe32-5748-b830-02d161a3xxxx",
        "name": "US West Coast"
      },
      "skills": [
        {
          "id": "s-e1e22e03-fe32-5748-b830-02d161a3xxxx",
          "name": "SILVER"
        },
        {
          "id": "s-e1e22e03-fe32-5748-b830-02d161a3xxxx",
          "name": "GOLD"
        },
        {
          "id": "s-e1e22e03-fe32-5748-b830-02d161a3xxxx",
          "name": "CLOSE ACCOUNT"
        }
      ]
    },
    {
      "userId": "u-e8e22e03-fe32-5748-b830-02d161a3xxxx",
      "name": "Sandra Jones",
      "isPreferredAgent": true,
      "hoursOfOperation": {
        "hoursOfOperationId": "h-e8e22e03-fe32-5748-b830-02d161a3xxxx",
        "name": "US West Coast"
      },
      "skills": [
        {
          "id": "s-e1e22e03-fe32-5748-b830-02d161a3xxxx",
          "name": "SILVER"
        },
        {
          "id": "s-e1e22e03-fe32-5748-b830-02d161a3xxxx",
          "name": "GOLD"
        },
        {
          "id": "s-e1e22e03-fe32-5748-b830-02d161a3xxxx",
          "name": "UPDATE ACCOUNT"
        }
      ]
    }
  ],
  "skills": [
    {
      "id": "5ff233123124xxxx",
      "name": "SILVER",
      "isExpireEnabled": true,
      "expireTime": {
        "min": 10,
        "sec": 20
      },
      "skillGroupName": "Test",
      "skillGroupColor": "#070707"
    },
    {
      "id": "4df233123124xxxx",
      "name": "CLOSE ACCOUNT",
      "isExpireEnabled": false,
      "skillGroupName": "Test",
      "skillGroupColor": "#060606"
    }
  ],
  "agentGroups": [
    {
      "id": "ag-ec83505-5152-494d-8071-3b68513cxxxx",
      "name": "Default Queue"
    },
    {
      "id": "ag-ec83505-5152-494d-8071-3b68513cxxxx",
      "name": "Queue One"
    }
  ],
  "sourceAgentGroups": [
    "ag-953194c-10c9-4ec3-976e-c64071bbxxxx",
    "ag-ed2182b-b004-4aa2-a194-2d5534c6xxxx"
  ],
  "advancedSettings": {
    "preferredAgentTimeout": {
      "min": 10,
      "sec": 20
    },
    "isSkillMatchEnabled": true,
    "isAffinityMatchEnabled": true
  }
}
```

## Body Parameters

| **PARAMETER**                        | **DESCRIPTION**                                                | **TYPE**           |
|-------------------------------------|----------------------------------------------------------------|--------------------|
| name                                | Name of the queue.                                             | string, required   |
| description                         | Brief description of the queue.                                | string, optional   |
| isAdvancedRoutingEnabled            | Boolean value to know if advanced routing is enabled or not.   | boolean, optional  |
| hoursOfOperation {Id}               | Hours of operation ID.                                         | string, required   |
| hoursOfOperation {name}             | Hours of operation Name.                                       | string, optional   |
| agents {userId}                     | User ID of the agent. You can get this from GET /agents api.   | string, required   |
| agents {aId}                        | Agent ID. You can get this from GET /agents api.               | string, required   |
| agents {name}                       | Name of the agent.                                             | string, optional   |
| agents {isPreferredAgent}           | Indicates if the agent is a preferred agent or not.            | boolean, required  |
| skills {Id}                         | Skill ID. You can get this from GET /skills api.               | string, required   |
| skills {name}                       | Name of the Skill.                                             | string, optional   |
| skills {isExpireEnabled}            | Indicates if the skill should expire or not.                   | boolean, required  |
| skills {expireTime}                 | Time for skill expiration if enabled.                          | object, optional   |
| agentGroups                         | An array of objects containing agentGroupIds.                   | array, optional    |
| advancedSettings {preferredAgentTimeout} | Preferred agent timeout settings.                          | object, optional   |
| advancedSettings {isSkillMatchEnabled} | Indicates if skill match is enabled.                        | boolean, optional  |
| advancedSettings {isAffinityMatchEnabled} | Indicates if agent affinity match is enabled.           | boolean, optional  |
| enableTransferRules                 | Indicates whether transfer rules are enabled.                  | boolean, optional  |
| transferQueues                      | An array containing queueIds for transfer.                     | array, optional    |