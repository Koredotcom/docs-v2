The **Third Party Configuration** section enables you to manage app configuration parameters (such as QueueIdentifier and custom data) within an embedded Agent AI app. This enables dynamic iframe URL generation for third-party CCaaS/CRM platforms, eliminating the need for a separate configuration within the third-party desktop. This document explains the process of configuring, editing, and deleting third party integrations.

## Configure a Third Party Integration

This section explains the process of configuring a third party integration. 

1. Sign in to **Agent AI**. 
2. Go to **Configuration** > **System Setup** > **Third Party Configuration**. 
3. Click **+ New Record**. 
<img src="../third-party-configuration-images/new-record.png" alt="new-record" title="new-record" style="border: 1px solid gray; zoom:80%;"> 

4. Enter values as per the following:
    * **Name**: Name of the record.
    * **Description**: A brief description about the record.
    * **Queue Identifier**: Queue or skill name. You can enter multiple queue or skill names by pressing the **Enter** key. 

        !!! note 
            The Queue Identifier value must be unique at the account level, and it’s a string.  

        <img src="../third-party-configuration-images/create-record.png" alt="create-record" title="create-record" style="border: 1px solid gray; zoom:80%;">  

5. Click **Next**. 
6. Click **+ New Value Pair** to define your key-value pair. 
7. Select a key from the **Key 1** list and enter its value in the **Value 1** field. You can create multiple key-value pairs (such as Key 2, Key 3) by clicking **+ New Value Pair**. 
    * To delete a key, click the “delete” button against it.  
    <img src="../third-party-configuration-images/add-values.png" alt="add-values" title="add-values" style="border: 1px solid gray; zoom:80%;"> 

8. Click **Create**. 

### Field Description - Configure Value

<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Definition</strong>
   </td>
  </tr>
  <tr>
   <td>CustomDataConfig
   </td>
   <td>JSON object containing the necessary keys and xpath (paths to locate the value in <a href="https://developer.genesys.cloud/devapps/api-explorer#get-api-v2-conversations--conversationId-">Genesys Conversation API result JSON object</a>). It is passed to the Agent AI widget during runtime and is available in the context object.
   </td>
  </tr>
  <tr>
   <td>SecureCustomDataConfig
   </td>
   <td>JSON object containing the necessary keys and xpath (paths to locate the value in <a href="https://developer.genesys.cloud/devapps/api-explorer#get-api-v2-conversations--conversationId-">Genesys Conversation API result JSON object</a>). It is securely passed to the Agent AI widget during runtime and is available in the context object.
   </td>
  </tr>
  <tr>
   <td>AudiohookEnabled
   </td>
   <td>A setting or flag indicating whether Kore audio processing is enabled for the app. It’s a boolean value (specific to Genesys desktop).
   </td>
  </tr>
  <tr>
   <td>AppLanguageCode
   </td>
   <td>Specifies the language and locale the app should use during interaction.
   </td>
  </tr>
  <tr>
   <td>Value
   </td>
   <td>The values should be <strong>base64</strong> encoded.
   </td>
  </tr>
</table>

## Edit or Delete a Record

This section explains the steps to edit or delete an existing record.

1. Sign in to **Agent AI**. 
2. Go to **Configuration** > **System Setup** > **Third Party Configuration**.
3. Click the “vertical ellipsis" against a record you want to edit or delete, as in the following screenshot:  
<img src="../third-party-configuration-images/edit-delete-record.png" alt="edit-delete-record" title="edit-delete-record" style="border: 1px solid gray; zoom:80%;"> 

    * If you click **Edit**, make the updates and click **Update**.
    * If you click **Delete**, the following confirmation message appears:  
    <img src="../third-party-configuration-images/delete-record.png" alt="delete-record" title="delete-record" style="border: 1px solid gray; zoom:80%;"> 

    * Click the **Delete** button again to confirm deletion. 