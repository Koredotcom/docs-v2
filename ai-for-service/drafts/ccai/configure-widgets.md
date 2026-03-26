# Widgets

Contact Center AI lets you to integrate external systems and pages into the Agent Console. Agents can use widgets from within custom [Agent Console Layouts](../../../console/manage-layout.md).

!!! Note

    For widgets to load properly within the agent console, you may need to set up permissions to access the application or page you want to integrate. 

## Add a Widget

Steps to add an external widget:

1. Go to Contact Center AI > CONFIGURATIONS > Widgets.
2. Click `External Widget`.  
    <img src="../images/widgets-page.png" alt="Widgets Page" title="Widgets Page" style="border: 1px solid gray; zoom:80%;">

3. The External Widgets window opens. Click `+ New External Widget`.
    <img src="../images/new-external-widget.png" alt="New External Widget" title="New External Widget" style="border: 1px solid gray; zoom:80%;">

4. The Add Widget window opens, and you can configure the following:
    1. The `Widget Name` by which to identify it later.
    2. Select the checkbox to load the custom widget independently without a conversation.
    3. The `Widget Icon`. Click the section to upload a file, or use drag-and-drop.  
        <img src="../images/widget-name.png" alt="Widget Name and Icon" title="Widget Name and Icon" style="border: 1px solid gray; zoom:80%;">

5. If you want to remove an icon, click `Delete` on the right side. You can re-upload an icon afterward as needed.

6. Use this field to define the URL of the system or webpage that you want to embed as a widget. You can enter a static URL or configure a dynamic URL that resolves values at runtime.

    You can insert variables from the `{} Variable drop-down`. The system supports the following variables:

    * Agent Id
    * Agent First Name
    * Agent Last Name
    * Customer Email Id
    * Customer First Name
    * Customer Last Name
    * Customer Phone Number
    * Conversation Id

    You can also insert custom variables using the Insert custom variable option. This option lets you reference metadata defined in Agent Utilities. Insert custom variables in this format:

    `{{context.metaInfo.<yourCustomVarName>}}`

    The system replaces the variable with the actual metadata value when the widget loads. For example, if you configure:

    `https://www.example.com/?id={{context.metaInfo.customerId}}`

    and the metadata contains `context.metaInfo.customerId = 12345`, the widget resolves the URL as:

    `https://www.example.com/?id=12345`

7. The **Failure URL** displays in case the intended page doesn't load. You can set the same variables as for the main URL.  
    <img src="../images/url-and-failure-url.png" alt="URL and Failure URL" title="URL and Failure URL" style="border: 1px solid gray; zoom:80%;">

8. Click **Save**.  
    <img src="../images/save-widget.png" alt="Save Widget" title="Save Widget" style="border: 1px solid gray; zoom:80%;">

9. A success message displays, and lists the widget within the External Widgets window.

## Edit a Widget

To edit an existing widget, find it in the list of External Widgets, then click it. The configuration window opens, and you can edit the name, icon, URLs, or all.

## Delete a Widget

To delete an existing widget, find it in the list of External Widgets, then click on it. Click `Delete` on the left of the bottom toolbar, then `confirm` your choice.  
<img src="../images/delete-widget.png" alt=" Delete Widget" title="Delete Widget" style="border: 1px solid gray; zoom:80%;">

!!! Note

    When deleting a widget, all configurations are lost, and the widget is removed from the Agent Console. You cannot restore deleted widgets. Please proceed with caution.

## Add a Widget to an Agent Console Layout

Once you save an external widget, you can add it to the Agent Console using the [Manage Layout](../../../console/manage-layout.md) feature.

To add a widget to an Agent Console Layout, follow these steps:

1. From within the Agent Console, click `Manage Layout` on the top toolbar.
2. From the list of available layouts, select the one to which you want to add the widget and click the `✐` icon next to it.
3. On the Edit Layout screen, find the widget in the left-hand-side panel. Drag it to the right-hand-side panel.  
    <img src="../images/edit-layout.png" alt="Edit Layout" title="Edit Layout" style="border: 1px solid gray; zoom:80%;">

4. Click `Save`. Once the widget is added, the integrated system or page displays within the widget as part of the selected Agent Console Layout. See what it looks like in the demo below.  
    <img src="../images/layout-demo.gif" alt="Layout Demo" title="Layout Demo" style="border: 1px solid gray; zoom:80%;">

## Delete a Widget from an Agent Console Layout

To delete a widget from an Agent Console Layout, follow these steps:

1. From within the Agent Console screen, click Manage Layout on the top toolbar.
2. From the list of available layouts, select the one to which you want to add the widget and click the `✐` icon next to it.  
    <img src="../images/edit-layout.png" alt="Edit Layout" title="Edit Layout" style="border: 1px solid gray; zoom:80%;">

3. On the Edit Layout screen, click `More Options` at the top of the widget, then select `Delete`.
    <img src="../images/delete-widget-layout.png" alt="Delete Widget From Layout" title="Delete Widget From Layout" style="border: 1px solid gray; zoom:80%;">

    !!! Note

        Deleting a widget from the Console Layout only removes it from the agents’ view. The external widget configuration remains in place, and you can choose to integrate it again later.

## Load Widgets Without Conversations

If the checkbox to load the widget independently is selected when adding a widget, the widgets appear on the agent desktop even when a conversation isn't initiated. [Learn more](../widgets/configure-widgets.md#add-a-widget).  
<img src="../images/layout.png" alt="Load Widgets Without Conversations" title="Load Widgets Without Conversations" style="border: 1px solid gray; zoom:80%;">  

!!! Note

    Users can pre-load widgets without conversational context by enabling the option from the widget settings. Widgets that depend on conversational context continues to function without any changes.