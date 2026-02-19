# Manage OCR Models 

The Manage OCR Models page is the central place to configure and maintain the document-processing engines used across your workflows. Engines such as **Docling** and **Azure Doc Intelligence** power the Doc Intelligence Node, enabling text extraction, layout understanding, and (when supported) structured data output.

Use this page to enable engines, deploy models, and keep your OCR capabilities up to date.

## Configure Docling Models

Docling models provide AI-powered document extraction, including text, layout, and structured data.

Select the Docling tab to deploy new models or manage existing deployments. Docling must be configured here before it appears as an available engine inside the Doc Intelligence Node. You can have multiple deployments of docking models.

### Deploy a New Docling Model

Follow these steps to configure and deploy a new Docling model:

1. Go to **Settings → Manage Models → OCR**.
2. Click **Deploy a Model** to open the deployment panel.
3. **General Details**:
    * Enter a unique deployment name and an optional description.
    * English ('en') is auto-selected by default. You can select one more additional language for better model performance.
4. **Resource allocation:** Configure the deployment resources:
    * Minimum replicas
    * Maximum replicas
    * Auto-scaling threshold
    * Hardware type
5. Verify all the configuration details.
6. Accept the terms and conditions and click **Deploy** to start the deployment process.

Once deployment is complete, the model appears in the Deployed list and becomes available for use in the Doc Intelligence Node.

<img src="../images/ocr_manage_docling.png" alt="manage OCR" title="manage OCR" style="border: 1px solid gray; zoom:80%;"/>

### Manage Existing Deployments

You can view and manage Docling deployments by clicking any deployment row to open its details.

**Overview:** Shows the current deployment status and key configuration details such as deployment name, selected language, scaling parameters, and allocated hardware resources.

<img src="../images/ocr_overview.png" alt="overview" title="overview" style="border: 1px solid gray; zoom:80%;"/>

**Deployment history:** Lists all past and current deployment versions for a model, along with status, timestamps, and ownership. Expanding a deployment entry reveals configuration and lifecycle details, including deployment and undeployment events, helping you audit configuration changes and track deployment activity over time.

<img src="../images/ocr_deployment_history.png" alt="deployment history" title="deployment history" style="border: 1px solid gray; zoom:80%;"/>

**Configurations:** Allows you to manage the deployment lifecycle:

* **Undeploy** an active deployment. Once undeployed, the model is no longer available to workflows.
* **Delete** an undeployed configuration. Deletion is disabled while a deployment is active and becomes available only after the deployment is undeployed.

<img src="../images/ocr_configurations.png" alt="Docling configurations" title="Docling configurations" style="border: 1px solid gray; zoom:80%;"/>


## Configure Azure Doc Models

The Azure Doc Intelligence page lets you connect external Azure document-processing models for use inside the Doc Intelligence Node. You can add multiple Azure connections, manage them, and control which ones are active for your workflows.

Azure must be configured here before it appears as an engine option in the Doc Intelligence Node.

### Add a New Azure Doc Model

You can add multiple Azure Doc Intelligence connections to your workspace and switch between them as needed.

Follow these steps to add an external Azure Doc Intelligence connection:

1. Go to **Settings → Manage Models → OCR → Azure doc**.
2. Click **Add a Connection** to open the connection panel.
3. Enter the required details:
    * **Connection Name** (must be unique)
    * **Base URL**
    * **API Key**
4. The system validates the API key and checks for duplicate names.
5. After validation succeeds, click **Save**.

A confirmation message appears, and the model is added to the list of available Azure connections.

### Manage Existing Connections

You can enable, disable, or delete Azure connections directly from the list using the available actions.

* **Enable or Disable a Connection**: Toggle the switch next to a connection to instantly enable or disable it.
* **Delete a Connection**: Click the delete icon, then confirm the action to permanently remove the connection.

<img src="../images/ocr_manage_azuredoc.png" alt="manage OCR" title="manage OCR" style="border: 1px solid gray; zoom:80%;"/>