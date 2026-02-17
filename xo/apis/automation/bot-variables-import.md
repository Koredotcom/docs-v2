--8<-- "includes/automationai-api-back-link.md"

# Bot Variables Import API

To import global and content variables into the bot.


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
   <td><code>https://{{host}}/api/{{version}}/public/builder/bot/{{BotID}}/variables/import</code>
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

<li>App Builder: Import Variables

<li>Admin Console: Not Applicable
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
   <td><strong>REQUIRED</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>host
   </td>
   <td>Required
   </td>
   <td>The environment URL. For example, <code>https://platform.kore.ai</code>
   </td>
  </tr>
  <tr>
   <td>BotID
   </td>
   <td>Required
   </td>
   <td>The identifier can be accessed under <strong>General Settings</strong> on the App Builder.
   </td>
  </tr>
</table>

## Body Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>REQUIRED</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>key
   </td>
   <td>Required
   </td>
   <td>Name of the variable.
   </td>
  </tr>
  <tr>
   <td>value
   </td>
   <td>Required
   </td>
   <td>Value for the variable.
   </td>
  </tr>
  <tr>
   <td>hint
   </td>
   <td>Required
   </td>
   <td>Description of the variable.
   </td>
  </tr>
  <tr>
   <td>variableType
   </td>
   <td>Required
   </td>
   <td>The type of variable can be as follows:
<ul>

<li><strong>env</strong> for global variable or

<li><strong>locale</strong> for content variable
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>scope
   </td>
   <td>Required
   </td>
   <td>The scope of the variable corresponds to the <strong>Setup</strong> Option at the time of variable declaration and can be one of the following:
<ul>

<li>prePopulated

<li>askOnInstall

<li>hidden
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>localeData
   </td>
   <td>Required
   </td>
   <td>For the variables of type locale, additional language data needs to be passed in the following format for each language:
    <pre>
    {
        "en": {
            "value": "english language prompt",
            "hint": ""
        }
    }
    </pre>
   </td>
  </tr>
</table>

## Sample Request

```json
curl -X POST 'https://{{host}}/api/1.1/public/builder/bot/{{BotId}}/variables/import' \
  -H 'Content-Type: application/json' \
  -H 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
  -d '[
    {
        "key": "Global",
        "value": "Globalkey-prePopulated",
        "hint": "",
        "variableType": "env",
        "scope": "prePopulated"
    },
	{
    "key": "Lang",
    "variableType": "locale",
    "scope": "prePopulated",
    "localeData": {
      "en": {
        "value": "english language prompt",
        "hint": ""
      }
    }
  }
]'
```

## Sample Request when Collections are enabled


```json
curl -X POST \
  https://{{host}}/api/1.1/public/builder/bot/{{BotId}}/variables/import \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "botVariables": [
        {
            "key": "CVar",
            "value": "Cvar1",
            "hint": "",
            "audioTag": "",
            "variableType": "locale",
            "scope": "prePopulated",
            "localeData": {
                "en": {
                    "value": "Cvar1",
                    "hint": "",
                    "audioTag": ""
                }
            },
            "group": "",
            "propagateValue": false,
            "vNameSpace": [
                {
                    "name": "default",
                    "refId": "10xxxxxx-4xxb-50xx-bxx9-3axxxxxxxxxx"
                }
            ]
        },
        {
            "key": "GKey1",
            "value": "GValue1-C",
            "hint": "GNotes1",
            "audioTag": "",
            "variableType": "env",
            "scope": "prePopulated",
            "group": "",
            "propagateValue": false,
            "vNameSpace": [
                {
                    "name": "default",
                    "refId": "10xxxxxx-4xxb-50xx-bxx9-3axxxxxxxxxx"
                }
            ]
        },
        {
            "key": "GKey2",
            "value": "Gkey2Stag",
            "hint": "GNotes2",
            "audioTag": "",
            "variableType": "env",
            "scope": "prePopulated",
            "group": "",
            "propagateValue": false,
            "vNameSpace": [
                {
                    "name": "default",
                    "refId": "10xxxxxx-4xxb-50xx-bxx9-3axxxxxxxxxx"
                }
            ]
        },
        {
            "key": "GKey55",
            "value": "GKey55-Staging",
            "hint": "GNotes2",
            "audioTag": "",
            "variableType": "env",
            "scope": "prePopulated",
            "propagateValue": false,
            "vNameSpace": [
                {
                    "name": "default",
                    "refId": "10xxxxxx-4xxb-50xx-bxx9-3axxxxxxxxxx"
                }
            ]
        },
        {
            "key": "contentvar",
            "value": "contvarvalue",
            "hint": "This is content variable",
            "audioTag": "",
            "variableType": "locale",
            "scope": "prePopulated",
            "localeData": {
                "en": {
                    "value": "contvarvalue",
                    "hint": "This is content variable",
                    "audioTag": ""
                }
            },
            "group": "",
            "propagateValue": false,
            "vNameSpace": [
                {
                    "name": "default",
                    "refId": "10xxxxxx-4xxb-50xx-bxx9-3axxxxxxxxxx"
                }
            ]
        }
    ],
    "botCollections": [
        {
            "name": "Default",
            "description": "Default Collection",
            "refId": "8xxxxxxa-exxc-5xx1-bxxd-56xxxxxxxxxx"
        },
        {
            "name": "Staging",
            "description": "Staging Environment",
            "refId": "0cxxxxx1-3xx8-52xx-bxxc-02xxxxxxxxxx"
        }
    ],
    "botCollectionVariables": [
        {
            "key": "GKey1",
            "value": "GValue1-C",
            "audioTag": "",
            "refId": "0cxxxxx1-3xx8-52xx-bxxc-02xxxxxxxxxx"
        },
        {
            "key": "GKey1",
            "value": "GValue1-C",
            "audioTag": "",
            "refId": "8xxxxxxa-exxc-5xx1-bxxd-56xxxxxxxxxx"
        },
        {
            "key": "GKey2",
            "value": "Gkey2Stag",
            "audioTag": "",
            "refId": "0cxxxxx1-3xx8-52xx-bxxc-02xxxxxxxxxx"
        },
        {
            "key": "GKey2",
            "value": "Gkey2Diff",
            "audioTag": "",
            "refId": "8xxxxxxa-exxc-5xx1-bxxd-56xxxxxxxxxx"
        },
        {
            "key": "GKey55",
            "value": "GKey55-Staging",
            "audioTag": "",
            "refId": "0cxxxxx1-3xx8-52xx-bxxc-02xxxxxxxxxx"
        },
        {
            "key": "GKey55",
            "value": "GKey55-Default",
            "audioTag": "testaudioTag",
            "refId": "8xxxxxxa-exxc-5xx1-bxxd-56xxxxxxxxxx"
        }
    ]
}'
```

## Body Parameters

No body parameters are passed.

## Sample Response


```json
{
  "message": "2 Variables imported/updated successfully."
}
```