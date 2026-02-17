# Freshservice Connector 

Freshservice is a modern IT service management and team collaboration platform designed to help organizations streamline IT operations, manage incidents, and provide exceptional support efficiently. You can use the Search AI connector for Freshservice to ingest and index content from your Freshservice account and set up seamless search capabilities.

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
   <td>Solution Articles
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


To enable integration between Search AI and Freshservice and ingestion of content from Freshservice account, 

* Generate an API Key for the Freshservice account
* Configure the Freshservice Connector in Search AI


## Generate API Key

Search AI uses Freshservice APIs to access the content. Hence it requires the API key to set up this communication. Follow the steps listed below to generate the API key.

1. Sign in to Your Freshservice Account.
2. Access Your Profile Settings. Click on your profile initials in the top-right corner of the Freshservice dashboard and select **Profile Settings**.
3. In the **Profile Settings** page, find the **API Key** section under your user information.Copy the API Key and ensure it is secure, as it provides access to your Freshservice account.

**Note:** If you are unable to find the API key or it is disabled, ensure that the user role has the necessary permissions. An admin can enable it under permissions for the user (agent). 

## Configure Freshservice Connector in Search AI

Go to the **Authorization page** of the Freshservice Connector , provide the following configuration fields, and click **Connect**. 



* **Name** - Unique name for the connector.
* **Host URL** - Provide the host URL.
* **API Key** - The alphabetic API key generated above.   


## Ingesting Content

After successfully connecting the Search AI connector to the Freshservice account, go to the **Configuration** tab and set up content synchronization. For immediate sync, use the **Sync Now** option and the **Schedule Sync** option to set up a scheduler to sync the content in the future. 

Upon sync, Search AI ingests **Solution articles** from the Freshservice account**.**

Additional information about the articles, such as author, folder, category, etc., is captured in the metadata fields of the content. 

Note: Articles in sub-folders within a folder aren't supported. 


## RACL Support

The visibility of published articles ingested from Freshservice into the Search AI platform depends on the visibility settings of the folder they belong to. All files within a folder inherit the visibility configuration of the folder. Below are the possible folder visibility configurations in Freshservice and how they map to the `sys_racl` field in the ingested content.

Note: For the Freshservice account, the users associated with a group in Freshservice are automatically added to the corresponding permission entity in Search AI. However, if there is any update to the groups after the ingestion of data in Search AI, use the Permission Entity APIs to update the associations. 

### 1. All Users

Files in these folders are visible to everyone.

* <code>sys_racl</code></strong>: Set to <code>*</code>, meaning unrestricted access.


---


### 2. Logged-In Users

Files in these folders are accessible to all logged-in users, including agents and requesters.



* <code>sys_racl</code></strong>: Set to the domain name of the Freshservice account.

<strong>Example</strong>:
If the domain is <code>mydomaindotai</code>, the <code>sys_racl</code> field appears as:



```
"sys_racl": ["mydomaindotai"]
```
---


### 3. Agents Only

Access to files in these folders is restricted to agents.



* <code>sys_racl</code></strong>: Set to <code>${domain}_agents</code>.

<strong>Example</strong>: 
If the domain is <code>mydomaindotai</code>, the <code>sys_racl</code> field appears as: 
```
"sys_racl": ["mydomaindotai_agents"]
```



---


### **4. Departments**

Files are accessible only to members of specific departments. A permission entity is created corresponding to each department. 

* <code>sys_racl</code></strong>: Contains an array of department IDs.

<strong>Example</strong>: 
```
"sys_racl": ["department_id1", "department_id2"]
```



---


### **5. Agent Groups**

Access is restricted to specific agent groups. A permission entity is created corresponding to each agent group in Freshservice. 

* <code>sys_racl</code></strong>: Contains an array of agent group IDs.

<strong>Example</strong>: 
```
"sys_racl": ["agent_group1", "agent_group2"]
```



---


### **6. Requester Groups**

Files are accessible only to specific requester groups.



* <code>sys_racl</code></strong>: Contains an array of requester group IDs.

<strong>Example</strong>: 
```
"sys_racl": ["requester_group1", "requester_group2"]
```



---


### **7. Agents by Workspace**

Files are restricted to agents within a specific workspace.



* <code>sys_racl</code></strong>: Contains the workspace ID.

<strong>Example</strong>: 
```
"sys_racl": ["workspace_id"]
```

