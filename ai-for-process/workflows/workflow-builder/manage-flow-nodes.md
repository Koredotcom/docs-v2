# Manage Nodes in Workflow

A flow consists of a sequence of nodes connected on the workflow builder canvas. You can easily add nodes to the canvas, connect them, rename, rearrange, and delete them as needed.

The Workflow builder lets you visually design workflows by arranging and connecting nodes on a canvas.

This page covers how to:

* Add, rename, rearrange, and delete nodes
* Connect nodes to define sequential or parallel execution
* Resolve common issues
* Apply best practices for efficient flow design


## Add Nodes

Every new flow begins with a **Start** node, which is automatically placed on the canvas by default. This node acts as the entry point and must be connected to at least one other node to form a valid flow.

To ensure the workflow functions properly, all nodes must be connected—directly or indirectly—to the Start node. If any initial nodes aren't linked to the Start node, the workflow may malfunction or fail to execute as expected. You can drag and drop the Start node (as well as any other nodes) anywhere on the canvas.

You can add nodes to the canvas in three ways:

1. **Drag from the bottom panel**: Scroll through available node types and drag them onto the canvas.
2. **Use the left panel (Assets)**: Select and place pre-configured nodes directly onto the canvas from the left panel.
3. **Use the blue plus icon (+) on a node**: Hover over the grey dot on any node (including Start) to reveal a blue plus icon (+). Select to see options:
    * **Add new node** – Instantly places a new node on the canvas and connects it.
    * **Add existing node** – Allows you to select a previously added node.

  <img src="../images/start_node_new.png" alt="Add a new Node" title="Add a new Node" style="border: 1px solid gray; zoom:80%;">

## Rename Nodes

To rename a node:

1. Right-click the node on the canvas.
2. Select **Rename** from the context menu.
3. In the **Node Name** field of the configuration panel (which appears on the right), enter the new name.

Use clear, descriptive names to make your flow easy to understand. For example, Rename a generic Function Node to something meaningful like Validate Email Input.

<img src="../images/rename_node_new.png" alt="Rename a Node" title="Rename a Node" style="border: 1px solid gray; zoom:80%;">

## Delete Nodes

To delete a node, right-click the node on the canvas and select **Delete** from the context menu.

Deleting a node will also remove its associated connections. Be sure to reconnect any dependent paths to maintain a valid flow.


## Rearrange Nodes

You can rearrange nodes for visual clarity without affecting their logical connections.

To move a node, click and drag the node to the desired location on the canvas.
Only the selected node will move—connected lines will automatically adjust to maintain the connection, while other nodes remain fixed.

<img src="../images/rearrange-a-node-new.gif" alt="Rearrange a Node" title="Rearrange a Node" style="border: 1px solid gray; zoom:80%;">

Optional layout options:

* **Auto Arrange**: Right-click anywhere on the canvas and select **Auto arrange** to automatically reposition all nodes for a cleaner layout.
* **Canvas Display Options**: You can also toggle visual elements by right-clicking the canvas and choosing **Show/Hide UI** or **Show/Hide Grid.**


## Connect Nodes

In Workflow Builder, node connections determine how tasks flow from one node to another — either sequentially or through multiple parallel branches.

You can create and manage connections in the following ways:

* **Canvas-based (visual):** Drag and drop to connect nodes directly on the canvas.
* **Node configuration panel:** Define success and failure paths from within the node’s property panel.

Once the nodes are on the canvas, how you connect them decides how they run. Workflow Builder supports two main execution types:

* **Sequential** – Tasks run one after another, in a defined order.
* **Parallel** – Tasks run simultaneously across separate branches.

These execution patterns define how tasks run across a workflow—either one after another (sequentially) or simultaneously (in parallel)—enabling flexible design for both simple and complex use cases.

### Understanding Execution Structures


<table>
  <tr>
   <td><strong>Feature</strong>
   </td>
   <td><strong>Sequential Execution</strong>
   </td>
   <td><strong>Parallel Execution</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Use When</strong>
   </td>
   <td>
<ul>

<li>Tasks depend on previous steps and must be run one after another.</li>
</ul>
   </td>
   <td>
<ul>

<li>Multiple tasks are independent and can run at the same time.</li>

<li>Speed up workflows with tasks that don't rely on each other's output.</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>How It Works</strong>
   </td>
   <td>
<ul>

<li>Execution starts at the Start node.</li>

<li>Each node runs only after the prior node finishes.</li>

<li>The flow moves forward through connected nodes in a top-down or left-to-right sequence.</li>

<li>All paths eventually connect to an End node to mark flow completion.</li>
</ul>
   </td>
   <td>
<ul>

<li>All connected branches from a single node execute at the same time.</li>

<li>Each branch works independently of the others.</li>

<li>You can add up to <strong>10 branches</strong> from a single node.</li>

<li>Each branch continues its own path until it reaches an End node or another connection.</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Benefits</strong>
   </td>
   <td>
<ul>

<li>Predictable and controlled execution</li>

<li>Easier debugging and maintenance</li>

<li>Clear task-to-task dependency</li>
</ul>
   </td>
   <td>
<ul>

<li>Reduces total execution time</li>

<li>Boosts performance with simultaneous operations</li>

<li>Enables independent task handling</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Ideal for workflows that require</strong>
   </td>
   <td>
<ul>

<li>Step-by-step task execution</li>

<li>Strict data or logic dependencies</li>

<li>Ordered, linear processing</li>
</ul>
   </td>
   <td>
<ul>

<li>Concurrent task execution</li>

<li>Multi-channel or multi-path logic</li>

<li>Faster processing of unrelated tasks</li>
</ul>
   </td>
  </tr>
</table>


### Designing Sequential Flows

In a sequential structure, nodes execute one after another in a defined order. Each node begins only after the previous one finishes, making this structure ideal when tasks are interdependent.

*Example Scenario: Lead Qualification Flow*
A sales assistant agent uses a sequential pattern to assess and score leads. First, it fetches CRM data, then analyzes engagement history, and finally generates a lead score—all in order. Each task depends on the output of the previous one.
 
**Steps to create a sequential connection:**

**Option 1: Drag-to-Connect**

1. Hover over the **blue + icon** or **grey connector dot** on the source node.
2. Select and **drag a line** to the destination node.
3. A connection line is drawn between the nodes, with an arrow indicating the direction of the node connection.

<img src="../images/connect-nodes-new.gif" alt="Connect Nodes" title="Connect Nodes" style="border: 1px solid gray; zoom:80%;">

**Option 2: Use the Blue + Icon**

1. Hover over the existing node, select the **blue + icon,** and then choose **Add New** or **Add Existing**.
The selected node is added and connected in sequence.

<img src="../images/blue_plus_icon.png" alt="Blue plus icon" title="Blue plus icon" style="border: 1px solid gray; zoom:80%;">

**Option 3: Use the Connections Panel**

1. Select on the node to open the **Configuration Panel** on the right.
2. Go to the **Connections** tab.
3. Under **On Success** or **On Failure**, use the dropdown to:
    * Add a new node.
    * Connect to an existing, unused node.
4. A sequential connection is automatically created and reflected on the canvas.

<img src="../images/sequential_connection.png" alt="Sequential connection" title="Sequential connection" style="border: 1px solid gray; zoom:80%;">

**Key Considerations**

* All paths should converge at an End Node.
* Sequential chains are typically arranged from left to right for clarity.
* On the canvas, sequential connections are shown with single, linear paths.
* Node interactions—such as hover, select, or drag—will always result in downstream execution behavior.
* Logs display outputs in the exact order in which nodes are triggered, making it easier to debug or validate the logic.
* Only one connection can exist per outcome (On Success or On Failure) in a sequential flow. Any additional connections will be treated as parallel branches.

### Designing Parallel Flows

In a parallel flow, multiple branches run at the same time from the same parent node. Each branch can perform an independent task, allowing for faster, more efficient workflows—especially when tasks don't rely on each other.

Workflow Builder supports parallel execution to help you build faster and more flexible workflows—great for multi-channel actions, or when several tasks need to happen at once.

*Example Scenario: Content Distribution Flow*
In a marketing automation workflow, once a campaign is approved, the workflow triggers multiple parallel nodes to publish content to LinkedIn, Twitter, and Email. Each platform-specific task runs independently but starts simultaneously.

**Parallel Design Patterns**

Workflow Builder supports several ways to structure parallel logic, depending on how your tasks are organized:

* **Simple Parallel**
A single node branches out to multiple child nodes, each running independently.
*Use this when tasks can occur simultaneously without any dependencies.*

<img src="../images/simple_parallel.png" alt="Simple parallel" title="Simple parallel" style="border: 1px solid gray; zoom:80%;">

* **Nested Parallel**
A parallel branch contains its own parallel branches. 
*Useful for multi-step logic where each level does independent work.

<img src="../images/nested_parallel.png" alt="Nested parallel" title="Nested parallel" style="border: 1px solid gray; zoom:80%;">

* **Conditional + Parallel**
Combine condition nodes with parallel execution. Based on logic (for example: if/else), different sets of parallel branches are triggered.
*Example: If status is "new", run onboarding tasks in parallel. If "existing", skip them.*

<img src="../images/conditional_parallel.png" alt="Conditional parallel" title="Conditional parallel" style="border: 1px solid gray; zoom:80%;">

**Steps to create a parallel connection:**

You can design parallel execution using either the Canvas or the Connections Panel.

**Option 1: Use the Blue + Icon on the canvas**

1. Hover over the existing node and click the blue + icon.
2. Select one of the following options to add multiple nodes as parallel branches:
    1. **Add new**: Creates and connects a new node as a parallel path.
    2. **Add existing**: Selects from already defined nodes that aren't part of the current branch.

The selected node is added, and a connection line is automatically drawn between the nodes.

<img src="../images/blue_icon_parallel.png" alt="Blue icon" title="Blue icon" style="border: 1px solid gray; zoom:80%;">


**Option 2: Drag-to-Connect on the canvas**

1. Hover over the blue + icon or grey connector dot on the source node.
2. Click and drag a line from the source node to another node on the canvas.
3. A connection line is drawn between the nodes, with an arrow indicating the direction of the node connection. 
4. To form a fork for parallel execution, repeat the process by adding and connecting more nodes from the same parent.

<img src="../images/parallel_dragtoconnect.png" alt="Drag to connect" title="Drag to connect" style="border: 1px solid gray; zoom:80%;">


**Option 3: Use the Connections Panel**

1. Click the node to open the Configuration Panel on the right.
2. Go to the Connections tab.
3. Use the **On Success** or **On Failure** dropdowns to add multiple nodes.
Nodes that are already connected will be disabled.
4. Click **+ Parallel Node** to add more branches.
5. As soon as you select a node, it’s added as a parallel path. A connection line appears on the canvas to reflect the update.

<img src="../images/parallel_connections_panel.png" alt="Drag to connect" title="Drag to connect" style="border: 1px solid gray; zoom:80%;">



!!! important

    * **Max Outgoing Connections**: You can create up to **10 outgoing connections** from a single node. After that, new connection options are disabled.
    * **No Duplicate Connections**: You can’t connect the same node more than once from the same parent. The system automatically prevents duplicate connections from a single branch.
    * **No Backward Loops**: You cannot connect a node to another node that appears earlier in the flow. The system blocks such connections and displays an error message to prevent unintended logic cycles and ensure stable, predictable flow execution. Existing deployed flows with backward connections will continue to run, but exporting and re-importing them will cause execution to break, as backward loops are no longer supported in the current Flow Builder.

**Key Considerations**

* All branches from a node run at the same time.
* The system shows warnings or disables options if you reach any limits.
* Parallel connections are represented by separate lines originating from a single node.
* The canvas layout expands automatically to fit multiple branches.
* Logs show branch-specific outputs, making debugging easier.

## Manage and Remove Connections

To delete a connection between nodes:

1. Click the arrow/line between two nodes.
2. Click the Delete icon. The nodes remain on the canvas but are no longer linked.
3. Deleting a connection breaks the flow until the nodes are reconnected.

<img src="../images/delete_connection.png" alt="Delete icon" title="Delete icon" style="border: 1px solid gray; zoom:80%;">

You can also manage connections from the Configuration Panel:

1. Open the panel by selecting a node.
2. In the Connections tab, click the Delete icon next to the connection you want to remove.
3. The connection is deleted instantly from both the panel and the canvas.

<img src="../images/delete_icon.png" alt="Delete icon" title="Delete icon" style="border: 1px solid gray; zoom:80%;">

## Common Issues and How to Resolve Them

<table>
  <tr>
   <td><strong>Issue</strong>
   </td>
   <td><strong>Cause</strong>
   </td>
   <td><strong>Resolution</strong>
   </td>
  </tr>
  <tr>
   <td>Can't add a new connection
   </td>
   <td>Node has 10 outgoing connections
   </td>
   <td>Delete a connection to add more
   </td>
  </tr>
  <tr>
   <td>“No available nodes” in the dropdown
   </td>
   <td>All valid nodes are already linked
   </td>
   <td>Create a new node or unlink existing ones
   </td>
  </tr>
  <tr>
   <td>Flow doesn't execute
   </td>
   <td>Broken or incomplete connections
   </td>
   <td>Check for stray nodes or missing End Nodes
   </td>
  </tr>
  <tr>
   <td>Error when connecting to a previous node
   </td>
   <td>Backward looping isn't allowed
   </td>
   <td>Reconnect the node to a valid forward step in the flow
   </td>
  </tr>
</table>


## Tips for Better Workflow Design

* Use **parallel** structures to speed up independent tasks.
* Use **sequential** paths when steps depend on the results of prior steps.
* Combine both styles to build hybrid flows for advanced logic.
* Always monitor node limits and watch for visual cues:
    * **One line = sequence**
    * **Branching lines = parallel**
* Regularly use **Auto Arrange** to clean up the canvas.
* Ensure every logical branch concludes at an **End Node**.


## Monitoring & Logs

The Workflow Builder provides a detailed view to help you monitor execution and debug workflows effectively. Whether your flow runs sequentially or in parallel, logs display key information such as inputs, outputs, runtime, and token usage per node.

### View Sequential Execution in Logs

In sequential flows, node execution is logged in the exact order of operation in the Debug panel.

* Each node appears one after another based on the flow sequence.
* This view helps track the step-by-step progression of the flow and isolate issues in linear flows.

<img src="../images/sequential_log.png" alt="Sequential log" title="Sequential log" style="border: 1px solid gray; zoom:80%;">

### View Parallel Execution in Logs

When a flow includes parallel branches, the Debug Logs panel helps you trace each branch clearly. It shows grouped execution for each branch under the same parent node.

**How It Appears**

* Each parallel execution is shown as an indented block grouped under the parent node.
* Branches are labeled (for example, A, B, C) to show separate paths.
* You can expand or collapse each branch to view or hide its details.

<img src="../images/debug_log_new.png" alt="Parallel log" title="Parallel log" style="border: 1px solid gray; zoom:80%;">

**Behavior**

* All branches run at the same time, but logs help you follow what happened in each path.
* The workflow waits for all parallel branches to complete before moving to the next step.
* End nodes from all branches are tracked, and their outputs are combined before passing to the next node. 




