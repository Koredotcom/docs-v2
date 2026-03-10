
# Browser Automation Node -  Automate Repetitive Web Tasks

The Browser Automation Node lets you run a published browser automation as part of a workflow. It performs human-like browser actions—such as navigating pages, clicking elements, typing text, extracting data, and uploading files—inside a secure, isolated environment. The node eliminates the need for scripts or selectors, making it easier to automate web-only or UI-driven systems. All inputs and outputs are stored in the workflow context, allowing the automation to integrate smoothly with downstream workflow steps.

Browser automation in AI for Process includes two stages:

* **Design time (Playground):** You define and test how the automation behaves. The browser stream shows each step the model takes, based solely on your instructions.
* **Run time (Browser Automation Node):** The published automation runs inside workflows, using inputs, variables, and context from the process.

## Key Capabilities

* **Run deployed browser automations:** Select from the list of deployed browser automations in your workspace and execute them as part of a workflow.
* **Configure inputs and variables:** Provide static values or map context variables required by the automation. Inputs and outputs are automatically added to the workflow context.
* **Built-in reliability controls:** Automations run in an isolated, headless browser with retries, timeouts, and visual validation to ensure consistent execution.
* **Secure credential handling:** Automations leverage secure browser sessions and credential management without exposing sensitive data in the workflow.

## What Is Browser Automation and Why It Matters

Many enterprise processes still rely on manual, repetitive work performed directly in web applications—such as entering data, uploading documents, navigating portals, submitting forms, or extracting information. These processes still depend on human effort, even when the steps are routine and predictable.

Browser automation addresses this challenge by allowing an AI model to act like a human in the browser. It can navigate pages, click buttons, type text, upload or download files, scrape data, and follow structured instructions. Instead of writing scripts or handling selectors, you describe what needs to be done, and the system executes the steps through an LLM-powered agent.

This capability is especially valuable for processes like creating sales reports, generating business development reports, and collecting information from websites through automated web scraping. With browser automation, these workflows can be executed reliably at scale, cutting hours of manual work down to minutes.

## Key Use Cases

Browser automation supports a wide range of workflow scenarios, including:

* **Form filling and data entry**: Automate repetitive tasks such as entering customer details, submitting forms, updating records, or populating fields across web-based systems.
* **Portal-based processes**: Handle activities such as claims submission, onboarding, or invoice updates in internal or third-party portals.
* **Web data extraction**: Navigate web pages and capture structured information, including tables and values.
* **File uploads and downloads**: Automate transferring files across internal or external websites.
* **Authentication and routine account actions**: Perform login, updates, or status checks in systems where multi-factor authentication is not required.

## How to Set Up and Prepare Browser Automation

Browser automation in AI for Process follows three high-level stages: deploying the hardware, creating the automation, and using it in a workflow. Each stage prepares a different part of the automation lifecycle—from setting up the execution environment to building and integrating automations into end-to-end processes.

### 1. [Deploy the Hardware](../../../settings/browser-automation/deployment.md)

Before you can run any browser automation, you must deploy a hardware pod in **Settings > Browser Automation > Deployment**.

This pod acts as the execution environment for both designing automations in Playground and running them in workflows. Once the hardware pod is active:

* The Playground can use this pod for generating and testing automation flows.
* The Browser Automation Node will reference the version deployed in the selected environment.

### 2. [Create the Automation in Playground](../../../settings/browser-automation/playground.md)

After the pod is deployed, go to **Settings > Browser Automation > Playground** to build and test your automation. 

In Playground, you provide instructions and simulation inputs, then watch the automation run step by step to confirm it behaves as expected. The Playground helps you validate the behavior, refine the flow, and publish a stable automation that can be used inside workflows. When the flow works correctly, publish the automation. You can publish it to the same pod or choose another pod for run-time use. Publishing links the automation to a specific pod version.

After publishing:

* The automation appears in the Playground list with the status **Published**.
* It becomes available for selection in the Browser Automation Node.

### 3. [Integrate the Automation in a Workflow](./browser-node.md#add-and-configure-a-browser-automation-node)

After publishing, the automation can be added to a workflow using the Browser Automation Node. This step connects your tested automation to broader process logic and other workflow components.

Once an automation is published and integrated into workflows, the system executes it consistently, securely, and at scale, saving manual effort and reducing errors.

## How the Browser Automation Node Works

The Browser Automation Node executes a deployed browser automation as part of a workflow. When the node runs, it launches the automation in a secure, isolated browser environment and passes any configured inputs to it. The automation performs actions such as navigating pages, clicking elements, typing values, uploading files, or extracting data.

As the automation completes each step, outputs are captured and stored in the workflow context. These values can be used by subsequent nodes, allowing the browser automation to connect seamlessly with the rest of the process. If the automation encounters dynamic content, delays, or page changes, built-in controls such as retries, timeouts, and visual validation help maintain reliable execution.

The node finishes by returning the automation’s results to the workflow, enabling the process to continue with accurate, up-to-date data from the web application.

<img src="../images/browser/browser_automation_howitworks.png" alt="how it works" title="how it works" style="border: 1px solid gray; zoom:75%;">

## Add and Configure a Browser Automation Node

**Before you begin**

Open your workflow and add the Browser node to the canvas. [Learn more about adding nodes](https://docs.kore.ai/ai-for-process/workflows/workflow-builder/manage-flow-nodes/#add-nodes).

**Steps to configure a Browser Automation node**:

Click the node to open its properties dialog box. You can rename the node to provide context.

**1. Select an Automation**

* In **Automation name**, choose from the list of deployed browser automations available in your workspace.
* Only one automation can be selected per node.
* If no automations are deployed, the system displays a prompt to create an automation before continuing. [Learn more](../../../settings/browser-automation/deployment.md) about creating automations.

### 2. Provide Input Variables

* After selecting an automation, the required input fields appear based on the automation’s design.
* Each field can accept either:
    * a **static value**, or
    * a **mapped context variable** from the workflow.
* When selecting a context variable, a suggestive list of available variables is displayed.

### 3. Configure Node Options

Depending on your automation, additional configuration options may appear:

* **Model**: Displays the model used by the automation. This is fixed and cannot be changed at run time.
* **Connection**: Shows the model connection configured during the automation’s design. You can change only the connection name for the model, not the model itself. The model configured at design time must be used at run time.
* **Disable Cache**: Turns off cached agent state to ensure the automation runs with a fresh session. Use this option when the automation depends on a clean browser state, updated credentials, or a full login flow.

### 4. Store Outputs and Access via Context Variables

* When the automation completes, the node automatically stores its outputs in the workflow context.  These values can be used in downstream nodes to drive logic or pass data to subsequent steps.
* You can access this data using context variables:

    `{{context.steps.<NodeName>.output}}`

* For example, if the node is named `ClaimAutomationNode`, the context is :

    `{{context.steps.ClaimAutomationNode.output}}`

<img src="../images/browser/node_config.png" alt="node configuration" title="node configuration" style="border: 1px solid gray; zoom:75%;">

## Test the Flow

After adding and configuring the Browser Automation Node, follow these steps to ensure the automation executes correctly.

**1. Test in Playground**

Before running the workflow, ensure that the automation behaves as expected:

1. Go to **Settings > Browser Automation > Playground**.
2. Open the deployed automation in your workspace.
3. Run the automation and validate that:
    * Browser actions complete as expected (clicks, typing, navigation, uploads).
    * Outputs are generated correctly.
    * No errors occur.

**2. Test the Workflow**

1. Open your workflow in **Workflow Builder**.
2. Run the workflow.
3. Verify the following:
    * The Browser Automation Node triggers the selected automation.
    * Inputs are passed correctly.
    * Outputs are captured in the workflow context.
    * Downstream nodes use the outputs as expected.

**3. Review Logs and Outputs**

1. Open **Debug Logs** after the workflow completes.
2. Check the Browser Automation Node section for:
    * Step-by-step execution details
    * Output values
    * Any error messages
3. Confirm context variables are populated and usable by downstream nodes.

<img src="../images/browser/debug_panel.png" alt="debug panel" title="debug panel" style="border: 1px solid gray; zoom:75%;">

**4. Update and Re-Test**

1. Adjust input variables or node configuration if issues are detected.
2. Re-run the automation in Playground, then re-test the workflow until execution is reliable.