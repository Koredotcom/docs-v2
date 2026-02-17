# App Functions

App Function is a feature that uses a custom Script file that enables you to collate and manage reusable utility JavaScript functions that can be used by different tasks, nodes, and other elements. Once you upload a custom script file to the assistant, it reduces the redundant development efforts by making all the functions in the file accessible anywhere in the assistant.


## Using the Custom Script File

Let’s consider one use case from a Travel Planning Assistant, to understand how you can leverage the custom script file to reduce development overhead considerably. Take a look at the following conversation flow of this assistant, that frequently presents customers with options to make a choice. In the below chat, the assistant first prompts the user to select what they want to book, by clicking Flight or Hotel, and then also prompts them to select a Fare, such as Economy, Premium Economy or First Class. 

<img src="../images/bot-functions-img1.png" alt="Custom script file - use case" title="Custom script file - use case" style="border: 1px solid gray;zoom:50%;"/>

You can observe that both the booking and fare options in the above chat are identical in functionality, but only the choices that they show differ. Instead of hard-coding the functionality of the button template into each node, you can write a function in the custom script file that can be invoked by these nodes by passing options. Below is the sample function script to accomplish the functionality.

```
function custTemplatel(info){
var message = {
"type": "template",
"payload": {
"template_type": "button",
"text": "Select an option",
"subText": "button Template
"buttons": []}
};
for (i = 0; i < info.length; i++)
var button = {
"type": "postback",
 "title": info[i],
 "payload": "payloadl"
):
message.payload.buttons.push(button);
}
return JSON.stringify(message);
}
```


This is how the function can be called from the nodes:

```
var info =["Flight","Hotel"];
print(custTemplatel(info));|
```



### Uploading a Custom Script File

Follow these steps to upload the script file to the assistant:

1. Select **App Settings** from the left menu.
2. Select **Dev Tools** from the menu, and then the **App Function** tab.  
<img src="../images/bot-functions-img2.png" alt="Navigate to App Function" title="Navigate to App Function" style="border: 1px solid gray;zoom:50%;"/>

3. Under **Custom Script**, click **Import**.
4. On the _Import Custom Script_ dialog, click **Browse** and navigate to the script file in your local machine. Click **Import**. You can also drag and drop the script file from the folder on the local machine.
5. After the import is successful, click **Done**. 

### Updating the Custom Script File

You can add or modify functions in the custom script file by downloading the file, making changes, and then importing it back to the assistant. Importing a new custom script file replaces the existing file, which cannot be retrieved later. Therefore, we recommend you exercise caution and keep a copy of the downloaded file for backup.

1. Select **App Settings** from the left menu.
2. Select **Dev Tools** from the menu, and then the **App Function** tab.
3. Under the **Custom Script**, click **Download** to save a copy of the file on your local computer.
4. After you make changes to the file, click **Import New**.
5. Click **Browse** to the location of the custom script file on your local computer and then click **Import**.
6. Click **Done** when the import is complete.