# Digital Views

Interactions with AI Agents are typically conducted using chat/messaging tools, voice channels, or other types of AI Agents. In the majority of the cases, the AI Agents respond to the user queries only when the users have requested some information. This works well for conducting on-demand tasks that need user input for execution and the result is usually a short response, confirmation, or acknowledgment. But the need for more proactive user updates and less user input through an engaging interface has become a key requirement. 

Using **Digital Views** from the Platform, you can design and launch rich visual experiences through interactive components, panels, and widgets, to proactively present relevant information to your users or customers. **Panels** are the placeholders that hold one or more widgets. **Widgets** are individual components that display information to the end-users. Your users or customers can interact with your AI Agent either in conversation mode or directly get the required information from the widgets.

This article gives an overview on the working and implementation of **Panels & Widgets**. For step-by-step usage instructions, click [here](configure-digital-views.md){:target="_blank"}.


## How It Works 

1. Using Digital Views, an organization offers to its AI Agent end-users a single interface for various activities.
2. Multiple panels constitute a Digital View.
3. Each of the panels gives access to various functions.
4. The end-user accesses these panels for information pertaining to each of the functions and performs follow-up actions.
5. As an example, a Panel within a travel App could have multiple widgets showing:

    * Upcoming Trips
    * Completed Bookings
    * Canceled Bookings

    <img src="../../images/access-digitalviews.png" alt="access digital views" title="access digital views" style="border: 1px solid gray; zoom:75%;">

You can access Digital Views by selecting the App you want to work with then going to **Automation AI > Digital Skills > Digital Views**. 

## How to use Digital Views?

You can enable Digital Views for your AI Agent by designing the required widgets, adding them to the relevant panels and publishing them on the WidgetSDK channel.

Here are the steps we recommend for efficient design of Digital Views: 

1. **Set up**: Panels are containers to host one or more widgets. You may create multiple panels and each panel can host widgets that present relevant information. Widgets are the interactive components that can contain information to be presented to the end-users and allow them to perform actions and follow-ups.
2. **Configure**: Define widgets by connecting them either to your tasks or by directly defining the widget. If you have connected your widget to a Dialog Task, make sure to use a Message node to present the required information in the widget using any of the supported widget templates.
3. **Preview & Publish**: Preview your widgets from the Platform to review the visual representation of the information. Enable the WidgetSDK channel and publish your panels and widgets to make them available for your end-users.
4. **Host with Kore.ai SDK / Host Independently**: You can choose to host your widgets independently or co-host them along with the WebSDK. You can download the SDKs from the [Kore.ai GitHub page](https://github.com/Koredotcom/web-kore-sdk){:target="_blank"}.

## General Setup

Here is the general setup process to follow when you want to configure Panels and Widgets for Digital Views: 

1. **Configure Widgets**: Define widgets by connecting them either to your tasks or any other source like JavaScript generating JSON file. In cases where you are using a task as a source, ensure that the message is formatted properly for the Widget SDK channel.
2. **Preview the Widgets**: Preview your widgets from the Platform.
3. **Set up Panels**: You may create multiple panels and each panel can host widgets that present relevant information. You can use the predefined widgets or create new ones.
4. **Test the Panels** to see how the Panels and Widgets are rendered in the chat window.
5. **Publish the App**: Publish the App so that the panels and widgets are made available for your end-users.
6. **Host the Panel**: You can choose to host your widgets independently or co-host them along with the web SDK. You can download the SDKs from the Kore.ai GitHub page. Do ensure to enable WidgetSDK as a channel.


## Configure Widgets

Widgets are individual components that can communicate with the App for presenting information to the end-users. The source of information for widgets is from a Dialog Task or a JSON using any of the predefined widget templates.

To configure widgets, follow the below steps:

1. Click **Create Widget** to create a widget.

    <img src="../../images/create-widget.png" alt="create widget" title="create widget" style="border: 1px solid gray; zoom:75%;">

2. The New Widget dialog opens.

    <img src="../../images/new-widget-dialog.png" alt="new widget dialog" title="new widget dialog" style="border: 1px solid gray; zoom:75%;">

3. On the **New Widget** window, enter the following details:
    
    * **Name** of the widget
    * **Display Name** for the widget
    * **Auto Refresh** to set the frequency with which this widget needs a poll for fresh data. The refresh is applicable only when the panel containing the widget is active.
    * **Source** for a widget can be set either from the execution of Dialog Task, from JavaScript by defining a JSON, or by linking an existing Digital Form.

4. Click **Save**.

### Configure Widget Sources

For the widget input data, you must configure one of the following sources and complete the configuration.

### Dialog Task

The **Dialog Task** option allows you to trigger a task and present the output in the widget.

The **Select Dialog Task** drop-down will list all available tasks in the current AI Agent. Select the task you want to trigger using this widget.

!!! Note

    In the connected Dialog Task make sure to use a Message node to present the required information in the widget using any of the supported widget templates.

You can use the icon next to the Dialog Task to open the Dialog Task for checking the task details like entity names etc.

Any entities used by the selected Dialog Task need to be pre-populated with values by mapping **Entity Name** with **Entity Values**.

If the selected Dialog Task has any **Authorization Profile** defined, it is displayed here.

<img src="../../images/dialog-task-source.png" alt="dialog task source" title="dialog task source" style="border: 1px solid gray; zoom:75%;">

### JSON

When selecting JSON as the source, you will be presented with a Javascript editor, where you can add your code, as shown below:

<img src="../../images/json-source-file.png" alt="json file upload" title="json file upload" style="border: 1px solid gray; zoom:75%;">

### Digital Form

When selecting **Digital Form** as a widget source, you  can select the Digital Form, and the Dialog Task to trigger on submission.

!!! Note

    A Digital Form can be used to define multiple Widgets and can also be added to multiple Panels. However, it will be associated with the same Dialog Task across all Widgets and Panels.

<img src="../../images/digital-form-as-source.png" alt="digital form as source" title="digital form as source" style="border: 1px solid gray; zoom:75%;">

### Edit, Run & Preview a Widget

After you save, the widget will be **In Development** state. You can **Edit** or **Delete** the widget.

<img src="../../images/widget-saved.png" alt="widget saved" title="widget saved" style="border: 1px solid gray; zoom:75%;">

When you select **Edit** widget, apart from being able to modify any of the above fields, you will have the option to **Run & Preview** the widget. You can save the preview as the thumbnail display for the widget.

<img src="../../images/run-widget-preview.png" alt="widget preview" title="widget preview" style="border: 1px solid gray; zoom:75%;">

## Configure Panels

Panel refers to containers that hold one or more widgets. You can add an existing widget to the panel or create new widgets within it.

### Create a Panel

To create a panel, follow the steps below:

1. Click **Create Panel** on the Digital Views screen to create a panel.
2. On the **New Panel** window, enter the following details:
    
    * **Name** of the Panel.
    * **Display Name** for the Panel.
    * **Panel Icon** to display in the chat window (URL to the location).
    * **Save** the Panel.
    
    <img src="../../images/create-new-digital-view-panel.png" alt="create new digital view panel" title="create new digital view panel" style="border: 1px solid gray; zoom:75%;">

3. After you save, the panel will be **In Development** and will be displayed on your Digital Views screen. 

### Add Widgets

1. Click **Add Widget** to add widgets to the panel.

   <img src="../../images/panel-add-widget.png" alt="add widget to panel" title="add widget to panel" style="border: 1px solid gray; zoom:75%;">

2. Select widgets from the drop-down list and click **Add**. You can add multiple widgets to the same panel.
    
    <img src="../../images/select-widgets-from-dropdown-list.png" alt="select widgets from dropdown" title="select widgets from dropdown" style="border: 1px solid gray; zoom:75%;">

### Panel Options

You have the following options for a given panel:

1. **Edit** the panel details;
2. **Add Form** to add existing forms to the Panel. Once added, forms will behave as a widget with the source set to Digital Form;

    * **Add Widget** to add existing widgets;
    * **Panel Management** to add existing forms/widgets, or remove already added forms/widgets from the panel.
    * **Test** the individual panel – this opens the **Talk to App** window along with the panel listing with the current panel active and data presented. You can interact with the AI Agent and test the panel.
    * **Delete** the Panel.

  <img src="../../images/panel-options-for-digital-views.png" alt="panel options for digital views" title="panel options for digital views" style="border: 1px solid gray; zoom:75%;">

## Publish

When you publish your App,  please ensure that the panels and widgets you want to include are selected.

[Learn more](configure-digital-views.md#publish){:target="_blank"} about publishing an App.

<img src="../../images/publish-digitalview.png" alt="publish digital view" title="publish digital view" style="border: 1px solid gray; zoom:75%;">

## Host

The Platform provides the Widget SDK for hosting and managing panels and widgets. You can choose to host your widgets independently or co-host them along with the WebSDK. You can download the SDKs from the Kore.ai GitHub page. Do ensure to enable WidgetSDK as a channel. [Learn more](../../../channels/add-widget-sdk-channel.md){:target="_blank"}.