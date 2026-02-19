# Integrate with Weights and Biases

Connecting with Weights and Biases (WandB) allows users to link to the platform, ensuring that the fine-tuning data associated with the model being refined in AI for Process is seamlessly transmitted to the WandB console for additional analytics.

**To integrate with your Weights and Biases (WandB) account, follow these steps**:


1. Log in → In AI for Process Modules top menu → Click **Settings**.
   <img src="../images/aip-settings-access.png" alt="access settings" title="access settings" style="border: 1px solid gray; zoom:75%;">

2. Click **Integrations** on the left menu.

3. Click the **Weights & Biases** option from the list of Integrations. The Weights & Biases section is expanded.

    <img src="../images/add-w&b-connection.png" alt="Add W&B Connection" title="Add W&B Connection" style="border: 1px solid gray; zoom:80%;"/>

1. Click **Add connection**. The **Weights & Biases** dialog is displayed.

    <img src="../images/wandb-connection.png" alt="WandB Connection" title="WandB Connection" style="border: 1px solid gray; zoom:60%;">

1. Enter the following details in the dialog to create a connection:
    * Provide a **Connection name**.
    * Enter an **API key** which is a unique identifier associated with your WandB account.
1. Click **Confirm** to create a connection.


## **Testing your connection to Weights & Biases**

You can test your connection after you provide the details to verify the accuracy of the details.

**To test your connection, follow these steps**:

1. Click the **Test** button on the **Weights & Biases** dialog.

    <img src="../images/test-wandb-connection.png" alt="Test WandB Connection" title="Test WandB Connection" style="border: 1px solid gray; zoom:60%;">

    Once the connection is tested, you will receive feedback information.

1. If the connection is successful, you can click **Confirm** and complete the connection process.
2. If the connection fails, you can verify the details entered or cancel the set-up process.
3. You can test the connection by clicking the **Play** button on the connections list.

    <img src="../images/play-button-wandb.png" alt="Play Button WandB" title="Play Button WandB" style="border: 1px solid gray; zoom:80%;"/>

    !!! note

        If the connection fails a red icon is displayed corresponding to the name of the connection on the Connections list.


1. Hover over the connection name and click the three dots icon corresponding to the **Connection name**. The list of options is displayed. Click **Edit** to modify the connection details and **Delete** to delete the connection.

    <img src="../images/manage-wandb-connection.png" alt="Manage WandB Connection" title="Manage WandB Connection" style="border: 1px solid gray; zoom:80%;"/>


!!! note

    Once the WandB connection is completed, you can see your connection name in the drop-down box in the **Create a fine-tuned model** wizard in the **Weights and Biases** section.  For more information about the fine-tuning wizard, see [Create a Fine-Tuned Model](../../models/fine-tune-models/create-a-fine-tuned-model.md).

