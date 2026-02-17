# WebHook Node

You can use the WebHook node to subscribe to a message and to WebHook events that capture real-time data from real-time events and show them to the user. You can use the WebHook node for server-side validation, execute business logic, or make backend server API calls. Also, you can use the SDK Tool BotKit to add event handlers and control the messages and WebHook events as required by connecting the WebHook node to a script node to process the response.


## Create and Register an App

To get access to WebHook events using WebHook nodes in your dialog task, you need to [subscribe and configure an app](../../../../sdk/sdk-configuration.md){:target="_blank"}.


## Add the Node

The setup of a Webhook node in a dialog task involves the following steps:

1. Open the dialog task to add the Webhook node.
2. Add a Webhook node in the designated place. For steps related to adding nodes, [refer here](../using-the-dialog-builder-tool.md){:target="_blank"}.

The Webhook window is displayed with the **Component Properties** tab selected by default.

<img src="../images/webhook-node-img2-add-node.png" alt="Webhook node" title="Webhook node" style="border:1px solid gray;zoom:70%;">


## Configure the Node

### Component Properties

!!! Note
    
    * All changes made to the Component Properties tab will affect all instances of the Webhook Node across Dialog Tasks.
    * If you have not yet configured the SDK, the Component Properties section will notify you that the SDK is not currently configured/Subscribed. Please go through the [steps](#create-and-register-an-app) to configure the SDK.
 

To configure the Component Properties tab, please follow the steps below:

1. On the **Component Properties** tab, enter the **Name** and **Display Name** of your Webhook node. 
2. In the **Variable Namespaces** section, associate the variable namespaces to execute this node and its transitions. This option is visible only when the Variable Namespace is enabled for the App. You can use the task-level settings or customize them for this node. For more information, refer to [Managing Namespace](../../../../app-settings/managing-namespace.md){:target="_blank"}.


<img src="../images/webhook-node-img3-component-properties-sdk-not-configured.png" alt="Webhook node - SDK not configured" title="Webhook node - SDK Not configured" style="border:1px solid gray;zoom:70%;">
    
**SDK not configured**

If the SDK is configured, you can see the configuration details i.e. **Events, Client ID, Callback URL** and **Timeout** in the Component Properties tab.

<img src="../images/webhook-node-img3-component-properties-sdk-configured.png" alt="Webhook node - SDK configured" title="Webhook node - SDK configured" style="border:1px solid gray;zoom:70%;">

**SDK Configured**


### Instance Properties

Use the Instance Properties to define any user tags that you want to set for the Webhook node.

!!! Note

    The settings in the Instance Properties tab are specific to the current dialog task and do not reflect in other dialog tasks that use this node.

1. On the Webhook node properties panel, click the **Instance Properties** tab.
2. Under the **Custom Tags** section, add tags to build custom profiles of your App’s conversations. [Click here for more](../../../../analytics/automation/custom-dashboard/custom-meta-tags.md){:target="_blank"}.

<img src="../images/webhook-node-img4-instance-properties.png" alt="Webhook node - Instance properties" title="Webhook node - Instance properties" style="border:1px solid gray;zoom:70%;">


### Connections Properties

!!! Note

    Connection properties are available for the node only if it is the bottommost node of a sequence. 

From the node’s **Connections** tab, you can determine which node in the dialog task to execute next. You can write conditional statements based on the values of any Entity or Context Objects in the dialog task, or you can use intents for transitions.

!!! Note

    The conditions configured here are applicable only for this instance and will not affect this node when being used in any other dialog.


To set up node connection conditions, please follow the steps outlined in [Adding IF-Else Conditions to Node Connections](../node-connections/nodes-conditions.md){:target="_blank"}.

<img src="../images/webhook-node-img5-connections-properties.png" alt="Webhook node - Connection properties" title="Webhook node - Connection properties" style="border:1px solid gray;zoom:70%;">  

The Connection Path property offers three default variants:

1. Not Connected - No specific next node is defined
2. End of Dialog - Explicitly ends the current dialog
3. Return to Flow - Terminates the Dialog Task and returns control to the Flow Builder. The Flow Builder resumes from the next node.
    * Enable the **Deflect to Chat** option to create conversation flows that transition from voice to chat-based interactions within the same context.
    It has two deflection types - ‘ Automation’ and ‘Agent Transfer’.  
    <img src="../images/deflect-to-chat1.png" alt="Deflect to Chat" title="Deflect to Chat" style="border:1px solid gray;zoom:70%;">


!!! Note

    Deflect to Chat works only with Kore Voice Gateway Channels (Phone number or SIP Transfer).



**Related Links:**

Please [click here](https://community.kore.ai/t/example-of-how-to-use-web-hook-node-for-response-which-takes-more-than-20-seconds/989) for a working example using the Webhook node.