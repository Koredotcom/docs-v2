# Export a Workflow

AI for Process offers the ability to export specific workflow versions from your account as self-contained packages for data preservation and sharing. This feature also allows users to transfer workflow configurations without compromising the integrity and security of the workflow setup.

When you export a workflow, AI for Process automatically creates a *.zip* file named after the workflow. For example, if the workflow is named "*Banking Assistant*," the exported file will be "*Banking Assistant.zip*". You can save this folder in the desired location on your local machine. 

The exported package can be reimported to create a new workflow or add it as a version to an existing one, ensuring seamless restoration.

The [exported package](#exported-information){:target="_blank"} preserves the following workflow configurations within JSON files:

* Name and description
* API, Condition, AI, and Script node configurations
* Input/output variables and scanners
* Environment variables
* Sync/Async setup

To maintain security, sensitive information such as **API keys**, **sharing permissions**, **workflow endpoint**, and **audit logs** are excluded from the exported package.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Users with only <b>Viewer</b> permissions can't export an workflow.</p></div>

## Steps to Export a Workflow

To export an workflow's version, follow the steps below:

1. Log in to your AI for Process account.
2. Select the workflow you want to export. The Workflow flow page is displayed. 
3. Click **Configurations** on the left navigation menu.
4. Scroll down to the **Export workflow** section. By default, the currently deployed version is selected in the dropdown.
<img src="../images/export-agent.png" alt="export agent" title="export agent" style="border: 1px solid gray; zoom:75%;">

5. To change, click and choose another version from the list.
<img src="../images/choose-another-version.png" alt="change version" title="change version" style="border: 1px solid gray; zoom:75%;">

6. Click the **Export** button.

The export process begins, and a success message is displayed after the workflow validation is completed and the export process finishes.

<img src="../images/agent-export-success.png" alt="export success" title="export success" style="border: 1px solid gray; zoom:75%;">

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Once export begins, the selected version can't be changed.
</p></div>

## Exported Information

The exported package includes the following JSON files encapsulating the workflow's configuration data:

* ***flow_definition.json***: It includes the workflow's canvas definitions (node definitions) and AI node configurations, including prompts, hyperparameters, and timeout information.
* ***app_definition.json:*** It includes general information about the workflow version and guardrails.
* ***env_variables.json***: It includes the environment variables set for the workflow. [Learn more](../workflows/configure-a-workflow.md){:target="_blank"}.

<img src="../images/exported-files.png" alt="exported files" title="exported files" style="border: 1px solid gray; zoom:75%;">

To view the files, right-click and select **View file**.

<img src="../images/view-exported-file.png" alt="view exported file" title="view exported file" style="border: 1px solid gray; zoom:75%;">

The file information is displayed as follows:

<img src="../images/app-definition-file-example.png" alt="file example" title="file example" style="border: 1px solid gray; zoom:75%;">

<hr>

## Related Links

* [Import a workflow](./import-a-workflow.md){:target="_blank"} - Create a workflow by importing configurations or add it as a version to an existing workflow.
* [Deploy a workflow](./deploy-a-workflow.md){:target="_blank"} - Explore synchronous and asynchronous deployment methods for workflow integration.
* [Configure a workflow](./configure-a-workflow.md){:target="_blank"} - Modify the workflow's details, configure settings, or undeploy and delete it if unused.