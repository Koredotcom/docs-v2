--8<-- "includes/automationai-api-back-link.md"

# Extraction from file or URL – KG

To extract the Knowledge Graph from the imported file or URL.


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
   <td><code>https://{{host}}/api/public/bot/{{botId}}/qna/import?language=en</code>
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
   <td><code>auth: {{YOUR_JWT_ACCESS_TOKEN}}</code>
<p>
See <a href="../api-introduction/#generating-the-jwt-token">How to generate the JWT Token</a>.
   </td>
  </tr>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td>
<ul>

<li>App Builder: Manage Knowledge Graph

<li>Admin Console: Manage Knowledge Graph
</li>
</ul>
   </td>
  </tr>
</table>

## Path Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>REQUIRED</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>host
   </td>
   <td>Required
   </td>
   <td>The environment URL. For example, <code>https://platform.kore.ai</code>
   </td>
  </tr>
  <tr>
   <td>BotId
   </td>
   <td>Required
   </td>
   <td><em>Bot ID</em> or <em>Stream ID</em> can be accessed under <strong>General Settings</strong> on the App Builder.
   </td>
  </tr>
</table>

## Query Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>REQUIRED</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>language
   </td>
   <td>Required
   </td>
   <td>The Bot language which is identified by the language acronym. For example, <em>en</em> for English and <em>de</em> for German. The user can set the default language of the bot.
   </td>
  </tr>
</table>

## Sample Request (Extraction using URL)


```json
curl --location 'https://platform.kore.ai/api/public/bot/st-2be3c498-d718-5160-853c-0166b82bc41c/qna/import?language=en' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
--header 'content-type: application/json' \
--data '{
    "fileUrl":"https://www.ibank.com/nri-banking/money_transfer/faq/m2i-rewards-program/loyalty-program.page%22, 
    "name":"Test"

 }'
```

## Sample Request (Extraction using File)

```json
curl --location 'https://platform.kore.ai/api/public/bot/st-2be3c498-d718-5160-853c-0166b82bc41c/qna/import?language=en' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
--header 'content-type: application/json' \
--header 'Cookie: AWSALB=ywKTJVAcCplRMGaJXRvhZ4gUvOCrfYhOjeqvdYirqAyRQyP9WpTDeNwZI1tDwgoP/CiA6G6j2DxXGWIbCEWdjaiq1ehA2Xo/YxwOBDi02Ix9cbcGYum8P1bxBSq1; AWSALBCORS=ywKTJVAcCplRMGaJXRvhZ4gUvOCrfYhOjeqvdYirqAyRQyP9WpTDeNwZI1tDwgoP/CiA6G6j2DxXGWIbCEWdjaiq1ehA2Xo/YxwOBDi02Ix9cbcGYum8P1bxBSq1' \
--data '{
    "fileId":"64c0facd1913a83c147847ca",
    "name": "Test2"
}'
```

## Body Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>REQUIRED</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>fileUrl
   </td>
   <td>Required
   </td>
   <td>The URL pointing to the location of the FAQs to be extracted.
   </td>
  </tr>
  <tr>
   <td>fileId
   </td>
   <td>Required
   </td>
   <td>The <em>File id</em> pointing to the FAQ file’s location.
   </td>
  </tr>
  <tr>
   <td>name
   </td>
   <td>Required
   </td>
   <td>The name provided to the FAQ.
   </td>
  </tr>
</table>

## Sample Response

```json
{ 
      "_id": <extractionId>, 
      "status": "success"
}
```