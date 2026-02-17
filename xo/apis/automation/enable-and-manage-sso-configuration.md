--8<-- "includes/automationai-api-back-link.md"

# Enable and Manage SSO Configuration APIs

To execute and get results for managing an account’s SSO configurations with the following APIs:

* [Fetch the SSO Meta](./enable-and-manage-sso-configuration.md#fetch-the-sso-meta-api){target="_blank"} API
* [Enable SSO](./enable-and-manage-sso-configuration.md#enable-sso-api){target="_blank"} API
* [Disable SSO](./enable-and-manage-sso-configuration.md#disable-sso-api){target="_blank"} API
* [Update the SSO Configuration](./enable-and-manage-sso-configuration.md#update-sso-api){target="_blank"} API

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The APIs support SAML, WSFED, and OIDC protocols.  </p>
</div>

## Fetch the SSO Meta API

If SSO is enabled, this API returns the existing SSO configuration along with the URLs. Otherwise, it returns only the URLs. This document covers both the scenarios.

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
   <td><code>https://{{host}}/api/public/bot/{{BotID}}/ssoconfig</code>
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

<li>App Builder: Not Applicable</li>

<li>Admin Console: User Management > SSO Configuration</li>
</ul>
   </td>
  </tr>
</table>

### Query Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
  </tr>
  <tr>
   <td>host
   </td>
   <td>The environment URL. For example, https://platform.kore.ai
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>BotId
   </td>
   <td>The <em>Bot ID</em> or <em>Stream ID</em> can be accessed under <strong>General Settings</strong> on the App Builder.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>SSOProtocol
   </td>
   <td>The value for SSO protocol.
   </td>
   <td>Required
   </td>
  </tr>
</table>


### Sample Request

```js
curl --location --request GET \
'https://{{host}}/api/public/ssoconfig?SSOProtocol=saml' \
--header 'auth: {jwt-token}' \
--header 'bot-language: {language-code}' \
--header 'Content-Type: application/json' \
--data ''
```

### Body Parameters

**If SSO is enabled**

In this case, the API provides the following meta of the configurations.

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DATA TYPE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
  </tr>
  <tr>
   <td>ACS IDP URL
   </td>
   <td>String
   </td>
   <td>ACS URL for IDP Initiated SAML Flow.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>ACS SP CallBack URL
   </td>
   <td>String
   </td>
   <td>ACS URL for SP Initiated SAML Flow.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>Method
   </td>
   <td>String
   </td>
   <td>The method used for the SSO flow. For example, SAML.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>ssoProvider
   </td>
   <td>String
   </td>
   <td>The options include:
<ul>

<li>Okta</li>

<li>Others</li>

<li>OneLogin</li>

<li>Bitium</li>
</ul>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>modifiedDate
   </td>
   <td>Date
   </td>
   <td>The date when the SSO configuration was modified in <code>YYYY-MM-DD</code> format, and Time in <code>HH:MM:SS</code> format.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>modifiedBy
   </td>
   <td>Array of <strong>String</strong> data type.
   </td>
   <td>This parameter supports an array of objects. Each object in the array has the parameters that are listed below:
<ul>

<li><strong>userId</strong>: The admin user’s ID.</li>

<li><strong>firstName</strong>: The admin user’s first name.</li>

<li><strong>lastName</strong>: The admin user’s last name.</li>
</ul>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>cert
   </td>
   <td>String
   </td>
   <td>The SSO certificate.
<p>
<strong>Note</strong>:
<ul>

<li>This field is an array.</li>

<li>The Maximum number of values supported is two.</li>
</ul>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>entryPoint
   </td>
   <td>String
   </td>
   <td>The URL of the SSO entry point.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>Issuer
   </td>
   <td>String
   </td>
   <td>The URL of the SSO issuer.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>samlAttributeMapping
   </td>
   <td>Array of Objects of <strong>String</strong> data type.
   </td>
   <td>This parameter supports an array of objects. Each object in the array has the mandatory parameters listed below:
<ul>

<li><strong>samlAttributeName</strong>: The SAML attribute name of String data type used for SSO.</li>

<li><strong>samlAttributeValue</strong>: The SAML attribute value of String data type used for SSO.</li>

<li><strong>attributeType</strong>: The SAML attribute type which is either <strong>Role</strong> or <strong>Group</strong> to which an attribute is mapped.</li>

<li><strong>koreAttribute</strong>: The <strong>Role ID</strong> or <strong>Group ID</strong> to which the SAML attribute should be mapped.</li>
</ul>
   </td>
   <td>Required
   </td>
  </tr>
</table>

**If SSO is Disabled**

In this case, the API provides the following meta required to enable the app at the identity provider application.

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DATA TYPE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
  </tr>
  <tr>
   <td>ACS IDP URL
   </td>
   <td>String
   </td>
   <td>ACS URL for IDP Initiated SAML Flow.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>ACS SP CallBack URL
   </td>
   <td>String
   </td>
   <td>ACS URL for SP Initiated SAML Flow.
   </td>
   <td>Required
   </td>
  </tr>
</table>

### Sample Response

**If SSO is enabled**

```js
{
   "ACS_IDP_URL": "https://xxx.kore.ai/api/sso/login/callback?c=e-7dxxxxxcdxxxxxxcxxxxxxxxxc51xxxxxxxxxx21xxxxxxxxxxxxxxxxxxxxxxx4&redirect_url=httpsxxxxxxxxFsit-xo.kore.axxxxbotbuilderxxxx3Fquery%xx1",
   "ACS_SP_CallBack_URL": "https://idpxxxy-dxx.kore.com/authorize/callback",
   "ssoConfig": {
       "method": "saml",
       "allusers": false,
       "ssoProvider": "okta",
       "modifiedDate": "2024-07-23T07:12:26.549Z",
       "modifiedBy": {
           "userId": "u-94xxxxx8-bxxb-5xx6-9xx0-06xxxxxxxxxf",
           "firstName": "pxxxxxn",
           "lastName": "`bxxxxx"
       },
       "config": {
           "cert": [
               "{certificate ID}"
           ],
           "entryPoint": "https://trial-6xxxxx1.okta.com/app/trial-61xxxxx_kxxe_1/exxxxxxxxxxxxxxxx697/sso/saml",
           "issuer": "https://www.okta.com/exxxxxxxxxxxxxxxxxx7"
       },
       "samlAttributeMapping": {
           "fullSynchronization": "enabled",
           "status": "active",
           "attributeMapping": [
               {
                   "samlAttributeName": "role",
                   "samlAttributeValue": "role1",
                   "attributeType": "Role",
                   "koreAttribute": "6xxxxxxxxxxxxxxxxxxxxxeb"
               }
           ]
       }
   }
}
```

**If SSO is disabled**

```js
{
   "ACS_IDP_URL": "https://xxx.kore.ai/api/sso/login/callback?c=e-7dxxxxxcdxxxxxxcxxxxxxxxxc51xxxxxxxxxx21xxxxxxxxxxxxxxxxxxxxxxx4&redirect_url=httpsxxxxxxxxFsit-xo.kore.axxxxbotbuilderxxxx3Fquery%xx1",
   "ACS_SP_CallBack_URL": "https://idpxxxy-dxx.kore.com/authorize/callback"
}
```

## Enable SSO API

This API enables the SSO configuration for an account.

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
   <td><code>https://{{host}}/api/public/bot/{{BotID}}/ssoconfig</code>
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

<li>App Builder: Not Applicable</li>

<li>Admin Console: User Management > SSO Configuration</li>
</ul>
   </td>
  </tr>
</table>

### Path Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
  </tr>
  <tr>
   <td>host
   </td>
   <td>The environment URL. For example, https://platform.kore.ai
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>BotId
   </td>
   <td>The <em>Bot ID</em> or <em>Stream ID</em> can be accessed under <strong>General Settings</strong> on the App Builder.
   </td>
   <td>Required
   </td>
  </tr>
</table>

### Sample Request


```js
curl --location --request POST \
'https://{{host}}/api/public/ssoconfig' \
     --header 'auth: {jwt-token}' \
     --header 'bot-language: {language-code}' \
     --header 'Content-Type: application/json' \
--data '{
    "SSO_Authentication": "enable",
    "SSOProtocol": "saml",
    "SAML_IdentityProvider": "onelogin",
    "SingleSignOnURL": "https://prxxxxng1.onelogin.com/trust/saml2/http-post/sso/3xxxxxe0-8xx6-4xx8-9xx1-dxxxxxx7dxxe",
    "IssuerURL": "https://app.onelogin.com/saml/metadata/3xxxxxe0-8xx6-4xx8-9xx1-d1xxxx07dxxe",
    "Certificate": [
        "{certificate ID}"
    ],
    "SAMLAttributeMapping": true,
    "SyncBehaviour": "Synchronize_UpdateExisting",
    "AttributeMapping": [
        {
            "SAMLAttribute_Name": "role",
            "SAMLAttribute_Value": "role1",
            "Attribute_Type": "Role",
            "Kore_Attribute": "667xxxxxxxxxxxxxxxxxxxxb"
        }
    ]
}'
```

### Body Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DATA TYPE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
  </tr>
  <tr>
   <td>SSO Authentication
   </td>
   <td>String
   </td>
   <td>This parameter enables the overall configuration.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>SSO Protocol
   </td>
   <td>String
   </td>
   <td>This parameter indicates the SSO protocol the admin wants to enable for the account.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>SAML Identity Provider
   </td>
   <td>String
   </td>
   <td>This parameter defines the SAML Identity provider the admin is using to enable the SSO.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>Single SignOn URL
   </td>
   <td>String
   </td>
   <td>The SSO URL for the account.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>Issuer URL
   </td>
   <td>Date
   </td>
   <td>The URL of the SSO issuer.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>certificate
   </td>
   <td>String
   </td>
   <td>The SSO certificate.
<p>
<strong>Note</strong>:
<ul>

<li>This field is an array.</li>

<li>The Maximum number of values supported is two.</li>
</ul>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>SAML Attribute Mapping
   </td>
   <td>Boolean
   </td>
   <td>If enabled (true), SAML attribute mapping is done based on the sync behavior.
   </td>
   <td>Optional. If the parameter is not defined in the request body, the default value is Disabled (False).
   </td>
  </tr>
  <tr>
   <td>Sync Behaviour
   </td>
   <td>String
   </td>
   <td>Includes one of the following values:
<ul>

<li><strong>Synchronize_UpdateExisting</strong>: Synchronize by updating the existing SSO configuration.</li>

<li><strong>AddNew_RetainExisting</strong>: Add a new SSO configuration by retaining the existing values.
</li>
</ul>
   </td>
   <td>Required if the <strong>SAMLAttributeMapping </strong>parameter is enabled.
   </td>
  </tr>
  <tr>
   <td>Attribute Mapping
   </td>
   <td>Array of Objects of <strong>String</strong> data type.
   </td>
   <td>This parameter supports an array of objects. Each object in the array has the mandatory parameters listed below:
<ul>

<li><strong>samlAttributeName</strong>: The SAML attribute name of String data type used for SSO.</li>

<li><strong>samlAttributeValue</strong>: The SAML attribute value of String data type used for SSO.</li>

<li><strong>attributeType</strong>: The SAML attribute type which is either <strong>Role</strong> or <strong>Group</strong> to which an attribute is mapped.</li>

<li><strong>koreAttribute</strong>: The<strong> Role ID</strong> or <strong>Group ID</strong> to which the SAML attribute should be mapped.</li>
</ul>
   </td>
   <td>Required
   </td>
  </tr>
</table>

### Sample Response

```js
{
   "config": {
       "cert": [
           "{certificate ID}"
       ],
       "entryPoint": "https://trial-6xxxxx1.okta.com/app/trial-6xxxxx1_kore_1/exxxxxxxxxxxxxxxxx97/sso/saml",
       "issuer": "https://www.okta.com/exxxxxxxxxxxxxxxxx97"
   },
   "method": "saml",
   "providername": "okta",
   "allusers": false,
   "modifiedBy": "u-9xxxxxx8-bxxb-5xx6-9xx0-06xxxxxxxxxf",
   "samlAttributeMapping": {
       "fullSynchronization": "enabled",
       "status": "active",
       "attributeMapping": [
           {
               "samlAttributeName": "role",
               "samlAttributeValue": "role1",
               "attributeType": "Role",
               "koreAttribute": "6xxxxxxxxxxxxxxxxxxxxeeb"
           }
       ]
   },
   "name": "john.doe@example.com_saml",
   "ssoProvider": "okta",
   "ACS_IDP_URL": "https://xxxx.kore.ai/api/sso/login/callback?c=e-7dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx4&redirect_url=httpsxxxxxxx2Fxxxx.kore.ai%xxxbotbuilder%xx%3xquery%3x1",
   "ACS_SP_CallBack_URL": "https://xxxxx-dev.kore.com/authorize/callback",
  }
```

## Disable SSO API

This API disables the SSO configuration for an account.


<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td>DELETE
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td><code>https://{host}/API/public/ssoconfig</code>
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

<li>App Builder: Not Applicable</li>

<li>Admin Console: User Management > SSO Configuration</li>
</ul>
   </td>
  </tr>
</table>

### Path Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
  </tr>
  <tr>
   <td>host
   </td>
   <td>The environment URL. For example, https://platform.kore.ai
   </td>
   <td>Required
   </td>
  </tr>
</table>

### Sample Request

```js
curl --location --request DELETE 'https://{{host}}/api/public/ssoconfig' \
     --header 'auth: {jwt-token}' \
     --header 'bot-language: {language-code}' \
     --header 'Content-Type: application/json' \
--data ''
```

### Body Parameters

No body parameters.


### Sample Response

```js
{
   "message": "SSO Configuration disabled"
}
```

## Update SSO API

This API updates the SSO configuration for an account.


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
   <td><code>https://{host}/API/public/ssoconfig</code>
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

<li>App Builder: Not Applicable</li>

<li>Admin Console: User Management > SSO Configuration</li>
</ul>
   </td>
  </tr>
</table>

### Path Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
  </tr>
  <tr>
   <td>host
   </td>
   <td>The environment URL. For example, https://platform.kore.ai
   </td>
   <td>Required
   </td>
  </tr>
</table>

### Sample Request

```js
curl --location 'https://{{host}}/api/public/ssoconfig' \
--header 'auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNzLTVjNDkzYmY3LTYxYWMtNWFlZC1hMTMzLTQ0ZGE3MmU0MmNlYyJ9.4XiqSkquaGSbmmW9SK0TY1wS1E-35gHvi6ZsQYt2Umc' 
--header 'Content-Type: application/json' 
--data '{
   "SSO_Authentication":"enable",
   "SSOProtocol": "saml",
   "SAML_IdentityProvider": "okta",
   "SingleSignOnURL": "https://trial-6124441.okta.com/app/trial-6124441_kore_1/exkgn9lkzgRaNi5dS697/sso/saml",
   "IssuerURL": "https://www.okta.com/exkgn9lkzgRaNi5dS697",
   "Certificate": ["{{certificate ID}}"],
    "SAMLAttributeMapping": true,
   "SyncBehaviour": "Synchronize_UpdateExisting",
   "AttributeMapping": [
       {
           "SAMLAttribute_Name": "role",
           "SAMLAttribute_Value": "role1",
           "Attribute_Type": "Role",
           "Kore_Attribute": "667d254fad30fa11a6f3eeeb"
       }
   ]
}'
```

### Body Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DATA TYPE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
  </tr>
  <tr>
   <td>SSO Authentication
   </td>
   <td>String
   </td>
   <td>When the value is set to “update,” this parameter updates the overall configuration.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>SSO Protocol
   </td>
   <td>String
   </td>
   <td>This parameter indicates the SSO protocol for the configuration update.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>SAML Identity Provider
   </td>
   <td>String
   </td>
   <td>This parameter defines the SAML Identity provider the admin is using to update the SSO.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>Single SignOn URL
   </td>
   <td>String
   </td>
   <td>The SSO URL for the account.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>Issuer URL
   </td>
   <td>Date
   </td>
   <td>The URL of the SSO issuer.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>certificate
   </td>
   <td>String
   </td>
   <td>The SSO certificate.
<p>
<strong>Note</strong>:
<ul>

<li>This field is an array.</li>

<li>The Maximum number of values supported is two.</li>
</ul>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td>SAML Attribute Mapping
   </td>
   <td>Boolean
   </td>
   <td>If enabled (true), SAML attribute mapping is done based on the sync behavior.
   </td>
   <td>Optional. If the parameter is not defined in the request body, the default value is Disabled (False).
   </td>
  </tr>
  <tr>
   <td>Sync Behaviour
   </td>
   <td>String
   </td>
   <td>Includes one of the following values:
<ul>

<li><strong>Synchronize_UpdateExisting</strong>: Synchronize by updating the existing SSO configuration.</li>

<li><strong>AddNew_RetainExisting</strong>: Add a new SSO configuration by retaining the existing values.
</li>
</ul>
   </td>
   <td>Required if the <strong>SAMLAttributeMapping </strong>parameter is enabled.
   </td>
  </tr>
  <tr>
   <td>Attribute Mapping
   </td>
   <td>Array of Objects of <strong>String</strong> data type.
   </td>
   <td>This parameter supports an array of objects. Each object in the array has the mandatory parameters listed below:
<ul>

<li><strong>samlAttributeName</strong>: The SAML attribute name of String data type used for SSO.</li>

<li><strong>samlAttributeValue</strong>: The SAML attribute value of String data type used for SSO.</li>

<li><strong>attributeType</strong>: The SAML attribute type which is either <strong>Role</strong> or <strong>Group</strong> to which an attribute is mapped.</li>

<li><strong>koreAttribute</strong>: The<strong> Role ID</strong> or <strong>Group ID</strong> to which the SAML attribute should be mapped.</li>
</ul>
   </td>
   <td>Required
   </td>
  </tr>
</table>

### Sample Response

```js
{
   "method": "saml",
   "name": "john.doe@example.com_saml",
   "allusers": false,
   "ssoProvider": "okta",
   "modifiedDate": "2024-07-23T11:21:50.287Z",
   "modifiedBy": "u-9xxxxxx8-bxxb-5xx6-9xx0-0xxxxxxxxxxf",
   "config": {
       "cert": [
           "{cert ID}"
       ],
       "entryPoint": "https://trial-6xxxxx1.okta.com/app/trial-6xxxxx1_kore_1/exxxxxxxxxxxxxxxx697/sso/saml",
       "issuer": "https://www.okta.com/exxxxxxxxxxxxxxxxxx7"
   },
   "providername": "okta",
   "ACS_IDP_URL": "https://xxxxx.kore.ai/api/sso/login/callback?c=e-7dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx74&redirect_url=https%xxxxxxxxxx%xxxxxx.kore.ai%2xbotbuilder%2x%3Fquery%3x1",
   "ACS_SP_CallBack_URL": "https://ixxxxxy-dxv.kore.com/authorize/callback",
   "message": "SSO Configuration updated successfully"
}
```


