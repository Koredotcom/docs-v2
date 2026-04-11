# Delay Node

The Delay node pauses workflow execution for a defined duration before proceeding to the next node. Use it to throttle processing, wait for an upstream system to become ready, or introduce a controlled interval between workflow steps.

## Add and Configure a Delay Node

Setting up a Delay node involves placing it at the appropriate point in your flow and configuring its name and timeout duration.

Steps to add and configure the node:

### Step 1: Open Workflow Builder

* Log in to your AI for Process account.
  <img src="../images/access-workflows.png" alt="access workflows" title="access workflows" style="border: 1px solid gray; zoom:75%;">

* Select your workflow → Click **Go to Flow**.

### Step 2: Add the Delay Node

* In the workflow builder, click the "+" icon on any existing node on the canvas and select Delay from the pop-up menu.
* Alternatively, drag the Delay node from the Assets panel onto the canvas and drop it at the desired position in the flow.

### Step 3: Configure the Node

* Click the added node to open its properties panel. A right-hand side pop-up displays the General Settings for the node.
* Enter or select the following information:

| Field            | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| Node Name        | Enter a descriptive name for the node. This label appears on the canvas and helps identify the node’s purpose within the workflow. |
| Timeout (seconds)| Enter the duration, in seconds, for which the workflow should pause.        |

<img src="./../images/delay-node-configure.png" alt="Configure Delay Node" title="Configure Delay Node" style="border: 0px solid gray; zoom:80%;">

!!! note

    The timeout value must be an integer between 30 seconds and 86,400 seconds maximum. Providing any value outside this range will trigger a validation error.

### Step 4: Test the Workflow

After configuring the Delay node, test the workflow to confirm it behaves as expected. Click the Run Flow button at the top-right corner of the workflow builder and follow the on-screen instructions.