--8<-- "includes/automationai-api-back-link.md"

# User Engagement Trend API

To provide the number of users who have interacted with the bot in a given period across different time intervals.


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
   <td><code>https://{{host}}/api/public/bot/{{BotID}}/userEngagementTrend?aggregation_type={{type}}&start_date={{from}}&end_date={{to}}&channels={{channel}}</code>
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

<li>App Builder: User Engagement Trend

<li>Admin Console: Not Applicable
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
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>host
   </td>
   <td>Required
   </td>
   <td>Environment URL, for example, https://platform.kore.ai
   </td>
  </tr>
  <tr>
   <td>BotID
   </td>
   <td>Required
   </td>
   <td>Bot ID or Stream ID. You can access it from the General Settings page of the bot.
   </td>
  </tr>
</table>


 


## Sample Request


```json
curl -X POST \
  'https://{{host}}/api/public/bot/{{bot_id}}/userEngagementTrend?aggregation_type=Hourly&start_date=2020-09-01&end_date=2020-09-05&channels=rtm '\
  -H 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
  -H 'content-type: application/json'
```


 


## Body Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
   <td><strong>TYPE</strong>
   </td>   
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>filters
   </td>
   <td>Required
   </td>
   <td>
   </td>   
   <td>Object with the following details to filter the result set
   </td>
  </tr>
  <tr>
   <td>start_date
   </td>
   <td>Required
   </td>
   <td>Date
   </td>   
   <td>Refers to the start time of the period to be considered.
   </td>
  </tr>
  <tr>
   <td>end_date
   </td>
   <td>Required
   </td>
   <td>Date
   </td>    
   <td>Refers to the end time of the period to be considered.
   </td>
  </tr>
  <tr>
   <td>channel
   </td>
   <td>Optional
   </td>
   <td>String
   </td>    
   <td>Refers to the channel from which the interactions have happened.
   </td>
  </tr>
  <tr>
   <td>aggregation_type
   </td>
   <td>Optional
   </td>
   <td>String
   </td>    
   <td>Refers to the type of aggregation to be allowed, possible values are:
<ul>

<li>Hourly (Default)

<li>Daily
</li>
</ul>
   </td>
  </tr>
</table>

## Sample Response



* **when aggregation_type = Daily**

    ```json
    {
      results:[
         { date: "MMM DD YYYY",
           users: "number of users"
          },
         { date: "MMM DD YYYY",
           users: "number of users"
          }
         ],
      totalResults: 2
    }
    ```


* **when aggregation_type = Hourly or empty or not given**

```json
    {
     [
       results:{
           date:"Aug 06 2020",
           "0 - 1": 20,
           "1 - 2": 0,
           "2 - 3": 0,
           "3 - 4": 10,
           "4 - 5": 0,
           ..
           "23 - 0": 0
         },
             {
           date:"Aug 07 2020",
           "0 - 1": 20,
           "1 - 2": 0,
           ..
           "21 - 22": 0,
           "22 - 23": 0,
           "23 - 0": 0
       }],
      totalResults: 2
    }
```
