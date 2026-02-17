# Implementing Custom Authentication

You can implement custom authentication for your AI Agent by providing a URL from the service node to an external application that manages the authentication. The platform provides the necessary functionality to handle successful and failed authentication scenarios and manage the corresponding task flows.

Implementing custom authentication involves the following steps:


## Generate the Custom Authentication URL from the Service Node

To implement custom authentication, you first need to configure a dialog tasks’ service node with the URL of the authenticating service. When you do so, the platform internally appends the authentication URL you entered with the AI Agent’s webhook and creates a custom authentication URL. It performs to facilitate the authentication service to send back the necessary details to the Platform after completing the authentication process.


## Populate the Context and Present the Custom URL to the User

During task execution, when a dialog reaches the service node, the platform populates the customer authentication URL in the context and presents a message to the end-user requesting authentication credentials. Then, the platform waits for the external authentication service to send a response on the webhook.


## Receive Callback after Authentication

The external system, on its part, performs a callback to the platform using the webhook URL, which is populated in the Context Object. **The platform expects a POST request during the callback**.

Once all this is complete, the dialog task progresses based on the transitions defined for the node.


## Configure the Custom Authentication Service

To configure the custom authentication service, please follow the steps below:

1. **Open the dialog task** in which you want to implement the custom authentication.
2. **Add a Service node** after the appropriate node in the task flow.
3. On the **Component Properties** tab of the node, enter a **Name** for the node.
4. In the **Service Type** drop-down list, select **Custom Authentication Service**.
5. In the **Auth URL** field, enter the URL of the external authentication service.
6. Under the **Response** section, it shows the default authentication requisition message that the AI Agent presents to the user. You can edit the message or click **Manage** to define advanced or channel-specific messages. Learn about [message formatting and templates.](../../../sdk/web-mobile-sdk-message-formatting-and-templates.md){:target="_blank"}.
    
    !!! Note
    
        The default message here is based on the default name of the service node and is as follows: **_Please use the following URL to proceed with the authentication {{context.&lt;<Service Node Name>>.customAuthenticationURL}}._** If you change the node name later, ensure that you also update the message to reflect the revised name.
        
7. Define the transitions for the node.