--8<-- "includes/ccai-api-back-link.md"

# Get a List of Queues

To create a queue with the given `streamId`.

| **Method** | GET |
|--------|-----|
| **Endpoint** | `https://{{host}}/agentassist/api/v1/public/{{streamId}}/queues` |
| **Content Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` <br> See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope** | Configuration |

## Path Parameters

| **PARAMETER** | **DESCRIPTION** | **TYPE** |
|-----------|-------------|------|
| host      | Environment URL, for example, `https://platform.kore.ai` | string, required |
| streamId  | botId or streamId. You can get it from the App Settings page. | string, required |

## Sample Request

```
curl --location 'http://{{host}}/agentassist/api/v1/public/{{streamId}}/queues' \
--header 'accept: application/json' \
--header 'accountId: {{accountId}}' \
--header 'auth: <token>' \
--header 'Content-Type: application/json' \
--data ''
```

## Sample Response

```
{
  "results": [
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
  ],
  "page": 1,
  "limit": 10,
  "hasMore": true,
  "totalPages": 1,
  "totalResults": 1
}
```