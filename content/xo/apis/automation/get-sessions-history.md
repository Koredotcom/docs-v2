--8<-- "includes/automationai-api-back-link.md"

# Sessions History API

This API retrieves the conversation sessions created. It returns information such as session metadata, user and bot identifiers, session duration, language, status, and other relevant metrics.


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
   <td><code>https://{{host}}/api/public/bot/{{BotID}}/getSessions?containmentType={{containmentType}}</code>
<br>
and <code>https://{{host}}/api/public/getSessions?containmentType={{containmentType}}</code>for BAC
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
<br>
See <a href="../api-introduction/#generating-the-jwt-token">How to generate the JWT Token.</a>
   </td>
  </tr>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td>
<ul>

<li>App Builder: Bot Sessions

<li>ORAdmin Console: Bot Analytics > Bot Sessions
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
   <td>BotID
   </td>
   <td>Bot ID or Stream ID. You can access it from the General Settings page of the bot.
   </td>
  </tr>
  <tr>
   <td>containmentType
   </td>
   <td>Use to filter the results based on the type of the session, that is, Self-service vs. Drop-off vs. Agent Transfer
Valid values:
<ul>

<li>dropOff,

<li>selfService,

<li>agent.
</li>
</ul>
   </td>
  </tr>
</table>



## Sample Request

**Without a body**

```json
curl --location --request POST 'https://{{host}}/api/public/getSessions?containmentType={{containmentType}}' \
     --header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
     --header 'Content-Type: application/json' \
     --data-raw
```

**With a body**
```json
curl --location --request POST 'https://{{host}}/api/public/getSessions?containmentType={{containmentType}}' \
     --header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
     --header 'Content-Type: application/json' \
     --data-raw '{
        "skip" : 0,                          
        "limit" : 100,                      
        "dateFrom" : "2020-02-11",
        "dateTo" : "2020-02-12"
     }
```

**For a specific bot**
```json
curl --location --request POST 'https://{{host}}/api/public/bot/{{BotId}}/getSessions?containmentType={{containmentType}}' \
     --header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
     --header 'Content-Type: application/json' \
     --data-raw '{
        "skip" : 0,                          
        "limit" : 100,                      
        "dateFrom" : "2020-02-11",
        "dateTo" : "2020-02-12"
     }
```

**For specific session Ids**
```json
curl --location --request POST 'https://{{host}}/api/public/bot/{{BotId}}/getSessions' \
     --header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
     --header 'Content-Type: application/json' \
     --data-raw '{
        "sessionId": ["6465cf6e4769ed4e822bxxxx","6465cf6e47Q9ed4e822bxxxx"]
     }
```

**For specific external call Ids**

These external call Ids are provided by the 3rd party agent desktops we have integrated with and are distinct from the actual call IDs

```
curl --location POST 'https://{{host}}/api/public/bot/{{BotId}}/getSessions?callId={{callId}}' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
--header 'Content-Type: application/json' \
--data '{
    "skip": 0,
    "limit": 100,
    "dateFrom": "2025-03-17",
    "dateTo": "2025-03-19"
}'
```

## Request Body Parameters


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
   <td>userId
   </td>
   <td>Optional
   </td>
   <td>String
   </td>      
   <td>The ID of the user whose conversation history to access. Can be a user email id or enterprise assigned unique id.
   </td>
  </tr>
  <tr>
   <td>skip/offset
   </td>
   <td>Optional
   </td>
   <td>Number
   </td>      
   <td>The number of messages to be skipped.
   </td>
  </tr>
  <tr>
   <td>limit
   </td>
   <td>Optional
   </td>
   <td>Number
   </td>      
   <td>The number of messages to be shown on each page.
<br>
The latest sessions are returned first; the sessions are returned in descending order of start time.
   </td>
  </tr>
  <tr>
   <td>dateFrom
   </td>
   <td>Optional
   </td>
   <td>Date
   </td>      
   <td>Takes the date format yyyy-mm-dd
<br>
(or) yyyy-mm-ddThh:mm:ss.msZ
<br>
For example, 2019-04-01 (or) 2019-04-01T13:25:58.515Z. If not provided, calculated as 7 days behind <em>dataTo</em>.
   </td>
  </tr>
  <tr>
   <td>dateTo
   </td>
   <td>Optional
   </td>
   <td>Date
   </td>    
   <td>Takes the date format yyyy-mm-dd
<br>
(or) yyyy-mm-ddThh:mm:ss.msZ
<br>
For example, 2019-04-01 (or) 2019-04-01 T13:26:05.598Z. If not provided, calculated as 7 days from <em>dateFrom</em>. If <em>dateFrom</em> is also not provided then set to <strong>Today</strong>.
<ul>

<li>The <strong>dateTo</strong> or <strong>dateFrom</strong> parameter accepts the YYYY-MM-DD date format. The time format is considered as a GMT zone in the API endpoint via Sessions API.

<li>When retrieving the data from the bot <strong>builder > dashboard</strong>, the local time zone (IST) is used; the time is converted from GMT to IST format, and then the data is retrieved.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>tags
   </td>
   <td>Optional
   </td>
   <td>Object
   </td>    
   <td>Meta tags to filter the conversations.
   </td>
  </tr>
  <tr>
   <td>sessionType
   </td>
   <td>Optional
   </td>
   <td>String
   </td>    
<br>
   </td>
   <td>Type to filter the conversations – can be:
<ul>

<li>non-interactive – sessions that have bot messages presented without any message from the user

<li>interactive – sessions that include one or more messages from the user
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>sessionId
   </td>
   <td>Optional
   </td>
   </td>
   <td>
   </td>      
   </td>
   <td>An array of session IDs to filter the conversations. It can have a maximum of 50 session IDs. (Duplicate session IDs are ignored, but they are counted.)
<br>
<strong>Note</strong>: If you use ‘sessionId’ in the Body, other parameters/filters are ignored.
  </td>
  </tr>
</table>

!!!Note
    
    The duration between _dateTo_ and _dateFrom_ should be less than 7 days, else an error will be thrown.

## Sample Response

**For _dropOff_ sessions**


```
{
  "total": 1,
  "moreAvailable": false,
  "sessions": [
   {
     "sessionId": "xxxxaxxexxxaxexdxxxdxxxe",
     "botId": "st-ffeffxxx-xxxc-xexa-axxx-cxxabxxxxcxx",
     "channel": "rtm",
     "userId": "u-xxfexxxd-xxex-xdxe-xaec-xeaxbxxxxfxx",
     "start_time": "2021-04-26T11:27:25.977Z",
     "end_time": "2021-04-26T11:27:26.145Z",
     "session_lang": [
       "en"
      ],
     "sessionType": "interactive",
     "containmentType": "dropOff",
     "isDeveloper": false,
     "tags": {
       "userTags": [
        {
         "value": "newuser",
         "name": "regular"
        }
      ],
      "sessionTags": []
     },
     "noOfMessagesExchanged": 1,
     "noOfTasksExecuted": 0
   }
  ]
}
```

**For _selfService_ sessions**


```
{
  "total": 2,
  "moreAvailable": false,
  "sessions": [
   {
     "sessionId": "xxxxaxxexxxaxexdxxxdxxxe",
     "botId": "st-ffeffxxx-xxxc-xexa-axxx-cxxabxxxxcxx",
     "channel": "rtm",
     "userId": "u-xxfexxxd-xxex-xdxe-xaec-xeaxbxxxxfxx",
     "start_time": "2021-04-26T11:27:25.977Z",
     "end_time": "2021-04-26T11:27:26.145Z",
     "session_lang": [
       "en"
      ],
     "sessionType": "non-interactive",
     "containmentType": "selfService",
     "isDeveloper": false,
     "tags": {
       "userTags": [
        {
         "value": "newuser",
         "name": "regular"
        }
       ],
       "sessionTags": []
     },
     "noOfMessagesExchanged": 6,
     "noOfTasksExecuted": 0
    },
   {
     "sessionId": "xxxxaxxexxxaxexdxxxdxxxe",
     "botId": "st-ffeffxxx-xxxc-xexa-axxx-cxxabxxxxcxx",
     "channel": "rtm",
     "userId": "u-xxfexxxd-xxex-xdxe-xaec-xeaxbxxxxfxx",
     "start_time": "2021-04-26T11:27:25.977Z",
     "end_time": "2021-04-26T11:27:26.145Z",
     "session_lang": [
       "en"
      ],
      "sessionType": "non-interactive",
      "containmentType": "selfService",
      "isDeveloper": false,
     "tags": {
       "userTags": [
         {
          "value": "newuser",
          "name": "regular"
        }
      ],
     "sessionTags": []
     },
     "noOfMessagesExchanged": 8,
     "noOfTasksExecuted": 0
    }
  ]
}
```

**For _agent_ sessions**


```
{
  "total": 1,
  "moreAvailable": false,
  "sessions": [
   {
     "sessionId": "xxxxaxxexxxaxexdxxxdxxxe",
     "botId": "st-ffeffxxx-xxxc-xexa-axxx-cxxabxxxxcxx",
     "channel": "rtm",
     "userId": "u-xxfexxxd-xxex-xdxe-xaec-xeaxbxxxxfxx",
     "start_time": "2021-04-26T11:27:25.977Z",
     "end_time": "2021-04-26T11:27:26.145Z",
     "session_lang": [
       "en"
      ],
	 "sessionType": "interactive",
         "containmentType": "agent", 
	 "isDeveloper": false,
	 "tags": {
		"userTags": [],
		"sessionTags": []
	 },
	 "noOfMessagesExchanged": 7,
	 "noOfTasksExecuted": 2
	}
  ]
}
```

**For one or more session Ids**

```json
{
    "total": 1,
    "moreAvailable": false,
    "sessions": [
        {
            "sessionId": "6465cf6e4769ed4e822bxxxx",
            "botId": "st-dc600cf5-b1c5-581e-a2c3-eb81fe39xxxx",
            "channel": "rtm",
            "userId": "u-8c4ca335-3152-5622-9cbb-51c6daf6xxxx",
            "start_time": "2023-05-18T07:10:38.695Z",
            "end_time": "2023-05-18T07:10:39.201Z",
            "session_lang": [
                "en"
            ],
            "sessionType": "interactive",
            "isDeveloper": false,
            "sessionStatus": "closed",
            "tags": {
                "userTags": [],
                "sessionTags": []
            },
            "noOfMessagesExchanged": 3,
            "noOfTasksExecuted": 1,
            "containmentType": "selfService"
        }
    ],
    "invalidSessions": [
        "6465cf6e47Q9ed4e822bxxxx"
    ]
}

```

**For specific external Call Ids**

```
{
    "total": 1,
    "moreAvailable": false,
    "sessions": [
        {
            "sessionId": "67d97c8fd495b147d9c3xxxx",
            "botId": "st-89cf14ef-145e-5263-994e-5d757325xxxx",
            "channel": "korevg",
            "userId": "u-c3c0b243-becc-5cce-a845-f681a62dxxxx",
            "start_time": "2025-03-18T14:00:47.505Z",
            "end_time": "2025-03-18T14:01:37.518Z",
            "session_lang": [
                "en"
            ],
            "sessionType": "interactive",
            "isDeveloper": false,
            "sessionStatus": "closed",
            "tags": {
                "userTags": [],
                "sessionTags": [
                    {
                        "value": "1",
                        "name": "welcomeMessageTwilio"
                    },
                    {
                        "value": "+1123456789",
                        "name": "callerNumber"
                    },
                    {
                        "value": "1",
                        "name": "voiceAgentTransferStart"
                    },
                    {
                        "value": "1",
                        "name": "audioCodesCallDisconnect"
                    }
                ],
                "altText": []
            },
            "noOfMessagesExchanged": 4,
            "noOfTasksExecuted": 1,
            "containmentType": "agent"
        },
    ]
}
```

## Response Body Parameters


<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>TYPE</strong>
   </td>   
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>total
   </td>
   <td>Number
   </td>    
   <td>The total number of records identified as per the API request parameters. The response will include a maximum of X records. If more than X records are identified, then the ‘moreAvailable’ field in the response will have the value as ‘True’.
<br>
It is recommended to programmatically iterate the request by dynamically updating the values of the ‘skip’ and ‘limit’ parameters in the request.
   </td>
  </tr>
  <tr>
   <td>moreAvailable
   </td>
   <td>Boolean
   </td>    
   <td>Indicates if the API has returned all the records or if more are available, based on the pagination criteria.
<br>
<strong>True</strong> if more records are available. <strong>False</strong> if there are no more records to be retrieved.
   </td>
  </tr>
  <tr>
   <td>sessions
   </td>
   <td>Object
   </td>    
   <td>Contains complete information about the session.
   </td>
  </tr>
  <tr>
   <td>sessions.sessionId
   </td>
   <td>String
   </td>    
   <td>The unique identifier for the session record.
   </td>
  </tr>
  <tr>
   <td>sessions.botId
   </td>
   <td>String
   </td>    
   <td>Bot ID or Stream ID.
   </td>
  </tr>
  <tr>
   <td>sessions.channel
   </td>
   <td>String
   </td>    
   <td>The channel in which the end user is having the conversation: sms, email, rtm, slack, twitter, msteams, api, kore, or facebook.
   </td>
  </tr>
  <tr>
   <td>sessions.userId
   </td>
   <td>String
   </td>    
   <td>The user Id of the end user who is having a conversation with the bot.
   </td>
  </tr>
  <tr>
   <td>sessions.start_time
   </td>
   <td>Date
   </td>    
   <td>The start time of the session. (ISO Date format YYYY-MM-DDThh:mm:ss.mmmZ)
   </td>
  </tr>
  <tr>
   <td>sessions.end_time
   </td>
   <td>Date
   </td>    
   <td>The end time of the session. (ISO Date format YYYY-MM-DDThh:mm:ss.mmmZ)
   </td>
  </tr>
  <tr>
   <td>sessions.session_lang
   </td>
   <td>Array
   </td>    
   <td>All the languages in which the conversation happened during the session.
   </td>
  </tr>
  <tr>
   <td>sessions.sessionType
   </td>
   <td>String
   </td>    
   <td>The type to filter the conversations:
<ul>

<li>non-interactive – sessions having only bot messages, no message from the user.

<li>interactive – sessions having one or more messages from the user.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>sessions.containmentType
   </td>
   <td>String
   </td>    
   <td>Used to filter the results based on the type of the session: selfservice, dropOff, or agent.
   </td>
  </tr>
  <tr>
   <td>sessions.isDeveloper
   </td>
   <td>Boolean
   </td>    
   <td>Informs whether the session was initiated by a developer; 1 for Yes, 0 for No.
   </td>
  </tr>
  <tr>
   <td>sessions.sessionStatus
   </td>
   <td>String
   </td>    
   <td>The status of the session – active or closed.
   </td>
  </tr>
  <tr>
   <td>sessions.tags
   </td>
   <td>Object
   </td>    
   <td>Meta tags to filter the sessions.
   </td>
  </tr>
  <tr>
   <td>sessions.tags.userTags
   </td>
   <td>Array
   </td>    
   <td>User tags object; custom tags added to the user’s profile information.
   </td>
  </tr>
  <tr>
   <td>sessions.tags.userTags.value
   </td>
   <td>Dynamic Field (Mixed Type)
   </td>    
   <td>Tag’s value.
   </td>
  </tr>
  <tr>
   <td>sessions.tags.userTags.name
   </td>
   <td>String
   </td>   
   <td>Tag’s name.
   </td>
  </tr>
  <tr>
   <td>sessions.tags.sessionTags
   </td>
   <td>Array
   </td>   
   <td>Session tags object; custom tags added to the conversation session.
   </td>
  </tr>
  <tr>
   <td>sessions.tags.sessionTags.value
   </td>
   <td>Dynamic Field (Mixed Type)
   </td>   
   <td>Tag’s value.
   </td>
  </tr>
  <tr>
   <td>sessions.tags.sessionTags.name
   </td>
   <td>String
   </td>   
   <td>Tag’s name.
   </td>
  </tr>
  <tr>
   <td>sessions.noOfMessagesExchanged
   </td>
   <td>Number
   </td>   
   <td>The number of messages exchanged in the session.
   </td>
  </tr>
  <tr>
   <td>sessions.noOfTasksExecuted
   </td>
   <td>Number
   </td>   
   <td>The number of tasks executed in the session.
   </td>
  </tr>
  <tr>
   <td>invalidSessions
   </td>
   <td>Array
   </td>   
   <td>An array listing session IDs that were not found.
   </td>
  </tr>
</table>

