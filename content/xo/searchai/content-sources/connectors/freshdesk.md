# Freshdesk Connector 

Freshdesk is a customer support and helpdesk platform designed to help organizations efficiently manage customer queries, track tickets, and deliver exceptional support experiences. The Search AI connector for Freshdesk supports the ingestion and indexing of **Tickets**. By using the Search AI connector, you can enable advanced search functionalities that help your team quickly find relevant ticket information, improving response times and overall efficiency.

<span style="text-decoration:underline;">Specifications</span>


<table>
  <tr>
   <td>Type of Repository 
   </td>
   <td>Cloud
   </td>
  </tr>
  <tr>
   <td>Content Supported
   </td>
   <td>Tickets
   </td>
  </tr>
  <tr>
   <td>RACL Support
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Content Filtering
   </td>
   <td>No
   </td>
  </tr>
</table>


To enable integration between Search AI and Freshdesk and ingestion of content from the Freshdesk account, 

* Generate an API Key for the Freshdesk account
* Configure the Freshdesk Connector in Search AI


## Generate API Key

Search AI uses Freshdesk APIs to access the content. Hence, the API key is required to set up this communication. Follow the steps listed below to generate the API key.

1. **Log in to the Freshdesk Account.**
2. **Access Your Profile Settings.** Click on your profile initials in the top-right corner of the dashboard and select **Profile Settings**.
3. In the **Profile Settings** page, find the **API Key** section under the user information. Copy the API Key and ensure it is secure.

 
## Configure Freshdesk Connector in Search AI

Go to the **Authorization page** of the Freshdesk Connector, enter the following configuration fields, and click **Connect**. 

* **Name**- Unique name for the connector.
* **Host URL**- Provide the host URL.
* **API Key** - The alphabetic API key generated above.   


## Ingesting Content

After successfully connecting the Search AI connector to the Freshdesk account, go to the **Configuration** tab and set up content synchronization. For immediate sync, use the **Sync Now** option and the **Schedule Sync** option to set up a scheduler to sync the content in the future. 

Upon sync, Search AI ingests **Tickets** from the Freshdesk account.

Go to the Content tab to view the ingested content. The content of the tickets and important information, like status, priority, and requester email ID, are captured in the **content** field. All the other information about the ticket is captured as metadata. 


## RACL Support

The visibility of tickets is limited to the creator, requestor, the group to which the ticket belongs, and the agent allocated to look into the ticket. Hence the `sys_racl` field of a ticket typically contains:

* The email ID of the creator of the ticket is attached. 
* The email ID of the requestor. 
* The group ID of the group to which the ticket belongs. This is stored as a permission entity in the Search AI application. Use the Permission Entity APIs to associate agents to the group ID. 
* The email ID of the agent to whom the ticket is assigned. 

Example:

```json
"sys_racl": [
            "1060000312085", //Group ID
            "sarah.james@advancedmachinery.com", //Requestor ID
            "agent.sam@example.com" //Agent ID
        ]
```

