# Importing a Model

Agent Platform enables users to import base and adapter model files from their local machines into the platform. For base models, users can directly upload model files and import them into the platform for further use. For adapter models, users must first select a compatible base model and then upload and import the adapter model file. Once imported, these models become available for deployment within the platform.

This process enables users to seamlessly integrate local models into the platform, ensuring compatibility and readiness for deployment. It facilitates efficient management and configuration,  just like other open-source models, and streamlines workflows within the platform.

!!! note

    **Base Model**: A base model is a pre-trained model that can be used for general tasks. It’s already trained on a large dataset and can be used as-is or fine-tuned for specific tasks.  
    
    **Adapter Model**: An adapter model is a smaller model that works with a base model to make it more suited for a specific task or dataset. It doesn’t need to retrain the entire base model but adjusts it for new purposes. To import an adapter model in the platform, it is necessary to specify the related base model.


### Best Practices

1. **Ensure model compatibility**: When importing an adapter model, always verify that it is compatible with a supported base model. The system informs you that a base model is required, so ensure that you select a base model from the Platform-hosted list before proceeding with the adapter model upload.
2. **Validate model files before importing**: Always check your model's file extension and format before uploading. The system validates the model file during the import process, so uploading a valid file upfront will prevent unnecessary errors and delays.
3. **One model at a time**: To avoid conflicts or issues with multiple simultaneous imports, import one model file at a time. Ensure that each model (whether base or adapter) is fully imported and validated before proceeding to the next.
4. **Monitor import and validation status**: Track the model's status during the import and validation process. If an error occurs, the system provides details about the failure. Use this information to address issues quickly, either by correcting the file or re-uploading a new one.
5. **Prepare for deployment after validation**: Once the model is successfully imported and validated, it is marked as ‘Ready to deploy’. Before deploying, ensure all necessary configurations, such as description, tags, and API keys, are set up. Also, familiarize yourself with the deployment process to ensure a smooth transition to production.
6. **Avoid interruptions during import:** To ensure a smooth import process, refrain from switching accounts or refreshing the page, as these actions may interrupt the import.


### Prerequisites

* The user must be logged in to Agent Platform and have the necessary permissions to import models.
* The model file to be imported must be available on the user’s local machine.


## Importing Base Models into the Platform

**Steps to import a base model into the Platform:**

1. Go to **Models** > **Open-source models** and click the **Import model** button.
2. On the **Import model** dialog, choose the **Base Model** tab.  
    <img src="../images/base_model.png" alt="Base Model" title="Base Model" style="border: 1px solid gray; zoom:80%;"/>

3. **Upload the model file**: In the **Import base model file** section, drag and drop the model file into the designated upload area, or use the **Upload file** link to browse and select the file from your local machine. Ensure the file extension matches the supported model formats.  
Click ‘Instructions’ to view the detailed guidelines for the supported format and the necessary files to include in the zip folder for both base and adapter models.

4. **File Validation**: The system validates the file’s extension.
    * If the file is valid, the file name appears and the **Import** button is enabled.
    * If the file fails validation, an error message appears detailing why the file is invalid. You must correct the file before proceeding.
5. **Import the model**: Click the **Import** button to start the import process.

    The system displays the model name in the Open-Source Models dashboard with the following status updates as the import progresses:

    * **Importing**: When the file is being uploaded.
    * **Validating**: When the file is being validated.
    * **Import Failed**: If any errors occur during the import or validation process, the system displays the error details. You can choose to fix the issue and re-import the model or cancel the process.
    * **Ready to Deploy**: When the model is successfully imported and validated.  

6. Once the model is ready for deployment, you can click the row in the dashboard and manage the model’s deployment settings in the following sections:
    * **Configurations**: Edit the model’s description and tags.
    * **API keys**: Configure the API key and deployment settings.
    * **Model Endpoint**: Start the deployment.


## Importing Adapter Models into the Platform

**Steps to import an adapter model into the Platform:**

1. Go to **Models** > **Open-source models** and click the **Import model** button.
2. On the **Import model** dialog, choose the **Adapter Model** tab.  
    <img src="../images/adapter_model.png" alt="Adapter Model" title="Adapter Model" style="border: 1px solid gray; zoom:80%;"/>

3. **Select a base model**: Browse through the list of available base models and choose one that supports the adapter model you're importing. Once selected, the base model is associated with the adapter model.  
Click ‘Instructions’ to view the detailed guidelines for the supported format and the necessary files to include in the zip folder for both base and adapter models.

    <img src="../images/adapter_model_details.png" alt="Adapter Model" title="Adapter Model" style="border: 1px solid gray; zoom:80%;"/>  

4. **Upload the model file**: In the **Import base model file** section, drag and drop the model file into the designated upload area, or use the **Upload file** link to browse and select the file from your local machine. Ensure the file extension matches the supported model formats.
5. **File Validation**: The system validates the file’s extension.
    * If the file is valid, the file name appears and the **Import** button is enabled.
    * If the file fails validation, an error message appears detailing why the file is invalid. You must correct the file before proceeding. 
6. **Import the model**: After the adapter model file is validated and the base model is selected, click the **Import** button to start the import process. The system displays the model name in the Open-Source Models dashboard with the following status updates as the import progresses:
    * **Importing:** When the file is being uploaded.
    * **Validating**: When the file is being validated.
    * **Import Failed**: If any errors occur during the import or validation process, the system displays the error details. You can fix the issue, re-import the model, or cancel the process.
    * **Ready to Deploy**: When the model is successfully imported and validated.
7. Once the model is ready for deployment, you can click the row in the dashboard and manage the model’s deployment settings in the following sections:
    * **Configurations**: Edit the model’s description and tags.
    * **API keys**: Configure the API key and deployment settings.
    * **Model Endpoint**: Start the deployment.


## Key Considerations

* **Model details**: Once the model is ready, you can modify its description and tags. However, the model name remains uneditable, as it is derived from the file name.
* **Deployment and management**: All actions related to deployment, re-deployment, and failure management will follow the same process as existing open-source models. After deployment, the model’s status, re-deployment history, API endpoint, and related toasts or email notifications will be the same as those for other open-source models.
* **Manage deletion**:
    * If the model has not been deployed or while the model is being imported, you can delete it using the Delete option from the three-dot menu on the dashboard.
    * If the model is deployed, you can trigger re-deployment or view the deployment history.
* **Errors during model import**: If any errors occur during model import, such as invalid file formats, upload failures, extraction issues, or compatibility problems, refer to the error message displayed by the system for guidance on resolving the issue.
* **Further fine-tuning:** Imported models can be fine-tuned further and deployed as individual units. During fine-tuning, the imported models are included in the Models hub menu in the Base model section. 


!!! note

    The deployconfig.json file is added to the model export. If the same model is later imported into the platform, the deployment details from this file will be automatically retrieved and pre-filled in the deployment wizard. This includes the previously selected optimization techniques, hyperparameters, hardware settings, and scaling configuration.
