# Managing Namespace

Chances are that you have defined tens or hundreds of (Environment or Content) variables and used them in the App definitions. These variables could have been used in defining text prompts or messages, JavaScript, transitions, and service call definitions. Loading all these variables for every single task irrespective of their usage would lead to delays in response times impacting the user experience.

Using **Namespaces** you can categorize variables and map them to various components. The XO Platform would load the variables only from the mapped namespaces while executing specific components.

[Learn more about Variables.](../app-settings/variables/using-bot-variables.md){:target="_blank"}

## Enabling Namespaces

You can enable namespaces by going to **Automation AI > App Settings > App Profile** Turn on the toggle, then confirm your choice to enable the feature.

<img src="../images/managing-namespace-img1.png" alt="Enable namespace" title="Enable namespace" style="border: 1px solid gray;zoom:70%;"/>

## Implementation

Once the Variable Namespaces feature is enabled:

1. A **Default** namespace is automatically created by the platform which cannot be deleted or modified;
2. All tasks and variables, if any, are automatically associated with this default namespace;
3. You can define and manage namespaces;
4. You can add or remove the Environment and Content variables to these namespaces. A variable can belong to one or more namespaces. You cannot remove the Environment and Content variables from the default namespace.
5. You can map namespaces to the various components of the app definition like:
    1. Tasks which include Dialog, and Alert;
    2. Nodes in Dialog Task;
    3. Knowledge Task;
    4. Small Talk;
    5. Standard Responses; and
    6. Event Handlers.

6. You can remove the namespace mapping for the components. But if you mapped components with any namespace, then the execution of these components may fail if you have included one or more variables in defining the component.

Once Variable Namespaces are mapped, the following steps are implemented by the platform during task execution :

1. Only the variables that belong to the namespace mapped to a component will be loaded;
2. If the variable that is not mapped is referenced by the component, it will flag a “_variable not found_” error;
3. The same logic applies to App functions used within the tasks.

## Creating Namespaces

When configuring a variable (environment or content), you have an option to **Add Namespace**. Use this option to create a namespace.

<img src="../images/managing-namespace-img2.png" alt="Create namespace" title="Create namespace" style="border: 1px solid gray;zoom:70%;"/>

## Editing

You also have an option **to Manage Namespaces** from under **Automation AI > App Settings > Variables > Environment/Content Variables**.

Use this option to **view, edit,** or **delete** namespaces. Deleting a namespace that is mapped to any component is restricted. You need to unmap the namespace from all associated components before deletion. As mentioned earlier, you cannot delete the default namespace.

<img src="../images/managing-namespace-img4.png" alt="Namespace actions" title="Namespace actions" style="border: 1px solid gray;zoom:70%;"/>


### Variable Mapping

Once created, the namespace needs to be mapped to variables, tasks, and other components. This will ensure that only the variables that belong to the namespace mapped to a component would be loaded at the time of execution.

At the time of variable creation (environment and content), you can map the namespace. By default, the variables would be assigned to the **default** namespace. A variable can be mapped to multiple namespaces. You can change the mapping later by editing the variable definition.

<img src="../images/managing-namespace-img5.png" alt="Variable mapping" title="Variable mapping" style="border: 1px solid gray;zoom:70%;"/>


### Components

All the components have a **Manage Variable Namespaces** action item which can be used to map the component with a particular namespace. Below is a list of places where you can find the **Manage Variable Namespaces** option:

<img src="../images/managing-namespace-img6.png" alt="Manage variable namespace" title="EManage variable namespace" style="border: 1px solid gray;zoom:70%;"/> 


#### Nodes within Dialog Tasks

You can find the option under the Component Properties section of the node. You can choose to use the Variable Namespace associated with the task or customize it for the node. 

<img src="../images/managing-namespace-img7.png" alt="Variable namespace option in Component properties" title="Variable namespace option in Component properties" style="border: 1px solid gray;zoom:70%;"/>


#### Knowledge Graph

Navigate to **Automation AI > KNOWLEDGE AI > FAQs**. Click **Manage KG**.

On the **Knowledge Graph** screen, click the 3-dot menu icon and select **Manage Variable Namespaces**.

<img src="../images/managing-namespace-img8.png" alt="Knowledge graph" title="Knowledge graph" style="border: 1px solid gray;zoom:70%;"/>


#### Small Talk

Navigate to **Automation AI > USE CASES > Small Talk**. Click the 3-dot menu icon on any of the groups.

<img src="../images/managing-namespace-img9.png" alt="Small talk" title="Small talk" style="border: 1px solid gray;zoom:70%;"/>


#### Event Handlers

Navigate to **Automation AI > CONVERSATION INTELLIGENCE> Events**. Click the 3-dot menu icon.

<img src="../images/managing-namespace-img10.gif" alt="Event handlers" title="Event handlers" style="border: 1px solid gray;zoom:70%;"/>