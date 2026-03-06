--8<-- "includes/automationai-api-back-link.md"

# Bot Variables Import API

Import environment and content (locale) variables into a bot.

| Field          | Value                                                                 |
|----------------|-----------------------------------------------------------------------|
| **Method**     | POST                                                                  |
| **Endpoint**   | `https://{{host}}/api/{{version}}/public/builder/bot/{{botId}}/variables/import` |
| **Content Type** | `application/json`                                                   |
| **Authorization** | `auth: {{JWT}}`<br/>See [How to generate the JWT Token.](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope**  | App Builder: Import Variables <br/> Admin Console: Not Applicable       |


## Path Parameters

| Parameter | Required | Description                                                                 |
|-----------|----------|-----------------------------------------------------------------------------|
| `host`      | Required | The environment URL, for example: `https://platform.kore.ai`.              |
| `botId/streamId `    | Required | App ID or Bot ID. You can access it by navigating to **App Settings** → **App Profile** in the app.     |
| `version`    | Required          | API version, for example: 1.1. |

## Sample Request

```json
curl --location 'https://{{host}}/api/1.1/public/builder/bot/{{botId}}/variables/import' \
--header 'Content-Type: application/json' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
--data '[
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

### Body Parameters

| **PARAMETER**      | **REQUIRED** | **DESCRIPTION** |
|---------------|----------|-------------|
| `key`           | Required | Name of the variable. |
| `value`         | Required | Value for the variable.|
| `hint`          | Required | Description of the variable. |
| `variableType`  | Required | Type of the variable:<br>- **env**: Environment (Global) variable<br>- **locale**: Content variable |
| `scope`        | Required | Scope of the variable (corresponds to the **Setup** option at declaration):<br>- prePopulated<br>- askOnInstall<br>- hidden |
| `localeData`                     | Required | **Applicable only when `variableType = locale`.** For locale variables, language-specific data must be provided in the following format:<br><br>```json<br>{<br>  "en": {<br>    "value": "english language prompt",<br>    "hint": ""<br>  }<br>}<br>``` |
| `localeData.localeCode`          | Required   | Applicable only when `variableType = locale`. Locale identifier (for example, `en`, `fr`, `ja`, `zh_cn`). |
| `localeData.localeCode.hint`     | Optional   | Applicable only when `variableType = locale`. Optional hint for the localized value. |
| `localeData.localeCode.value`    | Required   | Applicable only when `variableType = locale`. Localized message or text for the locale. |


## Sample Request When Collections Are Enabled


```json
curl -X POST \
  https://{{host}}/api/1.1/public/builder/bot/{{botId}}/variables/import \
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
!!! note
    The `botCollections` and `botCollectionVariables` fields are required only when importing bot collection variables.

### Body Parameters

| **PARAMETER** | **TYPE** | **DESCRIPTION** |
|----------|------|-------------|
| `botVariables` | array | List of bot-level variables to be created or imported. |
| `botVariables.key` | string | Name of the variable. |
| `botVariables.value` | string | Default value of the variable. |
| `botVariables.hint` | string | Description or notes for the variable. |
| `botVariables.audioTag` | string | Optional audio tag associated with the variable (used for voice experiences). |
| `botVariables.variableType` | string | Type of variable. Supported values:<br>- `env` (environment variable)<br>- `locale` (content variable) |
| `botVariables.scope` | string | Scope of the variable. Supported values:<br>- `prePopulated`<br>- `askOnInstall`<br>- `hidden` |
| `botVariables.localeData` | object | Applicable only when `variableType = locale`. Contains language-specific values and metadata for the variable. |
| `botVariables.localeData.localeCode` | object | Applicable only when `variableType = locale`. Locale identifier (for example, `en`, `fr`, `ja`, `zh_cn`). |
| `botVariables.localeData.localeCode.value` | string | Applicable only when `variableType = locale`. Localized value for the variable. |
| `botVariables.localeData.localeCode.hint` | string | Applicable only when `variableType = locale`. Optional hint for the localized value. |
| `botVariables.localeData.localeCode.audioTag` | string | Applicable only when `variableType = locale`. Optional audio tag for the localized value. |
| `botVariables.group` | string | Logical grouping for the variable (if applicable). |
| `botVariables.propagateValue` | boolean | Indicates whether the variable value should be propagated across environments or namespaces. |
| `botVariables.vNameSpace` | array | Namespace mapping for the variable. |
| `botVariables.vNameSpace.name` | string | Name of the namespace (for example, `default`). |
| `botVariables.vNameSpace.refId` | string | Unique identifier of the namespace. |
| `botCollections` | array | Required only when importing bot collection variables. Defines available bot collections. |
| `botCollections.name` | string | Name of the bot collection (for example, `Default`, `Staging`). |
| `botCollections.description` | string | Description of the bot collection. |
| `botCollections.refId` | string | Unique identifier of the bot collection. Used to map variables to collections. |
| `botCollectionVariables` | array | Required only when importing bot collection variables. Defines collection-specific variable values. |
| `botCollectionVariables.key` | string | Name of the variable within the bot collection. Must match a variable defined in `botVariables`. |
| `botCollectionVariables.value` | string | Value assigned to the variable for the specified bot collection. |
| `botCollectionVariables.audioTag` | string | Optional audio tag associated with the collection-specific variable value. |
| `botCollectionVariables.refId` | string | Reference ID of the bot collection. Must match a `refId` from `botCollections`. |


## Sample Response

```json
{
  "message": "2 Variables imported/updated successfully."
}

```