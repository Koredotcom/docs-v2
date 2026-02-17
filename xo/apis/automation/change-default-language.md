--8<-- "includes/automationai-api-back-link.md"

# Change the Default language API

This API allows you to update the default language for an app using the botId.

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
   <td><code>https://{{host}}/api/1.1/public/bot/{{botId}}/defaultLanguage</code>
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
See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token).
   </td>
  </tr>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td>
<ul>

<li>App Settings: Language Management

<li>Admin Console: Language Settings > Language Management
</li>
</ul>
   </td>
  </tr>
</table>

## Path Parameters


<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Required</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>host
   </td>
   <td>Yes
   </td>
   <td>The environment URL. For example, <code>https://platform.kore.ai</code>.
   </td>
  </tr>
  <tr>
   <td>botId
   </td>
   <td>Yes
   </td>
   <td>Bot ID or Stream ID. You can access it from the APP Settings page of the APP.
   </td>
  </tr>
</table>

## Sample Request

```
curl --location 'https://{{host}}/api/1.1/public/bot/st-5ac72231-5a37-5b71-bb1e-1be02ef0xxxx/defaultLanguage' \
--header 'Content-Type: application/json' \
--header 'auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNzLTc5NmQ0NTUwLWFmYTItNWRlZS1hZGFhLTQ4NjhkMzJjNmRmYiJ9.y64D-jY0HsktGBggW63hk4pPbMIfqxgUH0Z4X5oxxxx' \
--data '{
"Language": "en"
}'
```

## Body Parameters

<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Mandate</strong>
   </td>
  </tr>
  <tr>
   <td>languageCode
   </td>
   <td>The ISO Language code (for example, en-US for American English, es-ES for Spanish).
   </td>
   <td>required
   </td>
  </tr>
</table>

## Sample Response


### Success Response


```
{
  "status": "success",
  "message": "Default language has been updated successfully.",
  "language code": "en-US"
}
```


### Error Response

**Scenario 1**: If the request fails, because of the missing scope from the app.

```
{

"errors":[

{

  "message": "Permission denied. Scope is incorrect!",

 "code": 4002

 }

]

}
```

**Scenario 2**:  If the language is not even configured and the user tries to make that language the default


```
Error Message: 

Cannot set default language. The language '{{language code}}' is not currently configured.

Please configure the language and publish the app at least

Once before setting it as the default
```


**Scenario 3**: If the user tries to make the same language as default by mistake which is already a default language


```
Error Message: 

Permission denied. The language '{{language code}}' is already

set as the default language.
```


**Scenario 4**: If the user tries to change the default language which is “ disabled ”


```
Error Message: Unable to change the default language. The language

'{{language code}}' is currently disabled. Please enable the 

language before setting it as the default
```


**Scenario 5:**  If the user has never published the app for the new language after enabling it and tries to make that language the default


```
{

"status": "Error",

 "message": "Unable to set default language. Please perform a full publish of the app, including all content for {{language code}}, before setting it as the default language. Partial publishing is not sufficient for this operation"

}
```


**Scenario 6:** if the code itself is wrong in the body, for example, “Language“: “ eh“ ( instead of en)


```
Error message: Please provide the valid language code
```

!!! note

     * There is no rollback once the API execution is complete.
     * No publishing is required to display the default language in published mode.
     * Once the API is executed, the default language will be reflected immediately.




    




