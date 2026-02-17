--8<-- "includes/automationai-api-back-link.md"

# Bot Export API

To export the bot definition and all the associated components.

!!!note
    This API only initiates the export process. Please use the [Export Status API](bot-export-status.md) to view the export progress status and obtain a link to download the file once the export completes.

<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td><code>https://{{host}}/api/public/bot/{{BotID}}/export</code>
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
   <td><code>auth: {{JWT}}</code>
<p>
See <a href="../api-introduction/#generating-the-jwt-token">How to generate the JWT Token</a>.
   </td>
  </tr>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td>
<ul>

<li>App Builder: Bot Export

<li>Admin Console: Bot Definition > Bot Export
</li>
</ul>
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
   <td>host
   </td>
   <td>The environment URL. For example, <code>https://platform.kore.ai</code>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>BotID
   </td>
   <td><em>Bot ID</em> or <em>Stream ID</em> can be accessed under <strong>General Settings</strong> on the App Builder.
   </td>
   <td>Required
   </td>
  </tr>
</table>



## Sample Request

```json
curl --location 'https://{host}/api/public/bot/{BotID}/export' \
--header 'auth: {YOUR_JWT_ACCESS_TOKEN}' \
--header 'content-type: application/json' \
--data '{
    "exportType": "published",
    "exportOptions": {
        "settings": [
            "botSettings",
            "botVariables",
            "ivrSettings",
            "genAIandLLMSettings"
        ],
        "tasks": [
            "botTask",
            "knowledgeGraph",
            "smallTalk"
        ],
        "nlpData": [
            "utterances",
            "patterns",
            "traits",
            "rules",
            "concepts",
            "synonyms",
            "standardResponses",
            "nlpSettings"
        ],
        "AgentAI": [
            "rules",
            "playbooks",
            "widgetSettings",
            "layoutSettings"
        ]
    },
    "subTasks": {
        "alerts": [],
        "actions": [],
        "dialogs": [],
        "experienceFlows": []
    },
    "allTasks": true,
    "customDashboards": true,
    "IncludeDependentTasks": true
}'
```

## Body Parameters

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
   <td>exportType
   </td>
   <td>Bot type –
<ul>

<li>‘<em>latest</em>‘ or

<li>‘<em>published</em>‘
</li>
</ul>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>exportOptions
   </td>
   <td>All the bot components are exported by default. If required, you may specify the components to be included for the export.
<p>
Usage:
<p>
<code>"exportOptions": {</code>
<p>
<code>      "tasks": [</code>
<p>
<code>             "botTask",</code>
<p>
<code>             "knowledgeGraph"</code>
<p>
<code>           ],</code>
<p>
<code>      "nlpData": [</code>
<p>
<code>             "nlpSettings",</code>
<p>
<code>             "utterances",</code>
<p>
<code>             "standardResponses"</code>
<p>
<code>           ],</code>
<p> 
<code>        "AgentAI": [</code>
<p>
<code>                    "rules",</code>
<p>
<code>                    "playbooks",</code>
<p>
<code>                    "widgetSettings",</code>
<p>
<code>                    "layoutSettings"</code>
<p>
<code>           ],</code>
<p>
<code>      "settings": [</code>
<p>
<code>             "botSettings",</code>
<p>
<code>             "botVariables",</code>
<p>
<code>             "ivrSettings"</code>
<p>
<code>             "genAIandLLMSettings"</code>
<p>
<code>           ]</code>
<p>
<code>   },</code>
   </td>
   <td>Optional
   </td>
  </tr>
  <tr>
   <td>subTasks
   </td>
   <td>For partial export mention the tasks to be exported.
<p>
Usage:
<pre>"subTasks": {
"dialogs": ["&lt;dialog Name 1>","&lt;dialog Name 2>"],
"alerts": ["&lt;alert name 1>","&lt;alert name 2>"],
"actions": ["&lt;action name 1>","&lt;action name 2>"]
 }</pre></td>
<td>Optional
   </td>
  </tr>
  <tr>
   <td>IncludeDependentTasks
   </td>
   <td>To include dependent tasks for export.
<p>
Usage:
<p>
<pre>"IncludeDependentTasks": true</pre>
   </td>
   <td>Optional
   </td>
  </tr>
  <tr>
   <td>customDashboards
   </td>
   <td>To include custom dashboards for export.
<p>
Usage:
<p>
<pre>"customDashboards": true</pre>
   </td>
   <td>Optional
   </td>
  </tr>
  <tr>
   <td>allTasks
   </td>
   <td>To include all tasks for export, will be ignored if <em>subTasks</em> is present.
<p>
Usage:
<p>
<pre>"allTasks": true</pre>
   </td>
   <td>Optional
   </td>
  </tr>
</table>

## Sample Response


```json
{
    "_id": "ber-a59b2599-xxxx-xxxx-a3ad-3109e08e427a",
    "streamId": "st-6fa10d24-xxxx-xxxx-b457-1e33a82b115e",
    "status": "pending",
    "createdBy": "u-ccdc35ab-xxxx-5xxxx-bd74-df7ae1afcfe6",
    "exportType": "latest",
    "requestType": "Botexport",
    "createdOn": "2024-09-30T08:12:03.442Z",
    "__v": 0
}
```