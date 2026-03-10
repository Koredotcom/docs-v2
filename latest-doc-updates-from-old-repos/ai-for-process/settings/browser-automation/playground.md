# Playground: Design, Simulate, and Test Experiments

After deploying an automation pod, you create an experiment, link it to the pod, and provide step-by-step instructions to the selected LLM. The LLM interprets intent, identifies relevant UI elements, and generates context-aware execution steps that you can preview and refine using different configurations and limits. 

Once published, the automation can be integrated into a workflow using the Browser Automation node, which runs the script with defined static and dynamic variables.

Instruction generation transforms natural-language goals into executable browser actions—such as clicks, form entries, selections, waits, and validations—making automation easier to build, maintain, and reuse for repetitive, high-volume tasks.

**Example Use Cases**

* Automatically filling and submitting web forms.
* Scraping data from websites and generating reports or invoices.
* Uploading or downloading files from web portals.
* Running end-to-end workflows across multiple web pages.
* Validating UI elements, page loads, and form submissions.
* Triggering event-based emails or notifications.

**Limitations**: 

Browser Automation may not work as expected in the following scenarios:

* Two-factor authentication (2FA) or OTP verification is required.
* CAPTCHA validation is required.
* Bot or robot detection checks are involved.
* Tasks require complex logic or advanced data manipulation. 
* No clear, logical LLM instructions are provided.

## Supported LLM Models

Select the LLM that provides optimal performance for your specific use case.

| Provider        | Available Models |
|-----------------|------------------|
| Gemini          | gemini-2.5-flash<br>gemini-2.0-flash<br>gemini-2.5-pro<br>gemini-2.5-flash-lite |
| Anthropic       | claude-sonnet-4-20250514<br>claude-sonnet-4-5-20250929<br>claude-haiku-4-5-20251001 |
| OpenAI (GPT)    | gpt-4o<br>gpt-4o-mini<br>gpt-4.1<br>gpt-5 |


## How it works

1. The user deploys a browser automation pod, creates an automation, and selects an active pod.
2. The user selects the external LLM model and provides instructions, including static and dynamic variables.
3. The user simulates the automation by defining inputs, prompt instructions, and the maximum number of steps.
4. The LLM executes the simulation step by step and displays a preview with a final summary.
5. The user publishes the automation, or refines the instructions and reruns the simulation.

## Access Browser Automation Playground

To access the feature, follow the steps below:

1. Log in → In the AI for Process Modules top menu → Click **Settings**.
2. On the left navigation menu → Click **Browser Automation** → **Playground**.

## Browser Playground Summary

The feature page summarizes the following information on the automations created:

* **Automation name**: The name assigned to the automation.
* **Description**: A brief description of the automation.
* **Pod**: The deployed pod used for automation.
* **Status**: The current status of the automation: *Draft* or *Published*.
* **Created by**: The system user who created the deployment pod.
* **Updated on**: The date the deployment was last updated.
* **Action**: Option to delete the automation. 

## View Published Automation Details

Click a published automation on the Browser Playground page to view the following details:

**Overview section**:

* General details like name and description.
* Automation details: Instructions given to the LLM and the selected model name.
* Resource Allocation: The configured deployment name, scaling parameters, and hardware.

**Configurations section**:

* General Details: Configure additional automation information and view the automation name and description.
* Danger Zone: Delete the automation.

## Create an Automation Experiment 

Prerequisites: 

* An external model connection.
* The automation pod you want to assign must be in the *Deployed* status (under **Browser Automation** -> **Deployment**).
* If no deployments exist, click **Create Deployment** in the **Create Automation** form. You’ll be redirected to the **Deployment** page to deploy a new or existing pod.
* Sufficient credit balance to run and publish the automation.
* Clear, concise, and logical LLM instructions to run the simulation.

To create an experiment, follow the steps below:

1. On the **Browser Playground** page, click **Create Automation**.
2. In the **Create Automation** window, enter the automation name and description, select the active pod, and click **Create**. The name must not contain any of the following characters:\ / : * ? " <> | and should be less than 30 characters long. Description cannot be more than 1024 characters.
3. Enter the LLM instructions in the text field. An example is shown below:

    <img src="../images/llm_instructions.png" alt="instructions" title="instructions" style="border: 1px solid gray; zoom:50%;">

4. Select the model and connection from the dropdown.
5. Click the **Arrow** icon to simulate the automation.
6. In the **Simulate Automation** window:
    * Provide dummy values for any dynamic variables defined in the instructions. For example, add *John* for {{first name}}.
    * Under **Configurations**, define the **System Prompt** and set the **Max Steps** for the LLM to generate for the simulation.
    * Click **Confirm**.

A preview is generated during the simulation, displaying the LLMs execution steps and final summary in the left panel.    

<img src="../images/published_automation.png" alt="automation" title="automation" style="border: 1px solid gray; zoom:75%;">

Click **Save as draft** to use later, or proceed to publish the automation once the automation is completed.

## Publish an Automation Experiment

Once you finalize your experiment, publish it to integrate it into your automation flow using a **Browser  Automation** node. 

* You can publish an automation only after the simulation completes. Until then, **Publish Automation** remains disabled.
*  If the linked deployment changes from *Deployed* to *Undeployed*, the automation status automatically changes from *Published* to *Draft*.
* Once you publish an automation, it can **only be deleted and not modified**. 
* You can however re-publish the automation using another deployed pod.

To publish, follow the steps below:

1. Click **Publish Automation** in the top-right corner.
2. In the **Publish Automation** window, review the experiment name and description under **General Details**, then click **Next**.
3. Select an existing configuration or another active pod from the dropdown for deployment, and click **Next**.
Only a pod  deployed in the **Browser Automation** -> **Deployment** section can be selected.
4. Review the configurations, accept the terms and conditions, and click **Publish**.

A success message confirms the automation is **Published** and ready for use in your workflows.

## Stop Automation Experiment

While the automation is in progress, you can stop to update instructions, change configurations, select another pod, or fix errors.

Important:

* Stop an automation with caution, as all associated data may be lost.
* Stopping an automation saves it as a draft.
* Only draft automations can be stopped and modified.

## Modify a Draft Automation

You can modify draft automation flows by updating the LLM instructions or model selection. To modify,

1. Select the required automation on the **Browser Automation Playground** page.
2. Hover over the instructions panel (left) and click the **Edit** icon.
3. In the confirmation dialog, click **Update**.
4. Make the required changes and, if needed, update the LLM model selection.
5. Click the **Arrow** button to run the simulation.
6. In the **Simulate Automation** window, provide the required inputs.
7. Click **Publish**.

The LLM runs the automation by processing the modified instructions.

## Delete an Automation Experiment

To delete an automation, follow the steps below:

1. Navigate to the **Browser Playground** page.
2. Click the **Delete** icon under the **Actions** column for the required automation.
3. Click **Delete** in the confirmation dialog.


**Alternative method for published automations**:

1. On the **Browser Playground** page, select the required automation.
2. Click **Configurations** in the left panel.
3. Under **Danger Zone**, click **Proceed to Delete**.
4. In the confirmation dialog, click **Delete**.

!!! note

    Deleting an automation is permanent and may impact related functions.



