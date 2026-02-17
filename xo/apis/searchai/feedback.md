--8<-- "includes/searchai-api-back-link.md"

# Feedback API

This API is used to capture user feedback and store it within Search AI, where it is displayed as part of the Answer Analytics.


<table>
  <tr>
   <td>Method
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td>Endpoint
   </td>
   <td>https://{{host}}/api/public/bot/&lt;AppId>/search/feedback
   </td>
  </tr>
  <tr>
   <td>Content-Type
   </td>
   <td>application/json
   </td>
  </tr>
  <tr>
   <td>Authorization
   </td>
   <td>auth: &lt;JWT Token>
   </td>
  </tr>
  <tr>
   <td>API Scope
   </td>
   <td>Feedback for Search AI
   </td>
  </tr>
</table>



## **Query Parameters**


<table>
  <tr>
   <td>Parameters
   </td>
   <td>Description
   </td>
   <td>Mandatory
   </td>
  </tr>
  <tr>
   <td>AppID
   </td>
   <td>Provide your application ID here. To view your App ID, go to the <strong>Dev Tools </strong>under <strong>App Settings. </strong>You can view the AppID under the API scopes.
   </td>
   <td>Yes
   </td>
  </tr>
</table>



## **Request Parameters**


<table>
  <tr>
   <td>Parameters
   </td>
   <td>Description
   </td>
   <td>Mandatory
   </td>
  </tr>
  <tr>
   <td>searchRequestId
   </td>
   <td>This is the search request ID sent along with the answer in response to a search query. Search request ID starts with fsh, for example “<code>fsh-a7dd595f-xxxx-xxxx-9b1c-7635d6ea113c</code>
<p>
“.
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>feedbackLevel
   </td>
   <td>Currently, this field can take the following value only. 
<ul>

<li>smartAnswer</li>
</ul>
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>event
   </td>
   <td>This field is used to pass the feedback response. 
<ul>

<li><code>thumbsDown - Negative Response</code></li>

<li><code>thumbsUp - Positive response</code></li>
</ul>
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>comments
   </td>
   <td>This field can be used to pass user comments to the application along with the feedback. Use the “tags” field to pass an array of strings as comments to the API. The string values in the tags array are displayed in the Answer Insights details page. Refer to the sample curl below for reference. 
   </td>
   <td>No
   </td>
  </tr>
</table>



## Sample Curl


```json
curl --location 'https://env.domain.com/api/public/bot/st-66c4xxxx-6eae-5ada-b0f8-a2022e945a10/search/feedback' \
--header 'auth: eyJhbGciOiJaxxxxxxx_abcd' \
--header 'Content-Type: application/json' \
--data '{
    "searchRequestId": "fsh-a7dd595f-7ba2-59c2-9b1c-7635d6ea113c",
    "feedbackLevel": "smartAnswer",
    "event": "thumbsDown",
    "comments": {
        "tags":[
  "Incorrect Answer",
  "Incorrect Citation",
  "Incorrect Formatting",
  "Ambiguous",
  "Missing details",
  "Hallucination",
  "Out of Date"
]
    }
}'
```

