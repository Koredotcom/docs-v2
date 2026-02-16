# Import a Tool

Using import functionality, you can create a new tool or add it as a version to an existing tool in your account. The import process preserves tool configuration while handling environment variables, errors, and role permissions.

When a tool is imported, its prompts, properties, and linked tools with their configurations are carried over. This ensures that the tool works seamlessly in the new system. Additionally, any models present in the exported tool — specifically external and open-source models — will be automatically linked and integrated. If any child tools are missing or there are conflicts, the system will notify you.

Creating a new tool involves importing a *.zip* package from your local system with the flow definition, app definition, and environment variables JSON files from another environment. During the creation journey, assign the imported tool a unique name to avoid conflicts with existing tool. [Learn more](../tools/import-a-tool.md#import-to-create-a-new-tool){:target="_blank"}.

When importing a tool version to a parent tool, the imported flow definition becomes the new in-dev version, overriding the flow, app definition, and environment variable files. The previous version is renamed and saved in the list, with optional backup of the current version available.

Once the import is complete, the tool flow canvas is updated with the latest configuration changes.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Users with only <b>Viewer</b> permissions can't import a tool.</p></div>

## Best Practices

* **Export the tool first**: Always export the current tool version before importing. This ensures you have all the necessary configurations.

* **Check the environment and load dependencies**: Ensure the new environment is set up with all required dependencies such as models, linked tools, and other configurations before importing. This helps ensure compatibility and smooth functionality after the import.
    * Verify that the correct model is already available in the new environment.
    * Ensure any linked tools are already present in the new environment, by the same name as it's preferred for auto linking.
    * Check environment variables and configuration files to prevent any mismatches.

* **Import the parent tool and version**: After verifying the dependencies in the new environment, import the parent tool and any associated versions. Ensure there are no conflicts with existing tools.


## Import to Create a New Tool 

To initiate a tool creation journey through the import functionality, follow the steps below:

1. Log in to your account and click **Tools** from the list of modules.
2. Click the **Tools** tab on the top navigation bar.
3. Do one of the following based on your requirements:

<ul><li>If you don't have any existing tools and want to create one by importing from another environment, click <b>Import Tool</b>.
<li>If you already have tools deployed, the following page is displayed. To import a tool, select the relevant tab on the <b>Tools</b> dashboard and click the <b>Import tool</b> icon.
<img src="../images/agent_platform/import_tool.png" alt="click import tool" title="click import tool" style="border: 1px solid gray; zoom:75%;"/></li></ul>

<ol start="4"><li>In the <b>Import tool</b> window, providing the following information is mandatory.</li>
<ul><li><b>Tool Name</b>: Provide a unique tool name.</li>
<li><b>Flow definition file</b>: Upload the required <b>flow_definition.json</b> file from your local directory. The file includes the tool's canvas definitions (node definitions) and AI node configurations, including prompts, hyperparameters, and timeout information.</li></ul></ol>

Providing the following information is optional:

* **App definition file**: Upload the required **app_definition.json** file, which includes general information about the tool version and guardrails
* **Environment variable file**: Upload the required **env_variables.json** file, which includes the environment variables set for the tool. 

<div class="admonition note">
<p class="admonition-title">Note</p>
<p><ul><li>The <b>Import</b> button is enabled when the required information is provided.</li>
<li>AI node models and guardrail configurations may not be available in the current account. Reconfigure them before running the tool.</li>
<li>The model name from the original tool is imported as a placeholder into the AI node's <b>Select Model</b> field. Later, you can assign a value from the available options.</li>
<li>The values for <b>System Prompt</b>, <b>Prompt</b>, <b>Timeout</b>, and <b>Hyperparameters</b> are imported for the AI node.</li></ul></p></div>

<ol start="5"><li>Click <b>Import</b>.</li>
<img src="../images/agent_platform/click-import-new.png" alt="click import" title="click import" style="border: 1px solid gray; zoom:75%;"/></ol>

Once the import is complete, the system will redirect you to the **Tool Flow** page, where you can access the new tool’s flow canvas by clicking **Go to flow**.
<img src="../images/agent_platform/tool_flow.png" alt="tool flow page" title="tool flow page" style="border: 1px solid gray; zoom:50%;"/>

The imported tool is listed under **All tools** and **My tools** on the **Tools** dashboard.


<div class="admonition warning">
<p class="admonition-title">Important</p>
<p><ul><li>The status of the imported tool is set to <b>In Development</b>.</li>
<li>The node types, tool descriptions, input and output variables, scanners, and sync/async setup are kept intact during the import.</li>
<li>If the AI node's model doesn't match any available models in the current account, the model field is kept empty, but all prompt definitions are imported.</li>
<li>API keys are not transferred during the import process.</li>
<li>The imported tool cannot be shared with other users.</li></p></div>

**Failure Scenarios**

The import may fail due to an incompatible tool version, a corrupt file, an internal error, or missing guardrails in the current account, triggering an error notification.

You can also import a tool as a version of the parent tool to create and test different in-development versions. [Learn more](../tools/import-a-tool-as-a-version.md){:target="_blank"}.

<hr/> 

**Related Resources**

* [Create a Tool](../tools/create-a-new-tool.md){:target="_blank"}- Create a new tool and configure its flow.
* [Export a Tool](../tools/export-a-tool.md){:target="_blank"}- Export the set configurations of a tool for data sharing and preservation.
* [Deploy a Tool](../tools/deploy-a-tool.md){:target="_blank"}- Explore synchronous and asynchronous deployment methods for tool integration.
* [Configure a Tool](../tools/configure-a-tool.md){:target="_blank"}- Modify the tool's details, configure settings, or undeploy and delete it if unused.
* [Import a tool as a version](../tools/import-a-tool-as-a-version.md){:target="_blank"}- Create multiple versions of the same tool for testing multiple use cases.
