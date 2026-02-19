# View API Endpoint & Deployment History

## API Endpoint

After the model is deployed, the API endpoint is generated which implies that your fine-tuned model is ready for inferencing externally and across the other sections in AI for Process.

!!! note

    You will receive an email notification after your model deployment is completed and an API is generated and ready to use.

Steps to view the API Endpoint:

1. Go to **Models** > **Fine-tuned models** and click the required model from the list. The model's Overview page is displayed. Click **Model Endpoint** in the left navigation.

2. Click the **Copy** icon to copy and share the API Endpoint.  
<img src="../images/view-generated-api-endpoint.png" alt="Generated API Endpoint" title="Generate API Endpoint" style="border: 1px solid gray; zoom:80%;"/>

The API endpoint is available in 3 formats. You can copy and use the same as required.

### API Endpoint Use Case

You can use the deployed fine-tuned model in AI for Process for the following use cases:

* In the Prompt Playground to compare prompts against commercial, open-source, or any other fine-tune model.

* In a workflow in the workflow builder via the AI Node.

## Deployment History


The deployment history table tracks the complete lifecycle of the model, offering detailed information for each version, such as the deployment name, timestamp, deployment duration, the individual who performed the deployment, and other relevant details. This table provides a comprehensive view of the model’s evolution, helping users understand changes and updates over time.

After deploying a model, you can modify its parameters and redeploy the updated version. You can also edit the deployment name, but on redeployment, the system will retain the original name. This ensures a clear and organized record of all model versions and their respective changes.

The system automatically appends a version number to the original deployment name and increments it with each subsequent redeployment.
For example, if a model named "Flan T5" is deployed for the first time, it will be named "Flan T5_v1." Even if you edit the deployment name, subsequent redeployments will continue with the original name, resulting in "Flan T5_v2," "Flan T5_v3," and so on.

The most recent deployment is marked with a green tick next to the model name. You can click on any deployment version to view its details.

  
<img src="../images/deployment-history.png" alt="Deployment History" title="Deployment History" style="border: 1px solid gray; zoom:80%;"/>

**General details**: This section displays the model's basic information, such as its name, description, tags, optimization technique, parameters, the hardware used, and deployment duration.

**Deployment details**: This section includes who deployed the model, the start and end timestamps of deployment, the deployment duration, and its status (Success, Failed, or Deploying). In case of a failed deployment, hover over “Status” to view the reason for the failure.

**Un-deployment details**: This section appears only if the model is undeployed either automatically by the system or manually. In the case of manual un-deployment, the person who initiated the un-deployment, along with the start and end timestamps of the process, is displayed.
