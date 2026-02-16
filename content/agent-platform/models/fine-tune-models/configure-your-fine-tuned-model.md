# Configure your Fine-Tuned Model

On the Configurations page, you can edit the model name and description, add tags, adjust the model endpoint timeout duration, undeploy, or delete the model.

<img src="../images/configure-fine-tuned-model-1.png" alt="Configure Fine-Tuned Model" title="Configure Fine-Tuned Model" style="border: 1px solid gray; zoom:80%;">

## Model Endpoint Timeout

You can configure a specific timeout for your model's endpoint. Enter the timeout duration from the allowed range - 30 to 180 seconds (3 minutes). The default is 60 Seconds (1 minute). If the request is't completed within the specified time frame, a timeout error will be triggered for the endpoint.

!!! note 

    Timeout precedence: Tool timeout > Node timeout > Model timeout.


## Undeploy the Model 

You can undeploy the model if it's no longer in use. Undeploying the model will result in an immediate disconnection from all active instances. Click **Proceed to undeploy** on the Configurations page and follow the on-screen instructions.

## Delete the Model

You can delete an undeployed model. Deleting the model will remove all the associated data. Click **Proceed to delete** on the Configurations page and follow the on-screen instructions.
