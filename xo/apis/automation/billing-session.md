--8<-- "includes/automationai-api-back-link.md"

# Billing Sessions API

This API retrieves the list of individual billing sessions created for an app so that you can review them for correctness and reconciliation.

Billing sessions are tracked at the individual app or bot level. In dynamic routing scenarios, the Parent app functions as a standalone app with its own billing sessions. When the Parent app routes a user query to a linked app, that billing session is attributed to the linked app, not the Parent app.

When you select the Parent app in the Admin Console or pass its ID via the API, the system returns only the Parent app's direct sessions; it doesn't include sessions routed from the Parent app to linked apps.


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
   <td>For Dialog Builder: 
<p>
<code>https://{{host}}/api/public/bot/{{BotID}}/getBillingSessionsDetails</code>
<p>
For Admin Console: <code>https://{{host}}/api/public/bots/getBillingSessionsDetails</code>
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

<li>Dialog Builder: Billing Sessions</li>

<li>Admin Console: Billing >Usage> Billing Sessions</li>
</ul>
   </td>
  </tr>
</table>

## Query Parameters

<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>host
   </td>
   <td>Environment URL, for example, https://platform.kore.ai
   </td>
  </tr>
  <tr>
   <td>BotID
<p>
(when using with Dialog Builder scope)
   </td>
   <td>Bot ID or Stream ID. You can access it from the App Settings page.
   </td>
  </tr>
</table>

## Body Parameters

<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>fromDate
   </td>
   <td>Takes the date format yyyy-mm-dd
<p>
(or) yyyy-mm-ddThh:mm: ss.msZ
<p>
eg:2019-04-01 (or) 2019-04-01T13:25:58.515Z
   </td>
  </tr>
  <tr>
   <td>toDate
   </td>
   <td>Takes the date format yyyy-mm-dd
<p>
(or) yyyy-mm-ddThh:mm:ss.msZ
<p>
eg:2019-04-01 (or) 2019-04-01T13:25:58.515Z
<p>
A maximum of three months date period is allowed
   </td>
  </tr>
  <tr>
   <td>limit (optional)
   </td>
   <td>Number of records to be shown in the response
   </td>
  </tr>
  <tr>
   <td>skip (optional)
   </td>
   <td>Number of records to be skipped
   </td>
  </tr>
  <tr>
   <td>channel (optional)
   </td>
   <td>The channel code.
   </td>
  </tr>
  <tr>
   <td>botId (optional when using Admin scope)
   </td>
   <td>Bot ID or Stream ID. You can access it from the App Settings page of the app.
   </td>
  </tr>
</table>

## Sample Request

* For Dialog Builder API scope

```
`curl --location --request POST 'https://{{HOST}}/api/public/bot/{{botId}}/getBillingSessionsDetails' \`
--header 'auth: {{Auth Token}}' \
--header 'content-type: application/json' \
--data-raw '{
    "fromDate": "2021-02-21",
    "toDate": "2021-07-22",
    "limit": 100,
    "skip": 0
}'

```

* For Admin API scope

```
`curl --location --request POST 'https://{{HOST}}/api/public/bots/getBillingSessionsDetails' \`
--header 'auth: {{Auth Token}}' \
--header 'content-type: application/json' \
--data-raw '{
    "fromDate": "2021-03-21",
    "toDate": "2021-07-22",
    "limit": 100,
    "skip": 0
}'

```

## Sample Response


```

{
  "total":5,
  "moreAvailable": true,
  "sessions":
   [
    {
       "botId": "st-cXaaXXXe-ddXd-XXXX-XbeX-XXXXXcXdXbcX",
       "channel": "IVR",
       "koreUserId": "u-eXXXXXXX-bXfX-XXXc-XXXb-XfXaaXXXXXXX",
       "channelUserId": "XfXXXXXfXXdXcXXXfeXXXdX/ivrvoice/00000152",
       "billingSessionType": "Conversations",
       "conversationSessionId": "XXXXXXbXbXeXXbXcXXfXaXXX",
       "conversationSessionStartDateTime": "03-10-2021 2:05:03 pm",
       "conversationSessionEndDateTime": "03-10-2021 2:05:30 pm",
       "billingSessionId": "XXXXXXbXXXcXXXXcXdXXXXXf",
       "billingSessionStartDateTime": "03-10-2021 2:05:03 pm",
       "billingSessionEndDateTime": "03-10-2021 2:05:30 pm"
   },
   {
       "botId": "st-cXaaXXXe-ddXd-XXXX-XbeX-XXXXXcXdXbcX",
       "channel": "IVR",
       "koreUserId": "u-eXXXXXXX-bXfX-XXXc-XXXb-XfXaaXXXXXXX",
       "channelUserId": "XfXXXXXfXXdXcXXXfeXXXdX/ivrvoice/00000152",
       "billingSessionType": "Conversations",
       "conversationSessionId": "XXXXXXbXbXeXXbXcXXfXaXXX",
       "conversationSessionStartDateTime": "03-10-2021 2:09:02 pm",
       "conversationSessionEndDateTime": "03-10-2021 2:10:17 pm",
       "billingSessionId": "XXXXXXbXXXcXXXXcXdXXXXXf",
       "billingSessionStartDateTime": "03-10-2021 2:09:02 pm",
       "billingSessionEndDateTime": "03-10-2021 2:10:17 pm"
   },
{
       "botId": "st-cXaaXXXe-ddXd-XXXX-XbeX-XXXXXcXdXbcX",
       "channel": "IVR",
       "koreUserId": "u-eXXXXXXX-bXfX-XXXc-XXXb-XfXaaXXXXXXX",
       "channelUserId": "XfXXXXXfXXdXcXXXfeXXXdX/ivrvoice/00000152",
       "billingSessionType": "Conversations",
       "conversationSessionId": "XXXXXXbXbXeXXbXcXXfXaXXX",
       "conversationSessionStartDateTime": "03-10-2021 2:05:03 pm",
       "conversationSessionEndDateTime": "03-10-2021 2:05:30 pm",
       "billingSessionId": "XXXXXXbXXXcXXXXcXdXXXXXf",
       "billingSessionStartDateTime": "03-10-2021 2:05:03 pm",
       "billingSessionEndDateTime": "03-10-2021 2:05:30 pm"
   },
  {
       "botId": "st-cXaaXXXe-ddXd-XXXX-XbeX-XXXXXcXdXbcX",
       "channel": "IVR",
       "koreUserId": "u-eXXXXXXX-bXfX-XXXc-XXXb-XfXaaXXXXXXX",
       "channelUserId": "XfXXXXXfXXdXcXXXfeXXXdX/ivrvoice/00000152",
       "billingSessionType": "Conversations",
       "conversationSessionId": "XXXXXXbXbXeXXbXcXXfXaXXX",
       "conversationSessionStartDateTime": "03-10-2021 2:05:03 pm",
       "conversationSessionEndDateTime": "03-10-2021 2:05:30 pm",
       "billingSessionId": "XXXXXXbXXXcXXXXcXdXXXXXf",
       "billingSessionStartDateTime": "03-10-2021 2:05:03 pm",
       "billingSessionEndDateTime": "03-10-2021 2:05:30 pm"
   },
  {
       "botId": "st-cXaaXXXe-ddXd-XXXX-XbeX-XXXXXcXdXbcX",
       "channel": "IVR",
       "koreUserId": "u-eXXXXXXX-bXfX-XXXc-XXXb-XfXaaXXXXXXX",
       "channelUserId": "XfXXXXXfXXdXcXXXfeXXXdX/ivrvoice/00000152",
       "billingSessionType": "Conversations",
       "conversationSessionId": "XXXXXXbXbXeXXbXcXXfXaXXX",
       "conversationSessionStartDateTime": "03-10-2021 2:05:03 pm",
       "conversationSessionEndDateTime": "03-10-2021 2:05:30 pm",
       "billingSessionId": "XXXXXXbXXXcXXXXcXdXXXXXf",
       "billingSessionStartDateTime": "03-10-2021 2:05:03 pm",
       "billingSessionEndDateTime": "03-10-2021 2:05:30 pm"
   }
] }

```