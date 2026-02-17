# Enable Hugging Face

The Platform seamlessly integrates with Hugging Face, allowing you to incorporate cutting-edge text generation and text-to-text generation models. Any publicly available Hugging Face model can be swiftly deployed via the Platform with minimal effort. To utilize private or exclusive Hugging Face models, you can effortlessly establish a connection by supplying your Hugging Face access tokens. This facilitates the Platform in unleashing the complete capabilities of your Hugging Face account, regardless of whether you possess public or private assets.

**To integrate with your hugging face account, follow these steps**:

1. Log in to your account and click **Autonomous Agents** from the list of modules.
2. Click **Settings** on the top navigation bar.
2. Click **Integrations** on the left menu.

    <img src="../images/navigate-to-settings.png" alt="Navigate to Settings" title="Navigate to Settings" style="border: 1px solid gray; zoom:80%;"/>

3. Click the **Hugging Face** option from the list of Integrations. The Hugging Face section is expanded.

    <img src="../images/add-hugging-face-connection.png" alt="Add Hugging Face Connection" title="Add Hugging Face Connection" style="border: 1px solid gray; zoom:80%;"/>

4. Click **Add connection**. The **Hugging Face** dialog is displayed.

    <img src="../images/hugging-face-connection.png" alt="Hugging Face Connection" title="Hugging Face Connection" style="border: 1px solid gray; zoom:60%;"/>

5. Enter the following details in the dialog to create a connection:
    * Provide a **Connection name**.
    * Enter an **Access token** which is a unique identifier associated with your Hugging Face account.
1. Click **Confirm** to create a connection.


## Testing your connection to Hugging Face

You can test your connection after you provide the details to verify the accuracy of the details.

**Steps To Test The Connection**

1. Click the **Test** button on the **Hugging Face** dialog.

    <img src="../images/test-hugging-face-connection.png" alt="Test Hugging Face Connection" title="Test Hugging Face Connection" style="border: 1px solid gray; zoom:60%;"/>

    Once the connection is tested, you will receive feedback information.

1. If the connection is successful, you can click **Confirm** and complete the connection process.
2. If the connection fails, you can verify the details entered or cancel the set-up process.
3. You can test the connection by clicking the **▶** icon on the connections list.

    !!! note

        If the connection fails a red icon is displayed corresponding to the name of the connection on the Connections list.


1. Hover over the connection name and click the three dots icon for **Connection name**. You can edit or delete a connection as required.

    !!! note

        * Once the Hugging Face connection is completed, you can see your connection name in the drop-down box while selecting and deploying an Open-source model.  For more information about selecting and deploying, see [Select and Deploy an Open-Source Model](../../models/open-source-models/select-and-deploy-an-open-source-model.md).

        * If you delete the Hugging Face connection used for the model's deployment, the system will ask you to select a new connection on redeployment. 
