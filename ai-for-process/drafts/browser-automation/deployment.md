# Deploying Browser Automation Experiments

Before you create, configure, and publish a browser automation simulation for an experiment, deploying it using a pod assigns the required hardware resources to support the automation during the design phase. Once deployed, the automation is published and becomes available in the Browser Automation node within workflows, where all defined static and dynamic variables and configuration parameters can be accessed.

Deployment also enables the controlled and reliable promotion of cross-app workflows and agents from development to staging and production. It supports versioning, approvals, validation checks, and rollback mechanisms to ensure changes are safe, auditable, and easy to manage.

The Browser Automation Deployment feature allows you to:

* Deploy a pod for a browser automation experiment
* Customize resource allocation for deployments
* Set auto-scaling limits to ensure optimal performance
* Review deployed and ready-to-deploy pods
* View details of the latest and previous deployment versions
* Re-deploy pods that were previously undeployed
* Undeploy or delete pods
* Search for a deployment

!!! note

    Billing and credit usage for Browser Automation are calculated based on the deployed pods and hardware configuration.

## Access Browser Automation Deployment

To access the feature, follow the steps below:

1. Log in → In the AI for Process Modules top menu → Click **Settings**.
2. On the left navigation menu → Click **Browser Automation** → **Deployment**.

## Deployment Summary

The feature page summarizes the following information on the pod deployment:

* **Deployment name**: The name assigned to the deployment.
* **Description**: A brief description of the deployment.
* **Status**: The current deployment status: *Deploying*, *Deployed*, or *Ready to Deploy*.
* **Created by**: The system user who created the deployment pod.
* **Updated on**: The date the deployment was last updated.

## Deploy a Pod

Before you begin: Ensure that your account has sufficient credits to deploy a pod.

To deploy a pod, follow the steps below:

1. Click **Deploy** on the top-right corner.
2. In **General Settings**, enter the *Deployment name* and *Description*.
3. In the **Resource allocation** window, configure the following resources for your deployment.

    * **Scaling parameters**: Define the following dynamic scaling limits to optimize performance: 
        * **Min replicas**: The minimum number of pods per service. Recommended limit is 1.
        * **Max replicas**: The maximum number of pods per service. Recommended limit is 1.
        * **Auto-scaling threshold**: When the average compute load exceeds this threshold (%), the system automatically scales out by adding more pods to handle increased demand. The recommended limit is 75%.
    * **Hardware**: Select the hardware profile (No. of vCPUs) from the dropdown.

    !!! note

        When you select a hardware profile, the system displays the hourly credit consumption and profiling data.  
        It also shows the number of browser automations that can run in parallel on that hardware. Additional requests are queued.

4. Review the deployment details and accept the terms before confirming.
5. Click **Deploy** to proceed. Alternatively, save the configuration as a draft for later use or go back to modify the deployment details.

A success message is displayed once the pod is deployed. A confirmation email is also sent when the deployment completes successfully.

## Deployment-level Information

When you click a deployment entry, the following information is displayed for the pod in use:

* **Overview**: Displays the configured general and resource allocation information.
* **Deployment History**: View and compare the latest and previous pod deployment or undeployment versions by date and time. This helps track changes across versions and analyze the efficiency of each deployment.   

    The latest deployment version is marked with a green check icon.

    Click the expansion icon to view a detailed deployment summary, including *duration,* *start and end times*, *deployment time*, *status*, and more. 

    <img src="../images/deployment.png" alt="automation" title="automation" style="border: 1px solid gray; zoom:75%;">

* **Configurations**: View the deployment name and description, or do the following:

    * **Un-deploy**: This results in an immediate disconnection from all active and draft browser experiments. You can redeploy a pod if required.
    * **Delete**: Removes the pod and its data permanently from all experiments where it is deployed, affecting its usage. *Only a master admin or workspace owner can delete a pod deployment.*

    !!! note

        Deleting a pod permanently removes its resource allocation and configuration. Proceed with caution.

## Undeploy a Pod

You can undeploy a pod to temporarily disassociate it from browser experiments. To undeploy, follow the steps below:

1. Click the pod you want to undeploy on the **Deployment** page.
2. Click **Configurations** on the left menu.
3. In the **Danger Zone** section, click **Proceed to Undeploy**. 
4. Click **Un-deploy** in the confirmation window. 
A success message is displayed once the pod is undeployed. A confirmation email is also sent when the undeployment completes successfully.

## Redeploy a Pod

You can redeploy an active or undeployed pod using this feature by optionally updating the general and resource allocation details before redeployment. To redeploy, follow the steps below:

1. Click the pod you want to redeploy on the **Deployment** page.
2. Click **Re-deploy** in the top right corner, and in the confirmation window.
3. Follow the steps mentioned [here](./deployment.md#deploy-a-pod) to modify the required parameters.
4. Click **Deploy** on the *Review* page.

A success message is displayed once the pod is deployed. A confirmation email is also sent when the deployment completes successfully. The status shows *Deploying* while the deployment is in progress, and changes to *Deployed* once the deployment is complete without errors. 

