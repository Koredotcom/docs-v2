--8<-- "includes/automationai-api-back-link.md"

# Delete a Test Suite API

To delete an existing conversation test suite.

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
   <td><code>https://{{host}}/api/public/stream/:streamId/conversation/testsuite</code>
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
See <a href="">How to generate the JWT Token</a>.
   </td>
  </tr>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td>
<ul>

<li>App Builder: Conversation Tests Management

<li>Admin Console: Conversation Tests Management
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
   <td>The <em>Stream ID</em> can be accessed under <strong>General Settings</strong> on the App Builder.
   </td>
   <td>Required
   </td>
  </tr>
</table>



## Sample Request


```json
curl --location --request DELETE \
      'https://{{host}}/api/public/stream/:streamId/conversation/testsuite' \
      --header 'auth: {jwt-token}' \
      --header 'bot-language: {language-code}' \
      --header 'Content-Type: application/json' \
      --data-raw '{
         "testSuiteNames" : ["newtestcaseconvtest"] 
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
   <td><strong>testSuiteNames</strong>
   </td>
   <td>Array containing test suite names.
   </td>
   <td>Required
   </td>
  </tr>
</table>



## Sample Response


```json
{
    "status": "Success"
}
```