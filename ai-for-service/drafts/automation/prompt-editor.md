# User Prompts

After creating an Entity, Confirmation, or Message node in the Dialog Builder, Kore.ai lets you do the following:

* Modify the default message or user prompt displayed to the end-user.
* Add new prompts or messages.
* Add channel-specific prompts or messages.


## Prompt Types

Dialog Tasks support two types of user prompts:

* **Standard**: The prompt defined when adding a node in Dialog Builder is the standard or default prompt. When multiple standard prompts are defined for a node, the Platform chooses a random one to display to the end-user.
* **Channel-Specific**: Optionally, define user prompts for specific channels such as email, SMS, Twitter, and more. Different widgets can be used based on channels such as a slider for numbers, date and time picker, and range selectors.


## Prompt Editor

You can create a user prompt or error prompt using any of the available templates (explained below).

<img src="../images/prompt-editor.png" alt="Prompt editor" title="Prompt Editor" style="border:1px solid gray; zoom:70%;">

In the case of **Error Prompts**, if you have enabled the _Present Prompts in the **Order of Retries**_ toggle, the handlebar icon will be visible before each error prompt message. You can use this to re-order the messages so that it is displayed in that sequence.

<img src="../images/prompt-editor-present-prompts-in-order-of-retries.png" alt="Prompt editor - Present prompts in Order of Retries" title="Prompt Editor - Present prompts in Order of Retries" style="border:1px solid gray; zoom:70%;">


## Configure the User Prompt

You can add or edit the prompts or AI Agent messages from the **Component Properties** tab of an Entity, Confirmation, or Message node.
In the case of Entity and Confirmation nodes, you refer to Prompts whereas, for the Message node, they are referred to as Responses.

1. On the dialog task builder, click the **+** icon next to the respective node for which you want to configure the prompts or responses.
2. Select **Confirmation (or Entity or Message) > New Confirmation (or Entity or Message)** Node.
3. The **Confirmation (or Entity or Message)** window is displayed with the **Components Properties** tab selected by default.
4. Under the **User Prompts** (or Responses) section:

    1. If you only want to change the default sample message, hover on the message text and then click the **edit** (<img src="../images/prompt-editor-edit-icon.png">) icon. The editor appears and here you can edit the message.

    2. Double-click anywhere in the text area to highlight a text and it shows the text formatting toolbar, which allows you to:
        * Enable list creation and referencing.
        * Allow image and link insertion.
        * Provide basic text styling options.

        <img src="../images/prompt-editor-edit-default-prompt.gif" alt="Change default message" title="Change default message" style="border:1px solid gray;zoom:70%;">

    3. To add a new prompt message, click **+ Add**. The Message editor opens.

        <img src="../images/prompt-editor-add-new-prompt.png" alt="Add new message" title="Add new message" style="border:1px solid gray;zoom:70%;">

    4. In the **Channel** drop-down list, **All Channels** is the default value. To create a channel-specific message, select the channel from the list. This feature would be available for both **Add** and **Edit** message.

        <img src="../images/prompt-editor-select-channel.png" alt="Select channel" title="Select channel" style="border:1px solid gray;zoom:70%;">

    5. You can use one of the several available templates to create/edit your message:
        * [**Text**](#plain-text-prompts) - Plain textual message. This template is selected by default.
        * [**Buttons**](#button-prompts) (Not available for Message node) - You can use this template if you want to let the user choose from multiple options. For example, in a Banking app, your prompt can have buttons with captions **Deposit**, **Withdrawal**, **Apply for Credit Card**, **Money Transfer** etc that can be configured to trigger the corresponding task.
        * [**Quick Reply**](#quick-reply-template) (Not available for Message node) - You can use this prompt for quick reply, i.e. a limited option of replies. For example, in a prompt that asks user whether they need any more help, you can have quick reply with options **Yes** and **No**.
        * [**Custom JavaScript**](#javascript-prompts-or-responses) - To compose a JavaScript code.

        <img src="../images/prompt-editor-select-template.png" alt="Select template" title="Select template" style="border:1px solid gray;zoom:70%;">

        !!! Note

            * Button and Quick Reply templates are not available for every channel.
            * You can use stored context variables with {{variable brackets}}. For example, ‘Hello {{context.session.UserContext.firstName}}. How can I help you?’

5. Click **Save** after composing the message.

To add any more responses, repeat from step 4b.

!!! Note

    In case of **Error prompts**, Only **Text** and **Custom JavaScript** templates are available.


## Plain Text Prompts

Use the **Plain Text** tab in the editor to compose the user prompts using basic editor controls and HTML. You can enter text, and then format the text using the formatting buttons for bold, italics, header styles, hyperlinks, ordered and unordered lists, and inserting a line.

The plain text tab supports the following markups:

<table border="1">
  <tr>
   <td><strong>MARKDOWN</strong>
   </td>
   <td><strong>OUTPUT</strong>
   </td>
  </tr>
  <tr>
   <td>#h1
   </td>
   <td>Heading One
   </td>
  </tr>
  <tr>
   <td>#h2
   </td>
   <td>Heading Two
   </td>
  </tr>
  <tr>
   <td>#h3
   </td>
   <td>Heading Three
   </td>
  </tr>
  <tr>
   <td>#h4
   </td>
   <td>Heading Four
   </td>
  </tr>
  <tr>
   <td>#h5
   </td>
   <td>Heading Five
   </td>
  </tr>
  <tr>
   <td>#h6
   </td>
   <td>Heading Six
   </td>
  </tr>
  <tr>
   <td>Pre
   </td>
   <td><img src="../images/prompt-editor-img-hello.png" width="" alt="alt_text" title="image_tooltip">
   </td>
  </tr>
  <tr>
   <td>*Bold*
   </td>
   <td><strong>Bold</strong>
   </td>
  </tr>
  <tr>
   <td>~Italic~
   </td>
   <td><em>Italic</em>
   </td>
  </tr>
  <tr>
   <td>[Link](https://www.google.com)
   </td>
   <td><a href="https://www.google.com/">Link</a>
   </td>
  </tr>
  <tr>
   <td>![Image](https://kbob.github.io/images/sample-4.jpg) 
   </td>
   <td><img src="../images/prompt-editor-sample-4.jpg" width="" alt="alt_text" title="image_tooltip">
   </td>
  </tr>
  <tr>
   <td>Order
<br>
1. This is one
<br>
2. This is two
   </td>
   <td>Order
<ol>

<li>This is one

<li>This is two
</li>
</ol>
   </td>
  </tr>
  <tr>
   <td>Bullet
<br>
* This is one
<br>
* This is two
   </td>
   <td>Bullet
<ul>

<li>This is one

<li>This is two
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>This is
<br>
>>indented
   </td>
   <td> <img src="../images/prompt-editor-indent.png" width="" alt="alt_text" title="image_tooltip">
   </td>
  </tr>
  <tr>
   <td>This is line ___
   </td>
   <td>This is line ___
   </td>
  </tr>
  <tr>
   <td>This is &lt;br> new line
   </td>
   <td>This is
<br>
new line
   </td>
  </tr>
</table>

Default formatting of user prompts may not be supported on all channels.

Creating a text prompt

<img src="../images/prompt-editor-user-prompt-text.png" alt="Plain text user prompt - creation" title="Plain text user prompt - creation" style="border:1px solid gray;zoom:70%;">

The above created prompt looks like:

<img src="../images/prompt-editor-text-prompt-runtime.png" alt="Plain text user prompt - Runtime" title="Plain text user prompt - Runtime" style="border:1px solid gray;zoom:70%;">

## Button Prompts

In cases where you wish to provide the user a limited number of distinct choices, you can use Button template.

For example, a typical Banking app can perform tasks pertaining only to banking, like opening an account, issue credit card, money transfer etc. In such cases Button template is appropriate.

You need to select the Button template, add a **Description** (mandatory), i.e. the text you want to appear before the quick reply buttons, and then add button titles and a corresponding value that would be sent to the engine on click of the button.

Here are the steps to create a prompt using Button template:

<img src="../images/prompt-editor-button-prompt-creation.gif" alt="Button prompt creation" title="Button prompt creation" style="border:1px solid gray;zoom:70%;">

This is how it looks at runtime:

<img src="../images/prompt-editor-button-prompt-runtime.png" alt="Button prompt at Runtime" title="Button prompt at Runtime" style="border:1px solid gray;zoom:70%;">

!!! Note

    You can add up to a maximum of 5 buttons to a prompt.

## Quick Reply template

Often, you may wish to provide options for user to **Quick Reply**, like Yes/No, True/False, etc. In such cases you can create prompts using Quick Reply template.

You need to choose the Quick Reply template, add a **Description** (mandatory), i.e. the text you want to appear before the quick reply buttons, and then add the quick reply item titles and values.

This is how you can create a quick reply prompt:

<img src="../images/prompt-editor-quick-response.gif" alt="Quick Reply prompt creation" title="Quick Reply prompt creation" style="border:1px solid gray;zoom:70%;">

This is how it looks at runtime:

<img src="../images/prompt-editor-quick-reply-prompt-runtime.png" alt="Quick Reply prompt at Runtime" title="Quick Reply prompt at Runtime" style="border:1px solid gray;zoom:70%;">

## JavaScript Prompts or Responses

On the **Advanced** tab of the editor, you can add custom code to handle the user prompt message using system and session variables. Enable **Auto Save** to save your work automatically after one second of inactivity. It must be re-enabled each time you open the editor. The following is a sample code for displaying the weather forecast for a location:


```
var loc=context.weatherapi.response.body.query.results.channel.item.condition.text.toLowerCase();
print("Here are the details:\n");
if(loc.indexOf("clear")>=0)
{
print('Its clear outside.');
}
 else if(loc.indexOf("sunny")>=0)
{
    print("Its sunny outside");
}
else if(loc.indexOf("cloud")>=0)
{
    print("Its very cloudy day");
}
else if (loc.indexOf('snow')>=0)
{
    print('Its snowy day');
}
else if(loc.indexOf('rain')>=0)
{
print('Yes, it looks like rainy day.');
}
else if(loc.indexOf('breeze')>=0)
{
    print("It's very breezy out there.");
}
else if(loc.indexOf('wind')>=0)
{
     print("It's very windy out there.");
}
else if(loc.indexOf('shower')>=0)
{
    print("It showering outside.");
}
print("Weather condition: " + context.weather +"\n");
print("Updated at: " + context.lastupdate+"\n");
print("Temperature: " + context.temp+"\n");
print("Wind: " + context.wind+"\n");
print("Pressure: " + context.pressure+"\n");
print("Visibility: " + context.humidity+"\n");
print("Humidity: " + context.visibility+"\n");
```

For more information, see [Using Session and Context Variables in Tasks](../using-session-and-context-variables.md).

## Channel-Specific User Prompts

By default, the Dialog Tasks configures the standard user prompts for all channels. However, you can define a specific response for one or more channels to display to the end-user in that channel instead of the **Default** response.
To define a channel-specific response, select the **Custom JavaScript** template, select a channel, for example, **Kore.ai**, and then define the user prompt as needed. Only one response can be defined for each channel.

While configuring prompts, please note that:

* You can have more than one response configured for a channel. The AI Agent randomly chooses if more than one response is configured for any given channel. This holds true for all-channel responses too if no other channel-specific responses are configured.
* If any channel-specific override is present, the platform will use that over the _‘All channel’_ response while responding on that specific channel. For example, if you have a specific message for MS Teams, the AI Agent prefers that specific prompt while responding to a user over the MS Teams channel instead of the ‘All channel’ prompt.

!!! Note

    Use the following keys to return default values for:

    * response.message – Returns the default message as a string.
    * response.message.choices – Returns the options choice or confirmation message types as an array.

**Slack Channel Override Example**

```
var message = {};
var attachments = [];
var attachment = {
    'text': "Exception occurred during API execution",
    'color': '#FFCC00',
    'attachment_type': 'default'
};
attachments.push(attachment);
message.attachments = attachments;
print(JSON.stringify(message));
```


**FaceBook Channel Override Example**

```
var message = {
    text: response.message
};
var buttons = [];
for (var i = 0; i < response.choices.length; i++) {
    var choiceItem = response.choices[i];
    if (choiceItem.length > 20) {
        choiceItem = choiceItem.substring(
            0, 18) + '..';
    }
    var element = {
        content_type: 'text',
        title: choiceItem,
        payload: choiceItem
    };
    buttons.push(element);
}
message.quick_replies = buttons;
print(JSON.stringify(message));
```


**Email Channel Override Example**

```
var message = {};
var text = response.message + ' <br> ';
for (var i = 0; i < response.choices.length; i++) {
    text = text.concat(
        '<u> + response.choices[i] + ' <
        /u> <br>');
    }
    message.text = text;
print(JSON.stringify(message));
```

**SMS Channel Override Example**

```
var message = {};
    var indexArray = ['a', 'b', 'c',
        'd', 'e',
        'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y',
        'z'
    ];
    var text = response.message + '\\n';
    for (var i = 0; i < response.choices
        .length; i++) {
        text = text.concat(indexArray[i] +
            ') ' + response.choices[
                i] + '\\n';
    }
    message.text = text;
print(JSON.stringify(message));
```