--8<-- "includes/automationai-api-back-link.md"

# Get Analytics API

The Get Analytics API allows you to retrieve metrics data related to intent detection and task performance. The API provides information about various metrics, including Intents Found, Intents not Found, Unhandled Utterances, Failed Tasks, Successful Tasks, and Performance Logs.


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
   <td><code>https://{{host}}/api/public/bot/{{BotID}}/getAnalytics</code>
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

<li>App Builder: Metrics

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

The following sample request shows how to retrieve _unhandled utterance_ analytics data with specific filters. You can modify the _type_ and _filters_ parameters to retrieve different types of analytics data as needed.


```json
curl --location --request POST 'https://platform.kore.ai/api/public/bot/st-xxxxxxd-xxxx-xxxx-xxxx-xxxxxxxxxx/getAnalytics' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
--header 'content-type: application/json' \
--data-raw '{
    "type": "successintent",
    "filters": {
        "from": "2025-12-04T18:30:00.000Z",
        "to": "2025-12-18T13:50:01.557Z",
        "channelUIds": ["stream@example.com"],
    },
    "sort": {
        "order": "desc",
        "by": "timestamp"
    },
    "limit": 50
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
   <td>type
   </td>
   <td>Required
   </td>
   <td>String
   </td>   
   <td>Indicates the type of metrics for which you can retrieve data:
<ul>

<li>successintent

<li>failintent

<li>successtask

<li>failtask

<li>performance

<li>unhandledutterance
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>filters
   </td>
   <td>Required
   </td>
   <td>Object
   </td>   
   <td>A set of filters to narrow down the analytics data.
   </td>
  </tr>
  <tr>
   <td>filters.from
   </td>
   <td>Required
   </td>
   <td>String
   </td>   
   <td>The start timestamp for the data retrieval.
   </td>
  </tr>
  <tr>
   <td>filters.to
   </td>
   <td>Required
   </td>
   <td>String
   </td>   
   <td>The end timestamp for the data retrieval.
   </td>
  </tr>
  <tr>
   <td>filters.channel
   </td>
   <td>Optional
   </td>
   <td>Array of strings
   </td>   
   <td>An array containing channel names to filter data by; the default channel is “rtm”.
<p>
Accepted channels are:
<ul>


<li>“msteams”

<li>“twitter”

<li>“spark”

<li>“rtm”

<li>“facebook”

<li>“slack”


<li>“kore”

<li>“email”

<li>“sms”

<li>“facebook”

<li>“ringcentral”

<li>“jabber”

<li>“yammer”

<li>“alexa”

<li>“twiliovoice”

<li>“telegram”

<li>“ivr”

<li>“ivrVoice”

<li>“smartassist”

<li>“line”

<li>“liveperson”

<li>“googleactions”

<li>“hangoutchat”

<li>“mattermost”

<li>“rcs”
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>filters.channel.channelUIds
   </td>
   <td>Optional
   </td>
   <td>Array of strings
   </td> 
   <td>The end-user’s identity provided by the channel.
   </td>
  </tr>
    <tr>
  </tr>
  <tr>
   <td>filters.isAmbiguous
   </td>
   <td>Optional
   </td>
   <td>Boolean
   </td>
   <td>Whether to include ambiguous intents or not – set to <em>true</em> or <em>false</em>.
   </td>
  </tr>
  <tr>
   <td>filters.isDeveloper
   </td>
   <td>Optional
   </td>
   <td>Boolean
   </td>
   <td>Whether to include developer metrics – set to <em>true</em> or <em>false</em>.
   </td>
  </tr>
  <tr>
   <td>filters.trained
   </td>
   <td>Optional
   </td>
   <td>Boolean
   </td>
   <td>Whether to include trained intents or not – set to <em>true</em> or <em>false</em>.
   </td>
  </tr>
  <tr>
   <td>filter.taskId
   </td>
   <td>Optional
   </td>
   <td>Array of strings
   </td>   
   <td>To filter based on the task IDs.
   </td>
  </tr>
  <tr>
   <td>filters.userId
   </td>
   <td>Optional
   </td>
   <td>Array of strings
   </td>
   <td>To filter based on user IDs.
   </td>
  </tr>
  <tr>
   <td>filters.tags
   </td>
   <td>Optional
   </td>
   <td>Object
   </td>
   <td>Meta tags to filter the records.
<p>
Usage example:
<p>
<code>"tags": {</code>
<p>
<code>         "and": [</code>
<p>
<code>                 {</code>
<p>
<code>                  "name": "user",</code>
<p>
<code>                  "values": ["uservalue"],</code>
<p>
<code>                  "type": "user"</code>
<p>
<code>                  },</code>
<p>
<code>                  {</code>
<p>
<code>                   "name": "message",</code>
<p>
<code>                   "values": ["mvalue"],</code>
<p>
<code>                   "type": "message"</code>
<p>
<code>                   }</code>
<p>
<code>                ]</code>
<p>
<code>           }</code>
   </td>
  </tr>
  <tr>
   <td>sort
   </td>
   <td>Optional
   </td>
   <td>Object
   </td>   
   <td>An object containing the sorting criteria to apply to the data being retrieved:
<ul>

<li><em>order (string, required)</em>: Sorting order, either “asc” for ascending or “desc” for descending.

<li><em>by</em> <em>(string, required)</em>: The field/column by which the data should be sorted.

<p>
Usage example:
<p>
<code>"sort": </code>
<p>
<code>       { "order": "&lt;desc/asc>", </code>
<p>
<code>          "by": "&lt;column name>" }</code>
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>limit
   </td>
   <td>Required
   </td>
   <td>Number
   </td>   
   <td>Indicates the number of records to be returned in the result set.
   </td>
  </tr>
  <tr>
   <td>skip
   </td>
   <td>Required
   </td>
   <td>Number
   </td>
   <td>The number of records to be skipped from the result set.
   </td>
  </tr>
</table>



## Sample Response


```json
{
    "moreAvailable": false,
    "result": [
        {
            "_id": "63xxxxxxxxxxxxxxxxx",
            "messageId": "ms-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx",
            "sessionId": "63xxxxxxxxxxxxxxx",
            "utterance": "aslfkj",
            "intent": "Mobile Enquiry",
            "userId": "u-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx",
            "channelUId": "test@abc.xyz",
            "language": "en",
            "timestamp": "2022-09-24T08:24:39.840Z",
            "pinned": false,
            "channel": "rtm",
            "winningIntent": [],
            "isAmbiguous": false,
            "ambiguousIntents": [],
            "taskName": "Mobile Enquiry",
            "flow": [],
            "taskId": "dg-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx",
            "koralogstatusId": "f-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx-xxxxxxxxxxx",
            "customTags": {
                "userTags": [
                    {
                        "name": "Name",
                        "value": "John"
                    }
                ],
                "sessionTags": [],
                "messageTags": []
            },
            "NLAnalysis": {
                "result": "unhandledUtterance",
                "messageStoreId": "ms-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx",
                "channelId": "st-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx:u-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx:rtm",
                "bot": "Channel Check",
                "botid": "st-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx",
                "skipConversation": true,
                "task": "Mobile Enquiry",
                "botLanguage": "en-US",
                "nluLanguage": "en-US",
                "taskId": "dg-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx",
                "fields": {},
                "logSequenceId": "f-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx-xxxxxxxxxx",
                "intentStatus": "published",
                "subType": "dialog",
                "channelInfo": "st-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx:u-xxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx:rtm",
                "input": [
                    "aslfkj"
                ],
                "taskContextId": "dcx-xxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx",
                "NLAnalysis": {
                    "intentRescoring": true,
                    "isPreferDefinitiveMatch": true,
                    "scoringModel": "original",
                    "toneAnalysis": {},
                    "nlProcessing": {
                        "originalInput": "aslfkj",
                        "spellCorrectedInput": null,
                        "canonical": "Aslak",
                        "wordAnalysis": [
                            {
                                "index": 1,
                                "word": "Aslak",
                                "ignored": false,
                                "pos": "Noun_proper_singular ",
                                "role": "MAINSUBJECT ",
                                "original": "aslfkj",
                                "processedWord": "Aslak"
                            }
                        ]
                    },
                    "ml": {
                        "intentModel": "bot level intent model",
                        "eliminated": [
                            {
                                "task": "Book Appointment",
                                "state": "published",
                                "score": 0.017055602351504544,
                                "scoringCriteria": "Probabilistic score",
                                "matchType": "unlikely"
                            },
                            {
                                "task": "Transfer Money",
                                "state": "published",
                                "score": 0.011911144983740555,
                                "scoringCriteria": "Probabilistic score",
                                "matchType": "unlikely"
                            },
                            {
                                "task": "Show Balance",
                                "state": "published",
                                "score": 0.009209086809082547,
                                "scoringCriteria": "Probabilistic score",
                                "matchType": "unlikely"
                            }
                        ],
                        "namedEntityRecognition": []
                    },
                    "faq": {
                        "demystify": {
                            "lemmatizer_used": "PATTERN",
                            "normalizedQuery": "aslfkj",
                            "OntologyTraits": [],
                            "failed_questions": {},
                            "SelectedPathCount": 3,
                            "ExtractedEntities": [],
                            "ContextEntities": [],
                            "PreConditionNodes": [],
                            "filtered_questions": {
                                "score": [],
                                "traits": []
                            }
                        }
                    }
                },
                "language": "en",
                "channel": "rtm",
                "userId": "u-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx",
                "time": "2022-09-24T08:24:39.808Z",
                "channelclient": "botbuilder",
                "_id": "f-121d2486-xxxx-xxxx-xxxx-xxxxxxxxxx-xxxxxxxxxx",
                "resourceid": "korastatuslogs",
                "entityOrgId": "o-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx",
                "iv": "VP47awbZ8JRCoqFtgPx7fA==",
                "cek": {
                    "header": {
                        "alg": "dir",
                        "enc": "aes-256-cbc",
                        "kid": "k-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx"
                    }
                },
                "ire": true
            },
            "nodeName": "Entity_color",
            "promptType": "entity"
        },
        {
            "_id": "63xxxxxxxxxxxx",
            "messageId": "ms-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx",
            "sessionId": "63xxxxxxxxxxxxxxxxx",
            "utterance": "alskd",
            "intent": "Mobile Enquiry",
            "userId": "u-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx",
            "channelUId": "ramakrishnakoretest@getnada.com",
            "language": "en",
            "timestamp": "2022-09-24T08:24:50.257Z",
            "pinned": false,
            "channel": "rtm",
            "winningIntent": [],
            "isAmbiguous": false,
            "ambiguousIntents": [],
            "taskName": "Mobile Enquiry",
            "flow": [],
            "taskId": "dg-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx",
            "koralogstatusId": "f-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx-xxxxxxx",
            "customTags": {
                "userTags": [
                    {
                        "name": "Name",
                        "value": "Krishna"
                    }
                ],
                "sessionTags": [],
                "messageTags": []
            },
            "NLAnalysis": {
                "result": "unhandledUtterance",
                "messageStoreId": "ms-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx",
                "channelId": "st-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx:u-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:rtm",
                "bot": "Channel Check",
                "botid": "st-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx",
                "skipConversation": true,
                "task": "Mobile Enquiry",
                "botLanguage": "en-US",
                "nluLanguage": "en-US",
                "taskId": "dg-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx",
                "fields": {},
                "logSequenceId": "f-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx-xxxxxxx",
                "intentStatus": "published",
                "subType": "dialog",
                "channelInfo": "st-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx:u-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx:rtm",
                "input": [
                    "alskd"
                ],
                "taskContextId": "dcx-b3e58798-ed3b-5f3d-9894-2e26758001eb",
                "NLAnalysis": {
                    "intentRescoring": true,
                    "isPreferDefinitiveMatch": true,
                    "scoringModel": "original",
                    "toneAnalysis": {},
                    "nlProcessing": {
                        "originalInput": "alskd",
                        "spellCorrectedInput": null,
                        "canonical": "alskd",
                        "wordAnalysis": [
                            {
                                "index": 1,
                                "word": "unknown-word",
                                "ignored": false,
                                "pos": "Noun_infinitive Noun_singular Verb_infinitive Verb_present Adjective_normal Adverb ",
                                "original": "alskd",
                                "processedWord": "alskd"
                            }
                        ]
                    },
                    "ml": {
                        "intentModel": "bot level intent model",
                        "eliminated": [
                            {
                                "task": "Book Appointment",
                                "state": "published",
                                "score": 0.017055602351504544,
                                "scoringCriteria": "Probabilistic score",
                                "matchType": "unlikely"
                            },
                            {
                                "task": "Transfer Money",
                                "state": "published",
                                "score": 0.011911144983740555,
                                "scoringCriteria": "Probabilistic score",
                                "matchType": "unlikely"
                            },
                            {
                                "task": "Show Balance",
                                "state": "published",
                                "score": 0.009209086809082547,
                                "scoringCriteria": "Probabilistic score",
                                "matchType": "unlikely"
                            }
                        ],
                        "namedEntityRecognition": []
                    },
                    "faq": {
                        "demystify": {
                            "lemmatizer_used": "PATTERN",
                            "normalizedQuery": "alskd",
                            "OntologyTraits": [],
                            "failed_questions": {},
                            "SelectedPathCount": 3,
                            "ExtractedEntities": [],
                            "ContextEntities": [],
                            "PreConditionNodes": [],
                            "filtered_questions": {
                                "score": [],
                                "traits": []
                            }
                        }
                    }
                },
                "language": "en",
                "channel": "rtm",
                "userId": "u-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx",
                "time": "2022-09-24T08:24:50.226Z",
                "channelclient": "botbuilder",
                "_id": "f-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx-xxxxxxxx",
                "resourceid": "korastatuslogs",
                "entityOrgId": "o-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx",
                "iv": "+Kl5i6AAFJp0g3NkExn+Og==",
                "cek": {
                    "header": {
                        "alg": "dir",
                        "enc": "aes-256-cbc",
                        "kid": "k-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx"
                    }
                },
                "ire": true
            },
            "nodeName": "Entity_capacity",
            "promptType": "entity"
        }
    ],
    "totalCount": 2
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
   <td>moreAvailable
   </td>
   <td>Boolean
   </td>   
   <td>Indicates if the API has returned all the records or if more are available, based on the pagination criteria.
<p>
<strong>True</strong> if more records are available. <strong>False</strong> if there are no more records to be retrieved.
   </td>
  </tr>
  <tr>
   <td>result
   </td>
   <td>Array of objects
   </td>   
   <td>Contains complete information about the metrics.
   </td>
  </tr>
  <tr>
   <td>id
   </td>
   <td>String
   </td>   
   <td>The unique identifier for the record.
   </td>
  </tr>
  <tr>
   <td>messagesId
   </td>
   <td>String
   </td>   
   <td>The unique identifier for the message record.
   </td>
  </tr>
  <tr>
   <td>sessionId
   </td>
   <td>String
   </td>   
   <td>The unique identifier for the session.
   </td>
  </tr>
  <tr>
   <td>utterance
   </td>
   <td>String
   </td>   
   <td>The user utterance/input.
   </td>
  </tr>
  <tr>
   <td>intent
   </td>
   <td>String
   </td>   
   <td>The identified intent for the user’s utterance/input.
   </td>
  </tr>
  <tr>
   <td>userId
   </td>
   <td>String
   </td>   
   <td>The unique identifier for the user.
   </td>
  </tr>
  <tr>
   <td>channelUId
   </td>
   <td>String
   </td>   
   <td>The end-user’s identity provided by the channel. It can be the user’s email ID or enterprise-assigned unique ID.
   </td>
  </tr>
  <tr>
   <td>language
   </td>
   <td>String
   </td>   
   <td>The language in which the conversation happened with the bot.
   </td>
  </tr>
  <tr>
   <td>timestamp
   </td>
   <td>String
   </td>   
   <td>The response date is converted into timestamp format.
   </td>
  </tr>
  <tr>
   <td>pinned
   </td>
   <td>Boolean
   </td>   
   <td>Indicates whether the message is pinned – <em>true</em> or <em>false</em>.
   </td>
  </tr>
  <tr>
   <td>channel
   </td>
   <td>String
   </td>   
   <td>Name of the channel through which the conversation occurred.
   </td>
  </tr>
  <tr>
   <td>winningIntent
   </td>
   <td>Array
   </td>   
   <td>An array containing the winning intent(s) for the utterance.
   </td>
  </tr>
  <tr>
   <td>isAmbiguous
   </td>
   <td>Boolean
   </td>   
   <td>Indicates whether the intent is ambiguous – <em>true</em> or <em>false.</em>
   </td>
  </tr>
  <tr>
   <td>ambiguousIntents
   </td>
   <td>Array
   </td>   
   <td>An array of ambiguous intents, if applicable.
   </td>
  </tr>
  <tr>
   <td>taskName
   </td>
   <td>String
   </td>   
   <td>The name of the task associated with the conversation.
   </td>
  </tr>
  <tr>
   <td>nodeName
   </td>
   <td>String
   </td>   
   <td>The node name. This parameter is retrieved only for the <em>Performance</em> metric.
   </td>
  </tr>
  <tr>
   <td>type
   </td>
   <td>String
   </td>   
   <td>The type of the node. This parameter is retrieved only for the <em>Performance</em> metric.
   </td>
  </tr>
  <tr>
   <td>status
   </td>
   <td>String
   </td>   
   <td>The status of the task. This parameter is retrieved only for the <em>Performance</em> metric.
   </td>
  </tr>
  <tr>
   <td>statusCode
   </td>
   <td>String
   </td>   
   <td>The status code of the task. This parameter is retrieved only for the <em>Performance</em> metric.
   </td>
  </tr>
  <tr>
   <td>responseTime
   </td>
   <td>String
   </td>   
   <td>The response time for the task. This parameter is retrieved only for the <em>Performance</em> metric.
   </td>
  </tr>
  <tr>
   <td>flow
   </td>
   <td>Array
   </td>   
   <td>An array of task flows.
   </td>
  </tr>
  <tr>
   <td>taskId
   </td>
   <td>String
   </td>   
   <td>The unique identifier for the task.
   </td>
  </tr>
  <tr>
   <td>koralogstatusId
   </td>
   <td>String
   </td>   
   <td>The unique identifier for the koralog status.
   </td>
  </tr>
  <tr>
   <td>customTags
   </td>
   <td>Object
   </td>   
   <td>Custom tags added to the user’s profile.
   </td>
  </tr>
  <tr>
   <td>customTags.userTags
   </td>
   <td>Array
   </td>   
   <td>User tags added to the user’s profile information.
   </td>
  </tr>
  <tr>
   <td>userTags.name
   </td>
   <td>String
   </td>   
   <td>Tag’s name.
   </td>
  </tr>
  <tr>
   <td>userTags.value
   </td>
   <td>String
   </td>   
   <td>Tag’s value.
   </td>
  </tr>
  <tr>
   <td>customTags.sessionTags
   </td>
   <td>Array
   </td>   
   <td>Custom tags added to the conversation session.
   </td>
  </tr>
  <tr>
   <td>customTags.messagesTags
   </td>
   <td>Array
   </td>   
   <td>Meta tags to filter the conversations.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis
   </td>
   <td>Object
   </td>   
   <td>Contains natural language analysis results, including intent recognition and other natural language processing details.
<p>
The ‘NLAnalysis’ object includes multiple sub-objects such as ‘intentRescoring’, ‘nlProcessing’, ‘ml’ (machine learning analysis), ‘fm’ (fundamental meaning analysis), ‘faq’ (frequently asked questions analysis), and finalResolver. Each of these sub-objects contains information related to the analysis process, such as linguistic analysis, intent recognition, and the elimination of unlikely intents, etc.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.debugTitle
   </td>
   <td>String
   </td>   
   <td>The metric type in the NL Analysis. Possible values are:
<ul>

<li>Intent Match Successful

<li>Intent Match Failed

<li>Intent Failed/Abandoned

<li>Intent Completed Successfully

<li>Unhandled Utterances

<li>Performance
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.result
   </td>
   <td>String
   </td>   
   <td>The result of the NL analysis. For example, the result can be an unhandled utterance or a failed task.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.messageStoreId
   </td>
   <td>String
   </td>   
   <td>A unique identifier for the message stored in the system.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.channelId
   </td>
   <td>String
   </td>   
   <td>The identifier for the channel where the conversation took place.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.bot
   </td>
   <td>String
   </td>   
   <td>The name of the bot that handled the conversation.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.botid
   </td>
   <td>String
   </td>   
   <td>The unique identifier for the bot.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.skipConversation
   </td>
   <td>Boolean
   </td>   
   <td>If set to true, skips the conversation record. If false, do not skip the conversation.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.task
   </td>
   <td>String
   </td>   
   <td>The name of the task associated with the conversation.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.botLanguage
   </td>
   <td>String
   </td>   
   <td>The language used by the bot.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.nluLanguage
   </td>
   <td>String
   </td>   
   <td>The language in which the NLP training happened for that particular bot language.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.taskId
   </td>
   <td>String
   </td>   
   <td>The unique identifier for the task associated with the conversation.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.isDeveloper
   </td>
   <td>Boolean
   </td>   
   <td>Whether the session was initiated by a developer –  <em>true</em> or <em>false</em>.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.reason
   </td>
   <td>Object
   </td>   
   <td>The NL analysis reason object.              
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.reason.cause
   </td>
   <td>String
   </td>   
   <td>The cause for NL analysis failure. For example, the script node failure.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.reason.causeId
   </td>
   <td>String
   </td>   
   <td>The NL analysis cause id.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.fields
   </td>
   <td>String
   </td>   
   <td>The fields; Contains additional fields associated with the interaction.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.logSequenceId
   </td>
   <td>String
   </td>   
   <td>The unique log sequence identifier.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.intentStatus
   </td>
   <td>String
   </td>   
   <td>The status of the intent.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.subType
   </td>
   <td>String
   </td>   
   <td>The task subtype.  For example, a dialog.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.channelInfo
   </td>
   <td>String
   </td>   
   <td>The bot channel information.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.input
   </td>
   <td>Array
   </td>   
   <td>An array containing the user’s input.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.taskContextId
   </td>
   <td>String
   </td>   
   <td>The unique task context identifier.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.intentRescoring
   </td>
   <td>Boolean
   </td>   
   <td>Indicates whether intent rescoring was enabled – <em>true</em> or <em>false</em>. (<em>true</em> means the system may reevaluate and rescore intents during the processing of the user’s input.)
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.isPreferDefinitiveMatch
   </td>
   <td>Boolean
   </td>   
   <td>Indicates whether the system prefers a definitive match when recognizing intents – <em>true</em> or <em>false</em>.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.scoringModel
   </td>
   <td>String
   </td>   
   <td>The scoring model used for intent recognition. Possible value – <em>original</em>.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.toneAnalysis
   </td>
   <td>Object
   </td>   
   <td>The toneAnalysis object; Contains the tone analysis of the task. 
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.nlProcessing
   </td>
   <td>Object
   </td>   
   <td>The nlProcessing object; Contains information about the linguistic analysis and natural language processing of the user’s input.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.nlProcessing.originalInput
   </td>
   <td>String
   </td>   
   <td>The original user input.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.nlProcessing.spellCorrectedInput
   </td>
   <td>String
   </td>   
   <td>If spelling correction is applied, it would contain the corrected user input. (Null indicates no spelling correction applied.)
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.nlProcessing.canonical
   </td>
   <td>String
   </td>   
   <td>The canonical representation of the input; typically represents a normalized or recognized form of the user’s input.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.nlProcessing.wordAnalysis
   </td>
   <td>Array
   </td>   
   <td>An array of objects, each containing a detailed analysis of individual words in the user’s input.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.nlProcessing.wordAnalysis.index
   </td>
   <td>Number
   </td>   
   <td>The position of the word in the input.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.nlProcessing.wordAnalysis.word
   </td>
   <td>String
   </td>   
   <td>The recognized/analyzed word.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.nlProcessing.wordAnalysis.ignored
   </td>
   <td>Boolean
   </td>   
   <td>Indicates whether the word was ignored in the analysis – <em>true</em> or <em>false</em>.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.nlProcessing.wordAnalysis.pos
   </td>
   <td>String
   </td>   
   <td>Part-of-speech tagging for the word.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.nlProcessing.wordAnalysis.role
   </td>
   <td>String
   </td>   
   <td>The role or function of the word in the context.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.nlProcessing.wordAnalysis.original
   </td>
   <td>String
   </td>   
   <td>The original word.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.nlProcessing.wordAnalysis.processedWord
   </td>
   <td>String
   </td>   
   <td>The processed word.
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.ml
   </td>
   <td>Object
   </td>   
   <td>The ml object; Contains information related to machine learning analysis, including intent recognition and elimination of unlikely intents. (Most of the parameters/values returned by the object are used internally.)
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.fm
   </td>
   <td>Object
   </td>    
   <td>The fm object; Contains information related to fundamental meaning analysis, provides insights into the scoring, matching, and elimination of tasks, etc. (Most of the parameters/values returned by the object are used internally.)   
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.faq
   </td>
   <td>Object
   </td>    
   <td>The faq object; Contains detailed information about the analysis of user input related to faq. (Most of the parameters/values returned by the object are used internally.)  
   </td>
  </tr>
  <tr>
   <td>NLAnalysis.finalResolver
   </td>
   <td>Object
   </td>    
   <td>The finalResolver object; Contains information related to the final resolution process and the determination of the response or action to be taken based on the user’s input. (Most of the parameters/values returned by the object are used internally.)
   </td>
  </tr>
  <tr>
   <td>totalCount
   </td>
   <td>Number
   </td>    
   <td>The total number of records identified as per the API request parameters.
   </td>
  </tr>
</table>

