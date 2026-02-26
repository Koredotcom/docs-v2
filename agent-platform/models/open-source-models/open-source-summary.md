# Managing Open-Source Models

The Open-source models tab in the Models section allows you to import, deploy, and manage open-source models. You can also view existing models, manage deployments, and configure access settings.

- **[Import a Model](../open-source-models/importing-models.md)** – Upload a .zip file from your local machine.  
- **[Deploy a Model](../open-source-models/select-and-deploy-an-open-source-model.md)** – Launch a new deployment for a listed or newly imported model.  

After deployment, the model appears in the listing page along with the number of deployments.

-----

## Viewing the Model List

The models list displays all the open-source models along with the following details:

| Field | Description |
|-------|-------------|
| **Model Name** | Name of the model. For imported models, the name is derived from the uploaded .zip file. |
| **Active Deployments** | Number of deployments that are currently active. |
| **Deployment Failed** | Number of deployments that failed. |
| **Ready to Deploy** | Number of deployments that are ready to be deployed. |
| **Source** | Origin of the model: File (uploaded locally), Platform Hosted, or Hugging Face. |

<img src="../images/open_source_models_new.png" alt="Open-source models table" title="Open-source models table"/>

Selecting a model opens its **Deployments** page, where you can view and manage all related deployments.


## Managing Model Deployments

Each model can have multiple deployments, which are tracked independently. The Deployments page displays all deployments of a selected model along with the following details:

| Field | Description |
|:------ |:------ |
| <b>Deployment Name</b> | Name given by the user during deployment. |
| <b>Deployment ID</b> | System-generated ID (not editable). |
| <b>Status</b> | The status of deployment: Deploying, Optimizing, Failed, Ready to Deploy, or Deployed. </ul> |
| <b>Tags</b> | Labels associated with the deployment. |
| <b>Added By</b> | User who performed the deployment. |
| <b>Added On</b> | Date and time of deployment. |
| <b>Actions</b> | <b>Copy cURL</b> – Copies the cURL command for invoking this deployment.<br /> <b>Manage API Keys</b> – Opens the API key management tab.<br /> <b>Re-trigger</b> – Restarts the deployment (Option available only if it has failed or stopped). |

<img src="../images/open-source_deployment_listing_view.png" alt="Open-source models table" title="Open-source models table"/>


## Deployment Details

Selecting a specific deployment on the Deployment page opens its detail view, where you can view and manage the configuration, endpoint, and API keys for that deployment.

- **[Model Endpoint](../open-source-models/view-the-generated-api-endpoint.md)** – View or manage the live endpoint; re-deploy if needed.
- **[API Keys](../open-source-models/generate-an-api-key-open-source.md)** – Generate and manage keys scoped to this deployment. API keys are isolated per deployment for secure access control.
- **[Configurations](../open-source-models/configure-your-open-source-model.md)** – Edit the description and tags, or undeploy/delete the model.

<img src="../images/model_endpoint_new.png" alt="Model API Endpoint" title="Model API Endpoint"/>
