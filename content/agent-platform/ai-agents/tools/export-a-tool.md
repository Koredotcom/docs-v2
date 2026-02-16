# Export a Tool

Agent Platform offers the ability to export specific tool versions from your account as self-contained packages for data preservation and sharing. This feature also allows users to transfer tool configurations without compromising the integrity and security of the tool setup.

When you export a tool, Platform automatically creates a *.zip* file named after the tool. For example, if the tool is named "*Banking Assistant*," the exported file will be "*Banking Assistant.zip*". You can save this folder in the desired location on your local machine. 

The exported package can be reimported to create a new tool or add it as a version to an existing one, ensuring seamless restoration.

The [exported package](#exported-information){:target="_blank"} preserves the following tool configurations within JSON files:

* Name and description
* API, Condition, AI, and Script node configurations
* Input/output variables and scanners
* Environment variables
* Sync/Async setup

To maintain security, sensitive information such as **API keys**, **sharing permissions**, **tool endpoint**, and **audit logs** are excluded from the exported package.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Users with only <b>Viewer</b> permissions cannot export an tool.</p></div>

## Steps to Export a Tool

To export an tool’s version, follow the steps below:

1. Log in to your account and click **Tools** from the list of modules.
2. Click the **Tools** tab on the top navigation bar, and select the tool you want to export. The Tool flow page is displayed. 
3. Click **Configurations** on the left navigation menu.
4. Scroll down to the **Export tool** section. By default, the currently deployed version is selected in the dropdown.
<img src="../images/export-agent.png" alt="export agent" title="export agent" style="border: 1px solid gray; zoom:75%;"/>

5. To change, click and choose another version from the list.
<img src="../images/choose-another-version.png" alt="change version" title="change version" style="border: 1px solid gray; zoom:75%;"/>

6. Click the **Export** button.

The export process begins, and a success message is displayed after the tool validation is completed and the export process finishes.

<img src="../images/agent-export-success.png" alt="export success" title="export success" style="border: 1px solid gray; zoom:75%;"/>

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Once export begins, the selected version cannot be changed.
</p></div>

## Exported Information

The exported package includes the following JSON files encapsulating the tool’s configuration data:

* ***flow_definition.json***: It includes the tool's canvas definitions (node definitions) and AI node configurations, including prompts, hyper parameters, and timeout information.
* ***app_definition.json:*** It includes general information about the tool version and guardrails.
* ***env_variables.json***: It includes the environment variables set for the tool. [Learn more](../tools/configure-a-tool.md){:target="_blank"}.

You can view the file name in the archive.

<hr/> 

**Related Resources**

* [Import a tool](./import-a-tool.md){:target="_blank"} - Create a tool by importing configurations or add it as a version to an existing tool.
* [Deploy a tool](./deploy-a-tool.md){:target="_blank"} - Explore synchronous and asynchronous deployment methods for tool integration.
* [Configure a tool](./configure-a-tool.md){:target="_blank"} - Modify the tool's details, configure settings, or undeploy and delete it if unused.
