--8<-- "includes/automationai-api-back-link.md"

# Publish Bot API

To initiate a publish request for a bot.

!!!note
    Before calling the API, ensure that at least one channel is enabled for the bot.

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
   <td><code>https://{{host}}/api/public/bot/{{BotID}}/publish</code>
<p>
 
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

<li>App Builder: Not Applicable

<li>Admin Console: Bot Publish > Publish
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
   <td><em>Bot ID</em> or <em>Stream ID</em> can be accessed under <strong>General Settings </strong>on the App Builder.
   <strong>Note:</strong> This is required only for App Builder API scope of Proactive Messages.
   </td>
  </tr>
</table>



## Sample Request


```json
curl -X POST 'https://{{host}}/api/public/bot/{{BotID}}/publish' \
  -H 'auth: YOUR_JWT_ACCESS_TOKEN' \
  -H 'content-type: application/json' \
  -d '{
	"versionComment" : "new update",
        "initiateTraining": true
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
   <td>versionComment
   </td>
   <td>Required
   </td>
   <td>Comments for your Publish request.
   </td>
  </tr>
  <tr>
   <td>initiateTraining
   </td>
   <td>Optional
   </td>
   <td>Indicates whether to trigger or skip the training process when publishing the bot:
<ul>

<li><em>true</em>: Initiate the training.

<li><em>false</em>: Skip the training.

<p>
<strong>Note:</strong> By default, the platform automatically initiates training upon bot publishing to ensure that the bot is trained with the latest ML and KG changes. Skipping the training can result in issues in intent detection and flow execution.
</li>
</ul>
   </td>
  </tr>
</table>



## Sample Response


```json
[
    {
        "resourceType": "dialog",
        "resourceId": "dg-606c7f53-e94a-xxxx-xxxx-d83ce03e6360",
        "sbResourceId": "dg-606c7f53-e94a-xxxxf-xxxx-d83ce03e6360",
        "status": "SUCCESS",
        "result": {
            "visibility": {
                "namespace": "enterprise",
                "namespaceIds": [
                    "o-23b63f37-89e7-xxxx-xxxx-8012cbda0d4a"
                ]
            },
            "contextLifeTime": {
                "options": "close"
            },
            "version": "1.0",
            "nodes": [
                {
                    "nodeOptions": {
                        "transitionType": "auto",
                        "promptOptions": "required",
                        "reuseMarkedupPhrases": false,
                        "interruptOptions": {
                            "priority": "task"
                        },
                        "transitionMode": "initiateCurrentTask",
                        "inputHandlingOptions": "useAsEntityValue",
                        "reuseOptions": "1",
                        "noAutoCorrection": false,
                        "notForReuse": false
                    },
                    "nodeId": "intent0",
                    "type": "intent",
                    "transitions": [
                        {
                            "default": "entity1",
                            "metadata": {
                                "color": "#299d8e",
                                "connId": "dummy0"
                            }
                        }
                    ],
                    "metadata": {
                        "left": 19,
                        "top": 142
                    },
                    "componentId": "dc-4935f617-xxxx-xxxx-96d6-4df11f48bd99"
                },
                {
                    "nodeOptions": {
                        "transitionType": "auto",
                        "promptOptions": "required",
                        "reuseMarkedupPhrases": false,
                        "interruptOptions": {
                            "priority": "task"
                        },
                        "transitionMode": "initiateCurrentTask",
                        "inputHandlingOptions": "useAsEntityValue",
                        "reuseOptions": "1",
                        "noAutoCorrection": false,
                        "notForReuse": false,
                        "precedence": "entityOverIntent"
                    },
                    "nodeId": "entity1",
                    "type": "entity",
                    "transitions": [
                        {
                            "metadata": {
                                "connId": "dummy1",
                                "color": "#299d8e"
                            },
                            "default": "entity2"
                        }
                    ],
                    "metadata": {
                        "left": 9,
                        "top": 312
                    },
                    "componentId": "dc-a62d7d10-xxxx-xxxx-afc1-1d75b12e0253"
                },
                {
                    "nodeOptions": {
                        "transitionType": "auto",
                        "promptOptions": "required",
                        "reuseMarkedupPhrases": false,
                        "interruptOptions": {
                            "priority": "task"
                        },
                        "transitionMode": "initiateCurrentTask",
                        "inputHandlingOptions": "useAsEntityValue",
                        "reuseOptions": "1",
                        "noAutoCorrection": false,
                        "notForReuse": false,
                        "precedence": "entityOverIntent"
                    },
                    "nodeId": "entity2",
                    "type": "entity",
                    "transitions": [
                        {
                            "metadata": {
                                "connId": "dummy6",
                                "color": "#299d8e"
                            },
                            "then": "message3",
                            "if": {
                                "value": "15",
                                "op": "eq",
                                "field": "entity2"
                            }
                        },
                        {
                            "metadata": {
                                "connId": "dummy7",
                                "color": "#5ea8d3"
                            },
                            "then": "message4",
                            "if": {
                                "value": "30",
                                "op": "eq",
                                "field": "entity2"
                            }
                        },
                        {
                            "default": "end",
                            "metadata": {
                                "color": "#299d8e",
                                "connId": "dummy3"
                            }
                        }
                    ],
                    "metadata": {
                        "left": 24,
                        "top": 467
                    },
                    "componentId": "dc-64fc56de-xxxx-xxxx-b839-7615d600bf9b"
                },
                {
                    "nodeOptions": {
                        "transitionType": "auto",
                        "promptOptions": "required",
                        "reuseMarkedupPhrases": false,
                        "interruptOptions": {
                            "priority": "task"
                        },
                        "transitionMode": "initiateCurrentTask",
                        "inputHandlingOptions": "useAsEntityValue",
                        "reuseOptions": "1",
                        "noAutoCorrection": false,
                        "notForReuse": false
                    },
                    "nodeId": "message3",
                    "type": "message",
                    "transitions": [
                        {
                            "default": "end",
                            "metadata": {
                                "color": "#299d8e",
                                "connId": "dummy5"
                            }
                        }
                    ],
                    "metadata": {
                        "left": 318,
                        "top": 373
                    },
                    "componentId": "dc-fb7bb786-xxxx-xxxx-a2f9-92642c43ae5c"
                },
                {
                    "nodeOptions": {
                        "transitionType": "auto",
                        "promptOptions": "required",
                        "reuseMarkedupPhrases": false,
                        "interruptOptions": {
                            "priority": "task"
                        },
                        "transitionMode": "initiateCurrentTask",
                        "inputHandlingOptions": "useAsEntityValue",
                        "reuseOptions": "1",
                        "noAutoCorrection": false,
                        "notForReuse": false
                    },
                    "nodeId": "message4",
                    "type": "message",
                    "transitions": [
                        {
                            "default": "end",
                            "metadata": {
                                "color": "#299d8e",
                                "connId": "dummy7"
                            }
                        }
                    ],
                    "metadata": {
                        "top": 627,
                        "left": 278
                    },
                    "componentId": "dc-32f800ce-xxxx7-xxxx-846f-8e0b64c6c58c"
                }
            ],
            "isPublishedVersion": false,
            "idp": "none",
            "state": "awaitingApproval",
            "languages": [],
            "compatibility": [],
            "adminTaskStatus": "active",
            "editable": true,
            "isHidden": false,
            "approvedLanguages": [],
            "approvalRequestedLanguages": [
                "en"
            ],
            "localeData": {
                "en": {
                    "name": "mortgage",
                    "shortDesc": ""
                }
            },
            "isFollowUp": false,
            "interruptOptions": {
                "type": {
                    "option": "developer",
                    "message": ""
                },
                "priority": "task",
                "interruptsEnabled": true,
                "holdUxOptions": {
                    "option": "discardCurrTaskNoNotify",
                    "message": ""
                }
            },
            "_id": "dg-606c7f53-e94a-xxxx-xxxx-d83ce03e6360",
            "refId": "682f9675-07a2-xxxx-xxxx-52fd2c4d1a17",
            "followUpIntents": [
                {
                    "refId": "19ad68d9-bxxxx-xxxx-ba73-47cf4e8cb1e7",
                    "transitions": [],
                    "interruptOptions": {
                        "type": {
                            "option": "developer",
                            "message": ""
                        },
                        "interruptsEnabled": true,
                        "holdUxOptions": {
                            "option": "discardCurrTask",
                            "message": [
                                "Discarded current task to switch to new task"
                            ]
                        },
                        "parameterMap": {
                            "preAssignments": [
                                {
                                    "Place": "",
                                    "preDefined": true,
                                    "entityId": "dc-325a8628-xxxx-xxxx-853b-f6b51e6f43aa"
                                },
                                {
                                    "Day": "",
                                    "preDefined": true,
                                    "entityId": "dc-33d98b9a-xxxx2-xxxx-b370-c63b7d22edc9"
                                },
                                {
                                    "Time": "",
                                    "preDefined": true,
                                    "entityId": "dc-d24a083d-xxxx-xxxx-ba25-216ba5439ee2"
                                }
                            ],
                            "postAssignments": [
                                {
                                    "mortType": "",
                                    "preDefined": true,
                                    "entityId": "dc-29155c38-xxxx-xxxx-b704-e932f55b0623"
                                },
                                {
                                    "frType": "",
                                    "preDefined": true,
                                    "entityId": "dc-7af53bfd-xxxx-xxxxd-84c5-24d22d8fa150"
                                }
                            ]
                        }
                    }
                }
            ],
            "botId": "st-b4543a96-49ec-xxxx-xxxx-c6244fc23777",
            "createdBy": "u-3ae8bd39-xxxx-xxxx-b55b-85864a8202c3",
            "createdOn": "2018-12-05T07:45:19.391Z",
            "lModBy": "u-3ae8bd39-xxxx-xxxx-b55b-85864a8202c3",
            "lMod": "2018-12-05T07:53:13.000Z",
            "lname": "mortgage",
            "__v": 0,
            "versionComment": "new update",
            "publishedOn": "2018-12-05T07:53:13.237Z",
            "name": "mortgage"
        }
    },
    {
        "resourceType": "dialog",
        "resourceId": "dg-b68f22ad-19b8-xxxx-xxxx-04156d391b44",
        "sbResourceId": "dg-b68f22ad-xxxx-xxxx-xxxx-04156d391b44",
        "status": "SUCCESS",
        "result": {
            "visibility": {
                "namespace": "enterprise",
                "namespaceIds": [
                    "o-23b63f37-xxxx-xxxx-bc5d-8012cbda0d4a"
                ]
            },
            "contextLifeTime": {
                "options": "close"
            },
            "version": "1.0",
            "nodes": [
                {
                    "nodeOptions": {
                        "transitionType": "auto",
                        "promptOptions": "required",
                        "reuseMarkedupPhrases": false,
                        "interruptOptions": {
                            "priority": "task"
                        },
                        "transitionMode": "initiateCurrentTask",
                        "inputHandlingOptions": "useAsEntityValue",
                        "reuseOptions": "1",
                        "noAutoCorrection": false,
                        "notForReuse": false,
                        "message": [],
                        "errorMessage": []
                    },
                    "nodeId": "intent0",
                    "type": "intent",
                    "transitions": [
                        {
                            "default": "entity2",
                            "metadata": {
                                "color": "#299d8e",
                                "connId": "dummy0"
                            }
                        }
                    ],
                    "metadata": {
                        "left": 175,
                        "top": 64
                    },
                    "componentId": "dc-4a22c00f-xxxx-xxxx-819b-db264a4a399b"
                },
                {
                    "nodeOptions": {
                        "transitionType": "auto",
                        "promptOptions": "required",
                        "reuseMarkedupPhrases": false,
                        "interruptOptions": {
                            "priority": "task"
                        },
                        "transitionMode": "initiateCurrentTask",
                        "inputHandlingOptions": "useAsEntityValue",
                        "reuseOptions": "1",
                        "noAutoCorrection": false,
                        "notForReuse": false,
                        "isOptional": false,
                        "message": [],
                        "errorMessage": [],
                        "precedence": "entityOverIntent"
                    },
                    "nodeId": "entity1",
                    "type": "entity",
                    "transitions": [
                        {
                            "default": "entity3",
                            "metadata": {
                                "color": "#299d8e",
                                "connId": "dummy1"
                            }
                        }
                    ],
                    "metadata": {
                        "left": 235,
                        "top": 396
                    },
                    "componentId": "dc-d2794a44-xxxx-xxxx-8073-5321a773c044"
                },
                {
                    "nodeOptions": {
                        "transitionType": "auto",
                        "promptOptions": "required",
                        "reuseMarkedupPhrases": false,
                        "interruptOptions": {
                            "priority": "node",
                            "type": {
                                "option": "developer"
                            },
                            "interruptsEnabled": true,
                            "holdUxOptions": {
                                "option": "discardCurrTaskNoNotify",
                                "message": ""
                            }
                        },
                        "transitionMode": "initiateCurrentTask",
                        "inputHandlingOptions": "useAsEntityValue",
                        "reuseOptions": "1",
                        "noAutoCorrection": false,
                        "notForReuse": false,
                        "message": [],
                        "errorMessage": [],
                        "isOptional": false,
                        "precedence": "entityOverIntent"
                    },
                    "nodeId": "entity2",
                    "type": "entity",
                    "transitions": [
                        {
                            "default": "entity1",
                            "metadata": {
                                "color": "#299d8e",
                                "connId": "dummy3"
                            }
                        }
                    ],
                    "metadata": {
                        "left": 175,
                        "top": 227
                    },
                    "componentId": "dc-9f065640-xxxx-xxxx-8de7-d19997adb487"
                },
                {
                    "nodeOptions": {
                        "transitionType": "auto",
                        "promptOptions": "required",
                        "reuseMarkedupPhrases": false,
                        "interruptOptions": {
                            "priority": "task"
                        },
                        "transitionMode": "initiateCurrentTask",
                        "inputHandlingOptions": "useAsEntityValue",
                        "reuseOptions": "1",
                        "noAutoCorrection": false,
                        "notForReuse": false,
                        "message": [],
                        "errorMessage": [],
                        "precedence": "entityOverIntent"
                    },
                    "nodeId": "entity3",
                    "type": "entity",
                    "transitions": [
                        {
                            "default": "message4",
                            "metadata": {
                                "color": "#299d8e",
                                "connId": "dummy5"
                            }
                        }
                    ],
                    "metadata": {
                        "left": 768,
                        "top": 404
                    },
                    "componentId": "dc-8f9c6361-xxxx-xxxx-950d-0b97b5b80ffb"
                },
                {
                    "nodeOptions": {
                        "transitionType": "auto",
                        "promptOptions": "required",
                        "reuseMarkedupPhrases": false,
                        "interruptOptions": {
                            "priority": "task"
                        },
                        "transitionMode": "initiateCurrentTask",
                        "inputHandlingOptions": "useAsEntityValue",
                        "reuseOptions": "1",
                        "noAutoCorrection": false,
                        "notForReuse": false,
                        "message": [],
                        "errorMessage": []
                    },
                    "nodeId": "message4",
                    "type": "message",
                    "transitions": [
                        {
                            "default": "end",
                            "metadata": {
                                "color": "#299d8e",
                                "connId": "dummy7"
                            }
                        }
                    ],
                    "metadata": {
                        "left": 786,
                        "top": 58
                    },
                    "componentId": "dc-45d51547-xxxx-xxxx-ba1a-3fe620f9ab89"
                }
            ],
            "isPublishedVersion": false,
            "idp": "none",
            "state": "awaitingApproval",
            "languages": [],
            "compatibility": [],
            "adminTaskStatus": "active",
            "editable": true,
            "isHidden": false,
            "approvedLanguages": [],
            "approvalRequestedLanguages": [
                "en"
            ],
            "localeData": {
                "en": {
                    "name": "Support",
                    "shortDesc": "Schedule"
                }
            },
            "isFollowUp": false,
            "interruptOptions": {
                "priority": "bot"
            },
            "_id": "dg-b68f22ad-19b8-xxxx-xxxx-04156d391b44",
            "refId": "19ad68d9-beb9-xxxx-xxxx3-47cf4e8cb1e7",
            "botId": "st-b4543a96-49ec-xxxx-xxxx-c6244fc23777",
            "createdBy": "u-3ae8bd39-xxxx-xxxx-b55b-85864a8202c3",
            "createdOn": "2018-12-05T07:45:19.402Z",
            "lModBy": "u-3ae8bd39-xxxx-xxxx-b55b-85864a8202c3",
            "lMod": "2018-12-05T07:53:13.000Z",
            "lname": "support",
            "__v": 0,
            "versionComment": "new update",
            "publishedOn": "2018-12-05T07:53:13.236Z",
            "name": "Support"
        }
    },
    {
        "resourceType": "NL",
        "status": "SUCCESS",
        "result": {
            "resourceId": "NL",
            "resourceType": "NL",
            "modules": [
                "nl_model",
                "settings"
            ],
            "name": "Natural Language"
        }
    },
    {
        "resourceType": "CHANNELS",
        "status": "SUCCESS",
        "result": {
            "resourceId": "CHANNELS",
            "resourceType": "CHANNELS",
            "modules": [
                "alexa"
            ],
            "name": "Channels"
        }
    },
    {
        "resourceType": "EXTENSIONS",
        "status": "SUCCESS",
        "result": {
            "resourceId": "EXTENSIONS",
            "resourceType": "EXTENSIONS",
            "modules": [
                "botkit",
                "agent_transfer",
                "websdk",
                "events"
            ],
            "name": "Extensions"
        }
    },
    {
        "resourceType": "SETTINGS",
        "status": "SUCCESS",
        "result": {
            "resourceId": "SETTINGS",
            "resourceType": "SETTINGS",
            "modules": [
                "general",
                "bot_variables",
                "pii",
                "ivr",
                "hold_resume",
                "custom_script",
                "advanced"
            ],
            "name": "Settings"
        }
    }
]
```