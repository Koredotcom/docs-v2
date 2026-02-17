--8<-- "includes/automationai-api-back-link.md"

# Billing Usage Summary API

This API provides a summary of the billing usage specific to an account or bot for a given period.

Billing sessions are tracked at the individual app or bot level. In dynamic routing scenarios, the Parent app functions as a standalone app with its own billing sessions. When the Parent app routes a user query to a linked app, that billing session is attributed to the linked app, not the Parent app.

When you select the Parent app in the Admin Console or pass its ID via the API, the system returns only the Parent app's direct sessions; it doesn't include sessions routed from the Parent app to linked apps.


<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td>POST and GET
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td>POST
<p>
For Dialog Builder: <code>https://{{host}}/api/public/bot/{{BotID}}/billingsessionsummary</code>
<p>
For BAC: <code><a href="https://{{host}}/api/public/billingsessionsummary">https://{{host}}/api/public/billingsessionsummary</a>  

</code><strong>Important</strong>: First, use the POST method to set filters, then use the following GET method to retrieve the billing session summary.

GET 
For Dialog Builder: <code>https://{{host}}/api/public/bot/{{BotID}}/billingsessionsummary/status?type=summary 

</code>For BAC: <code>https://{{host}}/api/public/billingsessionsummary/status?type=summary</code>
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

<li>Admin Console:  Billing >Usage> Billing Sessions</li>
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



## Sample Request


### Sample POST Method Request for the App Builder API Scope


```
curl --location 'https://{{HOST}}/api/public/bot/{{botId}}/billingsessionsummary'\
--header 'auth: {{Auth Token}}' \
--header 'content-type: application/json' \
--data-raw '{
"fromDate": "2023-04-07T10:10:54.680Z",
"toDate": "2023-04-09T10:10:54.680Z",
"unitType": ["request","session","alert","proactive","conversations"],
"groupByBot": "no",
"groupByPeriod": "date_day_hour"
},
```

!!!note 
       
    Use the POST method to set filters, then use the following GET method to retrieve the billing session summary.


### Sample GET Method Request for the App Builder API Scope


```
curl --location 'https://{{HOST}}/api/public/bot/{{botId}}/billingsessionsummary/status?type=summary'\
--header 'auth: {{Auth Token}}' \
--header 'content-type: application/json'
```

### Sample POST Method Request for the Admin API (BAC) scope


```
curl --location 'https://{{HOST}}/api/public/bots/billingsessionsummary' \
--header 'auth: {{Auth Token}}' \
--header 'content-type: application/json' \
--data-raw '{
"fromDate": "2022-09-01T07:18:54.089Z",
"toDate": "2022-09-07T23:30:25.931Z",
"unitType": ["session","request","alert","proactive", "conversations"],
"groupByBot": "yes",
"streamIds": ["st-13d7a88d-83cb-52bb-b847-ed32cxxxxxxx"],
"groupByPeriod": "date_month"
},
```



### Sample GET Method Request for the BAC API Scope


```
curl --location 'https://{{HOST}}/api/public/bots/billingsessionsummary/status?type=summary'\
--header 'auth: {{Auth Token}}' \
--header 'content-type: application/json'
```


## Body Parameters for the POST Request


<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Required/Optional</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>fromDate
   </td>
   <td>date, required
   </td>
   <td>Accepts the date in yyyy-mm-dd format (or) yyyy-mm-ddThh:mm:ss.msZ
<p>
Eg: 2019-04-01 (or) 2019-04-01T13:25:58.515ZDefault: no
<p>
Max: 90 days
   </td>
  </tr>
  <tr>
   <td>toDate
   </td>
   <td>date, required
   </td>
   <td>Accepts the date in yyyy-mm-dd format
<p>
(or) yyyy-mm-ddThh:mm:ss.msZ
<p>
Eg: 2019-04-01 (or) 2019-04-01T13:25:58.515ZDefault: no
<p>
Max: 90 days
   </td>
  </tr>
  <tr>
   <td>unitType
   </td>
   <td>string, required
   </td>
   <td>The unit type of the billing session.
<p>
Possible values:
<ul>

<li>session – the conversation session</li>

<li>request – the request that is sent to the bot</li>

<li>alert – the alert notifications sent by the bot to users.</li>

<li>proactive -the proactive notifications sent by the bot to the users.</li>

<li>conversations – the conversations between the bot and a user.</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>groupByApp
   </td>
   <td>string, required
<ul>

<li>Yes – If you want to use BAC scope with stream ID.</li>

<li>No – If you want to use Dialog Builder scope without stream ID.</li>
</ul>
   </td>
   <td>The parameter to group the billing sessions by Apps
   </td>
  </tr>
  <tr>
   <td>groupByPeriod
   </td>
   <td>string, required
   </td>
   <td>The parameter to retrieve the conversation sessions data on a <em>Monthly</em>, <em>Daily, </em>and <em>Hourly </em>basis.
<p>
Possible values: 
<ul>

<li>date_day_hour </li>

<li>date_day</li>

<li>date_month</li>
</ul>
   </td>
  </tr>
</table>



## Sample Response

### Sample POST Method Response (BAC API Scope)


```
{
    "reportId": "121242",
    "status": "IN_PROGRESS",
    "percentageComplete": 0,
    "orgId": "o-d54e1923-94e5-5b33-b248-xxxxxxxx",
    "createdBy": "u-093524cf-9df9-5371-b28b-xxxxxxxxx",
    "jobType": "BILLINGSESSIONS_API",
    "action": "QUERY",
    "statusLogs": [],
    "_id": "ds-d7d23763-b876-5219-b93e-6398ea4cb1ec",
    "lMod": "2023-04-27T06:19:11.000Z",
    "createdOn": "2023-04-27T06:19:11.034Z",
    "__v": 0
}
```

### Sample GET Method Responses

**Monthly Billing Session Summary**


```
{
"_id": "ds-df7dbe18-9028-59db-8d12-cda96xxxxxx",
"status": "success",
"__v": 0,
"lastModifiedBy": "u-5c86a357-0346-5646-b143-007f6xxxxxx",
"modifiedOn": "2023-04-24T09:46:37.668Z",
"response": {
"data": [
{
"bot": "ALL",
"val": [
{
"date": "2023-04-01T00:00:00.000Z",
"val": {
"requests": 0,
"sessions": 0,
"alert_notifications": 57,
"proactive_notifications": 10,
"conversations": 3
}
}
]
}
],
"averageSessions": 70
}
}
```

**Daily Billing Session Summary**

```
{
"_id": "ds-45b9f531-ac8b-5103-9a36-7960c3xxxxxxx",
"status": "success",
"__v": 0,
"lastModifiedBy": "u-5c86a357-0346-5646-b143-007f6xxxxxxx",
"modifiedOn": "2023-04-24T09:48:30.778Z",
"response": {
"data": [
{
"bot": "ALL",
"val": [
{
"date": "2023-04-07T00:00:00.000Z",
"val": {
"requests": 0,
"sessions": 0,
"alert_notifications": 0,
"proactive_notifications": 0,
"conversations": 0
}
},
{
"date": "2023-04-08T00:00:00.000Z",
"val": {
"requests": 0,
"sessions": 0,
"alert_notifications": 33,
"proactive_notifications": 10,
"conversations": 3
}
},
{
"date": "2023-04-09T00:00:00.000Z",
"val": {
"requests": 0,
"sessions": 0,
"alert_notifications": 24,
"proactive_notifications": 0,
"conversations": 0
}
}
]
}
],
"averageSessions": 35
}
}
```

**Hourly Billing Session Summary**

```
{
"_id": "ds-477c077e-605a-5253-8a66-a4678dxxxxx",
"status": "success",
"__v": 0,
"lastModifiedBy": "u-5c86a357-0346-5646-b143-007f6xxxxxx",
"modifiedOn": "2023-04-24T09:49:09.861Z",
"response": {
"data": 
{
"bot": "ALL",
"val": 
{
"date": "2023-04-07T10:00:00.000Z",
"val": {
"requests": 0,
"sessions": 0,
"alert_notifications": 0,
"proactive_notifications": 0,
"conversations": 0
}
},
},
},
{
"date": "2023-04-08T10:00:00.000Z",
"val": {
"requests": 0,
"sessions": 0,
"alert_notifications": 2,
"proactive_notifications": 0,
"conversations": 0
}
},
{
"date": "2023-04-08T15:00:00.000Z",
"val": {
"requests": 0,
"sessions": 0,
"alert_notifications": 2,
"proactive_notifications": 0,
"conversations": 0
}
},
{
"date": "2023-04-08T16:00:00.000Z",
"val": {
"requests": 0,
"sessions": 0,
"alert_notifications": 4,
"proactive_notifications": 0,
"conversations": 0
}
},

{
"date": "2023-04-09T00:00:00.000Z",
"val": {
"requests": 0,
"sessions": 0,
"alert_notifications": 2,
"proactive_notifications": 0,
"conversations": 0
}
},
{
"date": "2023-04-09T01:00:00.000Z",
"val": {
"requests": 0,
"sessions": 0,
"alert_notifications": 4,
"proactive_notifications": 0,
"conversations": 0
}
},
},
,
{
"date": "2023-04-09T05:00:00.000Z",
"val": {
"requests": 0,
"sessions": 0,
"alert_notifications": 2,
"proactive_notifications": 0,
"conversations": 0
}
},
{
"date": "2023-04-09T06:00:00.000Z",
"val": {
"requests": 0,
"sessions": 0,
"alert_notifications": 2,
"proactive_notifications": 0,
"conversations": 0
}
},
{
"date": "2023-04-09T07:00:00.000Z",
"val": {
"requests": 0,
"sessions": 0,
"alert_notifications": 2,
"proactive_notifications": 0,
"conversations": 0
}
},
{
"date": "2023-04-09T08:00:00.000Z",
"val": {
"requests": 0,
"sessions": 0,
"alert_notifications": 4,
"proactive_notifications": 0,
"conversations": 0
"averageSessions": 2
}
}
```