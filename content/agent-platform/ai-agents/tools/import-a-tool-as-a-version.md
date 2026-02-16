# Import a Tool as a Version

Use the **Import** functionality under **Tools** > **Configurations** to add a tool as a version of a parent tool. You should back up the current in-development version to preserve its configuration definitions. The export file is saved as '<code>Exported_<i>ToolName</i>.zip</code>.’

When you import an tool as a version, you must upload all the following files:

* **Flow definition file**: Upload the required **flow_definition.json** file from your local directory. The file includes the tool's canvas definitions (node definitions) and AI node configurations, including prompts, hyperparameters, and timeout information.
* **App definition file**: Upload the required **app_definition.json** file, which includes general information about the tool version and guardrails.
* **Environment variable file**: Upload the required **env_variables.json** file, which includes the environment variables set for the tool. Any conflicts between environment variables in the parent tool and the imported version must be resolved. [Learn more](./configure-a-tool.md#manage-environment-variables){:target="_blank"}.

## Steps to Import a Tool

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>To import a tool as a version, the parent tools must be deployed in your account.</p></div>

To import a tool as a version, follow the steps below:

1. Log in to your account and click **Tools** from the list of modules.
2. Click the **Tools** tab on the top navigation bar, and select the tool you want to import. 
3. Click **Configurations** on the left menu.
4. Scroll down to the **Import tool** section and click **Import**.
    <img src="../images/agent_platform/import_tool_config.png" alt="import tool configuration" title="import tool configuration" style="border: 1px solid gray; zoom:75%;"/>

5. (Optional) In the following dialog, select the **Back up your current tool** option to preserve the data of the version being replaced.

    <img src="../images/agent_platform/backup_tool.png" alt="import confirmation" title="import confirmation" style="border: 1px solid gray; zoom:75%;"/>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Backing up automatically exports and saves the .zip package of the tool definition files to the designated location when the import is initiated. If you choose not to back up/export the tool configurations, unselect the back-up option and proceed to the next step.</p></div>

<ol start="6"><li>Click <b>Import</b> in the confirmation dialog.</li>
<li>In the <b>Import Tool</b> window, upload the required JSON files and click <b>Import</b>.</li></ol>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><i>Tool Name</i> is not required since the current version’s name is assigned.</p></div>

The imported tool is validated, and if no errors exist, the tool is imported successfully.

The imported version is added under the parent tool.

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p><ul><li>The status of the parent tool is set to "<b>In Development</b>.”</li>
<li><b>Updated on</b> reflects the date the version was imported.</li></ul></p></div>

## Conflicting Environment Variables

When importing environment variables during tool version import, conflicts may arise between those of the parent tool and the imported version. If neither tool has environment variables, no conflicts occur.

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p>Verify the environment variables before importing. For conflicting values, the existing ones are retained if not changed.</p></div>

You must resolve conflicting variables by either keeping the existing value (of the version being replaced) or replacing them (with values from the imported tool) to ensure a smooth import process.

### Steps to Resolve Conflicting Variables

When conflicting environment variables are detected, you must resolve them with the following steps:

1. Select the **Conflicting variables** tab.
2. Select either **Overwrite** to replace the existing variable with the imported one or select **Keep existing**.
3. Click **Proceed** to continue importing.
<img src="../images/agent_platform/overwrite-or-keep.png" alt="import tool" title="import tool" style="border: 1px solid gray; zoom:50%;"/>

**Editing Existing and Imported Variables**

To resolve conflicts by editing either the existing or imported environment variables, select the relevant tab in the **Edit Environment Variable** window and follow the steps provided.

1. Click the **Three-dots (Ellipsis)** icon of the required variable.
2. Select **Edit**.  
<img src="../images/agent_platform/edit-env-variable.png" alt="edit variable" title="edit variable" style="border: 1px solid gray; zoom:50%;"/>   

3. Change the required values in the **Edit Variable** window.  
4. Click **Save**.  
<img src="../images/agent_platform/save-edit-variable.png" alt="save variable" title="save variable" style="border: 1px solid gray; zoom:50%;"/>  

To cancel the import process during the conflicting environment variables resolution, click **Cancel** in the **Edit Environment Variable** window, and then click **Confirm**.

<hr/> 

**Related Resources**

* [Create a Tool](../tools/create-a-new-tool.md){:target="_blank"}- Create a new tool and configure its flow.
* [Export a Tool](../tools/export-a-tool.md){:target="_blank"}- Export the set configurations of a tool for data sharing and preservation.
* [Deploy a Tool](../tools/deploy-a-tool.md){:target="_blank"}- Explore synchronous and asynchronous deployment methods for tool integration.
* [Configure a Tool](../tools/configure-a-tool.md){:target="_blank"}- Modify the tool's details, configure settings, or undeploy and delete it if unused.
