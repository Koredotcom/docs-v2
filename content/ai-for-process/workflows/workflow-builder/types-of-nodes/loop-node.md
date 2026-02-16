# Loop Node - Automate Repetitive Tasks in Your Workflow

The Loop node enables you to repeat a set of steps for each item in a list, making it easy to handle tasks such as processing invoices, analyzing documents, or calling an API multiple times. It’s designed to help you automate repetitive actions, one item at a time.

Whether you're working with a fixed list or dynamic data, the Loop node gives you complete control over how each item is handled. You can define what happens inside the loop, choose how to handle errors, and collect all the results in one place- helping improve performance and scalability.

Use the Loop node to build smart, data-driven workflows that adapt to your data and run smoothly at scale.

**Example**

A bank's PR team can use the Loop node to send personalized Christmas greetings to multiple customers automatically. Here’s how the loop works in this case:

* The Function node, inside the loop, extracts and combines each customer's first and last names to create a personalized message.
* The Text-to-Image node, also placed inside the loop, generates a festive greeting image based on a text description prompt.
* These nodes are executed once for each customer in the input list.

By placing the Function and Text-to-Image nodes inside the Loop node, the workflow dynamically generates and sends 200 unique holiday greetings—each with a personalized message and image—in a single workflow execution.

## Key Capabilities

* **Repeat Logic for Arrays**: Execute a set of nodes for each item in an input array.
* **Flexible Node Insertion**: Add any supported node types—such as Function, API, or AI nodes—inside the Loop structure.
* **Custom Output Aggregation**: Collect and store results from each iteration of a specified output field to populate into the node's output array.
* **Configurable Error Handling**: Choose how the loop handles errors during iterations: *Continue on error*, *Remove failed results, or Terminate execution.*
* **Success and Error Paths**: Define distinct downstream logic for successful completion or failure of the loop.
* **Debugging and Inspection**: Visualize loop runs, drill down into each iteration, and trace output and failures for detailed analysis.
* **Workflow Portability**: Loop configuration persists across exports, imports, workflow sharing, and deployment.

## Common Use Cases

* **Batch Processing**: Process multiple records, invoices, or documents in one run—for example, extracting fields from a list of invoices.
* **API Calls on Multiple Inputs**: Loop through a list of customer IDs to fetch data or enrich records using an external API.
* **Bulk Notifications**: Send personalized messages or emails to a list of recipients, such as customers or employees.
* **Conditional Execution**: Perform specific actions for each item based on dynamic conditions— for example, route based on status or priority.
* **Multi-step Approval or Review Flows**: Run data through sequential approval steps for each request or user submission.
* **Report Generation**: Generate individual summaries or PDFs for each customer, product, or team in a dataset.
* **Automated Testing**: Reuse a test flow across different input values or environments.

## How it Works

The Loop node runs a defined set of steps repeatedly—once for each item in an array. It pulls data from a context variable, executes the child nodes placed inside the loop, and collects the outputs into a final array.

You can configure how the loop handles errors during execution and define what should happen when the loop completes successfully or encounters a failure.

<img src="../images/loop_node_flow.png" alt="loop node" title="loop node" style="border: 1px solid gray; zoom:80%;">

In this document, you’ll learn how to add a Loop node to your canvas, place and connect steps inside it, configure input and output variables, and customize error-handling behavior.

## Add and Configure a Loop Node

You can add a Loop node to your canvas to repeat a sequence of child nodes for each item in a list. Once added, you can define the loop input, configure output aggregation, and manage internal logic such as error handling and branching.

The Loop node contains a section or block where you can place supported child nodes to define what happens on each iteration.

### Step 1: Open Workflow Builder

* Log in to your AI for Process account.

* Select your workflow → Click **Go to Flow**.

### Step 2: Add a Loop Node

You can insert a Loop node on the canvas using any of the following methods:

* Assets Panel: Drag the Loop node from the tray to the canvas.
* Bottom Tray: Click the Loop node from the quick access section below the canvas.
* Plus Icon: Click the plus (+) icon when hovering between nodes and select the Loop node from the insert menu.

By default, the Loop node is added in *expanded mode*, allowing you to start building the logic inside immediately.

<img src="../images/loop_node.png" alt="loop node" title="loop node" style="border: 1px solid gray; zoom:80%;">

### Step 3: Add Nodes Inside the Loop

You can define the repeated steps by placing nodes inside the loop structure. Supported methods:

* Click the “+” on the loop start or existing node tiles.
* Use the Connections panel to add new steps.
* Drag and drop nodes into the loop block manually.

You can add any supported child nodes inside the Loop node, including Function Nodes, Text-to-Text AI Nodes, API Nodes, Condition Nodes, and others. Each child node runs once per item in the loop's input list. Use `{{currentItem}}` (or a custom alias if defined) to reference the current iteration item inside these nodes.

<img src="../images/loop_add_nodes_inside.png" alt="loop node" title="loop node" style="border: 1px solid gray; zoom:80%;">

!!! note

    Only nodes placed inside the loop block will execute per iteration. Nodes connected outside the Loop node will run after the loop completes.

### Step 4: Configure Loop Node Settings

Click on the Loop node to open its configuration panel. The following options are available:

**1. Loop Inputs & Outputs**

* **Node Name**: Assign a clear, descriptive name to the Loop node to make your workflow easier to understand and maintain.
* **Loop Input Source:** Specify the list or array that the Loop node should iterate over. This input defines the number of times the loop will run. Supported input types include:
    * A context variable (e.g., `context.invoices`)
    * An output field from a previous node
* **Output Field**: Define a variable to store the results from each iteration into the node’s output array (e.g., `context.result`). This output array is available for downstream nodes after the loop completes.

<img src="../images/loop_config_panel.png" alt="loop node config panel" title="loop node config panel" style="border: 1px solid gray; zoom:80%;">

**2. Define Success and Error Paths**

Configure **On Success** and **On Error** paths to control what happens after the loop completes or fails.

* Success Path: Connect to the node(s) that should run once the loop completes successfully. These are placed outside the loop.
* Error Path: Define what should happen if the loop encounters an error. This path is also outside the loop.

**3. Error Handling Options**

Choose how the Loop node should behave when an error occurs during iteration:

* **Continue on error** (default) – The loop executes all iterations. Failed iterations return error objects. The final output array contains both successful results and errors. Execution follows the success path.
* **Terminate execution** – The loop breaks on first failure. Execution follows the failure path with the failed iteration details.
* **Remove failed results** – Extends 'Continue on error' behavior. Failed iterations are filtered out of the final array. Only successful results are returned. Execution follows the success path.

Think of these like array processing methods:

* `continueOnError` = similar to `map()` that retains all results, including errors.
* `terminateOnError` = like throwing an exception that stops everything.
* `filterErrors` = like `map().filter()` that removes the bad ones.

<img src="../images/loop_errors.png" alt="loop errors" title="loop errors" style="border: 1px solid gray; zoom:80%;">

### Step 5: Run Workflow with Loops

Once you’ve added and configured your Loop node, you can run the workflow to see how it executes.

* Click the **Run** button at the top of the canvas to execute the workflow end-to-end.
* A badge on the Loop node (located on the canvas) indicates the number of iterations executed.
* Once complete, the Loop node shows a summary of the total iterations run. This helps you verify that the loop is triggered correctly and gives a quick visual confirmation that all items were processed.

## Check Debug Logs

After running the workflow, use the Debug panel to inspect loop behavior, debug issues in specific iterations, and confirm final outputs.

* The Loop node appears in the Debug panel with key details:
    * Inputs received by the Loop node
    * Per-iteration outputs from child nodes
    * Aggregated results in the output field
    * Any errors encountered during iteration
* Click the icon next to the Loop node in the Debug panel to open the **Loop Runs** view:
    * View a list of all iterations with statuses: *Running*, *Completed*, or *Failed*
    * Failed iterations are marked in red
    * Click on any iteration to view the step-by-step flow and node execution inside it
* Once the loop finishes:
    * The output array is shown in the Output tab
    * The result reflects your selected error-handling option
    * Total execution time is displayed

<img src="../images/loop_debug.png" alt="loop node debug panel" title="loop node debug panel" style="border: 1px solid gray; zoom:80%;">

## Troubleshooting Common Issues

<table>
  <tr>
   <td><strong>Issue</strong>
   </td>
   <td><strong>Cause</strong>
   </td>
   <td><strong>How to Fix</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Loop input is missing or empty</strong>
   </td>
   <td>Input list is undefined or resolves to <code>null</code>/empty
   </td>
   <td>Ensure the Loop Input Source is set to a valid array (e.g., <code>{{inputs.items}}</code>). Verify it in the Debug Log.
   </td>
  </tr>
  <tr>
   <td><strong>Child nodes not executing</strong>
   </td>
   <td>Nodes are placed outside the loop container
   </td>
   <td>Only nodes inside the loop container run per iteration. Drag nodes into the loop box on the canvas.
   </td>
  </tr>
  <tr>
   <td><strong>Loop stops when one item fails</strong>
   </td>
   <td>The error handling option could be incorrect.
   </td>
   <td>Change the error handling option to 'Continue on error' to skip failed iterations.
   </td>
  </tr>
  <tr>
   <td><strong>Output variable conflicts</strong>
   </td>
   <td>Output field name is reused elsewhere in the flow
   </td>
   <td>Use a unique name for the Output field to avoid overwriting data.
   </td>
  </tr>
</table>

