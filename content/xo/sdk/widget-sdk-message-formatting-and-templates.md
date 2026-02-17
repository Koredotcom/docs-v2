# Widget SDK – Message Formatting and Templates

Kore.ai Widget SDK allows you to override the default message formatting using markdown and apply templates to display custom formatted bot messages to users on the Widget SDK channel.

For details on Web/Mobile SDK, [refer here](web-mobile-sdk-message-formatting-and-templates.md).

### Button Template

Shows a clickable button in the header option. The button can be placed anywhere within a message and for any message template.

There are two types of buttons:

* URL type to open an external site. _url_ field should contain the external site address.
* postback type to trigger an utterance in Assistant. The _payload_ defines the utterance to be passed to the Assistant and the _nlmeta_ defines the additional information that the Platform needs to trigger the respective task.

**Example**

```javascript
var message = {
 "templateType": "List",
 "widgetName": "Account Summary",
 "description": "Showing all accounts",
 "headerOptions": {
  "layout": {
   "align": "top",
   "colSize": "25%"
  },
  "type": "button",
  "button":
		    {
                        // type can be anyone of ["url", "postback"]
			"type": "postback",
			"title": "New Account",
			"payload": "Apply Account",
			"nlmeta": {
				"intent": "Apply Account",
				"isRefreshplace": "true",
				"entities": {
					"Name": "John"
				},
				"interruptionOptions": "discardAll"
			},
			"customdata": {
				"key": "value"
			}
          }
	},
	"elements": [
	  {
			"title": "Salary Account",
			"subtitle": "Active",
			"details": [
			  {
					"image": {
						"image_type": "image",
						"image_src": "https://static.thenounproject.com/png/2539563-200.png"
					},
					"description": "$ 25 - Feb 8, 2020 08:45 AM - Fuel Purchase"
				}
			]
		}
	]
}
print(JSON.stringify(message));
```


<img src="../images/widget-message-templates/button-template.png" alt="Button template" title="Button template" style="border: 1px solid gray; zoom:70%;">

### Menu Template

Shows a dropdown menu in the header option. The menu can be placed for any message template. There are two types of menu items:

* URL type to open an external site. _url_ field should contain the external site address.
* postback type to trigger an utterance in the Assistant. The _payload_ defines the utterance to be passed to the assistant and the _nlmeta_ defines the additional information that the Platform needs to trigger the respective task.

**Example**


```javascript
var message = {
	"templateType": "List",
	"widgetName": "Account Summary",
	"description": "Showing all accounts",
	"headerOptions": {
		"layout": {
			"align": "top",
			"colSize": "25%"
		},
		"type": "menu",
		"menu":
            [
             {
                // type can be anyone of ["url", "postback"]
                "type": "url",
                "title": "Website",
                "url": "kore.ai",
                "customdata": {
                    "key": "value"
                }
            },
            {
                // type can be anyone of ["url", "postback"]
                "type": "postback",
                "title": "New Account",
                "payload": "Create Account",
                "nlmeta": {
                    "intent": "Create Account",
                    "entities": {},
                    "interruptionOptions": "discardAll"
                },
                "customdata": {
                    "key": "value"
                }
            }
        ]
	},
    "elements": [
	  {
			"title": "Salary Account",
			"subtitle": "Active",
			"details": [
			  {
					"image": {
						"image_type": "image",
						"image_src": "https://static.thenounproject.com/png/2539563-200.png"
					},
					"description": "$ 25 - Feb 8, 2020 08:45 AM - Fuel Purchase"
				}
			]
		}
	]
}
print(JSON.stringify(message));
```


<img src="../images/widget-message-templates/menu-template.png" alt="Menu template" title="Menu template" style="border: 1px solid gray; zoom:70%;">

### List Template

Shows a formatted list of date to the user with clickable text and images as choices for additional information or trigger tasks.

**Example**


```javascript
var message = {
	"templateType": "List",
	"widgetName": "Account Summary",
	"description": "Showing all accounts",
	"headerOptions": {
		"layout": {
			"align": "top",
			"colSize": "25%"
		},
               "type": "url",
               "url": {
               "title": "Open Site",
               "link": "kore.ai"
               },
	 },
	"elements": [
	  {
			"image": {
				"image_type": "image",
				"image_src": "https://static.thenounproject.com/png/1863652-200.png"
			},
			"title": "Salary Account",
			"subtitle": "Active",
			"buttonsLayout": {
				"displayLimit": {
					"count": 2        //adds an open icon if more than 2 elements are present
				},
				"style": "fitToWidth"
			},
			"value": {
				"layout": {
					"align": "top",
					"colSize": "25%"
				},
				"type": "text",
				"text": "$ 45",
			},
			"details": [
			  {
					"image": {
						"image_type": "image",
						"image_src": "https://static.thenounproject.com/png/2539563-200.png"
					},
					"description": "$ 25 - Feb 8, 2020 08:45 AM - Fuel Purchase"
				},
				{
					"image": {
						"image_type": "image",
						"image_src": "https://static.thenounproject.com/png/953447-200.png"
					},
					"description": "$ 77 - Feb 9, 2020 02:23 PM - Library Enrollment"
				},
				{
					"image": {
						"image_type": "image",
						"image_src": "https://static.thenounproject.com/png/2539563-200.png"
					},
					"description": "$ 18 - Feb 9, 2020 04:03 PM - Sainsbury's"
				}
			],
			"default_action": {
				"type": "postback",
				"payload": "Show recent transactions"
			},
			"buttons": [
			  {
					"type": "postback",
					"title": "Statement",
					"payload": "Account Statement",
					"image": {
						"image_type": "image",
						"image_src": "https://static.thenounproject.com/png/2033288-200.png"
					},
					"nlmeta": {
				"intent": "Account Statement",
				"isRefreshplace": "true",
				"entities": {
					"entity_name": "entity_value"
				},
				"interruptionOptions": "discardAll"
			},
			"customdata": {
				"key": "value"
			}
				},
			   {
					"type": "postback",
					"title": "Upgrade",
					"payload": "Upgrade Account",
					"image": {
						"image_type": "image",
						"image_src": "https://static.thenounproject.com/png/1586653-200.png"
					},
					"nlmeta": {
				"intent": "Upgrade Account",
				"isRefreshplace": "true",
				"entities": {
					"entity_name": "entity_value"
				},
				"interruptionOptions": "discardAll"
			},
			"customdata": {
				"key": "value"
			}
				}
			]
		},
	 {
			"image": {
				"image_type": "image",
				"image_src": "https://static.thenounproject.com/png/2119994-200.png"
			},
			"title": "Infinia Credit card",
			"subtitle": "Active - Payment Due on Feb 14, 2020",
			"buttonsLayout": {
				"displayLimit": {
					"count": 3
				},
				"style": "fitToWidth"
			},
			"value": {
				"layout": {
					"align": "top",
					"colSize": "25%"
				},
				"type": "text",
				"text": "$ 8,520",
			},
			"details": [
			  {
					"image": {
						"image_type": "image",
						"image_src": "https://static.thenounproject.com/png/953447-200.png"
					},
					"description": "$ 78 - Feb 3, 2020 07:03 PM - Pizzabar"
				},
				{
					"image": {
						"image_type": "image",
						"image_src": "https://static.thenounproject.com/png/953447-200.png"
					},
					"description": "$ 12 - Feb 5, 2020 11:23 AM - McDonald's"
				},
					{
					"image": {
						"image_type": "image",
						"image_src": "https://static.thenounproject.com/png/953447-200.png"
					},
					"description": "$ 62 - Feb 6, 2020 02:11 PM - CarzRent"
				}
			],
			"default_action": {
				"type": "postback",
				"payload": "Postback text payload"
			},
			"buttons": [
			  {
					"type": "postback",
					"title": "Statement",
					"payload": "Statement",
					"image": {
						"image_type": "image",
						"image_src": "https://static.thenounproject.com/png/2033288-200.png"
					},
					"nlmeta": {
				"intent": "name of the intent",
				"isRefreshplace": "true",
				"entities": {
					"entity_name": "entity_value"
				},
				"interruptionOptions": "discardAll"
			},
			"customdata": {
				"key": "value"
			}
				},
			   {
					"type": "postback",
					"title": "Pay Dues",
					"payload": "Pau Dues",


					"nlmeta": {
				"intent": "name of the intent",
				"isRefreshplace": "true",
				"entities": {
					"entity_name": "entity_value"
				},
				"interruptionOptions": "discardAll"
			},
			"customdata": {
				"key": "value"
			}
				},
			   {
					"type": "postback",
					"title": "Redeem",
					"payload": "Redeem",


					"nlmeta": {
				"intent": "name of the intent",
				"isRefreshplace": "true",
				"entities": {
					"entity_name": "entity_value"
				},
				"interruptionOptions": "discardAll"
			},
			"customdata": {
				"key": "value"
			}
				},
			   {
					"type": "postback",
					"title": "Upgrade",
					"payload": "Upgrade",


					"nlmeta": {
				"intent": "name of the intent",
				"isRefreshplace": "true",
				"entities": {
					"entity_name": "entity_value"
				},
				"interruptionOptions": "discardAll"
			},
			"customdata": {
				"key": "value"
			}
				},
				{
					"type": "postback",
					"title": "Block",
					"payload": "Block",


					"nlmeta": {
				"intent": "name of the intent",
				"isRefreshplace": "true",
				"entities": {
					"entity_name": "entity_value"
				},
				"interruptionOptions": "discardAll"
			},
			"customdata": {
				"key": "value"
			}
				}
			]
		}
	]
}
print(JSON.stringify(message));
```



<img src="../images/widget-message-templates/list-template.png" alt="List template" title="List template" style="border: 1px solid gray; zoom:70%;">


### Pie Chart Template

Shows the data in a Pie chart

**Sample**

```javascript
var data = {
  "templateType": "piechart",
  "pie_type": "regular",
  "title": "Spend Analysis",
   "headerOptions": {
    "type": "url",
    "url": {
      "title": "Manage Spends",
      "link": "https://kore.ai"
    }
  },
  "elements": [
    {
      "title": "Food and Drinks",
      "value": "200",
      "displayValue": "$ 200"
    },
    {
      "title": "Travel",
      "value": "120",
      "displayValue": "$ 120"
    },
    {
      "title": "Investments",
      "value": "320",
      "displayValue": "$ 320"
    },
    {
      "title": "Entertainment",
      "value": "180",
      "displayValue": "$ 180"
    }
  ],
  "buttons": [
    {
      "type": "postback",
      "title": "Download",
      "utterance": "Show Expense Report",
      "payload": "Show Expense Report"
    }
  ]
};
print(JSON.stringify(data));
```



<img src="../images/widget-message-templates/pie-chart-template.png" alt="Pie chart template" title="Pie chart template" style="border: 1px solid gray; zoom:70%;">


### Line Chart Template

Shows the data in a line chart.

**Sample**

```javascript
var data = {
  "templateType": "linechart",
   "headerOptions": {
    "type": "url",
    "url": {
      "title": "Manage Spends",
      "link": "https://kore.ai"
    },
  "image": {
        "image_type": "image",
        "image_src": "https://static.thenounproject.com/png/1863652-200.png"
     },
  },
  "X_axis": [
    "F&B",
    "Travel",
    "Investments",
    "Entertainment"
  ],
  "Auto_adjust_X_axis": "yes",
  "elements": [
    {
      "title": "Jan",
        "values": [
            20,
            12,
            32,
            18
        ],
        "displayValues": [
            "$20k",
            "$12k",
            "$32k",
            "$18k"
        ]
    },
    {
      "title": "Feb",
      "values": [
        30,
        15,
        12,
        60
      ],
      "displayValues": [
        "$30k",
        "$15k",
        "$12k",
        "$60k"
      ]
    }
  ],
  "buttons": [
    {
      "type": "postback",
      "title": "Download",
      "utterance": "Download Report",
      "payload": "Download Report"
    }
  ],
  "speech_hint": "Here is your report"
};
print(JSON.stringify(data));
```



<img src="../images/widget-message-templates/line-chart-template.png" alt="Line Chart template" title="Line Chart template" style="border: 1px solid gray; zoom:70%;">

!!! note

	To understand customized JavaScript responses and channel-specific templates, refer to [JavaScript Prompts or Responses](../automation/use-cases/dialogs/prompt-editor.md).

