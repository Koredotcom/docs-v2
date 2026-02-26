# Manage Nodes in Tool Flow

A flow consists of a sequence of nodes connected on the flow builder canvas. You can easily add nodes to the canvas, connect them, rename, rearrange, and delete them as needed.

The Tool Flow builder lets you visually design workflows by arranging and connecting nodes on a canvas.

This page covers how to:

* Add, rename, rearrange, and delete nodes
* Connect nodes to define sequential or parallel execution
* Resolve common issues
* Apply best practices for efficient flow design


## Add Nodes

Every new flow begins with a **Start** node, which is automatically placed on the canvas by default. This node acts as the entry point and must be connected to at least one other node to form a valid flow.

To ensure the tool functions properly, all nodes must be connected—directly or indirectly—to the Start node. If any initial nodes are not linked to the Start node, the flow may malfunction or fail to execute as expected. You can drag and drop the Start node (as well as any other nodes) anywhere on the canvas.

You can add nodes to the canvas in three ways:

1. **Drag from the bottom panel**: Scroll through available node types and drag them onto the canvas.
2. **Use the left panel (Assets)**: Select and place preconfigured nodes directly onto the canvas from the left panel.
3. **Use the blue plus icon (+) on a node**: Hover over the grey dot on any node (including Start) to reveal a blue plus icon (+). Click to see options:
    * **Add new node** – Instantly places a new node on the canvas and connects it.
    * **Add existing node** – Allows you to select a previously added node.


  ![Add a new Node](./images/start_node_new.png "Add a new Node")



## Rename Nodes

To rename a node:

1. Right-click the node on the canvas.
2. Select **Rename** from the context menu.
3. In the **Node Name** field of the configuration panel (which appears on the right), enter the new name.

Use clear, descriptive names to make your flow easy to understand. For example, Rename a generic “Function Node” to something meaningful like “Validate Email Input”.


![Rename a Node](./images/rename_node_new.png "Rename a Node")



## Delete Nodes

To delete a node, right-click the node on the canvas and select **Delete** from the context menu.

Deleting a node will also remove its associated connections. Be sure to reconnect any dependent paths to maintain a valid flow.


## Rearrange Nodes

You can rearrange nodes for visual clarity without affecting their logical connections.

To move a node, click and drag the node to the desired location on the canvas.
Only the selected node will move—connected lines will automatically adjust to maintain the connection, while other nodes remain fixed.


![Rearrange a Node](./images/rearrange-a-node-new.gif "Rearrange a Node")



Optional layout options:

* **Auto Arrange**: Right-click anywhere on the canvas and select **Auto arrange** to automatically reposition all nodes for a cleaner layout.
* **Canvas Display Options**: You can also toggle visual elements by right-clicking the canvas and choosing **Show/Hide UI** or **Show/Hide Grid.**


## Connect Nodes

In Flow Builder, node connections determine how tasks flow from one node to another — either sequentially or through multiple parallel branches.

You can create and manage connections in the following ways:

* **Canvas-based (visual):** Drag and drop to connect nodes directly on the canvas.
* **Node configuration panel:** Define success and failure paths from within the node’s property panel.

Once the nodes are on the canvas, how you connect them decides how they run. Flow Builder supports two main execution types:

* **Sequential** – Tasks run one after another, in a defined order.
* **Parallel** – Tasks run simultaneously across separate branches.

These execution patterns define how tasks run across a workflow—either one after another (sequentially) or simultaneously (in parallel)—enabling flexible design for both simple and complex use cases.

### Understanding Execution Structures


| <strong>Feature</strong> | <strong>Sequential Execution</strong> | <strong>Parallel Execution</strong> |
|:----- |:----- |:----- |
| <strong>Use When</strong> | <ul> <li>Tasks depend on previous steps and must be run one after another.</li> </ul> | <ul> <li>Multiple tasks are independent and can run at the same time.</li> <li>Speed up workflows with tasks that do not rely on each other's output.</li> </ul> |
| <strong>How It Works</strong> | <ul> <li>Execution starts at the Start node.</li> <li>Each node runs only after the prior node finishes.</li> <li>The flow moves forward through connected nodes in a top-down or left-to-right sequence.</li> <li>All paths eventually connect to an End node to mark flow completion.</li> </ul> | <ul> <li>All connected branches from a single node execute at the same time.</li> <li>Each branch works independently of the others.</li> <li>You can add up to <strong>10 branches</strong> from a single node.</li> <li>Each branch continues its own path until it reaches an End node or another connection.</li> </ul> |
| <strong>Benefits</strong> | <ul> <li>Predictable and controlled execution</li> <li>Easier debugging and maintenance</li> <li>Clear task-to-task dependency</li> </ul> | <ul> <li>Reduces total execution time</li> <li>Boosts performance with simultaneous operations</li> <li>Enables independent task handling</li> </ul> |
| <strong>Ideal for workflows that require</strong> | <ul> <li>Step-by-step task execution</li> <li>Strict data or logic dependencies</li> <li>Ordered, linear processing</li> </ul> | <ul> <li>Concurrent task execution</li> <li>Multi-channel or multi-path logic</li> <li>Faster processing of unrelated tasks</li> </ul> |


### Designing Sequential Flows

In a sequential structure, nodes execute one after another in a defined order. Each node begins only after the previous one finishes, making this structure ideal when tasks are interdependent.

*Example Scenario: Lead Qualification Flow*
A sales assistant agent uses a sequential pattern to assess and score leads. First, it fetches CRM data, then analyzes engagement history, and finally generates a lead score—all in order. Each task depends on the output of the previous one.
 
**Steps to create a sequential connection:**

**Option 1: Drag-to-Connect**

1. Hover over the **blue + icon** or **grey connector dot** on the source node.
2. Click and **drag a line** to the destination node.
3. A connection line is drawn between the nodes, with an arrow indicating the direction of the node connection.


![Connect Nodes](./images/connect-nodes-new.gif "Connect Nodes")



**Option 2: Use the Blue + Icon**

1. Hover over the existing node, click the **blue + icon,** and then choose **Add New** or **Add Existing**.
The selected node is added and connected in sequence.


![Blue plus icon](./images/blue_plus_icon.png "Blue plus icon")



**Option 3: Use the Connections Panel**

1. Click on the node to open the **Configuration Panel** on the right.
2. Go to the **Connections** tab.
3. Under **On Success** or **On Failure**, use the dropdown to:
    * Add a new node.
    * Connect to an existing, unused node.
4. A sequential connection is automatically created and reflected on the canvas.


![Sequential connection](./images/sequential_connection.png "Sequential connection")



**Key Considerations**

* All paths should converge at an End Node.
* Sequential chains are typically arranged from left to right for clarity.
* On the canvas, sequential connections are shown with single, linear paths.
* Node interactions—such as hover, select, or drag—will always result in downstream execution behavior.
* Logs display outputs in the exact order in which nodes are triggered, making it easier to debug or validate the logic.
* Only one connection can exist per outcome (On Success or On Failure) in a sequential flow. Any additional connections will be treated as parallel branches.

### Designing Parallel Flows

In a parallel flow, multiple branches run at the same time from the same parent node. Each branch can perform an independent task, allowing for faster, more efficient workflows—especially when tasks do not rely on each other.

Flow Builder supports parallel execution to help you build faster and more flexible workflows—great for multi-channel actions, or when several tasks need to happen at once.

*Example Scenario: Content Distribution Flow*
In a marketing automation workflow, once a campaign is approved, the workflow triggers multiple parallel nodes to publish content to LinkedIn, Twitter, and Email. Each platform-specific task runs independently but starts simultaneously.

**Parallel Design Patterns**

Flow Builder supports several ways to structure parallel logic, depending on how your tasks are organized:

* **Simple Parallel**
A single node branches out to multiple child nodes, each running independently.
*Use this when tasks can occur simultaneously without any dependencies.*


![Simple parallel](./images/simple_parallel.png "Simple parallel")



* **Nested Parallel**
A parallel branch contains its own parallel branches. 
*Useful for multi-step logic where each level does independent work.


![Nested parallel](./images/nested_parallel.png "Nested parallel")



* **Conditional + Parallel**
Combine condition nodes with parallel execution. Based on logic (for example, if/else), different sets of parallel branches are triggered.
*Example: If status is "new", run onboarding tasks in parallel. If "existing", skip them.*


![Conditional parallel](./images/conditional_parallel.png "Conditional parallel")



**Steps to create a parallel connection:**

You can design parallel execution using either the Canvas or the Connections Panel.

**Option 1: Use the Blue + Icon on the canvas**

1. Hover over the existing node and click the blue + icon.
2. Select one of the following options to add multiple nodes as parallel branches:
    1. **Add new**: Creates and connects a new node as a parallel path.
    2. **Add existing**: Selects from already defined nodes that are not part of the current branch.

The selected node is added, and a connection line is automatically drawn between the nodes.


![Blue icon](./images/blue_icon_parallel.png "Blue icon")




**Option 2: Drag-to-Connect on the canvas**

1. Hover over the blue + icon or grey connector dot on the source node.
2. Click and drag a line from the source node to another node on the canvas.
3. A connection line is drawn between the nodes, with an arrow indicating the direction of the node connection. 
4. To form a fork for parallel execution, repeat the process by adding and connecting more nodes from the same parent.


![Drag to connect](./images/parallel_dragtoconnect.png "Drag to connect")




**Option 3: Use the Connections Panel**

1. Click the node to open the Configuration Panel on the right.
2. Go to the Connections tab.
3. Use the **On Success** or **On Failure** dropdowns to add multiple nodes.
Nodes that are already connected will be disabled.
4. Click **+ Parallel Node** to add more branches.
5. As soon as you select a node, it’s added as a parallel path. A connection line appears on the canvas to reflect the update.


![Drag to connect](./images/parallel_connections_panel.png "Drag to connect")





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


![Delete icon](./images/delete_connection.png "Delete icon")



You can also manage connections from the Configuration Panel:

1. Open the panel by selecting a node.
2. In the Connections tab, click the Delete icon next to the connection you want to remove.
3. The connection is deleted instantly from both the panel and the canvas.


![Delete icon](./images/delete_icon.png "Delete icon")



## Common Issues and How to Resolve Them

| <strong>Issue</strong> | <strong>Cause</strong> | <strong>Resolution</strong> |
|:----- |:----- |:----- |
| Can't add a new connection | Node has 10 outgoing connections | Delete a connection to add more |
| “No available nodes” in the dropdown | All valid nodes are already linked | Create a new node or unlink existing ones |
| Flow doesn't execute | Broken or incomplete connections | Check for stray nodes or missing End Nodes |
| Error when connecting to a previous node | Backward looping is not allowed | Reconnect the node to a valid forward step in the flow |


## Tips for Better Flow Design

* Use **parallel** structures to speed up independent tasks.
* Use **sequential** paths when steps depend on the results of prior steps.
* Combine both styles to build hybrid flows for advanced logic.
* Always monitor node limits and watch for visual cues:
    * **One line = sequence**
    * **Branching lines = parallel**
* Regularly use **Auto Arrange** to clean up the canvas.
* Ensure every logical branch concludes at an **End Node**.


## Monitoring & Logs

The Flow Builder provides a detailed view to help you monitor execution and debug workflows effectively. Whether your flow runs sequentially or in parallel, logs display key information such as inputs, outputs, runtime, and token usage per node.

### View Sequential Execution in Logs

In sequential flows, node execution is logged in the exact order of operation in the Debug panel.

* Each node appears one after another based on the flow sequence.
* This view helps track the step-by-step progression of the flow and isolate issues in linear flows.


![Sequential log](./images/sequential_log.png "Sequential log")



### View Parallel Execution in Logs

When a flow includes parallel branches, the Debug Logs panel helps you trace each branch clearly. It shows grouped execution for each branch under the same parent node.

**How It Appears**

* Each parallel execution is shown as an indented block grouped under the parent node.
* Branches are labeled (for example, A, B, C) to show separate paths.
* You can expand or collapse each branch to view or hide its details.


![Parallel log](./images/debug_log_new.png "Parallel log")



**Behavior**

* All branches run at the same time, but logs help you follow what happened in each path.
* The flow waits for all parallel branches to complete before moving to the next step.
* End nodes from all branches are tracked, and their outputs are combined before passing to the next node. 
