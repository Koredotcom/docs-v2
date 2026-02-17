# Enable Hugging Face

AI for Process seamlessly integrates with the Hugging Face platform, allowing you to incorporate cutting-edge text generation and text-to-text generation models. Any publicly available Hugging Face model can be swiftly deployed via AI for Process with minimal effort. To utilize private or exclusive Hugging Face models, you can effortlessly establish a connection by supplying your Hugging Face access tokens. This facilitates AI for Process in unleashing the complete capabilities of your Hugging Face account, regardless of whether you possess public or private assets.

**To integrate with your hugging face account, follow these steps**:

1. Log in → In AI for Process Modules top menu → Click **Settings**.
   <img src="../images/aip-settings-access.png" alt="access settings" title="access settings" style="border: 1px solid gray; zoom:75%;">

2. Click **Integrations** on the left menu.
3. Click the **Hugging Face** option from the list of Integrations. The Hugging Face section is expanded.

    <img src="../images/add-hugging-face-connection.png" alt="Add Hugging Face Connection" title="Add Hugging Face Connection" style="border: 1px solid gray; zoom:80%;">

4. Click **Add connection**. The **Hugging Face** dialog is displayed.

    <img src="../images/hugging-face-connection.png" alt="Hugging Face Connection" title="Hugging Face Connection" style="border: 1px solid gray; zoom:60%;">

5. Enter the following details in the dialog to create a connection:
    * Provide a **Connection name**.
    * Enter an **Access token** which is a unique identifier associated with your Hugging Face account.

6. Click **Confirm** to create a connection.

## Testing your connection to Hugging Face

You can test your connection after you provide the details to verify the accuracy of the details.

**To test your connection, follow these steps**:

1. Click the **Test** button on the **Hugging Face** dialog.

    <img src="../images/test-hugging-face-connection.png" alt="Test Hugging Face Connection" title="Test Hugging Face Connection" style="border: 1px solid gray; zoom:60%;">

    Once the connection is tested, you will receive feedback information.

1. If the connection is successful, you can click **Confirm** and complete the connection process.
2. If the connection fails, you can verify the details entered or cancel the set-up process.
3. You can test the connection by clicking the **Play** button on the connections list.

    <img src="../images/play-button-hugging-face.png" alt="Play Button Hugging Face" title="Play Button Hugging Face" style="border: 1px solid gray; zoom:80%;">

    !!! note

        If the connection fails a red icon is displayed corresponding to the name of the connection on the Connections list.


1. Hover over the connection name and click the three dots icon corresponding to the **Connection name**. The list of options is displayed. Click **Edit** to modify the connection details and **Delete** to delete the connection.

     <img src="../images/manage-hugging-face-connection.png" alt="Manage Hugging Face Connection" title="Manage Hugging Face Connection" style="border: 1px solid gray; zoom:80%;">

    !!! note

        * Once the Hugging Face connection is completed, you can see your connection name in the drop-down box while selecting and deploying an Open-source model.  For more information about selecting and deploying, see [Select and Deploy an Open-Source Model](../../models/open-source-models/select-and-deploy-an-open-source-model.md).

        * If you delete the Hugging Face connection used for the model's deployment, the system will ask you to select a new connection on redeployment. 

