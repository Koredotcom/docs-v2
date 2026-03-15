# Web & Mobile SDK: Message Formatting and Templates

The Platform SDK allows you to override the default message formatting using markdown and apply templates to display custom-formatted bot messages to users. This topic describes the following:

* Supported template types
* Template implementation details
* The default formatting for the Web SDK
* Supported markdown to customize messages

## Template Types

The SDKs support the following message template types. Depending on the SDK, the JavaScript implementation may vary.

### Button Template

Shows one of the following button choices for the end user for each option:

* **URL button:** Opens a webpage in the application browser.
* **Postback button:** Sends the payload defined by the developer to the Platform to initiate action, for example, opens a chat window to a live agent.

**Required Parameters**

* **text**: Enter the text consisting of up to 640 characters.
* **buttons**: Enter the array of buttons.

**Example**

```javascript
var message={
  "type": "template",
  "payload":
    {
     "template_type": "button",
     "text": "What do you want to do next?",
     "buttons":
       [{
         "type": "web_url",
         "title": "Show Website",
         "url": "https://petersapparel.parseapp.com"
        },
        {
         "type": "postback",
         "title": "Start Chatting",
         "payload": "USER_DEFINED_PAYLOAD"
        }
       ]
    }
  }
print(JSON.stringify(message));
```

![Button template](images/web-mobile-message-templates/button-template.png "Button template")

### Quick Replies Template – Text

Shows a formatted text message to the user with clickable text choices. 
**Required Parameters**

* **text**: Enter text consisting of up to 640 characters
* **title**: Enter a title for each option

**Example**

```javascript
var message=
  {
  "type":"template",
  "payload":
    {
     "template_type":"quick_replies",
     "text":"Pick a color:",
     "quick_replies":
       [
        {
         "content_type":"text",
         "title":"Red",
         "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED"
        },
        {
         "content_type":"text",
         "title":"Green",
         "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_GREEN"
        }
       ]
    }
  }
print(JSON.stringify(message));
```

![Quick Replies template](images/web-mobile-message-templates/quick-replies-template.png "Quick replies template")


### Quick Replies Template – Text and Image

Shows formatted text to the user with clickable text and images as choices. 
**Required Parameters**

* **text**: Enter text consisting of up to 640 characters
* **title**: Enter a title for each option

**Example**

```javascript
var message =
 {
  "type":"template",
  "payload":
    {
     "text":"Pick a color:",
     "template_type":"quick_replies",
     "quick_replies":
       [
        {
         "content_type":"text",
         "title":"Red",
         "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED",
         "image_url": "https://cdn1.iconfinder.com/data/icons/brown-monsters/1024/Brown_Monsters_16-01.png",
        },
        {
         "content_type":"text",
         "title":"Green",
         "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_GREEN",
         "image_url": "https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Tree-128.png",
        }
       ]
    }
  }
  print(JSON.stringify(message));
```

### Feedback Survey Templates

The Platform supports three new templates for the web/mobile client as part of the feedback module. These include **NPS**, **CSAT**, and **Like/Dislike**.

While configuring the feedback survey, when the user selects a template, it’s available as an override for the web/mobile client in the dialog. The system presents the selected template configured for the survey when collecting feedback from the customer on the web/mobile client. These templates are available as generic templates during feedback survey configuration in the channel template override section.

**NPS** Displays a dialog with a scoring scale from 0-10 for the customer to select. Each score icon appears in a different color, with **0** being the lowest and **10** being the highest rating. This template allows only one score selection by the customer.

**Required Parameters**

* message
* template_type
* displayValues
* colors

**Example**

```javascript
var message = 
{
  "type":"template",
  "payload":
      {
       "text":"On a scale of 0-10, how likely are you to recommend our product to your friends/family?",
       "template_type":"feedbackTemplate",
       "view":"NPS","sliderView":false,"starArrays":[],
       "messageTodisplay":"Glad you liked the experience. Thanks!"
      }
 };
   message.payload.numbersArrays= [];
   var displayValues = ["0","1","2","3","4","5","6","7","8","9","10"];
   var colors = ["#EF9AA3","#EF9AA3","#EF9AA3","#EF9AA3","#EF9AA3","#EF9AA3","#FB8460","#FB8460","#FB8460","#28A745","#28A745"];
    for(var i=0;i<=10;i++)
      {
       var numberArray = 
          {
            "numberId":i,
            "value": displayValues[i],
            "color":colors[i]
          };
          message.payload.numbersArrays.push(numberArray);
      }
    print(JSON.stringify(message));
```

![Feedback Survey template](images/web-mobile-message-templates/feedback-survey-template.png "Feedback Survey template")


**CSAT**

Displays a dialog with the feedback survey question and five smiley icons, each with a different expression to capture the customer’s response. When the customer clicks an icon, it corresponds to a relevant survey score and response, which include “Highly unsatisfied,” “Unsatisfied,” “Average,” “Satisfied,” and “Highly satisfied.” Except for “Satisfied” and “Highly Satisfied,” the other responses prompt a follow-up question to the customer.

**Required Parameters**

* payload: text
* template_type
* displayValues
* smileyArray

**Example**

```javascript
var message = 
 {
   "type":"template",
   "payload":
             {
              "text":"Are you satisfied with our product?",
              "template_type":"feedbackTemplate",
              "view":"CSAT",
              "sliderView":false,
              "starArrays":[],
              "messageTodisplay":"Glad you liked the experience. Thanks!"
             }
  }; 
   var displayValues = ["Highly Unsatisfied","Unsatisfied","Average","Satisfied","Highly satisfied"];
   message.payload.smileyArrays = [];
     for(var i=1;i<=5;i++)
       {
         var smileyArray = 
           {
            "smileyId":i,
            "value": displayValues[i-1],
            "reviewText": displayValues[i-1]
           };
        message.payload.smileyArrays.push(smileyArray);
       }
      print(JSON.stringify(message));
```

![CSAT template](images/web-mobile-message-templates/csat.png "CSAT template")

**Like/Dislike**

Displays a dialog with the feedback survey question and two icons to capture the customer’s response. One is the **Like** icon, and the other is the **Dislike** icon. When the customer clicks the former, a response message is displayed. When the customer clicks the latter, a prompt displays the follow-up survey question to capture the customer’s response.

**Required Parameters**

* payload: text
* template_type
* messageTodisplay
* displayValues
* thumpsUpDownArray

**Example**

```javascript
var message = 
  {
    "type":"template",
    "payload":
              {   
                "text":"Would you recommend our product?",
                "template_type":"feedbackTemplate",
                "view":"ThumbsUpDown",
                "sliderView":false,
                "starArrays":[],
                "messageTodisplay":"Glad you liked the experience. Thanks!"
              }
   }; 
    var displayValues = ["Extremely Unlikely","Extremely likely"];
    message.payload.thumpsUpDownArrays = [];
      for(var i=0;i<=1;i++)
      {
        var thumpsUpDownArray = 
              {
                "thumpUpId":i,
                "value": displayValues[i],
                "reviewText": displayValues[i]
              };
       message.payload.thumpsUpDownArrays.push(thumpsUpDownArray);
     }
     print(JSON.stringify(message));
```


### List Template

Shows a formatted list of choices to the user as clickable text and images as choices. List template has the following limitations:

* Maximum of four elements
* One optional button per element
* One optional global button

**Required Parameters**

* AlwaysShowGlobalButtons: set to true if the global button needs to be displayed always, by default it is set to false ensuring that the global buttons are displayed only when the number of entries in the list exceeds 3,
* title: Enter a title for each option
* elements

**Example**

```javascript
var message =
{
        "type": "template",
        "AlwaysShowGlobalButtons":false,
        "payload": {
            "template_type": "list",
            "elements": [
                {
                    "title": "Classic T-Shirt Collection",
                    "image_url": "https://peterssendreceiveapp.ngrok.io/img/collection.png",
                    "subtitle": "See all our colors",
                    "default_action": {
                        "type": "web_url",
                        "url": "https://peterssendreceiveapp.ngrok.io/shop_collection",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://peterssendreceiveapp.ngrok.io/"
                    },
                    "buttons": [
                        {
                            "title": "View",
                            "type": "web_url",
                            "url": "https://peterssendreceiveapp.ngrok.io/collection",
                            "messenger_extensions": true,
                            "webview_height_ratio": "tall",
                            "fallback_url": "https://peterssendreceiveapp.ngrok.io/"
                        }
                    ]
                },
                {
                    "title": "Classic White T-Shirt",
                    "image_url": "https://peterssendreceiveapp.ngrok.io/img/white-t-shirt.png",
                    "subtitle": "100% Cotton, 200% Comfortable",
                    "default_action": {
                        "type": "web_url",
                        "url": "https://peterssendreceiveapp.ngrok.io/view?item=100",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://peterssendreceiveapp.ngrok.io/"
                    },
                    "buttons": [
                        {
                            "title": "Shop Now",
                            "type": "web_url",
                            "url": "https://peterssendreceiveapp.ngrok.io/shop?item=100",
                            "messenger_extensions": true,
                            "webview_height_ratio": "tall",
                            "fallback_url": "https://peterssendreceiveapp.ngrok.io/"
                        }
                    ]
                },
                {
                    "title": "Classic Blue T-Shirt",
                    "image_url": "https://peterssendreceiveapp.ngrok.io/img/blue-t-shirt.png",
                    "subtitle": "100% Cotton, 200% Comfortable",
                    "default_action": {
                        "type": "web_url",
                        "url": "https://peterssendreceiveapp.ngrok.io/view?item=101",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://peterssendreceiveapp.ngrok.io/"
                    },
                    "buttons": [
                        {
                            "title": "Shop Now",
                            "type": "web_url",
                            "url": "https://peterssendreceiveapp.ngrok.io/shop?item=101",
                            "messenger_extensions": true,
                            "webview_height_ratio": "tall",
                            "fallback_url": "https://peterssendreceiveapp.ngrok.io/"
                        }
                    ]
                },
                {
                    "title": "Classic Black T-Shirt",
                    "image_url": "https://peterssendreceiveapp.ngrok.io/img/black-t-shirt.png",
                    "subtitle": "100% Cotton, 200% Comfortable",
                    "default_action": {
                        "type": "web_url",
                        "url": "https://peterssendreceiveapp.ngrok.io/view?item=102",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://peterssendreceiveapp.ngrok.io/"
                    },
                    "buttons": [
                        {
                            "title": "Shop Now",
                            "type": "web_url",
                            "url": "https://peterssendreceiveapp.ngrok.io/shop?item=102",
                            "messenger_extensions": true,
                            "webview_height_ratio": "tall",
                            "fallback_url": "https://peterssendreceiveapp.ngrok.io/"
                        }
                    ]
                }
            ],
             "buttons": [
                {
                    "title": "View More",
                    "type": "postback",
                    "payload": "payload"
                }
            ]
        }
}
print(JSON.stringify(message));
```

![List template](images/web-mobile-message-templates/list-template.png "List template")


### Error Template

Shows formatted messages to an end user for validation, errors and warning messages. \
**Example**

```javascript
var message={
   "type":"error",
   "payload":{
      "color":"#F35A00",
      "text":"sample for error template"
   }
}
print(JSON.stringify(message));
```

![Error template](images/web-mobile-message-templates/error-template.png "Error template")


### Attachment Template

Provides support to display images, render videos, links and play audio files to a user based on specified URL links.

The following formats are supported for attachment template:

* audio = [‘m4a’, ‘amr’, ‘wav’, ‘aac’, ‘mp3’]
* video = [‘mp4’, ‘mov’, ‘3gp’, ‘flv’]
* image = [‘png’, ‘jpg’, ‘jpeg’, ‘.GIF’]

!!! note

    To display images in the attachment template use the “url” of the image.

**Examples**

**Audio Template:**


```javascript
var message ={
        "type": "message",
         "payload": {
          "text": "",
          "audioUrl": "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
      }
}
print(JSON.stringify(message));
```

![Attachment template](images/web-mobile-message-templates/attachment-template.jpg "attachment template")


**Image Template**

To view image, use the following JS script:

```javascript
var message = {
    "type": "image",
    "payload": {
    "url": " https://i.mdel.net/i/db/2017/12/822869/822869-800w.jpg"
    }
    }
    print(JSON.stringify(message));
```

![Attachment template](images/web-mobile-message-templates/attachment-template-image.jpg "attachment template")

**Video Template**

You can either download or watch the video directly in the assistant window.

To download and watch the video, use this JS script:

```javascript
var message = 
   {
      "type": "video",
      "payload": {
     "url": " https://www.youtube.com/watch?v=a3aobWbIOj8"
    }
  }
    print(JSON.stringify(message));
```
![Attachment template](images/web-mobile-message-templates/attachment-template-video.jpg "attachment template")

To play the video within the assistant window, use this JS script:


```javascript
var message = 
   {
       "type": "message",
      "payload": {
      "text": "",
      "videoUrl": "https://demo.kore.ai/barefoot/sites/default/files/demo_uploads/videoplayback.mp4"
    }
}
print(JSON.stringify(message));
```
![Attachment template](images/web-mobile-message-templates/attachment-template-playback.jpg "attachment template")


### Text Template

Shows messages to the user using the Platform defined default formatting.

**Example**

```javascript
var message=
 {
   "text" : "message"
  }
print(JSON.stringify(message);
```

### Carousel Template

Shows a horizontal scrollable carousel of items, each composed of an image attachment, a short description, and buttons to request user input. \
**Required Parameters**:

* title
* image_url
* elements
* buttons (only up to three items)

**Example**

```javascript
var message = {
  "type": 'template',
  "payload":
    {
     "template_type": 'carousel',
     "elements":
      [{
        "title": "Welcome to Peter\'s Hats1",
        "image_url": "https://previews.123rf.com/images/rez_art/rez_art1405/rez_art140500072/28632615-three-beef-tacos-with-cheese-lettuce-and-tomatos-Stock-Photo-taco.jpg",
        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "default_action":
         {
           "type": "web_url",
           "url": "https://peterssendreceiveapp.ngrok.io/view?item=103"
           //or
           //"type": "postback",
           //"title": "discard",
           //"payload":"clear payload"
         },
        "buttons":
          [{
            "type": " postback",
            "title": "Buy now",
            "payload": "DEVELOPER_DEFINED_PAYLOAD_0"
           },
           {
            "type": "postback",
            "title": "Show more like this",
            "payload": "DEVELOPER_DEFINED_PAYLOAD_1"
           }]
       },
       {
        "title": "Welcome to Peter\'s Hats2",
        "image_url": "https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg",
        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "default_action":
         {
           "type": "web_url",
           "url": "https://peterssendreceiveapp.ngrok.io/view?item=103"
          },
         "buttons":
           [{
             "type": "postback",
             "title": "Buy now",
             "payload": "DEVELOPER_DEFINED_PAYLOAD_0"
            },
            {
             "type": "postback",
             "title": "Show more like this",
             "payload": "DEVELOPER_DEFINED_PAYLOAD_1"
            }]
       },
       {
        "title": "Welcome to Peter\'s Hats3",
        "image_url": "https://previews.123rf.com/images/rez_art/rez_art1405/rez_art140500072/28632615-three-beef-tacos-with-cheese-lettuce-and-tomatos-Stock-Photo-taco.jpg",
        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "default_action":
         {
           "type": "web_url",
           "url": "https://peterssendreceiveapp.ngrok.io/view?item=103"
         },
        "buttons":
          [{
            "type": "postback",
            "title": "Buy now",
            "payload": "DEVELOPER_DEFINED_PAYLOAD_0"
           },
           {
            "type": "postback",
            "title": "Show more like this",
            "payload": "DEVELOPER_DEFINED_PAYLOAD_1"
            }]
       },
       {
        "title": "Welcome to Peter\'s Hats4",
        "image_url": "https://static.pexels.com/photos/416458/pexels-photo-416458.jpeg",
        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "default_action":
          {
           "type": "web_url",
           "url": "https://peterssendreceiveapp.ngrok.io/view?item=103"
          },
         "buttons":
           [{
             "type": "postback",
             "title": "Buy now",
             "payload": "DEVELOPER_DEFINED_PAYLOAD_0"
            },
            {
             "type": "postback",
             "title": "Show more like this",
             "payload": "DEVELOPER_DEFINED_PAYLOAD_1"
            }]
     }]
  }
 }
print(JSON.stringify(message));
```

![Carousel template](images/web-mobile-message-templates/carousel-template.png "carousel template")

### Pie chart Template

!!! note

    This template is supported only for Web SDK; doesn’t apply for Mobile SDK.

Shows the data in a Pie chart in one of these three variations – regular full pie, donut pie, and donut pie with legend table. If you do not specify a type, “regular’ will be considered by default.

**Required Parameters**

* template_type
* elements

```javascript
var message = {
  "type": "template",
  "payload":
    {
     "text": "Traveling expenses report chart",
     "template_type": "pie chart",
     "pie_type": "regular",
     "elements":
       [{
         "title": "Airlines",
         "value": "1264.0",
         "displayValue": "$ 1,234"
        },
        {
         "title": "Hotels",
         "value": "568.10",
         "displayValue": "$ 568"
        },
       {
        "title": "Food",
        "value": "324.50",
        "displayValue": "$ 324"
       }],
     speech_hint: "You spent $2855.71 from your account. Here is the breakup."
    }
  }
print(JSON.stringify(message));
```
![Pie chart template](images/web-mobile-message-templates/pie-chart-template.png "Pie chart template")


### Line Chart Template

!!! note
    
    This template is supported only for Web SDK; doesn’t apply for Mobile SDK.

Shows the data in a line chart.

**Required Parameters**

* template_type
* x_axis
* elements

**Example**

```javascript
var message =
 {
  "type": "template",
  "payload":
   {
    "text":"Peter Sam Report",
    "template_type": "linechart",
    "X_axis": ["15-Jan-2017", "20-Jan-2017", "25-Jan-2017", "30-Jan-2017"],
    "Auto_adjust_X_axis": "yes",
    "elements":
      [
       {
        "title":  "Peter",
        "values": [10,5,15,20],
        "displayValues": ["10ml","5ml","15ml","20ml"]
       },
       {
        "title": "Sam",
        "values": [30,15,12,60],
        "displayValues": ["30 mins","15 mns","12 mins","1 hour"]
       }
      ],
    speech_hint:"Here is your report"
   }
  }
print(JSON.stringify(message));
```
![Line Chart template](images/web-mobile-message-templates/line-chart-template.png "Line chart template")


### Bar Chart Template

!!! note
  
    This template is supported only for Web SDK; doesn’t apply for Mobile SDK.

Shows the data in a bar graph in one of these variants: a single data series simple bar graphs, multiple data series bar graphs, or stacked multiple data series bar graphs.

**Required Parameters**

* template_type
* x_axis
* elements

**Example**

```javascript
var message =
 {
   "type": "template",
   "pay load":
     {
       "text":"Peter Sam Report",
       "template_type": "barchart",
       "direction":"vertical",
       "auto_adjust_X_axis" : "no",
       "stacked":false,
       "X_axis": ["15-Jan-2017", "20-Jan-2017", "25-Jan-2017", "30-Jan-2017"],
       "Auto_adjust_X_axis": "yes",
       "elements":
          [
           {
            "title":  "Peter",
            "values": [10,5,15,20],
            "displayValues": ["10ml","5ml","15ml","20ml"]
           },
           {
            "title": "Sam",
            "values": [30,15,12,60],
            "displayValues": ["30 mins","15 mns","12 mins","1 hour"]
           }
          ],
       speech_hint:"Here is your report"
    }}
print(JSON.stringify(message));
```
![Bar chart template](images/web-mobile-message-templates/bar-chart-template.png "Bar chart template")

### Regular Table Template

!!! note

    This template is supported only for Web SDK; doesn’t apply for Mobile SDK.

Shows the data in a regular or responsive table format. 
**Required Parameters**

* template_type
* columns: Array of column names in the table

```javascript
var message =
{
  "type": "template",
  "payload":
    {
     "template_type": "table",
     "text":"Account details",
     "columns":
       [
        ["Sl","center"],["Name"],["Designation"],["Salary","right"]
       ],
     "table_design": "regular",
     "elements":
       [
        {
          "Values": ["1","Peter","Producer","1,000"]
        },
        {
          "Values": ["2","Sam","Director","2,000"]
        },
        {
          "Values": ["3","Nick","DoP","1,500"]
        }
       ],
     speech_hint:"Here is your account details"
    }}
print(JSON.stringify(message));
```
![Regular table template](images/web-mobile-message-templates/regular-table-template.png "Regular table template")


### Mini Table Template

!!! note

    This template is supported only for Web SDK; doesn’t apply for Mobile SDK.

For each row header in a table, this template shows column data as separate cards. This is ideally suitable for data with 3-4 columns and 4-5 rows. 
**Required Parameters**

* template_type
* elements

**Example**

```javascript
var message = {
  "type": "template",
  "payload": {
     "template_type": "mini_table",
     "layout": "horizontal",
     "text":"Account details",
     "elements": [
        {
         "primary":[["Current Accounts"],["300","right"]],
         "additional":[["CA00001","150"],["CA00123","50"],["CA23423","100"]]
        },
        {
         "primary":[["Savings Accounts"],["200","right"]],
         "additional":[["SA33001","75"],["SA67345","125"]]
        }
       ],
     speech_hint:"Here is your account details"
    }
  };
print(JSON.stringify(message));
```
![Mini Table template](images/web-mobile-message-templates/mini-table-template.png "Mini table template")


## BotKit SDK Message Formatting with Templates

You can also apply message templates in the BotKit SDK using the sendUserMessage function by setting the `isTemplate` parameter to `true` in the payload object as shown in the following example.


```javascript
on_user_message: function(requestId, data, callback) {
 console.log("User Message ----->", data.message);
 //console.log(JSON.stringify(data));
 if (data.message === "Hi") {
    {
      var overrideMessagePayload =
         {
           body : JSON.stringify({
             "type": "template",
             "payload":
               {
                 "template_type": "button",
                 "text": "This is an example to demonstrate message templates sent from bot kit",
                 "buttons":
                    [{
                       "type": "postback",
                       "title": "Yes",
                       "payload": "Yes"
                     },
                     {
                       "type": "postback",
                       "title": "No",
                       "payload": "No"
                     }]
               }
             }),
           isTemplate :true
          }
    data.overrideMessagePayload= overrideMessagePayload;}
   return sdk.sendUserMessage(data, callback);
 }
```

## Standard Markdown Support

You can apply your formatting directly in JavaScript using the Platform markdown as described.

* **Bold** – *text to be bolded* Do not add spaces after or before the ” * ” symbol. For example, `Here is *bold*.`
* **Italic** – ~test to be italicized~ Do not add spaces after or before the ” ~ ” symbol. For example, `Here is ~italics~.` Preceding and succeeding _ will also italicize the enclosed text, i.e. `Here is _italics_.`
* **Link** – [Text for the link here](https://iana.org) For example, `Here is a link to [Kore.ai.com](https://kore.ai/).`
* **New Line** – \n One line indention.
* **Multi Line** – \n\n\n Three line indentions.
* **Image** – ![Text for the link here](https://iana.org) For example, `![My image](https://d1hqmx8kqvpnpa.cloudfront.net/f-eeca5df3-7580-5a09-9aa3-09f809b44ac4.png)`
* **List** –
    * **Unordered Bulleted List** – * Text for the list time  Add a space after the ” * ” symbol.
        * `* This is an example of an unordered list Bullet 1.`
        * `* This is an example of an unordered list Bullet 2.`
        * `* This is an example of an unordered list Bullet 3.`
    * **Ordered List** –
        * `1. This is an example of an ordered list Bullet 1.`
        * `2. This is an example of an ordered list Bullet 2.`
        * `3. This is an example of an ordered list Bullet 3.`
* **Preformatted Text** – “`text“` The text between the ” “` ” symbols is formatted. For example, `Here is an example of ```preformatting```.`>
* **Paragraph Indent** – >> For example, `>>This is indented once.`
* **Multi Indent** – >>>> For example, `>>>>This is indented twice.`
* **Heading** – #h1, #h2, #h3, #h4, #h5, #h6 For example,

    * `Here is an example of #h1Heading1.`
    * `Here is an example of #h2Heading2.`
    * `Here is an example of #h3Heading3.`
    * `Here is an example of #h4Heading4.`
    * `Here is an example of #h5Heading5.`
    * `Here is an example of #h6Heading6.`

* **Horizontal Rule** – ___ Three underscores inserts a horizontal line. For example, `This is a horizontal rule line, added three times. _________`

## Default Message Templates for Web SDK

When custom formatting is not defined, the following default message formatting types apply to the Web SDK.

* **Choice Message**
    * If the number of options is 3 or less, the _Button_ _Template_ is used.
    * If the number of options is between 3  and 10, the _Quick Replies Template_ is used.
    * If the number of options is greater than 10, the _Quick Replies Template_ is used. The 9th option is displayed as Show more which when clicked opens the next set of options.
    * If the button title > 20 characters, 18 characters and two periods get displayed. When the user clicks the title, the full title gets displayed.
* **Confirmation Message**
    * Quick Replies Template is used with Yes and No options.
* **Question Message**
    * Plain text.
* **Error Message**
    * Text with red font color is sent as an attachment
* **Warning Message**
    * Text with orange font color is sent as an attachment
* **Validation Message**
    * Text with yellow font color is sent as an attachment
* **Info, Statement, Greeting, Chit Chat Messages**
    * Plain text


## Custom Templates

Apart from using the above templates, you can build your own custom template. A few custom templates are provided below for your reference.

!!! note

    You can find more custom templates on Git: [https://github.com/Koredotcom/web-kore-sdk/blob/master/UI/custom/customTemplate.js](https://github.com/Koredotcom/web-kore-sdk/blob/master/UI/custom/customTemplate.js).

Drop down template

```javascript
var message =  {
        "type": "template",
        "payload": {
            "template_type": "dropdown_template",
            "heading":"please select : ",
            "elements": [
                {
                    "title": "United Arab Emirates Dirham",
                    "value":"AED"
                },
                {
                    "title": "Australian Dollar",
                    "value":"AUD"
                },
                {
                    "title": "Canadian Dollar",
                    "value":"CAD"
                },
                {
                    "title": "Swiss Franc",
                    "value":"CHF"
                },
                {
                    "title": "Chinese Yuan",
                    "value":"CNY"
                },
                {
                    "title": "Czech Koruna",
                    "value":"CZK"
                }


            ],
        }
};
print(JSON.stringify(message));
```
![Custom Drop down template](images/web-mobile-message-templates/custom-dropdown-template.png "Custom Drop-down list template")

Like-dislike template: 

```javascript
var message = {
  "type": "template",
  "payload": {
     "template_type": "like_dislike"
     }
  };
print(JSON.stringify(message)) ;
```




Multi-select Template:

```javascript
var message = {
  "type": "template",
  "payload": {
      "template_type": "multi_select",
      "elements": [
         {
           "title": "Classic T-Shirt Collection",
           "value":"tShirt"
          },{
           "title": "Classic Shirt Collection",
           "value":"shirts"
          },
          {
           "title": "Classic shorts Collection",
           "value":"shorts"
          }
        ],
  "buttons": [
     {
       "title": "Done",
       "type": "postback",
       "payload": "payload"
     }
    ]
  }
};
print(JSON.stringify(message));
```

![Custom Multi select template](images/web-mobile-message-templates/custom-multiselect-template.png "Custom Multiselect list template")

DatePicker template:

```javascript
var message = {
  "type": "template",
  "payload": {
      "text":"display",
      "template_type": "dateTemplate",
      "title":"Text to display on header",
      "text_message":"text to display in message node",
   // "startDate":"02-02-2020",
   // "endDate":"05-02-2020",
      "format":"MM-DD-YYYY"      
  }
};
print(JSON.stringify(message));
```

!!! note

    To understand customized JavaScript responses and channel-specific templates, refer to [JavaScript Prompts or Responses](../automation/use-cases/dialogs/prompt-editor.md).
