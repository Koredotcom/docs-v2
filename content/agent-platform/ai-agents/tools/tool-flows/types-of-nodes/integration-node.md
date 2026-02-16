# Integration Node – Enhance Workflows with External Services

The **Integration Node** is a powerful and flexible component that acts as a run-time engine for securely connecting to third-party services, enabling seamless data exchange and automation through configured actions and auto-generated JSON. It leverages pre-configured connections and authentication methods to serve as a bridge between your tool and external platforms, supporting actions such as exporting data from a site or fetching broken back links within your automation without any coding effort.

## Key Capabilities

* **No-Code Service Integration**: Embed prebuilt third-party services or actions into your automation flow without writing any code.
* **Secure Connections**: Leverage tested and authenticated connections to ensure secure data exchange with external services.
* **Flexible Configuration**: Customize the node directly on the Tool Flow canvas and seamlessly connect it with other nodes to fit your automation needs.


## Common Use Cases

* **CRM & Marketing Automation**: Connect CRM systems with marketing platforms to trigger personalized campaigns based on customer data and behavior, such as automatically launching email sequences when a lead is captured.
* **Workflow Automation**: Automate tasks across apps, such as creating a project task when a support ticket is raised.
* **Payment Gateways**: Securely process online transactions through integrated third-party payment providers.
* **SaaS Integrations**: Enable seamless connections between SaaS tools (e.g., CRM, email marketing, e-commerce) to streamline daily workflows.


## Example Use Case

Let’s consider an example where the **Integration Node** can be used to automate the tracking of broken back links for a website. The workflow begins with a manual input of the target URL via the Start node. The Integration Node connects to a third-party SEO tool (e.g., Ahrefs) and calls an API to fetch back link data filtered for broken links.

Using pre-configured authentication, the request returns a structured response with broken URLs, referring pages, and status codes. This data is then passed to the next node for formatting or further use.

Results can be emailed, mapped to a dashboard, or used to trigger follow-up actions—streamlining SEO monitoring, reducing manual efforts, and enabling quick fixes.

## How It Works

The **Integration Node** integrates seamlessly into your tool flows, using configured connections and authentication mechanisms to securely interact with external services. It accepts inputs from previous nodes, executes third-party actions based on the selected service and parameters, and passes results to subsequent nodes. You can configure actions through the UI, use context variables for dynamic inputs, and customize prebuilt JSON code, making it ideal for automating a wide range of integration scenarios.

<img src="../images/how-integration-node-works.png" alt="how integration node works" title="how integration node works" style="border: 1px solid gray; zoom:75%;"/>

In this document, you will learn how to add Integration Nodes to your flows, configure them with connections and action parameters, handle inputs and outputs, and test your implementations.

## Prerequisites

* You must add at least one service provider connection before configuring the node by clicking <b>+ Add Connection</b>. The system redirects to <b>Settings</b> -> <b>Integrations</b> page. Follow the steps [here](../../../../settings/integrations/about-integrations.md#add-a-connection-to-set-up-integration){:target="_blank"} to complete the process.
* Always test the selected connection in the <b>Settings</b> console to ensure successful integration. [Learn more](../../../../settings/integrations/about-integrations.md#test-connection){:target="_blank"}.

## Add and Configure an Integration Node

### Step 1: Open Flow Builder

* Log into the the Platform and select **Tools** under modules.
* Select your tool and select **Go to Flow**.

### Step 2: Add the Node

* Click **Integration** > **+ New Integration** in the **Assets** panel. Alternatively, drag the node from the panel onto the canvas. You can also click **Integration** in the pop-up menu.
  <img src="../images/add-int-node.png" alt="add node" title="add node" style="border: 1px solid gray; zoom:75%;"/>

### Step 3: Configure the Node

* In the **Integration** window, either search for the required service or select from the listed options. [See](../../../../settings/integrations/about-integrations.md#supported-integrations){:target="_blank"} the list of supported pre-built integrations.
   <img src="../images/integrations-list.png" alt="integrations list" title="integrations list" style="border: 1px solid gray; zoom:75%;"/>

* Click the added node to open its properties dialog box. The **General Settings** for the node are displayed.

    <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>The node uses the service provider’s name by default. You can rename the node if needed.</p>
    </div>

* Enter or select inputs for the following fields:
     * <b>Node Name</b>: Enter an appropriate name for the node. For example, “<i>Ahrefslinkbuilder</i>” (Only letters and numbers are allowed).
     * <b>Connection Name</b>: Select a connection from the listed options. The list includes all the active connections you have added and configured under <b>Settings</b> > <b>Integrations</b>.
      <img src="../images/select-connection-name.png" alt="select connection" title="select connection" style="border: 1px solid gray; zoom:75%;"/>

* Click <b>Add Action</b> to add and configure the required actions or tasks from the service provider.

    <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>Only one action can be added and configured at a time.</p>
    </div>

    <img src="../images/add-action-click.png" alt="click add action" title="click add action" style="border: 1px solid gray; zoom:75%;"/>  

* In the <b>Add Action</b> window, select the required action to be linked to the node.
   <img src="../images/add-action.png" alt="add action" title="add action" style="border: 1px solid gray; zoom:75%;"/>

* In the action settings window, add inputs for the action fields and click <b>Save</b>. These parameters define how the action is executed for the connection.

    <div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>The action parameters vary depending on the specific action and provider. See the tooltip for more information.</p></div>

    <img src="../images/action-parameters.png" alt="action parameters" title="action parameters" style="border: 1px solid gray; zoom:75%;"/>
     
* The added action is listed in the <b>General Properties</b> window of the node. This action is applied to all the connections available for the provider.
   <img src="../images/integration-gen-properties.png" alt="gen properties" title="gen properties" style="border: 1px solid gray; zoom:75%;"/>

* Click the <b>Connections</b> icon and select <b>Go to Node</b> for success and failure conditions.
     * <b>On Success</b> > <b>Go to Node</b>: After the current node is successfully executed, go to a selected node in the flow to execute next, such as an AI node, Function node, Condition node, API node, or End node.
     * <b>On Failure</b> > <b>Go to Node</b>: If the execution of the current node fails, go to the End node to display any custom error message from the AI node.
     <img src="../images/success-failure-flow.png" alt="node flow" title="node flow" style="border: 1px solid gray; zoom:75%;"/>

    The node connects to the service using the selected connection and performs the configured action when the flow is run.

    The **next step** is to configure and test the flow for the node. [Learn more](./integration-node.md#add-and-configure-an-integration-node){:target="_blank"}.

## Manage Actions

You can either **change** or **edit** an action for an integration. However, you **cannot delete** a configured action directly. To remove an action, you must add a **new node** and configure it with a different action.

### Change Action

To configure a different action, click the **Change Action** button.
<img src="../images/change-action.png" alt="change action" title="change action" style="border: 1px solid gray; zoom:75%;"/>

Then, select another action in the **Change Action** window.     

<img src="../images/select-action-change.png" alt="select action" title="select action" style="border: 1px solid gray; zoom:75%;"/>

<div class="admonition warning">
<p class="admonition-title">Caution</p>
<p>If you change or replace the existing action, any configuration changes made to the previous action will be lost.</p>
</div>

The new action replaces the existing one for the connection. Please configure the action parameters for this action to work properly.

### Edit Action

To modify the parameters for an action, follow the steps below:

<ol><li>Click the <b>Edit</b> icon.</li>
<img src="../images/edit-action.png" alt="edit action" title="edit action" style="border: 1px solid gray; zoom:75%;"/></ol>
<ol start="2"><li>Modify the required values and click <b>Save</b>.</li></ol>

### View the JSON Code

In addition to defining action parameters in the configuration window, you can view the related JSON code.

To access the code, enable the **JSON switch** at the top right of the action configuration window. 

<img src="../images/enable-json.png" alt="enable json" title="enable json" style="border: 1px solid gray; zoom:75%;"/>

This opens a **code viewer** where you can view the JSON that defines the current action and copy the code. The Integration node executes this action code for the connection when you run the flow. 

<img src="../images/json-code-viewer.png" alt="json code viewer" title="json code viewer"  style="border: 1px solid gray; zoom:75%;"/>

## Test the Flow for the Node

After adding and configuring the node as mentioned [here](./integration-node.md#add-and-configure-an-integration-node){:target="_blank"}, follow the steps below to test the flow.


### Step 1: (Optional) Add Input Variable(s)

* Click the <b>Input</b> tab of the <b>Start</b> node, and click <b>Add Input Variable</b> to configure the input for the flow’s test run. <a href="../../perform-other-actions-on-the-flow-builder/manage-input-and-output/#adding-input-variables" target="_blank">Learn more</a>
    
    <img src="../images/start-node-io.png" alt="start node io" title="start node io" style="border: 1px solid gray; zoom:75%;"/>

* In the <b>Enter input variable</b> window, select the appropriate data type for the <b>Type</b> field to define the input variable.
* Click <b>Save</b>.

Add all the required input variables to run the flow in the **Input** section of the **Start** node. 

<img src="../images/add-input-var-integration.png" alt="add input variable" title="add input variable" style="border: 1px solid gray; zoom:75%;"/>

### Step 2: Add Output Variable(s)

This step is required because the **Start node** must have at least one **output parameter** linked to the node.

* Click the <b>Start</b> node and select the <b>Output</b> tab.
* Click <b>Add Output Variable</b>.
  
    <img src="../images/add-op-var.png" alt="add output variable" title="add output variable" style="border: 1px solid gray; zoom:75%;"/>

* Enter the value for <b>Name (key)</b> and select <i>String</i> for <b>Type</b>.
* Click <b>Save</b>. <a href="#access-the-nodes-output" target="_blank">Learn more</a> about accessing the node’s output.
<img src="../images/output-variable.png" alt="op variable" title="op variable" style="border: 1px solid gray; zoom:75%;"/>

### Step 3: Run the Flow

<div class="admonition note">
<p class="admonition-title">Important</p>
<p>Before running the flow, resolve the tool flow errors that appear when you click the <b>Warning</b> icon.</p>
</div>

  <img src="../images/check-errors.png" alt="errors" title="errors" style="border: 1px solid gray; zoom:75%;"/>

To run and test the flow, follow the steps below:

* Click the **Run Flow** button at the top-right corner of the flow builder. 
    <img src="../images/click-run-flow.png" alt="click run flow" title="click run flow" style="border: 1px solid gray; zoom:75%;"/>

* (Optional) Add the value for the **Input Variable** if you have configured it to test the flow. Otherwise, go directly to the next step.
* Click **Generate Output**.
   
   <img src="../images/click-generate-op.png" alt="click settings" title="click settings" style="border: 1px solid gray; zoom:75%;"/>
 

The **Debug** window generates the flow log and output from the inputs provided. [Learn more](../perform-other-actions-on-the-flow-builder/run-the-flow.md){:target="_blank"} about running the tool flow.

## Access the Node’s Output

The node’s output is stored in a context variable. You can access the variable using the following syntax: `{{context.steps.IntegrationNodeName.output}}`

<div class="admonition note">
<p class="admonition-title">Important</p>
<p>The Platform can automatically recognize variables and outputs. To do so, type "<code>context.steps.</code>" and you will see available variables and nodes, including the nodes' outputs.</p>
</div>
