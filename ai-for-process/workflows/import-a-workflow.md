# Import a Workflow

Using import functionality, you can create a new workflow or add it as a version to an existing workflow in your account. The import process preserves workflow configuration while handling environment variables, errors, and role permissions.

When a workflow is imported, its prompts, properties, and linked workflows with their configurations are carried over. This ensures that the workflow works seamlessly in the new system. Additionally, any models present in the exported workflow — specifically external and open-source models — will be automatically linked and integrated. If any child workflows are missing or there are conflicts, the system will notify you.

Creating a new workflow involves importing a *.zip* package from your local system with the flow definition, app definition, and environment variables JSON files from another environment. During the creation journey, assign the imported workflow a unique name to avoid conflicts with existing workflow. [Learn more](../workflows/import-a-workflow.md#import-a-workflow).

When importing a workflow version to a parent workflow, the imported flow definition becomes the new in-dev version, overriding the flow, app definition, and environment variable files. The previous version is renamed and saved in the list, with optional backup of the current version available.

Once the import is complete, the workflow canvas is updated with the latest configuration changes.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Users with only <b>Viewer</b> permissions can't import a workflow.</p></div>

## Best Practices

* **Export the workflow first**: Always export the current workflow version before importing. This ensures you have all the necessary configurations.

* **Check the environment and load dependencies**: Ensure the new environment is set up with all required dependencies such as models, linked workflows, and other configurations before importing. This helps ensure compatibility and smooth functionality after the import.
    * Verify that the correct model is already available in the new environment.
    * Ensure any linked workflows are already present in the new environment, by the same name as it's preferred for auto linking.
    * Check environment variables and configuration files to prevent any mismatches.

* **Import the parent workflow and version**: After verifying the dependencies in the new environment, import the parent workflow and any associated versions. Ensure there are no conflicts with existing workflows.

## Import a Workflow 

To initiate a workflow creation journey through the import functionality, follow these steps:

1. Log in → In AI for Process Modules top menu → Click **Workflows**.

    <img src="../workflow-builder/types-of-nodes/images/access-workflows.png" alt="access workflows" title="access workflows" style="border: 1px solid gray; zoom:75%;">

2. Do one of the following based on your requirements:

<ul><li>If you don't have any existing workflows and want to create one by importing from another environment, click <b>Import a workflow</b>.
<img src="../workflow-builder/types-of-nodes/images/import-a-workflow.png" alt="Import a workflow" title="Import a workflow" style="border: 0px solid gray; zoom:75%;"></li>
<li>If you already have workflows deployed, the following page is displayed. To import a workflow, select the relevant tab on the <b>Workflows</b> dashboard and click <b>Import a workflow</b>.
<img src="../workflow-builder/types-of-nodes/images/workflow-dashboard.png" alt="Workflow dashboard" title="Workflow dashboard" style="border: 0px solid gray; zoom:75%;"></li></ul>

<ol start="4"><li>In the <b>Import workflow</b> window, providing the following information is mandatory.</li>
<ul><li><b>Workflow Name</b>: Provide a unique workflow name.</li>
<li><b>Flow definition file</b>: Upload the required <b>flow_definition.json</b> file from your local directory. The file includes the workflow's canvas definitions (node definitions) and AI node configurations, including prompts, hyperparameters, and timeout information.</li></ul></ol>

Providing the following information is optional:

* **App definition file**: Upload the required **app_definition.json** file, which includes general information about the workflow version and guardrails
* **Environment variable file**: Upload the required **env_variables.json** file, which includes the environment variables set for the workflow. 

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>The <b>Import</b> button is enabled when the required information is provided.</li>
<li>AI node models and guardrail configurations may not be available in the current account. Reconfigure them before running the workflow.</li>
<li>The model name from the original workflow is imported as a placeholder into the AI node's <b>Select Model</b> field. Later, you can assign a value from the available options.</li>
<li>The values for <b>System Prompt</b>, <b>Prompt</b>, <b>Timeout</b>, and <b>Hyperparameters</b> are imported for the AI node.</li></ul></p></div>

<ol start="5"><li>Click <b>Import</b>.</li>
<img src="../workflow-builder/types-of-nodes/images/workflow_instructions.png" alt="click import" title="click import" style="border: 0px solid gray; zoom:75%;">
</ol>

Once the import is complete, the system will redirect you to the **Workflow** page, where you can access the new workflow's canvas by clicking **Go to flow**.
<img src="../workflow-builder/types-of-nodes/images/go-to-flow.png" alt="tool flow page" title="tool flow page" style="border: 0px solid gray; zoom:75%;">

The imported workflow is listed under **All Workflows** and **My Workflows** on the **Workflow** dashboard.


<div class="admonition warning">
<p class="admonition-title">Important</p>
<p><ul><li>The status of the imported workflow is set to <b>In Development</b>.</li>
<li>The node types, workflow descriptions, input and output variables, scanners, and sync/async setup are kept intact during the import.</li>
<li>If the AI node's model doesn't match any available models in the current account, the model field is kept empty, but all prompt definitions are imported.</li>
<li>API keys are't transferred during the import process.</li>
<li>The imported workflow can't be shared with other users.</li></p></div>

**Failure Scenarios**

The import may fail due to an incompatible workflow version, a corrupt file, an internal error, or missing guardrails in the current account, triggering an error notification.

## Import Workflow as a Version

Use the **Import** functionality under **Workflows** > **Configurations** to add a workflow as a version of a parent workflow, replacing the existing one. You should back up the current in-development version to preserve its configuration definitions. The export file is saved as '<code>Exported_<i>Workflow Name</i>.zip</code>.’

When you import an workflow as a version, you must upload all the following files:

* **Flow definition file**: Upload the required **flow_definition.json** file from your local directory. The file includes the workflow's canvas definitions (node definitions) and AI node configurations, including prompts, hyperparameters, and timeout information.
* **App definition file**: Upload the required **app_definition.json** file, which includes general information about the workflow version and guardrails.
* **Environment variable file**: Upload the required **env_variables.json** file, which includes the environment variables set for the workflow. Any conflicts between environment variables in the parent workflow and the imported version must be resolved. [Learn more](./configure-a-workflow.md#manage-environment-variables).

### Steps to Import a Workflow

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>To import a workflow as a version, the parent workflows must be deployed in your account.</p></div>

To import a workflow as a version, follow the steps below:

1. Log in → In AI for Process Modules top menu → Click **Workflows**.

2. Click the **Workflows** tab on the top navigation bar, and select the workflow you want to import. 
3. Click **Configurations** on the left menu.
4. Scroll down to the **Import a workflow** section and click **Import**.
    <img src="../workflow-builder/types-of-nodes/images/import-a-workflow-canvas.png" alt="import a workflow" title="import a workflow" style="border: 0px solid gray; zoom:75%;">

5. (Optional) In the following dialog, select the **Back up your current workflow** option to preserve the data of the version being replaced.

    <img src="../workflow-builder/types-of-nodes/images/backup-workflow.png" alt="import confirmation" title="import confirmation" style="border: 0px solid gray; zoom:75%;">

**NOTE**

Backing up automatically exports and saves the .zip package of the workflow definition files to the designated location when the import is initiated. [Learn more](export-a-workflow.md).

If you choose not to back up/export the workflow configurations, unselect the back-up option and proceed to the next step.

<ol start="6"><li>Click <b>Import</b> in the confirmation dialog.</li>
<li>In the <b>Import WOrkflow</b> window, upload the required JSON files and click <b>Import</b>.</li></ol>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><i>Workflow Name</i> is't required since the current version’s name is assigned.</p></div>

The imported workflow is validated, and if no errors exist, the workflow is imported successfully.

The imported version is added under the parent workflow.

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p><ul><li>The status of the parent workflow is set to "<b>In Development</b>.”</li>
<li><b>Updated on</b> reflects the date the version was imported.</li></ul></p></div>

### Conflicting Environment Variables

When importing environment variables during workflow version import, conflicts may arise between those of the parent workflow and the imported version. If neither workflow has environment variables, no conflicts occur.

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p>Verify the environment variables before importing. For conflicting values, the existing ones are retained if not changed.</p></div>

You must resolve conflicting variables by either keeping the existing value (of the version being replaced) or replacing them (with values from the imported workflow) to ensure a smooth import process.

When conflicting environment variables are detected, it displays the following window. To resolve conflicts, follow the steps below:

1. Select the **Conflicting variables** tab.
2. Select either **Overwrite** to replace the existing variable with the imported one or select **Keep existing**.
3. Click **Proceed** to continue importing.
<img src="../images/agent_platform/overwrite-or-keep.png" alt="import tool" title="import tool" style="border: 1px solid gray; zoom:50%;">

**Editing Existing and Imported Variables**

To resolve conflicts by editing either the existing or imported environment variables, select the relevant tab in the **Edit Environment Variable** window and follow the steps provided.

1. Click the **Three-dots (Ellipsis)** icon of the required variable.
2. Select **Edit**.  
<img src="../images/agent_platform/edit-env-variable.png" alt="edit variable" title="edit variable" style="border: 1px solid gray; zoom:50%;">   

3. Change the required values in the **Edit Variable** window.  
4. Click **Save**.  
<img src="../images/agent_platform/save-edit-variable.png" alt="save variable" title="save variable" style="border: 1px solid gray; zoom:50%;">  

To cancel the import process during the conflicting environment variables resolution, click **Cancel** in the **Edit Environment Variable** window, and then click **Confirm**.

## Related Links

* [Create a Workflow](create-a-workflow.md)- Create a new workflow and configure its flow.
* [Export a Workflow](export-a-workflow.md)- Export the set configurations of a workflow for data sharing and preservation.
* [Deploy a Workflow](deploy-a-workflow.md)- Explore synchronous and asynchronous deployment methods for workflow integration.
* [Configure a Workflow](configure-a-workflow.md)- Modify the workflow's details, configure settings, or undeploy and delete it if unused.