# Script Task Node

This node allows you to define a script for processing any context variables or other variables that can be used to build the flow. You can write the script using a JavaScript editor.

!!! Notes

    * Form data cannot be manipulated using a script.
    * The script node does not support creating a step in the flow. This has to be explicitly designed on the canvas.

## Configure the Node

### General Settings

In the **General Settings** section, provide the following information:
<img src="./../images/general-settings-script-task.png" alt="General Settings" title="General Settings" style="border: 1px solid gray; zoom:70%;">

1. A **Custom Name** to identify the node.
2. Under **Define a Script**, use the Javascript editor to input the script that you want to run.

### Connection Rules

Click the **Connection Rules** icon and select the Go to node you want the node to trigger when the script is successful or fails.

* For **On Success**, the selected Go to node defines how the bot handles a successful script
* For **On Error**, the selected Go to node defines how the bot handles a failed script.  
<img src="./../images/connection-rules-script-task.png" alt="Connection Rules" title="Connection Rules" style="border: 1px solid gray; zoom:70%;">
