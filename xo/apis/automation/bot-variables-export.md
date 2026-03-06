--8<-- "includes/automationai-api-back-link.md"

# Bot Variables Export API

Export environment and locale (content) variables from a bot. The endpoint retrieves all configured variables, including their values, types, scopes, and namespace associations.

| **Field**          | **Value**                                                                 |
|----------------|-----------------------------------------------------------------------|
| Method         | POST                                                                  |
| Endpoint       | `https://{{host}}/api/{{version}}/public/builder/bot/{{botId}}/variables/export` |
| Content Type   | application/json                                                      |
| Authorization  | auth: {{JWT}}. <br> See [How to generate the JWT Token.](../automation/api-introduction.md#generating-the-jwt-token)                                                         |
| API Scope      | App Builder: Export Variables <br> Admin Console: Not Applicable   |


## Path Parameters

| **PARAMETER** | **REQUIRED/OPTIONAL** | **DESCRIPTION** |
|-----------|-------------------|-------------|
| `host`      | Required          | Environment URL, for example: https://platform.kore.ai. |
| `botId/streamId`    | Required          | App ID or Bot ID. You can access it by navigating to **App Settings** → **App Profile** in the app. |
| `version`    | Required          | API version, for example: 1.1. |

## Sample Request

```json
curl --location --request POST 'https://{{host}}/api/1.1/public/builder/bot/{{botId}}/variables/export' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}'
```

## Sample Response

```json

[
    {
        "key": "host_url",
        "value": "https://{{host}}/nodeutil/mocks/getTime?timeZone=America/Chicago",
        "hint": "",
        "variableType": "env",
        "scope": "prePopulated",
        "group": "",
        "propagateValue": false,
        "vNameSpace": [
            {
                "name": "namespace1",
                "refId": "7eb3cfb6-0885-5c0b-be3d-00de695xxxxx"
            },
            {
                "name": "default",
                "refId": "11040310-f9a6-5776-b35a-c893371xxxxx"
            }
        ],
        "isSecured": false
    },
    {
        "key": "env_propagation_check",
        "value": "This environment variable rendered from standard bot",
        "hint": "",
        "variableType": "env",
        "scope": "prePopulated",
        "group": "",
        "propagateValue": false,
        "vNameSpace": [
            {
                "name": "default",
                "refId": "11040310-f9a6-5776-b35a-c893371xxxxx"
            }
        ],
        "isSecured": false
    },
    {
        "key": "encryptedEnvironmentVariableScriptNodeKey1",
        "value": "",
        "hint": "",
        "audioTag": "",
        "variableType": "env",
        "scope": "prePopulated",
        "group": "BotVariablesEncryptionValidationGroup",
        "propagateValue": false,
        "vNameSpace": [
            {
                "name": "default",
                "refId": "11040310-f9a6-5776-b35a-c893371xxxxx"
            }
        ],
        "isSecured": true
    },
    {
        "key": "encryptedGoogleTranslationKey",
        "value": "",
        "hint": "",
        "audioTag": "",
        "variableType": "env",
        "scope": "prePopulated",
        "group": "",
        "propagateValue": false,
        "vNameSpace": [
            {
                "name": "default",
                "refId": "11040310-f9a6-5776-b35a-c893371xxxxx"
            }
        ],
        "isSecured": true
    },
    {
        "key": "DAI_DF_INVALID_PHONE_NUMBER_DURING_DEFLECTION",
        "audioTag": "",
        "variableType": "locale",
        "scope": "prePopulated",
        "localeData": {
            "ar": {
                "audioTag": "",
                "hint": "",
                "value": "The Number you entered #Phone Number# is invalid. Please Enter a Valid Phone Number with the Country Code."
            },
            "ca": {
                "audioTag": "",
                "hint": "",
                "value": "The Number you entered #Phone Number# is invalid. Please Enter a Valid Phone Number with the Country Code."
            },
            "de": {
                "audioTag": "",
                "hint": "",
                "value": "The Number you entered #Phone Number# is invalid. Please Enter a Valid Phone Number with the Country Code."
            },
            "en": {
                "audioTag": "",
                "hint": "",
                "value": "The Number you entered #Phone Number# is invalid. Please Enter a Valid Phone Number with the Country Code."
            },
            "es": {
                "audioTag": "",
                "hint": "",
                "value": "El número que ingresó #Número de teléfono# no es válido. Ingrese un número de teléfono válido con el código de país."
            },
            "fi": {
                "audioTag": "",
                "hint": "",
                "value": "The Number you entered #Phone Number# is invalid. Please Enter a Valid Phone Number with the Country Code."
            },
            "fr": {
                "audioTag": "",
                "hint": "",
                "value": "The Number you entered #Phone Number# is invalid. Please Enter a Valid Phone Number with the Country Code."
            },
            "hi": {
                "audioTag": "",
                "hint": "",
                "value": "The Number you entered #Phone Number# is invalid. Please Enter a Valid Phone Number with the Country Code."
            },
            "id": {
                "audioTag": "",
                "hint": "",
                "value": "The Number you entered #Phone Number# is invalid. Please Enter a Valid Phone Number with the Country Code."
            },
            "it": {
                "audioTag": "",
                "hint": "",
                "value": "The Number you entered #Phone Number# is invalid. Please Enter a Valid Phone Number with the Country Code."
            },
            "ja": {
                "audioTag": "",
                "hint": "",
                "value": "入力いただいた番号 #Phone Number#は無効です。有効な電話番号と国コードを入力してください。"
            },
            "kk": {
                "audioTag": "",
                "hint": "",
                "value": "The Number you entered #Phone Number# is invalid. Please Enter a Valid Phone Number with the Country Code."
            },
            "ko": {
                "audioTag": "",
                "hint": "",
                "value": "The Number you entered #Phone Number# is invalid. Please Enter a Valid Phone Number with the Country Code."
            },
            "mr": {
                "audioTag": "",
                "hint": "",
                "value": "The Number you entered #Phone Number# is invalid. Please Enter a Valid Phone Number with the Country Code."
            },
            "nb": {
                "audioTag": "",
                "hint": "",
                "value": "The Number you entered #Phone Number# is invalid. Please Enter a Valid Phone Number with the Country Code."
            },
            "nl": {
                "audioTag": "",
                "hint": "",
                "value": "The Number you entered #Phone Number# is invalid. Please Enter a Valid Phone Number with the Country Code."
            },
            "pl": {
                "audioTag": "",
                "hint": "",
                "value": "The Number you entered #Phone Number# is invalid. Please Enter a Valid Phone Number with the Country Code."
            },
            "pt": {
                "audioTag": "",
                "hint": "",
                "value": "TO número que você digitou #Número de telefone# é inválido. Insira um número de telefone válido com o código do país."
            },
            "ru": {
                "audioTag": "",
                "hint": "",
                "value": "The Number you entered #Phone Number# is invalid. Please Enter a Valid Phone Number with the Country Code."
            },
            "sl": {
                "audioTag": "",
                "hint": "",
                "value": "The Number you entered #Phone Number# is invalid. Please Enter a Valid Phone Number with the Country Code."
            },
            "sv": {
                "audioTag": "",
                "hint": "",
                "value": "The Number you entered #Phone Number# is invalid. Please Enter a Valid Phone Number with the Country Code."
            },
            "ta": {
                "audioTag": "",
                "hint": "",
                "value": "The Number you entered #Phone Number# is invalid. Please Enter a Valid Phone Number with the Country Code."
            },
            "te": {
                "audioTag": "",
                "hint": "",
                "value": "The Number you entered #Phone Number# is invalid. Please Enter a Valid Phone Number with the Country Code."
            },
            "uk": {
                "audioTag": "",
                "hint": "",
                "value": "The Number you entered #Phone Number# is invalid. Please Enter a Valid Phone Number with the Country Code."
            },
            "vi": {
                "audioTag": "",
                "hint": "",
                "value": "The Number you entered #Phone Number# is invalid. Please Enter a Valid Phone Number with the Country Code."
            },
            "zh_cn": {
                "audioTag": "",
                "hint": "",
                "value": "The Number you entered #Phone Number# is invalid. Please Enter a Valid Phone Number with the Country Code."
            },
            "zh_tw": {
                "audioTag": "",
                "hint": "",
                "value": "The Number you entered #Phone Number# is invalid. Please Enter a Valid Phone Number with the Country Code."
            }
        },
        "group": "defl_voice-form,agent,multi_chat-form,agent,multi_none-form,agent,multi",
        "propagateValue": false,
        "vNameSpace": [
            {
                "name": "default",
                "refId": "11040310-f9a6-5776-b35a-c893371xxxxx"
            }
        ],
        "isSecured": false
    }
]
```

## Response Parameters

Returns an array of variable objects containing the exported bot variables. Each variable object in the response array contains the following fields:

| **PARAMETER**                     | **TYPE**    | **DESCRIPTION**                                                                 |
|---------------------------|---------|-----------------------------------------------------------------------------|
| `key`                       | string  | The unique identifier or name of the variable.                                |
| `value`                     | string  | The value assigned to the variable.                                           |
| `hint`                      | string  | Optional description or hint text for the variable.                           |
| `variableType`              | string  | Type of variable (for example, `env` for environment variables).              |
| `scope`                    | string  | Scope of the variable (for example, `prePopulated`).                          |
| `group`                     | string  | Optional group name for organizing related variables.                         |
| `propagateValue`            | boolean | Indicates whether the variable value should be propagated.                    |
| `vNameSpace`                | array   | Array of namespace objects where this variable is available.                  |
| `vNameSpace[].name`         | string  | Name of the namespace.                                                        |
| `vNameSpace[].refId`        | string  | Reference ID of the namespace.                                                |
| `isSecured`                 | boolean | Indicates whether the variable contains sensitive or encrypted data.          |
| `audioTag`                  | string  | Audio tag associated with the variable (primarily for locale variables).     |
| `localeData`                | object  | Contains locale-specific values; present only when `variableType` is `locale`.|
| `localeData.localeCode`     | string  | Locale identifier (for example, `en`, `fr`, `ja`, `zh_cn`).                    |
| `localeData.localeCode.audioTag`       | string  | Audio tag for text-to-speech or voice use cases.                               |
| `localeData.localeCode.hint`           | string  | Optional hint for the localized value.                                        |
| `localeData.localeCode.value`          | string  | Localized message or text for the locale.                                     |
