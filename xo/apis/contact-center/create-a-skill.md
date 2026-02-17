--8<-- "includes/ccai-api-back-link.md"

# Create a Skill

To add a skill with the given Stream Id and Skill Group ID.

| **METHOD**      | **POST**                                                        |
|-------------|-------------------------------------------------------------|
| **Endpoint**    | `https://{{host}}/agentassist/api/v1/public/{{streamId}}/skill-groups/{{skillGroupId}}/skills` |
| **Content Type**| `application/json`                                          |
| **Authorization** | `auth: {{JWT}}` <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token)                                             |
| **API Scope**   | SmartAssist Analytics                                       |

## Path Parameters

| **PARAMETER**      | **DESCRIPTION**                                                        | **TYPE**          |
|----------------|--------------------------------------------------------------------|---------------|
| host           | Environment URL, for example, `https://platform.kore.ai`          | string, required |
| BotId          | BotId or StreamId. You can access it from the App Settings page of the bot. | string, required |
| skillGroupId   | Id of the Skill Group.                                             | string, required |

## Sample Request

```
curl --location --request POST \
     'https://{{host}}/agentassist/api/v1/public/{{streamId}}/skill-groups/{{skillGroupId}}/skills' \
      --header 'auth: {jwt-code}' \
      --header 'Content-Type: application/json' \
      --data-raw '
    {
    "name": "test",
    "description": "test",
    "agents": [
        {
            "userId": "u-ca2cc57f-5c2b-5437-bb07-fe9020d8xxxx",
            "proficiencyLevel": "average",
            "aId":""
        }
     ]
    }'
```

## Body Parameters

| **PARAMETER**       | **DESCRIPTION**                                                        | **TYPE**          |
|-----------------|--------------------------------------------------------------------|---------------|
| name            | Name of the skill.                                                 | string, required |
| description     | Brief description of the skill up to 200 characters.               | string, optional |
| skillGroupId    | Id of the skill Group which you can find with [GET /skill-groups](../contact-center/get-a-skill-group.md). For example, sg-4372 | string, required |
| agents          | An Array of Objects with the following details                     | array, optional      |
| userId          | This is the user Id that you can find with [GET /agents](../contact-center/list-all-agents.md). | string, optional |
| proficiencyLevel | The Proficiency level can be: expert, novice, average, good. Example: ‘expert’ | string, optional |

## Sample Response

```
 {
    "id": "sk-87679",
    "name": "Account Management",
    "description": "Manage Account and its Settings",
    "agents": 15,
    "skillGroupId": "sg-4372"
   }
```