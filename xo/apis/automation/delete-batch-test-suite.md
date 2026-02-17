--8<-- "includes/automationai-api-back-link.md"

# Delete Batch Test Suite API

To delete a Batch Test Suite.


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
   <td><code>https://{host}/api/public/bot/{botId}/testsuite/{testSuiteName}</code>
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

<li>App Builder: Batch Tests Management

<li>Admin Console: Batch Tests Management
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
   <td><em>Bot ID</em> or <em>Stream ID</em> can be accessed under <strong>General Settings</strong> on the App Builder.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>testSuiteName</strong>
   </td>
   <td>Name of the test suite on the App Builder.
<p>
<strong>Note</strong>: Only Custom Batch Test Suites can be deleted.
   </td>
   <td>Required
   </td>
  </tr>
</table>

## Sample Request

```json
curl --location --request DELETE \
     'https://{host}/api/public/stream/{streamId}/testsuite/{testSuiteName}' \
       --header 'auth: {YOUR_JWT_ACCESS_TOKEN}' \
       --header 'bot-language: {language-code}'
```

## Body Parameters

No Body parameters are passed.

## Sample Response

```json
{
    "message": "Test Suite removed successfully"
}
```