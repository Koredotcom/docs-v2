# Condition Node - Automate Conditional Flows

The Condition Node helps you control the flow of your workflow based on whether specific logical conditions are met. You can define rules using context variables, node outputs, or custom values to create dynamic branching.

Based on whether conditions are met, the workflow follows different paths, giving you precise control over execution.

The node can handle three types of conditions:

* **If**: It directs the flow to a specific path if criteria (Node, Context, or Value) are met.
* **Else**: It defines the fallback path that the flow follows when the IF condition isn't met .
* **Else If**: It allows you to configure another set of criteria (Node, Context, or Value) to be met when the initial 'If' condition isn't satisfied.

Whether you need a simple true/false evaluation or a more complex branching using AND, OR, or multiple ELSE IF checks, the Condition node enables precise control over decision logic.


!!! note
    
    Due to security reasons, a condition can be called a maximum of 10 times in a workflow. Exceeding this limit will result in an error.

## Key Capabilities

* Flexible Condition Types: Define IF, ELSE IF, and ELSE paths using context variables, static values, or output from previous steps.
* AND / OR Logic: Combine multiple criteria for complex decision-making.
* Multi-Branch Execution: Direct the flow to different downstream nodes based on the condition evaluation.
* Context Variable Support: Easily reference values from earlier steps in the flow using {{context.variable}} and {{context.steps.nodename.output}}.
* Inline Expression Support: Use Node, Context, or Value types directly in conditional expressions.


## Common Use Cases

* Route Based on Classification: Direct flow based on category, type, or priority (e.g., route a ticket if priority = "High").
* Fallback Logic: Use ELSE conditions to redirect the flow if no match is found.
* Dynamic Node Triggering: Select which downstream actions to execute based on user inputs or computed data.
* Validation Checks: Stop execution or branch if key data is missing or invalid.
* Multi-Step Filtering: Combine multiple conditions for granular control (e.g., if country = US AND status = active).

## How It Works

The Condition Node dynamically controls workflow paths by evaluating data against user-defined rules. It checks inputs using comparison operators and routes execution based on whether conditions are met. The node can process context variables or previous node outputs, enabling adaptive flows and error handling.

<img src="../images/condition_node_new.png" alt="Condition node" title="Condition node" style="border: 1px solid gray; zoom:75%;">

In this document, you will learn how to set up a Condition Node in a workflow, including adding it at the appropriate location and configuring its properties.

## Add and Configure a Condition Node

### Step 1: Open Workflow Builder

* Log in to your AI for Process account.

* Select your workflow → Click **Go to Flow**.

### Step 2: Add the Condition Node

* Click the “**+**” icon on an existing node → Select Condition node.
* Or drag the Condition node from the Assets panel onto the canvas.

### Step 3: Configure the Node

1. Click the added node to open its properties panel.
2. Node Name: Enter a descriptive name
3. Set IF Condition:
    * Select a context variable: Enter `{{context.` → Choose a variable → Close with `}}`. For example: `{{context.ambiguous_sub_categories}}`.
    * Choose an operator (e.g., Contains).
    * Enter a value or another context variable. For example: `{{context.steps.Sub_Category_Detection.output}}`.
    * (Optional) Combine multiple criteria using AND/OR.
4. Set Routing:
    * **Go To:** Select the node if the IF condition is met.
    * **ELSE:** Select the node if the IF condition is not met.

       <img src="./../images/condition-node-settings-filled.png" alt="Condition Node's Settings" title="Condition Node's Settings" style="border: 1px solid gray; zoom:60%;">


### Step 4: Test the Flow

* Click Run Flow at the top-right of the builder.
* Verify the flow behaves as expected and fix any errors.


!!! failure "Standard Error"

    If a condition is true or false but has no connected node, the following error message is displayed: "Path not defined. Please check the flow."

