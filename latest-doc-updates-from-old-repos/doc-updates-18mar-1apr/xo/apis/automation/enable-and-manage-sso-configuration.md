--8<-- "includes/automationai-api-back-link.md"

# Enable and Manage SSO Configuration APIs

To execute and get results for managing an account’s SSO configurations with the following APIs:

* [Fetch the SSO Meta](./enable-and-manage-sso-configuration.md#fetch-the-sso-meta-api){target="_blank"} API
* [Enable SSO](./enable-and-manage-sso-configuration.md#enable-sso-api){target="_blank"} API
* [Disable SSO](./enable-and-manage-sso-configuration.md#disable-sso-api){target="_blank"} API
* [Update the SSO Configuration](./enable-and-manage-sso-configuration.md#update-sso-api){target="_blank"} API

> **Note:** The APIs support SAML, WSFED, and OIDC protocols. 

## Fetch the SSO Meta API

If SSO is enabled, this API returns the existing SSO configuration along with the URLs. Otherwise, it returns only the URLs. This document covers both the scenarios.

| **Method** | GET |
|---|---|
| **Endpoint** | `https://{{host}}/api/public/bot/{{BotID}}/ssoconfig` |
| **Content Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` <br> See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope** | App Builder: Not Applicable <br> Admin Console: User Management > SSO Configuration|

### Query Parameters

| **PARAMETER** | **DESCRIPTION** | **REQUIRED/OPTIONAL** |
|---|---|---|
| `host` | The environment URL. For example, https://platform.kore.ai | Required |
| `BotId` | The *Bot ID* or *Stream ID*. You can access it by navigating to **App Settings** → **App Profile** in the app builder. | Required |
| `SSOProtocol` | The value for SSO protocol. | Required |

### Sample Request

```bash
curl --location --request GET \
'https://{{host}}/api/public/ssoconfig?SSOProtocol=saml' \
--header 'auth: {jwt-token}' \
--header 'bot-language: {language-code}' \
--header 'Content-Type: application/json' \
--data ''
```

### Headers Parameters

| **Header** | **Description** | **Required/Optional** |
| :---- | :---- | :---- |
| `auth` | JWT token for authentication. | required |
| `bot-language` | The language code used to specify the bot language for the request. | optional |

### Sample Response (If SSO is enabled)

```json
{
    "ACS_IDP_URL": "https://{{host}}/api/sso/login/callback?c=e-92d9c14543721ecc925c33986d6e012d0efc2ab1309684d5ebaacf79b2fxxxxx&redirect_url=https%3A%2F%2Fsit-xo.kxxx.ai%2Fbuilder%2F%3Fquery%3D1",
    "ACS_SP_CallBack_URL": "https://{{callback_url}}/authorize/callback",
    "ssoConfig": {
        "method": "saml",
        "allusers": false,
        "ssoProvider": "okta",
        "autoOnboarding": {
            "restrict": true
        },
        "modifiedDate": "2026-02-26T07:29:05.798Z",
        "modifiedBy": {
            "userId": "u-d705dfbb-6300-55e3-bdad-ad85bb4xxxxx",
            "firstName": "test",
            "lastName": "test"
        },
        "skip2faVerification": {
            "idp": true,
            "sp": true
        },
        "config": {
            "cert": [
                "{{certificate ID}}
            ],
            "entryPoint": "https://{{host}}/api/sso/login/callback?c=e-92d9c14543721ecc925c33986d6e012d0efc2ab1309684d5ebaacf79b2fxxxxx&redirect_url=https%3A%2F%2Fsit-xo.kxxx.ai%2Fbuilder%2F%3Fquery%3D1",
            "issuer": "http://www.okta.com/exk103k28zn7qYYxxxxx",
            "disableRequestedAuthnContext": false
        },
        "samlAttributeMapping": {
            "fullSynchronization": "enabled",
            "status": "active",
            "attributeMapping": [
                {
                    "samlAttributeName": "role",
                    "samlAttributeValue": "Admin",
                    "attributeType": "Role",
                    "koreAttribute": "isDeveloper"
                }
            ]
        }
    }
}

```

#### Response Parameters

| **PARAMETER** | **DATA TYPE** | **DESCRIPTION** |
|---|---|---|
| `ACS IDP URL` | String | ACS URL for IDP Initiated SAML Flow. |
| `ACS SP CallBack URL` | String | The endpoint on the Service Provider (SP) that receives the SAML response from the Identity Provider (IdP) after successful user authentication. |
| `ssoConfig` | Object | Container for all SAML SSO configuration settings. |
| `ssoConfig.method` | string | SSO method configured between the Service Provider (SP) and the Identity Provider (IdP) to exchange authentication requests and responses. Value is saml. |
| `ssoConfig.allusers` | boolean | Indicates whether SSO applies to all users in the workspace. |
| `ssoConfig.ssoProvider` | String | Supported SAML-compatible Identity Providers include: <br> Okta <br> Others <br> OneLogin <br> Bitium |
| `ssoConfig.autoOnboarding` | object | Configuration controlling automatic user onboarding behavior. |
| `ssoConfig.autoOnboarding.restrict` | boolean | When enabled, prevents automatic onboarding of users during first-time login. |
| `ssoConfig.modifiedDate` | Date | The date when the SSO configuration was modified in YYYY-MM-DD format, and Time in HH:MM:SS format. |
| `ssoConfig.modifiedBy` | object | Details of the user who last modified the configuration. |
| `ssoConfig.modifiedBy.userId` | string | Unique identifier of the user who modified the configuration. |
| `ssoConfig.modifiedBy.firstName` | string | First name of the modifying user. |
| `ssoConfig.modifiedBy.lastName` | string | Last name of the modifying user. |
| `ssoConfig.skip2faVerification` | Object | Configuration to skip 2FA verification during first-time login. |
| `ssoConfig.skip2faVerification.idp` | boolean | If enabled, skips 2FA enforcement at the identity provider during first-time SAML authentication. |
| `ssoConfig.skip2faVerification.sp` | boolean | If enabled, skips 2FA enforcement at the service provider during first-time login. |
| `ssoConfig.config.cert` | String | The SSO certificate. <br><br> **Note:** <br> This field is an array. <br> The Maximum number of values supported is two. |
| `ssoConfig.config.entryPoint` | String | The URL of the SSO entry point. |
| `ssoConfig.config.Issuer` | String | The URL of the SSO issuer. |
| `ssoConfig.config.disableRequestedAuthnContext` | boolean | Determines whether the SP omits the RequestedAuthnContext element in authentication requests. |
| `ssoConfig.samlAttributeMapping` | object | Mapping rules between SAML attributes and application user attributes. |
| `ssoConfig.samlAttributeMapping.fullSynchronization` | string | Indicates whether full attribute synchronization is enabled (enabled / disabled). |
| `ssoConfig.samlAttributeMapping.status` | string | Current status of attribute mapping (for example, active). |
| `ssoConfig.samlAttributeMapping.attributeMapping` | Array of objects | List of SAML-to-application attribute mapping rules. |
| `ssoConfig.samlAttributeMapping.attributeMapping.samlAttributeName` | String | Name of the attribute received from the SAML assertion. |
| `ssoConfig.samlAttributeMapping.attributeMapping.samlAttributeValue` | String | Expected value of the SAML attribute. |
| `ssoConfig.samlAttributeMapping.attributeMapping.attributeType` | string | Type of application attribute being mapped (e.g., Role). |
| `ssoConfig.samlAttributeMapping.attributeMapping.koreAttribute` | string | Corresponding application-specific attribute to be set. |

### Sample Response (If SSO is Disabled)

```json
{
    "ACS_IDP_URL": "https://sit-xx.xxxx.ai/api/sso/login/callback?c=e-92d9c14543721ecc925c33986d6e012d0efc2ab1309684d5ebaacf79b2xxxxx&redirect_url=https%3A%2F%2Fsit-xo.kore.ai%2Fbuilder%2F%3Fquery%3D1",
    "ACS_SP_CallBack_URL": "https://sit-xxxx-idp.xxxx.ai:4xx/authorize/callback"
}
```

#### Response Parameters

| **PARAMETER** | **DATA TYPE** | **DESCRIPTION** |
|---|---|---|
| `ACS IDP URL` | String | ACS URL for IDP Initiated SAML Flow. |
| `ACS SP CallBack URL` | String | ACS URL for SP Initiated SAML Flow. |

## Enable SSO API

This API enables the SSO configuration for an account.

| **Method** | POST |
|---|---|
| **Endpoint** | `https://{{host}}/api/public/bot/{{BotID}}/ssoconfig` |
| **Content Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` <br> See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope** | App Builder: Not Applicable </br> Admin Console: User Management > SSO Configuration |

### Path Parameters

| **PARAMETER** | **DESCRIPTION** | **REQUIRED/OPTIONAL** |
|---|---|---|
| host | The environment URL. For example, https://platform.kore.ai | Required |
| BotId | The *Bot ID* or *Stream ID*. You can access it by navigating to **App Settings** → **App Profile** in the App Builder. | Required |

### Sample Request


```bash
curl --location 'https://{{host}}/api/public/ssoconfig' \
--header 'auth: <jwt_token>' \
--header 'bot-language: {language-code}' \
--header 'Content-Type: application/json' \
--data '{
    "SSO_Authentication": "enable",
    "SSOProtocol": "saml",
    "SAML_IdentityProvider": "okta",
    "SingleSignOnURL": "https://sit-xx.kxxx.ai/api/sso/login/callback?c=e-92d9c14543721ecc925c33986d6e012d0efc2ab1309684d5ebaacf79b2fxxxxx&redirect_url=https%3A%2F%2Fsit-xo.kxxx.ai%2Fbuilder%2F%3Fquery%3D1",
    "IssuerURL": "http://www.okta.com/exk103k28zn7qYYxxxxx",
    "Certificate": [
        "{{certificate}}"
    ],
    "autoOnboarding": {
      "restrict": true
    },
   "skip2faVerification" : {
     "idp": true,
     "sp": true
   },
    "SAMLAttributeMapping": true,
    "SyncBehaviour": "Synchronize_UpdateExisting",
    "AttributeMapping": [
        {
            "SAMLAttribute_Name": "role",
            "SAMLAttribute_Value": "Admin",
            "Attribute_Type": "Role",
            "Kore_Attribute": "isDeveloper"
        }
    ]
}'
```

### Body Parameters

| **PARAMETER** | **DATA TYPE** | **DESCRIPTION** | **REQUIRED/OPTIONAL** |
|---|---|---|---|
| `SSO Authentication` | String | This parameter enables the overall configuration. | Required |
| `SSO Protocol` | String | This parameter indicates the SSO protocol the admin wants to enable for the account. For example, saml. | Required |
| `SAML Identity Provider` | String | This parameter defines the SAML Identity provider the admin is using to enable the SSO. For example, okta. | Required |
| `Single SignOn URL` | String | The SSO URL for the account. | Required |
| `Issuer URL` | Date | The URL of the SSO issuer. | Required |
|  `certificate ` | String | The SSO certificate. <br><br> Note: <br> This field is an array. <br> The Maximum number of values supported is two. | Required |
| `autoOnboarding` | object | Configuration controlling automatic user onboarding behavior. | Optional |
| `autoOnboarding.restrict` | boolean | When enabled, prevents automatic onboarding of users during first-time login. | Optional |
| `skip2faVerification` | object | Configuration to skip 2FA verification during first-time login. | Optional |
| `skip2faVerification.idp` | boolean | If enabled, skips 2FA enforcement at the identity provider during first-time SAML authentication. | Optional |
| `skip2faVerification.sp` | boolean | If enabled, skips 2FA enforcement at the service provider during first-time login. | Optional |
| `SAML Attribute Mapping` | Boolean | If enabled (true), SAML attribute mapping is done based on the sync behavior. | Optional. If the parameter is not defined in the request body, the default value is Disabled (False). |
| `Sync Behaviour` | String | Includes one of the following values: <br> Synchronize_UpdateExisting: Synchronize by updating the existing SSO configuration. <br> AddNew_RetainExisting: Add a new SSO configuration by retaining the existing values. | Required if the SAMLAttributeMapping parameter is enabled. |
| `Attribute Mapping` | Array of Objects. | List of SAML-to-application attribute mapping rules. | Required |
| `Attribute Mapping.samlAttributeName` | string | Name of the attribute received from the SAML assertion. | Required |
| `Attribute Mapping.samlAttributeValue` | string | Expected value of the SAML attribute. | Required |
| `Attribute Mapping.attributeType` | string | Type of application attribute being mapped (for example, Role). | Required |
| `Attribute Mapping.koreAttribute` | string | Corresponding application-specific attribute to be set. | Required |

### Sample Response

```json
{
    "method": "saml",
    "name": "john.doe@example.com",
    "allusers": false,
    "ssoProvider": "okta",
    "autoOnboarding": {
        "restrict": true
    },
    "modifiedDate": "2026-02-27T07:33:45.509Z",
    "modifiedBy": "u-d705dfbb-6300-55e3-bdad-ad85bb4xxxxx,
    "skip2faVerification": {
        "idp": true,
        "sp": true
    },
    "config": {
        "cert": [
            "{{Certificate_ID}}"
        ],
        "entryPoint": "https://sit-xo.kxxx.ai/api/sso/login/callback?c=e-92d9c14543721ecc925c33986d6e012d0efc2ab1309684d5ebaacf79b2fxxxxx&redirect_url=https%3A%2F%2Fsit-xo.kore.ai%2Fbuilder%2F%3Fquery%3D1",
        "issuer": "http://www.okta.com/exk103k28zn7qYYxxxxx",
        "disableRequestedAuthnContext": false
    },
    "samlAttributeMapping": {
        "fullSynchronization": "enabled",
        "status": "active",
        "attributeMapping": [
            {
                "samlAttributeName": "role",
                "samlAttributeValue": "Admin",
                "attributeType": "Role",
                "koreAttribute": "isDeveloper"
            }
        ]
    },
    "providername": "okta",
    "ACS_IDP_URL": "https://test-xx.kxxx.ai/api/sso/login/callback?c=e-92d9c14543721ecc925c33986d6e012d0efc2ab1309684d5ebaacf79b2fxxxxx&redirect_url=https%3A%2F%2Fsit-xx.xxxx.ai%2Fbuilder%2F%3Fquery%3D1",
    "ACS_SP_CallBack_URL": "https://sit-bxxx-xxx.kore.ai:443/authorize/callback",
    "message": "SSO Configuration created successfully"
}
```

## Disable SSO API

This API disables the SSO configuration for an account.

| **Method** | DELETE |
|---|---|
| **Endpoint** | `https://{host}/API/public/ssoconfig` |
| **Content Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` <br> See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope** | App Builder: Not Applicable <br> Admin Console: User Management > SSO Configuration |

### Path Parameters

| **PARAMETER** | **DESCRIPTION** | **REQUIRED/OPTIONAL** |
|---|---|---|
| `host` | The environment URL. For example, https://platform.kore.ai | Required |

### Sample Request

```bash
curl --location --request DELETE 'https://{{host}}/api/public/ssoconfig' \
     --header 'auth: {jwt-token}' \
     --header 'bot-language: {language-code}' \
     --header 'Content-Type: application/json' \
--data ''
```

### Body Parameters

No body parameters.


### Sample Response

```json
{
   "message": "SSO Configuration disabled"
}
```

## Update SSO API

This API updates the SSO configuration for an account.


| **Method** | POST |
|---|---|
| **Endpoint** | `https://{host}/API/public/ssoconfig` |
| **Content Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}` <br> See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope** | App Builder: Not Applicable <br> Admin Console: User Management > SSO Configuration |

### Path Parameters

| **PARAMETER** | **DESCRIPTION** | **REQUIRED/OPTIONAL** |
|---|---|---|
| `host` | The environment URL. For example, https://platform.kore.ai | Required |

### Sample Request

```bash
curl --location 'https://{{host}}/api/public/ssoconfig' \
--header 'auth: {{jwt_token}}' \
--header 'bot-language: {language-code}' \
--header 'Content-Type: application/json' \
--data '{
    "SSO_Authentication": "enable",
    "SSOProtocol": "saml",
    "SAML_IdentityProvider": "okta",
    "SingleSignOnURL": "{{SingleSignOnURL}}",
    "IssuerURL": "http://www.okta.com/exk103k28zn7qYYxxxxx",
    "Certificate": [
        "{{Certificate_ID}}"
    ],
    "autoOnboarding": {
      "restrict": true
    },
   "skip2faVerification" : {
     "idp": true,
     "sp": true
   },
    "SAMLAttributeMapping": true,
    "SyncBehaviour": "Synchronize_UpdateExisting",
    "AttributeMapping": [
        {
            "SAMLAttribute_Name": "role",
            "SAMLAttribute_Value": "Admin",
            "Attribute_Type": "Role",
            "Kore_Attribute": "isDeveloper"
        }
    ]
}'

```

### Body Parameters


| **PARAMETER** | **DATA TYPE** | **DESCRIPTION** | **REQUIRED/OPTIONAL** |
|---|---|---|---|
| `SSO Authentication` | String | This parameter enables the overall configuration. | Required |
| `SSO Protocol` | String | This parameter indicates the SSO protocol the admin wants to enable for the account. For example, saml. | Required |
| `SAML Identity Provider` | String | This parameter defines the SAML Identity provider the admin is using to enable the SSO. For example, okta. | Required |
| `Single SignOn URL` | String | The SSO URL for the account. | Required |
| `Issuer URL` | Date | The URL of the SSO issuer. | Required |
| `certificate` | String | The SSO certificate. <br><br> Note: <br> This field is an array. <br> The Maximum number of values supported is two. | Required |
| `autoOnboarding` | object | Configuration controlling automatic user onboarding behavior. | Optional |
| `autoOnboarding.restrict` | boolean | When enabled, prevents automatic onboarding of users during first-time login. | Optional |
| `skip2faVerification` | object | Configuration to skip 2FA verification during first-time login. | Optional |
| `skip2faVerification.idp` | boolean | If enabled, skips 2FA enforcement at the identity provider during first-time SAML authentication. | Optional |
| `skip2faVerification.sp` | boolean | If enabled, skips 2FA enforcement at the service provider during first-time login. | Optional |
| `SAML Attribute Mapping` | Boolean | If enabled (true), SAML attribute mapping is done based on the sync behavior. | Optional. If the parameter is not defined in the request body, the default value is Disabled (False). |
| `Sync Behaviour` | String | Includes one of the following values: <br> Synchronize_UpdateExisting: Synchronize by updating the existing SSO configuration. <br> AddNew_RetainExisting: Add a new SSO configuration by retaining the existing values. | Required if the SAMLAttributeMapping parameter is enabled. |
| `Attribute Mapping` | Array of Objects. | List of SAML-to-application attribute mapping rules. | Required |
| `Attribute Mapping.samlAttributeName` | string | Name of the attribute received from the SAML assertion. | Required |
| `Attribute Mapping.samlAttributeValue` | string | Expected value of the SAML attribute. | Required |
| `Attribute Mapping.attributeType` | string | Type of application attribute being mapped (e.g., Role). | Required |
| `Attribute Mapping.koreAttribute` | string | Corresponding application-specific attribute to be set. | Required |

### Sample Response

```json
{
    "method": "saml",
    "name": "john.doe@example.com",
    "allusers": false,
    "ssoProvider": "okta",
    "autoOnboarding": {
        "restrict": true
    },
    "modifiedDate": "2026-02-26T07:28:07.347Z",
    "modifiedBy": "u-d705dfbb-6300-55e3-bdad-ad85bb41xxxxx",
    "skip2faVerification": {
        "idp": true,
        "sp": true
    },
    "config": {
        "cert": [
            "{{certificate ID}}"
        ],
        "entryPoint": "https://sit-xo.kxxx.ai/api/sso/login/callback?c=e-92d9c14543721ecc925c33986d6e012d0efc2ab1309684d5ebaacf79b2fxxxxx&redirect_url=https%3A%2F%2Fsit-xo.kxxx.ai%2Fbuilder%2F%3Fquery%3D1",
        "issuer": "http://www.okta.com/exk103k28zn7qYYxxxxx",
        "disableRequestedAuthnContext": false
    },
    "samlAttributeMapping": {
        "fullSynchronization": "enabled",
        "status": "active",
        "attributeMapping": [
            {
                "samlAttributeName": "role",
                "samlAttributeValue": "Admin",
                "attributeType": "Role",
                "koreAttribute": "isDeveloper"
            }
        ]
    },
    "providername": "okta",
    "ACS_IDP_URL": "https://sit-xo.kxxx.ai/api/sso/login/callback?c=e-92d9c14543721ecc925c33986d6e012d0efc2ab1309684d5ebaacf79b2fxxxxx&redirect_url=https%3A%2F%2Fsit-xo.kore.ai%2Fbuilder%2F%3Fquery%3D1",
    "ACS_SP_CallBack_URL": "https://sit-bots-idp.kxxx.ai:443/authorize/callback",
    "message": "SSO Configuration updated successfully"
}
```


