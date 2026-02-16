--8<-- "includes/ccai-api-back-link.md"

# Get a List of Agents or Queues

To get all agents if you have `queuesIds` and all the queues if you have `agentIds`.

| **Method** | POST |
|--------|------|
| **Endpoint** | `https://{{host}}/agentassist/api/v1/public/{{botId}}/queues/agents` |
| **Content Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope** | Configuration |

## Path Parameters

| **PARAMETER** | **DESCRIPTION** | **TYPE** |
|-----------|-------------|------|
| host | Environment URL, for example, `https://platform.kore.ai` | string, required |
| botId |botId or streamId. You can get it from the App Settings page. | string, required |

## Sample Request

When `queueIds` are passed:
```
curl --location 'http://{{host}}/agentassist/api/v1/public/{{botId}}/queues/agents' \
--header 'accept: application/json' \
--header 'accountId: {{accountId}}' \
--header 'auth: <token>' \
--header 'Content-Type: application/json' \
--data '{
    "queueIds":["qu-70d0451-bb2a-4cc9-9bdb-ec5c1cccxxxx"]
}'
```
When `agentIds` are passed:
```
curl --location 'http://{{host}}/agentassist/api/v1/public/{{botId}}/queues/agents' \
--header 'accept: application/json' \
--header 'accountId: {{accountId}}' \
--header 'auth: <token>' \
--header 'Content-Type: application/json' \
--data '{
    "agentIds":["a-3eab367-e201-4c77-b392-3d3972b8xxxx"]
}'
```

## Sample Response

When `queueIds` are passed:

```
[
   {
       "userId": "u-950c89ba-0526-5876-8394-af02bb34xxxx",
       "aId": "a-1c9955e-b65a-4217-b1ae-345c3104xxxx",
       "name": "kjhdkjhsddjk kjadksddjk",
       "profImage": "no-avatar"
   },
   {
       "userId": "u-572ac313-bf35-5dac-8889-8e44686axxxx",
       "aId": "a-44e3849-04a6-4442-9727-da02911exxxx",
       "name": "kjhdkjhsdjk kjadksdjk",
       "profImage": "no-avatar"
   },
   {
       "userId": "u-acb45618-0820-5c00-aa28-0afed551xxxx",
       "aId": "a-3eab367-e201-4c77-b392-3d3972b8xxxx",
       "name": "uxoAutomation",
       "profImage": "no-avatar"
   }
]
```

When `agentIds` are passed:

```
[
   "qu-49ed316-c2b1-4459-8b63-7b97b5e3xxxx",
   "qu-50dbd8b-8660-4839-a4e9-d9ebc66axxxx",
   "qu-2caed21-2915-4b6a-945e-d98b27d1xxxx",
   "qu-c59b41c-b11e-4a2e-930a-59a94870xxxx",
   "qu-02b3b9b-993c-4248-8cd8-7b200a64xxxx",
   "qu-a435bd3-4511-47c1-88b4-d98a4651xxxx",
   "qu-d0bd773-c35c-4d98-a696-8c048b7exxxx",
   "qu-aa58a2b-804c-44dc-8746-51d86dcexxxx",
   "qu-7330bb5-547c-4657-8bc5-250ec070xxxx",
   "qu-7d2815e-34e6-462d-9a77-2c73ca1dxxxx",
   "qu-898c431-79c6-4656-84dc-1693320dxxxx",
   "qu-849a46a-9a27-469c-be33-a822333dxxxx",
   "qu-94986c7-b0a6-4862-bcb3-3337766bxxxx",
   "qu-54cd855-3600-4d41-b935-74c0d40exxxx",
   "qu-b1ac766-21aa-4e84-97d3-e8a184c9xxxx",
   "qu-02a7954-3338-4203-be1d-65c24678xxxx",
   "qu-6d2b753-b25b-4a34-a3be-4242b553xxxx",
   "qu-8ea0a01-7dc4-4013-923d-5587d717xxxx"
]
```

## Body Parameters

| **PARAMETER** | **DESCRIPTION** | **TYPE** |
|-----------|-------------|------|
| queueIds | An array of queueIds. For example: ["Qu-444b2d2-cba6-41c8-945e-04746a35xxxx"] | array, optional |
| agentIds | An array of agentIds. For example: ["u-9d9cc5f8-ac46-5c0e-9986-21270989xxxx"] | array, optional |