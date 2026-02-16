# Manage Scopes and Keys for API Apps

The Platform introduces **API scopes** in the **Settings** console, moving from unrestricted management API keys to more secure, scoped API key-based application management.

Users can select specific scopes for managing tools, models, and guardrails. This allows for the creation of internal applications with restricted access to only the necessary API endpoints. By limiting API access, this feature reduces security risks, allowing administrators to generate multiple API keys and ensure secure, controlled access for authorized personnel.

**Important Considerations for API Keys**

* **Scope-restricted access**: API keys grant access exclusively to their assigned scopes.
* **Unauthorized access**: Any attempt to access unassigned scopes is automatically rejected.
* **Multiple keys per app**: You can generate multiple API keys for a single app.
* **One key per app**: An API key cannot be shared across multiple apps.
* **Immutable keys**: API keys can be deleted, but cannot be modified after they are created.
* **Copy-once policy**: For security reasons, each API key can only be copied once.

Users can rename an app, modify its selected scopes, or delete the app as needed. Once the admin defines or updates the API scopes, the changes are applied platform-wide, ensuring consistent and controlled access to the APIs wherever they are used. 

For more information on roles and permissions for API-scoped apps, please refer [here](../user-management/role-management.md#module-wise-permissions-and-access-levels){:target="_blank"}.


## Use Case: Scoped API Access for Banking Departments

A bank automates tool workflows and integrates various internal systems across different departments, including **Risk & Compliance**, **Customer Support**, and **Marketing**. This requires access to APIs with different scopes.

* **Risk & Compliance Department**: This team requires access only to models and tools for generating reports from transaction logs and audit trails. The admin creates a scoped app that grants access to tools and models. This prevents the team from accidentally accessing unrelated customer information available for guardrails. 

* **Customer Support Department**: Support agents require access to monitoring AI customer interactions, but should not have access to risk and compliance tools or model management. A scoped app ensures support teams stay within their operational boundaries.

By using API-scoped apps and API keys, the bank minimizes the risk of data exposure while maintaining security, ensuring compliance, and strictly regulating access to authorized system users.


## Supported API Scopes

The following API scopes are available for this feature.

<table>
  <tr>
   <td><strong>API Scope</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>Deploy Tool
   </td>
   <td>Deploy a specific tool into an environment. It allows the user to control the deployment process either synchronously or asynchronously. <a href="../../../apis/apis-list/deploy-a-tool/">Learn more</a>.
   </td>
  </tr>
  <tr>
   <td>Undeploy Tool
   </td>
   <td>Undeploy a tool that is deployed in an environment. <a href="../../../apis/apis-list/undeploy-a-tool/">Learn more</a>.
   </td>
  </tr>
  <tr>
   <td>Deploy Model
   </td>
   <td>Deploy an open-source or fine-tuned model in the <strong><em>Ready to Deploy</em></strong> state. <a href="../../../apis/apis-list/deploy-a-model/">Learn more</a>.
   </td>
  </tr>
  <tr>
   <td>Undeploy Model
   </td>
   <td>Undeploy a model from the environment. <a href="../../../apis/apis-list/undeploy-a-model/">Learn more</a>.
   </td>
  </tr>
  <tr>
   <td>Import Model
   </td>
   <td> Import a model in chunks into the Platform environment. <a href="../../../apis/apis-list/import-a-model/">Learn more</a>.
   </td>
  </tr>
  <tr>
   <td>Import Tool
   </td>
   <td>Import a new tool into the system. <a href="../../../apis/apis-list/import-a-new-tool/">Learn more</a>.
   </td>
  </tr>
  <tr>
   <td>Export Model
   </td>
   <td>Export a trained AI model from the system. <a href="../../../apis/apis-list/export-a-model/">Learn more</a>.
   </td>
  </tr>
  <tr>
   <td>Export Tool
   </td>
   <td>Export a tool's configuration and associated data.<a href="../../../apis/apis-list/export-a-tool/">Learn more</a>.
   </td>
  </tr>
  <tr>
   <td>Deploy Guardrails
   </td>
   <td>Deploy pre-defined <strong>guardrails</strong> to enhance security, compliance, and content moderation in AI interactions. <a href="../../../apis/apis-list/deploy-guardrails/">Learn more</a>.
   </td>
  </tr>
  <tr>
   <td>Undeploy Guardrails
   </td>
   <td>Remove the previously deployed guardrails that regulate AI interactions.<a href="../../../apis/apis-list/undeploy-guardrails/"> Learn more</a>.
   </td>
  </tr>
  <tr>
   <td>View Connections
   </td>
   <td>Required for viewing connection details. <a href="../../../apis/apis-list/connections-api/">Learn more</a>.
   </td>
  </tr>
  <tr>
   <td>Manage Connections
   </td>
   <td>Required for creating and updating connections. <a href="../../../apis/apis-list/connections-api/">Learn more</a>.
   </td>
  </tr>
</table>

## Access API Scopes

To access this feature, follow the steps below:

1. Log in to your account and click **Autonomous Agents** from the list of modules.
2. Click **Settings** on the top navigation bar.
3. Click **Security & Control** -> **API Scopes** on the left navigation menu.

## Implement API Scoping

The key steps to implement API scoping include:

1. [Create an API app and assign scopes](../security-and-control/api-scopes.md#create-an-api-application){:target="_blank"}: API-scoped apps have limited and specific permissions tied only to the API endpoints they need. Creating an API-scoped app enables you to restrict permissions, enhance security, better control and monitor access, and tailor the app specifically to meet the integration’s needs.
2. [Create one or more API Keys to access the app](../security-and-control/api-scopes.md#create-an-api-key){:target="_blank"}: API keys for scoped apps provide secure, manageable, and auditable access control tailored to the app’s needs, making access and usage safer and easier to track.


### Create an API Application

To create an app, follow the steps below:

1. [Access](../security-and-control/api-scopes.md#access-api-scopes){:target="_blank"} **API Scopes**.
2. Click **Create an API App** or **Create an App**.
3. Click **Untitled app** and provide the app name.
    <img src="../images/provide-app-name.png" alt="provide app name" title="provide app name" style="border: 1px solid gray; zoom:75%;">

4. Select the required scopes from the list.
5. Click **Next**. 

    A success message is displayed when the app is created. Follow the steps in the [next section](../security-and-control/api-scopes.md#create-an-api-key){:target="_blank"} to complete the process.

### Create an API Key

This step is necessary to complete the app creation process. To create an API Key, follow the steps below:

1. Click **Create API Key**.
2. In the **Create new API key** dialog, provide a name and click **Generate Key**.
    <img src="../images/generate-your-new-api-key.png" alt="generate new api key" title="generate new api key" style="border: 1px solid gray; zoom:75%;">

3. Once the key is successfully generated, click **Copy and Close** to copy the API key.
   <img src="../images/create-new-api-key-window.png" alt="create new api key" title="create new api key" style="border: 1px solid gray; zoom:75%;">


A success message is displayed after the key is copied. Additionally, the API key appears for the app on the summary page.

<div class="admonition note">
<p class="admonition-title">Important information on API Keys</p>
<p>For security reasons, the API key is only shown once and is not stored or displayed again. Copy and save it in a secure location for future reference.</p>
<p><b>What Happens If You Lose It?</b></p>
<p>You’ll need to revoke the old key and <b>generate a new one</b>. This could disrupt services if the key is in use.</p>
</div>   

<ol start="4"><li>Click <b>Done</b>.</li>

The app summary page displays the following information:

<ul><li><b>Name</b>: The API app name.</li>
<li><b>Scopes</b>: The selected API scopes.</li>
<li><b>Created by</b>: The name of the user who created the app.</li>
<li><b>Created on</b>: The date when the app was created.</li></ul></ol>

## Manage API App and Key

You can edit or delete an API app, including its name and scopes. However, you cannot edit an API key; you can only delete it.       

### Edit App and Delete API Key

To edit an API app, follow the steps below:

1. Hover over and click the **Edit** icon for the required app.
    <img src="../images/hover-edit-api-scopes.png" alt="access edit icon" title="access edit icon" style="border: 1px solid gray; zoom:75%;">

2. In the App’s configuration window, do the following:

    * To change the app name, click and modify the title.
    * To change the scopes, click the **API Scopes** tab and select/unselect the listed scopes.
        <img src="../images/edit-api-app-name.png" alt="change api config" title="change api config" style="border: 1px solid gray; zoom:75%;">
         
    * To delete an API key, follow the steps below:
         * Click the **API Keys** tab.
         * Hover over and click the **Delete** icon for the required key.
           <img src="../images/hover-delete-api-key.png" alt="access delete icon" title="access delete icon" style="border: 1px solid gray; zoom:75%;">

         * Click **Delete** in the confirmation window.
            
            <div class="admonition warning">
            <p class="admonition-title">Caution</p>
            <p>The key you are deleting will no longer function if it is in use. You must generate a new key.</p>
             </div>

            The deleted key is removed from the app in the **API Keys** section and is no longer associated with the app.  

<ol start="3"><li>Click <b>Save</b>.</li>

A success message is displayed once the app is edited. The changes are updated in the summary page.
</ol>

### Delete App

To delete an API app, follow the steps below:

1. Hover over and click the **Delete** icon for the required app.
   <img src="../images/delete-api-app-icon.png" alt="access delete" title="access delete" style="border: 1px solid gray; zoom:105%;">

2. Click **Delete** in the confirmation window.

A success message is displayed, and the app is removed from the list.
