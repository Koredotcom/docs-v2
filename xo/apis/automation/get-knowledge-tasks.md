--8<-- "includes/automationai-api-back-link.md"

# Get KnowledgeTasks – KG

To get the list of knowledge Tasks along with the nodes.


<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td><code>https://{{host}}/api/public/bot/{{botId}}/knowledgeTasks?language=en</code>
   </td>
  </tr>
  <tr>
   <td><strong>Content Type</strong>
   </td>
   <td><code>application/json</code>
   </td>
  </tr>
  <tr>
   <td><strong>Authorization</strong>
   </td>
   <td><code>auth: {{YOUR_JWT_ACCESS_TOKEN}}</code>
<p>
See <a href="../api-introduction/#generating-the-jwt-token">How to generate the JWT Token</a>.
   </td>
  </tr>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td>
<ul>

<li>App Builder: Manage Knowledge Graph

<li>Admin Console: Manage Knowledge Graph
</li>
</ul>
   </td>
  </tr>
</table>


 


## Path Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>MANDATE</strong>
   </td>
  </tr>
  <tr>
   <td><strong>host</strong>
   </td>
   <td>The environment URL. For example, <code>https://platform.kore.ai</code>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>BotId</strong>
   </td>
   <td><em>Bot ID</em> or <em>Stream ID</em> can be accessed under <strong>General Settings</strong> on the App Builder.
   </td>
   <td>Required
   </td>
  </tr>
</table>


 


## Query Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>MANDATE</strong>
   </td>
  </tr>
  <tr>
   <td><strong>language</strong>
   </td>
   <td>The Bot language which is identified by the language acronym. For example, <em>en</em> for English and <em>de</em> for German. The user can set the default language of the bot.
   </td>
   <td>Required
   </td>
  </tr>
</table>



## Sample Request


```json
curl -X GET \
  https://{{host}}/api/public/bot/{{botId}}/knowledgeTasks?language=en \
  -H 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
  -H 'content-type: application/json'
```


## Body Parameters

No body parameters are passed.

 


## Sample Response


```json
    {
        "_id": "5axxxxxxxxxxxxxxxxxxxxxx",
        "createdOn": "2018-05-15T06:08:35.732Z",
        "modifiedOn": "2020-01-03T07:54:13.583Z",
        "state": "configured",
        "editable": true,
        "taxonomy": [
            {
                "parent": [],
                "synonyms": [],
                "isDummy": false,
                "editLocked": false,
                "nodeId": "bxxxxxxa-3xx5-4xxc-9xxd-0axxxxxxxxxx",
                "label": "tarak",
                "level": "l0",
                "faqCount": 5
            }
        ],
        "nodesToPublish": [],
        "publishRoot": false,
        "version": "1.0",
        "adminTaskStatus": "active",
        "name": "tarak",
        "description": "This is used to make ontology",
        "isGraph": true,
        "visibility": {
            "namespace": "private",
            "namespaceIds": [
                "u-99xxxxxx-1xx6-5xx8-bxxf-acxxxxxxxxxx"
            ]
        },
        "streamId": "st-xxxxx-xxx-xxx-xxx-xxxxx",
        "metadata": {
            "taxonomy": [
                {
                    "nodeId": "bxxxxxxa-3xx5-4xxc-9xxd-0axxxxxxxxxx",
                    "label": "tarak",
                    "class": "bgblack",
                    "level": "l0",
                    "parent": [],
                    "synonyms": [],
                    "nodes": []
                }
            ]
        },
        "createdBy": "u-9xxxxxx6-1xx6-5xx8-bxxf-acxxxxxxxxxx",
        "lastModifiedBy": "u-9xxxxxx6-1xx6-5xx8-bxxf-axxxxxxxxxx9",
        "botName": "tarak",
        "language": "en",
        "refId": "1xxxxxx9-3xx6-5xxf-8xx1-3dxxxxxxxxxx",
        "__v": 0,
        "deletedNodesToPublish": [],
        "publishedOn": "2020-01-03T07:54:13.583Z",
        "versionComment": null,
        "parentId": "5exxxxxxxxxxxxxxxxxxxxx3",
        "_resolve": [
            "createdBy"
        ],
        "lock": {
            "islocked": "false"
        },
        "traitCount": 0,
        "faqCount": 5
    }
```
