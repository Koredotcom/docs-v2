--8<-- "includes/automationai-api-back-link.md"

# Find Intent API

To fetch the intent recognition result and the scores from NLP and ML engines.


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
   <td><code>https://{{host}}/api/v1.1/rest/bot/{{BotID}}/findIntent?fetchConfiguredTasks=false</code>
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

<li>App Builder: Intent and Entity Detection

<li>Admin Console: Intent Identification > Intent and Entity Detection
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

### Bot Language

Optionally, if multi-language is enabled for the Bot, you need to pass the bot-language header with the language code, such as `en`, `zh_cn`, etc. If the language code is not passed for a multilingual Bot, the Bot's default language will be considered.

```json
bot-header: {{lang-code}}
```

## Query Parameters

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>REQUIRED/OPTIONAL</strong>
   </td>
   <td><strong>DEFAULT VALUE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>fetchConfiguredTasks
   </td>
   <td>Required
   </td>
   <td>false
   </td>
   <td>‘True’ if you want to fetch the intents from configured tasks in the bot and ‘False’ if you want to fetch only for the published tasks.
   </td>
  </tr>
  <tr>
   <td>sync
   </td>
   <td>Optional
   </td>
   <td>false
   </td>
   <td>By default, the API response is asynchronous. If you want to use synchronous mode, use the ‘sync’ parameter and set the value to ‘true’. For example,   
     <code>https://{{host}}/api/v1.1/rest/bot/{{BotID}}/findIntent?fetchConfiguredTasks=false&sync=true</code>
  
   </td>
  </tr>
  
</table>

## Sample Request


```json
curl -X POST \
  'https://{{host}}/api/v1.1/rest/bot/{{BotID}}/findIntent?fetchConfiguredTasks=false' \
  -H "Content-Type:application/json" \
  -H 'auth: {{YOUR_JWT_ACCESS_TOKEN}}'\ 
  -H "bot-language:{{lang-code}}" \
  -d '{
     "parentIntent": "{{parent intent}}",
     "input": "{{user utterance}}",
     "streamName": "{{bot name}}"
   }'
```

## Body Parameters


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
   <td>parentIntent
   </td>
   <td>Optional
   </td>
   <td>To detect a sub-intent in the context of another intent
   </td>
  </tr>
  <tr>
   <td>input
   </td>
   <td>Required
   </td>
   <td>The user utterance to find the matching intents
<p>
Example: Create a task
   </td>
  </tr>
  <tr>
   <td>streamName
   </td>
   <td>Required
   </td>
   <td>The name of the bot
<p>
Example: JIRA Bot
   </td>
  </tr>
  <tr>
   <td>bot-language
   </td>
   <td>Optional
   </td>
   <td>The bot language, for example, “en” for English and “de” for German.
   </td>
  </tr>
</table>


 


## Sample Response


```
{
    "request": {
        "input": "book a ticket",
        "streamName": "Public APIs"
    },
    "response": {
        "usedtime": 313,
        "debugTitle": "Intent Match Successful: 'Book a ticket'",
        "result": "successintent",
        "messageStoreId": "xxx",
        "bot": "Public APIs",
        "botid": "st-6ecb5ba2-5e31-xxxx-xxxx-8cbee40f3fdb",
        "task": "Book a ticket",
        "taskId": "dg-18219164-c11c-xxxx-xxxx-d2e632ec3646",
        "intentStatus": "published",
        "subType": "dialog",
        "input": [
            "book a ticket"
        ],
        "identifiedVia": "cs em",
        "language": "en",
        "userId": "u-5dad2ccd-b271-xxxx-xxxx-2e6e25e1ec91",
        "time": "2019-06-27T11:48:28.250Z",
        "_id": "f-19f149a6-25e3-xxxx-xxxx-679bfd26acf5",
        "traits": {},
        "toneAnalysis": {},
        "nlProcessing": {
            "originalInput": "book a ticket",
            "canonical": "book a ticket",
            "wordAnalysis": [
                {
                    "word": "book",
                    "ignored": false,
                    "pos": "Verb_infinitive ",
                    "role": "MAINVERB ",
                    "original": "book",
                    "processedWord": "book"
                },
                {
                    "word": "a",
                    "ignored": true,
                    "pos": "Determiner ",
                    "original": "a",
                    "processedWord": "a"
                },
                {
                    "word": "ticket",
                    "ignored": false,
                    "pos": "Noun_singular ",
                    "role": "MAINOBJECT ",
                    "original": "ticket",
                    "processedWord": "ticket"
                }
            ]
        },
        "ml": {
            "namedEntityRecognition": []
        },
        "fm": {
            "definitive": [
                {
                    "count": 2,
                    "score": 11643.33,
                    "botid": "st-6ecb5ba2-5e31-xxxx-xxxx-8cbee40f3fdb",
                    "botname": "Public APIs",
                    "activity": "Book a ticket",
                    "activityType": 1,
                    "exactcount": 2,
                    "labelsize": 2,
                    "ignorewords": 1,
                    "mask": 66306,
                    "words": {
                        "book": [
                            "0-1"
                        ],
                        "ticket": [
                            "0-3"
                        ]
                    },
                    "priority": 2,
                    "tense": 8192,
                    "mainRoles": 10,
                    "sentencelength": 3,
                    "ignorewordlist": {
                        "a": 1
                    },
                    "maskEntity": 66306,
                    "firstwordmatch": "book",
                    "details": {
                        "0": {
                            "1": {
                                "labelword": "book",
                                "inputwords": {
                                    "1": "book"
                                },
                                "wordindex": [
                                    1
                                ],
                                "foundexact": true,
                                "bestwordindex": 1,
                                "role": 2,
                                "pos": 2200096997376,
                                "tense": 8192,
                                "ageLevel": 1,
                                "commonness": 6
                            },
                            "2": {
                                "labelword": "ticket",
                                "inputwords": {
                                    "3": "ticket"
                                },
                                "wordindex": [
                                    3
                                ],
                                "foundexact": true,
                                "bestwordindex": 3,
                                "role": 8,
                                "pos": 2147483680,
                                "tense": 8192,
                                "ageLevel": 1,
                                "commonness": 5
                            }
                        }
                    },
                    "hasNoun": true,
                    "hasVerb": true,
                    "ageLevel": 1,
                    "foundFmEngine": true,
                    "scoreBreakdown": {
                        "wordMatch": 500,
                        "exactWords": 60,
                        "coverage": 2000,
                        "sentenceBonus": 4000,
                        "positionBonus": 733.33,
                        "orderBonus": 100,
                        "spreadBonus": 800,
                        "roleBonus": 2900,
                        "faqQuestionBonus": 0,
                        "mlMatchBonus": 0,
                        "tasktypeBonus": 50,
                        "matchBonus": 500,
                        "phraseJoinPenalty": 0
                    },
                    "matchType": "definite",
                    "task": "Book a ticket",
                    "state": "published",
                    "foundVia": "wordMatch"
                }
            ]
        },
        "finalResolver": {
            "ranking": [
                {
                    "taskId": "dg-18219164-c11c-xxxx-xxxx-d2e632ec3646",
                    "intent": "Book a ticket",
                    "activityType": "dialog",
                    "state": "published",
                    "totalScore": 11643.33,
                    "scoring": {
                        "count": 2,
                        "score": 11643.33,
                        "botid": "st-6ecb5ba2-5e31-xxxx-xxxx-8cbee40f3fdb",
                        "botname": "Public APIs",
                        "activity": "Book a ticket",
                        "activityType": 1,
                        "exactcount": 2,
                        "labelsize": 2,
                        "ignorewords": 1,
                        "mask": 66306,
                        "words": {
                            "book": [
                                "0-1"
                            ],
                            "ticket": [
                                "0-3"
                            ]
                        },
                        "priority": 10,
                        "tense": 8192,
                        "mainRoles": 10,
                        "sentencelength": 3,
                        "ignorewordlist": {
                            "a": 1
                        },
                        "maskEntity": 66306,
                        "firstwordmatch": "book",
                        "details": {
                            "0": {
                                "1": {
                                    "labelword": "book",
                                    "inputwords": {
                                        "1": "book"
                                    },
                                    "wordindex": [
                                        1
                                    ],
                                    "foundexact": true,
                                    "bestwordindex": 1,
                                    "role": 2,
                                    "pos": 2200096997376,
                                    "tense": 8192,
                                    "ageLevel": 1,
                                    "commonness": 6
                                },
                                "2": {
                                    "labelword": "ticket",
                                    "inputwords": {
                                        "3": "ticket"
                                    },
                                    "wordindex": [
                                        3
                                    ],
                                    "foundexact": true,
                                    "bestwordindex": 3,
                                    "role": 8,
                                    "pos": 2147483680,
                                    "tense": 8192,
                                    "ageLevel": 1,
                                    "commonness": 5
                                }
                            }
                        },
                        "hasNoun": true,
                        "hasVerb": true,
                        "ageLevel": 1,
                        "foundFmEngine": true,
                        "scoreBreakdown": {
                            "wordMatch": 500,
                            "exactWords": 60,
                            "coverage": 2000,
                            "sentenceBonus": 4000,
                            "positionBonus": 733.33,
                            "orderBonus": 100,
                            "spreadBonus": 800,
                            "roleBonus": 2900,
                            "faqQuestionBonus": 0,
                            "mlMatchBonus": 0,
                            "tasktypeBonus": 50,
                            "matchBonus": 500,
                            "phraseJoinPenalty": 0
                        },
                        "matchType": "definite",
                        "csMatch": true
                    },
                    "identifyingEngines": {
                        "fm": true
                    },
                    "csMatch": true,
                    "intentMatchVia": "wordMatch"
                }
            ],
            "userInput": "book a ticket",
            "winningIntent": [
                {
                    "intent": "Book a ticket",
                    "taskId": "dg-18219164-c11c-xxxx-xxxx-d2e632ec3646",
                    "activityType": "dialog",
                    "state": "published",
                    "score": 11643.33
                }
            ],
            "entities": []
        }
    },
    "streamId": "st-6ecb5ba2-xxxx-xxxx-b918-8cbee40f3fdb",
    "streamName": "Public APIs",
    "seqLogId": "f-19f149a6-25e3-xxxx-xxxx-679bfd26acf5",
    "_id": "f-19f149a6-25e3-xxxx-xxxx-679bfd26acf5",
    "name": "Public APIs",
    "input": [
        "book a ticket"
    ]
}
```