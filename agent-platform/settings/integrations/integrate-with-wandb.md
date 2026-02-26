# Integrate with Weights and Biases

Connecting with Weights and Biases (WandB) allows users to link to the platform, ensuring that the fine-tuning data associated with the model being refined in the Platform is seamlessly transmitted to the WandB console for additional analytics.

**To integrate with your Weights and Biases (WandB) account, follow these steps**:


1. Click the **Settings** icon on the top navigation bar. The **Integrations** page is displayed.


    ![Navigate to Settings](./images/navigate-to-settings.png "Navigate to Settings")



1. Click the **Weights & Biases** option from the list of Integrations. The Weights & Biases section is expanded.


    ![Add W&B Connection](./images/add-w&b-connection.png "Add W&B Connection")



1. Click **Add connection**. The **Weights & Biases** dialog is displayed.


    ![WandB Connection](./images/wandb-connection.png "WandB Connection")



1. Enter the following details in the dialog to create a connection:
    * Provide a **Connection name**.
    * Enter an **API key** which is a unique identifier associated with your WandB account.
1. Click **Confirm** to create a connection.


## Testing your connection to Weights & Biases

You can test your connection after you provide the details to verify the accuracy of the details.

**To test your connection, follow these steps**:

1. Click the **Test** button on the **Weights & Biases** dialog.


    ![Test WandB Connection](./images/test-wandb-connection.png "Test WandB Connection")



    Once the connection is tested, you will receive feedback information.

1. If the connection is successful, you can click **Confirm** and complete the connection process.
2. If the connection fails, you can verify the details entered or cancel the set-up process.
3. You can test the connection by clicking the **▶** icon on the connections list.

    <Note> If the connection fails a red icon is displayed corresponding to the name of the connection on the Connections list. </Note>


1. Hover over the connection name and click the three dots icon corresponding to the **Connection name**. The list of options is displayed. Click **Edit** to modify the connection details and **Delete** to delete the connection.


    ![Manage WandB Connection](./images/manage-wandb-connection.png "Manage WandB Connection")




<Note> Once the WandB connection is completed, you can see your connection name in the drop-down box in the **Create a fine-tuned model** wizard in the **Weights and Biases** section.  For more information about the fine-tuning wizard, see [Create a Fine-Tuned Model](../../models/fine-tune-models/create-a-fine-tuned-model.md). </Note>
