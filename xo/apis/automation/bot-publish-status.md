--8<-- "includes/automationai-api-back-link.md"

# Bot Publish Status – API

To fetch the publish status of the given agent or the last completed status request for the agent. To initiate the Publish API, refer [here](../automation/publish-bot.md).


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
   <td><code>https://{{host}}/api/public/bot/{{BotID}}/publish/status</code>
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

<li>Admin Console: Bot Publish > Publish Status
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
   <td><strong>MANDATE</strong>
   </td>
  </tr>
  <tr>
   <td><strong>host</strong>
   </td>
   <td>The environment URL. For example, <code>https://platform.kore.ai</code>
   </td>
   <td>Required
   </td>
  </tr>
  <tr>
   <td><strong>BotId</strong>
   </td>
   <td><em>Bot ID</em> or <em>Stream ID</em> can be accessed under <strong>General Settings</strong> on the App Builder.
<p>
<strong>Note</strong>: This is required only for App Builder API scope of Proactive Messages.
   </td>
   <td>Required
   </td>
  </tr>
</table>

## Sample Request


```json
curl -X GET 'https://{{host}}/api/1.1/public/bot/{{BotID}}/publish/status/' \
  -H 'Auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
```

## Body Parameters

No body parameters are passed.

## Sample Response

```json
{
    "_id": "ds-4a1b3e3d-7f55-5d80-acc6-7066e5cc6a6f",
    "action": "RUN",
    "jobType": "PUBLISH_BOT",
    "streamId": "st-a86a6717-340b-5830-a8b6-13b4aeb6b865",
    "__v": 0,
    "countOfDockStatuses": 1,
    "createdBy": "u-adb7cfc7-e9d1-55dd-acfc-214b82dc51d8",
    "percentageComplete": 100,
    "requestedTime": "2022-07-29T08:04:48.731Z",
    "status": "successful",
    "lastModifiedOn": "2022-07-29T08:04:50.083Z",
    "initiatedOn": "2022-07-29T08:04:48.828Z",
    "statusSummary": [
        {
            "resourceId": "SETTINGS",
            "resourceType": "SETTINGS",
            "name": "Settings",
            "modules": [
                "general",
                "bot_variables",
                "pii",
                "ivr",
                "hold_resume",
                "custom_script",
                "advanced"
            ],
            "result": {
                "resourceId": "SETTINGS",
                "resourceType": "SETTINGS",
                "name": "Settings",
                "modules": [
                    "general",
                    "bot_variables",
                    "pii",
                    "ivr",
                    "hold_resume",
                    "custom_script",
                    "advanced"
                ]
            },
            "status": "SUCCESS"
        },
        {
            "resourceId": "CHANNELS",
            "resourceType": "CHANNELS",
            "name": "Channels",
            "modules": [
                "rtm"
            ],
            "result": {
                "resourceId": "CHANNELS",
                "resourceType": "CHANNELS",
                "name": "Channels",
                "modules": [
                    "rtm"
                ]
            },
            "status": "SUCCESS"
        },
        {
            "resourceId": "EXTENSIONS",
            "resourceType": "EXTENSIONS",
            "name": "Extensions",
            "modules": [
                "botkit",
                "agent_transfer",
                "websdk",
                "events"
            ],
            "result": {
                "resourceId": "EXTENSIONS",
                "resourceType": "EXTENSIONS",
                "name": "Extensions",
                "modules": [
                    "botkit",
                    "agent_transfer",
                    "websdk",
                    "events"
                ]
            },
            "status": "SUCCESS"
        },
        {
            "resourceId": "BOTLANGUAGES",
            "resourceType": "BOTLANGUAGES",
            "name": "BotLanguages",
            "modules": {
                "enabledLanguages": [
                    "en"
                ]
            },
            "result": {
                "resourceId": "BOTLANGUAGES",
                "resourceType": "BOTLANGUAGES",
                "name": "BotLanguages",
                "modules": {
                    "enabledLanguages": [
                        "en"
                    ]
                }
            },
            "status": "SUCCESS"
        },
        {
            "resourceId": "NL",
            "resourceType": "NL",
            "name": "Natural Language",
            "modules": [
                "nl_model",
                "settings"
            ],
            "result": {
                "resourceId": "NL",
                "resourceType": "NL",
                "name": "Natural Language",
                "modules": [
                    "nl_model",
                    "settings"
                ]
            },
            "status": "SUCCESS"
        },
        {
            "resourceId": "dg-ebdce1a1-d912-52b7-b66e-5ad1eda304a6",
            "resourceVersion": "1.0",
            "resourceType": "dialog",
            "approvalRequestedLanguages": [
                "en"
            ],
            "name": "Find Keyword",
            "status": "SUCCESS",
            "result": {
                "visibility": {
                    "namespace": "enterprise",
                    "namespaceIds": [
                        "o-12f4144a-f85a-5cc3-8ba3-baec6a9602c4"
                    ]
                },
                "contextLifeTime": {
                    "options": "close"
                },
                "version": "1.0",
                "isPublishedVersion": false,
                "idp": "none",
                "state": "published",
                "languages": [],
                "compatibility": [],
                "adminTaskStatus": "active",
                "editable": true,
                "isHidden": false,
                "approvedLanguages": [
                    "en"
                ],
                "approvalRequestedLanguages": [
                    "en"
                ],
                "isFollowUp": false,
                "interruptOptions": {
                    "priority": "bot"
                },
                "amendConfig": {
                    "priority": "bot"
                },
                "vNameSpace": [
                    "5f9d4653e2bd8b32e8a58042"
                ],
                "_id": "dg-4f8e44e9-111b-59c8-bc15-32652cd571dd",
                "__v": 0,
                "createdBy": "u-adb7cfc7-e9d1-55dd-acfc-214b82dc51d8",
                "createdOn": "2022-07-29T08:04:49.188Z",
                "followupTaskOptions": {
                    "isFollowUp": false,
                    "message": ""
                },
                "lMod": "2022-07-29T08:04:49.000Z",
                "lModBy": "u-adb7cfc7-e9d1-55dd-acfc-214b82dc51d8",
                "lname": "find keyword",
                "nodes": [
                    {
                        "nodeOptions": {
                            "customTags": {
                                "session": [],
                                "message": [],
                                "user": []
                            },
                            "transitionType": "auto",
                            "isRetriesExceeded": false,
                            "promptOptions": "required",
                            "reuseMarkedupPhrases": false,
                            "interruptOptions": {
                                "priority": "task"
                            },
                            "transitionMode": "initiateCurrentTask",
                            "inputHandlingOptions": "useAsEntityValue",
                            "reuseOptions": "1",
                            "userInputCorrection": true,
                            "noAutoCorrection": false,
                            "notForReuse": false,
                            "contextTags": [],
                            "message": [],
                            "errorMessage": []
                        },
                        "vNameSpace": [],
                        "preConditions": [],
                        "useTaskLevelNs": true,
                        "nodeId": "intent0",
                        "type": "intent",
                        "transitions": [
                            {
                                "default": "service15",
                                "metadata": {
                                    "color": "#299d8e",
                                    "connId": "dummy0"
                                }
                            }
                        ],
                        "metadata": {
                            "left": 8,
                            "top": 121
                        },
                        "componentId": "dc-23b2efe4-3d4e-5d00-9b21-53e03583179b"
                    },
                    {
                        "nodeOptions": {
                            "customTags": {
                                "session": [],
                                "message": [],
                                "user": []
                            },
                            "transitionType": "auto",
                            "isRetriesExceeded": false,
                            "promptOptions": "required",
                            "reuseMarkedupPhrases": false,
                            "interruptOptions": {
                                "priority": "task"
                            },
                            "transitionMode": "initiateCurrentTask",
                            "inputHandlingOptions": "useAsEntityValue",
                            "reuseOptions": "1",
                            "userInputCorrection": true,
                            "noAutoCorrection": false,
                            "notForReuse": false,
                            "contextTags": [],
                            "message": [],
                            "errorMessage": []
                        },
                        "vNameSpace": [],
                        "preConditions": [],
                        "useTaskLevelNs": true,
                        "nodeId": "script2",
                        "type": "script",
                        "transitions": [
                            {
                                "if": {
                                    "context": "questionsFound",
                                    "op": "eq",
                                    "value": "0"
                                },
                                "then": "message4",
                                "metadata": {
                                    "color": "#299d8e",
                                    "connId": "dummy5"
                                }
                            },
                            {
                                "default": "message14",
                                "metadata": {
                                    "color": "#299d8e",
                                    "connId": "dummy3"
                                }
                            }
                        ],
                        "metadata": {
                            "left": 673,
                            "top": 422
                        },
                        "componentId": "dc-c7835a66-b6bc-5d55-860c-5679cfa055fb"
                    },
                    {
                        "nodeOptions": {
                            "customTags": {
                                "session": [],
                                "message": [],
                                "user": []
                            },
                            "transitionType": "auto",
                            "isRetriesExceeded": false,
                            "promptOptions": "required",
                            "reuseMarkedupPhrases": false,
                            "interruptOptions": {
                                "type": {
                                    "option": "developer"
                                },
                                "interruptsEnabled": false,
                                "priority": "node"
                            },
                            "transitionMode": "initiateCurrentTask",
                            "inputHandlingOptions": "useAsEntityValue",
                            "reuseOptions": "1",
                            "userInputCorrection": true,
                            "noAutoCorrection": false,
                            "notForReuse": false,
                            "contextTags": [],
                            "message": [],
                            "errorMessage": []
                        },
                        "vNameSpace": [],
                        "preConditions": [],
                        "useTaskLevelNs": true,
                        "nodeId": "message4",
                        "type": "message",
                        "transitions": [
                            {
                                "default": "end",
                                "metadata": {
                                    "color": "#299d8e",
                                    "connId": "dummy4"
                                }
                            }
                        ],
                        "metadata": {
                            "left": 745,
                            "top": 564
                        },
                        "componentId": "dc-2ada27bb-dc14-5cad-8ef6-0b92413b5972"
                    },
                    {
                        "nodeOptions": {
                            "customTags": {
                                "session": [],
                                "message": [],
                                "user": []
                            },
                            "transitionType": "auto",
                            "isRetriesExceeded": false,
                            "promptOptions": "required",
                            "reuseMarkedupPhrases": false,
                            "interruptOptions": {
                                "priority": "task"
                            },
                            "transitionMode": "initiateCurrentTask",
                            "inputHandlingOptions": "useAsEntityValue",
                            "reuseOptions": "1",
                            "userInputCorrection": true,
                            "noAutoCorrection": false,
                            "notForReuse": false,
                            "contextTags": [],
                            "message": [],
                            "errorMessage": []
                        },
                        "vNameSpace": [],
                        "preConditions": [],
                        "useTaskLevelNs": true,
                        "nodeId": "script8",
                        "type": "script",
                        "transitions": [
                            {
                                "if": {
                                    "context": "questionSearchType",
                                    "op": "eq",
                                    "value": "keyword"
                                },
                                "then": "script2",
                                "metadata": {
                                    "color": "#299d8e",
                                    "connId": "dummy17"
                                }
                            },
                            {
                                "default": "script10",
                                "metadata": {
                                    "color": "#299d8e",
                                    "connId": "dummy12"
                                }
                            }
                        ],
                        "metadata": {
                            "left": 342,
                            "top": 185
                        },
                        "componentId": "dc-aeee21d4-7eb3-59f8-985d-c30bb46d84d0"
                    },
                    {
                        "nodeOptions": {
                            "customTags": {
                                "session": [],
                                "message": [],
                                "user": []
                            },
                            "transitionType": "auto",
                            "isRetriesExceeded": false,
                            "promptOptions": "required",
                            "reuseMarkedupPhrases": false,
                            "interruptOptions": {
                                "priority": "task"
                            },
                            "transitionMode": "initiateCurrentTask",
                            "inputHandlingOptions": "useAsEntityValue",
                            "reuseOptions": "1",
                            "userInputCorrection": true,
                            "noAutoCorrection": false,
                            "notForReuse": false,
                            "contextTags": [],
                            "message": [],
                            "errorMessage": []
                        },
                        "vNameSpace": [],
                        "preConditions": [],
                        "useTaskLevelNs": true,
                        "nodeId": "script10",
                        "type": "script",
                        "transitions": [
                            {
                                "default": "message13",
                                "metadata": {
                                    "color": "#299d8e",
                                    "connId": "dummy16"
                                }
                            }
                        ],
                        "metadata": {
                            "left": 656,
                            "top": 197
                        },
                        "componentId": "dc-e3d1a42a-a6b3-5ef4-ad34-eaf3852e488e"
                    },
                    {
                        "nodeOptions": {
                            "customTags": {
                                "session": [],
                                "message": [],
                                "user": []
                            },
                            "transitionType": "auto",
                            "isRetriesExceeded": false,
                            "promptOptions": "required",
                            "reuseMarkedupPhrases": false,
                            "interruptOptions": {
                                "priority": "task",
                                "type": {
                                    "option": "doNotAllowHoldResume"
                                }
                            },
                            "transitionMode": "initiateCurrentTask",
                            "inputHandlingOptions": "useAsEntityValue",
                            "reuseOptions": "1",
                            "userInputCorrection": true,
                            "noAutoCorrection": false,
                            "notForReuse": false,
                            "contextTags": [],
                            "message": [],
                            "errorMessage": []
                        },
                        "vNameSpace": [],
                        "preConditions": [],
                        "useTaskLevelNs": true,
                        "nodeId": "message11",
                        "type": "message",
                        "transitions": [
                            {
                                "default": "message12",
                                "metadata": {
                                    "color": "#299d8e",
                                    "connId": "dummy18"
                                }
                            }
                        ],
                        "metadata": {
                            "left": 973,
                            "top": 182
                        },
                        "componentId": "dc-b88bfdb3-274e-5d82-ace7-0b8a19b1f6de"
                    },
                    {
                        "nodeOptions": {
                            "customTags": {
                                "session": [],
                                "message": [],
                                "user": []
                            },
                            "transitionType": "auto",
                            "isRetriesExceeded": false,
                            "promptOptions": "required",
                            "reuseMarkedupPhrases": false,
                            "interruptOptions": {
                                "priority": "task"
                            },
                            "transitionMode": "initiateCurrentTask",
                            "inputHandlingOptions": "useAsEntityValue",
                            "reuseOptions": "1",
                            "userInputCorrection": true,
                            "noAutoCorrection": false,
                            "notForReuse": false,
                            "contextTags": [],
                            "message": [],
                            "errorMessage": []
                        },
                        "vNameSpace": [],
                        "preConditions": [],
                        "useTaskLevelNs": true,
                        "nodeId": "message12",
                        "type": "message",
                        "componentId": "dc-9008c640-fe4a-554e-b941-a3835620bedb",
                        "transitions": [
                            {
                                "default": "end",
                                "metadata": {
                                    "color": "#299d8e",
                                    "connId": "dummy25"
                                }
                            }
                        ],
                        "metadata": {
                            "left": 1371,
                            "top": 155
                        }
                    },
                    {
                        "nodeOptions": {
                            "customTags": {
                                "session": [],
                                "message": [],
                                "user": []
                            },
                            "transitionType": "auto",
                            "isRetriesExceeded": false,
                            "promptOptions": "required",
                            "reuseMarkedupPhrases": false,
                            "interruptOptions": {
                                "priority": "task"
                            },
                            "transitionMode": "initiateCurrentTask",
                            "inputHandlingOptions": "useAsEntityValue",
                            "reuseOptions": "1",
                            "userInputCorrection": true,
                            "noAutoCorrection": false,
                            "notForReuse": false,
                            "contextTags": [],
                            "message": [],
                            "errorMessage": []
                        },
                        "vNameSpace": [],
                        "preConditions": [],
                        "useTaskLevelNs": true,
                        "nodeId": "message13",
                        "type": "message",
                        "componentId": "dc-0817f38b-26b7-525c-b6a8-8f358e5398ba",
                        "transitions": [
                            {
                                "default": "message11",
                                "metadata": {
                                    "color": "#299d8e",
                                    "connId": "dummy27"
                                }
                            }
                        ],
                        "metadata": {
                            "left": 806,
                            "top": 30
                        }
                    },
                    {
                        "nodeOptions": {
                            "customTags": {
                                "session": [],
                                "message": [],
                                "user": []
                            },
                            "transitionType": "auto",
                            "isRetriesExceeded": false,
                            "promptOptions": "required",
                            "reuseMarkedupPhrases": false,
                            "interruptOptions": {
                                "priority": "task"
                            },
                            "transitionMode": "initiateCurrentTask",
                            "inputHandlingOptions": "useAsEntityValue",
                            "reuseOptions": "1",
                            "userInputCorrection": true,
                            "noAutoCorrection": false,
                            "notForReuse": false,
                            "contextTags": [],
                            "message": [],
                            "errorMessage": []
                        },
                        "vNameSpace": [],
                        "preConditions": [],
                        "useTaskLevelNs": true,
                        "nodeId": "message14",
                        "type": "message",
                        "componentId": "dc-443d8c26-06f7-58fa-ab60-5edcbeaa7918",
                        "transitions": [
                            {
                                "default": "end",
                                "metadata": {
                                    "color": "#299d8e",
                                    "connId": "dummy27"
                                }
                            }
                        ],
                        "metadata": {
                            "left": 1084,
                            "top": 425
                        }
                    },
                    {
                        "nodeOptions": {
                            "customTags": {
                                "session": [],
                                "message": [],
                                "user": []
                            },
                            "transitionType": "auto",
                            "isRetriesExceeded": false,
                            "promptOptions": "required",
                            "reuseMarkedupPhrases": false,
                            "interruptOptions": {
                                "priority": "task"
                            },
                            "transitionMode": "initiateCurrentTask",
                            "inputHandlingOptions": "useAsEntityValue",
                            "reuseOptions": "1",
                            "userInputCorrection": true,
                            "noAutoCorrection": false,
                            "notForReuse": false,
                            "contextTags": [],
                            "message": [],
                            "errorMessage": []
                        },
                        "vNameSpace": [],
                        "preConditions": [],
                        "useTaskLevelNs": true,
                        "nodeId": "service15",
                        "type": "service",
                        "componentId": "dc-80557e8a-e14a-510d-9609-b6bb6b845d96",
                        "transitions": [
                            {
                                "default": "script8",
                                "metadata": {
                                    "color": "#299d8e",
                                    "connId": "dummy28"
                                }
                            }
                        ],
                        "metadata": {
                            "left": 8,
                            "top": 272
                        }
                    }
                ],
                "publishedOn": "2022-07-29T08:04:48.678Z",
                "refId": "e2135e58-6f62-5071-9c35-0d1cb395031b",
                "streamId": "st-a86a6717-340b-5830-a8b6-13b4aeb6b865",
                "versionComment": "check Publish",
                "groups": [],
                "resourceid": null,
                "traceId": null,
                "spanId": null,
                "name": "Find Keyword",
                "shortDesc": ""
            },
            "deployedTo": "enterprise"
        },
        {
            "resourceId": "5ecd12358bfeeb59851d90a0",
            "resourceVersion": "1.0",
            "resourceType": "knowledge",
            "name": "10241aaa",
            "status": "SUCCESS",
            "result": {
                "state": "published",
                "editable": true,
                "nodesToPublish": [],
                "deletedNodesToPublish": [],
                "publishRoot": true,
                "version": "1.0",
                "adminTaskStatus": "active",
                "ontologyReport": false,
                "vNameSpace": [
                    "5f9d4653e2bd8b32e8a58042"
                ],
                "_id": "62e394a00238910393277e11",
                "name": "10241aaa",
                "description": "This is used to make ontology",
                "refId": "0d599ce6-dc05-527f-a04c-d57059c9eefd",
                "isGraph": true,
                "taxonomy": [
                    {
                        "parent": [],
                        "synonyms": [],
                        "preConditions": [],
                        "contextTags": [],
                        "enableContext": false,
                        "traitRule": [],
                        "isDummy": true,
                        "editLocked": false,
                        "termStatus": true,
                        "label": "Internal Audit Chatbot",
                        "nodeId": "rootNodeId000000001",
                        "level": "LR"
                    }
                ],
                "language": "en",
                "visibility": {
                    "namespace": "enterprise",
                    "namespaceIds": [
                        "o-12f4144a-f85a-5cc3-8ba3-baec6a9602c4"
                    ]
                },
                "streamId": "st-a86a6717-340b-5830-a8b6-13b4aeb6b865",
                "botName": "10241aaa",
                "createdBy": "u-adb7cfc7-e9d1-55dd-acfc-214b82dc51d8",
                "lastModifiedBy": "u-adb7cfc7-e9d1-55dd-acfc-214b82dc51d8",
                "createdOn": "2022-07-29T08:04:48.913Z",
                "modifiedOn": "2022-07-29T08:04:48.927Z",
                "__v": 0,
                "publishedOn": "2022-07-29T08:04:48.927Z",
                "versionComment": null
            },
            "deployedTo": "enterprise"
        },
        {
            "resourceId": "AUTOVERSIONING",
            "resourceType": "AUTOVERSIONING",
            "name": "Creating New Version",
            "status": "SUCCESS"
        }
    ]
}
```


!!! note
    The possible values for the ‘status’ field in the response are – SUCCESSFUL, FAILED or INPROGRESS.
