# Flow Nodes

The Flow Designer canvas lets you configure nodes representing various flow components.

The Start node is the starting point of any flow and is available by default. You can drag and drop it (as well as any other nodes) anywhere on the canvas.

## Available Node Types

<table>
  <tr>
   <td><strong>CHANNEL</strong>
   </td>
   <td><strong>NODE</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Voice
   </td>
   <td>IVR Menu
   </td>
   <td>It allows you to add IVR menu options, which callers can select by pressing a phone key. 
   </td>
  </tr>
  <tr>
   <td>Voice
   </td>
   <td>IVR Digit Input
   </td>
   <td>Use this node to ask for digit input from callers-for example, a phone number or the last four digits of their credit card.
   </td>
  </tr>
  <tr>
   <td>Voice
Chat
   </td>
   <td>Split
   </td>
   <td>Use this node to split inbound queries based on specific conditions.
   </td>
  </tr>
  <tr>
   <td>Voice
Chat
   </td>
   <td>Check Agent Availability
   </td>
   <td>This node lets you check agent availability based on skill set and decide the next node based on agent availability.

   <strong>Note</strong>: This is an experimental node and may be deprecated in future versions.
   </td>
  </tr>
  <tr>
   <td>Voice
Chat
   </td>
   <td>Check Business Hours
   </td>
   <td>It allows you to select the working hours and decide the next node depending on whether the query is received within or outside those hours.
   </td>
  </tr>
  <tr>
   <td>Voice
Chat
   </td>
   <td>Message Prompt
   </td>
   <td>Use this node to provide messages to customers who contact you via voice or chat.
   </td>
  </tr>
  <tr>
   <td>Voice
Chat
   </td>
   <td>Automation
   </td>
   <td>This node helps run a specific dialog built within your XO Platform Bot.
   </td>
  </tr>
  <tr>
   <td>Voice
Chat
   </td>
   <td>Agent Transfer
   </td>
   <td>This node allows you to explicitly transfer control from an existing contact flow to a live agent based on triggers.
   </td>
  </tr>
  <tr>
   <td>Voice
Chat
   </td>
   <td>Connect to API
   </td>
   <td>This node lets you make synchronous or asynchronous requests using SOAP or REST API calls.
   </td>
  </tr>
  <tr>
   <td>Voice
Chat
   </td>
   <td>Go To Flow
   </td>
   <td>This node helps navigate from a parent to a target flow, already built within Contact Center AI to cover a specific part of the customer interaction.
   </td>
  </tr>
  <tr>
   <td>Voice
Chat
   </td>
   <td>Script Task
   </td>
   <td>This node allows you to define a script for processing context variables or other variables used within the flow.
   </td>
  </tr>
  <tr>
   <td>Voice
Chat
   </td>
   <td>Set Queue
   </td>
   <td>Use this node to define/modify Queue settings, default messages, and behavior.
   </td>
  </tr>
  <tr>
   <td>Voice
Chat
   </td>
   <td>End Flow
   </td>
   <td>This node allows you to define what message will be played to the customer when the flow ends.
   </td>
  </tr>
</table>

## Add Nodes

**Method 1**: Click the “**+**” icon and select a node from the pop-up menu.
<img src="./../images/node-selection.png" alt="Node Selection" title="Node Selection" style="border: 1px solid gray; zoom:70%;">

Select the node from the list and click **+ New Node**.
<img src="./../images/add-new-node-window.png" alt="Add New Node" title="Add New Node" style="border: 1px solid gray; zoom:70%;">

**Method 2**:  Drag nodes from within the Nodes Panel onto the Canvas, as shown in the demo below:
<img src="./../images/add-node.gif" alt="Add Node" title="Add Node" style="border: 1px solid gray; zoom:70%;">

## Configure Nodes

To configure any node added to your canvas, click the node. The configuration panel opens.
<img src="./../images/node-settings-window.png" alt="Node Configuration Panel" title="Node Configuration Panel" style="border: 1px solid gray; zoom:70%;">

## Rearrange Nodes

To rearrange nodes on your canvas, drag and drop them to the desired location.
<img src="./../images/rearrange-nodes.gif" alt="Rearrange Nodes" title="Rearrange Nodes" style="border: 1px solid gray; zoom:70%;">

!!! Note

    Only the node that you are dragging will change position. Any connecting nodes will remain in place, regardless of the direction of their connection.

## Connect Nodes

Node connections are either made within the configuration of each node or by dragging and dropping the nodes on the canvas. The steps are the following:

1. Click the **+** and move the cursor to the node you want to connect.
2. A line should now be drawn between the nodes, with an arrow indicating the direction of the node connection.
<img src="./../images/connect-nodes.gif" alt="Connect Nodes" title="Connect Nodes" style="border: 1px solid gray; zoom:70%;">

## Edit/Delete Node Connections

To edit/delete node connections, click the line connecting two nodes. The line is highlighted and a  pop-up is displayed with the following options:

* Bend line connector,
* Straight line connector,
* Change line color,
* Delete connector.  
<img src="./../images/connection-options.png" alt="Connection Options" title="Connection Options" style="border: 1px solid gray; zoom:70%;">

**Edit Node Connection**: Click the respective icon to edit the node connector. For example, to change the color of the connector, click the color icon and select the color.
<img src="./../images/change-connector-color.gif" alt="Change Connector Color" title="Change Connector Color" style="border: 1px solid gray; zoom:70%;">

**Delete Node Connection**: Click the **Delete** button to delete the connection. The nodes remain on the canvas but will not be connected anymore. To ensure a working flow, you must create another connection between the nodes or remove unnecessary nodes. See the _Delete Nodes_ section below for details.  
<img src="./../images/delete-node-connector.gif" alt="Delete Node Connection" title="Delete Node Connection" style="border: 1px solid gray; zoom:70%;">

## Edit/Delete Nodes

To edit/delete nodes, right-click the node. The following options are displayed:

* Rename,
* Mark as Flow Starting Point,
* Sequence Color,
* Delete.  
<img src="./../images/edit-delete-node.png" alt="Edit/Delete Node" title="Edit/Delete Node" style="border: 1px solid gray; zoom:70%;">

**Edit Node**: Click the respective icon to edit the node. For example, to change its color, click the sequence color icon and select the color.
<img src="./../images/edit-node-color.gif" alt="Edit Node Color" title="Edit Node Color" style="border: 1px solid gray; zoom:70%;">

**Delete Node**: Click the **Delete** button. A confirmation pop-up is displayed. Click **Confirm** to delete the node.

!!!Note

    * You cannot restore deleted nodes unless you have previously saved a version that contains them. Restoring a version also means that you may lose other changes you made to the flow. Please proceed with caution. See [Restore Versions](../../deploy/bot-versioning.md#restoring-versions) for details.
    * You cannot delete the Start node.

<img src="./../images/delete-node.gif" alt="Delete Node" title="Delete Node" style="border: 1px solid gray; zoom:70%;">