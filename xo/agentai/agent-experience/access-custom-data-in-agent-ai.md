# Access Custom Data in Agent AI APP

Custom data refers to additional information, such as agent name, ID, and other metadata, that can be passed from third-party applications to enhance the functionality of the Agent AI widget. Agent AI accesses and utilizes this data to customize interactions, streamline processes, and provide more context-specific responses. Using custom data, you can improve user experiences and enable more dynamic workflows within the system.

Custom data appears as `{{context.session.UserContext.customData.&lt;key>}}. `You can access it in the Welcome Event section and Automation page. The UserContext variable stores this data, and it is accessible wherever the UserContext variable is available.

### **Welcome Event**

To access custom data in the Welcome Event section, follow these steps:

1. Sign in to [XO11](https://platform.kore.ai/){:target="_blank"}.
2. Click an **app** name on the **App list**.
3. Click **Agent AI** > **Configurations** > **Welcome Events**.
4. Click to expand the **Configure Greeting Messages** section on the **Welcome Event** page.  
<img src="../access-custom-data-images/configure-greeting-messages.png" alt="configure-greeting-messages" title="configure-greeting-messages" style="border: 1px solid gray; zoom:80%;">  
5. Click the **edit** button against a message where you want to access custom data. (If you don’t have any greeting messages, add a new one by following the [Welcome Event](../configuration/conversation-events.md){:target="_blank"} doc.)
6. Access your custom data in the **Message** field, as highlighted in the following screenshot:  
<img src="../access-custom-data-images/edit-welcome-message.png" alt="edit-welcome-message" title="edit-welcome-message" style="border: 1px solid gray; zoom:80%;">

### **Dialog Tasks**

To access custom data in the Dialog Tasks section, follow these steps:

1. Sign in to [XO11](https://platform.kore.ai/){:target="_blank"}.
2. Click an app name on the App list.
3. Click **Automation AI** > **AI Agent**.
4. Click an existing Dialog in the Dialogs page. (If you don’t have any Dialog, create a dialog by following [this](./../../automation/use-cases/dialogs/using-the-dialog-builder-tool.md#create-a-dialog-task){:target="_blank"} doc.)
5. Click to open a **Message** node.
6. On the **Component Properties** page, go to the **User Prompts** or **Error Prompts** field.
7. Select **Text** or **&lt;/> Custom JavaScript**, as highlighted in the following screenshot:  
<img src="../access-custom-data-images/component-properties.png" alt="component-properties" title="component-properties" style="border: 1px solid gray; zoom:80%;">
