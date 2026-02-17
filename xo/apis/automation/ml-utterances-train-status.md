--8<-- "includes/automationai-api-back-link.md"

# ML Utterance Train Status API

To get the ML training status.


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
   <td><code>https://{{host}}/api/public/bot/{{BotID}}/ml/train/status?language={{lang}}&state={{state}}</code>
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

<li>App Builder: Train ML

<li>Admin Console: Test and Train > Train ML
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
   <td><strong>BotID</strong>
   </td>
   <td>The <strong>Bot ID</strong> or <strong>Stream ID</strong> to be accessed under <strong>General Settings</strong> on the App Builder.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>language</strong>
   </td>
   <td>The Bot language which is identified by the language acronym. For example, <em>en</em> for English and <em>de</em> for German.
<p>
The user can set the default language of the bot.
   </td>
   <td>Optional
   </td>
  </tr>
  <tr>
   <td><strong>state</strong>
   </td>
   <td>The state of the bot <em>configured</em> for the In-Development version and <em>published</em> for the published version.
<p>
Set by default to <em>configured</em>
   </td>
   <td>Optional
   </td>
  </tr>
</table>


 


## Sample Request


```json
curl -X GET \
  https://{{host}}/api/public/bot/{{BotId}}/ml/train/status \
  -H 'Content-Type: application/json' \
  -H 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
```

## Body Parameters

No Body Parameters are passed.


## Sample Response

**For successful training**


```json
{
    "trainingStatus": "Finished",
    "isMlInSyncWithSentences": true,
    "isMlInSyncWithSynonyms": true,
    "isMlInSyncWithMlparams": true,
    "isMlInSyncWithTraits": true,
    "isMlInSyncWithSmallTalk": true,
    "isMlInSyncWithUBTraining": true,
    "isMlInSyncWithEntityNode": true,
    "isMlInSyncWithIntentNode": true,
    "isMlInSyncWithPatterns": true,
    "isMlInSyncWithBTUtterances": true,
    "trainDetails": {
        "nlpVersion": 3,
        "trainVersion": 3
    }
}
```


**For training in-progress**


```json
{
    "trainingStatus": "Inprogress",
    "isMlInSyncWithSentences": true,
    "isMlInSyncWithSynonyms": true,
    "isMlInSyncWithMlparams": true,
    "isMlInSyncWithTraits": true,
    "isMlInSyncWithSmallTalk": true,
    "isMlInSyncWithUBTraining": true
}
```


**For failed training**


```json
{
    "trainingStatus": "Failed",
    "isMlInSyncWithSentences": true,
    "isMlInSyncWithSynonyms": true,
    "isMlInSyncWithMlparams": true,
    "isMlInSyncWithTraits": true,
    "isMlInSyncWithSmallTalk": true,
    "isMlInSyncWithUBTraining": true
}
```