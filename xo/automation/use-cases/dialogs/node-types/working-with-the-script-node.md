# Script Node

The **Script Node** allows you to write JavaScript code in a dialog task.You can use the script node to perform the following actions:

* Manipulate user input parameters before executing an API call.
* Manipulate the parameters from an API response payload before continuing with the dialog.
* Display custom error messages to the user.
* Make decisions based on complex business rules.

## Add the Node

The setup a Script node in a dialog task involves the following steps:

1. **Select the AI Agent** you want to work with.
2. **Open the dialog task** to add the Script node to.
3. **Add the script node** in the designated place. For steps in adding nodes, [refer here](../using-the-dialog-builder-tool.md){:target="_blank"}.
4. The Script window is displayed with the **Component Properties** tab selected by default.
5. You can configure the **Connection Properties,** [refer here for details](#connections-properties).

    <img src="../images/script-node.png" alt="Script node" title="Script node" style="border:1px solid gray;zoom:70%;">

!!! note

    You can add a script node within an existing sequence or outside any existing sequence. If you add it outside, a new, untitled sequence will automatically get created containing the new script node.


## Configure the Node

### Component Properties

!!! Note

    The configurations you set up or edit in these sections reflect in all other dialog tasks that use this node.

To configure the Component Properties section, please follow the steps below:

1. On the **Component Properties** tab, enter a **Name** and **Display Name** for the script node. Node names cannot have spaces.
2. Under the **Script Definition** section, click **Define Script** to add JavaScript.
3. On the **Script Definition** window, enter your JavaScript and then click **Save**. Enable **Auto Save** to save your work automatically after one second of inactivity. It must be re-enabled each time you open the editor. [See below for JavaScript code examples](#javascript-examples).
4. In the **Variable Namespaces** section, associate the variable namespaces to execute this node and its transitions. This option is visible only when the variable namespace is enabled for the AI Agent. You can go with the task level settings or customize it for this node. For more information, refer to [Managing Namespace](../../../../app-settings/managing-namespace.md){:target="_blank"}.

    <img src="../images/script-node-component-properties.png" alt="Script node - Component properties" title="Script node - Component properties" style="border:1px solid gray;zoom:70%;">


### Instance Properties

Use the Instance Properties to define any user tags that you want to set for the Script node.

!!! Note

    The settings in the Instance Properties tab are specific to the current dialog task and do not reflect in other dialog tasks that use this node.

1. On the Script node properties panel, click the **Instance Properties** tab.
2. Under the **Custom Tags** section, add tags to build custom profiles of your AI Agent’s conversations. [Click here for more](../../../../analytics/automation/custom-dashboard/custom-meta-tags.md){:target="_blank"}.

    <img src="../images/script-node-instance-properties.png" alt="Script node - Instance properties" title="Script node - Instance properties" style="border:1px solid gray;zoom:70%;">


### Connections Properties

You can write conditional statements based on the values of any Entity or Context Objects in the dialog task, or you can use Intents for transitions. 

!!! Note

    * The conditions configured here are applicable only for this instance and will not affect this node when being used in any other dialog.
    * The connection properties would be present only if this is the bottommost node of a sequence.


To set up node connection conditions, please follow the steps outlined in [Adding IF-Else Conditions to Node Connections. ](../node-connections/nodes-conditions.md){:target="_blank"}

<img src="../images/script-node-connection-properties.png" alt="Script node - Connection properties" title="Script node - Connection properties" style="border:1px solid gray;zoom:70%;">  

The Connection Path property offers three default variants:

1. Not Connected - No specific next node is defined
2. End of Dialog - Explicitly ends the current dialog
3. Return to Flow - Terminates the Dialog Task and returns control to the Flow Builder. The Flow Builder resumes from the next node.
    * Enable the **Deflect to Chat** option to create conversation flows that transition from voice to chat-based interactions within the same context.
    It has two deflection types - ‘ Automation’ and ‘Agent Transfer’.  
    <img src="../images/deflect-to-chat1.png" alt="Deflect to Chat" title="Deflect to Chat" style="border:1px solid gray;zoom:70%;">


!!! Note

    Deflect to Chat works only with Kore Voice Gateway Channels (Phone number or SIP Transfer).



## JavaScript Examples

Using JavaScript, you can customize your dialog task by processing data before or after an API call. For example, directing the dialog task flow. You can use the `Context` object type-ahead feature to identify and select dynamic variables as shown in the following illustration. For more information, refer to [Context Object](../../../intelligence/context-object.md){:target="_blank"}.

<img src="../images/script-node-js-example.png" alt="Script node - Javascript Example" title="Script node - Javascript Example" style="border:1px solid gray;zoom:70%;">


### Manipulating Data

In JavaScript, you can fetch data from the session data using session variables. For example, you can GET the user ID using `context.session.UserContext.identities`, and then PUT the data into `context` as shown in the following example.

```
var x = context.session.UserContext.identities;
var isEmailFound = false;
for (var i = 0; i < x.length; i++) {
    if (x[i].type === "mapped") {
        var identity = x[i].val;
        var arr = identity.split("/");
        var pattern = /^cs/i;
        var result = arr[0].match(pattern);
        if (result) {
            isEmailFound = true;
            context.UserSession.put("rtmEmail", arr[1], '20000');
        }
    }
}
```

For more information, refer to [Using Session and Context Variables in Tasks](../../using-session-and-context-variables.md){:target="_blank"}.


### Handling Conditions

The following code example returns the customer ID using a `Context` object variable from the Service node response body when the ID is not provided in the `data.results`


```
var data = context.getcontactsService.response.body;
if (data & amp; & amp; typeof(data.results) != 'undefined') {
 context.customerID = data.results.customerId;
} else {
 context.customerID = context.Usersession.customerID;
}
```


### Handling Flow

The next Script node code example validates the bank transfer amount that does not exceed limits for the type of account selected using `Context` object variables.

```
var valid = 0;
var i = 0;
while (context.accdata.length - i) {
 if (context.accdata[i].accountType == context.entities.FromAccountName) {
  if ((context.accdata[i].amount - context.entities.Amount) < 0) { valid = 3; } else { if (context.entities.Amount > context.accdata[i].transferLimit) {
    valid = 0;
   } else {
    valid = 2;
   }
  }
 }
 i++;
}
context.canProceed = valid;
```

**Related Link**

* [**koreUtil libraries**](../../../../apis/automation/koreutil-libraries.md){:target="_blank"} (Pre-written JavaScript functions to make common or complex tasks easy to implement)
* [**Script Nodes, Call Flows, Agent Utils, and userSessionUtils**](../../../../flows/node-types/utils.md)