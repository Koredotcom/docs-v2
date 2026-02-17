--8<-- "includes/automationai-api-back-link.md"

# Batch Test Execution API

To execute Batch Test Suites and get results. This API only initiates the test process. Please look at the [Batch Test Execution Status API](batch-test-execution-status.md) for the results of the batch test.


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
   <td><code>https://{{host}}/api/public/bot/{{BotID}}/testsuite/{testSuiteName}/run</code>
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

<li>App Builder: Batch Tests Execution

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
   </td>
   <td>Required
   </td>
  </tr>
</table>


## Sample Request


```json
curl --location --request POST \
      'https://{host}/api/public/stream/{streamId}/testsuite/{testSuiteName}/run' \
      --header 'auth: {jwt-token}' \
      --header 'bot-language: {language-code}' \
      --header 'Content-Type: application/json' \
      --data-raw '{
         "version":"inDevelopment",
         "engine":"dgpt"
         }'
```
!!! note

    * If [engine = "regression" (or) empty] or engine is not provided, it will execute for ML Batch Testing.

    * If engine is set to "dgpt", it will execute for Dialog GPT Batch Testing.

## Body Parameters


<table>
  <tr>
   <td>PARAMETER
   </td>
   <td>DESCRIPTION
   </td>
   <td><strong>MANDATE</strong>
   </td>
  </tr>
  <tr>
   <td><strong>version</strong>
   </td>
   <td>The version of the bot against which the execution is required
   <ul>
      <li>published for Published version</li>
      <li>inDevelopment for the Configured version</li>
   </ul>
   </td>
   <td>Required
   </td>
  </tr>
</table>

## Sample Response

```json
{
    "status": "accepted",
    "requestId": "tr-acfxxbff-xxxf-xaxx-bbbx-exxxabaxxcxx"
}
```
