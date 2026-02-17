--8<-- "includes/automationai-api-back-link.md"

# Execute a Test Suite API

To execute Conversation Test Suites and get results. This API only initiates the test process and returns the execution status and **_testRunId_** to track the execution status. Please look at the [Conversation Test Suite Execution Status API](batch-test-execution-status.md) for the results of the test.

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p>Testers can't run conversation test suites through the interface or API.</p>
</div>

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
   <td><code>https://{{host}}/api/public/stream/:streamId/conversation/testsuite/:testSuiteName/run</code>
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

<li>App Builder: Conversation Tests Execution

<li>Admin Console: Conversation Tests Execution
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
   <td>Environment URL. For example,<code>https://platform.kore.ai</code>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>StreamID</strong>
   </td>
   <td>The  <em>Stream ID</em> can be accessed under <strong>General Settings</strong> on the App Builder.
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
curl --location 
      'https://{{host}}/api/public/stream/:streamId/conversation/testsuite/:testSuiteName/run' \
      --header 'auth: {jwt-token}' \
      --header 'bot-language: {language-code}' \
      --header 'Content-Type: application/json' \
      --data-raw '{
         "version": "published", "userEmailId": "email-id-of-the-bot-owner-or-developer" 
         }'
```

## Body Parameters

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
   <td><strong>version</strong>
   </td>
   <td>The version of the bot against which the execution is required. The following options are available:
<ul>

<li><strong><em>published</em></strong> for the published version.

<li><strong><em>inDevelopment</em></strong> for the configured version.
</li>
</ul>
   </td>
   <td>Required
   </td>
  </tr>
   <tr>
   <td><strong>userEmailId</strong>
   </td>
   <td>	The email ID of the app owner or a developer with whom the app is shared. For example, “userEmailId”: “<i>john.doe@example.com</i>“</td>
   <td>Required   </td>
  </tr>
</table>

## Sample Response

```json
{
    "status": "IN_PROGRESS",
    "testRunId": "ctr-80xxxx9a-bxx1-58xx-axx7-d5xxxxxxxxxx"
}
```