# Agent Node Prompt Setup


This article provides a comprehensive overview of how to implement and optimize LLM-based AI Agent using the Agent Node, focusing on prompt engineering techniques to refine AI Agent behavior and improve the user experience.

Prompt engineering is the art and science of crafting clear, effective instructions for LLM-powered AI Agent to optimize their performance. By thoughtfully designing the System Context, developers can precisely control how the model communicates, ensure it follows specific guidelines, and refine its processing of user inputs. This strategic approach enables AI Agent to deliver responses that are more accurate, contextually appropriate, and aligned with the intended user experience.Defining Context and Personality.

To ensure consistency and alignment across interactions, apply prompt engineering techniques to define:

Context Definition:

* Specify the AI Agent’s role (for example, AI Agent or voice assistant) and the communication channel it operates within (text-based or voice-based).
* Outline the expected response length, preferred level of verbosity, and formality of responses.
* Provide a structured interaction goal, detailing the AI Agent’s primary function, such as customer support, appointment scheduling, or troubleshooting guidance.
* Indicate the company or service the AI Agent represents, ensuring that brand voice, terminology, and industry-specific nuances are reflected in responses.
* Define whether the AI Agent should proactively clarify ambiguous inputs, or wait for explicit user queries before responding.

Personality Definition 

Using the Conversations with Things framework, a conversation design methodology outlined in the book Conversations with Things, define:

* Interaction goals: Define what the AI Agent aims to achieve in conversations, such as assisting users, answering questions, or guiding them through processes.
* Level of personification: Decide how human-like the AI Agent should be, ranging from a fully automated to a more personable, engaging entity.
* Power dynamics in user interactions: Establish whether the AI Agent takes a directive approach (authoritative) or a supportive role (collaborative) in assisting users.
* Character traits: Identify core attributes of the AI Agent personality, such as professionalism, friendliness, or humor, to ensure consistency in interactions.
* Tone and key behavioral traits: Set the AI Agent’s communication style, including formality, friendliness, and how it responds to user inquiries.

The framework provides a structured approach to designing conversational experiences, ensuring that AI Agents maintain consistency, align with user expectations, and create meaningful interactions.

## Types of Prompts

The Agent Node supports two prompt versions: **V1 (Legacy)** and **V2 (Enhanced)**. Each version offers different approaches to handling system prompts, entity management, and tool-based orchestration. Choosing the right prompt version depends on factors such as execution style, exit scenario handling, and integration needs.




### Version 1 (Legacy Framework)

Version 1 supports both JSON and JavaScript modes. It's suitable for straightforward tasks and enables both tool calling and text generation. Choose Version 1 when:



* Only text generation is required, and JSON mode is preferred.
* Tool calling and text generation are both needed in JavaScript mode.
* Full control is needed over how responses are parsed using response keys. 



#### JSON Mode

JSON mode supports text generation only.



* Define dynamic input keys that the platform automatically populates during runtime.
* Provide test values to validate the prompt structure.
* Configure the following output keys:
    * **Text Response Path**: Identifies the location of the AI response in the JSON payload.
    * **AI Agent Response**: Specifies the response key to display to the end user.
    * **Exit Scenarios**: Indicates when the conversation should end.
    * **Collected Entities**: Captures specific values from the AI response.

If additional processing is needed, add a post-processor script to transform the LLM output as required for the platform. When a post-processor is used, the returned output must include the exact keys defined in the configuration.


#### JavaScript Mode

JavaScript mode is recommended when:


* Tool calling is required.
* Access to the full conversation history as an array is necessary.
* More advanced prompt logic is needed.

The prompt structure and output configuration follow the same pattern as in JSON mode. Ensure that both the prompt and the post-processor handle conversation history and tool interactions as expected.


### Version 2 (Tool-Calling Framework)

Version 2 supports only JavaScript mode and is built entirely around tool calling. Choose Version 2 when:



* Higher accuracy and structured responses are required.
* Entity collection and tool invocation must be fully integrated.
* Simplified configuration and improved maintainability are priorities.

Prompt creation in Version 2 eliminates the need to configure multiple output keys. The platform requires only:



* **Text Response Path**: Identifies the plain text response path.
* **Tool Call Request**: Indicates when the model intends to invoke a tool. 


The platform no longer requires configuration for **Virtual Assistant Response**, **Exit Scenarios**, or **Collected Entities**. These behaviors are now handled directly within the tools.


#### Entity Collection in Version 2

Entity collection is integrated into the tool framework. For example, a custom tool such as `ScheduleMeeting` can define parameters like date, time, and location. The language model extracts these values as part of the tool invocation.

This design simplifies configuration and improves entity extraction accuracy.


#### Tool Types in Version 2



* **System tool**: Includes predefined functionality such as `End_Orchestration`, which handles the end of the interaction.
* **Custom tools**: Defined based on specific business requirements.

#### Response Format in Version 2

Response Payload Format control that lets you define the model’s response schema in advance. When you select OpenAI or Azure OpenAI, the platform automatically parses the response, eliminating the need to manually configure the **Text Response Path** and **Tool Call Request**.

### Use Case Scenarios

For a more practical approach, the differences through scenarios can make the comparison more engaging.


* Scenario 1: Maintaining a Legacy assistance 

    A banking assistance that has predefined customer verification steps and strict entity collection. 
    
    Uses **V1 prompts** because it requires explicit entity handling and manual exit scenarios. 

* Scenario 2: Automating Customer Support 
  
    An AI Agent that dynamically suggests troubleshooting steps based on customer queries. 

    Uses **V2 prompts** because it needs tool integration and dynamic execution. 

* Scenario 3: Handling a Mixed Workflow 

    A AI Agent for insurance claims processing that requires predefined data collection but also uses external tools for verification. 
    Uses **V1 prompts** for entity collection but considers **V2 prompts** for automation and integration with external tools. 


### Regular vs. Streaming Prompts

To learn about the structural and implementation differences, as well as when to use Regular or Streaming Prompts, see [Regular vs. Streaming Prompts](../../generative-ai-tools/prompts-library.md#regular-vs-streaming-prompts).

### Parse Rich Templates

The Agent Node can now pass structured JSON responses from the LLM to client channels for rich UI presentation. When users enable the "Parse Rich Templates" option in custom prompt settings (available for V1 and V2 prompts), the node passes the JSON payloads as structured responses to the platform, which then sends them as templates to client channels. This can be achieved by either prompting the model to generate responses in structured JSON format or by generating the templates in the prompt post-processor. The Node passes these JSON payloads as structured responses to the platform, which then sends them as templates to client channels. The client channels render these templates as supported UI components such as cards, lists, tables, and suggestion chips, enabling visually engaging information display beyond plain text.

To enable this feature, toggle on **Parse Rich Templates** in the custom prompt. In the post-processor script window, select the appropriate channel type and enter the corresponding post-processor script.

Sample v1 prompt post-processor script:
```
let scriptResponse = {};
let tools = [];
let Templates = {
    Name:{
      rtm: function (content)  {
          return JSON.stringify({text:content})
      }
    },
     Modeofpayment: {
            rtm: function (content) {
                var info = ["UPI", "Cash", "Card"];
                var message = {
                    "type": "template",
                    "payload": {
                        "template_type": "button",
                        "text": content,
                        "subText": "Select the type of payment mode",
                        "buttons": []
                    }
                };
                for (i = 0; i < info.length; i++) {
                    // if the button is to send back text to platform
                    var button = {
                        "type": "postback",
                        "title": info[i],
                        "payload": info[i]
                    };

                    message.payload.buttons.push(button);
                }
                return JSON.stringify(message)
            },
            slack: function (content) {
                var info = ["Air", "Road", "Train"];
                var message = {
                    "blocks": [
                        {
                            "type": "section",
                            "text": {
                                "type": "plain_text",
                                "text": content,
                                "emoji": true
                            }
                        },
                        {
                            "type": "actions",
                            "elements": info.map((info, i) => ({
                                "type": "button",
                                "text": {
                                    "type": "plain_text",
                                    "text": info,
                                    "emoji": true
                                },
                                "value": info,
                                "action_id": "actionId-" + i
                            }))
                        }
                    ]
                };
                return JSON.stringify(message)
            }
        },
    book_ticket: {
        type_of_transport: {
            rtm: function (content) {
                var info = ["Air", "Road", "Train"];
                var message = {
                    "type": "template",
                    "payload": {
                        "template_type": "button",
                        "text": content,
                        "subText": "Select the type of transport you want to book a ticket for.",
                        "buttons": []
                    }
                };
                for (i = 0; i < info.length; i++) {
                    // if the button is to send back text to platform
                    var button = {
                        "type": "postback",
                        "title": info[i],
                        "payload": info[i]
                    };

                    message.payload.buttons.push(button);
                }
                return JSON.stringify(message)
            },
            slack: function (content) {
                var info = ["Air", "Road", "Train"];
                var message = {
                    "blocks": [
                        {
                            "type": "section",
                            "text": {
                                "type": "plain_text",
                                "text": content,
                                "emoji": true
                            }
                        },
                        {
                            "type": "actions",
                            "elements": info.map((info, i) => ({
                                "type": "button",
                                "text": {
                                    "type": "plain_text",
                                    "text": info,
                                    "emoji": true
                                },
                                "value": info,
                                "action_id": "actionId-" + i
                            }))
                        }
                    ]
                };
                return JSON.stringify(message)
            }
        },
        source: {
            rtm: function (content) {
                return JSON.stringify({ text: content })
            },
            slack: function (content) {
                return JSON.stringify({
                    "blocks": [
                        {
                            "type": "section",
                            "text": {
                                "type": "plain_text",
                                "text": content,
                                "emoji": true
                            }
                        }
                    ]
                })
            }
        },
        count: {
            rtm: function (content) {
                var quickReplies = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                var message = {
                    "type": "template",
                    "payload": {
                        "template_type": "quick_replies",
                        "text": content,
                        "quick_replies": []
                    }
                };

                for (i = 0; i < quickReplies.length; i++) {
                    //if only text needs to diplayed
                    var quickReply = {
                        "content_type": "text",
                        "title": quickReplies[i],
                        "payload": quickReplies[i]
                    };
                    message.payload.quick_replies.push(quickReply);
                }
                return JSON.stringify(message);
            },
            slack: function (content) {
                var quickReplies = [1, 2, 3, 4, 5, 6, 7, 8, 9];

                let blocks = {
                    "blocks": [
                        {
                            "type": "section",
                            "text": {
                                "type": "plain_text",
                                "text": content,
                                "emoji": true
                            }
                        },
                        {
                            "type": "actions",
                            "elements": [
                                {
                                    "type": "radio_buttons",
                                    "options": quickReplies.map((quickReply, i) => ({
                                        "text": {
                                            "type": "plain_text",
                                            "text": quickReply,
                                            "emoji": true
                                        },
                                        "value": quickReply
                                    }))
                                }
                            ]
                        }
                    ]
                }
                return JSON.stringify(blocks)
            }
        },
        seating_type: {
            rtm: function (content) {
                var quickReplies = ["Seater", "Sleeper"];
                var message = {
                    "type": "template",
                    "payload": {
                        "template_type": "quick_replies",
                        "text": content,
                        "quick_replies": []
                    }
                };

                for (i = 0; i < quickReplies.length; i++) {
                    //if only text needs to diplayed
                    var quickReply = {
                        "content_type": "text",
                        "title": quickReplies[i],
                        "payload": quickReplies[i]
                    };
                    message.payload.quick_replies.push(quickReply);
                }
                return JSON.stringify(message);
            },
            slack: function (content) {
                let blocks = {
                    "blocks": [
                        {
                            "type": "section",
                            "text": {
                                "type": "plain_text",
                                "text": content,
                                "emoji": true
                            }
                        },
                        {
                            "type": "actions",
                            "elements": [
                                {
                                    "type": "radio_buttons",
                                    "options": [
                                        {
                                            "text": {
                                                "type": "plain_text",
                                                "text": "Seater",
                                                "emoji": true
                                            },
                                            "value": "value-0"
                                        },
                                        {
                                            "text": {
                                                "type": "plain_text",
                                                "text": "Sleeper",
                                                "emoji": true
                                            },
                                            "value": "value-1"
                                        }
                                    ],
                                    "action_id": "actionId-0"
                                }
                            ]
                        }
                    ]
                }
                return JSON.stringify(blocks)
            }
        }
    },
    FetchAccounts: {
        accounttype: {
            rtm: function (content) {
                var info = ["saving", "current", "salary"];
                var message = {
                    "type": "template",
                    "payload": {
                        "template_type": "button",
                        "text": content,
                        //  "subText": "Select the type of transport you want to book a ticket for.",
                        "buttons": []
                    }
                };
                for (i = 0; i < info.length; i++) {
                    // if the button is to send back text to platform
                    var button = {
                        "type": "postback",
                        "title": info[i],
                        "payload": info[i]
                    };

                    message.payload.buttons.push(button);
                }
                return JSON.stringify(message)
            },
        }
    },
    type_of_transport: {
            rtm: function (content) {
                var info = ["Air", "Road", "Train"];
                var message = {
                    "type": "template",
                    "payload": {
                        "template_type": "button",
                        "text": content,
                        "subText": "Select the type of transport you want to book a ticket for.",
                        "buttons": []
                    }
                };
                for (i = 0; i < info.length; i++) {
                    // if the button is to send back text to platform
                    var button = {
                        "type": "postback",
                        "title": info[i],
                        "payload": info[i]
                    };

                    message.payload.buttons.push(button);
                }
                return JSON.stringify(message)
            },
            slack: function (content) {
                var info = ["Air", "Road", "Train"];
                var message = {
                    "blocks": [
                        {
                            "type": "section",
                            "text": {
                                "type": "plain_text",
                                "text": content,
                                "emoji": true
                            }
                        },
                        {
                            "type": "actions",
                            "elements": info.map((info, i) => ({
                                "type": "button",
                                "text": {
                                    "type": "plain_text",
                                    "text": info,
                                    "emoji": true
                                },
                                "value": info,
                                "action_id": "actionId-" + i
                            }))
                        }
                    ]
                };
                return JSON.stringify(message)
            }
        },
        source: {
            rtm: function (content) {
                return JSON.stringify({ text: content })
            },
            slack: function (content) {
                return JSON.stringify({
                    "blocks": [
                        {
                            "type": "section",
                            "text": {
                                "type": "plain_text",
                                "text": content,
                                "emoji": true
                            }
                        }
                    ]
                })
            }
        },
        count: {
            rtm: function (content) {
                var quickReplies = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                var message = {
                    "type": "template",
                    "payload": {
                        "template_type": "quick_replies",
                        "text": content,
                        "quick_replies": []
                    }
                };

                for (i = 0; i < quickReplies.length; i++) {
                    //if only text needs to diplayed
                    var quickReply = {
                        "content_type": "text",
                        "title": quickReplies[i],
                        "payload": quickReplies[i]
                    };
                    message.payload.quick_replies.push(quickReply);
                }
                return JSON.stringify(message);
            },
            slack: function (content) {
                var quickReplies = [1, 2, 3, 4, 5, 6, 7, 8, 9];

                let blocks = {
                    "blocks": [
                        {
                            "type": "section",
                            "text": {
                                "type": "plain_text",
                                "text": content,
                                "emoji": true
                            }
                        },
                        {
                            "type": "actions",
                            "elements": [
                                {
                                    "type": "radio_buttons",
                                    "options": quickReplies.map((quickReply, i) => ({
                                        "text": {
                                            "type": "plain_text",
                                            "text": quickReply,
                                            "emoji": true
                                        },
                                        "value": quickReply
                                    }))
                                }
                            ]
                        }
                    ]
                }
                return JSON.stringify(blocks)
            }
        },
        seating_type: {
            rtm: function (content) {
                var quickReplies = ["Seater", "Sleeper"];
                var message = {
                    "type": "template",
                    "payload": {
                        "template_type": "quick_replies",
                        "text": content,
                        "quick_replies": []
                    }
                };

                for (i = 0; i < quickReplies.length; i++) {
                    //if only text needs to diplayed
                    var quickReply = {
                        "content_type": "text",
                        "title": quickReplies[i],
                        "payload": quickReplies[i]
                    };
                    message.payload.quick_replies.push(quickReply);
                }
                return JSON.stringify(message);
            },
            slack: function (content) {
                let blocks = {
                    "blocks": [
                        {
                            "type": "section",
                            "text": {
                                "type": "plain_text",
                                "text": content,
                                "emoji": true
                            }
                        },
                        {
                            "type": "actions",
                            "elements": [
                                {
                                    "type": "radio_buttons",
                                    "options": [
                                        {
                                            "text": {
                                                "type": "plain_text",
                                                "text": "Seater",
                                                "emoji": true
                                            },
                                            "value": "value-0"
                                        },
                                        {
                                            "text": {
                                                "type": "plain_text",
                                                "text": "Sleeper",
                                                "emoji": true
                                            },
                                            "value": "value-1"
                                        }
                                    ],
                                    "action_id": "actionId-0"
                                }
                            ]
                        }
                    ]
                }
                return JSON.stringify(blocks)
            }
        },
        paymentType: {
            rtm: function (content) {
                var info = ["UPI", "Cash", "Card"];
                var message = {
                    "type": "template",
                    "payload": {
                        "template_type": "button",
                        "text": content,
                        "subText": "Select the type of transport you want to book a ticket for.",
                        "buttons": []
                    }
                };
                for (i = 0; i < info.length; i++) {
                    // if the button is to send back text to platform
                    var button = {
                        "type": "postback",
                        "title": info[i],
                        "payload": info[i]
                    };

                    message.payload.buttons.push(button);
                }
                return JSON.stringify(message)
            },
            slack: function (content) {
                var info = ["UPI", "Cash", "Card"];
                var message = {
                    "blocks": [
                        {
                            "type": "section",
                            "text": {
                                "type": "plain_text",
                                "text": content,
                                "emoji": true
                            }
                        },
                        {
                            "type": "actions",
                            "elements": info.map((info, i) => ({
                                "type": "button",
                                "text": {
                                    "type": "plain_text",
                                    "text": info,
                                    "emoji": true
                                },
                                "value": info,
                                "action_id": "actionId-" + i
                            }))
                        }
                    ]
                };
                return JSON.stringify(message)
            }
        },
}
let getEntities = function (entities = []) {
    let obj = {};
    for (const { key, value } of entities) {
        obj[key] = value;
    }
    return [obj];
}

if (llmResponse.choices[0].message.content) {
    let content = JSON.parse(llmResponse.choices[0].message.content);
    let mode = content.mode;
    content = content.response;
    scriptResponse.bot = content.bot;
    scriptResponse.entities = getEntities(content.entities);
    scriptResponse.conv_status = content.conv_status;
    if (mode === "entity") {
        if (Templates[content.entityName]?.[Channel_Type]){
            scriptResponse.bot = Templates[content.entityName]?.[Channel_Type]?.(content.bot);
        }
    }
    else if (mode == "tool") {
        let toolName = content.toolName.split(".")
        content.toolName = toolName.length >1 ? toolName[1]: toolName[0];
        
        if (Templates[content.toolName]?.[content.toolParam]?.[Channel_Type]){
            scriptResponse.bot = Templates[content.toolName]?.[content.toolParam]?.[Channel_Type]?.(content.bot);
        }
    }
    
}

if (llmResponse.choices[0].message.tool_calls && llmResponse.choices[0].message.tool_calls.length) {
    tools = llmResponse.choices[0].message.tool_calls.map(tool_call => ({
        toolCallId: tool_call.id,
        toolName: tool_call.function.name,
        args: tool_call.function.arguments
    }));
}

scriptResponse.tools = tools;
return JSON.stringify(scriptResponse);


```

Sample v2 prompt post-processor script:

```
let scriptResponse = {};
let tools = [];

let Templates = {
    book_ticket: {
        type_of_transport: {
            rtm: function (content) {
                var info = ["Air", "Road", "Train"];
                var message = {
                    "type": "template",
                    "payload": {
                        "template_type": "button",
                        "text": content,
                        "subText": "Select the type of transport you want to book a ticket for.",
                        "buttons": []
                    }
                };
                for (i = 0; i < info.length; i++) {
                    // if the button is to send back text to platform
                    var button = {
                        "type": "postback",
                        "title": info[i],
                        "payload": info[i]
                    };

                    message.payload.buttons.push(button);
                }
                return JSON.stringify(message)
            },
            slack: function (content) {
                var info = ["Air", "Road", "Train"];
                var message = {
                    "blocks": [
                        {
                            "type": "section",
                            "text": {
                                "type": "plain_text",
                                "text": content,
                                "emoji": true
                            }
                        },
                        {
                            "type": "actions",
                            "elements": info.map((info, i) => ({
                                "type": "button",
                                "text": {
                                    "type": "plain_text",
                                    "text": info,
                                    "emoji": true
                                },
                                "value": info,
                                "action_id": "actionId-" + i
                            }))
                        }
                    ]
                };
                return JSON.stringify(message)
            }
        },
        source: {
            rtm: function (content) {
                return JSON.stringify({ text: content })
            },
            slack: function (content) {
                return JSON.stringify({
                    "blocks": [
                        {
                            "type": "section",
                            "text": {
                                "type": "plain_text",
                                "text": content,
                                "emoji": true
                            }
                        }
                    ]
                })
            }
        },
        count: {
            rtm: function (content) {
                var quickReplies = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                var message = {
                    "type": "template",
                    "payload": {
                        "template_type": "quick_replies",
                        "text": content,
                        "quick_replies": []
                    }
                };

                for (i = 0; i < quickReplies.length; i++) {
                    //if only text needs to diplayed
                    var quickReply = {
                        "content_type": "text",
                        "title": quickReplies[i],
                        "payload": quickReplies[i]
                    };
                    message.payload.quick_replies.push(quickReply);
                }
                return JSON.stringify(message);
            },
            slack: function (content) {
                var quickReplies = [1, 2, 3, 4, 5, 6, 7, 8, 9];

                let blocks = {
                    "blocks": [
                        {
                            "type": "section",
                            "text": {
                                "type": "plain_text",
                                "text": content,
                                "emoji": true
                            }
                        },
                        {
                            "type": "actions",
                            "elements": [
                                {
                                    "type": "radio_buttons",
                                    "options": quickReplies.map((quickReply, i) => ({
                                        "text": {
                                            "type": "plain_text",
                                            "text": quickReply,
                                            "emoji": true
                                        },
                                        "value": quickReply
                                    }))
                                }
                            ]
                        }
                    ]
                }
                return JSON.stringify(blocks)
            }
        },
        seating_type: {
            rtm: function (content) {
                var quickReplies = ["Seater", "Sleeper"];
                var message = {
                    "type": "template",
                    "payload": {
                        "template_type": "quick_replies",
                        "text": content,
                        "quick_replies": []
                    }
                };

                for (i = 0; i < quickReplies.length; i++) {
                    //if only text needs to diplayed
                    var quickReply = {
                        "content_type": "text",
                        "title": quickReplies[i],
                        "payload": quickReplies[i]
                    };
                    message.payload.quick_replies.push(quickReply);
                }
                return JSON.stringify(message);
            },
            slack: function (content) {
                let blocks = {
                    "blocks": [
                        {
                            "type": "section",
                            "text": {
                                "type": "plain_text",
                                "text": content,
                                "emoji": true
                            }
                        },
                        {
                            "type": "actions",
                            "elements": [
                                {
                                    "type": "radio_buttons",
                                    "options": [
                                        {
                                            "text": {
                                                "type": "plain_text",
                                                "text": "Seater",
                                                "emoji": true
                                            },
                                            "value": "value-0"
                                        },
                                        {
                                            "text": {
                                                "type": "plain_text",
                                                "text": "Sleeper",
                                                "emoji": true
                                            },
                                            "value": "value-1"
                                        }
                                    ],
                                    "action_id": "actionId-0"
                                }
                            ]
                        }
                    ]
                }
                return JSON.stringify(blocks)
            }
        }
    },
    FetchAccounts: {
        accounttype: {
            rtm: function (content) {
                var info = ["saving", "current", "salary"];
                var message = {
                    "type": "template",
                    "payload": {
                        "template_type": "button",
                        "text": content,
                        //  "subText": "Select the type of transport you want to book a ticket for.",
                        "buttons": []
                    }
                };
                for (i = 0; i < info.length; i++) {
                    // if the button is to send back text to platform
                    var button = {
                        "type": "postback",
                        "title": info[i],
                        "payload": info[i]
                    };

                    message.payload.buttons.push(button);
                }
                return JSON.stringify(message)
            },
        }
    }
}
let content = llmResponse.choices[0].message.content;
if (content) {
    scriptResponse.bot = content;
    try {
        let parsedResp = JSON.parse(content);
        if (parsedResp.toolName && parsedResp.toolParam && parsedResp.prompt) {
            let toolName = parsedResp.toolName.split('.')
            if (toolName.length > 1) {
                toolName = toolName[1]
            }
            else {
                toolName = toolName[0]
            }
            if (Templates[toolName]?.[parsedResp.toolParam]?.[Channel_Type]) {
                scriptResponse.bot = Templates[toolName]?.[parsedResp.toolParam]?.[Channel_Type]?.(parsedResp.prompt)
            }
            else {
                scriptResponse.bot = parsedResp.prompt;
            }
        }
    }
    catch (e) {}
}


if (llmResponse.choices[0].message.tool_calls && llmResponse.choices[0].message.tool_calls.length) {
    tools = llmResponse.choices[0].message.tool_calls.map(tool_call => ({
        toolCallId: tool_call.id,
        toolName: tool_call.function.name,
        args: tool_call.function.arguments
    }));
}

scriptResponse.tools = tools;
return JSON.stringify(scriptResponse);


```



## Custom Prompt for Agent Node

Custom prompts are required to work with the Agent Node for tool-calling functionality. Platform users can create custom prompts using JavaScript to tailor the AI model's behavior and generate outputs aligned with their specific use case. By leveraging the Prompts Library, the users can access, modify, and reuse prompts across different Agent Nodes.
The custom prompt feature enables users to process the prompt and variables to generate a JSON object, which is then sent to the configured language model. Users can preview and validate the generated JSON object to ensure the desired structure is achieved.

Agent Node with custom prompt supports configuring pre and post-processor scripts at both node and prompt levels. This enables platform users to reuse the same custom prompt across multiple nodes while customizing the processing logic, input variables, and output keys for each specific use case. 

When you configure pre and post-processor scripts at both node and prompt levels, the execution order is: Node Pre-processor → Prompt Pre-processor → Prompt Execution → Prompt Post-processor → Node Post-processor.

!!! warning

    Configuring pre and post-processor scripts at both node and prompt levels may increase latency.

!!! note

    Node-level pre and post-processor scripts support [App Functions](../../app-settings/dev-tools/reusing-bot-functions-custom-script-file.md) in addition to content, context, and environment variables.



Let’s review a sample prompt written in Javascript and follow the step-by-step instructions to create a custom prompt. 

=== "Sample JavaScript V1"

  ```
    let payloadFields = {
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 8192,
    system:`${System_Context}.

                    ${Required_Entities && Required_Entities.length ?
                    `**Entities Required for the Use Case*: You are instructed to collect the from the List: ${Required_Entities}
                     **Entity Collection Rules**:
                        - Do not Prompt the user if the any of entities data is already captured or available in the context`: ''}
                    **Instructions To be Followed**:: ${Business_Rules}
                    **Tone and Language**::  
                       - Maintain a professional, helpful, and polite tone.  
                       - Support multiple languages if applicable to cater to diverse users.

                    **Output Format**::
                        - You Should Always STRICTLY respond in a **STRINGIFIED JSON format** to ensure compatibility with downstream systems.
                        - The response JSON must include the following keys:  
                          - "bot": A string containing either:
                            - A prompt to collect missing required information
                            - A final response
                          - "entities": An array of objects containing collected entities in format:
                            [
                              {
                                "key1": "value1",
                                "key2": "value2"
                              }
                            ]
                          - **conv_status**: String indicating conversation status:
                            - "ongoing": When conversation requires more information
                            - "ended": When one of these conditions is met:
                              - All required entities are collected
                              - All required functions/tools executed successfully
                              - Final response provided to user
                              - when one of the Scenarios Met from ${Exit_Scenarios}.`,
    messages: []
    };

    // Check if List_of_Tools exists and has length
    if (Tools_Definition && Tools_Definition.length) {
      payloadFields.tools = Tools_Definition.map(tool_info => {
          return {
              name: tool_info.name,
              description: tool_info.description,
              input_schema: tool_info.parameters
          };
      });
    }

    // Map conversation history to context chat history
    let contextChatHistory = [];
    if (Conversation_History && Conversation_History.length) {
        contextChatHistory = Conversation_History.map(function(entry) {
          return {
              role: entry.role === "tool" ? "user" : entry.role,
              content: (typeof entry.content === "string") ? entry.content : entry.content.map(content => {
                  if (content.type === "tool-call") {
                      return  {
                            "type": "tool_use",
                            "id": content.toolCallId,
                            "name": content.toolName,
                            "input": content.args
                        }
                  }
                  else {
                        return {
                            "type": "tool_result",
                            "tool_use_id": content.toolCallId,
                            "content": content.result
                        }
                  }
              })
          };
        });
    }
    // Push context chat history into messages
    payloadFields.messages.push(...contextChatHistory);

    Add user input to messages
    let lastMessage;
    if (contextChatHistory && contextChatHistory.length) {
        lastMessage = contextChatHistory[contextChatHistory.length-1];
    }

    if (!lastMessage || (lastMessage && lastMessage.role !== "tool")) {
        payloadFields.messages.push({
          role: "user",
          content: `${User_Input}`
        });
    }

    // Assign payloadFields to context
    context.payloadFields = payloadFields;
  ```

=== "Sample JavaScript V2"

  ```
    // Ensure to assign the JSON object to the context variable `context.payloadFields` for further processing. Example: context.payloadFields = jsonObject //
    // Importing this template will also import its associated post-processor, which will be available in the post-processor section. //
   let payloadFields = {
      model: "gpt-4o",
      temperature: 0.73,
      max_tokens: 1068,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      messages: [
          {
              role: "system",
              content: `You are a professional AI Agent representing an enterprise business. Maintain a professional demeanor at all times and focus exclusively on business-related conversations. Do not engage with abusive language or non-business topics.

              ${System_Context}

              When processing user instructions, adhere to the following guidelines:

              ${Business_Rules}

              COMMUNICATION GUIDELINES:
              - Communicate in clear, friendly, professional language in ${language}
              - Generate appropriate prompts to collect necessary information from users
              - Use available tools to complete requested tasks efficiently
              - Before concluding interactions, verify if users require additional help

              TOOL USAGE:
              - Follow each tool's specific description and requirements precisely
              - Leverage appropriate tools for task completion as needed

              ERROR HANDLING PROTOCOL:
              1. Invalid Inputs
                • Provide clear, specific error messages
                • Guide users to correct input format
                • Include examples when helpful for clarity

              2. Tool Failures
                • Display user-friendly error notifications
                • Offer alternative solutions or retry options
                • Preserve all previously collected valid data

              3. Business Rule Violations
                • Clearly explain the specific violation
                • Guide users toward compliant alternatives
                • Maintain all valid data already collected

              4. Premature Exit Requests
                • Confirm user's intention to end interaction
                • Save progress where applicable
                • Execute end_orchestration() upon confirmation
              `
          }
      ]
   };

    if (Tools_Definition && Tools_Definition.length) {
        payloadFields.tools = Tools_Definition.map(tool_info => {
            return {
                type: "function",
                function: tool_info
            };
        });
    }

    let contextChatHistory = [];

    Conversation_History.forEach(function (entry) {
        if (entry.role === "tool") {
            entry.content.forEach(function (content) {
                contextChatHistory.push({
                    role: "tool",
                    content: content.result,
                    tool_call_id: content.toolCallId
                });
            });
        } else if (entry.role === "user") {
            contextChatHistory.push({
                role: entry.role,
                content: entry.content
            });
        } else {
            if (typeof entry.content === "string") {
                contextChatHistory.push({
                    role: entry.role === "bot" ? "assistant" : entry.role,
                    content: entry.content
                });
            } else {
                contextChatHistory.push({
                    role: entry.role,
                    tool_calls: entry.content.map(function (content) {
                        return {
                            id: content.toolCallId,
                            type: "function",
                            function: {
                                arguments: JSON.stringify(content.args),
                                name: content.toolName
                            }
                        };
                    })
                });
            }
        }
    });

    payloadFields.messages.push(...contextChatHistory);
    context.payloadFields = payloadFields;
  ```
<hr>



### Add Custom Prompt

The process involves creating a new prompt in the Prompts Library and writing the JavaScript code to generate the desired JSON object. Users can preview and test the prompt to ensure it generates the expected JSON object. After the custom prompt is created, users can select it in the Agent Node configuration to leverage its functionality.


For more information on Custom Prompt, see [Prompts Library](../../generative-ai-tools/prompts-library.md).

#### Add V1 Custom Prompt

For details, see [When to use V1 Prompt.](#version-1-legacy-framework)

To add an Agent Node V1 prompt using JavaScript, follow the steps:

1. Go to **Generative AI Tools** > **Prompts Library** and click **+ New Prompt**.
3. Enter the **prompt name**. In the **feature** dropdown, select **Agent Node** and select the **model**. 
4. The Configuration section consists of End-point URLs, Authentication, and Header values required to connect to a large language model. These are auto populated based on the input provided while model integration and aren't editable.
5. In the Request section, in the Advanced Configuration, select Prompt Version 1 from the drop-down list.  
<img src="../images/v1dropdown.png" alt="Select Prompt" title="Select Prompt Version" style="border: 1px solid gray; zoom:70%;">

6. Ensure the Stream Response is disabled,  as the Agent Node V1 custom JavaScript prompt supports tool calling and streaming as separate capabilities, but not simultaneously.


7. You can either create a request from scratch or import the existing prompt from the Library to modify as needed. For example, click **Start from Scratch**. [Learn more](#dynamic-variables).  
<img src="../images/v1toolcall.png" alt="Start from Scratch" title="Start from Scratch" style="border: 1px solid gray; zoom:70%;">

7. Click **JavaScript**. The Switch Mode pop-up is displayed. Click **Continue**.  
<img src="../images/switch.png" alt="ISwitch Mode" title="Switch Mode" style="border: 1px solid gray; zoom:70%;">

    
8. Enter the **JavaScript**. The Sample Context Values are displayed. To know more about context values, see [Dynamic Variables](#dynamic-variables).  
<img src="../images/toolcall2.png" alt="Script Preview" title="Script Preview" style="border: 1px solid gray; zoom:70%;">


9. Enter the Variable **Value** and click **Test**. This will convert the JavaScript to a JSON object and send it to the LLM.  
<img src="../images/values.png" alt="Script Preview" title="Script Preview" style="border: 1px solid gray; zoom:70%;">

10. You can open a Preview pop-up to enter the variable value, test the payload, and view the JSON response.  
<img src="../images/valuepopup.png" alt="Preview pop-up" title="Preview pop-up" style="border: 1px solid gray; zoom:70%;">  
<img src="../images/jsonpreview.png" alt="JSON Preview" title="JSON Preview" style="border: 1px solid gray; zoom:70%;">

10. The LLM's response is displayed.  
<img src="../images/content-key.png" alt="Response" title="Response" style="border: 1px solid gray; zoom:70%;">

11. In the Actual Response section, double-click the **Key** that should be used to generate the text response path. For example, double-click the **Content** key and click **Save**.

12. (Optional) toggle **Parse Rich Templates** to render the supported rich templates. Click Modify the post-processor script.
    1. In the system context value, select the communication channel from the dropdown, enter the post-processor script, and click **Save & Test**.
    2. The script response is displayed. Click **Save**.  
    <img src="../images/rich-template-postprocessor.png" alt="Parse Rich Templates" title="Parse Rich Templates" style="border: 1px solid gray; zoom:70%;">




12. Enter the **Exit Scenario Key-Value fields**, **Virtual Assistance Response Key**, and **Collected Entities**. The Exit Scenario Key-Value fields help identify when to end the interaction with the Agent model and return to the dialog flow. A Virtual Assistance Response Key is available in the response payload to display the AI Agent’s response to the user. The Collected Entities is an object within the LLM response that contains the key-value of pairs of entities to be captured.  
<img src="../images/essentialkeysv1.png" alt="Essential keys" title="Essential keys" style="border: 1px solid gray; zoom:70%;">

13. Enter the **Tool Call Request key**. The tool-call request key in the LLM response payload enables the Platform to execute the tool-calling functionality.

14. Click **Test**. The Key Mapping pop-up appears.
    1. If all the key mapping is correct, close the pop-up and go to step 15.  
    <img src="../images/keymappingright.png" alt="Essential keys" title="Essential keys" style="border: 1px solid gray; zoom:70%;">

    2. If the key mapping, actual response, and expected response structures are mismatched, click **Configure** to write the post-processor script.  
    <img src="../images/key-map.png" alt="Essential keys" title="Essential keys" style="border: 1px solid gray; zoom:70%;">
    
        !!! note
            
            When you add the post-processor script, the system does not honor the text response and sets all child keys under the text and tool keys to match those in the post-processor script. 

        1. On the Post-Processor Script pop-up, enter the Post-Processor Script and click **Save & Test**. The response path keys are updated based on the post-processor script.  
        <img src="../images/postprocessor.png" alt="Post-Processor Script" title="Post-Processor Script" style="border: 1px solid gray; zoom:70%;">     
        2. The expected LLM response structure is displayed. If the LLM response isn't aligned with the expected response structure, the runtime response might be affected. Click **Save**.

15. Click **Save**. The request is added and displayed in the **Prompts and Requests Library** section.  

16. Go to the Agent Node in the dialog. Select the Model and Custom Prompt for the tooling calling.  
<img src="../images/selectv1.png" alt="Custom Prompt" title="Custom Prompt" style="border: 1px solid gray; zoom:70%;">

    If the default prompt is selected, the system will display a warning that “Tools calling functionality requires custom prompts with streaming disabled.  
<img src="../images/errornote.png" alt="Custom Prompt" title="Custom Prompt" style="border: 1px solid gray; zoom:70%;">


#### Add V2 Custom Prompt

For details, see [When to use V2 Prompt.](#version-2-tool-calling-framework)

To add an Agent Node V2 streaming prompt, follow the steps:


1. Go to **Generative AI Tools** > **Prompts Library** and click **+ New Prompt**.
2. Enter the **prompt name**. In the **feature** dropdown, select **Agent Node** and select the **model**.
3. The Configuration section consists of End-point URLs, Authentication, and Header values required to connect to a large language model. These are auto populated based on the input provided during model integration and aren't editable. 
4. In the Request section, in the Advanced Configuration, select **Prompt Version 2** from the drop-down list. The Switch Version pop-up is displayed. Click **Proceed**.  
<img src="../images/v2dropdown.png" alt="Select Prompt" title="Select Prompt Version" style="border: 1px solid gray; zoom:70%;">

5. Toggle the stream responses. By default, the response streaming is disabled. Enabling streaming disables the “Exit Scenario,” “AI Agent Response”, “Collected Entities,” “Tool Call Request,” and "post-processor script."

5. You can either create a Prompt from scratch or import the existing prompt template from the Library to modify as needed. For example, click **Import from Prompts and Requests Library**. The V2 prompt templates are displayed.  
<img src="../images/v2toolcall.png" alt="Import from Prompts and Requests Library" title="Import from Prompts and Requests Library" style="border: 1px solid gray; zoom:70%;">

    !!! note

        Importing the V2 prompt template also imports the post-processor automatically.

6. Select the **Feature**, **Model**, and Prompt **Template - V2** from the dropdown menu. Hover over and click Preview Prompt to view the prompt before importing.  
<img src="../images/selectv2template.png" alt="Select V2 Prompt Template" title="Select V2 Prompt Template" style="border: 1px solid gray; zoom:70%;">

7. Click **Confirm** to get it imported into the Javascript body. Modify the prompt as required.
8. (Optional) To add a Pre-Processor Script, click **Configure**. On the Pre-Processor Script pop-up, enter the Script and click **Save**.
9. Enter the Sample Context Values and click **Test**. To know more about context values, see[ Dynamic Variables](#dynamic-variables).  
<img src="../images/values.png" alt="Script Preview" title="Script Preview" style="border: 1px solid gray; zoom:70%;">
  
10. You can open a Preview pop-up to enter the variable value, test the payload, and view the JSON response.  
<img src="../images/valuepopup.png" alt="Preview pop-up" title="Preview pop-up" style="border: 1px solid gray; zoom:70%;">  
<img src="../images/jsonpreview.png" alt="JSON Preview" title="JSON Preview" style="border: 1px solid gray; zoom:70%;">

10. The Actual Response is displayed.

11. Select the Response format from the dropdown.
    * If response streaming is enabled, select OpenAI or Azure OpenAI, then click **Save**.  
    <img src="../images/actual-response.png" alt="Response format" title="Response format" style="border: 1px solid gray; zoom:70%;">
    
    * If response streaming is disabled:
        
        * Select OpenAI or Azure OpenAI, then click **Save**.
        * If you select Custom, enter the **Text Response Path** and **Tool Call Request key**. The tool-call request key in the LLM response payload enables the Platform to execute the tool-calling functionality. Click **Modify** to edit the Post-Processor Script. The expected LLM response structure is displayed. If the LLM response isn't aligned with the expected response structure, the runtime response might be affected. Click **Save**.  <img src="../images/custom-response-format.png" alt="Response format" title="Response format" style="border: 1px solid gray; zoom:70%;">

12. (Optional) toggle Parse Rich Templates to enable rich UI presentation.  
<img src="../images/parse-rich-templates.png" alt="Parse Rich Templates" title="Parse Rich Templates" style="border: 1px solid gray; zoom:70%;">

12. (Optional) If you have enabled Token Usage Limits for your Custom Model, map the Request Tokens key and Response Tokens key for accurate token tracking and Analytics. Without proper mapping, the Platform can't calculate token consumption, potentially leading to untracked usage and unexpected costs.
    * Request Tokens key: `usage.input_tokens`
    * Response Tokens key: `usage.output_tokens`  
    <img src="../images/token-mapping.png" alt="token mapping" title="token mapping" style="border: 1px solid gray; zoom:70%;">

13. Click **Test**. The Key Mapping pop-up appears.
    * If all the key mapping is correct, close the pop-up and go to step 15.  
    <img src="../images/keymappingright.png" alt="Key Mapping" title="Key Mapping" style="border: 1px solid gray; zoom:70%;">
    * If the key mapping, actual response, and expected response structures are mismatched, click **Configure** to write the post-processor script.  
    <img src="../images/v2key-map.png" alt="Key Mapping" title="Key Mapping" style="border: 1px solid gray; zoom:70%;">



15. Click **Save**. The request is added and displayed in the **Prompts and Requests Library** section.  


16. Go to the Agent Node in the dialog. Select the Model and Custom Prompt for the tool calling.  
<img src="../images/selectv2new.png" alt="Custom Prompt" title="Custom Prompt" style="border: 1px solid gray; zoom:70%;">


### Expected Output Structure

Defines the standardized format required by the Platform to process LLM responses effectively.

#### Expected Output Structure - V1 Prompt

<table border="1">
  <thead>
    <tr>
      <th>Format Type</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Text Response Format </td>
      <td>
        <pre>
{
  "bot": "Sure, I can help you with that. Can I have your name please?",
  "analysis": "Initiating appointment scheduling.",
  "entities": [],
  "conv_status": "ongoing"
}
        </pre>
      </td>
    </tr>
    <tr>
      <td>Conversation Status Format </td>
      <td>
        <pre>
{
  "bot": "Sure, I can help you with that. Can I have your name please?",
  "analysis": "Initiating appointment scheduling.",
  "entities": [],
  {=="conv_status": "ongoing"==}
}
        </pre>
      </td>
    </tr>
    <tr>
      <td>Virtual Assistant Response Format </td>
      <td>
        <pre>
{
  {=="bot": "Sure, I can help you with that. Can I have your name please?"==},
  "analysis": "Initiating appointment scheduling.",
  "entities": [],
  "conv_status": "ongoing"
}
        </pre>
      </td>
    </tr>
    <tr>
      <td>Collected Entities Format</td>
      <td>
        <pre>
{
  "bot": "Sure, I can help you with that. Can I have your name please?",
  "analysis": "Initiating appointment scheduling.",
  {== "entities": []==},
  "conv_status": "ongoing"
}
        </pre>
      </td>
    </tr>
    <tr>
      <td>Tool Response Format </td>
      <td>
        <pre>
{
  "toolCallId": "call_q5yiBbnXPhEPqkpzsLv2isho",
  "toolName": "get_delivery_date",
  "result": {
    "delivery_date": "2024-11-20"
  }
}
        </pre>
      </td>
    </tr>
    <tr>
      <td>Post-Processor Script Format </td>
      <td>
        <pre>
{
  "bot": "I'll help you check the delivery date for order ID 123.",
  "entities": [{"order_id": "123"}],
  "conv_status": "ongoing",
  "tools": [
    {
      "toolCallId": "toolu_016FWtdANisgqDLu3SjhAXJV",
      "toolName": "get_delivery_date",
      "args": { "order_id": "123" }
    }
  ]
}
      </pre>
      </td>
    </tr>
    
  </tbody>
</table>


#### Tool Request Format - V2 Prompt


<table border="1" cellpadding="6" cellspacing="0">
  <tr>
    <th>Format Type</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>Custom Tools Format</td>
    <td>
      <pre>{
  "toolCallId": "call_q5yiBbnXPhEPqkpzsLv2xxxx",
  "toolName": "get_delivery_date",
  "args": {
    "order_id": "123456"
  }
}</pre>
    </td>
  </tr>
  <tr>
    <td>Default - End Orchestration Tool</td>
    <td>
      <pre>{
  "toolCallId": "call_q5yiBbnXPhEPqkpzsLv2xxxxe",
  "toolName": "end_orchestration",
  "args": {
    "conv_status": "Conversation status to be 'ended'."
  }
}</pre>
    </td>
  </tr>
  <tr>
    <td>Post-Processor Script Format</td>
    <td>
      <pre>let scriptResponse = {};
let tools = [];

if (llmResponse.choices[0].message.content) {
  scriptResponse.bot = llmResponse.choices[0].message.content;
}

if (llmResponse.choices[0].message.tool_calls?.length) {
  tools = llmResponse.choices[0].message.tool_calls.map(tc => ({
    toolCallId: tc.id,
    toolName: tc.function.name,
    args: tc.function.arguments
  }));
}

scriptResponse.tools = tools;
return JSON.stringify(scriptResponse);</pre>
    </td>
  </tr>
  <tr>
    <td>Conversation History with Inclusion of Tools</td>
    <td>
      <pre>[
  {
    "role": "user",
    "content": "Hi. I want to schedule an appointment with Dr. Emily"
  },
  {
    "role": "assistant",
    "content": "I can help you with that! First, I need to gather some information to schedule your appointment with Dr. Emily.\n\nCould you please provide me with your name and phone number?"
  },
  {
    "role": "assistant",
    "content": [
      {
        "type": "tool-call",
        "toolCallId": "call_nsadN6SYIyCpaPLE7QPo4WoI",
        "toolName": "collect_entities",
        "args": {
          "name": "John",
          "phone number": "9xxxxxxxxx"
        }
      }
    ]
  },
  {
    "role": "tool",
    "content": [
      {
        "type": "tool-result",
        "toolCallId": "call_nsadN6SYIyCpaPLE7QPo4WoI",
        "toolName": "collect_entities",
        "result": "{\"PatientName\":\"John\", \"phonenumber\":\"9xxxxxxxxx\"}",
        "status": "Success"
      }
    ]
  },
  {
    "role": "assistant",
    "content": "I have successfully collected the following information:\n\n- Patient Name: John\n- Patient Phone Number: 9xxxxxxxxx\n- Doctor Name: Dr. Emily\n\nNow, could you please provide me with your preferred date and time for the appointment?"
  }
]</pre>
    </td>
  </tr>
</table>


### Context Object

The context object is used to get the entities and the parameters of tools.


<table>
  <tr>
   <td>Entities
   </td>
   <td>{context.AI_Assisted_Dialogs.GenAINodeName.entities[x].{entityName}}
   </td>
  </tr>
  <tr>
   <td>Parameters
   </td>
   <td>{context.AI_Assisted_Dialogs.GenAINodeName.active_tool_args.{parameterName}}
   </td>
   <tr>
   <td>Virtual Assistance Response Path
   </td>
   <td>{{context.AI_Assisted_Dialogs.bot_response.bot}}
   </td>
  </tr>
</table>


### Output Keys 


<table>
  <tr>
   <td><strong>Variable Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>LLM_Text_Response_Path
   </td>
   <td>The key within the LLM response payload which gives the AI Agent’s response that should be displayed to the end-user during user-AI Agent conversation.
   </td>
  </tr>
  <tr>
   <td>LLM_Tool_Response_Path
   </td>
   <td>The key within the LLM response payload which the Platform should consider when the model is expecting to call a specific tool/tools.
   </td>
  </tr>
</table>




### Dynamic Variables

The Dynamic Variables like Context, Environment, and Content variables can now be used in pre-processor scripts, post-processor scripts, and custom prompts.

[Learn more](../../app-settings/variables/using-bot-variables.md).

<table>
  <tr>
   <td>
Keys
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>{{User_Input}}
   </td>
   <td>The latest input by the end-user.
   </td>
  </tr>
  <tr>
   <td>{{Model}} Optional
   </td>
   <td>This specifies the LLM tagged to the Agent Node in the Dialog Task.
   </td>
  </tr>
  <tr>
   <td>{{System_Context}} Optional
   </td>
   <td>This contains the initial instructions provided in the Agent Node that guide how the LLM should respond.
   </td>
  </tr>
  <tr>
   <td>{{Language}} Optional
   </td>
   <td>The language in which the LLM will respond to the users
   </td>
  </tr>
  <tr>
   <td>{{Business_Rules}} Optional
   </td>
   <td>Rules mentioned in the Agent Node are used to understand the user input and identify the required entity values.
   </td>
  </tr>
  <tr>
   <td>{{Exit_Scenarios}} Optional
   </td>
   <td>Scenarios mentioned in the Agent Node should terminate entity collection and transition to the next node based on Connection Rules.
   </td>
  </tr>
  <tr>
   <td>{{Conversation_History_String}} Optional
   </td>
   <td>This contains the messages exchanged between the end-user and the AI Agent. It can used only in the JSON prompt.
   </td>
  </tr>
  <tr>
   <td>{{Conversation_History_Length}} Optional
   </td>
   <td>This contains a maximum number of messages that the conversation history variable can hold.
   </td>
  </tr>
  <tr>
   <td>{{Required_Entities}} Optional
   </td>
   <td>This contains the list of entities (comma-separated values) mentioned in the Agent Node to be captured by the LLM.
   </td>
  </tr>
  <tr>
   <td>{{Conversation_History}} Optional
   </td>
   <td>Past messages in the conversation are exchanged between the end-user and the AI Agent. This is an array of objects with role and content as keys. It can used only in the JavaScript prompt
   </td>
  </tr>
  <tr>
   <td>{{Collected_Entities}} Optional <br>(Applicable only to V1 Prompt)
   </td>
   <td>List of entities and their values collected by the LLM. This is an object with an entity name as the key and the value as LLM collected value.
   </td>
  </tr>
  <tr>
   <td>{{Tools_Definition}} Optional
   </td>
   <td>List of tools that will enable the language model to retrieve data, perform calculations, interact with APIs, or execute custom code.
   </td>
  </tr>
</table>