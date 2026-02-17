--8<-- "includes/automationai-api-back-link.md"

# Export Batch Test Suite API

To export the test cases of a given Batch Test Suite and get a link to download the file once the export is completed. This API supports exporting test cases created through file upload. It doesn’t support exporting test data added manually to the batch test suite.

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
   <td><code>https://{host}/api/public/bot/{botId}/testsuite/{testSuiteName}/export</code>
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
   <td>The <em>Bot ID</em> or <em>Stream ID</em> can be accessed under <strong>General Settings</strong> on the App Builder.
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>testSuiteName</strong>
   </td>
   <td>The name of the test suite created on the App Builder for the export.
<p><strong>Note:</strong> Only Custom Batch Test Suites can be exported.
   </td>
   <td>Required
   </td>
  </tr>
</table>


## Sample Request


```json
curl -X POST \
  https://{host}/api/public/bot/{botId}/testsuite/{testSuiteName}/export \
  -H 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
  -H 'bot-language: {language-code}' \
```

## Body Parameters

No body parameters are passed.

## Sample Response

```json
{
    "downloadUrl": {{downloadURL}},
    "name": "Batch Test Name",
    "description": "Batch Test Description"
}
```
