--8<-- "includes/automationai-api-back-link.md"

# Get Admin Console Audit Logs API

To retrieve the audit logs from the Admin Console.

!!!note
    This feature was introduced in ver7.2 of the platform.


<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td><strong>Endpoint</strong>
   </td>
   <td><code>https://{{host}}/api/public/auditlogs?</code>
<p>
<code>size=50&offset=0&fromDate={{timestamp}}&toDate={{timestamp}}&fetchAfter={{AuditLogId}}</code>
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
See <a href="../api-introduction/#generating-the-jwt-token">How to generate the JWT Token.</a>
   </td>
  </tr>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td>
<ul>

<li>App Builder: Not Applicable

<li>Admin Console: Logs > Admin Console Audit Logs
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
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>host
   </td>
   <td>Environment URL, for example, https://platform.kore.ai
   </td>
  </tr>
  <tr>
   <td>size
   </td>
   <td>Number of records to be fetched up to a maximum of 100
   </td>
  </tr>
  <tr>
   <td>offset
   </td>
   <td>Specify the page number from which to start fetching the logs. If unspecified, it starts from 0, which is the first page of the list of logs
   </td>
  </tr>
  <tr>
   <td>fromDate
   </td>
   <td>Takes the date format yyyy-mm-dd
<p>
(or) yyyy-mm-ddThh:mm:ss.msZ
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
eg:2019-04-01 (or) 2019-04-01 T13:26:05.598Z
   </td>
  </tr>
  <tr>
   <td>fetchAfter
<p>
(optional)
   </td>
   <td>Audit Log Id from where you want to fetch the logs.
<p>
This is an unique incremental ID for each record created under audit logs and you can obtain it from looking at the previous audit log file.
   </td>
  </tr>
</table>


## Sample Request


```json
curl --location --request GET \
'https://{{host}}/api/public/auditlogs?size=50&offset=0&fromDate=2021-07-07T11:11:18.464Z&toDate=2021-06-30T11:11:18.469Z' \
--header 'auth: YOUR_JWT_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
```



## Sample Response

```json
{
  "total": 3,
  "auditlogs": [
    {
      "timestampValue": 1578157612745,
      "Date/Time": "2020-01-04T17:06:52.745Z",
      "Description": "User logged out at Sat Jan 04 2020 22:36:52 GMT+0530(India Standard Time) from 127.0.0.1 via web",
      "Name": "Logout",
      "Category": "Login/Logout",
      "AuditLogId": "5e10c62ce0e2f05f0548048"
    },
    {
      "timestampValue": 1578157612773,
      "Date/Time": "2020-01-04T17:06:52.773Z",
      "Description": "User logged out at Sat Jan 04 2020 22:36:52 GMT+0530(India Standard Time) from 127.0.0.1 via web",
      "Name": "Logout",
      "Category": "Login/Logout",
      "AuditLogId": "5e10c62ce0e2f05f0548048"
    },
    {
      "timestampValue": 1578292105981,
      "Date/Time": "2020-01-06T06:28:25.981Z",
      "Description": "New app admin created",
      "Name": "App creation - Success",
      "Category": "Login/Logout",
      "AuditLogId": "5e10c62ce0e2f05f0548048"
    }
  ],
  "moreAvailable": false
}
```
