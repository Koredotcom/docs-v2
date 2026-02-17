# Azure Connector

To enable an efficient and quick search of your content available in Azure Storage, configure the Azure Storage connector in Search AI. Here’s a step-by-step guide on how to do the configuration. The configuration involves:

* Creating a Storage account in Azure and generating SAS Key for Blob Storage Access
* Configuring the Azure connector in Search AI application

<span style="text-decoration:underline;">Specifications</span>

<table>
  <tr>
   <td>Type of Repository 
   </td>
   <td>Cloud
   </td>
  </tr>
  <tr>
   <td>Extractive Answer Support
   </td>
   <td>.pdf
   </td>
  </tr>
  <tr>
   <td>Generative Answer Support
   </td>
   <td>.txt, .pdf, .rtf, .doc, .docx, .ppt, .pptx
   </td>
  </tr>
</table>

## Step 1: Create a Storage account in Azure and generate SAS Key for Blob Storage Access

* Log in to the [Azure portal](https://portal.azure.com/#home) and go to Storage Accounts.

    ![Azure Home ](images/azure/azure-portal.png "Azure Home")

* Click on **Create** to create a new storage account.

    ![Create Storage Account ](images/azure/create-storage.png "Storage Account")

* Fill in the required details for the project. You need to enter details related to security, access protocols, networking, encryption, etc. For a detailed description of the fields, [refer to this guide](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-create?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&tabs=azure-portal). After entering and reviewing the fields, click **Create**.

    ![Create Storage Account ](images/azure/account-details.png "Storage Account")

* After the creation and deployment of the account are complete, click on **Go to resource**.

    ![Resource Details ](images/azure/resource-details.png "Resource Details")

* This page gives you an overview of the storage account and allows you to perform basic operations on the account.

    ![Account Overview ](images/azure/account-overview.png "Account Overview")

* From the left navigation menu, go to **Shared access signature** and generate a SAS key. To do so, enable the following settings and click on **Generate SAS and connection string** button at the bottom.  

    ![Generate Connection String ](images/azure/generate-sas.png "Connection String")

Use the following minimum permissions:

   * **Allowed resource types**: Enable Service, Container & Object.
   * **Allowed permissions**: Read, List.

This will generate the connection string, SAS token, and blob service SAS URL. Save these fields to configure the Azure connector in Search AI. 

![Azure Connection Details](images/azure/azure-credentials.png "Azure Connection Details")

## Step 2: Configuring the Azure connector in Search AI

This step allows you to configure the Azure Storage account in SearchAI and select the set of containers from which the content will be ingested in the Search AI application. 


### Setting up Connection

Go to the **Connectors** tab, click on the **Add New Connector** option, and select **Azure Storage**.

![Connector Home](images/azure/connector-home.png "Connector Home")

On the **Authorization** tab, enter the following fields and click **Connect**.

  * Name: Name for the connector
  * Host URL: The base URL from the **blob service SAS URL** generated in the above step.
  * SAS Token: SAS token generated in the above step. 

On successful authentication, this will set up a connection with Azure storage and display the connector as **Connected**.

!!!note
    This does not trigger content syncing automatically.

### Content Synchronization 

To synchronize the content, go to the **Configurations** tab. The synchronization allows ingestion of the intended content from the Azure Storage account to the SearchAI application. You can either set up automatic synchronization or trigger a manual sync. To initiate a sync manually, click on the **Sync Now** button at the end of the page.

![Manual Sync](images/azure/manual-sync.png "Manual Sync")

You can also set up automatic synchronization that can be used to synchronize content at a specific time or at regular intervals. To do so, enable the **Schedule Sync** option. 

![Schedule Sync](images/azure/schedule-sync.png "Schedule Sync")

Set the date, time, and frequency of the sync operation. 

![Schedule Time](images/azure/schedule-time.png "Schedule Time")

You can select all the content for synchronization or select specific containers. For specific content, click on the **Select Content** link and specify the containers from which the content will be synced. Choose one or more containers, as required, and click Save.

![Select Container](images/azure/select-container.png "Select Container")

To change the selected container list at any time, click on the **Edit Selection** link and update the container list as required. 

![Edit Selected Containers](images/azure/edit-container.png "Edit selected containers")

You can view the synchronized content under the **Content** tab. The **Jobs** tab lists all the sync actions in the connector.  
